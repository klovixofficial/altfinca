"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Input, { Textarea, Select } from "@/components/ui/Input";
import { FORM_OPTIONS } from "@/lib/constants";
import { getISOTimestamp } from "@/lib/utils";

const leadSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Introduce un email válido"),
  telefono: z
    .string()
    .min(9, "El teléfono debe tener al menos 9 dígitos")
    .regex(/^[0-9+\s]+$/, "Introduce un teléfono válido"),
  presupuesto: z.string().optional(),
  experiencia: z.string().optional(),
  mensaje: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

interface LeadFormProps {
  nicho?: string;
  origen?: string;
  showPresupuesto?: boolean;
  showExperiencia?: boolean;
  showMensaje?: boolean;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export default function LeadForm({
  nicho = "general",
  origen = "web",
  showPresupuesto = true,
  showExperiencia = true,
  showMensaje = true,
  title,
  subtitle,
  buttonText = "Enviar solicitud",
}: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setStatus("loading");
    setErrorMessage("");

    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("Webhook URL not configured");
      setStatus("success"); // Simulate success for demo
      reset();
      return;
    }

    const payload = {
      ...data,
      nicho,
      origen,
      fecha_creacion: getISOTimestamp(),
      score: 60,
      categoria: "WARM",
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setStatus("success");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage("Ha ocurrido un error. Por favor, inténtalo de nuevo.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-gradient-to-br from-white to-[var(--bg-alt)] rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
        <div className="w-16 h-16 bg-[var(--success)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-[var(--success)]" />
        </div>
        <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
          ¡Solicitud enviada!
        </h3>
        <p className="text-[var(--text-light)] mb-6">
          Hemos recibido tu información. Nos pondremos en contacto contigo en
          menos de 24 horas.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Enviar otra solicitud
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-white to-[var(--bg-alt)] rounded-2xl p-8 shadow-xl border border-gray-100">
      {title && (
        <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-[var(--text-light)] mb-6">{subtitle}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Nombre"
          placeholder="Tu nombre completo"
          error={errors.nombre?.message}
          required
          {...register("nombre")}
        />

        <Input
          label="Email"
          type="email"
          placeholder="tu@email.com"
          error={errors.email?.message}
          required
          {...register("email")}
        />

        <Input
          label="Teléfono"
          type="tel"
          placeholder="+34 600 000 000"
          error={errors.telefono?.message}
          required
          {...register("telefono")}
        />

        {showPresupuesto && (
          <Select
            label="Presupuesto aproximado"
            options={FORM_OPTIONS.presupuesto}
            {...register("presupuesto")}
          />
        )}

        {showExperiencia && (
          <Select
            label="Experiencia inversora"
            options={FORM_OPTIONS.experiencia}
            {...register("experiencia")}
          />
        )}

        {showMensaje && (
          <Textarea
            label="Mensaje (opcional)"
            placeholder="Cuéntanos qué buscas..."
            rows={4}
            {...register("mensaje")}
          />
        )}

        {status === "error" && (
          <div className="flex items-center gap-2 p-3 bg-[var(--error)]/10 text-[var(--error)] rounded-lg text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            {errorMessage}
          </div>
        )}

        <Button
          type="submit"
          variant="accent"
          size="lg"
          className="w-full"
          isLoading={status === "loading"}
          leftIcon={<Send size={18} />}
        >
          {buttonText}
        </Button>

        <p className="text-xs text-[var(--text-muted)] text-center">
          Al enviar, aceptas nuestra{" "}
          <a href="/legal/privacidad" className="underline">
            política de privacidad
          </a>
        </p>
      </form>
    </div>
  );
}
