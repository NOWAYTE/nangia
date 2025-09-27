"use client";

import React, { useEffect, useRef } from "react";

interface VideoParallaxProps {
  src: string;
  poster?: string;
  className?: string;
  height?: string; // e.g. '80vh'
  speed?: number; // parallax intensity, default 0.3
  maxScale?: number; // how large it grows, default 1.1
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}

export default function VideoParallax({
  src,
  poster,
  className = "",
  height = "80vh",
  speed = 0.3,
  maxScale = 1.1,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
}: VideoParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = 0;

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewportH = window.innerHeight || document.documentElement.clientHeight;

        // progress from 0 (below viewport) to 1 (fully passed)
        // We'll clamp between -0.5 and 1.5 to keep motion around edges
        const center = rect.top + rect.height / 2;
        const distanceFromViewportCenter = center - viewportH / 2;

        // Parallax translate: smaller movement than scroll
        const translateY = distanceFromViewportCenter * speed * -0.15; // invert so it moves against scroll a bit

        // Scale in as it approaches center
        const visibleRatio = Math.max(0, Math.min(1, 1 - Math.abs(distanceFromViewportCenter) / (viewportH * 0.8)));
        const scale = 1 + (maxScale - 1) * visibleRatio; // grows toward maxScale near center

        if (el) {
          el.style.setProperty("--vp-translate", `${translateY.toFixed(2)}px`);
          el.style.setProperty("--vp-scale", `${scale.toFixed(3)}`);
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed, maxScale]);

  return (
    <section
      ref={ref}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height }}
      aria-label="Parallax video section"
    >
      {/* Background frame */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-[#0f0f0f]" />

      {/* Video element */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          transform: "translateY(var(--vp-translate, 0)) scale(var(--vp-scale, 1))",
          willChange: "transform",
          transition: "transform 0.06s ease-out",
        }}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
      />

      {/* Optional top/bottom vignettes for luxury depth */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}
