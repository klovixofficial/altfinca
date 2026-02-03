import Link from 'next/link';

export const metadata = {
  title: 'Sobre Nosotros',
  description: 'Conoce al equipo detrás de AltFinca. Especialistas en inversión inmobiliaria alternativa: subastas judiciales, fincas rústicas, campings y hoteles rurales.',
};

export default function SobreNosotrosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-badge">Sobre Nosotros</div>
          <h1>Especialistas en inversión inmobiliaria <em>alternativa</em></h1>
          <p>No somos una inmobiliaria más. Somos inversores que ayudan a otros inversores a encontrar oportunidades que el mercado tradicional ignora.</p>
        </div>
      </section>

      {/* NUESTRA HISTORIA */}
      <section className="section section-cream">
        <div className="section-inner">
          <div className="about-intro">
            <div>
              <span className="label" style={{ color: '#c9a227', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Nuestra Historia</span>
              <h2 style={{ fontSize: '2rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>De inversores a <em>asesores</em></h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#4a4540', marginBottom: '1rem' }}>
                AltFinca nació de la frustración. Tras años invirtiendo por nuestra cuenta en subastas judiciales, fincas rústicas y proyectos turísticos, nos dimos cuenta de que la información de calidad era escasa, los intermediarios no entendían estos nichos y las mejores oportunidades se perdían por falta de agilidad.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#4a4540', marginBottom: '1rem' }}>
                Decidimos crear el servicio que nos hubiera gustado tener: un equipo especializado que analiza, filtra y acompaña en cada inversión. Con datos reales, sin humo, y con la experiencia de haberlo hecho nosotros primero.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#4a4540' }}>
                Hoy operamos desde Castilla-La Mancha, una de las regiones con más potencial inmobiliario alternativo de España, y servimos a inversores de todo el país.
              </p>
            </div>
            <div className="about-intro-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80)' }} />
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Nuestros Valores</span>
            <h2>Lo que nos <em>define</em></h2>
          </div>
          <div className="about-values">
            <div className="about-value">
              <div className="about-value-icon">🎯</div>
              <h3 style={{ color: '#e8e4dc' }}>Transparencia Total</h3>
              <p>Cada informe incluye los datos buenos y los malos. Si una inversión no nos convence, te lo decimos. Nuestro negocio se basa en la confianza a largo plazo.</p>
            </div>
            <div className="about-value">
              <div className="about-value-icon">📊</div>
              <h3 style={{ color: '#e8e4dc' }}>Datos, No Opiniones</h3>
              <p>Nuestros análisis se basan en datos de mercado reales, transacciones comparables y verificación documental. No vendemos sueños, vendemos información.</p>
            </div>
            <div className="about-value">
              <div className="about-value-icon">🤝</div>
              <h3 style={{ color: '#e8e4dc' }}>Alineamiento de Intereses</h3>
              <p>Cobramos por resultados. Si no compras, no pagas. Nuestro incentivo está alineado con encontrarte la mejor inversión posible.</p>
            </div>
            <div className="about-value">
              <div className="about-value-icon">🌍</div>
              <h3 style={{ color: '#e8e4dc' }}>Impacto Local</h3>
              <p>Creemos en el potencial del mundo rural. Cada inversión que facilitamos contribuye a revitalizar pueblos, crear empleo y preservar patrimonio.</p>
            </div>
            <div className="about-value">
              <div className="about-value-icon">⚡</div>
              <h3 style={{ color: '#e8e4dc' }}>Agilidad</h3>
              <p>Las mejores oportunidades no esperan. Nuestros sistemas de monitorización y alertas garantizan que no te pierdas nada relevante.</p>
            </div>
            <div className="about-value">
              <div className="about-value-icon">🛡️</div>
              <h3 style={{ color: '#e8e4dc' }}>Seguridad Jurídica</h3>
              <p>Trabajamos con abogados, notarios y peritos especializados. Cada operación está cubierta documentalmente de principio a fin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="section section-cream-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">En Cifras</span>
            <h2>Resultados que <em>hablan</em></h2>
          </div>
          <div className="grid-4" style={{ textAlign: 'center' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 600, color: '#c9a227' }}>+3.200</div>
              <div style={{ fontSize: '0.88rem', color: '#9a9590', marginTop: '0.25rem' }}>Subastas analizadas</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 600, color: '#c9a227' }}>+180</div>
              <div style={{ fontSize: '0.88rem', color: '#9a9590', marginTop: '0.25rem' }}>Hectáreas intermediadas</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 600, color: '#c9a227' }}>38%</div>
              <div style={{ fontSize: '0.88rem', color: '#9a9590', marginTop: '0.25rem' }}>Ahorro medio en subastas</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 600, color: '#c9a227' }}>+160</div>
              <div style={{ fontSize: '0.88rem', color: '#9a9590', marginTop: '0.25rem' }}>Inversores acompañados</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-banner-inner">
          <h2>¿Listo para invertir <em>diferente</em>?</h2>
          <p>Hablemos 20 minutos. Sin compromiso. Te contamos cómo podemos ayudarte.</p>
          <Link href="/contacto" className="btn btn-gold btn-lg">Agenda Tu Consulta →</Link>
        </div>
      </section>
    </>
  );
}
