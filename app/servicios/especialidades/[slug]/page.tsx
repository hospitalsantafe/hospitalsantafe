import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { especialidades, getEspecialidadBySlug, getAllSlugs, getRelatedEspecialidades } from '@/lib/data/especialidades';
import { getWhatsAppUrl, PHONE_LANDLINE, PHONE_LANDLINE_DISPLAY } from '@/lib/data/navigation';
import ScrollReveal from '@/components/common/ScrollReveal';
import '../../../servicios/servicios.css';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const especialidad = getEspecialidadBySlug(params.slug);
  if (!especialidad) return { title: 'Especialidad no encontrada' };

  return {
    title: especialidad.nombre,
    description: especialidad.descripcion,
  };
}

export default function EspecialidadPage({ params }: { params: { slug: string } }) {
  const especialidad = getEspecialidadBySlug(params.slug);

  if (!especialidad) {
    notFound();
  }

  const whatsappUrl = getWhatsAppUrl(`Hola, me gustaría agendar una cita de ${especialidad.nombre}`);
  const related = getRelatedEspecialidades(especialidad.slug, 4);

  return (
    <>
      {/* Hero */}
      <section
        className="page-hero page-hero--especialidad"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(250,250,250,0.92), rgba(250,250,250,0.98)), url(${especialidad.imagen})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="breadcrumb__separator">/</span>
            <Link href="/servicios">Servicios</Link>
            <span className="breadcrumb__separator">/</span>
            <Link href="/servicios/especialidades">Especialidades</Link>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">{especialidad.nombre}</span>
          </nav>
          <div className="especialidad-hero">
            {especialidad.urgencias && (
              <span className="badge badge--urgencias">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />
                </svg>
                Urgencias 24/7
              </span>
            )}
            <div className="especialidad-hero__icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d={especialidad.iconPath} />
              </svg>
            </div>
            <h1>{especialidad.nombre}</h1>
            {especialidad.subtitulo && (
              <p className="especialidad-hero__subtitulo">{especialidad.subtitulo}</p>
            )}
            <p className="page-hero__subtitle">{especialidad.descripcion}</p>
          </div>
        </div>
      </section>

      {/* Destacados */}
      {especialidad.destacados && especialidad.destacados.length > 0 && (
        <section className="especialidad-destacados">
          <div className="container">
            <ScrollReveal>
              <h2 data-animate>Servicios Destacados</h2>
              <div className="destacados-grid" data-animate>
                {especialidad.destacados.map((item, idx) => (
                  <div key={idx} className="destacado-card">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Contenido */}
      <section className="section">
        <div className="container">
          <ScrollReveal className="especialidad-layout">
            <div className="especialidad-main" data-animate="fade-right">
              <div className="especialidad-imagen">
                <Image
                  src={especialidad.imagen}
                  alt={especialidad.nombre}
                  width={800}
                  height={450}
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </div>

              <h2>Acerca de esta especialidad</h2>
              <p className="especialidad-descripcion">{especialidad.descripcionLarga}</p>

              <h3>Servicios que ofrecemos</h3>
              <ul className="especialidad-servicios">
                {especialidad.servicios.map((servicio, idx) => (
                  <li key={idx} className="especialidad-servicio-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{servicio}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="especialidad-sidebar" data-animate="fade-left">
              <div className="especialidad-info-card">
                <h3>Información</h3>

                <div className="especialidad-info-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div>
                    <strong>Horario</strong>
                    <p>{especialidad.horario}</p>
                  </div>
                </div>

                <div className="especialidad-info-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <strong>Ubicación</strong>
                    <p>Hospital Santa Fe, Calle Galeana No.22, Zapotlanejo, Jal.</p>
                  </div>
                </div>

                <a href={whatsappUrl} className="btn btn--whatsapp btn--medium" target="_blank" rel="noopener noreferrer" style={{ width: '100%', marginTop: 'var(--space-4)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Agendar cita
                </a>

                <a href={`tel:${PHONE_LANDLINE}`} className="btn btn--secondary btn--medium" style={{ width: '100%', marginTop: 'var(--space-2)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Llamar: {PHONE_LANDLINE_DISPLAY}
                </a>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      {/* Especialidades Relacionadas */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-center" data-animate style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--color-primary-900)', marginBottom: 'var(--space-2)' }}>
              Otras Especialidades
            </h2>
            <p className="text-center" data-animate style={{ color: 'var(--color-neutral-500)', marginBottom: 'var(--space-6)' }}>
              Conoce más de nuestras especialidades médicas
            </p>
            <div className="especialidades-relacionadas" data-animate>
              {related.map((rel) => (
                <Link key={rel.slug} href={`/servicios/especialidades/${rel.slug}`} className="especialidad-card-mini">
                  <div className="especialidad-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d={rel.iconPath} />
                    </svg>
                  </div>
                  <h4>{rel.nombre}</h4>
                  <p>{rel.descripcion}</p>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
