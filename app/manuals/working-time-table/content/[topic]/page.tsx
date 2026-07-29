"use client"
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import DetentionCost from '@/components/working-time-table/DetentionCost'
import StoppageCost from '@/components/working-time-table/StoppageCost'
import ReliefTrains from '@/components/working-time-table/ReliefTrains'
import ODC from '@/components/working-time-table/ODC'
import CCRoutes from '@/components/working-time-table/CCRoutes'
import FreightTrainExamination from '@/components/working-time-table/FreightTrainExamination'
import InvalidBPC from '@/components/working-time-table/InvalidBPC'
import Weighbridges from '@/components/working-time-table/Weighbridges'
import TimeTabling from '@/components/working-time-table/TimeTabling'
import SPAD from '@/components/working-time-table/SPAD'
import Cranes from '@/components/working-time-table/Cranes'
import BeatOfART from '@/components/working-time-table/BeatOfART'
import GLPCheck from '@/components/working-time-table/GLPCheck'
import AutomaticClosingOpening from '@/components/working-time-table/AutomaticClosingOpening'
import LocomotiveAxleLoads from '@/components/working-time-table/LocomotiveAxleLoads'
import CoilSpringBreakage from '@/components/working-time-table/CoilSpringBreakage'
import ICFCoaches from '@/components/working-time-table/ICFCoaches'
import LHBCoaches from '@/components/working-time-table/LHBCoaches'
import MEMUTrains from '@/components/working-time-table/MEMUTrains'
import DieselLocomotiveParameters from '@/components/working-time-table/DieselLocomotiveParameters'
import WagonData from '@/components/working-time-table/WagonData'
import Kavach from '@/components/working-time-table/Kavach'
import PlacementAndRemoval from '@/components/working-time-table/PlacementAndRemoval'
import MSDAC from '@/components/working-time-table/MSDAC'
import HeadOnGeneration from '@/components/working-time-table/HeadOnGeneration'
import InspectionCarriages from '@/components/working-time-table/InspectionCarriages'
import PowerInterception from '@/components/working-time-table/PowerInterception'
import DeadLocomotives from '@/components/working-time-table/DeadLocomotives'
import BrakeContinuityTest from '@/components/working-time-table/BrakeContinuityTest'
import OpenDoorPrevention from '@/components/working-time-table/OpenDoorPrevention'
import DepartmentalMaterialTrains from '@/components/working-time-table/DepartmentalMaterialTrains'
import FlatTyre from '@/components/working-time-table/FlatTyre'
import VandheBharathTrains from '@/components/working-time-table/VandheBharathTrains'
import PantoEntaglement from '@/components/working-time-table/PantoEntaglement'
import ElectrifiedSection from '@/components/working-time-table/ElectrifiedSection'
import TwinPipeBrakeSystem from '@/components/working-time-table/TwinPipeBrakeSystem'
import TrainsStabling from '@/components/working-time-table/TrainsStabling'

const TopicContentPage = () => {
  const params = useParams()
  const router = useRouter()
  const topicId = params.topic as string
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Map topic IDs to components
  const topicComponents: { [key: string]: React.ComponentType } = {
    'detention-cost': DetentionCost,
    'stoppage-cost': StoppageCost,
    'relief-trains': ReliefTrains,
    'odc': ODC,
    'cc-routes': CCRoutes,
    'freight-train-examination': FreightTrainExamination,
    'invalid-bpc': InvalidBPC,
    'weighbridges': Weighbridges,
    'time-tabling': TimeTabling,
    'spad': SPAD,
    'cranes': Cranes,
    'beat-of-art': BeatOfART,
    'glp-check': GLPCheck,
    'automatic-closing-opening': AutomaticClosingOpening,
    'locomotive-axle-loads': LocomotiveAxleLoads,
    'coil-spring-breakage': CoilSpringBreakage,
    'icf-coaches': ICFCoaches,
    'lhb-coaches': LHBCoaches,
    'memu-trains': MEMUTrains,
    'diesel-locomotive-parameters': DieselLocomotiveParameters,
    'wagon-data': WagonData,
    'kavach': Kavach,
    'placement-and-removal': PlacementAndRemoval,
    'msdac': MSDAC,
    'head-on-generation': HeadOnGeneration,
    'inspection-carriages': InspectionCarriages,
    'power-interception': PowerInterception,
    'dead-locomotives': DeadLocomotives,
    'brake-continuity-test': BrakeContinuityTest,
    'open-door-prevention': OpenDoorPrevention,
    'departmental-material-trains': DepartmentalMaterialTrains,
    'flat-tyre': FlatTyre,
    'vande-bharat-trains': VandheBharathTrains,
    'panto-entanglement': PantoEntaglement,
    'electrified-section': ElectrifiedSection,
    'twin-pipe-brake-system': TwinPipeBrakeSystem,
    'trains-stabling': TrainsStabling
  }

  const topicNames: { [key: string]: string } = {
    'detention-cost': 'Detention Cost',
    'stoppage-cost': 'Stoppage Cost',
    'relief-trains': 'Relief Trains',
    'odc': 'ODC (Over Dimensional Consignment)',
    'cc-routes': 'CC Routes',
    'freight-train-examination': 'Freight Train Examination',
    'invalid-bpc': 'Invalid BPC',
    'weighbridges': 'Weighbridges',
    'time-tabling': 'Time Tabling',
    'spad': 'SPAD (Signal Passing At Danger)',
    'cranes': 'Cranes Status',
    'beat-of-art': 'Beat of ART, ARME, 140-T BD Crane',
    'glp-check': 'GLP Check Procedure',
    'automatic-closing-opening': 'Automatic Closing/Opening of Hinged Doors',
    'locomotive-axle-loads': 'Electric Locomotive Axle Loads',
    'coil-spring-breakage': 'Coil Spring Breakage Speed Restrictions',
    'icf-coaches': 'ICF Coaches Dimensions',
    'lhb-coaches': 'LHB Coaches Dimensions',
    'memu-trains': 'MEMU & EMU Technical Details',
    'diesel-locomotive-parameters': 'Diesel Locomotive Parameters',
    'wagon-data': 'Wagon Data',
    'kavach': 'Kavach Operations',
    'placement-and-removal': 'Container Rake Placement & Removal',
    'msdac': 'MSDAC/Axle Counters',
    'head-on-generation': 'Head on Generation (HOG) Trains',
    'inspection-carriages': 'Attachment of Inspection Carriages',
    'power-interception': 'Power Interception/Loco Reversal',
    'dead-locomotives': 'Haulage of Dead Locomotives',
    'brake-continuity-test': 'Brake Continuity Test',
    'open-door-prevention': 'Open Door Prevention',
    'departmental-material-trains': 'Departmental Material Trains (DMTs)',
    'flat-tyre': 'JPO on Flat Tyre',
    'vande-bharat-trains': 'Vande Bharat Trains',
    'panto-entanglement': 'Panto Entanglement/OHE Defect',
    'electrified-section': 'Safety Instructions In Electrified Section',
    'twin-pipe-brake-system': 'Twin Pipe Brake System',
    'trains-stabling': 'Stabling of Trains'
  }

  const TopicComponent = topicComponents[topicId]

  const topics = ['detention-cost', 'stoppage-cost', 'relief-trains', 'odc', 'cc-routes', 'freight-train-examination', 'invalid-bpc', 'weighbridges', 'time-tabling', 'spad', 'cranes', 'beat-of-art', 'glp-check', 'automatic-closing-opening', 'locomotive-axle-loads', 'coil-spring-breakage', 'icf-coaches', 'lhb-coaches', 'memu-trains', 'diesel-locomotive-parameters', 'wagon-data', 'kavach', 'placement-and-removal', 'msdac', 'head-on-generation', 'inspection-carriages', 'power-interception', 'dead-locomotives', 'brake-continuity-test', 'open-door-prevention', 'departmental-material-trains', 'flat-tyre', 'vande-bharat-trains', 'panto-entanglement', 'electrified-section', 'twin-pipe-brake-system', 'trains-stabling']
  const currentIndex = topics.indexOf(topicId)
  const prevTopic = currentIndex > 0 ? topics[currentIndex - 1] : null
  const nextTopic = currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null

  if (!TopicComponent) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Topic Not Found</h1>
          <p className="text-gray-300 mb-6">The requested topic does not exist.</p>
          <button
            onClick={() => router.push('/manuals/working-time-table')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Working Time Table
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 relative">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={() => router.push('/manuals/working-time-table')}
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors mb-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-sm font-medium">Back to WTT</span>
              </button>
              <div className="flex justify-center items-center w-full">
                <h1 className="text-2xl md:text-3xl font-bold font-serif uppercase text-center">
                  {topicNames[topicId]}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto lg:px-4 px-2 py-4">
        <TopicComponent />

        {/* Navigation Buttons */}
        <div className="mt-6 mb-6 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
          <div className="flex items-center justify-between space-x-8">
            {/* Previous Topic Button */}
            <button
              onClick={() => {
                if (prevTopic) {
                  router.push(`/manuals/working-time-table/content/${prevTopic}`)
                }
              }}
              disabled={!prevTopic}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                prevTopic
                  ? 'bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:scale-105'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm flex items-center justify-center gap-1">
                Previous
              </span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm">
                {prevTopic ? topicNames[prevTopic] : 'N/A'}
              </span>
            </button>

            {/* Current Topic Indicator */}
            <div className="flex-1 text-center">
              <div className="inline-block px-4 py-2 bg-linear-to-r from-purple-500 to-indigo-600 rounded-lg">
                <span className="text-white text-sm font-medium">
                  {topicNames[topicId]}
                </span>
              </div>
            </div>

            {/* Next Topic Button */}
            <button
              onClick={() => {
                if (nextTopic) {
                  router.push(`/manuals/working-time-table/content/${nextTopic}`)
                }
              }}
              disabled={!nextTopic}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-sm text-white transition-all duration-300 ${
                nextTopic
                  ? 'bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:scale-105'
                  : 'bg-gray-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span className="text-xs lg:text-sm flex items-center justify-center gap-1">
                Next
              </span>
              <hr className="border-white/30 w-full my-1" />
              <span className="text-xs lg:text-sm">
                {nextTopic ? topicNames[nextTopic] : 'N/A'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 bg-linear-to-tr from-blue-600 via-blue-400 to-blue-700 text-white p-1 rounded-full shadow-2xl border-2 border-white hover:scale-110 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 z-50 flex items-center justify-center animate-pulse"
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

export default TopicContentPage
