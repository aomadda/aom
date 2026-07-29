'use client'
import React from 'react'
import { 
  Scale
} from 'lucide-react'

const IRACT1989Section180 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              INDIAN RAILWAYS ACT 1989
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">CHAPTER XV</h2>
            <h3 className="lg:text-3xl text-xl font-bold text-cyan-200 mb-4">Penalties and Offences</h3>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 180 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-blue-400/50 shrink-0">
                    180
                  </span>
                  <span className="text-center">Arrest of persons likely to abscond, etc.</span>
                </div>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="space-y-4">
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          1
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          I any person who commits any offence under this Act, other than an offence mentioned in Sec. 179, or is liable to pay any excess charge or other sum demanded under Sec. 138, fails or refuses to give his name and address or there is reason to believe that the name and address given by him and fictitious or that he will (officer authorised) any railway servant authorized in this behalf or any police officer not below the rank of a head constable may arrest him without warrant or written authority.
                        </span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          2
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          The officer authorised may call to his aid any other person to effect the arrest under sub-section (1).
                        </span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          3
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          Any person arrested under this section shall be produced before the nearest Magistrate within a period of 24 twenty-four hours of such arrest excluding the time necessary for the journey from the place of arrest to the court of the Magistrate unless he is released earlier or giving bail or if his true name and address are ascertained before on executing a bond without sureties for his appearance before the Magistrate having jurisdiction to try him for the offence.
                        </span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          4
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          The provisions of chapter. XXIII of the Code of Criminal Procedure, 1973 (2 of 1974), shall so far as may be, apply to the giving of bail and the execution of bonds under this section.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Comments Section */}
                  <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                    <div className="flex items-center justify-center flex-col gap-3 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-indigo-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-1">
                        C
                      </span>
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comments</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Any police officer not below the rank of head constable, or any railway servant authorised in this behalf is empowered to arrest any person accused of any offence under this act, except in case of an offence under section 179 or a liability under section 138, without warrant.
                      </p>
                    </div>
                  </div>

                  {/* Section 180(A) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-center justify-center flex-col gap-3 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5">
                        A
                      </span>
                      <h4 className="text-cyan-300 font-bold lg:text-lg text-base text-center">
                        Inquiry by officer authorised to ascertain commission of offence:
                      </h4>
                    </div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      For ascertaining facts and circumstances of a case, the officer authorized may make an inquiry into the commission of an offence mentioned in sub-section (2) of Sec.179 and may file a complaint in the competent court if the offence is found to have been committed.
                    </p>
                  </div>

                  {/* Section 180(B) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-center justify-center flex-col gap-3 mb-4">
                      <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5">
                        B
                      </span>
                      <h4 className="text-cyan-300 font-bold lg:text-lg text-base text-center">
                        Powers of officer authorised to inquire:
                      </h4>
                    </div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4 text-center">
                      While making an inquiry, the Officer authorized shall have power to -
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          i
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                          Summon and enforce the attendance of any person and record his statement.
                        </span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          ii
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                          Require the discovery and production of any document.
                        </span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          iii
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                          Requisition any public record or copy thereof from any office , authorized or person.
                        </span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          iv
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                          Enter and search any premises or person and seize any property or document which may be relevant to the subject matter of the inquiry.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Section 180(C) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-center justify-center flex-col gap-3 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5">
                        C
                      </span>
                      <h4 className="text-cyan-300 font-bold lg:text-lg text-base text-center">
                        Disposal of persons arrested:
                      </h4>
                    </div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Every person arrested for an offence punishable under Sub-Section (2) of section 179 shall, if the arrest was made by a person other than the officer authorized, be forwarded , without delay, to such officer.
                    </p>
                  </div>

                  {/* Section 180(D) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-center justify-center flex-col gap-3 mb-4">
                      <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5">
                        D
                      </span>
                      <h4 className="text-cyan-300 font-bold lg:text-lg text-base text-center">
                        Inquiry how to be made against arrested person:
                      </h4>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          i
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                          when any person is arrested by the Officer authorized for an offence punishable under this act, such Officer shall proceed to inquire into the charge against such person.
                        </span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          ii
                        </span>
                        <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                          For this purpose, the Officer authorized may exercise the same power and shall be subject to the same provisions as the officer in charge of a Police station may exercise and is subject to the provisions of the code of Criminal Procedure, 1973, when investigating a cognizable case :
                        </span>
                      </div>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed text-center mb-2">
                        Provided that;
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            a
                          </span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                            If the Officer authorized is of the opinion that there is sufficient evidence or reasonable ground of suspicion against the accused person, he shall either admit him to bail to appear before a magistrate having jurisdiction in the case, or forward him in custody to such magistrate
                          </span>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            b
                          </span>
                          <span className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                            If it appears to the Officer authorized that there is not sufficient evidence or reasonable ground of suspicion against the accused person he shall released the accused person on his executing a bond , with or without sureties as the Officer authorized may direct, to appear, if and when so required, before the Magistrate having jurisdiction/
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 180(E) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-center justify-center flex-col gap-3 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5">
                        E
                      </span>
                      <h4 className="text-cyan-300 font-bold lg:text-lg text-base text-center">
                        Search, seizure and arrest how to be made:
                      </h4>
                    </div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      All searches, seizures and arrest made under this act shall be carried out in accordance with the provisions of the Code of Criminal Procedure, 1973, relating respectively to searches and arrests made under that code.
                    </p>
                  </div>

                  {/* Section 180(F) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-center justify-center flex-col gap-3 mb-4">
                      <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5">
                        F
                      </span>
                      <h4 className="text-cyan-300 font-bold lg:text-lg text-base text-center">
                        Cognizance by court on a complaint made by officer authorised:
                      </h4>
                    </div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      No Court shall take cognizance of an offence mentioned in sub-section (2) of Section 179 except on a complaint made by the officer authorized.
                    </p>
                  </div>

                  {/* Section 180(G) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-center justify-center flex-col gap-3 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5">
                        G
                      </span>
                      <h4 className="text-cyan-300 font-bold lg:text-lg text-base text-center">
                        Punishment for certain offences in relation to inquiry:
                      </h4>
                    </div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Whoever intentionally insults or causes any interruption in the inquiry proceedings or deliberately makes a false statement before the enquiring Officer shall be punished with simple imprisonment for a term which may extent to Six months, or with fine which may extent to one thousand rupees, or with both.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}

export default IRACT1989Section180