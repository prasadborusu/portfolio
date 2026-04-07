import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

function ParticleBackground() {
  const ref = useRef()
  const sphere = useMemo(() => {
    const arr = new Float32Array(2000)
    for (let i = 0; i < 2000; i++) {
      arr[i] = (Math.random() - 0.5) * 3
    }
    return arr
  }, [])

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Three.js Canvas */}
      <div className="absolute inset-0 z-0 h-full w-full opacity-60">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <ParticleBackground />
          </Suspense>
        </Canvas>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-1/4 h-96 w-96 rounded-full bg-neonBlue/10 blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-neonPurple/10 blur-[120px]"></div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-6 text-center lg:px-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-neonBlue backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neonBlue opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neonBlue"></span>
            </span>
            Available for New Opportunities
          </motion.div>
          
          <h1 className="mb-8 font-orbitron text-5xl font-black leading-[1.1] text-white md:text-8xl lg:text-[100px]">
            BORUSU <br />
            <span className="neon-text-blue text-[0.8em]">VENKATA DURGA PRASAD</span>
          </h1>
          
          <div className="mb-12 flex flex-wrap justify-center gap-4 font-orbitron text-sm font-bold tracking-widest text-gray-400 md:text-lg">
            <span className="hover:text-neonBlue transition-colors cursor-default">AI ENGINEER</span>
            <span className="text-white/10">•</span>
            <span className="hover:text-neonPurple transition-colors cursor-default">RESEARCHER</span>
            <span className="text-white/10">•</span>
            <span className="hover:text-neonBlue transition-colors cursor-default">INNOVATOR</span>
          </div>
          
          <p className="mx-auto mb-14 max-w-2xl font-inter text-lg leading-relaxed text-gray-400 md:text-xl">
            Architecting the future of intelligence through neural networks, multi-agent systems, and 
            cutting-edge AI research. Pushing the boundaries of human-AI collaboration.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,240,255,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-neonBlue px-10 py-5 font-orbitron text-xs font-black uppercase tracking-[0.2em] text-[#0a0a0a] transition-all"
            >
              <span>Explore Projects</span>
              <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </motion.a>
            
            <div className="flex items-center gap-6">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href={i === 0 ? "https://github.com/prasadborusu" : i === 1 ? "https://www.linkedin.com/in/durga-prasad-borusu-6a1a9a400" : "mailto:prasadborusu0@gmail.com"}
                  whileHover={{ y: -5, color: '#00f0ff' }}
                  className="group relative h-12 w-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 backdrop-blur-sm transition-all hover:border-neonBlue/50"
                >
                  <Icon size={20} />
                  <div className="absolute inset-0 rounded-full bg-neonBlue/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20"
      >
        <div className="h-12 w-6 rounded-full border border-white/20 p-1">
          <div className="h-2 w-1 mx-auto rounded-full bg-neonBlue"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
