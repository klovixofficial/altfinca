'use client';

import { useState } from 'react';

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)' }} />
        <div className="page-hero-content">
          <div className="hero-badge">Contacto</div>
          <h1>Cuéntanos <em>qué buscas</em></h1>
          <p>Rellena el formulario y te responderemos en menos de 24 horas. Sin compromiso, sin presión. Solo información de calidad.</p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="section-inner" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre *</label>
                    <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required placeholder="tu@email.com" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono (opcional)</label>
                    <input type="tel" id="telefono" name="telefono" placeholder="612 345 678" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="interes">Me interesa *</label>
                    <select id="interes" name="interes" required>
                      <option value="">Selecciona una opción</option>
                      <option value="subastas">Subastas Judiciales</option>
                      <option value="fincas">Fincas Rústicas</option>
                      <option value="campings">Campings</option>
                      <option value="hoteles">Hoteles Rurales</option>
                      <option value="varios">Varios / No lo tengo claro</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="presupuesto">Presupuesto aproximado</label>
                    <select id="presupuesto" name="presupuesto">
                      <option value="">Prefiero no decirlo ahora</option>
                      <option value="menos-50k">Menos de 50.000€</option>
                      <option value="50-150k">50.000€ - 150.000€</option>
                      <option value="150-500k">150.000€ - 500.000€</option>
                      <option value="500k-1M">500.000€ - 1.000.000€</option>
                      <option value="mas-1M">Más de 1.000.000€</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje">Mensaje (opcional)</label>
                    <textarea id="mensaje" name="mensaje" rows={4} placeholder="Cuéntanos más sobre lo que buscas..." />
                  </div>

                  <div className="form-group">
                    <div className="form-checkbox">
                      <input type="checkbox" id="privacidad" required />
                      <label htmlFor="privacidad">
                        He leído y acepto la <a href="/privacidad" style={{ color: '#c9a227' }}>Política de Privacidad</a> *
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-checkbox">
                      <input type="checkbox" id="newsletter" />
                      <label htmlFor="newsletter">Quiero recibir contenido sobre inversión inmobiliaria</label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-gold btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    Enviar Consulta →
                  </button>

                  <p className="form-note">* Campos obligatorios. Respuesta en menos de 24 horas.</p>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>¡Mensaje enviado!</h3>
                  <p style={{ color: '#4a4540', lineHeight: 1.8 }}>
                    Gracias por tu interés. Te responderemos en menos de 24 horas con información personalizada sobre las oportunidades que mejor encajan con tu perfil.
                  </p>
                </div>
              )}
            </div>

            <div>
              <div style={{ background: '#0a1628', borderRadius: '16px', padding: '2.5rem', color: '#e8e4dc' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '2rem', color: '#fdfcfa' }}>
                  Información de contacto
                </h3>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c9a227', marginBottom: '0.5rem' }}>Email</div>
                  <div style={{ fontSize: '0.95rem', color: '#9a9590' }}>info@altfinca.com</div>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c9a227', marginBottom: '0.5rem' }}>WhatsApp</div>
                  <div style={{ fontSize: '0.95rem', color: '#9a9590' }}>Disponible L-V 9:00-19:00</div>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c9a227', marginBottom: '0.5rem' }}>Ubicación</div>
                  <div style={{ fontSize: '0.95rem', color: '#9a9590' }}>Castilla-La Mancha, España</div>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c9a227', marginBottom: '0.5rem' }}>Horario</div>
                  <div style={{ fontSize: '0.95rem', color: '#9a9590' }}>Lunes a Viernes: 9:00 - 19:00</div>
                </div>
                <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(201,162,39,0.12)' }}>
                  <p style={{ fontSize: '0.85rem', color: '#9a9590', lineHeight: 1.7 }}>
                    ¿Prefieres una llamada directa? Indícalo en el formulario y te llamamos nosotros en el horario que prefieras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
