"use client";

import { useMemo } from "react";

type Bubble = {
  top: string;
  left: string;
  size: number;
  blur: number;
  opacity: number;
  delay: number;
  duration: number;
};

export function BubbleBackground() {
  const bubbles = useMemo<Bubble[]>(
    () => [
      { top: "10%", left: "8%", size: 180, blur: 0.5, opacity: 0.45, delay: 0, duration: 18 },
      { top: "22%", left: "78%", size: 240, blur: 0.2, opacity: 0.40, delay: 2, duration: 22 },
      { top: "62%", left: "12%", size: 280, blur: 0.4, opacity: 0.32, delay: 1, duration: 26 },
      { top: "68%", left: "70%", size: 190, blur: 0.6, opacity: 0.36, delay: 3, duration: 20 },
      { top: "40%", left: "50%", size: 320, blur: 0.3, opacity: 0.26, delay: 4, duration: 28 },
      { top: "82%", left: "38%", size: 150, blur: 0.7, opacity: 0.30, delay: 0.5, duration: 17 },
      { top: "8%", left: "50%", size: 120, blur: 0.8, opacity: 0.30, delay: 1.5, duration: 16 },
      { top: "50%", left: "88%", size: 140, blur: 0.7, opacity: 0.28, delay: 2.5, duration: 19 },
      { top: "30%", left: "25%", size: 110, blur: 0.9, opacity: 0.22, delay: 4.5, duration: 21 },
      { top: "86%", left: "82%", size: 210, blur: 0.5, opacity: 0.22, delay: 3.5, duration: 24 },
    ],
    []
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* extra soft vignette */}
      <div className="absolute inset-0 opacity-70 animate-shimmer"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 10%, rgba(255,255,255,0.55), transparent 60%), radial-gradient(60% 60% at 50% 100%, rgba(255,255,255,0.35), transparent 65%)"
        }}
      />
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
            filter: `blur(${b.blur}px)`,
            animation: `floaty ${b.duration}s ease-in-out ${b.delay}s infinite, drift ${Math.max(
              14,
              Math.round(b.duration * 0.9)
            )}s ease-in-out ${b.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}
