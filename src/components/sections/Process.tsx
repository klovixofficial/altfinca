"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

interface ProcessProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  variant?: "horizontal" | "vertical";
}

export default function Process({
  title = "Cómo funciona",
  subtitle,
  steps,
  variant = "horizontal",
}: ProcessProps) {
  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    const icons = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
    const Icon = icons[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

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

        {/* Steps */}
        {variant === "horizontal" ? (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" />
                )}

                <div className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  {/* Step number */}
                  <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto relative z-10">
                    {step.icon ? getIcon(step.icon) : step.step}
                  </div>

                  <h3 className="text-lg font-semibold text-[var(--text)] text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-light)] text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                {/* Step indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-lg font-bold shrink-0">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text-light)]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
