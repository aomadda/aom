'use client'
import React, { useState, useMemo } from 'react'
import { abbreviations } from '../../assets/abbreviations'

// Type for abbreviation items
type AbbreviationItem = {
  acronym: string;
  fullForm: string;
  explanation?: string;
  reference?: string;
}

const Abbreviations = () => {
  const [searchTerm, setSearchTerm] = useState('')

  // Filter abbreviations based on search term
  const filteredAbbreviations = useMemo((): Record<string, AbbreviationItem[]> => {
    if (!searchTerm.trim()) {
      return abbreviations
    }

    const filtered: Record<string, AbbreviationItem[]> = {}
    const searchLower = searchTerm.toLowerCase()

    Object.entries(abbreviations).forEach(([letter, items]) => {
      const typedItems = items as AbbreviationItem[]
      const filteredItems = typedItems.filter(
        (item: AbbreviationItem) =>
          item.acronym.toLowerCase().includes(searchLower)
      )
      
      if (filteredItems.length > 0) {
        filtered[letter] = filteredItems
      }
    })

    return filtered
  }, [searchTerm])

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom right, #1e1b4b, #312e81, #1e3a8a, #1e40af)',
        fontFamily: 'var(--font-poppins), "Poppins", system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Animated Background Blobs - Blue Purple Theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(147,51,234,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.1) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      ></div>

      {/* Radial Gradient Overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(30,27,75,0.6)_100%)] pointer-events-none z-0"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-8">
            <div 
              className="flex items-center justify-center space-x-3 px-6 py-3 backdrop-blur-xl rounded-full border border-purple-500/30 shadow-2xl"
              style={{
                background: 'linear-gradient(to right, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))'
              }}
            >
              <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
              <span className="text-sm font-semibold text-white tracking-wide">
                {Object.values(abbreviations).flat().length} Abbreviations Available
              </span>
            </div>
          </div>
          
          <h1 className="lg:text-6xl text-3xl font-black mb-6 leading-tight tracking-tight">
            <span 
              className="block mb-2 bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #e9d5ff, #c7d2fe, #e9d5ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Indian Railways
            </span>
            <span 
              className="block text-2xl lg:text-5xl bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #a78bfa, #60a5fa, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Complete Abbreviations
            </span>
          </h1>
          
          <p className="lg:text-xl text-lg text-purple-200 max-w-3xl mx-auto leading-relaxed mb-4 font-light tracking-wide">
            Comprehensive guide to Indian Railways terminology and abbreviations with detailed explanations and references.
          </p>
        </div>
        
        {/* Fixed Search Section */}
        <div 
          className="fixed left-0 right-0 z-40"
          style={{
            top: '80px', // Exactly below navbar (h-20 = 80px)
            background: 'linear-gradient(to bottom, rgba(30, 27, 75, 0.98), rgba(30, 27, 75, 0.95), rgba(30, 27, 75, 0.9))',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            transition: 'all 0.3s ease',
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid rgba(147, 51, 234, 0.2)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }}
        >
          <div className="max-w-3xl mx-auto px-4">
            <div className="relative group">
              <div 
                className="absolute -inset-0.5 rounded-2xl opacity-40 group-hover:opacity-60 blur-lg transition duration-300"
                style={{
                  background: 'linear-gradient(to right, #9333ea, #3b82f6, #6366f1)'
                }}
              ></div>
              <div 
                className="relative backdrop-blur-xl border border-purple-400/50 shadow-lg rounded-2xl transition-all duration-300 group-hover:border-purple-300/60 group-hover:shadow-purple-500/30"
                style={{
                  background: 'linear-gradient(to right, rgba(147, 51, 234, 0.4), rgba(59, 130, 246, 0.4))'
                }}
              >
                <div className="relative flex items-center gap-3 px-4 py-2.5">
                  {/* Search Icon */}
                  <div className="shrink-0">
                    <svg className="w-5 h-5 text-purple-300 group-hover:text-purple-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  
                  {/* Input Field */}
                  <input
                    type="text"
                    placeholder="Search Abbreviations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-purple-300/50 focus:outline-none text-base font-medium tracking-wide py-1"
                  />
                  
                  {/* Clear Button */}
                  {searchTerm && (
                    <button
                      type="button"
                      aria-label="Clear search"
                      onClick={() => setSearchTerm("")}
                      className="shrink-0 p-1.5 rounded-lg text-purple-300 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200"
                      tabIndex={0}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to prevent content from going under fixed search bar */}
        <div className="h-20 mb-10"></div>

        {/* Results Count */}
        <div className="text-center mb-10">
          <div 
            className="inline-flex items-center space-x-4 px-8 py-4 backdrop-blur-xl rounded-full border border-purple-500/30 shadow-xl"
            style={{
              background: 'linear-gradient(to right, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))'
            }}
          >
            <span className="text-purple-200 font-medium">Showing</span>
            <span className="text-white font-bold text-xl">{Object.values(filteredAbbreviations).flat().length}</span>
            <span className="text-blue-300">of</span>
            <span className="text-white font-bold text-xl">{Object.values(abbreviations).flat().length}</span>
            <span className="text-purple-200 font-medium">abbreviations</span>
          </div>
        </div>
        
        {/* No Results */}
        {searchTerm && Object.keys(filteredAbbreviations).length === 0 && (
          <div className="text-center py-20">
            <div 
              className="inline-flex items-center justify-center w-36 h-36 rounded-full mb-8 border border-purple-500/30 shadow-2xl"
              style={{
                background: 'linear-gradient(to bottom right, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))'
              }}
            >
              <svg className="w-20 h-20 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">No abbreviations found</h3>
            <p className="text-purple-200 text-xl font-light">Try adjusting your search terms</p>
          </div>
        )}
        
        {/* Abbreviations Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {Object.entries(filteredAbbreviations).map(([letter, items], index: number) => {
            const typedItems = items as AbbreviationItem[]
            return (
            <div
              key={letter}
              className="group relative backdrop-blur-xl border border-purple-500/30 rounded-xl overflow-hidden"
              style={{
                animationDelay: `${index * 50}ms`,
                background: 'linear-gradient(to bottom right, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))'
              }}
            >
              {/* Gradient Overlay on Hover */}
              <div 
                className="absolute inset-0 transition-all duration-500 group-hover:opacity-100 opacity-0"
                style={{
                  background: 'linear-gradient(to bottom right, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))'
                }}
              ></div>
              
              {/* Letter Header */}
              <div className="relative overflow-hidden">
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom right, #9333ea, #3b82f6, #6366f1)'
                  }}
                ></div>
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)'
                  }}
                ></div>
                <div className="relative p-6 lg:p-8 text-center">
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 lg:w-24 lg:h-24 backdrop-blur-md rounded-full mb-5 border border-white/20 shadow-2xl"
                    style={{
                      background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))'
                    }}
                  >
                    <h2 className="text-4xl lg:text-7xl font-black text-white drop-shadow-2xl tracking-tight">
                      {letter}
                    </h2>
                  </div>
                  <div 
                    className="w-24 h-1 rounded-full mx-auto mb-4 shadow-lg"
                    style={{
                      background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8), transparent)'
                    }}
                  ></div>
                  <p className="text-white/90 text-sm font-semibold tracking-wide">
                    {typedItems.length} {typedItems.length === 1 ? 'Term' : 'Terms'}
                  </p>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative py-6 lg:px-6 px-4">
                <div className="space-y-3">
                  {typedItems.map((item: AbbreviationItem, itemIndex: number) => (
                    <div 
                      key={itemIndex} 
                      className="group/item relative backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
                      style={{
                        background: 'linear-gradient(to bottom right, rgba(147, 51, 234, 0.15), rgba(59, 130, 246, 0.15))'
                      }}
                    >
                      {/* Acronym and Full Form Header */}
                      <div className="mb-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-bold text-white text-lg group-hover/item:text-purple-200 transition-colors tracking-tight">
                            {item.acronym}
                          </h3>
                          <div className="h-1.5 w-1.5 bg-blue-400 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                        </div>
                        <p className="text-purple-100 text-sm leading-relaxed group-hover/item:text-white font-light">
                          {item.fullForm}
                        </p>
                      </div>
                      
                      {/* Explanation Section */}
                      {item.explanation && (
                        <div 
                          className="mb-3 p-3 rounded-lg border border-blue-500/30 backdrop-blur-sm"
                          style={{
                            background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))'
                          }}
                        >
                          <div className="mb-2">
                            <span className="text-blue-300 text-xs font-bold uppercase tracking-wider">Explanation</span>
                          </div>
                          <p className="text-white text-sm leading-relaxed font-light">
                            {item.explanation}
                          </p>
                        </div>
                      )}
                      
                      {/* Reference Section */}
                      {item.reference && (
                        <div className="flex items-center justify-between pt-2 border-t border-purple-500/30">
                          <span className="text-purple-300 text-xs font-semibold uppercase tracking-wide">Reference</span>
                          <span className="text-blue-300 text-xs font-medium px-2 py-1 rounded border border-purple-500/30"
                            style={{
                              background: 'linear-gradient(to right, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))'
                            }}
                          >
                            {item.reference}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>

      
    </div>
  )
}

export default Abbreviations