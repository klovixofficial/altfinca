"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";
import { SITE_CONFIG, FOOTER_LINKS, NICHOS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--primary-dark)] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-white">Alt</span>
                <span className="text-[var(--accent)]">Finca</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm mb-6">
              {SITE_CONFIG.tagline}. Inversiones inmobiliarias alternativas con
              análisis profesional y acompañamiento integral.
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Mail size={16} />
                {SITE_CONFIG.email}
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Phone size={16} />
                {SITE_CONFIG.phone}
              </a>
              <p className="flex items-center gap-2 text-gray-300 text-sm">
                <MapPin size={16} />
                Madrid, España
              </p>
            </div>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Inversiones Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Inversiones</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.nichos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Empresa</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {SITE_CONFIG.name}. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Hecho con pasión por la inversión inteligente
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
