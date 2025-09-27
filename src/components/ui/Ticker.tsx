import React from "react";

export type TickerDirection = "ltr" | "rtl";

interface TickerProps {
    items: React.ReactNode[];
    direction?: TickerDirection; // default ltr
    speedPercent?: number; // 100 = baseline speed, 97% requested
    hoverSpeedScale?: number; // 0.8x speed on hover => duration * (1/0.8) = 1.25
    gapClassName?: string; // e.g., "gap-16"
    paddingClassName?: string; // e.g., "p-4" for 16px padding
    clipWidthPx?: number; // e.g., 5008
    className?: string;
    // Fade mask controls
    fade?: boolean;
    fadeWidthPercent?: number; // e.g., 5 for 5%
    fadeInsetPercent?: number; // e.g., 0 for 0%
    fadeOpacity?: number; // 0..1, e.g., 0.8
}

/**
 * Ticker renders a continuous marquee by duplicating the content track.
 * - Direction LTR means content flows left-to-right (appears from the left, moves to the right).
 * - speedPercent controls animation duration relative to a base duration.
 */
const BASE_DURATION_S = 30; // seconds

export default function Ticker({
    items,
    direction = "ltr",
    speedPercent = 100,
    hoverSpeedScale = 1.25, // 0.8x speed => duration * 1.25
    gapClassName = "gap-16",
    paddingClassName = "p-4",
    clipWidthPx = 5008,
    className = "",
    fade = false,
    fadeWidthPercent = 5,
    fadeInsetPercent = 0,
    fadeOpacity = 0.8,
}: TickerProps) {
    // Higher speedPercent => faster => shorter duration
    const durationSeconds = BASE_DURATION_S * (100 / Math.max(1, speedPercent));

    const trackClass = direction === "ltr" ? "ticker-animate-ltr" : "ticker-animate-rtl";

    const commonTrack = (
        <div className={`ticker-track ${gapClassName}`}>
            {items.map((item, idx) => (
                <div key={idx} className="shrink-0">
                    {item}
                </div>
            ))}
        </div>
    );

    const containerClasses = [
        "ticker-container mx-auto",
        paddingClassName,
        className,
        fade ? "ticker-fade" : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div
            className={containerClasses}
            style={{
                width: clipWidthPx ? `${clipWidthPx}px` : undefined,
                // animation controls
                // @ts-ignore: custom properties allowed
                "--ticker-duration": `${durationSeconds}s`,
                // @ts-ignore
                "--ticker-hover-scale": hoverSpeedScale,
                // fade controls
                // @ts-ignore
                "--ticker-fade-width": `${fadeWidthPercent}%`,
                // @ts-ignore
                "--ticker-fade-inset": `${fadeInsetPercent}%`,
                // @ts-ignore
                "--ticker-fade-opacity": fadeOpacity,
            }}
        >
            {/* Two tracks duplicated to enable seamless looping */}
            <div className={`inline-flex ${trackClass}`}>{commonTrack}{commonTrack}</div>
        </div>
    );
}
