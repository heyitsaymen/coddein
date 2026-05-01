"use client";

import { ArrowRight } from "lucide-react";
import { useState, Suspense, lazy } from "react";
import Link from "next/link";
import { LetterSwapForward } from "@/components/ui/letter-swap";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({
    default: mod.Dithering,
  }))
);

export default function CTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="contact"
      className="py-16 md:py-24 w-full flex justify-center items-center px-4 md:px-6 bg-anthracite"
    >
      <div
        className="w-full max-w-7xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[48px] border border-line bg-brand-deeper/30 shadow-[0_30px_120px_-30px_rgba(34,197,94,0.3)] min-h-[600px] md:min-h-[640px] flex flex-col items-center justify-center duration-500">
          <Suspense
            fallback={<div className="absolute inset-0 bg-anthracite/20" />}
          >
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
              <Dithering
                colorBack="#00000000"
                colorFront="#22C55E"
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-light/30 bg-brand-light/10 px-4 py-1.5 text-sm font-medium text-brand-accent backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
              </span>
              Prêt à démarrer
            </div>

            {/* Headline */}
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-offwhite mb-8 leading-[1.05]">
              Votre site web, <br />
              <span className="text-offwhite">livré en 48h.</span>
            </h2>

            {/* Description */}
            <p className="text-offwhite text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              Échangeons 30 minutes sur votre projet. Devis fixe sous 24h, sans
              engagement, sans surprise.
            </p>

            {/* Button */}
            <Link
              href="mailto:contact@coddein.com"
              className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-brand-accent px-12 text-base font-semibold text-anthracite transition-all duration-300 hover:bg-brand-accent/90 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-brand-accent/20"
            >
              <span className="relative z-10 inline-flex">
                <LetterSwapForward label="Réserver un appel" />
              </span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-offwhite">
              <span>48h livraison</span>
              <span className="w-px h-3 bg-line" />
              <span>Sans engagement</span>
              <span className="w-px h-3 bg-line" />
              <span>contact@coddein.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
