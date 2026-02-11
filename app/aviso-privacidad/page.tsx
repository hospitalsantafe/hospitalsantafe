import Link from 'next/link';
import '../servicios/servicios.css';

export const metadata = {
  title: 'Aviso de Privacidad | Hospital Santa Fe',
  description: 'Aviso de privacidad del Hospital Santa Fe. Conoce cómo protegemos tus datos personales.',
};

export default function AvisoPrivacidadPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">Aviso de Privacidad</span>
          </nav>
          <h1>Aviso de Privacidad</h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="legal-content">
            <h2>Responsable del tratamiento de datos personales</h2>
            <p>
              <strong>Hospital Santa Fe</strong>, con domicilio en Calle Galeana No.22, Santa Fe,
              Zapotlanejo, Jalisco, México, es responsable del tratamiento de sus datos personales.
            </p>

            <h2>Datos personales que recabamos</h2>
            <p>
              Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar
              sus datos personales de distintas formas: cuando usted nos los proporciona directamente,
              cuando visita nuestro sitio de internet o utiliza nuestros servicios en línea, y cuando
              obtenemos información a través de otras fuentes permitidas por la ley.
            </p>
            <p>Los datos personales que recabamos incluyen:</p>
            <ul>
              <li>Nombre completo</li>
              <li>Dirección</li>
              <li>Teléfono (fijo y/o celular)</li>
              <li>Correo electrónico</li>
              <li>Datos de salud (historial clínico, diagnósticos, tratamientos)</li>
              <li>Datos de identificación (INE, CURP)</li>
            </ul>

            <h2>Finalidades del tratamiento</h2>
            <p>Sus datos personales serán utilizados para las siguientes finalidades:</p>
            <ul>
              <li>Prestación de servicios médicos y hospitalarios</li>
              <li>Elaboración de expediente clínico</li>
              <li>Comunicación con el paciente y/o sus familiares sobre su estado de salud</li>
              <li>Facturación y cobranza de servicios</li>
              <li>Cumplimiento de obligaciones legales en materia de salud</li>
              <li>Contacto para seguimiento post-hospitalario</li>
            </ul>

            <h2>Transferencia de datos</h2>
            <p>
              Sus datos personales podrán ser transferidos y tratados por terceros únicamente
              en los casos previstos por la ley, tales como: autoridades sanitarias, aseguradoras
              (con su consentimiento), y laboratorios de referencia cuando sea necesario para su
              diagnóstico o tratamiento.
            </p>

            <h2>Derechos ARCO</h2>
            <p>
              Usted tiene derecho a conocer qué datos personales tenemos, para qué los utilizamos
              y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar
              la corrección de su información personal en caso de que esté desactualizada, sea
              inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o
              bases de datos cuando considere que la misma no está siendo utilizada conforme a
              los principios, deberes y obligaciones previstas en la normativa (Cancelación); así
              como oponerse al uso de sus datos personales para fines específicos (Oposición).
            </p>

            <h2>Contacto</h2>
            <p>
              Para el ejercicio de sus derechos ARCO o cualquier duda sobre el presente aviso
              de privacidad, puede contactarnos a través de:
            </p>
            <ul>
              <li><strong>Teléfono:</strong> 333-119-8625</li>
              <li><strong>Dirección:</strong> Calle Galeana No.22, Santa Fe, Zapotlanejo, Jalisco</li>
              <li><strong>Horario de atención:</strong> Lunes a Viernes de 9:00 a 18:00 hrs</li>
            </ul>

            <h2>Modificaciones al aviso de privacidad</h2>
            <p>
              Nos reservamos el derecho de efectuar en cualquier momento modificaciones o
              actualizaciones al presente aviso de privacidad. Estas modificaciones estarán
              disponibles a través de nuestra página de internet.
            </p>

            <p style={{ marginTop: 'var(--space-8)', fontStyle: 'italic', color: 'var(--color-neutral-500)' }}>
              Última actualización: Febrero 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
