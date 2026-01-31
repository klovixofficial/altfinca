"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import Card from "@/components/ui/Card";

interface ProblemItem {
  icon: string;
  title: string;
  description: string;
}

interface ProblemProps {
  title?: string;
  subtitle?: string;
  problems: ProblemItem[];
}

export default function Problem({
  title = "¿Te suena esto?",
  subtitle,
  problems,
}: ProblemProps) {
  const getIcon = (iconName: string) => {
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

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="default" className="h-full border border-[var(--error)]/20">
                <div className="w-12 h-12 bg-[var(--error)]/10 text-[var(--error)] rounded-lg flex items-center justify-center mb-4">
                  {getIcon(problem.icon)}
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-[var(--text-light)]">
                  {problem.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
