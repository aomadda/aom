'use client'
import React from 'react'
import {
  Award,
  ClipboardList,
  Eye,
  Flag,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'

const aparParts = [
  { part: '01', title: 'Personal data', detail: 'Contains the personal data of the employee.' },
  { part: '02', title: 'Self appraisal', detail: 'Filled by the employee reported upon.' },
  { part: '03', title: 'Reporting officer', detail: 'Comments of the reporting authority.' },
  { part: '04', title: 'Reviewing authority', detail: 'Remarks of the reviewing authority.' },
  { part: '05', title: 'Accepting authority', detail: 'Overall grade / benchmark recorded here.' },
]

const roles = [
  { label: 'Employee', hint: 'Reported upon', icon: Users },
  { label: 'Reporting', hint: 'First appraisal', icon: ClipboardList },
  { label: 'Reviewing', hint: 'Second look', icon: Eye },
  { label: 'Accepting', hint: 'Final grade', icon: ShieldCheck },
]

const AnnualPerformanceAppraisalReport = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b1412] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_15%_-10%,rgba(45,212,191,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_90%_10%,rgba(16,185,129,0.12),transparent)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Hero */}
        <header className="mb-14 max-w-3xl animate-[fade-up_0.6s_ease-out]">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-teal-300/90">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
            Establishment
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            APAR
          </h1>
          <p className="mt-3 text-lg font-medium text-teal-100/90 sm:text-xl">
            Annual Performance Appraisal Report
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            The basic and vital record for assessing an employee&apos;s performance and guiding further
            career advancement.
          </p>
        </header>

        {/* Key benchmark callout */}
        <section
          className="mb-12 animate-[fade-up_0.7s_ease-out] overflow-hidden rounded-3xl border border-teal-400/25 bg-linear-to-br from-teal-950/80 via-emerald-950/50 to-[#0b1412] p-6 sm:p-8"
          style={{ animationDelay: '0.05s', animationFillMode: 'both' }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-teal-200">
                <Award className="h-4 w-4" />
                MACP benchmark
              </div>
              <p className="text-base leading-relaxed text-slate-200 sm:text-lg">
                The prescribed benchmark for grant of MACP is{' '}
                <span className="font-bold tracking-wide text-teal-300">VERY GOOD</span> for all
                levels w.e.f. <span className="font-semibold text-white">25.7.2016</span>. The revised
                benchmark applies to APARs for <span className="font-semibold text-white">2016–17</span>{' '}
                and subsequent years.
              </p>
            </div>
            <div className="shrink-0 self-start rounded-2xl border border-teal-400/30 bg-teal-500/10 px-6 py-5 text-center lg:self-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-300/80">
                Required grade
              </p>
              <p className="mt-1 font-serif text-3xl font-bold text-white sm:text-4xl">Very Good</p>
            </div>
          </div>
        </section>

        {/* Role chain */}
        <section
          className="mb-12 animate-[fade-up_0.75s_ease-out]"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">Who fills APAR</h2>
              <p className="mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
                Every stage must be completed with responsibility and within the prescribed time
                schedule for the year ending.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((role, index) => {
              const Icon = role.icon
              return (
                <div
                  key={role.label}
                  className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition duration-300 hover:border-teal-400/35 hover:bg-teal-500/[0.06]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xs text-teal-400/70">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Icon className="h-5 w-5 text-teal-300/80 transition group-hover:scale-110" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{role.label}</h3>
                  <p className="mt-1 text-sm text-slate-400">{role.hint}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Objective */}
        <section
          className="mb-12 grid gap-6 animate-[fade-up_0.8s_ease-out] lg:grid-cols-[1fr_1.2fr]"
          style={{ animationDelay: '0.15s', animationFillMode: 'both' }}
        >
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-950/30 p-6 sm:p-8">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
              <Target className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h2 className="font-serif text-2xl font-bold text-white">Objective</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              APAR should be used as a tool for human resource development. The reporting officer
              should help the employee realise true potential — not treat APAR as a fault-finding
              exercise.
            </p>
          </div>
          <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-6 sm:p-8">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300">
              <Flag className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h2 className="font-serif text-2xl font-bold text-white">Honest assessment</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Reporting and reviewing officers should not shy away from recording shortcomings in
              performance, attitudes, and overall personality of the employee reported upon.
            </p>
          </div>
        </section>

        {/* Structure stepper */}
        <section
          className="mb-12 animate-[fade-up_0.85s_ease-out]"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">Structure of APAR</h2>
          <p className="mt-2 mb-8 max-w-2xl text-sm text-slate-400 sm:text-base">
            Five parts take the report from personal data to the final accepting-authority grade.
          </p>

          <ol className="relative space-y-0">
            {aparParts.map((item, index) => (
              <li key={item.part} className="relative flex gap-5 pb-8 last:pb-0 sm:gap-8">
                {index < aparParts.length - 1 ? (
                  <span
                    className="absolute left-[1.15rem] top-10 bottom-0 w-px bg-linear-to-b from-teal-400/50 to-teal-400/5 sm:left-[1.4rem]"
                    aria-hidden
                  />
                ) : null}
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-teal-400/40 bg-[#0b1412] font-mono text-xs font-bold text-teal-300 sm:h-11 sm:w-11 sm:text-sm">
                  {item.part}
                </div>
                <div className="min-w-0 flex-1 pt-0.5 sm:pt-1.5">
                  <h3 className="text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400 sm:text-base">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Grading */}
        <section
          className="animate-[fade-up_0.9s_ease-out] rounded-3xl border border-white/10 bg-linear-to-br from-white/[0.05] to-transparent p-6 sm:p-8"
          style={{ animationDelay: '0.25s', animationFillMode: 'both' }}
        >
          <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
            Grading & transparency
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            The numerical grade is awarded based on integrity, work output, personal attributes, and
            functional competency. There should be openness in appraisal, and the grade should be
            communicated to the employee. Any representation for upgrading the benchmark shall be
            considered by the authorities, and the APAR may be modified if required.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {['Integrity', 'Work output', 'Personal attributes', 'Functional competency'].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-xl border border-teal-400/15 bg-teal-500/[0.07] px-4 py-3 text-center text-sm font-medium text-teal-100"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default AnnualPerformanceAppraisalReport
