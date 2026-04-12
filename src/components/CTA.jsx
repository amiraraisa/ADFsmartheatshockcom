import React, { useState } from 'react'

const CTA = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would integrate with your backend
    console.log('Email submitted:', email)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-spiced-earth via-mossy-grove to-spiced-earth text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Start Your Healing Journey
        </h2>

        <p className="text-xl mb-10 text-white/90">
          Join our waitlist and be the first to experience prescription-based smart heat therapy
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-golden-hour/50"
            />
            <button
              type="submit"
              className="bg-golden-hour text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </div>
        </form>

        {submitted && (
          <div className="bg-green-500 text-white px-6 py-3 rounded-full inline-block mb-4 animate-fade-in">
            ✓ Successfully joined the waitlist!
          </div>
        )}

        <p className="text-lg text-white/80">
          ⚕️ Early access for patients with prescriptions + 30% discount
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl mb-2">🔒</div>
            <div className="text-sm text-white/80">HIPAA Compliant</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">⚕️</div>
            <div className="text-sm text-white/80">Medical-Grade</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🏆</div>
            <div className="text-sm text-white/80">FDA Registered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🌐</div>
            <div className="text-sm text-white/80">Cloud-Based</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
