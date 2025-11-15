'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import PriorityBadge from '@/components/PriorityBadge'
import { MapPin, AlertCircle, CheckCircle2, Camera, Upload, Users } from 'lucide-react'

type VolunteerIssue = {
  id: string
  ticket: string
  title: string
  category: string
  priority: 'high' | 'medium' | 'low'
  village: string
  district: string
  status: 'available' | 'claimed' | 'in-progress' | 'resolved'
  claimedBy?: string
  date: string
  isEmergency?: boolean
}

const mockIssues: VolunteerIssue[] = [
  {
    id: '1',
    ticket: 'SG-123456',
    title: 'Flood Emergency - Village Center',
    category: 'emergency',
    priority: 'high',
    village: 'Manikpur',
    district: 'XYZ',
    status: 'available',
    date: '2024-01-20 10:30 AM',
    isEmergency: true
  },
  {
    id: '2',
    ticket: 'SG-123457',
    title: 'Water Contamination',
    category: 'water',
    priority: 'high',
    village: 'Ramnagar',
    district: 'ABC',
    status: 'claimed',
    claimedBy: 'You',
    date: '2024-01-19 02:15 PM'
  },
  {
    id: '3',
    ticket: 'SG-123458',
    title: 'Road Damage - Main Street',
    category: 'roads',
    priority: 'medium',
    village: 'Devpur',
    district: 'XYZ',
    status: 'available',
    date: '2024-01-18 09:00 AM'
  },
  {
    id: '4',
    ticket: 'SG-123459',
    title: 'Waste Management Issue',
    category: 'waste',
    priority: 'low',
    village: 'Shivnagar',
    district: 'ABC',
    status: 'in-progress',
    claimedBy: 'You',
    date: '2024-01-17 04:45 PM'
  },
]

export default function VolunteerDashboard() {
  const [selectedVillage, setSelectedVillage] = useState<string>('all')
  const [selectedIssue, setSelectedIssue] = useState<VolunteerIssue | null>(null)

  const villages = Array.from(new Set(mockIssues.map(issue => issue.village)))

  const filteredIssues = selectedVillage === 'all' 
    ? mockIssues 
    : mockIssues.filter(issue => issue.village === selectedVillage)

  // Sort: emergencies first, then by priority
  const sortedIssues = [...filteredIssues].sort((a, b) => {
    if (a.isEmergency && !b.isEmergency) return -1
    if (!a.isEmergency && b.isEmergency) return 1
    if (a.priority === 'high' && b.priority !== 'high') return -1
    if (a.priority !== 'high' && b.priority === 'high') return 1
    return 0
  })

  const handleClaim = (issue: VolunteerIssue) => {
    // Handle claim logic
    console.log('Claiming issue:', issue.id)
  }

  const handleUpdateProgress = (issue: VolunteerIssue) => {
    setSelectedIssue(issue)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'available':
        return <span className="badge badge-low">Available</span>
      case 'claimed':
        return <span className="badge badge-medium">Claimed</span>
      case 'in-progress':
        return <span className="badge badge-medium">In Progress</span>
      case 'resolved':
        return <span className="badge badge-low">Resolved</span>
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="h-8 w-8 text-primary-400" />
            <h1 className="text-display text-neutral-800">Volunteer Dashboard</h1>
          </div>
          <p className="text-body-lg text-neutral-600">
            Help your community by claiming and resolving issues
          </p>
        </div>

        {/* Village Filter */}
        <div className="card mb-6">
          <div className="flex items-center space-x-4">
            <span className="text-body-lg font-medium text-neutral-700">Filter by Village:</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedVillage('all')}
                className={`px-4 py-2 rounded-lg border-2 transition-all ${
                  selectedVillage === 'all'
                    ? 'border-primary-400 bg-primary-50 text-primary-700 font-medium'
                    : 'border-neutral-300 bg-white text-neutral-700 hover:border-primary-300'
                }`}
              >
                All Villages
              </button>
              {villages.map((village) => (
                <button
                  key={village}
                  onClick={() => setSelectedVillage(village)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all ${
                    selectedVillage === village
                      ? 'border-primary-400 bg-primary-50 text-primary-700 font-medium'
                      : 'border-neutral-300 bg-white text-neutral-700 hover:border-primary-300'
                  }`}
                >
                  {village}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card bg-primary-50 border-2 border-primary-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-body-sm text-neutral-600 mb-1">Your Active Issues</p>
                <p className="text-3xl font-bold text-primary-700">
                  {mockIssues.filter(i => i.claimedBy === 'You' && i.status !== 'resolved').length}
                </p>
              </div>
              <Users className="h-12 w-12 text-primary-400" />
            </div>
          </div>
          <div className="card bg-secondary-50 border-2 border-secondary-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-body-sm text-neutral-600 mb-1">Resolved</p>
                <p className="text-3xl font-bold text-secondary-700">
                  {mockIssues.filter(i => i.claimedBy === 'You' && i.status === 'resolved').length}
                </p>
              </div>
              <CheckCircle2 className="h-12 w-12 text-secondary-400" />
            </div>
          </div>
          <div className="card bg-danger-50 border-2 border-danger-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-body-sm text-neutral-600 mb-1">Emergencies</p>
                <p className="text-3xl font-bold text-danger-700">
                  {sortedIssues.filter(i => i.isEmergency).length}
                </p>
              </div>
              <AlertCircle className="h-12 w-12 text-danger-400" />
            </div>
          </div>
        </div>

        {/* Issues List */}
        <div className="space-y-4">
          <h2 className="text-title text-neutral-800 mb-4">
            Issues by Village
          </h2>
          
          {sortedIssues.map((issue) => (
            <div
              key={issue.id}
              className={`card hover:shadow-medium transition-all ${
                issue.isEmergency 
                  ? 'border-l-4 border-danger-500 bg-danger-50' 
                  : 'border-l-4 border-primary-400'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    {issue.isEmergency && (
                      <AlertCircle className="h-5 w-5 text-danger-500" />
                    )}
                    <h3 className="text-subtitle font-medium text-neutral-800">{issue.title}</h3>
                    <PriorityBadge priority={issue.priority} />
                  </div>
                  <div className="flex items-center space-x-4 text-body-sm text-neutral-600 mb-3">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {issue.village}, {issue.district}
                    </span>
                    <span className="font-mono font-medium text-primary-400">{issue.ticket}</span>
                    <span>{issue.date}</span>
                  </div>
                  {issue.claimedBy && (
                    <p className="text-body-sm text-primary-600 font-medium mb-3">
                      Claimed by: {issue.claimedBy}
                    </p>
                  )}
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(issue.status)}
                  </div>
                </div>
                <div className="flex flex-col space-y-2 ml-4">
                  {issue.status === 'available' && (
                    <button
                      onClick={() => handleClaim(issue)}
                      className="btn btn-primary text-sm whitespace-nowrap"
                    >
                      Claim Issue
                    </button>
                  )}
                  {(issue.status === 'claimed' || issue.status === 'in-progress') && issue.claimedBy === 'You' && (
                    <>
                      <button
                        onClick={() => handleUpdateProgress(issue)}
                        className="btn btn-secondary text-sm whitespace-nowrap"
                      >
                        Update Progress
                      </button>
                      <button className="btn btn-outline text-sm whitespace-nowrap">
                        Upload Photo
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Update Progress Modal */}
      {selectedIssue && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-card shadow-large max-w-2xl w-full p-6">
            <h2 className="text-title text-neutral-800 mb-6">Update Progress</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="label">Status Update *</label>
                <select className="input">
                  <option>In Progress</option>
                  <option>Resolved</option>
                </select>
              </div>
              
              <div>
                <label className="label">Progress Notes</label>
                <textarea
                  className="textarea"
                  placeholder="Describe what has been done..."
                  rows={4}
                />
              </div>

              <div>
                <label className="label">Upload Resolution Photos</label>
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-neutral-300 rounded-lg cursor-pointer hover:bg-neutral-50 transition">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Camera className="h-10 w-10 text-neutral-400 mb-2" />
                    <p className="text-sm text-neutral-600">
                      <span className="font-medium">Click to upload</span> photos
                    </p>
                  </div>
                  <input type="file" className="hidden" multiple accept="image/*" />
                </label>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setSelectedIssue(null)}
                className="btn btn-outline flex-1"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle update
                  setSelectedIssue(null)
                }}
                className="btn btn-secondary flex-1"
              >
                Update Progress
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

