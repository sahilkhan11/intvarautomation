"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", businessType: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or reach out directly.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#f4f4f4]">
      <PageHero 
        variant="dark"
        eyebrow="GET IN TOUCH"
        title="Let's build something."
      />

      <Section variant="light" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight text-[#0a0a0a]">
                Start a Project
              </h2>
              <p className="opacity-60 text-sm md:text-base font-medium">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {status === "success" ? (
              <div className="p-8 border border-green-500/20 bg-green-500/5 rounded-2xl flex flex-col gap-4 text-green-800">
                <h3 className="text-2xl font-heading font-bold uppercase tracking-tight">Message Sent!</h3>
                <p className="font-medium">Thank you for reaching out. We&apos;ll be in touch shortly to discuss your project.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-4 w-fit underline underline-offset-4 font-bold uppercase tracking-widest text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest opacity-60">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#0a0a0a]/20 py-3 outline-none focus:border-[#0a0a0a] transition-colors font-medium placeholder:opacity-30"
                    placeholder="John Doe"
                    disabled={status === "loading"}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest opacity-60">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#0a0a0a]/20 py-3 outline-none focus:border-[#0a0a0a] transition-colors font-medium placeholder:opacity-30"
                    placeholder="john@example.com"
                    disabled={status === "loading"}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="businessType" className="text-xs font-bold uppercase tracking-widest opacity-60">Business Type (Optional)</label>
                  <select 
                    id="businessType" 
                    name="businessType" 
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#0a0a0a]/20 py-3 outline-none focus:border-[#0a0a0a] transition-colors font-medium opacity-80"
                    disabled={status === "loading"}
                  >
                    <option value="" disabled>Select a category</option>
                    <option value="retail">Retail / E-Commerce</option>
                    <option value="clinic">Clinic / Healthcare</option>
                    <option value="b2b">B2B / Agency</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest opacity-60">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-transparent border-b border-[#0a0a0a]/20 py-3 outline-none focus:border-[#0a0a0a] transition-colors font-medium placeholder:opacity-30 resize-none"
                    placeholder="Tell us about your current bottlenecks..."
                    disabled={status === "loading"}
                  />
                </div>

                {errorMessage && (
                  <div className="text-red-500 text-sm font-medium">{errorMessage}</div>
                )}

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="rounded-full px-8 py-4 bg-[#0a0a0a] text-white font-medium hover:scale-105 transition-all duration-500 uppercase tracking-widest text-sm disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {status === "loading" ? "Sending..." : "Submit Request"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact */}
          <div className="flex-1 lg:pl-16 flex flex-col gap-12 border-t lg:border-t-0 lg:border-l border-[#0a0a0a]/10 pt-12 lg:pt-0">
            <div className="flex flex-col gap-8">
              
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest opacity-60">Location</span>
                <span className="text-xl font-medium">Based in Alwar, Rajasthan.</span>
                <span className="opacity-70">Working remotely with clients across India to build robust AI systems.</span>
              </div>
              
              <div className="w-full h-px bg-[#0a0a0a]/10" />

              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest opacity-60">Email</span>
                <a href="mailto:contact@intvarautomation.online" className="text-xl font-heading font-bold uppercase tracking-tight hover:opacity-70 transition-opacity">
                  contact@intvarautomation.online
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest opacity-60">Phone / WhatsApp</span>
                <a href="https://wa.me/917372908326" target="_blank" className="text-xl font-heading font-bold uppercase tracking-tight hover:opacity-70 transition-opacity">
                  +91 73729 08326
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest opacity-60">Social</span>
                <a href="https://instagram.com/intvar.automate" target="_blank" className="text-xl font-heading font-bold uppercase tracking-tight hover:opacity-70 transition-opacity">
                  @Intvar.automate
                </a>
              </div>

            </div>
          </div>

        </div>
      </Section>
    </main>
  );
}
