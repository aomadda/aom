'use client'
import React from 'react'

type CardType = 'numbered' | 'specialRule' | 'supplementary' | 'default'

interface ParsedEntry {
  id: string
  number: string | null
  description: string
  raw: string
  type: CardType
  label: string | null
}

const GSRChapterPage1B = () => {
  const content = [
    '1.02. Definitions.–– In these rules, unless the context otherwise requires,–',
    '(1) “Act” means the Railways Act, 1989 (24 of 1989);',
    '(2) “adequate distance” means the distance sufficient to ensure safety;',
    '(3) “approach lighting” means an arrangement in which the lighting of\nsignals is controlled automatically by the approach of a train;',
    '(4) “approved special instructions” means special instructions approved\nof or prescribed by the Commissioner of Railway Safety;',
    '(5) “authorised officer” means the person who is duly empowered by\ngeneral or special order of the Railway Administration, either by name\nor by virtue of his office, to issue instructions or to do any other\nthing;',
    `SR 1.02.5. The Principal Chief Operations Manager is the authorised officer and isempowered
to issue, amend or alter Subsidiary Rules.`,
    '(6) “authority to proceed” means the authority given to the Loco Pilot ofa\ntrain, under the system of working, to enter the block section with his\ntrain;',
    '(7) “axle counter” means an electrical device which, when provided at\ntwo given points on the track, proves by counting axles in and\ncounting axles out, whether the section of the track between the said\ntwo points is clear or occupied;',
    '(8) “block back” means to despatch a message from a block station\nintimating to the block station immediately in rear on a double line or\nto the next block station on either side on a single line, that the block\nsection is obstructed or is to be obstructed;',
    '(9) “block forward” means to despatch a message from a block station\non a double line intimating to the block station immediately in\nadvance the fact that the block section in advance is obstructed or is\nto be obstructed;',
    '(10) “block section” means that portion of the running line between two\nblock stations on to which no running train may enter until Line\nClear has been received from the block station at the other end of\nthe block section;',
    '(11) “Centralised Traffic Control” means a system by which the working\nof trains over a route, to which the system applies, is governed by\nfixed signals remotely controlled from a designated place;',
    '(12) “Centralised Traffic Control Operator” means the person on duty who\nmay for the time being be responsible for the working of trains on\nthe Centralised Traffic Control;',
    '(13) “Commissioner of Railway Safety” means a Commissioner of\nRailway Safety appointed to exercise any functions under the Act\nand includes the Chief Commissioner of Railway Safety;',
    '(14) “competent railway servant” means a railway servant duly qualified\nto undertake and perform the duties entrusted to him;',
    '(15) “connections” when used with reference to a running line, means\nthe points and crossings or other appliances used to connect such\nline with other lines or to cross it;',
    '(16) “Controller” means a railway servant on duty who may for the time\nbeing be responsible for regulating the working of traffic on a\nsection of a railway provided with the system of speech\ncommunication;',
    '(17) “day” means from sunrise to sunset;',
    '(18) “direction of traffic” means –\na. on a double line, the direction for which the line is signalled;\nb. on a single line, the direction for the time being established,\nunder the system of working, to allow trains to move in that\ndirection;',
    '(19) “electrical communication instrument” means a telephone;',
    '(20) “facing and trailing points”: points are facing or trailing in\naccordance with the direction a train or vehicle moves over them.\nPoints are said to be facing points when by their operation a train\napproaching them can be directly diverted from the line upon which\nit is running;',
    '(21) “fixed signal” means a signal of fixed location indicating a condition\naffecting the movement of a train and includes a semaphore arm or\ndisc or fixed light for use by day and fixed light for use by night;',
    '(22) “fouling mark” means the mark at which the infringement of fixed\nstandard dimensions occurs, where two lines cross or join one\nanother;',
    '(23) “Gangman” means a railway servant employed on permanent way or\nworks connected therewith;',
    '(24) “Gangmate” means the person in charge of a gang of workmen\nemployed on permanent way or works connected therewith;',
    '(25) “Gateman” means a competent railway servant posted at a level\ncrossing for working the gates;',
    '(26) “goods train” means a train (other than a material train) intended solely\nor mainly for the carriage of animals or goods;',
    '(27) “Guard” means the railway servant in charge of a train and includes a\nBrakesman or any other railway servant who may for the time being be\nperforming the duties of a Guard;',
    '(28) “Inspector of Way or Works” means any Inspector or Assistant\nInspector responsible for the construction or maintenance of\npermanent way, points and signals, bridges or other works connected\ntherewith;',
    '‘28(A). Indian Railway Automatic Train Protection System (IR-ATP) (Kavach),\nmeans a radio communication based control system, provided as an\nadditional aid to Loco Pilots of functional Kavach fitted locomotives, in\nKavach territory, the use of which shall in no way infringe or override\nthe provisions (codes and manuals) of regular train operation required\nto be followed by Loco Pilot’. (Item No.2 of AS-20 Dt : 21.02.2025)',
    '(29) “interlocking” means an arrangement of signals, points and other\nappliances, operated from a panel or lever frame, so interconnected by\nmechanical locking or electrical locking or both that their operation\nmust take place in proper sequence to ensure safety;',
    '(30) “Intermediate Block Post” means a class ‘C’ station on a single line or\ndouble line or multiple line remotely controlled from the block station in\nrear;',
    '(31) “Intermediate Block Signalling” means an arrangement of signalling on\nsingle line or double line or multiple line in which a long block section\nis split into two portions each constituting a separate block section by\nproviding an Intermediate Block Post;',
    '(32) “isolation” means an arrangement, secured by the setting of points or\nother approved means, to protect the line so isolated from the danger\nof obstruction from other connected line or lines;',
    '(33) “last Stop signal” means the fixed Stop signal of a station controlling\nthe entry of trains into the next block section;',
    '(34) “level crossing” means the intersection of road with railway track at the\nsame level;',
    '(35) “level crossing gate” means any form of movable barrier, including a\nchain, capable of being closed across the road at the level crossing,but\ndoes not include a wicket or a turnstile for the use of pedestrians;',
    '(36) “Line Clear” means the permission given from a block station to a block\nstation in rear for a train to leave the latter and approach the former; or\nthe permission obtained by a block station from a block station in\nadvance for a train to leave the former and proceed towards the latter;',
    '(37) “Loco Pilot” means the Loco Pilot or any other competent railway\nservant for the time being in charge of driving a train;',
    '(38) “main line” means the line ordinarily used for running trains throughand\nbetween stations;',
    '(39) “material train” means a departmental train intended solely or mainlyfor\ncarriage of railway material when picked up or put down or for execution\nof works, either between stations or within station limits;',
    '(40) “mixed train” means a train intended for the carriage of passengers and\ngoods, or of passengers, animals and goods;',
    '(41) “multiple-aspect signalling” means a signalling arrangement in which\nsignals display at any one time any one of the three or more aspects and\nin which the aspect of every signal is pre-warned by the aspect of the\nprevious signal or signals;',
    '(42) “night” means from sunset to sunrise;',
    '(43) “obstruction” and its cognate expressions includes a train, vehicle or\nobstacle on or fouling a line, or any condition which is dangerous to\ntrains;',
    '(44) “overhead equipment” means the electrical conductors over the tracks\ntogether with their associated fittings, insulators and other attachments\nby means of which they are suspended and registered in position for the\npurpose of electric traction;',
    '(45) “passenger train” means a train intended solely or mainly for the\ncarriage of passengers and other coaching traffic, and includes a troop\ntrain;',
    '(46) “point and trap indicators” are not signals, but are appliances fitted to\nand working with points to indicate by day or by night the position in\nwhich the points are set;',
    '(47) “running line” means the line governed by one or more signals and\nincludes connections, if any, used by a train when entering or leaving a\nstation or when passing through a station or between stations;',
    '(48) “running train” means a train which has started under an authority to\nproceed and has not completed its journey;',
    '(49) “shunting” means the movement of a vehicle or vehicles with or\nwithout an engine or of any engine or any other self-propelled\nvehicle, for the purpose of attaching, detaching or transfer or for\nany other purpose;',
    '(50) “special instructions” means instructions issued from time to time\nby the authorised officer in respect to particular cases or special\ncircumstances;',
    '(51) “station” means any place on a line of railway at which traffic is dealt\nwith, or at which an authority to proceed is given under the system\nof working;',
    '(52) “station limits” means the portion of a railway which is under the\ncontrol of a Station Master and is situated between the outermost\nsignals of the station or as may be specified by special instructions;',
    'S.R.1.02.52 The station limits at a class ‘D’ station is that portion of the railway\nwhich lies within the ends of the platform',
    '(53) “Station Master” means the person on duty who is for the time being\nresponsible for the working of the traffic within station limits, and\nincludes any person who is for the time being in independent\ncharge of the working of any signals and responsible for the\nworking of trains under the system of working in force;',
    '(54) “station section” means that section of station limits –\n(1) at a class ‘B’ station provided with two-aspect signals, which is\nincluded –\n(a) On a double line, between the Home signal and the last\nStopsignal of the station in either direction; or\n(b) On a single line –\n(i) between the Shunting Limit Boards or Advanced Starters\n(if any), or\n(ii) between the Home signals if there are no Shunting Limit\nBoards or Advanced Starters, or\n(iii) between the outermost facing points, if there are no Home\nsignals or Shunting Limit Boards or Advanced Starters;\n(2) at a class ‘B’ station provided with manually operated multipleaspect\nor modified lower quadrant signals, which is included –\n(a) on a double line –\n(i) between the outermost facing points and the last Stop\nsignal of the station in either direction, or\n(ii) between the Block Section Limit Board,where provided, and\nthe Last Stop signal of the station in either direction or\n(b) on a single line –\n(i) between the Shunting Limit Boards or Advanced Starters\n(if any), or\n(ii) between the outermost facing points,if there are no\nShunting Limit Boards or Advanced Starters;',
    '(55) “Subsidiary Rule” means a special instruction which is subservient\nto the General Rule to which it relates and shall not be at variance\nwith any General Rule;',
    '(56) “system of working” means the system adopted for the time being\nfor the working of trains on any portion of a railway;',
    '(57) “track circuit” means an electrical circuit provided to detect the\npresence of a vehicle on a portion of track, the rails of the track\nforming part of the circuit;',
    '(58) “train” means an engine with or without vehicles attached, or any\nself-propelled vehicle with or without a trailer, which cannot be\nreadily lifted off the track;',
    '(59) “Train Examiner” means a railway servant duly qualified to examine\ntrains and certify their fitness for safe running and includes any\nother railway servant who may for the time being be performing the\nduties of a Train Examiner;',
    '(60) “two-aspect signalling” means a signalling arrangement in which\neach signal displays at any one time either of the two aspects.',
  ]

  const [headline, ...entries] = content

  const highlightWords = React.useMemo(
    () =>
      new Set([
        'means',
        'includes',
        'shall',
        'may',
        'authority',
        'system',
        'signal',
        'train',
        'station',
        'section',
        'block',
      ]),
    []
  )

  const parsedEntries: ParsedEntry[] = React.useMemo(() => {
    return entries.map((text, index) => {
      const trimmed = text.trim()
      const sanitized = trimmed.replace(/^[`'‘’"]+/, '')

      const parenMatch = sanitized.match(/^\(([\dA-Za-z]+)\)\s*/)
      const altMatch = sanitized.match(/^(\d+\([A-Za-z]\))\.\s*/)

      let number: string | null = null
      let description = text
      let type: CardType = 'default'
      let label: ParsedEntry['label'] = null

      if (parenMatch) {
        const originalMatch = text.match(/^\(([\dA-Za-z]+)\)\s*/)
        number = parenMatch[1]
        if (originalMatch) {
          description = text.slice(originalMatch[0].length)
        }
        type = 'numbered'
        label = 'Definition'
      } else if (altMatch) {
        number = altMatch[1]
        const periodIndex = text.indexOf('.')
        description = periodIndex >= 0 ? text.slice(periodIndex + 1) : text
        type = 'supplementary'
        label = 'Supplementary'
      }

      const isSpecialRule =
        /^S\.?R\./i.test(sanitized) || /^SR\s+/i.test(sanitized) || /^S\.R\./i.test(sanitized)

      if (isSpecialRule) {
        type = 'specialRule'
        label = 'Subsidiary Rule'
        number = null
        description = text
      }

      return {
        id: `${index}-${sanitized.slice(0, 12).replace(/\s+/g, '-')}`,
        number,
        description: description.trimStart(),
        raw: text,
        type,
        label,
      }
    })
  }, [entries])

  const stats = React.useMemo(
    () => [
      {
        label: 'Total Entries',
        value: parsedEntries.length,
      },
      {
        label: 'Numbered Definitions',
        value: parsedEntries.filter((entry) => entry.type === 'numbered').length,
      },
      {
        label: 'Subsidiary Rules',
        value: parsedEntries.filter((entry) => entry.type === 'specialRule').length,
      },
    ],
    [parsedEntries]
  )

  const accentStyles: Record<
    CardType,
    { overlay: string; border: string; badge: string; chip: string; numberBackground: string }
  > = {
    numbered: {
      overlay: 'from-cyan-500/15 via-blue-500/10 to-indigo-600/10',
      border: 'border-cyan-400/20 hover:border-cyan-300/50',
      badge: 'border-cyan-400/40 text-cyan-100',
      chip: 'text-cyan-200/80',
      numberBackground: 'border-cyan-400/40 bg-cyan-500/15 text-cyan-100',
    },
    specialRule: {
      overlay: 'from-emerald-500/15 via-teal-500/10 to-sky-500/10',
      border: 'border-emerald-400/20 hover:border-emerald-300/50',
      badge: 'border-emerald-400/40 text-emerald-100',
      chip: 'text-emerald-200/80',
      numberBackground: 'border-emerald-400/40 bg-emerald-500/15 text-emerald-100',
    },
    supplementary: {
      overlay: 'from-amber-500/15 via-orange-500/10 to-rose-600/10',
      border: 'border-amber-400/20 hover:border-amber-300/50',
      badge: 'border-amber-400/40 text-amber-100',
      chip: 'text-amber-200/80',
      numberBackground: 'border-amber-400/40 bg-amber-500/15 text-amber-100',
    },
    default: {
      overlay: 'from-blue-500/10 via-indigo-500/10 to-purple-600/10',
      border: 'border-white/10 hover:border-white/30',
      badge: 'border-white/20 text-blue-100',
      chip: 'text-blue-100/70',
      numberBackground: 'border-white/20 bg-slate-800/60 text-blue-100',
    },
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-purple-500/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-md h-112 bg-linear-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-6 px-2 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-6">
            <div className="inline-flex items-center justify-center">
              <div className="relative">
                <div className="lg:w-24 lg:h-24 w-16 h-16 bg-linear-to-br from-blue-500/70 via-indigo-500/70 to-purple-500/70 rounded-full blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full border border-white/10 bg-linear-to-br from-blue-700/60 to-indigo-800/60 backdrop-blur">
                    <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
                      <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl lg:text-6xl font-bold tracking-wide bg-linear-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                CHAPTER - I
              </h1>
              <div className="inline-flex items-center justify-center gap-3">
                <span className="h-px w-16 bg-linear-to-r from-transparent via-blue-400/50 to-white/70"></span>
                <span className="text-lg lg:text-2xl font-semibold text-indigo-200 tracking-[0.35em]">
                  PRELIMINARY
                </span>
                <span className="h-px w-16 bg-linear-to-l from-transparent via-blue-400/50 to-white/70"></span>
              </div>
            </div>

            <h1 className="text-xl lg:text-4xl font-bold tracking-wide bg-linear-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent whitespace-pre-line">
              {headline}
            </h1>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 mb-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-left shadow-lg shadow-blue-900/30 backdrop-blur-xl transition-all duration-500 hover:border-cyan-300/30 hover:bg-white/10"
              >
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-indigo-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                <div className="relative space-y-2">
                  <span className="text-[0.7rem] uppercase tracking-[0.35em] text-blue-100/60">{stat.label}</span>
                  <p className="text-2xl lg:text-3xl font-semibold text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-linear-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-linear-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-3 lg:p-10 space-y-6">
                <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-3 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 shadow-xl shadow-indigo-900/40 flex items-center justify-center">
                        <span className="lg:text-2xl text-lg font-bold text-white/90">1.02</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-14 lg:pt-10 space-y-6 text-blue-100/90 leading-relaxed tracking-wide">
                    <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
                      {parsedEntries.map((entry) => {
                        const accent = accentStyles[entry.type] ?? accentStyles.default

                        return (
                          <div
                            key={entry.id}
                            className={`group relative overflow-hidden rounded-2xl border ${accent.border} bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:-translate-y-1`}
                          >
                            <div
                              className={`pointer-events-none absolute inset-0 bg-linear-to-br ${accent.overlay} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                            ></div>

                            <div className="relative flex h-full flex-col gap-5 rounded-2xl bg-slate-900/60 px-4 py-5 lg:px-7 lg:py-8">
                              <div className="flex items-start justify-between gap-3">
                                <span
                                  className={`flex min-h-10 min-w-10 items-center justify-center rounded-full border px-3 py-2 text-sm font-semibold tracking-wide lg:min-h-12 lg:min-w-12 lg:px-4 lg:text-base ${entry.number ? accent.numberBackground : accent.numberBackground}`}
                                >
                                  {entry.number ? entry.number : '•'}
                                </span>

                                {entry.label ? (
                                  <span className={`text-[0.65rem] uppercase tracking-[0.4em] ${accent.chip}`}>{entry.label}</span>
                                ) : null}
                              </div>

                              <div className="space-y-3 text-base lg:text-lg text-blue-100/90 leading-relaxed">
                                {(entry.description.length ? entry.description : entry.raw)
                                  .split('\n')
                                  .map((line, lineIndex) => {
                                    if (!line.trim()) {
                                      return <span key={`${entry.id}-line-${lineIndex}`} className="block h-2"></span>
                                    }

                                    const segments = line.split(/(means|includes|shall|may|authority|system|signal|train|station|section|block)/gi)

                                    return (
                                      <span key={`${entry.id}-line-${lineIndex}`} className="block">
                                        {segments.map((segment, segmentIndex) => {
                                          const cleaned = segment.replace(/[^\w]/g, '').toLowerCase()
                                          const shouldHighlight = cleaned.length > 0 && highlightWords.has(cleaned)

                                          return shouldHighlight ? (
                                            <span
                                              key={`${entry.id}-line-${lineIndex}-segment-${segmentIndex}`}
                                              className="font-semibold text-sky-200"
                                            >
                                              {segment}
                                            </span>
                                          ) : (
                                            <React.Fragment key={`${entry.id}-line-${lineIndex}-segment-${segmentIndex}`}>
                                              {segment}
                                            </React.Fragment>
                                          )
                                        })}
                                      </span>
                                    )
                                  })}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default GSRChapterPage1B