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
    <section className="py-24 px-6 bg-gradient-to-b from-white to-desert-sand/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-golden-hour">
            Web Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            HeatWear connects your therapeutic socks to a powerful web dashboard that monitors, analyzes, and adjusts heat therapy in real-time based on your medical needs.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Features */}
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-clay-blossom to-mossy-grove rounded-xl flex items-center justify-center text-2xl">
                  📡
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-spiced-earth mb-2">
                  Real-Time Foot Condition Monitoring
                </h3>
                <p className="text-gray-600">
                  Get detailed updates every few seconds about your feet temperature, circulation, and comfort levels
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-golden-hour to-clay-blossom rounded-xl flex items-center justify-center text-2xl">
                  ⚕️
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-spiced-earth mb-2">
                  Prescription-Based Control
                </h3>
                <p className="text-gray-600">
                  Upload your doctor's prescription and we'll automatically adjust heat settings to match medical requirements
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-mossy-grove to-golden-hour rounded-xl flex items-center justify-center text-2xl">
                  🎯
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-spiced-earth mb-2">
                  Intelligent Heat Adjustment
                </h3>
                <p className="text-gray-600">
                  Algorithm analyzes your condition and automatically adjusts temperature for optimal therapeutic effect
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-clay-blossom to-golden-hour rounded-xl flex items-center justify-center text-2xl">
                  💻
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-spiced-earth mb-2">
                  Web Dashboard Access
                </h3>
                <p className="text-gray-600">
                  Control everything from any device - adjust settings, view history, track progress
                </p>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-golden-hour/10 via-clay-blossom/10 to-mossy-grove/10 rounded-3xl p-8">
              {/* Temperature Card */}
              <div className="absolute top-8 right-8 bg-white rounded-2xl shadow-xl p-6 z-10 animate-float">
                <div className="text-sm text-gray-500 mb-1">Temperature</div>
                <div className="text-4xl font-bold text-golden-hour">
                  {temp.toFixed(1)}°C
                </div>
              </div>

              {/* Main Dashboard Card */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mt-20">
                <img
                  src="https://iili.io/Bgq7UB4.md.png"
                  alt="Web Analytics Dashboard"
                  className="w-full h-auto"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800">Web Dashboard</h3>
                </div>
              </div>

              {/* Status Card */}
              <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl p-6 z-10 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-sm text-gray-500 mb-2">Status</div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-xl font-bold text-green-600">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
