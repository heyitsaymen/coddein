"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Navbar as NavbarRoot,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { LetterSwapForward } from "@/components/ui/letter-swap";

const navItems = [
  { label: "Services", link: "#services" },
  { label: "Process", link: "#process" },
  { label: "Contact", link: "#contact" },
];

function CoddeinLogo() {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center"
      aria-label="Coddein"
    >
      <Image
        src="/logo.png"
        alt="Coddein"
        width={56}
        height={56}
        className="h-9 w-9 md:h-11 md:w-11 object-contain"
        priority
      />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <NavbarRoot>
      {/* Desktop */}
      <NavBody>
        <CoddeinLogo />
        <NavItems
          items={navItems.map((item) => ({
            link: item.link,
            name: <LetterSwapForward label={item.label} />,
          }))}
        />
        <div className="relative z-20 flex items-center">
          <NavbarButton href="#contact" variant="brand">
            <LetterSwapForward label="Démarrer un projet" />
            <span>→</span>
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <CoddeinLogo />
          <MobileNavToggle
            isOpen={open}
            onClick={() => setOpen((s) => !s)}
          />
        </MobileNavHeader>
        <MobileNavMenu isOpen={open} onClose={() => setOpen(false)}>
          {navItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={() => setOpen(false)}
              className="w-full py-3 text-offwhite border-b border-line/50 last:border-b-0 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <NavbarButton
            href="#contact"
            variant="brand"
            className="mt-2 w-full justify-center"
            onClick={() => setOpen(false)}
          >
            Démarrer un projet
            <span>→</span>
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </NavbarRoot>
  );
}
