import { motion } from "motion/react";
import { Bot, Palette, GraduationCap, ExternalLink, Github, Terminal } from "lucide-react";

const projects = [
  {
    title: "LINKEDIN AUTOMATION BOT",
    description: "Advanced conversational AI system powered by state-of-the-art NLP models with context-aware responses and real-time learning capabilities.",
    icon: Bot,
    gradient: "from-cyan-400 to-blue-500",
    tags: ["NLP", "Python", "LangChain", "RAG"],
    status: "DEPLOYED",
    version: "v2.4.1",
    accentColor: "cyan",
  },
  {
    title: "SANJEEVANI AI HEALTH CHATBOT",
    description: "Creative visual organization platform with AI-powered image suggestions, smart categorization, and collaborative features.",
    icon: Bot,
    gradient: "from-purple-400 to-pink-500",
    tags: ["React", "JavaScript", "Tailwind", "AI"],
    status: "ACTIVE",
    version: "v1.8.3",
    accentColor: "purple",
  },
  {
    title: "JARVIS - AI RESPONSIVE BOT",
    description: "•	Built contextual AI assistant using NLP-based response generation",
    icon: Bot,
    gradient: "from-pink-400 to-cyan-400",
    tags: ["ML", "Python", "CNN", "MySQL"],
    status: "BETA",
    version: "v3.1.0",
    accentColor: "pink",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff05_1px,transparent_1px),linear-gradient(to_bottom,#00ffff05_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Glowing accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-mono text-sm tracking-[0.3em]" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
              {'<'}PROJECT_ARCHIVE{'>'}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]">
              FEATURED
            </span>
            {' '}
            <span className="text-white">PROJECTS</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

              {/* Card */}
              <div
                className="relative bg-black border-2 border-white/10 group-hover:border-${project.accentColor}-400 transition-all duration-500"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 50px 100%, 0 calc(100% - 50px))',
                  boxShadow: '0 0 0 rgba(0,255,255,0)',
                }}
              >
                <div className="flex flex-col md:flex-row gap-8 p-8 md:p-10">
                  {/* Icon section with HUD */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className={`w-32 h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
                        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                        <project.icon className="w-16 h-16 text-black" strokeWidth={2} />

                        {/* Rotating border */}
                        <motion.div
                          className="absolute inset-0 border-2 border-white/30"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                        />
                      </div>

                      {/* Status indicator */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black border border-${project.accentColor}-400 px-3 py-1">
                        <div className="flex items-center gap-2">
                          <motion.div
                            className={`w-2 h-2 bg-${project.accentColor}-400`}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="text-[10px] font-mono text-${project.accentColor}-400 tracking-widest" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-black tracking-wider text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${project.gradient} transition-all duration-300" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-mono text-gray-500" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                            VERSION: {project.version}
                          </span>
                          <div className="h-3 w-[1px] bg-gray-700" />
                          <span className="text-xs font-mono text-gray-500" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                            ID: PROJ_{String(idx + 1).padStart(3, '0')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6" style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '17px' }}>
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-4 py-1.5 bg-black border border-white/20 text-sm text-gray-300 font-mono hover:border-${project.accentColor}-400 hover:text-${project.accentColor}-400 transition-all duration-300"
                          style={{
                            fontFamily: 'Share Tech Mono, monospace',
                            clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="group/btn relative px-6 py-3 bg-cyan-400/10 border-2 border-cyan-400 text-cyan-400 font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center gap-2 overflow-hidden"
                        style={{
                          fontFamily: 'Orbitron, sans-serif',
                          clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
                        }}
                      >
                        <span className="relative z-10 text-sm">VIEW PROJECT</span>
                        <ExternalLink className="w-4 h-4 relative z-10" />
                        <div className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                      </a>
                      <a
                        href="#"
                        className="px-6 py-3 bg-black border-2 border-white/20 text-white font-bold hover:border-white/60 transition-all duration-300 flex items-center gap-2"
                        style={{
                          fontFamily: 'Orbitron, sans-serif',
                          clipPath: 'polygon(12px 0, 100% 0, 100% 100%, 0 100%, 0 12px)',
                        }}
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">SOURCE</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-${project.accentColor}-400/40" style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                }} />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-${project.accentColor}-400/40" style={{
                  clipPath: 'polygon(0 0, 0 100%, 100% 100%)',
                }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
