"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePopup } from "./SiteShell";
import Link from "next/link";

export default function LeadPopup() {
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const [businessName, setBusinessName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceInterest, setServiceInterest] = useState("Local SEO & Website Audit");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const hasSubmitted = useRef(false);
  const hasShown = useRef(false);

  useEffect(() => {
    const triggerPopup = () => {
      if (!hasSubmitted.current && !hasShown.current) {
        hasShown.current = true;
        openPopup();
      }
    };

    const timer1 = setTimeout(triggerPopup, 20000); // 20 seconds
    const timer2 = setTimeout(triggerPopup, 60000); // 60 seconds

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
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
      const res = await fetch("/api/submit.php", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          formType: "popup",
          businessName,
          phoneNumber,
          serviceInterest
        })
      });

      if (res.ok) {
        setStatus("success");
        hasSubmitted.current = true;
        setTimeout(() => {
          handleClose();
        }, 2500);
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
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-foreground/10 bg-background/90 p-8 md:p-10 shadow-2xl backdrop-blur-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute right-3 top-3 p-3 text-foreground/50 hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
                <div className="rounded-full bg-green-500/20 p-4 text-green-500">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-heading uppercase">Audit Request Received</h3>
                <p className="text-sm opacity-70 max-w-xs">Sahil from Intvar Automation will review your business and message you on WhatsApp within a few hours.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Zero Cost • 15-Minute Turnaround</span>
                  <h3 className="text-2xl md:text-3xl font-bold font-heading uppercase tracking-tight">Claim Your Free Audit & Growth Plan</h3>
                  <p className="text-xs md:text-sm opacity-70">
                    Find out how your business ranks in local searches in Alwar, Bhiwadi, or Jaipur and where you are losing customer leads to competitors.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="businessName" className="text-xs uppercase tracking-widest font-semibold opacity-80">Business / Clinic / School Name</label>
                    <input
                      id="businessName"
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="rounded-xl border border-foreground/20 bg-background/50 px-4 py-2.5 text-sm text-foreground focus:border-foreground/60 focus:outline-none transition-colors"
                      placeholder="e.g. Apex Health Clinic / Alwar Sweets"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phoneNumber" className="text-xs uppercase tracking-widest font-semibold opacity-80">WhatsApp Phone Number</label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="rounded-xl border border-foreground/20 bg-background/50 px-4 py-2.5 text-sm text-foreground focus:border-foreground/60 focus:outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="serviceInterest" className="text-xs uppercase tracking-widest font-semibold opacity-80">What are you looking for?</label>
                    <select
                      id="serviceInterest"
                      value={serviceInterest}
                      onChange={(e) => setServiceInterest(e.target.value)}
                      className="rounded-xl border border-foreground/20 bg-background/50 px-4 py-2.5 text-sm text-foreground focus:border-foreground/60 focus:outline-none transition-colors"
                    >
                      <option value="Local SEO & Website Audit">Free Local SEO & Google Maps Audit</option>
                      <option value="ERP Intvar for Schools">ERP Intvar for Schools (Demo & Pricing)</option>
                      <option value="Restaurant Billing & Online Ordering">Restaurant Billing & Online Ordering System</option>
                      <option value="WhatsApp & Lead Automation">WhatsApp Automation & CRM Setup</option>
                      <option value="Custom Android App / Software">Custom Software / Android App</option>
                    </select>
                  </div>

                  {status === "error" && (
                    <span className="text-xs text-red-400">Unable to submit. Please message directly on WhatsApp below.</span>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-1 rounded-xl bg-foreground px-4 py-3 text-xs md:text-sm font-bold uppercase tracking-widest text-background transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                  >
                    {status === "loading" ? "Submitting..." : "Send Me My Free Audit"}
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-2 text-xs opacity-60">
                    <span>Prefer instant chat?</span>
                    <Link
                      href="https://wa.me/917372908326?text=Hi%20Sahil,%20I%20would%20like%20a%20free%20audit%20and%20consultation%20for%20my%20business."
                      target="_blank"
                      className="font-bold underline text-foreground hover:opacity-100"
                    >
                      Chat on WhatsApp now
                    </Link>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
