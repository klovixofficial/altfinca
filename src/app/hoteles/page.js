'use client';
import { useEffect } from 'react';

export default function Hoteles() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const G = "#c8a94e", D = "#060a12", T = "#eae8e3", TM = "#9b9da4";

  return (
    <div style={{ background: D, minHeight: "100vh", padding: "120px 36px 80px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <a href="/" style={{ color: G, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600, marginBottom: "40px", display: "inline-flex", alignItems: "center", gap: "8px" }}>← Volver al inicio</a>
        <div style={{ width: "40px", height: "2px", background: `linear-gradient(90deg, ${G}, #e8d48b)`, marginBottom: "20px" }} />
        <p style={{ color: G, fontSize: "12px", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "14px" }}>ROI estimado 10-18%</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, color: T, lineHeight: 1.1, marginBottom: "32px" }}>
          Hoteles <span style={{ fontStyle: "italic", color: G }}>Rurales</span>
        </h1>
        <div style={{ borderRadius: "16px", overflow: "hidden", height: "400px", marginBottom: "48px", border: "1px solid rgba(200,169,78,0.15)" }}>
          <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&q=80" alt="Hoteles rurales" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", color: TM, lineHeight: 1.85 }}>
          <p style={{ marginBottom: "24px" }}>El turismo rural español está en máximos históricos. La demanda de experiencias auténticas y alojamientos con carácter no para de crecer, y las barreras de entrada son más bajas de lo que muchos inversores creen.</p>
          <p style={{ marginBottom: "24px" }}>Casas de pueblo rehabilitadas, cortijos, masías, casonas... inmuebles con encanto que se convierten en negocios rentables con la inversión y gestión adecuadas.</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 500, color: T, margin: "48px 0 20px" }}>Modelos de <span style={{ fontStyle: "italic", color: G }}>inversión</span></h2>
          <p style={{ marginBottom: "8px" }}>• <strong style={{ color: T }}>Compra y gestión propia</strong> — Máximo control y rentabilidad</p>
          <p style={{ marginBottom: "8px" }}>• <strong style={{ color: T }}>Compra y gestión delegada</strong> — Inversión pasiva con rentas mensuales</p>
          <p style={{ marginBottom: "8px" }}>• <strong style={{ color: T }}>Rehabilitación y venta</strong> — Plus-valía en 12-24 meses</p>
          <p style={{ marginBottom: "24px" }}>• <strong style={{ color: T }}>Coinversión</strong> — Participación en proyectos más grandes</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 500, color: T, margin: "48px 0 20px" }}>Qué <span style={{ fontStyle: "italic", color: G }}>analizamos</span></h2>
          <p style={{ marginBottom: "8px" }}>• Ubicación y atractivos turísticos de la zona</p>
          <p style={{ marginBottom: "8px" }}>• Estado del inmueble y coste de rehabilitación</p>
          <p style={{ marginBottom: "8px" }}>• Licencias turísticas disponibles o en trámite</p>
          <p style={{ marginBottom: "8px" }}>• Competencia y precios medios por noche</p>
          <p style={{ marginBottom: "8px" }}>• Proyección de ocupación y facturación</p>
          <p style={{ marginBottom: "24px" }}>• Score de inversión 0-100 generado por IA</p>
        </div>
        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <a href="/contacto" style={{ display: "inline-block", padding: "18px 48px", borderRadius: "6px", background: `linear-gradient(135deg, ${G}, #e8d48b)`, color: D, textDecoration: "none", fontSize: "15px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, boxShadow: "0 4px 24px rgba(200,169,78,0.3)" }}>Consulta Gratuita sobre Hoteles</a>
        </div>
      </div>
    </div>
  );
}
