import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)' }}
        />
        <div className="gold-particles">
          <div className="gold-particle" />
          <div className="gold-particle" />
          <div className="gold-particle" />
          <div className="gold-particle" />
          <div className="gold-particle" />
          <div className="gold-particle" />
          <div className="gold-particle" />
          <div className="gold-particle" />
        </div>
        <div className="hero-content">
          <div className="hero-badge">Inversión Inmobiliaria Alternativa</div>
          <h1>
            Inversión Inmobiliaria que <em>Sale de lo Común</em>
          </h1>
          <p className="hero-subtitle">
            Olvídate de pisos de alquiler saturados y rentabilidades del 3%. Te abrimos la puerta a inversiones inmobiliarias diferentes: mayor rentabilidad, menos competencia, más oportunidades.
          </p>
          <div className="flex-center">
            <Link href="/contacto" className="btn btn-gold btn-lg">
              Explorar Oportunidades →
            </Link>
            <Link href="/servicios" className="btn btn-outline-light btn-lg">
              Nuestros Servicios
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">4</div>
              <div className="hero-stat-label">Nichos Especializados</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">12-40%</div>
              <div className="hero-stat-label">ROI Potencial</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">360°</div>
              <div className="hero-stat-label">Acompañamiento</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          <span className="marquee-item"><span className="dot">◆</span> Subastas Judiciales</span>
          <span className="marquee-item"><span className="dot">◆</span> Fincas Rústicas</span>
          <span className="marquee-item"><span className="dot">◆</span> Campings</span>
          <span className="marquee-item"><span className="dot">◆</span> Hoteles Rurales</span>
          <span className="marquee-item"><span className="dot">◆</span> Análisis Profesional</span>
          <span className="marquee-item"><span className="dot">◆</span> Due Diligence</span>
          <span className="marquee-item"><span className="dot">◆</span> Castilla-La Mancha</span>
          <span className="marquee-item"><span className="dot">◆</span> Inversión Alternativa</span>
          <span className="marquee-item"><span className="dot">◆</span> Subastas Judiciales</span>
          <span className="marquee-item"><span className="dot">◆</span> Fincas Rústicas</span>
          <span className="marquee-item"><span className="dot">◆</span> Campings</span>
          <span className="marquee-item"><span className="dot">◆</span> Hoteles Rurales</span>
          <span className="marquee-item"><span className="dot">◆</span> Análisis Profesional</span>
          <span className="marquee-item"><span className="dot">◆</span> Due Diligence</span>
          <span className="marquee-item"><span className="dot">◆</span> Castilla-La Mancha</span>
          <span className="marquee-item"><span className="dot">◆</span> Inversión Alternativa</span>
        </div>
      </div>

      {/* ===== NICHOS ===== */}
      <section className="section section-cream-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Nuestros Nichos</span>
            <h2>Cuatro nichos, un solo objetivo: <em>tu patrimonio crece</em></h2>
            <p>Cada nicho ofrece oportunidades únicas. Nos especializamos en inversiones que el mercado tradicional ignora.</p>
          </div>

          <div className="grid-2">
            <Link href="/subastas-judiciales" style={{ textDecoration: 'none' }}>
              <div className="niche-card">
                <div className="niche-card-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80)' }} />
                <div className="niche-card-content">
                  <h3>⚖️ Subastas Judiciales</h3>
                  <p>Compra inmuebles hasta 50% por debajo del mercado. Análisis de cargas, ocupación y rentabilidad incluido.</p>
                  <span className="niche-card-roi">ROI: 20-40%</span>
                </div>
              </div>
            </Link>

            <Link href="/fincas-rusticas" style={{ textDecoration: 'none' }}>
              <div className="niche-card">
                <div className="niche-card-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80)' }} />
                <div className="niche-card-content">
                  <h3>🌾 Fincas Rústicas</h3>
                  <p>Tierra que genera ingresos: agrícola, forestal, cinegética, fotovoltaica. Ayudas PAC y arrendamiento.</p>
                  <span className="niche-card-roi">ROI: 4-10%</span>
                </div>
              </div>
            </Link>

            <Link href="/campings" style={{ textDecoration: 'none' }}>
              <div className="niche-card">
                <div className="niche-card-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80)' }} />
                <div className="niche-card-content">
                  <h3>🏕️ Campings</h3>
                  <p>El turismo outdoor no para de crecer. Negocios rentables con demanda creciente y múltiples segmentos.</p>
                  <span className="niche-card-roi">ROI: 12-18%</span>
                </div>
              </div>
            </Link>

            <Link href="/hoteles-rurales" style={{ textDecoration: 'none' }}>
              <div className="niche-card">
                <div className="niche-card-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80)' }} />
                <div className="niche-card-content">
                  <h3>🏨 Hoteles Rurales</h3>
                  <p>Experiencias únicas, rentabilidad real. Inversión + estilo de vida para quien busca un cambio.</p>
                  <span className="niche-card-roi">ROI: 10-18%</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS ===== */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Qué Hacemos</span>
            <h2>Un servicio integral para cada tipo de <em>inversión</em></h2>
          </div>

          <div className="grid-4">
            <div className="card card-dark">
              <div className="card-icon">🔍</div>
              <h3>Búsqueda Personalizada</h3>
              <p>Definimos tu perfil de inversor y rastreamos oportunidades que encajan contigo. No pierdes tiempo buscando.</p>
            </div>
            <div className="card card-dark">
              <div className="card-icon">📊</div>
              <h3>Análisis Profesional</h3>
              <p>Cada oportunidad incluye valoración, verificación de cargas o licencias, análisis de rentabilidad y evaluación de riesgos.</p>
            </div>
            <div className="card card-dark">
              <div className="card-icon">📱</div>
              <h3>Alertas en Tiempo Real</h3>
              <p>Te avisamos por email, WhatsApp o Telegram cuando aparece algo que te interesa. Las mejores oportunidades vuelan.</p>
            </div>
            <div className="card card-dark">
              <div className="card-icon">🤝</div>
              <h3>Acompañamiento Completo</h3>
              <p>Desde la primera llamada hasta la firma de escrituras. Negociación, due diligence, notaría, posesión.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <div className="card card-dark" style={{ display: 'inline-block', maxWidth: '400px' }}>
              <div className="card-icon">🛡️</div>
              <h3>Gestión Post-Compra (opcional)</h3>
              <p>¿No quieres gestionar tú? Te conectamos con profesionales de confianza o lo gestionamos nosotros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POR QUÉ NOSOTROS ===== */}
      <section className="section section-cream">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Diferenciadores</span>
            <h2>Especialistas en inversión inmobiliaria <em>alternativa</em></h2>
          </div>

          <div className="diff-list">
            <div className="diff-item">
              <span className="icon">✓</span>
              <div>
                <p><strong>NO somos una inmobiliaria tradicional</strong></p>
                <span className="sub">No vendemos pisos de segunda mano. Nos especializamos en nichos de alta rentabilidad.</span>
              </div>
            </div>
            <div className="diff-item">
              <span className="icon">✓</span>
              <div>
                <p><strong>Conocemos profundamente cada nicho</strong></p>
                <span className="sub">Subastas, rural, turismo… no improvisamos. Años de experiencia real en cada sector.</span>
              </div>
            </div>
            <div className="diff-item">
              <span className="icon">✓</span>
              <div>
                <p><strong>Trabajamos solo con inversores serios</strong></p>
                <span className="sub">No curiosos, no timewasters. Si tienes capital y ganas, somos tu equipo.</span>
              </div>
            </div>
            <div className="diff-item">
              <span className="icon">✓</span>
              <div>
                <p><strong>Cobramos por resultados</strong></p>
                <span className="sub">Si no compras, no pagas. Nuestro incentivo está alineado con el tuyo.</span>
              </div>
            </div>
            <div className="diff-item">
              <span className="icon">✓</span>
              <div>
                <p><strong>Acceso a oportunidades off-market</strong></p>
                <span className="sub">Muchos propietarios nos contactan antes de publicar. Ves lo que otros no ven.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CÓMO FUNCIONA ===== */}
      <section className="section section-dark-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Proceso</span>
            <h2>Empieza en <em>3 simples pasos</em></h2>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3 style={{ color: '#e8e4dc' }}>Conversación Inicial</h3>
              <p>Hablamos 20 minutos. Entendemos qué buscas, cuánto puedes invertir y qué riesgo toleras.</p>
              <span className="step-time">Sin compromiso</span>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3 style={{ color: '#e8e4dc' }}>Alertas Activas</h3>
              <p>Empiezas a recibir oportunidades filtradas que encajan con tu perfil. Análisis completo incluido.</p>
              <span className="step-time">Automático y continuo</span>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3 style={{ color: '#e8e4dc' }}>Primera Inversión</h3>
              <p>Encuentras una oportunidad, la analizamos, negociamos y ¡celebramos tu nueva inversión!</p>
              <span className="step-time">Acompañamiento total</span>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/contacto" className="btn btn-gold btn-lg">
              Agendar Llamada Gratuita →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="cta-banner">
        <div className="cta-banner-inner">
          <h2>Mientras otros compiten por el mismo piso, tú puedes acceder a <em>oportunidades diferentes</em></h2>
          <p>Subastas judiciales, fincas rústicas, campings y hoteles rurales. Mayor rentabilidad, menos competencia.</p>
          <Link href="/contacto" className="btn btn-gold btn-lg">
            Agenda Tu Consulta Gratuita →
          </Link>
          <p className="cta-banner-trust">Sin permanencia · Sin compromiso · Respuesta en 24h</p>
        </div>
      </section>
    </>
  );
}
