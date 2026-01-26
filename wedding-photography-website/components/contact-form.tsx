'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    serviceType: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', eventDate: '', serviceType: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-lg text-primary-foreground/90 text-center mb-12 max-w-2xl mx-auto">
          Ready to book your photography session? Contact us today for a consultation.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone size={24} className="text-accent-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary-foreground/80">Phone</p>
              <p className="text-lg font-bold">+91 98XXXXXX06</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail size={24} className="text-accent-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary-foreground/80">Email</p>
              <p className="text-lg font-bold">sunil@skphotography.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin size={24} className="text-accent-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary-foreground/80">Location</p>
              <p className="text-lg font-bold">India</p>
            </div>
          </div>
        </div>

        <div className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 rounded-lg p-8 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-accent"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-accent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-accent"
              />
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-accent"
              />
            </div>

            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-accent"
            >
              <option value="">Select Service Type</option>
              <option value="wedding">Wedding Photography</option>
              <option value="prewedding">Pre-Wedding Shoot</option>
              <option value="portrait">Portrait Photography</option>
              <option value="candid">Candid Photography</option>
              <option value="videography">Videography</option>
              <option value="editing">Video Editing</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your event..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-accent"
            />

            <button
              type="submit"
              className="w-full py-3 bg-accent text-accent-foreground rounded-lg font-bold hover:bg-accent/90 transition-colors"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
