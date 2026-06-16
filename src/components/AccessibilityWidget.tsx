"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Settings {
  fontSize: number;
  highContrast: boolean;
  grayscale: boolean;
  highlightLinks: boolean;
  stopAnimations: boolean;
  textSpacing: boolean;
  readableFont: boolean;
}

const DEFAULT: Settings = {
  fontSize: 0,
  highContrast: false,
  grayscale: false,
  highlightLinks: false,
  stopAnimations: false,
  textSpacing: false,
  readableFont: false,
};

const STORAGE_KEY = "shlomi-a11y";

function applySettings(s: Settings) {
  const cl = document.documentElement.classList;
  cl.toggle("a11y-font-large", s.fontSize === 1);
  cl.toggle("a11y-font-xl", s.fontSize === 2);
  cl.toggle("a11y-high-contrast", s.highContrast);
  cl.toggle("a11y-grayscale", s.grayscale);
  cl.toggle("a11y-highlight-links", s.highlightLinks);
  cl.toggle("a11y-stop-animations", s.stopAnimations);
  cl.toggle("a11y-text-spacing", s.textSpacing);
  cl.toggle("a11y-readable-font", s.readableFont);
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULT);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Settings;
        setSettings(parsed);
        applySettings(parsed);
      }
    } catch { /* ignore */ }
  }, []);

  const update = useCallback((patch: Partial<Settings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      applySettings(next);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setSettings(DEFAULT);
    applySettings(DEFAULT);
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
  }, []);

  const options = [
    { key: "highContrast",    label: "ניגודיות גבוהה",       icon: "◑" },
    { key: "grayscale",       label: "גווני אפור",            icon: "◐" },
    { key: "highlightLinks",  label: "הדגשת קישורים",         icon: "🔗" },
    { key: "stopAnimations",  label: "הפסקת אנימציות",        icon: "⏸" },
    { key: "textSpacing",     label: "ריווח טקסט מוגבר",     icon: "↔" },
    { key: "readableFont",    label: "גופן קריא",             icon: "A"  },
  ] as const;

  return (
    <>
      {/* ── Floating button ── */}
      <div className="fixed bottom-6 left-6 z-[9990]">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="פתח תפריט נגישות"
          aria-expanded={open}
          className="w-14 h-14 rounded-full bg-[#111111] hover:bg-[#2a2a2a] text-white shadow-[0_4px_24px_rgba(0,0,0,0.22)] flex items-center justify-center transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8A97E] focus-visible:outline-offset-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="3.5" r="2" />
            <path d="M12 7c-1.1 0-2 .9-2 2v4l-2.5 4.5c-.3.5-.1 1.1.4 1.4.5.3 1.1.1 1.4-.4L11 15h2l1.7 3.5c.3.5.9.7 1.4.4.5-.3.7-.9.4-1.4L14 13V9c0-1.1-.9-2-2-2z"/>
          </svg>
        </button>
      </div>

      {/* ── Panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 left-6 z-[9989] w-80 bg-white shadow-[0_12px_48px_rgba(0,0,0,0.16)] border border-[#111111]/[0.07] overflow-hidden"
            role="dialog"
            aria-label="תפריט נגישות"
            dir="rtl"
          >
            {/* ── Header ── */}
            <div className="bg-[#111111] px-6 py-5 flex items-center justify-between">
              <div>
                <div className="text-[#F8F6F3] text-base font-medium tracking-wide">נגישות</div>
                <div className="text-[#C8A97E]/65 text-[9px] tracking-[0.4em] uppercase mt-1">Accessibility</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="סגור תפריט נגישות"
                className="w-8 h-8 flex items-center justify-center text-[#F8F6F3]/40 hover:text-[#F8F6F3] transition-colors duration-200 text-lg"
              >
                ✕
              </button>
            </div>

            <div className="p-5 flex flex-col gap-5">

              {/* ── Font size ── */}
              <div>
                <div className="text-[#111111]/40 text-[9px] tracking-[0.45em] uppercase mb-3">גודל טקסט</div>
                <div className="grid grid-cols-3 gap-2">
                  {([
                    { label: "רגיל",      val: 0 },
                    { label: "גדול",      val: 1 },
                    { label: "גדול מאוד", val: 2 },
                  ] as const).map(({ label, val }) => (
                    <button
                      key={val}
                      onClick={() => update({ fontSize: val })}
                      aria-pressed={settings.fontSize === val}
                      className={`py-3 text-sm rounded-sm border transition-all duration-200 ${
                        settings.fontSize === val
                          ? "bg-[#C8A97E] text-[#111111] border-[#C8A97E] font-medium"
                          : "bg-[#F8F6F3] text-[#111111]/60 border-transparent hover:border-[#C8A97E]/40 hover:bg-[#F0EBE3]"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* ── Divider ── */}
              <div className="border-t border-[#111111]/[0.07]" />

              {/* ── Toggles ── */}
              <div className="flex flex-col gap-2">
                {options.map(({ key, label, icon }) => {
                  const active = settings[key] as boolean;
                  return (
                    <button
                      key={key}
                      onClick={() => update({ [key]: !active })}
                      aria-pressed={active}
                      className={`flex items-center justify-between w-full px-4 py-3.5 rounded-sm border transition-all duration-200 ${
                        active
                          ? "bg-[#C8A97E]/12 border-[#C8A97E]/50 text-[#111111]"
                          : "bg-[#F8F6F3] border-transparent hover:bg-[#F0EBE3] text-[#111111]/70"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Toggle switch */}
                        <div className={`relative w-9 h-5 rounded-full transition-colors duration-200 shrink-0 ${active ? "bg-[#C8A97E]" : "bg-[#111111]/15"}`}>
                          <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-200 ${active ? "right-0.5" : "left-0.5"}`} />
                        </div>
                        <span className="text-sm font-light">{label}</span>
                      </div>
                      <span className="text-base opacity-50" aria-hidden="true">{icon}</span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* ── Footer ── */}
            <div className="px-5 py-4 border-t border-[#111111]/[0.07] flex items-center justify-between bg-[#FAFAF9]">
              <button
                onClick={reset}
                className="text-[#111111]/40 text-[10px] tracking-[0.35em] uppercase hover:text-[#111111] transition-colors duration-200"
              >
                איפוס הגדרות
              </button>
              <a
                href="/accessibility"
                className="text-[#C8A97E] text-[10px] tracking-[0.35em] uppercase hover:text-[#111111] transition-colors duration-200"
              >
                הצהרת נגישות
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
