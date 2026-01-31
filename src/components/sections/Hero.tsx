"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

interface TrustItem {
  value: string;
  label: string;
}

interface HeroProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  cta: string;
  ctaHref?: string;
  trust?: TrustItem[];
  children?: React.ReactNode;
}

export default function Hero({
  badge,
  title,
  titleAccent,
  subtitle,
  cta,
  ctaHref = "/contacto",
  trust,
  children,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--bg)] via-white to-[var(--bg-alt)] pt-32 lg:pt-44 pb-20 lg:pb-28">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--accent)]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--primary)]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {badge && (
              <Badge variant="accent" className="mb-6">
                {badge}
              </Badge>
            )}

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--text)] mb-6 leading-tight">
              {title}
              {titleAccent && (
                <>
                  <br />
                  <span className="text-[var(--accent)]">{titleAccent}</span>
                </>
              )}
            </h1>

            <p className="text-lg lg:text-xl text-[var(--text-light)] mb-8 max-w-xl">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="accent"
                size="lg"
                rightIcon={<ArrowRight size={20} />}
                href={ctaHref}
              >
                {cta}
              </Button>
            </div>

            {trust && trust.length > 0 && (
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-200">
                {trust.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[var(--success)]" />
                    <span className="text-sm text-[var(--text-light)]">
                      <span className="font-semibold text-[var(--text)]">
                        {item.value}
                      </span>{" "}
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Visual/Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
