import Link from 'next/link';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'Inversión en Fincas Rústicas | Terrenos con Rentabilidad Real',
  description: 'Encuentra fincas rústicas rentables: agrícolas, forestales, cinegéticas. Análisis de inversión, ayudas PAC y acompañamiento completo. Consulta sin compromiso.',
};

const faqItems = [
  {
    q: '¿Cómo funcionan las ayudas de la PAC?',
    a: 'La PAC (Política Agrícola Común) ofrece pagos directos por hectárea a agricultores. Los derechos de pago se pueden comprar, heredar o arrendar. Analizamos qué derechos tiene la finca y qué puedes esperar recibir.',
  },
  {
    q: '¿Puedo construir una casa en suelo rústico?',
    a: 'Depende de la clasificación urbanística y la normativa de cada CCAA. En general, en suelo rústico protegido no se puede edificar libremente. Verificamos esto antes de presentarte cualquier finca.',
  },
  {
    q: '¿Qué precio tiene una hectárea en España?',
    a: 'Varía enormemente: desde 1.000€/ha en zonas de secano marginal hasta 30.000€/ha en regadío de primera. Te damos valoraciones basadas en transacciones reales de la zona.',
  },
  {
    q: '¿Es mejor arrendar o explotar directamente?',
    a: 'Para inversores que no van a dedicarse a la actividad agraria, recomendamos arrendar. Ingresos pasivos sin complicaciones. Te conectamos con arrendatarios fiables.',
  },
];

export default function FincasPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80)' }}
        />
        <div className="page-hero-content">
          <div className="hero-badge">Fincas Rústicas</div>
          <h1>Invierte en Fincas Rústicas<br /><em>Tierra que Genera Ingresos Reales</em></h1>
          <p>
            Encontramos fincas agrícolas, forestales y cinegéticas con rentabilidad probada. Analizamos cada propiedad, verificamos ayudas PAC disponibles y te acompañamos desde la búsqueda hasta la escritura.
          </p>
          <div className="page-hero-trust">
            <span>✓ +180 hectáreas intermediadas</span>
            <span>✓ Rentabilidad media 4,2%</span>
            <span>✓ +35 inversores satisfechos</span>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/contacto" className="btn btn-gold btn-lg">Descubre Fincas Rentables →</Link>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">El Problema</span>
            <h2>Invertir en el campo suena bien, <em>pero…</em></h2>
          </div>
          <div className="pain-list">
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div>
                <p>No sabes cuánto vale realmente una hectárea en cada zona</p>
                <span className="sub">Los precios varían brutalmente de una parcela a otra</span>
              </div>
            </div>
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div><p>Desconoces cómo funcionan las ayudas PAC y quién puede acceder</p></div>
            </div>
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div>
                <p>Te preocupa comprar terreno sin utilidad real</p>
                <span className="sub">No todo el suelo rústico permite lo mismo</span>
              </div>
            </div>
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div>
                <p>No tienes contactos locales para encontrar buenas oportunidades</p>
                <span className="sub">Las mejores fincas no llegan a los portales</span>
              </div>
            </div>
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div>
                <p>La burocracia del mundo rural te parece otro idioma</p>
                <span className="sub">Catastro, concentración parcelaria, derechos de agua…</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="section section-cream">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Nuestra Solución</span>
            <h2>Conectamos tu capital con la tierra <em>que produce</em></h2>
          </div>
          <div className="solution-text">
            <p>
              Llevamos años trabajando con propietarios rurales, cooperativas y ayuntamientos. Tenemos acceso a fincas que no encontrarás en Idealista ni en Milanuncios.
            </p>
            <div className="solution-checks">
              <div className="solution-check"><span className="icon">✓</span><span>Valoración por hectárea según mercado local real</span></div>
              <div className="solution-check"><span className="icon">✓</span><span>Análisis de clasificación urbanística y usos permitidos</span></div>
              <div className="solution-check"><span className="icon">✓</span><span>Cálculo de rentabilidad (arrendamiento, explotación, caza…)</span></div>
              <div className="solution-check"><span className="icon">✓</span><span>Verificación de ayudas PAC y derechos de riego</span></div>
              <div className="solution-check"><span className="icon">✓</span><span>Situación fiscal y sucesoria de la propiedad</span></div>
            </div>
            <p style={{ marginTop: '2rem', fontWeight: 500, fontSize: '1.1rem' }}>
              No compras &quot;un terreno&quot;. <strong>Compras un activo productivo.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="section section-dark-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Ventajas</span>
            <h2>Ventajas de invertir en <em>suelo rústico</em></h2>
          </div>
          <div className="grid-4">
            <div className="card card-dark">
              <div className="card-icon">🌾</div>
              <h3>Ingresos Recurrentes</h3>
              <p>Arrendamiento, ayudas PAC, aprovechamiento cinegético… Ingresos pasivos año tras año.</p>
            </div>
            <div className="card card-dark">
              <div className="card-icon">📈</div>
              <h3>Revalorización Constante</h3>
              <p>El suelo rústico se revaloriza de forma estable año tras año. Un activo tangible que no se devalúa.</p>
            </div>
            <div className="card card-dark">
              <div className="card-icon">🏦</div>
              <h3>Ventajas Fiscales</h3>
              <p>Reducciones en IRPF, ITP reducido en muchas Comunidades Autónomas. Fiscalidad favorable para inversores.</p>
            </div>
            <div className="card card-dark">
              <div className="card-icon">🌿</div>
              <h3>Diversificación</h3>
              <p>Un activo real descorrelacionado de bolsa e inflación. Diversifica tu cartera con hectáreas, no con acciones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIPOS DE FINCAS */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Tipos</span>
            <h2>¿Qué tipo de finca <em>buscas</em>?</h2>
          </div>
          <div className="type-cards">
            <div className="type-card">
              <div className="type-card-icon">🌾</div>
              <h3>Agrícola</h3>
              <p>Cultivos de secano, regadío, olivar, almendros, viñedo… Ingresos estables por arrendamiento y ayudas PAC.</p>
              <div className="type-card-stats">
                <div className="type-card-stat"><span className="label">Rentabilidad</span><span className="value">3-6% anual</span></div>
              </div>
            </div>
            <div className="type-card">
              <div className="type-card-icon">🌲</div>
              <h3>Forestal</h3>
              <p>Masas forestales con aprovechamiento maderero o subvención. Inversión a largo plazo con estabilidad.</p>
              <div className="type-card-stats">
                <div className="type-card-stat"><span className="label">Rentabilidad</span><span className="value">2-4% anual</span></div>
              </div>
            </div>
            <div className="type-card">
              <div className="type-card-icon">🦌</div>
              <h3>Cinegética</h3>
              <p>Cotos de caza menor y mayor. Ingresos por arrendamiento a sociedades de caza. Alta demanda.</p>
              <div className="type-card-stats">
                <div className="type-card-stat"><span className="label">Rentabilidad</span><span className="value">4-8% anual</span></div>
              </div>
            </div>
            <div className="type-card">
              <div className="type-card-icon">🏡</div>
              <h3>Recreativa</h3>
              <p>Fincas con casa rural, ideales para uso personal + alquiler turístico. Doble beneficio: disfrute y renta.</p>
              <div className="type-card-stats">
                <div className="type-card-stat"><span className="label">Rentabilidad</span><span className="value">Variable</span></div>
              </div>
            </div>
            <div className="type-card">
              <div className="type-card-icon">⚡</div>
              <h3>Fotovoltaica</h3>
              <p>Terrenos aptos para arrendamiento a plantas solares. Contratos a 25 años con rentabilidades excepcionales.</p>
              <div className="type-card-stats">
                <div className="type-card-stat"><span className="label">Rentabilidad</span><span className="value">6-10% anual</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section section-cream">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Testimonios</span>
            <h2>Inversores que ya confían en la <em>tierra</em></h2>
          </div>
          <div className="testimonials">
            <div className="testimonial">
              <div className="testimonial-quote">"</div>
              <p>Compré 15 hectáreas de olivar en Jaén por 45.000€. Con el arrendamiento y las ayudas PAC, me genera 2.800€ anuales. Mejor que cualquier depósito bancario.</p>
              <div className="testimonial-author">Fernando M.<span className="role">Madrid · Inversor en fincas agrícolas</span></div>
            </div>
            <div className="testimonial">
              <div className="testimonial-quote">"</div>
              <p>Buscaba una finca con casa para escapar de la ciudad. Me encontraron una en Ávila con 8 hectáreas, casa habitable y pozo. La uso yo y la alquilo como rural cuando no estoy.</p>
              <div className="testimonial-author">Ana P.<span className="role">Barcelona · Propietaria en Ávila</span></div>
            </div>
            <div className="testimonial">
              <div className="testimonial-quote">"</div>
              <p>Me interesaba el tema de las fotovoltaicas pero no sabía por dónde empezar. Me consiguieron un terreno en Badajoz y me conectaron con una empresa que lo ha arrendado a 25 años.</p>
              <div className="testimonial-author">Luis G.<span className="role">Sevilla · Inversor en renovables</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Preguntas Frecuentes</span>
            <h2>Resolvemos tus <em>dudas</em></h2>
          </div>
          <FAQ items={faqItems} dark={true} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-banner">
        <div className="cta-banner-inner">
          <h2>La tierra no se fabrica más.<br /><em>Su valor solo puede subir.</em></h2>
          <Link href="/contacto" className="btn btn-gold btn-lg">Encuentra Tu Finca Ideal →</Link>
          <p className="cta-banner-trust">Consulta gratuita · Sin compromiso · Respuesta en 24h</p>
        </div>
      </section>
    </>
  );
}
