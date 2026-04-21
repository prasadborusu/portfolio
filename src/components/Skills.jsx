import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Float } from '@react-three/drei'
import { motion } from 'framer-motion'

function SkillBox({ position, name, color }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh position={position} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} opacity={0.3} transparent wireframe />
      <Text
        position={[0, 0, 0.6]}
        fontSize={0.2}
        color="white"
        font="https://fonts.gstatic.com/s/orbitron/v30/yNoI2GN_iX_16gW397l2Z0A.woff"
      >
        {name}
      </Text>
    </mesh>
  )
}

function SkillsCube() {
  const meshRef = useRef()
  
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5
  })

  const skills = [
    { name: 'Vibe Coding', color: '#00f0ff' },
    { name: 'Hugging Face', color: '#8a2be2' },
    { name: 'Full Stack', color: '#00f0ff' },
    { name: 'Gen AI', color: '#8a2be2' },
    { name: 'APIs', color: '#00f0ff' },
    { name: 'Python', color: '#8a2be2' },
    { name: 'Leadership', color: '#00f0ff' },
    { name: 'Event Coord.', color: '#8a2be2' },
  ]

  return (
    <group ref={meshRef}>
      {/* Dynamic 3D Skills Display */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <icosahedronGeometry args={[2.5, 1]} />
          <meshStandardMaterial color="#00f0ff" wireframe transparent opacity={0.1} />
        </mesh>
      </Float>
      
      {skills.map((skill, i) => {
        const phi = Math.acos(-1 + (2 * i) / skills.length)
        const theta = Math.sqrt(skills.length * Math.PI) * phi
        const x = 3.5 * Math.cos(theta) * Math.sin(phi)
        const y = 3.5 * Math.sin(theta) * Math.sin(phi)
        const z = 3.5 * Math.cos(phi)
        
        return (
          <Float key={i} speed={3} rotationIntensity={2} floatIntensity={1} position={[x, y, z]}>
            <mesh>
              <sphereGeometry args={[0.4, 16, 16]} />
              <meshStandardMaterial color={skill.color} emissive={skill.color} emissiveIntensity={2} transparent opacity={0.4} />
              <Text
                position={[0, 0, 0.5]}
                fontSize={0.2}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                {skill.name}
              </Text>
            </mesh>
          </Float>
        )
      })}
    </group>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 font-orbitron text-4xl font-bold text-white uppercase tracking-tighter">
              Neural <span className="text-neonPurple">Toolkit</span>
            </h2>
            <p className="mb-10 text-lg text-gray-400">
              My technical ecosystem is built on robustness and scale. I leverage the most powerful 
              AI frameworks and modern web technologies to deliver high-performance solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              {[
                { name: "Vibe Coding", fire: false },
                { name: "Hugging Face", fire: false },
                { name: "Full Stack", fire: false },
                { name: "Gen AI", fire: false },
                { name: "APIs", fire: false },
                { name: "Neural Networks", fire: false },
                { name: "Computer Vision", fire: false },
                { name: "NLP", fire: false },
                { name: "LLMs", fire: false },
                { name: "Leadership", fire: true },
                { name: "Event Coordination", fire: true },
              ].map((item, i) => (
                item.fire ? (
                  <div
                    key={i}
                    className="relative flex items-center justify-center gap-1.5 p-4 text-center rounded-2xl overflow-hidden cursor-default"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,60,30,0.15), rgba(255,120,0,0.08))',
                      border: '1px solid rgba(255,80,40,0.45)',
                      boxShadow: '0 0 14px rgba(255,60,30,0.25), inset 0 0 12px rgba(255,80,40,0.08)'
                    }}
                  >
                    {/* fire shimmer */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{ background: 'radial-gradient(ellipse at 50% 120%, rgba(255,80,0,0.6), transparent 70%)' }}
                    />
                    <span className="text-[9px]">🔥</span>
                    <span
                      className="text-xs font-black uppercase tracking-widest"
                      style={{ color: '#ff6b3d', textShadow: '0 0 10px rgba(255,80,30,0.7), 0 0 20px rgba(255,80,30,0.4)' }}
                    >
                      {item.name}
                    </span>
                  </div>
                ) : (
                  <div key={i} className="glass flex items-center justify-center p-4 text-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{item.name}</span>
                  </div>
                )
              ))}
            </div>
          </motion.div>

          {/* 3D Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[500px] w-full cursor-grab active:cursor-grabbing"
          >
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
              <pointLight position={[-10, -10, -10]} intensity={1} color="#8a2be2" />
              <Suspense fallback={null}>
                <SkillsCube />
                <OrbitControls enableZoom={false} autoRotate />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
