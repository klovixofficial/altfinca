import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: 'Artículos sobre inversión inmobiliaria alternativa: subastas judiciales, fincas rústicas, campings, hoteles rurales. Guías, análisis y tendencias del mercado.',
};

const articles = [
  {
    tag: 'Subastas',
    title: 'Guía Completa: Cómo Invertir en Subastas Judiciales en 2025',
    excerpt: 'Todo lo que necesitas saber sobre el proceso de subastas judiciales, desde el BOE hasta la toma de posesión. Guía paso a paso para inversores.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
  },
  {
    tag: 'Fincas',
    title: '¿Cuánto Cuesta una Hectárea en España? Precios por Comunidad Autónoma',
    excerpt: 'Análisis actualizado de precios por hectárea en cada CCAA, distinguiendo por tipo de cultivo, regadío vs secano y tendencias de mercado.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
  },
  {
    tag: 'Campings',
    title: 'El Boom del Glamping: Oportunidad de Inversión en Turismo Outdoor',
    excerpt: 'El glamping crece un 25% anual en España. Analizamos por qué, qué rentabilidades ofrece y cómo entrar en este mercado.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80',
  },
  {
    tag: 'Hoteles Rurales',
    title: 'Comprar un Hotel Rural: 7 Errores que Debes Evitar',
    excerpt: 'Los errores más comunes al comprar un hotel rural y cómo evitarlos. Desde la due diligence hasta la negociación del precio.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
  },
  {
    tag: 'Fiscalidad',
    title: 'Ventajas Fiscales de Invertir en Suelo Rústico en Castilla-La Mancha',
    excerpt: 'ITP reducido, deducciones en IRPF y otros beneficios fiscales que hacen de CLM una región ideal para inversión en fincas rústicas.',
    image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&q=80',
  },
  {
    tag: 'Mercado',
    title: 'Inversión Inmobiliaria Alternativa: ¿Por Qué Salir del Residencial?',
    excerpt: 'El mercado residencial está saturado. Analizamos las alternativas más rentables y por qué cada vez más inversores diversifican fuera de los pisos.',
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=600&q=80',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1920&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-badge">Blog</div>
          <h1>Conocimiento para invertir <em>mejor</em></h1>
          <p>Guías, análisis de mercado y tendencias en inversión inmobiliaria alternativa. Contenido práctico para tomar mejores decisiones.</p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="section-inner">
          <div className="blog-grid">
            {articles.map((article, i) => (
              <div key={i} className="blog-card">
                <div className="blog-card-img" style={{ backgroundImage: `url(${article.image})` }} />
                <div className="blog-card-body">
                  <div className="blog-card-tag">{article.tag}</div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: '#9a9590', fontSize: '0.95rem' }}>
              Más artículos próximamente. ¿Quieres recibir contenido nuevo? Suscríbete a nuestras alertas.
            </p>
            <Link href="/contacto" className="btn btn-dark" style={{ marginTop: '1rem' }}>
              Suscribirme →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
