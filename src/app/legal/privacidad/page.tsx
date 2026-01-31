import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Política de Privacidad | AltFinca",
  description: "Política de privacidad y protección de datos de AltFinca",
};

export default function PrivacidadPage() {
  return (
    <article>
      <h1 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-8">
        Política de Privacidad
      </h1>

      <p className="text-sm text-[var(--text-muted)] mb-8">
        Última actualización: Enero 2025
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          1. Responsable del Tratamiento
        </h2>
        <p className="text-[var(--text-light)] mb-4">
          El responsable del tratamiento de tus datos personales es:
        </p>
        <ul className="list-disc list-inside text-[var(--text-light)] space-y-2 ml-4">
          <li><strong>Identidad:</strong> [NOMBRE EMPRESA A COMPLETAR]</li>
          <li><strong>NIF/CIF:</strong> [CIF A COMPLETAR]</li>
          <li><strong>Dirección:</strong> [DIRECCIÓN A COMPLETAR]</li>
          <li><strong>Correo electrónico:</strong> {SITE_CONFIG.email}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          2. Datos que Recopilamos
        </h2>
        <p className="text-[var(--text-light)] mb-4">
          Recopilamos los siguientes tipos de datos personales:
        </p>
        <ul className="list-disc list-inside text-[var(--text-light)] space-y-2 ml-4">
          <li><strong>Datos de identificación:</strong> nombre, apellidos</li>
          <li><strong>Datos de contacto:</strong> email, teléfono</li>
          <li><strong>Datos profesionales:</strong> presupuesto de inversión, experiencia inversora</li>
          <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          3. Finalidad del Tratamiento
        </h2>
        <p className="text-[var(--text-light)] mb-4">
          Tratamos tus datos personales para las siguientes finalidades:
        </p>
        <ul className="list-disc list-inside text-[var(--text-light)] space-y-2 ml-4">
          <li>Gestionar las solicitudes de información recibidas</li>
          <li>Prestación de los servicios contratados</li>
          <li>Envío de comunicaciones comerciales (con tu consentimiento)</li>
          <li>Análisis estadístico y mejora de nuestros servicios</li>
          <li>Cumplimiento de obligaciones legales</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          4. Base Legal del Tratamiento
        </h2>
        <p className="text-[var(--text-light)] mb-4">
          La base legal para el tratamiento de tus datos es:
        </p>
        <ul className="list-disc list-inside text-[var(--text-light)] space-y-2 ml-4">
          <li><strong>Consentimiento:</strong> cuando rellenas nuestros formularios</li>
          <li><strong>Ejecución de contrato:</strong> para la prestación de servicios</li>
          <li><strong>Interés legítimo:</strong> para análisis y mejora de servicios</li>
          <li><strong>Obligación legal:</strong> para cumplir normativas aplicables</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          5. Destinatarios de los Datos
        </h2>
        <p className="text-[var(--text-light)] mb-4">
          Tus datos podrán ser comunicados a:
        </p>
        <ul className="list-disc list-inside text-[var(--text-light)] space-y-2 ml-4">
          <li>Administraciones públicas cuando sea legalmente requerido</li>
          <li>Proveedores de servicios tecnológicos (hosting, email, CRM)</li>
          <li>Colaboradores inmobiliarios para la prestación del servicio</li>
        </ul>
        <p className="text-[var(--text-light)] mt-4">
          No se realizan transferencias internacionales de datos fuera del Espacio
          Económico Europeo.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          6. Plazo de Conservación
        </h2>
        <p className="text-[var(--text-light)]">
          Conservaremos tus datos personales durante el tiempo necesario para
          cumplir con la finalidad para la que fueron recogidos y para determinar
          las posibles responsabilidades que pudieran derivar de dicha finalidad.
          En cualquier caso, los datos se conservarán mientras no solicites su
          supresión.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          7. Tus Derechos
        </h2>
        <p className="text-[var(--text-light)] mb-4">
          Tienes derecho a:
        </p>
        <ul className="list-disc list-inside text-[var(--text-light)] space-y-2 ml-4">
          <li><strong>Acceso:</strong> conocer qué datos tenemos sobre ti</li>
          <li><strong>Rectificación:</strong> corregir datos inexactos</li>
          <li><strong>Supresión:</strong> solicitar la eliminación de tus datos</li>
          <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos</li>
          <li><strong>Limitación:</strong> solicitar la limitación del tratamiento</li>
          <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado</li>
        </ul>
        <p className="text-[var(--text-light)] mt-4">
          Puedes ejercer estos derechos enviando un email a{" "}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="text-[var(--primary)] hover:underline"
          >
            {SITE_CONFIG.email}
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          8. Seguridad de los Datos
        </h2>
        <p className="text-[var(--text-light)]">
          Aplicamos medidas técnicas y organizativas apropiadas para garantizar
          un nivel de seguridad adecuado al riesgo, incluyendo: cifrado de datos,
          control de acceso, copias de seguridad, y auditorías periódicas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          9. Reclamaciones
        </h2>
        <p className="text-[var(--text-light)]">
          Si consideras que el tratamiento de tus datos no se ajusta a la
          normativa vigente, puedes presentar una reclamación ante la Agencia
          Española de Protección de Datos (www.aepd.es).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          10. Modificaciones
        </h2>
        <p className="text-[var(--text-light)]">
          Nos reservamos el derecho a modificar esta Política de Privacidad para
          adaptarla a novedades legislativas o jurisprudenciales. En caso de
          cambios significativos, te informaremos a través de nuestra web o por
          email.
        </p>
      </section>
    </article>
  );
}
