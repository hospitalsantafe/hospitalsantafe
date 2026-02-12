'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import SearchOverlay from '@/components/common/SearchOverlay';
import './Header.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [serviciosDropdownOpen, setServiciosDropdownOpen] = useState(false);
  const [instalacionesDropdownOpen, setInstalacionesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut: Ctrl/Cmd + K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeSearch = useCallback(() => setIsSearchOpen(false), []);

  return (
    <header className="header">
      <div className="header__container container">
        {/* Logo - Always visible */}
        <Link href="/" className="header__logo">
          <div className="logo">
            <div className="logo__image">
              <img src="/images/ultimologo.svg" alt="Hospital Santa Fe" width="180" height="60" style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Navegación Principal">
          <Link href="/" className="nav__link">
            Inicio
          </Link>

          <Link href="/nosotros" className="nav__link">
            Nosotros
          </Link>

          {/* Servicios médicos - Dropdown */}
          <div
            className="nav__dropdown"
            onMouseEnter={() => setServiciosDropdownOpen(true)}
            onMouseLeave={() => setServiciosDropdownOpen(false)}
          >
            <button className="nav__link--dropdown">
              Servicios médicos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {serviciosDropdownOpen && (
              <div className="nav__dropdown-menu">
                <Link href="/servicios" className="dropdown__link dropdown__link--highlight">
                  Todos los servicios
                </Link>
                <Link href="/servicios/especialidades" className="dropdown__link">
                  Especialidades
                </Link>
                <Link href="/servicios/paquetes" className="dropdown__link">
                  Paquetes Quirúrgicos
                </Link>
                <Link href="/servicios/estudios-imagen" className="dropdown__link">
                  Estudios de imagen
                </Link>
                <Link href="/servicios/cuneros" className="dropdown__link">
                  Cuneros
                </Link>
                <Link href="/maternidad" className="dropdown__link">
                  Maternidad
                </Link>
              </div>
            )}
          </div>

          {/* Instalaciones - Dropdown */}
          <div
            className="nav__dropdown"
            onMouseEnter={() => setInstalacionesDropdownOpen(true)}
            onMouseLeave={() => setInstalacionesDropdownOpen(false)}
          >
            <button className="nav__link--dropdown">
              Instalaciones
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {instalacionesDropdownOpen && (
              <div className="nav__dropdown-menu">
                <Link href="/instalaciones" className="dropdown__link dropdown__link--highlight">
                  Todas las instalaciones
                </Link>
                <Link href="/instalaciones/habitaciones" className="dropdown__link">
                  Habitaciones
                </Link>
                <Link href="/instalaciones/farmacia" className="dropdown__link">
                  Farmacia
                </Link>
                <Link href="/instalaciones/cafeteria" className="dropdown__link">
                  Cafetería
                </Link>
                <Link href="/instalaciones/galeria" className="dropdown__link">
                  Galería
                </Link>
              </div>
            )}
          </div>

          <Link href="/contacto" className="nav__link">
            Contacto
          </Link>
        </nav>

        {/* Actions group: Search + Urgencias — aligned far right */}
        <div className="header__actions">
          <button
            className="header__search"
            aria-label="Buscar"
            type="button"
            onClick={() => setIsSearchOpen(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          <a href="tel:7344205" className="btn btn--urgencias header__cta">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Urgencias 24/7</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`header__menu-btn ${isMobileMenuOpen ? 'is-active' : ''}`}
          aria-label="Toggle menu"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* ====== Search Overlay ====== */}
      <SearchOverlay isOpen={isSearchOpen} onClose={closeSearch} />

      {/* Mobile Navigation */}
      <div className={`header__mobile-nav ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <nav aria-label="Navegación Móvil">
          <Link href="/" className="mobile-nav__link">
            Inicio
          </Link>

          <Link href="/nosotros" className="mobile-nav__link">
            Nosotros
          </Link>

          {/* Servicios médicos - Expandible */}
          <div className="mobile-nav__section">
            <button
              className="mobile-nav__link--expandable"
              onClick={() => setServiciosDropdownOpen(!serviciosDropdownOpen)}
            >
              Servicios médicos
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={serviciosDropdownOpen ? 'rotate' : ''}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {serviciosDropdownOpen && (
              <div className="mobile-nav__submenu">
                <Link href="/servicios" className="mobile-nav__sublink">
                  Todos los servicios
                </Link>
                <Link href="/servicios/especialidades" className="mobile-nav__sublink">
                  Especialidades
                </Link>
                <Link href="/servicios/paquetes" className="mobile-nav__sublink">
                  Paquetes Quirúrgicos
                </Link>
                <Link href="/servicios/estudios-imagen" className="mobile-nav__sublink">
                  Estudios de imagen
                </Link>
                <Link href="/servicios/cuneros" className="mobile-nav__sublink">
                  Cuneros
                </Link>
                <Link href="/maternidad" className="mobile-nav__sublink">
                  Maternidad
                </Link>
              </div>
            )}
          </div>

          {/* Instalaciones - Expandible */}
          <div className="mobile-nav__section">
            <button
              className="mobile-nav__link--expandable"
              onClick={() => setInstalacionesDropdownOpen(!instalacionesDropdownOpen)}
            >
              Instalaciones
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={instalacionesDropdownOpen ? 'rotate' : ''}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {instalacionesDropdownOpen && (
              <div className="mobile-nav__submenu">
                <Link href="/instalaciones" className="mobile-nav__sublink">
                  Todas las instalaciones
                </Link>
                <Link href="/instalaciones/habitaciones" className="mobile-nav__sublink">
                  Habitaciones
                </Link>
                <Link href="/instalaciones/farmacia" className="mobile-nav__sublink">
                  Farmacia
                </Link>
                <Link href="/instalaciones/cafeteria" className="mobile-nav__sublink">
                  Cafetería
                </Link>
                <Link href="/instalaciones/galeria" className="mobile-nav__sublink">
                  Galería
                </Link>
              </div>
            )}
          </div>

          <Link href="/contacto" className="mobile-nav__link">
            Contacto
          </Link>

          <div className="mobile-nav__cta">
            <button className="btn btn--urgencias btn--large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Urgencias 24/7
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
