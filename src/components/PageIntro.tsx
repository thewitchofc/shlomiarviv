"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PageIntro() {
  const [phase, setPhase] = useState<"logo" | "exit" | "done" | "none">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("exit"), 1800);
    const t2 = setTimeout(() => setPhase("none"), 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "none") return null;

  const isExit = phase === "exit";

  return (
    <AnimatePresence>
      <>
        {/* Left curtain — warm linen */}
        <motion.div
          className="fixed inset-y-0 left-0 w-1/2 bg-[#F2EDE6] z-[200]"
          initial={{ x: 0 }}
          animate={isExit ? { x: "-100%" } : { x: 0 }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        />

        {/* Right curtain — warm linen */}
        <motion.div
          className="fixed inset-y-0 right-0 w-1/2 bg-[#F2EDE6] z-[200]"
          initial={{ x: 0 }}
          animate={isExit ? { x: "100%" } : { x: 0 }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        />

        {/* Logo — centered above both panels */}
        <motion.div
          className="fixed inset-0 z-[201] flex flex-col items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isExit ? 0 : 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Image
            src="/assets/logo.png"
            alt="Shlomi Arviv"
            width={140}
            height={140}
            className="w-28 md:w-36 h-auto"
            style={{ filter: "invert(1) brightness(0.55)" }}
            priority
          />
        </motion.div>

        {/* Thin champagne progress line */}
        <motion.div
          className="fixed bottom-0 left-0 h-[1px] bg-[#C8A97E] z-[202]"
          initial={{ width: "0%" }}
          animate={{ width: isExit ? "0%" : "100%" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </>
    </AnimatePresence>
  );
}
