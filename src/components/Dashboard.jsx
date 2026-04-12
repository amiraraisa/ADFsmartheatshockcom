import React, { useState, useEffect } from 'react'

const Dashboard = () => {
  const [temp, setTemp] = useState(38.5)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTemp(prev => {
        const change = (Math.random() - 0.5) * 0.5
        return Math.max(37, Math.min(42, prev + change))
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 px-6 bg-spiced-earth text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Your Personal Health Dashboard
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Monitor and control your heat therapy from a powerful web platform
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            {/* Dashboard Header */}
            <div className="bg-desert-sand px-8 py-4 flex items-center justify-between border-b border-gray-200">
              <div className="flex gap-8 text-sm font-medium text-gray-700">
                <span className="border-b-2 border-golden-hour pb-2 text-spiced-earth">Dashboard</span>
                <span className="opacity-60">History</span>
                <span className="opacity-60">Prescription</span>
                <span className="opacity-60">Settings</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-sm text-gray-500 mb-2">Current Temperature</div>
                  <div className="text-4xl font-bold text-golden-hour mb-1">
                    {temp.toFixed(1)}°C
                  </div>
                  <div className="text-sm text-green-600 flex items-center gap-1">
                    <span className="inline-block w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                    Optimal Range
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-sm text-gray-500 mb-2">Foot Condition</div>
                  <div className="text-4xl font-bold text-clay-blossom mb-1">Good</div>
                  <div className="text-sm text-gray-600">Improving circulation</div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-sm text-gray-500 mb-2">Session Time</div>
                  <div className="text-4xl font-bold text-mossy-grove mb-1">45 min</div>
                  <div className="text-sm text-gray-600">15 min remaining</div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-sm font-semibold text-gray-700 mb-4">Temperature History</div>
                <div className="h-40 bg-gradient-to-r from-golden-hour/10 via-clay-blossom/10 to-golden-hour/10 rounded-xl flex items-end justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">📈</div>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">Live monitoring active</div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
            <div>
              <div className="text-3xl font-bold text-golden-hour mb-2">Every 3-5s</div>
              <p className="text-white/80">Real-time data updates</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-golden-hour mb-2">Automatic</div>
              <p className="text-white/80">Smart prescription adjustments</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-golden-hour mb-2">Anywhere</div>
              <p className="text-white/80">Access from any device</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
