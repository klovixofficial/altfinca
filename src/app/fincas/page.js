'use client';
import { useEffect } from 'react';

export default function Fincas() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const G = "#c8a94e", D = "#060a12", T = "#eae8e3", TM = "#9b9da4";

  return (
    <div style={{ background: D, minHeight: "100vh", padding: "120px 36px 80px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <a href="/" style={{ color: G, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600, marginBottom: "40px", display: "inline-flex", alignItems: "center", gap: "8px" }}>← Volver al inicio</a>
        <div style={{ width: "40px", height: "2px", background: `linear-gradient(90deg, ${G}, #e8d48b)`, marginBottom: "20px" }} />
        <p style={{ color: G, fontSize: "12px", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "14px" }}>ROI estimado 4-10%</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, color: T, lineHeight: 1.1, marginBottom: "32px" }}>
          Fincas <span style={{ fontStyle: "italic", color: G }}>Rústicas</span>
        </h1>
        <div style={{ borderRadius: "16px", overflow: "hidden", height: "400px", marginBottom: "48px", border: "1px solid rgba(200,169,78,0.15)" }}>
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80" alt="Fincas rústicas" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", color: TM, lineHeight: 1.85 }}>
          <p style={{ marginBottom: "24px" }}>La tierra es el activo más tangible y seguro que existe. Las fincas rústicas en Castilla-La Mancha ofrecen oportunidades únicas de inversión con rentabilidad agrícola, ganadera, cinegética o fotovoltaica.</p>
          <p style={{ marginBottom: "24px" }}>Nuestro sistema rastrea Cocampo e Idealista cada 6 horas, analizando automáticamente cada finca nueva con inteligencia artificial para determinar su potencial real de inversión.</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 500, color: T, margin: "48px 0 20px" }}>Tipos de <span style={{ fontStyle: "italic", color: G }}>finca</span></h2>
          <p style={{ marginBottom: "8px" }}>• <strong style={{ color: T }}>Olivar</strong> — Rentabilidad estable con subvenciones PAC</p>
          <p style={{ marginBottom: "8px" }}>• <strong style={{ color: T }}>Viñedo</strong> — Denominaciones de origen con alta demanda</p>
          <p style={{ marginBottom: "8px" }}>• <strong style={{ color: T }}>Cereal</strong> — Extensiones grandes con mecanización completa</p>
          <p style={{ marginBottom: "8px" }}>• <strong style={{ color: T }}>Almendro</strong> — Crecimiento exponencial en los últimos años</p>
          <p style={{ marginBottom: "8px" }}>• <strong style={{ color: T }}>Monte</strong> — Aprovechamiento cinegético y forestal</p>
          <p style={{ marginBottom: "24px" }}>• <strong style={{ color: T }}>Regadío</strong> — Máxima productividad agrícola</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 500, color: T, margin: "48px 0 20px" }}>Qué <span style={{ fontStyle: "italic", color: G }}>analizamos</span></h2>
          <p style={{ marginBottom: "8px" }}>• Precio por hectárea vs media de la zona</p>
          <p style={{ marginBottom: "8px" }}>• Disponibilidad de agua (pozo, río, acequia, regadío)</p>
          <p style={{ marginBottom: "8px" }}>• Edificaciones existentes y su estado</p>
          <p style={{ marginBottom: "8px" }}>• Potencial fotovoltaico y de energías renovables</p>
          <p style={{ marginBottom: "8px" }}>• Potencial turismo rural y agroturismo</p>
          <p style={{ marginBottom: "24px" }}>• Score de inversión 0-100 generado por IA</p>
        </div>
        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <a href="/contacto" style={{ display: "inline-block", padding: "18px 48px", borderRadius: "6px", background: `linear-gradient(135deg, ${G}, #e8d48b)`, color: D, textDecoration: "none", fontSize: "15px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, boxShadow: "0 4px 24px rgba(200,169,78,0.3)" }}>Consulta Gratuita sobre Fincas</a>
        </div>
      </div>
    </div>
  );
}
