import { motion } from "motion/react";
import { useState, useMemo } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  z: number;
  layer: number;
}

interface Connection {
  from: Node;
  to: Node;
  active: boolean;
}

export function NeuralNetwork3D() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Generate neural network nodes
  const nodes = useMemo<Node[]>(() => {
    const layers = [
      { count: 4, layer: 0, y: 50 },   // Input layer
      { count: 6, layer: 1, y: 100 },  // Hidden layer 1
      { count: 6, layer: 2, y: 150 },  // Hidden layer 2
      { count: 3, layer: 3, y: 200 },  // Output layer
    ];

    let nodeId = 0;
    const allNodes: Node[] = [];

    layers.forEach(({ count, layer, y }) => {
      const spacing = 160 / (count + 1);
      for (let i = 0; i < count; i++) {
        allNodes.push({
          id: nodeId++,
          x: 50 + spacing * (i + 1),
          y,
          z: Math.sin(i * 0.5) * 20,
          layer,
        });
      }
    });

    return allNodes;
  }, []);

  // Generate connections
  const connections = useMemo<Connection[]>(() => {
    const conns: Connection[] = [];
    nodes.forEach((node) => {
      const nextLayerNodes = nodes.filter((n) => n.layer === node.layer + 1);
      nextLayerNodes.forEach((nextNode) => {
        conns.push({
          from: node,
          to: nextNode,
          active: Math.random() > 0.3,
        });
      });
    });
    return conns;
  }, [nodes]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setRotation({ x: y * 20, y: x * 20 });
  };

  return (
    <div
      className="relative w-full h-full cursor-grab active:cursor-grabbing"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotation({ x: 0, y: 0 })}
    >
      <svg viewBox="0 0 250 250" className="w-full h-full" style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.1s ease-out',
      }}>
        <defs>
          <linearGradient id="nodeGradient3D" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>

          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <radialGradient id="nodeGlow">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Render connections */}
        {connections.map((conn, i) => {
          const isHighlighted = hoveredNode === conn.from.id || hoveredNode === conn.to.id;

          return (
            <motion.line
              key={`conn-${i}`}
              x1={conn.from.x}
              y1={conn.from.y}
              x2={conn.to.x}
              y2={conn.to.y}
              stroke={isHighlighted ? "url(#connectionGradient)" : "#00ffff"}
              strokeWidth={isHighlighted ? "1.5" : "0.5"}
              strokeOpacity={isHighlighted ? "0.8" : conn.active ? "0.3" : "0.1"}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                strokeOpacity: isHighlighted ? [0.8, 1, 0.8] : conn.active ? "0.3" : "0.1",
              }}
              transition={{
                pathLength: { duration: 1, delay: i * 0.01 },
                strokeOpacity: { duration: 2, repeat: Infinity },
              }}
            />
          );
        })}

        {/* Render nodes */}
        {nodes.map((node) => {
          const isHovered = hoveredNode === node.id;
          const radius = isHovered ? 8 : 5;
          const zOffset = node.z * 0.1;

          return (
            <g key={node.id}>
              {/* Glow effect */}
              {isHovered && (
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={radius * 3}
                  fill="url(#nodeGlow)"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}

              {/* Outer ring */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={radius + 2}
                fill="none"
                stroke="url(#nodeGradient3D)"
                strokeWidth="1"
                opacity={isHovered ? 1 : 0.5}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: isHovered ? 1 : 0.5,
                  r: isHovered ? [radius + 2, radius + 4, radius + 2] : radius + 2,
                }}
                transition={{
                  scale: { duration: 0.5, delay: node.layer * 0.1 },
                  r: isHovered ? { duration: 1.5, repeat: Infinity } : {},
                }}
              />

              {/* Main node */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={radius}
                fill="url(#nodeGradient3D)"
                filter="url(#glow)"
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: isHovered ? [1, 1.2, 1] : 1,
                  opacity: 1,
                }}
                transition={{
                  scale: isHovered ? { duration: 0.8, repeat: Infinity } : { duration: 0.5, delay: node.layer * 0.1 },
                  opacity: { duration: 0.5, delay: node.layer * 0.1 },
                }}
              />

              {/* Center dot */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={radius * 0.3}
                fill="#000000"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: node.layer * 0.1 + 0.2 }}
              />

              {/* Data pulses */}
              {isHovered && (
                <>
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={radius}
                    fill="none"
                    stroke="#00ffff"
                    strokeWidth="2"
                    initial={{ r: radius, opacity: 1 }}
                    animate={{
                      r: radius * 4,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={radius}
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="2"
                    initial={{ r: radius, opacity: 1 }}
                    animate={{
                      r: radius * 4,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: 0.5,
                      ease: "easeOut",
                    }}
                  />
                </>
              )}
            </g>
          );
        })}

        {/* Layer labels */}
        {[
          { y: 50, label: 'INPUT' },
          { y: 100, label: 'HIDDEN_1' },
          { y: 150, label: 'HIDDEN_2' },
          { y: 200, label: 'OUTPUT' },
        ].map((layer, i) => (
          <text
            key={i}
            x="10"
            y={layer.y + 5}
            fill="#00ffff"
            fontSize="8"
            fontFamily="Share Tech Mono, monospace"
            opacity="0.4"
          >
            {layer.label}
          </text>
        ))}
      </svg>

      {/* Info display */}
      {hoveredNode !== null && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 right-4 bg-black/90 border border-cyan-400/40 px-4 py-2 backdrop-blur-sm"
          style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}
        >
          <div className="text-xs font-mono text-cyan-400" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
            <div>NODE_ID: {hoveredNode.toString().padStart(3, '0')}</div>
            <div>LAYER: {nodes.find(n => n.id === hoveredNode)?.layer}</div>
            <div>STATUS: <span className="text-green-400">ACTIVE</span></div>
          </div>
        </motion.div>
      )}

      {/* Instruction */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-mono text-gray-600 text-center" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
        HOVER TO INTERACT • MOVE MOUSE TO ROTATE
      </div>
    </div>
  );
}
