'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            Alt<span>Finca</span>
          </Link>

          <ul className="nav-links">
            <li className="nav-dropdown">
              <a href="#">Inversiones ▾</a>
              <div className="nav-dropdown-menu">
                <Link href="/subastas-judiciales">Subastas Judiciales</Link>
                <Link href="/fincas-rusticas">Fincas Rústicas</Link>
                <Link href="/campings">Campings</Link>
                <Link href="/hoteles-rurales">Hoteles Rurales</Link>
              </div>
            </li>
            <li><Link href="/servicios">Servicios</Link></li>
            <li><Link href="/sobre-nosotros">Sobre Nosotros</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li>
              <Link href="/contacto" className="nav-cta">Consulta Gratuita</Link>
            </li>
          </ul>

          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`nav-mobile-overlay ${mobileOpen ? 'open' : ''}`}>
        <button className="nav-mobile-close" onClick={closeMenu} aria-label="Cerrar menú">
          ✕
        </button>
        <ul className="nav-mobile-links">
          <li><Link href="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link href="/subastas-judiciales" onClick={closeMenu}>Subastas Judiciales</Link></li>
          <li><Link href="/fincas-rusticas" onClick={closeMenu}>Fincas Rústicas</Link></li>
          <li><Link href="/campings" onClick={closeMenu}>Campings</Link></li>
          <li><Link href="/hoteles-rurales" onClick={closeMenu}>Hoteles Rurales</Link></li>
          <li><Link href="/servicios" onClick={closeMenu}>Servicios</Link></li>
          <li><Link href="/sobre-nosotros" onClick={closeMenu}>Sobre Nosotros</Link></li>
          <li><Link href="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><Link href="/contacto" onClick={closeMenu} style={{ color: '#c9a227' }}>Consulta Gratuita</Link></li>
        </ul>
      </div>
    </>
  );
}
