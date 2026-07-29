"use client"
import React, { useState, useEffect } from 'react'
import { definitions } from '../../assets/definitions' 

const Definitions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading effect
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);


  const filteredDefinitions = definitions.filter(def => {
    return def.term.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (isLoading) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)'
        }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-8"></div>
          <h2 className="text-2xl font-bold text-white mb-2">Loading Railway Definitions</h2>
          <p className="text-gray-300">Preparing comprehensive guide...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)'
      }}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="text-center mb-12">
         
          <h1 
            className="lg:text-5xl text-3xl font-bold text-transparent bg-clip-text mb-4"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff, #bfdbfe, #e9d5ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Railway Definitions
          </h1>
          <p className="lg:text-xl text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive guide to railway terminology and concepts from the General Rules for Railway Servants with official references
          </p>
          <div className="mt-6 flex items-center justify-center space-x-4 text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">{definitions.length} Definitions</span>
            </div>
          </div>
        </div>

                {/* Sticky Search Section */}
        <div className="sticky top-20 z-40 mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search Definitions (Example: Interlocking)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-5 pr-10 py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-2xl shadow-purple-500/20 lg:text-base text-sm"
              />
              {searchTerm && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearchTerm("")}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
                  tabIndex={0}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-400">
            Showing <span className="text-white font-semibold">{filteredDefinitions.length}</span> of <span className="text-white font-semibold">{definitions.length}</span> definitions
          </p>
        </div>

        {/* Definitions Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {filteredDefinitions.map((def, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 min-h-[260px] flex flex-col"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Number Badge */}
              <div 
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
                style={{
                  background: 'linear-gradient(to right, #a855f7, #ec4899)'
                }}
              >
                {def.number}
              </div>
              


              {/* Content */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-purple-200 transition-colors duration-300">
                  {def.term}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm mb-4">
                  {def.definition}
                </p>
                
                {/* Reference Badge */}
                <div className="flex items-center justify-between group/reference mt-4 pt-4 border-t border-white/10">
                  <span className="text-sm text-green-400 font-medium group-hover/reference:text-cyan-300 transition-colors duration-300">Reference</span>
                  <div className="px-3 py-1">
                    <span className="text-xs font-semibold text-cyan-300 tracking-wide">
                      {def.reference}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(to right, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))'
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDefinitions.length === 0 && (
          <div className="text-center py-4">
            <div 
              className="lg:w-24 lg:h-24 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{
                background: 'linear-gradient(to right, #6b7280, #4b5563)'
              }}
            >
              <svg className="lg:w-12 lg:h-12 w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
            </div>
            <h3 className="lg:text-2xl text-lg font-bold text-white mb-2">No definitions found</h3>
            <p className="text-gray-400 lg:text-base text-sm">Try adjusting your search terms</p>
          </div>
        )}
      </div>

      
    </div>
  )
}

export default Definitions