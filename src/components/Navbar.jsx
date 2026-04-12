import React from 'react'

const Navbar = ({ scrolled }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-semibold text-spiced-earth">HeatWear</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-golden-hour transition-colors">Features</a>
            <a href="#how" className="text-sm font-medium hover:text-golden-hour transition-colors">How It Works</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-golden-hour transition-colors">Testimonials</a>
          </div>

          <div>
            <button className="bg-spiced-earth text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all transform hover:scale-105">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
