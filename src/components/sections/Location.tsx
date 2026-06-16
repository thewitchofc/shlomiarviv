"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const hours = [
  { day: "ראשון – שני", time: "09:00 – 20:00" },
  { day: "שלישי – חמישי", time: "09:00 – 21:00" },
  { day: "שישי", time: "09:00 – 16:00" },
  { day: "שבת", time: "סגור" },
];

export default function Location() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="location" ref={ref} className="py-44 md:py-80 bg-[#F8F6F3] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-[#111111]/[0.10]" />

      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-28 xl:px-36">

        {/* Section identifier */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-5 mb-20 md:mb-36"
        >
          <span className="text-[#C8A97E]/75 text-[9px] tracking-[0.6em] uppercase font-light">07</span>
          <span className="block w-8 h-px bg-[#C8A97E]/30" />
          <span className="text-[#111111]/42 text-[9px] tracking-[0.5em] uppercase font-light">מיקום</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
          >
            <div className="relative overflow-hidden" style={{ paddingBottom: "100%" }}>
              <iframe
                src="https://maps.google.com/maps?q=בוגרשוב+37+תל+אביב&z=16&output=embed&hl=he"
                className="absolute inset-0 w-full h-full border-0 grayscale contrast-[1.05] brightness-[0.9]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="מפת הסטודיו"
              />
              {/* Warm tint overlay */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(180deg, rgba(248,246,243,0.08) 0%, transparent 25%, transparent 75%, rgba(248,246,243,0.35) 100%)" }} />
            </div>
          </motion.div>

          {/* Right — Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.35, ease: EASE }}
            className="flex flex-col justify-center gap-20"
          >
            {/* Headline */}
            <div>
              {["מצאי אותנו", "בלב תל אביב"].map((line, i) => (
                <div key={i} className="overflow-hidden pb-[0.18em]">
                  <motion.div
                    initial={{ y: "112%" }}
                    animate={isInView ? { y: "0%" } : {}}
                    transition={{ duration: 1.2, delay: i * 0.14, ease: EASE }}
                    className={`font-display text-[clamp(2.2rem,4.5vw,5.5rem)] leading-[1.1] tracking-tight ${
                      i === 1 ? "text-[#C8A97E] italic" : "text-[#111111]"
                    }`}
                  >
                    {line}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div className="space-y-12">
              <div>
                <div className="text-[#C8A97E]/75 text-[9px] tracking-[0.6em] uppercase mb-3">כתובת</div>
                <p className="text-[#111111]/90 text-xl font-light tracking-[0.02em] leading-relaxed">
                  בוגרשוב 37
                  <br />
                  <span className="text-[#111111]/60 text-base">תל אביב</span>
                </p>
              </div>

              <div>
                <div className="text-[#C8A97E]/75 text-[9px] tracking-[0.6em] uppercase mb-3">טלפון</div>
                <a
                  href="tel:0535220611"
                  className="text-[#111111]/90 text-xl font-light tracking-[0.08em] hover:text-[#C8A97E] transition-colors duration-400"
                  dir="ltr"
                >
                  053 522 0611
                </a>
              </div>

              <div>
                <div className="text-[#C8A97E]/75 text-[9px] tracking-[0.6em] uppercase mb-5">שעות פעילות</div>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between items-baseline border-b border-[#111111]/[0.05] pb-3">
                      <span className="text-[#111111]/82 text-xs font-light tracking-[0.05em]">{h.day}</span>
                      <span
                        className={`text-xs font-light tracking-[0.1em] ${h.time === "סגור" ? "text-[#111111]/35" : "text-[#111111]/88"}`}
                        dir="ltr"
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/972535220611"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 text-[#111111]/35 hover:text-[#C8A97E] transition-colors duration-400"
              whileHover={{ x: -4 }}
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-[10px] tracking-[0.5em] uppercase">שלחי הודעה בוואטסאפ</span>
              <span className="block w-6 h-px bg-current group-hover:w-12 transition-all duration-400" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
