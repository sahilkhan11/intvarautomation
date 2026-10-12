"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animations = [
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Intelligent systems that learn and adapt.",
    colors: ["#8B5CF6", "#3B82F6"], // Purple to Blue
    content: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-blue-600/20" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ["20%", "50%", "20%"]
          }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          className="w-32 h-32 md:w-48 md:h-48 border-2 border-violet-500/50 flex items-center justify-center relative"
        >
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            className="w-16 h-16 md:w-24 md:h-24 bg-blue-500/30 rounded-full blur-md"
          />
        </motion.div>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-violet-400 rounded-full"
            initial={{ x: Math.random() * 200 - 100, y: Math.random() * 200 - 100, opacity: 0.2 }}
            animate={{
              x: Math.random() * 200 - 100, 
              y: Math.random() * 200 - 100,
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
    )
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "High-performance digital experiences.",
    colors: ["#10B981", "#3B82F6"], // Emerald to Blue
    content: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-cyan-600/20" />
        <div className="flex flex-col gap-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="h-4 md:h-6 bg-emerald-500/20 rounded-md overflow-hidden relative"
              style={{ width: `${100 + Math.random() * 150}px` }}
            >
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-emerald-400/40"
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="absolute text-emerald-400/30 text-8xl md:text-9xl font-mono font-bold right-4 bottom-4"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {"</>"}
        </motion.div>
      </div>
    )
  },
  {
    id: "android-apps",
    title: "Android Applications",
    description: "Native mobile solutions for your users.",
    colors: ["#34D399", "#059669"], // Light Green to Dark Green
    content: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
         <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-700/20" />
         <motion.div 
            className="relative w-24 h-48 md:w-32 md:h-64 border-4 border-green-500/30 rounded-3xl flex flex-col items-center pt-4"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
         >
            <div className="w-16 h-32 md:w-24 md:h-48 overflow-hidden relative flex flex-col gap-2">
                {[...Array(4)].map((_, i) => (
                    <motion.div 
                        key={i}
                        className="w-full h-8 bg-green-400/20 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.3, duration: 0.5 }}
                    />
                ))}
            </div>
            <div className="w-8 h-1 bg-green-500/40 rounded-full mt-auto mb-2" />
         </motion.div>
      </div>
    )
  },
  {
    id: "whatsapp-automation",
    title: "WhatsApp Automation",
    description: "Engage customers seamlessly.",
    colors: ["#25D366", "#128C7E"],
    content: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
         <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/20 to-[#128C7E]/20" />
         <div className="flex flex-col gap-4 w-48 md:w-64">
           {[...Array(3)].map((_, i) => (
             <motion.div
               key={i}
               initial={{ x: i % 2 === 0 ? -20 : 20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.5, delay: i * 0.2 }}
               className={`p-3 rounded-2xl max-w-[80%] ${i % 2 === 0 ? 'bg-white/10 self-start rounded-tl-sm' : 'bg-[#25D366]/20 self-end rounded-tr-sm'}`}
             >
               <motion.div className="h-2 bg-white/30 rounded w-16 mb-2" animate={{ width: ["50%", "100%", "50%"] }} transition={{ duration: 2, repeat: Infinity }} />
               <div className="h-2 bg-white/20 rounded w-24" />
             </motion.div>
           ))}
         </div>
      </div>
    )
  },
  {
    id: "erp-intvar",
    title: "ERP Intvar for Schools",
    description: "Next-generation school management.",
    colors: ["#F59E0B", "#D97706"],
    content: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
         <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20" />
         <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-2" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 10, repeat: Infinity }}>
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={i} 
                className="w-12 h-12 md:w-16 md:h-16 bg-amber-500/20 rounded-lg flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2 + i % 3, repeat: Infinity }}
              >
                <div className="w-4 h-4 bg-amber-400/50 rounded-full" />
              </motion.div>
            ))}
         </motion.div>
      </div>
    )
  },
  {
    id: "restaurant-billing",
    title: "Restaurant Billing & POS",
    description: "Smart billing and online ordering.",
    colors: ["#EF4444", "#B91C1C"],
    content: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
         <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-rose-600/20" />
         <motion.div 
           className="w-32 h-24 md:w-48 md:h-32 border-b-4 border-red-500/50 flex flex-col items-center justify-end pb-2"
           animate={{ y: [-5, 5, -5] }}
           transition={{ duration: 4, repeat: Infinity }}
         >
           <motion.div 
             className="w-24 h-32 md:w-32 md:h-48 bg-white/10 rounded-t-lg flex flex-col justify-end p-2 gap-1 overflow-hidden"
             initial={{ height: 0 }}
             animate={{ height: "100%" }}
           >
             {[...Array(4)].map((_, i) => (
                <motion.div key={i} className="w-full h-2 bg-red-400/30 rounded-full" animate={{ opacity: [0, 1] }} transition={{ delay: i * 0.2 }} />
             ))}
           </motion.div>
         </motion.div>
      </div>
    )
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    description: "24/7 Intelligent virtual assistants.",
    colors: ["#6366F1", "#4F46E5"],
    content: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
         <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-indigo-700/20" />
         <motion.div className="w-24 h-24 md:w-32 md:h-32 bg-indigo-500/20 rounded-full flex items-center justify-center relative">
           <motion.div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-400/40 rounded-full" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
           <motion.div 
             className="absolute -right-4 top-0 w-8 h-8 bg-indigo-300 rounded-full flex items-center justify-center"
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 3, repeat: Infinity }}
           >
             <div className="w-2 h-2 bg-white rounded-full" />
           </motion.div>
         </motion.div>
      </div>
    )
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description: "Engineered exactly for your business.",
    colors: ["#8B5CF6", "#D946EF"],
    content: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
         <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-fuchsia-600/20" />
         <motion.div className="flex gap-4" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
           {[...Array(3)].map((_, i) => (
             <motion.div 
               key={i} 
               className="w-12 h-12 md:w-16 md:h-16 border-2 border-fuchsia-500/40 rounded-xl"
               animate={{ rotate: -360, scale: [1, 1.2, 1] }} 
               transition={{ duration: 4, repeat: Infinity, delay: i }}
             />
           ))}
         </motion.div>
      </div>
    )
  },
  {
    id: "business-automation",
    title: "Business Process Automation",
    description: "Streamline workflows & sync data.",
    colors: ["#F43F5E", "#E11D48"],
    content: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
         <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-rose-700/20" />
         <div className="flex items-center gap-2 md:gap-4">
           {[...Array(3)].map((_, i) => (
             <motion.div 
               key={i} 
               className="w-8 h-8 md:w-12 md:h-12 bg-rose-500/30 rounded-full"
               animate={{ y: [-15, 15, -15] }} 
               transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
             />
           ))}
         </div>
      </div>
    )
  },
  {
    id: "lead-gen-ai",
    title: "Lead Gen & AI Consulting",
    description: "Discover high-quality leads on autopilot.",
    colors: ["#0EA5E9", "#0369A1"],
    content: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
         <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-700/20" />
         <motion.div className="relative w-32 h-32 md:w-48 md:h-48">
           <svg viewBox="0 0 100 100" className="w-full h-full stroke-sky-400/50 stroke-2 fill-none">
             <motion.path 
               d="M 10 90 L 30 60 L 50 70 L 90 20" 
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             />
             <motion.circle cx="90" cy="20" r="4" className="fill-sky-400" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity }} />
           </svg>
         </motion.div>
      </div>
    )
  }
];

export default function HeroAnimations() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * animations.length));
  }, []);

  useEffect(() => {
    // Change animation every 7 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % animations.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentAnim = animations[currentIndex];

  if (!currentAnim) return null;

  return (
    <div className="w-full h-64 md:h-96 lg:h-[400px] mt-8 flex flex-col items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentAnim.id}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-full max-w-3xl relative"
        >
          {currentAnim.content}
          
          <motion.div 
            className="absolute bottom-4 left-6 right-6 flex flex-col md:flex-row justify-between items-start md:items-end z-10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
             <div className="bg-black/20 backdrop-blur-sm p-3 rounded-xl border border-white/10 text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md tracking-tight">{currentAnim.title}</h3>
                <p className="text-sm md:text-base text-white/80 drop-shadow-sm">{currentAnim.description}</p>
             </div>
             
             {/* Progress bar indicator */}
             <div className="w-24 h-1 bg-white/20 rounded-full mt-4 md:mt-0 overflow-hidden relative">
                <motion.div 
                    className="absolute top-0 left-0 bottom-0 bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 7, ease: "linear" }}
                    key={`progress-${currentAnim.id}`}
                />
             </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
