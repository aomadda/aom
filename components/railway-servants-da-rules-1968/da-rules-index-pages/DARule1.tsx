'use client'
import React from 'react'
import { 
  Scale,
  BookOpen,
  List
} from 'lucide-react'

const DARule1 = () => {
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
              DISCIPLINARY & APPEAL RULES
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">PART - I</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">GENERAL</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Railway Servants (Discipline & Appeal) Rules, 1968 - Rule 1
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Short title and commencement */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                1. Short title and commencement
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <ol className="space-y-6 list-none">
                  <li className="flex items-start gap-4">
                    <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-br from-blue-500 via-cyan-400 to-blue-900 shadow-lg border border-blue-300">
                      <span className="text-white text-xl font-bold">1</span>
                    </span>
                    <span className="text-gray-100 lg:text-lg text-base leading-relaxed bg-linear-to-r from-cyan-800/40 via-blue-900/30 to-purple-900/10 px-4 py-3 rounded-xl border border-blue-300/20 shadow">
                      <span className="font-semibold text-cyan-200 block">These rules may be called The Railway Servants (Discipline & Appeal) Rules, 1968.</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-br from-blue-500 via-cyan-400 to-blue-900 shadow-lg border border-blue-300">
                      <span className="text-white text-xl font-bold">2</span>
                    </span>
                    <span className="text-gray-100 lg:text-lg text-base leading-relaxed bg-linear-to-r from-cyan-800/40 via-blue-900/30 to-purple-900/10 px-4 py-3 rounded-xl border border-blue-300/20 shadow">
                      <span className="font-semibold text-cyan-200 block">They shall come into force on the 1st day of October, 1968.</span>
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Notifications Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <List className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Published with the Ministry of Railways (Railway Board) Notifications
              </h2>
              <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-orange-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-gray-200 lg:text-base text-sm leading-relaxed space-y-2">
                    <p>1. S.O. No.1531 dated the 26th April, 1969</p>
                    <p>2. S.O. No.1925 dated the 8th May, 1971</p>
                    <p>3. S.O. No.2501 dated the 3rd July, 1971</p>
                    <p>4. S.O. No.5078 dated the 6th November, 1971</p>
                    <p>5. S.O. No.4050 dated the 30th October, 1971</p>
                    <p>6. S.O. No.5264 dated the 4th December, 1971</p>
                    <p>7. S.O. No.9467 dated the 8th April, 1972</p>
                    <p>8. S.O. No.3918 dated the 25th November, 1972</p>
                    <p>9. Notification No.E(D&A) 69 RG 6-9 dated the 5th February, 1973</p>
                    <p>10. S.O. No.2897 dated the 6th October, 1973</p>
                    <p>11. S.O. No.1413 dated the 14th May, 1977</p>
                    <p>12. S.O. No.2193 dated the 29th July, 1978</p>
                    <p>13. S.O. No.364 dated the 23rd December, 1978</p>
                    <p>14. Notification No.E(D&A) 77 RG 6-30 dated the 7th April, 1978</p>
                    <p>15. S.O. No.3057 dated the 8th September, 1979</p>
                    <p>16. S.O. No.3777 dated the 17th November, 1979</p>
                    <p>17. S.O. No.3990 dated the 8th December, 1979</p>
                    <p>18. S.O. No.143 dated the 19th January, 1980</p>
                    <p>19. S.O. No.441 dated the 23rd February, 1980</p>
                    <p>20. Notification No.E(D&A) 81 RG 6-72 dated the 31st August, 1982</p>
                    <p>21. GSR No.982 dated the 17th December,1983</p>
                    <p>22. GSR No.632 dated the 23rd June, 1984</p>
                    <p>23. S.O. No.1822 dated the 27th April, 1985</p>
                    <p>24. S.O. No.5667 dated the 6th July, 1985</p>
                    <p>25. GSR No.667 dated the 22nd February, 1986</p>
                    <p>26. GSR No.241 dated the 4th April, 1987</p>
                    <p>27. GSR No.708 dated the 19th September, 1987</p>
                    <p>2</p>
                    <p>28. GSR No.869 dated the 21st November, 1987</p>
                  </div>
                  <div className="text-gray-200 lg:text-base text-sm leading-relaxed space-y-2">
                    <p>29. GSR No.420 dated the 21st May, 1988</p>
                    <p>30. GSR No.739 dated the 17th September, 1988</p>
                    <p>31. GSR No.850 dated the 11th November, 1989</p>
                    <p>32. GSR No.900 dated the 2nd December, 1989</p>
                    <p>33. GSR No.734 dated the 8th December, 1990</p>
                    <p>34. GSR No.723 dated the 1st December, 1990</p>
                    <p>35. Notification No.E(D&A) 91 RG 6-42 dated the 8th June, 1991</p>
                    <p>36. GSR No.568 dated the 5th October, 1991</p>
                    <p>37. GSR No.86 dated the 22nd February, 1992</p>
                    <p>38. GSR No.504 dated the 14th November, 1989</p>
                    <p>39. Notification No.E(D&A) 92 RG 6-148 dated the 9th November, 1992</p>
                    <p>40. GSR No.63 dated the 30th January, 1993</p>
                    <p>41. GSR No.327 dated the 16th July, 1994</p>
                    <p>42. GSR No.106 dated the 6th June, 1998</p>
                    <p>43. GSR No.422 dated the 27th December, 1997</p>
                    <p>44. GSR No.87 dated the 20th March, 1999</p>
                    <p>45. GSR No.385 dated the 20th November, 1999</p>
                    <p>46. GSR No.617 dated the 24th November, 2001</p>
                    <p>47. GSR No.342 dated the 24th August, 2002</p>
                    <p>48. GSR No.50 dated the 1st February, 2003</p>
                    <p>49. GSR No.134 dated the 29th March, 2003</p>
                    <p>50. GSR No.376 dated the 30th October, 2004</p>
                    <p>51. GSR No.62 dated the 19th February, 2005</p>
                    <p>52. GSR No.195 dated the 11th June, 2005</p>
                    <p>53. GSR No.226 dated the 9th July, 2005</p>
                    <p>54. GSR No.190 dated the 29th July,2006.</p>
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

export default DARule1