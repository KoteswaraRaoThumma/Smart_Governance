'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import PriorityBadge from '@/components/PriorityBadge'
import { CheckCircle2, Loader2, AlertTriangle, FileText } from 'lucide-react'

type AnalysisStep = {
  id: string
  label: string
  icon: React.ReactNode
  completed: boolean
  active: boolean
}

export default function AIAnalysisPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'standard'
  const category = searchParams.get('category') || ''
  const isEmergency = type === 'emergency'

  const [steps, setSteps] = useState<AnalysisStep[]>([
    {
      id: 'analyze',
      label: 'Analyzing Your Report',
      icon: <FileText className="h-6 w-6" />,
      completed: false,
      active: true,
    },
    {
      id: 'transcribe',
      label: 'Transcribing Voice',
      icon: <Loader2 className="h-6 w-6 animate-spin" />,
      completed: false,
      active: false,
    },
    {
      id: 'detect',
      label: 'Detecting Emergency',
      icon: <AlertTriangle className="h-6 w-6" />,
      completed: false,
      active: false,
    },
    {
      id: 'assign',
      label: 'Assigning Priority',
      icon: <CheckCircle2 className="h-6 w-6" />,
      completed: false,
      active: false,
    },
  ])

  const [detectedPriority, setDetectedPriority] = useState<'high' | 'medium' | 'low'>(
    isEmergency ? 'high' : 'medium'
  )
  const [aiLabel, setAiLabel] = useState('')
  const [confidence, setConfidence] = useState(0)

  useEffect(() => {
    // Simulate AI analysis process
    const timers: NodeJS.Timeout[] = []

    // Step 1: Analyze
    timers.push(
      setTimeout(() => {
        setSteps((prev) =>
          prev.map((s) =>
            s.id === 'analyze'
              ? { ...s, completed: true, active: false, icon: <CheckCircle2 className="h-6 w-6 text-secondary-400" /> }
              : s.id === 'transcribe'
              ? { ...s, active: true, icon: <FileText className="h-6 w-6" /> }
              : s
          )
        )
      }, 1500)
    )

    // Step 2: Transcribe
    timers.push(
      setTimeout(() => {
        setSteps((prev) =>
          prev.map((s) =>
            s.id === 'transcribe'
              ? { ...s, completed: true, active: false, icon: <CheckCircle2 className="h-6 w-6 text-secondary-400" /> }
              : s.id === 'detect'
              ? { ...s, active: true, icon: <AlertTriangle className="h-6 w-6" /> }
              : s
          )
        )
      }, 3000)
    )

    // Step 3: Detect Emergency
    timers.push(
      setTimeout(() => {
        const priority = isEmergency ? 'high' : category === 'water' || category === 'health' ? 'high' : 'medium'
        setDetectedPriority(priority)
        const label = isEmergency
          ? 'AI Detected: Flood Emergency – High Priority'
          : priority === 'high'
          ? 'AI Detected: Serious Issue – High Priority'
          : 'AI Detected: Standard Issue – Medium Priority'
        setAiLabel(label)
        
        setSteps((prev) =>
          prev.map((s) =>
            s.id === 'detect'
              ? { ...s, completed: true, active: false, icon: <CheckCircle2 className="h-6 w-6 text-secondary-400" /> }
              : s.id === 'assign'
              ? { ...s, active: true, icon: <Loader2 className="h-6 w-6 animate-spin" /> }
              : s
          )
        )
      }, 4500)
    )

    // Step 4: Assign Priority & Confidence
    timers.push(
      setTimeout(() => {
        const conf = isEmergency ? 95 : detectedPriority === 'high' ? 87 : 72
        setConfidence(conf)
        
        setSteps((prev) =>
          prev.map((s) =>
            s.id === 'assign'
              ? { ...s, completed: true, active: false, icon: <CheckCircle2 className="h-6 w-6 text-secondary-400" /> }
              : s
          )
        )

        // Redirect to success page after completion
        setTimeout(() => {
          const ticketNumber = 'SG-' + Date.now().toString().slice(-6)
          router.push(`/success?ticket=${ticketNumber}&priority=${detectedPriority}&label=${encodeURIComponent(aiLabel)}&confidence=${confidence}`)
        }, 2000)
      }, 6000)
    )

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, [isEmergency, category, detectedPriority, router, aiLabel, confidence])

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-4">
            <Loader2 className="h-10 w-10 text-primary-400 animate-spin" />
          </div>
          <h1 className="text-display text-neutral-800 mb-4">AI Analysis in Progress</h1>
          <p className="text-body-lg text-neutral-600">
            We're processing your report with AI-powered analysis
          </p>
        </div>

        {/* Analysis Steps */}
        <div className="card space-y-6 mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center space-x-4">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  step.completed
                    ? 'bg-secondary-100 text-secondary-400'
                    : step.active
                    ? 'bg-primary-100 text-primary-400 animate-pulse'
                    : 'bg-neutral-200 text-neutral-400'
                }`}
              >
                {step.icon}
              </div>
              <div className="flex-1">
                <h3
                  className={`text-subtitle font-medium ${
                    step.completed || step.active ? 'text-neutral-800' : 'text-neutral-400'
                  }`}
                >
                  {step.label}
                </h3>
                {step.active && (
                  <div className="mt-2">
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div className="bg-primary-400 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                )}
              </div>
              {step.completed && (
                <CheckCircle2 className="h-6 w-6 text-secondary-400" />
              )}
            </div>
          ))}
        </div>

        {/* Priority Detection Result */}
        {(detectedPriority || aiLabel) && (
          <div className="card">
            <h3 className="text-subtitle text-neutral-800 mb-4">Analysis Result</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-body-lg text-neutral-700">Priority:</span>
                <PriorityBadge priority={detectedPriority} aiDetected={true} />
              </div>

              {aiLabel && (
                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                  <p className="text-body font-medium text-neutral-800">{aiLabel}</p>
                </div>
              )}

              {confidence > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-body-lg text-neutral-700">AI Confidence:</span>
                    <span className="text-body-lg font-medium text-primary-400">{confidence}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-3">
                    <div
                      className="bg-primary-400 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${confidence}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Emergency Highlight */}
        {isEmergency && (
          <div className="card bg-danger-50 border-2 border-danger-200 mt-8">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-danger-500 mr-3 mt-0.5" />
              <div>
                <h3 className="text-subtitle font-medium text-danger-700 mb-2">
                  Emergency Detected
                </h3>
                <p className="text-body-sm text-danger-600">
                  Your report has been automatically flagged as high priority and forwarded 
                  to emergency response teams.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

