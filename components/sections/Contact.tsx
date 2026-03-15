"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    business: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Website-Anfrage von ${formState.name} – ${formState.business}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nTelefon: ${formState.phone}\nBetrieb: ${formState.business}\n\nNachricht:\n${formState.message}`
    );
    window.location.href = `mailto:hallo@webmento.de?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      id="kontakt"
      className="py-20 sm:py-28 bg-paper overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] uppercase tracking-[0.18em] text-accent font-[500]">
                Kontakt
              </span>
              <span className="flex-1 h-[1px] bg-accent/25 max-w-[60px]" />
            </div>
            <h2 className="font-serif text-[clamp(30px,4vw,50px)] leading-[1.06] tracking-[-0.03em] text-ink mb-5">
              Lass uns reden.
              <br />
              <em className="text-accent not-italic">Unverbindlich.</em>
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[1.8] text-mid font-[300] mb-10">
              Schreib uns einfach eine kurze Nachricht – wir melden uns in der
              Regel innerhalb von 24 Stunden und besprechen gemeinsam, was du
              brauchst.
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              {[
                {
                  icon: Mail,
                  label: "E-Mail",
                  value: "hallo@webmento.de",
                  href: "mailto:hallo@webmento.de",
                },
                {
                  icon: Phone,
                  label: "Telefon",
                  value: "Auf Anfrage",
                  href: "#kontakt",
                },
                {
                  icon: MapPin,
                  label: "Region",
                  value: "Rhein-Neckar & deutschlandweit",
                  href: undefined,
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.1,
                    }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.12em] text-mid/70 font-[400] mb-0.5">
                        {item.label}
                      </div>
                      {item.href && item.href !== "#kontakt" ? (
                        <a
                          href={item.href}
                          className="text-[14px] font-[400] text-ink hover:text-accent transition-colors cursor-pointer"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-[14px] font-[400] text-ink">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center bg-white rounded-2xl border border-black/6 p-12 text-center">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <Send size={24} className="text-accent" />
                  </div>
                  <h3 className="font-serif text-[24px] text-ink mb-3">
                    E-Mail öffnet sich!
                  </h3>
                  <p className="text-[14px] text-mid font-[300] leading-[1.7]">
                    Dein E-Mail-Programm sollte sich geöffnet haben. Wir antworten
                    in der Regel innerhalb von 24 Stunden.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-black/6 p-8 sm:p-10 space-y-5 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-shadow duration-300"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[12px] uppercase tracking-[0.12em] text-mid/70 font-[400] mb-2"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                      placeholder="Max Mustermann"
                      className="w-full bg-paper border border-black/8 rounded-xl px-4 py-3 text-[14px] text-ink font-[300] placeholder:text-mid/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[12px] uppercase tracking-[0.12em] text-mid/70 font-[400] mb-2"
                    >
                      Telefon
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, phone: e.target.value }))
                      }
                      placeholder="+49 123 456789"
                      className="w-full bg-paper border border-black/8 rounded-xl px-4 py-3 text-[14px] text-ink font-[300] placeholder:text-mid/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="business"
                    className="block text-[12px] uppercase tracking-[0.12em] text-mid/70 font-[400] mb-2"
                  >
                    Dein Betrieb *
                  </label>
                  <input
                    id="business"
                    type="text"
                    required
                    value={formState.business}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, business: e.target.value }))
                    }
                    placeholder="z.B. Friseur Müller, Elektro Schmidt …"
                    className="w-full bg-paper border border-black/8 rounded-xl px-4 py-3 text-[14px] text-ink font-[300] placeholder:text-mid/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[12px] uppercase tracking-[0.12em] text-mid/70 font-[400] mb-2"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, message: e.target.value }))
                    }
                    placeholder="Was brauchst du? Welches Paket interessiert dich? Hast du schon ein Logo?"
                    className="w-full bg-paper border border-black/8 rounded-xl px-4 py-3 text-[14px] text-ink font-[300] placeholder:text-mid/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white text-[14px] font-[500] py-4 rounded-xl transition-all duration-200 hover:shadow-[0_8px_28px_rgba(42,92,255,0.38)] hover:-translate-y-0.5 cursor-pointer"
                >
                  Nachricht senden
                  <Send size={15} />
                </button>

                <p className="text-[11px] text-mid/50 font-[300] text-center leading-[1.6]">
                  Mit dem Absenden öffnet sich dein E-Mail-Programm. Keine
                  Vorauszahlung · Vollständig unverbindlich.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
