"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "שלומי הוא לא מעצב שיער. הוא אמן. נכנסתי עם שיער שחור שבור ויצאתי עם בלונד שמפניה מושלם שאנשים שואלים עליו עד היום.",
    name: "מיכל ר.",
    location: "תל אביב",
    treatment: "בלייאז׳ + לייטנינג",
    initial: "מ",
  },
  {
    id: 2,
    text: "ביקרתי אצל שלומי לתוספות שיער ואני לא מאמינה שאלו שיערי. כל כך טבעי, כל כך יפה. זו לא תסרוקת — זו חוויה שמשנה את הראייה שלך על עצמך.",
    name: "נועה כ.",
    location: "הרצליה",
    treatment: "תוספות שיער אנושי",
    initial: "נ",
  },
  {
    id: 3,
    text: "הקרטין שעשיתי אצל שלומי הוא הטוב ביותר שחוויתי. שלושה חודשים אחרי — השיער עדיין מבריק, עדיין חלק. השקעה שמשתלמת.",
    name: "דנה ל.",
    location: "ראשון לציון",
    treatment: "קרטין ברזילאי",
    initial: "ד",
  },
  {
    id: 4,
    text: "חיפשתי מישהו שיבין בדיוק מה אני רוצה בלי שאדע להסביר. שלומי הבין. קיבלתי גרסה של עצמי שלא ידעתי שקיימת.",
    name: "שירה מ.",
    location: "כפר סבא",
    treatment: "טרנספורמציה מלאה",
    initial: "ש",
  },
  {
    id: 5,
    text: "הסטודיו שלו זה עולם אחר. מהרגע שנכנסת — האווירה, הפרטים, הקפה. ואז הצבע שיוצא... אין מילים. רק תבואו לראות.",
    name: "יעל ב.",
    location: "גבעתיים",
    treatment: "הארות + צבע",
    initial: "י",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" ref={ref} className="py-32 md:py-48 bg-[#111111] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)" }}
      />

      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.015]"
        style={{ background: "radial-gradient(circle, #D4AF37, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-[#D4AF37]/60 text-xs tracking-[0.4em] uppercase font-light">
            החוויות
          </span>
          <span className="block w-12 h-px bg-[#D4AF37]/30" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <h2 className="font-display text-[clamp(2.5rem,4vw,4.5rem)] leading-tight text-[#F5F5F5] tracking-tight mb-8">
              מה
              <br />
              אומרות
              <br />
              <span className="text-[#D4AF37] italic">הנשים</span>
              <br />
              שלנו
            </h2>

            {/* Navigation dots */}
            <div className="flex gap-2 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`transition-all duration-300 ${
                    i === activeIndex
                      ? "w-8 h-1 bg-[#D4AF37]"
                      : "w-1 h-1 rounded-full bg-[#F5F5F5]/20 hover:bg-[#F5F5F5]/40"
                  }`}
                  aria-label={`ביקורת ${i + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="mt-6 text-[#F5F5F5]/20 text-xs tracking-widest">
              {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </div>
          </motion.div>

          {/* Right — testimonial */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Quote mark */}
                <div className="font-display text-[#D4AF37]/15 text-[8rem] leading-none mb-4 select-none">
                  &ldquo;
                </div>

                <blockquote className="font-display text-[clamp(1.2rem,2.5vw,2rem)] leading-relaxed text-[#F5F5F5]/85 tracking-tight mb-10">
                  {active.text}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                    <span className="font-display text-[#D4AF37] text-lg">{active.initial}</span>
                  </div>
                  <div>
                    <div className="text-[#F5F5F5] text-sm font-medium tracking-wide">{active.name}</div>
                    <div className="text-[#F5F5F5]/35 text-xs tracking-[0.2em] mt-0.5">{active.location}</div>
                  </div>
                  <div className="mr-auto">
                    <span className="border border-[#D4AF37]/20 text-[#D4AF37]/60 text-[10px] tracking-[0.2em] uppercase px-3 py-1">
                      {active.treatment}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className="flex gap-3 mt-12">
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-12 h-12 border border-[#F5F5F5]/10 hover:border-[#D4AF37]/40 flex items-center justify-center transition-colors duration-300 group"
                aria-label="ביקורת קודמת"
              >
                <span className="text-[#F5F5F5]/30 group-hover:text-[#D4AF37] transition-colors text-lg">→</span>
              </button>
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
                className="w-12 h-12 border border-[#F5F5F5]/10 hover:border-[#D4AF37]/40 flex items-center justify-center transition-colors duration-300 group"
                aria-label="ביקורת הבאה"
              >
                <span className="text-[#F5F5F5]/30 group-hover:text-[#D4AF37] transition-colors text-lg">←</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
