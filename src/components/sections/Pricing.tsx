"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface PricingPlan {
  nombre: string;
  precio: number;
  periodo: string;
  descripcion: string;
  destacado: boolean;
  features: string[];
}

interface PricingProps {
  title?: string;
  subtitle?: string;
  planes: PricingPlan[];
}

export default function Pricing({
  title = "Planes y precios",
  subtitle,
  planes,
}: PricingProps) {
  return (
    <section className="section bg-[var(--bg-alt)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {planes.map((plan, index) => (
            <motion.div
              key={plan.nombre}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative bg-white rounded-2xl p-8 shadow-sm transition-all duration-300",
                plan.destacado
                  ? "ring-2 ring-[var(--accent)] scale-105 shadow-xl"
                  : "hover:shadow-md"
              )}
            >
              {/* Popular badge */}
              {plan.destacado && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[var(--accent)] text-white text-sm font-medium px-4 py-1 rounded-full">
                    Más popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                  {plan.nombre}
                </h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">
                  {plan.descripcion}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-[var(--text)]">
                    {plan.precio}€
                  </span>
                  <span className="text-[var(--text-muted)]">/{plan.periodo}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--success)] shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--text-light)]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.destacado ? "accent" : "outline"}
                size="md"
                className="w-full"
                href="/contacto"
              >
                Empezar ahora
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-[var(--text-muted)] mt-8">
          Todos los planes incluyen 14 días de prueba. Cancela cuando quieras.
        </p>
      </div>
    </section>
  );
}
