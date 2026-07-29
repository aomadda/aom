'use client'
import { 
  Train,
  FileText} from 'lucide-react'

const ContainerTrainOperation = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-teal-500/20 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-md h-112 bg-linear-to-r from-green-400/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-linear-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-4 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative group">
                <div className="lg:w-28 lg:h-28 w-20 h-20 bg-linear-to-br from-green-500/70 via-emerald-500/70 to-teal-500/70 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-24 lg:h-24 w-16 h-16 rounded-full border-2 border-white/20 bg-linear-to-br from-green-700/60 to-emerald-800/60 backdrop-blur-md shadow-2xl shadow-green-500/30 group-hover:shadow-green-500/50 transition-all duration-500">
                    <div className="w-full h-full rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Train className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-5xl text-2xl font-extrabold bg-linear-to-r from-white via-green-100 via-emerald-100 to-teal-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl px-4">
              CONTAINER TRAIN OPERATION
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-green-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Introduction Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Introduction
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  With a view to increasing railway&apos;s share of container traffic and introducing competition in railway container transport services in India, Ministry of Railways decided to grant eligible parties the right to require the Railway Administration to haul their Container trains on Indian Railway network for movement of both Export and Import Traffic as well as Domestic Traffic subject to various terms and conditions contained in an Agreement. This Agreement sets out in detail their mutual relationship and the terms and conditions, which shall govern the right of the Concessionaires to offer their Container trains for movement to Railway Administration and the obligation of Railway Administration to move the trains.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                  The salient features of this Agreement as well as of related instructions with respect to train operations are given below. The salient features of the Concession Agreement with Container Train Operators and of other related instructions are indicative in nature and for guidance only. For actual provisions, the Concession Agreement and the Circulars and Railway Board&apos;s letters mentioned above should be referred to.
                </p>
              </div>
            </div>

            {/* Agreement Terms and Conditions Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Agreement Terms and Conditions
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* Custom Numbered List */}
                  <ol className="space-y-4 list-none counter-reset-green">
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        1
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        Concessionaires have a non-exclusive right to require the Railway Administration to haul the Concessionaire&apos;s Trains subject to the Concessionaire establishing/ensuring access to Rail Terminals and acquiring a minimum number of Wagons including brake vans to form a Block Rake for the commencement of operations and for transportation of containers.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        2
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        The term of this Agreement shall be for a period of 20 years starting from the Commercial Operations Date.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        3
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        In the event the Concessionaire fails to operate its Container Trains in accordance with the requirements of this Agreement within three (3) years from the date of award of the In Principle Approval, Railway Administration shall have the right to terminate the Agreement.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        4
                      </span>
                      <div>
                        <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-2">
                          The rights of the Concessionaire shall include the following:
                        </p>
                        <ol className="custom-sublist space-y-1 ml-5">
                          <li>
                            <span className="alpha-badge">i</span>
                            <span className="text-green-50/95 lg:text-base text-sm leading-relaxed ml-2">The right to undertake the business of collecting, storing and loading onto Wagons, consignments of goods from any third party;</span>
                          </li>
                          <li>
                            <span className="alpha-badge">ii</span>
                            <span className="text-green-50/95 lg:text-base text-sm leading-relaxed ml-2">The right to determine, charge, collect, retain and appropriate all the fees that it charges from the consigners;</span>
                          </li>
                          <li>
                            <span className="alpha-badge">iii</span>
                            <span className="text-green-50/95 lg:text-base text-sm leading-relaxed ml-2">The right to obtain access to Rail Terminals and develop, own, operate and maintain Rail Terminals, including inland container depots;</span>
                          </li>
                          <li>
                            <span className="alpha-badge">iv</span>
                            <span className="text-green-50/95 lg:text-base text-sm leading-relaxed ml-2">The right to procure and own/lease Wagons and containers.</span>
                          </li>
                        </ol>
                      </div>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        5
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        The concessionaire will be responsible for loading and unloading operations at both the origin and destination Rail Terminals
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        6
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        The Railway Administration shall haul the Concessionaire Trains on the payment of prevalent haulage charges as notified from time to time. The present haulage charges are contained in Board&apos;s letter no. 2008/TTIII/73/8 dated 1-7-2008.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        7
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        The Central Government (Ministry of Railways) shall have the right to specify certain commodities, which ordinarily move in railway wagons in trainload as notified commodities, which may be subjected to different tariff and conditions for haulage. At present as per Board&apos;s letter no. 2008/TTIII/73/8 dated 1-7-2008, carriage of coal, coke, minerals and ores in containers is prohibited.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        8
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        The existing incentives/schemes extended to rail customers or that may be introduced in future shall not ipso facto apply to the Concessionaires. Upon request of the Concessionaire(s), Railway administration may consider extending such schemes to the Concessionaire to the extent possible in a non-discriminatory manner.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        9
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        All commercial rules like that contained in Commercial Manual, as amended from time to time and as applicable to other freight traffic moving on Indian Railways shall apply to the Container traffic, except rules specially covered in this Agreement in a non-discriminatory manner amongst similarly placed entities.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        10
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        It shall be the Concessionaire&apos;s sole responsibility to procure the requisite approval/authority for the Concessionaire&apos;s Train and/or a Railway Administration locomotive to enter into and utilize the origin and destination Rail Terminal(s).
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        11
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        Each concessionaire is required to set up two rail linked inland container terminals within three years of obtaining the license to operate or have access to inland container terminals.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        12
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        Use of Railway freight terminals (Goods sheds) as Container Rail Terminals (CRT) has been permitted by the Railways in terms of Rates Circular 10 of 2008.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        13
                      </span>
                      <div>
                        <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-2">
                          Each Rail Terminal, other than a Railway owned Terminal, that is used by the Concessionaire shall conform to the following:
                        </p>
                        <ol className="custom-sublist space-y-1 ml-0">
                          <li>
                            <span className="alpha-badge">i</span>
                            <span className="text-green-50/95 lg:text-base text-sm leading-relaxed ml-2">Each Rail Terminal shall have rail facilities for handling Concessionaire Trains along with locomotive in conformity with siding rules prescribed by Railway Administration from time to time.</span>
                          </li>
                          <li>
                            <span className="alpha-badge">ii</span>
                            <span className="text-green-50/95 lg:text-base text-sm leading-relaxed ml-2">Be equipped with a RDSO approved in-motion weigh bridge of prescribed standards for weighing of Wagons with and without containers of the Concessionaire&apos;s Train.</span>
                          </li>
                          <li>
                            <span className="alpha-badge">iii</span>
                            <span className="text-green-50/95 lg:text-base text-sm leading-relaxed ml-2">Be equipped with TMS and such other facilities as may be required to interface with, and ensure transfer of data online to, FOIS of Railway Administration.</span>
                          </li>
                        </ol>
                      </div>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        14
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        The Concessionaire shall declare the weight of each Wagon/container prior to departure of the Concessionaire&apos;s Train.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        15
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        The Concessionaire shall procure by way of purchase, lease or hire, Wagons including Brake Vans and Containers required for the purposes of operating the Concessionaire&apos;s Trains. However, till such time as the Concessionaire procures the required Brake Vans, Railway Administration may provide its own Brake Vans (provided they are available), on non-discriminatory basis, at a reasonable charge, notified by the Railway Administration from time to time.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        16
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        In the event any of the Wagons of the Concessionaire are lying idle (&quot;Idle Wagons&quot;), the Concessionaire may offer to the Railway Administration or other Concessionaires, use of any such Idle Wagons. However, Railway Administration shall be under no obligation to accept such an offer of the Concessionaire for use of any Idle Wagons and may levy a Stabling Charge as specified.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        17
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        In the event of an Emergency, Railway Administration shall have the right, to temporarily assume control and make use of the Wagons of the Concessionaire. For any such Emergency Use, Railway Administration shall pay to the Concessionaire, a reasonable rent/charge to cover the cost of provisions, maintenance and operation of the Wagon.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        18
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        The Concessionaire shall at all times conform to the maintenance standards specified by the Railway Administration in accordance with Good Industry Practice for the Concessionaire&apos;s Containers, rail related equipment and tracks.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        19
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        The Concessionaire&apos;s Wagons shall be maintained by the Railway Administration in accordance with the maintenance schedule notified by the Railway Administration. Such maintenance shall, inter alia, include intensive examination, routine overhaul (&quot;ROH&quot;) and periodic overhaul (&quot;POH&quot;). The Concessionaire will provide and maintain the requisite Wagon examination facilities(as specified by railway Administration) inside the Rail Terminal and bear a one time capital cost for tools and plants as specified by Railway Administration and approved by RDSO.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        20
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        Wagon maintenance charges for maintenance by Railway administration of the Concessionaire&apos;s Wagons shall be included in the Haulage Charges. The present Haulage Charges include 5% thereof by way of maintenance charges.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        21
                      </span>
                      <ul className="list-none text-green-50/95 lg:text-base text-sm leading-relaxed space-y-3 pl-2">
                        <li className="flex items-start gap-3">
                          <span className="mt-1 block w-3 h-3 bg-emerald-400 rotate-45 rounded-sm shadow-md border border-emerald-200/60"></span>
                          <span>
                            Railway Administration shall normally complete the intensive train examination within a period of 6 hours from the time the Concessionaire&apos;s Wagons (in empty Rake formation) are handed over by the Concessionaire for such examination.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 block w-3 h-3 bg-emerald-400 rotate-45 rounded-sm shadow-md border border-emerald-200/60"></span>
                          <span>
                            Provided however, that the minimum interval between two successive Rakes offered for intensive train examination shall be at least 6 hours.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 block w-3 h-3 bg-emerald-400 rotate-45 rounded-sm shadow-md border border-emerald-200/60"></span>
                          <span>
                            Alternatively, the Railway Administration may examine the Concessionaire&apos;s Wagons at suitable point enroute its destination where the facilities for such examination exist.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 block w-3 h-3 bg-emerald-400 rotate-45 rounded-sm shadow-md border border-emerald-200/60"></span>
                          <span>
                            The time stipulated for maintenance shall not be applicable vis-à-vis such Concessionaire&apos;s Wagons that are declared sick during the course of examination and are required to be detached from the Concessionaire&apos;s Train for sick line/workshop attention.
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        22
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        In the event of the Railway Administration&apos;s inability to conform to the time schedule specified for intensive train examination, it shall pay to the Concessionaire for every 24 hours of delay (inclusive of initial 6 hours) so caused, an amount equal to the Stabling Charges payable for such period of delay.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        23
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        The Concessionaire may undertake maintenance of the Concessionaire&apos;s Wagons through any other entity including the Concessionaire on such terms and conditions as specified by the Railway Administration from time to time provided however, that the maintenance is carried out as per maintenance schedules and various stages of inspection as may be notified by Railway Administration and pre-departure certification of such Wagons shall be issued by the Railway Administration for which the prescribed charges shall be paid by the Concessionaire.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        24
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        The Concessionaire shall hand over empty Concessionaire&apos;s Wagons, in rake formation, to Railway Administration for carrying out maintenance as per the schedule specified by the Railway Administration.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        25
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        The haulage charges for moving the Wagons, in rake formation, from a Rail Terminal to the workshop/maintenance depot/train examination point of the Railway Administration and back shall be borne by the Railway Administration, provided however, that the scheduled haulage charges shall be payable by the Concessionaire in the event maintenance is carried out by an entity other than the Railway Administration and inspection is carried out by the Railway Administration at the location of maintenance.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        26
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        In the event wagon maintenance is undertaken by the Concessionaire, or any other party (other than Railway Administration in accordance with the provisions of this Agreement) a proportionate rebate in haulage charges (equivalent to the built in maintenance charges) shall be given to the Concessionaire.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        27
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        Subject to any operational constraints, Railway administration will provide locomotives to haul the Concessionaire&apos;s Trains on a non-discriminatory and non exclusive basis vis-à-vis other Concessionaires only.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        28
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        At least four (4) hours prior to the planned departure of Concessionaire&apos;s Train, the Concessionaire shall submit an indent (&quot;Indent for Locomotive&quot;) for supply of locomotive. The existing incentive schemes if any or incentive schemes that may be introduced in future for supply of locomotives may be extended to the Concessionaire&apos;s Trains with suitable modifications such that it is applied in a non discriminatory manner among different concessionaires.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        29
                      </span>
                      <ul className="list-none pl-0 text-green-50/95 lg:text-base text-sm leading-relaxed space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="mt-2 w-3 h-3 min-w-3 min-h-3 bg-emerald-400 rotate-45 rounded-sm shadow-lg inline-block"></span>
                          <span>
                            The Concessionaire may, anytime prior to arrival of a locomotive, cancel its Indent. However, the Concessionaire shall be liable to pay to Railway Administration indent cancellation charges equivalent to one (1) hour Locomotive Detention Charges.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2 w-3 h-3 min-w-3 min-h-3 bg-emerald-400 rotate-45 rounded-sm shadow-lg inline-block"></span>
                          <span>
                            If the indent for cancellation of locomotive is received by Railway Administration after the loco is dispatched for the Rail Terminal, the Concessionaire, in addition to indent cancellation charges, shall also be liable to pay to Railway Administration such charges as may be prescribed for the infructuous movement of locomotive both ways.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2 w-3 h-3 min-w-3 min-h-3 bg-emerald-400 rotate-45 rounded-sm shadow-lg inline-block"></span>
                          <span>
                            Such charges, however, shall not exceed the charges levied for the movement of the locomotive for the distance from the nearest locomotive shed.
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        30
                      </span>
                      <ul className="list-none pl-0 text-green-50/95 lg:text-base text-sm leading-relaxed space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="mt-2 w-3 h-3 min-w-3 min-h-3 bg-emerald-400 rotate-45 rounded-sm shadow-lg inline-block"></span>
                          <span>
                            If, after arrival of the locomotive at the Rail Terminal (either for departure or termination), the Concessionaire&apos;s Train is not attached or detached and released, for whatsoever reason not attributable to Railway Administration, prior to expiry of the Free Waiting Time of two hours (entry to exit), the Concessionaire shall be liable to pay to Railway Administration, Locomotive Detention Charges for every hour (or part thereof) for which the locomotive is detained beyond the Free Waiting Time.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2 w-3 h-3 min-w-3 min-h-3 bg-emerald-400 rotate-45 rounded-sm shadow-lg inline-block"></span>
                          <span>
                            If a locomotive is detained for more than eight (8) hours at any Rail Terminal, without prejudice to the Concessionaire&apos;s liability to pay Locomotive Detention Charges, Railway Administration shall have the right, but not the obligation, to withdraw and/or remove the locomotive from such Rail Terminal.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2 w-3 h-3 min-w-3 min-h-3 bg-emerald-400 rotate-45 rounded-sm shadow-lg inline-block"></span>
                          <span>
                            If Railway Administration withdraws or removes the locomotive from the Rail Terminal after detention of 8 hours, the detention along with movement charges shall be levied without granting any free time.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2 w-3 h-3 min-w-3 min-h-3 bg-emerald-400 rotate-45 rounded-sm shadow-lg inline-block"></span>
                          <span>
                            If Railway Administration withdraws the locomotive, the Indent for locomotive shall be deemed to have lapsed, with no further effect.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-2 w-3 h-3 min-w-3 min-h-3 bg-emerald-400 rotate-45 rounded-sm shadow-lg inline-block"></span>
                          <span>
                            These provisions shall also apply where the locomotive arrives at a Rail Terminal scheduled for train termination but is denied entry for reasons attributable to the Concessionaire and/or the Rail Terminal operator.
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        31
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        Locomotive Detention Charges payable by the Concessionaire for detention of a locomotive beyond the Free Waiting Time shall be at the rates as prescribed for Diesel/Electric Train Engines by the Railway Administration from time to time. The current Locomotive Detention Charges are contained in Rates Circular No. 18 of 2008.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        32
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        Railway Administration shall, in the event of delayed supply of locomotive beyond 12 hours from the indented schedule time of departure of the Concessionaire&apos;s Train, be liable to give to the Concessionaire a one time rebate equal to two (2) percent of the haulage charges payable by the Concessionaire for the Booked Route. This rebate shall, however, not be admissible in contingencies such as interruption of traffic due to accidents or any other similar unavoidable reasons beyond the control of Railway Administration.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        33
                      </span>
                      <ul className="list-none pl-0 text-green-50/95 lg:text-base text-sm leading-relaxed space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="mt-1 w-3 h-3 min-w-3 min-h-3 bg-emerald-400 rotate-45 rounded-sm shadow-lg inline-block"></span>
                          <span>
                            Transportation of the Concessionaire&apos;s trains shall be in Block Rakes.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 w-3 h-3 min-w-3 min-h-3 bg-emerald-400 rotate-45 rounded-sm shadow-lg inline-block"></span>
                          <span>
                            In the event a Concessionaire&apos;s Train operates with lesser number of Wagons/Containers than those prescribed in the Block Rakes (&quot;Non-Block Rake Trains&quot;), the haulage charges for such Non-Block Rake Trains shall be recovered on the basis of the minimum composition of Block Rake as specified by Railway Administration.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 w-3 h-3 min-w-3 min-h-3 bg-emerald-400 rotate-45 rounded-sm shadow-lg inline-block"></span>
                          <span>
                            In the event a Concessionaire&apos;s Train has less than half the Wagons required to constitute a Block Rake, the Railway Administration shall have the right to refuse to haul the Concessionaire&apos;s train comprising less than half a Block Rake.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 w-3 h-3 min-w-3 min-h-3 bg-emerald-400 rotate-45 rounded-sm shadow-lg inline-block"></span>
                          <span>
                            The Railway Administration may, at its sole discretion, extend the facility of two point rakes for Container Trains during specified periods and on specified routes.
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        34
                      </span>
                      <ul className="list-none pl-0 text-green-50/95 lg:text-base text-sm leading-relaxed space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="mt-1 w-3 h-3 min-w-3 min-h-3 bg-emerald-400 rotate-45 rounded-sm shadow-lg inline-block"></span>
                          <span>
                            The Concessionaire&apos;s Trains to be hauled by Railway Administration pursuant to this Agreement shall be booked by the shortest route possible (the &quot;Booked Route&quot;) and the haulage charges shall be determined with reference to such Booked Route.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 w-3 h-3 min-w-3 min-h-3 bg-emerald-400 rotate-45 rounded-sm shadow-lg inline-block"></span>
                          <span>
                            Provided however, in case of any accident or other operational exigencies on, or affecting, the Booked Routes, Railway Administration shall, in its sole discretion, be entitled to transport the Concessionaire&apos;s Train by an alternative route (&quot;Alternate Route&quot;).
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 w-3 h-3 min-w-3 min-h-3 bg-emerald-400 rotate-45 rounded-sm shadow-lg inline-block"></span>
                          <span>
                            The Concessionaire shall be liable to pay haulage charges only for the Booked Route even when Concessionaire&apos;s Train is transported by an Alternate Route.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 w-3 h-3 min-w-3 min-h-3 bg-emerald-400 rotate-45 rounded-sm shadow-lg inline-block"></span>
                          <span>
                            Provided that in case the Concessionaire&apos;s Trains are carried by a longer route in pursuance of the Rationalisation Scheme of MOR (under section 71 of the Railway Act 1989), the Concessionaire shall be liable to pay charges accordingly.
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        35
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        The Concessionaire shall, at least 7 (seven) days prior to any calendar week in which it proposes to operate any Concessionaire&apos;s Train, inform (&quot;Weekly Advance Scheduling Notice&quot;) Railway Administration of the number of Concessionaire&apos;s Trains, it requires to be moved, the proposed routes and the likely departure dates (&quot;Weekly Advance Schedule&quot;).
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        36
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        Notwithstanding anything to the contrary, the Concessionaire shall, at least twenty four (24) hours prior to the day of programmed loading (excluding the day of loading itself) of a Concessionaire&apos;s Train, confirm to Railway Administration the departure schedule of such Concessionaire&apos;s Train, provided that such notices shall not in any way be binding and shall be only indicative of the Concessionaire&apos;s operations schedule for the following week / day.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        37
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        Railway Administration shall maintain a level playing field among all Concessionaires and shall devise and implement a transparent and non-discriminatory system for dispatch of Concessionaire&apos;s Trains on a first come first served basis.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        38
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        Notwithstanding anything to the contrary contained in the Agreement, dispatch of locomotives and Concessionaire&apos;s Train(s) shall be subject to any operational exigencies and/or system restrictions.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        39
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        Railway Administration shall make all efforts to ensure minimum enroute detention of the Concessionaire&apos;s Trains.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        40
                      </span>
                      <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        Subject to any operational and capacity restrictions of Railway Administration, there shall be no restriction on the number and frequency of Concessionaire&apos;s Trains that the Concessionaire may require Railway Administration to haul pursuant to this Agreement.
                      </p>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        41
                      </span>
                      <ul className="list-none pl-0 my-0">
                        <li className="flex gap-3 items-start">
                          <span className="mt-1 inline-block w-3 h-3 rotate-45 bg-emerald-300/80 shadow-md"></span>
                          <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                            The Concessionaire may request the Railway Administration to accept, at any time after the departure of a Concessionaire&apos;s Train, the diversion/re-diversion of such Concessionaire&apos;s Train to any other Rail Terminal, in accordance with the various terms and conditions (including but not limited to payment of haulage charges and other charges) and procedures specified by Railway Administration from time to time subject to its operational exigencies and/or for system restrictions. It is clarified that the Railway Administration shall not be under a legal obligation to comply with such request.
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center flex-col gap-4">
                      <span className="number-badge shrink-0">
                        42
                      </span>
                      <div>
                        <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-2">
                          The Concessionaire shall be liable to pay to Railway Administration Stabling Charges, in the following events :
                        </p>
                        <ol className="custom-sublist space-y-1 ml-0">
                          <li>
                            <span className="alpha-badge">i</span>
                            <span className="text-green-50/95 lg:text-base text-sm leading-relaxed ml-2">In case the Concessionaire&apos;s Train suffers detention at the serving station for reasons attributable to the Concessionaire or when the Concessionaire either declines to accept Wagons inside the Rail Terminal, scheduled to be the terminating Rail Terminal or is not in a position to receive placement of subsequent Wagons; or</span>
                          </li>
                          <li>
                            <span className="alpha-badge">ii</span>
                            <span className="text-green-50/95 lg:text-base text-sm leading-relaxed ml-2">In case of non acceptance of trains inside any port by the port authority concerned; or</span>
                          </li>
                          <li>
                            <span className="alpha-badge">iii</span>
                            <span className="text-green-50/95 lg:text-base text-sm leading-relaxed ml-2">At any of the stations en route due to any reason attributable to the Concessionaire.</span>
                          </li>
                          <li>
                            <span className="alpha-badge">iv</span>
                            <span className="text-green-50/95 lg:text-base text-sm leading-relaxed ml-2">Provided however that Stabling Charges shall be levied only where the detention of the Concessionaire&apos;s Train is for a period in excess of 4 hours.</span>
                          </li>
                        </ol>
                        <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mt-2">
                          Stabling Charges shall be payable at the rates notified by Railway Administration from time to time and the Railway Administration shall have the right to revise the Stabling Charges on an annual basis; provided that any increase in charges in any Financial Year during the term of this Agreement, shall not exceed 10% (ten percent) of the charges payable in the preceding year. The current Stabling Charges are contained in Railway Board&apos;s letter no. TC-I/98/201/4 dated 17.1.2008.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .counter-reset-green {
          counter-reset: item;
        }
        .counter-reset-green > li {
          counter-increment: item;
        }
        .number-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #05966999, #10b981cc, #6ee7b77e, #0596694d);
          border: 2px solid #10b981cc;
          box-shadow: 0 4px 16px 0 #34d39933;
          font-weight: 800;
          font-size: 1.25rem;
          color: #d1fae5;
          margin-top: 0.15rem;
          margin-right: 0.8rem;
          box-sizing: border-box;
        }
        .custom-sublist {
          list-style: none;
          padding: 0;
        }
        .custom-sublist > li {
          display: flex;
          align-items: flex-start;
        }
        .alpha-badge {
          display: inline-flex;
          min-width: 1.8rem;
          align-items: center;
          justify-content: center;
          border-radius: 0.7rem;
          background: linear-gradient(90deg, #059669cc 40%, #47d39f66 100%);
          color: #a7f3d0;
          font-weight: 600;
          font-size: 1.06rem;
          margin-top: 0.13rem;
        }
        .diamond-bullet {
          display: inline-block;
          width: 0.75rem;
          height: 0.75rem;
          background: linear-gradient(135deg, #6ee7b7 60%, #10b981 100%);
          transform: rotate(45deg);
          margin-top: 0.25rem;
          box-shadow: 0 1px 4px 0 rgba(16, 185, 129, 0.20);
        }
      `}</style>
    </div>
  )
}

export default ContainerTrainOperation
