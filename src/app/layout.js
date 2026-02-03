import './globals.css';
import ClientLayout from '@/components/ClientLayout';

export const metadata = {
  title: {
    default: 'AltFinca — Inversión Inmobiliaria Alternativa',
    template: '%s | AltFinca',
  },
  description: 'Inversión inmobiliaria más allá de lo tradicional: subastas judiciales, fincas rústicas, campings y hoteles rurales. Acompañamiento integral en Castilla-La Mancha.',
  keywords: 'inversión inmobiliaria, subastas judiciales, fincas rústicas, campings, hoteles rurales, Castilla-La Mancha',
  openGraph: {
    title: 'AltFinca — Inversión Inmobiliaria Alternativa',
    description: 'Subastas, fincas, campings y hoteles rurales. Análisis profesional y acompañamiento completo.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
