"use client";

import { motion } from "framer-motion";
import {
  Hero,
  Problem,
  Solution,
  Benefits,
  Process,
  Testimonials,
  Pricing,
  FAQ,
  CTA,
} from "@/components/sections";
import LeadForm from "@/components/forms/LeadForm";
import { SUBASTAS_CONTENT, NICHOS } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Clock } from "lucide-react";

export default function SubastasPage() {
  const content = SUBASTAS_CONTENT;
  const nicho = NICHOS.subastas;

  return (
    <>
      {/* Hero Section */}
      <Hero
        badge={content.hero.badge}
        title={content.hero.title}
        titleAccent={content.hero.titleAccent}
        subtitle={content.hero.subtitle}
        cta={content.hero.cta}
        ctaHref="#contacto"
        trust={content.hero.trust}
      />

      {/* Ejemplo de Oportunidad */}
      <section className="section bg-[var(--bg-alt)]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="accent" className="mb-4">
                {content.ejemplo.badge}
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
                Esto es una oportunidad real
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-6">
                Cada semana analizamos decenas de subastas. Esta es el tipo de
                oportunidad que enviamos a nuestros clientes.
              </p>
              <div className="flex items-center gap-2 text-[var(--error)]">
                <Clock className="w-5 h-5" />
                <span className="font-medium">{content.ejemplo.urgencia}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card variant="bordered" className="relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge variant="success">-{content.ejemplo.descuento}%</Badge>
                </div>

                <h3 className="text-xl font-semibold text-[var(--text)] mb-1">
                  {content.ejemplo.titulo}
                </h3>
                <p className="text-[var(--text-light)] mb-6">
                  {content.ejemplo.ubicacion}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--text-light)]">Precio subasta</span>
                    <span className="text-2xl font-bold text-[var(--primary)]">
                      {formatPrice(content.ejemplo.precioSubasta)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[var(--text-muted)]">Tasación oficial</span>
                    <span className="text-[var(--text-muted)] line-through">
                      {formatPrice(content.ejemplo.tasacion)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[var(--text-muted)]">Valor mercado</span>
                    <span className="text-[var(--text-muted)]">
                      {formatPrice(content.ejemplo.valorMercado)}
                    </span>
                  </div>
                </div>

                <div className="bg-[var(--success)]/10 rounded-lg p-4 text-center">
                  <p className="text-sm text-[var(--text-light)]">Ahorro potencial</p>
                  <p className="text-2xl font-bold text-[var(--success)]">
                    {formatPrice(content.ejemplo.ahorro)}
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problemas */}
      <Problem
        title="Invertir en subastas suena genial, pero..."
        subtitle="La realidad es que la mayoría abandona antes de empezar"
        problems={content.problemas}
      />

      {/* Solucion */}
      <Solution
        title={content.solucion.title}
        subtitle="Nosotros nos encargamos del trabajo duro:"
        checks={content.solucion.checks}
      />

      {/* Beneficios */}
      <Benefits
        title="Todo lo que necesitas para invertir con confianza"
        benefits={content.beneficios}
      />

      {/* Proceso */}
      <Process
        title="Cómo funciona"
        subtitle="En 4 sencillos pasos estarás listo para invertir"
        steps={content.proceso}
      />

      {/* Testimonios */}
      <Testimonials
        title="Lo que dicen nuestros inversores"
        testimonios={content.testimonios}
      />

      {/* Precios */}
      <Pricing
        title="Planes adaptados a tu inversión"
        subtitle="Elige el nivel de acompañamiento que necesitas"
        planes={content.precios}
      />

      {/* FAQ */}
      <FAQ
        title="Preguntas frecuentes sobre subastas"
        subtitle="Resolvemos tus dudas antes de empezar"
        faqs={content.faq}
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
                Empieza a recibir oportunidades
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-8">
                Cuéntanos qué buscas y te enviaremos las mejores subastas
                adaptadas a tu perfil inversor.
              </p>

              <ul className="space-y-4">
                {[
                  "Sin compromiso, solo información",
                  "Respuesta en menos de 24 horas",
                  "Asesoramiento honesto y personalizado",
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
                origen="landing-subastas"
                title="Solicita información"
                subtitle="Rellena el formulario y te contactamos"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTA
        title="Mientras otros buscan pisos saturados,"
        subtitle="tú puedes acceder a subastas con hasta un 50% de descuento."
        cta="Quiero Empezar"
        ctaHref="#contacto"
        variant="gradient"
      />
    </>
  );
}
