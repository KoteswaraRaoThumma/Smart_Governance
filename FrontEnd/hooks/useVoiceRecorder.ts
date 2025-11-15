'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

interface UseVoiceRecorderOptions {
  onTranscriptComplete?: (text: string) => void
  language?: string
  autoStopAfterSilence?: number // milliseconds of silence before auto-stopping
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean
  interimResults: boolean
  lang: string
  start(): void
  stop(): void
  abort(): void
  onresult: ((event: SpeechRecognitionEvent) => void) | null
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null
  onend: (() => void) | null
  onstart: (() => void) | null
}

interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList
  resultIndex: number
}

interface SpeechRecognitionErrorEvent {
  error: string
  message: string
}

declare global {
  interface Window {
    SpeechRecognition: {
      new (): SpeechRecognition
    }
    webkitSpeechRecognition: {
      new (): SpeechRecognition
    }
  }
}

export function useVoiceRecorder({
  onTranscriptComplete,
  language = 'en-US',
  autoStopAfterSilence = 2000, // 2 seconds of silence
}: UseVoiceRecorderOptions = {}) {
  const [isRecording, setIsRecording] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [interimTranscript, setInterimTranscript] = useState('')
  const [error, setError] = useState<string | null>(null)
  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const silenceTimerRef = useRef<NodeJS.Timeout | null>(null)
  const lastSpeechTimeRef = useRef<number>(Date.now())

  // Check if Speech Recognition is available
  const isSupported = typeof window !== 'undefined' && (
    'SpeechRecognition' in window || 'webkitSpeechRecognition' in window
  )

  // Initialize Speech Recognition
  useEffect(() => {
    if (!isSupported) return

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    recognitionRef.current = new SpeechRecognition()
    
    if (recognitionRef.current) {
      recognitionRef.current.continuous = true
      recognitionRef.current.interimResults = true
      recognitionRef.current.lang = language

      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        let interim = ''
        let final = ''

        // Reset silence timer on new speech
        lastSpeechTimeRef.current = Date.now()
        if (silenceTimerRef.current) {
          clearTimeout(silenceTimerRef.current)
        }

        // Process all results
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript
          if (event.results[i].isFinal) {
            final += transcript + ' '
          } else {
            interim += transcript
          }
        }

        // Update transcripts
        if (final) {
          setTranscript((prev) => prev + final)
          setInterimTranscript('')
        }
        if (interim) {
          setInterimTranscript(interim)
        }

        // Start silence timer for auto-stop
        if (final || interim) {
          silenceTimerRef.current = setTimeout(() => {
            if (isRecording) {
              stopRecording()
            }
          }, autoStopAfterSilence)
        }
      }

      recognitionRef.current.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error('Speech recognition error:', event.error)
        setError(`Recognition error: ${event.error}`)
        setIsRecording(false)
        setIsProcessing(false)
      }

      recognitionRef.current.onend = () => {
        if (isRecording) {
          // Auto-restart if still recording (for continuous recognition)
          try {
            recognitionRef.current?.start()
          } catch (e) {
            // Already started or error
          }
        } else {
          setIsProcessing(false)
        }
      }

      recognitionRef.current.onstart = () => {
        setError(null)
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort()
      }
      if (silenceTimerRef.current) {
        clearTimeout(silenceTimerRef.current)
      }
    }
  }, [language, autoStopAfterSilence, isSupported])

  const startRecording = useCallback(() => {
    if (!isSupported) {
      setError('Speech recognition is not supported in this browser')
      return
    }

    if (!recognitionRef.current) {
      setError('Speech recognition not initialized')
      return
    }

    try {
      setTranscript('')
      setInterimTranscript('')
      setError(null)
      setIsRecording(true)
      setIsProcessing(true)
      lastSpeechTimeRef.current = Date.now()
      recognitionRef.current.start()
    } catch (error) {
      console.error('Error starting recording:', error)
      setError('Failed to start recording. Please try again.')
      setIsRecording(false)
      setIsProcessing(false)
    }
  }, [isSupported])

  const stopRecording = useCallback(() => {
    if (recognitionRef.current && isRecording) {
      try {
        recognitionRef.current.stop()
      } catch (error) {
        console.error('Error stopping recording:', error)
      }
    }

    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current)
      silenceTimerRef.current = null
    }

    setIsRecording(false)
    setIsProcessing(true)

    // Finalize transcript after a brief delay
    setTimeout(() => {
      const finalTranscript = transcript + (interimTranscript ? interimTranscript : '')
      if (finalTranscript.trim() && onTranscriptComplete) {
        onTranscriptComplete(finalTranscript.trim())
      }
      setInterimTranscript('')
      setIsProcessing(false)
    }, 500)
  }, [isRecording, transcript, interimTranscript, onTranscriptComplete])

  const toggleRecording = useCallback(() => {
    if (isRecording) {
      stopRecording()
    } else {
      startRecording()
    }
  }, [isRecording, startRecording, stopRecording])

  const clearTranscript = useCallback(() => {
    setTranscript('')
    setInterimTranscript('')
    setError(null)
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort()
      }
      if (silenceTimerRef.current) {
        clearTimeout(silenceTimerRef.current)
      }
    }
  }, [])

  return {
    isRecording,
    isProcessing,
    transcript: transcript + (interimTranscript ? interimTranscript : ''),
    interimTranscript,
    error,
    isSupported,
    startRecording,
    stopRecording,
    toggleRecording,
    clearTranscript,
  }
}

