'use client'
import React from 'react'
import { 
  Calculator,
  TrendingUp,
  Building,
  DollarSign,
  Clock,
  Train,
  Settings,
  BarChart3,
  Target,
  FileText,
  Calendar,
  Wrench,
  MapPin,
  Factory,
  ShoppingCart,
  Car,
  Package,
  Leaf,
  Zap,
  Percent,
  Info,
  Lightbulb,
  Route,
  Plus,
} from 'lucide-react'

const OMPage109 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <Calculator className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Financial Internal Rate of Return
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive methodology for calculating FIRR across Indian Railways projects, ensuring standardized financial appraisal and project evaluation.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Introduction Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                FIRR Methodology Overview
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                  <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                    In order to streamline and standardize calculation of FIRR across Indian Railways, an approach paper has been developed. The methodology explained in the approach paper is based on the Finance Code issued by Indian Railways and best practices being followed by Zonal Railways.
                  </p>
                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <p className="text-white text-sm">
                      <strong>Purpose:</strong> This methodology is adopted while calculating Financial Internal Rate of Return (FIRR) for the projects at the time of preparation of the Detailed Project Reports for New Line, Doubling, Gauge Conversion and Traffic facilities.
                    </p>
                    <div className="mt-3 p-3 bg-blue-500/10 rounded-lg border border-blue-400/20">
                      <p className="text-blue-200 text-sm">
                        <strong>Note:</strong> Associate Finance ensures that the guidelines set out in this model are scrupulously followed before being vetted.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Appraisal Phases Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Target className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Financial Appraisal Phases
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <p className="text-white lg:text-base text-sm leading-relaxed mb-6">
                  Financial appraisal of a railway project consists of following phases and inputs:
                </p>
                
                {/* Construction Phase */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 mb-6">
                  <div className="flex items-center mb-4 justify-center text-center lg:flex-row flex-col">
                    <div className="bg-green-500/20 p-2 rounded-full mr-3">
                      <Building className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-green-300">Construction Phase</h3>
                  </div>
                  <div className="space-y-4">
                    
                    {/* Asset Development */}
                    <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                      <h4 className="text-sm font-semibold text-green-300 mb-2 flex items-center lg:flex-row flex-col justify-center text-center gap-3">
                        <Wrench className="w-4 h-4 mr-2" />
                        Asset Development
                      </h4>
                      <p className="text-white lg:text-base text-sm leading-relaxed mb-2">
                        The project estimate should be as economical as possible. The project cost should consider all incidental cost, inflation/escalation and interest, if any, as on the date of commissioning of the project.
                      </p>
                      <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                        <p className="text-sm text-gray-300 mb-2"><strong>Project Cost Includes:</strong></p>
                        <div className="flex flex-wrap gap-2 flex-col">
                          <span className="text-sm text-gray-300 bg-white/5 p-1 rounded flex items-center gap-3"><MapPin className="w-3 h-3" /> Land</span>
                          <span className="text-sm text-gray-300 bg-white/5 p-1 rounded flex items-center gap-3"><Building className="w-3 h-3" /> Civil-Building & Bridges</span>
                          <span className="text-sm text-gray-300 bg-white/5 p-1 rounded flex items-center gap-3"><Route className="w-3 h-3" /> Civil-P way</span>
                          <span className="text-sm text-gray-300 bg-white/5 p-1 rounded flex items-center gap-3"><Zap className="w-3 h-3" /> Electrical</span>
                          <span className="text-sm text-gray-300 bg-white/5 p-1 rounded flex items-center gap-3"><Wrench className="w-3 h-3" /> Mechanical</span>
                          <span className="text-sm text-gray-300 bg-white/5 p-1 rounded flex items-center gap-3"><Train className="w-3 h-3" /> Rolling stock & S&T costs</span>
                        </div>
                      </div>
                      <p className="text-white lg:text-base text-sm leading-relaxed mt-2">
                        <strong>Requirement:</strong> The estimate should be approved by the General Manager of the zone and vetted by the Associate Finance.
                      </p>
                    </div>

                    {/* Interest and Inflation */}
                    <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                      <h4 className="text-sm font-semibold text-green-300 mb-2 flex items-center lg:flex-row flex-col justify-center text-center gap-3">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Interest and Inflation During Construction
                      </h4>
                      <p className="text-white lg:text-base text-sm leading-relaxed mb-2">
                        The project cost is generally arrived at the prevailing cost indices whereas the construction period lasts for longer period. Accordingly, inflation has to be factored in for the construction period.
                      </p>
                      <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                        <p className="lg:text-base text-sm text-gray-300 mb-2"><strong>Key Points:</strong></p>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li className="flex items-center gap-3"><TrendingUp className="w-3 h-3" /> WPI captures overall inflationary impact</li>
                          <li className="flex items-center gap-3"><Percent className="w-3 h-3" /> Escalation of 5% annually during construction recommended</li>
                          <li className="flex items-center gap-3"><Calendar className="w-3 h-3" /> Inflation considered from second year onwards</li>
                        </ul>
                      </div>
                    </div>

                    {/* Rolling Stock */}
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <h4 className="text-sm font-semibold text-green-300 mb-2 flex items-center lg:flex-row flex-col justify-center text-center gap-3">
                        <Train className="w-4 h-4 mr-2" />
                        Rolling Stock
                      </h4>
                      <p className="text-white lg:text-base text-sm leading-relaxed mb-2">
                        In accordance with the Para 208 Finance Code Volume 1, if the line capacity work is undertaken on account of increase in traffic and in case there is a construction of new line then in such scenarios the project cost should invariably include cost of rolling stock.
                      </p>
                      <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                        <p className="lg:text-base text-sm text-gray-300 mb-2"><strong>Requirements:</strong></p>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li className="flex items-center gap-3"><Package className="w-3 h-3" /> Procurement of initial rolling stock in year of completion</li>
                          <li className="flex items-center gap-3"><Target className="w-3 h-3" /> Requirement aligned to traffic projections</li>
                          <li className="flex items-center gap-3"><Plus className="w-3 h-3" /> Additional rolling stock as and when required</li>
                          <li className="flex items-center gap-3"><DollarSign className="w-3 h-3" /> Cost based on latest accepted rates (LAR)</li>
                        </ul>
                      </div>
                    </div>

                    {/* Credit from Rail Released Material */}
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <h4 className="text-sm font-semibold text-green-300 mb-2 flex items-center lg:flex-row flex-col justify-center text-center gap-3">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Credit from Rail Released Material (CRRM)
                      </h4>
                      <p className="text-white lg:text-base text-sm leading-relaxed mb-2">
                        In case of Railway projects which are brownfield in nature, there are released materials which lead to cash inflow to the projects. Same should be considered as credit to the project.
                      </p>
                      <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                        <p className="lg:text-base text-sm text-gray-300 mb-2"><strong>CRRM Guidelines:</strong></p>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li className="flex items-center gap-3"><BarChart3 className="w-3 h-3" /> CRRM should be shown separately while determining FIRR</li>
                          <li className="flex items-center gap-3"><Calendar className="w-3 h-3" /> Considered in the year of realization of money</li>
                          <li className="flex items-center gap-3"><Target className="w-3 h-3" /> Estimated by respective project team on best estimate basis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Operation Phase */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20 mb-6">
                  <div className="flex items-center mb-4 justify-center text-center lg:flex-row flex-col">
                    <div className="bg-emerald-500/20 p-2 rounded-full mr-3">
                      <Settings className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-emerald-300">Operation Phase</h3>
                  </div>
                  <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                    The following aspects are assessed/used in the operation phase of the appraisal.
                  </p>
                  
                  <div className="space-y-4">
                    {/* Earnings Goods & Coaching */}
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <h4 className="text-sm font-semibold text-emerald-300 mb-2 flex items-center lg:flex-row flex-col justify-center text-center gap-3">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Earnings Goods & Coaching
                      </h4>
                      <p className="text-white text-sm leading-relaxed mb-2"> 
                        In case of the projects which results into additional revenue from goods/coaching, the same should be calculated based on traffic projections. The revenue for the first year of commissioning of the project should be calculated.
                      </p>
                      <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                        <p className="text-sm text-gray-300 mb-2"><strong>Estimation Factors:</strong></p>
                        <div className="flex flex-wrap gap-2 flex-col">
                          <div>
                            <p className="text-sm text-gray-300 font-semibold mb-1">Traffic Analysis:</p>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li className="flex items-center gap-3"><Package className="w-3 h-3" /> Outward traffic</li>
                              <li className="flex items-center gap-3"><Package className="w-3 h-3" /> Inward traffic</li>
                              <li className="flex items-center gap-3"><Route className="w-3 h-3" /> Cross Traffic</li>
                              <li className="flex items-center gap-3"><Route className="w-3 h-3" /> Long distance traffic</li>
                              <li className="flex items-center gap-3"><Route className="w-3 h-3" /> Short distance traffic</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-sm text-gray-300 font-semibold mb-2 mt-2">Area Development:</p>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li className="flex items-center gap-3"><DollarSign className="w-3 h-3" /> Economic condition</li>
                              <li className="flex items-center gap-3"><Leaf className="w-3 h-3" /> Agricultural development</li>
                              <li className="flex items-center gap-3"><Factory className="w-3 h-3" /> Industrial development</li>
                              <li className="flex items-center gap-3"><ShoppingCart className="w-3 h-3" /> Existing market</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-2 pt-2 border-t border-white/10">
                          <p className="text-sm text-gray-300 font-semibold mb-1">Operational Details:</p>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li className="flex items-center gap-3"><Train className="w-3 h-3" /> Number of Coaching trains proposed</li>
                            <li className="flex items-center gap-3"><Car className="w-3 h-3" /> Number of Coaches</li>
                            <li className="flex items-center gap-3"><Package className="w-3 h-3" /> Carrying capacity of each coach/rake</li>
                            <li className="flex items-center gap-3"><Route className="w-3 h-3" /> Number of trips proposed in the section</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Working Expense */}
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <h4 className="text-sm font-semibold text-emerald-300 mb-2 flex items-center lg:flex-row flex-col justify-center text-center gap-3">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Working Expense Goods & Coaching
                      </h4>
                      <p className="text-white text-xs leading-relaxed mb-2">
                        The working expense related to goods and coaching are calculated on the basis of the benchmark rates published by the statistical department of Railway Board from time to time as available in Annual statistical statement (ASS).
                      </p>
                      <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                        <p className="text-sm text-gray-300 mb-2"><strong>Expenditure Heads:</strong></p>
                        <div className="flex flex-wrap gap-2 flex-col">
                          <ul className="text-sm text-gray-300 space-y-4">
                            <li className="flex items-center gap-3"><Wrench className="w-3 h-3" /> Maintenance of structural work</li>
                            <li className="flex items-center gap-3"><Train className="w-3 h-3" /> Maintenance of supply of locomotive power</li>
                            <li className="flex items-center gap-3"><Car className="w-3 h-3" /> Maintenance and supply of carriage and wagons</li>
                            <li className="flex items-center gap-3"><TrendingUp className="w-3 h-3" /> Expenses on traffic developments</li>
                          </ul>
                          <ul className="text-sm text-gray-300 space-y-4">
                            <li className="flex items-center gap-3"><Lightbulb className="w-3 h-3" /> Expenses on general developments</li>
                            <li className="flex items-center gap-3"><Zap className="w-3 h-3" /> Expenses on electrical developments</li>
                            <li className="flex items-center gap-3"><Info className="w-3 h-3" /> Miscellaneous expenses</li>
                          </ul>
                        </div>
                        <div className="mt-2 pt-2 border-t border-white/10 bg-yellow-500/10 p-2 rounded">
                          <p className="text-sm text-yellow-200">
                            <strong>Productive Test:</strong> It is seen what would be the return after 6 years and 11 years, taking the life period of the line as 30 years.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Detention Savings */}
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <h4 className="text-sm font-semibold text-emerald-300 mb-2 flex items-center lg:flex-row flex-col justify-center text-center gap-3">
                        <Clock className="w-4 h-4 mr-2" />
                        Detention Savings Goods & Coaching
                      </h4>
                      <p className="text-white text-sm leading-relaxed mb-2">
                        The projects related to line capacity work leads to savings in detention time of rolling stock. This saves cost of procurement of additional rolling stock.
                      </p>
                      <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                        <p className="text-sm text-gray-300">
                          <strong>Calculation Basis:</strong> Saving should be calculated based on latest available Annual statistical statement (ASS) as published by statistics department of Railway Board from time to time.
                        </p>
                      </div>
                    </div>

                    {/* Asset Replacement */}
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <h4 className="text-sm font-semibold text-emerald-300 mb-2 flex items-center lg:flex-row flex-col justify-center text-center gap-3">
                        <Wrench className="w-4 h-4 mr-2" />
                        Asset Replacement
                      </h4>
                      <p className="text-white text-sm leading-relaxed mb-2">
                        The assets deployed during the project have certain useful life. These assets are expected to last for useful life. Accordingly, the replacement of any asset should be considered only on expiry of its useful life.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terminal Phase */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                  <div className="flex items-center mb-4 justify-center text-center lg:flex-row flex-col">  
                    <div className="bg-teal-500/20 p-2 rounded-full mr-3">
                      <Calendar className="w-5 h-5 text-teal-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-teal-300">Terminal Phase</h3>
                  </div>
                  <p className="text-white text-sm leading-relaxed mb-4">
                    It is the final phase of the financial appraisal in which the following points are taken into account.
                  </p>
                  
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-teal-300 mb-2 flex items-center lg:flex-row flex-col justify-center text-center gap-3">
                          <Clock className="w-4 h-4 mr-2" />
                          Project Life
                        </h4>
                        <p className="text-white text-sm leading-relaxed">
                          Project life should be considered as 30 years from the date of Commissioning as per Para 345 of Indian Railways Engineering Code.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-teal-300 mb-2 flex items-center lg:flex-row flex-col justify-center text-center gap-3">
                          <DollarSign className="w-4 h-4 mr-2" />
                          Residual Value
                        </h4>
                        <p className="text-white lg:text-base text-sm leading-relaxed">
                          At the end of the project life cycle, project cash flow considers the residual value of the assets. The residual value should be the balance useful life of the assets if available.
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <p className="text-white lg:text-base text-sm leading-relaxed">
                        <strong>Terminal Value Guidelines:</strong> Terminal value other than land, preliminary and earthwork/formation should be based on useful life of assets. Terminal value of land, preliminary and earthwork/formation should be the actual cost incurred on these items. Terminal value of replacement capex should also be considered while calculating FIRR based on residual life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Standard Assumptions Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center gap-3">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Calculator className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Standard Assumptions for FIRR Calculation
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "1. Growth Factor",
                      color: "text-purple-300",
                      border: "border-purple-400/30",
                      bg: "bg-gradient-to-br from-purple-900/60 to-purple-700/40",
                      desc: "The Year on Year Growth factor for earning is considered 5% based on 30 year historical CAGR of average earning from passenger and freight per KM. The growth factor for expenditure purpose is 5%."
                    },
                    {
                      title: "2. Interest During Construction",
                      color: "text-pink-300",
                      border: "border-pink-400/30",
                      bg: "bg-gradient-to-br from-pink-900/60 to-pink-700/40",
                      desc: "Interest has to be calculated only for projects funded through EBR/IF."
                    },
                    {
                      title: "3. Project Cost",
                      color: "text-blue-300",
                      border: "border-blue-400/30",
                      bg: "bg-gradient-to-br from-blue-900/60 to-blue-700/40",
                      desc: "The cash outgo for the project should factor in inflation, escalation, interest etc. up to the date of completion. For financial appraisal, completion date should be 31st March of the financial year in which the project is completed."
                    },
                    {
                      title: "4. Replacement Cost",
                      color: "text-green-300",
                      border: "border-green-400/30",
                      bg: "bg-gradient-to-br from-green-900/60 to-green-700/40",
                      desc: "The assets should be replaced post completion of useful life and the replacement cost should consider inflationary impact of the asset value if any."
                    },
                    {
                      title: "5. Depreciation",
                      color: "text-yellow-300",
                      border: "border-yellow-400/30",
                      bg: "bg-gradient-to-br from-yellow-900/60 to-yellow-700/40",
                      desc: "Some DPRs consider depreciation as cash outgo while computing IRR. Depreciation is a non-cash item and should not be considered while arriving at discounted cash flow and FIRR."
                    },
                    {
                      title: "6. Non-Fare Revenue",
                      color: "text-indigo-300",
                      border: "border-indigo-400/30",
                      bg: "bg-gradient-to-br from-indigo-900/60 to-indigo-700/40",
                      desc: "There are various non-fare revenues which will also accrue due to new development in the form of advertisement, rental income, retails etc. The cash inflows due to Non Fare Revenue should be factored at the time of preparation of DPR."
                    },
                    {
                      title: "7. Time Series",
                      color: "text-red-300",
                      border: "border-red-400/30",
                      bg: "bg-gradient-to-br from-red-900/60 to-red-700/40",
                      desc: "FIRR calculation should consider the cash flow for the period of construction and 30 years of operations. The operation period should commence from 1st April of the year immediately after the financial year in which construction is completed."
                    },
                    {
                      title: "8. Reference Rates",
                      color: "text-teal-300",
                      border: "border-teal-400/30",
                      bg: "bg-gradient-to-br from-teal-900/60 to-teal-700/40",
                      desc: "The calculation considers rates from standards like Annual Statistical Statement (ASS), End result for Freight, End result for coaching and All India Engine Hour Cost."
                    }
                  ].map((item, idx) => (
                    <div
                      key={item.title}
                      className={`relative overflow-hidden ${item.bg} rounded-lg lg:p-6 p-4 mb-2 border ${item.border} shadow-md transition-all duration-300 hover:scale-[1.025]`}
                    >
                      <div className="flex items-start mb-3">
                        <span className={`flex items-center justify-center h-10 w-10 min-w-10 rounded-full bg-white/10 backdrop-blur-md font-bold text-lg shadow ${item.color} mr-4 border border-white/20`}>
                          {idx + 1}
                        </span>
                        <h3 className={`text-base font-semibold tracking-wide ${item.color} flex-1`} >
                          {item.title.replace(/^\d+\.\s/, '')}
                        </h3>
                      </div>
                      <p className="text-white lg:text-base text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* EIRR Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Calculator className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Economic Internal Rate of Return (EIRR)
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                  <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                    Likewise, EIRR (Economic Internal Rate of Return) is also calculated for assessing the projects. In this model, projects are evaluated beyond financial terms by including economic and social impact of the projects.
                  </p>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-white text-sm">
                      <strong>Final Output:</strong> The final survey report including all the above, is submitted in the form of a DPR – Detailed project report to the appropriate authority on the basis of the cost worked out.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Calculator className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                FIRR Calculation Summary
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-green-500/20 p-3 rounded-full inline-block mb-3">
                      <Building className="w-6 h-6 text-green-400" />
                    </div>
                    <h5 className="font-semibold text-green-300 mb-2">Construction Phase</h5>
                    <p className="text-sm text-gray-200">Asset development, inflation, rolling stock, CRRM considerations</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-blue-500/20 p-3 rounded-full inline-block mb-3">
                      <Settings className="w-6 h-6 text-blue-400" />
                    </div>
                    <h5 className="font-semibold text-blue-300 mb-2">Operation Phase</h5>
                    <p className="text-sm text-gray-200">Earnings, working expenses, detention savings, asset replacement</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-purple-500/20 p-3 rounded-full inline-block mb-3">
                      <Calendar className="w-6 h-6 text-purple-400" />
                    </div>
                    <h5 className="font-semibold text-purple-300 mb-2">Terminal Phase</h5>
                    <p className="text-sm text-gray-200">30-year project life, residual value calculations</p>
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

export default OMPage109