'use client'

import React from 'react'

interface StandardForm {
  number: string
  title: string
}

const StandardFormsPage = () => {
  const forms: StandardForm[] = [
    { number: 'SF-1', title: 'Order of Suspension' },
    { number: 'SF-2', title: 'Order of Deemed Suspension' },
    { number: 'SF-3', title: 'Certificate to be furnished by suspended Railway employee' },
    { number: 'SF-4', title: 'Revocation of suspension' },
    { number: 'SF-5', title: 'Charge sheet for major penalty' },
    { number: 'SF-6', title: 'Refusing of permission to inspect the documents' },
    { number: 'SF-7', title: 'Appointment of Inquiry Officer/Board of Inquiry' },
    { number: 'SF-8', title: 'Appointment of Presenting Officer' },
    { number: 'SF-9', title: 'Not issuded' },
    { number: 'SF-10', title: 'Disciplinary action in Common Proceedings' },
    { number: 'SF-10(a)', title: 'Appointment of Inquiry Officer in Common Proceedings' },
    { number: 'SF-10(b)', title: 'Appointment of Presenting Officer in Common Proceedings Charge sheet for minor penalty' },
    { number: 'SF-11', title: 'Charge sheet for minor penalty' },
    { number: 'SF-11(b)', title: 'Charge sheet for initiation of minor penalty in case where inquiry is essential' },
    { number: 'SF-11(c)', title: 'For making disciplinary action for minor penalty where the charge sheet for major penalty was initially issued' },
    { number: 'SF-12', title: 'Memorandum where action is proposed under Rule 14(i)' },
    { number: 'SF-13', title: 'Permission from President for action taking against the retired Railway employee' },
    { number: 'SF-14', title: 'Charge sheet for retired Railway employee' },
  ]

  const getFormColor = (index: number) => {
    const colors = [
      'bg-gradient-to-r from-blue-600 to-blue-700',
      'bg-gradient-to-r from-indigo-600 to-indigo-700',
      'bg-gradient-to-r from-purple-600 to-purple-700',
      'bg-gradient-to-r from-pink-600 to-pink-700',
      'bg-gradient-to-r from-red-600 to-red-700',
      'bg-gradient-to-r from-orange-600 to-orange-700',
      'bg-gradient-to-r from-yellow-600 to-yellow-700',
      'bg-gradient-to-r from-green-600 to-green-700',
      'bg-gradient-to-r from-teal-600 to-teal-700',
      'bg-gradient-to-r from-cyan-600 to-cyan-700',
      'bg-gradient-to-r from-sky-600 to-sky-700',
      'bg-gradient-to-r from-violet-600 to-violet-700',
      'bg-gradient-to-r from-rose-600 to-rose-700',
      'bg-gradient-to-r from-amber-600 to-amber-700',
      'bg-gradient-to-r from-emerald-600 to-emerald-700',
      'bg-gradient-to-r from-lime-600 to-lime-700',
      'bg-gradient-to-r from-fuchsia-600 to-fuchsia-700',
      'bg-gradient-to-r from-slate-600 to-slate-700',
    ]
    return colors[index % colors.length]
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Standard Forms for use in Disciplinary Proceedings
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to standard forms used in disciplinary proceedings
          </p>
        </div>

        {/* Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {forms.map((form, index) => (
            <div
              key={index}
              className="group bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              {/* Form Header */}
              <div className={`${getFormColor(index)} text-white px-4 py-4`}>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold">
                    {form.number}
                  </h2>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-4">
                <p className="text-gray-200 leading-relaxed font-medium text-sm">
                  {form.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {forms.length}
            </div>
            <div className="text-gray-300">Total Forms</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              SF
            </div>
            <div className="text-gray-300">Standard Forms</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              DP
            </div>
            <div className="text-gray-300">Disciplinary Proceedings</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StandardFormsPage
