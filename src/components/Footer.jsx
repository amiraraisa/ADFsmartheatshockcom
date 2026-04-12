import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-spiced-earth text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">HeatWear</h3>
            <p className="text-white/70 text-sm">
              Medical-grade smart heat therapy for your feet
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-white/70 hover:text-golden-hour transition-colors">Features</a></li>
              <li><a href="#how" className="text-white/70 hover:text-golden-hour transition-colors">How It Works</a></li>
              <li><a href="#" className="text-white/70 hover:text-golden-hour transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-golden-hour transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-golden-hour transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-golden-hour transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-golden-hour transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-golden-hour transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-golden-hour transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-golden-hour transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-golden-hour transition-colors">Medical Disclaimer</a></li>
              <li><a href="#" className="text-white/70 hover:text-golden-hour transition-colors">HIPAA Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2026 HeatWear. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-golden-hour transition-colors">
              <span className="text-xl">𝕏</span>
            </a>
            <a href="#" className="text-white/60 hover:text-golden-hour transition-colors">
              <span className="text-xl">in</span>
            </a>
            <a href="#" className="text-white/60 hover:text-golden-hour transition-colors">
              <span className="text-xl">f</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
