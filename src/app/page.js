'use client';
import { useState, useEffect, useRef } from "react";

const GOLD = "#c8a94e";
const GOLD_L = "#e8d48b";
const DARK = "#060a12";
const DARK2 = "#0a0f1a";
const DARK3 = "#10162a";
const TXT = "#eae8e3";
const TXT_M = "#9b9da4";
const TXT_D = "#5a5d66";

const IMG = {
  hero: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
  subastas: "https://images.unsplash.com/photo-1582407947092-40bf940be880?w=800&q=80",
  fincas: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
  campings: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
  hoteles: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
  about1: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  about2: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  cta: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80",
};

function useInView(t = 0.12) {
  const r = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = r.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.unobserve(el); } }, { threshold: t });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return [r, v];
}

function FadeIn({ children, delay = 0, dir = "up", style: xs = {} }) {
  const [r, v] = useInView();
  const t = { up: "translateY(50px)", down: "translateY(-50px)", left: "translateX(60px)", right: "translateX(-60px)", none: "none" };
  return (
    <div ref={r} style={{ opacity: v ? 1 : 0, transform: v ? "none" : t[dir], transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`, ...xs }}>{children}</div>
  );
}

function Marquee({ items, speed = 30 }) {
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", padding: "18px 0" }}>
      <div style={{ display: "inline-block", animation: `mq ${speed}s linear infinite` }}>
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginRight: "48px", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: TXT_D, letterSpacing: "1.5px", textTransform: "uppercase" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: GOLD, display: "inline-block" }} />
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes mq { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }`}</style>
    </div>
  );
}

function GoldLine({ w = "60px", center = false }) {
  return <div style={{ width: w, height: "2px", background: `linear-gradient(90deg, ${GOLD}, ${GOLD_L}, ${GOLD})`, margin: center ? "0 auto" : "0" }} />;
}

function Nav() {
  const [s, setS] = useState(false);
  useEffect(() => { const fn = () => setS(window.scrollY > 60); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: s ? "12px 0" : "20px 0", background: s ? "rgba(6,10,18,0.95)" : "transparent", backdropFilter: s ? "blur(24px)" : "none", borderBottom: s ? "1px solid rgba(200,169,78,0.1)" : "1px solid transparent", transition: "all 0.4s" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 36px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "38px", height: "38px", borderRadius: "8px", background: `linear-gradient(135deg, ${GOLD}, ${GOLD_L})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "20px", color: DARK }}>A</div>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 600, color: TXT }}>Alt<span style={{ color: GOLD }}>Finca</span></span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {["Subastas", "Fincas", "Campings", "Hoteles"].map(i => (
            <a key={i} href={`#${i.toLowerCase()}`} style={{ color: TXT_M, textDecoration: "none", fontSize: "13px", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: "1.2px", textTransform: "uppercase", transition: "color 0.3s" }}
              onMouseEnter={e => e.target.style.color = GOLD} onMouseLeave={e => e.target.style.color = TXT_M}>{i}</a>
          ))}
          <a href="#contacto" style={{ padding: "11px 26px", borderRadius: "6px", background: `linear-gradient(135deg, ${GOLD}, ${GOLD_L})`, color: DARK, textDecoration: "none", fontSize: "12px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", transition: "all 0.3s" }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = `0 8px 28px rgba(200,169,78,0.35)`; }}
            onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "none"; }}>Consulta Gratuita</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [off, setOff] = useState(0);
  useEffect(() => { const fn = () => setOff(window.scrollY * 0.35); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  return (
    <section style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", paddingTop: "100px" }}>
      <div style={{ position: "absolute", inset: "-20% 0", backgroundImage: `url(${IMG.hero})`, backgroundSize: "cover", backgroundPosition: "center", transform: `translateY(${off}px) scale(1.1)`, filter: "brightness(0.2) saturate(0.6)" }} />
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 20% 80%, rgba(200,169,78,0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(10,20,60,0.5) 0%, transparent 50%), linear-gradient(180deg, rgba(6,10,18,0.2) 0%, rgba(6,10,18,0.75) 100%)` }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.35, backgroundImage: `radial-gradient(circle at 25% 25%, rgba(200,169,78,0.12) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(200,169,78,0.08) 1px, transparent 1px)`, backgroundSize: "100px 100px, 80px 80px", animation: "fl 25s ease-in-out infinite" }} />
      <style>{`@keyframes fl { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-15px,-8px); } } @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.3} }`}</style>

      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 2, width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <FadeIn delay={0.1}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 18px", borderRadius: "100px", border: "1px solid rgba(200,169,78,0.25)", background: "rgba(200,169,78,0.06)", marginBottom: "28px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: GOLD, boxShadow: `0 0 12px ${GOLD}`, animation: "pulse 2s infinite" }} />
                <span style={{ color: GOLD, fontSize: "12px", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>Inversiones alternativas</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 400, color: TXT, lineHeight: 1.06, letterSpacing: "-1.5px", marginBottom: "24px" }}>
                Inversión<br />inmobiliaria<br />
                <span style={{ fontStyle: "italic", background: `linear-gradient(135deg, ${GOLD}, ${GOLD_L})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>que sale de<br />lo común</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", color: TXT_M, lineHeight: 1.75, maxWidth: "460px", marginBottom: "40px" }}>
                Olvídate de pisos saturados y rentabilidades del 3%. Accede a subastas judiciales, fincas rústicas, campings y hoteles rurales con análisis profesional y tecnología IA.
              </p>
            </FadeIn>
            <FadeIn delay={0.55}>
              <div style={{ display: "flex", gap: "14px", marginBottom: "56px" }}>
                <a href="#nichos" style={{ padding: "16px 36px", borderRadius: "6px", background: `linear-gradient(135deg, ${GOLD}, ${GOLD_L})`, color: DARK, textDecoration: "none", fontSize: "14px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, boxShadow: `0 4px 24px rgba(200,169,78,0.3)`, transition: "all 0.3s" }}
                  onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = `0 12px 40px rgba(200,169,78,0.45)`; }}
                  onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = `0 4px 24px rgba(200,169,78,0.3)`; }}>Explorar Oportunidades</a>
                <a href="#contacto" style={{ padding: "16px 36px", borderRadius: "6px", border: "1px solid rgba(200,169,78,0.3)", background: "rgba(200,169,78,0.05)", color: GOLD, textDecoration: "none", fontSize: "14px", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, transition: "all 0.3s", backdropFilter: "blur(8px)" }}
                  onMouseEnter={e => e.target.style.background = "rgba(200,169,78,0.12)"} onMouseLeave={e => e.target.style.background = "rgba(200,169,78,0.05)"}>Hablar con un Asesor</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.7}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
                {[{ n: "+200", l: "Inversores" }, { n: "38%", l: "Ahorro medio" }, { n: "+5K", l: "Analizadas" }, { n: "98%", l: "Satisfacción" }].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 600, color: GOLD }}>{s.n}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: TXT_D, letterSpacing: "1px", textTransform: "uppercase", marginTop: "2px" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.3} dir="left">
            <div style={{ position: "relative", height: "520px" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "85%", height: "340px", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(200,169,78,0.15)", boxShadow: "0 30px 60px rgba(0,0,0,0.5)", background: `linear-gradient(135deg, #1a2435 0%, #0d1a2d 40%, #162030 100%)` }}>
                <img src={IMG.about1} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} onError={e => e.target.style.display = "none"} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.15 }}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                </div>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(6,10,18,0.8) 100%)" }} />
                <div style={{ position: "absolute", bottom: "20px", left: "20px", padding: "6px 14px", borderRadius: "8px", background: "rgba(6,10,18,0.6)", backdropFilter: "blur(8px)" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: GOLD, fontWeight: 600, letterSpacing: "0.5px" }}>✦ Villa Premium · Subasta judicial</span>
                </div>
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "65%", height: "260px", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(200,169,78,0.15)", boxShadow: "0 30px 60px rgba(0,0,0,0.5)", background: `linear-gradient(135deg, #1a2d1a 0%, #0d1a12 40%, #162418 100%)` }}>
                <img src={IMG.fincas} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} onError={e => e.target.style.display = "none"} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.15 }}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                </div>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(6,10,18,0.8) 100%)" }} />
                <div style={{ position: "absolute", bottom: "20px", left: "20px", padding: "6px 14px", borderRadius: "8px", background: "rgba(6,10,18,0.6)", backdropFilter: "blur(8px)" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: GOLD, fontWeight: 600, letterSpacing: "0.5px" }}>✦ Finca rústica · 12 hectáreas</span>
                </div>
              </div>
              <div style={{ position: "absolute", top: "-10px", right: "-10px", width: "80px", height: "80px", borderRadius: "12px", border: `2px solid ${GOLD}`, opacity: 0.2 }} />
              <div style={{ position: "absolute", bottom: "-8px", left: "55%", width: "60px", height: "60px", borderRadius: "10px", border: `2px solid ${GOLD}`, opacity: 0.15 }} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Nichos() {
  const nichos = [
    { id: "subastas", title: "Subastas Judiciales", roi: "20-40%", desc: "Inmuebles hasta un 50% bajo mercado. Análisis legal automatizado, estimación de cargas y acompañamiento completo en el proceso de puja.", img: IMG.subastas, tag: "Mayor rentabilidad" },
    { id: "fincas", title: "Fincas Rústicas", roi: "4-10%", desc: "Tierra que genera ingresos: explotación agrícola, forestal, cinegética o fotovoltaica. Activo tangible con revalorización constante.", img: IMG.fincas, tag: "Activo tangible" },
    { id: "campings", title: "Campings", roi: "12-18%", desc: "Turismo outdoor con crecimiento del 15% anual. Alta ocupación estacional y enorme potencial de transformación a glamping premium.", img: IMG.campings, tag: "Tendencia alcista" },
    { id: "hoteles", title: "Hoteles Rurales", roi: "10-18%", desc: "Experiencias únicas con rentabilidad real. Turismo rural español en máximos históricos con barreras de entrada accesibles.", img: IMG.hoteles, tag: "Estilo de vida" },
  ];

  return (
    <section id="nichos" style={{ padding: "100px 0 60px", background: DARK }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 36px" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <GoldLine w="40px" center />
            <p style={{ color: GOLD, fontSize: "12px", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", marginTop: "20px", marginBottom: "14px" }}>Oportunidades de inversión</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 400, color: TXT }}>Cuatro nichos, <span style={{ fontStyle: "italic", color: GOLD }}>cero competencia</span></h2>
          </div>
        </FadeIn>
        {nichos.map((n, i) => {
          const even = i % 2 === 0;
          return (
            <FadeIn key={n.id} delay={0.1}>
              <div id={n.id} style={{ display: "grid", gridTemplateColumns: even ? "1.1fr 0.9fr" : "0.9fr 1.1fr", gap: "40px", alignItems: "center", marginBottom: "40px", padding: "28px", borderRadius: "20px", background: `linear-gradient(135deg, ${DARK3}, rgba(10,15,26,0.5))`, border: "1px solid rgba(200,169,78,0.07)", transition: "all 0.4s" }}
                onMouseEnter={e => { e.currentTarget.style.border = "1px solid rgba(200,169,78,0.2)"; e.currentTarget.style.boxShadow = "0 24px 64px rgba(0,0,0,0.35)"; }}
                onMouseLeave={e => { e.currentTarget.style.border = "1px solid rgba(200,169,78,0.07)"; e.currentTarget.style.boxShadow = "none"; }}>
                {even ? (<><ImgBlock n={n} /><TxtBlock n={n} /></>) : (<><TxtBlock n={n} /><ImgBlock n={n} right /></>)}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

function ImgBlock({ n, right }) {
  return (
    <div style={{ borderRadius: "14px", overflow: "hidden", position: "relative", height: "310px" }}>
      <img src={n.img} alt={n.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s" }}
        onMouseEnter={e => e.target.style.transform = "scale(1.06)"} onMouseLeave={e => e.target.style.transform = "scale(1)"} />
      <div style={{ position: "absolute", inset: 0, background: right ? "linear-gradient(225deg, rgba(6,10,18,0.2), transparent 60%)" : "linear-gradient(135deg, rgba(6,10,18,0.2), transparent 60%)" }} />
      <div style={{ position: "absolute", top: "14px", [right ? "right" : "left"]: "14px", padding: "5px 14px", borderRadius: "100px", background: "rgba(6,10,18,0.55)", backdropFilter: "blur(10px)", border: "1px solid rgba(200,169,78,0.2)" }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: GOLD, fontWeight: 600, letterSpacing: "0.5px" }}>{n.tag}</span>
      </div>
    </div>
  );
}

function TxtBlock({ n }) {
  return (
    <div style={{ padding: "8px 16px" }}>
      <div style={{ display: "inline-block", padding: "5px 16px", borderRadius: "100px", background: "rgba(200,169,78,0.08)", border: "1px solid rgba(200,169,78,0.2)", marginBottom: "18px" }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 700, color: GOLD }}>ROI {n.roi}</span>
      </div>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "30px", fontWeight: 500, color: TXT, marginBottom: "14px" }}>{n.title}</h3>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: TXT_M, lineHeight: 1.75, marginBottom: "22px" }}>{n.desc}</p>
      <a href="#contacto" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: GOLD, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600, transition: "gap 0.3s" }}
        onMouseEnter={e => e.currentTarget.style.gap = "14px"} onMouseLeave={e => e.currentTarget.style.gap = "8px"}>Explorar oportunidades <span style={{ fontSize: "18px" }}>→</span></a>
    </div>
  );
}

function Services() {
  const svcs = [
    { icon: "🔍", title: "Búsqueda con IA", desc: "Algoritmos que rastrean oportunidades 24/7 antes de que lleguen al mercado." },
    { icon: "📊", title: "Due Diligence", desc: "Análisis legal, financiero y técnico. Cargas, reforma estimada, proyección ROI." },
    { icon: "⚡", title: "Alertas Instantáneas", desc: "Las oportunidades que encajan con tu perfil llegan al instante a tu móvil." },
    { icon: "🤝", title: "Acompañamiento Total", desc: "Desde el primer análisis hasta la firma en notaría y gestión posterior." },
    { icon: "📈", title: "Gestión Post-Compra", desc: "Reformas, explotación, alquiler. Gestionamos para que solo cobres." },
    { icon: "🛡️", title: "Red Legal Especializada", desc: "Abogados, procuradores y peritos especializados en cada inversión." },
  ];

  return (
    <section style={{ padding: "100px 0", background: `linear-gradient(180deg, ${DARK}, ${DARK2})`, position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "300px", height: "1px", background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 36px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "72px", alignItems: "start" }}>
          <FadeIn dir="right">
            <div style={{ position: "sticky", top: "120px" }}>
              <GoldLine w="40px" />
              <p style={{ color: GOLD, fontSize: "12px", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", marginTop: "20px", marginBottom: "14px" }}>Servicios premium</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 400, color: TXT, lineHeight: 1.2, marginBottom: "20px" }}>
                Tecnología e<br /><span style={{ fontStyle: "italic", color: GOLD }}>inteligencia artificial</span><br />al servicio de tu inversión
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: TXT_M, lineHeight: 1.75 }}>
                No somos una inmobiliaria tradicional. Combinamos experiencia en inversión real con herramientas de análisis avanzadas.
              </p>
              <div style={{ marginTop: "28px", borderRadius: "14px", overflow: "hidden", height: "200px", border: "1px solid rgba(200,169,78,0.1)" }}>
                <img src={IMG.about2} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.65) saturate(0.8)" }} />
              </div>
            </div>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {svcs.map((s, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div style={{ padding: "24px 26px", borderRadius: "14px", background: `linear-gradient(135deg, rgba(16,22,42,0.7), rgba(10,15,26,0.3))`, border: "1px solid rgba(200,169,78,0.05)", display: "flex", gap: "16px", alignItems: "flex-start", transition: "all 0.35s" }}
                  onMouseEnter={e => { e.currentTarget.style.border = "1px solid rgba(200,169,78,0.18)"; e.currentTarget.style.transform = "translateX(6px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.border = "1px solid rgba(200,169,78,0.05)"; e.currentTarget.style.transform = "none"; }}>
                  <span style={{ fontSize: "22px", flexShrink: 0, marginTop: "2px" }}>{s.icon}</span>
                  <div>
                    <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 600, color: TXT, marginBottom: "4px" }}>{s.title}</h4>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: TXT_M, lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section style={{ padding: "100px 0", background: DARK2 }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 36px" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <GoldLine w="40px" center />
            <p style={{ color: GOLD, fontSize: "12px", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", marginTop: "20px", marginBottom: "14px" }}>Cómo funciona</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 400, color: TXT }}>De la idea a la inversión en <span style={{ fontStyle: "italic", color: GOLD }}>tres pasos</span></h2>
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {[
            { n: "01", t: "Conversación inicial", d: "20 minutos para entender tu perfil inversor, presupuesto, objetivos y tolerancia al riesgo.", time: "20 min", icon: "💬" },
            { n: "02", t: "Alertas personalizadas", d: "Nuestros algoritmos rastrean oportunidades 24/7 y te envían solo las que encajan contigo.", time: "48h", icon: "📲" },
            { n: "03", t: "Análisis y cierre", d: "Due diligence completa, negociación profesional y acompañamiento legal hasta notaría.", time: "Variable", icon: "🏆" },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div style={{ padding: "40px 32px", borderRadius: "16px", background: `linear-gradient(180deg, ${DARK3}, ${DARK})`, border: "1px solid rgba(200,169,78,0.08)", textAlign: "center", position: "relative", overflow: "hidden", transition: "all 0.4s" }}
                onMouseEnter={e => { e.currentTarget.style.border = "1px solid rgba(200,169,78,0.22)"; e.currentTarget.style.transform = "translateY(-6px)"; }}
                onMouseLeave={e => { e.currentTarget.style.border = "1px solid rgba(200,169,78,0.08)"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ position: "absolute", top: "10px", right: "14px", fontFamily: "'Cormorant Garamond', serif", fontSize: "56px", fontWeight: 300, color: "rgba(200,169,78,0.18)", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: "36px", marginBottom: "20px" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 500, color: TXT, marginBottom: "12px" }}>{s.t}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: TXT_M, lineHeight: 1.7, marginBottom: "18px" }}>{s.d}</p>
                <div style={{ padding: "5px 16px", borderRadius: "100px", background: "rgba(200,169,78,0.08)", display: "inline-block" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: GOLD, fontWeight: 600 }}>⏱ {s.time}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contacto" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMG.cta})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", filter: "brightness(0.12) saturate(0.5)" }} />
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, ${DARK2} 0%, rgba(6,10,18,0.5) 30%, rgba(6,10,18,0.5) 70%, ${DARK} 100%)` }} />
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "120px 36px", textAlign: "center", position: "relative", zIndex: 2 }}>
        <FadeIn>
          <GoldLine w="40px" center />
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 50px)", fontWeight: 400, color: TXT, marginTop: "24px", marginBottom: "20px", lineHeight: 1.15 }}>
            Mientras otros compiten<br />por el mismo piso,<br /><span style={{ fontStyle: "italic", color: GOLD }}>tú inviertes diferente</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: TXT_M, lineHeight: 1.75, marginBottom: "40px" }}>
            Agenda una consulta gratuita de 20 minutos. Sin compromiso, sin presión. Solo para entender si hay oportunidades que encajan contigo.
          </p>
          <a href="#" style={{ display: "inline-block", padding: "18px 52px", borderRadius: "6px", background: `linear-gradient(135deg, ${GOLD}, ${GOLD_L})`, color: DARK, textDecoration: "none", fontSize: "15px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, boxShadow: `0 4px 28px rgba(200,169,78,0.35)`, transition: "all 0.3s" }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = `0 16px 48px rgba(200,169,78,0.5)`; }}
            onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = `0 4px 28px rgba(200,169,78,0.35)`; }}>Agenda Tu Consulta Gratuita</a>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: TXT_D, marginTop: "16px" }}>Respuesta en menos de 24 horas · Sin compromiso</p>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: "56px 0 28px", background: DARK, borderTop: "1px solid rgba(200,169,78,0.06)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 36px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px", marginBottom: "40px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "6px", background: `linear-gradient(135deg, ${GOLD}, ${GOLD_L})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "16px", color: DARK }}>A</div>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 600, color: TXT }}>Alt<span style={{ color: GOLD }}>Finca</span></span>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: TXT_D, lineHeight: 1.7, maxWidth: "260px" }}>Inversiones inmobiliarias alternativas con análisis profesional, tecnología IA y acompañamiento integral.</p>
          </div>
          {[{ t: "Inversiones", l: ["Subastas Judiciales", "Fincas Rústicas", "Campings", "Hoteles Rurales"] }, { t: "Empresa", l: ["Sobre Nosotros", "Contacto", "Blog"] }, { t: "Legal", l: ["Aviso Legal", "Privacidad", "Cookies"] }].map((c, i) => (
            <div key={i}>
              <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 600, color: GOLD, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "14px" }}>{c.t}</h4>
              {c.l.map((x, li) => (
                <a key={li} href="#" style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: TXT_D, textDecoration: "none", marginBottom: "9px", transition: "color 0.3s" }}
                  onMouseEnter={e => e.target.style.color = TXT} onMouseLeave={e => e.target.style.color = TXT_D}>{x}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(200,169,78,0.06)", paddingTop: "20px", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: TXT_D }}>© 2026 AltFinca. Todos los derechos reservados.</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: TXT_D }}>Castilla-La Mancha, España</span>
        </div>
      </div>
    </footer>
  );
}

export default function AltFinca() {
  return (
    <div style={{ background: DARK, minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <div style={{ background: DARK2, borderTop: "1px solid rgba(200,169,78,0.06)", borderBottom: "1px solid rgba(200,169,78,0.06)" }}>
        <Marquee items={["Subastas judiciales", "Fincas rústicas", "Campings", "Hoteles rurales", "Análisis IA", "Due diligence", "ROI 10-40%", "Sin intermediarios", "Inversión inteligente"]} />
      </div>
      <Nichos />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}
