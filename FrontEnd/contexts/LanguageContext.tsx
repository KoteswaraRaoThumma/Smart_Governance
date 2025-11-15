'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { getTranslation } from '@/locales/translations'

export type Language = 'en' | 'te' | 'hi'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  // Load language from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem('smart-governance-language') as Language
    if (savedLanguage && ['en', 'te', 'hi'].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
      document.documentElement.lang = savedLanguage
    } else {
      // Auto-detect language from browser
      const browserLang = navigator.language.split('-')[0]
      if (browserLang === 'te' || browserLang === 'hi') {
        setLanguageState(browserLang as Language)
        document.documentElement.lang = browserLang
      } else {
        document.documentElement.lang = 'en'
      }
    }
  }, [])

  // Save language to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (mounted) {
      localStorage.setItem('smart-governance-language', lang)
      document.documentElement.lang = lang
    }
  }

  // Translation function
  const t = (key: string): string => {
    return getTranslation(language, key)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

