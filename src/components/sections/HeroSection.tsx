"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 3400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#1a1208]"
    >
      {/* ── Single hero video ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/hero-main.mp4" type="video/mp4" />
      </video>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-[#1a1208]/48" />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 120% 120% at 50% 50%, transparent 42%, rgba(15,9,2,0.80) 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#F8F6F3] via-[#F8F6F3]/15 to-transparent" />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      </div>

      {/* ── Content ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-col items-center text-center px-8 md:px-16 max-w-4xl mx-auto w-full"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="w-8 h-px bg-[#C8A97E]/50" />
          <span className="text-[#C8A97E]/70 text-[9px] tracking-[0.6em] uppercase font-light">Shlomi Arviv · תל אביב</span>
          <span className="w-8 h-px bg-[#C8A97E]/50" />
        </motion.div>

        {/* Headline */}
        <div className="mb-6">
          {[
            { text: "את הגרסה הכי יפה", gold: false },
            { text: "של עצמך.", gold: true },
          ].map((line, i) => (
            <div key={i} className="overflow-hidden pb-[0.18em]">
              <motion.h1
                initial={{ y: "112%" }}
                animate={loaded ? { y: "0%" } : {}}
                transition={{ duration: 1.3, delay: i * 0.18, ease: EASE }}
                className={`font-display font-semibold leading-[1.1] tracking-[-0.01em] ${
                  line.gold ? "font-semibold text-[#C8A97E] italic" : "text-[#F8F6F3]"
                }`}
                style={{ fontSize: "clamp(3.4rem, 10vw, 12rem)" }}
              >
                {line.text}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
          className="text-[#F8F6F3]/88 text-sm md:text-base font-light leading-[1.8] max-w-md mx-auto mb-12 tracking-[0.03em]"
        >
          בליאז׳, גוונים, החלקות ותוספות שיער.
          <br />
          ייעוץ ראשון ללא עלות.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
        >
          <a
            href="https://wa.me/972535220611"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#C8A97E] hover:bg-[#D9C5A1] text-[#111111] text-xs font-medium tracking-[0.3em] uppercase px-8 py-4 transition-colors duration-300"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>קבעי פגישה עכשיו</span>
          </a>

          <a
            href="tel:0535220611"
            className="text-[#F8F6F3]/60 hover:text-[#F8F6F3]/90 text-xs tracking-[0.3em] font-light transition-colors duration-300"
            dir="ltr"
          >
            053 522 0611
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12"
        >
          <span className="text-[#F8F6F3]/50 text-[9px] tracking-[0.45em] uppercase">200+ לקוחות מרוצות בתל אביב</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-14 bg-gradient-to-b from-[#C8A97E]/40 to-transparent mx-auto"
        />
      </motion.div>
    </section>
  );
}
