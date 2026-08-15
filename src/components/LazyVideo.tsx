"use client";

import { useEffect, useRef, useState } from "react";

export default function LazyVideo({
  src,
  poster,
  className,
  ariaLabel,
}: {
  src: string;
  poster: string;
  className?: string;
  ariaLabel?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" } // Load a bit before it comes into view
    );

    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : ""}
      preload="metadata"
      autoPlay={shouldLoad}
      loop
      muted
      playsInline
      poster={poster}
      aria-label={ariaLabel}
      className={className}
    />
  );
}
