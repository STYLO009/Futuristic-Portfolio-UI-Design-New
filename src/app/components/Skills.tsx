import { motion } from "motion/react";
import { Code, Database, Brain, Cpu, Terminal, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "PROGRAMMING",
    icon: Code,
    skills: [
      { name: "C++", level: 95 },
      { name: "Python", level: 98 },
      { name: "JavaScript", level: 92 },
      { name: "HTML", level: 96 },
      { name: "CSS", level: 94 },
    ],
    gradient: "from-cyan-400 to-blue-500",
    accentColor: "cyan-400",
  },
  {
    title: "FRAMEWORKS",
    icon: Layers,
    skills: [
      { name: "FASTAPI", level: 95 },
      { name: "MySQL", level: 88 },
      { name: "Git", level: 92 },
      { name: "LangChain", level: 90 },
    ],
    gradient: "from-purple-400 to-pink-500",
    accentColor: "purple-400",
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 96 },
      { name: "CNN", level: 93 },
      { name: "NLP", level: 94 },
      { name: "RAG", level: 91 },
    ],
    gradient: "from-pink-400 to-cyan-400",
    accentColor: "pink-400",
  },
];

export function Skills() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f708_1px,transparent_1px),linear-gradient(to_bottom,#a855f708_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Hexagonal overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0l21.65 12.5v25L25 50 3.35 37.5v-25z' fill='none' stroke='%23a855f7' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '50px 50px',
      }} />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-purple-400" />
            <span className="text-purple-400 font-mono text-sm tracking-[0.3em]" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
              {'<'}SKILLS_DATABASE{'>'}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
              TECH
            </span>
            {' '}
            <span className="text-white">STACK</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

              {/* Card with angular cut */}
              <div
                className="relative bg-black border-2 border-white/10 group-hover:border-${category.accentColor} p-6 h-full transition-all duration-500"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)',
                  boxShadow: `0 0 0 rgba(0,255,255,0.2)`,
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} flex items-center justify-center`}
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <category.icon className="w-6 h-6 text-black" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black tracking-wider text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {category.title}
                    </h3>
                    <div className="text-[10px] font-mono text-gray-500 tracking-widest" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                      MODULE_{idx + 1}
                    </div>
                  </div>
                </div>

                {/* Skills with progress bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 + i * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-mono text-gray-300 tracking-wide" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                          {skill.name}
                        </span>
                        <span className={`text-xs font-mono text-${category.accentColor}`} style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-900 border border-white/10 relative overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.gradient} relative`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.2 + i * 0.1 + 0.3 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/30"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2" style={{
                  borderColor: `var(--tw-gradient-stops, ${category.accentColor})`,
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                }} />

                {/* Status indicator */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <motion.div
                    className={`w-2 h-2 bg-${category.accentColor} rounded-full`}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <span className="text-[10px] font-mono text-gray-500 tracking-widest" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                    ACTIVE
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* System stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'TOTAL SKILLS', value: '13+', icon: Database },
            { label: 'EXPERIENCE', value: '5Y+', icon: Terminal },
            { label: 'PROJECTS', value: '50+', icon: Code },
            { label: 'AI MODELS', value: '20+', icon: Cpu },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="relative bg-black border border-cyan-400/30 p-4"
              style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)' }}
            >
              <stat.icon className="w-6 h-6 text-cyan-400/40 mb-2" />
              <div className="text-3xl font-black text-cyan-400 mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {stat.value}
              </div>
              <div className="text-[10px] font-mono text-gray-500 tracking-widest" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
