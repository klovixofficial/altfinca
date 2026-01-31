"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import LeadForm from "@/components/forms/LeadForm";
import Card from "@/components/ui/Card";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

export default function ContactoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--bg)] via-white to-[var(--bg-alt)] py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--accent)]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--primary)]/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold text-[var(--text)] mb-6"
            >
              Hablemos de tu próxima inversión
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg lg:text-xl text-[var(--text-light)]"
            >
              Estamos aquí para resolver tus dudas y ayudarte a encontrar la
              oportunidad de inversión perfecta para ti.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contacto Grid */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Información de contacto */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card variant="bordered" className="group hover:border-[var(--primary)] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 text-[var(--primary)] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text)] mb-1">Email</h3>
                      <p className="text-[var(--text-light)] text-sm mb-2">
                        Respuesta en menos de 24h
                      </p>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-[var(--primary)] font-medium hover:underline"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card variant="bordered" className="group hover:border-[var(--primary)] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 text-[var(--primary)] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text)] mb-1">Teléfono</h3>
                      <p className="text-[var(--text-light)] text-sm mb-2">
                        Lunes a viernes, 9-18h
                      </p>
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="text-[var(--primary)] font-medium hover:underline"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card variant="bordered" className="group hover:border-[var(--success)] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--success)]/10 text-[var(--success)] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[var(--success)] group-hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text)] mb-1">WhatsApp</h3>
                      <p className="text-[var(--text-light)] text-sm mb-2">
                        Respuesta rápida
                      </p>
                      <a
                        href={getWhatsAppUrl(SITE_CONFIG.whatsapp, "Hola, me gustaría más información")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--success)] font-medium hover:underline"
                      >
                        Enviar mensaje
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Card variant="default" className="bg-[var(--bg-alt)]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--accent)]/10 text-[var(--accent)] rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text)] mb-1">Horario</h3>
                      <p className="text-[var(--text-light)] text-sm">
                        Lunes - Viernes: 9:00 - 18:00<br />
                        Fines de semana: Cerrado
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <LeadForm
                nicho="general"
                origen="contacto"
                title="Envíanos un mensaje"
                subtitle="Cuéntanos en qué podemos ayudarte y te responderemos lo antes posible"
                showPresupuesto={true}
                showExperiencia={true}
                showMensaje={true}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ rápido */}
      <section className="section bg-[var(--bg-alt)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text)] mb-4">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                pregunta: "¿Cuánto tardáis en responder?",
                respuesta:
                  "Intentamos responder en menos de 24 horas laborables. Si es urgente, el WhatsApp es tu mejor opción.",
              },
              {
                pregunta: "¿La primera consulta es gratuita?",
                respuesta:
                  "Sí, la primera conversación es gratuita y sin compromiso. Nos sirve para conocerte y ver cómo podemos ayudarte.",
              },
              {
                pregunta: "¿Trabajáis en toda España?",
                respuesta:
                  "Sí, trabajamos en todo el territorio nacional. Tenemos red de colaboradores en las principales zonas.",
              },
              {
                pregunta: "¿Tenéis oficina física?",
                respuesta:
                  "Trabajamos 100% en remoto, lo que nos permite ofrecer un servicio más ágil y con mejores precios. Las reuniones las hacemos por videollamada o in situ cuando es necesario.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="default">
                  <h3 className="font-semibold text-[var(--text)] mb-2">
                    {item.pregunta}
                  </h3>
                  <p className="text-[var(--text-light)] text-sm">
                    {item.respuesta}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
