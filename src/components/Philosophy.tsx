"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const words = [
  "יוקרה.", "עוצמה.", "נשיות.", "טרנספורמציה.", "אלגנטיות."
];

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const textRef = useRef<HTMLDivElement>(null);
  const textInView = useInView(textRef, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-32 md:py-48 bg-[#0B0B0B] relative overflow-hidden">
      {/* Subtle gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-[#D4AF37]/60 text-xs tracking-[0.4em] uppercase font-light">
            הפילוסופיה
          </span>
          <span className="block flex-1 max-w-16 h-px bg-[#D4AF37]/30" />
        </motion.div>

        {/* Main statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — big quote */}
          <div>
            <motion.blockquote
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.1] text-[#F5F5F5] tracking-tight"
            >
              &ldquo;כל אישה נושאת בתוכה גרסה של עצמה שעדיין לא ראתה.
              <span className="text-[#D4AF37] italic"> אני יוצר אותה.&rdquo;</span>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                <span className="font-display text-[#D4AF37] text-lg font-semibold">ש</span>
              </div>
              <div>
                <div className="text-[#F5F5F5] text-sm font-medium tracking-wide">Shlomi Arviv</div>
                <div className="text-[#F5F5F5]/40 text-xs tracking-[0.2em] uppercase mt-0.5">מעצב שיער · תל אביב</div>
              </div>
            </motion.div>
          </div>

          {/* Right — philosophy pillars */}
          <div ref={textRef} className="flex flex-col gap-8 pt-2">
            {[
              {
                num: "01",
                title: "ייעוץ אישי מעמיק",
                text: "כל תהליך מתחיל בשיחה. אנחנו מבינים את אישיותך, אורח החיים שלך, והחלום שלך — לפני שנוגעים בשיער."
              },
              {
                num: "02",
                title: "טכניקות עולמיות",
                text: "בלייאז׳ אירופאי, צבע פנאטי, קרטין ברזילאי — כל טיפול מבוצע עם מוצרים פרמיום ושיטות מהחוד העולמי."
              },
              {
                num: "03",
                title: "חוויה שלמה",
                text: "לא רק תוצאה — אלא חוויה שמשאירה אותך עם ביטחון עצמי ותחושה של יוקרה שנמשכת הרבה מעבר ליציאה מהסטודיו."
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: 30 }}
                animate={textInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 + 0.1 }}
                className="flex gap-6 group"
              >
                <span className="font-display text-[#D4AF37]/30 text-3xl font-bold leading-none shrink-0 group-hover:text-[#D4AF37]/60 transition-colors duration-300">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-[#F5F5F5] text-base font-medium tracking-wide mb-2">{item.title}</h3>
                  <p className="text-[#F5F5F5]/45 text-sm leading-relaxed font-light">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marquee words strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 md:mt-36 overflow-hidden"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent mb-8" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...words, ...words, ...words, ...words].map((word, i) => (
              <span
                key={i}
                className="font-display text-5xl md:text-7xl font-bold tracking-tight shrink-0"
                style={{
                  color: i % 2 === 0 ? "rgba(245,245,245,0.04)" : "rgba(212,175,55,0.06)",
                }}
              >
                {word}
              </span>
            ))}
          </motion.div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
