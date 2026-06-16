"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "01",
    name: "בלייאז׳",
    nameEn: "Balayage",
    description:
      "צבע יד-פנויה שיוצר מעבר טבעי ומזוהר בין גוונים. תוצאה שנראית כאילו נוצרה על ידי השמש — ולא על ידי מכחול.",
    detail: "3–5 שעות",
    tagline: "אור טבעי. ללא מאמץ.",
  },
  {
    id: "02",
    name: "הארות",
    nameEn: "Highlights",
    description:
      "הארות קלאסיות או ממוקדות שמוסיפות עומק, נפח וחיות לשיער — עם דיוק מוחלט לפרטי הפנים שלך.",
    detail: "2–4 שעות",
    tagline: "עומק וחיות.",
  },
  {
    id: "03",
    name: "צבע שיער",
    nameEn: "Hair Coloring",
    description:
      "מגוון שלם: צבע מלא, רוויזיה, תיקון צבע, בלונד אולטרה וכל גוון שיכול להיות במחשבתך. כימיה בדרגה עולמית.",
    detail: "1.5–4 שעות",
    tagline: "כל גוון. בשלמות.",
  },
  {
    id: "04",
    name: "קרטין",
    nameEn: "Keratin Treatment",
    description:
      "החלקה ברזילאית עמוקה שמבטלת פריזאות, מוסיפה ברק ומשאירה את השיער חלק ובריא לאורך חודשים.",
    detail: "3–4 שעות",
    tagline: "ברק. ללא פשרות.",
  },
  {
    id: "05",
    name: "תוספות שיער",
    nameEn: "Hair Extensions",
    description:
      "תוספות שיער אנושי באיכות פרמיום. הוספת אורך, נפח וצפיפות — בלתי ניתן להבחין, בלתי ניתן להפסיק.",
    detail: "4–6 שעות",
    tagline: "ארוך. עבה. מלא.",
  },
  {
    id: "06",
    name: "טרנספורמציה",
    nameEn: "Transformation",
    description:
      "שינוי מקיף ומלא: מחתך דרמטי ועד שינוי צבע טוטאלי. לפעמים אישה צריכה גרסה חדשה לגמרי של עצמה.",
    detail: "לפי הצורך",
    tagline: "גרסה חדשה. שלך.",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" ref={ref} className="py-32 md:py-48 bg-[#111111] relative">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="text-[#D4AF37]/60 text-xs tracking-[0.4em] uppercase font-light">
                הטיפולים
              </span>
              <span className="block w-12 h-px bg-[#D4AF37]/30" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-tight text-[#F5F5F5] tracking-tight"
            >
              אמנות
              <br />
              <span className="text-[#D4AF37] italic">עיצוב השיער</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#F5F5F5]/40 text-sm leading-relaxed max-w-xs font-light"
          >
            כל טיפול הוא עולם בפני עצמו.
            בחרי את החוויה שמדברת אליך.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="divide-y divide-[#F5F5F5]/5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.07 + 0.2 }}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              className="group py-8 md:py-10 cursor-pointer"
            >
              <div className="flex items-start md:items-center justify-between gap-6">
                <div className="flex items-start md:items-center gap-6 md:gap-10 flex-1 min-w-0">
                  {/* Number */}
                  <span className="font-display text-[#D4AF37]/20 text-xl font-bold shrink-0 group-hover:text-[#D4AF37]/50 transition-colors duration-300 pt-1 md:pt-0">
                    {service.id}
                  </span>

                  {/* Name */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-4 flex-wrap">
                      <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-[#F5F5F5] tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                        {service.name}
                      </h3>
                      <span className="text-[#F5F5F5]/20 text-sm tracking-widest uppercase hidden md:block">
                        {service.nameEn}
                      </span>
                    </div>

                    <AnimatePresence>
                      {hovered === service.id && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-[#F5F5F5]/50 text-sm leading-relaxed font-light mt-3 max-w-lg overflow-hidden"
                        >
                          {service.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Right side */}
                <div className="flex items-center gap-6 shrink-0">
                  <span className="text-[#F5F5F5]/30 text-xs tracking-widest hidden md:block">
                    {service.detail}
                  </span>
                  <span className="text-[#D4AF37]/60 text-xs tracking-[0.2em] italic hidden md:block">
                    {service.tagline}
                  </span>
                  <motion.div
                    animate={{ x: hovered === service.id ? -6 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-8 h-8 border border-[#D4AF37]/20 flex items-center justify-center group-hover:border-[#D4AF37]/60 transition-colors duration-300"
                  >
                    <span className="text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors text-sm">←</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 flex justify-start"
        >
          <button
            onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-[#D4AF37]/40 text-[#D4AF37] px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-[#D4AF37] hover:text-[#0B0B0B] transition-all duration-300 font-medium"
          >
            קביעת תור לטיפול
          </button>
        </motion.div>
      </div>
    </section>
  );
}
