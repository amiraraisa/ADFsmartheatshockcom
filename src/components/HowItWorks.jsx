import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Set Up Profile',
      description: 'Create account and upload prescription details from your doctor',
      icon: '📋'
    },
    {
      number: '02',
      title: 'Connect Socks',
      description: 'Pair your smart socks with the web platform via WiFi/Bluetooth',
      icon: '📱'
    },
    {
      number: '03',
      title: 'Monitor in Real-Time',
      description: 'Dashboard shows live foot condition updates every few seconds',
      icon: '📊'
    },
    {
      number: '04',
      title: 'Auto-Adjust',
      description: 'System automatically controls heat based on your condition and prescription',
      icon: '🎯'
    }
  ]

  return (
    <section id="how" className="py-24 px-6 bg-gradient-to-b from-desert-sand/30 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          How It Works
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Get started in 4 simple steps
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-golden-hour to-clay-blossom -z-10"></div>
              )}

              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="text-7xl">{step.icon}</div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-golden-hour text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-spiced-earth">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-spiced-earth text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
