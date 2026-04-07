import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Cpu, Github, Linkedin, Mail } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Research', href: '#research' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-lg shadow-black/50' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          {/* Logo Removed */}
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-10 md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05, color: '#00f0ff' }}
              className="font-orbitron text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,240,255,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-neonBlue px-8 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#0a0a0a] transition-all"
          >
            Contact Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="text-white md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass absolute left-0 top-full w-full border-t border-white/10 px-6 py-8 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-poppins text-lg font-medium text-gray-300 hover:text-neonBlue"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full rounded-lg bg-neonBlue py-3 font-bold text-[#0a0a0a] text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
