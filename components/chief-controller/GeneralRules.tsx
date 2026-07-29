'use client'

import React, { useState } from 'react'

interface Rule {
  number: string
  title: string
}

interface Section {
  title: string
  rules: Rule[]
}

interface Chapter {
  number: string
  title: string
  rulesCount: number
  sections?: Section[]
  rules: Rule[]
}

const GeneralRules = () => {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null)

  const toggleChapter = (index: number) => {
    if (expandedChapter === index) {
      // If clicking the same chapter, close it
      setExpandedChapter(null)
    } else {
      // Otherwise, expand the clicked chapter (this will automatically close the previous one)
      setExpandedChapter(index)
    }
  }

  const chapters: Chapter[] = [
    {
      number: 'Chapter I',
      title: 'PRELIMINARY',
      rulesCount: 3,
      rules: [
        { number: '1.01', title: 'Short title and commencement' },
        { number: '1.02', title: 'Definitions' },
        { number: '1.03', title: 'Classification of stations' },
      ],
    },
    {
      number: 'Chapter II',
      title: 'RULES APPLYING TO RAILWAY SERVANTS GENERALLY',
      rulesCount: 11,
      rules: [
        { number: '2.01', title: 'Supply of copies of rules' },
        { number: '2.02', title: 'Upkeep of the copy of rules' },
        { number: '2.03', title: 'Knowledge of rules' },
        { number: '2.04', title: 'Assistance in observance of rules' },
        { number: '2.05', title: 'Prevention of trespass, damage or loss' },
        { number: '2.06', title: 'Obedience to rules and orders' },
        { number: '2.07', title: 'Attendance for duty' },
        { number: '2.08', title: 'Absence from duty' },
        { number: '2.09', title: 'Taking alcoholic drink, sedative, narcotic, stimulant drug or preparation' },
        { number: '2.10', title: 'Conduct of railway servants' },
        { number: '2.11', title: 'Duty for securing safety' },
      ],
    },
    {
      number: 'Chapter III',
      title: 'SIGNALS',
      rulesCount: 85,
      sections: [
        {
          title: 'A. General Provisions',
          rules: [
            { number: '3.01', title: 'General use of signals' },
            { number: '3.02', title: 'Kinds of signals' },
            { number: '3.03', title: 'Use of night signals by day' },
            { number: '3.04', title: 'Placing of signals & signal arms and painting of signal arms' },
          ],
        },
        {
          title: 'B. Description of Fixed Signals',
          rules: [
            { number: '3.05', title: 'Use of fixed signals' },
            { number: '3.06', title: 'Description of Warner signals and their indications' },
            { number: '3.07', title: 'Description of Distant signals and their indications' },
            { number: '3.08', title: 'Description of Stop signals and their indications' },
            { number: '3.09', title: 'Kinds of fixed Stop signals for approaching trains' },
            { number: '3.10', title: 'Kinds of fixed Stop signals for departing trains' },
            { number: '3.11', title: 'Intermediate Block Stop signal' },
            { number: '3.12', title: 'Kinds of fixed Stop signals in Automatic Block territories' },
            { number: '3.13', title: 'Calling-on signals' },
            { number: '3.14', title: 'Shunt signals' },
            { number: '3.15', title: 'Co-acting signals' },
            { number: '3.16', title: 'Repeating signals' },
            { number: '3.17', title: 'Distinguishing markers and signs for signals' },
            { number: '3.18', title: 'Signals out of use' },
            { number: '3.19', title: 'Placing of Stop signals at diverging junctions' },
            { number: '3.20', title: 'Placing of Stop signals at converging junctions' },
            { number: '3.21', title: 'Signals on bracket post or signal bridge or gantry' },
            { number: '3.22', title: 'Placing of more than one signal on the same post' },
            { number: '3.23', title: 'Electric repeater' },
            { number: '3.24', title: 'Back lights' },
          ],
        },
        {
          title: 'C. Equipment of Signals',
          rules: [
            { number: '3.25', title: 'Obligation to provide fixed signals at stations' },
            { number: '3.26', title: 'Commissioning of fixed signals' },
            { number: '3.27', title: 'Minimum equipment of fixed signals at stations provided with manually operated multiple-aspect signalling' },
            { number: '3.28', title: 'Minimum equipment of fixed signals at stations provided with modified lower quadrant signalling' },
            { number: '3.29', title: 'Minimum equipment of fixed signals at other stations provided with two-aspect signalling' },
            { number: '3.30', title: 'Additional fixed signals at stations generally' },
            { number: '3.31', title: 'Signals at class \'D\' stations' },
            { number: '3.32', title: 'Provision of an Advanced Starter, Shunting Limit Board or Block Section Limit Board' },
            { number: '3.33', title: 'Exceptions to Rules 3.27, 3.28, 3.29 and 3.32' },
            { number: '3.34', title: 'Fixed signals at level crossings' },
            { number: '3.35', title: 'Protection and working of points of outlying sidings' },
          ],
        },
        {
          title: 'D. Working of Signals and Points',
          rules: [
            { number: '3.36', title: 'Fixed signals generally' },
            { number: '3.37', title: 'Normal aspects of signals' },
            { number: '3.38', title: 'Points affecting movement of trains' },
            { number: '3.39', title: 'Locking of facing points' },
            { number: '3.40', title: 'Conditions for taking \'off\' Home signal' },
            { number: '3.41', title: 'Conditions for taking \'off\' Outer signal' },
            { number: '3.42', title: 'Conditions for taking \'off\' last Stop signal or Intermediate Block Stop signal' },
            { number: '3.43', title: 'Conditions for taking \'off\' Warner signal' },
            { number: '3.44', title: 'Conditions for taking \'off\' gate Stop signal' },
            { number: '3.45', title: 'Conditions for taking \'off\' Calling-on signal' },
            { number: '3.46', title: 'Use of fixed signals for shunting' },
            { number: '3.47', title: 'Taking \'off\' signals for more than one train at a time' },
            { number: '3.48', title: 'Stoppage of trains out of course at stations provided with two-aspect signalling' },
            { number: '3.49', title: 'Care and lighting of signal lamps' },
            { number: '3.50', title: 'Traps, slip sidings and catch sidings' },
            { number: '3.51', title: 'Points' },
          ],
        },
        {
          title: 'E. Hand Signals',
          rules: [
            { number: '3.52', title: 'Exhibition of hand signals' },
            { number: '3.53', title: 'Stop hand signal' },
            { number: '3.54', title: 'Proceed hand signal' },
            { number: '3.55', title: 'Proceed with caution hand signal' },
            { number: '3.56', title: 'Hand signals for shunting' },
            { number: '3.57', title: 'Banner flags' },
            { number: '3.58', title: 'Knowledge and possession of hand signals' },
          ],
        },
        {
          title: 'F. Detonating Signals',
          rules: [
            { number: '3.59', title: 'Description of detonating signals' },
            { number: '3.60', title: 'Method of using detonators' },
            { number: '3.61', title: 'Placing of detonators in thick, foggy or tempestuous weather impairing visibility' },
            { number: '3.62', title: 'Placing of detonators in case of obstruction' },
            { number: '3.63', title: 'Replacement of detonators on the line' },
            { number: '3.64', title: 'Knowledge and possession of detonators' },
          ],
        },
        {
          title: 'G. Flare Signals',
          rules: [
            { number: '3.65', title: 'Description of flare signals' },
            { number: '3.66', title: 'Use of flare signals' },
            { number: '3.67', title: 'Knowledge and possession of flare signals' },
          ],
        },
        {
          title: 'H. Defective fixed signals and points',
          rules: [
            { number: '3.68', title: 'Duties of Station Master generally when a signal is defective' },
            { number: '3.69', title: 'Duties of Station Master when an approach Stop signal is defective' },
            { number: '3.70', title: 'Duties of Station Master when a departure Stop signal is defective' },
            { number: '3.71', title: 'Warner or Distant signals defective in the \'off\' position' },
            { number: '3.72', title: 'Warner not to be used when a Stop signal is defective' },
            { number: '3.73', title: 'Passing of a gate Stop signal at \'on\'' },
            { number: '3.74', title: 'Absence of a fixed signal or a signal without a light' },
            { number: '3.75', title: 'Passing of Intermediate Block Stop signal at \'on\'' },
            { number: '3.76', title: 'Intimation to officials when defects remedied' },
            { number: '3.77', title: 'Defective or damaged points etc.' },
            { number: '3.78', title: 'Duties of engine crew in respect of signals' },
            { number: '3.79', title: 'Duties of Loco Pilot in respect of Calling-on signal' },
            { number: '3.80', title: 'Duties of Loco Pilot when an approach Stop signal is \'on\' or defective' },
            { number: '3.81', title: 'Duties of Loco Pilot when a departure Stop signal is \'on\' or defective' },
            { number: '3.82', title: 'Permission before entering on or crossing a running line' },
            { number: '3.83', title: 'Assistance of the engine crew regarding signals' },
            { number: '3.84', title: 'Duties of Loco Pilots as to signals when two or more engines are attached to train' },
            { number: '3.85', title: 'Reporting of defects in signals' },
          ],
        },
      ],
      rules: [],
    },
    {
      number: 'CHAPTER IV',
      title: 'WORKING OF TRAINS GENERALLY',
      rulesCount: 66,
      sections: [
        {
          title: 'A. Timing and Running of Trains',
          rules: [
            { number: '4.01', title: 'Standard time' },
            { number: '4.02', title: 'Adherence to advertised time' },
            { number: '4.03', title: 'Setting watch' },
            { number: '4.04', title: 'Time of attendance for train crew' },
            { number: '4.05', title: 'Proper running line' },
            { number: '4.06', title: 'Direction of running' },
            { number: '4.07', title: 'Supply of Working Time Table and Schedule of Standard Dimensions' },
          ],
        },
        {
          title: 'B. Speed of Trains',
          rules: [
            { number: '4.08', title: 'Limits of speed generally' },
            { number: '4.09', title: 'Caution Order' },
            { number: '4.10', title: 'Limits of speed over facing points' },
            { number: '4.11', title: 'Limits of speed while running through stations' },
            { number: '4.12', title: 'Engine pushing' },
            { number: '4.13', title: 'Limits of speed with engine tender foremost' },
          ],
        },
        {
          title: 'C. Equipment of Trains and Train Crew',
          rules: [
            { number: '4.14', title: 'Head light, marker lights and speedometer' },
            { number: '4.15', title: 'Tail and side lights' },
            { number: '4.16', title: 'Tail board or tail lamp 99' },
            { number: '4.17', title: 'Responsibility of Station Master regarding tail board or tail lamp of passing trains' },
            { number: '4.18', title: 'Means of communication' },
            { number: '4.19', title: 'Guard\'s and Loco Pilot\'s equipment' },
            { number: '4.20', title: 'Manning of engine in motion' },
            { number: '4.21', title: 'Driving an electric train' },
            { number: '4.22', title: 'Riding on engine or tender' },
            { number: '4.23', title: 'Brake-vans' },
            { number: '4.24', title: 'Position of brake-van on train' },
            { number: '4.25', title: 'Guards' },
            { number: '4.26', title: 'Couplings' },
          ],
        },
        {
          title: 'D. Vehicles and Cranes',
          rules: [
            { number: '4.27', title: 'Cranes' },
            { number: '4.28', title: 'Loading of vehicles' },
            { number: '4.29', title: 'Damaged or defective vehicles' },
          ],
        },
        {
          title: 'E. Precautions before starting Train',
          rules: [
            { number: '4.30', title: 'Loco Pilot and Guard to examine notices before starting' },
            { number: '4.31', title: 'Examination of trains before starting' },
            { number: '4.32', title: 'Examination of trains by Loco Pilot' },
            { number: '4.33', title: 'Examination of single and multiple units by Loco Pilot' },
            { number: '4.34', title: 'Duties of Guard when taking over charge of a train' },
            { number: '4.35', title: 'Starting of trains' },
            { number: '4.36', title: 'Guard to be in charge of train' },
            { number: '4.37', title: 'Subordination of Guards in station limits' },
            { number: '4.38', title: 'Assistant Loco Pilots to obey Loco Pilots' },
            { number: '4.39', title: 'Loco Pilot to obey certain orders' },
          ],
        },
        {
          title: 'F. Duties of Staff Working Trains during Journey',
          rules: [
            { number: '4.40', title: 'Loco Pilot and Assistant Loco Pilot to keep a good look-out' },
            { number: '4.41', title: 'Loco Pilot and Assistant Loco Pilot to look back' },
            { number: '4.42', title: 'Exchange of signals between Loco Pilot, Guard and station staff' },
            { number: '4.43', title: 'Guard to keep a good look-out' },
            { number: '4.44', title: 'Train held up at first Stop signal' },
            { number: '4.45', title: 'Attracting attention of Loco Pilot' },
            { number: '4.46', title: 'Assistance from Guard\'s hand brake' },
            { number: '4.47', title: 'Application of Guard\'s hand brake' },
            { number: '4.48', title: 'Permission of Guard to detach engine from train' },
            { number: '4.49', title: 'Starting and stopping of train' },
            { number: '4.50', title: 'Sounding of engine whistle' },
            { number: '4.51', title: 'Bell signals between Loco Pilot and Guard' },
            { number: '4.52', title: 'Throwing out water, fire or cinders' },
            { number: '4.53', title: 'Hose or water crane' },
            { number: '4.54', title: 'Passengers' },
          ],
        },
        {
          title: 'G. Duties of Staff on Arrival',
          rules: [
            { number: '4.55', title: 'Shutting of power' },
            { number: '4.56', title: 'Guard to see that train is stopped clear of fouling marks' },
            { number: '4.57', title: 'Detaching engine' },
            { number: '4.58', title: 'Loco Pilot to see that train is stopped clear of fouling marks' },
            { number: '4.59', title: 'Moving of train carrying passengers after it has been stopped at a station' },
            { number: '4.60', title: 'Guard not to leave train till handed over' },
            { number: '4.61', title: 'Loco Pilot not to leave engine when on duty' },
          ],
        },
        {
          title: 'H. Working of Material Trains',
          rules: [
            { number: '4.62', title: 'Working of a material train in a block section' },
            { number: '4.63', title: 'Workers on material train' },
            { number: '4.64', title: 'Protection of material train when stabled' },
            { number: '4.65', title: 'Working of track maintenance machines' },
          ],
        },
        {
          title: 'I. Private Engines and Vehicles',
          rules: [
            { number: '4.66', title: 'Private engines and vehicles' },
          ],
        },
      ],
      rules: [],
    },
    {
      number: 'CHAPTER V',
      title: 'CONTROL AND WORKING OF STATIONS',
      rulesCount: 23,
      rules: [
        { number: '5.01', title: 'Responsibility of the Station Master for working' },
        { number: '5.02', title: 'Supply of copies of rules and distribution or exhibition of other documents' },
        { number: '5.03', title: 'Obedience to orders and keeping of books and returns' },
        { number: '5.04', title: 'Signal cabins' },
        { number: '5.05', title: 'Report of neglect of duty' },
        { number: '5.06', title: 'Station Working Rules' },
        { number: '5.07', title: 'Forms' },
        { number: '5.08', title: 'Access to and operation of equipment' },
        { number: '5.09', title: 'Reception of a train on an obstructed line' },
        { number: '5.10', title: 'Reception of a train on a non-signalled line' },
        { number: '5.11', title: 'Departure of a train from a non-signalled line' },
        { number: '5.12', title: 'Departure of a train from a line provided with a common departure signal' },
        { number: '5.13', title: 'Control of shunting' },
        { number: '5.14', title: 'Responsibility for shunting' },
        { number: '5.15', title: 'Shunting at stations under Centralised Traffic Control' },
        { number: '5.16', title: 'Shunting during reception of trains' },
        { number: '5.17', title: 'Shunting near level crossing' },
        { number: '5.18', title: 'Drawing of a train to an advanced position' },
        { number: '5.19', title: 'Obstruction of running line' },
        { number: '5.20', title: 'Shunting on gradients' },
        { number: '5.21', title: 'Loose shunting' },
        { number: '5.22', title: 'Leaving vehicles in sidings outside station limits' },
        { number: '5.23', title: 'Securing of vehicles at station' },
      ],
    },
    {
      number: 'CHAPTER VI',
      title: 'ACCIDENTS AND UNUSUAL OCCURRENCES',
      rulesCount: 11,
      rules: [
        { number: '6.01', title: 'Accident or obstruction' },
        { number: '6.02', title: 'Working in case of accident or failure of communications' },
        { number: '6.03', title: 'Protection of trains stopped between stations' },
        { number: '6.04', title: 'Trains unusually delayed' },
        { number: '6.05', title: 'Sending advice of accident or breakdown' },
        { number: '6.06', title: 'Train in a block section without authority to proceed' },
        { number: '6.07', title: 'Report of conditions likely to affect running of trains to Controller or Centralised Traffic Control Operator' },
        { number: '6.08', title: 'Train parting' },
        { number: '6.09', title: 'Portion of a train left in a block section' },
        { number: '6.10', title: 'Fire' },
        { number: '6.11', title: 'Vehicles escaping from station' },
      ],
    },
    {
      number: 'CHAPTER VII',
      title: 'SYSTEM OF WORKING',
      rulesCount: 2,
      rules: [
        { number: '7.01', title: 'Systems of working' },
        { number: '7.02', title: 'Applicability of General Rules referring to the working of signals and trains' },
      ],
    },
    {
      number: 'CHAPTER VIII',
      title: 'THE ABSOLUTE BLOCK SYSTEM',
      rulesCount: 16,
      sections: [
        {
          title: 'A. Essentials',
          rules: [
            { number: '8.01', title: 'Essential of the Absolute Block System' },
          ],
        },
        {
          title: 'B. Conditions for granting Line Clear',
          rules: [
            { number: '8.02', title: 'Conditions for granting Line Clear at a class \'A\' station' },
            { number: '8.03', title: 'Conditions for granting Line Clear at a class \'B\' station' },
            { number: '8.04', title: 'Conditions for granting Line Clear at a class \'C station' },
          ],
        },
        {
          title: 'C. Obstruction – Double Line',
          rules: [
            { number: '8.05', title: 'Obstruction on double line at a block station when a train is approaching' },
            { number: '8.06', title: 'Obstruction on double line in the block section' },
          ],
        },
        {
          title: 'D. Obstruction – Single Line',
          rules: [
            { number: '8.07', title: 'Obstruction on single line at a class \'A\' station when a train is approaching' },
            { number: '8.08', title: 'Obstructing the block section at a class \'A\' station on a single line' },
            { number: '8.09', title: 'Obstruction in the face of an approaching train at a class \'B\' station on single line' },
            { number: '8.10', title: 'Obstruction within station section at a class \'B\' station on single line' },
            { number: '8.11', title: 'Obstruction outside station section at a class \'B\' single line station equipped with two-aspect signals' },
            { number: '8.12', title: 'Obstruction outside station section at a class \'B\' single line station equipped with manually operated multiple-aspect signals' },
            { number: '8.13', title: 'Obstruction outside the first Stop signal at a class \'B\' station on single line' },
          ],
        },
        {
          title: 'E. General Provision',
          rules: [
            { number: '8.14', title: 'Block back or Block forward' },
            { number: '8.15', title: 'Authority for shunting or obstruction in block section' },
            { number: '8.16', title: 'Illustrative diagrams' },
          ],
        },
      ],
      rules: [],
    },
    {
      number: 'CHAPTER IX',
      title: 'THE AUTOMATIC BLOCK SYSTEM',
      rulesCount: 16,
      sections: [
        {
          title: 'A. Rules applicable to Double Line',
          rules: [
            { number: '9.01', title: 'Essentials of the Automatic Block System on double line' },
            { number: '9.02', title: 'Duties of Loco Pilot and Guard when an Automatic Stop signal on double line is to be passed at \'on\'' },
          ],
        },
        {
          title: 'B. Rules applicable to Single Line',
          rules: [
            { number: '9.03', title: 'Essentials of the Automatic Block System on single line' },
            { number: '9.04', title: 'Minimum equipment of fixed signals in Automatic Block territory on single line' },
            { number: '9.05', title: 'Additional fixed signals in Automatic Block territory on single line' },
            { number: '9.06', title: 'Conditions for taking \'off\' manual Stop signals in Automatic Block territory on single line' },
            { number: '9.07', title: 'Duties of Loco Pilot and Guard when an Automatic Stop signal on single line is to be passed at \'on\'' },
            { number: '9.08', title: 'Person in charge of working trains on Automatic Block System on single line' },
          ],
        },
        {
          title: 'C. Rules applicable to both Double and Single Lines',
          rules: [
            { number: '9.09', title: 'Working of trains on Centralised Traffic Control territory' },
            { number: '9.10', title: 'Protection of a train stopped in an Automatic Block signalling section' },
            { number: '9.11', title: 'Loco Pilot to report failures' },
            { number: '9.12', title: 'Procedure during failure of Automatic Signalling' },
            { number: '9.13', title: 'Movement of trains against the direction of traffic on the Automatic Block System' },
            { number: '9.14', title: 'Procedure when Semi-Automatic Stop signal is \'on\'' },
            { number: '9.15', title: 'Passing a gate Stop signal at \'on\' in Automatic signalling territory' },
            { number: '9.16', title: 'Illustrative diagrams' },
          ],
        },
      ],
      rules: [],
    },
    {
      number: 'CHAPTER X',
      title: 'THE FOLLOWING TRAINS SYSTEM',
      rulesCount: 9,
      rules: [
        { number: '10.01', title: 'Essential of the Following Trains System' },
        { number: '10.02', title: 'Report of the Commissioner of Railway Safety' },
        { number: '10.03', title: 'Conditions to be observed in working trains on the Following Trains System' },
        { number: '10.04', title: 'Delivery of authority to proceed to Loco Pilot or Guard on the Following Trains System' },
        { number: '10.05', title: 'Authority to proceed on the Following Trains System' },
        { number: '10.06', title: 'Responsibility as to proper preparation of authority to proceed on the Following Train System' },
        { number: '10.07', title: 'Obstruction in the face of approaching train or trains on the Following Trains System' },
        { number: '10.08', title: 'Cessation of working on the Following Trains System' },
        { number: '10.09', title: 'Protection of trains on the Following Trains System' },
      ],
    },
    {
      number: 'CHAPTER XI',
      title: 'THE PILOT GUARD SYSTEM',
      rulesCount: 6,
      rules: [
        { number: '11.01', title: 'Essentials of the Pilot Guard System' },
        { number: '11.02', title: 'Conditions to be observed for following trains on the Pilot Guard System' },
        { number: '11.03', title: 'Pilot Guard\'s dress or badge' },
        { number: '11.04', title: 'Pilot Guard to accompany train or give authority to proceed' },
        { number: '11.05', title: 'Pilot Guard\'s Tickets' },
        { number: '11.06', title: 'Protection of trains on the Pilot Guard System' },
      ],
    },
    {
      number: 'CHAPTER XII',
      title: 'THE TRAIN-STAFF AND TICKET SYSTEM',
      rulesCount: 17,
      rules: [
        { number: '12.01', title: 'Essentials of the Train-staff and Ticket System' },
        { number: '12.02', title: 'System where applicable' },
        { number: '12.03', title: 'Conditions to be observed for following trains on the Train-staff and Ticket System' },
        { number: '12.04', title: 'Loco Pilot to have Train-staff or Train-staff Ticket' },
        { number: '2.05', title: 'Train-staff or Train-staff Ticket: by whom to be delivered to Loco Pilot' },
        { number: '12.06', title: 'Train-staff or Train-staff Ticket: when to be delivered to Loco Pilot' },
        { number: '12.07', title: 'Train-staff to be kept on engine' },
        { number: '12.08', title: 'Trains not to be started until Train-staff returned' },
        { number: '12.09', title: 'Train-staff or Train-staff Ticket to be given up and Ticket to be cancelled on arrival of train' },
        { number: '12.10', title: 'Procedure when engine is disabled on the Train-Staff and Ticket System' },
        { number: '12.11', title: 'Train-Staff Ticket: how kept' },
        { number: '12.12', title: 'Train-staff: how kept' },
        { number: '12.13', title: 'Distinguishing marks on Train-staff Tickets and boxes' },
        { number: '12.14', title: 'Form of Train-staff Ticket' },
        { number: '12.15', title: 'Record of Train-staff Tickets issued' },
        { number: '12.16', title: 'Obstruction outside the Home signal' },
        { number: '12.17', title: 'Protection of trains on the Train-staff and Ticket System' },
      ],
    },
    {
      number: 'CHAPTER XIII',
      title: 'THE ONE TRAIN ONLY SYSTEM',
      rulesCount: 4,
      rules: [
        { number: '13.01', title: 'Use of the One Train Only System' },
        { number: '13.02', title: 'Essentials of the One Train Only System' },
        { number: '13.03', title: 'Authority to enter the section' },
        { number: '13.04', title: 'Procedure in case of accident or disablement on the One Train Only System' },
      ],
    },
    {
      number: 'CHAPTER XIV',
      title: 'BLOCK WORKING',
      rulesCount: 26,
      sections: [
        {
          title: 'A. General Provisions',
          rules: [
            { number: '14.01', title: 'Means of granting or obtaining Line Clear' },
            { number: '14.02', title: 'Provision of Instruments' },
            { number: '14.03', title: 'Consent required before interfering with Block working equipment' },
          ],
        },
        {
          title: 'B. Block Stations at which Electrical Block Instruments, Track circuits or Axle Counters are provided',
          rules: [
            { number: '14.04', title: 'Certificate of competency' },
            { number: '14.05', title: 'Bell code' },
            { number: '14.06', title: 'Acknowledgement of signals' },
            { number: '14.07', title: 'Train Signal Register' },
            { number: '14.08', title: 'Authority to proceed' },
            { number: '14.09', title: 'Loco Pilot to examine authority to proceed' },
            { number: '14.10', title: 'Conditions for closing the block section' },
            { number: '14.11', title: 'Responsibility of Station Master as to authority to proceed' },
            { number: '14.12', title: 'Special responsibility as to electrical token instruments and to the token' },
            { number: '14.13', title: 'Failure of electrical block instruments or track Circuits or axle counters' },
            { number: '14.14', title: 'Closing of Intermediate Block Post' },
          ],
        },
        {
          title: 'C. Block Stations at which Electrical Block Instruments are not provided',
          rules: [
            { number: '14.15', title: 'Transmission of signals' },
            { number: '14.16', title: 'Train Signal Register' },
            { number: '14.17', title: 'Forms for messages and written authority to proceed' },
            { number: '14.18', title: 'Distinction of messages' },
            { number: '14.19', title: 'Writing and signing of messages and written authorities to proceed' },
            { number: '14.20', title: 'Completion of messages' },
            { number: '14.21', title: 'Preservation of messages and written authorities to proceed' },
            { number: '14.22', title: 'Cancellation of Line Clear' },
            { number: '14.23', title: 'Loco Pilot to have authority to proceed' },
            { number: '14.24', title: 'Authority to proceed: when to be given to Loco Pilot' },
          ],
        },
        {
          title: 'D. Line Clear Tickets',
          rules: [
            { number: '14.25', title: 'Line clear Tickets' },
          ],
        },
        {
          title: 'E. Use and Operation of Block Working',
          rules: [
            { number: '14.26', title: 'Use and operation of block working equipment' },
          ],
        },
      ],
      rules: [],
    },
    {
      number: 'CHAPTER XV',
      title: 'PERMANENT WAY AND WORKS',
      rulesCount: 28,
      sections: [
        {
          title: 'A. Railway Servants employed on the Permanent Way and Works',
          rules: [
            { number: '15.01', title: 'Condition of Permanent Way and Works' },
            { number: '15.02', title: 'Maintenance of line' },
            { number: '15.03', title: 'Keeping of material' },
            { number: '15.04', title: 'Inspection of Permanent Way and Works' },
            { number: '15.05', title: 'Patrolling of Lines' },
            { number: '15.06', title: 'Work involving danger to trains or traffic' },
            { number: '15.07', title: 'Work in thick, foggy or tempestuous weather impairing visibility' },
            { number: '15.08', title: 'Precautions before commencing operations which would obstruct the line' },
            { number: '15.09', title: 'Showing of signals' },
            { number: '15.10', title: 'Assistance in protection of trains' },
            { number: '15.11', title: 'Gangmate in each gang' },
            { number: '15.12', title: 'Knowledge of signals and equipment of gang' },
            { number: '15.13', title: 'Inspection of gauges, signals, tools and implements' },
            { number: '15.14', title: 'Responsibility of Gangmate as to safety of line' },
            { number: '15.15', title: 'Blasting' },
            { number: '15.16', title: 'Putting in or removing points or crossings' },
            { number: '15.17', title: 'Duties of Gangmate and Gangman when apprehending danger' },
          ],
        },
        {
          title: 'B. The working of Lorries, Trolleys and Motor trolleys',
          rules: [
            { number: '15.18', title: 'Distinction between trolley, lorry and motor trolley' },
            { number: '15.19', title: 'Red flag or light to be shown' },
            { number: '15.20', title: 'Equipment of trolley, lorry or motor trolley' },
            { number: '15.21', title: 'Efficient brakes' },
            { number: '15.22', title: 'Qualified person to be in charge of lorry or trolley when on the line' },
            { number: '15.23', title: 'Attachment to train prohibited' },
            { number: '15.24', title: 'Time of running' },
            { number: '15.25', title: 'Motor Trolley' },
            { number: '15.26', title: 'Protection of trolley on the line' },
            { number: '15.27', title: 'Protection of lorry on the line' },
            { number: '15.28', title: 'Lorries and trolleys out of use' },
          ],
        },
      ],
      rules: [],
    },
    {
      number: 'CHAPTER XVI',
      title: 'LEVEL CROSSINGS',
      rulesCount: 11,
      rules: [
        { number: '16.01', title: 'Knowledge of signals' },
        { number: '16.02', title: 'Supply and care of equipment' },
        { number: '16.03', title: 'Road Traffic' },
        { number: '16.04', title: 'Gateman to observe passing trains' },
        { number: '16.05', title: 'Channel for flange of wheels' },
        { number: '16.06', title: 'Defects at level crossings' },
        { number: '16.07', title: 'Obstructions at level crossings' },
        { number: '16.08', title: 'Parting of a train' },
        { number: '16.09', title: 'Trespassing' },
        { number: '16.10', title: 'Transfer of charge of gate' },
        { number: '16.11', title: 'Height gauges' },
      ],
    },
    {
      number: 'CHAPTER XVII',
      title: 'WORKING OF TRAINS ON ELECTRIFIED SECTIONS OF RAILWAYS',
      rulesCount: 9,
      rules: [
        { number: '17.01', title: 'Applicability of General Rules' },
        { number: '17.02', title: 'Special definitions applicable to this chapter' },
        { number: '17.03', title: 'Inspection of electrical way and works' },
        { number: '17.04', title: 'Permit-to-work on electrical equipment' },
        { number: '17.05', title: 'Warning to staff and public' },
        { number: '17.06', title: 'Alterations to track' },
        { number: '17.07', title: 'Tripping of circuit breakers of locomotives and electrical multiple units at neutral sections' },
        { number: '17.08', title: 'Tower wagon' },
        { number: '17.09', title: 'Additional rules for electrified sections' },
      ],
    },
    {
      number: 'CHAPTER XVIII',
      title: 'MISCELLANEOUS',
      rulesCount: 1,
      rules: [
        { number: '18.01', title: 'Repeal and Saving' },
      ],
    },
  ]

  const getChapterColor = (index: number) => {
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
      'bg-gradient-to-r from-fuchsia-600 to-fuchsia-700',
      'bg-gradient-to-r from-rose-600 to-rose-700',
      'bg-gradient-to-r from-amber-600 to-amber-700',
      'bg-gradient-to-r from-emerald-600 to-emerald-700',
      'bg-gradient-to-r from-lime-600 to-lime-700',
      'bg-gradient-to-r from-stone-600 to-stone-700',
    ]
    return colors[index % colors.length]
  }

  const getRulesColor = (rules: number) => {
    if (rules >= 50) return 'text-red-300'
    if (rules >= 20) return 'text-orange-300'
    if (rules >= 10) return 'text-yellow-300'
    return 'text-green-300'
  }

  const totalRules = chapters.reduce((sum, chapter) => sum + chapter.rulesCount, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            General & Subsidiary Rules (G&SR) All Rules
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to all General and Subsidiary Rules for AOM aspirants
          </p>
        </div>

        {/* Chapters */}
        <div className="space-y-6">
          {chapters.map((chapter, index) => {
            const isExpanded = expandedChapter === index

            return (
              <div
                key={index}
                className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                {/* Chapter Header */}
                <div
                  className={`${getChapterColor(index)} text-white px-4 py-4 cursor-pointer`}
                  onClick={() => toggleChapter(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h2 className="text-lg font-bold mb-1">
                        {chapter.number}
                      </h2>
                      <p className="text-sm text-white/90">
                        {chapter.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30">
                        <span className={`text-sm font-semibold ${getRulesColor(chapter.rulesCount)}`}>
                          {chapter.rulesCount} Rules
                        </span>
                      </div>
                      <div className="text-white/80">
                        {isExpanded ? '▼' : '▶'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chapter Content */}
                {isExpanded && (
                  <div className="p-3 space-y-6">
                    {chapter.sections ? (
                      chapter.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="bg-slate-700/50 rounded-lg p-4">
                          <h3 className="text-blue-300 font-semibold mb-3 text-sm">
                            {section.title}
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                            {section.rules.map((rule, ruleIndex) => (
                              <div
                                key={ruleIndex}
                                className="bg-slate-600/50 rounded-md p-2 hover:bg-slate-600 transition-colors"
                              >
                                <span className="text-blue-400 font-mono text-xs mr-2">
                                  {rule.number}
                                </span>
                                <span className="text-gray-200 text-xs">
                                  {rule.title}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {chapter.rules.map((rule, ruleIndex) => (
                          <div
                            key={ruleIndex}
                            className="bg-slate-700/50 rounded-md p-3 hover:bg-slate-700 transition-colors"
                          >
                            <span className="text-blue-400 font-mono text-sm mr-2">
                              {rule.number}
                            </span>
                            <span className="text-gray-200 text-sm">
                              {rule.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {chapters.length}
            </div>
            <div className="text-gray-300">Total Chapters</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              {totalRules}
            </div>
            <div className="text-gray-300">Total Rules</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              G&SR
            </div>
            <div className="text-gray-300">General & Subsidiary Rules</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralRules