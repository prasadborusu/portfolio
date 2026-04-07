import React from 'react'
import { motion } from 'framer-motion'
import { FileText, BookOpen, GraduationCap, Link2, ExternalLink } from 'lucide-react'

const Research = () => {
  const publications = [
    {
      title: "A Beginner's Guide to Machine Learning: Applications in Daily Life",
      journal: "Conference Paper | April 2025",
      year: "2025",
      link: "https://www.researchgate.net/publication/390582096_A_Beginner's_Guide_to_Machine_Learning_Applications_in_Daily_Life"
    },
    {
      title: "Hyderabad's Green Crisis: The Alarming Effect of HCU Deforestation",
      journal: "Article | April 2025",
      year: "2025",
      link: "https://www.researchgate.net/publication/390473769_Hyderabad's_Green_Crisis_The_Alarming_Effect_of_HCU_Deforestation"
    },
    {
      title: "Why AGI's Big Dreams Might Be Stumbling: A Look at Real Research",
      journal: "Research Proposal | March 2025",
      year: "2025",
      link: "https://www.researchgate.net/publication/390009261_Title_Why_AGI's_Big_Dreams_Might_Be_Stumbling_A_Look_at_Real_Research"
    },
    {
      title: "The Role of Ethics and Values in Student Life: Building a Responsible Future",
      journal: "Research Proposal | March 2025",
      year: "2025",
      link: "https://www.researchgate.net/profile/Borusu-Prasad"
    }
  ]

  const interests = [
    "Generative Adversarial Networks",
    "Agent-Based Modeling",
    "Autonomous Navigation",
    "Explainable AI (XAI)",
    "Edge AI Intelligence"
  ]

  return (
    <section id="research" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neonPurple/10 text-neonPurple border border-neonPurple/20">
                <FileText size={24} />
              </div>
              <h2 className="font-orbitron text-4xl font-bold text-white uppercase tracking-tighter">
                Publications
              </h2>
            </div>

            <div className="space-y-6">
              {publications.map((pub, i) => (
                <div key={i} className="glass group relative overflow-hidden p-6 transition-all hover:border-neonPurple/50">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-neonPurple">{pub.year}</span>
                      <h3 className="mb-2 mt-1 font-orbitron text-lg font-bold text-white group-hover:text-neonPurple transition-colors">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-gray-500 italic">{pub.journal}</p>
                    </div>
                    <a href={pub.link} className="text-gray-500 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex gap-6">
              <a href="https://www.researchgate.net/profile/Borusu-Prasad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-neonPurple transition-colors">
                 <Link2 size={16} /> ResearchGate
              </a>
            </div>
          </motion.div>

          {/* Interests & Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neonBlue/10 text-neonBlue border border-neonBlue/20">
                <BookOpen size={24} />
              </div>
              <h2 className="font-orbitron text-4xl font-bold text-white uppercase tracking-tighter">
                Research <span className="text-neonBlue">Focus</span>
              </h2>
            </div>

            <div className="mb-12 flex flex-wrap gap-4">
              {interests.map((interest, i) => (
                <div key={i} className="rounded-lg border border-white/5 bg-white/5 px-6 py-4 text-sm font-medium text-gray-400 transition-all hover:border-neonBlue/30 hover:bg-neonBlue/5 hover:text-white">
                  {interest}
                </div>
              ))}
            </div>

            <div className="glass p-8">
              <div className="flex items-center gap-4 mb-6">
                 <GraduationCap className="text-neonBlue" size={32} />
                 <div>
                   <h3 className="font-orbitron text-xl font-bold text-white">Academic Background</h3>
                   <p className="text-sm text-gray-500">Continuous pursuit of knowledge</p>
                 </div>
              </div>
              <div className="space-y-6">
                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute left-[-5px] top-0 h-2 w-2 rounded-full bg-neonBlue"></div>
                  <h4 className="font-bold text-white text-base">Bachelor of Technology (B.Tech)</h4>
                  <p className="text-xs text-neonBlue font-bold uppercase mb-1">Mohan Babu University | Ongoing</p>
                  <p className="text-sm text-gray-500 italic">Tirupati, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Research
