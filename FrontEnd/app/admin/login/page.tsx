'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import { useAuth } from '@/contexts/AuthContext'
import { Shield, Lock, User, AlertCircle } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const { login, isAuthenticated, isLoading } = useAuth()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Redirect if already authenticated
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push('/admin')
    }
  }, [isAuthenticated, isLoading, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    if (!formData.username || !formData.password) {
      setError('Please enter both username and password')
      setIsSubmitting(false)
      return
    }

    const success = await login(formData.username, formData.password)

    if (success) {
      router.push('/admin')
    } else {
      setError('Invalid username or password. Access restricted to authorized officers only.')
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-400"></div>
          <p className="mt-4 text-neutral-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full">
          {/* Login Card */}
          <div className="card">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary-400" />
              </div>
              <h1 className="text-display text-neutral-800 mb-2">Admin Login</h1>
              <p className="text-body-lg text-neutral-600">
                Government Officer Portal
              </p>
              <p className="text-body-sm text-neutral-500 mt-2">
                Restricted Access - Officers Only
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 bg-danger-50 border-2 border-danger-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-danger-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-danger-700">{error}</p>
                </div>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username */}
              <div>
                <label htmlFor="username" className="label flex items-center">
                  <User className="h-4 w-4 mr-2 text-neutral-400" />
                  Officer Username
                </label>
                <input
                  id="username"
                  type="text"
                  className="input"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value })
                    setError('')
                  }}
                  required
                  autoComplete="username"
                  disabled={isSubmitting}
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="label flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-neutral-400" />
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="input"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value })
                    setError('')
                  }}
                  required
                  autoComplete="current-password"
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-full text-lg py-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <span className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></span>
                    Signing in...
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* Demo Credentials Info */}
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <div className="bg-neutral-50 rounded-lg p-4">
                <p className="text-xs font-medium text-neutral-700 mb-2">
                  Demo Officer Credentials:
                </p>
                <div className="text-xs text-neutral-600 space-y-1">
                  <div>• Username: <code className="bg-white px-1 py-0.5 rounded">officer1</code> / Password: <code className="bg-white px-1 py-0.5 rounded">officer123</code></div>
                  <div>• Username: <code className="bg-white px-1 py-0.5 rounded">admin</code> / Password: <code className="bg-white px-1 py-0.5 rounded">admin123</code></div>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-6 text-center">
              <a
                href="/"
                className="text-sm text-primary-400 hover:text-primary-500 hover:underline"
              >
                ← Back to Home
              </a>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-4 text-center">
            <p className="text-xs text-neutral-500">
              🔒 Secure Government Portal
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              Unauthorized access is prohibited
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

