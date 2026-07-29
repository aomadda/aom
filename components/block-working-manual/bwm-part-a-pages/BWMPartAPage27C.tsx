"use client"
import React from 'react'

const BWMPartAPage27C: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER - III
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4"> 3.22 Private Number</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-6 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                <div>
                  <p className="mb-4">
                    <span className="font-semibold text-blue-300">a)</span> Two PN sheets shall be supplied to each Station Master. The PN
                    sheets issued shall be numbered by the Traffic Inspector in the
                    order in which they are to be used and shall bear the signature of
                    Traffic Inspector. The PN sheets shall be kept under lock and key in
                    the personal custody of the Station Master on duty to whom they
                    are issued. A page of the PN sheet is given below as a specimen:
                  </p>
                  <p className="mb-4 text-blue-200 font-medium">Note: Train Number is represented as TN.</p>
                  
                  {/* PN Sheet Table */}
                  <div className="bg-white/5 rounded-lg p-4 my-6 border border-white/10">
                    <div className="grid grid-cols-4 gap-4 text-center">
                      <div className="font-semibold text-blue-300">Date</div>
                      <div className="font-semibold text-blue-300">Date</div>
                      <div className="font-semibold text-blue-300">Date</div>
                      <div className="font-semibold text-blue-300">Date</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-center mt-2">
                      <div className="font-semibold text-indigo-300">PN TN</div>
                      <div className="font-semibold text-indigo-300">PN TN</div>
                      <div className="font-semibold text-indigo-300">PN TN</div>
                      <div className="font-semibold text-indigo-300">PN TN</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-center mt-4 space-y-2">
                      <div>25 24</div>
                      <div>21 18</div>
                      <div>32 15</div>
                      <div>64 29</div>
                      <div>29 16</div>
                      <div>34 57</div>
                      <div>37 27</div>
                      <div>18 21</div>
                      <div>23 39</div>
                      <div>15 42</div>
                      <div>12 43</div>
                      <div>22 18</div>
                      <div>31 58</div>
                      <div>26 35</div>
                      <div>10 14</div>
                      <div>38 42</div>
                      <div>14 10</div>
                      <div>47 66</div>
                      <div>56 11</div>
                      <div>55 48</div>
                      <div>18 17</div>
                      <div>69 74</div>
                      <div>44 32</div>
                      <div>12 83</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="my-4">
                    <div className="flex flex-col gap-5">
                        <span className="font-semibold text-blue-300 text-center">b)</span>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-400 text-xl mt-1">🔢</span>
                        <span className="text-gray-200">
                          <span className="font-semibold text-blue-300">A Private Number (PN)</span> must be allotted for each train when the Station Master grants Line Clear to the applying Station Master.
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-indigo-400 text-xl mt-1">📝</span>
                        <span className="text-gray-200">
                          Both Station Masters must record the given and received Private Number for every train in the Train Signal Register.
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-purple-400 text-xl mt-1">↪️</span>
                        <span className="text-gray-200">
                          Numbers are allotted to trains in the order they appear on the PN sheet currently in use.
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-400 text-xl mt-1">✏️</span>
                        <span className="text-gray-200">
                          Once a Private Number has been allotted to a train, it should be scored out (crossed horizontally), and the corresponding train number and date entered in the appropriate columns.
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-400 text-xl mt-1">🚫</span>
                        <span className="text-gray-200">
                          If the run of a train is cancelled after a PN has already been allotted, the same Private Number must not be re-issued to any future train.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-4">
                  <div className="flex flex-col gap-5">
                    <span className="font-semibold text-blue-300 text-center">c)</span>
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-400 text-xl mt-1">🔄</span>
                      <span className="text-gray-200">
                        If the <span className="font-semibold text-blue-300">next Private Number</span> to be used is the same as the one last issued, the sender must cancel the number in the sheet, add a remark as &quot;last&quot;, sign it, and issue the next number.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-400 text-xl mt-1">⚠️</span>
                      <span className="text-gray-200">
                        If a duplicate number is already given before detection, the station which received it must be informed so the number can be cancelled and the next number issued.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-500 text-xl mt-1">🛡️</span>
                      <span className="text-gray-200">
                        The Station Master receiving the Private Number is responsible for ensuring that no two consecutive Private Numbers are received from the same station granting Line Clear.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 my-4">
                  <span className="font-semibold text-blue-300 text-center">d)</span>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-500 text-xl mt-1">🔒</span>
                    <span className="text-gray-200">
                      Access to the PN sheet is restricted: <span className="font-semibold">only Inspecting Officials</span> are permitted to access it.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 text-xl mt-1">📦</span>
                    <span className="text-gray-200">
                      When a PN sheet is exhausted, it must be <span className="font-semibold">sent in a sealed cover</span> to the Traffic Inspector of the section, who will provide a new sheet as replacement.
                    </span>
                  </div>
                </div>

                <div className="my-4">
                  <div className="flex flex-col gap-5">
                    <span className="font-semibold text-blue-300 text-center">e)</span>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl mt-1">📄</span>
                      <span className="text-gray-200">
                        <span className="font-semibold text-blue-300"></span>  shall be in use at any given time.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-purple-400 text-xl mt-1">🔢</span>
                      <span className="text-gray-200">
                        Ensure that <span className="font-semibold">adjacent stations</span> are supplied with sheets bearing <span className="font-semibold">different numbers</span>.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-500 text-xl mt-1">🙅‍♂️</span>
                      <span className="text-gray-200">
                        PN sheets shall <span className="font-semibold">not be issued to individuals</span> but <span className="font-semibold">only to a post</span>.
                      </span>
                    </div>
                    <span className="font-semibold text-blue-300 text-center">f)</span>
                    <div className="flex items-start gap-3">
                      <span className="text-red-400 text-xl mt-1">✌️</span>
                      <span className="text-gray-200">
                        <span className="font-semibold">No more than two PN sheets</span> shall be available with the staff on duty.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 text-xl mt-1">🔖</span>
                      <span className="text-gray-200">
                        All PN sheets must be <span className="font-semibold">serially numbered before issue</span>.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 my-3">
                  <span className="text-blue-400 text-xl mt-1">🕵️‍♂️</span>
                  <span className="text-gray-200">
                    <span className="font-semibold text-blue-300"></span>{' '}
                    The <span className="font-semibold">Traffic Inspector</span> or any other <span className="font-semibold">Inspecting Official</span> visiting stations shall ensure that <span className="font-semibold">PNs are properly scored out</span> and that the <span className="font-semibold">train number</span> and <span className="font-semibold">date</span> are entered against each entry.
                  </span>
                </div>

                <div className="my-4">
                  <div className="flex justify-center">
                    <span className="font-semibold text-blue-300 text-center">g)</span>
                  </div>
                  <ul className="list-none mt-2 space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 text-xl mt-0.5">❌</span>
                      <span className="text-gray-200">
                        If a <span className="font-semibold">PN sheet is lost or mislaid</span> while in use, the Station Master should, if available, use the PN sheet meant for future use.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 text-xl mt-0.5">✉️</span>
                      <span className="text-gray-200">
                        The Station Master must <span className="font-semibold">immediately inform</span> the Traffic Inspector in writing, stating the reason, and request a fresh PN sheet.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="my-4">
                  <div className="flex justify-center">
                    <span className="font-semibold text-blue-300 text-center">h)</span>
                  </div>
                  <ul className="list-none mt-2 space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 text-xl mt-0.5">🗃️</span>
                      <span className="text-gray-200">
                        All <span className="font-semibold">used PN sheets</span> must be <span className="font-semibold">preserved for 6 months</span> after the end of the half-year in which they are completed.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 text-xl mt-0.5">🗑️</span>
                      <span className="text-gray-200">
                        After this retention period, <span className="font-semibold">used PN sheets</span> should be <span className="font-semibold">treated as old records and disposed of</span> as per guidelines.
                      </span>
                    </li>
                  </ul>
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

export default BWMPartAPage27C