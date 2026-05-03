import { motion } from "motion/react";
import { Brain, Code2, Terminal, Zap } from "lucide-react";
import { NeuralNetwork3D } from "./NeuralNetwork3D";

export function About() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff08_1px,transparent_1px),linear-gradient(to_bottom,#00ffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-mono text-sm tracking-[0.3em]" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
              {'<'}ABOUT{'>'}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]">
              SYSTEM
            </span>
            {' '}
            <span className="text-white">OVERVIEW</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              {[
                "Specialized AI & Machine Learning engineer with expertise in developing intelligent, user-centric applications that transcend conventional technological boundaries.",
                "Combining deep learning mastery with full-stack development capabilities to architect end-to-end AI-powered solutions with precision and elegance.",
                "Continuously pushing the envelope in neural networks, natural language processing, and computer vision to deliver next-generation solutions.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="relative pl-6 border-l-2 border-cyan-400/40"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 bg-cyan-400 transform -translate-x-[5px]" />
                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '18px' }}>
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Tech indicators */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Brain, label: 'AI SYSTEMS', value: '100%' },
                { icon: Code2, label: 'DEVELOPMENT', value: '100%' },
              ].map((item, i) => (
                <div key={i} className="relative p-4 bg-cyan-400/5 border border-cyan-400/20">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-5 h-5 text-cyan-400" />
                    <span className="text-xs text-cyan-400 font-mono tracking-wider" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                      {item.label}
                    </span>
                  </div>
                  <div className="h-1 bg-gray-800">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: item.value }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* HUD Frame */}
            <div className="relative bg-black border-2 border-cyan-400/40 p-8" style={{
              clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))',
              boxShadow: '0 0 40px rgba(0,255,255,0.2), inset 0 0 40px rgba(0,255,255,0.1)',
            }}>
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-cyan-400" style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
              }} />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-purple-400" style={{
                clipPath: 'polygon(0 0, 0 100%, 100% 100%)',
              }} />

              {/* 3D Interactive Neural network visualization */}
              <div className="relative aspect-square">
                <NeuralNetwork3D />

                {/* Floating icons */}
                <motion.div
                  className="absolute -top-4 -right-4"
                  animate={{
                    y: [-5, 5, -5],
                    rotate: [0, 360],
                  }}
                  transition={{
                    y: { duration: 3, repeat: Infinity },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  }}
                >
                  <div className="w-12 h-12 bg-cyan-400/20 border-2 border-cyan-400 flex items-center justify-center" style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}>
                    <Brain className="w-6 h-6 text-cyan-400" />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4"
                  animate={{
                    y: [5, -5, 5],
                    rotate: [360, 0],
                  }}
                  transition={{
                    y: { duration: 3, repeat: Infinity },
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  }}
                >
                  <div className="w-12 h-12 bg-purple-400/20 border-2 border-purple-400 flex items-center justify-center" style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}>
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                </motion.div>
              </div>

              {/* Data readout */}
              <div className="mt-4 p-3 bg-cyan-400/5 border-l-2 border-cyan-400">
                <div className="font-mono text-xs text-cyan-400 space-y-1" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                  <div>{'>'} NEURAL_NET: ACTIVE</div>
                  <div>{'>'} LAYERS: [INPUT, HIDDEN x2, OUTPUT]</div>
                  <div>{'>'} STATUS: OPTIMAL</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
