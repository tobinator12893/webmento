"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 overflow-hidden bg-accent"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 pointer-events-none"
        style={{
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 pointer-events-none"
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,77,28,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-[clamp(36px,5vw,66px)] leading-[1.04] tracking-[-0.03em] text-white mb-4">
              Gute Arbeit verdient
              <br />
              einen{" "}
              <em className="text-white/65 not-italic">guten Auftritt.</em>
            </h2>
            <p className="text-[16px] sm:text-[17px] leading-[1.75] text-white/65 font-[300] max-w-[480px]">
              Webmento bringt lokale Betriebe sichtbar ins Netz – mit Websites
              die funktionieren, nicht bloß existieren.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-4 lg:items-end"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-accent text-[14px] font-[500] px-7 py-4 rounded-xl transition-all duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              Jetzt kostenlos anfragen
              <ArrowRight size={16} />
            </a>
            <p className="text-[12px] text-white/45 font-[300] text-center lg:text-right">
              Keine Vorauszahlung · Unverbindlich · In 24h Antwort
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
