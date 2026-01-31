"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface SolutionProps {
  title: string;
  subtitle?: string;
  checks: string[];
}

export default function Solution({ title, subtitle, checks }: SolutionProps) {
  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] rounded-3xl p-8 lg:p-12 text-white"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">{title}</h2>
            {subtitle && (
              <p className="text-white mb-8 text-lg">{subtitle}</p>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              {checks.map((check, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-white">{check}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
