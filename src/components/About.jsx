import React from 'react'
import { motion } from 'framer-motion'
import { Database, Cpu, Shield } from 'lucide-react'

const About = () => {
  const stats = [
    { label: "Research Score", value: "4.6", icon: Database },
    { label: "Total Reads", value: "1.7K+", icon: Cpu },
    { label: "Key Projects", value: "4+", icon: Shield },
  ]

  return (
    <section id="about" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Image with Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
              <img 
                src="/images/profile/profile.png" 
                alt="B.Venkata Durga Prasad" 
                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-[4/5]"
              />
            </div>
            {/* Decorative Glows */}
            <div className="absolute -bottom-10 -right-10 z-0 h-64 w-64 rounded-full bg-neonBlue/20 blur-[80px]"></div>
            <div className="absolute -top-10 -left-10 z-0 h-64 w-64 rounded-full bg-neonPurple/20 blur-[80px]"></div>
            
            {/* Overlay Info Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-card absolute -bottom-6 -right-6 z-20 p-6 md:p-8"
            >
              <p className="font-orbitron text-xs font-bold uppercase tracking-widest text-neonBlue">Experience</p>
              <h4 className="mt-1 font-orbitron text-3xl font-black text-white">1+ YEAR</h4>
              <p className="mt-2 text-sm text-gray-500 italic">In Personal Projects</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block rounded-full border border-neonPurple/30 bg-neonPurple/5 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-neonPurple mb-6">
              The Architect of Intelligence
            </div>
            <h2 className="mb-8 font-orbitron text-2xl font-black text-white md:text-5xl uppercase tracking-tighter leading-tight">
              MEET <span className="neon-text-blue">BORUSU VENKATA DURGA PRASAD</span>
            </h2>
            <p className="mb-8 font-inter text-lg leading-relaxed text-gray-400">
              I am a student at Mohan Babu University, currently pursuing my B.Tech in Artificial Intelligence and Machine Learning (2nd Year, 2nd Semester). I am passionate about building real-world projects like AI-powered applications, smart city solutions, and innovative web platforms.
            </p>
            <p className="mb-12 font-inter text-gray-500">
              I specialize in Python, Java, and Web Development, with a focus on turning innovative ideas into scalable products. My goal is to become an AI engineer and entrepreneur, architecting AI-based solutions that solve real-life problems and help build a more efficient, technology-driven future.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat, i) => (
                <div key={i} className="glass-card p-6 border-white/5 hover:border-neonBlue/30 transition-all group">
                  <stat.icon size={24} className="mb-4 text-gray-600 group-hover:text-neonBlue transition-colors" />
                  <h4 className="font-orbitron text-2xl font-black text-white">{stat.value}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <motion.div 
              className="mt-12 flex items-center gap-4"
              whileHover={{ x: 10 }}
            >
              <div className="h-[1px] w-12 bg-neonBlue/50"></div>
              <a href="#contact" className="font-orbitron text-xs font-black uppercase tracking-[0.2em] text-neonBlue">
                Let's Build the Future
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
