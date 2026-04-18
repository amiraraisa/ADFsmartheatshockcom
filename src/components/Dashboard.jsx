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
            <img
              src="https://iili.io/Bgq7UB4.md.png"
              alt="HeatWear Analytics Dashboard"
              className="w-full h-auto"
            />
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
