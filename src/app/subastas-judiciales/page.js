import Link from 'next/link';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'Invierte en Subastas Judiciales | Hasta 50% Bajo Mercado',
  description: 'Te ayudamos a encontrar e invertir en subastas judiciales rentables. Análisis profesional, alertas personalizadas y acompañamiento completo. Consulta gratis.',
};

const faqItems = [
  {
    q: '¿Qué pasa si compro un piso ocupado?',
    a: 'Es una situación común en subastas y siempre la analizamos. En cada informe te indicamos el estado de ocupación y la estrategia recomendada: negociación, cash for keys o procedimiento judicial. En el plan VIP, nos encargamos nosotros de la negociación con el ocupante.',
  },
  {
    q: '¿Cómo funcionan las cargas de la propiedad?',
    a: 'Es crucial distinguir entre cargas anteriores y posteriores a la hipoteca ejecutada. Las anteriores las asumes tú, las posteriores se cancelan. Verificamos esto en cada análisis y te lo explicamos en lenguaje claro.',
  },
  {
    q: '¿Necesito tener todo el dinero disponible?',
    a: 'Para pujar necesitas depositar el 5% como garantía (se recupera si no ganas). Si ganas, tienes 20 días para pagar el resto. Hay bancos que financian subastas, podemos orientarte.',
  },
  {
    q: '¿Cuántas alertas recibiré?',
    a: 'Depende de tus criterios. Normalmente entre 5-20 alertas semanales que cumplen con tu perfil. Calidad sobre cantidad: solo te enviamos oportunidades reales.',
  },
  {
    q: '¿Puedo ver un ejemplo de análisis antes de suscribirme?',
    a: '¡Claro! Contacta con nosotros y te enviaremos un análisis de ejemplo completo de una subasta real para que veas la calidad de nuestro trabajo.',
  },
];

export default function SubastasPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80)' }}
        />
        <div className="page-hero-content">
          <div className="hero-badge">Subastas Judiciales</div>
          <h1>Invierte en Subastas Judiciales<br /><em>Hasta un 50% Por Debajo del Mercado</em></h1>
          <p>
            Te encontramos las mejores oportunidades de subasta, analizamos cada propiedad por ti y te acompañamos en todo el proceso. Sin sorpresas.
          </p>
          <div className="page-hero-trust">
            <span>✓ +127 inversores acompañados</span>
            <span>✓ +3.200 subastas analizadas</span>
            <span>✓ Ahorro medio del 38%</span>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/contacto" className="btn btn-gold btn-lg">Descubre Oportunidades Ahora →</Link>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">El Problema</span>
            <h2>¿Quieres invertir en subastas <em>pero…</em>?</h2>
          </div>

          <div className="pain-list">
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div>
                <p>No tienes tiempo para revisar cientos de subastas cada día</p>
              </div>
            </div>
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div>
                <p>Te da miedo invertir sin conocer todos los riesgos</p>
                <span className="sub">Cargas ocultas, ocupantes, estado real del inmueble…</span>
              </div>
            </div>
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div>
                <p>El proceso te parece complejo y burocrático</p>
                <span className="sub">Pujas, depósitos, escrituras, posesión…</span>
              </div>
            </div>
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div>
                <p>Ya has visto oportunidades pasar porque te enteraste tarde</p>
              </div>
            </div>
            <div className="pain-item">
              <span className="pain-item-icon">❌</span>
              <div>
                <p>No sabes si el precio de salida realmente es una ganga o una trampa</p>
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
            <h2>Te quitamos el trabajo y el riesgo.<br /><em>Tú solo decides si invertir.</em></h2>
          </div>

          <div className="solution-text">
            <p>
              Nuestro equipo analiza a diario todas las subastas publicadas en España. Filtramos, investigamos y te presentamos solo las oportunidades que cumplen con tu perfil de inversión.
            </p>
            <div className="solution-checks">
              <div className="solution-check">
                <span className="icon">✓</span>
                <span>Análisis de rentabilidad (compra + reforma + venta/alquiler)</span>
              </div>
              <div className="solution-check">
                <span className="icon">✓</span>
                <span>Verificación de cargas y situación legal</span>
              </div>
              <div className="solution-check">
                <span className="icon">✓</span>
                <span>Estado de ocupación y estrategia de posesión</span>
              </div>
              <div className="solution-check">
                <span className="icon">✓</span>
                <span>Comparativa de precios de mercado</span>
              </div>
              <div className="solution-check">
                <span className="icon">✓</span>
                <span>Valoración de riesgos y recomendación</span>
              </div>
            </div>
            <p style={{ marginTop: '2rem', fontWeight: 500, fontSize: '1.1rem' }}>
              No inviertes a ciegas. <strong>Inviertes informado.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="section section-dark-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Beneficios</span>
            <h2>¿Por qué <em>elegirnos</em>?</h2>
          </div>

          <div className="grid-4">
            <div className="card card-dark">
              <div className="card-icon">🔍</div>
              <h3>Búsqueda Inteligente</h3>
              <p>Analizamos todas las subastas de España. Tú solo ves las mejores oportunidades filtradas para ti.</p>
            </div>
            <div className="card card-dark">
              <div className="card-icon">⏰</div>
              <h3>Alertas Inmediatas</h3>
              <p>Te avisamos por email, WhatsApp o Telegram en minutos. No dejas pasar ninguna oportunidad.</p>
            </div>
            <div className="card card-dark">
              <div className="card-icon">📊</div>
              <h3>Análisis Profesional</h3>
              <p>Cada oportunidad incluye informe completo con rentabilidad esperada y evaluación de riesgos.</p>
            </div>
            <div className="card card-dark">
              <div className="card-icon">🤝</div>
              <h3>Acompañamiento Completo</h3>
              <p>Estamos contigo desde la primera puja hasta que tienes las llaves en la mano.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="section section-cream-alt">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Proceso</span>
            <h2>Así de <em>fácil</em> funciona</h2>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Cuéntanos qué buscas</h3>
              <p>Tipo de inmueble, zona, presupuesto, rentabilidad objetivo. Solo 5 minutos de tu tiempo.</p>
              <span className="step-time">5 minutos</span>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Recibes alertas personalizadas</h3>
              <p>Con análisis completo de cada oportunidad que encaja con tu perfil. Automático y continuo.</p>
              <span className="step-time">Automático</span>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Decides, pujas y celebras</h3>
              <p>Pujas tú o pujamos por ti. Te acompañamos de principio a fin hasta tu nueva inversión.</p>
              <span className="step-time">Acompañamiento total</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section section-dark">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Testimonios</span>
            <h2>Lo que dicen nuestros <em>inversores</em></h2>
          </div>

          <div className="testimonials">
            <div className="testimonial testimonial-dark">
              <div className="testimonial-quote">"</div>
              <p>Llevaba meses intentando entender las subastas por mi cuenta. Con su ayuda, en 3 meses ya tenía mi primera inversión: un piso en Valencia por 47.000€ que hoy vale 85.000€.</p>
              <div className="testimonial-author">
                Carlos R.
                <span className="role">Valencia · Inversor desde 2023</span>
              </div>
            </div>
            <div className="testimonial testimonial-dark">
              <div className="testimonial-quote">"</div>
              <p>Lo que más valoro es la tranquilidad. Saber que cada propiedad está analizada, que no hay sorpresas. Ya he comprado 3 inmuebles con ellos.</p>
              <div className="testimonial-author">
                Marta S.
                <span className="role">Madrid · Inversora desde 2022</span>
              </div>
            </div>
            <div className="testimonial testimonial-dark">
              <div className="testimonial-quote">"</div>
              <p>Me avisaron de una subasta en mi zona que ni había visto. Compré por 62.000€, reformé por 15.000€ y ahora está alquilado por 650€/mes.</p>
              <div className="testimonial-author">
                Javier L.
                <span className="role">Sevilla · Inversor desde 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section className="section section-cream">
        <div className="section-inner">
          <div className="section-header">
            <span className="label">Planes</span>
            <h2>Elige cómo quieres <em>invertir</em></h2>
          </div>

          <div className="plans">
            <div className="plan">
              <div className="plan-name">Básico</div>
              <div className="plan-price">47€</div>
              <div className="plan-period">al mes</div>
              <ul className="plan-features">
                <li><span className="check">✓</span> Alertas diarias de subastas</li>
                <li><span className="check">✓</span> Filtrado por zona y tipo</li>
                <li><span className="check">✓</span> Resumen semanal</li>
                <li><span className="check">✓</span> Guía de subastas para empezar</li>
              </ul>
              <Link href="/contacto" className="btn btn-dark" style={{ width: '100%', justifyContent: 'center' }}>
                Empezar Ahora
              </Link>
            </div>

            <div className="plan plan-popular">
              <div className="plan-tag">⭐ Más Popular</div>
              <div className="plan-name">Premium</div>
              <div className="plan-price">97€</div>
              <div className="plan-period">al mes</div>
              <ul className="plan-features">
                <li><span className="check">✓</span> Todo lo de Básico</li>
                <li><span className="check">✓</span> Análisis completo de cada propiedad</li>
                <li><span className="check">✓</span> Verificación de cargas incluida</li>
                <li><span className="check">✓</span> Soporte por email prioritario</li>
                <li><span className="check">✓</span> Webinar mensual exclusivo</li>
              </ul>
              <Link href="/contacto" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                Empezar Ahora
              </Link>
            </div>

            <div className="plan">
              <div className="plan-name">VIP</div>
              <div className="plan-price">247€</div>
              <div className="plan-period">al mes</div>
              <ul className="plan-features">
                <li><span className="check">✓</span> Todo lo de Premium</li>
                <li><span className="check">✓</span> Análisis exclusivo antes que nadie</li>
                <li><span className="check">✓</span> Línea directa WhatsApp 24/7</li>
                <li><span className="check">✓</span> Acompañamiento en la puja</li>
                <li><span className="check">✓</span> Asesor dedicado</li>
                <li><span className="check">✓</span> Negociación con ocupantes incluida</li>
              </ul>
              <Link href="/contacto" className="btn btn-dark" style={{ width: '100%', justifyContent: 'center' }}>
                Empezar Ahora
              </Link>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.88rem', color: '#9a9590' }}>
            Sin permanencia · Cancela cuando quieras · Garantía de satisfacción 14 días
          </p>
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
          <h2>Cada día se publican subastas con descuentos del 30-50%.<br /><em>¿Cuántas oportunidades vas a dejar pasar?</em></h2>
          <Link href="/contacto" className="btn btn-gold btn-lg">Empieza a Invertir Hoy →</Link>
          <p className="cta-banner-trust">Sin permanencia · Garantía de satisfacción 14 días · Soporte incluido</p>
        </div>
      </section>
    </>
  );
}
