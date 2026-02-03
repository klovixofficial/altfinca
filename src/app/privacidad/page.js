export const metadata = { title: 'Política de Privacidad' };

export default function PrivacidadPage() {
  return (
    <>
      <section className="page-hero" style={{ minHeight: 'auto', padding: '8rem 2rem 3rem' }}>
        <div className="page-hero-content">
          <h1>Política de <em>Privacidad</em></h1>
        </div>
      </section>
      <section className="section section-cream">
        <div className="legal-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>1. Responsable del Tratamiento</h2>
          <p><strong>Responsable:</strong> AltFinca<br />
          <strong>Email:</strong> info@altfinca.com<br />
          <strong>Finalidad:</strong> Gestión de consultas, envío de información comercial, prestación de servicios de asesoramiento inmobiliario.</p>

          <h2>2. Datos Recabados</h2>
          <p>A través de los formularios del Sitio Web recabamos los siguientes datos personales:</p>
          <ul>
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono (opcional)</li>
            <li>Área de interés de inversión</li>
            <li>Presupuesto aproximado (opcional)</li>
            <li>Cualquier información adicional proporcionada voluntariamente</li>
          </ul>

          <h2>3. Finalidad del Tratamiento</h2>
          <p>Los datos personales recabados serán tratados con las siguientes finalidades:</p>
          <ul>
            <li>Gestionar y responder las consultas realizadas a través del formulario de contacto</li>
            <li>Enviar alertas de oportunidades de inversión que encajen con el perfil del usuario</li>
            <li>Remitir comunicaciones comerciales sobre nuestros servicios (previo consentimiento)</li>
            <li>Gestionar la relación contractual con nuestros clientes</li>
          </ul>

          <h2>4. Base Legal</h2>
          <p>La base legal para el tratamiento de datos es el consentimiento del interesado, otorgado al marcar la casilla de aceptación de la política de privacidad en nuestros formularios, así como la ejecución de un contrato o medidas precontractuales.</p>

          <h2>5. Conservación de Datos</h2>
          <p>Los datos se conservarán mientras exista un interés mutuo para mantener la finalidad del tratamiento y, en todo caso, durante los plazos legalmente establecidos. Cuando ya no sea necesario, se procederá a su supresión con las medidas de seguridad adecuadas.</p>

          <h2>6. Derechos del Interesado</h2>
          <p>El usuario puede ejercer los siguientes derechos dirigiéndose a info@altfinca.com:</p>
          <ul>
            <li><strong>Acceso:</strong> conocer qué datos personales tratamos</li>
            <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos</li>
            <li><strong>Supresión:</strong> solicitar la eliminación de datos personales</li>
            <li><strong>Oposición:</strong> oponerse al tratamiento de datos</li>
            <li><strong>Portabilidad:</strong> solicitar la transferencia de datos a otro responsable</li>
            <li><strong>Limitación:</strong> solicitar la limitación del tratamiento de datos</li>
          </ul>

          <h2>7. Seguridad</h2>
          <p>AltFinca adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad y confidencialidad de los datos personales, evitando su alteración, pérdida, tratamiento o acceso no autorizado.</p>

          <h2>8. Modificaciones</h2>
          <p>AltFinca se reserva el derecho a modificar la presente política de privacidad para adaptarla a novedades legislativas o jurisprudenciales. En tales supuestos, se anunciará en esta página los cambios introducidos con razonable antelación a su puesta en práctica.</p>

          <p style={{ marginTop: '2rem', fontSize: '0.88rem', color: '#9a9590' }}>Última actualización: Enero 2025</p>
        </div>
      </section>
    </>
  );
}
