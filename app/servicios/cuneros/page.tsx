import Link from 'next/link';
import '../servicios.css';

export const metadata = {
  title: 'Cuneros y Neonatología',
  description: 'Cunero con atención especializada las 24 horas, enfermeras neonatólogas, monitoreo continuo, tamiz neonatal y más en Hospital Santa Fe, Zapotlanejo.',
};

const serviciosCunero = [
  {
    titulo: 'Monitoreo continuo 24/7',
    descripcion: 'Vigilancia constante de signos vitales del recién nacido con equipo de última generación.',
  },
  {
    titulo: 'Enfermeras especializadas',
    descripcion: 'Personal de enfermería con especialidad en neonatología y cuidados del recién nacido.',
  },
  {
    titulo: 'Control de signos vitales',
    descripcion: 'Medición periódica de temperatura, frecuencia cardíaca, respiración y saturación de oxígeno.',
  },
  {
    titulo: 'Tamiz neonatal',
    descripcion: 'Prueba de detección temprana de enfermedades metabólicas realizada en las primeras horas de vida.',
  },
  {
    titulo: 'Vacunación inicial',
    descripcion: 'Aplicación de las primeras vacunas (BCG y Hepatitis B) según el esquema nacional de vacunación.',
  },
  {
    titulo: 'Registro civil en el hospital',
    descripcion: 'Trámite del acta de nacimiento sin salir del hospital, con apoyo del personal administrativo.',
  },
  {
    titulo: 'Prueba de audición',
    descripcion: 'Tamiz auditivo neonatal para detectar problemas de audición desde el nacimiento.',
  },
  {
    titulo: 'Asesoría en lactancia materna',
    descripcion: 'Orientación y apoyo profesional para iniciar y mantener una lactancia exitosa.',
  },
];

export default function CunerosPage() {
  return (
    <>
      <section className="page-hero page-hero--cuneros">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="breadcrumb__separator">/</span>
            <Link href="/servicios">Servicios</Link>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">Cuneros</span>
          </nav>
          <h1>Cuneros y Neonatología</h1>
          <p className="page-hero__subtitle">
            Atención especializada para tu recién nacido con personal capacitado, equipo moderno y monitoreo las 24 horas del día.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-split">
            <div className="content-text">
              <h2>Cuidado Neonatal de Calidad</h2>
              <p>
                En Hospital Santa Fe comprendemos que los primeros días de vida de tu bebé son los más importantes.
                Nuestro cunero está diseñado para brindar un ambiente seguro, cálido y controlado donde tu recién
                nacido recibirá la mejor atención médica desde el primer momento.
              </p>
              <p>
                Contamos con personal de enfermería especializado en neonatología que vigila a cada bebé
                de manera individualizada, asegurando que todas sus necesidades sean atendidas oportunamente.
              </p>

              <h3>Servicios incluidos</h3>
              <ul className="servicios-lista">
                {serviciosCunero.map((servicio, index) => (
                  <li key={index}>
                    <strong>{servicio.titulo}:</strong> {servicio.descripcion}
                  </li>
                ))}
              </ul>
            </div>

            <div className="content-image">
              <img
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=700&fit=crop"
                alt="Cunero - Cuidado neonatal"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="info-adicional">
            <h3>Información para Padres</h3>
            <div className="info-grid">
              <div className="info-item">
                <h4>Cunero de Cuidados Especiales</h4>
                <p>
                  Para bebés que requieren atención médica adicional, contamos con cunero de cuidados
                  intermedios equipado con incubadoras, monitores cardiorrespiratorios y equipo de fototerapia
                  para el tratamiento de ictericia neonatal.
                </p>
              </div>
              <div className="info-item">
                <h4>Horarios de Visita</h4>
                <p>
                  Los padres pueden visitar a su bebé en cualquier momento. Para familiares,
                  el horario de visita es de 10:00 AM a 8:00 PM. Se permite máximo 2 visitantes
                  a la vez para mantener un ambiente tranquilo.
                </p>
              </div>
              <div className="info-item">
                <h4>Alojamiento Conjunto</h4>
                <p>
                  Cuando las condiciones del bebé y la mamá lo permiten, fomentamos el alojamiento
                  conjunto para fortalecer el vínculo madre-hijo y facilitar la lactancia materna.
                </p>
              </div>
              <div className="info-item">
                <h4>Alta del Recién Nacido</h4>
                <p>
                  Antes del alta, el pediatra realiza una revisión completa del bebé y orienta
                  a los padres sobre cuidados en casa, alimentación, signos de alarma y las citas
                  de seguimiento necesarias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-final">
        <div className="container">
          <div className="cta-final__content">
            <h2>¿Esperas un bebé?</h2>
            <p>Conoce nuestros paquetes de maternidad que incluyen el servicio de cunero. Agenda una visita para conocer nuestras instalaciones.</p>
            <div className="cta-final__buttons">
              <a
                href="https://wa.me/523331198625?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20los%20paquetes%20de%20maternidad%20y%20cuneros"
                className="btn btn--whatsapp btn--large"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Información por WhatsApp
              </a>
              <Link href="/servicios/paquetes" className="btn btn--secondary btn--large">
                Ver paquetes de maternidad
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
