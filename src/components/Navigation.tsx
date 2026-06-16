"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const navLinks = [
  { label: "טיפולים", href: "#services" },
  { label: "טרנספורמציות", href: "#transformations" },
  { label: "גלריה", href: "#gallery" },
  { label: "ביקורות", href: "#testimonials" },
  { label: "מיקום", href: "#location" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, menuOpen ? 450 : 0);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.6, ease: EASE }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#FDFBF8]/93 backdrop-blur-xl border-b border-[#111111]/[0.05]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-28 xl:px-36">
          <div className="flex items-center justify-between h-20 md:h-24">

            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3.5 group"
            >
              <div className="flex flex-col items-start">
                <span className={`font-display text-base tracking-[0.1em] font-semibold leading-[1.2] transition-colors duration-500 group-hover:text-[#C8A97E] ${scrolled ? "text-[#111111]/95" : "text-[#F8F6F3]/90"}`}>
                  Shlomi Arviv
                </span>
                <span className={`text-[8px] tracking-[0.5em] uppercase font-light mt-0.5 ${scrolled ? "text-[#C8A97E]/65" : "text-[#C8A97E]/55"}`}>
                  Hair Design
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10 lg:gap-12">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative group text-[10px] tracking-[0.4em] uppercase transition-colors duration-400 font-light ${
                    scrolled
                      ? "text-[#111111]/62 hover:text-[#111111]"
                      : "text-[#F8F6F3]/88 hover:text-[#F8F6F3]"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 right-0 w-0 h-[0.5px] bg-[#C8A97E]/60 transition-all duration-400 group-hover:w-full" />
                </button>
              ))}

              <button
                onClick={() => scrollTo("#booking")}
                className={`group flex items-center gap-3 text-[10px] tracking-[0.45em] uppercase transition-colors duration-400 font-medium mr-2 text-[#C8A97E] hover:text-[#C8A97E]/80`}
              >
                <span>קבעי פגישה</span>
                <span className="block w-5 h-px bg-[#C8A97E]/50 group-hover:w-8 group-hover:bg-[#C8A97E] transition-all duration-400" />
              </button>
            </div>

            {/* Mobile button */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="תפריט"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className={`block h-[0.5px] ${scrolled ? "bg-[#111111]" : "bg-[#F8F6F3]"}`}
                  animate={
                    i === 0 ? (menuOpen ? { rotate: 45, y: 5.5, width: 24 } : { rotate: 0, y: 0, width: 24 }) :
                    i === 1 ? (menuOpen ? { width: 24, opacity: 0 } : { width: 16, opacity: 1 }) :
                    (menuOpen ? { rotate: -45, y: -5.5, width: 24 } : { rotate: 0, y: 0, width: 24 })
                  }
                  transition={{ duration: 0.35 }}
                />
              ))}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu — fullscreen, warm */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#F8F4EE] flex flex-col items-center justify-center"
          >
            <div className="absolute end-14 inset-y-0 w-[0.5px] bg-gradient-to-b from-transparent via-[#C8A97E]/15 to-transparent" />

            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.07 + 0.08, duration: 0.55, ease: EASE }}
                  onClick={() => scrollTo(link.href)}
                  className="font-display text-[2.8rem] text-[#111111]/60 tracking-tight hover:text-[#C8A97E] transition-colors duration-400"
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="w-10 h-[0.5px] bg-[#C8A97E]/50 mt-4"
              />

              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.55, duration: 0.4 }}
                onClick={() => scrollTo("#booking")}
                className="text-[#C8A97E]/70 text-[10px] tracking-[0.5em] uppercase hover:text-[#C8A97E] transition-colors duration-400 mt-2"
              >
                קבעי פגישה
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
