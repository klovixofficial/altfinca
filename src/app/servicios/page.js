import Link from 'next/link';

export const metadata = {
  title: 'Servicios | Inversión Inmobiliaria Alternativa',
  description: 'Búsqueda personalizada, análisis profesional, alertas en tiempo real, acompañamiento completo y gestión post-compra. Servicio integral de inversión inmobiliaria.',
};

export default function ServiciosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-badge">Nuestros Servicios</div>
          <h1>Un servicio integral para cada tipo de <em>inversión</em></h1>
          <p>Desde la búsqueda de la oportunidad perfecta hasta la firma de escrituras y más allá. Estamos contigo en cada paso.</p>
        </div>
      </section>

      {/* SERVICIOS DETALLADOS */}
      <section className="section section-cream">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Servicios</span>
            <h2>Todo lo que necesitas para invertir <em>con confianza</em></h2>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="card-icon">🔍</div>
              <h3>Búsqueda Personalizada</h3>
              <p>Definimos tu perfil de inversor y rastreamos oportunidades que encajan contigo en subastas judiciales, fincas rústicas, campings y hoteles rurales. No pierdes tiempo buscando: nosotros lo hacemos por ti.</p>
            </div>
            <div className="card">
              <div className="card-icon">📊</div>
              <h3>Análisis Profesional</h3>
              <p>Cada oportunidad incluye valoración detallada, verificación de cargas o licencias, análisis de rentabilidad bajo diferentes escenarios y evaluación completa de riesgos. Datos reales, no suposiciones.</p>
            </div>
            <div className="card">
              <div className="card-icon">📱</div>
              <h3>Alertas en Tiempo Real</h3>
              <p>Te avisamos por email, WhatsApp o Telegram cuando aparece algo que te interesa. Las mejores oportunidades no esperan: te las enviamos en minutos.</p>
            </div>
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3>Acompañamiento Completo</h3>
              <p>Desde la primera llamada hasta la firma de escrituras. Negociación con el vendedor, coordinación de due diligence, gestión notarial, tramitación de posesión.</p>
            </div>
            <div className="card">
              <div className="card-icon">🛡️</div>
              <h3>Gestión Post-Compra</h3>
              <p>¿No quieres gestionar tú el activo? Te conectamos con profesionales de confianza para alquiler, reforma, gestión turística o explotación agraria. O lo gestionamos nosotros.</p>
            </div>
            <div className="card">
              <div className="card-icon">📋</div>
              <h3>Informes y Valoraciones</h3>
              <p>Informes de mercado por zona y tipología, valoraciones profesionales de inmuebles, due diligence completa para decisiones informadas. Todo documentado y transparente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ NOSOTROS */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Diferenciadores</span>
            <h2>Por qué somos <em>diferentes</em></h2>
          </div>
          <div className="diff-list">
            <div className="diff-item" style={{ background: 'rgba(201,162,39,0.08)', borderColor: 'rgba(201,162,39,0.2)' }}>
              <span className="icon">✓</span>
              <div>
                <p style={{ color: '#e8e4dc' }}><strong>NO somos una inmobiliaria tradicional</strong></p>
                <span className="sub">No vendemos pisos de segunda mano. Nos especializamos en nichos de alta rentabilidad que el mercado ignora.</span>
              </div>
            </div>
            <div className="diff-item" style={{ background: 'rgba(201,162,39,0.08)', borderColor: 'rgba(201,162,39,0.2)' }}>
              <span className="icon">✓</span>
              <div>
                <p style={{ color: '#e8e4dc' }}><strong>Conocemos profundamente cada nicho</strong></p>
                <span className="sub">Subastas, rural, turismo… no improvisamos. Años de experiencia real en cada sector.</span>
              </div>
            </div>
            <div className="diff-item" style={{ background: 'rgba(201,162,39,0.08)', borderColor: 'rgba(201,162,39,0.2)' }}>
              <span className="icon">✓</span>
              <div>
                <p style={{ color: '#e8e4dc' }}><strong>Cobramos por resultados</strong></p>
                <span className="sub">Si no compras, no pagas. Nuestro incentivo está alineado con tu éxito.</span>
              </div>
            </div>
            <div className="diff-item" style={{ background: 'rgba(201,162,39,0.08)', borderColor: 'rgba(201,162,39,0.2)' }}>
              <span className="icon">✓</span>
              <div>
                <p style={{ color: '#e8e4dc' }}><strong>Acceso a oportunidades off-market</strong></p>
                <span className="sub">Propietarios nos contactan antes de publicar. Ves lo que otros no ven.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="section section-cream-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Proceso</span>
            <h2>Empieza en <em>3 simples pasos</em></h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Conversación Inicial</h3>
              <p>Hablamos 20 minutos. Entendemos qué buscas, cuánto puedes invertir y qué riesgo toleras.</p>
              <span className="step-time">Sin compromiso · 20 min</span>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Alertas Activas</h3>
              <p>Empiezas a recibir oportunidades filtradas que encajan con tu perfil. Con análisis completo.</p>
              <span className="step-time">Automático y continuo</span>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Tu Primera Inversión</h3>
              <p>Encuentras la oportunidad, la analizamos en detalle, negociamos y cerramos. ¡Celebramos!</p>
              <span className="step-time">Acompañamiento total</span>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/contacto" className="btn btn-gold btn-lg">Agendar Llamada Gratuita →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-banner-inner">
          <h2>Mientras otros compiten por el mismo piso, tú puedes acceder a <em>oportunidades diferentes</em></h2>
          <Link href="/contacto" className="btn btn-gold btn-lg">Agenda Tu Consulta Gratuita →</Link>
          <p className="cta-banner-trust">Sin permanencia · Sin compromiso · Respuesta en 24h</p>
        </div>
      </section>
    </>
  );
}
