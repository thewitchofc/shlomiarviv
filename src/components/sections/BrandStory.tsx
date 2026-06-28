"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function BrandStory() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const portraitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: portraitRef, offset: ["start end", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <section ref={ref} id="about" className="relative py-44 md:py-72 bg-white overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-[#111111]/[0.10]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Portrait */}
          <div ref={portraitRef} className="relative order-last lg:order-first">
            <motion.div
              style={{ y: portraitY }}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
              className="relative overflow-hidden aspect-[3/4]"
            >
              <Image
                src="/assets/portrait.png"
                alt="Shlomi Arviv"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 60%, rgba(255,255,255,0.85) 100%)" }} />
            </motion.div>
            <motion.div
              initial={{ scaleX: 0, scaleY: 0 }}
              animate={isInView ? { scaleX: 1, scaleY: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
              className="absolute -bottom-4 -left-4 w-16 h-16 border-l border-b border-[#C8A97E]/40"
              style={{ transformOrigin: "bottom left" }}
            />
          </div>

          {/* Text — cut to essentials */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="flex items-center gap-4 mb-10"
            >
              <span className="text-[#C8A97E]/75 text-[9px] tracking-[0.6em] uppercase">02</span>
              <span className="w-6 h-px bg-[#C8A97E]/30" />
              <span className="text-[#111111]/42 text-[9px] tracking-[0.5em] uppercase">הסיפור</span>
            </motion.div>

            {/* Headline */}
            <div className="mb-10">
              {["את לא צריכה", "לדמיין. את תראי."].map((line, i) => (
                <div key={i} className="overflow-hidden pb-[0.18em]">
                  <motion.div
                    initial={{ y: "112%" }}
                    animate={isInView ? { y: "0%" } : {}}
                    transition={{ duration: 1.1, delay: i * 0.13, ease: EASE }}
                    className={`font-display leading-[1.1] tracking-tight ${
                      i === 1 ? "text-[#C8A97E] italic" : "text-[#111111]"
                    }`}
                    style={{ fontSize: "clamp(2.2rem, 4.5vw, 5rem)" }}
                  >
                    {line}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Single focused paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
              className="text-[#111111]/88 text-base md:text-lg font-light leading-[1.9] mb-12"
            >
              Shlomi Arviv, 12 שנות ניסיון בתל אביב ואירופה.
              <br />
              כל לקוחה יוצאת עם מראה שנוצר במיוחד בשבילה.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-10 mb-14 pb-10 border-b border-[#111111]/[0.12]"
            >
              {[
                { num: "12+", label: "שנות ניסיון" },
                { num: "200+", label: "לקוחות מרוצות" },
                { num: "100%", label: "התאמה אישית" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-[#111111] text-2xl md:text-3xl tracking-tight">{s.num}</div>
                  <div className="text-[#111111]/50 text-[9px] tracking-[0.35em] uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.a
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.75 }}
              href="https://wa.me/972535220611"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#111111] hover:bg-[#222] text-[#F8F6F3] text-xs tracking-[0.35em] uppercase px-8 py-4 transition-colors duration-300"
            >
              <span>קבעי ייעוץ חינמי</span>
              <span className="w-5 h-px bg-[#C8A97E]" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
