'use client';
import { useEffect } from 'react';

export default function Subastas() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  
  const GOLD = "#c8a94e";
  const DARK = "#060a12";
  const TXT = "#eae8e3";
  const TXT_M = "#9b9da4";

  return (
    <div style={{ background: DARK, minHeight: "100vh", padding: "120px 36px 80px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <a href="/" style={{ color: GOLD, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "40px" }}>
          ← Volver al inicio
        </a>
        <div style={{ width: "40px", height: "2px", background: `linear-gradient(90deg, ${GOLD}, #e8d48b)`, marginBottom: "20px" }} />
        <p style={{ color: GOLD, fontSize: "12px", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "14px" }}>ROI estimado 20-40%</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, color: TXT, lineHeight: 1.1, marginBottom: "32px" }}>
          Subastas <span style={{ fontStyle: "italic", color: GOLD }}>Judiciales</span>
        </h1>
        
        <div style={{ borderRadius: "16px", overflow: "hidden", height: "400px", marginBottom: "48px", border: "1px solid rgba(200,169,78,0.15)" }}>
          <img src="https://images.unsplash.com/photo-1582407947092-40bf940be880?w=1200&q=80" alt="Subastas judiciales" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", color: TXT_M, lineHeight: 1.85 }}>
          <p style={{ marginBottom: "24px" }}>
            Las subastas judiciales representan una de las oportunidades más rentables del mercado inmobiliario español. 
            Inmuebles que salen a subasta por debajo de su valor de mercado, con descuentos que pueden alcanzar el 50%.
          </p>
          <p style={{ marginBottom: "24px" }}>
            Nuestro sistema de análisis con IA rastrea automáticamente el BOE (Boletín Oficial del Estado) cada 6 horas, 
            identificando nuevas subastas en las 5 provincias de Castilla-La Mancha: Toledo, Ciudad Real, Albacete, Cuenca y Guadalajara.
          </p>
          
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 500, color: TXT, margin: "48px 0 20px" }}>
            Qué <span style={{ fontStyle: "italic", color: GOLD }}>analizamos</span>
          </h2>
          <p style={{ marginBottom: "16px" }}>Cada subasta es evaluada automáticamente considerando:</p>
          <p style={{ marginBottom: "8px" }}>• <strong style={{ color: TXT }}>Valor de tasación vs precio de salida</strong> — ratio de descuento real</p>
          <p style={{ marginBottom: "8px" }}>• <strong style={{ color: TXT }}>Cargas y gravámenes</strong> — hipotecas, embargos, servidumbres</p>
          <p style={{ marginBottom: "8px" }}>• <strong style={{ color: TXT }}>Ubicación y mercado</strong> — precio/m² de la zona, demanda, tendencia</p>
          <p style={{ marginBottom: "8px" }}>• <strong style={{ color: TXT }}>Estado del inmueble</strong> — ocupado, vacío, estimación de reforma</p>
          <p style={{ marginBottom: "24px" }}>• <strong style={{ color: TXT }}>Score de inversión</strong> — puntuación 0-100 generada por IA</p>
          
          <p style={{ marginBottom: "24px" }}>Solo te avisamos cuando encontramos una oportunidad con score superior a 60 sobre 100.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 500, color: TXT, margin: "48px 0 20px" }}>
            Nuestro <span style={{ fontStyle: "italic", color: GOLD }}>servicio</span>
          </h2>
          <p style={{ marginBottom: "8px" }}>• Monitorización 24/7 del BOE con alertas instantáneas</p>
          <p style={{ marginBottom: "8px" }}>• Informe detallado de cada oportunidad</p>
          <p style={{ marginBottom: "8px" }}>• Estimación de costes totales (compra + cargas + reforma + impuestos)</p>
          <p style={{ marginBottom: "8px" }}>• Asesoría legal durante todo el proceso de puja</p>
          <p style={{ marginBottom: "24px" }}>• Acompañamiento post-adjudicación</p>
        </div>

        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <a href="/contacto" style={{
            display: "inline-block", padding: "18px 48px", borderRadius: "6px",
            background: `linear-gradient(135deg, ${GOLD}, #e8d48b)`,
            color: DARK, textDecoration: "none", fontSize: "15px",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
            boxShadow: "0 4px 24px rgba(200,169,78,0.3)",
          }}>Consulta Gratuita sobre Subastas</a>
        </div>
      </div>
    </div>
  );
}
