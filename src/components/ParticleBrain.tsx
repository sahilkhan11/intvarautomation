"use client";

import { useEffect, useRef, useState } from "react";

export default function ParticleBrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Handle reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let pulses: Pulse[] = [];
    let animationFrameId: number;
    let isVisible = false;
    let w = 0;
    let h = 0;
    const mouse = { x: -1000, y: -1000 };

    // Intersection Observer to pause animation when out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0 }
    );
    observer.observe(container);

    // Track mouse position globally for parallax/repel effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top && e.clientY <= rect.bottom
      ) {
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        // Bias spawn positions towards edges, keeping the center mostly clear
        let tempX = Math.random() * w;
        let tempY = Math.random() * h;
        
        const centerX = w / 2;
        const centerY = h / 2;
        const distToCenter = Math.hypot(tempX - centerX, tempY - centerY);
        const minRadius = Math.min(w, h) * 0.35; // 35% away from center

        if (distToCenter < minRadius) {
          const ratio = minRadius / distToCenter;
          tempX = centerX + (tempX - centerX) * ratio;
          tempY = centerY + (tempY - centerY) * ratio;
        }

        this.x = tempX;
        this.y = tempY;
        this.vx = (Math.random() - 0.5) * 0.25; // Slow drift
        this.vy = (Math.random() - 0.5) * 0.25;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update() {
        if (!prefersReducedMotion) {
          this.x += this.vx;
          this.y += this.vy;

          if (this.x < 0 || this.x > w) this.vx *= -1;
          if (this.y < 0 || this.y > h) this.vy *= -1;
        }

        // Subtle repel effect from mouse (150px radius)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);
        
        if (dist < 150) {
          const force = (150 - dist) / 150;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Low opacity for readability constraints (15-20%)
        ctx.fillStyle = "rgba(100, 100, 100, 0.2)";
        ctx.fill();
      }
    }

    class Pulse {
      p1: Particle;
      p2: Particle;
      progress: number;
      speed: number;

      constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
        this.progress = 0;
        this.speed = 0.01 + Math.random() * 0.015; // Speed of the pulse traveling
      }

      update() {
        if (prefersReducedMotion) return true;
        this.progress += this.speed;
        return this.progress >= 1;
      }

      draw() {
        if (!ctx) return;
        const x = this.p1.x + (this.p2.x - this.p1.x) * this.progress;
        const y = this.p1.y + (this.p2.y - this.p1.y) * this.progress;
        
        // Data pulse visual metaphor
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(100, 100, 100, 0.9)"; 
        ctx.fill();
        
        // Glow
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(100, 100, 100, 0.3)";
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      // Performance constraint: 40-50 nodes max
      const numParticles = Math.min(45, Math.max(25, Math.floor((w * h) / 12000))); 
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    let lastPulseTime = 0;

    const animate = (time: number) => {
      if (isVisible) {
        ctx.clearRect(0, 0, w, h);

        const connections: [Particle, Particle][] = [];

        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();

          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.hypot(dx, dy);

            // Connect nodes when they get close
            if (distance < 130) {
              connections.push([particles[i], particles[j]]);
              ctx.beginPath();
              // Low opacity lines (8-12% max)
              const opacity = (1 - distance / 130) * 0.12;
              ctx.strokeStyle = `rgba(100, 100, 100, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }

        // Fire a pulse every ~2 seconds
        if (time - lastPulseTime > 2000 && connections.length > 0 && !prefersReducedMotion) {
          const randomConnection = connections[Math.floor(Math.random() * connections.length)];
          pulses.push(new Pulse(randomConnection[0], randomConnection[1]));
          lastPulseTime = time;
        }

        pulses = pulses.filter(pulse => !pulse.update());
        pulses.forEach(pulse => pulse.draw());
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Tiny delay to ensure DOM is fully laid out before initializing size
    setTimeout(() => {
      resize();
      animationFrameId = requestAnimationFrame(animate);
    }, 50);

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none"
        style={{
          // Radial mask: transparent in the center (where text is), fading to visible at edges
          maskImage: "radial-gradient(circle at center, transparent 15%, black 70%)",
          WebkitMaskImage: "radial-gradient(circle at center, transparent 15%, black 70%)"
        }}
      />
    </div>
  );
}
