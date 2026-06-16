"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const transformations = [
  {
    id: 1,
    before: "שחור עמוק",
    after: "בלונד שמפניה",
    technique: "בלייאז׳ + לייטנינג",
    duration: "7 שעות",
    color: "#1a1a1a",
    accentColor: "#D4AF37",
  },
  {
    id: 2,
    before: "שיער שטוח ועייף",
    after: "נפח ואורך",
    technique: "תוספות שיער אנושי",
    duration: "5 שעות",
    color: "#1a1208",
    accentColor: "#C0954A",
  },
  {
    id: 3,
    before: "פריזאות ואי-שליטה",
    after: "חלק, בריא ומבריק",
    technique: "קרטין ברזילאי פרמיום",
    duration: "4 שעות",
    color: "#0d1a0d",
    accentColor: "#8BAF6A",
  },
  {
    id: 4,
    before: "חום שגרתי",
    after: "אדום עמוק ועשיר",
    technique: "צבע פנאטי מלא",
    duration: "3 שעות",
    color: "#1a0808",
    accentColor: "#C04A4A",
  },
];

const Placeholder = ({ color, accentColor, label }: { color: string; accentColor: string; label: string }) => (
  <div
    className="w-full h-full flex flex-col items-center justify-center gap-4"
    style={{ background: `linear-gradient(145deg, ${color}, #0B0B0B)` }}
  >
    <div
      className="w-16 h-16 rounded-full opacity-30"
      style={{ background: `radial-gradient(circle, ${accentColor}, transparent)` }}
    />
    <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">{label}</span>
  </div>
);

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" ref={ref} className="py-32 md:py-48 bg-[#0B0B0B] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-[#D4AF37]/60 text-xs tracking-[0.4em] uppercase font-light">
              הטרנספורמציות
            </span>
            <span className="block w-12 h-px bg-[#D4AF37]/30" />
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-tight text-[#F5F5F5] tracking-tight"
            >
              לפני. אחרי.
              <br />
              <span className="text-[#D4AF37] italic">ללא מילים.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[#F5F5F5]/35 text-sm font-light max-w-xs leading-relaxed"
            >
              כל טרנספורמציה היא סיפור שהתחיל בשיחה
              ונגמר בסטודיו שלנו.
            </motion.p>
          </div>
        </div>

        {/* Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {transformations.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* Before / After split */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#111111]">
                {/* Before side */}
                <div className="absolute inset-0 w-1/2 overflow-hidden">
                  <Placeholder color={item.color} accentColor="#333333" label="לפני" />
                  <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.25em] text-white/30 uppercase">
                    לפני
                  </div>
                </div>

                {/* After side */}
                <div className="absolute inset-0 left-1/2 overflow-hidden">
                  <div className="absolute -left-full w-full h-full">
                    <Placeholder color={item.color} accentColor={item.accentColor} label="אחרי" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.25em] text-white/30 uppercase">
                    אחרי
                  </div>
                </div>

                {/* Divider line */}
                <div className="absolute inset-y-0 left-1/2 w-px bg-[#D4AF37]/40 z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-[#D4AF37]/60 bg-[#0B0B0B] z-20 flex items-center justify-center">
                  <span className="text-[#D4AF37] text-[8px]">↔</span>
                </div>

                {/* Overlay info on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-[#0B0B0B]/80 z-30 flex flex-col items-center justify-center gap-4 p-6"
                >
                  <div className="text-center">
                    <div className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase mb-3">{item.technique}</div>
                    <div className="font-display text-2xl text-[#F5F5F5] mb-2">{item.before}</div>
                    <div className="text-[#D4AF37]/60 text-sm mb-2">↓</div>
                    <div className="font-display text-2xl text-[#D4AF37] italic">{item.after}</div>
                  </div>
                  <div className="text-[#F5F5F5]/30 text-xs tracking-widest">{item.duration}</div>
                </motion.div>
              </div>

              {/* Card Footer */}
              <div className="mt-5 flex items-start justify-between">
                <div>
                  <div className="text-[#F5F5F5] text-sm font-medium tracking-wide">{item.technique}</div>
                  <div className="text-[#F5F5F5]/35 text-xs tracking-wide mt-1">
                    {item.before} → <span className="text-[#D4AF37]/70">{item.after}</span>
                  </div>
                </div>
                <div className="text-[#F5F5F5]/25 text-xs tracking-widest">{item.duration}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-[#F5F5F5]/30 text-sm font-light mb-8 tracking-wide">
            הטרנספורמציה שלך ממתינה
          </p>
          <button
            onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#D4AF37] text-[#0B0B0B] px-12 py-4 text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#F5F5F5] transition-all duration-300"
          >
            התחילי את הדרך
          </button>
        </motion.div>
      </div>
    </section>
  );
}
