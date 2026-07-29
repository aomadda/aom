'use client'
import React from 'react'
import { Download, FileText, Calendar } from 'lucide-react'
import { gsrpdfFiles } from '@/assets/amendments'

const GeneralSubsidiaryRulesAmendments = () => {
  const handleDownload = (filename: string) => {
    const link = document.createElement('a')
    link.href = `/gsr-amendments-pdfs/${filename}`
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Auto-open PDF on mobile devices after download
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) {
      setTimeout(() => {
        window.open(`/gsr-amendments-pdfs/${filename}`, '_blank')
      }, 1000) // Wait 1 second for download to start
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="lg:text-4xl md:text-5xl text-3xl font-bold text-gray-800 mb-4">
            G&SR Amendments
          </h1>
          <p className="lg:text-xl text-base text-gray-600 max-w-2xl mx-auto">
            Download the latest General and Subsidiary Rules (G&SR) amendments and updates
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* PDF Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {gsrpdfFiles.map((file, index) => {
            const IconComponent = file.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200 overflow-hidden"
              >
                <div className="p-3 lg:p-6">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-linear-to-r from-blue-500 to-indigo-600 rounded-lg mr-4">
                      <IconComponent className="lg:w-6 lg:h-6 w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="lg:text-lg text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
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
                    className="w-full bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Download PDF
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-4 lg:p-8 border border-blue-200">
            <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-blue-600" />
              About G&SR Amendments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What are G&SR Amendments?</h3>
                <p className="text-sm leading-relaxed">
                  General and Subsidiary Rules (G&SR) amendments are official updates to railway regulations 
                  that ensure compliance with current standards and operational requirements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How to Use</h3>
                <p className="text-sm leading-relaxed">
                  Download the relevant amendment slip based on your requirements. The Digital SCR G&SR 2020 
                  contains all amendments up to AS 21 in a single comprehensive document.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralSubsidiaryRulesAmendments