import React from 'react'

const PublicComplaints = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-teal-900/30 py-10 px-2 sm:px-2 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-teal-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-teal-600 via-teal-600 to-emerald-600 text-white px-6 py-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent)]" />
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight relative z-10 text-center">PUBLIC COMPLAINTS</h1>
          </div>
          <div className="p-6 sm:p-4">
            <p className="text-slate-200 text-sm leading-relaxed">
              Complaints arise when there is deficiency in service. Customer grievances are the feedback on the quality of service. They are the mirrors through which self-analysis can be done to improve the quality in service rendered.
            </p>
          </div>
        </section>

        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-teal-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-teal-600/90 to-emerald-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Redressal Machinery:</h2>
          </div>
          <div className="lg:p-6 p-3">
            <ul className="space-y-4 list-none">
              {[
                "Public Grievances Redressal Machinery is functioning under the Director, Public Grievances who is also the AGM assisted by Joint Director at the Zonal Hqrs.",
                "At the Divisional level this machinery is functioning under the control of ADRM, who is the chairman of public grievances.",
                "Complaints books are available at all Railway Stations - Booking Offices, major Goods Sheds, Parcel Offices, Enquiry, Reservation Offices.",
                "Pantry Cars, Guards of all Non- Suburban passenger carrying trains carry complaint books",
                "Passenger having grievances or suggestions can record their complaints/suggestions in these Complaint Books.",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex gap-4 rounded-xl  bg-slate-700/30 px-3 py-4 transition-colors hover:bg-slate-700/50 hover:border-teal-400/70"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 text-xs font-bold mt-0.5">
                    •
                  </span>
                  <p className="text-slate-200 text-sm leading-relaxed pt-0.5">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Complaint Book */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-teal-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-teal-600/90 to-emerald-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Complaint Book:</h2>
          </div>
          <div className="lg:p-6 p-3">
            <ul className="space-y-4 list-none">
              {[
                "Available in sets of 3 folios- Original-record, duplicate - sent to Division, triplicate-complainant",
                "Reply from ADRM is pasted at the Reverse of the Original Folio and a copy to be filed in Master file.",
                "The Index page has to updated with all relevant particulars",
                "All complaints registered are to be forwarded to DRM/General/MAS within 24 hours by the SS/SM-In Charge/ Senior Supervisor concerned along with Covering letter/ Statement of the Staff concerned.",
                { main: "Reply to complaint - Target dates", sub: ["Without enquiry - 15 days (7 days prescribed in Southern Railway)", "When enquiry is warranted - 30days"] },
                "Complaint Books are to be displayed at a prominent place on a Desk at the Station Master/ Senior Supervisor's Office with Legend Complaints-cum-suggestion book available here.",
                "All efforts are to be taken to attend to the customer with courtesy and politeness. If unable to resolve his Grievance, the complaint Book should be handed over to him without any hesitation.",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 rounded-xl bg-slate-700/30 px-3 py-4 transition-colors hover:bg-slate-700/50">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 text-xs font-bold mt-0.5">•</span>
                  <div className="flex-1">{
                    typeof item === 'string' ? (
                      <p className="text-slate-200 text-sm leading-relaxed pt-0.5">{item}</p>
                    ) : (
                      <div>
                        <p className="text-slate-200 text-sm leading-relaxed pt-0.5 font-medium text-teal-300">{item.main}</p>
                        <ul className="mt-2 ml-4 space-y-1 list-none">
                          {item.sub.map((s, j) => (
                            <li key={j} className="flex gap-2 items-start"><span className="text-teal-400">•</span><span className="text-slate-300 text-sm">{s}</span></li>
                          ))}
                        </ul>
                      </div>
                    )
                  }</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Other channels for lodging complaints */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-teal-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-teal-600/90 to-emerald-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Other channels for lodging complaints:</h2>
          </div>
          <div className="lg:p-6 p-3">
            <ul className="space-y-3 list-none">
              {[
                "Integrated Helpline - 139",
                "CPGRAMS - www.pgportal.gov.in",
                "RAILMADAD-http:/www.railmadad.indianrailways.gov.in",
                "Twitter: @DrmChennai, @railminindia",
              ].map((text, i) => (
                <li key={i} className="flex gap-4 rounded-lg bg-slate-700/30 px-3 py-3 transition-colors hover:bg-slate-700/50">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 text-xs font-bold mt-0.5">•</span>
                  <p className="text-slate-200 text-sm leading-relaxed pt-0.5">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* COMPLAINT MANAGEMENT SYSTEM (COMS) */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-teal-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-teal-600/90 to-emerald-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">COMPLAINT MANAGEMENT SYSTEM (COMS):</h2>
          </div>
          <div className="lg:p-6 p-3 space-y-4">
            <p className="text-slate-200 text-sm leading-relaxed">
              A new initiative of Indian Railways to make itself more responsive to customer complaints, this COMS portal consists of the following applications.
            </p>
            <ul className="space-y-3 list-none">
              {[
                "A mobile app based complaints and suggestions application (currently on the android platform)",
                "A web based complaints and suggestions application on URL 'www.coms.indianrailways.gov.in'.",
                "An SMS based complaints and suggestions application on the no.9717630982.",
                "A link to Centralised Public Grievance Redress and Monitoring System (CPGRAMS) will also be provided.",
              ].map((text, i) => (
                <li key={i} className="flex gap-4 rounded-lg bg-slate-700/30 px-3 py-3 transition-colors hover:bg-slate-700/50">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 text-xs font-bold mt-0.5">•</span>
                  <p className="text-slate-200 text-sm leading-relaxed pt-0.5">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Mobile App */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-teal-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-teal-600/90 to-emerald-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Mobile App:</h2>
          </div>
          <div className="lg:p-6 p-3">
            <ul className="space-y-4 list-none">
              {[
                "Indian Railways have launched the first mobile phone App for registering passenger complaints. This App is on the Android platform.",
                "This mobile App has been implemented using Android 2.3.3 (and above) platform and would be made available for Windows Phone 8.1 (and above).",
                "This mobile App uses the latest technology viz. HTML5, JavaScript, CSS3.1",
                "This mobile App can be downloaded from Google Play Store.",
                "A fast and user-friendly-structured interface has been provided to register complaints.",
                "Complaints will be provided with a unique complaint ID number and complainants can use this unique ID number to track the progress of complaints.",
                "The complaint will be auto assigned to the concerned railway functionary for redressal.",
                "Validations for station name, train number and PNR number have been built into the application for user convenience.",
                "The complaints will be stored in the database.",
                "Detailed MIS reports with zone wise, division wise, type wise filters will enable effective monitoring at the administrative end.",
                "The mobile App is linked to the Complaint Management portal of Indian Railways where complaints can be registered through Web (www.coms.indianrailways.gov.in) and SMS (9717630982).",
              ].map((text, i) => (
                <li key={i} className="flex gap-4 rounded-lg bg-slate-700/30 px-3 py-4 transition-colors hover:bg-slate-700/50">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 text-xs font-bold mt-0.5">•</span>
                  <p className="text-slate-200 text-sm leading-relaxed pt-0.5">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Web based Complaint Management Application */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-teal-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-teal-600/90 to-emerald-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Web based Complaint Management Application:</h2>
          </div>
          <div className="lg:p-6 p-3">
            <ul className="space-y-4 list-none">
              {[
                "Passengers can also register complaints through the Web. The complainants will be assigned a unique ID number with which they can track the progress of complaints.",
                "The complaint will be auto assigned to the concerned railway functionary for redressal.",
                "Detailed MIS reports with zone wise, division wise, type wise filters will enable effective monitoring at the administrative end.",
                "The COMS portal is also available in Hindi.",
              ].map((text, i) => (
                <li key={i} className="flex gap-4 rounded-lg bg-slate-700/30 px-3 py-4 transition-colors hover:bg-slate-700/50">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 text-xs font-bold mt-0.5">•</span>
                  <p className="text-slate-200 text-sm leading-relaxed pt-0.5">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SMS based Complaint Management Application */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-teal-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-teal-600/90 to-emerald-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">SMS based Complaint Management Application:</h2>
          </div>
          <div className="lg:p-6 p-3">
            <ul className="space-y-4 list-none">
              {[
                "Complaint or suggestion can be sent as free flow text as SMS to the number 9717630982. Complaints will be assigned a unique complaint ID number which can be used for tracking.",
                "Furthermore, a new customer helpline number 138 is functional 24 x 7 for the benefit of railway passengers. This number can be used to register voice complaints relating to cleanliness, food & catering, coach maintenance, medical emergency, linen etc. Travelling public can make use of this facility to serve them better and efficiently.",
              ].map((text, i) => (
                <li key={i} className="flex gap-4 rounded-lg bg-slate-700/30 px-3 py-4 transition-colors hover:bg-slate-700/50">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 text-xs font-bold mt-0.5">•</span>
                  <p className="text-slate-200 text-sm leading-relaxed pt-0.5">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PublicComplaints
