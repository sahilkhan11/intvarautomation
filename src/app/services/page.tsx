"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import TextReveal from "@/components/TextReveal";
import Link from "next/link";
import { servicePillars } from "@/content/services";
import ServiceSchema from "@/components/seo/ServiceSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.fromTo(card, 
            { y: 50, opacity: 0 },
            { 
              y: 0, 
              opacity: 1, 
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://intvarautomation.online/" },
          { name: "Services", item: "https://intvarautomation.online/services" }
        ]}
      />
      <PageHero 
        variant="dark"
        eyebrow="OUR SERVICES"
        title="AI Marketing. Automation. Software."
        subtitle="We help businesses get found, automate, and grow with AI."
      />

      <Section variant="dark" className="pt-8 pb-32">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-24">
          {[...servicePillars].sort((a, b) => a.order - b.order).map((service, index) => (
            <div 
              key={service.id}
              id={service.slug}
              ref={el => { cardsRef.current[index] = el; }}
              className={`relative border rounded-[2rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 lg:gap-24 group transition-all bg-background/50 backdrop-blur-sm ${
                service.isFlagship 
                  ? 'border-foreground/30 hover:border-foreground/50 shadow-[0_0_40px_rgba(255,255,255,0.03)]' 
                  : 'border-foreground/10 hover:border-foreground/30'
              }`}
            >
              <ServiceSchema 
                serviceName={service.title} 
                description={service.description} 
              />
              {/* Left Side: Title & Outcome */}
              <div className="flex flex-col gap-6 lg:w-5/12">
                {service.isFlagship && (
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-foreground text-background rounded-full w-fit">
                    Flagship Service
                  </span>
                )}
                <h2 className={`${service.isFlagship ? 'text-4xl md:text-6xl' : 'text-3xl md:text-5xl'} font-heading font-bold uppercase tracking-tight flex flex-col gap-4`}>
                  <span className="text-5xl md:text-6xl">{service.emoji}</span>
                  {service.title}
                </h2>
                <p className="text-xl md:text-2xl font-medium opacity-90 leading-tight">
                  {service.outcome}
                </p>
              </div>
              
              {/* Right Side: Description, Capabilities, Result, Pricing */}
              <div className="flex flex-col gap-8 lg:w-7/12">
                <p className="text-lg opacity-70 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-col gap-4">
                  <span className="text-sm font-medium uppercase tracking-widest opacity-50">Capabilities</span>
                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map((capability, i) => (
                      <span key={i} className="px-4 py-2 rounded-full border border-foreground/10 bg-white/5 text-sm font-medium opacity-80 whitespace-nowrap">
                        {capability.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlighted Result Callout */}
                <div className="border-l-2 border-foreground/30 pl-6 py-2 my-2">
                  <p className="text-lg font-medium opacity-90 italic">
                    &quot;{service.result}&quot;
                  </p>
                </div>
                
                {/* Pricing Block */}
                <div className="mt-4 p-6 rounded-2xl bg-white/5 border border-foreground/10 flex flex-col gap-2">
                  {service.pricing ? (
                    <>
                      <span className="text-sm font-bold uppercase tracking-widest opacity-50">{service.pricing.label}</span>
                      <span className="text-2xl md:text-3xl font-heading font-bold tracking-tight">
                        ₹{service.pricing.rangeLow.toLocaleString('en-IN')} – ₹{service.pricing.rangeHigh.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs opacity-50 uppercase tracking-widest mt-1">{service.pricing.note}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm font-bold uppercase tracking-widest opacity-50">Investment</span>
                      <span className="text-xl font-heading font-bold tracking-tight">
                        Custom quote — book a call to scope your project
                      </span>
                    </>
                  )}
                </div>
                
                {/* CTA */}
                <div className="mt-4">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-3 w-fit px-8 py-4 rounded-full bg-foreground text-background font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                    <span>Book a call</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Internal Linking to Specific Verticals */}
        <div className="mt-24 max-w-7xl mx-auto flex flex-col items-center gap-8 border-t border-foreground/10 pt-16">
          <span className="text-sm font-medium uppercase tracking-widest opacity-60">Deep Dive into Our Specialized Capabilities</span>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/services/web-development" className="text-lg font-medium hover:text-white/80 underline decoration-foreground/30 underline-offset-4 transition-all">
              Web Development Solutions
            </Link>
            <Link href="/services/android-app-development" className="text-lg font-medium hover:text-white/80 underline decoration-foreground/30 underline-offset-4 transition-all">
              Android App Development
            </Link>
            <Link href="/services/ai-automation" className="text-lg font-medium hover:text-white/80 underline decoration-foreground/30 underline-offset-4 transition-all">
              WhatsApp & AI Automation
            </Link>
            <Link href="/services/custom-software-development" className="text-lg font-medium hover:text-white/80 underline decoration-foreground/30 underline-offset-4 transition-all">
              Custom Digital Solutions
            </Link>
            <Link href="/services/ai-consultancy" className="text-lg font-medium hover:text-white/80 underline decoration-foreground/30 underline-offset-4 transition-all">
              AI Consultancy Services
            </Link>
          </div>
        </div>
      </Section>

      {/* Dark CTA Band */}
      <Section variant="dark" className="py-32 overflow-hidden relative border-t border-foreground/10">
        <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto w-full flex flex-col gap-12 relative z-10 items-center text-center">
          <h2 className="text-sm font-medium uppercase tracking-widest opacity-60">Your Next Step</h2>
          
          <TextReveal 
            as="h2"
            text="Ready to stop losing leads?"
            splitBy="words"
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading uppercase tracking-tighter leading-[0.85] max-w-4xl"
          />

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="group flex items-center justify-center gap-4 w-fit px-8 py-5 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform duration-300">
              <span className="uppercase tracking-widest text-sm font-bold">Start Your Project</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
        
        {/* Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none overflow-hidden">
          <div className="text-[20vw] font-heading font-bold uppercase tracking-tighter leading-none text-center whitespace-nowrap opacity-[0.03]">
            AUTOMATE
          </div>
        </div>
      </Section>
    </main>
  );
}
