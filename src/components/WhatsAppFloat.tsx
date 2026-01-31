"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG, NICHOS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

interface WhatsAppFloatProps {
  nicho?: keyof typeof NICHOS | "general";
}

export default function WhatsAppFloat({ nicho = "general" }: WhatsAppFloatProps) {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = SITE_CONFIG.whatsapp;

  const getMessage = () => {
    if (nicho !== "general" && NICHOS[nicho]) {
      return NICHOS[nicho].whatsappMessage;
    }
    return "Hola, me interesa información sobre inversiones inmobiliarias alternativas";
  };

  const whatsappUrl = getWhatsAppUrl(phoneNumber, getMessage());

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute bottom-20 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-[#25D366] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">AltFinca</p>
                      <p className="text-white/80 text-xs">Normalmente responde en minutos</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-4">
                <div className="bg-gray-100 rounded-lg p-3 mb-4">
                  <p className="text-sm text-[var(--text)]">
                    ¡Hola! 👋 ¿Tienes dudas sobre inversiones inmobiliarias alternativas?
                    Escríbenos y te ayudamos.
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  <MessageCircle size={20} />
                  Iniciar conversación
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-lg flex items-center justify-center transition-colors"
          aria-label="Abrir chat de WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </motion.button>

        {/* Pulse animation */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366]"></span>
          </span>
        )}
      </motion.div>
    </>
  );
}
