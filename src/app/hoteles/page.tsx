"use client";

import { motion } from "framer-motion";
import { Hero, Process, CTA } from "@/components/sections";
import LeadForm from "@/components/forms/LeadForm";
import { HOTELES_CONTENT, NICHOS } from "@/lib/constants";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Heart, TrendingUp, Home, Star } from "lucide-react";

export default function HotelesPage() {
  const content = HOTELES_CONTENT;
  const nicho = NICHOS.hoteles;

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={content.hero.title}
        titleAccent={content.hero.titleAccent}
        subtitle={content.hero.subtitle}
        cta={content.hero.cta}
        ctaHref="#contacto"
      />

      {/* Por que hoteles rurales */}
      <section className="section bg-[var(--bg-alt)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4"
            >
              Por qué invertir en hoteles rurales
            </motion.h2>
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
              El turismo de experiencias no para de crecer. Los viajeros buscan
              autenticidad, y los hoteles rurales la ofrecen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Sector en crecimiento",
                description: "El turismo rural crece un 8-10% anual en España",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Inversión + estilo de vida",
                description: "Muchos inversores combinan negocio con uso personal",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Mayor ticket medio",
                description: "Los clientes de experiencias pagan más por noche",
              },
              {
                icon: <Home className="w-8 h-8" />,
                title: "Activo inmobiliario",
                description: "Tienes un negocio que además se revaloriza",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="bordered" className="h-full text-center">
                  <div className="w-16 h-16 bg-[var(--primary)]/10 text-[var(--primary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-light)]">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Hoteles */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4"
            >
              Tipos de inversión hotelera rural
            </motion.h2>
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
              Desde pequeñas casas rurales hasta hoteles con encanto y spa.
              Hay oportunidades para cada nivel de inversión.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.tipos.map((tipo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="default" hover className="h-full">
                  <Badge variant="default" className="mb-4">
                    {tipo.titulo}
                  </Badge>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-[var(--text-muted)]">Habitaciones</p>
                      <p className="text-lg font-semibold text-[var(--text)]">
                        {tipo.habitaciones}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-[var(--text-muted)]">Inversión</p>
                      <p className="text-lg font-semibold text-[var(--accent)]">
                        {tipo.inversion}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Que analizamos */}
      <section className="section bg-[var(--bg-alt)]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-6">
                Qué analizamos antes de recomendarte un hotel
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-8">
                Comprar un hotel rural es una decisión importante. Nos aseguramos
                de que tengas toda la información para decidir bien.
              </p>

              <div className="space-y-4">
                {[
                  "Histórico de ocupación y estacionalidad",
                  "RevPAR y ADR (métricas hoteleras clave)",
                  "Estado de las instalaciones",
                  "Reputación online (reviews, puntuación)",
                  "Licencias, permisos y situación legal",
                  "Potencial de mejora y reposicionamiento",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[var(--success)] rounded-full" />
                    <span className="text-[var(--text)]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] rounded-3xl p-8 lg:p-12 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">
                Rentabilidad esperada
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-bold text-[var(--accent)]">10-18%</p>
                  <p className="text-white">ROI anual medio</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[var(--accent)]">65%</p>
                  <p className="text-white">Ocupación media</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[var(--accent)]">85€</p>
                  <p className="text-white">ADR medio</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[var(--accent)]">+8%</p>
                  <p className="text-white">Crecimiento sector</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <Process
        title="Cómo trabajamos"
        subtitle="De la búsqueda a la apertura (o traspaso)"
        steps={[
          { step: 1, title: "Define tu visión", description: "Qué tipo de hotel, zona, presupuesto" },
          { step: 2, title: "Búsqueda especializada", description: "Hoteles que encajan contigo" },
          { step: 3, title: "Due diligence", description: "Análisis completo del negocio" },
          { step: 4, title: "Cierre y transición", description: "Hasta que empieces a operar" },
        ]}
      />

      {/* Formulario de Contacto */}
      <section id="contacto" className="section bg-[var(--bg-alt)]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
                Encuentra tu hotel rural ideal
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-8">
                Cuéntanos qué tipo de proyecto buscas y te ayudaremos a encontrar
                la oportunidad perfecta.
              </p>

              <ul className="space-y-4">
                {[
                  "Acceso a hoteles en venta (algunos off-market)",
                  "Análisis de viabilidad del negocio",
                  "Acompañamiento hasta la operación",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                    <span className="text-[var(--text)]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <LeadForm
                nicho={nicho.id}
                origen="landing-hoteles"
                title="Solicita información"
                subtitle="Rellena el formulario y te contactamos"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTA
        title="Inversión y estilo de vida"
        subtitle="no tienen por qué estar reñidos."
        cta="Quiero Invertir en Hoteles Rurales"
        ctaHref="#contacto"
        variant="gradient"
      />
    </>
  );
}
