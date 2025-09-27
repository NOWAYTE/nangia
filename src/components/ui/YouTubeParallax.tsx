"use client";

import React, { useEffect, useMemo, useRef } from "react";

interface YouTubeParallaxProps {
  url?: string;
  videoId?: string;
  className?: string;
  height?: string; // e.g., '56.25%' for 16:9 when using aspect-ratio trick, but we'll accept fixed '60vh' too
  speed?: number; // parallax intensity
  maxScale?: number; // grow factor
}

export default function YouTubeParallax({
  url,
  videoId,
  className = "",
  height = "60vh",
  speed = 0.25,
  maxScale = 1.06,
}: YouTubeParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const embedSrc = useMemo(() => {
    let id = videoId;
    if (!id && url) {
      try {
        const u = new URL(url);
        if (u.hostname.includes("youtube.com")) {
          id = u.searchParams.get("v") || undefined;
        } else if (u.hostname === "youtu.be") {
          id = u.pathname.replace("/", "");
        }
      } catch {}
    }
    if (!id) return undefined;
    // modest branding and better UX params
    return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
  }, [url, videoId]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let rafId = 0;
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewportH = window.innerHeight || document.documentElement.clientHeight;
        const center = rect.top + rect.height / 2;
        const distanceFromViewportCenter = center - viewportH / 2;
        const translateY = distanceFromViewportCenter * speed * -0.15;
        const visibleRatio = Math.max(0, Math.min(1, 1 - Math.abs(distanceFromViewportCenter) / (viewportH * 0.8)));
        const scale = 1 + (maxScale - 1) * visibleRatio;
        el.style.setProperty("--ytp-translate", `${translateY.toFixed(2)}px`);
        el.style.setProperty("--ytp-scale", `${scale.toFixed(3)}`);
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

  if (!embedSrc) return null;

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black ${className}`}
      style={{
        height,
        transform: "translateY(var(--ytp-translate, 0)) scale(var(--ytp-scale, 1))",
        willChange: "transform",
        transition: "transform 0.06s ease-out",
      }}
    >
      <iframe
        className="absolute inset-0 h-full w-full"
        src={embedSrc}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      {/* Vignette for depth */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}
