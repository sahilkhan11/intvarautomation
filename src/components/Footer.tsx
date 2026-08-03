"use client";

import { useState, useEffect } from "react";
import TextReveal from "./TextReveal";
import Link from "next/link";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute:'2-digit' }) + " IST");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#040508] text-white relative flex flex-col pt-32 pb-8 overflow-hidden min-h-screen justify-between">
      {/* CTA Section */}
      <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto w-full flex flex-col gap-12 relative z-10 pt-16">
        <div className="flex justify-between items-start">
          <span className="text-sm font-medium uppercase tracking-widest opacity-60 max-w-[200px]">Let&apos;s set up your system</span>
          <div className="flex flex-col items-end gap-1 text-sm font-medium opacity-60 uppercase tracking-widest">
            <span>Local Time</span>
            <span>{time}</span>
          </div>
        </div>
        
        <TextReveal 
          as="h2"
          text="Try the system before you commit."
          splitBy="words"
          className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading uppercase tracking-tighter leading-[0.85] max-w-5xl"
        />

        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="mailto:contact@intvarautomation.online" className="group flex items-center justify-center gap-4 w-fit px-8 py-5 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform duration-300">
            <span className="uppercase tracking-widest text-sm font-bold">Claim Free Pilot</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link href="https://wa.me/917372908326" target="_blank" className="group flex items-center justify-center gap-4 w-fit px-8 py-5 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium transition-colors duration-300">
            <span className="uppercase tracking-widest text-sm font-bold">WhatsApp Us</span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col w-full mt-auto relative z-10">
        {/* Footer Details */}
        <div className="mt-24 border-t border-white/10 px-4 md:px-8 lg:px-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm uppercase tracking-widest opacity-60">
          <div className="flex flex-col gap-2">
            <span>© {new Date().getFullYear()} Intvar Automation</span>
            <span>Alwar, Rajasthan — +91 7372908326</span>
          </div>
          <div className="flex gap-8">
            <Link href="/blog" className="hover:opacity-100 transition-opacity">Blog</Link>
            <Link href="https://instagram.com/intvar.automate" target="_blank" className="hover:opacity-100 transition-opacity">Instagram</Link>
            <Link href="https://youtube.com/@intvar.ai.solutions" target="_blank" className="hover:opacity-100 transition-opacity">YouTube</Link>
          </div>
        </div>
      </div>

      {/* Background Watermark & Equalizer */}
      <div className="absolute bottom-0 left-0 w-full h-[60vh] flex flex-col justify-end pointer-events-none overflow-hidden">
        <div className="text-[25vw] font-heading font-bold uppercase tracking-tighter leading-none text-center whitespace-nowrap opacity-[0.03] translate-y-1/4">
          INTVAR
        </div>
        
        {/* Equalizer Bars - simple hover reactive bars */}
        <div className="flex w-full h-24 items-end gap-[1px] opacity-20 pointer-events-auto group">
           {[...Array(60)].map((_, i) => {
             // Create a random starting height between 20% and 80%
             const height = 10 + Math.random() * 50;
             return (
               <div 
                 key={i} 
                 className="flex-1 bg-white transition-all duration-300 ease-out hover:h-full hover:bg-white"
                 style={{ height: `${height}%` }}
               />
             );
           })}
        </div>
      </div>
    </footer>
  );
}
