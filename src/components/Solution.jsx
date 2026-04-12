import React from 'react'

const Solution = () => {
  const benefits = [
    {
      title: 'Real-Time Foot Condition Monitoring',
      description: 'Get detailed updates every few seconds about your feet temperature, circulation, and comfort levels',
      icon: '📡'
    },
    {
      title: 'Prescription-Based Control',
      description: 'Upload your doctor\'s prescription and we\'ll automatically adjust heat settings to match medical requirements',
      icon: '⚕️'
    },
    {
      title: 'Intelligent Heat Adjustment',
      description: 'Algorithm analyzes your condition and automatically adjusts temperature for optimal therapeutic effect',
      icon: '🎯'
    },
    {
      title: 'Web Dashboard Access',
      description: 'Control everything from any device - adjust settings, view history, track progress from anywhere',
      icon: '💻'
    }
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-desert-sand/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Smart Socks +<br />
              <span className="gradient-text">Web Platform</span>
            </h2>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              HeatWear connects your therapeutic socks to a powerful web dashboard that monitors, analyzes, and adjusts heat therapy in real-time based on your medical needs.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-4 rounded-2xl hover:bg-white/50 transition-all"
                >
                  <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-spiced-earth">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="relative aspect-square bg-gradient-to-br from-golden-hour/30 via-clay-blossom/30 to-mossy-grove/30 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-4">📊</div>
                  <p className="text-xl font-semibold text-gray-700">Web Dashboard</p>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute top-8 right-8 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-sm text-gray-500">Temperature</div>
                <div className="text-2xl font-bold text-golden-hour">38.5°C</div>
              </div>

              <div className="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-sm text-gray-500">Status</div>
                <div className="text-lg font-bold text-green-600">● Active</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
