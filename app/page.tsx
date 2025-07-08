'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Courses from './components/Courses'

import News from './components/News'

import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Courses />
      <News />
      <Footer />
    </main>
  )
} 