import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="nav-logo" style={{ fontSize: '1.4rem' }}>
            Alt<span style={{ color: '#c9a227' }}>Finca</span>
          </Link>
          <p>
            Inversión inmobiliaria alternativa: subastas judiciales, fincas rústicas, campings y hoteles rurales. Análisis profesional y acompañamiento integral en Castilla-La Mancha y toda España.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Instagram">ig</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Inversiones</h4>
          <ul>
            <li><Link href="/subastas-judiciales">Subastas Judiciales</Link></li>
            <li><Link href="/fincas-rusticas">Fincas Rústicas</Link></li>
            <li><Link href="/campings">Campings</Link></li>
            <li><Link href="/hoteles-rurales">Hoteles Rurales</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><Link href="/sobre-nosotros">Sobre Nosotros</Link></li>
            <li><Link href="/servicios">Servicios</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li style={{ color: '#9a9590', fontSize: '0.88rem' }}>📧 info@altfinca.com</li>
            <li style={{ color: '#9a9590', fontSize: '0.88rem' }}>💬 WhatsApp disponible</li>
            <li style={{ color: '#9a9590', fontSize: '0.88rem' }}>📍 Castilla-La Mancha, España</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AltFinca. Todos los derechos reservados.</p>
        <div className="footer-bottom-links">
          <Link href="/aviso-legal">Aviso Legal</Link>
          <Link href="/privacidad">Política de Privacidad</Link>
          <Link href="/cookies">Política de Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
