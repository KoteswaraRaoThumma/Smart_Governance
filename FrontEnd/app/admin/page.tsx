'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import PriorityBadge from '@/components/PriorityBadge'
import ProtectedRoute from '@/components/ProtectedRoute'
import { useAuth } from '@/contexts/AuthContext'
import { 
  FileText, AlertCircle, Droplets, Heart, Trash2, Road, Users, 
  MapPin, Calendar, Filter, Search, Eye, CheckCircle2, X, LogOut, User
} from 'lucide-react'

type Report = {
  id: string
  ticket: string
  title: string
  category: string
  priority: 'high' | 'medium' | 'low'
  status: 'pending' | 'in-progress' | 'resolved'
  location: string
  date: string
  aiLabel?: string
}

const mockReports: Report[] = [
  {
    id: '1',
    ticket: 'SG-123456',
    title: 'Flood Emergency - Village Center',
    category: 'emergency',
    priority: 'high',
    status: 'pending',
    location: 'Village: Manikpur, District: XYZ',
    date: '2024-01-20 10:30 AM',
    aiLabel: 'AI Detected: Flood Emergency – High Priority'
  },
  {
    id: '2',
    ticket: 'SG-123457',
    title: 'Water Contamination',
    category: 'water',
    priority: 'high',
    status: 'in-progress',
    location: 'Village: Ramnagar, District: ABC',
    date: '2024-01-19 02:15 PM'
  },
  {
    id: '3',
    ticket: 'SG-123458',
    title: 'Road Damage - Main Street',
    category: 'roads',
    priority: 'medium',
    status: 'pending',
    location: 'Village: Devpur, District: XYZ',
    date: '2024-01-18 09:00 AM'
  },
  {
    id: '4',
    ticket: 'SG-123459',
    title: 'Waste Management Issue',
    category: 'waste',
    priority: 'low',
    status: 'in-progress',
    location: 'Village: Shivnagar, District: ABC',
    date: '2024-01-17 04:45 PM'
  },
]

export default function AdminDashboard() {
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('all')
  const [selectedReport, setSelectedReport] = useState<Report | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [priorityFilter, setPriorityFilter] = useState<string>('all')

  const highPriorityCount = mockReports.filter(r => r.priority === 'high').length
  const mediumCount = mockReports.filter(r => r.priority === 'medium').length
  const lowCount = mockReports.filter(r => r.priority === 'low').length

  const filteredReports = mockReports.filter(report => {
    const matchesTab = activeTab === 'all' || 
      (activeTab === 'emergency' && report.category === 'emergency') ||
      (activeTab === report.category)
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.ticket.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPriority = priorityFilter === 'all' || report.priority === priorityFilter
    return matchesTab && matchesSearch && matchesPriority
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'water': return <Droplets className="h-5 w-5 text-primary-400" />
      case 'health': return <Heart className="h-5 w-5 text-danger-500" />
      case 'waste': return <Trash2 className="h-5 w-5 text-neutral-500" />
      case 'roads': return <Road className="h-5 w-5 text-warning-500" />
      case 'emergency': return <AlertCircle className="h-5 w-5 text-danger-500" />
      default: return <FileText className="h-5 w-5 text-neutral-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-warning-100 text-warning-700 border-warning-300'
      case 'in-progress': return 'bg-primary-100 text-primary-700 border-primary-300'
      case 'resolved': return 'bg-secondary-100 text-secondary-700 border-secondary-300'
      default: return 'bg-neutral-100 text-neutral-700 border-neutral-300'
    }
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-neutral-100">
        <Header />
        
        {/* Admin Header Bar */}
        <div className="bg-white border-b border-neutral-200 shadow-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <User className="h-5 w-5 text-primary-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-700">Logged in as</p>
                  <p className="text-base font-semibold text-neutral-800">
                    {user?.name} {user?.role === 'super_admin' && '(Super Admin)'}
                  </p>
                  {user?.department && (
                    <p className="text-xs text-neutral-500">{user.department}</p>
                  )}
                </div>
              </div>
              <button
                onClick={logout}
                className="btn btn-outline flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Sidebar */}
        <aside className="w-64 bg-white rounded-card shadow-soft p-6 mr-6 hidden lg:block">
          <h2 className="text-title text-neutral-800 mb-6">Dashboard</h2>
          <nav className="space-y-2">
            {[
              { id: 'all', label: 'All Reports', icon: FileText },
              { id: 'emergency', label: 'Emergency', icon: AlertCircle },
              { id: 'water', label: 'Water', icon: Droplets },
              { id: 'health', label: 'Health', icon: Heart },
              { id: 'waste', label: 'Waste', icon: Trash2 },
              { id: 'roads', label: 'Roads', icon: Road },
            ].map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === item.id
                      ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-400'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card bg-danger-50 border-2 border-danger-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body-sm text-neutral-600 mb-1">High Priority</p>
                  <p className="text-3xl font-bold text-danger-700">{highPriorityCount}</p>
                </div>
                <AlertCircle className="h-12 w-12 text-danger-400" />
              </div>
            </div>
            <div className="card bg-warning-50 border-2 border-warning-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body-sm text-neutral-600 mb-1">Medium Priority</p>
                  <p className="text-3xl font-bold text-warning-700">{mediumCount}</p>
                </div>
                <FileText className="h-12 w-12 text-warning-500" />
              </div>
            </div>
            <div className="card bg-secondary-50 border-2 border-secondary-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body-sm text-neutral-600 mb-1">Low Priority</p>
                  <p className="text-3xl font-bold text-secondary-700">{lowCount}</p>
                </div>
                <CheckCircle2 className="h-12 w-12 text-secondary-400" />
              </div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="card mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex-1 max-w-md relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search by ticket or title..."
                  className="input pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-neutral-400" />
                <select
                  className="input"
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                >
                  <option value="all">All Priorities</option>
                  <option value="high">High Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="low">Low Priority</option>
                </select>
              </div>
            </div>
          </div>

          {/* Reports List */}
          <div className="space-y-4">
            <h2 className="text-title text-neutral-800 mb-4">
              {activeTab === 'all' ? 'All Reports' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1) + ' Reports'}
            </h2>
            
            {/* Emergency Reports First */}
            {filteredReports
              .filter(r => r.category === 'emergency')
              .map((report) => (
                <div
                  key={report.id}
                  className={`card cursor-pointer hover:shadow-medium transition-all border-l-4 ${
                    report.priority === 'high' ? 'border-danger-500 bg-danger-50' : 'border-primary-400'
                  }`}
                  onClick={() => setSelectedReport(report)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        {getCategoryIcon(report.category)}
                        <h3 className="text-subtitle font-medium text-neutral-800">{report.title}</h3>
                        <PriorityBadge priority={report.priority} aiDetected={!!report.aiLabel} />
                      </div>
                      {report.aiLabel && (
                        <p className="text-body-sm text-neutral-600 mb-2">{report.aiLabel}</p>
                      )}
                      <div className="flex items-center space-x-4 text-body-sm text-neutral-600">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {report.location}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {report.date}
                        </span>
                        <span className="font-mono font-medium text-primary-400">{report.ticket}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`badge ${getStatusColor(report.status)}`}>
                        {report.status.replace('-', ' ')}
                      </span>
                      <Eye className="h-5 w-5 text-neutral-400" />
                    </div>
                  </div>
                </div>
              ))}

            {/* Other Reports */}
            {filteredReports
              .filter(r => r.category !== 'emergency')
              .map((report) => (
                <div
                  key={report.id}
                  className="card cursor-pointer hover:shadow-medium transition-all border-l-4 border-primary-400"
                  onClick={() => setSelectedReport(report)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        {getCategoryIcon(report.category)}
                        <h3 className="text-subtitle font-medium text-neutral-800">{report.title}</h3>
                        <PriorityBadge priority={report.priority} />
                      </div>
                      <div className="flex items-center space-x-4 text-body-sm text-neutral-600">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {report.location}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {report.date}
                        </span>
                        <span className="font-mono font-medium text-primary-400">{report.ticket}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`badge ${getStatusColor(report.status)}`}>
                        {report.status.replace('-', ' ')}
                      </span>
                      <Eye className="h-5 w-5 text-neutral-400" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Report Detail Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-card shadow-large max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-title text-neutral-800">Report Details</h2>
              <button
                onClick={() => setSelectedReport(null)}
                className="p-2 hover:bg-neutral-100 rounded-lg"
              >
                <X className="h-6 w-6 text-neutral-600" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <span className="text-body-sm text-neutral-600">Ticket Number:</span>
                <p className="text-body-lg font-mono font-bold text-primary-400">{selectedReport.ticket}</p>
              </div>
              <div>
                <span className="text-body-sm text-neutral-600">Title:</span>
                <p className="text-body-lg text-neutral-800">{selectedReport.title}</p>
              </div>
              <div>
                <span className="text-body-sm text-neutral-600">Priority:</span>
                <div className="mt-1">
                  <PriorityBadge priority={selectedReport.priority} aiDetected={!!selectedReport.aiLabel} />
                </div>
              </div>
              {selectedReport.aiLabel && (
                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                  <p className="text-body-sm text-neutral-600 mb-1">AI Analysis:</p>
                  <p className="text-body font-medium text-neutral-800">{selectedReport.aiLabel}</p>
                </div>
              )}
              <div>
                <span className="text-body-sm text-neutral-600">Location:</span>
                <p className="text-body-lg text-neutral-800">{selectedReport.location}</p>
              </div>
              <div>
                <span className="text-body-sm text-neutral-600">Date:</span>
                <p className="text-body-lg text-neutral-800">{selectedReport.date}</p>
              </div>
              <div>
                <span className="text-body-sm text-neutral-600">Status:</span>
                <div className="mt-1">
                  <span className={`badge ${getStatusColor(selectedReport.status)}`}>
                    {selectedReport.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <button className="btn btn-primary flex-1">Assign to Department</button>
              <button className="btn btn-secondary flex-1">Update Status</button>
            </div>
          </div>
        </div>
      )}
        </div>
      </div>
    </ProtectedRoute>
  )
}

