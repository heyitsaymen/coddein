import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coddein — Agence de développement web sur-mesure",
  description:
    "Coddein est une agence de développement web qui conçoit des sites et applications performantes, élégantes et orientées résultats pour les entreprises ambitieuses.",
  keywords: [
    "agence web",
    "développement web",
    "Next.js",
    "site sur-mesure",
    "Coddein",
    "création de site",
    "SaaS",
    "e-commerce",
  ],
  metadataBase: new URL("https://coddein.com"),
  openGraph: {
    title: "Coddein — Agence de développement web",
    description:
      "Sites web et applications sur-mesure, conçus pour la performance.",
    type: "website",
    locale: "fr_FR",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@200..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-anthracite text-offwhite font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
