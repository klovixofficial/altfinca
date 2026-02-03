export const metadata = { title: 'Política de Cookies' };

export default function CookiesPage() {
  return (
    <>
      <section className="page-hero" style={{ minHeight: 'auto', padding: '8rem 2rem 3rem' }}>
        <div className="page-hero-content">
          <h1>Política de <em>Cookies</em></h1>
        </div>
      </section>
      <section className="section section-cream">
        <div className="legal-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>1. ¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que se almacenan en el navegador del usuario al visitar un sitio web. Permiten que el sitio web recuerde información sobre la visita, como las preferencias de idioma y otras opciones, lo que puede facilitar la próxima visita y hacer que el sitio sea más útil.</p>

          <h2>2. Tipos de cookies que utilizamos</h2>

          <h3>Cookies técnicas (necesarias)</h3>
          <p>Son imprescindibles para el correcto funcionamiento del sitio web. Permiten al usuario navegar por la página y utilizar las diferentes opciones y servicios que ofrece. No requieren consentimiento.</p>

          <h3>Cookies analíticas</h3>
          <p>Nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del sitio web. Para ello se analiza la navegación con el fin de mejorar la oferta de productos o servicios que ofrecemos.</p>

          <h3>Cookies de marketing</h3>
          <p>Son aquellas que permiten la gestión eficaz de los espacios publicitarios, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que se haga de nuestro sitio web.</p>

          <h2>3. ¿Cómo gestionar las cookies?</h2>
          <p>Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador:</p>
          <ul>
            <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
            <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
            <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
            <li><strong>Edge:</strong> Configuración → Privacidad → Cookies</li>
          </ul>

          <h2>4. Consentimiento</h2>
          <p>Al acceder a este sitio web por primera vez, se te mostrará un banner informándote sobre el uso de cookies. Al hacer clic en «Aceptar todas», consientes la instalación de cookies analíticas y de marketing. Si haces clic en «Rechazar», solo se instalarán las cookies técnicas necesarias.</p>
          <p>En cualquier momento puedes retirar tu consentimiento modificando la configuración de cookies a través de los ajustes de tu navegador.</p>

          <h2>5. Actualización</h2>
          <p>La presente política de cookies puede ser modificada en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.</p>

          <p style={{ marginTop: '2rem', fontSize: '0.88rem', color: '#9a9590' }}>Última actualización: Enero 2025</p>
        </div>
      </section>
    </>
  );
}
