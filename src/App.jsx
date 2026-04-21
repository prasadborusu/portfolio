import React, { useEffect, lazy, Suspense } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'

const Projects = lazy(() => import('./components/Projects'))
const Research = lazy(() => import('./components/Research'))
const Skills = lazy(() => import('./components/Skills'))
const Contact = lazy(() => import('./components/Contact'))
const Certificates = lazy(() => import('./components/Certificates'))

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
      <Suspense fallback={<div className="h-screen bg-[#0a0a0a]" />}>
        <Projects />
        <Skills />
        <Certificates />
        <Research />
        <Contact />
      </Suspense>
      <Footer />
    </main>
  )
}

export default App
