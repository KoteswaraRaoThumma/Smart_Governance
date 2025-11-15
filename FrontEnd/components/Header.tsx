'use client'

import Link from 'next/link'
import { Shield, Menu, Languages } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const langMenuRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'en' as const, label: 'English', native: 'English' },
    { code: 'te' as const, label: 'Telugu', native: 'తెలుగు' },
    { code: 'hi' as const, label: 'Hindi', native: 'हिन्दी' },
  ]

  // Close language menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false)
      }
    }

    if (langMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [langMenuOpen])

  return (
    <header className="bg-white border-b-2 border-neutral-200 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-primary-400 p-2 rounded-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-neutral-800">
                Smart Governance
              </h1>
              <p className="text-xs text-neutral-600">{t('home.governmentInitiative').split(' – ')[0]}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-base font-medium text-neutral-700 hover:text-primary-400 transition">
              {t('common.home')}
            </Link>
            <Link href="/report" className="text-base font-medium text-neutral-700 hover:text-primary-400 transition">
              {t('common.reportIssue')}
            </Link>
            <Link href="/emergency" className="text-base font-medium text-neutral-700 hover:text-primary-400 transition">
              {t('common.emergency')}
            </Link>
            <Link href="/track" className="text-base font-medium text-neutral-700 hover:text-primary-400 transition">
              {t('common.trackStatus')}
            </Link>
            
            {/* Language Switcher */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-400 transition border border-neutral-300 rounded-lg"
              >
                <Languages className="h-4 w-4" />
                <span>{languages.find(l => l.code === language)?.native || 'EN'}</span>
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-large border border-neutral-200 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setLangMenuOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-neutral-50 transition ${
                        language === lang.code ? 'bg-primary-50 text-primary-700 font-medium' : 'text-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{lang.native}</span>
                        {language === lang.code && <span className="text-primary-400">✓</span>}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link href="/admin/login" className="btn btn-outline text-sm">
              {t('common.adminLogin')}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t border-neutral-200">
            <Link href="/" className="block py-2 text-base font-medium text-neutral-700" onClick={() => setMobileMenuOpen(false)}>
              {t('common.home')}
            </Link>
            <Link href="/report" className="block py-2 text-base font-medium text-neutral-700" onClick={() => setMobileMenuOpen(false)}>
              {t('common.reportIssue')}
            </Link>
            <Link href="/emergency" className="block py-2 text-base font-medium text-neutral-700" onClick={() => setMobileMenuOpen(false)}>
              {t('common.emergency')}
            </Link>
            <Link href="/track" className="block py-2 text-base font-medium text-neutral-700" onClick={() => setMobileMenuOpen(false)}>
              {t('common.trackStatus')}
            </Link>
            
            {/* Mobile Language Switcher */}
            <div className="py-2">
              <div className="text-sm text-neutral-600 mb-2 px-2">{t('common.language')}</div>
              <div className="space-y-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                      setMobileMenuOpen(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-base rounded-lg transition ${
                      language === lang.code
                        ? 'bg-primary-50 text-primary-700 font-medium'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    {lang.native} ({lang.label})
                  </button>
                ))}
              </div>
            </div>

            <Link href="/admin/login" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
              <span className="btn btn-outline text-sm w-full text-center">{t('common.adminLogin')}</span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

