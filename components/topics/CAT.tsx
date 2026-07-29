import React from 'react'

const CentralAdministrativeTribunal = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-rose-900/20 py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Title Section */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-rose-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-rose-600 via-rose-600 to-pink-600 text-white px-6 py-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent)]" />
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight relative z-10 text-center">CENTRAL ADMINISTRATIVE TRIBUNAL</h1>
          </div>

          {/* Introduction & Jurisdiction */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="rounded-xl border-l-4 border-rose-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-rose-400/70">
              <h3 className="text-rose-400 font-semibold text-sm mb-2">Introduction:</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                Article 323 A (1) of the Constitution, added in 1976, empowers Parliament to establish Tribunals for disputes related to recruitment and service conditions of public service personnel. The Administrative Tribunal Act 1985 was enacted, outlining the Tribunal&apos;s composition, qualifications, and appointment of officers. The Administrative Tribunal acts as an alternative, not supplementary, to the High Court.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-rose-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-rose-400/70">
              <h3 className="text-rose-400 font-semibold text-sm mb-2">Jurisdiction & Functioning:</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-3">
                After its constitution, the Tribunal assumed the role of the final arbiter for government servant recruitment and service matters, excluding civil court jurisdiction (including High Courts). It was set up to expedite case disposal and enhance justice quality. Justice V.S. Malimath noted that courts previously viewed cases &quot;With a legalistic angle alone, without proper understanding of the Administrative angle.&quot; This issue was addressed by including an Administrative member in each Bench.
              </p>
              <p className="text-slate-200 text-sm leading-relaxed">
                The document stresses that administrative orders should be clearly presented in reply statements to explain why an applicant&apos;s prayer cannot be granted.
              </p>
            </div>
          </div>
        </section>

        {/* Application Section */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-rose-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-rose-600/90 to-pink-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Application:</h2>
          </div>
          <div className="p-6 sm:p-8 space-y-6">
            <div className="rounded-xl border-l-4 border-rose-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-rose-400/70">
              <h3 className="text-rose-400 font-semibold text-sm mb-2">Filing an Application:</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                Any person aggrieved by an order can apply to the Tribunal to redress grievances. The Tribunal&apos;s jurisdiction covers both actual employment and recruitment-related matters.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-rose-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-rose-400/70">
              <h3 className="text-rose-400 font-semibold text-sm mb-2">Admissibility:</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                An application is generally not admitted unless the applicant has exhausted all available remedies under relevant service rules. However, this rule is not absolute, and the Tribunal may accept applications in extraordinary circumstances.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-rose-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-rose-400/70">
              <h3 className="text-rose-400 font-semibold text-sm mb-2">Deemed Availment of Remedies:</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                A person is considered to have exhausted remedies if a final order has been issued by the Government, authority, officer, or other competent person, rejecting an appeal or representation related to their grievances under applicable rules.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-rose-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-rose-400/70">
              <h3 className="text-rose-400 font-semibold text-sm mb-2">Limitation Period:</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                If no final order has been made by the Government or other authority, an application can be made, but if a period of six months has expired since the appeal or representation was made, it will not be entertained. The Act also specifies a limitation period beyond which applications are not entertained under normal circumstances.
              </p>
            </div>
          </div>
        </section>

        {/* Procedure Section */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-rose-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-rose-600/90 to-pink-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Procedure:</h2>
          </div>
          <div className="p-6 sm:p-8 space-y-6">
            <div className="rounded-xl border-l-4 border-rose-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-rose-400/70">
              <h3 className="text-rose-400 font-semibold text-sm mb-2">Procedural Guidelines:</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                The Tribunal is not bound by the Civil Procedure Code 1908 but is guided by the principles of Natural Justice. It has the power to regulate its own procedure and aims to decide applications expeditiously. Parties can appear in person or be represented by a lawyer.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-rose-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-rose-400/70">
              <h3 className="text-rose-400 font-semibold text-sm mb-2">Judicial Review:</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                The Supreme Court, in the case of Union of India Vs. Parmananda, held that the Tribunal must adhere to the limits of judicial review. Appeals against the Tribunal&apos;s decisions are prescribed under Article 136 of the Constitution.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-rose-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-rose-400/70">
              <h3 className="text-rose-400 font-semibold text-sm mb-2">Interim Orders:</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                Interim orders (injunctions, stays, or other) require a copy of the application and other documents to be furnished to the opposing party, who must be given an opportunity to be heard. However, in exceptional cases, the Tribunal can waive this procedure.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-rose-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-rose-400/70">
              <h3 className="text-rose-400 font-semibold text-sm mb-2">Ex-parte Interim Orders:</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                Despite legal provisions to the contrary, ex-parte interim orders (staying administrative actions) are frequently issued. Such orders are valid for 14 days. The law requires the administration to approach the CAT within 14 days to present their viewpoint and seek vacation of these interim stay orders.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CentralAdministrativeTribunal
