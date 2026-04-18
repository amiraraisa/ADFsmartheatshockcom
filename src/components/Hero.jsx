import React from 'react'

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-desert-sand/30 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Medical-Grade
            <br />
            <span className="gradient-text">Smart Heat Therapy</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
            Connected smart socks with real-time monitoring and prescription-based temperature control
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-spiced-earth text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
              Get Early Access
            </button>
            <button className="border-2 border-spiced-earth text-spiced-earth px-8 py-4 rounded-full text-lg font-medium hover:bg-spiced-earth hover:text-white transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-golden-hour mb-2">Real-Time</h3>
            <p className="text-gray-600">Temperature Monitoring</p>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-3xl font-bold text-golden-hour mb-2">Prescription</h3>
            <p className="text-gray-600">Integration</p>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold text-golden-hour mb-2">Web Dashboard</h3>
            <p className="text-gray-600">Remote Control</p>
          </div>
        </div>

        {/* Product Visualization */}
        <div className="mt-20">
          <div className="relative w-full max-w-2xl mx-auto aspect-[4/3] bg-gradient-to-br from-golden-hour/20 via-clay-blossom/20 to-mossy-grove/20 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <img
                src="https://iili.io/Bgq7UB4.md.png"
                alt="Smart Heat Socks Product"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
