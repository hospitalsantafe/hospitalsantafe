import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/admin/auth';
import { logoutAction } from '../actions';

export default async function AdminDashboard() {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect('/admin');
  }

  const sections = [
    {
      href: '/admin/dashboard/testimonios',
      title: 'Testimonios',
      desc: 'Agregar, editar y eliminar reseñas de pacientes',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      href: '/admin/dashboard/precios',
      title: 'Precios y Contacto',
      desc: 'Modificar precios de paquetes y datos de contacto',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="admin-topbar">
        <div className="admin-topbar__brand">
          <img src="/images/logo-fondo-blanco.webp" alt="HSF" className="admin-topbar__logo" />
          <span>Panel Admin</span>
        </div>
        <div className="admin-topbar__actions">
          <a href="/" target="_blank" className="admin-topbar__back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Ver sitio
          </a>
          <form action={logoutAction}>
            <button type="submit" className="admin-btn-logout">
              Cerrar sesión
            </button>
          </form>
        </div>
      </div>

      {/* Page Content */}
      <div className="admin-page">
        <div className="admin-dashboard-header">
          <h1>Hospital Santa Fe</h1>
          <p>Selecciona una sección para editar su contenido</p>
        </div>

        <div className="admin-cards-grid">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="admin-nav-card">
              <div className="admin-nav-card__icon">{s.icon}</div>
              <span className="admin-nav-card__title">{s.title}</span>
              <span className="admin-nav-card__desc">{s.desc}</span>
            </Link>
          ))}
        </div>

        <div className="admin-card" style={{ marginTop: '8px' }}>
          <h2>¿Cómo funciona?</h2>
          <ol style={{ paddingLeft: '20px', lineHeight: '1.8', fontSize: '14px', color: '#555', margin: 0 }}>
            <li>Entra a la sección que quieres modificar.</li>
            <li>Realiza los cambios (agregar, editar o eliminar).</li>
            <li>Presiona <strong>Guardar cambios</strong>.</li>
            <li>Espera <strong>~2 minutos</strong> mientras el sitio se actualiza automáticamente.</li>
            <li>Visita el sitio para ver los cambios aplicados.</li>
          </ol>
        </div>
      </div>
    </>
  );
}
