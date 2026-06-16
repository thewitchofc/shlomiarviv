"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const services = [
  { id: "01", name: "גוונים",        nameEn: "Highlights",    note: "עד 5 שעות",  popular: false },
  { id: "02", name: "בליאז׳",        nameEn: "Balayage",      note: "5–7 שעות",   popular: true  },
  { id: "03", name: "החלקות",        nameEn: "Straightening", note: "3–4 שעות",   popular: false },
  { id: "04", name: "קרטין",         nameEn: "Keratin",       note: "3–5 שעות",   popular: false },
  { id: "05", name: "תוספות שיער",   nameEn: "Extensions",   note: "4–6 שעות",   popular: false },
  { id: "06", name: "צבעי שיער",     nameEn: "Hair Color",    note: "2–4 שעות",   popular: false },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="services" ref={ref} className="py-44 md:py-80 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-[#111111]/[0.10]" />

      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-28 xl:px-36">

        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-[#C8A97E]/75 text-[9px] tracking-[0.6em] uppercase">04</span>
              <span className="w-6 h-px bg-[#C8A97E]/30" />
              <span className="text-[#111111]/42 text-[9px] tracking-[0.5em] uppercase">הטיפולים</span>
            </motion.div>

            <div className="overflow-hidden pb-[0.18em]">
              <motion.div
                initial={{ y: "112%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{ duration: 1.1, ease: EASE }}
                className="font-display text-[#111111] tracking-tight leading-[1.12]"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 6rem)" }}
              >
                מה תרצי לעשות
              </motion.div>
            </div>
            <div className="overflow-hidden pb-[0.18em]">
              <motion.div
                initial={{ y: "112%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
                className="font-display font-semibold text-[#C8A97E] italic tracking-tight leading-[1.12]"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 6rem)" }}
              >
                לשיער שלך?
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#111111]/82 text-sm font-light leading-[1.9] max-w-xs"
          >
            לא בטוחה מה מתאים לך?
            <br />
            הייעוץ הראשון ללא עלות.
          </motion.p>
        </div>

        {/* Split: list + portrait */}
        <div className="flex flex-col lg:flex-row lg:gap-20">

          {/* Service list — clean, no descriptions */}
          <div className="flex-1 min-w-0">
            {services.map((service, i) => (
              <motion.a
                key={service.id}
                href="https://wa.me/972535220611"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 + 0.3 }}
                className="group relative border-t border-[#111111]/[0.12] flex items-center justify-between py-8 md:py-12 hover:bg-[#C8A97E]/[0.03] transition-colors duration-400 cursor-pointer"
              >
                <div className="flex items-center gap-5 min-w-0">
                  <motion.div
                    className="font-display tracking-tight text-[#111111] group-hover:text-[#C8A97E] transition-colors duration-400"
                    style={{ fontSize: "clamp(1.9rem, 4.5vw, 5.5rem)", lineHeight: 1.0 }}
                  >
                    {service.name}
                  </motion.div>
                  {service.popular && (
                    <span className="hidden md:block text-[8px] tracking-[0.45em] uppercase text-[#C8A97E] border border-[#C8A97E]/40 px-2 py-1 self-center">
                      הכי מבוקש
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-5 shrink-0">
                  <span className="text-[#111111]/50 text-[10px] tracking-[0.35em] hidden md:block">{service.note}</span>
                  <motion.div
                    className="w-8 h-8 border border-[#C8A97E]/25 group-hover:border-[#C8A97E] group-hover:bg-[#C8A97E] flex items-center justify-center transition-all duration-400"
                  >
                    <span className="text-[#C8A97E] group-hover:text-[#111111] text-sm transition-colors duration-400">←</span>
                  </motion.div>
                </div>
              </motion.a>
            ))}
            <div className="border-t border-[#111111]/[0.12]" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 text-[#111111]/48 text-[10px] tracking-[0.04em]"
            >
              מחירים לפי ייעוץ אישי · כל הטיפולים כוללים שמפו ותכשירים מקצועיים
            </motion.p>
          </div>

          {/* Sticky portrait */}
          <motion.div
            ref={portraitRef}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
            className="hidden lg:block w-[280px] xl:w-[340px] shrink-0"
          >
            <div className="sticky top-32">
              <div className="relative overflow-hidden aspect-[3/4]">
                <motion.div style={{ y: portraitY }} className="absolute inset-[-6%] w-[112%] h-[112%]">
                  <Image src="/assets/portrait.png" alt="Shlomi Arviv" fill className="object-cover object-top" sizes="340px" />
                </motion.div>
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(255,255,255,0.65) 0%, transparent 40%)" }} />
                <div className="absolute top-0 start-0 w-6 h-6 border-t border-s border-[#C8A97E]/35" />
              </div>
              <div className="mt-5 text-center">
                <a
                  href="https://wa.me/972535220611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#C8A97E] text-[9px] tracking-[0.45em] uppercase hover:text-[#111111] transition-colors duration-300 border-b border-[#C8A97E]/30 pb-0.5"
                >
                  שאלי את שלומי ישירות
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
