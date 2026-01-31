"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "altfinca-cookie-consent";

type ConsentType = "all" | "essential" | null;

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to avoid layout shift on page load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "all");
    setShowBanner(false);
    // Here you would initialize analytics, etc.
    initializeAnalytics();
  };

  const handleAcceptEssential = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "essential");
    setShowBanner(false);
  };

  const initializeAnalytics = () => {
    // Initialize Google Analytics if consent given
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    if (gaId && typeof window !== "undefined") {
      // GA initialization would go here
      console.log("Analytics initialized");
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Main Banner */}
              {!showSettings ? (
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--accent)]/10 rounded-full shrink-0">
                      <Cookie className="w-6 h-6 text-[var(--accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[var(--text)] mb-2">
                        Utilizamos cookies
                      </h3>
                      <p className="text-sm text-[var(--text-light)] mb-4">
                        Usamos cookies para mejorar tu experiencia, analizar el tráfico y
                        personalizar el contenido. Puedes aceptar todas, solo las
                        esenciales, o configurar tus preferencias.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Button
                          variant="accent"
                          size="sm"
                          onClick={handleAcceptAll}
                        >
                          Aceptar todas
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleAcceptEssential}
                        >
                          Solo esenciales
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowSettings(true)}
                        >
                          Configurar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Settings Panel */
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-[var(--text)]">
                      Configurar cookies
                    </h3>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    {/* Essential Cookies */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-[var(--text)]">
                          Cookies esenciales
                        </p>
                        <p className="text-sm text-[var(--text-muted)]">
                          Necesarias para el funcionamiento del sitio
                        </p>
                      </div>
                      <div className="bg-[var(--success)]/20 text-[var(--success)] text-xs font-medium px-3 py-1 rounded-full">
                        Siempre activas
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-[var(--text)]">
                          Cookies analíticas
                        </p>
                        <p className="text-sm text-[var(--text-muted)]">
                          Nos ayudan a entender cómo usas el sitio
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="accent"
                      size="sm"
                      onClick={handleAcceptAll}
                      className="flex-1"
                    >
                      Guardar preferencias
                    </Button>
                  </div>

                  <p className="text-xs text-[var(--text-muted)] mt-4 text-center">
                    Más información en nuestra{" "}
                    <Link
                      href="/legal/cookies"
                      className="text-[var(--primary)] hover:underline"
                    >
                      política de cookies
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
