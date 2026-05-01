"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Lucide-style icon path snippets, drawn in 24x24 viewBox
const phoneIcon = (
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
);

const brushIcon = (
  <>
    <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
    <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
  </>
);

const codeIcon = (
  <>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </>
);

const sendIcon = (
  <>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </>
);

type Step = {
  id: string;
  duration: string;
  title: string;
  description: string;
  icon: ReactNode;
};

const steps: Step[] = [
  {
    id: "brief",
    duration: "30 min",
    title: "Brief",
    description:
      "On échange 30 minutes par appel pour cadrer votre besoin, votre cible, et le périmètre du site. Pas de blabla, on rentre dans le vif.",
    icon: phoneIcon,
  },
  {
    id: "design",
    duration: "Jour 1",
    title: "Design",
    description:
      "Maquettes Figma sur-mesure de votre site, fidèles à votre identité. On itère rapidement pour valider la direction visuelle.",
    icon: brushIcon,
  },
  {
    id: "dev",
    duration: "Jour 1 — 2",
    title: "Développement",
    description:
      "On code en Next.js + Tailwind. Code propre, performant, optimisé SEO et 100% responsive. Tout est déployé sur Vercel.",
    icon: codeIcon,
  },
  {
    id: "delivery",
    duration: "48h",
    title: "Livraison",
    description:
      "Site en ligne, formation rapide pour la prise en main, transmission des accès. Vous êtes opérationnel.",
    icon: sendIcon,
  },
];

function IsometricBox({
  active,
  icon,
  showLogo = false,
}: {
  active: boolean;
  icon: ReactNode;
  showLogo?: boolean;
}) {
  const lidStroke = active ? "#22C55E" : "var(--default-stroke)";
  const faceStroke = active ? "#22C55E" : "var(--default-stroke)";
  const iconOpacity = active ? 1 : 0.45;

  return (
    <div className="[--default-stroke:#1F2A23]">
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-60 overflow-visible"
      >
        {/* TOP — outer diamond (lid) */}
        <path
          d="M100 40 Q108 40 155 68 Q162 72 155 76 Q108 104 100 104 Q92 104 45 76 Q38 72 45 68 Q92 40 100 40 Z"
          fill="#13211A"
          stroke={lidStroke}
          strokeWidth="1.5"
        />
        {/* TOP — inner diamond */}
        <path
          d="M100 52 Q105 52 132 68 Q138 72 132 76 Q105 92 100 92 Q95 92 68 76 Q62 72 68 68 Q95 52 100 52 Z"
          fill="#0A140F"
          stroke={lidStroke}
          strokeWidth="1"
        />

        {/* TOP — Coddein logo, only on the top cube of the stack.
            Projected onto the lid via an exact isometric matrix that maps the
            unit square to the rhombus T(100,40), R(155,72), B(100,104), L(45,72).
            (0.5, 0.5) → (100, 72) = lid centroid → logo stays centered AND in
            perspective with the cube. */}
        {showLogo && (
          <g transform="matrix(55 32 -55 32 100 40)">
            <image
              href="/logo.png"
              x="0.25"
              y="0.25"
              width="0.5"
              height="0.5"
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        )}

        {/* LEFT face (no dashed slats) — highlighted when active */}
        <path
          d="M45 76 L100 104 L100 164 Q100 170 92 166 L45 140 Q38 136 38 128 L38 80 Q38 72 45 76 Z"
          fill="#0A140F"
          stroke={faceStroke}
          strokeWidth="1.5"
        />

        {/* RIGHT face — with step icon, slides outward when active */}
        <motion.g
          initial={false}
          animate={{
            x: active ? 12 : 0,
            y: active ? 5 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 26,
          }}
        >
          <path
            d="M155 76 L100 104 L100 164 Q100 170 108 166 L155 140 Q162 136 162 128 L162 80 Q162 72 155 76 Z"
            fill="#13211A"
            stroke={faceStroke}
            strokeWidth="1.5"
          />

          {/* Icon on the right face, projected via the right-face isometric matrix */}
          <g
            transform="matrix(55 -28 0 60 100 104)"
            opacity={iconOpacity}
          >
            <svg
              x="0.3"
              y="0.3"
              width="0.4"
              height="0.4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#22C55E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              overflow="visible"
            >
              {icon}
            </svg>
          </g>
        </motion.g>
      </svg>
    </div>
  );
}

export default function Process() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="process"
      className="relative w-full bg-anthracite py-10 md:py-20 border-t border-line"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-20">
        {/* Section header */}
        <div className="mb-12 text-left">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-accent">
            <span className="w-8 h-px bg-brand-accent" />
            Process
          </span>
          <h2 className="mt-4 mb-4 font-display text-3xl md:text-5xl font-semibold text-offwhite tracking-tight">
            De l&apos;idée au site en ligne,{" "}
            <span className="italic font-light">en 48h</span>.
          </h2>
          <p className="max-w-xl text-offwhite leading-relaxed">
            Un sprint resserré, conçu pour livrer vite sans rogner sur la
            qualité. Transparent, collaboratif, sans surprise.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left column - clickable steps */}
          <div className="flex flex-col gap-2">
            {steps.map((step, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  aria-pressed={isActive}
                  className={cn(
                    "z-20 cursor-pointer rounded-2xl p-4 text-left transition-colors",
                    isActive
                      ? "bg-brand-deeper/40 ring-1 ring-brand-light/30 shadow-sm"
                      : "hover:bg-brand-deeper/20"
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-offwhite">
                      {step.title}
                    </h3>
                    <span
                      className={cn(
                        "text-xs px-2.5 py-1 rounded-full border whitespace-nowrap",
                        isActive
                          ? "border-brand-accent/40 bg-brand-light/15 text-brand-accent"
                          : "border-line text-offwhite"
                      )}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      height: isActive ? "auto" : 0,
                      marginTop: isActive ? 8 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-offwhite leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </button>
              );
            })}
          </div>

          {/* Right column - stacked isometric boxes (each stays in place) */}
          <div className="flex items-center justify-center">
            <div className="relative flex w-full flex-col items-center">
              {steps.map((step, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <div
                    key={step.id}
                    style={{
                      zIndex: steps.length - idx,
                      marginTop: idx === 0 ? 0 : 10,
                    }}
                    className="flex h-[72px] items-center justify-center"
                  >
                    <IsometricBox
                      active={isActive}
                      icon={step.icon}
                      showLogo={idx === 0}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
