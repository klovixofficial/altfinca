import './globals.css'

export const metadata = {
  title: 'AltFinca | Inversión Inmobiliaria Alternativa',
  description: 'Inversiones inmobiliarias alternativas: subastas judiciales, fincas rústicas, campings y hoteles rurales. Análisis profesional con IA y acompañamiento integral.',
  keywords: 'inversión inmobiliaria, subastas judiciales, fincas rústicas, campings, hoteles rurales, inversión alternativa, ROI inmobiliario',
  openGraph: {
    title: 'AltFinca | Inversión Inmobiliaria Alternativa',
    description: 'Olvídate de pisos saturados. Accede a subastas, fincas, campings y hoteles con análisis profesional.',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
