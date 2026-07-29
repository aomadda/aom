"use client"
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Download, BookOpen, FileText, Shield, Users } from 'lucide-react'

// Dynamically import components with SSR disabled
const BWMPartA = dynamic(() => import('@/components/block-working-manual/BWMPartA'), { ssr: false })
const BWMPartB = dynamic(() => import('@/components/block-working-manual/BWMPartB'), { ssr: false })
const BWMPartC = dynamic(() => import('@/components/block-working-manual/BWMPartC'), { ssr: false })
const BWMAnnexureOne = dynamic(() => import('@/components/block-working-manual/BWMAnnexureOne'), { ssr: false })
const BWMAnnexure = dynamic(() => import('@/components/block-working-manual/BWMAnnexure'), { ssr: false })

const BlockWorkingManual = () => {
  return (
    <div className='min-h-screen bg-slate-900 text-white'>
      <div className='bg-linear-to-r from-slate-800 via-blue-900 to-slate-800 py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='text-center mb-12'>
            <h1 className='text-5xl font-bold mb-6 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
            BLOCK WORKING MANUALS
              
            </h1>
            <h2 className='text-3xl font-semibold text-white mb-8'>
            SOUTH CENTRAL RAILWAY
            </h2>
          </div>

          {/* Manual Parts Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
            <div className='bg-linear-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300'>
              <div className='text-center'>
                <BookOpen className='w-12 h-12 mx-auto mb-4 text-blue-400' />
                <h3 className='text-lg font-semibold text-blue-300 mb-2'>PART-A</h3>
                <p className='text-slate-300 text-sm'>SINGLE LINE - TOKEN BWMS (T)</p>
              </div>
            </div>

            <div className='bg-linear-to-br from-green-600/20 to-blue-600/20 rounded-xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300'>
              <div className='text-center'>
                <FileText className='w-12 h-12 mx-auto mb-4 text-green-400' />
                <h3 className='text-lg font-semibold text-green-300 mb-2'>PART-B</h3>
                <p className='text-slate-300 text-sm'>SINGLE LINE - TOKEN LESS BWMS (TL)</p>
              </div>
            </div>

            <div className='bg-linear-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300'>
              <div className='text-center'>
                <Shield className='w-12 h-12 mx-auto mb-4 text-purple-400' />
                <h3 className='text-lg font-semibold text-purple-300 mb-2'>PART-C</h3>
                <p className='text-slate-300 text-sm'>DOUBLE LINE BWMD</p>
              </div>
            </div>

            <div className='bg-linear-to-br from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300'>
              <div className='text-center'>
                <Users className='w-12 h-12 mx-auto mb-4 text-orange-400' />
                <h3 className='text-lg font-semibold text-orange-300 mb-2'>ANNEXURE</h3>
                <p className='text-slate-300 text-sm'>PAPER LINE CLEAR TICKETS</p>
              </div>
            </div>
          </div>

          {/* Update Info */}
          <div className='text-center mb-8'>
            <div className='inline-block bg-linear-to-r from-yellow-500/20 to-orange-500/20 px-6 py-3 rounded-full border border-yellow-500/30'>
              <span className='text-yellow-300 font-semibold'>
                UPDATED UPTO AS 5 • 2008
              </span>
            </div>
            <p className='text-slate-300 mt-3 italic'>
              (for official use only)
            </p>
          </div>
        </div>
      </div>

      {/* Preface Section */}
      <div className='py-16 bg-linear-to-r from-slate-900 to-slate-800'>
        <div className='max-w-4xl mx-auto px-4'>
          <div className='bg-linear-to-r from-slate-800/50 to-blue-900/50 rounded-2xl p-8 border border-slate-700/50 shadow-2xl'>
            <h3 className='text-2xl font-bold mb-6 text-center text-blue-300 border-b border-slate-600 pb-4'>
              PREFACE
            </h3>
            
            <div className='space-y-6 text-slate-200 leading-relaxed'>
              <p>
                The Block Working Manuals pertaining to single line / token, token less and double line incorporating the procedures and practices to be followed for working of trains were last published in 1978. With phasing out of some token/token less block instruments and changes in certain rules updating of these Manuals has become necessary. This has now been done by bringing out the Block Working Manuals – singleline- token / token less and double line.
              </p>
              
              <p>
                The three Block Working Manuals are kept in one book itself. Every Railway servant supplied with Block Working Manuals must make himself thoroughly acquainted with the rules enumerated therein and he will be responsible for knowledge of and compliance with all the rules concerning his working.
              </p>
              
              <p>
                These Manuals are to be read in conjunction with the General and Subsidiary Rules and nothing herein shall be treated as modifying or amending the General and Subsidiary Rules.
              </p>
              
              <p>
                Amendment to the Block Working Manuals will be issued in the form of page replacement and it is the responsibility of the staff to whom these Manuals are supplied to keep them up-to-date. It is hoped that the procedures and practices envisaged in these Manuals will help the staff in carrying out their duties efficiently and safely.
              </p>
            </div>

            {/* Signature Section */}
            <div className='mt-8 pt-6 border-t border-slate-600'>
              <div className='flex flex-col md:flex-row justify-between items-start md:items-end'>
                <div className='text-slate-300 text-sm'>
                  <p>Secunderabad,</p>
                  <p>Date : 24-12-2005</p>
                </div>
                <div className='text-right mt-4 md:mt-0'>
                  <p className='text-blue-300 font-semibold'>(H.G.SHARMA)</p>
                  <p className='text-slate-300 text-sm'>CHIEF OPERATIONS MANAGER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
        <BWMPartA />
        <BWMPartB />
        <BWMPartC />
        <BWMAnnexure />
        <BWMAnnexureOne />
      </Suspense>
      

      {/* Download PDF Section */}
      <div className='py-16 bg-linear-to-r from-slate-800 to-slate-900'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='text-center'>
            <div className='bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl border border-blue-500/20'>
              <h2 className='text-3xl font-bold mb-4 text-white'>
                Complete Block Working Manual
              </h2>
              <p className='text-slate-200 mb-8 text-lg max-w-2xl mx-auto'>
                Download the complete BWM document updated up to AS-6 for comprehensive reference and offline study
              </p>
              <a
                href='/block-working-manual-pdfs/BWM UDATED UPTO AS-6.pdf'
                target="_blank"
                rel="noopener noreferrer"
                className='inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-blue-200'
              >
                <Download className='w-6 h-6' />
                Download PDF
              </a>
              
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BlockWorkingManual