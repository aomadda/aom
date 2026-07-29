"use client"
// Tailwind CSS gradient classes are correct - warnings are false positives

import React, { useState, useCallback } from "react"
import { BookOpen, Layers, Users, RadioTower, TrainFront, Building2, AlertTriangle, GitBranch, Blocks, Workflow, ArrowRightLeft, Shield, Ticket, LifeBuoy, CircuitBoard, Hammer, Fence, Zap, Puzzle, ChevronDown, ChevronUp, FileText, BookOpenCheck, ExternalLink } from "lucide-react"
import { useRouter } from 'next/navigation'
import { getPageIdFromRule } from '@/lib/g&sr-chapter-mapping'

interface Chapter {
  id: number
  title: string
  description: string
  pages: string
  rules: string[]
  icon: React.ReactNode
  gradient: string
}

const stripPageNumber = (line: string) => {
  return line.replace(/\s*(?:\.{2,}|…+)?\s*\b\d+(?:\s*[-–]\s*\d+)?$/u, "")
}

const formatRuleLine = (line: string) => {
  const cleaned = stripPageNumber(line).trim()
  const match = cleaned.match(/^((?:\d+\.)+\d+)\s*(.*)$/)

  if (!match) {
    return cleaned
  }

  const [, ruleNumber, rest] = match
  const content = rest.trim()

  return content.length > 0 ? `Rule ${ruleNumber}\n${content}` : `Rule ${ruleNumber}`
}

const chapterData: Chapter[] = [
  {
    id: 1,
    title: "Chapter - I",
    description: "PRELIMINARY",
    pages: "1 - 7",
    rules: [
      "1.01 Short title and commencement",
      "1.02 Definitions",
      "1.03 Classification of stations",
    ],
    icon: <Layers className="w-7 h-7 text-white" />,
    gradient: "from-sky-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Chapter - II",
    description: "RULES APPLYING TO RAILWAY SERVANTS GENERALLY",
    pages: "8 - 12",
    rules: [
      "2.01 Supply of copies of rules",
      "2.02 Upkeep of the copy of rules",
      "2.03 Knowledge of rules",
      "2.04 Assistance in observance of rules",
      "2.05 Prevention of trespass, damage or loss",
      "2.06 Obedience to rules and orders",
      "2.07 Attendance for duty",
      "2.08 Absence from duty",
      "2.09 Taking alcoholic drink, sedative, narcotic, stimulant drug or preparation",
      "2.10 Conduct of railway servants",
      "2.11 Duty for securing safety",
    ],
    icon: <Users className="w-7 h-7 text-white" />,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    title: "Chapter - III",
    description: "SIGNALS",
    pages: "13 - 90",
    rules: [
      "A. General Provisions",
      "3.01 General use of signals",
      "3.02 Kinds of signals",
      "3.03 Use of night signals by day",
      "3.04 Placing of signals & signal arms and painting of signal arms",
      "B. Description of Fixed Signals",
      "3.05 Use of fixed signals",
      "3.06 Description of Warner signals and their indications",
      "3.07 Description of Distant signals and their indications",
      "3.08 Description of Stop signals and their indications",
      "3.09 Kinds of fixed Stop signals for approaching trains",
      "3.10 Kinds of fixed Stop signals for departing trains",
      "3.11 Intermediate Block Stop signal",
      "3.12 Kinds of fixed Stop signals in Automatic Block Territories",
      "3.13 Calling-on signals",
      "3.14 Shunt signals",
      "3.15 Co-acting signals",
      "3.16 Repeating signals",
      "3.17 Distinguishing markers and signs for signals",
      "3.18 Signals out of use",
      "3.19 Placing of Stop signals at diverging junctions",
      "3.20 Placing of Stop signals at converging junctions",
      "3.21 Signals on bracket post or signal bridge or gantry",
      "3.22 Placing of more than one signal on the same post",
      "3.23 Electric repeater",
      "3.24 Back lights",
      "C. Equipment of Signals",
      "3.25 Obligation to provide fixed signals at stations",
      "3.26 Commissioning of fixed signals",
      "3.27 Minimum equipment of fixed signals at stations provided with manually operated multiple-aspect signaling",
      "3.28 Minimum equipment of fixed signals at stations provided with modified lower quadrant signaling",
      "3.29 Minimum equipment of fixed signals at other stations provided with two-aspect signaling",
      "3.30 Additional fixed signals at stations generally",
      "3.31 Signals at class ‘D’ stations",
      "3.32 Provision of an Advanced Starter, Shunting Limit Board or Block Section Limit Board",
      "3.33 Exceptions to Rules 3.27, 3.28, 3.29 and 3.32",
      "3.34 Fixed signals at level crossings",
      "3.35 Protection and working of points of outlying sidings",
      "D. Working of Signals and Points",
      "3.36 Fixed signals generally",
      "3.37 Normal aspects of signals",
      "3.38 Points affecting movement of trains",
      "3.39 Locking of facing points",
      "3.40 Conditions for taking ‘off’ Home signal",
      "3.41 Conditions for taking ‘off’ Outer signal",
      "3.42 Conditions for taking ‘off’ last Stop signal or Intermediate Block Stop signal",
      "3.43 Conditions for taking ‘off’ Warner signal",
      "3.44 Conditions for taking ‘off’ gate Stop signal",
      "3.45 Conditions for taking ‘off’ Calling-on signal",
      "3.46 Use of fixed signals for shunting",
      "3.47 Taking ‘off’ signals for more than one train at a time",
      "3.48 Stoppage of trains out of course at stations provided with two-aspect signaling",
      "3.49 Care and lighting of signal lamps",
      "3.50 Traps, slip sidings and catch sidings",
      "3.51 Points",
      "E. Hand Signals",
      "3.52 Exhibition of hand signals",
      "3.53 Stop hand signal",
      "3.54 Proceed hand signal",
      "3.55 Proceed with caution hand signal",
      "3.56 Hand signals for shunting",
      "3.57 Banner flags",
      "3.58 Knowledge and possession of hand signals",
      "F. Detonating Signals",
      "3.59 Description of detonating signals",
      "3.60 Method of using detonators",
      "3.61 Placing of detonators in thick, foggy or tempestuous weather impairing visibility",
      "3.62 Placing of detonators in case of obstruction",
      "3.63 Replacement of detonators on the line",
      "3.64 Knowledge and possession of detonators",
      "G. Flare Signals",
      "3.65 Description of flare signals",
      "3.66 Use of flare signals",
      "3.67 Knowledge and possession of flare signals",
      "H. Defective fixed signals and points",
      "3.68 Duties of Station Master generally when a signal is defective",
      "3.69 Duties of Station Master when an approach Stop signal is defective",
      "3.70 Duties of Station Master when a departure Stop signal is defective",
      "3.71 Warner or Distant signals defective in the ‘off’ position",
      "3.72 Warner not to be used when a Stop signal is defective",
      "3.73 Passing of a gate Stop signal at ‘on’",
      "3.74 Absence of a fixed signal or a signal without a light",
      "3.75 Passing of Intermediate Block Stop signal at ‘on’",
      "3.76 Intimation to officials when defects remedied",
      "3.77 Defective or damaged points etc.",
      "3.78 Duties of engine crew in respect of signals",
      "3.79 Duties of Loco Pilot in respect of Calling-on signal",
      "3.80 Duties of Loco Pilot when an approach Stop signal is ‘on’ or defective",
      "3.81 Duties of Loco Pilot when a departure Stop signal is ‘on’ or defective",
      "3.82 Permission before entering on or crossing a running line",
      "3.83 Assistance of the engine crew regarding signals",
      "3.84 Duties of Loco Pilots as to signals when two or more engines are attached to train",
      "3.85 Reporting of defects in signals",
    ],
    icon: <RadioTower className="w-7 h-7 text-white" />,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 4,
    title: "Chapter - IV",
    description: "WORKING OF TRAINS GENERALLY",
    pages: "91 - 139",
    rules: [
      "A. Timing and Running of Trains",
      "4.01 Standard time",
      "4.02 Adherence to advertised time",
      "4.03 Setting watch",
      "4.04 Time of attendance for train crew",
      "4.05 Proper running line",
      "4.06 Direction of running",
      "4.07 Supply of Working Time Table and Schedule of Standard Dimensions",
      "B. Speed of Trains",
      "4.08 Limits of speed generally",
      "4.09 Caution Order",
      "4.10 Limits of speed over facing points",
      "4.11 Limits of speed while running through stations",
      "4.12 Engine pushing",
      "4.13 Limits of speed with engine tender foremost",
      "C. Equipment of Trains and Train Crew",
      "4.14 Head light, marker lights and speedometer",
      "4.15 Tail and side lights",
      "4.16 Tail board or tail lamp",
      "4.17 Responsibility of Station Master regarding tail board or tail lamp of passing trains",
      "4.18 Means of communication",
      "4.19 Guard’s and Loco Pilot’s equipment",
      "4.20 Manning of engine in motion",
      "4.21 Driving an electric train",
      "4.22 Riding on engine or tender",
      "4.23 Brake-vans",
      "4.24 Position of brake-van on train",
      "4.25 Guards",
      "4.26 Couplings",
      "D. Vehicles and Cranes",
      "4.27 Cranes",
      "4.28 Loading of vehicles",
      "4.29 Damaged or defective vehicles",
      "E. Precautions before starting Train",
      "4.30 Loco Pilot and Guard to examine notices before starting",
      "4.31 Examination of trains before starting",
      "4.32 Examination of trains by Loco Pilot",
      "4.33 Examination of single and multiple units by Loco Pilot",
      "4.34 Duties of Guard when taking over charge of a train",
      "4.35 Starting of trains",
      "4.36 Guard to be in charge of train",
      "4.37 Subordination of Guards in station limits",
      "4.38 Assistant Loco Pilots to obey Loco Pilots",
      "4.39 Loco Pilot to obey certain orders",
      "F. Duties of Staff Working Trains during Journey",
      "4.40 Loco Pilot and Assistant Loco Pilot to keep a good look-out",
      "4.41 Loco Pilot and Assistant Loco Pilot to look back",
      "4.42 Exchange of signals between Loco Pilot, Guard and station staff",
      "4.43 Guard to keep a good look-out",
      "4.44 Train held up at first Stop signal",
      "4.45 Attracting attention of Loco Pilot",
      "4.46 Assistance from Guard’s hand brake",
      "4.47 Application of Guard’s hand brake",
      "4.48 Permission of Guard to detach engine from train",
      "4.49 Starting and stopping of train",
      "4.50 Sounding of engine whistle",
      "4.51 Bell signals between Loco Pilot and Guard",
      "4.52 Throwing out water, fire or cinders",
      "4.53 Hose or water crane",
      "4.54 Passengers",
      "G. Duties of Staff on Arrival",
      "4.55 Shutting of power",
      "4.56 Guard to see that train is stopped clear of fouling marks",
      "4.57 Detaching engine",
      "4.58 Loco Pilot to see that train is stopped clear of fouling marks",
      "4.59 Moving of train carrying passengers after it has been stopped at a station",
      "4.60 Guard not to leave train till handed over",
      "4.61 Loco Pilot not to leave engine when on duty",
      "H. Working of Material Trains",
      "4.62 Working of a material train in a block section",
      "4.63 Workers on material train",
      "4.64 Protection of material train when stabled",
      "4.65 Working of track maintenance machines",
      "I. Private Engines and Vehicles",
      "4.66 Private engines and vehicles",
    ],
    icon: <TrainFront className="w-7 h-7 text-white" />,
    gradient: "from-amber-500 to-rose-500",
  },
  {
    id: 5,
    title: "Chapter - V",
    description: "CONTROL AND WORKING OF STATIONS",
    pages: "140 - 150",
    rules: [
      "5.01 Responsibility of the Station Master for working",
      "5.02 Supply of copies of rules and distribution or exhibition of other documents",
      "5.03 Obedience to orders and keeping of books and returns",
      "5.04 Signal cabins",
      "5.05 Report of neglect of duty",
      "5.06 Station Working Rules",
      "5.07 Forms",
      "5.08 Access to and operation of equipment",
      "5.09 Reception of a train on an obstructed line",
      "5.10 Reception of a train on a non-signalled line",
      "5.11 Departure of a train from a non-signalled line",
      "5.12 Departure of a train from a line provided with a common departure signal",
      "5.13 Control of shunting",
      "5.14 Responsibility for shunting",
      "5.15 Shunting at stations under Centralised Traffic Control",
      "5.16 Shunting during reception of trains",
      "5.17 Shunting near level crossing",
      "5.18 Drawing of a train to an advanced position",
      "5.19 Obstruction of running line",
      "5.20 Shunting on gradients",
      "5.21 Loose shunting",
      "5.22 Leaving vehicles in sidings outside station limits",
      "5.23 Securing of vehicles at station",
    ],
    icon: <Building2 className="w-7 h-7 text-white" />,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 6,
    title: "Chapter - VI",
    description: "ACCIDENTS AND UNUSUAL OCCURRENCES",
    pages: "151 - 181",
    rules: [
      "6.01 Accident or obstruction",
      "6.02 Working in case of accident or failure of communications",
      "6.03 Protection of trains stopped between stations",
      "6.04 Trains unusually delayed",
      "6.05 Sending advice of accident or breakdown",
      "6.06 Train in a block section without authority to proceed",
      "6.07 Report of conditions likely to affect running of trains to Controller or Centralised Traffic Control Operator",
      "6.08 Train parting",
      "6.09 Portion of a train left in a block section",
      "6.10 Fire",
      "6.11 Vehicles escaping from station",
    ],
    icon: <AlertTriangle className="w-7 h-7 text-white" />,
    gradient: "from-red-500 to-orange-500",
  },
  {
    id: 7,
    title: "Chapter - VII",
    description: "SYSTEM OF WORKING",
    pages: "182",
    rules: [
      "7.01 Systems of working",
      "7.02 Applicability of General Rules referring to the working of signals and trains",
    ],
    icon: <GitBranch className="w-7 h-7 text-white" />,
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    id: 8,
    title: "Chapter - VIII",
    description: "THE ABSOLUTE BLOCK SYSTEM",
    pages: "183 - 195",
    rules: [
      "A. Essentials",
      "8.01 Essential of the Absolute Block System",
      "B. Conditions for granting Line Clear",
      "8.02 Conditions for granting Line Clear at a class ‘A’ station",
      "8.03 Conditions for granting Line Clear at a class ‘B’ station",
      "8.04 Conditions for granting Line Clear at a class ‘C’ station",
      "C. Obstruction – Double Line",
      "8.05 Obstruction on double line at a block station when a train is approaching",
      "8.06 Obstruction on double line in the block section",
      "D. Obstruction – Single Line",
      "D. 1. Class ‘A’ Station",
      "8.07 Obstruction on single line at a class ‘A’ station when a train is approaching",
      "8.08 Obstructing the block section at a class ‘A’ station on a single line",
      "D. 2. Class ‘B’ Station",
      "8.09 Obstruction in the face of an approaching train at a class ‘B’ station on single line",
      "8.10 Obstruction within station section at a class ‘B’ station on single line",
      "8.11 Obstruction outside station section at a class ‘B’ single line station equipped with two-aspect signals",
      "8.12 Obstruction outside station section at a class ‘B’ single line station equipped with manually operated multiple-aspect signals",
      "8.13 Obstruction outside the first Stop signal at a class ‘B’ station on single line",
      "E. General Provision",
      "8.14 Block back or Block forward",
      "8.15 Authority for shunting or obstruction in block section",
      "8.16 Illustrative diagrams",
    ],
    icon: <Blocks className="w-7 h-7 text-white" />,
    gradient: "from-slate-500 to-slate-700",
  },
  {
    id: 9,
    title: "Chapter - IX",
    description: "THE AUTOMATIC BLOCK SYSTEM",
    pages: "196 - 224",
    rules: [
      "A. Rules applicable to Double Line",
      "9.01 Essentials of the Automatic Block System on double line",
      "9.02 Duties of Loco Pilot and Guard when an Automatic Stop signal on double line is to be passed at ‘on’",
      "B. Rules applicable to Single Line",
      "9.03 Essentials of the Automatic Block System on single line",
      "9.04 Minimum equipment of fixed signals in Automatic Block territory on single line",
      "9.05 Additional fixed signals in Automatic Block territory on single line",
      "9.06 Conditions for taking ‘off’ manual Stop signals in Automatic Block territory on single line",
      "9.07 Duties of Loco Pilot and Guard when an Automatic Stop signal on single line is to be passed at ‘on’",
      "9.08 Person in charge of working trains on Automatic Block System on single line",
      "C. Rules applicable to both Double and Single Lines",
      "9.09 Working of trains on Centralised Traffic Control territory",
      "9.10 Protection of a train stopped in an Automatic Block signalling section",
      "9.11 Loco Pilot to report failures",
      "9.12 Procedure during failure of Automatic Signalling",
      "9.13 Movement of trains against the direction of traffic on the Automatic Block System",
      "9.14 Procedure when Semi-Automatic Stop signal is ‘on’",
      "9.15 Passing a gate Stop signal at ‘on’ in Automatic signalling territory",
      "9.16 Illustrative diagrams",
    ],
    icon: <Workflow className="w-7 h-7 text-white" />,
    gradient: "from-fuchsia-500 to-purple-600",
  },
  {
    id: 10,
    title: "Chapter - X",
    description: "THE FOLLOWING TRAINS SYSTEM",
    pages: "225 - 228",
    rules: [
      "10.01 Essential of the Following Trains System",
      "10.02 Report of the Commissioner of Railway Safety",
      "10.03 Conditions to be observed in working trains on the Following Trains System",
      "10.04 Delivery of authority to proceed to Loco Pilot or Guard on the Following Trains System",
      "10.05 Authority to proceed on the Following Trains System",
      "10.06 Responsibility as to proper preparation of authority to proceed on the Following Train System",
      "10.07 Obstruction in the face of approaching train or trains on the Following Trains System",
      "10.08 Cessation of working on the Following Trains System",
      "10.09 Protection of trains on the Following Trains System",
    ],
    icon: <ArrowRightLeft className="w-7 h-7 text-white" />,
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    id: 11,
    title: "Chapter - XI",
    description: "THE PILOT GUARD SYSTEM",
    pages: "229 - 233",
    rules: [
      "11.01 Essentials of the Pilot Guard System",
      "11.02 Conditions to be observed for following trains on the Pilot Guard System",
      "11.03 Pilot Guard’s dress or badge",
      "11.04 Pilot Guard to accompany train or give authority to proceed",
      "11.05 Pilot Guard’s Tickets",
      "11.06 Protection of trains on the Pilot Guard System",
    ],
    icon: <Shield className="w-7 h-7 text-white" />,
    gradient: "from-amber-600 to-yellow-500",
  },
  {
    id: 12,
    title: "Chapter - XII",
    description: "THE TRAIN-STAFF AND TICKET SYSTEM",
    pages: "234 - 237",
    rules: [
      "12.01 Essentials of the Train-staff and Ticket System",
      "12.02 System where applicable",
      "12.03 Conditions to be observed for following trains on the Train-staff and Ticket System",
      "12.04 Loco Pilot to have Train-staff or Train-staff Ticket",
      "12.05 Train-staff or Train-staff Ticket: by whom to be delivered to Loco Pilot",
      "12.06 Train-staff or Train-staff Ticket: when to be delivered to Loco Pilot",
      "12.07 Train-staff to be kept on engine",
      "12.08 Trains not to be started until Train-staff returned",
      "12.09 Train-staff or Train-staff Ticket to be given up and Ticket to be cancelled on arrival of train",
      "12.10 Procedure when engine is disabled on the Train-Staff and Ticket System",
      "12.11 Train-Staff Ticket: how kept",
      "12.12 Train-staff: how kept",
      "12.13 Distinguishing marks on Train-staff Tickets and boxes",
      "12.14 Form of Train-staff Ticket",
      "12.15 Record of Train-staff Tickets issued",
      "12.16 Obstruction outside the Home signal",
      "12.17 Protection of trains on the Train-staff and Ticket System",
    ],
    icon: <Ticket className="w-7 h-7 text-white" />,
    gradient: "from-rose-500 to-red-500",
  },
  {
    id: 13,
    title: "Chapter - XIII",
    description: "WORKING OF TRAINS IN EMERGENCIES",
    pages: "238 - 252",
    rules: [
      "A. Working of Single Line in case of obstruction",
      "13.01 General",
      "13.02 Single Line working introduced at a double line station provided with Home signals only",
      "13.03 Single Line working introduced at a double line station provided with Warner and Home signals only",
      "13.04 Single Line working introduced at a double line station not provided with F.P.L. on facing points",
      "13.05 Single Line working introduced at a double line station provided with Mechanical signaling with facing points interlocked and track circuiting",
      "13.06 Single Line working introduced at a double line station provided with Mechanical signaling with facing points interlocked without track circuiting",
      "13.07 Single Line working introduced at a double line station on an electrically signaled line where track circuits are provided throughout the station section",
      "13.08 Single Line working introduced at a double line station on an electrically signaled line where track circuits are not provided throughout the station section",
      "13.09 Single Line working introduced between a double line station and a class ‘A’ single line station",
      "13.10 Single Line working introduced between class ‘A’ stations on single line",
      "B. Regulations for Double Line Working during failure or closure",
      "13.11 Use of Temporary Single Line Working order form",
      "13.12 Instructions to Pass if cannot stop at next stop signal board",
      "13.13 Temporary Breach of Block Section form",
      "13.14 Sending the last vehicle confirming advice",
      "13.15 Train parting",
      "13.16 Advice of authority to approach an obstruction",
      "13.17 Sending advice of repairs effected",
    ],
    icon: <LifeBuoy className="w-7 h-7 text-white" />,
    gradient: "from-emerald-600 to-sky-500",
  },
  {
    id: 14,
    title: "Chapter - XIV",
    description: "BLOCK WORKING",
    pages: "241 - 253",
    rules: [
      "A. General Provisions",
      "14.01 Means of granting or obtaining Line Clear",
      "14.02 Provision of Instruments",
      "14.03 Consent required before interfering with Block working equipment",
      "B. Block Stations at which Electrical Block Instruments, Track circuits or Axle Counters are provided",
      "14.04 Certificate of competency",
      "14.05 Bell code",
      "14.06 Acknowledgement of signals",
      "14.07 Train Signal Register",
      "14.08 Authority to proceed",
      "14.09 Loco Pilot to examine authority to proceed",
      "14.10 Conditions for closing the block section",
      "14.11 Responsibility of Station Master as to authority to proceed",
      "14.12 Special responsibility as to electrical token instruments and to the token",
      "14.13 Failure of electrical block instruments or track circuits or axle counters",
      "14.14 Closing of Intermediate Block Post",
      "C. Block Stations at which Electrical Block Instruments are not provided",
      "14.15 Transmission of signals",
      "14.16 Train Signal Register",
      "14.17 Forms for messages and written authority to proceed",
      "14.18 Distinction of messages",
      "14.19 Writing and signing of messages and written authorities to proceed",
      "14.20 Completion of messages",
      "14.21 Preservation of messages and written authorities to proceed",
      "14.22 Cancellation of Line Clear",
      "14.23 Loco Pilot to have authority to proceed",
      "14.24 Authority to proceed: when to be given to Loco Pilot",
      "D. Line Clear Tickets",
      "14.25 Line clear Tickets",
      "E. Use and Operation of Block Working",
      "14.26 Use and operation of block working equipment",
    ],
    icon: <CircuitBoard className="w-7 h-7 text-white" />,
    gradient: "from-slate-800 to-teal-600",
  },
  {
    id: 15,
    title: "Chapter - XV",
    description: "PERMANENT WAY AND WORKS",
    pages: "254 - 297",
    rules: [
      "A. Railway Servants employed on the Permanent Way and Works",
      "15.01 Condition of Permanent Way and Works",
      "15.02 Maintenance of line",
      "15.03 Keeping of material",
      "15.04 Inspection of Permanent Way and Works",
      "15.05 Patrolling of Lines",
      "15.06 Work involving danger to trains or traffic",
      "15.07 Work in thick, foggy or tempestuous weather impairing visibility",
      "15.08 Precautions before commencing operations which would obstruct the line",
      "15.09 Showing of signals",
      "15.10 Assistance in protection of trains",
      "15.11 Gangmate in each gang",
      "15.12 Knowledge of signals and equipment of gang",
      "15.13 Inspection of gauges, signals, tools and implements",
      "15.14 Responsibility of Gangmate as to safety of line",
      "15.15 Blasting",
      "15.16 Putting in or removing points or crossings",
      "15.17 Duties of Gangmate and Gangman when apprehending danger",
      "B. The working of Lorries, Trolleys and Motor trolleys",
      "15.18 Distinction between trolley, lorry and motor trolley",
      "15.19 Red flag or light to be shown",
      "15.20 Equipment of trolley, lorry or motor trolley",
      "15.21 Efficient brakes",
      "15.22 Qualified person to be in charge of lorry or trolley when on the line",
      "15.23 Attachment to train prohibited",
      "15.24 Time of running",
      "15.25 Motor Trolley",
      "15.26 Protection of trolley on the line",
      "15.27 Protection of lorry on the line",
      "15.28 Lorries and trolleys out of use",
    ],
    icon: <Hammer className="w-7 h-7 text-white" />,
    gradient: "from-amber-700 to-lime-500",
  },
  {
    id: 16,
    title: "Chapter - XVI",
    description: "LEVEL CROSSINGS",
    pages: "298 - 300",
    rules: [
      "16.01 Knowledge of signals",
      "16.02 Supply and care of equipment",
      "16.03 Road Traffic",
      "16.04 Gateman to observe passing trains",
      "16.05 Channel for flange of wheels",
      "16.06 Defects at level crossings",
      "16.07 Obstructions at level crossings",
      "16.08 Parting of a train",
      "16.09 Trespassing",
      "16.10 Transfer of charge of gate",
      "16.11 Height gauges",
    ],
    icon: <Fence className="w-7 h-7 text-white" />,
    gradient: "from-orange-500 to-amber-600",
  },
  {
    id: 17,
    title: "Chapter - XVII",
    description: "WORKING OF TRAINS ON ELECTRIFIED SECTIONS",
    pages: "301 - 348",
    rules: [
      "17.01 Applicability of General Rules",
      "17.02 Special definitions applicable to this chapter",
      "17.03 Inspection of electrical way and works",
      "17.04 Permit-to-work on electrical equipment",
      "17.05 Warning to staff and public",
      "17.06 Alterations to track",
      "17.07 Tripping of circuit breakers of locomotives and electrical multiple units at neutral sections",
      "17.08 Tower wagon",
      "17.09 Additional rules for electrified sections",
    ],
    icon: <Zap className="w-7 h-7 text-white" />,
    gradient: "from-yellow-400 to-sky-500",
  },
  {
    id: 18,
    title: "Chapter - XVIII",
    description: "MISCELLANEOUS",
    pages: "349",
    rules: ["18.01 Repeal and Saving"],
    icon: <Puzzle className="w-7 h-7 text-white" />,
    gradient: "from-slate-600 to-indigo-500",
  },
]

const chapters: Chapter[] = chapterData.map(chapter => ({
  ...chapter,
  rules: chapter.rules
    .map(rule => formatRuleLine(rule))
    .filter(rule => rule.length > 0),
}))

const heroTitle = "TABLE OF CONTENTS"
const heroSubtitle = "Rule No. Subject Page No."

// Memoized chapter card component to prevent unnecessary re-renders
const ChapterCard = React.memo(({ 
  chapter, 
  isExpanded, 
  onToggle, 
  openingPDF, 
  openingContent, 
  onOpenPDF, 
  onOpenContent 
}: {
  chapter: Chapter
  isExpanded: boolean
  onToggle: () => void
  openingPDF: string | null
  openingContent: string | null
  onOpenPDF: (ruleNumber: string, chapterId: number) => void
  onOpenContent: (ruleNumber: string, chapterId: number) => void
}) => {
  const extractRuleNumber = (rule: string): string => {
    let match = rule.match(/^Rule\s+((?:\d+\.)+\d+)/)
    if (match) return match[1]
    match = rule.match(/^((?:\d+\.)+\d+)/)
    if (match) return match[1]
    match = rule.match(/((?:\d+\.)+\d+)/)
    return match ? match[1] : ''
  }

  const cardBlurClass = 'backdrop-blur-none md:backdrop-blur-sm lg:backdrop-blur-lg'
  
  return (
    <div
      className={`bg-white/10 ${cardBlurClass} rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-200 overflow-hidden border border-white/20`}
    >
      <div
        className={`bg-linear-to-r ${chapter.gradient} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-200`}
        onClick={onToggle}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">{chapter.icon}</div>
          <h2 className="text-xl sm:text-2xl font-bold whitespace-pre-line leading-snug">
            {chapter.title}
          </h2>
          <p className="text-white/85 text-sm sm:text-base whitespace-pre-line font-semibold tracking-wide">
            {chapter.description}
          </p>
          <p className="text-white/70 text-sm font-semibold">Pages: {chapter.pages}</p>
          <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-white" />
            ) : (
              <ChevronDown className="w-5 h-5 text-white" />
            )}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="py-6 lg:px-6 px-3">
          <div className="grid gap-3">
            {chapter.rules.map((rule, index) => {
              const ruleNumber = extractRuleNumber(rule)
              const ruleKey = `${chapter.id}-${ruleNumber}-${index}`
              const isOpeningPDF = openingPDF === `${chapter.id}-${ruleNumber}`
              const isOpeningContent = openingContent === `${chapter.id}-${ruleNumber}`
              const hasRuleNumber = ruleNumber.length > 0 && /^\d+\.\d+/.test(ruleNumber)
              const ruleBlurClass = 'backdrop-blur-none md:backdrop-blur-sm'
              
              return (
                <div
                  key={ruleKey}
                  className={`bg-white/5 ${ruleBlurClass} rounded-lg border border-white/10 px-4 py-3 hover:bg-white/10 transition-all duration-200`}
                >
                  <p className="text-gray-200 whitespace-pre-line text-base lg:text-lg leading-relaxed mb-3">{rule}</p>
                  
                  {hasRuleNumber && (
                    <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mt-3 pt-3 border-t border-white/10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          onOpenPDF(ruleNumber, chapter.id)
                        }}
                        disabled={isOpeningPDF}
                        className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-200 ${
                          isOpeningPDF
                            ? 'bg-gray-500 cursor-not-allowed'
                            : 'bg-linear-to-r from-blue-500 to-indigo-600 active:from-blue-600 active:to-indigo-700 md:hover:from-blue-600 md:hover:to-indigo-700 md:hover:shadow-lg md:hover:scale-105'
                        }`}
                      >
                        {isOpeningPDF ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <FileText className="w-4 h-4" />
                        )}
                        <span>{isOpeningPDF ? 'Opening...' : 'View Document'}</span>
                        {!isOpeningPDF && <ExternalLink className="w-3 h-3 hidden md:block" />}
                      </button>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          onOpenContent(ruleNumber, chapter.id)
                        }}
                        disabled={isOpeningContent}
                        className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-200 ${
                          isOpeningContent
                            ? 'bg-gray-500 cursor-not-allowed'
                            : 'bg-linear-to-r from-green-500 to-emerald-600 active:from-green-600 active:to-emerald-700 md:hover:from-green-600 md:hover:to-emerald-700 md:hover:shadow-lg md:hover:scale-105'
                        }`}
                      >
                        {isOpeningContent ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <BookOpenCheck className="w-4 h-4" />
                        )}
                        <span>{isOpeningContent ? 'Opening...' : 'View Content'}</span>
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
})

ChapterCard.displayName = 'ChapterCard'

const GeneralSubsidiaryRulesChapters = () => {
  const [expandedChapters, setExpandedChapters] = useState<number[]>([])
  const [openingPDF, setOpeningPDF] = useState<string | null>(null)
  const [openingContent, setOpeningContent] = useState<string | null>(null)
  const router = useRouter()

  const toggleChapter = useCallback((chapterId: number) => {
    setExpandedChapters(prev => {
      if (prev.includes(chapterId)) {
        return prev.filter(id => id !== chapterId)
      }
      return [chapterId]
    })
  }, [])

  // Convert rule number to chapter page identifier using mapping
  const ruleToPageId = useCallback((ruleNumber: string): string => {
    // First try to get from mapping function
    const mappedPageId = getPageIdFromRule(ruleNumber)
    if (mappedPageId) {
      return mappedPageId
    }
    
    // Fallback: try to extract page ID from rule number
    const parts = ruleNumber.split('.')
    if (parts.length >= 2) {
      return parts[1]
    }
    // Last resort: return rule number without dots
    return ruleNumber.replace(/\./g, '')
  }, [])

  const openPDF = useCallback((ruleNumber: string, chapterId: number) => {
    const pageId = ruleToPageId(ruleNumber)
    if (!pageId) {
      console.error(`No page ID found for rule ${ruleNumber}`)
      setOpeningPDF(null)
      return
    }
    
    const pdfFileName = `GSRChapterPage${pageId}.pdf`
    const pdfPath = `/general-subsidiary-rules-pdf-pages/g&sr-chapter-pdf-pages/${pdfFileName}`
    
    setOpeningPDF(`${chapterId}-${ruleNumber}`)
    setTimeout(() => {
      try {
        // Use matchMedia for more reliable mobile detection
        const isMobileDevice = window.matchMedia('(max-width: 768px)').matches
        if (isMobileDevice) {
          window.location.href = pdfPath
        } else {
          const newWindow = window.open(pdfPath, '_blank')
          if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
            // Popup blocked, fallback to same window
            window.location.href = pdfPath
          }
          setOpeningPDF(null)
        }
      } catch (error) {
        console.error('Error opening PDF:', error)
        setOpeningPDF(null)
      }
    }, 100)
  }, [ruleToPageId])

  const openContent = useCallback((ruleNumber: string, chapterId: number) => {
    const pageId = ruleToPageId(ruleNumber)
    if (!pageId) {
      console.error(`No page ID found for rule ${ruleNumber}`)
      setOpeningContent(null)
      return
    }
    
    setOpeningContent(`${chapterId}-${ruleNumber}`)
    
    setTimeout(() => {
      try {
        router.push(`/manuals/general-subsidiary-rules/content/${pageId}`)
        setOpeningContent(null)
      } catch (error) {
        console.error('Error opening content:', error)
        setOpeningContent(null)
      }
    }, 100)
  }, [router, ruleToPageId])

  // Disable blur on mobile for better performance
  const blurClass = 'blur-none md:blur-2xl lg:blur-3xl'

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-indigo-950 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Reduced opacity and no blur on mobile for performance */}
        <div className={`absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-sky-500/10 md:from-sky-500/20 to-indigo-500/10 md:to-indigo-500/20 rounded-full ${blurClass}`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-indigo-500/10 md:from-indigo-500/20 to-purple-500/10 md:to-purple-500/20 rounded-full ${blurClass}`}></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-6">
            <div className="inline-block p-2 bg-linear-to-r from-sky-500/20 to-indigo-500/20 rounded-full backdrop-blur-sm">
              <div className="bg-linear-to-r from-sky-500 to-indigo-600 p-3 rounded-full">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
              <h1 className="lg:text-6xl text-3xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
              {heroTitle}
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-sky-500 to-indigo-600 mx-auto rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200">
              {heroSubtitle}
            </p>
          </div>

          <div className="grid gap-6">
            {chapters.map(chapter => (
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                isExpanded={expandedChapters.includes(chapter.id)}
                onToggle={() => toggleChapter(chapter.id)}
                openingPDF={openingPDF}
                openingContent={openingContent}
                onOpenPDF={openPDF}
                onOpenContent={openContent}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default GeneralSubsidiaryRulesChapters