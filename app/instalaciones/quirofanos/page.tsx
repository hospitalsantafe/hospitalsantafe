import Link from 'next/link';
import ScrollReveal from '@/components/common/ScrollReveal';
import VideoPlayer from '@/components/common/VideoPlayer';
import { getWhatsAppUrl } from '@/lib/data/navigation';
import '../../servicios/servicios.css';

export const metadata = {
  title: 'Quirófanos',
  description: 'Quirófanos equipados para procedimientos quirúrgicos seguros en Hospital Santa Fe, Zapotlanejo. Personal capacitado, protocolos de seguridad y atención de calidad.',
};

const quirofanoImages = [
  { src: '/images/hospital/instalaciones/quirofanos-1.webp', alt: 'Quirófano Hospital Santa Fe 1' },
  { src: '/images/hospital/instalaciones/quirofanos-2.webp', alt: 'Quirófano Hospital Santa Fe 2' },
  { src: '/images/hospital/instalaciones/quirofanos-3.webp', alt: 'Quirófano Hospital Santa Fe 3' },
  { src: '/images/hospital/instalaciones/quirofanos-4.webp', alt: 'Quirófano Hospital Santa Fe 4' },
  { src: '/images/hospital/instalaciones/quirofanos-5.webp', alt: 'Quirófano Hospital Santa Fe 5' },
  { src: '/images/hospital/instalaciones/quirofanos-6.webp', alt: 'Quirófano Hospital Santa Fe 6' },
  { src: '/images/hospital/instalaciones/quirofanos-7.webp', alt: 'Quirófano Hospital Santa Fe 7' },
];

export default function QuirofanosPage() {
  return (
    <>
      <section className="page-hero page-hero--instalaciones">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="breadcrumb__separator">/</span>
            <Link href="/instalaciones">Instalaciones</Link>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">Quirófanos</span>
          </nav>
          <h1>Quirófanos</h1>
          <p className="page-hero__subtitle">
            Equipados para su Seguridad y Bienestar
          </p>
        </div>
      </section>

      {/* Texto principal + Video */}
      <section className="section">
        <div className="container">
          <div className="content-split">
            <div className="content-text">
              <ScrollReveal>
                <h2 data-animate>Equipados para su Seguridad y Bienestar</h2>
                <p data-animate>
                  Nuestros quirófanos cuentan con el equipamiento necesario para la realización de diversos
                  procedimientos quirúrgicos, brindando un entorno seguro y adecuado para pacientes y especialistas.
                </p>
                <p data-animate>
                  Cada cirugía es realizada por médicos capacitados, apoyados por personal de enfermería y equipos
                  de trabajo comprometidos con la calidad de la atención. Asimismo, seguimos protocolos de seguridad
                  que nos permiten ofrecer una experiencia confiable antes, durante y después de cada procedimiento.
                </p>
                <p data-animate>
                  En Hospital Santa Fe trabajamos para que usted y su familia tengan la tranquilidad de recibir
                  atención médica con profesionalismo, seguridad y calidad.
                </p>
              </ScrollReveal>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <VideoPlayer
                src="/videos/quirofanos.mp4"
                style={{ width: '100%', maxWidth: '300px', maxHeight: '500px', aspectRatio: '9/16' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galería de fotos */}
      <section className="section" style={{ background: 'var(--color-neutral-50)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center" data-animate>
              <h2>Nuestros Quirófanos</h2>
              <p style={{ maxWidth: '700px', margin: '0 auto var(--space-8)' }}>
                Conoce los espacios donde nuestros especialistas realizan cada procedimiento con los más altos estándares.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="quirofano-gallery" data-animate>
              {quirofanoImages.map((img, idx) => (
                <div key={idx} className="quirofano-gallery__item">
                  <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-final">
        <div className="container">
          <ScrollReveal>
            <div className="cta-final__content" data-animate>
              <h2>¿Tienes dudas sobre un procedimiento?</h2>
              <p>Contáctanos para recibir información, solicitar una cotización o agendar tu procedimiento. Con gusto te atendemos a la brevedad.</p>
              <div className="cta-final__buttons">
                <a
                  href={getWhatsAppUrl('Hola, me gustaría información sobre los quirófanos y procedimientos quirúrgicos')}
                  className="btn btn--whatsapp btn--large"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Escríbenos por WhatsApp
                </a>
                <Link href="/servicios/paquetes" className="btn btn--secondary btn--large">
                  Ver procedimientos quirúrgicos
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
