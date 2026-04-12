import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The prescription integration is brilliant. My doctor set my parameters and the system automatically adjusts. My circulation has improved significantly.",
      author: "Sarah M.",
      role: "Diabetic Patient",
      rating: 5
    },
    {
      quote: "Real-time monitoring gives me peace of mind. I can see exactly how my feet are responding to treatment. The dashboard is intuitive.",
      author: "James T.",
      role: "Raynaud's Disease",
      rating: 5
    },
    {
      quote: "As a physician, I appreciate the ability to monitor my patients' compliance remotely. This is the future of therapeutic wearables.",
      author: "Dr. Maria L.",
      role: "Vascular Specialist",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          What Patients & Doctors Say
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Real results from real people
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-desert-sand/30 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-golden-hour text-xl">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-spiced-earth">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
