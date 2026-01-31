"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Search,
  BarChart3,
  Bell,
  Handshake,
  Shield,
  Phone,
  Target,
  Rocket,
  Gavel,
  Wheat,
  Tent,
  Hotel,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Process, CTA } from "@/components/sections";
import { HOME_CONTENT, NICHOS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  Bell: <Bell className="w-6 h-6" />,
  Handshake: <Handshake className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Phone: <Phone className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
};

const nichoIcons: Record<string, React.ReactNode> = {
  subastas: <Gavel className="w-8 h-8" />,
  fincas: <Wheat className="w-8 h-8" />,
  campings: <Tent className="w-8 h-8" />,
  hoteles: <Hotel className="w-8 h-8" />,
};

export default function HomePage() {
  const nichosArray = Object.values(NICHOS);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--bg)] via-white to-[var(--bg-alt)] py-20 lg:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text)] mb-6 leading-tight"
            >
              {HOME_CONTENT.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg lg:text-xl text-[var(--text-light)] mb-10 max-w-2xl mx-auto"
            >
              {HOME_CONTENT.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                variant="accent"
                size="lg"
                rightIcon={<ArrowRight size={20} />}
                href="#nichos"
              >
                {HOME_CONTENT.hero.cta}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nichos Section */}
      <section id="nichos" className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4"
            >
              Inversiones que marcan la diferencia
            </motion.h2>
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
              Cuatro nichos de inversión con oportunidades reales. Elige el que
              mejor encaje con tu perfil.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {nichosArray.map((nicho, index) => (
              <motion.div
                key={nicho.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={nicho.href}>
                  <Card
                    variant="bordered"
                    hover
                    className="h-full group cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-[var(--primary)]/10 text-[var(--primary)] rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                      {nichoIcons[nicho.id]}
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                      {nicho.title}
                    </h3>
                    <p className="text-sm text-[var(--text-light)] mb-4">
                      {nicho.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm font-medium text-[var(--accent)]">
                        ROI: {nicho.roi}
                      </span>
                      <ArrowRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-[var(--bg-alt)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4"
            >
              Todo lo que necesitas para invertir con confianza
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
            {HOME_CONTENT.servicios.map((servicio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="default" className="h-full">
                  <div className="w-12 h-12 bg-[var(--accent)]/10 text-[var(--accent)] rounded-xl flex items-center justify-center mb-4">
                    {iconMap[servicio.icon]}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                    {servicio.title}
                  </h3>
                  <p className="text-sm text-[var(--text-light)]">
                    {servicio.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-6">
                Por qué trabajar con nosotros
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-8">
                No somos una inmobiliaria tradicional. Somos especialistas en
                inversiones alternativas que realmente funcionan.
              </p>
              <ul className="space-y-4">
                {HOME_CONTENT.porQueNosotros.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-[var(--success)]/10 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-[var(--success)]" />
                    </div>
                    <span className="text-[var(--text)]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] rounded-3xl p-8 lg:p-12 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">
                Resultados que hablan por sí solos
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-bold text-[var(--accent)]">+200</p>
                  <p className="text-white">Inversores activos</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[var(--accent)]">38%</p>
                  <p className="text-white">Ahorro medio</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[var(--accent)]">+5K</p>
                  <p className="text-white">Oportunidades analizadas</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[var(--accent)]">98%</p>
                  <p className="text-white">Clientes satisfechos</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <Process
        title="Así de fácil es empezar"
        subtitle="En solo 3 pasos puedes estar recibiendo las mejores oportunidades"
        steps={HOME_CONTENT.proceso}
      />

      {/* Final CTA */}
      <CTA
        title={HOME_CONTENT.ctaFinal.title}
        subtitle={HOME_CONTENT.ctaFinal.subtitle}
        cta={HOME_CONTENT.ctaFinal.cta}
        variant="gradient"
      />
    </>
  );
}
