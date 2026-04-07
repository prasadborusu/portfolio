import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center space-x-2">
            {/* Logo Removed */}
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Borusu Venkata Durga Prasad. All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
            Built with 
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart size={14} className="text-neonPurple fill-neonPurple" />
            </motion.div>
            & Creativity
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
