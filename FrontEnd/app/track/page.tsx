'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import PriorityBadge from '@/components/PriorityBadge'
import { Search, Clock, CheckCircle2, AlertCircle, MapPin } from 'lucide-react'

type Status = 'submitted' | 'in-progress' | 'resolved' | 'pending'

const statusStages = [
  { id: 'submitted', label: 'Submitted', icon: CheckCircle2, color: 'text-primary-400' },
  { id: 'in-progress', label: 'In Progress', icon: Clock, color: 'text-warning-500' },
  { id: 'resolved', label: 'Resolved', icon: CheckCircle2, color: 'text-secondary-400' },
]

export default function TrackPage() {
  const searchParams = useSearchParams()
  const ticketParam = searchParams.get('ticket') || ''
  
  const [ticketNumber, setTicketNumber] = useState(ticketParam)
  const [ticketData, setTicketData] = useState<any>(ticketParam ? {
    ticket: ticketParam,
    title: 'Water contamination issue in village center',
    status: 'in-progress',
    priority: 'high',
    submittedDate: '2024-01-15',
    assignedTo: 'Public Health Department',
    location: 'Village: Manikpur, District: XYZ',
    updates: [
      { date: '2024-01-15', status: 'Submitted', note: 'Report received and under review' },
      { date: '2024-01-16', status: 'In Progress', note: 'Field officer assigned. Investigation started.' },
    ]
  } : null)

  const handleSearch = () => {
    if (ticketNumber) {
      // Simulate API call
      setTicketData({
        ticket: ticketNumber,
        title: 'Water contamination issue in village center',
        status: 'in-progress',
        priority: 'high',
        submittedDate: '2024-01-15',
        assignedTo: 'Public Health Department',
        location: 'Village: Manikpur, District: XYZ',
        updates: [
          { date: '2024-01-15', status: 'Submitted', note: 'Report received and under review' },
          { date: '2024-01-16', status: 'In Progress', note: 'Field officer assigned. Investigation started.' },
        ]
      })
    }
  }

  const getCurrentStage = () => {
    if (!ticketData) return 0
    switch (ticketData.status) {
      case 'submitted': return 0
      case 'in-progress': return 1
      case 'resolved': return 2
      default: return 0
    }
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-display text-neutral-800 mb-3">Track Issue Status</h1>
          <p className="text-body-lg text-neutral-600">
            Enter your ticket number to check the progress of your report
          </p>
        </div>

        {/* Search Box */}
        <div className="card mb-8">
          <div className="flex space-x-4">
            <div className="flex-1">
              <input
                type="text"
                className="input"
                placeholder="Enter ticket number (e.g., SG-123456)"
                value={ticketNumber}
                onChange={(e) => setTicketNumber(e.target.value.toUpperCase())}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <button onClick={handleSearch} className="btn btn-primary flex items-center">
              <Search className="h-5 w-5 mr-2" />
              Search
            </button>
          </div>
        </div>

        {/* Ticket Details */}
        {ticketData && (
          <div className="space-y-6">
            {/* Status Timeline */}
            <div className="card">
              <h2 className="text-title text-neutral-800 mb-6">Status Timeline</h2>
              <div className="space-y-6">
                {statusStages.map((stage, index) => {
                  const Icon = stage.icon
                  const isCompleted = index <= getCurrentStage()
                  const isCurrent = index === getCurrentStage()
                  
                  return (
                    <div key={stage.id} className="relative flex items-start space-x-4">
                      <div className="flex-shrink-0 relative">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          isCompleted ? 'bg-secondary-100' : 'bg-neutral-200'
                        }`}>
                          <Icon className={`h-5 w-5 ${isCompleted ? 'text-secondary-400' : 'text-neutral-400'}`} />
                        </div>
                        {isCompleted && index < statusStages.length - 1 && (
                          <div className="absolute left-1/2 transform -translate-x-1/2 top-10 w-0.5 h-12 bg-secondary-300"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <h3 className={`text-subtitle font-medium ${isCompleted ? 'text-neutral-800' : 'text-neutral-400'}`}>
                          {stage.label}
                        </h3>
                        {isCurrent && (
                          <p className="text-body-sm text-neutral-600 mt-1">Currently at this stage</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Ticket Info */}
            <div className="card">
              <h2 className="text-title text-neutral-800 mb-4">Report Details</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-neutral-200">
                  <span className="text-body-lg text-neutral-600">Ticket Number:</span>
                  <span className="text-body-lg font-mono font-bold text-primary-400">{ticketData.ticket}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-neutral-200">
                  <span className="text-body-lg text-neutral-600">Priority:</span>
                  <PriorityBadge priority={ticketData.priority as 'high' | 'medium' | 'low'} />
                </div>
                <div className="py-3 border-b border-neutral-200">
                  <span className="text-body-lg text-neutral-600 block mb-2">Issue:</span>
                  <span className="text-body-lg text-neutral-800">{ticketData.title}</span>
                </div>
                <div className="flex items-start py-3 border-b border-neutral-200">
                  <MapPin className="h-5 w-5 text-neutral-400 mr-2 mt-0.5" />
                  <span className="text-body-lg text-neutral-800">{ticketData.location}</span>
                </div>
                <div className="py-3 border-b border-neutral-200">
                  <span className="text-body-lg text-neutral-600 block mb-2">Assigned To:</span>
                  <span className="text-body-lg text-neutral-800">{ticketData.assignedTo}</span>
                </div>
                <div className="py-3">
                  <span className="text-body-lg text-neutral-600 block mb-2">Submitted:</span>
                  <span className="text-body-lg text-neutral-800">{ticketData.submittedDate}</span>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div className="card">
              <h2 className="text-title text-neutral-800 mb-4">Updates</h2>
              <div className="space-y-4">
                {ticketData.updates.map((update: any, index: number) => (
                  <div key={index} className="flex items-start space-x-4 pb-4 border-b border-neutral-200 last:border-0 last:pb-0">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-body font-medium text-neutral-800">{update.status}</span>
                        <span className="text-body-sm text-neutral-500">•</span>
                        <span className="text-body-sm text-neutral-500">{update.date}</span>
                      </div>
                      <p className="text-body-sm text-neutral-600">{update.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

