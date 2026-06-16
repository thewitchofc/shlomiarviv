"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  beforeContent: React.ReactNode;
  afterContent: React.ReactNode;
  className?: string;
  initialPosition?: number;
}

export default function BeforeAfterSlider({
  beforeLabel = "לפני",
  afterLabel = "אחרי",
  beforeContent,
  afterContent,
  className = "",
  initialPosition = 50,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(initialPosition);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(4, Math.min(96, x)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (isDragging.current) updatePosition(e.clientX); };
    const onTouch = (e: TouchEvent) => { if (isDragging.current) updatePosition(e.touches[0].clientX); };
    const onUp = () => { isDragging.current = false; };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onUp);
    };
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      dir="ltr"
      className={`relative overflow-hidden select-none cursor-col-resize ${className}`}
      onMouseDown={(e) => { isDragging.current = true; updatePosition(e.clientX); }}
      onTouchStart={(e) => { isDragging.current = true; updatePosition(e.touches[0].clientX); }}
    >
      {/* ── After — base layer, always full size ── */}
      <div className="absolute inset-0 w-full h-full">
        {afterContent}
      </div>

      {/* ── Before — full size but clip-pathed to left portion ── */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {beforeContent}
        {/* Before label */}
        <div className="absolute bottom-4 right-4 z-20">
          <span className="text-[9px] tracking-[0.35em] uppercase text-white/50 bg-black/40 px-2 py-1 backdrop-blur-sm">
            {beforeLabel}
          </span>
        </div>
      </div>

      {/* After label */}
      <div className="absolute bottom-4 left-4 z-20">
        <span className="text-[9px] tracking-[0.35em] uppercase text-white/50 bg-black/40 px-2 py-1 backdrop-blur-sm">
          {afterLabel}
        </span>
      </div>

      {/* ── Drag handle ── */}
      <div
        className="absolute top-0 bottom-0 z-30 flex items-center justify-center"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        {/* Line */}
        <div className="absolute top-0 bottom-0 w-[1px] bg-white/70" />

        {/* Handle circle */}
        <div className="relative w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-[0_0_24px_rgba(212,175,55,0.5)]">
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M3 1L1 4L3 7" stroke="#0B0B0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 1L13 4L11 7" stroke="#0B0B0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
