import { motion } from "motion/react";
import { Send, Github, Linkedin, Mail, Twitter, MapPin, Phone, Terminal } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff05_1px,transparent_1px),linear-gradient(to_bottom,#00ffff05_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,255,0.02)_50%)] bg-[length:100%_4px]" />

      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />

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
              {'<'}CONTACT{'>'}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-wider mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]">
              INITIALIZE
            </span>
            {' '}
            <span className="text-white">CONNECTION</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Have a groundbreaking project or want to discuss AI innovations? Let's collaborate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Form container */}
            <div
              className="relative bg-black border-2 border-cyan-400/40 p-8"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)',
                boxShadow: '0 0 40px rgba(0,255,255,0.2)',
              }}
            >
              {/* Form header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-cyan-400/30">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-mono text-cyan-400 tracking-wider" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                  MESSAGE_PROTOCOL
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-cyan-400 mb-2 tracking-wider" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                    {'>'} NAME_INPUT
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black border-2 border-white/20 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-all duration-300 font-mono"
                    style={{
                      fontFamily: 'Share Tech Mono, monospace',
                      clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                    }}
                    placeholder="Enter your name..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-cyan-400 mb-2 tracking-wider" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                    {'>'} EMAIL_ADDRESS
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black border-2 border-white/20 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-all duration-300 font-mono"
                    style={{
                      fontFamily: 'Share Tech Mono, monospace',
                      clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                    }}
                    placeholder="your.email@domain.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-cyan-400 mb-2 tracking-wider" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                    {'>'} MESSAGE_CONTENT
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-black border-2 border-white/20 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-all duration-300 resize-none font-mono"
                    style={{
                      fontFamily: 'Share Tech Mono, monospace',
                      clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                    }}
                    placeholder="Describe your project or inquiry..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="group/btn relative w-full px-6 py-4 bg-cyan-400/10 border-2 border-cyan-400 text-cyan-400 font-black hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)',
                    boxShadow: '0 0 20px rgba(0,255,255,0.3)',
                  }}
                >
                  <span className="relative z-10">TRANSMIT MESSAGE</span>
                  <Send className="w-5 h-5 relative z-10" />
                  <div className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                </button>
              </form>

              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-cyan-400" style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
              }} />
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Social links */}
            <div>
              <h3 className="text-2xl font-black tracking-wider text-white mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                NETWORK
              </h3>

              <div className="space-y-4">
                {[
                  { icon: Github, label: "GITHUB", handle: "@abirmajumdar", gradient: "from-gray-500 to-gray-700", link: "https://github.com/STYLO009" },
                  { icon: Linkedin, label: "LINKEDIN", handle: "Abir Majumdar", gradient: "from-blue-500 to-blue-700", link: "https://www.linkedin.com/in/abir-majumdar-0b0437318/" },
                  { icon: Mail, label: "EMAIL", handle: "abir@example.com", gradient: "from-purple-500 to-pink-500", link: "abirmajumdar112@gmail.com" },
                  { icon: Twitter, label: "TWITTER", handle: "@abirmajumdar", gradient: "from-cyan-500 to-blue-500", link: "https://x.com/abir_majum0001" },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="group relative flex items-center gap-4 p-4 bg-black border-2 border-white/10 hover:border-cyan-400/60 transition-all duration-300"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)' }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${social.gradient} flex items-center justify-center`}
                      style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                      <social.icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 font-mono mb-1" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                        {social.label}
                      </p>
                      <p className="font-semibold text-white" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {social.handle}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 bg-cyan-400" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* System status display */}
            <div
              className="relative bg-black border-2 border-purple-400/40 p-6"
              style={{
                clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
                boxShadow: '0 0 30px rgba(168,85,247,0.2)',
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-purple-400/30">
                  <Terminal className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-mono text-purple-400 tracking-wider" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                    SYSTEM_STATUS
                  </span>
                </div>

                {[
                  { label: 'AVAILABILITY', value: 'ONLINE', status: 'active' },
                  { label: 'RESPONSE_TIME', value: '< 24H', status: 'optimal' },
                  { label: 'TIMEZONE', value: 'UTC+0', status: 'synced' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-500" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                      {item.label}:
                    </span>
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-2 h-2 bg-green-400"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                      <span className="text-sm font-mono text-green-400" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-purple-400" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-purple-400" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative mt-32 pt-8 border-t-2 border-cyan-400/20 text-center"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-xs font-mono text-cyan-400 tracking-[0.2em]" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
              SYSTEM_ID: ABIR_MAJUMDAR_v2026
            </span>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
          <p className="text-gray-600 font-mono text-sm" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
            © 2026 | ABIR MAJUMDAR
          </p>
        </div>
      </motion.div>
    </section>
  );
}
