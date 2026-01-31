import type { Metadata } from "next";
import { Outfit, Fraunces } from "next/font/google";
import "./globals.css";
import { Header, Footer, CookieBanner } from "@/components/layout";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AltFinca | Inversión Inmobiliaria Alternativa",
    template: "%s | AltFinca",
  },
  description:
    "Inversión inmobiliaria diferente: subastas judiciales, fincas rústicas, campings y hoteles rurales. Análisis profesional y acompañamiento integral.",
  keywords: [
    "inversión inmobiliaria",
    "subastas judiciales",
    "fincas rústicas",
    "campings en venta",
    "hoteles rurales",
    "inversión alternativa",
    "inmobiliaria España",
  ],
  authors: [{ name: "AltFinca" }],
  creator: "AltFinca",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://altfinca.es"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "AltFinca",
    title: "AltFinca | Inversión Inmobiliaria Alternativa",
    description:
      "Inversión inmobiliaria diferente: subastas judiciales, fincas rústicas, campings y hoteles rurales.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AltFinca - Inversión Inmobiliaria Alternativa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AltFinca | Inversión Inmobiliaria Alternativa",
    description:
      "Inversión inmobiliaria diferente: subastas judiciales, fincas rústicas, campings y hoteles rurales.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${fraunces.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CookieBanner />
      </body>
    </html>
  );
}
