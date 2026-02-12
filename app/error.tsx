'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'var(--color-primary-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto var(--space-6)',
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-600)" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h1
          style={{
            fontSize: 'var(--text-2xl)',
            fontWeight: 700,
            color: 'var(--color-neutral-900)',
            marginBottom: 'var(--space-3)',
          }}
        >
          Algo salió mal
        </h1>
        <p
          style={{
            color: 'var(--color-neutral-500)',
            marginBottom: 'var(--space-8)',
            maxWidth: '420px',
            margin: '0 auto var(--space-8)',
          }}
        >
          Ocurrió un error inesperado. Puedes intentar de nuevo o visitar otra sección.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={reset} className="btn btn--primary">
            Intentar de nuevo
          </button>
          <a href="/" className="btn btn--secondary">
            Ir al inicio
          </a>
        </div>
      </div>
    </section>
  );
}
