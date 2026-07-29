"use client"
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { chapterPageComponents } from '@/lib/g&sr-chapter-components'
import { appendixPageComponents } from '@/lib/g&sr-appendix-components'
import { getPageTitle } from '@/lib/g&sr-appendix-titles'

const ContentPage = () => {
  const params = useParams()
  const router = useRouter()
  const chapterPageId = params.chapter as string
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(false)
    setIsNavigating(false)
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [chapterPageId])

  useEffect(() => {
    // Debounce scroll handler for better performance
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setShowScrollTop(window.scrollY > 300)
      }, 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  const handleNavigation = useCallback((pageId: string | null) => {
    if (!pageId || isNavigating) return
    
    setIsNavigating(true)
    // Small delay to prevent rapid clicks
    setTimeout(() => {
      router.push(`/manuals/general-subsidiary-rules/content/${pageId}`)
    }, 100)
  }, [router, isNavigating])

  // Check if it's a chapter or appendix page
  const ContentComponent = chapterPageComponents[chapterPageId] || appendixPageComponents[chapterPageId]
  const isAppendix = Boolean(appendixPageComponents[chapterPageId])

  const openPDF = () => {
    let pdfFileName = ''
    let pdfPath = ''
    
    if (isAppendix) {
      pdfFileName = `GSRAppendixPage${chapterPageId}.pdf`
      pdfPath = `/general-subsidiary-rules-pdf-pages/g&sr-appendix-pdf-pages/${pdfFileName}`
    } else {
      pdfFileName = `GSRChapterPage${chapterPageId}.pdf`
      pdfPath = `/general-subsidiary-rules-pdf-pages/g&sr-chapter-pdf-pages/${pdfFileName}`
    }
    
    window.open(pdfPath, '_blank')
  }

  // Get all available pages (chapters + appendices) for navigation
  const allPages = useMemo(() => {
    const allPageIds = [
      ...Object.keys(chapterPageComponents),
      ...Object.keys(appendixPageComponents)
    ]
    
    return allPageIds.sort((a, b) => {
      // Extract numeric part for sorting
      const numMatchA = a.match(/^(\d+)/)
      const numMatchB = b.match(/^(\d+)/)
      const numA = numMatchA ? parseInt(numMatchA[1]) : 0
      const numB = numMatchB ? parseInt(numMatchB[1]) : 0
      
      // First compare by numeric part (page number)
      if (numA !== numB) return numA - numB
      
      // If same number, sort by suffix (A, B, C, etc.)
      // Extract suffix (letter part) for comparison
      const suffixA = a.replace(/^\d+/, '') || ''
      const suffixB = b.replace(/^\d+/, '') || ''
      
      // Empty suffix comes before letter suffixes
      if (suffixA === '' && suffixB !== '') return -1
      if (suffixA !== '' && suffixB === '') return 1
      if (suffixA === '' && suffixB === '') return 0
      
      // Compare letter suffixes alphabetically
      return suffixA.localeCompare(suffixB)
    })
  }, [])

  const currentIndex = allPages.indexOf(chapterPageId)
  const prevPage = currentIndex > 0 ? allPages[currentIndex - 1] : null
  const nextPage = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null

  // Get topic name from page ID (handles both chapters and appendices)
  const getTopicName = (pageId: string): string => {
    return getPageTitle(pageId)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading content...</p>
        </div>
      </div>
    )
  }

  if (!ContentComponent) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
            <p className="text-gray-300 mb-6">Content for Page {chapterPageId} is not available.</p>
            <button
              onClick={() => router.push('/manuals/general-subsidiary-rules')}
              className="bg-linear-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Back to Index
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header Navigation - Sticky Top */}
      <div className={`bg-white/10 ${isMobile ? 'backdrop-blur-sm' : 'backdrop-blur-lg'} border-b border-white/20 sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-2 lg:px-4 py-3 lg:py-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center">
              <button
                onClick={() => {
                  if (!isNavigating) {
                    setIsNavigating(true)
                    router.push('/manuals/general-subsidiary-rules')
                  }
                }}
                disabled={isNavigating}
                className="flex items-center space-x-1 bg-linear-to-r from-blue-500 to-indigo-600 text-white text-xs lg:text-base lg:px-4 px-2 py-1.5 lg:py-2 rounded-sm active:scale-95 transition-transform duration-200 disabled:opacity-50"
              >
                <span>Back</span>
              </button>
            </div>

            <div className="bg-linear-to-r from-green-500 to-emerald-600 lg:px-4 px-2 py-1.5 lg:py-2 rounded-sm border border-blue-400/30 flex-1 min-w-0">
              <p className="text-white text-xs lg:text-sm text-center truncate">
                {getTopicName(chapterPageId)}
              </p>
            </div>

            <div className="flex items-center">
              <button
                onClick={openPDF}
                className="flex items-center space-x-1 bg-linear-to-r from-red-500 to-pink-600 text-white text-xs lg:text-base lg:px-4 px-2 py-1.5 lg:py-2 rounded-sm active:scale-95 transition-transform duration-200"
              >
                <span>PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto lg:px-4 px-2 py-4">
        {isNavigating && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <ContentComponent />

        {/* Navigation Buttons - Bottom */}
        <div className={`mt-6 mb-6 p-2 lg:p-3 bg-white/10 ${isMobile ? 'backdrop-blur-sm' : 'backdrop-blur-lg'} rounded-lg border border-white/20`}>
          <div className="flex items-center justify-between gap-2 lg:gap-4">
            {/* Previous Button */}
            <button
              onClick={() => handleNavigation(prevPage)}
              disabled={!prevPage || isNavigating}
              className={`flex flex-col items-center justify-center space-y-1 px-2 lg:px-4 py-2 lg:py-3 rounded-sm text-white transition-all duration-200 flex-1 min-w-0 ${
                prevPage && !isNavigating
                  ? 'bg-linear-to-r from-blue-500 to-indigo-600 active:scale-95'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm font-medium">
                Previous
              </span>
              {prevPage && (
                <span className="text-xs text-center truncate w-full px-1" title={getPageTitle(prevPage)}>
                  {getPageTitle(prevPage)}
                </span>
              )}
            </button>

            {/* Next Button */}
            <button
              onClick={() => handleNavigation(nextPage)}
              disabled={!nextPage || isNavigating}
              className={`flex flex-col items-center justify-center space-y-1 px-2 lg:px-4 py-2 lg:py-3 rounded-sm text-white transition-all duration-200 flex-1 min-w-0 ${
                nextPage && !isNavigating
                  ? 'bg-linear-to-r from-green-500 to-emerald-600 active:scale-95'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm font-medium">
                Next
              </span>
              {nextPage && (
                <span className="text-xs text-center truncate w-full px-1" title={getPageTitle(nextPage)}>
                  {getPageTitle(nextPage)}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 left-4 bg-linear-to-tr from-blue-600 via-blue-400 to-blue-700 text-white p-2 lg:p-3 rounded-full shadow-2xl border-2 border-white active:scale-95 transition-transform duration-200 z-40 flex items-center justify-center ${isMobile ? '' : 'hover:scale-110'}`}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default ContentPage

