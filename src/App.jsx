import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Research from './components/Research'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

function App() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] selection:bg-neonBlue/30 selection:text-neonBlue">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Research />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
