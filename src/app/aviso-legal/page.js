export const metadata = { title: 'Aviso Legal' };

export default function AvisoLegalPage() {
  return (
    <>
      <section className="page-hero" style={{ minHeight: 'auto', padding: '8rem 2rem 3rem' }}>
        <div className="page-hero-content">
          <h1>Aviso <em>Legal</em></h1>
        </div>
      </section>
      <section className="section section-cream">
        <div className="legal-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>1. Datos Identificativos</h2>
          <p>En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, se facilitan los siguientes datos:</p>
          <p><strong>Denominación social:</strong> AltFinca<br />
          <strong>Domicilio:</strong> Castilla-La Mancha, España<br />
          <strong>Email de contacto:</strong> info@altfinca.com<br />
          <strong>Actividad:</strong> Asesoramiento e intermediación en inversión inmobiliaria alternativa</p>

          <h2>2. Objeto</h2>
          <p>El presente aviso legal regula el uso y acceso al sitio web altfinca.com (en adelante, el «Sitio Web»), que AltFinca pone a disposición de los usuarios de Internet.</p>
          <p>La utilización del Sitio Web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.</p>

          <h2>3. Propiedad Intelectual e Industrial</h2>
          <p>Todos los contenidos del Sitio Web, incluyendo, sin carácter limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de AltFinca o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual sobre los mismos.</p>

          <h2>4. Condiciones de Uso</h2>
          <p>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que AltFinca ofrece a través del Sitio Web y a no emplearlos para actividades ilícitas o contrarias a la buena fe y al ordenamiento legal.</p>

          <h2>5. Exclusión de Responsabilidad</h2>
          <p>AltFinca no se hace responsable de la información y contenidos almacenados en foros, redes sociales o cualesquiera otro medio que permita a terceros publicar contenidos de forma independiente en la página web del prestador.</p>
          <p>La información contenida en este Sitio Web tiene carácter meramente orientativo y no constituye asesoramiento financiero, jurídico ni fiscal. Se recomienda consultar con profesionales cualificados antes de tomar decisiones de inversión.</p>

          <h2>6. Legislación Aplicable y Jurisdicción</h2>
          <p>Para la resolución de todas las controversias o cuestiones relacionadas con el presente Sitio Web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes.</p>
        </div>
      </section>
    </>
  );
}
