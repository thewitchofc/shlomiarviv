"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const treatments = [
  "בלייאז׳",
  "הארות",
  "צבע שיער",
  "קרטין",
  "תוספות שיער",
  "טרנספורמציה",
  "ייעוץ",
];

export default function Booking() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full bg-transparent border-b text-[#F5F5F5] py-4 text-sm tracking-wide placeholder:text-[#F5F5F5]/20 focus:outline-none transition-all duration-300 font-light ${
      focused === field
        ? "border-[#D4AF37]"
        : "border-[#F5F5F5]/10 hover:border-[#F5F5F5]/25"
    }`;

  return (
    <section id="booking" ref={ref} className="py-32 md:py-48 bg-[#0B0B0B] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)" }}
      />

      {/* Decorative background */}
      <div className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.015))"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="text-[#D4AF37]/60 text-xs tracking-[0.4em] uppercase font-light">
                קביעת תור
              </span>
              <span className="block w-12 h-px bg-[#D4AF37]/30" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.5rem,4.5vw,5rem)] leading-tight text-[#F5F5F5] tracking-tight mb-8"
            >
              התחילי
              <br />
              את
              <br />
              <span className="text-[#D4AF37] italic">הדרך</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[#F5F5F5]/40 text-sm leading-relaxed font-light mb-12 max-w-sm"
            >
              שלחי פרטים ונחזור אליך תוך 24 שעות לתיאום ייעוץ ראשוני ללא עלות.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col gap-5"
            >
              {[
                { label: "טלפון", value: "054-000-0000", href: "tel:0540000000" },
                { label: "אינסטגרם", value: "@shlomiarviv", href: "https://instagram.com" },
                { label: "תל אביב", value: "רחוב דיזנגוף, תל אביב", href: "#" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-[#D4AF37]/40 text-[10px] tracking-[0.3em] uppercase w-20 shrink-0">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    className="text-[#F5F5F5]/60 text-sm hover:text-[#D4AF37] transition-colors duration-300 tracking-wide"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-24 gap-6 text-center"
              >
                <div className="w-16 h-16 border border-[#D4AF37] flex items-center justify-center">
                  <span className="text-[#D4AF37] text-2xl">✓</span>
                </div>
                <h3 className="font-display text-3xl text-[#F5F5F5]">תודה רבה!</h3>
                <p className="text-[#F5F5F5]/40 text-sm font-light max-w-xs leading-relaxed">
                  קיבלנו את פרטייך. נחזור אליך תוך 24 שעות לתיאום ייעוץ ראשוני.
                </p>
                <div className="w-12 h-px bg-[#D4AF37]/40 mt-2" />
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="text-[#D4AF37]/50 text-[10px] tracking-[0.3em] uppercase block mb-2">שם מלא</label>
                    <input
                      type="text"
                      required
                      placeholder="שמך"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className={inputClass("name")}
                    />
                  </div>
                  <div className="relative">
                    <label className="text-[#D4AF37]/50 text-[10px] tracking-[0.3em] uppercase block mb-2">טלפון</label>
                    <input
                      type="tel"
                      required
                      placeholder="05X-XXX-XXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      className={inputClass("phone")}
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-[#D4AF37]/50 text-[10px] tracking-[0.3em] uppercase block mb-2">טיפול מבוקש</label>
                  <select
                    required
                    value={form.treatment}
                    onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                    onFocus={() => setFocused("treatment")}
                    onBlur={() => setFocused(null)}
                    className={`${inputClass("treatment")} cursor-pointer appearance-none bg-[#0B0B0B]`}
                  >
                    <option value="" disabled>בחרי טיפול</option>
                    {treatments.map((t) => (
                      <option key={t} value={t} className="bg-[#111111] text-[#F5F5F5]">{t}</option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <label className="text-[#D4AF37]/50 text-[10px] tracking-[0.3em] uppercase block mb-2">מסר אישי (אופציונלי)</label>
                  <textarea
                    rows={3}
                    placeholder="ספרי לנו על המטרות שלך..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={`${inputClass("message")} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-[#D4AF37] text-[#0B0B0B] py-5 text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#F5F5F5] transition-all duration-300 mt-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  שלחי פנייה
                </motion.button>

                <p className="text-[#F5F5F5]/20 text-xs text-center tracking-wide font-light">
                  ייעוץ ראשוני ללא עלות · תגובה תוך 24 שעות
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
