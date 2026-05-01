import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Services",
    links: [
      { label: "Sites vitrines", href: "#services" },
      { label: "Landing pages", href: "#services" },
      { label: "E-commerce", href: "#services" },
      { label: "MVP SaaS", href: "#services" },
    ],
  },
  {
    title: "Agence",
    links: [
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
      { label: "contact@coddein.com", href: "mailto:contact@coddein.com" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Mentions légales", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-anthracite">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="flex items-center" aria-label="Coddein">
              <div className="relative h-10 w-10 rounded-xl overflow-hidden ring-1 ring-brand-light/30 bg-brand-deeper/40 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Coddein"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="mt-5 text-sm text-offwhite max-w-xs leading-relaxed">
              Agence de développement web. On conçoit, on code, on déploie —
              votre site en 48h chrono.
            </p>
            <div className="mt-6 flex gap-3">
              {["X", "in", "Be", "Gh"].map((s) => (
                <Link
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-offwhite text-xs hover:border-brand-accent hover:text-brand-accent transition-all"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.title} className="md:col-span-2 lg:col-span-2">
              <h4 className="text-sm font-semibold text-offwhite mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-offwhite hover:text-brand-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-12 lg:col-span-2">
            <h4 className="text-sm font-semibold text-offwhite mb-4">
              Contact direct
            </h4>
            <p className="text-sm text-offwhite mb-3">
              Une idée, un projet ? Écrivez-nous, on répond sous 24h.
            </p>
            <Link
              href="mailto:contact@coddein.com"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-brand-light/10 hover:bg-brand-light/20 border border-brand-light/30 hover:border-brand-accent/50 text-brand-accent rounded-lg transition-colors"
            >
              contact@coddein.com →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-offwhite">
            © {new Date().getFullYear()} Coddein. Tous droits réservés.
          </p>
          <p className="text-xs text-offwhite">
            Disponible dans toute l&apos;Europe
          </p>
        </div>
      </div>

      {/* Big watermark */}
      <div className="overflow-hidden border-t border-line">
        <div className="font-display text-[18vw] md:text-[16vw] font-semibold leading-none text-center text-transparent bg-clip-text bg-gradient-to-b from-brand-light/20 to-transparent select-none -mb-[4vw] pt-4">
          coddein.
        </div>
      </div>
    </footer>
  );
}
