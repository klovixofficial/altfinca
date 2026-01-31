import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Aviso Legal | AltFinca",
  description: "Aviso legal y condiciones de uso de AltFinca",
};

export default function AvisoLegalPage() {
  return (
    <article>
      <h1 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-8">
        Aviso Legal
      </h1>

      <p className="text-sm text-[var(--text-muted)] mb-8">
        Última actualización: Enero 2025
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          1. Datos Identificativos
        </h2>
        <p className="text-[var(--text-light)] mb-4">
          En cumplimiento con el deber de información recogido en el artículo 10
          de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Información y del Comercio Electrónico, a continuación se reflejan los
          siguientes datos:
        </p>
        <ul className="list-disc list-inside text-[var(--text-light)] space-y-2 ml-4">
          <li><strong>Denominación social:</strong> [NOMBRE EMPRESA A COMPLETAR]</li>
          <li><strong>NIF/CIF:</strong> [CIF A COMPLETAR]</li>
          <li><strong>Domicilio social:</strong> [DIRECCIÓN A COMPLETAR]</li>
          <li><strong>Correo electrónico:</strong> {SITE_CONFIG.email}</li>
          <li><strong>Teléfono:</strong> {SITE_CONFIG.phone}</li>
          <li><strong>Sitio web:</strong> {SITE_CONFIG.url}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          2. Objeto
        </h2>
        <p className="text-[var(--text-light)] mb-4">
          El presente sitio web tiene por objeto facilitar información sobre los
          servicios de intermediación inmobiliaria y asesoramiento en inversiones
          alternativas ofrecidos por {SITE_CONFIG.name}.
        </p>
        <p className="text-[var(--text-light)]">
          {SITE_CONFIG.name} se reserva el derecho a modificar, sin previo aviso,
          el contenido, estructura, diseño y/o cualquier aspecto del sitio web.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          3. Condiciones de Uso
        </h2>
        <p className="text-[var(--text-light)] mb-4">
          El acceso y uso del sitio web implica la aceptación plena y sin reservas
          de todas y cada una de las disposiciones incluidas en este Aviso Legal.
        </p>
        <p className="text-[var(--text-light)] mb-4">
          El usuario se compromete a:
        </p>
        <ul className="list-disc list-inside text-[var(--text-light)] space-y-2 ml-4">
          <li>Hacer un uso adecuado de los contenidos y servicios ofrecidos</li>
          <li>No utilizar los contenidos con fines ilícitos o contrarios a la ley</li>
          <li>No reproducir, distribuir o modificar los contenidos sin autorización</li>
          <li>No realizar acciones que puedan dañar la imagen o reputación de la empresa</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          4. Propiedad Intelectual e Industrial
        </h2>
        <p className="text-[var(--text-light)] mb-4">
          Todos los contenidos del sitio web, incluyendo textos, fotografías,
          gráficos, imágenes, iconos, tecnología, software, links y demás
          contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos
          fuente, son propiedad intelectual de {SITE_CONFIG.name} o de terceros
          que han autorizado su uso.
        </p>
        <p className="text-[var(--text-light)]">
          Queda prohibida la reproducción total o parcial de estos contenidos
          sin autorización previa y por escrito.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          5. Exclusión de Responsabilidad
        </h2>
        <p className="text-[var(--text-light)] mb-4">
          {SITE_CONFIG.name} no se responsabiliza de:
        </p>
        <ul className="list-disc list-inside text-[var(--text-light)] space-y-2 ml-4">
          <li>Errores u omisiones en los contenidos del sitio web</li>
          <li>Falta de disponibilidad del sitio web</li>
          <li>Transmisión de virus o programas maliciosos</li>
          <li>Uso inadecuado del sitio web por parte de los usuarios</li>
          <li>Contenidos de sitios web de terceros enlazados</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          6. Legislación Aplicable y Jurisdicción
        </h2>
        <p className="text-[var(--text-light)]">
          Para la resolución de todas las controversias o cuestiones relacionadas
          con el presente sitio web, será de aplicación la legislación española,
          a la que se someten expresamente las partes, siendo competentes para
          la resolución de todos los conflictos derivados o relacionados con su
          uso los Juzgados y Tribunales de Madrid.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
          7. Contacto
        </h2>
        <p className="text-[var(--text-light)]">
          Para cualquier consulta sobre este Aviso Legal, puede contactar con
          nosotros a través del correo electrónico:{" "}
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
