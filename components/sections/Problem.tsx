"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, AlertTriangle, TrendingDown } from "lucide-react";

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
    <div style={{ perspective: "600px" }} className="h-full">
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

const problems = [
  {
    icon: MapPin,
    title: "Nicht auffindbar",
    description:
      "Potenzielle Kunden suchen online – aber finden deinen Betrieb nicht, weil du keine eigene Website hast.",
  },
  {
    icon: TrendingDown,
    title: "Wachstum durch Empfehlung begrenzt",
    description:
      "Neue Kundschaft kommt nur über Mundpropaganda. Ohne Online-Präsenz stagniert das Wachstum.",
  },
  {
    icon: AlertTriangle,
    title: "Veralteter Auftritt",
    description:
      "Viele Betriebe sind nur auf Facebook oder mit Websites aus den 2000ern vertreten – das wirkt unprofessionell.",
  },
  {
    icon: Clock,
    title: "Keine Zeit, kein Budget",
    description:
      "Klassische Agenturen verlangen 3.000–10.000 € und monatelange Wartezeiten. Das ist für kleine Betriebe unrealistisch.",
  },
];

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-paper" id="problem">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] uppercase tracking-[0.18em] text-accent font-[500]">
                Das Problem
              </span>
              <span className="flex-1 h-[1px] bg-accent/25 max-w-[60px]" />
            </div>
            <h2 className="font-serif text-[clamp(32px,4.5vw,54px)] leading-[1.06] tracking-[-0.03em] text-ink">
              Gute Arbeit –{" "}
              <em className="text-accent2 not-italic">online unsichtbar.</em>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-[16px] sm:text-[17px] leading-[1.8] text-mid font-[300] lg:pt-16"
          >
            Handwerker, Friseure, Gastronomen – sie leisten täglich gute Arbeit,
            aber ihre potenziellen Kunden finden sie nicht. Nur weil der Weg ins
            Netz bisher zu teuer, zu kompliziert oder zu zeitaufwendig war.
          </motion.p>
        </div>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 sm:grid-rows-2 items-stretch">
          {problems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.1,
                  ease: "easeOut",
                }}
                className="h-full"
              >
                <TiltCard className="group bg-card hover:bg-white rounded-2xl p-7 border border-transparent hover:border-black/6 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-default h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent2/10 flex items-center justify-center mb-5 group-hover:bg-accent2/15 transition-colors">
                    <Icon size={18} className="text-accent2" />
                  </div>
                  <h3 className="font-serif text-[20px] tracking-[-0.02em] text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-[1.75] text-mid font-[300]">
                    {item.description}
                  </p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
