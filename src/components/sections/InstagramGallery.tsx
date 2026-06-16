"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const tiles = [
  { id: 1,  src: "/assets/hero-video-1.mp4", rows: 2, tag: "בלייאז׳" },
  { id: 2,  src: "/assets/hero-video-2.mp4", rows: 1, tag: "גוונים" },
  { id: 3,  src: "/assets/hero-video-3.mp4", rows: 1, tag: "צבע" },
  { id: 4,  src: "/assets/hero-video-4.mp4", rows: 2, tag: "טרנספורמציה" },
  { id: 5,  src: "/assets/hero-video-5.mp4", rows: 1, tag: "קראטין" },
  { id: 6,  src: "/assets/hero-video-2.mp4", rows: 1, tag: "הארות" },
  { id: 7,  src: "/assets/hero-video-3.mp4", rows: 2, tag: "עיצוב" },
  { id: 8,  src: "/assets/hero-video-1.mp4", rows: 1, tag: "תוספות" },
  { id: 9,  src: "/assets/hero-video-5.mp4", rows: 1, tag: "עבודה" },
];

function VideoTile({
  tile,
  index,
  isInView,
}: {
  tile: (typeof tiles)[number];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1.1, delay: index * 0.06 + 0.2, ease: EASE }}
      className={`relative overflow-hidden group ${tile.rows === 2 ? "row-span-2" : "row-span-1"}`}
    >
      {/* Real video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
      >
        <source src={tile.src} type="video/mp4" />
      </video>

      {/* Light warm overlay — editorial, not dark */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />

      {/* Warm champagne tint on hover */}
      <div className="absolute inset-0 bg-[#C8A97E]/0 group-hover:bg-[#C8A97E]/[0.04] transition-colors duration-700" />

      {/* Tag label */}
      <div className="absolute bottom-3 end-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-[8px] tracking-[0.45em] uppercase text-white/65 bg-black/40 px-2 py-1 backdrop-blur-sm">
          {tile.tag}
        </span>
      </div>

      {tile.rows === 2 && (
        <div className="absolute top-4 start-4 z-10">
          <span className="text-[8px] tracking-[0.4em] uppercase text-white/25">SA</span>
        </div>
      )}
    </motion.div>
  );
}

export default function InstagramGallery() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-44 md:py-80 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-[#111111]/[0.10]" />

      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-28 xl:px-36">

        {/* Section identifier */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-5 mb-20 md:mb-36"
        >
          <span className="text-[#C8A97E]/75 text-[9px] tracking-[0.6em] uppercase font-light">06</span>
          <span className="block w-8 h-px bg-[#C8A97E]/30" />
          <span className="text-[#111111]/42 text-[9px] tracking-[0.5em] uppercase font-light">העבודות</span>
        </motion.div>

        {/* Headline */}
        <div className="mb-20 md:mb-36">
          {["הטרנספורמציות", "שלנו."].map((line, i) => (
            <div key={i} className="overflow-hidden pb-[0.18em]">
              <motion.div
                initial={{ y: "112%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{ duration: 1.2, delay: i * 0.13, ease: EASE }}
                className="font-display text-[#111111] tracking-tight"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 6.5rem)" }}
              >
                {line}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Living video grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-[repeat(6,minmax(180px,1fr))] md:grid-rows-[repeat(4,minmax(220px,1fr))] gap-3 md:gap-4">
          {tiles.map((tile, i) => (
            <VideoTile key={tile.id} tile={tile} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 md:mt-24"
        >
          <a
            href="https://instagram.com/shlomiarviv"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-[#C8A97E]/60 text-[10px] tracking-[0.5em] uppercase hover:text-[#C8A97E] transition-colors duration-500 w-fit"
          >
            <span className="block h-px bg-[#C8A97E]/35 group-hover:bg-[#C8A97E] w-14 group-hover:w-8 transition-all duration-500" />
            <span>Instagram · @shlomiarviv</span>
            <span className="block h-px bg-[#C8A97E]/35 group-hover:bg-[#C8A97E] w-8 group-hover:w-14 transition-all duration-500" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
