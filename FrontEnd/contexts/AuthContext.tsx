'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface AdminUser {
  id: string
  name: string
  email: string
  role: 'admin' | 'officer' | 'super_admin'
  department?: string
}

interface AuthContextType {
  user: AdminUser | null
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Demo credentials (In production, this should be handled by backend API)
const DEMO_OFFICERS = [
  {
    username: 'officer1',
    password: 'officer123',
    user: {
      id: '1',
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@gov.in',
      role: 'admin' as const,
      department: 'Public Health Department'
    }
  },
  {
    username: 'admin',
    password: 'admin123',
    user: {
      id: '2',
      name: 'Admin Officer',
      email: 'admin@gov.in',
      role: 'super_admin' as const,
      department: 'Administration'
    }
  },
  {
    username: 'officer2',
    password: 'officer123',
    user: {
      id: '3',
      name: 'Priya Sharma',
      email: 'priya.sharma@gov.in',
      role: 'officer' as const,
      department: 'Water & Sanitation'
    }
  }
]

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load user from session on mount
  useEffect(() => {
    const savedUser = sessionStorage.getItem('admin-user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error('Error loading user session:', error)
        sessionStorage.removeItem('admin-user')
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (username: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // Find matching officer credentials
    const officer = DEMO_OFFICERS.find(
      o => o.username.toLowerCase() === username.toLowerCase() && o.password === password
    )

    if (officer) {
      setUser(officer.user)
      sessionStorage.setItem('admin-user', JSON.stringify(officer.user))
      return true
    }

    return false
  }

  const logout = () => {
    setUser(null)
    sessionStorage.removeItem('admin-user')
    // Redirect to login page
    if (typeof window !== 'undefined') {
      window.location.href = '/admin/login'
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

