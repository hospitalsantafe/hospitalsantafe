import Link from 'next/link';
import { categoriasPaquetes } from '@/lib/data/paquetes';
import '../servicios.css';

export const metadata = {
  title: 'Paquetes Quirúrgicos y de Maternidad | Hospital Santa Fe',
  description: 'Paquetes a precio cerrado: maternidad desde $11,000, artroscopía desde $17,500, cirugía bariátrica, cirugía plástica y más de 14 procedimientos quirúrgicos.',
};

export default function PaquetesPage() {
  return (
    <>
      <section className="page-hero page-hero--paquetes">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="breadcrumb__separator">/</span>
            <Link href="/servicios">Servicios</Link>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">Paquetes</span>
          </nav>
          <h1>Paquetes Quirúrgicos</h1>
          <p className="page-hero__subtitle">
            Paquetes a precio cerrado que incluyen hospitalización, anestesia, material quirúrgico y medicamentos.
            Transparencia total en precios, sin sorpresas.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {categoriasPaquetes.map((categoria) => (
            <div key={categoria.id} id={categoria.id} className="paquete-categoria">
              <h2 className="paquete-categoria__title">{categoria.nombre}</h2>
              <p className="paquete-categoria__desc">{categoria.descripcion}</p>

              <div className="paquetes-grid">
                {categoria.paquetes.map((paquete) => (
                  <div key={paquete.id} className={`paquete-card ${paquete.destacado ? 'paquete-card--destacado' : ''}`}>
                    {paquete.destacado && (
                      <span className="paquete-card__badge">Más solicitado</span>
                    )}
                    <h3 className="paquete-card__nombre">{paquete.nombre}</h3>
                    <div className="paquete-card__precio">{paquete.precio}</div>

                    <ul className="paquete-card__lista">
                      {paquete.incluye.map((item, idx) => (
                        <li key={idx}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {paquete.nota && (
                      <p className="paquete-card__nota">{paquete.nota}</p>
                    )}

                    <a
                      href={`https://wa.me/523331198625?text=${encodeURIComponent(`Hola, me interesa el paquete de ${paquete.nombre}`)}`}
                      className="btn btn--whatsapp btn--medium"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ width: '100%' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Consultar por WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta-final">
        <div className="container">
          <div className="cta-final__content">
            <h2>¿Necesitas más información sobre un paquete?</h2>
            <p>Contáctanos para resolver tus dudas o agendar tu procedimiento. Ofrecemos facilidades de pago.</p>
            <div className="cta-final__buttons">
              <a href="https://wa.me/523331198625?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20paquetes%20quir%C3%BArgicos" className="btn btn--whatsapp btn--large" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Escríbenos por WhatsApp
              </a>
              <a href="tel:7344205" className="btn btn--secondary btn--large">
                Llámanos: 73-44205
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
