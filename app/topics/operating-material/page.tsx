'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { ScrollToTopButton } from '@/components/topics/operating-material/ScrollToTopButton'
import { AlertTriangle, ArrowLeftRight, BadgeCheck, BetweenHorizontalEnd, BetweenHorizontalStart, Bike, Bell, Bomb, BookMarked, BrickWall, Building2, CalendarClock, CarFront, ChevronsRight, CircuitBoard, CircleCheck, CircleDashed, CircleDot, CirclePlay, ClipboardCheck, ClipboardList, Combine, Container, Copy, CornerDownRight, Eclipse, Eye, FileBadge, FileCheck, FileWarning, Flame, Forward, GitBranch, GitFork, GitMerge, Hammer, Hand, Handshake, HardHat, House, KeyRound, Layers, LifeBuoy, LightbulbOff, LogIn, LogOut, Milestone, MoreHorizontal, MoveHorizontal, MoveRight, OctagonX, Package, PackageX, PanelTop, PhoneCall, PhoneOff, Play, Repeat, Route, Ruler, ShieldAlert, ShieldCheck, Signal, SignalHigh, SignalLow, SignalMedium, Signpost, Siren, Spline, Split, SquareParking, Ticket, TrainFront, TriangleAlert, Truck, Unlink, Unplug, UserRoundCog, Waves, Waypoints, Weight, Workflow, Wrench, Zap, ZapOff } from 'lucide-react'

const topics = [
  {
    href: '/topics/operating-material/absolute-block-system',
    title: 'Absolute Block System',
    icon: Layers,
  },
  {
    href: '/topics/operating-material/adequate-distance',
    title: 'Adequate Distance',
    icon: Ruler,
  },
  {
    href: '/topics/operating-material/advanced-starter',
    title: 'Advanced Starter',
    icon: ChevronsRight,
  },
  {
    href: '/topics/operating-material/advanced-starter-defective',
    title: 'Advanced Starter Defective',
    icon: LightbulbOff,
  },
  {
    href: '/topics/operating-material/authorised-officer',
    title: 'Authorised Officer',
    icon: BadgeCheck,
  },
  {
    href: '/topics/operating-material/authorities-issued-to-loco-pilot-and-guard-in-absolute-block-system',
    title: 'Authorities Issued to Loco Pilot and Guard in Absolute Block System',
    icon: FileCheck,
  },
  {
    href: '/topics/operating-material/authorities-issued-to-loco-pilot-and-guard-in-automatic-block-system',
    title: 'Authorities Issued to Loco Pilot and Guard in Automatic Block System',
    icon: CircuitBoard,
  },
  {
    href: '/topics/operating-material/authority-to-proceed',
    title: 'Authority to Proceed',
    icon: FileCheck,
  },
  {
    href: '/topics/operating-material/automatic-block-system',
    title: 'Automatic Block System',
    icon: CircuitBoard,
  },
  {
    href: '/topics/operating-material/bell-codes',
    title: 'Bell Codes',
    icon: Bell,
  },
  {
    href: '/topics/operating-material/bell-signals',
    title: 'Bell Signals',
    icon: Siren,
  },
  {
    href: '/topics/operating-material/block-forward',
    title: 'Block Forward',
    icon: Forward,
  },
  {
    href: '/topics/operating-material/block-overlap',
    title: 'Block Overlap',
    icon: BetweenHorizontalStart,
  },
  {
    href: '/topics/operating-material/block-proving-by-axle-counters',
    title: 'Block Proving by Axle Counters',
    icon: Waypoints,
  },
  {
    href: '/topics/operating-material/block-section',
    title: 'Block Section',
    icon: Split,
  },
  {
    href: '/topics/operating-material/block-ticket',
    title: 'Block Ticket',
    icon: Ticket,
  },
  {
    href: '/topics/operating-material/block-working',
    title: 'Block Working',
    icon: BrickWall,
  },
  {
    href: '/topics/operating-material/brake-power-certificate',
    title: 'Brake Power Certificate',
    icon: FileBadge,
  },
  {
    href: '/topics/operating-material/brake-van',
    title: 'Brake Van',
    icon: Package,
  },
  {
    href: '/topics/operating-material/calling-on-signal',
    title: 'Calling On Signal',
    icon: PhoneCall,
  },
  {
    href: '/topics/operating-material/cancel-last-signal',
    title: 'Cancel Last Signal',
    icon: OctagonX,
  },
  {
    href: '/topics/operating-material/catch-slip-siding',
    title: 'Catch / Slip Siding',
    icon: CornerDownRight,
  },
  {
    href: '/topics/operating-material/caution-order',
    title: 'Caution Order',
    icon: TriangleAlert,
  },
  {
    href: '/topics/operating-material/classification-of-stations',
    title: 'Classification of Stations',
    icon: Building2,
  },
  {
    href: '/topics/operating-material/closing-of-block-section-after-pushing-back-of-the-train',
    title: 'Closing of Block Section After Pushing Back of the Train',
    icon: Unplug,
  },
  {
    href: '/topics/operating-material/coacting-signal',
    title: 'Co-acting Signal',
    icon: Copy,
  },
  {
    href: '/topics/operating-material/conditions-for-closing-of-block-section',
    title: 'Conditions for Closing of Block Section',
    icon: CircleCheck,
  },
  {
    href: '/topics/operating-material/conditions-for-taking-off-home-signal',
    title: 'Conditions for Taking Off Home Signal',
    icon: Signal,
  },
  {
    href: '/topics/operating-material/control-and-responsibility-for-shunting',
    title: 'Control and Responsibility for Shunting',
    icon: UserRoundCog,
  },
  {
    href: '/topics/operating-material/defective-signals',
    title: 'Defective Signals',
    icon: Siren,
  },
  {
    href: '/topics/operating-material/defective-vehicles',
    title: 'Defective Vehicles',
    icon: PackageX,
  },
  {
    href: '/topics/operating-material/departure-of-a-train-from-non-signalled-line',
    title: 'Departure of a Train from Non-Signalled Line',
    icon: LogOut,
  },
  {
    href: '/topics/operating-material/departure-signal-got-stuck-up-in-OFF-position-at-an-advance-station',
    title: 'Departure Signal Got Stuck Up in OFF Position',
    icon: LightbulbOff,
  },
  {
    href: '/topics/operating-material/despatch-signals',
    title: 'Despatch Signals',
    icon: LogOut,
  },
  {
    href: '/topics/operating-material/detonating-signals',
    title: 'Detonating Signals',
    icon: Bomb,
  },
  {
    href: '/topics/operating-material/disconnection-reconnection',
    title: 'Disconnection and Reconnection',
    icon: Unplug,
  },
  {
    href: '/topics/operating-material/distant-signal',
    title: 'Distant Signal',
    icon: SignalLow,
  },
  {
    href: '/topics/operating-material/emergency-crank-handle',
    title: 'Emergency Crank Handle',
    icon: Wrench,
  },
  {
    href: '/topics/operating-material/engine-pushing',
    title: 'Engine Pushing',
    icon: MoveRight,
  },
  {
    href: '/topics/operating-material/engine-unable-to-haul-the-load',
    title: 'Engine Unable to Haul the Load',
    icon: Weight,
  },
  {
    href: '/topics/operating-material/Exchange-of-all-right-signals',
    title: 'Exchange of All Right Signals',
    icon: Handshake,
  },
  {
    href: '/topics/operating-material/facing-trailing-points',
    title: 'Facing and Trailing Points',
    icon: GitFork,
  },
  {
    href: '/topics/operating-material/failure-of-main-power-supply',
    title: 'Failure of Main Power Supply',
    icon: ZapOff,
  },
  {
    href: '/topics/operating-material/Fire-on-train',
    title: 'Fire on Train',
    icon: Flame,
  },
  {
    href: '/topics/operating-material/fixed-signal',
    title: 'Fixed Signal',
    icon: Signal,
  },
  {
    href: '/topics/operating-material/flare-signals',
    title: 'Flare Signals',
    icon: Flame,
  },
  {
    href: '/topics/operating-material/flat-tyre',
    title: 'Flat Tyre',
    icon: CircleDashed,
  },
  {
    href: '/topics/operating-material/fouling-mark',
    title: 'Fouling Mark',
    icon: Milestone,
  },
  {
    href: '/topics/operating-material/gate-signal',
    title: 'Gate Signal',
    icon: BrickWall,
  },
  {
    href: '/topics/operating-material/glp-check',
    title: 'GLP Check',
    icon: ClipboardCheck,
  },
  {
    href: '/topics/operating-material/guidelines-to-station-master-after-going-to-station',
    title: 'Guidelines to Station Master After Going to Station',
    icon: ClipboardCheck,
  },
  {
    href: '/topics/operating-material/hand-signals',
    title: 'Hand Signals',
    icon: Hand,
  },
  {
    href: '/topics/operating-material/home-signal',
    title: 'Home Signal',
    icon: House,
  },
  {
    href: '/topics/operating-material/intermediate-block-signal',
    title: 'IB Signal',
    icon: Spline,
  },
  {
    href: '/topics/operating-material/intermediate-block-signal-defective',
    title: 'IB Signal Defective',
    icon: Spline,
  },
  {
    href: '/topics/operating-material/integrated-block',
    title: 'Integrated Block',
    icon: Combine,
  },
  {
    href: '/topics/operating-material/interlocking',
    title: 'Interlocking',
    icon: Combine,
  },
  {
    href: '/topics/operating-material/isolation',
    title: 'Isolation',
    icon: Unlink,
  },
  {
    href: '/topics/operating-material/isolator',
    title: 'Isolator',
    icon: ZapOff,
  },
  {
    href: '/topics/operating-material/kavach',
    title: 'Kavach',
    icon: ShieldCheck,
  },
  {
    href: '/topics/operating-material/level-crossing-gates',
    title: 'Level Crossing Gates',
    icon: BrickWall,
  },
  {
    href: '/topics/operating-material/line-block',
    title: 'Line Block',
    icon: Hammer,
  },
  {
    href: '/topics/operating-material/line-clear',
    title: 'Line Clear',
    icon: CircleCheck,
  },
  {
    href: '/topics/operating-material/loco-pilot-entered-without-atp',
    title: 'Loco Pilot Entered Without ATP',
    icon: FileWarning,
  },
  {
    href: '/topics/operating-material/lorry',
    title: 'Lorry',
    icon: Truck,
  },
  {
    href: '/topics/operating-material/lurch',
    title: 'Lurch',
    icon: Waves,
  },
  {
    href: '/topics/operating-material/marker-boards',
    title: 'Marker Boards',
    icon: Signpost,
  },
  {
    href: '/topics/operating-material/marshalling',
    title: 'Marshalling',
    icon: Combine,
  },
  {
    href: '/topics/operating-material/material-train',
    title: 'Material Train',
    icon: Container,
  },
  {
    href: '/topics/operating-material/motor-operated-points',
    title: 'Motor Operated Points',
    icon: Wrench,
  },
  {
    href: '/topics/operating-material/motor-trolley',
    title: 'Motor Trolley',
    icon: Bike,
  },
  {
    href: '/topics/operating-material/multiple-aspect-signalling',
    title: 'Multiple Aspect Signalling',
    icon: SignalHigh,
  },
  {
    href: '/topics/operating-material/non-interlocked-working',
    title: 'Non-Interlocked Working',
    icon: Unlink,
  },
  {
    href: '/topics/operating-material/obstruction',
    title: 'Obstruction',
    icon: AlertTriangle,
  },
  {
    href: '/topics/operating-material/obtain-line-clear-through-control-phone-and-VHF-set',
    title: 'Obtain Line Clear Through Control Phone and VHF Set',
    icon: PhoneCall,
  },
  {
    href: '/topics/operating-material/operating-authorities',
    title: 'Operating Authorities',
    icon: ClipboardList,
  },
  {
    href: '/topics/operating-material/other-signals',
    title: 'Other Signals',
    icon: MoreHorizontal,
  },
  {
    href: '/topics/operating-material/outer-signal',
    title: 'Outer Signal',
    icon: CircleDot,
  },
  {
    href: '/topics/operating-material/panel-become-blank',
    title: 'Panel Becomes Blank',
    icon: PanelTop,
  },
  {
    href: '/topics/operating-material/panel-interlocking',
    title: 'Panel Interlocking',
    icon: PanelTop,
  },
  {
    href: '/topics/operating-material/patrolling-of-lines',
    title: 'Patrolling of Lines',
    icon: Route,
  },
  {
    href: '/topics/operating-material/permissive-signals',
    title: 'Permissive Signals',
    icon: SignalMedium,
  },
  {
    href: '/topics/operating-material/podanur-panel',
    title: 'Podanur Panel',
    icon: PanelTop,
  },
  {
    href: '/topics/operating-material/point-indication-flashing-when-point-is-operated',
    title: 'Point Indication Flashing When Point is Operated',
    icon: SignalMedium,
  },
  {
    href: '/topics/operating-material/point-trap-indicator',
    title: 'Point Trap Indicator',
    icon: Signpost,
  },
  {
    href: '/topics/operating-material/points-affecting-the-movement',
    title: 'Points Affecting the Movement',
    icon: GitFork,
  },
  {
    href: '/topics/operating-material/power-block',
    title: 'Power Block',
    icon: Zap,
  },
  {
    href: '/topics/operating-material/precautions-before-detaching-engine-within-station-limits',
    title: 'Precautions Before Detaching Engine Within Station Limits',
    icon: Unlink,
  },
  {
    href: '/topics/operating-material/precautions-to-be-observed-during-stabling-and-securing-of-vehicles',
    title: 'Precautions to be Observed During Stabling and Securing of Vehicles',
    icon: SquareParking,
  },
  {
    href: '/topics/operating-material/procedure-for-obstructing-block-section-for-shunting',
    title: 'Procedure for Obstructing Block Section for Shunting',
    icon: ShieldAlert,
  },
  {
    href: '/topics/operating-material/protection-of-train',
    title: 'Protection of Train',
    icon: ShieldAlert,
  },
  {
    href: '/topics/operating-material/rail-dolly',
    title: 'Rail Dolly',
    icon: CircleDot,
  },
  {
    href: '/topics/operating-material/rail-fracture',
    title: 'Rail Fracture',
    icon: Split,
  },
  {
    href: '/topics/operating-material/rail-road-vehicle',
    title: 'Rail Road Vehicle',
    icon: CarFront,
  },
  {
    href: '/topics/operating-material/reception-of-a-train-on-a-non-signalled-line',
    title: 'Reception of a Train on a Non-Signalled Line',
    icon: LogIn,
  },
  {
    href: '/topics/operating-material/reception-of-a-train-on-an-obstructed-line',
    title: 'Reception of a Train on an Obstructed Line',
    icon: TriangleAlert,
  },
  {
    href: '/topics/operating-material/reception-signal-home-signal-is-defective',
    title: 'Reception Signal (Home) Defective',
    icon: House,
  },
  {
    href: '/topics/operating-material/reception-signals',
    title: 'Reception Signals',
    icon: LogIn,
  },
  {
    href: '/topics/operating-material/relay-room',
    title: 'Relay Room',
    icon: KeyRound,
  },
  {
    href: '/topics/operating-material/releasing-of-crank-handle',
    title: 'Releasing of Crank Handle',
    icon: KeyRound,
  },
  {
    href: '/topics/operating-material/relief-engine',
    title: 'Relief Engine',
    icon: LifeBuoy,
  },
  {
    href: '/topics/operating-material/repeating-signal',
    title: 'Repeating Signal',
    icon: Repeat,
  },
  {
    href: '/topics/operating-material/responsibility-and-functions-of-station-staff-in-working-of-trains',
    title: 'Responsibility and Functions of Station Staff in Working of Trains',
    icon: HardHat,
  },
  {
    href: '/topics/operating-material/route-cancellation',
    title: 'Route Cancellation',
    icon: Route,
  },
  {
    href: '/topics/operating-material/route-relay-interlocking',
    title: 'Route Relay Interlocking',
    icon: Workflow,
  },
  {
    href: '/topics/operating-material/routing-signal',
    title: 'Routing Signal',
    icon: GitBranch,
  },
  {
    href: '/topics/operating-material/running-line',
    title: 'Running Line',
    icon: Route,
  },
  {
    href: '/topics/operating-material/running-of-a-train-without-brake-van',
    title: 'Running of a Train Without Brake Van',
    icon: Package,
  },
  {
    href: '/topics/operating-material/running-of-a-train-without-guard',
    title: 'Running of a Train Without Guard',
    icon: PackageX,
  },
  {
    href: '/topics/operating-material/running-train',
    title: 'Running Train',
    icon: CirclePlay,
  },
  {
    href: '/topics/operating-material/shunt-signal',
    title: 'Shunt Signal',
    icon: MoveHorizontal,
  },
  {
    href: '/topics/operating-material/shadow-block',
    title: 'Shadow Block',
    icon: Eclipse,
  },
  {
    href: '/topics/operating-material/shunting',
    title: 'Shunting',
    icon: ArrowLeftRight,
  },
  {
    href: '/topics/operating-material/shunting-during-reception-of-trains',
    title: 'Shunting During Reception of Trains',
    icon: ArrowLeftRight,
  },
  {
    href: '/topics/operating-material/shunting-limit-board',
    title: 'Shunting Limit Board',
    icon: PanelTop,
  },
  {
    href: '/topics/operating-material/shunting-permitted-indicator',
    title: 'Shunting Permitted Indicator',
    icon: Signpost,
  },
  {
    href: '/topics/operating-material/siemens-panel',
    title: 'Siemens Panel',
    icon: PanelTop,
  },
  {
    href: '/topics/operating-material/signal-got-stuck-up-n-OFF-position-in-station-limits',
    title: 'Signal Got Stuck Up in OFF Position in Station Limits',
    icon: SignalMedium,
  },
  {
    href: '/topics/operating-material/signal-overlap',
    title: 'Signal Overlap',
    icon: BetweenHorizontalEnd,
  },
  {
    href: '/topics/operating-material/signals',
    title: 'Signals',
    icon: Signal,
  },
  {
    href: '/topics/operating-material/signals-to-warn-incoming-train-of-danger-ahead',
    title: 'Signals to Warn Incoming Train of Danger Ahead',
    icon: Siren,
  },
  {
    href: '/topics/operating-material/solid-state-interlocking',
    title: 'Solid State Interlocking',
    icon: CircuitBoard,
  },
  {
    href: '/topics/operating-material/stabling',
    title: 'Stabling',
    icon: SquareParking,
  },
  {
    href: '/topics/operating-material/starting-of-trains',
    title: 'Starting of Trains',
    icon: Play,
  },
  {
    href: '/topics/operating-material/station',
    title: 'Station',
    icon: Building2,
  },

  {
    href: '/topics/operating-material/station-detonator-register',
    title: 'Station Detonator Register',
    icon: Bomb,
  },
  {
    href: '/topics/operating-material/station-master',
    title: 'Station Master',
    icon: UserRoundCog,
  },
  {
    href: '/topics/operating-material/station-section',
    title: 'Station Section',
    icon: Split,
  },
  {
    href: '/topics/operating-material/station-working-rules',
    title: 'Station Working Rules',
    icon: BookMarked,
  },
  {
    href: '/topics/operating-material/starter-signal',
    title: 'Starter Signal',
    icon: Play,
  },
  {
    href: '/topics/operating-material/stop-and-examine-signal',
    title: 'Stop and Examine Signal',
    icon: Siren,
  },
  {
    href: '/topics/operating-material/stop-signals',
    title: 'Stop Signals',
    icon: OctagonX,
  },
  {
    href: '/topics/operating-material/subsidiary-signals',
    title: 'Subsidiary Signals',
    icon: Layers,
  },
  {
    href: '/topics/operating-material/system-of-working',
    title: 'System of Working',
    icon: Workflow,
  },
  {
    href: '/topics/operating-material/taking-off-signals-for-more-than-one-train-at-a-time',
    title: 'Taking Off Signals for More Than One Train at a Time',
    icon: Signal,
  },
  {
    href: '/topics/operating-material/temporary-single-line',
    title: 'Temporary Single Line',
    icon: GitMerge,
  },
  {
    href: '/topics/operating-material/testing-of-reception-signals',
    title: 'Testing of Reception Signals',
    icon: ClipboardCheck,
  },
  {
    href: '/topics/operating-material/track-tamping-machine',
    title: 'Track Tamping Machine',
    icon: Hammer,
  },
  {
    href: '/topics/operating-material/total-interruption-of-communication',
    title: 'Total Interruption of Communication',
    icon: PhoneOff,
  },
  {
    href: '/topics/operating-material/train',
    title: 'Train',
    icon: TrainFront,
  },
  {
    href: '/topics/operating-material/train-engine-disabled',
    title: 'Train Engine Disabled',
    icon: Unplug,
  },
  {
    href: '/topics/operating-material/train-held-up-at-home-signal',
    title: 'Train Held Up at Home Signal',
    icon: OctagonX,
  },
  {
    href: '/topics/operating-material/train-manager',
    title: 'Train Manager',
    icon: HardHat,
  },
  {
    href: '/topics/operating-material/train-parting',
    title: 'Train Parting',
    icon: Unlink,
  },
  {
    href: '/topics/operating-material/trains-unusually-delayed',
    title: 'Trains Unusually Delayed',
    icon: CalendarClock,
  },
  {
    href: '/topics/operating-material/vdu-panel',
    title: 'VDU Panel',
    icon: Eye,
  },
  {
    href: '/topics/operating-material/vehicle-guidance',
    title: 'Vehicle Guidance',
    icon: ClipboardList,
  },
  {
    href: '/topics/operating-material/visibility-test-object',
    title: 'Visibility Test Object',
    icon: Eye,
  },
  {
    href: '/topics/operating-material/warner-signal',
    title: 'Warner Signal',
    icon: TriangleAlert,
  },
  {
    href: '/topics/operating-material/when-train-runs-through-a-station',
    title: 'When Train Runs Through a Station',
    icon: TrainFront,
  },
  {
    href: '/topics/operating-material/when-train-starts-after-stopping-at-station',
    title: 'When Train Starts After Stopping at Station',
    icon: MoveRight,
  },
  {
    href: '/topics/operating-material/whistle-codes',
    title: 'Whistle Codes',
    icon: PhoneCall,
  },
  {
    href: '/topics/operating-material/without-tail-lamp',
    title: 'Without Tail Lamp',
    icon: LightbulbOff,
  },
  {
    href: '/topics/operating-material/working-of-siding',
    title: 'Working of Siding',
    icon: GitBranch,
  },
  {
    href: '/topics/operating-material/working-time-table',
    title: 'Working Time Table',
    icon: CalendarClock,
  },
]

const cardTones = [
  {
    shell: 'border-amber-400/35 hover:border-amber-300/70 hover:shadow-amber-950/50',
    wash: 'bg-linear-to-br from-amber-400/25 via-orange-500/5 to-transparent',
    bar: 'bg-linear-to-r from-amber-300 via-orange-400 to-amber-500',
    icon: 'border-amber-300/40 bg-amber-400/15 text-amber-200',
    cta: 'text-amber-200',
  },
  {
    shell: 'border-sky-400/35 hover:border-sky-300/70 hover:shadow-sky-950/50',
    wash: 'bg-linear-to-br from-sky-400/25 via-blue-500/5 to-transparent',
    bar: 'bg-linear-to-r from-sky-300 via-blue-400 to-indigo-500',
    icon: 'border-sky-300/40 bg-sky-400/15 text-sky-200',
    cta: 'text-sky-200',
  },
  {
    shell: 'border-emerald-400/35 hover:border-emerald-300/70 hover:shadow-emerald-950/50',
    wash: 'bg-linear-to-br from-emerald-400/25 via-teal-500/5 to-transparent',
    bar: 'bg-linear-to-r from-emerald-300 via-teal-400 to-emerald-500',
    icon: 'border-emerald-300/40 bg-emerald-400/15 text-emerald-200',
    cta: 'text-emerald-200',
  },
  {
    shell: 'border-violet-400/35 hover:border-violet-300/70 hover:shadow-violet-950/50',
    wash: 'bg-linear-to-br from-violet-400/25 via-fuchsia-500/5 to-transparent',
    bar: 'bg-linear-to-r from-violet-300 via-fuchsia-400 to-purple-500',
    icon: 'border-violet-300/40 bg-violet-400/15 text-violet-200',
    cta: 'text-violet-200',
  },
  {
    shell: 'border-rose-400/35 hover:border-rose-300/70 hover:shadow-rose-950/50',
    wash: 'bg-linear-to-br from-rose-400/25 via-pink-500/5 to-transparent',
    bar: 'bg-linear-to-r from-rose-300 via-pink-400 to-rose-500',
    icon: 'border-rose-300/40 bg-rose-400/15 text-rose-200',
    cta: 'text-rose-200',
  },
  {
    shell: 'border-cyan-400/35 hover:border-cyan-300/70 hover:shadow-cyan-950/50',
    wash: 'bg-linear-to-br from-cyan-400/25 via-teal-500/5 to-transparent',
    bar: 'bg-linear-to-r from-cyan-300 via-teal-400 to-sky-500',
    icon: 'border-cyan-300/40 bg-cyan-400/15 text-cyan-200',
    cta: 'text-cyan-200',
  },
]

const OperatingMaterialPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const query = searchTerm.trim().toLowerCase()
  const visibleTopics = useMemo(
    () =>
      topics
        .map((topic, index) => ({ topic, index }))
        .filter(({ topic }) => topic.title.toLowerCase().includes(query)),
    [query],
  )

  return (
    <>
    <section className="relative min-h-screen bg-[#0b1020] px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_42%_at_12%_-8%,rgba(56,189,248,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_100%_0%,rgba(167,139,250,0.16),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_50%_100%,rgba(251,191,36,0.1),transparent)]" />
      <div className="relative mx-auto max-w-5xl">
        <div className="rounded-xl border border-white/10 bg-linear-to-r from-indigo-950/80 via-slate-900/85 to-amber-950/70 px-8 py-6 text-center shadow-xl shadow-black/30 ring-1 ring-white/10 backdrop-blur-sm sm:px-12 sm:py-8">
          <h1 className="bg-linear-to-r from-sky-100 via-amber-100 to-violet-100 bg-clip-text text-xl font-extrabold tracking-tight text-transparent lg:text-4xl uppercase">
            Operating Material
          </h1>
        </div>

        <div className="sticky top-20 z-40 mt-8">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <svg className="h-5 w-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search topics, for example Starter Signal"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full rounded-full border border-white/25 bg-slate-900 py-3 pr-12 pl-12 text-sm text-white shadow-2xl shadow-violet-950/40 transition-all duration-300 placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-violet-300 focus:outline-none lg:text-base"
            />
            {searchTerm ? (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-300 focus:ring-2 focus:ring-violet-300 focus:outline-none"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            ) : null}
          </div>
        </div>

        <p className="mt-6 text-center text-slate-400">
          Showing <span className="font-semibold text-white">{visibleTopics.length}</span> of{' '}
          <span className="font-semibold text-white">{topics.length}</span> topics
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {visibleTopics.map(({ topic, index }) => {
            const Icon = topic.icon
            const tone = cardTones[index % cardTones.length]
            return (
              <Link
                key={topic.href}
                href={topic.href}
                className={`group relative overflow-hidden rounded-lg border bg-slate-950/75 p-6 shadow-xl shadow-black/25 ring-1 ring-white/5 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:bg-slate-900/85 ${tone.shell}`}
              >
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-1 ${tone.bar}`} />
                <div className={`pointer-events-none absolute inset-0 ${tone.wash}`} />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className={`rounded-full border p-3 shadow-lg shadow-black/20 ${tone.icon}`}>
                      <Icon className="lg:h-7 lg:w-7 h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <span className={`lg:text-xl text-base leading-none transition-transform duration-200 group-hover:translate-x-1 ${tone.cta}`}>
                      →
                    </span>
                  </div>

                  <div className="mt-6">
                    <h2 className="lg:text-2xl text-lg font-semibold tracking-tight text-white">{topic.title}</h2>
                  </div>

                  <div className={`mt-6 flex items-center gap-2 text-sm font-medium ${tone.cta}`}>
                    <span>Open topic</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden>
                      →
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {visibleTopics.length === 0 ? (
          <div className="py-8 text-center">
            <h2 className="mb-2 text-lg font-bold text-white lg:text-2xl">No topics found</h2>
            <p className="text-sm text-slate-400 lg:text-base">Try a topic name such as Starter Signal</p>
          </div>
        ) : null}
      </div>
    </section>
    <ScrollToTopButton />
    </>
  )
}

export default OperatingMaterialPage
