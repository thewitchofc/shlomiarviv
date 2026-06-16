"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleBooking = () => {
    const el = document.querySelector("#booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleGallery = () => {
    const el = document.querySelector("#gallery");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex items-end overflow-hidden bg-[#0B0B0B]">
      {/* Background — editorial gradient mesh */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        {/* Deep dark base */}
        <div className="absolute inset-0 bg-[#0B0B0B]" />

        {/* Luxury gradient focal point */}
        <div className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 30% 40%, rgba(212,175,55,0.06) 0%, transparent 60%),
              radial-gradient(ellipse 60% 80% at 70% 60%, rgba(212,175,55,0.03) 0%, transparent 50%),
              radial-gradient(ellipse 100% 50% at 50% 0%, rgba(245,245,245,0.02) 0%, transparent 40%)
            `,
          }}
        />

        {/* Vertical light streaks */}
        <div className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, transparent 0%, rgba(212,175,55,0.015) 40%, transparent 100%)
            `,
          }}
        />
      </motion.div>

      {/* Grain overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Large decorative letter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute top-[15%] left-[5%] z-[2] pointer-events-none select-none"
      >
        <span
          className="font-display text-[28vw] leading-none font-bold"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px rgba(212,175,55,0.08)",
          }}
        >
          ש
        </span>
      </motion.div>

      {/* Thin vertical line — right side */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={loaded ? { scaleY: 1, opacity: 1 } : {}}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-16 h-full w-px bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent z-[3] origin-top"
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full pb-20 md:pb-28 px-6 md:px-12 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="block w-12 h-px bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase font-light">
                Tel Aviv · Hair Design
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.92] tracking-tight text-[#F5F5F5] mb-4"
            >
              לא תסרוקת.
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.92] tracking-tight text-[#D4AF37] italic mb-8"
            >
              חוויה.
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="text-[#F5F5F5]/50 text-base md:text-lg font-light leading-relaxed max-w-md tracking-wide mb-12"
            >
              עיצוב שיער יוקרתי בתל אביב.
              <br />
              בלייאז׳, צבע, קרטין וטרנספורמציות
              <br />
              שמשנות את האופן שבו את נראית — ומרגישה.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex items-center gap-6 flex-wrap"
            >
              <motion.button
                onClick={handleBooking}
                className="bg-[#D4AF37] text-[#0B0B0B] px-10 py-4 text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#F5F5F5] transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">קביעת תור</span>
              </motion.button>

              <motion.button
                onClick={handleGallery}
                className="text-[#F5F5F5]/60 hover:text-[#F5F5F5] text-xs tracking-[0.3em] uppercase font-light flex items-center gap-3 transition-colors duration-300 group"
                whileHover={{ x: -4 }}
              >
                <span>צפי בעבודות</span>
                <span className="text-[#D4AF37] group-hover:translate-x-[-4px] transition-transform duration-300">←</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom info strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-6 md:left-12 z-10 flex items-center gap-8"
      >
        {[
          { num: "12+", label: "שנות ניסיון" },
          { num: "2K+", label: "לקוחות" },
          { num: "100%", label: "שביעות רצון" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-xl text-[#D4AF37] font-semibold">{stat.num}</div>
            <div className="text-[#F5F5F5]/40 text-[10px] tracking-[0.2em] uppercase">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#D4AF37]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
