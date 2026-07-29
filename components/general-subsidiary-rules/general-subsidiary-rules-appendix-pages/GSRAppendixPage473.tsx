"use client"
import React from 'react'

const GSRAppendixPage473 = () => {
  const formsData = [
    { num: 1, description: "Signal & Telecommunication Disconnection / Reconnection Notice", colour: "Black", formNumber: "S&T (T/351)", hasHash: false },
    { num: 2, description: "Advance authority to pass defective signals", colour: "Blue", formNumber: "T/369(1)", hasHash: false },
    { num: 3, description: "Authority to pass signals at 'on' or defective position", colour: "Blue", formNumber: "T/369 (3b)", hasHash: true },
    { num: 4, description: "Caution Order", colour: "Green", formNumber: "T/409", hasHash: false },
    { num: 5, description: "'NIL' Caution Order", colour: "Green", formNumber: "T/A 409", hasHash: false },
    { num: 6, description: "Train Examination Advice/Report", colour: "Black", formNumber: "T/431", hasHash: false },
    { num: 7, description: "Authority to proceed for material train (Return to originating station)", colour: "Blue", formNumber: "T/462", hasHash: false },
    { num: 8, description: "Authority to proceed for material train (Proceed to next station)", colour: "Blue", formNumber: "T/A 462", hasHash: false },
    { num: 9, description: "Authority to proceed for track machine (Return to originating station)", colour: "Blue", formNumber: "T/465", hasHash: false },
    { num: 10, description: "Authority to proceed for track machine (Proceed to next station)", colour: "Blue", formNumber: "T/A 465", hasHash: false },
    { num: 11, description: "Authority to receive a train on an obstructed line", colour: "Blue", formNumber: "T/509", hasHash: false },
    { num: 12, description: "Authority to receive a train on to a non - signalled line", colour: "Blue", formNumber: "T/510", hasHash: true },
    { num: 13, description: "Authority to start from a non-signaled line", colour: "Blue", formNumber: "T/511", hasHash: false },
    { num: 14, description: "Authority to start from a line with common Starter signal", colour: "Blue", formNumber: "T/512", hasHash: false },
    { num: 15, description: "Authority to proceed for relief engine/train into an occupied block section", colour: "Red", formNumber: "T/A 602", hasHash: false },
    { num: 16, description: "Authority for opening communication during total interruption of communication on single line section", colour: "Red", formNumber: "T/B 602", hasHash: true },
    { num: 17, description: "Authority for working of trains during total interruption of communication on double line section", colour: "Red", formNumber: "T/C 602", hasHash: false },
    { num: 18, description: "Authority for temporary single line working on double line section", colour: "Red", formNumber: "T/D 602", hasHash: true },
    { num: 19, description: "Line Clear enquiry message asking Line Clear for despatch of trains during total failure of communication on single line section", colour: "Red", formNumber: "T/E 602", hasHash: false },
    { num: 20, description: "Conditional Line Clear reply message", colour: "Red", formNumber: "T/F 602", hasHash: false },
    { num: 21, description: "Conditional Line Clear ticket (Up)", colour: "Red", formNumber: "T/G 602", hasHash: false },
    { num: 22, description: "Conditional Line Clear ticket (Down)", colour: "Red", formNumber: "T/H 602", hasHash: false },
    { num: 23, description: "Message on restoration", colour: "Black", formNumber: "T/I 602", hasHash: false },
    { num: 24, description: "Block Ticket", colour: "Red", formNumber: "T/J 602", hasHash: false },
    { num: 25, description: "Written permission by Guard to Loco Pilot to proceed to next station from mid-section", colour: "Blue", formNumber: "T/609", hasHash: false },
    { num: 26, description: "Shunting order", colour: "Blue", formNumber: "T /806", hasHash: false },
    { num: 27, description: "Authority for Working of Trains During Total Interruption of Communication/Obstruction On Line in Automatic Block System", colour: "Red", formNumber: "T/B 912", hasHash: true },
    { num: 28, description: "Authority to proceed for relief engine / train into an Automatic Block signalling section", colour: "Red", formNumber: "T/C 912", hasHash: false },
    { num: 29, description: "Authority For Working of Trains During Prolonged Signal Failure In Automatic Block System.", colour: "Red", formNumber: "T/D 912", hasHash: true },
    { num: 30, description: "Authority For Temporary. Single Line Working on Double line Automatic Block System.", colour: "Red", formNumber: "T/E 912", hasHash: true },
    { num: 31, description: "Train intact arrival register", colour: "Black", formNumber: "T/1410", hasHash: false },
    { num: 32, description: "Line Clear enquiry and reply message book in the event of failure / Suspension / Non-provision of Block Instruments message (inward)", colour: "Black", formNumber: "T/A 1425", hasHash: false },
    { num: 33, description: "Line Clear enquiry and reply message book in the event of failure / Suspension / Non-provision of Block Instruments message (inward)", colour: "Black", formNumber: "T/B 1425", hasHash: false },
    { num: 34, description: "UP Paper Line Clear Ticket", colour: "Blue", formNumber: "T/C 1425", hasHash: false },
    { num: 35, description: "Down Paper Line Clear Ticket", colour: "Blue", formNumber: "T/D 1425", hasHash: false },
    { num: 36, description: "Trolly/Lorry/OHE ladder trolly notice", colour: "Black", formNumber: "T/1518", hasHash: false },
    { num: 37, description: "Authority for Trolly/Lorry/Motor Trolly to be used on token less sections in Absolute Block System and Automatic Block System territories", colour: "Blue", formNumber: "T/A 1525", hasHash: false },
    { num: 38, description: "Motor trolley permit (following)", colour: "Blue", formNumber: "T/1525", hasHash: false },
    { num: 39, description: "Authority to proceed for tower wagon and to return to starting station", colour: "Blue", formNumber: "T/1708", hasHash: false },
    { num: 40, description: "Authority to proceed for tower wagon to proceed to station in advance", colour: "Blue", formNumber: "T/A 1708", hasHash: false },
  ]

  const getColourClass = (colour: string) => {
    switch (colour.toLowerCase()) {
      case 'black':
        return 'bg-gray-800/50 border-gray-700/50 text-gray-200'
      case 'blue':
        return 'bg-blue-900/50 border-blue-700/50 text-blue-200'
      case 'red':
        return 'bg-red-900/50 border-red-700/50 text-red-200'
      case 'green':
        return 'bg-green-900/50 border-green-700/50 text-green-200'
      default:
        return 'bg-slate-800/50 border-slate-700/50 text-slate-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-tr from-purple-500/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-6 px-2 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div className="lg:w-24 lg:h-24 w-16 h-16 bg-gradient-to-br from-blue-500/70 via-indigo-500/70 to-purple-500/70 rounded-full blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full border border-white/10 bg-gradient-to-br from-blue-700/60 to-indigo-800/60 backdrop-blur">
                    <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
                      <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-2xl lg:text-6xl font-bold tracking-wide bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent animate-fade-in">
              APPENDIX – XV
            </h1>
            <div className="mt-4 inline-flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent via-blue-400/50 to-white/70"></span>
              <span className="text-lg lg:text-2xl font-semibold text-indigo-200 tracking-[0.35em]">
                OPERATING FORMS
              </span>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent via-blue-400/50 to-white/70"></span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-3 lg:p-10">
                {/* Table Header */}
                <div className="hidden lg:grid grid-cols-12 gap-4 mb-6 px-4 py-4 rounded-xl bg-gradient-to-r from-blue-900/50 via-indigo-900/50 to-purple-900/50 border border-white/10">
                  <div className="col-span-1 text-center font-bold text-sm lg:text-base text-blue-200">S.No.</div>
                  <div className="col-span-6 text-center font-bold text-sm lg:text-base text-blue-200">Description</div>
                  <div className="col-span-2 text-center font-bold text-sm lg:text-base text-blue-200">Colour</div>
                  <div className="col-span-3 text-center font-bold text-sm lg:text-base text-blue-200">Form Number</div>
                </div>

                {/* Forms List */}
                <div className="space-y-4">
                  {formsData.map((form, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                      <div className="relative p-4 lg:p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                          {/* S.No. */}
                          <div className="lg:col-span-1 flex items-center justify-center lg:justify-start">
                            <div className="flex items-center gap-2">
                              {form.hasHash && <span className="text-cyan-400 font-bold">#</span>}
                              <span className="flex lg:h-10 lg:w-10 h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-sm font-semibold text-cyan-100 lg:text-base">
                                {form.num}
                              </span>
                            </div>
                          </div>

                          {/* Description */}
                          <div className="lg:col-span-6 space-y-2">
                            <div className="lg:hidden flex items-center gap-2 mb-2">
                              {form.hasHash && <span className="text-cyan-400 font-bold">#</span>}
                              <span className="text-xs font-semibold text-blue-300">S.No. {form.num}</span>
                            </div>
                            <p className="text-sm lg:text-base leading-relaxed text-blue-100/90">
                              {form.description}
                            </p>
                          </div>

                          {/* Colour */}
                          <div className="lg:col-span-2">
                            <div className="lg:hidden text-xs font-semibold text-blue-300 mb-1">Colour</div>
                            <div className={`inline-flex items-center justify-center px-3 py-1.5 rounded-lg border ${getColourClass(form.colour)} text-xs lg:text-sm font-medium`}>
                              {form.colour}
                            </div>
                          </div>

                          {/* Form Number */}
                          <div className="lg:col-span-3">
                            <div className="lg:hidden text-xs font-semibold text-blue-300 mb-1">Form Number</div>
                            <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg border border-indigo-400/40 bg-indigo-500/10 text-indigo-200 text-xs lg:text-sm font-mono font-medium">
                              {form.formNumber}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Note */}
                <div className="mt-8 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-indigo-900/20 transition-all duration-500 hover:border-indigo-400/30 hover:bg-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-purple-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                  <div className="relative flex flex-col gap-5 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                    <div className="space-y-3 text-sm leading-relaxed text-blue-200/80 italic lg:text-base">
                      <p>
                        #format of the forms provided in the Appendix are as below.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default GSRAppendixPage473