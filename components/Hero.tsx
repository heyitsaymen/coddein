"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { GradientBackground } from "@/components/ui/paper-design-shader-background";
import { LetterSwapForward } from "@/components/ui/letter-swap";

export default function Hero() {
  return (
    <section className="relative isolate h-screen min-h-[640px] flex items-center overflow-hidden">
      {/* Animated shader background with brand colors */}
      <GradientBackground />
      {/* Soft top fade for navbar legibility */}
      <div className="absolute inset-x-0 top-0 h-40 -z-10 bg-gradient-to-b from-anthracite/80 to-transparent" />
      {/* Bottom fade so the section blends into the dark page */}
      <div className="absolute inset-x-0 bottom-0 h-40 -z-10 bg-gradient-to-t from-anthracite to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight"
        >
          Votre site web
          <br />
          livré en{" "}
          <span className="font-bold text-white">48 heures</span>.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-2xl mx-auto text-center text-lg md:text-xl text-offwhite leading-relaxed"
        >
          Coddein conçoit, développe et déploie votre site sur-mesure en{" "}
          <span className="text-offwhite font-medium">48h chrono</span>. Sans
          compromis sur le design ni sur la performance.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-light hover:bg-brand-accent text-offwhite font-medium transition-all hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]"
          >
            <Sparkles
              size={18}
              className="text-brand-accent group-hover:text-offwhite transition-colors"
            />
            <LetterSwapForward label="Lancer mon projet" />
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="#process"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-line bg-anthracite/40 backdrop-blur-sm hover:border-brand-light/60 text-offwhite font-medium transition-all"
          >
            <LetterSwapForward label="Découvrir le process" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
