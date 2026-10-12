"use client";
import { useState } from "react";

export default function HumanizeForm() {
  const [formData, setFormData] = useState({
    pageHeroTitle: "We build AI systems which helps in building your business.",
    pageHeroSubtitle: "Intvar is an AI automation agency specially dedicated to Indian businesses, to replace their manual work with AI workflows which are affordable and can work all week without taking any leave. And from our AI service, finding leads, booking appointments and follow up become a lot easier for both the customers and for businesses.",
    whoWeAreText: "Intvar Automation is a tight-knit team of 5-6 people based in Alwar, Rajasthan. We started this studio to help local clinics, shops, and traders escape the spreadsheet chaos and missed-call logs. We don't sell bloated software or vanity metrics—we build tailored, real AI workflows that automatically manage your back-office so you can focus entirely on running your business.",
    howWeWork1Title: "Fast setup, no bloat.",
    howWeWork1Desc: "We deploy what you need. Skip the unnecessary features.",
    howWeWork2Title: "Built for local business.",
    howWeWork2Desc: "Tailored workflows for clinics and shops in India.",
    howWeWork3Title: "Small team, direct access.",
    howWeWork3Desc: "No support queues. You work directly with our core team.",
    impactDesc: "Real results delivered for businesses taking the leap into AI automation.",
    ctaTitle: "Ready to stop losing leads?"
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/humanize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setSaved(true);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 max-w-3xl mx-auto font-sans pt-24 pb-32">
      <h1 className="text-3xl font-bold mb-8">Humanize Content: About Page</h1>
      {saved ? (
        <div className="bg-green-900/50 text-green-400 p-6 rounded-lg text-center border border-green-500">
          <h2 className="text-2xl font-bold mb-2">Saved Successfully!</h2>
          <p>Please return to the AI chat and tell me you've saved the content.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <p className="text-white/50 mb-4 line-through">Current: We build AI systems which helps in building your business.</p>
            <input 
              name="pageHeroTitle" 
              value={formData.pageHeroTitle} 
              onChange={handleChange}
              className="w-full bg-black border border-white/20 rounded p-3 text-white" 
            />
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <p className="text-white/50 mb-4 line-through">Current Subtitle (Long description at top)</p>
            <textarea 
              name="pageHeroSubtitle" 
              value={formData.pageHeroSubtitle} 
              onChange={handleChange}
              rows={4}
              className="w-full bg-black border border-white/20 rounded p-3 text-white" 
            />
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <p className="text-white/50 mb-4 line-through">Current Who We Are text</p>
            <textarea 
              name="whoWeAreText" 
              value={formData.whoWeAreText} 
              onChange={handleChange}
              rows={4}
              className="w-full bg-black border border-white/20 rounded p-3 text-white" 
            />
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <p className="text-white/50 mb-4 line-through">Current: Fast setup, no bloat.</p>
            <input 
              name="howWeWork1Title" 
              value={formData.howWeWork1Title} 
              onChange={handleChange}
              className="w-full bg-black border border-white/20 rounded p-3 text-white" 
            />
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <p className="text-white/50 mb-4 line-through">Current: We deploy what you need. Skip the unnecessary features.</p>
            <input 
              name="howWeWork1Desc" 
              value={formData.howWeWork1Desc} 
              onChange={handleChange}
              className="w-full bg-black border border-white/20 rounded p-3 text-white" 
            />
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <p className="text-white/50 mb-4 line-through">Current: Built for local business.</p>
            <input 
              name="howWeWork2Title" 
              value={formData.howWeWork2Title} 
              onChange={handleChange}
              className="w-full bg-black border border-white/20 rounded p-3 text-white" 
            />
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <p className="text-white/50 mb-4 line-through">Current: Tailored workflows for clinics and shops in India.</p>
            <input 
              name="howWeWork2Desc" 
              value={formData.howWeWork2Desc} 
              onChange={handleChange}
              className="w-full bg-black border border-white/20 rounded p-3 text-white" 
            />
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <p className="text-white/50 mb-4 line-through">Current: Small team, direct access.</p>
            <input 
              name="howWeWork3Title" 
              value={formData.howWeWork3Title} 
              onChange={handleChange}
              className="w-full bg-black border border-white/20 rounded p-3 text-white" 
            />
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <p className="text-white/50 mb-4 line-through">Current: No support queues. You work directly with our core team.</p>
            <input 
              name="howWeWork3Desc" 
              value={formData.howWeWork3Desc} 
              onChange={handleChange}
              className="w-full bg-black border border-white/20 rounded p-3 text-white" 
            />
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <p className="text-white/50 mb-4 line-through">Current: Real results delivered for businesses taking the leap into AI automation.</p>
            <textarea 
              name="impactDesc" 
              value={formData.impactDesc} 
              onChange={handleChange}
              rows={2}
              className="w-full bg-black border border-white/20 rounded p-3 text-white" 
            />
          </div>

          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <p className="text-white/50 mb-4 line-through">Current CTA: Ready to stop losing leads?</p>
            <input 
              name="ctaTitle" 
              value={formData.ctaTitle} 
              onChange={handleChange}
              className="w-full bg-black border border-white/20 rounded p-3 text-white" 
            />
          </div>

          <button type="submit" className="bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors">
            Save All Changes
          </button>
        </form>
      )}
    </div>
  );
}
