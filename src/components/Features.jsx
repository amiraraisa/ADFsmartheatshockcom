import React from 'react'

const Features = () => {
  const features = [
    {
      icon: '⚕️',
      title: 'Prescription Integration',
      description: 'Upload your doctor\'s prescription and our system automatically configures treatment parameters',
      featured: true
    },
    {
      icon: '📡',
      title: 'Live Condition Updates',
      description: 'See real-time data every few seconds: temperature, foot condition, circulation metrics',
      featured: true
    },
    {
      icon: '🎯',
      title: 'Auto-Adjustment Algorithm',
      description: 'Smart system analyzes your foot condition and automatically adjusts heat intensity',
      featured: true
    },
    {
      icon: '🌡️',
      title: 'Multi-Zone Control',
      description: 'Independent temperature control for toes, arch, and heel areas',
      featured: false
    },
    {
      icon: '📊',
      title: 'Treatment History',
      description: 'Track your therapy sessions and progress over time with detailed analytics',
      featured: false
    },
    {
      icon: '🔔',
      title: 'Smart Alerts',
      description: 'Get notified about treatment completion, battery status, and temperature anomalies',
      featured: false
    },
    {
      icon: '👨‍⚕️',
      title: 'Doctor Portal Access',
      description: 'Share your treatment data with healthcare providers for better monitoring',
      featured: false
    },
    {
      icon: '🔒',
      title: 'Medical-Grade Security',
      description: 'HIPAA-compliant data encryption ensures your health information stays private',
      featured: false
    },
    {
      icon: '💻',
      title: 'Multi-Device Access',
      description: 'Access your dashboard from desktop, tablet, or mobile anywhere',
      featured: false
    }
  ]

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Features
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Everything you need for medical-grade heat therapy
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                feature.featured
                  ? 'bg-gradient-to-br from-golden-hour/10 to-clay-blossom/10 border-2 border-golden-hour/30'
                  : 'bg-gray-50 hover:bg-white border-2 border-transparent hover:border-gray-200'
              }`}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-spiced-earth">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
