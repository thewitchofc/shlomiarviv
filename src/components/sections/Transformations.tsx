"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const EASE = [0.16, 1, 0.3, 1] as const;

const transformations = [
  {
    id: 1,
    title: "בלייאז׳",
    result: "גוונים שמפניה טבעיים",
    technique: "Balayage · Toning",
    duration: "6–7 שעות",
    afterVideo: null,
    beforeImage: "/assets/transformation-1-before.png",
    afterImage: "/assets/transformation-1-after.png",
  },
  {
    id: 2,
    title: "החלקה אורגנית",
    result: "שיער חלק ובריא לחודשים",
    technique: "Organic Straightening",
    duration: "3–4 שעות",
    afterVideo: "/assets/transformation-2-video.mp4",
    beforeImage: null,
    afterImage: null,
  },
  {
    id: 3,
    title: "טרנספורמציה",
    result: "שינוי מלא מקצה לקצה",
    technique: "Color Correction · Bleach",
    duration: "7–8 שעות",
    afterVideo: "/assets/hero-video-3.mp4",
    beforeImage: null,
    afterImage: null,
  },
];

function BeforePanel({ src }: { src: string | null }) {
  if (src) {
    return (
      <div className="absolute inset-0 w-full h-full">
        <Image src={src} alt="לפני" fill className="object-cover object-top" sizes="800px" />
      </div>
    );
  }
  return (
    <div className="absolute inset-0 w-full h-full bg-[#EDE8E1]">
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(200,169,126,0.10) 0%, rgba(237,232,225,1) 70%)" }} />
    </div>
  );
}

function AfterPanel({ imageSrc, videoSrc }: { imageSrc: string | null; videoSrc: string | null }) {
  if (imageSrc) {
    return (
      <div className="absolute inset-0 w-full h-full">
        <Image src={imageSrc} alt="אחרי" fill className="object-cover object-top" sizes="800px" />
      </div>
    );
  }
  if (videoSrc) {
    return (
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={videoSrc} type="video/mp4" />
      </video>
    );
  }
  return null;
}

export default function Transformations() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="transformations" ref={ref} className="py-44 md:py-80 bg-[#F8F6F3] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-[#111111]/[0.10]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">

        {/* Headline */}
        <div className="mb-20 md:mb-28 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="w-6 h-px bg-[#C8A97E]/40" />
            <span className="text-[#C8A97E]/80 text-[9px] tracking-[0.6em] uppercase">03 · לפני ואחרי</span>
            <span className="w-6 h-px bg-[#C8A97E]/40" />
          </motion.div>

          <div className="overflow-hidden pb-[0.18em] mb-4">
            <motion.div
              initial={{ y: "112%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 1.1, ease: EASE }}
              className="font-display text-[#111111] tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 6.5rem)" }}
            >
              כך נראות הלקוחות שלנו
            </motion.div>
          </div>
          <div className="overflow-hidden pb-[0.18em]">
            <motion.div
              initial={{ y: "112%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
              className="font-display font-semibold text-[#C8A97E] italic tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 6.5rem)" }}
            >
              אחרי שלומי.
            </motion.div>
          </div>
        </div>

        {/* Sliders — large and prominent */}
        <div className="space-y-20 md:space-y-32">
          {transformations.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: i * 0.12 + 0.2, ease: EASE }}
            >
              {/* Slider — full width on mobile, large on desktop */}
              <BeforeAfterSlider
                beforeContent={<BeforePanel src={item.beforeImage} />}
                afterContent={<AfterPanel imageSrc={item.afterImage} videoSrc={item.afterVideo} />}
                beforeLabel="לפני"
                afterLabel="אחרי"
                className="aspect-[4/3] md:aspect-[16/7] w-full"
              />

              {/* Caption below */}
              <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="font-display text-[#111111] text-xl md:text-2xl tracking-tight">{item.title}</span>
                  <span className="text-[#C8A97E] text-sm font-light tracking-[0.03em] mr-3 italic">{item.result}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-[#111111]/50 text-[9px] tracking-[0.4em] uppercase hidden md:block">{item.technique}</span>
                  <span className="text-[#111111]/50 text-[9px] tracking-[0.35em]">{item.duration}</span>
                  <a
                    href="https://wa.me/972535220611"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C8A97E] text-[10px] tracking-[0.4em] uppercase hover:text-[#111111] transition-colors duration-300 border-b border-[#C8A97E]/40 hover:border-[#111111]/40 pb-0.5"
                  >
                    גם אני רוצה כזה
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 md:mt-32 text-center"
        >
          <a
            href="https://wa.me/972535220611"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#C8A97E] hover:bg-[#D9C5A1] text-[#111111] text-xs font-medium tracking-[0.3em] uppercase px-10 py-4 transition-colors duration-300"
          >
            <span>קבעי את הטרנספורמציה שלך</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
