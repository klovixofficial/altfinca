import Link from 'next/link';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'Inversión en Campings en España | Negocios Turísticos Rentables',
  description: 'Compra campings rentables en España. Análisis de negocio, valoración profesional y acompañamiento en la adquisición. Sector en crecimiento. Consulta gratis.',
};

const faqItems = [
  {
    q: '¿Qué licencias necesita un camping?',
    a: 'Depende de la CCAA: licencia de actividad turística, licencia de apertura municipal, informe medioambiental y, en algunos casos, permisos de costas. Verificamos todo esto antes de presentarte cualquier oportunidad.',
  },
  {
    q: '¿Puedo comprar un camping sin experiencia en turismo?',
    a: 'Sí. Muchos campings vienen con equipo incluido o podemos conectarte con gestores especializados. También hay modelos de inversión pasiva con gestión externalizada.',
  },
  {
    q: '¿Cuánto cuesta mantener un camping?',
    a: 'Los costes fijos (seguros, mantenimiento, personal mínimo) suelen ser un 30-40% de la facturación. En temporada alta los costes variables suben pero también los ingresos. Te damos proyecciones detalladas.',
  },
  {
    q: '¿El glamping es más rentable que un camping tradicional?',
    a: 'Puede serlo. El glamping tiene menor inversión inicial, ticket medio más alto y menor estacionalidad. Pero requiere una propuesta de valor más trabajada y constante renovación de la experiencia.',
  },
];

export default function CampingsPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&q=80)' }}
        />
        <div className="page-hero-content">
          <div className="hero-badge">Campings</div>
          <h1>Invierte en Campings<br /><em>El Sector Turístico que No Para de Crecer</em></h1>
          <p>
            Te ayudamos a encontrar campings rentables en venta, analizamos cada negocio en profundidad y te acompañamos hasta que tengas las llaves. El turismo de naturaleza está en auge. ¿Vas a aprovecharlo?
          </p>
          <div className="page-hero-trust">
            <span>✓ +12 campings intermediados</span>
            <span>✓ Sector con +15% crecimiento anual</span>
            <span>✓ ROI medio 12-18%</span>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/contacto" className="btn btn-gold btn-lg">Ver Campings en Venta →</Link>
          </div>
        </div>
      </section>

      {/* POR QUÉ CAMPINGS */}
      <section className="section section-cream-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">La Oportunidad</span>
            <h2>¿Por qué invertir en campings <em>ahora</em>?</h2>
          </div>
          <div className="grid-2">
            <div className="card card-gold-border">
              <div className="card-icon">📈</div>
              <h3>Sector en Crecimiento</h3>
              <p>El turismo outdoor ha crecido un 47% desde 2020. El camping ya no es solo para veraneantes con tienda: glamping, bungalows y mobile homes atraen a un público premium.</p>
            </div>
            <div className="card card-gold-border">
              <div className="card-icon">💰</div>
              <h3>Alta Rentabilidad</h3>
              <p>Un camping bien gestionado puede generar rentabilidades del 12-18% sobre la inversión. La temporada alta es muy intensiva, pero los costes fijos son controlables.</p>
            </div>
            <div className="card card-gold-border">
              <div className="card-icon">🛡️</div>
              <h3>Activo Tangible + Negocio</h3>
              <p>No compras solo un terreno: compras un negocio funcionando con clientes recurrentes, reputación online y flujo de caja real.</p>
            </div>
            <div className="card card-gold-border">
              <div className="card-icon">🏕️</div>
              <h3>Demanda Diversificada</h3>
              <p>Familias, parejas, grupos de amigos, nómadas digitales, autocaravanistas… El camping actual tiene múltiples segmentos de cliente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">El Reto</span>
            <h2>Pero encontrar el camping adecuado <em>no es fácil…</em></h2>
          </div>
          <div className="pain-list">
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div><p>Los campings rentables no se anuncian públicamente</p><span className="sub">Los buenos negocios se venden discretamente</span></div>
            </div>
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div><p>Valorar un camping es complejo</p><span className="sub">Terreno + construcciones + licencias + clientela + reputación</span></div>
            </div>
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div><p>Las licencias de actividad son un laberinto</p><span className="sub">Permisos municipales, autonómicos, medioambientales…</span></div>
            </div>
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div><p>No sabes si las cuentas que te enseñan son reales</p></div>
            </div>
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div><p>Requiere conocimiento del sector turístico y normativas</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="section section-cream">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Nuestra Solución</span>
            <h2>Te encontramos el camping perfecto<br /><em>y verificamos todo por ti</em></h2>
          </div>
          <div className="solution-text">
            <p>
              Tenemos contacto directo con propietarios de campings en toda España que buscan vender o traspasar su negocio. Muchos no quieren publicarlo: nos confían la venta discreta.
            </p>
            <div className="solution-checks">
              <div className="solution-check"><span className="icon">✓</span><span>Valoración profesional (terreno + instalaciones + fondo de comercio)</span></div>
              <div className="solution-check"><span className="icon">✓</span><span>Auditoría de las cuentas de los últimos 3-5 años</span></div>
              <div className="solution-check"><span className="icon">✓</span><span>Verificación de licencias y permisos en vigor</span></div>
              <div className="solution-check"><span className="icon">✓</span><span>Análisis de reputación online (reviews, posicionamiento)</span></div>
              <div className="solution-check"><span className="icon">✓</span><span>Evaluación del potencial de mejora y crecimiento</span></div>
              <div className="solution-check"><span className="icon">✓</span><span>Comparativa con ventas recientes en la zona</span></div>
            </div>
            <p style={{ marginTop: '2rem', fontWeight: 500, fontSize: '1.1rem' }}>
              Conoces la verdad <strong>antes de invertir.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* TIPOS */}
      <section className="section section-dark-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Tipologías</span>
            <h2>Encuentra el tipo de camping <em>que buscas</em></h2>
          </div>
          <div className="type-cards">
            <div className="type-card">
              <div className="type-card-icon">🏕️</div>
              <h3>Camping Tradicional</h3>
              <p>Parcelas, bungalows y servicios clásicos. Clientela fiel y operativa probada.</p>
              <div className="type-card-stats">
                <div className="type-card-stat"><span className="label">Inversión</span><span className="value">500K - 2M€</span></div>
                <div className="type-card-stat"><span className="label">ROI</span><span className="value">10-15%</span></div>
              </div>
            </div>
            <div className="type-card">
              <div className="type-card-icon">🛖</div>
              <h3>Glamping / Premium</h3>
              <p>Cabañas de diseño, tiendas safari, domos geodésicos. Alto ticket medio, experiencias.</p>
              <div className="type-card-stats">
                <div className="type-card-stat"><span className="label">Inversión</span><span className="value">300K - 1.5M€</span></div>
                <div className="type-card-stat"><span className="label">ROI</span><span className="value">15-25%</span></div>
              </div>
            </div>
            <div className="type-card">
              <div className="type-card-icon">🚐</div>
              <h3>Área de Autocaravanas</h3>
              <p>Menor inversión inicial. Crecimiento del segmento camper imparable.</p>
              <div className="type-card-stats">
                <div className="type-card-stat"><span className="label">Inversión</span><span className="value">100K - 500K€</span></div>
                <div className="type-card-stat"><span className="label">ROI</span><span className="value">12-20%</span></div>
              </div>
            </div>
            <div className="type-card">
              <div className="type-card-icon">🏖️</div>
              <h3>Camping de Costa</h3>
              <p>Alta demanda en verano. Precios premium. Potencial de fidelización altísimo.</p>
              <div className="type-card-stats">
                <div className="type-card-stat"><span className="label">Inversión</span><span className="value">1M - 5M€</span></div>
                <div className="type-card-stat"><span className="label">ROI</span><span className="value">8-14%</span></div>
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
            <h2>Cómo <em>funciona</em></h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Definimos tu perfil</h3>
              <p>Ubicación, inversión, tipo de camping, implicación deseada. Entendemos exactamente qué buscas.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Te presentamos oportunidades</h3>
              <p>Con análisis completo: números reales, licencias verificadas, potencial de crecimiento.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Negociamos y cerramos</h3>
              <p>Hacemos due diligence completa y te acompañamos al notario. Sin sorpresas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASO DE ÉXITO */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Caso Real</span>
            <h2>Camping en <em>Cataluña</em></h2>
          </div>
          <div className="case-study">
            <div className="case-study-header">
              <div className="case-study-meta">📍 <strong>Ubicación:</strong> Costa Brava (nombre confidencial)</div>
              <div className="case-study-meta">🏕️ <strong>Capacidad:</strong> 180 parcelas + 12 bungalows</div>
              <div className="case-study-meta">📅 <strong>Temporada:</strong> Abril - Octubre (7 meses)</div>
            </div>
            <div className="case-study-numbers">
              <div className="case-study-number">
                <div className="value">1.200.000€</div>
                <div className="label">Precio adquisición</div>
              </div>
              <div className="case-study-number">
                <div className="value">420.000€</div>
                <div className="label">Facturación año 1</div>
              </div>
              <div className="case-study-number">
                <div className="value">210.000€</div>
                <div className="label">Beneficio bruto</div>
              </div>
              <div className="case-study-number">
                <div className="value">17,5%</div>
                <div className="label">ROI primer año</div>
              </div>
            </div>
            <div className="case-study-quote">
              El camping funcionaba bien, pero el propietario se jubilaba. Nos lo enseñaron en exclusiva. Cerramos la operación en 3 meses con due diligence completa.
            </div>
            <div className="case-study-author">— Cliente VIP, 2024</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-cream">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Preguntas Frecuentes</span>
            <h2>Resolvemos tus <em>dudas</em></h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-banner">
        <div className="cta-banner-inner">
          <h2>El turismo outdoor es el futuro.<br /><em>¿Quieres ser parte de él?</em></h2>
          <Link href="/contacto" className="btn btn-gold btn-lg">Explora Oportunidades →</Link>
          <p className="cta-banner-trust">Consulta confidencial · Sin compromiso · Respuesta en 48h</p>
        </div>
      </section>
    </>
  );
}
