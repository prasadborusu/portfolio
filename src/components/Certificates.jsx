import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ExternalLink, X, Calendar, Building2, BadgeCheck } from 'lucide-react'

const certificates = [
  {
    title: "Basic Statistics",
    issuer: "University of Amsterdam (via Coursera)",
    date: "Feb 21, 2026",
    category: "Data Science",
    credentialId: "I3G494C25O38",
    color: "#00f0ff",
    icon: "📊",
    link: "https://coursera.org/verify/I3G494C25O38",
    skills: ["Statistics", "Data Analysis", "Probability", "Hypothesis Testing"],
    description: "Foundational course in statistical concepts including descriptive statistics, probability distributions, hypothesis testing, and confidence intervals — essential tools for any data-driven role."
  },
  {
    title: "Probability & Statistics for ML & Data Science",
    issuer: "DeepLearning.AI (via Coursera)",
    date: "Mar 13, 2026",
    category: "Machine Learning",
    credentialId: "0WCZ6ANDK9SU",
    color: "#8a2be2",
    icon: "🧮",
    link: "https://coursera.org/verify/0WCZ6ANDK9SU",
    skills: ["Probability", "Bayesian Inference", "Statistics", "Machine Learning"],
    description: "Advanced probability and statistical methods tailored for machine learning and data science — covering Bayesian reasoning, distributions, and their applications in building robust ML models."
  },
  {
    title: "Leadership Skills",
    issuer: "IIM Ahmedabad (via Coursera)",
    date: "Feb 21, 2026",
    category: "Leadership",
    credentialId: "2HVFCK8P1J6M",
    color: "#00f0ff",
    icon: "🏆",
    link: "https://coursera.org/verify/2HVFCK8P1J6M",
    skills: ["Leadership", "Team Management", "Decision Making", "Communication"],
    description: "Leadership development course from IIM Ahmedabad covering strategic thinking, team dynamics, effective decision-making, and communication skills essential for leading high-performance teams."
  },
  {
    title: "Strategic Innovation: Managing Innovation Initiatives",
    issuer: "Univ. of Illinois Urbana-Champaign (via Coursera)",
    date: "Feb 22, 2026",
    category: "Strategy",
    credentialId: "ZQ99EKNREO4C",
    color: "#8a2be2",
    icon: "💡",
    link: "https://coursera.org/verify/ZQ99EKNREO4C",
    skills: ["Innovation", "Strategic Management", "Product Development", "R&D"],
    description: "Explores frameworks for managing innovation initiatives, from ideation to execution — covering how organizations drive strategic change, foster creativity, and sustain competitive advantage."
  },
  {
    title: "Entrepreneurship I: Laying the Foundation",
    issuer: "Univ. of Illinois Urbana-Champaign (via Coursera)",
    date: "Feb 22, 2026",
    category: "Entrepreneurship",
    credentialId: "LCCFQDUU6HAG",
    color: "#00f0ff",
    icon: "🚀",
    link: "https://coursera.org/verify/LCCFQDUU6HAG",
    skills: ["Entrepreneurship", "Business Model", "Market Validation", "Ideation"],
    description: "First course in the entrepreneurship series covering how to identify business opportunities, validate ideas, understand customer needs, and lay the groundwork for a scalable venture."
  },
  {
    title: "Entrepreneurship II: Preparing for Launch",
    issuer: "Univ. of Illinois Urbana-Champaign (via Coursera)",
    date: "Mar 14, 2026",
    category: "Entrepreneurship",
    credentialId: "8DTBC7Q9HN0Q",
    color: "#8a2be2",
    icon: "🛸",
    link: "https://coursera.org/verify/8DTBC7Q9HN0Q",
    skills: ["Startup Launch", "Fundraising", "Pitching", "Go-to-Market"],
    description: "Sequel to Entrepreneurship I — focuses on launch readiness including go-to-market strategies, fundraising approaches, investor pitching, and building the operational foundation for a startup."
  }
]

const categoryColors = {
  "Artificial Intelligence": "#00f0ff",
  "Data Science": "#8a2be2",
  "Web Development": "#00f0ff",
  "Machine Learning": "#8a2be2",
  "Cloud Computing": "#00f0ff",
  "Generative AI": "#8a2be2",
}

const Certificates = () => {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', ...new Set(certificates.map(c => c.category))]
  const filtered = filter === 'All' ? certificates : certificates.filter(c => c.category === filter)

  return (
    <section id="certificates" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 h-96 w-96 bg-neonBlue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-neonBlue/30 bg-neonBlue/5 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-neonBlue mb-6"
          >
            <Award size={12} />
            Verified Credentials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-orbitron text-4xl font-black text-white md:text-6xl uppercase tracking-tighter"
          >
            CERTIFI<span className="neon-text-blue">CATIONS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 mx-auto max-w-xl text-gray-500"
          >
            Industry-recognized credentials validating expertise across AI, cloud, and full-stack development domains.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                filter === cat
                  ? 'bg-neonBlue text-[#0a0a0a] shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'border border-white/10 bg-white/5 text-gray-400 hover:border-neonBlue/30 hover:text-neonBlue'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Certificate Grid */}
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((cert, index) => (
              <motion.div
                key={cert.credentialId}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                onClick={() => setSelected(cert)}
                className="glass-card group cursor-pointer border-white/5 hover:border-white/20 p-7 flex flex-col gap-5 relative overflow-hidden"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-2xl text-2xl"
                    style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                  >
                    {cert.icon}
                  </div>
                  <span
                    className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ color: cert.color, background: `${cert.color}15`, border: `1px solid ${cert.color}25` }}
                  >
                    {cert.category}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="font-orbitron text-base font-black text-white group-hover:text-neonBlue transition-colors leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Building2 size={11} />
                    <span>{cert.issuer}</span>
                    <span className="text-white/20">·</span>
                    <Calendar size={11} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/5">
                  <div className="flex items-center gap-1.5 text-[9px] text-gray-600 font-mono">
                    <BadgeCheck size={11} style={{ color: cert.color }} />
                    <span>{cert.credentialId}</span>
                  </div>
                  <span
                    className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest transition-transform group-hover:translate-x-1"
                    style={{ color: cert.color }}
                  >
                    View <ExternalLink size={10} />
                  </span>
                </div>

                {/* Hover accent line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: cert.color, boxShadow: `0 0 8px ${cert.color}` }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#0d0d0d] p-8 overflow-hidden shadow-2xl"
            >
              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-20 pointer-events-none"
                style={{ backgroundColor: selected.color }}
              />

              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 rounded-full bg-white/5 p-2 text-white/50 hover:bg-neonBlue hover:text-black transition-all"
              >
                <X size={20} />
              </button>

              {/* Icon */}
              <div
                className="flex items-center justify-center w-16 h-16 rounded-2xl text-3xl mb-6"
                style={{ background: `${selected.color}15`, border: `1px solid ${selected.color}30` }}
              >
                {selected.icon}
              </div>

              {/* Category badge */}
              <span
                className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block"
                style={{ color: selected.color, background: `${selected.color}15`, border: `1px solid ${selected.color}30` }}
              >
                {selected.category}
              </span>

              <h3 className="font-orbitron text-2xl font-black text-white mt-2 mb-2">
                {selected.title}
              </h3>

              <div className="flex items-center gap-3 text-gray-500 text-sm mb-6">
                <Building2 size={14} />
                <span>{selected.issuer}</span>
                <span className="text-white/20">·</span>
                <Calendar size={14} />
                <span>{selected.date}</span>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                {selected.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selected.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: selected.color, background: `${selected.color}15`, border: `1px solid ${selected.color}25` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Credential ID */}
              <div className="flex items-center gap-2 mb-6 p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                <BadgeCheck size={14} style={{ color: selected.color }} />
                <span className="text-[10px] font-mono text-gray-500">
                  Credential ID: <span className="text-white/70">{selected.credentialId}</span>
                </span>
              </div>

              {/* CTA */}
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-2xl py-4 font-orbitron text-[10px] font-black uppercase tracking-[0.2em] transition-all"
                style={{
                  backgroundColor: selected.color,
                  color: '#0a0a0a',
                  boxShadow: `0 0 20px ${selected.color}40`
                }}
              >
                <ExternalLink size={14} />
                Verify Credential
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certificates
