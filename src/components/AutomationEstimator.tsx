"use client";

import { useState } from "react";
import ParticleBrain from "./ParticleBrain";

export default function AutomationEstimator() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const problem = formData.get("problem") as string;
      const phoneNumber = formData.get("phoneNumber") as string;
      
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "87c298fd-71c0-44df-a656-a8bee5ecfc91",
          subject: "New Automation Estimate Request",
          problem,
          phoneNumber
        })
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }
      
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error("Web3Forms submission failed:", err);
      setIsSubmitting(false);
      setError("Failed to save lead. Please try again.");
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-foreground/5 p-8 rounded-3xl border border-foreground/10 text-center space-y-4 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold">Query Received!</h3>
        <p className="text-foreground/70">
          Thanks for reaching out. We will review your business problem and message you on WhatsApp with a personalized automation feasibility analysis and cost estimate.
        </p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-sky-100 dark:bg-sky-900/30 p-6 md:p-10 rounded-3xl border border-sky-200 dark:border-sky-800 max-w-6xl mx-auto w-full">
      <ParticleBrain />
      
      <div className="relative z-10 mb-8 space-y-2">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Can your business be automated?</h3>
        <p className="text-foreground/70">Tell us what&apos;s slowing you down. We&apos;ll analyze your problem and WhatsApp you a cost estimate.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 h-full flex flex-col">
          <label htmlFor="problem" className="text-sm font-medium">Your Business Problem / Process</label>
          <textarea 
            id="problem"
            name="problem" 
            required 
            placeholder="e.g., We spend 3 hours a day manually replying to customer inquiries..."
            className="w-full h-full min-h-[120px] bg-black/90 text-white border border-foreground/20 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none placeholder:text-white/40"
          ></textarea>
        </div>
        
        <div className="flex flex-col justify-between gap-4 h-full">
          <div className="space-y-2">
            <label htmlFor="phoneNumber" className="text-sm font-medium">WhatsApp Number</label>
            <input 
              type="tel" 
              id="phoneNumber"
              name="phoneNumber" 
              required 
              placeholder="e.g., +91 98765 43210"
              className="w-full bg-black/90 text-white border border-foreground/20 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-white/40"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-foreground text-background font-medium rounded-xl py-4 hover:opacity-90 transition-opacity disabled:opacity-50 mt-auto"
          >
            {isSubmitting ? "Submitting..." : "Get Cost Estimate"}
          </button>
        </div>
      </form>
    </div>
  );
}
