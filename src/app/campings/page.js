'use client';
import { useEffect } from 'react';

export default function Campings() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const G = "#c8a94e", D = "#060a12", T = "#eae8e3", TM = "#9b9da4";

  return (
    <div style={{ background: D, minHeight: "100vh", padding: "120px 36px 80px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <a href="/" style={{ color: G, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600, marginBottom: "40px", display: "inline-flex", alignItems: "center", gap: "8px" }}>← Volver al inicio</a>
        <div style={{ width: "40px", height: "2px", background: `linear-gradient(90deg, ${G}, #e8d48b)`, marginBottom: "20px" }} />
        <p style={{ color: G, fontSize: "12px", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "14px" }}>ROI estimado 12-18%</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, color: T, lineHeight: 1.1, marginBottom: "32px" }}>
          <span style={{ fontStyle: "italic", color: G }}>Campings</span>
        </h1>
        <div style={{ borderRadius: "16px", overflow: "hidden", height: "400px", marginBottom: "48px", border: "1px solid rgba(200,169,78,0.15)" }}>
          <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=80" alt="Campings" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", color: TM, lineHeight: 1.85 }}>
          <p style={{ marginBottom: "24px" }}>El turismo outdoor es uno de los segmentos que más crece en España, con un incremento del 15% anual. Los campings son negocios con alta ocupación estacional y un potencial enorme de transformación a glamping premium.</p>
          <p style={{ marginBottom: "24px" }}>Monitorizamos Idealista y Milanuncios cada 12 horas en busca de campings en venta, desde pequeños terrenos con licencia hasta negocios en funcionamiento con facturación demostrable.</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 500, color: T, margin: "48px 0 20px" }}>La oportunidad del <span style={{ fontStyle: "italic", color: G }}>glamping</span></h2>
          <p style={{ marginBottom: "24px" }}>La transformación de un camping tradicional a un espacio glamping premium puede multiplicar por 3-5x la facturación por parcela. Tiendas safari, cabañas en los árboles, domos transparentes... experiencias que los viajeros pagan gustosamente a precios de hotel.</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 500, color: T, margin: "48px 0 20px" }}>Qué <span style={{ fontStyle: "italic", color: G }}>analizamos</span></h2>
          <p style={{ marginBottom: "8px" }}>• Número de parcelas y bungalows existentes</p>
          <p style={{ marginBottom: "8px" }}>• Facturación real y ocupación por temporada</p>
          <p style={{ marginBottom: "8px" }}>• Licencias y permisos urbanísticos</p>
          <p style={{ marginBottom: "8px" }}>• Potencial de transformación a glamping</p>
          <p style={{ marginBottom: "8px" }}>• Ubicación y atractivos turísticos de la zona</p>
          <p style={{ marginBottom: "24px" }}>• Score de inversión 0-100 generado por IA</p>
        </div>
        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <a href="/contacto" style={{ display: "inline-block", padding: "18px 48px", borderRadius: "6px", background: `linear-gradient(135deg, ${G}, #e8d48b)`, color: D, textDecoration: "none", fontSize: "15px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, boxShadow: "0 4px 24px rgba(200,169,78,0.3)" }}>Consulta Gratuita sobre Campings</a>
        </div>
      </div>
    </div>
  );
}
