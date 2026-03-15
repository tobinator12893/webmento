"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "#loesung" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Preise", href: "#preise" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-paper/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-black/5"
            : "bg-paper/70 backdrop-blur-md"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group cursor-pointer"
            aria-label="Webmento Startseite"
          >
            {/* Logo mark */}
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 relative overflow-hidden transition-transform duration-200 group-hover:scale-105">
              <div className="w-[18px] h-[18px] border-[2.5px] border-white rounded-full absolute" />
              <div className="w-[7px] h-[7px] bg-white rounded-full absolute" />
            </div>
            <span className="font-serif text-[20px] text-ink tracking-tight">
              web<span className="text-accent">mento</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-sans font-[400] text-mid hover:text-ink hover:bg-black/5 transition-all duration-150 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#kontakt"
              className="hidden sm:inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white text-sm font-[500] px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-[0_6px_20px_rgba(42,92,255,0.35)] hover:-translate-y-0.5 cursor-pointer"
            >
              Angebot anfragen
            </a>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
              aria-label="Menü öffnen"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 bg-paper/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-black/5 overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-[400] text-ink hover:bg-black/5 transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 pt-3 border-t border-black/6">
                <a
                  href="#kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center bg-accent text-white text-sm font-[500] py-3 rounded-xl cursor-pointer"
                >
                  Angebot anfragen
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
