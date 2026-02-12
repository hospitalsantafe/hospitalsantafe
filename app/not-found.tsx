import Link from 'next/link';

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'var(--space-8)',
      }}
    >
      <div>
        <div
          style={{
            fontSize: 'clamp(5rem, 15vw, 10rem)',
            fontWeight: 800,
            lineHeight: 1,
            color: 'var(--color-primary-100)',
            letterSpacing: '-0.04em',
          }}
        >
          404
        </div>
        <h1
          style={{
            fontSize: 'var(--text-2xl)',
            fontWeight: 700,
            color: 'var(--color-neutral-900)',
            marginBottom: 'var(--space-3)',
          }}
        >
          Página no encontrada
        </h1>
        <p
          style={{
            color: 'var(--color-neutral-500)',
            marginBottom: 'var(--space-8)',
            maxWidth: '420px',
            margin: '0 auto var(--space-8)',
          }}
        >
          Lo sentimos, la página que buscas no existe o fue movida.
          Te invitamos a explorar nuestros servicios.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn--primary">
            Ir al inicio
          </Link>
          <Link href="/servicios" className="btn btn--secondary">
            Ver servicios
          </Link>
          <Link href="/contacto" className="btn btn--secondary">
            Contacto
          </Link>
        </div>
      </div>
    </section>
  );
}
