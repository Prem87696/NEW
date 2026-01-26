"use client"

import { useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Portfolio from '@/components/portfolio'
import Services from '@/components/services'
import Pricing from '@/components/pricing'
import Testimonials from '@/components/testimonials'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Portfolio />
      <Services />
      <Pricing />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
