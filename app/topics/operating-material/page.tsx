import React from 'react'
import Link from 'next/link'
import { AlertTriangle, ArrowLeftRight, BadgeCheck, BetweenHorizontalEnd, BetweenHorizontalStart, Bike, Bomb, BookMarked, BrickWall, Building2, CalendarClock, CarFront, ChevronsRight, CircuitBoard, CircleCheck, CircleDashed, CircleDot, CirclePlay, ClipboardCheck, ClipboardList, Combine, Container, Copy, CornerDownRight, Eclipse, Eye, FileBadge, FileCheck, FileWarning, Flame, Forward, GitBranch, GitFork, GitMerge, Hammer, Hand, Handshake, HardHat, House, KeyRound, Layers, LifeBuoy, LightbulbOff, LogIn, LogOut, Milestone, MoreHorizontal, MoveHorizontal, MoveRight, OctagonX, Package, PackageX, PanelTop, PhoneCall, PhoneOff, Play, Repeat, Route, Ruler, ShieldAlert, ShieldCheck, Signal, SignalHigh, SignalLow, SignalMedium, Signpost, Siren, Spline, Split, SquareParking, Ticket, TrainFront, TriangleAlert, Truck, Unlink, Unplug, UserRoundCog, Waves, Waypoints, Weight, Workflow, Wrench, Zap, ZapOff } from 'lucide-react'

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
    href: '/topics/operating-material/authorised-officer',
    title: 'Authorised Officer',
    icon: BadgeCheck,
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
    href: '/topics/operating-material/block-forward',
    title: 'Block Forward',
    icon: Forward,
  },
  {
    href: '/topics/operating-material/block-instruments',
    title: 'Block Instruments',
    icon: CircuitBoard,
  },
  {
    href: '/topics/operating-material/block-overlap',
    title: 'Block Overlap',
    icon: BetweenHorizontalStart,
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
    href: '/topics/operating-material/coacting-signal',
    title: 'Co-acting Signal',
    icon: Copy,
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
    href: '/topics/operating-material/plct-working',
    title: 'PLCT Working',
    icon: FileWarning,
  },
  {
    href: '/topics/operating-material/point-trap-indicator',
    title: 'Point Trap Indicator',
    icon: Signpost,
  },
  {
    href: '/topics/operating-material/points',
    title: 'Points Affecting the Movement',
    icon: Waypoints,
  },
  {
    href: '/topics/operating-material/power-block',
    title: 'Power Block',
    icon: Zap,
  },
  {
    href: '/topics/operating-material/private-numbers',
    title: 'Private Numbers',
    icon: KeyRound,
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
    href: '/topics/operating-material/shunting-limit-board',
    title: 'Shunting Limit Board',
    icon: PanelTop,
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
    href: '/topics/operating-material/stabling',
    title: 'Stabling',
    icon: SquareParking,
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
    href: '/topics/operating-material/station-diary',
    title: 'Station Diary',
    icon: ClipboardList,
  },
  {
    href: '/topics/operating-material/station-master',
    title: 'Station Master',
    icon: UserRoundCog,
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
    href: '/topics/operating-material/temporary-single-line',
    title: 'Temporary Single Line',
    icon: GitMerge,
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
    href: '/topics/operating-material/train-signal-register',
    title: 'Train Signal Register',
    icon: BookMarked,
  },
  {
    href: '/topics/operating-material/trains-unusually-delayed',
    title: 'Trains Unusually Delayed',
    icon: CalendarClock,
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

const OperatingMaterialPage = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-amber-950/70 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-15%,rgba(251,191,36,0.14),transparent)]" />
      <div className="relative mx-auto max-w-5xl">
        <div className="rounded-2xl border border-amber-500/30 bg-slate-900/70 px-8 py-6 text-center shadow-xl shadow-black/20 ring-1 ring-amber-500/15 backdrop-blur-sm sm:px-12 sm:py-8">
          <h1 className="bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            Operating Material
          </h1>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {topics.map((topic) => {
            const Icon = topic.icon
            return (
              <Link
                key={topic.href}
                href={topic.href}
                className="group relative overflow-hidden rounded-3xl border border-amber-500/25 bg-slate-900/65 p-6 shadow-xl shadow-black/20 ring-1 ring-amber-500/10 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-amber-400/45 hover:bg-slate-900/80"
              >
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-500/20 via-orange-500/10 to-transparent" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-lg shadow-black/10">
                      <Icon className="h-7 w-7 text-amber-200" strokeWidth={2.2} />
                    </div>
                    <span className="text-xl leading-none text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-amber-100">
                      →
                    </span>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-2xl font-bold tracking-tight text-white">{topic.title}</h2>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-amber-100/90">
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
      </div>
    </section>
  )
}

export default OperatingMaterialPage
