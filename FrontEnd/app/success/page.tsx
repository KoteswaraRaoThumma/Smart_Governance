'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import PriorityBadge from '@/components/PriorityBadge'
import { CheckCircle2, Ticket, ArrowRight } from 'lucide-react'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const ticketNumber = searchParams.get('ticket') || 'SG-000000'
  const priority = (searchParams.get('priority') || 'medium') as 'high' | 'medium' | 'low'
  const label = searchParams.get('label') || ''
  const confidence = searchParams.get('confidence') || '0'

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-secondary-100 rounded-full mb-6">
            <CheckCircle2 className="h-12 w-12 text-secondary-400" />
          </div>
          <h1 className="text-display text-neutral-800 mb-3">Report Submitted Successfully!</h1>
          <p className="text-body-lg text-neutral-600">
            Your issue has been received and is being processed
          </p>
        </div>

        {/* Ticket Information Card */}
        <div className="card space-y-6 mb-8">
          {/* Ticket Number */}
          <div className="text-center pb-6 border-b border-neutral-200">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Ticket className="h-5 w-5 text-primary-400" />
              <span className="text-body-sm text-neutral-600">Ticket Number</span>
            </div>
            <h2 className="text-3xl font-bold text-primary-400 font-mono">{ticketNumber}</h2>
          </div>

          {/* Priority Badge */}
          <div className="flex items-center justify-between py-4 border-b border-neutral-200">
            <span className="text-body-lg font-medium text-neutral-700">Priority:</span>
            <PriorityBadge priority={priority} aiDetected={true} />
          </div>

          {/* AI Detection Info */}
          {label && (
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
              <p className="text-body font-medium text-neutral-800 mb-1">AI Analysis:</p>
              <p className="text-body-sm text-neutral-600">{label}</p>
              {confidence && (
                <p className="text-body-sm text-neutral-500 mt-2">
                  Confidence: {confidence}%
                </p>
              )}
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
            <h3 className="text-subtitle font-medium text-primary-700 mb-2">What's Next?</h3>
            <ul className="space-y-2 text-body-sm text-primary-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Your report has been assigned to the relevant department</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>You can track the status using your ticket number</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>You'll receive updates via SMS or phone call</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-4">
          <Link href={`/track?ticket=${ticketNumber}`} className="btn btn-primary flex items-center justify-center">
            Track Status
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
          <button
            onClick={() => router.push('/report')}
            className="btn btn-outline flex items-center justify-center"
          >
            Submit Another Issue
          </button>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-body-sm text-neutral-600 mb-2">
            Need help or have questions?
          </p>
          <p className="text-body-sm text-neutral-500">
            Contact Support: <a href="tel:1800-XXX-XXXX" className="text-primary-400 hover:underline">1800-XXX-XXXX</a>
          </p>
        </div>
      </div>
    </div>
  )
}

