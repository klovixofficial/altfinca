"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAVIGATION, SITE_CONFIG, NICHOS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNichosOpen, setIsNichosOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const nichosArray = Object.values(NICHOS);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              <span className="text-[var(--primary)]">Alt</span>
              <span className="text-[var(--accent)]">Finca</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-[var(--primary)]",
                pathname === "/" ? "text-[var(--primary)]" : "text-[var(--text-light)]"
              )}
            >
              Inicio
            </Link>

            {/* Nichos Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsNichosOpen(true)}
              onMouseLeave={() => setIsNichosOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-[var(--primary)]",
                  ["/subastas", "/fincas", "/campings", "/hoteles"].includes(pathname)
                    ? "text-[var(--primary)]"
                    : "text-[var(--text-light)]"
                )}
              >
                Inversiones
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    isNichosOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {isNichosOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                  >
                    {nichosArray.map((nicho) => (
                      <Link
                        key={nicho.id}
                        href={nicho.href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-alt)] transition-colors",
                          pathname === nicho.href && "bg-[var(--bg-alt)]"
                        )}
                      >
                        <div className="flex-1">
                          <p className="font-medium text-[var(--text)]">
                            {nicho.title}
                          </p>
                          <p className="text-xs text-[var(--text-muted)]">
                            ROI: {nicho.roi}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contacto"
              className={cn(
                "text-sm font-medium transition-colors hover:text-[var(--primary)]",
                pathname === "/contacto"
                  ? "text-[var(--primary)]"
                  : "text-[var(--text-light)]"
              )}
            >
              Contacto
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="accent" size="sm" href="/contacto">
              Consulta Gratuita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[var(--text)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  className={cn(
                    "px-4 py-3 rounded-lg font-medium transition-colors",
                    pathname === "/"
                      ? "bg-[var(--bg-alt)] text-[var(--primary)]"
                      : "text-[var(--text-light)] hover:bg-[var(--bg-alt)]"
                  )}
                >
                  Inicio
                </Link>

                {/* Mobile Nichos */}
                <div className="border-t border-gray-100 my-2 pt-2">
                  <p className="px-4 py-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                    Inversiones
                  </p>
                  {nichosArray.map((nicho) => (
                    <Link
                      key={nicho.id}
                      href={nicho.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-lg transition-colors",
                        pathname === nicho.href
                          ? "bg-[var(--bg-alt)] text-[var(--primary)]"
                          : "text-[var(--text-light)] hover:bg-[var(--bg-alt)]"
                      )}
                    >
                      <span className="font-medium">{nicho.shortTitle}</span>
                      <span className="text-sm text-[var(--accent)]">
                        {nicho.roi}
                      </span>
                    </Link>
                  ))}
                </div>

                <Link
                  href="/contacto"
                  className={cn(
                    "px-4 py-3 rounded-lg font-medium transition-colors",
                    pathname === "/contacto"
                      ? "bg-[var(--bg-alt)] text-[var(--primary)]"
                      : "text-[var(--text-light)] hover:bg-[var(--bg-alt)]"
                  )}
                >
                  Contacto
                </Link>

                <div className="pt-4 border-t border-gray-100 mt-2">
                  <Button variant="accent" size="md" className="w-full" href="/contacto">
                    Consulta Gratuita
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
