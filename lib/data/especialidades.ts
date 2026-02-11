export interface Especialidad {
  slug: string;
  nombre: string;
  descripcion: string;
  descripcionLarga: string;
  iconPath: string;
  servicios: string[];
  horario: string;
}

export const especialidades: Especialidad[] = [
  {
    slug: "medicina-general",
    nombre: "Medicina General",
    descripcion: "Atención primaria integral para toda la familia, con enfoque preventivo y curativo.",
    descripcionLarga: "Nuestro servicio de Medicina General ofrece atención primaria integral para pacientes de todas las edades. Realizamos diagnósticos oportunos, tratamientos preventivos y curativos, así como seguimiento continuo de enfermedades crónicas. Nuestros médicos generales son el primer punto de contacto para cualquier problema de salud y coordinan con especialistas cuando es necesario.",
    iconPath: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
    servicios: [
      "Consulta médica general",
      "Check-ups preventivos",
      "Control de enfermedades crónicas (diabetes, hipertensión)",
      "Certificados médicos",
      "Valoración preoperatoria",
      "Referencia a especialistas"
    ],
    horario: "Lunes a Viernes 8:00 - 20:00 | Sábado 9:00 - 14:00"
  },
  {
    slug: "ginecologia-obstetricia",
    nombre: "Ginecología y Obstetricia",
    descripcion: "Cuidado integral de la mujer: embarazo, parto, salud reproductiva y ginecológica.",
    descripcionLarga: "Nuestro departamento de Ginecología y Obstetricia brinda atención especializada en todas las etapas de la vida de la mujer. Desde el control prenatal hasta el parto, cuidados postparto, salud reproductiva y prevención de enfermedades ginecológicas. Contamos con paquetes completos de maternidad y tecnología de vanguardia para garantizar la seguridad de mamá y bebé.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    servicios: [
      "Control prenatal",
      "Parto natural y cesárea",
      "Ultrasonido obstétrico",
      "Papanicolaou y colposcopía",
      "Planificación familiar",
      "Atención de embarazo de alto riesgo",
      "Control postparto"
    ],
    horario: "Lunes a Viernes 9:00 - 19:00 | Sábado 9:00 - 14:00"
  },
  {
    slug: "pediatria",
    nombre: "Pediatría",
    descripcion: "Atención especializada para recién nacidos, niños y adolescentes.",
    descripcionLarga: "Nuestros pediatras brindan atención médica integral desde el nacimiento hasta la adolescencia. Ofrecemos consultas de control del niño sano, diagnóstico y tratamiento de enfermedades pediátricas, esquemas de vacunación completos y orientación nutricional para el desarrollo óptimo de sus hijos.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    servicios: [
      "Control del niño sano",
      "Vacunación",
      "Enfermedades respiratorias e infecciosas",
      "Nutrición infantil",
      "Desarrollo y crecimiento",
      "Atención de urgencias pediátricas"
    ],
    horario: "Lunes a Viernes 9:00 - 19:00 | Sábado 9:00 - 14:00"
  },
  {
    slug: "cardiologia",
    nombre: "Cardiología",
    descripcion: "Diagnóstico y tratamiento de enfermedades del corazón y sistema circulatorio.",
    descripcionLarga: "El servicio de Cardiología del Hospital Santa Fe se especializa en la prevención, diagnóstico y tratamiento de enfermedades cardiovasculares. Contamos con electrocardiogramas, pruebas de esfuerzo y monitoreo continuo para brindar un diagnóstico preciso y un plan de tratamiento personalizado.",
    iconPath: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    servicios: [
      "Electrocardiograma",
      "Ecocardiograma",
      "Prueba de esfuerzo",
      "Monitoreo Holter 24hrs",
      "Valoración de riesgo cardiovascular",
      "Tratamiento de hipertensión y arritmias"
    ],
    horario: "Lunes a Viernes 9:00 - 18:00 | Previa cita"
  },
  {
    slug: "traumatologia-ortopedia",
    nombre: "Traumatología y Ortopedia",
    descripcion: "Tratamiento de fracturas, lesiones musculoesqueléticas y cirugía ortopédica.",
    descripcionLarga: "Nuestros traumatólogos y ortopedistas atienden lesiones del sistema musculoesquelético, desde fracturas y esguinces hasta cirugías reconstructivas. Ofrecemos tratamiento conservador y quirúrgico, incluyendo artroscopia y reemplazo articular, para restaurar la movilidad y calidad de vida de nuestros pacientes.",
    iconPath: "M8 2v2H4v4H2V4a2 2 0 0 1 2-2h4zm8 0h4a2 2 0 0 1 2 2v4h-2V4h-4V2zM2 16v4a2 2 0 0 0 2 2h4v-2H4v-4H2zm20 0v4h-4v2h4a2 2 0 0 0 2-2v-4h-2zM7 7h10v10H7V7z",
    servicios: [
      "Atención de fracturas y luxaciones",
      "Artroscopía de rodilla y hombro",
      "Cirugía de columna",
      "Reemplazo articular (cadera, rodilla)",
      "Rehabilitación ortopédica",
      "Férulas e inmovilización"
    ],
    horario: "Lunes a Viernes 9:00 - 18:00 | Urgencias 24/7"
  },
  {
    slug: "cirugia-general",
    nombre: "Cirugía General",
    descripcion: "Procedimientos quirúrgicos abdominales, laparoscópicos y de mínima invasión.",
    descripcionLarga: "El servicio de Cirugía General realiza procedimientos quirúrgicos programados y de urgencia. Nos especializamos en cirugía laparoscópica de mínima invasión, lo que permite menor dolor, recuperación más rápida y menos cicatrices. Atendemos hernias, vesícula, apéndice y una amplia gama de patologías quirúrgicas.",
    iconPath: "M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z",
    servicios: [
      "Colecistectomía (vesícula)",
      "Apendicectomía",
      "Hernioplastía (inguinal, umbilical, hiatal)",
      "Cirugía laparoscópica",
      "Cirugía de tiroides",
      "Cirugía de emergencia"
    ],
    horario: "Lunes a Viernes 8:00 - 18:00 | Urgencias 24/7"
  },
  {
    slug: "medicina-interna",
    nombre: "Medicina Interna",
    descripcion: "Diagnóstico y manejo integral de enfermedades complejas en adultos.",
    descripcionLarga: "El internista es el especialista en el diagnóstico y tratamiento de enfermedades complejas en pacientes adultos. En Hospital Santa Fe, nuestros internistas manejan enfermedades crónico-degenerativas, infecciones complejas, y realizan valoraciones integrales para pacientes hospitalizados, coordinando con otros especialistas según las necesidades del paciente.",
    iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
    servicios: [
      "Diagnóstico de enfermedades complejas",
      "Manejo de diabetes y enfermedades metabólicas",
      "Control de hipertensión arterial",
      "Enfermedades respiratorias crónicas",
      "Valoración integral hospitalaria",
      "Coordinación multidisciplinaria"
    ],
    horario: "Lunes a Viernes 9:00 - 18:00 | Previa cita"
  },
  {
    slug: "anestesiologia",
    nombre: "Anestesiología",
    descripcion: "Manejo del dolor y anestesia segura para procedimientos quirúrgicos.",
    descripcionLarga: "Nuestros anestesiólogos garantizan la seguridad y confort del paciente durante cualquier procedimiento quirúrgico. Ofrecemos anestesia general, regional y local, así como manejo avanzado del dolor postoperatorio. Realizamos valoración preanestésica completa para minimizar riesgos y personalizar el tipo de anestesia según cada paciente.",
    iconPath: "M4.5 11H11v-1H7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H11V4.5c0-.28.22-.5.5-.5s.5.22.5.5V9h3.5c.28 0 .5.22.5.5s-.22.5-.5.5H12v1h4.5c.28 0 .5.22.5.5s-.22.5-.5.5H12v4.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V12H4.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z",
    servicios: [
      "Anestesia general",
      "Anestesia regional (epidural, espinal)",
      "Anestesia local",
      "Valoración preanestésica",
      "Manejo del dolor postoperatorio",
      "Bloqueos nerviosos para maternidad"
    ],
    horario: "Disponible según programación quirúrgica"
  },
  {
    slug: "urologia",
    nombre: "Urología",
    descripcion: "Tratamiento de enfermedades del tracto urinario y sistema reproductor masculino.",
    descripcionLarga: "El servicio de Urología atiende padecimientos del aparato urinario en hombres y mujeres, así como del sistema reproductor masculino. Nuestros urólogos diagnostican y tratan cálculos renales, infecciones urinarias, problemas de próstata y realizan procedimientos quirúrgicos urológicos con técnicas de mínima invasión.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    servicios: [
      "Cálculos renales y vías urinarias",
      "Enfermedades de próstata",
      "Infecciones urinarias recurrentes",
      "Incontinencia urinaria",
      "Cirugía urológica de mínima invasión",
      "Circuncisión"
    ],
    horario: "Lunes a Viernes 10:00 - 18:00 | Previa cita"
  },
  {
    slug: "otorrinolaringologia",
    nombre: "Otorrinolaringología",
    descripcion: "Especialistas en oído, nariz, garganta y cirugía de cabeza y cuello.",
    descripcionLarga: "Nuestros otorrinolaringólogos atienden padecimientos del oído, nariz, garganta y estructuras relacionadas de cabeza y cuello. Desde infecciones recurrentes hasta cirugías correctivas como amigdalectomía, septoplastía y colocación de tubos de ventilación. Atendemos tanto a pacientes adultos como pediátricos.",
    iconPath: "M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9z",
    servicios: [
      "Amigdalectomía y adenoidectomía",
      "Septoplastía (desviación de tabique)",
      "Colocación de tubos de ventilación",
      "Tratamiento de sinusitis crónica",
      "Vértigo y problemas de equilibrio",
      "Ronquido y apnea del sueño"
    ],
    horario: "Lunes a Viernes 10:00 - 18:00 | Previa cita"
  },
  {
    slug: "oftalmologia",
    nombre: "Oftalmología",
    descripcion: "Cuidado integral de la visión y tratamiento de enfermedades oculares.",
    descripcionLarga: "El servicio de Oftalmología ofrece atención completa para la salud visual. Realizamos exámenes de la vista, diagnóstico de enfermedades oculares como glaucoma, cataratas y retinopatía diabética, así como procedimientos correctivos. Contamos con equipo de diagnóstico moderno para brindar atención de calidad.",
    iconPath: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
    servicios: [
      "Examen de la vista",
      "Diagnóstico de glaucoma",
      "Cirugía de cataratas",
      "Retinopatía diabética",
      "Graduación de lentes",
      "Tratamiento de ojo seco"
    ],
    horario: "Lunes a Viernes 10:00 - 17:00 | Previa cita"
  },
  {
    slug: "dermatologia",
    nombre: "Dermatología",
    descripcion: "Diagnóstico y tratamiento de enfermedades de la piel, cabello y uñas.",
    descripcionLarga: "Nuestros dermatólogos atienden una amplia gama de padecimientos de la piel, desde acné y dermatitis hasta detección temprana de cáncer de piel. Ofrecemos tratamientos médicos y procedimientos estéticos menores, siempre priorizando la salud y bienestar del paciente.",
    iconPath: "M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31A7.98 7.98 0 0 0 12 21.58a7.98 7.98 0 0 0 5.66-2.34c3.12-3.12 3.12-8.19 0-11.31z",
    servicios: [
      "Tratamiento de acné",
      "Dermatitis y alergias cutáneas",
      "Detección de cáncer de piel",
      "Tratamiento de psoriasis",
      "Micosis (hongos)",
      "Biopsias de piel"
    ],
    horario: "Lunes a Viernes 10:00 - 18:00 | Previa cita"
  },
  {
    slug: "gastroenterologia",
    nombre: "Gastroenterología",
    descripcion: "Diagnóstico y tratamiento de enfermedades del aparato digestivo.",
    descripcionLarga: "El servicio de Gastroenterología del Hospital Santa Fe se especializa en el diagnóstico y tratamiento de enfermedades del sistema digestivo, incluyendo esófago, estómago, intestinos, hígado, vesícula y páncreas. Realizamos endoscopías diagnósticas y terapéuticas para una atención integral.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v-2h-2v2zm0-10h2v6h-2V6z",
    servicios: [
      "Endoscopía alta y baja",
      "Colonoscopía",
      "Tratamiento de gastritis y úlceras",
      "Enfermedad por reflujo (ERGE)",
      "Síndrome de intestino irritable",
      "Enfermedades hepáticas"
    ],
    horario: "Lunes a Viernes 9:00 - 18:00 | Previa cita"
  },
  {
    slug: "neumologia",
    nombre: "Neumología",
    descripcion: "Especialistas en enfermedades respiratorias y pulmonares.",
    descripcionLarga: "Nuestros neumólogos diagnostican y tratan enfermedades del sistema respiratorio, desde asma y EPOC hasta neumonías complejas y trastornos del sueño. Contamos con espirometría y otros estudios funcionales para un diagnóstico preciso y un tratamiento efectivo.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z",
    servicios: [
      "Espirometría",
      "Tratamiento de asma",
      "EPOC (enfermedad pulmonar obstructiva crónica)",
      "Neumonía y bronquitis",
      "Estudio de sueño",
      "Rehabilitación pulmonar"
    ],
    horario: "Lunes a Viernes 10:00 - 18:00 | Previa cita"
  },
  {
    slug: "neurologia",
    nombre: "Neurología",
    descripcion: "Diagnóstico y tratamiento de enfermedades del sistema nervioso.",
    descripcionLarga: "El servicio de Neurología atiende padecimientos del cerebro, médula espinal y nervios periféricos. Nuestros neurólogos diagnostican y tratan epilepsia, migraña, neuropatías, trastornos del movimiento y enfermedades neurodegenerativas con un enfoque integral y personalizado.",
    iconPath: "M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z",
    servicios: [
      "Diagnóstico de epilepsia",
      "Tratamiento de migraña y cefaleas",
      "Neuropatías (diabética, periférica)",
      "Enfermedad de Parkinson",
      "Electroencefalograma",
      "Evaluación de deterioro cognitivo"
    ],
    horario: "Lunes a Viernes 10:00 - 17:00 | Previa cita"
  },
  {
    slug: "psicologia",
    nombre: "Psicología",
    descripcion: "Atención de salud mental, terapia individual, de pareja y familiar.",
    descripcionLarga: "Nuestro servicio de Psicología ofrece atención profesional para la salud mental y emocional. Brindamos terapia individual, de pareja y familiar, así como evaluaciones psicológicas y acompañamiento en situaciones de crisis. La salud mental es parte fundamental de la atención integral que ofrecemos en Hospital Santa Fe.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    servicios: [
      "Terapia individual",
      "Terapia de pareja",
      "Terapia familiar",
      "Ansiedad y depresión",
      "Manejo de estrés",
      "Evaluación psicológica"
    ],
    horario: "Lunes a Viernes 9:00 - 19:00 | Previa cita"
  },
  {
    slug: "nutriologia",
    nombre: "Nutriología",
    descripcion: "Planes de alimentación personalizados para una vida saludable.",
    descripcionLarga: "El servicio de Nutriología ofrece planes alimentarios personalizados para todas las etapas de la vida. Nuestros nutriólogos atienden sobrepeso, obesidad, diabetes, embarazo, lactancia y necesidades nutricionales específicas. Trabajamos de la mano con otros especialistas para lograr resultados integrales en la salud del paciente.",
    iconPath: "M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-4.58-6.54-5.63-8.5-5.94l.49 3.93L1 13.06V19h15.03v-4.01z",
    servicios: [
      "Plan alimentario personalizado",
      "Control de peso (sobrepeso/obesidad)",
      "Nutrición en embarazo y lactancia",
      "Nutrición deportiva",
      "Dietas para enfermedades crónicas",
      "Educación nutricional"
    ],
    horario: "Lunes a Viernes 9:00 - 18:00 | Previa cita"
  },
  {
    slug: "radiologia",
    nombre: "Radiología",
    descripcion: "Estudios de imagen para diagnóstico preciso: rayos X, ultrasonido y más.",
    descripcionLarga: "El departamento de Radiología e Imagen del Hospital Santa Fe cuenta con equipo moderno para realizar estudios diagnósticos de alta calidad. Ofrecemos rayos X, ultrasonido, mastografía y electrocardiograma, con interpretación por radiólogos certificados y resultados oportunos para apoyar el diagnóstico de nuestros pacientes.",
    iconPath: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14v3H5z",
    servicios: [
      "Rayos X digital",
      "Ultrasonido general y especializado",
      "Mastografía",
      "Electrocardiograma",
      "Interpretación por radiólogos certificados",
      "Resultados en 24-48 horas"
    ],
    horario: "Lunes a Viernes 7:00 - 20:00 | Sábado 8:00 - 14:00"
  },
  {
    slug: "cirugia-plastica",
    nombre: "Cirugía Plástica",
    descripcion: "Procedimientos estéticos y reconstructivos con técnicas avanzadas.",
    descripcionLarga: "Nuestro servicio de Cirugía Plástica y Reconstructiva ofrece procedimientos estéticos y reconstructivos realizados por cirujanos certificados. Desde liposucción y rinoplastía hasta abdominoplastía y aumento mamario, cada procedimiento se planifica de forma individualizada para lograr resultados naturales y seguros en un entorno hospitalario controlado.",
    iconPath: "M7 14c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V3.5C6 2.67 6.67 2 7.5 2S9 2.67 9 3.5v4.67c1.16.42 2 1.52 2 2.83 0 1.66-1.34 3-3 3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z",
    servicios: [
      "Liposucción ($25,000 - $45,000)",
      "Rinoplastía ($35,000 - $55,000)",
      "Aumento mamario ($40,000 - $60,000)",
      "Abdominoplastía ($35,000 - $55,000)",
      "Lifting facial",
      "Cirugía reconstructiva"
    ],
    horario: "Lunes a Viernes 10:00 - 18:00 | Previa cita"
  },
  {
    slug: "maxilofacial",
    nombre: "Cirugía Maxilofacial",
    descripcion: "Cirugía especializada de cara, mandíbula y estructuras faciales.",
    descripcionLarga: "La Cirugía Maxilofacial trata padecimientos quirúrgicos de la cara, mandíbula, boca y estructuras faciales. Nuestros especialistas realizan extracciones de terceros molares, cirugía ortognática, tratamiento de fracturas faciales y reconstrucción maxilofacial, siempre con un enfoque que prioriza la funcionalidad y la estética.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    servicios: [
      "Extracción de terceros molares",
      "Cirugía ortognática",
      "Fracturas faciales",
      "Reconstrucción maxilofacial",
      "Quistes y tumores de mandíbula",
      "Implantes dentales"
    ],
    horario: "Lunes a Viernes 10:00 - 18:00 | Previa cita"
  },
  {
    slug: "oncologia",
    nombre: "Oncología",
    descripcion: "Detección temprana y tratamiento integral del cáncer.",
    descripcionLarga: "El servicio de Oncología del Hospital Santa Fe se enfoca en la detección temprana, diagnóstico y tratamiento integral del cáncer. Nuestros oncólogos trabajan en equipo multidisciplinario para ofrecer opciones de tratamiento personalizadas, acompañamiento emocional y seguimiento continuo para cada paciente.",
    iconPath: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    servicios: [
      "Detección temprana de cáncer",
      "Biopsias y estudios diagnósticos",
      "Plan de tratamiento personalizado",
      "Coordinación multidisciplinaria",
      "Seguimiento oncológico",
      "Apoyo psicológico al paciente y familia"
    ],
    horario: "Lunes a Viernes 9:00 - 17:00 | Previa cita"
  },
  {
    slug: "nefrologia",
    nombre: "Nefrología",
    descripcion: "Especialistas en enfermedades del riñón y vías urinarias altas.",
    descripcionLarga: "El servicio de Nefrología atiende enfermedades del riñón, desde insuficiencia renal y cálculos hasta nefropatía diabética e hipertensiva. Nuestros nefrólogos realizan diagnósticos precisos y planes de tratamiento para preservar la función renal y mejorar la calidad de vida de los pacientes.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
    servicios: [
      "Diagnóstico de insuficiencia renal",
      "Nefropatía diabética e hipertensiva",
      "Cálculos renales complejos",
      "Infecciones urinarias recurrentes",
      "Control de electrolitos",
      "Valoración prediálisis"
    ],
    horario: "Lunes a Viernes 10:00 - 17:00 | Previa cita"
  },
  {
    slug: "endocrinologia",
    nombre: "Endocrinología",
    descripcion: "Tratamiento de diabetes, tiroides y trastornos hormonales.",
    descripcionLarga: "El servicio de Endocrinología se especializa en el diagnóstico y tratamiento de enfermedades hormonales y metabólicas. Nuestros endocrinólogos atienden diabetes, enfermedades de tiroides, obesidad, trastornos de crecimiento y alteraciones hormonales, ofreciendo tratamientos actualizados y seguimiento personalizado.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    servicios: [
      "Control de diabetes tipo 1 y 2",
      "Enfermedades de tiroides",
      "Obesidad y síndrome metabólico",
      "Trastornos hormonales",
      "Osteoporosis",
      "Alteraciones del crecimiento"
    ],
    horario: "Lunes a Viernes 10:00 - 18:00 | Previa cita"
  }
];

export function getEspecialidadBySlug(slug: string): Especialidad | undefined {
  return especialidades.find(e => e.slug === slug);
}

export function getAllSlugs(): string[] {
  return especialidades.map(e => e.slug);
}
