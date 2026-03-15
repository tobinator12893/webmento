"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setTilt({ x: -y * 14, y: x * 14 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div style={{ perspective: "600px" }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease",
        }}
        className={className}
      >
        {children}
      </div>
    </div>
  );
}
import {
  MessageCircle,
  Wand2,
  Palette,
  Server,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    num: "01",
    title: "Onboarding",
    duration: "30 Min.",
    description:
      "Kurzes Gespräch – telefonisch oder vor Ort. Wir erfassen deine Branche, Leistungen, Zielkunden und sammeln vorhandenes Material.",
    accent: "#2a5cff",
  },
  {
    icon: Wand2,
    num: "02",
    title: "KI-Texterstellung",
    duration: "Tag 1–2",
    description:
      "Deine Rohinformationen werden KI-assistiert in professionelle Texte verwandelt – Headlines, Leistungsbeschreibungen, CTA-Texte. 80% KI, 20% handveredelt.",
    accent: "#7c3aed",
  },
  {
    icon: Palette,
    num: "03",
    title: "Design & Struktur",
    duration: "Tag 2–5",
    description:
      "Template-Auswahl, Farbgebung und Typografie passend zur Branche. Deine Inhalte werden eingepflegt, Mobiloptimierung geprüft.",
    accent: "#0891b2",
  },
  {
    icon: Server,
    num: "04",
    title: "Technisches Setup",
    duration: "Tag 5–8",
    description:
      "Domain, Hosting, SSL-Zertifikat, Impressum, DSGVO, Google Analytics und Google Business Profil – alles eingerichtet.",
    accent: "#059669",
  },
  {
    icon: Rocket,
    num: "05",
    title: "Abnahme & Live",
    duration: "Tag 8–10",
    description:
      "Preview-Link, bis zu 2 Korrekturschleifen inklusive. Nach deiner Freigabe schalten wir live und du bekommst eine kurze Einweisung.",
    accent: "#ff4d1c",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      id="ablauf"
      className="py-20 sm:py-28 bg-paper overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 sm:mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-[1px] bg-accent/25 w-10" />
            <span className="text-[11px] uppercase tracking-[0.18em] text-accent font-[500]">
              Der Ablauf
            </span>
            <span className="h-[1px] bg-accent/25 w-10" />
          </div>
          <h2 className="font-serif text-[clamp(32px,4.5vw,54px)] leading-[1.06] tracking-[-0.03em] text-ink">
            Von der Idee zur{" "}
            <em className="text-accent not-italic">fertigen Website</em>
          </h2>
          <p className="text-[16px] leading-[1.75] text-mid font-[300] max-w-[480px] mx-auto mt-5">
            In 5 klaren Schritten – in weniger als 2 Wochen bist du online.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-black/6 hidden sm:block" />
          <motion.div
            className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 top-0 w-[2px] bg-accent hidden sm:block"
            style={{ height: lineHeight }}
          />

          <div className="space-y-6 sm:space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.65,
                    delay: 0.1 + i * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`relative sm:flex items-center sm:mb-16 ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`w-full sm:w-[calc(50%-40px)] ${
                      isLeft ? "sm:pr-8 sm:text-right" : "sm:pl-8"
                    }`}
                  >
                    <TiltCard
                      className={`group bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] rounded-2xl p-6 sm:p-7 border border-black/5 transition-all duration-300 cursor-default ${
                        !isLeft ? "sm:ml-auto" : ""
                      }`}
                    >
                      <div
                        className={`flex items-start gap-4 ${isLeft ? "sm:flex-row-reverse" : ""}`}
                      >
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                          style={{ background: `${step.accent}18` }}
                        >
                          <Icon size={18} style={{ color: step.accent }} />
                        </div>
                        <div className={`flex-1 ${isLeft ? "sm:text-right" : ""}`}>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span
                              className="text-[10px] uppercase tracking-[0.18em] font-[500]"
                              style={{ color: step.accent }}
                            >
                              {step.num}
                            </span>
                            <span className="text-[11px] text-mid/70 bg-black/5 px-2 py-0.5 rounded-full font-[400]">
                              {step.duration}
                            </span>
                          </div>
                          <h3 className="font-serif text-[20px] tracking-[-0.02em] text-ink mb-2">
                            {step.title}
                          </h3>
                          <p className="text-[13px] sm:text-[14px] leading-[1.75] text-mid font-[300]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </div>

                  {/* Center dot */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-paper border-2 border-accent items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden sm:block w-[calc(50%-40px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
