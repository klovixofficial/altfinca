"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface CTAProps {
  title: string;
  subtitle?: string;
  cta: string;
  ctaHref?: string;
  variant?: "default" | "gradient" | "dark";
}

export default function CTA({
  title,
  subtitle,
  cta,
  ctaHref = "/contacto",
  variant = "gradient",
}: CTAProps) {
  const variants = {
    default: "bg-[var(--bg-alt)]",
    gradient:
      "bg-gradient-to-br from-[var(--primary)] via-[var(--primary-light)] to-[var(--primary)]",
    dark: "bg-[var(--primary-dark)]",
  };

  const textColor = variant === "default" ? "text-[var(--text)]" : "text-white";
  const subtitleColor =
    variant === "default" ? "text-[var(--text-light)]" : "text-white/80";

  return (
    <section className={`${variants[variant]} py-20`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className={`text-3xl lg:text-4xl font-bold ${textColor} mb-4`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-lg ${subtitleColor} mb-8`}>{subtitle}</p>
          )}
          <Button
            variant={variant === "default" ? "accent" : "secondary"}
            size="lg"
            rightIcon={<ArrowRight size={20} />}
            className={
              variant !== "default"
                ? "bg-white text-[var(--primary)] hover:bg-gray-100"
                : ""
            }
            href={ctaHref}
          >
            {cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
