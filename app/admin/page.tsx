import { loginAction } from './actions';

interface Props {
  searchParams: Promise<{ error?: string }>;
}

export default async function AdminLoginPage({ searchParams }: Props) {
  const params = await searchParams;
  const hasError = params.error === '1';
  const hasConfigError = params.error === 'config';

  return (
    <div className="admin-login-wrap">
      <div className="admin-login-card">
        <img
          src="/images/logo-fondo-blanco.webp"
          alt="Hospital Santa Fe"
        />
        <h1>Panel de Administración</h1>
        <h2>Hospital Santa Fe</h2>

        {hasError && (
          <div className="admin-error-msg" style={{ marginBottom: '16px' }}>
            Contraseña incorrecta. Inténtalo de nuevo.
          </div>
        )}

        {hasConfigError && (
          <div className="admin-error-msg" style={{ marginBottom: '16px' }}>
            Error de configuración. Verifica la variable ADMIN_PASSWORD en Vercel.
          </div>
        )}

        <form className="admin-login-form" action={loginAction}>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
            autoComplete="current-password"
          />
          <button type="submit" className="admin-btn-primary">
            Entrar al panel
          </button>
        </form>

        <p style={{ marginTop: '20px', fontSize: '12px', color: '#aaa' }}>
          Acceso restringido — Solo personal autorizado
        </p>
      </div>
    </div>
  );
}
