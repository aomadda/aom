'use client'
import React from 'react'
import { Download, Calendar, Settings, Shield } from 'lucide-react'
import { bwmPdfFiles } from '@/assets/authorities'  

const BlockWorkingManualAmendments = () => {
  const handleDownload = (filename: string) => {
    const link = document.createElement('a')
    link.href = `/bwmpdfs/${filename}`
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Auto-open PDF on mobile devices after download
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) {
      setTimeout(() => {
        window.open(`/bwmpdfs/${filename}`, '_blank')
      }, 1000) // Wait 1 second for download to start
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-linear-to-r from-green-500 to-emerald-600 rounded-full">
              <Settings className="lg:w-8 lg:h-8 w-6 h-6 text-white animate-pulse" />
            </div>
          </div>
          <h1 className="lg:text-4xl md:text-5xl text-2xl font-bold text-gray-800 mb-4">
            Block Working Manual Amendments
          </h1>
          <p className="lg:text-xl text-base text-gray-600 max-w-2xl mx-auto">
            Download the latest Block Working Manual amendment slips and operational procedure updates
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-green-500 to-emerald-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* PDF Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {bwmPdfFiles.map((file, index) => {
            const IconComponent = file.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-200 overflow-hidden relative"
              >
                <div className="p-6">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-linear-to-r from-green-500 to-emerald-600 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="lg:text-lg text-base font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                        {file.name}
                      </h3>
                      <p className="text-sm text-gray-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        File Size: {file.size}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {file.description}
                  </p>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(file.filename)}
                    className="w-full bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Download PDF
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-green-500/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-green-300">
            <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-green-600" />
              About Block Working Manual Amendments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What are Block Working Manual Amendments?</h3>
                <p className="text-sm leading-relaxed">
                  Block Working Manual amendments contain updated operational procedures, signaling protocols, 
                  and safety guidelines for railway block working and train control systems.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How to Use</h3>
                <p className="text-sm leading-relaxed">
                  Download the relevant amendment slip based on your requirements. The updated manual contains 
                  comprehensive block working procedures and latest operational guidelines.
                </p>
              </div>
            </div>
            
            {/* Safety Notice */}
            <div className="mt-6 p-4 bg-linear-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <div className="flex items-center mb-2">
                <Settings className="w-5 h-5 text-green-600 mr-2" />
                <h4 className="font-semibold text-green-800">Important Operational Notice</h4>
              </div>
              <p className="text-sm text-green-700">
                These documents contain critical operational information for block working procedures. 
                Please ensure all personnel are trained on the latest block working protocols and safety measures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockWorkingManualAmendments