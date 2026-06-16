"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const ringX = useSpring(mouseX, { damping: 28, stiffness: 500, mass: 0.35 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 500, mass: 0.35 });

  const dotX = useSpring(mouseX, { damping: 40, stiffness: 900, mass: 0.1 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 900, mass: 0.1 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    const checkPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(
        !!(
          target.closest("a") ||
          target.closest("button") ||
          target.closest("[role='button']") ||
          target.closest("input") ||
          target.closest("select") ||
          target.closest("textarea")
        )
      );
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousemove", checkPointer);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", checkPointer);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [mouseX, mouseY, visible]);

  if (isTouch) return null;

  return (
    <>
      {/* Outer ring — champagne */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-[#C8A97E]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible ? 0.7 : 0,
          width: isPointer ? 52 : 34,
          height: isPointer ? 52 : 34,
        }}
        transition={{ opacity: { duration: 0.2 }, width: { duration: 0.3 }, height: { duration: 0.3 } }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#C8A97E]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0, width: isPointer ? 5 : 3, height: isPointer ? 5 : 3 }}
        transition={{ opacity: { duration: 0.2 } }}
      />
    </>
  );
}
