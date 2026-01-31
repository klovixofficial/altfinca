"use client";

import { motion } from "framer-motion";
import { Hero, Process, CTA } from "@/components/sections";
import LeadForm from "@/components/forms/LeadForm";
import { CAMPINGS_CONTENT, NICHOS } from "@/lib/constants";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { TrendingUp, Users, Sun, MapPin } from "lucide-react";

export default function CampingsPage() {
  const content = CAMPINGS_CONTENT;
  const nicho = NICHOS.campings;

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

      {/* Por que campings */}
      <section className="section bg-[var(--bg-alt)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4"
            >
              El turismo outdoor no para de crecer
            </motion.h2>
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
              El sector de campings y glamping está viviendo un boom sin precedentes.
              El momento de invertir es ahora.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                value: "+15%",
                label: "Crecimiento anual",
                description: "El sector crece cada año desde 2019",
              },
              {
                icon: <Users className="w-8 h-8" />,
                value: "11M",
                label: "Pernoctaciones/año",
                description: "En campings españoles",
              },
              {
                icon: <Sun className="w-8 h-8" />,
                value: "300+",
                label: "Días de sol",
                description: "Ventaja competitiva española",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                value: "1.200",
                label: "Campings en España",
                description: "Y creciendo",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="bordered" className="h-full text-center">
                  <div className="w-16 h-16 bg-[var(--accent)]/10 text-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold text-[var(--primary)] mb-1">
                    {stat.value}
                  </p>
                  <p className="font-medium text-[var(--text)] mb-2">
                    {stat.label}
                  </p>
                  <p className="text-sm text-[var(--text-light)]">
                    {stat.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Campings */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4"
            >
              Tipos de inversión en campings
            </motion.h2>
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
              Desde pequeñas áreas de autocaravanas hasta grandes campings de costa.
              Hay oportunidades para cada perfil inversor.
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
                  <Badge variant="accent" className="mb-4">
                    {tipo.titulo}
                  </Badge>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-[var(--text-muted)]">Inversión</p>
                      <p className="text-lg font-semibold text-[var(--text)]">
                        {tipo.inversion}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-[var(--text-muted)]">ROI esperado</p>
                      <p className="text-lg font-semibold text-[var(--success)]">
                        {tipo.roi}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Que incluye nuestro servicio */}
      <section className="section bg-[var(--bg-alt)]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-6">
                Te ayudamos a encontrar el camping perfecto
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-8">
                Comprar un camping no es como comprar una vivienda. Es adquirir
                un negocio, y necesitas analizar muchos factores.
              </p>

              <div className="space-y-4">
                {[
                  "Análisis del negocio actual y potencial",
                  "Estudio de la competencia en la zona",
                  "Verificación de licencias y permisos",
                  "Revisión de instalaciones e infraestructura",
                  "Proyección de ingresos y gastos",
                  "Acompañamiento en la negociación",
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
                Inversión vs. Gestión
              </h3>
              <p className="text-white mb-6">
                Puedes invertir en un camping de dos formas:
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-[var(--accent)] pl-4">
                  <h4 className="font-semibold text-lg mb-2">Inversor activo</h4>
                  <p className="text-white text-sm">
                    Compras y gestionas el camping. Mayor rentabilidad, más implicación.
                  </p>
                </div>
                <div className="border-l-4 border-[var(--accent)] pl-4">
                  <h4 className="font-semibold text-lg mb-2">Inversor pasivo</h4>
                  <p className="text-white text-sm">
                    Compras y contratas gestión externa. Menos rentabilidad, cero
                    preocupaciones.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <Process
        title="Cómo trabajamos"
        subtitle="Te acompañamos desde la búsqueda hasta la escritura"
        steps={[
          { step: 1, title: "Define objetivos", description: "Inversión, zona, tipo de camping" },
          { step: 2, title: "Búsqueda activa", description: "Oportunidades que encajan" },
          { step: 3, title: "Due diligence", description: "Análisis completo del negocio" },
          { step: 4, title: "Negociación y cierre", description: "Hasta la firma de escrituras" },
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
                Invierte en el turismo del futuro
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-8">
                Cuéntanos qué tipo de camping buscas y te ayudaremos a encontrar
                la oportunidad perfecta.
              </p>

              <ul className="space-y-4">
                {[
                  "Acceso a campings en venta (algunos off-market)",
                  "Análisis de viabilidad del negocio",
                  "Acompañamiento integral",
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
                origen="landing-campings"
                title="Solicita información"
                subtitle="Rellena el formulario y te contactamos"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTA
        title="El turismo outdoor no es una moda,"
        subtitle="es una tendencia que ha venido para quedarse."
        cta="Quiero Invertir en Campings"
        ctaHref="#contacto"
        variant="gradient"
      />
    </>
  );
}
