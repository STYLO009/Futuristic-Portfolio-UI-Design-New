import { motion } from "motion/react";
import { Trophy, Users, Award, Star, Target, Zap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "HACKATHON FINALIST",
    description: "Top finalist in prestigious tech hackathon with innovative AI-powered solution",
    gradient: "from-yellow-400 to-orange-500",
    accentColor: "yellow-400",
    year: "2025",
    category: "COMPETITION",
  },
  {
    icon: Users,
    title: "ML MENTOR",
    description: "Guided 50+ students in machine learning fundamentals and practical applications",
    gradient: "from-cyan-400 to-blue-500",
    accentColor: "cyan-400",
    year: "2024-25",
    category: "EDUCATION",
  },
  {
    icon: Award,
    title: "INNOVATION AWARD",
    description: "Recognized for breakthrough AI solutions in educational technology sector",
    gradient: "from-purple-400 to-pink-500",
    accentColor: "purple-400",
    year: "2024",
    category: "RECOGNITION",
  },
];

export function Achievements() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Tech background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f705_1px,transparent_1px),linear-gradient(to_bottom,#a855f705_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Circuit-like patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0 50 L50 50 L50 100 L100 100" stroke="#00ffff" fill="none" strokeWidth="1"/>
              <path d="M200 150 L150 150 L150 100 L100 100" stroke="#a855f7" fill="none" strokeWidth="1"/>
              <circle cx="50" cy="50" r="3" fill="#00ffff"/>
              <circle cx="100" cy="100" r="3" fill="#a855f7"/>
              <circle cx="150" cy="150" r="3" fill="#00ffff"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-yellow-400" />
            <span className="text-yellow-400 font-mono text-sm tracking-[0.3em]" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
              {'<'}ACHIEVEMENT_LOG{'>'}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.5)]">
              MILESTONES
            </span>
            {' '}
            <span className="text-white">UNLOCKED</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

              {/* Card */}
              <div
                className="relative bg-black border-2 border-white/10 group-hover:border-${achievement.accentColor} p-8 h-full transition-all duration-500"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)',
                  boxShadow: '0 0 0 rgba(0,0,0,0)',
                }}
              >
                {/* Category tag */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-${achievement.accentColor}/10 border border-${achievement.accentColor}/30">
                  <span className="text-[10px] font-mono text-${achievement.accentColor} tracking-widest" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                    {achievement.category}
                  </span>
                </div>

                {/* Icon with animated border */}
                <div className="relative w-24 h-24 mx-auto mb-6 mt-4">
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} flex items-center justify-center`}
                    style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                    <achievement.icon className="w-12 h-12 text-black" strokeWidth={2.5} />
                  </div>

                  {/* Pulsing outline */}
                  <motion.div
                    className="absolute inset-0 border-2 border-${achievement.accentColor}"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
                  />

                  {/* Corner decorations */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-${achievement.accentColor}" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-${achievement.accentColor}" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-${achievement.accentColor}" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-${achievement.accentColor}" />
                </div>

                {/* Year badge */}
                <div className="flex justify-center mb-4">
                  <div className="px-4 py-1 bg-black border border-${achievement.accentColor}/40">
                    <span className="text-sm font-mono text-${achievement.accentColor}" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                      {achievement.year}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black tracking-wider text-white text-center mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-center leading-relaxed text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {achievement.description}
                </p>

                {/* Status bar */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs font-mono" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                    <span className="text-gray-500">STATUS:</span>
                    <div className="flex items-center gap-2">
                      <motion.div
                        className={`w-2 h-2 bg-${achievement.accentColor}`}
                        animate={{
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: idx * 0.3,
                        }}
                      />
                      <span className={`text-${achievement.accentColor}`}>VERIFIED</span>
                    </div>
                  </div>
                </div>

                {/* Corner cut decoration */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-${achievement.accentColor}/40" style={{
                  clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 relative bg-black border-2 border-cyan-400/30 p-8"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))',
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'AWARDS', value: '15+', icon: Trophy },
              { label: 'MENTEES', value: '50+', icon: Users },
              { label: 'CERTIFICATIONS', value: '8', icon: Award },
              { label: 'SCORE', value: '98%', icon: Star },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-8 h-8 text-cyan-400/40 mx-auto mb-2" />
                <div className="text-4xl font-black text-cyan-400 mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-gray-500 tracking-widest" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-cyan-400" style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
          }} />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-cyan-400" style={{
            clipPath: 'polygon(0 0, 0 100%, 100% 100%)',
          }} />
        </motion.div>
      </div>
    </section>
  );
}
