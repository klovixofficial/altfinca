import Link from 'next/link';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'Inversión en Hoteles Rurales | Turismo de Experiencia Rentable',
  description: 'Compra tu hotel rural o casa rural con encanto. Análisis de negocio, valoración profesional y acompañamiento integral. Turismo rural en auge. Consulta sin compromiso.',
};

const faqItems = [
  {
    q: '¿Necesito experiencia en hostelería para comprar un hotel rural?',
    a: 'No necesariamente. Muchos hoteles rurales vienen con personal experimentado o puedes contratar un director que gestione el día a día. Hay modelos de inversión pasiva perfectamente viables.',
  },
  {
    q: '¿Cómo se valora un hotel rural?',
    a: 'Consideramos múltiples factores: valor del inmueble, facturación media de los últimos años, estado de las instalaciones, reputación online, potencial de mejora y comparables de la zona. Te damos un informe completo.',
  },
  {
    q: '¿Cuánto tarda en ser rentable un hotel rural?',
    a: 'Si compras uno ya funcionando, desde el día 1. Si necesita reforma o relanzamiento, normalmente entre 12-24 meses para alcanzar la velocidad de crucero. Te damos proyecciones realistas.',
  },
  {
    q: '¿Es compatible con vivir en la ciudad?',
    a: 'Sí, si contratas un encargado o director. Muchos inversores visitan su hotel los fines de semana y lo gestionan a distancia el resto del tiempo. Es un modelo cada vez más habitual.',
  },
];

export default function HotelesPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80)' }}
        />
        <div className="page-hero-content">
          <div className="hero-badge">Hoteles Rurales</div>
          <h1>Invierte en Hoteles Rurales<br /><em>Experiencias Únicas, Rentabilidad Real</em></h1>
          <p>
            El turismo rural y de experiencias crece cada año. Te ayudamos a encontrar hoteles rurales, casas rurales y posadas con encanto que combinen estilo de vida y rentabilidad.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/contacto" className="btn btn-gold btn-lg">Descubre Hoteles en Venta →</Link>
          </div>
        </div>
      </section>

      {/* POR QUÉ HOTELES RURALES */}
      <section className="section section-cream-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">La Oportunidad</span>
            <h2>El nuevo lujo es la <em>desconexión</em></h2>
          </div>
          <div className="grid-2">
            <div className="card card-gold-border">
              <div className="card-icon">🌿</div>
              <h3>Demanda en Máximos Históricos</h3>
              <p>El turismo rural ha batido récords cada año desde 2021. Los viajeros buscan tranquilidad, naturaleza y experiencias auténticas. Y están dispuestos a pagar más por ello.</p>
            </div>
            <div className="card card-gold-border">
              <div className="card-icon">💳</div>
              <h3>Ticket Medio Alto</h3>
              <p>El turista rural gasta más por noche que el turista de sol y playa. Valora la calidad, la gastronomía local, las actividades y la atención personalizada.</p>
            </div>
            <div className="card card-gold-border">
              <div className="card-icon">🏡</div>
              <h3>Activo + Negocio + Estilo de Vida</h3>
              <p>Un hotel rural puede ser tu inversión, tu proyecto empresarial y tu lugar de vida. La combinación perfecta para quien busca un cambio.</p>
            </div>
            <div className="card card-gold-border">
              <div className="card-icon">📈</div>
              <h3>Revalorización del Entorno Rural</h3>
              <p>La España rural se revaloriza. Cada vez más gente quiere vivir fuera de las ciudades, y el patrimonio inmobiliario rural gana valor año tras año.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">El Reto</span>
            <h2>Encontrar el hotel adecuado <em>no es fácil</em></h2>
          </div>
          <div className="pain-list">
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div><p>Encontrar un hotel rural en venta con números reales es difícil</p></div>
            </div>
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div><p>Muchos propietarios inflan las cifras o esconden problemas</p></div>
            </div>
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div><p>Las licencias de actividad turística son complejas de verificar</p></div>
            </div>
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div><p>No sabes si la reputación online es sostenible o inflada</p></div>
            </div>
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div><p>Valorar el inmueble + el negocio + el potencial es complicado</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="section section-cream">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Nuestra Solución</span>
            <h2>Te presentamos solo oportunidades <em>verificadas</em></h2>
          </div>
          <div className="solution-text">
            <p>Analizamos cada hotel rural con criterio de inversor:</p>
            <div className="solution-checks">
              <div className="solution-check"><span className="icon">✓</span><span>Auditoría financiera de los últimos 3-5 años</span></div>
              <div className="solution-check"><span className="icon">✓</span><span>Verificación de licencias turísticas (categoría, plazas, servicios)</span></div>
              <div className="solution-check"><span className="icon">✓</span><span>Análisis de reputación online (Booking, Google, TripAdvisor)</span></div>
              <div className="solution-check"><span className="icon">✓</span><span>Valoración del inmueble (estado, potencial de reforma)</span></div>
              <div className="solution-check"><span className="icon">✓</span><span>Estudio del mercado local (competencia, eventos, estacionalidad)</span></div>
              <div className="solution-check"><span className="icon">✓</span><span>Evaluación del equipo actual (si continúan o no)</span></div>
              <div className="solution-check"><span className="icon">✓</span><span>Cálculo de ROI realista bajo diferentes escenarios</span></div>
            </div>
            <p style={{ marginTop: '2rem', fontWeight: 500, fontSize: '1.1rem' }}>
              Conoces los números reales <strong>antes de tomar ninguna decisión.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* TIPOS */}
      <section className="section section-dark-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Tipologías</span>
            <h2>Tipos de <em>propiedades</em></h2>
          </div>
          <div className="type-cards">
            <div className="type-card">
              <div className="type-card-icon">🏡</div>
              <h3>Casa Rural</h3>
              <p>1-8 habitaciones. Perfecta para empezar o para gestión semi-pasiva con encargado.</p>
              <div className="type-card-stats">
                <div className="type-card-stat"><span className="label">Inversión</span><span className="value">150K - 600K€</span></div>
                <div className="type-card-stat"><span className="label">ROI</span><span className="value">8-14%</span></div>
              </div>
            </div>
            <div className="type-card">
              <div className="type-card-icon">🏨</div>
              <h3>Hotel Rural / Posada</h3>
              <p>10-30 habitaciones. Operativa más compleja pero mayor facturación y escalabilidad.</p>
              <div className="type-card-stats">
                <div className="type-card-stat"><span className="label">Inversión</span><span className="value">500K - 2M€</span></div>
                <div className="type-card-stat"><span className="label">ROI</span><span className="value">10-18%</span></div>
              </div>
            </div>
            <div className="type-card">
              <div className="type-card-icon">🏰</div>
              <h3>Edificio con Potencial</h3>
              <p>Casonas, molinos, conventos reconvertibles. Requiere inversión en reforma pero menor precio de entrada.</p>
              <div className="type-card-stats">
                <div className="type-card-stat"><span className="label">Inversión</span><span className="value">100K - 500K€ + Reforma</span></div>
              </div>
            </div>
            <div className="type-card">
              <div className="type-card-icon">🍷</div>
              <h3>Hotel + Experiencia</h3>
              <p>Hotel con bodega, spa, restaurante gastronómico… Mayor complejidad pero diferenciación máxima.</p>
              <div className="type-card-stats">
                <div className="type-card-stat"><span className="label">Inversión</span><span className="value">700K - 3M€</span></div>
                <div className="type-card-stat"><span className="label">ROI</span><span className="value">12-20%</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Testimonios</span>
            <h2>Quienes ya invirtieron en <em>turismo rural</em></h2>
          </div>
          <div className="testimonials">
            <div className="testimonial testimonial-dark">
              <div className="testimonial-quote">"</div>
              <p>Llevábamos años soñando con tener nuestra casa rural. Nos encontraron una posada en Cantabria ya funcionando: 6 habitaciones, buenas reviews y el dueño anterior nos formó durante un mes.</p>
              <div className="testimonial-author">Elena y David<span className="role">Barcelona → Cantabria · Propietarios desde 2023</span></div>
            </div>
            <div className="testimonial testimonial-dark">
              <div className="testimonial-quote">"</div>
              <p>Buscaba una inversión que me gustara visitar. Compré un pequeño hotel en Gredos. Tengo un encargado que lo gestiona y yo disfruto fines de semana mientras me genera un 11% anual.</p>
              <div className="testimonial-author">Roberto C.<span className="role">Madrid · Inversor en turismo rural</span></div>
            </div>
            <div className="testimonial testimonial-dark">
              <div className="testimonial-quote">"</div>
              <p>El análisis que me hicieron fue brutal. Vi claramente que el hotel que me gustaba tenía potencial pero necesitaba 80.000€ de inversión en habitaciones. Negociamos el precio en base a eso.</p>
              <div className="testimonial-author">Isabel M.<span className="role">Valencia · Propietaria de hotel rural en Teruel</span></div>
            </div>
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
          <h2>El turismo rural no es una moda.<br /><em>Es un cambio de paradigma.</em></h2>
          <Link href="/contacto" className="btn btn-gold btn-lg">Encuentra Tu Hotel Rural →</Link>
          <p className="cta-banner-trust">Consulta confidencial · Sin compromiso · Respuesta en 48h</p>
        </div>
      </section>
    </>
  );
}
