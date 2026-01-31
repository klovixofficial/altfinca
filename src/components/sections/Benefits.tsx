"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import Card from "@/components/ui/Card";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsProps {
  title?: string;
  subtitle?: string;
  benefits: Benefit[];
  columns?: 2 | 3 | 4;
}

export default function Benefits({
  title = "Por qué elegirnos",
  subtitle,
  benefits,
  columns = 4,
}: BenefitsProps) {
  const getIcon = (iconName: string) => {
    const icons = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
    const Icon = icons[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="section">
      <div className="container mx-auto px-4">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Benefits Grid */}
        <div className={`grid ${gridCols[columns]} gap-6`}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                variant="bordered"
                hover
                className="h-full text-center lg:text-left"
              >
                <div className="w-14 h-14 bg-[var(--primary)]/10 text-[var(--primary)] rounded-xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
                  {getIcon(benefit.icon)}
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[var(--text-light)]">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
