"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const reviews = [
  {
    id: 1,
    text: "הגעתי עם שיער שחור פגום, יצאתי עם בלונד שמפניה מושלם. כולן שואלות איפה עשיתי את זה.",
    name: "מיכל רביד",
    location: "תל אביב",
    treatment: "בליאז׳",
    initial: "מ",
  },
  {
    id: 2,
    text: "אף אחת לא האמינה שאלו תוספות. כל כך טבעי, כל כך יפה. שלומי שינה לי את החיים.",
    name: "נועה כהן",
    location: "הרצליה",
    treatment: "תוספות שיער",
    initial: "נ",
  },
  {
    id: 3,
    text: "הוא הבין מה אני רוצה גם בלי שידעתי להסביר. יצא ממנו גרסה של עצמי שלא ידעתי שקיימת.",
    name: "שירה מנצור",
    location: "כפר סבא",
    treatment: "טרנספורמציה",
    initial: "ש",
  },
  {
    id: 4,
    text: "שלושה חודשים אחרי הקרטין, השיער עדיין חלק ומבריק. ההשקעה שווה כל שקל.",
    name: "יעל בן-דוד",
    location: "גבעתיים",
    treatment: "קרטין",
    initial: "י",
  },
  {
    id: 5,
    text: "התוצאה? מעל לכל ציפייה. הוא מסביר כל שלב, מקשיב, ומוסיף את המגע שלו. אין כמוהו.",
    name: "דנה לוי",
    location: "ראשון לציון",
    treatment: "גוונים",
    initial: "ד",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % reviews.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  const active = reviews[activeIndex];

  return (
    <section id="testimonials" ref={ref} className="py-44 md:py-80 bg-[#F8F6F3] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-[#111111]/[0.10]" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,169,126,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-[#C8A97E]/75 text-[9px] tracking-[0.6em] uppercase">05</span>
              <span className="w-6 h-px bg-[#C8A97E]/30" />
              <span className="text-[#111111]/42 text-[9px] tracking-[0.5em] uppercase">מה אומרות הלקוחות</span>
            </motion.div>
            {["200+ נשים כבר", "מצאו את המקום שלהן."].map((line, i) => (
              <div key={i} className="overflow-hidden pb-[0.18em]">
                <motion.div
                  initial={{ y: "112%" }}
                  animate={isInView ? { y: "0%" } : {}}
                  transition={{ duration: 1.1, delay: i * 0.12, ease: EASE }}
                  className={`font-display leading-[1.1] tracking-tight ${i === 1 ? "text-[#C8A97E] italic" : "text-[#111111]"}`}
                  style={{ fontSize: "clamp(2rem, 4.5vw, 5rem)" }}
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-1 border border-[#C8A97E]/25 px-8 py-5 self-start"
          >
            <div className="font-display text-[#111111] text-3xl">5.0</div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#C8A97E] text-sm">★</span>
              ))}
            </div>
            <div className="text-[#111111]/50 text-[8px] tracking-[0.35em] uppercase mt-1">Google · 200+ ביקורות</div>
          </motion.div>
        </div>

        {/* Quote */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="max-w-4xl"
          >
            <blockquote
              className="font-display text-[#111111]/90 tracking-tight leading-[1.55] mb-10"
              style={{ fontSize: "clamp(1.7rem, 4vw, 4.2rem)" }}
            >
              &ldquo;{active.text}&rdquo;
            </blockquote>

            <div className="flex items-center gap-5 flex-wrap">
              <div className="w-9 h-9 border border-[#C8A97E]/35 flex items-center justify-center">
                <span className="font-display text-[#C8A97E] text-base">{active.initial}</span>
              </div>
              <div>
                <div className="text-[#111111]/90 text-sm font-light">{active.name}</div>
                <div className="text-[#111111]/50 text-[9px] tracking-[0.35em] uppercase mt-0.5">{active.location} · {active.treatment}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation + CTA */}
        <div className="mt-14 flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-4">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-400 ${i === activeIndex ? "w-6 h-[1px] bg-[#C8A97E]" : "w-[3px] h-[3px] rounded-full bg-[#111111]/18"}`}
                aria-label={`ביקורת ${i + 1}`}
              />
            ))}
          </div>

          <a
            href="https://wa.me/972535220611"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#111111] hover:bg-[#222] text-[#F8F6F3] text-[10px] tracking-[0.35em] uppercase px-7 py-3.5 transition-colors duration-300"
          >
            <span>גם אני רוצה כזה</span>
          </a>
        </div>
      </div>
    </section>
  );
}
