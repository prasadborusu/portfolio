import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter, CheckCircle2, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Hardcoded credentials as requested for deployment simplification
    const serviceId = "service_4e4r52r"
    const templateId = "template_btfzkvw"
    const publicKey = "L2vLtksJaHLtACFyw"

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials missing.")
      setStatus('error')
      setLoading(false)
      return
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
          console.log(result.text)
          setStatus('success')
          formRef.current.reset()
      }, (error) => {
          console.log(error.text)
          setStatus('error')
      })
      .finally(() => {
        setLoading(false)
        setTimeout(() => setStatus(null), 5000)
      })
  }

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border border-neonBlue/30 bg-neonBlue/5 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-neonBlue mb-6"
          >
            Connect
          </motion.div>
          <h2 className="font-orbitron text-4xl font-black text-white md:text-6xl uppercase tracking-tighter">
            CONTACT <span className="neon-text-blue">ME</span>
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-gray-500">
            Secure a direct line for collaboration, research inquiries, or architectural consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            {[
              { icon: Mail, label: 'Neural Link', value: 'prasadborusu0@gmail.com', color: '#00f0ff' },
              { icon: MapPin, label: 'Base Location', value: 'Tirupati, India', color: '#8a2be2' },
              { icon: Phone, label: 'Voice Comms', value: '+91 (REDACTED)', color: '#00f0ff' },
            ].map((item, i) => (
              <div key={i} className="glass-card group flex items-center gap-6 p-8 border-white/5 hover:border-white/20 transition-all">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 transition-all group-hover:scale-110" style={{ color: item.color, boxShadow: `0 0 10px ${item.color}30` }}>
                  <item.icon size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 mb-1">{item.label}</p>
                  <p className="font-orbitron text-sm font-bold text-white group-hover:text-neonBlue transition-colors">{item.value}</p>
                </div>
              </div>
            ))}
            
            <div className="flex justify-between p-2">
               {[Github, Linkedin, Twitter].map((Icon, i) => (
                 <motion.a 
                   key={i} 
                   href={i === 0 ? "https://github.com/prasadborusu" : i === 1 ? "https://www.linkedin.com/in/durga-prasad-borusu-6a1a9a400" : "#"} 
                   whileHover={{ y: -5, scale: 1.1 }}
                   className="glass-card flex h-16 w-16 items-center justify-center text-gray-500 hover:text-white border-white/5 transition-all"
                 >
                   <Icon size={24} />
                 </motion.a>
               ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card grid grid-cols-1 gap-8 p-10 md:grid-cols-2 border-white/10"
            >
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-2">Your Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  required
                  placeholder="Your Name / Organization" 
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 text-sm text-white placeholder:text-gray-700 focus:border-neonBlue/50 focus:bg-white/[0.05] focus:outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-2">Your Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  placeholder="email@domain.com" 
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 text-sm text-white placeholder:text-gray-700 focus:border-neonBlue/50 focus:bg-white/[0.05] focus:outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-3 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-2">Your Message</label>
                <textarea 
                  name="message"
                  required
                  rows="6" 
                  placeholder="Write your message here..." 
                  className="resize-none rounded-2xl border border-white/5 bg-white/[0.02] p-5 text-sm text-white placeholder:text-gray-700 focus:border-neonBlue/50 focus:bg-white/[0.05] focus:outline-none transition-all"
                ></textarea>
              </div>
              
              <div className="md:col-span-2 flex flex-col md:flex-row items-center gap-6">
                <button 
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-3 rounded-2xl bg-neonBlue px-10 py-5 font-orbitron text-xs font-black uppercase tracking-[0.2em] text-[#0a0a0a] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] lg:w-max group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'} 
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                {status === 'success' && (
                  <motion.p initial={{opacity:0, x: -10}} animate={{opacity:1, x:0}} className="flex items-center gap-2 text-neonBlue text-sm font-bold">
                    <CheckCircle2 size={18} /> Message Sent Successfully
                  </motion.p>
                )}
                
                {status === 'error' && (
                  <motion.p initial={{opacity:0, x: -10}} animate={{opacity:1, x:0}} className="flex items-center gap-2 text-red-500 text-sm font-bold">
                    <AlertCircle size={18} /> Failed to send. Check credentials.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
