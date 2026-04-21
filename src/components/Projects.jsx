import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { ExternalLink, Github, X, Globe, AlertTriangle } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showDemoAlert, setShowDemoAlert] = useState(false)

  const projects = [
    {
      title: "Voice4City",
      desc: "Smart City Grievance & SOS System using AI for real-time monitoring and automated response routing. Developed to bridge the gap between citizens and administration through intelligent data analysis.",
      tech: ["AI", "Real-time", "Node.js"],
      img: "/images/projects/voice4city.png",
      color: "#00f0ff",
      deployLink: "https://v4c.netlify.app/",
      githubLink: "https://github.com/prasadborusu/v4c"
    },
    {
      title: "AI Cooking Assistant",
      desc: "An intelligent culinary guide that uses computer vision for ingredient recognition and generates dynamic recipes based on available items. Focuses on reducing food waste and enhancing the cooking experience.",
      tech: ["Python", "Computer Vision", "React"],
      img: "/images/projects/Aicookingassistant.png",
      color: "#8a2be2",
      deployLink: "#",
      githubLink: "#"
    },
    {
      title: "HarvestHub",
      desc: "An AI-powered agriculture platform designed for small-scale farmers to detect crop diseases early and predict yield patterns using IoT sensor data and machine learning models.",
      tech: ["Full Stack", "API"],
      img: "/images/projects/harvesthub.png",
      color: "#00f0ff",
      deployLink: "https://harvesthub12.netlify.app/",
      githubLink: "https://github.com/prasadborusu/harvest_hub"
    },
    {
      title: "Learning AI Agent",
      desc: "A collaborative neural network environment where multiple agents learn to solve complex automation tasks through reinforcement learning and LangChain orchestration.",
      tech: ["Hugging Face", "LangChain", "Python"],
      img: "/images/projects/multilerningagent.png",
      color: "#8a2be2",
      deployLink: "#",
      githubLink: "https://github.com/prasadborusu/Learning-Assistant-Multi-Agent-AI-Environment"
    }
  ]

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 bg-neonBlue/5 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border border-neonBlue/30 bg-neonBlue/5 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-neonBlue mb-6"
          >
            Digital Artifacts
          </motion.div>
          <h2 className="font-orbitron text-4xl font-black text-white md:text-6xl uppercase tracking-tighter">
            FEATURED <span className="neon-text-blue">DEPLOYMENTS</span>
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-gray-500">
            A showcase of AI solutions engineered to solve real-world complexities through neural intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer"
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor={project.color}
                glarePosition="all"
                tiltMaxAngleX={12}
                tiltMaxAngleY={12}
                className="h-full"
              >
                <div className="glass-card group flex h-full flex-col overflow-hidden border-white/5 hover:border-white/20">
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60"></div>
                    
                    {/* Tech Badges on Image */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="rounded-md bg-black/50 backdrop-blur-md border border-white/10 px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-white">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-grow text-left">
                    <h3 className="mb-4 font-orbitron text-xl font-bold text-white group-hover:text-neonBlue transition-colors">
                      {project.title}
                    </h3>
                    <p className="mb-8 text-sm leading-relaxed text-gray-500 group-hover:text-gray-400 transition-colors line-clamp-3">
                      {project.desc}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-neonBlue group-hover:translate-x-2 transition-transform">
                        Explore System <ExternalLink size={14} />
                      </span>
                    </div>
                  </div>
                  
                  {/* Accent Line */}
                  <div 
                    className="h-1.5 w-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: project.color, boxShadow: `0 0 10px ${project.color}` }}
                  ></div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6 overflow-y-auto bg-black/80 backdrop-blur-md pt-20 pb-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-[#0d0d0d] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => { setSelectedProject(null); setShowDemoAlert(false) }}
                className="absolute right-6 top-6 z-10 rounded-full bg-black/50 p-2 text-white/50 hover:bg-neonBlue hover:text-black transition-all"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-full relative">
                  <img src={selectedProject.img} alt={selectedProject.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-transparent to-transparent hidden lg:block"></div>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="mb-6 font-orbitron text-3xl font-black text-white">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="mb-6 text-gray-400 leading-relaxed text-lg">
                    {selectedProject.desc}
                  </p>

                  {/* Demo Unavailable Notice */}
                  <AnimatePresence>
                    {showDemoAlert && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.25 }}
                        className="mb-6 flex items-start gap-3 rounded-2xl border border-orange-500/30 bg-orange-500/8 p-4"
                        style={{ background: 'rgba(251,146,60,0.07)', borderColor: 'rgba(251,146,60,0.35)' }}
                      >
                        <AlertTriangle size={16} className="mt-0.5 shrink-0" style={{ color: '#fb923c' }} />
                        <div>
                          <p className="font-orbitron text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: '#fb923c' }}>
                            Demo Temporarily Unavailable
                          </p>
                          <p className="text-xs text-gray-400 leading-relaxed">
                            Sorry for the inconvenience! The live demo is currently down due to exceeded Netlify bandwidth credits. 
                            It will be back up shortly. Please check the GitHub repo in the meantime.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => setShowDemoAlert(true)}
                      className="flex flex-1 items-center justify-center gap-3 rounded-2xl px-8 py-5 font-orbitron text-[10px] font-black uppercase tracking-[0.2em] transition-all"
                      style={{
                        background: showDemoAlert
                          ? 'rgba(251,146,60,0.12)'
                          : selectedProject.deployLink === '#'
                            ? 'rgba(255,255,255,0.05)'
                            : 'rgba(251,146,60,0.15)',
                        border: `1px solid ${showDemoAlert ? 'rgba(251,146,60,0.5)' : selectedProject.deployLink === '#' ? 'rgba(255,255,255,0.05)' : 'rgba(251,146,60,0.4)'}`,
                        color: selectedProject.deployLink === '#' ? 'rgba(255,255,255,0.2)' : '#fb923c',
                        cursor: selectedProject.deployLink === '#' ? 'not-allowed' : 'pointer',
                        boxShadow: showDemoAlert ? '0 0 16px rgba(251,146,60,0.2)' : 'none'
                      }}
                      disabled={selectedProject.deployLink === '#'}
                    >
                      <Globe size={18} />
                      {selectedProject.deployLink === '#' ? 'Under Development' : 'Live Demo'}
                    </button>
                    <a 
                      href={selectedProject.githubLink} 
                      target={selectedProject.githubLink === "#" ? "_self" : "_blank"} 
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-3 rounded-2xl border px-8 py-5 font-orbitron text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                        selectedProject.githubLink === "#"
                        ? "border-white/5 bg-transparent text-white/20 cursor-not-allowed"
                        : "border-white/10 bg-white/5 text-white hover:bg-white/10"
                      }`}
                      onClick={(e) => selectedProject.githubLink === "#" && e.preventDefault()}
                    >
                      <Github size={18} /> {selectedProject.githubLink === "#" ? "Coming Soon" : "GitHub Repo"}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
