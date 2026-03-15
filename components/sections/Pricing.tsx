"use client";

import { useRef, useState, memo } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
const Hyperspeed = dynamic(
  () => import("@/components/ui/Hyperspeed").then((m) => m.Hyperspeed),
  { ssr: false }
);

const WarpBackground = memo(function WarpBackground() {
  return (
    <>
      <div className="absolute inset-0 z-0 opacity-40">
        <Hyperspeed effectOptions={{ ...warpOptions, fov: 100, speedUp: 1.5 }} />
      </div>
      <div className="absolute inset-0 z-0 bg-ink/30" />
    </>
  );
});

const warpOptions = {
  distortion: "turbulentDistortion" as const,
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 3,
  fov: 90,
  fovSpeedUp: 110,
  speedUp: 1.8,
  colors: {
    roadColor: 0x080810,
    islandColor: 0x0a0a18,
    background: 0x0a0a1e,
    shoulderLines: 0x1a2a60,
    brokenLines: 0x1a2a60,
    leftCars: [0x2a5cff, 0x1a3fd4, 0x5c7fff],
    rightCars: [0xff4d1c, 0xff7a4d, 0xffa07a],
    sticks: 0x2a5cff,
  },
};

const plans = [
  {
    name: "Starter",
    price: "490",
    period: "Einmalig · 1 Jahr Hosting inklusive",
    tagline: "Dein erster Schritt ins Netz",
    time: "5–7 Werktage",
    features: [
      "1-seitige Website (Landingpage)",
      "Logo-Integration (bestehendes Logo)",
    "Kontaktformular",
    "Mobiloptimiert (Responsive Design)",
    "Impressum & Datenschutzerklärung",
    "1 Jahr Hosting & Betrieb",
    ],
    featured: false,
    cta: "Starter anfragen",
  },
  {
    name: "Basis",
    price: "890",
    period: "Einmalig · 1 Jahr Hosting inklusive",
    tagline: "Der Rundum-Auftritt für deinen Betrieb",
    time: "7–10 Werktage",
    features: [
      "Alles aus Starter",
      "Bis zu 5 Unterseiten",
      "Bildergalerie / Referenzen",
      "SEO-Grundoptimierung",
      "Prozess- und Automation Beratung",
      "Erweiterte Mobiloptimierung",
      "2 Korrekturschleifen inklusive",
    ],
    featured: true,
    badge: "Beliebt",
    cta: "Basis anfragen",
  },
  {
    name: "Komplett",
    price: "1.490",
    period: "Einmalig · 1 Jahr Hosting inklusive",
    tagline: "Maximum Sichtbarkeit für deinen Betrieb",
    time: "10–14 Werktage",
    features: [
      "Alles aus Basis",
      "Bis zu 10 Unterseiten",
      "Chat und AI Anbindung",
      "Erweiterte SEO (Keyword-Recherche)",
      "Logo-Design inklusive (KI + manuell)",
      "6 Monate Priorität-Support",
      "Google Analytics Einrichtung",
    ],
    featured: false,
    cta: "Komplett anfragen",
  },
];

function PricingCard({
  plan,
  index,
  inView,
}: {
  plan: (typeof plans)[0];
  index: number;
  inView: boolean;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setTilt({ x: -y * 6, y: x * 6 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: 0.1 + index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ perspective: "800px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease",
        }}
        className={`relative rounded-2xl p-8 border h-full flex flex-col cursor-default overflow-hidden ${
          plan.featured
            ? "bg-ink border-accent/40 shadow-[0_0_0_1px_rgba(42,92,255,0.3),0_24px_64px_rgba(42,92,255,0.18)]"
            : "bg-white border-black/8 hover:border-black/14 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
        } transition-all duration-300`}
      >
        {/* Warp background for featured card */}
        {plan.featured && <WarpBackground />}

        {/* All visible content sits above the warp bg */}
        <div className="relative z-10 flex flex-col flex-1">

        {/* Featured badge */}
        {plan.badge && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-[11px] font-[500] uppercase tracking-[0.12em] px-4 py-1 rounded-full">
            {plan.badge}
          </div>
        )}

        {/* Header */}
        <div className="mb-7">
          <h3
            className={`font-serif text-[24px] tracking-[-0.02em] mb-1 ${plan.featured ? "text-white" : "text-ink"}`}
          >
            {plan.name}
          </h3>
          <p
            className={`text-[13px] font-[300] ${plan.featured ? "text-white/50" : "text-mid"}`}
          >
            {plan.tagline}
          </p>
        </div>

        {/* Price */}
        <div className="mb-2">
          <div
            className={`flex items-baseline gap-1 ${plan.featured ? "text-white" : "text-ink"}`}
          >
            <span className="font-serif text-[52px] leading-none tracking-[-0.04em] font-[400]">
              {plan.price}
            </span>
            <span
              className={`text-[18px] font-[300] ${plan.featured ? "text-white/60" : "text-mid"}`}
            >
              €
            </span>
          </div>
          <p
            className={`text-[12px] font-[300] mb-1 ${plan.featured ? "text-white/40" : "text-mid/70"}`}
          >
            {plan.period}
          </p>
          <div
            className={`inline-flex items-center gap-1.5 text-[11px] font-[500] ${plan.featured ? "text-accent" : "text-accent"}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Umsetzung in {plan.time}
          </div>
        </div>

        {/* Divider */}
        <div
          className={`my-6 h-[1px] ${plan.featured ? "bg-white/10" : "bg-black/7"}`}
        />

        {/* Features */}
        <ul className="space-y-3 flex-1 mb-8">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                  plan.featured ? "bg-accent/25" : "bg-accent/12"
                }`}
              >
                <Check
                  size={10}
                  className="text-accent"
                  strokeWidth={2.5}
                />
              </span>
              <span
                className={`text-[13px] leading-[1.6] font-[300] ${plan.featured ? "text-white/70" : "text-mid"}`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#kontakt"
          className={`inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[14px] font-[500] transition-all duration-200 cursor-pointer ${
            plan.featured
              ? "bg-accent hover:bg-accent-dark text-white hover:shadow-[0_8px_24px_rgba(42,92,255,0.4)] hover:-translate-y-0.5"
              : "bg-black/5 hover:bg-black/10 text-ink"
          }`}
        >
          {plan.cta}
          <ArrowRight size={14} />
        </a>

        </div>{/* end z-10 wrapper */}
      </div>
    </motion.div>
  );
}

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="preise"
      className="py-20 sm:py-28 bg-card overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-18"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-[1px] bg-accent/25 w-10" />
            <span className="text-[11px] uppercase tracking-[0.18em] text-accent font-[500]">
              Preise
            </span>
            <span className="h-[1px] bg-accent/25 w-10" />
          </div>
          <h2 className="font-serif text-[clamp(32px,4.5vw,54px)] leading-[1.06] tracking-[-0.03em] text-ink mb-5">
            Transparent. Klar.{" "}
            <em className="text-accent not-italic">Ohne Überraschungen.</em>
          </h2>
          <p className="text-[16px] leading-[1.75] text-mid font-[300] max-w-[440px] mx-auto">
            Alle Pakete beinhalten Domain, Hosting, Impressum und DSGVO für das
            erste Jahr. Keine Folgekosten versteckt.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 items-start sm:items-stretch">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} inView={inView} />
          ))}
        </div>

        {/* Ongoing note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-[13px] text-mid/70 font-[300]">
            Ab Jahr 2: Hosting & Domain{" "}
            <strong className="text-mid font-[400]">15 €/Monat</strong> oder{" "}
            <strong className="text-mid font-[400]">150 €/Jahr</strong> ·
            Wartung & Updates optional ab{" "}
            <strong className="text-mid font-[400]">29 €/Monat</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
