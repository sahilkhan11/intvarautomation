"use client";

import dynamic from "next/dynamic";

const DynamicHeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 w-full h-full bg-background/50 animate-pulse" />
});

export default function HeroCanvasWrapper() {
  return <DynamicHeroCanvas />;
}
