"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type MenuOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const menuVariants: any = {
  closed: { y: "-100%", opacity: 0 },
  open: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    }
  },
  exit: { 
    y: "-100%", 
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const linkVariants: any = {
  closed: { y: 50, opacity: 0 },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1]
    }
  })
};

const links = ["Work", "Services", "About", "Demos", "Contact", "Blog"];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="exit"
          className="fixed inset-0 z-[45] bg-foreground text-background flex flex-col justify-center px-6 md:px-12 lg:px-24"
        >
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between gap-12">
            {/* Nav Links */}
            <nav className="flex flex-col gap-6">
              <span className="text-sm font-medium opacity-50 uppercase tracking-widest mb-4">Navigation</span>
              {links.map((link, i) => (
                <div key={link} className="overflow-hidden">
                  <motion.div
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link 
                      href={`/${link.toLowerCase()}`} 
                      className="text-5xl md:text-7xl font-heading uppercase tracking-tight hover:opacity-70 transition-opacity"
                      onClick={onClose}
                    >
                      {link}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>

            {/* Business Info & Socials */}
            <div className="flex flex-col justify-end gap-12 md:pb-8">
              <div className="overflow-hidden">
                <motion.div
                  custom={5}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="flex flex-col gap-2"
                >
                  <span className="text-sm font-medium opacity-50 uppercase tracking-widest">Business Enquiry</span>
                  <a href="mailto:sahil.f09f@gmail.com" className="text-xl md:text-2xl hover:underline underline-offset-4">sahil.f09f@gmail.com</a>
                  <a href="tel:+917372908326" className="text-xl md:text-2xl hover:underline underline-offset-4">+91 7372908326</a>
                </motion.div>
              </div>

              <div className="overflow-hidden">
                <motion.div
                  custom={6}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="flex flex-col gap-4"
                >
                  <span className="text-sm font-medium opacity-50 uppercase tracking-widest">Socials</span>
                  <div className="flex gap-6">
                    <a href="https://instagram.com/intvar.automate" target="_blank" className="hover:opacity-70 transition-opacity">Instagram</a>
                    <a href="https://youtube.com/@intvar.ai.solutions" target="_blank" className="hover:opacity-70 transition-opacity">YouTube</a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
