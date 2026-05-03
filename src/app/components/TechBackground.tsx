import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function TechBackground() {
  const [lines, setLines] = useState<Array<{ id: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const newLines = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));
    setLines(newLines);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {/* Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,255,0.03)_50%)] bg-[length:100%_4px] animate-scan" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff08_1px,transparent_1px),linear-gradient(to_bottom,#00ffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Animated circuit lines */}
      <svg className="absolute inset-0 w-full h-full">
        {lines.map((line) => (
          <motion.line
            key={line.id}
            x1={`${Math.random() * 100}%`}
            y1="0%"
            x2={`${Math.random() * 100}%`}
            y2="100%"
            stroke="url(#circuitGradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00ffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Matrix-like code rain */}
      <div className="absolute inset-0 flex justify-around">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="text-cyan-500/20 text-xs font-mono"
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
            animate={{
              y: ['0%', '100%'],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {Array.from({ length: 10 }).map((_, j) => (
              <div key={j}>
                {Math.random().toString(36).substring(2, 3)}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
