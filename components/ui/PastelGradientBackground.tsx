"use client";

import { cn } from "@/lib/utils";

interface PastelGradientBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function PastelGradientBackground({
  children,
  className,
}: PastelGradientBackgroundProps) {
  return (
    <div
      className={cn(
        "relative w-full h-full min-h-screen overflow-hidden",
        className
      )}
    >
      {/* Base background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #f0eeff, #e8f0ff)" }}
      />

      {/* Rotating pastel layer 1 — adapted to Webmento brand blues/purples/oranges */}
      <div
        className="pastel-layer-1 absolute pointer-events-none overflow-hidden opacity-[0.22] blur-[80px]"
        style={{
          top: "50%",
          left: "50%",
          width: "200%",
          height: "200%",
        }}
      />

      {/* Rotating pastel layer 2 */}
      <div
        className="pastel-layer-2 absolute pointer-events-none overflow-hidden opacity-[0.18] blur-[80px]"
        style={{
          top: "50%",
          left: "50%",
          width: "180%",
          height: "180%",
        }}
      />

      {/* Warm paper overlay for brand cohesion */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(245,242,236,0.75) 0%, rgba(245,242,236,0.4) 60%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}

export default PastelGradientBackground;
