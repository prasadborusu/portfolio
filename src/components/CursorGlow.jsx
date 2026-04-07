import React, { useEffect, useState } from 'react'
import { motion, useSpring, useMotionTemplate } from 'framer-motion'

const CursorGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  
  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [x, y])

  const background = useMotionTemplate`radial-gradient(600px at ${x}px ${y}px, rgba(0, 240, 255, 0.15), transparent 80%)`


  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      style={{ background }}
    >
      <motion.div
        className="fixed h-4 w-4 rounded-full bg-neonBlue blur-[2px]"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="fixed h-32 w-32 rounded-full border border-neonBlue/20"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
    </motion.div>
  )
}

export default CursorGlow
