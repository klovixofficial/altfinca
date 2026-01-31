"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Card from "@/components/ui/Card";

interface Testimonial {
  nombre: string;
  ubicacion: string;
  texto: string;
  resultado: string;
  avatar?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonios: Testimonial[];
}

export default function Testimonials({
  title = "Lo que dicen nuestros inversores",
  subtitle,
  testimonios,
}: TestimonialsProps) {
  return (
    <section className="section">
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="bordered" className="h-full flex flex-col">
                <Quote className="w-10 h-10 text-[var(--accent)]/30 mb-4" />

                <p className="text-[var(--text-light)] mb-6 flex-1 italic">
                  &ldquo;{testimonial.texto}&rdquo;
                </p>

                {/* Result badge */}
                <div className="bg-[var(--success)]/10 text-[var(--success)] text-sm font-medium px-4 py-2 rounded-lg mb-6 inline-block">
                  {testimonial.resultado}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-semibold">
                    {testimonial.avatar || testimonial.nombre.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text)]">
                      {testimonial.nombre}
                    </p>
                    <p className="text-sm text-[var(--text-muted)]">
                      {testimonial.ubicacion}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
