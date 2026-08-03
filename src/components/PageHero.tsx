import TextReveal from "./TextReveal";

export type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  variant?: "dark" | "light";
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  variant = "dark",
}: PageHeroProps) {
  const isDark = variant === "dark";
  const bgClass = isDark ? "bg-background text-foreground" : "bg-[#f4f4f4] text-[#0a0a0a]";
  const blobClass = isDark 
    ? "bg-white/[0.03]" 
    : "bg-black/[0.03]";

  return (
    <section className={`relative w-full min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center pt-40 pb-20 px-4 md:px-8 lg:px-12 overflow-hidden ${bgClass}`}>
      {/* Background Animated Blob */}
      <div className={`absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[100px] animate-pulse pointer-events-none ${blobClass}`} />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-6">
        {/* Eyebrow */}
        <span className="text-xs md:text-sm uppercase tracking-widest opacity-60 font-medium">
          {eyebrow}
        </span>

        {/* Title */}
        <TextReveal 
          as="h1"
          text={title}
          splitBy="lines"
          triggerOnLoad={true}
          delay={0.1}
          className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold font-heading uppercase leading-[0.85] tracking-tighter max-w-5xl"
        />

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 text-base md:text-lg opacity-70 max-w-[600px] leading-relaxed font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
