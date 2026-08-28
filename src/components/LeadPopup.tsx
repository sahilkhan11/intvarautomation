"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePopup } from "./SiteShell";

export default function LeadPopup() {
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const [businessName, setBusinessName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const hasSubmitted = useRef(false);

  useEffect(() => {
    const triggerPopup = () => {
      if (!hasSubmitted.current) {
        openPopup();
      }
    };

    const timer1 = setTimeout(triggerPopup, 15000); // 15 seconds
    const timer2 = setTimeout(triggerPopup, 40000); // 40 seconds
    const timer3 = setTimeout(triggerPopup, 70000); // 70 seconds

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [openPopup]);

  const handleClose = () => {
    closePopup();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !phoneNumber) return;

    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "80399a07-8f94-443c-9ea8-325fde31d962",
          subject: "New Free Pilot Lead from Website",
          businessName,
          phoneNumber
        }),
      });

      if (res.ok) {
        setStatus("success");
        hasSubmitted.current = true;
        setTimeout(() => {
          handleClose();
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isPopupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-foreground/10 bg-background/80 p-8 shadow-2xl backdrop-blur-xl"
          >
            <button
              onClick={handleClose}
              className="absolute right-2 top-2 p-3 text-foreground/50 hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
                <div className="rounded-full bg-green-500/20 p-3 text-green-500">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-heading uppercase">System Initialized</h3>
                <p className="text-sm opacity-60">We&apos;ll be in touch shortly to set up your free pilot.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-medium uppercase tracking-widest opacity-50">Free Pilot</span>
                  <h3 className="text-3xl font-bold font-heading uppercase tracking-tight">Try the System</h3>
                  <p className="text-sm opacity-60">Enter your details to claim your free Intvar Suite pilot.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="businessName" className="text-xs uppercase tracking-widest font-medium opacity-80">Business Name</label>
                    <input
                      id="businessName"
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="rounded-xl border border-foreground/20 bg-background/50 px-4 py-3 text-sm text-foreground focus:border-foreground/50 focus:outline-none transition-colors"
                      placeholder="e.g. Rathore Traders"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phoneNumber" className="text-xs uppercase tracking-widest font-medium opacity-80">Phone / WhatsApp</label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="rounded-xl border border-foreground/20 bg-background/50 px-4 py-3 text-sm text-foreground focus:border-foreground/50 focus:outline-none transition-colors"
                      placeholder="+91 00000 00000"
                    />
                  </div>

                  {status === "error" && (
                    <span className="text-xs text-red-500">Something went wrong. Please try again.</span>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-2 rounded-xl bg-foreground px-4 py-3 text-sm font-bold uppercase tracking-widest text-background transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {status === "loading" ? "Submitting..." : "Claim Free Pilot"}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
