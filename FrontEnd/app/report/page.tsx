'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import { Upload, Mic, Image as ImageIcon, MapPin, CheckCircle2, X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useVoiceRecorder } from '@/hooks/useVoiceRecorder'

export default function ReportIssuePage() {
  const router = useRouter()
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    villageName: '',
  })
  const [files, setFiles] = useState<File[]>([])
  
  // Map language code to Speech Recognition language codes
  const getSpeechLanguage = () => {
    switch (language) {
      case 'te': return 'te-IN' // Telugu
      case 'hi': return 'hi-IN' // Hindi
      case 'en': return 'en-US' // English
      default: return 'en-US'
    }
  }

  const {
    isRecording,
    isProcessing,
    transcript,
    error: voiceError,
    isSupported,
    startRecording,
    stopRecording,
    toggleRecording,
    clearTranscript,
  } = useVoiceRecorder({
    onTranscriptComplete: (text) => {
      // Auto-fill description with transcribed text
      setFormData((prev) => ({
        ...prev,
        description: prev.description ? `${prev.description}\n${text}` : text,
      }))
    },
    language: getSpeechLanguage(),
    autoStopAfterSilence: 2000, // 2 seconds of silence
  })

  const categories = [
    { id: 'water', label: t('categories.water'), icon: '💧' },
    { id: 'health', label: t('categories.health'), icon: '🏥' },
    { id: 'waste', label: t('categories.waste'), icon: '🗑️' },
    { id: 'roads', label: t('categories.roads'), icon: '🛣️' },
    { id: 'agriculture', label: t('categories.agriculture'), icon: '🌾' },
    { id: 'other', label: t('categories.other'), icon: '📋' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Navigate to AI analysis page
    router.push('/ai-analysis?type=standard&category=' + formData.category)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  // Auto-stop recording when user finishes speaking (handled in hook)

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-display text-neutral-800 mb-3">{t('report.title')}</h1>
          <p className="text-body-lg text-neutral-600">
            {t('report.subtitle')}
          </p>
        </div>

        {/* Report Form */}
        <form onSubmit={handleSubmit} className="card space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="label">
              {t('report.issueTitle')}
            </label>
            <input
              id="title"
              type="text"
              className="input"
              placeholder={t('report.issueTitlePlaceholder')}
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="label">{t('report.category')}</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, category: cat.id })}
                  className={`p-4 rounded-lg border-2 transition-all text-center ${
                    formData.category === cat.id
                      ? 'border-primary-400 bg-primary-50 text-primary-700 font-medium'
                      : 'border-neutral-300 bg-white text-neutral-700 hover:border-primary-300'
                  }`}
                >
                  <div className="text-2xl mb-1">{cat.icon}</div>
                  <div className="text-sm">{cat.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="label">
              {t('report.description')}
            </label>
            <textarea
              id="description"
              className="textarea"
              placeholder={t('report.descriptionPlaceholder')}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={6}
            />
          </div>

          {/* Location */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="location" className="label">
                <MapPin className="inline h-4 w-4 mr-1" />
                {t('report.liveLocation')}
              </label>
              <button
                type="button"
                className="btn btn-outline w-full"
                onClick={() => {
                  if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((position) => {
                      setFormData({
                        ...formData,
                        location: `${position.coords.latitude}, ${position.coords.longitude}`
                      })
                    })
                  }
                }}
              >
                {t('report.detectLocation')}
              </button>
              {formData.location && (
                <p className="text-sm text-neutral-600 mt-2">{formData.location}</p>
              )}
            </div>

            <div>
              <label htmlFor="villageName" className="label">
                {t('report.villageName')}
              </label>
              <input
                id="villageName"
                type="text"
                className="input"
                placeholder={t('report.villageNamePlaceholder')}
                value={formData.villageName}
                onChange={(e) => setFormData({ ...formData, villageName: e.target.value })}
              />
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label className="label">
              <ImageIcon className="inline h-4 w-4 mr-1" />
              {t('report.uploadImages')}
            </label>
            <div className="mt-2">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-neutral-300 rounded-lg cursor-pointer hover:bg-neutral-50 transition">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="h-10 w-10 text-neutral-400 mb-2" />
                  <p className="text-sm text-neutral-600">
                    <span className="font-medium">{t('common.select')}</span> {t('report.uploadImagesDesc')}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">{t('report.uploadImagesDesc')}</p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
              {files.length > 0 && (
                <div className="mt-3 space-y-1">
                  {files.map((file, index) => (
                    <p key={index} className="text-sm text-neutral-600">
                      ✓ {file.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Voice Note */}
          <div>
            <label className="label">
              <Mic className="inline h-4 w-4 mr-1" />
              {t('report.recordVoiceNote')}
            </label>
            
            {!isSupported && (
              <div className="mb-4 bg-warning-50 border border-warning-200 rounded-lg p-3">
                <p className="text-sm text-warning-700">
                  ⚠️ Voice recording is not supported in this browser. Please use Chrome, Edge, or Safari.
                </p>
              </div>
            )}

            <div className="space-y-4">
              {/* Recording Controls */}
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={toggleRecording}
                  disabled={!isSupported || isProcessing}
                  className={`btn ${isRecording ? 'btn-danger' : 'btn-outline'} flex items-center disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <Mic className={`h-4 w-4 mr-2 ${isRecording ? 'animate-pulse' : ''}`} />
                  {isRecording 
                    ? t('report.stopRecording') 
                    : isProcessing 
                    ? 'Processing...' 
                    : t('report.startRecording')}
                </button>
                
                {isRecording && (
                  <div className="flex items-center space-x-2 text-sm text-neutral-600">
                    <span className="w-2 h-2 bg-danger-500 rounded-full animate-pulse"></span>
                    <span>{t('report.recording')} - Listening...</span>
                  </div>
                )}
                
                {isProcessing && !isRecording && (
                  <div className="flex items-center space-x-2 text-sm text-primary-600">
                    <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-primary-400"></span>
                    <span>Processing voice...</span>
                  </div>
                )}
                
                {transcript && !isRecording && (
                  <button
                    type="button"
                    onClick={clearTranscript}
                    className="text-sm text-neutral-500 hover:text-neutral-700 flex items-center space-x-1"
                  >
                    <X className="h-4 w-4" />
                    <span>Clear</span>
                  </button>
                )}
              </div>

              {/* Live Transcript Display */}
              {(transcript || isRecording) && (
                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-medium text-neutral-600">
                      {isRecording ? 'Listening... (Auto-stops after 2s silence)' : 'Transcription Complete:'}
                    </span>
                    {transcript && !isRecording && (
                      <CheckCircle2 className="h-4 w-4 text-secondary-400" />
                    )}
                  </div>
                  <div className="max-h-32 overflow-y-auto">
                    <p className="text-sm text-neutral-800 whitespace-pre-wrap">
                      {transcript}
                      {isRecording && !transcript && (
                        <span className="text-neutral-400 italic">
                          Speak now... Listening for your voice...
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {voiceError && (
                <div className="bg-danger-50 border border-danger-200 rounded-lg p-3">
                  <p className="text-sm text-danger-700">{voiceError}</p>
                </div>
              )}

              {/* Instructions */}
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-3">
                <p className="text-xs text-primary-700 font-medium mb-1">
                  📢 How it works:
                </p>
                <ul className="text-xs text-primary-600 space-y-1 list-disc list-inside">
                  <li>Click "Start Recording" and speak your issue description</li>
                  <li>The system listens and transcribes your voice in real-time</li>
                  <li>After 2 seconds of silence, recording stops automatically</li>
                  <li>Transcribed text is automatically added to the description field</li>
                  <li>Supports: English, Telugu, Hindi (based on selected language)</li>
                </ul>
              </div>

              <p className="text-xs text-neutral-500">
                {t('report.voiceNoteDesc')}
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-secondary w-full text-lg py-4"
          >
            {t('report.submitButton')}
          </button>
        </form>
      </div>
    </div>
  )
}

