"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Star } from "lucide-react";
import dynamic from "next/dynamic";
import { PastelGradientBackground } from "@/components/ui/PastelGradientBackground";
import { webmentoHyperspeedPreset } from "@/components/ui/Hyperspeed";

const Hyperspeed = dynamic(
  () => import("@/components/ui/Hyperspeed").then((m) => m.Hyperspeed),
  { ssr: false }
);

function MockupCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / (rect.height / 2)) * 10;
      const rotateY = (x / (rect.width / 2)) * 10;
      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
    };

    const handleMouseLeave = () => {
      card.style.transform =
        "perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      card.style.transition = "transform 0.5s ease";
    };

    const parent = card.parentElement;
    parent?.addEventListener("mousemove", handleMouseMove);
    parent?.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      parent?.removeEventListener("mousemove", handleMouseMove);
      parent?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="relative"
      style={{
        animation: "floatCard 6s ease-in-out infinite",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        ref={cardRef}
        className="tilt-card w-[300px] rounded-2xl p-7 shadow-[0_24px_64px_rgba(0,0,0,0.18)] border border-white/20 relative z-10 transition-transform duration-100"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        {/* Browser dots */}
        <div className="flex gap-1.5 mb-5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        {/* Skeleton bars */}
        <div className="h-2.5 rounded-full bg-accent w-[60%] mb-3" />
        <div className="h-2 rounded-full bg-white/15 mb-2 w-full" />
        <div className="h-2 rounded-full bg-white/10 mb-2 w-[80%]" />
        {/* Image placeholder */}
        <div
          className="w-full h-[90px] rounded-xl mt-4 mb-4 flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(42,92,255,0.35), rgba(255,77,28,0.2))",
          }}
        >
          <span className="text-white/40 text-[10px] uppercase tracking-widest font-[500]">
            Ihr Auftritt
          </span>
        </div>
        <div className="h-2 rounded-full bg-white/15 mb-2 w-[85%]" />
        <div className="h-2 rounded-full bg-white/10 w-[50%] mb-4" />
        {/* Live tag */}
        <div className="flex items-center gap-2 bg-accent/25 text-[#7da4ff] rounded-full px-3 py-1.5 w-fit">
          <span
            className="w-1.5 h-1.5 rounded-full bg-accent"
            style={{ animation: "pulseDot 2s ease-in-out infinite" }}
          />
          <span className="text-[11px] font-[500]">Live geschaltet</span>
        </div>
      </div>
    </div>
  );
}

function FloatingBadge({
  icon,
  label,
  value,
  className,
  delay = 0,
  accentColor = "#2a5cff",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
  delay?: number;
  accentColor?: string;
}) {
  return (
    <div
      className={`absolute bg-white rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-[0_8px_32px_rgba(42,92,255,0.15),0_2px_8px_rgba(0,0,0,0.06)] z-20 ${className}`}
      style={{
        animation: `floatBadge 5s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center text-white flex-shrink-0"
        style={{ background: accentColor }}
      >
        {icon}
      </div>
      <div>
        <div className="text-[10px] text-mid leading-none mb-0.5 font-[400]">
          {label}
        </div>
        <div className="text-[13px] font-[600] text-ink">{value}</div>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const rightBlur = useTransform(scrollYProgress, [0, 0.5], [0, 18]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(42,92,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(42,92,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left — content */}
        <motion.div
          style={{ y, opacity }}
          className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 pt-28 pb-16 lg:py-0 relative z-10"
        >
          <PastelGradientBackground className="absolute inset-0 -z-10 rounded-none" />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-5 inline-flex items-center gap-2"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-[500] uppercase tracking-[0.16em] text-accent">
              <span className="w-8 h-[1.5px] bg-accent" />
              Webdesign für den Mittelstand
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.12}
            className="font-serif text-[clamp(40px,5.5vw,72px)] leading-[1.04] tracking-[-0.03em] mb-6 text-ink"
          >
            Dein Betrieb.
            <br />
            <em className="text-accent not-italic">Online sichtbar.</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.24}
            className="text-[16px] sm:text-[17px] leading-[1.75] text-mid font-[300] max-w-[440px] mb-10"
          >
            Professionelle Websites für Handwerker, Einzelhändler und lokale
            Dienstleister – fair kalkuliert, schnell umgesetzt, alles aus einer
            Hand.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.36}
            className="flex flex-wrap gap-4 items-center mb-12"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white text-[14px] font-[500] px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-[0_8px_28px_rgba(42,92,255,0.38)] hover:-translate-y-0.5 cursor-pointer"
            >
              Jetzt Angebot anfragen
              <ArrowRight size={16} />
            </a>
            <a
              href="#preise"
              className="inline-flex items-center gap-2 text-[14px] font-[400] text-mid hover:text-ink transition-colors cursor-pointer"
            >
              Preise ansehen
              <ArrowRight size={14} className="opacity-50" />
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.48}
            className="flex items-center gap-4 flex-wrap"
          >
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-accent2 text-accent2"
                />
              ))}
            </div>
            <span className="text-[13px] text-mid font-[300]">
              <strong className="text-ink font-[500]">Festpreise</strong> ohne
              versteckte Kosten
            </span>
            <span className="text-mid text-[13px]">·</span>
            <span className="text-[13px] text-mid font-[300]">
              <strong className="text-ink font-[500]">DSGVO-konform</strong>{" "}
              alles inklusive
            </span>
          </motion.div>
        </motion.div>

        {/* Right — mockup with Hyperspeed background */}
        <motion.div
          style={{
            opacity: rightOpacity,
            filter: useTransform(rightBlur, (v) => `blur(${v}px)`),
          }}
          className="hidden lg:flex relative items-center justify-center overflow-hidden"
        >
          {/* Hyperspeed full-panel background */}
          <div className="absolute inset-0">
            <Hyperspeed effectOptions={webmentoHyperspeedPreset} />
          </div>

          {/* Subtle vignette overlay so mockup card pops */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 30%, rgba(10,10,30,0.55) 100%)",
            }}
          />

          {/* Glow behind card */}
          <div
            className="absolute pointer-events-none rounded-full z-10"
            style={{
              width: 500,
              height: 500,
              background:
                "radial-gradient(circle, rgba(42,92,255,0.22) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />

          {/* Mockup card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative z-20"
          >
            <MockupCard />

            <FloatingBadge
              icon={<Zap size={14} />}
              label="Umsetzung in"
              value="7 Tagen"
              className="bottom-[-16px] left-[-40px]"
              delay={-2}
            />
            <FloatingBadge
              icon={<Star size={14} />}
              label="Ab nur"
              value="490 €"
              className="top-[-16px] right-[-24px]"
              delay={-1}
              accentColor="#ff4d1c"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-mid to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.15em] text-mid">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
