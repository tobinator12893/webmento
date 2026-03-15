"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: 7,
    suffix: " Tage",
    label: "Durchschnittliche Umsetzung",
    description: "Von der ersten Anfrage bis zur fertigen Website",
  },
  {
    value: 490,
    suffix: " €",
    prefix: "ab ",
    label: "Festpreis – alles inklusive",
    description: "Domain, Hosting, Impressum & DSGVO ohne Aufpreis",
  },
  {
    value: 100,
    suffix: "%",
    label: "Festpreise garantiert",
    description: "Keine versteckten Kosten, keine bösen Überraschungen",
  },
];

function CountUp({
  target,
  duration = 1.5,
  prefix = "",
  suffix = "",
}: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("de-DE")}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-ink py-16 sm:py-20 overflow-hidden">
      {/* Scrolling marquee band above */}
      <div className="overflow-hidden mb-12 border-y border-white/8">
        <div
          className="flex whitespace-nowrap py-3"
          style={{ animation: "marquee 22s linear infinite" }}
        >
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-[11px] uppercase tracking-[0.18em] text-white/25 font-[500] mx-8"
            >
              Fair &nbsp;·&nbsp; Lokal &nbsp;·&nbsp; Schnell &nbsp;·&nbsp;
              Persönlich &nbsp;·&nbsp; KI-gestützt &nbsp;·&nbsp; Festpreis
              &nbsp;·&nbsp; DSGVO-konform &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/8 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="bg-ink px-8 py-10 sm:py-12 flex flex-col"
            >
              <div className="font-serif text-[clamp(42px,5vw,60px)] leading-none tracking-[-0.03em] text-white mb-3">
                <CountUp
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-[12px] uppercase tracking-[0.14em] text-accent font-[500] mb-2">
                {stat.label}
              </div>
              <div className="text-[14px] leading-[1.6] text-white/45 font-[300] max-w-[240px]">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
