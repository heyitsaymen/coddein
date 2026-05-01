"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Rocket,
  ShoppingBag,
  Search,
  Wand2,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Sites vitrines",
    description:
      "Sites corporate et vitrines codés à la main avec Next.js. Ultra-rapides, optimisés SEO, prêts à monter en charge.",
    features: ["Next.js / React", "Animations sur-mesure", "Responsive parfait"],
  },
  {
    icon: Rocket,
    title: "Landing pages",
    description:
      "Pages de conversion taillées pour vos campagnes. Tunnel d'acquisition optimisé, copy travaillé, A/B ready.",
    features: ["Tunnel optimisé", "Copy stratégique", "Tracking intégré"],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description:
      "Boutiques en ligne haute performance. Shopify, WooCommerce ou solution custom selon votre catalogue.",
    features: ["Shopify · Custom", "Paiement sécurisé", "Catalogue scalable"],
  },
  {
    icon: Layers,
    title: "MVP SaaS",
    description:
      "On code votre MVP en quelques jours : auth, dashboards, intégrations clés. Vous validez votre idée, vite.",
    features: ["Auth & comptes", "Dashboard", "Intégrations Stripe/API"],
  },
  {
    icon: Search,
    title: "SEO & performance",
    description:
      "Audit technique, optimisation Core Web Vitals, contenu structuré. On vous aide à monter dans les SERPs.",
    features: ["Core Web Vitals", "Audit technique", "Contenu SEO"],
  },
  {
    icon: Wand2,
    title: "Refonte de site",
    description:
      "Vous avez déjà un site qui rame ou qui date ? On le refond en 48h, sans perdre votre référencement existant.",
    features: ["Migration propre", "SEO préservé", "Design moderne"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-anthracite">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-accent">
              <span className="w-8 h-px bg-brand-accent" />
              Services
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              Une stack moderne,
              <br />
              <span className="text-offwhite">
                des projets livrés en 48h.
              </span>
            </h2>
            <p className="mt-6 text-lg text-offwhite max-w-2xl">
              De la landing au SaaS. On code, on design, on déploie — tout en
              48h chrono. Et on reste à vos côtés une fois en ligne.
            </p>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-3xl overflow-hidden border border-line">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative bg-anthracite p-8 md:p-10 hover:bg-brand-deeper/40 transition-all duration-300"
              >
                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-light/10 border border-brand-light/30 group-hover:bg-brand-accent/15 group-hover:border-brand-accent/50 transition-all">
                  <Icon className="w-5 h-5 text-brand-accent" />
                  <span className="absolute inset-0 rounded-xl bg-brand-accent/0 group-hover:bg-brand-accent/10 blur-xl transition-all" />
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-offwhite leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-offwhite"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <span className="absolute bottom-8 right-8 text-brand-accent opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1">
                  →
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
