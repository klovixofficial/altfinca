import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Política de Cookies | AltFinca",
  description: "Política de cookies y tecnologías de seguimiento de AltFinca",
};

export default function CookiesPage() {
  return (
    <article>
      <h1 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-8">
        Política de Cookies
      </h1>

      <p className="text-sm text-[var(--text-muted)] mb-8">
        Última actualización: Enero 2025
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          1. ¿Qué son las cookies?
        </h2>
        <p className="text-[var(--text-light)]">
          Las cookies son pequeños archivos de texto que se almacenan en tu
          dispositivo (ordenador, tablet, móvil) cuando visitas un sitio web.
          Permiten que el sitio recuerde tus acciones y preferencias durante un
          período de tiempo, para que no tengas que volver a introducirlos cada
          vez que vuelvas al sitio o navegues de una página a otra.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          2. ¿Qué tipos de cookies utilizamos?
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-[var(--text)] mb-2">
              Cookies técnicas (necesarias)
            </h3>
            <p className="text-[var(--text-light)] mb-2">
              Son esenciales para el funcionamiento del sitio web. Sin ellas, el
              sitio no podría funcionar correctamente.
            </p>
            <div className="bg-[var(--bg-alt)] p-4 rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-[var(--text)]">Cookie</th>
                    <th className="text-left py-2 text-[var(--text)]">Duración</th>
                    <th className="text-left py-2 text-[var(--text)]">Finalidad</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--text-light)]">
                  <tr className="border-b border-gray-100">
                    <td className="py-2">cookie_consent</td>
                    <td className="py-2">1 año</td>
                    <td className="py-2">Guarda tus preferencias de cookies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--text)] mb-2">
              Cookies analíticas
            </h3>
            <p className="text-[var(--text-light)] mb-2">
              Nos permiten medir y analizar cómo los usuarios navegan por el sitio
              web. Esto nos ayuda a mejorar el funcionamiento del sitio.
            </p>
            <div className="bg-[var(--bg-alt)] p-4 rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-[var(--text)]">Cookie</th>
                    <th className="text-left py-2 text-[var(--text)]">Proveedor</th>
                    <th className="text-left py-2 text-[var(--text)]">Duración</th>
                    <th className="text-left py-2 text-[var(--text)]">Finalidad</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--text-light)]">
                  <tr className="border-b border-gray-100">
                    <td className="py-2">_ga</td>
                    <td className="py-2">Google Analytics</td>
                    <td className="py-2">2 años</td>
                    <td className="py-2">Distinguir usuarios</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">_ga_*</td>
                    <td className="py-2">Google Analytics</td>
                    <td className="py-2">2 años</td>
                    <td className="py-2">Persistir estado de sesión</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[var(--text)] mb-2">
              Cookies de marketing
            </h3>
            <p className="text-[var(--text-light)]">
              Actualmente no utilizamos cookies de marketing o publicidad. Si en
              el futuro decidimos implementarlas, actualizaremos esta política y
              solicitaremos tu consentimiento.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          3. ¿Cómo puedo gestionar las cookies?
        </h2>
        <p className="text-[var(--text-light)] mb-4">
          Puedes gestionar tus preferencias de cookies de varias formas:
        </p>
        <ul className="list-disc list-inside text-[var(--text-light)] space-y-2 ml-4">
          <li>
            <strong>Banner de cookies:</strong> Al visitar nuestro sitio, puedes
            aceptar o rechazar las cookies no esenciales
          </li>
          <li>
            <strong>Configuración del navegador:</strong> Puedes bloquear o
            eliminar las cookies desde la configuración de tu navegador
          </li>
        </ul>

        <div className="mt-4">
          <p className="text-[var(--text-light)] mb-2">
            Instrucciones para los principales navegadores:
          </p>
          <ul className="list-disc list-inside text-[var(--text-light)] space-y-2 ml-4">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:underline"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:underline"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:underline"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:underline"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          4. Consecuencias de desactivar las cookies
        </h2>
        <p className="text-[var(--text-light)]">
          Si decides desactivar las cookies, algunas funcionalidades del sitio
          web podrían no funcionar correctamente. Las cookies técnicas son
          necesarias para el correcto funcionamiento del sitio.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          5. Actualizaciones de esta política
        </h2>
        <p className="text-[var(--text-light)]">
          Esta política de cookies puede ser actualizada periódicamente para
          reflejar cambios en las cookies que utilizamos o por otros motivos
          operativos, legales o regulatorios. Te recomendamos revisar esta
          política regularmente para estar informado sobre el uso de cookies.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          6. Contacto
        </h2>
        <p className="text-[var(--text-light)]">
          Si tienes alguna pregunta sobre nuestra política de cookies, puedes
          contactarnos en{" "}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="text-[var(--primary)] hover:underline"
          >
            {SITE_CONFIG.email}
          </a>
        </p>
      </section>
    </article>
  );
}
