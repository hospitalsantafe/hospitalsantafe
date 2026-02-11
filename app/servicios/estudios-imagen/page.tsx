import Link from 'next/link';
import '../servicios.css';

export const metadata = {
  title: 'Estudios de Imagen | Hospital Santa Fe',
  description: 'Estudios de imagen con tecnología de vanguardia: Rayos X digital, Ultrasonido 4D, Electrocardiograma, Mastografía y más en Hospital Santa Fe, Zapotlanejo.',
};

const estudios = [
  {
    nombre: 'Rayos X Digital',
    descripcion: 'Sistema de radiología digital de alta resolución para diagnósticos precisos de huesos, articulaciones, tórax y abdomen. Resultados inmediatos con menor exposición a radiación.',
    precio: 'Desde $200',
    preparacion: 'No requiere preparación especial. Retire objetos metálicos de la zona a estudiar.',
    tiempo: 'Resultados inmediatos',
    iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    nombre: 'Ultrasonido',
    descripcion: 'Estudios de ultrasonido con tecnología 4D y Doppler a color. Ideal para seguimiento de embarazo, estudios abdominales, renales, hepáticos, tiroides y tejidos blandos.',
    precio: 'Desde $350',
    preparacion: 'Abdominal: ayuno de 6-8 horas y vejiga llena. Obstétrico: vejiga llena. Otros: sin preparación.',
    tiempo: 'Resultados en 24 horas',
    iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    nombre: 'Electrocardiograma (ECG)',
    descripcion: 'Registro detallado de la actividad eléctrica del corazón para detectar arritmias, infartos, hipertrofias y otras alteraciones cardíacas. Procedimiento rápido e indoloro.',
    precio: '$150',
    preparacion: 'No requiere preparación. Evite cremas corporales en el área del pecho.',
    tiempo: 'Resultados inmediatos',
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    nombre: 'Mastografía',
    descripcion: 'Estudio esencial para la detección temprana de cáncer de mama. Recomendado anualmente para mujeres a partir de los 40 años o antes si existen factores de riesgo.',
    precio: '$450',
    preparacion: 'No use desodorante, talco ni cremas el día del estudio. Programe después de su periodo menstrual.',
    tiempo: 'Resultados en 48 horas',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    nombre: 'Ultrasonido Obstétrico 4D',
    descripcion: 'Seguimiento completo del embarazo con imágenes tridimensionales en tiempo real. Permite observar los movimientos y expresiones faciales del bebé con claridad.',
    precio: 'Desde $500',
    preparacion: 'Vejiga moderadamente llena. No requiere ayuno.',
    tiempo: 'Resultados inmediatos con imágenes impresas',
    iconPath: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    nombre: 'Doppler Vascular',
    descripcion: 'Estudio especializado para evaluar el flujo sanguíneo en arterias y venas. Detecta trombosis, várices, insuficiencia venosa y otras alteraciones vasculares.',
    precio: 'Desde $600',
    preparacion: 'Dependiendo de la zona: ayuno de 6 horas para Doppler abdominal. Sin preparación para extremidades.',
    tiempo: 'Resultados en 24-48 horas',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
];

export default function EstudiosImagenPage() {
  return (
    <>
      <section className="page-hero page-hero--estudios">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="breadcrumb__separator">/</span>
            <Link href="/servicios">Servicios</Link>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">Estudios de Imagen</span>
          </nav>
          <h1>Estudios de Imagen</h1>
          <p className="page-hero__subtitle">
            Contamos con equipos de última generación para ofrecer diagnósticos precisos y oportunos. Nuestro personal técnico está altamente capacitado para brindarte la mejor atención.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="estudios-grid">
            {estudios.map((estudio, index) => (
              <div key={index} className="estudio-card">
                <div className="estudio-card__header">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d={estudio.iconPath} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3>{estudio.nombre}</h3>
                </div>
                <p>{estudio.descripcion}</p>
                <div className="estudio-card__details">
                  <div className="estudio-detail">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{estudio.tiempo}</span>
                  </div>
                  <div className="estudio-detail">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span>{estudio.preparacion}</span>
                  </div>
                </div>
                <div className="precio">{estudio.precio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="info-box">
            <h3>Información Importante</h3>
            <p>
              <strong>Resultados rápidos:</strong> La mayoría de nuestros estudios están disponibles en un plazo de 24 a 48 horas. Los rayos X y electrocardiogramas tienen resultados inmediatos.
            </p>
            <p>
              <strong>Horarios:</strong> Servicio de lunes a sábado de 7:00 AM a 8:00 PM. Urgencias con disponibilidad las 24 horas.
            </p>
            <p>
              <strong>Precios accesibles:</strong> Todos nuestros estudios tienen precios competitivos. Pregunta por descuentos en paquetes de estudios combinados.
            </p>
          </div>
        </div>
      </section>

      <section className="section cta-final">
        <div className="container">
          <div className="cta-final__content">
            <h2>¿Necesitas agendar un estudio?</h2>
            <p>Contáctanos por WhatsApp o llámanos para programar tu cita. No necesitas referencia médica para la mayoría de los estudios.</p>
            <div className="cta-final__buttons">
              <a
                href="https://wa.me/523331198625?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20un%20estudio%20de%20imagen"
                className="btn btn--whatsapp btn--large"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Agendar por WhatsApp
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
