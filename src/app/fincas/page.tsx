"use client";

import { motion } from "framer-motion";
import { Hero, Process, CTA } from "@/components/sections";
import LeadForm from "@/components/forms/LeadForm";
import { FINCAS_CONTENT, NICHOS } from "@/lib/constants";
import Card from "@/components/ui/Card";
import * as LucideIcons from "lucide-react";

export default function FincasPage() {
  const content = FINCAS_CONTENT;
  const nicho = NICHOS.fincas;

  const getIcon = (iconName: string) => {
    const icons = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
    const Icon = icons[iconName];
    return Icon ? <Icon className="w-8 h-8" /> : null;
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={content.hero.title}
        titleAccent={content.hero.titleAccent}
        subtitle={content.hero.subtitle}
        cta={content.hero.cta}
        ctaHref="#contacto"
        trust={content.hero.trust}
      />

      {/* Tipos de Fincas */}
      <section className="section bg-[var(--bg-alt)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4"
            >
              Tipos de fincas que gestionamos
            </motion.h2>
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
              Cada tipo de finca tiene sus particularidades. Te ayudamos a encontrar
              la que mejor se adapta a tus objetivos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {content.tipos.map((tipo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="bordered" hover className="h-full text-center">
                  <div className="w-16 h-16 bg-[var(--primary)]/10 text-[var(--primary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {getIcon(tipo.icon)}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                    {tipo.titulo}
                  </h3>
                  <p className="text-sm text-[var(--text-light)] mb-4">
                    {tipo.descripcion}
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-[var(--accent)]">
                      {tipo.rentabilidad}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que invertir en fincas */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-6">
                Por qué invertir en fincas rústicas
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-8">
                La tierra siempre ha sido sinónimo de seguridad. Hoy, además,
                puede generar ingresos recurrentes y revalorizarse.
              </p>

              <div className="space-y-4">
                {[
                  "Activo tangible y refugio ante inflación",
                  "Ingresos recurrentes (arrendamiento, PAC, caza...)",
                  "Fiscalidad favorable en rústica",
                  "Demanda creciente (fotovoltaicas, eólicas...)",
                  "Baja correlación con mercados financieros",
                  "Posibilidad de uso personal + inversión",
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
                Datos del mercado
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-bold text-[var(--accent)]">+5%</p>
                  <p className="text-white">Revalorización anual media</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[var(--accent)]">4,2%</p>
                  <p className="text-white">Rentabilidad media</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[var(--accent)]">50%</p>
                  <p className="text-white">Menor tributación</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[var(--accent)]">+12%</p>
                  <p className="text-white">Demanda anual</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <Process
        title="Cómo trabajamos"
        subtitle="Te acompañamos en todo el proceso de inversión"
        steps={[
          { step: 1, title: "Define tu perfil", description: "Presupuesto, zona, uso deseado" },
          { step: 2, title: "Búsqueda activa", description: "Fincas que encajan contigo" },
          { step: 3, title: "Análisis completo", description: "Rentabilidad, cargas, ayudas PAC" },
          { step: 4, title: "Cierre y gestión", description: "Acompañamiento hasta escritura" },
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
                Encuentra tu finca ideal
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-8">
                Cuéntanos qué tipo de finca buscas y te ayudaremos a encontrar
                oportunidades que encajen con tu perfil inversor.
              </p>

              <ul className="space-y-4">
                {[
                  "Acceso a fincas off-market",
                  "Análisis de rentabilidad incluido",
                  "Verificación de ayudas PAC",
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
                origen="landing-fincas"
                title="Solicita información"
                subtitle="Rellena el formulario y te contactamos"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTA
        title="La tierra siempre ha sido el mejor refugio."
        subtitle="Encuentra fincas con rentabilidad real y tangible."
        cta="Quiero Invertir en Fincas"
        ctaHref="#contacto"
        variant="gradient"
      />
    </>
  );
}
