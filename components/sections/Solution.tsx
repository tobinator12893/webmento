"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, MapPin, Zap, Package } from "lucide-react";

const values = [
  {
    icon: Shield,
    num: "01",
    title: "Faire Preise",
    description:
      "Einmaliger Festpreis, keine versteckten Kosten, keine Überraschungen. Was wir vereinbaren, gilt.",
    accent: "#2a5cff",
  },
  {
    icon: MapPin,
    num: "02",
    title: "Lokal & persönlich",
    description:
      "Du redest mit dem Menschen, der deine Website baut. Kein Agentur-Ping-Pong, kein Ticket-System.",
    accent: "#ff4d1c",
  },
  {
    icon: Zap,
    num: "03",
    title: "Schnell umgesetzt",
    description:
      "Website fertig in 5–10 Werktagen. KI-assistierter Workflow hält die Qualität hoch und die Preise niedrig.",
    accent: "#2a5cff",
  },
  {
    icon: Package,
    num: "04",
    title: "Alles inklusive",
    description:
      "Domain, Hosting, Impressum, DSGVO, Kontaktformular, Mobile-Optimierung – alles aus einer Hand.",
    accent: "#ff4d1c",
  },
];

export function Solution() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="loesung"
      className="py-20 sm:py-28 bg-ink overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] uppercase tracking-[0.18em] text-accent font-[500]">
              Die Lösung
            </span>
            <span className="flex-1 h-[1px] bg-accent/30 max-w-[60px]" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="font-serif text-[clamp(32px,4.5vw,56px)] leading-[1.05] tracking-[-0.03em] text-white">
              Webmento.{" "}
              <em className="text-accent not-italic">Einfach. Fertig.</em>
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[1.8] text-white/50 font-[300] lg:pb-1">
              „
              <em>
                Gute Arbeit verdient einen guten Auftritt.
              </em>
              " – Wir schaffen in wenigen Tagen, wofür andere Agenturen Monate
              brauchen.
            </p>
          </div>
        </motion.div>

        {/* Value grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {values.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  delay: 0.1 + i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative bg-white/5 hover:bg-white/8 rounded-2xl p-7 border border-white/8 hover:border-white/14 transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: item.accent }}
                />

                <div className="text-[10px] uppercase tracking-[0.2em] text-white/25 font-[500] mb-5">
                  {item.num}
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200"
                  style={{ background: `${item.accent}22` }}
                >
                  <Icon
                    size={18}
                    style={{ color: item.accent }}
                  />
                </div>
                <h3 className="font-serif text-[20px] tracking-[-0.02em] text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[1.75] text-white/45 font-[300]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 bg-white/5 border border-white/8 rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-4 border-b border-white/8">
            <div className="p-5 text-[11px] uppercase tracking-[0.15em] text-white/30 font-[500]">
              Anbieter
            </div>
            <div className="p-5 text-[11px] uppercase tracking-[0.15em] text-white/30 font-[500]">
              Preis
            </div>
            <div className="p-5 text-[11px] uppercase tracking-[0.15em] text-white/30 font-[500]">
              Zeit
            </div>
            <div className="p-5 text-[11px] uppercase tracking-[0.15em] text-white/30 font-[500]">
              Lokal
            </div>
          </div>
          {[
            {
              name: "Klassische Agentur",
              price: "3.000–10.000 €",
              time: "2–4 Monate",
              local: false,
              highlight: false,
            },
            {
              name: "Wix / Jimdo selbst",
              price: "0–200 €/Jahr",
              time: "Wochen",
              local: false,
              highlight: false,
            },
            {
              name: "Freelancer (Fiverr)",
              price: "200–800 €",
              time: "unbekannt",
              local: false,
              highlight: false,
            },
            {
              name: "Webmento",
              price: "490–1.490 €",
              time: "5–10 Tage",
              local: true,
              highlight: true,
            },
          ].map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-4 border-b border-white/5 last:border-0 ${
                row.highlight ? "bg-accent/10" : ""
              }`}
            >
              <div
                className={`p-5 text-[13px] font-[${row.highlight ? "500" : "300"}] ${
                  row.highlight ? "text-white" : "text-white/55"
                }`}
              >
                {row.highlight && (
                  <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 align-middle" />
                )}
                {row.name}
              </div>
              <div
                className={`p-5 text-[13px] ${row.highlight ? "text-accent font-[500]" : "text-white/45 font-[300]"}`}
              >
                {row.price}
              </div>
              <div
                className={`p-5 text-[13px] ${row.highlight ? "text-white font-[500]" : "text-white/45 font-[300]"}`}
              >
                {row.time}
              </div>
              <div className="p-5 text-[13px]">
                {row.local ? (
                  <span className="inline-flex items-center gap-1.5 text-accent font-[500] text-[13px]">
                    <span className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center text-[10px]">
                      ✓
                    </span>
                    Ja
                  </span>
                ) : (
                  <span className="text-white/25 text-[13px]">—</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
