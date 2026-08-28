import { ReactNode, forwardRef } from "react";

type SectionProps = {
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
};

const Section = forwardRef<HTMLElement, SectionProps>(({
  children,
  variant = "dark",
  className = "",
}, ref) => {
  const baseClasses = "relative w-full py-20 md:py-32 px-4 md:px-8 lg:px-12";
  const variantClasses = variant === "dark" 
    ? "bg-background text-foreground" 
    : "bg-[#f4f4f4] text-[#0a0a0a]";

  return (
    <section ref={ref} data-theme={variant} className={`${baseClasses} ${variantClasses} ${className}`}>
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
});

Section.displayName = "Section";

export default Section;
