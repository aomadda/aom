'use client'

import React from 'react'
import Link from 'next/link'
import { PanelTop } from 'lucide-react'

const intro = [
  'It is a modern signalling system provided at stations where points and signals are operated from a centrally located panel by means of push buttons or knobs.',
  'Provides for relay/solid state interlocking and safety features are augmented for consolidation of interlocking.',
  'It eases the operation and eliminates time loss and confusion.',
  'Status of points, signals and reception lines are readily available on hand to the Station Master (SM), which makes for smoother operation.',
  'Principal/ZRTI/MLY is responsible for initial/refresher training of staff in rules connected with panels.',
]

const panelTypes = [
  'a) Siemens panel (German system)',
  'b) Podanur workshop panel (British system)',
]

const siemens = [
  'Station diagrams are depicted on the panel board.',
  'Push buttons of different color codes are provided near the points, signals, etc. for their operations.',
  'Buttons for other purposes such as cancellation, etc. are also provided.',
  'Normal setup is as follows.',
  'Buttons used are self-restoring type, return to normal on release.',
  'Buttons are required to be pressed for not more than 3 seconds.',
  'No function can be performed by pressing a single button.',
  'Two related buttons are pressed and released simultaneously for operating a given function.',
  'Normal and reverse indications are displayed by strip indications at concerned points.',
  'The indications flash when operated and become steady when correctly set and locked.',
  'Points locked indication appears as a white dot near the point.',
  'Points cannot be operated when white dot near points is available.',
  'When points are occupied by a train, the strip indications assume red.',
  'Only two signal indications are available: ―red‖ and ―green‖ for ‗on‘ and ‗off‘.',
  'SM ensures route is correctly set.',
  'All points indications are steady.',
  'Track circuit over route is clear.',
  "Press signal button ‗GN‘ and corresponding route button ‗UN‘ simultaneously.",
  'When signal is cleared, all track including overlap appear on panel.',
  'Point lock dot indication appears near concerned point.',
  "As train passes, the aspect goes to ‗ON‘.",
  'Route is released automatically.',
  'As train occupies each section of route, the track indication changes from white to red.',
  'As train clears each section, the indication disappears signifying route release.',
  'In case the route is not released automatically, the route will be cancelled by route cancellation method.',
]

const pointRed =
  "(a) Ensure Station Master‘s key is IN and turned to unlock the panel, (b) Verify the point track indication for occupation, (c) If it is clear, call for ESM to attend the track failure, and (d) If the particular point is required to be operated under conditions of track circuit failure, operate the point button ‗WN‘ with ‗EWN‘ button."

const podanur = [
  'Station diagram is depicted on panel with relevant point/signals/track indication.',
  'Knobs of different color codes are provided on panel below the diagram. The number of points/signals are painted on corresponding knobs for easy identification.',
  'Buttons for other purposes such as cancellation, etc. are also provided.',
]

const podanurSetup = [
  'Signal knobs - red',
  'Point knob - black',
  'Shunt signal - yellow',
  'Siding signal - white',
  'Emergency route cancellation - grey',
  'Power failure - grey',
]

const podanurRest = [
  'The points and signals are operated by turning the knob switches to required position.',
  'Three indications are provided on top of each point button viz:',
]

const pointIndications = [
  'Green - normal',
  'Yellow - reverse',
  'White - free',
  'Green/yellow flash during operation',
]

const podanurMore = [
  'Signal indications repeated on panel are as per the signal on field.',
  'When signal is taken off, white strip lights up for entire route indication, showing the setting and locking of route.',
  'Free indication above each point knob disappears when route is locked.',
  "As train passes, the aspect goes to ‗on‘.",
  'Route is released automatically.',
  'As train occupies each section of route, the track indication changes from white to red.',
  'After the complete train passes the route of the signal, the route releases automatically.',
  'In case the route is not released automatically, the route will be cancelled by route cancellation method.',
]

const panelBlank = [
  'Check the power supply, whether it failed.',
  'On electrified sections, change the switches to other AT or State Electricity supply.',
  'On non-electrified section, start generator. Generator shall not be used by more than four hours continuously. If required, use the other generator.',
  'If power is available and the fault continues, inform ESM/SI.',
  'Check the position of points and signals.',
  'Use crank handle to set the points and trains shall be dealt on an authority T.369(3b) duly clamping and padlocking the points.',
  'If power is failed and alternative supply is not possible, take action as mentioned above.',
  'In non-electrified section, DC calling on signal has been provided. This signal can be taken off in case of power failure without starting generator, but it should be done after ensuring the correct position of the points.',
]

const pointFlashing = [
  'If the flashing continues for 10 seconds, restore the points to its original position. Operate the points 4 to 5 times from N to R and R to N.',
  'If flashing still continues, physically verify the points at site and remove any obstruction in the points between the switch and stock rails.',
  'Again operate the points.',
  'If the flashing still continues, treat the point as defective and inform ESM/SI.',
  'Before extracting crank handle, keep the concerned point knob in required position.',
]

const crankCentral =
  "i. Ensure all signal knobs are normal. ii. Press the crank handle release button ‗YK‘. Crank handle free indication will appear. Continuously press the button and turn the HKT/EKT to the left to extract the key with crank handle."

const crankEnd =
  'I. When the route is not locked, adopt the procedure as in (a)(i) and (ii). II. When the route is locked, press the crank handle release button after ensuring that signal knobs are normal. Then cancel indication will appear on the panel. After a lapse of 120 seconds, free indication will appear near the HKT/EKT in the box. Now turn the key to left duly pressing the button and release it.'

const crankAfter = [
  'Use crank handle to set the point to the required position. Observe the position of each end to which side they are set (wherever two ends are available) and decide whether both ends or only one end is to be cranked.',
  'After setting, they shall be clamped and padlocked.',
  'After setting the points, crank handle should be restored to HKT.',
  "After setting the points, if ‗N‘ or ‗R‘ indication available, signals can be taken off after clamping and padlocking.",
  'Otherwise, receive the train on authority T.369(3b) after clamping and padlocking the points.',
]

const siemensCancel = [
  'Route cancellation procedure will be adopted to cancel the signalled movement or to change the route already set.',
  'Before applying route cancellation, ensure that the train has not passed the signal.',
  "Press the concerned signal button {GN} and Emergency signal button {EGGN} to bring the signal back to ‗ON‘ position.",
  "Keep pressing ‗GN‘ and ‗EUUYN‘ buttons simultaneously till such time cancellation indication (white dot) appears by the side of the concerned signal.",
  "After white dot appears, release ‗GN‘ and ‗EUUYN‘ buttons and the flashing cancellation will become steady after an interval of approximately 2 minutes.",
  "Now press ‗GN‘ and ‗EUUYN‘ buttons. Keep ‗GN‘ pressed and release ‗EUUYN‘ and press concerned route button.",
  "All track indications and white dot cancellation will disappear and the ‗EUUYN‘ counter will record next higher number. The SM shall enter the counter number in the special register with reasons.",
]

const podanurCancel = [
  'Route cancellation procedure will be adopted to cancel the signalled movement or to change the route already set.',
  'Keep the signal knob in normal position after ensuring that the train has not passed the signal.',
  'Press and release route cancellation button. White light indication appears below the counter and after 2 minutes, the route will be free.',
  'Route cancellation counter will record next higher number.',
  'Flashing white light indication below the counter will disappear.',
  'SM shall record the counter number with all the particulars in the concerned register.',
  'In case relay interlocked, if route is locked after passage of the train, try to cancel the route by normal cancellation. In case route still remains locked, cancel the route by calling on route cancellation and entries shall be in red ink in TSR.',
]

const vduCancel = [
  'Route cancellation procedure will be adopted to cancel the signalled movement or to change the route already set.',
  'Point the cursor on the concerned signal icon and click the right button of the mouse. A pop-up menu appears on the screen.',
  "Left click on SIGNAL CANCEL, this will cause signal to go to ‗ON‘.",
  'Left click on the ROUTE RELEASE, the indication of cancellation starts flashing.',
  'After a lapse of 120 seconds, the route gets cleared.',
  'Route Cancellation counter will increment by one number. SM shall enter the counter number in the route cancellation register with reasons.',
]

const callingOnSiemens = [
  'The calling on signal is to be operated only when the train has occupied the calling on track and has come to a stop at concerned Home/starter signal and gets audible buzzer.',
  'Then the Main Signal button and COGGN button are to be pressed simultaneously and keeping the main signal button pressed, route button is to be pressed duly releasing the COGGN button.',
  'The points in the route and isolation are operated automatically to the required position and get locked.',
  'A row of white light appears on the panel for the concerned route and flashing circular white indication near the signal button appears.',
  'Calling on signal will clear after a time interval of 120 seconds and flashing indication will disappear.',
  'Each operation of clearance of calling on signal is electrically counted and registered.',
  'The on duty SM must record the number of counter after each operation, duly putting his initial in the concerned calling on register.',
  'If the route is not cleared automatically, the following procedure shall be adopted:',
]

const callingOnSiemensCancel = [
  'The signal button and EGGN button shall be pressed simultaneously.',
  'The signal button and the Calling on Cancellation button shall be pressed simultaneously.',
  'Signal button and route button shall be pressed, leaving Calling on Cancellation button.',
  'This will cause the calling on cancellation indication of the signal to flash.',
  'After the lapse of 240 seconds, the route of the calling on signal shall be released.',
  'This action gets registered in the calling on signal cancellation counter.',
  'The cancellation of calling on signal shall be recorded in the concerned register by SM.',
]

const callingOnPodanur = [
  'Calling-on signals shall be operated only when the train comes to a stop after occupying calling ON Track circuit and gets audible buzzer.',
  'SM on duty shall turn the calling-on signal knob to reverse (R) duly ensuring the correct setting of all the points in the route.',
  'The SM on duty now shall press and leave the COGGN push button.',
  'A steady white light will appear under the relevant veeder counter.',
  'A row of white light appears on the panel for the concerned route.',
  'After the lapse of 120 seconds, the calling-on signal assumes OFF aspect which is displayed by a steady yellow light.',
  'The relevant veeder counter will register next higher number and make entry in the concerned register.',
  'The route set will remain locked up even after the arrival of the train and it has to be released only through calling-on cancellation.',
  'Calling-on signal knob is to be put back to normal and Calling-on cancel button is to be pressed.',
  'White light indication appears below the calling-on cancel veeder counter.',
  'On completion of 240 seconds, the route illumination gets extinguished releasing the route and simultaneously causes the white indication to disappear.',
  'Make an entry in the calling-on cancellation register.',
]

const callingOnVdu = [
  'Calling-on signals shall be operated only when the train comes to a stop after occupying calling ON Track circuit and gets audible buzzer.',
  'Click the right button of the mouse, pointing the cursor on the concerned calling-on signal icon, a pop-up menu will appear on the screen.',
  'Left click on concerned route in the menu of calling-on signal.',
  'Route for calling-on signal will be set and concerned portion of the track on VDU changes to yellow, the initiation indication also flashes. It indicates that the initiation of calling-ON signal is in process. After the lapse of 60 seconds, calling-on signal gets cleared.',
  'Make an entry in the calling-on cancellation register.',
]

const emergencyCallingOn = [
  '{A} Normalize home signal knob.',
  '{B} Reverse calling-on signal knob.',
  '{C} Press and release calling-on initiation button {COGGN}.',
  '{D} Normalize calling-on signal knob.',
  '{E} Press and release the ‗calling-on‘ route cancellation button.',
]

const powerFail = [
  'When main power supply fails, an audible warning along with a red light indication is given on the panel.',
  'Stop the buzzer by pressing the acknowledgement button.',
  'The red light will continue to burn.',
  'Start generator No.1 by using push button arrangement. If it does not start, use crank handle to start it.',
  'Change the main/generator switch to generator position and change Generator (1)/(2) switch to generator (1) position.',
  'Check whether all indications are available on the panel and resume normal working.',
  'After 4 hours, if main power supply does not resume, start generator (2) and change over the generator (1)/(2) switch to generator (2) position.',
]

const powerResume = [
  'Once again, audible warning comes on the panel. Stop it by pressing acknowledgement button. Now the red light indication disappears.',
  'Stop the generator.',
  'Change the main/generator switch to main position.',
  'Check the availability of all indications on the panel.',
]

const rri = [
  'The route relay interlocking is an improvement on the panel interlocking and generally adopted for big yards, junctions having large number of points and signals and frequent yard movements.',
  'In this system, points in the route, overlap and isolation get set automatically to the required position when a route setting is initiated from a signal to a required route.',
  'Entrance-exit (N-X) system is being adopted on Indian Railway but generally N-X type Siemens system is adopted on Western Railway.',
]

const rriOp = [
  'If the points are required to be operated individually for testing and maintenance purposes, the concerned point button and common group point button (COPB) is pressed simultaneously and released.',
  'For clearing the signal, the signal button is pressed in conjunction with the relevant route button and the buttons are released after 2 or 3 seconds.',
  'This operation sets all the points in the route, overlap and isolation to the required position and then clears the signal.',
  'The whole route from that signal to the signal in advance is also set.',
  "This is indicated by white light continuously including the overlap. If all the conditions for taking off signals are fulfilled, one signal clears to ‗OFF‘ aspect.",
  'The whole route from one signal to the next signal comprises of one or more sub-routes.',
  'As the train passes the signal and occupies and clears the track circuits in a sequential order, the sub-route gets released automatically one by one till the train comes to on berthing track.',
  'The sub routes released in this way in the rear can be immediately used for any subsequent movement involving that sub-route.',
  'The time delay ensures that the points in the overlap do not get released when the train is approaching. The approach and back locking is also provided.',
]

const axleCounter = [
  'In conventional block signalling, last vehicle check is done by the Cabinman/SM of receiving station to ensure complete arrival of train.',
  'Human error can play a vital role in correct detection if a parted bogie stays in the block section.',
  'This can be avoided if block is proved by the Axle counter.',
  'Axle counter block working monitors the train movement to the block section.',
  'Automatic checking up of the clearance of track up to Block overlap and restoration of all signals to ON position.',
  'After arrival of last train with locking of relevant points, ensure reduction in block operating time.',
  'The SMs at both the stations get automatic display of status of the track (line closed and train on line) and direction of train movement (train going to / train coming from).',
  'The Axle counter block working is possible for both single line and double line section.',
  'In single line sections, one axle counter is placed at either side of the station.',
  'The track device is mounted on the advance track circuit of both ends of the block section.',
  'In double line section, both up and down lines have axle counter at the receiving station.',
  'Track devices are mounted on the advance starter and home signal track circuits of each line.',
  'The system consists of relay logic circuit and combiner/converter units at both ends and relay status data is exchanged by using fail safe digital multiplexing.',
  'As in count of axles at dispatching station are tallied with out count of axles at receiving station for block proving, the possibility of leaving any stock in the block section is nullified.',
  'In case of failure of axle counter, block resetting is possible with co-operation from the other end of station master.',
]

const ssi = [
  'Relay Interlocking requiring thousands of relays and wirings has inherent limitation in regard to flexibility, high cost of installation, requiring large space and regular/preventive maintenance schedules.',
  'These factors lead to the high cost of operations which is overcome by new type of interlocking system called Solid State Interlocking (SSI) being installed on Indian Railways.',
  'Reduction in relay room sizes, air conditioners and power requirements are other advantages in addition to reduced cost for installation and alterations even in case of major yard alterations.',
  'The operating domino type panel is used by SM for operating SSI. Push buttons of the panel are read by input modules of SSI and panel indications are provided through separate panel processors which is connected to SSI through a serial data link.',
  'Two panels can be provided for End panel operation.',
  'A data logger logs the input and output of SSI with time stamping for later off-line operational and failure analysis.',
  'A maintainer terminal is provided to monitor SSI status including failures.',
  'The reliability of SSI system is very high as the processors are not only duplicated but additional state is provided in Hot standby mode.',
  'A safety monitor detects the processor failures and switches to standby processors automatically.',
  'In short, this technology provides maintenance free and easy fault localizing system of interlocking giving fault indications on the faulty unit. If the hot standby is not available for automatic change over, faulty unit is replaced by maintenance staff immediately.',
]

const ssiAdvantages = [
  'Increase in section capacity',
  'User friendly operation',
  'Fail safe technique',
  'Multiple mode operation',
]

const ssiSignificance = [
  'Reduce manpower',
  'Centralized operation',
  'Multiple mode of operation',
  'Control cum indication Panel',
  'Video display unit (PC)',
  'Centralised traffic Control (CTC) permits remote operation',
  'Significant reduction of traffic block time',
  'Easier and simple operation',
]

const vduTestingIntro =
  "Take off any signal, against which no train is approaching, lock the SM‘s key/log off from VDU and put back the signal to ON and ensure the following:"

const vduTestingChecks = [
  'That the signal is put back to ON',
  'That the route of the signal is still holding',
  'Try to alter any point in the route and observe that the point does not get altered',
  'Try to cancel the route, neither route cancellation shall be initiated nor should the route get cancelled.',
]

const panelComparisonRows = [
  [
    'The points and signals are operated by turning the knob switches to the required position',
    'Push buttons of different colour codes are provided near the points, signal etc., for their operations',
  ],
  [
    'Points are required to be operated individually for taking off signals',
    'Individual points need not be operated for taking off signals',
  ],
  [
    'Only one knob to be operated at a time',
    'Two related buttons have to be pressed and released simultaneously for operating a given function',
  ],
  ['Route knobs are not available', 'Route knobs are available'],
  [
    'Colour of knobs: Point-black',
    'Colour of buttons: Route button-grey, Point button–blue',
  ],
  [
    'Emergency point, signal, route & sub route release buttons are not available',
    'Emergency point, signal, route & sub route release buttons are available',
  ],
  [
    'Knobs are turned to Normal and Reverse positions',
    "NCR‘ indication along with audible warning appears after a button is kept pressed for a prolonged period of 10 seconds or more. Normally, buttons are not required to be pressed for more than 3 seconds.",
  ],
  [
    'There are three indications and two positions for the Point knobs. Miniature yellow light is shown whenever point is free near the knobs and when not available indicates point is locked',
    "Normal and reverse indications of points are displayed by strip indications at the concerned points, normal on the straight and reverse on the turnout. ‗Points locked‘ indication appears as white dot near the point when it is locked by the route",
  ],
  [
    'When signal is cleared for a route - all track only up to the next signal is only shown',
    'When signal is cleared for a route - all track including overlap indications appear on the panel',
  ],
  [
    'Knobs are not self-restoring type once operated',
    'Knobs are self-restoring type once operated',
  ],
  [
    'As the train clears entire section of the route, the indication of the route disappears only after the concerned signal is put back to normal',
    'As the train clears each section of the route, the indication of the route disappears, signifying release of the section',
  ],
]

const vduTestingRest = [
  'Change over the VDU to standby VDU and ensure that occupation or clearances of the lines/track circuits/axle counters are updated automatically in accordance with status in the previous VDU.',
  'Take off signal to a route and attempt to take off another signal whose route infringes the path of the signal taken off or the signals which are locked. It should not obey.',
  'Observe the signal is going back to ON as a train passes the signal and proper sequential occupation and clearance of track detection systems (track circuit/axle counters) as the train passes.',
  'Ensure the N and R indications are showing in accordance with the position of the points indications.',
  'Ensure that free indication of points disappears when the route involving the point is locked.',
  'Ensure that free indication of crank handle disappears when signal for the route involving the points in the group of the crank handle is taken off.',
  'At stations having interlocked traffic gates, proper working of LC gate control to be checked by transmitting and receiving the gate control. Working of emergency gate released shall also be checked.',
  'Try to take off advance starter/IB signal, which is connected to block instrument, without taking line clear and ensure that the signal does not assume off aspect.',
  'Cancel any signal route and check whether the corresponding veeder counter is increased to next higher number. Also, check the time taken for cancellation and ensure the time is as prescribed in SWR. Jumping of numbers shall be taken as failure.',
  'Ensure that overlap point is released only after prescribed tie delay.',
  'Calling-on signals shall be taken off for nominated routes.',
  'Route cancellation for home signals and emergency calling-on cancellation to be checked.',
  'Observe aspect sequence and ensure that they are as per aspect sequence chart.',
  'Block any signal and try to take off the signal. The signal shall not obey.',
  'Block any point on the VDU and try to take off the signal involving the blocked point. The signal shall not obey.',
  'Try to take off a signal by setting the points in the route to wrong position, check that the route is set and signal assumes off aspect only after the points are set correctly and locked.',
  'Crank handle to be checked for extraction, it should be possible to extract immediately if the route is clear and with a time delay if route is not clear.',
]

function NumberedList({ items, start = 1 }: { items: string[]; start?: number }) {
  return (
    <ol className="space-y-3">
      {items.map((text, index) => (
        <li
          key={`${start + index}-${text.slice(0, 40)}`}
          className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
        >
          <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
            {start + index}
          </span>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ol>
  )
}

function DotList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((text) => (
        <li
          key={text}
          className="flex gap-2.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5"
        >
          <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ul>
  )
}

function CircleList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4">
      {items.map((text) => (
        <li key={text} className="flex gap-2.5">
          <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">o</span>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ul>
  )
}

function ArrowList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4">
      {items.map((text) => (
        <li key={text} className="flex gap-2.5">
          <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ul>
  )
}

function SectionCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
      <h2 className="text-base font-semibold text-amber-100 sm:text-lg">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

const PanelInterlockingPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0c10]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0d1117] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(251,191,36,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(59,130,246,0.06),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-amber-950/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-16">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl animate-[fade-up_0.7s_ease-out]">
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-8 sm:px-10 sm:py-10">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-amber-400/25 to-orange-600/30 ring-1 ring-amber-400/40 shadow-lg shadow-amber-950/40 animate-[soft-pulse_3.5s_ease-in-out_infinite]">
              <PanelTop className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              PANEL INTERLOCKING (APPENDIX XXI)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-5 px-5 py-8 sm:px-10 sm:py-10">
            <NumberedList items={intro} />

            <div className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <div className="flex gap-3">
                <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                  6
                </span>
                <div>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    There are two types of panels, they are:
                  </p>
                  <CircleList items={panelTypes} />
                </div>
              </div>
            </div>

            <SectionCard title="SIEMENS PANEL">
              <NumberedList items={siemens} />
            </SectionCard>

            <SectionCard title="POINT POSITION INDICATION SHOWING RED:">
              <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
                {pointRed}
              </p>
            </SectionCard>

            <SectionCard title="PODANUR WORKSHOP PANEL">
              <NumberedList items={podanur} />
              <div className="mt-4 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                    4
                  </span>
                  <div>
                    <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                      Normal setup is:
                    </p>
                    <CircleList items={podanurSetup} />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <NumberedList items={podanurRest} start={5} />
              </div>
              <CircleList items={pointIndications} />
              <div className="mt-4">
                <NumberedList items={podanurMore} start={7} />
              </div>
            </SectionCard>

            <SectionCard title="a. Panel Becomes Blank">
              <NumberedList items={panelBlank} />
            </SectionCard>

            <SectionCard title="b. Point Indication Flashing When Point is Operated">
              <NumberedList items={pointFlashing} />
            </SectionCard>

            <SectionCard title="Instructions to Release Crank Handle">
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                    a) At Central Panel Station (where the route is free or locked):
                  </h3>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    {crankCentral}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                    b) At End Panel Stations:
                  </h3>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    {crankEnd}
                  </p>
                </div>
                <NumberedList items={crankAfter} />
              </div>
            </SectionCard>

            <SectionCard title="c) Route Cancellation">
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                    Cancellation of Route on Siemens Panel
                  </h3>
                  <NumberedList items={siemensCancel} />
                </div>
                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                    Route Cancellation on Podanur Panel
                  </h3>
                  <NumberedList items={podanurCancel} />
                </div>
                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                    Cancellation of Route on VDU
                  </h3>
                  <NumberedList items={vduCancel} />
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Procedure for Taking Off and Cancelling Calling On Signal (Siemens Panel)">
              <NumberedList items={callingOnSiemens} />
              <ArrowList items={callingOnSiemensCancel} />
            </SectionCard>

            <SectionCard title="PODANUR PANEL">
              <NumberedList items={callingOnPodanur} />
            </SectionCard>

            <SectionCard title="VDU PANEL">
              <NumberedList items={callingOnVdu} />
            </SectionCard>

            <SectionCard title="EMERGENCY CALLING-ON CANCELLATION">
              <p className="mb-2 text-[15px] leading-[1.75] text-amber-100/90 sm:text-base">
                (Route Cancellation When Route Locked) (Appendix XI-4/SWR)
              </p>
              <p className="mb-4 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
                At stations provided with relay interlocking, the route may get locked up after the
                passage of the train due to track circuit failure.
              </p>
              <p className="mb-3 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                1. Try to cancel the route by normal cancellation method and if the route still remains
                unlocked, the same may be cancelled by ‗calling-on‘ cancellation method as given below:
              </p>
              <ul className="mb-4 space-y-2 border-l-2 border-amber-500/25 pl-4">
                {emergencyCallingOn.map((text) => (
                  <li key={text} className="flex gap-2.5">
                    <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
                  </li>
                ))}
              </ul>
              <NumberedList
                items={[
                  "A white indication appears near the ‗calling-on‘ route cancellation button and after 240 seconds the route will get released.",
                  "The ‗calling-on‘ cancellation counter will record next higher number and the SM shall record the same in the special register with all the particulars.",
                ]}
                start={2}
              />
            </SectionCard>

            <SectionCard title="FAILURE OF MAIN POWER SUPPLY">
              <NumberedList items={powerFail} />
              <div className="mt-4 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                  When Main Power Supply Resumes:
                </h3>
                <NumberedList items={powerResume} />
              </div>
              <div className="mt-4 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                  Frequent Failure of Main Power Supply:
                </h3>
                <DotList
                  items={[
                    'If frequent and intermittent failure of main power supply is experienced, to avoid signals going blank in the face of an approaching train, the power supply shall not be changed over to the main till the required train movement is completed even if the main supply resumes. Send a report to DEE.',
                  ]}
                />
              </div>
            </SectionCard>

            <SectionCard title="a) Route Relay Interlocking (RRI) (Operating Manual W.R.)">
              <DotList items={rri} />
              <div className="mt-4 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                  Operation of RRI:
                </h3>
                <DotList items={rriOp} />
              </div>
            </SectionCard>

            <SectionCard title="b) Block Proving by Axle Counters (Operating Manual W.R.)">
              <DotList items={axleCounter} />
            </SectionCard>

            <SectionCard title="c) Solid State Interlocking (SSI)">
              <DotList items={ssi} />
              <div className="mt-4 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                  Advantages of SSI
                </h3>
                <DotList items={ssiAdvantages} />
              </div>
              <div className="mt-4 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                  Significance of SSI for Operating Staff
                </h3>
                <DotList items={ssiSignificance} />
              </div>
            </SectionCard>

            <SectionCard title="Testing of VDU Panel (CTMG & PPL r.No.T.411/JPO/Testing of Signals dt-8.3.21)">
              <DotList items={[vduTestingIntro]} />
              <ArrowList items={vduTestingChecks} />
              <div className="mt-4">
                <DotList items={vduTestingRest} />
              </div>
              <CircleList
                items={[
                  'When the crank handle is taken out, signals controlling the points grouped in that crank handle shall not obey.',
                ]}
              />
              <div className="mt-4">
                <DotList
                  items={[
                    'Test functioning of buzzers for various unusuals, failure indications, communication links, calling-on signal, emergency point buttons and emergency gate release key by simulation with help of S&T staff.',
                  ]}
                />
              </div>
            </SectionCard>
          </div>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.25s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Difference between Siemens Panel and Podanur Panel
            </h2>
          </header>

          <div className="overflow-x-auto px-5 py-7 sm:px-8 sm:py-9">
            <div className="overflow-x-auto rounded-2xl border border-slate-600/40 ring-1 ring-white/4">
              <table className="w-full min-w-180 border-collapse text-left">
                <thead>
                  <tr className="border-b border-amber-500/20 bg-slate-950/50">
                    <th className="px-3 py-3.5 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4 sm:text-sm">
                      S.No
                    </th>
                    <th className="px-3 py-3.5 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4 sm:text-sm">
                      Podanur Panel
                    </th>
                    <th className="px-3 py-3.5 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4 sm:text-sm">
                      Siemens Panel
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {panelComparisonRows.map(([podanur, siemens], index) => (
                    <tr
                      key={podanur}
                      className="bg-slate-900/30 transition-colors hover:bg-slate-900/55"
                    >
                      <td className="border-r border-slate-700/40 px-3 py-3.5 text-[13px] font-semibold leading-relaxed text-amber-100/95 sm:px-4 sm:text-[15px]">
                        {index + 1}
                      </td>
                      <td className="border-r border-slate-700/40 px-3 py-3.5 text-[13px] leading-relaxed text-slate-300 sm:px-4 sm:text-[15px]">
                        {podanur}
                      </td>
                      <td className="px-3 py-3.5 text-[13px] leading-relaxed text-slate-300 sm:px-4 sm:text-[15px]">
                        {siemens}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </article>

        <div className="mt-10 flex justify-center">
          <Link
            href="/topics/operating-material"
            className="group inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-slate-900/70 px-4 py-2 text-sm font-medium text-amber-100 shadow-lg shadow-black/15 ring-1 ring-amber-500/10 transition hover:border-amber-300/45 hover:bg-slate-900/90"
          >
            <span className="transition-transform group-hover:-translate-x-0.5" aria-hidden>
              ←
            </span>
            <span>Back to Operating Material</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes soft-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.04);
            opacity: 0.92;
          }
        }
      `}</style>
    </div>
  )
}

export default PanelInterlockingPage
