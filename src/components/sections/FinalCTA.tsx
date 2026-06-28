"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="booking" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1208]">

      {/* Video */}
      <motion.div className="absolute inset-0 z-0" style={{ y: videoY }}>
        <video autoPlay muted loop playsInline preload="metadata"
          className="absolute inset-0 w-full h-full object-cover scale-110">
          <source src="/assets/finalcta-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-[#1a1208]/72" />
      <div className="absolute inset-0 z-[2]"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 60%, rgba(180,130,55,0.10) 0%, transparent 55%)" }} />
      <div className="absolute inset-0 z-[2]"
        style={{ background: "radial-gradient(ellipse 130% 130% at 50% 50%, transparent 38%, rgba(8,4,0,0.82) 100%)" }} />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F8F6F3] to-transparent z-[3]" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 xl:px-20 py-32 flex flex-col items-center text-center max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-14 md:mb-20"
        >
          <span className="w-8 h-px bg-[#C8A97E]/35" />
          <span className="text-[#C8A97E]/45 text-[9px] tracking-[0.7em] uppercase">קבעי עכשיו</span>
          <span className="w-8 h-px bg-[#C8A97E]/35" />
        </motion.div>

        {/* Emotional headline */}
        <div className="mb-8">
          {["את תצאי מכאן", "גרסה אחרת של עצמך."].map((line, i) => (
            <div key={i} className="overflow-hidden pb-[0.18em]">
              <motion.div
                initial={{ y: "112%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{ duration: 1.2, delay: i * 0.16, ease: EASE }}
                className={`font-display leading-[1.05] tracking-[-0.015em] ${i === 1 ? "text-[#C8A97E] italic" : "text-[#F8F6F3]"}`}
                style={{ fontSize: "clamp(2.8rem, 8vw, 10rem)" }}
              >
                {line}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Sub — short */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
          className="text-[#F8F6F3]/85 text-sm md:text-base font-light leading-[1.9] max-w-sm mx-auto mb-14 md:mb-20"
        >
          ייעוץ ראשון ללא עלות.
          <br />
          שלחי הודעה ונחזור אליך תוך שעה.
        </motion.p>

        {/* CTAs — prominent */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mb-10"
        >
          {/* Primary WhatsApp */}
          <a
            href="https://wa.me/972535220611"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#C8A97E] hover:bg-[#D9C5A1] text-[#111111] text-xs font-medium tracking-[0.3em] uppercase px-10 py-4 transition-colors duration-300"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>קבעי פגישה בוואטסאפ</span>
          </a>

          {/* Phone */}
          <a href="tel:0535220611"
            className="text-[#F8F6F3]/58 hover:text-[#F8F6F3]/90 text-xs tracking-[0.35em] font-light transition-colors duration-300"
            dir="ltr">
            053 522 0611
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-6"
        >
          <span className="w-6 h-px bg-[#C8A97E]/20" />
          <span className="text-[#F8F6F3]/45 text-[8px] tracking-[0.5em] uppercase">200+ לקוחות מרוצות · תל אביב</span>
          <span className="w-6 h-px bg-[#C8A97E]/20" />
        </motion.div>
      </div>
    </section>
  );
}
