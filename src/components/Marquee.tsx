import { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  className?: string;
  gap?: string;
};

export default function Marquee({
  children,
  speed = "normal",
  direction = "left",
  className = "",
  gap = "gap-16",
}: MarqueeProps) {
  const speedClass =
    speed === "slow"
      ? "[animation-duration:40s]"
      : speed === "fast"
      ? "[animation-duration:10s]"
      : ""; // uses the default 20s from tailwind config

  const directionClass =
    direction === "right" ? "[animation-direction:reverse]" : "";

  return (
    <div className={`flex w-full overflow-hidden ${className}`}>
      <div
        className={`flex min-w-full shrink-0 animate-marquee items-center justify-around ${gap} ${speedClass} ${directionClass}`}
      >
        {children}
      </div>
      <div
        className={`flex min-w-full shrink-0 animate-marquee items-center justify-around ${gap} ${speedClass} ${directionClass}`}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
