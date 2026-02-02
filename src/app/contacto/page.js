'use client';
import { useState, useEffect } from 'react';

export default function Contacto() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const G = "#c8a94e", GL = "#e8d48b", D = "#060a12", D2 = "#0a0f1a", D3 = "#10162a", T = "#eae8e3", TM = "#9b9da4", TD = "#5a5d66";
  const [sent, setSent] = useState(false);

  return (
    <div style={{ background: D, minHeight: "100vh", padding: "120px 36px 80px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <a href="/" style={{ color: G, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600, marginBottom: "40px", display: "inline-flex", alignItems: "center", gap: "8px" }}>← Volver al inicio</a>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", marginTop: "40px" }}>
          <div>
            <div style={{ width: "40px", height: "2px", background: `linear-gradient(90deg, ${G}, ${GL})`, marginBottom: "20px" }} />
            <p style={{ color: G, fontSize: "12px", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "14px" }}>Contacto</p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: T, lineHeight: 1.15, marginBottom: "24px" }}>
              Hablemos de tu <span style={{ fontStyle: "italic", color: G }}>próxima inversión</span>
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: TM, lineHeight: 1.75, marginBottom: "48px" }}>
              20 minutos de conversación sin compromiso para entender qué buscas y cómo podemos ayudarte. Si hay oportunidades que encajan contigo, te las presentamos. Si no, te lo decimos con total honestidad.
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { icon: "📧", label: "Email", value: "info@altfinca.es" },
                { icon: "📱", label: "WhatsApp", value: "+34 600 000 000" },
                { icon: "📍", label: "Ubicación", value: "Castilla-La Mancha, España" },
                { icon: "⏰", label: "Respuesta", value: "En menos de 24 horas" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ fontSize: "20px" }}>{c.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: TD, letterSpacing: "1px", textTransform: "uppercase" }}>{c.label}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: T }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "40px", borderRadius: "20px", background: `linear-gradient(135deg, ${D3}, ${D2})`, border: "1px solid rgba(200,169,78,0.1)" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "48px", marginBottom: "20px" }}>✓</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", color: T, marginBottom: "12px" }}>Mensaje enviado</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: TM }}>Te responderemos en menos de 24 horas.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", color: T, marginBottom: "4px" }}>Consulta gratuita</h3>
                {[
                  { label: "Nombre", type: "text", placeholder: "Tu nombre completo" },
                  { label: "Email", type: "email", placeholder: "tu@email.com" },
                  { label: "Teléfono", type: "tel", placeholder: "+34 600 000 000" },
                ].map((f, i) => (
                  <div key={i}>
                    <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: TM, display: "block", marginBottom: "6px", letterSpacing: "0.5px" }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} style={{
                      width: "100%", padding: "14px 18px", borderRadius: "8px",
                      background: "rgba(6,10,18,0.6)", border: "1px solid rgba(200,169,78,0.12)",
                      color: T, fontFamily: "'DM Sans', sans-serif", fontSize: "15px",
                      outline: "none", transition: "border 0.3s",
                    }}
                    onFocus={e => e.target.style.borderColor = "rgba(200,169,78,0.4)"}
                    onBlur={e => e.target.style.borderColor = "rgba(200,169,78,0.12)"}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: TM, display: "block", marginBottom: "6px", letterSpacing: "0.5px" }}>¿Qué te interesa?</label>
                  <select style={{
                    width: "100%", padding: "14px 18px", borderRadius: "8px",
                    background: "rgba(6,10,18,0.6)", border: "1px solid rgba(200,169,78,0.12)",
                    color: TM, fontFamily: "'DM Sans', sans-serif", fontSize: "15px", outline: "none",
                  }}>
                    <option>Subastas judiciales</option>
                    <option>Fincas rústicas</option>
                    <option>Campings</option>
                    <option>Hoteles rurales</option>
                    <option>Varios nichos</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: TM, display: "block", marginBottom: "6px", letterSpacing: "0.5px" }}>Mensaje (opcional)</label>
                  <textarea rows={3} placeholder="Cuéntanos brevemente qué buscas..." style={{
                    width: "100%", padding: "14px 18px", borderRadius: "8px",
                    background: "rgba(6,10,18,0.6)", border: "1px solid rgba(200,169,78,0.12)",
                    color: T, fontFamily: "'DM Sans', sans-serif", fontSize: "15px",
                    outline: "none", resize: "vertical",
                  }}
                  onFocus={e => e.target.style.borderColor = "rgba(200,169,78,0.4)"}
                  onBlur={e => e.target.style.borderColor = "rgba(200,169,78,0.12)"}
                  />
                </div>
                <button onClick={() => setSent(true)} style={{
                  padding: "16px", borderRadius: "8px", border: "none",
                  background: `linear-gradient(135deg, ${G}, ${GL})`,
                  color: D, fontFamily: "'DM Sans', sans-serif", fontSize: "15px",
                  fontWeight: 700, cursor: "pointer", transition: "all 0.3s",
                  boxShadow: "0 4px 20px rgba(200,169,78,0.25)",
                }}
                onMouseEnter={e => e.target.style.boxShadow = "0 8px 32px rgba(200,169,78,0.4)"}
                onMouseLeave={e => e.target.style.boxShadow = "0 4px 20px rgba(200,169,78,0.25)"}
                >Enviar Consulta</button>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: TD, textAlign: "center" }}>Sin compromiso · Respuesta en menos de 24h</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
