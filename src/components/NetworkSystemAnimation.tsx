"use client";

import { motion } from "framer-motion";

export default function NetworkSystemAnimation() {
  // Define 7 nodes (screens)
  // node 0 is the center, nodes 1-6 are surrounding it
  const nodes = [
    { id: "center", x: "50%", y: "50%", delay: 2.5 },
    { id: "n1", x: "20%", y: "20%", delay: 0 },
    { id: "n2", x: "80%", y: "20%", delay: 0.4 },
    { id: "n3", x: "15%", y: "50%", delay: 0.8 },
    { id: "n4", x: "85%", y: "50%", delay: 1.2 },
    { id: "n5", x: "30%", y: "80%", delay: 1.6 },
    { id: "n6", x: "70%", y: "80%", delay: 2.0 },
  ];

  // Connections (edges) between nodes
  // We want lines to draw from the outer nodes to the center node
  const connections = [
    { from: "n1", to: "center", delay: 3.0 },
    { from: "n2", to: "center", delay: 3.2 },
    { from: "n3", to: "center", delay: 3.4 },
    { from: "n4", to: "center", delay: 3.6 },
    { from: "n5", to: "center", delay: 3.8 },
    { from: "n6", to: "center", delay: 4.0 },
    // Some cross connections for a "network" feel
    { from: "n1", to: "n3", delay: 4.2 },
    { from: "n2", to: "n4", delay: 4.4 },
    { from: "n3", to: "n5", delay: 4.6 },
    { from: "n4", to: "n6", delay: 4.8 },
  ];

  const getPos = (id: string) => {
    const node = nodes.find(n => n.id === id);
    return { x: node?.x || "0%", y: node?.y || "0%" };
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30">
        
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-blue-500/5 to-purple-500/10" />

        {/* SVG layer for drawing connecting lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          {connections.map((conn, i) => (
            <motion.line
              key={i}
              x1={getPos(conn.from).x}
              y1={getPos(conn.from).y}
              x2={getPos(conn.to).x}
              y2={getPos(conn.to).y}
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: conn.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>

        {/* HTML layer for nodes (screens) */}
        {nodes.map((node) => {
          const isCenter = node.id === "center";
          return (
            <motion.div
              key={node.id}
              className={`absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] overflow-hidden ${
                isCenter ? "w-24 h-32 md:w-32 md:h-40 bg-indigo-500/20 backdrop-blur-md z-10" : "w-16 h-20 md:w-20 md:h-24 bg-white/5 backdrop-blur-sm z-10"
              }`}
              style={{ left: node.x, top: node.y }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: node.delay
              }}
            >
              {/* Fake screen content */}
              <div className="w-full h-full p-2 flex flex-col gap-2 relative">
                <div className={`w-full ${isCenter ? "h-3" : "h-1"} bg-white/30 rounded-full`} />
                <div className={`w-3/4 ${isCenter ? "h-3" : "h-1"} bg-white/20 rounded-full`} />
                <div className={`w-1/2 ${isCenter ? "h-3" : "h-1"} bg-white/10 rounded-full`} />
                
                {isCenter && (
                  <motion.div 
                    className="absolute inset-0 bg-indigo-500/20"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 5 }}
                  />
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Global pulsing effect after system is built */}
        <motion.div
          className="absolute inset-0 bg-indigo-500/5 mix-blend-screen pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 6 }}
        />
    </div>
  );
}
