'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import PriorityBadge from '@/components/PriorityBadge'
import { AlertTriangle, Upload, MapPin, Image as ImageIcon } from 'lucide-react'

export default function EmergencyReportPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    description: '',
    reportType: '',
    location: '',
    villageName: '',
  })
  const [files, setFiles] = useState<File[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Navigate to AI analysis page
    router.push('/ai-analysis?type=emergency&priority=high')
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-danger-100 rounded-full mb-4">
            <AlertTriangle className="h-10 w-10 text-danger-500" />
          </div>
          <h1 className="text-display text-neutral-800 mb-3">Emergency Reporting</h1>
          <PriorityBadge priority="high" aiDetected={false} label="Critical Emergency – Auto High Priority" />
        </div>

        {/* Emergency Form */}
        <form onSubmit={handleSubmit} className="card space-y-6">
          {/* Report Type */}
          <div>
            <label className="label">Report Type *</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Flood', 'Heavy Rains', 'Fire', 'Health Emergency'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFormData({ ...formData, reportType: type })}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.reportType === type
                      ? 'border-danger-500 bg-danger-50 text-danger-700 font-medium'
                      : 'border-neutral-300 bg-white text-neutral-700 hover:border-danger-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="label">
              Describe the Emergency *
            </label>
            <textarea
              id="description"
              className="textarea"
              placeholder="Please describe the emergency situation in detail. Include any immediate risks or dangers..."
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
                Live Location
              </label>
              <button
                type="button"
                className="btn btn-outline w-full"
                onClick={() => {
                  // Get user's location
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
                Detect My Location
              </button>
              {formData.location && (
                <p className="text-sm text-neutral-600 mt-2">{formData.location}</p>
              )}
            </div>

            <div>
              <label htmlFor="villageName" className="label">
                Or Enter Village Name
              </label>
              <input
                id="villageName"
                type="text"
                className="input"
                placeholder="Enter your village name"
                value={formData.villageName}
                onChange={(e) => setFormData({ ...formData, villageName: e.target.value })}
              />
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label className="label">
              <ImageIcon className="inline h-4 w-4 mr-1" />
              Add Images / Videos (Optional)
            </label>
            <div className="mt-2">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-neutral-300 rounded-lg cursor-pointer hover:bg-neutral-50 transition">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="h-10 w-10 text-neutral-400 mb-2" />
                  <p className="text-sm text-neutral-600">
                    <span className="font-medium">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">PNG, JPG, MP4 up to 10MB</p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  multiple
                  accept="image/*,video/*"
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

          {/* Warning Message */}
          <div className="bg-danger-50 border-2 border-danger-200 rounded-lg p-4">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-danger-500 mr-2 mt-0.5" />
              <div>
                <p className="font-medium text-danger-700">Emergency Report</p>
                <p className="text-sm text-danger-600 mt-1">
                  This report will be immediately forwarded to emergency response teams. 
                  For immediate danger, please also contact local authorities.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-danger w-full text-lg py-4"
          >
            Submit Emergency Report
          </button>
        </form>
      </div>
    </div>
  )
}

