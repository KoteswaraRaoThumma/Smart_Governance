import Link from 'next/link'
import Header from '@/components/Header'
import { AlertCircle, FileText, MapPin, CheckCircle2 } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-display text-neutral-800 mb-4">
            Report Issues. Get Faster Support.
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Your trusted platform for reporting rural issues and emergencies. 
            Get quick government response with AI-powered priority detection.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <Link href="/report" className="card hover:shadow-medium transition-shadow group">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary-100 p-4 rounded-full mb-4 group-hover:bg-primary-200 transition">
                <FileText className="h-12 w-12 text-primary-400" />
              </div>
              <h3 className="text-title text-neutral-800 mb-2">Submit an Issue</h3>
              <p className="text-body-sm text-neutral-600">
                Report water, health, waste, or road issues in your area
              </p>
            </div>
          </Link>

          <Link href="/track" className="card hover:shadow-medium transition-shadow group">
            <div className="flex flex-col items-center text-center">
              <div className="bg-secondary-100 p-4 rounded-full mb-4 group-hover:bg-secondary-200 transition">
                <CheckCircle2 className="h-12 w-12 text-secondary-400" />
              </div>
              <h3 className="text-title text-neutral-800 mb-2">Track Issue Status</h3>
              <p className="text-body-sm text-neutral-600">
                Check the progress of your submitted reports
              </p>
            </div>
          </Link>

          <Link href="/emergency" className="card hover:shadow-medium transition-shadow group border-2 border-danger-300 bg-danger-50">
            <div className="flex flex-col items-center text-center">
              <div className="bg-danger-100 p-4 rounded-full mb-4 group-hover:bg-danger-200 transition">
                <AlertCircle className="h-12 w-12 text-danger-500" />
              </div>
              <h3 className="text-title text-neutral-800 mb-2">Emergency Report</h3>
              <p className="text-body-sm text-neutral-600 font-medium">
                Floods, Disasters, Health Emergencies
              </p>
              <span className="badge badge-high mt-2">High Priority</span>
            </div>
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <div className="text-center">
            <div className="bg-primary-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🤖</span>
            </div>
            <h4 className="text-subtitle text-neutral-800 mb-2">AI-Powered</h4>
            <p className="text-body-sm text-neutral-600">
              Automatic priority detection and smart categorization
            </p>
          </div>

          <div className="text-center">
            <div className="bg-secondary-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-subtitle text-neutral-800 mb-2">Location-Based</h4>
            <p className="text-body-sm text-neutral-600">
              Quick location detection for faster response
            </p>
          </div>

          <div className="text-center">
            <div className="bg-warning-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚡</span>
            </div>
            <h4 className="text-subtitle text-neutral-800 mb-2">Fast Response</h4>
            <p className="text-body-sm text-neutral-600">
              Priority-based routing for urgent issues
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-card shadow-soft p-8 max-w-4xl mx-auto">
          <h2 className="text-title text-center text-neutral-800 mb-8">
            Community Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-400 mb-1">1,234</div>
              <div className="text-body-sm text-neutral-600">Issues Reported</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-400 mb-1">856</div>
              <div className="text-body-sm text-neutral-600">Issues Resolved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-warning-500 mb-1">45</div>
              <div className="text-body-sm text-neutral-600">Active Emergencies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-danger-500 mb-1">12</div>
              <div className="text-body-sm text-neutral-600">High Priority</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-body-sm">
              © 2024 Smart Governance Portal. All rights reserved.
            </p>
            <p className="text-body-sm mt-2 text-neutral-400">
              A Government Initiative for Rural Development
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

