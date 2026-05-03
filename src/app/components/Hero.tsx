import { motion } from "motion/react";
import { Terminal, ArrowRight, Github, Linkedin, Mail, Activity, Cpu } from "lucide-react";
import { TechBackground } from "./TechBackground";
import { GlitchText } from "./GlitchText";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <TechBackground />

      {/* Glowing neon orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 blur-[120px]" />

      {/* Hexagonal pattern overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%2300ffff' stroke-opacity='0.05' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }} />

      {/* HUD Corner Brackets */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-cyan-400/50" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-cyan-400/50" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-cyan-400/50" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-cyan-400/50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Terminal-style header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-black/60 backdrop-blur-md border border-cyan-400/40 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
        >
          <Terminal className="w-5 h-5 text-cyan-400" />
          <span className="text-sm text-cyan-300 font-mono tracking-wider" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
            {'>'} AI_ML_ENGINEER.EXE
          </span>
          <Activity className="w-5 h-5 text-green-400 animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-9xl font-black mb-6 tracking-wider"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          <GlitchText className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-[0_0_30px_rgba(0,255,255,0.5)]">
            ABIR
          </GlitchText>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-4"
        >
          <div className="inline-block px-6 py-2 bg-cyan-400/10 border-l-4 border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
            <span className="text-xs text-cyan-400 font-mono tracking-widest" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
              DESIGNATION
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl text-gray-300 mb-12 tracking-wide"
          style={{ fontFamily: 'Rajdhani, sans-serif' }}
        >
          BUILDING{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
            AI-POWERED
          </span>
          {' '}EXPERIENCES
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <button
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 bg-cyan-500/10 font-bold text-cyan-400 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center gap-2 overflow-hidden"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))',
              boxShadow: '0 0 20px rgba(0,255,255,0.3)',
            }}
          >
            <span className="relative z-10">VIEW PROJECTS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </button>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-black border-2 border-purple-400 font-bold text-purple-400 hover:bg-purple-400/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)',
            }}
          >
            CONTACT
          </button>
        </motion.div>

        {/* Social links with HUD style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 justify-center"
        >
          {[
            { Icon: Github, href: '#', label: 'GIT' },
            { Icon: Linkedin, href: '#', label: 'LNK' },
            { Icon: Mail, href: '#', label: 'MSG' },
          ].map(({ Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              className="group relative w-14 h-14 bg-black border-2 border-cyan-400/40 flex items-center justify-center text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all duration-300"
              style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
            >
              <Icon className="w-6 h-6 relative z-10" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] text-cyan-400 font-mono">{label}</span>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Tech stats display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-20 left-8 flex flex-col gap-2"
        >
          {[
            { label: 'SYS', value: 'ONLINE', color: 'text-green-400' },
            { label: 'CPU', value: '98%', color: 'text-cyan-400' },
            { label: 'NET', value: 'ACTIVE', color: 'text-purple-400' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3 font-mono text-xs" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
              <span className="text-gray-500">[{stat.label}]</span>
              <div className="w-24 h-1 bg-gray-800">
                <motion.div
                  className={`h-full ${stat.color.replace('text-', 'bg-')}`}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1 + i * 0.2 }}
                />
              </div>
              <span className={stat.color}>{stat.value}</span>
            </div>
          ))}
        </motion.div>

        {/* Neural network HUD */}
        <motion.div
          className="absolute top-1/4 right-10 w-48 h-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Cpu className="w-full h-full text-cyan-400" strokeWidth={0.5} />
          <motion.div
            className="absolute inset-0 border-2 border-cyan-400/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)' }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator - HUD style */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] text-cyan-400 font-mono tracking-widest" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
          SCROLL
        </span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
      </motion.div>
    </section>
  );
}
