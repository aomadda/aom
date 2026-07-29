"use client"
import React from 'react'

const BWMPartBPage11: React.FC = () => {
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
              CHAPTER - I
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">PARTS AND DESCRIPTION OF AXLE COUNTER PROVEN BLOCK PANEL (UFSBI & SSBPAC (D) SINGLE LINE)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-xl text-lg mb-4">1.4. Parts and Description of Axle Counter proven Block Panel (UFSBI & SSBPAC (D) Single Line): (See Figure Nos. 6 & 7 at the end of this Chapter)</h3>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                      A set of two block panels and their associated equipment as shown in the diagrams will be used as a pair, one at station &apos;X&apos; and the other at station &apos;Y&apos;. Telephone communications is provided in conjunction with block panels.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <h4 className="text-blue-300 font-bold lg:text-lg text-base mb-4">a) DESCRIPTION OF BLOCK PANEL FOR SINGLE LINE (UFSBI & SSBPAC (D) Single Line:</h4>
                    
                    <div className="space-y-6">
                      <div>
                        <h5 className="text-blue-300 font-bold lg:text-base text-sm mb-3">(I) Keys</h5>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-white/20">
                            <thead>
                              <tr className="bg-white/10">
                                <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Key</th>
                                <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Function</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">SM&apos;s Key</td>
                                <td className="border border-white/20 p-3">
                                  <p className="mb-2">The key, when out, prevents the following operations.</p>
                                  <div className="ml-4 space-y-1">
                                    <p>a) Transmission of BELL code.</p>
                                    <p>b) Transmission of LINE CLEAR enquiry request.</p>
                                    <p>c) Resetting of Axle Counter.</p>
                                    <p>d) Cancellation of Line Clear.</p>
                                    <p>e) Release of Shunt Key.</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">AXLE COUNTER RESET KEY</td>
                                <td className="border border-white/20 p-3">Axle Counter reset key where provided/when pressed resets the axle counter provided reset co- operation is available from other station.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">MAINTAINER BACK COVER LOCK KEY</td>
                                <td className="border border-white/20 p-3">A lock is provided at the back of block panel for maintenance Purpose.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">SM&apos;s BACK COVER LOCK</td>
                                <td className="border border-white/20 p-3">For double lock arrangement, a lock on the back of block panel is provided which can be operated by key kept in the custody of Station Master</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">SHUNT RELEASE KEY</td>
                                <td className="border border-white/20 p-3">
                                  <p className="mb-2">Shunt Release Key (normally turned and kept OUT).</p>
                                  <p className="mb-2">a) The following operation is possible when IN,</p>
                                  <p className="ml-4 mb-2">To take out SHUNT KEY from electric key transmitter (EKT), that serves as tangible authority for Loco-pilot to shunt beyond Last Stop Signal and up to First Stop Signal.</p>
                                  <p className="mb-2">b) The following operations are not possible when IN;</p>
                                  <div className="ml-4 space-y-1">
                                    <p>(i) To take LINE CLEAR.</p>
                                    <p>(ii) Other side station to take LINE CLEAR.</p>
                                    <p>(iii) Closing of block.</p>
                                    <p>(iv) To take Last Stop Signal to &quot;OFF&quot;.</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">CATCH/SLIP SIDING</td>
                                <td className="border border-white/20 p-3">This key where provided is USED to perform CATCH/ SLIP SIDING operation.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-blue-300 font-bold lg:text-base text-sm mb-3">(II) Push buttons (non locking type)</h5>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-white/20">
                            <thead>
                              <tr className="bg-white/10">
                                <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Push button</th>
                                <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Functions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">BELL</td>
                                <td className="border border-white/20 p-3">
                                  <div className="space-y-1">
                                    <p>To transmit BELL codes to station at other end of Block section.</p>
                                    <p>To take LINE CLEAR, when pressed along with TRAIN GOING TO button.</p>
                                    <p>To cancel LINE CLEAR, when pressed along with CANCEL button.</p>
                                    <p>To extend co-operation for cancellation to other station, when pressed with RESET button.</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">TRAIN GOING TO</td>
                                <td className="border border-white/20 p-3">Station Master of sending station operates it along with bell button. This sets sending block panel to TGT condition, and receiving station block panel to TCF condition.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">CANCEL</td>
                                <td className="border border-white/20 p-3">It is operated with &apos;Bell button&apos; to enable cancellation of &apos;Line clear&apos; condition, if the train has not entered the block section or after the train has pushed back to the station. Station Master at train receiving station does cancellation operation.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">ACKN</td>
                                <td className="border border-white/20 p-3">It is operated to acknowledge the section occupied or section free condition. It silences the &apos;SECTION OCCUPIED/FREE BUZZER&apos;</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">LINE CLOSED YELLOW</td>
                                <td className="border border-white/20 p-3">Circular indication in between the directional arrowhead. To indicate Block Section free from vehicles and LINE CLEAR not granted/received at train Receiving /train sending station respectively.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-blue-300 font-bold lg:text-base text-sm mb-3">(II) Push buttons (non locking type) (contd.)</h5>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-white/20">
                            <thead>
                              <tr className="bg-white/10">
                                <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Push button</th>
                                <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Functions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">Axle Counter reset Co-op</td>
                                <td className="border border-white/20 p-3">It is operated to extend co-operation from a station where evaluator of axle counter has not been provided for resetting of &apos;Axle counter&apos;.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <h5 className="text-blue-300 font-bold lg:text-lg text-base mb-4">(III) INDICATORS:</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-white/20">
                        <thead>
                          <tr className="bg-white/10">
                            <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Indicators</th>
                            <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Functions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">TRAIN COMING FROM [TCF]</td>
                            <td className="border border-white/20 p-3">
                              <p className="mb-2">In a directional arrowhead pointing downward for incoming traffic towards station.</p>
                              <div className="space-y-2">
                                <div>
                                  <span className="font-bold text-green-400">GREEN</span>
                                  <p className="ml-2">To indicate LINE CLEAR has been obtained, when TRAIN GOING TO Button and BELL button have been pressed at sending station and the conditions for the granting of LINE CLEAR at receiving station have been complied with and a rectangular indication named TCF lights up GREEN.</p>
                                </div>
                                <div>
                                  <span className="font-bold text-red-400">RED</span>
                                  <p className="ml-2">To indicate TRAIN ON LINE on entry of incoming train on LINE CLEAR and a rectangular indication named TOL lights up RED.</p>
                                </div>
                                <div>
                                  <span className="font-bold text-green-400">FLASHING GREEN</span>
                                  <p className="ml-2">To indicate:</p>
                                  <div className="ml-4 space-y-1">
                                    <p>a) Block section clear after arrival of train, but associated Signals and their controls not normal at either station.</p>
                                    <p>b) Cancellation of LINE CLEAR before entry of train in Block Section.</p>
                                    <p>c) Block section clear after arrival of train, associated signals and their controls at normal at both stations but after unintentional insertion of Shunt Release Key IN, when the train was in section.</p>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">TRAIN GOING TO [TGT]</td>
                            <td className="border border-white/20 p-3">
                              <p className="mb-2">In a directional arrowhead pointing upward for outgoing traffic away from station at train sending station.</p>
                              <div className="space-y-2">
                                <div>
                                  <span className="font-bold text-green-400">GREEN</span>
                                  <p className="ml-2">To indicate LINE CLEAR received when TRAIN GOING TO button and BELL button have been pressed on Block Panel of train sending station and the condition for taking the LINE CLEAR have been complied with at both stations and a rectangular indication named TGT lights up GREEN.</p>
                                </div>
                                <div>
                                  <span className="font-bold text-red-400">RED</span>
                                  <p className="ml-2">To indicate TRAIN ON LINE on entry of outgoing train on LINE CLEAR and a rectangular indication named TOL lights up RED.</p>
                                </div>
                                <div>
                                  <span className="font-bold text-green-400">FLASHING GREEN</span>
                                  <p className="ml-2">To indicate:</p>
                                  <div className="ml-4 space-y-1">
                                    <p>a) Block Section clear after arrival of train at other station, but associated signals and their controls not normal at either or both stations i.e. SNK off or Shunt key indication &apos;RED&apos;.</p>
                                    <p>b) LINE CLEAR cancelled before entry of train in block section.</p>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <h5 className="text-blue-300 font-bold lg:text-lg text-base mb-4">(III) INDICATORS (Contd.)</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-white/20">
                        <thead>
                          <tr className="bg-white/10">
                            <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Indicators</th>
                            <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Functions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">LAST STOP SIGNAL</td>
                            <td className="border border-white/20 p-3">
                              <p className="mb-2">Its shape is circular monogram of signal.</p>
                              <div className="space-y-1">
                                <p><span className="font-bold text-red-400">RED</span> indication means Last Stop Signal is at &apos;ON&apos;.</p>
                                <p><span className="font-bold text-green-400">GREEN</span> indication means Last Stop Signal is at &apos;OFF&apos;.</p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">RESET/ CANCELLATION CO- OPERATION YELLOW</td>
                            <td className="border border-white/20 p-3">Its shape is circular and is placed near reset key. It indicates that co-operation has been received from block panel where reset co-operation button has been provided.</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">CANCEL FLASHING YELLOW</td>
                            <td className="border border-white/20 p-3">Circular LED. To indicate progress of LINE CLEAR cancellation timer of 120 seconds. The indication lights up on pressing of CANCEL along With BELL button, when TRAIN COMING FROM is displaying FLASHING GREEN indication.</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">LINE FREE GREEN</td>
                            <td className="border border-white/20 p-3">Indicates line is clear of vehicles.</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">LINE OCCUPIED RED</td>
                            <td className="border border-white/20 p-3">Indicates line is occupied.</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">SNKE YELLOW</td>
                            <td className="border border-white/20 p-3">It is provided near TRAIN GOING TO directional Arrow head. When lit yellow it indicates LSS, First stop signal & controls on signals are at ON/ Normal.</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">SNOEK YELLOW</td>
                            <td className="border border-white/20 p-3">It is provided near TRAIN COMING FROM with directional arrowhead. When lit, it indicates LSS, FSS, Controls are normal and TCF indication is not available at station on other end of block section.</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">SM KEY(IN) GREEN</td>
                            <td className="border border-white/20 p-3">Indicates SM Key is &apos;IN&apos; and turned.</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">SHK-IN/OUT GREEN/RED</td>
                            <td className="border border-white/20 p-3">When lit Green indicates Shunting Key has not been taken out. When lit Red indicates Shunting Key has been extracted.</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">TRAIN ACKNOWLEDGEMENT IN/OUT YELLOW</td>
                            <td className="border border-white/20 p-3">Lit at the time of train entry into and exit from the block section. It remains lit until acknowledged.</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">CO-OPERATION TIMER</td>
                            <td className="border border-white/20 p-3">It starts flashing when cancellation process starts and flashes for 120 seconds.</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">SSBPAC OK indication</td>
                            <td className="border border-white/20 p-3">Where provided, glows GREEN when SSBPAC (D) is OK otherwise Extinguished.</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">SSBPAC FAIL indication</td>
                            <td className="border border-white/20 p-3">Where provided, glows RED when SSBPAC (D) goes into a failure mode otherwise Extinguished.</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">Communication LINK FAIL indication</td>
                            <td className="border border-white/20 p-3">Glows steady YELLOW when LINK FAILS otherwise flickering.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <h5 className="text-blue-300 font-bold lg:text-lg text-base mb-4">iv) COUNTERS</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-white/20">
                        <thead>
                          <tr className="bg-white/10">
                            <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Counters</th>
                            <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Functions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">CANCEL</td>
                            <td className="border border-white/20 p-3">It keeps record of cancellation of &apos;line clear&apos; when train has not entered block section or train has been done &apos;push back&apos; operation.</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">RESET</td>
                            <td className="border border-white/20 p-3">Reset Counter on block panel at the station where Axle Counter Reset Key is provided. It keeps record of number of successful resets of Axle Counter.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <h5 className="text-blue-300 font-bold lg:text-lg text-base mb-4">v) BUZZERS</h5>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-white/20">
                        <thead>
                          <tr className="bg-white/10">
                            <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Buzzers</th>
                            <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Functions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">BLOCK</td>
                            <td className="border border-white/20 p-3">It gives signal as per BELL CODE sent by operator at station at other end of block section.</td>
                          </tr>
                          <tr>
                            <td className="border border-white/20 p-3 font-bold text-blue-300">SECTION</td>
                            <td className="border border-white/20 p-3">Its audible signal informs SM that train has either occupied or cleared the Block Section.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <h5 className="text-blue-300 font-bold lg:text-lg text-base mb-3">vi) BLOCK TELEPHONE:</h5>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">For Speech Communication with SM at other end of Block Section.</p>
                  </div>

                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <h5 className="text-blue-300 font-bold lg:text-lg text-base mb-3">vii) SHUNT KEY OF EKT:</h5>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                      An auxiliary EKT is provided with SM&apos;s Block Panel to serve as SHUNTING Authority. The Key of this transmitter is normally &apos;IN&apos; and taken &apos;OUT&apos; to use as tangible authority given to Driver of a train to perform shunting upto opposing First Stop Signal (FSS). Released when SHUNT RELEASE KEY of Block Panel is turned to &apos;IN&apos;.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-base">a</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-blue-300 font-bold lg:text-lg text-base mb-3">Indoor Apparatus:</h4>
                        <h5 className="text-blue-300 font-bold lg:text-base text-sm mb-2">Electric Lock on Last Stop Signal:</h5>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                          An electric lock is provided on the Last Stop Signal lever which is released only when &apos;Train Going To&apos; indication is displayed on the block instrument of the concerned block section.
                        </p>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="font-bold text-blue-300">Note:</span> The above lever lock is dispensed with in case of single line tokenless block instrument with colour light signals.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-base">b</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-blue-300 font-bold lg:text-lg text-base mb-3">Outdoor Apparatus:</h4>
                        <div className="space-y-4 ml-2">
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                <span className="text-white font-medium text-xs">i</span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h5 className="text-blue-300 font-bold lg:text-base text-sm mb-2">First Vehicle Track Circuit:</h5>
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                This is fixed slightly in advance of the Last Stop Signal. As soon as the engine or first vehicle of a train going from &apos;X&apos; to &apos;Y&apos; passes over this FVT, the indication &apos;TOL&apos; is displayed automatically on the Block panel at stations &apos;X&apos; and &apos;Y&apos;. In addition, an audible warning sounds at the receiving and sending stations, until acknowledged by the receiving and sending stations.
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                <span className="text-white font-medium text-xs">ii</span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h5 className="text-blue-300 font-bold lg:text-base text-sm mb-2">Electrical Signal Reverser:</h5>
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                This equipment is provided where Semaphore Signalling is adopted and is actuated by the First Vehicle Track Circuit and it replaces the Last Stop Signal at &apos;X&apos; to &apos;ON&apos; immediately the engine or the first vehicle of the train going to &apos;Y&apos; passes over the FVT.
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow">
                                <span className="text-white font-medium text-xs">iii</span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h5 className="text-blue-300 font-bold lg:text-base text-sm mb-2">Last Vehicle Track Circuit:</h5>
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                                This is provided at an adequate distance beyond First Stop Signal. When the last vehicle of the train passes over this LVT, the buzzer gives alarm at &apos;Y&apos; and continue to do so until &apos;Y&apos; replaces the SM&apos;s Control slide/lever/knob for the First Stop Signal to normal.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-base">c</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-blue-300 font-bold lg:text-lg text-base mb-3">Resetting of Axle counter:</h4>
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                          After complete arrival of the train or after the shunting is completed or when no train entered the block section, if the &apos;Section occupied&apos; indication (Red) is lit, the Station Masters at both ends of the block section shall arrange for resetting of the Axle Counter. Station Master at &apos;Evaluator end&apos; Block Panel resets the axle counter with the co-operation of the &apos;Non evaluator end&apos; of Block panel Station Master. Non-evaluator end Block panel Station Master presses the Axle Counter reset button on his Block panel. Evaluator end Block panel Station Master on receiving the Axle Counter reset co-operation indication, inserts the resetting key, unlocks and presses the resetting button. Before resetting the Axle Counter, it has to be verified that the block section is clear. The following shall be ensured by the Station Masters on both ends of block section.
                        </p>
                        <div className="space-y-4">
                          <div>
                            <h5 className="text-blue-300 font-bold lg:text-base text-sm mb-2">I. Receiving end Station Master-</h5>
                            <div className="ml-4 space-y-2">
                              <p>i. Get the particulars of the last train despatched by the sending end Station Master supported by Private Number;</p>
                              <p>ii. Ensure that the last despatched train has arrived complete into his station by verifying the Tail board/ Flashing Tail lamp.</p>
                              <p>iii. If there is no Tail board/ Flashing Tail lamp, the Station Master on duty shall send &quot;Train passed without tail board/ Flashing tail lamp&quot; signal to concerned station and wait for confirmation about complete arrival of the train supported by Private Number (e.g. presuming a train from &apos;X&apos; passed through &apos;Y&apos; without tail board/lamp to Z, then &apos;Y&apos; sends &quot;Train passed without tail board/ Flashing tail lamp signal to Z).</p>
                            </div>
                          </div>
                          <div>
                            <h5 className="text-blue-300 font-bold lg:text-base text-sm mb-2">II. Sending end Station Master-</h5>
                            <p className="ml-4">He shall give the particulars of the last train he has despatched to the receiving station and give Private Number.</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
export default BWMPartBPage11