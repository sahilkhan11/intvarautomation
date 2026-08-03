"use client";

import TextReveal from "./TextReveal";

const stories = [
  { quote: "WhatsApp AI Bot recovered 40% of missed calls, converted to paying customers.", name: "Vikram Rathore", role: "Rathore Traders, Alwar" },
  { quote: "Web + lead gen doubled online enquiries in 2 months.", name: "Priyanka Joshi", role: "Jaipur Digital Solutions" }
];

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-b from-[#f4f4f4] to-[#040508] text-[#f4f4f4] py-32 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col gap-24 text-center md:text-left px-4 md:px-8 lg:px-12">
        <div className="flex flex-col gap-6 items-center pt-16">
          <span className="text-sm font-medium uppercase tracking-widest opacity-60 text-[#0a0a0a]">Client Stories</span>
          <TextReveal 
            as="h2"
            text="What our partners say"
            splitBy="words"
            className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter text-[#0a0a0a]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 pt-16">
          {stories.map((story, i) => (
            <div key={i} className="flex flex-col gap-8 bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-colors backdrop-blur-md text-white">
              <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90">&ldquo;{story.quote}&rdquo;</p>
              <div className="flex items-center gap-4 mt-auto pt-8">
                <div className="w-12 h-12 rounded-full bg-white/10" />
                <div className="flex flex-col text-left">
                  <span className="font-bold uppercase tracking-widest text-sm">{story.name}</span>
                  <span className="opacity-50 uppercase tracking-widest text-xs">{story.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
