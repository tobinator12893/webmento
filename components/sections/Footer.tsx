"use client";

import { motion } from "framer-motion";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pt-16 pb-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Top */}
        <div className="grid sm:grid-cols-[1fr_auto] gap-10 pb-12 border-b border-white/8">
          {/* Brand */}
          <div className="max-w-[320px]">
            <a
              href="#"
              className="flex items-center gap-3 mb-5 group cursor-pointer w-fit"
            >
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                <div className="w-[18px] h-[18px] border-[2.5px] border-white rounded-full absolute" />
                <div className="w-[7px] h-[7px] bg-white rounded-full absolute" />
              </div>
              <span className="font-serif text-[20px] text-white tracking-tight">
                web<span className="text-accent">mento</span>
              </span>
            </a>
            <p className="text-[13px] leading-[1.75] text-white/40 font-[300]">
              Faire Websites für lokale Betriebe. Schnell. Persönlich. Ohne
              Überraschungen.
            </p>
            <p className="text-[12px] text-white/25 font-[300] mt-3">
              Einzelunternehmen · Raum Rhein-Neckar
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-14 gap-y-3">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/25 font-[500] mb-4">
                Navigation
              </div>
              {[
                { label: "Leistungen", href: "#loesung" },
                { label: "Ablauf", href: "#ablauf" },
                { label: "Preise", href: "#preise" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-[13px] text-white/45 hover:text-white/80 font-[300] mb-2 transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/25 font-[500] mb-4">
                Rechtliches
              </div>
              {[
                { label: "Impressum", href: "/impressum" },
                { label: "Datenschutz", href: "/datenschutz" },
                { label: "AGB", href: "/agb" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-[13px] text-white/45 hover:text-white/80 font-[300] mb-2 transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-white/25 font-[300]">
            © {year} Webmento · Alle Rechte vorbehalten
          </p>
          <p className="text-[12px] text-white/20 font-[300]">
            KI-gestützt erstellt · Stand März {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
