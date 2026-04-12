import React from 'react'

const Problem = () => {
  const problems = [
    {
      icon: '❄️',
      title: 'Cold Feet',
      description: 'Constant discomfort from cold extremities that traditional socks can\'t solve',
      color: 'from-blue-100 to-blue-50'
    },
    {
      icon: '⚡',
      title: 'Muscle Pain',
      description: 'Persistent aches and tension in your feet and lower legs affecting daily activities',
      color: 'from-clay-blossom/20 to-clay-blossom/10'
    },
    {
      icon: '💉',
      title: 'Poor Circulation',
      description: 'Reduced blood flow causing numbness, tingling, and health concerns',
      color: 'from-red-100 to-red-50'
    }
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Are You Struggling With...
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Millions of individuals experience these conditions daily
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-gradient-to-br hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="text-6xl mb-6">{problem.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-spiced-earth">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
