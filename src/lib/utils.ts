import { type ClassValue, clsx } from "clsx";

// Utility para combinar clases de Tailwind
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Formatear precio en euros
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// Formatear porcentaje
export function formatPercent(value: number): string {
  return `${value > 0 ? "+" : ""}${value}%`;
}

// Generar mensaje de WhatsApp
export function getWhatsAppUrl(phone: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

// Validar email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validar teléfono español
export function isValidSpanishPhone(phone: string): boolean {
  const phoneRegex = /^(\+34|0034|34)?[6789]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

// Scroll suave a elemento
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// Obtener timestamp ISO
export function getISOTimestamp(): string {
  return new Date().toISOString();
}
