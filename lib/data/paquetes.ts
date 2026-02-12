export interface DesgloseItem {
  concepto: string;
  monto: string;
}

export interface Paquete {
  id: string;
  nombre: string;
  precio: string;
  precioDesde?: boolean;
  categoria: string;
  incluye: string[];
  nota?: string;
  destacado?: boolean;
  descripcion?: string;
  indicaciones?: string[];
  desglose?: DesgloseItem[];
}

export interface CategoriaPaquete {
  id: string;
  nombre: string;
  descripcion: string;
  paquetes: Paquete[];
}

export const categoriasPaquetes: CategoriaPaquete[] = [
  {
    id: "maternidad",
    nombre: "Maternidad",
    descripcion: "Paquetes completos para dar la bienvenida a tu bebé con la mejor atención médica. Apartado desde $500 pesos con facilidades de pago.",
    paquetes: [
      {
        id: "parto-natural",
        nombre: "Paquete Parto Natural",
        precio: "$11,000",
        categoria: "maternidad",
        destacado: false,
        descripcion: "Paquete integral para parto vaginal que incluye atención completa del parto, honorarios médicos, hospitalización y atención del recién nacido.",
        incluye: [
          "Atención del parto por ginecólogo",
          "Honorarios médicos (ginecólogo)",
          "Honorarios de pediatra",
          "Hospitalización por 1 día",
          "Atención del recién nacido en cuneros",
          "Alimentos para mamá y recién nacido",
          "Medicamentos de rutina (analgésicos, antibióticos, etc.)",
          "Incubadora y oxígeno por 3 horas",
          "Anestesia peridural",
          "Pañalera con fórmula láctea y pañales"
        ],
        nota: "Apartado desde $500 pesos. Abonos mensuales durante control prenatal. Consulta el costo: Tel. 373-734-4205 o WhatsApp 333-119-8625."
      },
      {
        id: "cesarea",
        nombre: "Paquete Cesárea",
        precio: "$15,000",
        categoria: "maternidad",
        destacado: true,
        descripcion: "Paquete completo para parto por cesárea programada con hospitalización de 2 días, anestesia y atención integral para mamá y bebé.",
        incluye: [
          "Operación cesárea programada",
          "Anestesia (bloqueo regional)",
          "Honorarios médicos (ginecólogo)",
          "Honorarios de pediatra",
          "Hospitalización por 2 días",
          "Atención del recién nacido en cuneros",
          "Alimentos para mamá y recién nacido",
          "Medicamentos de rutina (analgésicos, antibióticos, etc.)",
          "Material quirúrgico desechable",
          "Incubadora y oxígeno por 3 horas"
        ],
        nota: "Apartado desde $500 pesos. Abonos mensuales durante control prenatal. Habitación Normal incluida; Suite y Master Suite con costo adicional."
      }
    ]
  },
  {
    id: "artroscopia",
    nombre: "Artroscopía y Ortopedia",
    descripcion: "Procedimientos de mínima invasión para diagnóstico y tratamiento de lesiones articulares. Cirugía ambulatoria con bloqueo peridural y equipo de última generación.",
    paquetes: [
      {
        id: "artroscopia-basico",
        nombre: "Artroscopía Básica (Paquete 1)",
        precio: "$17,500",
        categoria: "artroscopia",
        descripcion: "Cirugía ambulatoria que requiere bloqueo peridural. Incluye colocación de dren (no necesario en todos los casos). Ideal para lesiones meniscales y articulares de complejidad moderada.",
        indicaciones: [
          "Lesión de meniscos",
          "Lesiones de cartílago",
          "Cuerpos intraarticulares libres",
          "Lateralización rotuliana (liberación de retináculo lateral)",
          "Limpiezas articulares",
          "Osteocondritis disecante"
        ],
        incluye: [
          "Procedimiento artroscópico completo",
          "Anestesia regional (bloqueo peridural)",
          "Honorarios de cirujano y 1er ayudante",
          "Artroscopio y material consumible (rasurador, radiofrecuencia, soluciones estériles)",
          "Material requerido de hospital",
          "Honorarios del anestesiólogo",
          "Equipo de bloqueo y ropa estéril",
          "Instrumental de cirugía menor",
          "Medicamentos y material de curación",
          "Sala de recuperación"
        ],
        desglose: [
          { concepto: "Honorarios cirujano y 1er ayudante", monto: "$6,500" },
          { concepto: "Artroscopio y consumibles", monto: "$4,000" },
          { concepto: "Material requerido de hospital", monto: "$7,000" }
        ],
        nota: "Cirugía ambulatoria. El paciente puede retirarse el mismo día."
      },
      {
        id: "artroscopia-completo",
        nombre: "Artroscopía Completa — Ligamentos (Paquete 2)",
        precio: "$27,700",
        categoria: "artroscopia",
        destacado: true,
        descripcion: "Paquete para reconstrucción de ligamentos cruzados y transposiciones de cartílago. Incluye sistema de fijación tipo Transfix de Artrex con fijación proximal de injerto con tornillo interferencial de titanio.",
        indicaciones: [
          "Lesión de ligamento cruzado anterior",
          "Lesión de ligamento cruzado posterior",
          "Transposiciones de cartílago"
        ],
        incluye: [
          "Procedimiento artroscópico de reconstrucción",
          "Anestesia regional (bloqueo peridural)",
          "Honorarios de cirujano y 1er ayudante",
          "Sistema de fijación tipo Transfix de Artrex",
          "Fijación proximal de injerto con tornillo interferencial de titanio",
          "Rasurador, radiofrecuencia y soluciones estériles",
          "Material completo de hospital",
          "Honorarios del anestesiólogo",
          "Equipo de bloqueo y ropa estéril",
          "Instrumental de cirugía menor",
          "Medicamentos y material de curación",
          "Colocación de dren"
        ],
        desglose: [
          { concepto: "Honorarios cirujano y 1er ayudante", monto: "$9,500" },
          { concepto: "Artroscopio y material consumible", monto: "$11,000" },
          { concepto: "Material requerido de hospital", monto: "$7,200" }
        ],
        nota: "Cirugía ambulatoria con colocación de dren. Requiere bloqueo peridural."
      }
    ]
  },
  {
    id: "bariatrica",
    nombre: "Cirugía Bariátrica",
    descripcion: "Tratamientos quirúrgicos para la obesidad realizados por cirujanos bariátricos certificados. La probabilidad de éxito de esta cirugía es alta, con pérdida del exceso de peso entre el 60% y 80%. Incluye valoración multidisciplinaria preoperatoria.",
    paquetes: [
      {
        id: "manga-gastrica",
        nombre: "Manga Gástrica",
        precio: "$65,000 - $85,000",
        precioDesde: true,
        categoria: "bariatrica",
        destacado: true,
        descripcion: "La manga gástrica es un procedimiento laparoscópico de mínima invasión para el tratamiento de la obesidad. Se reduce el estómago hasta un 80%, logrando una pérdida significativa de peso. Indicada para pacientes con IMC elevado y enfermedades asociadas a la obesidad.",
        incluye: [
          "Cirugía laparoscópica de manga gástrica",
          "Valoración multidisciplinaria preoperatoria",
          "Anestesia general",
          "2-3 noches de hospitalización",
          "Nutriólogo pre y postoperatorio",
          "Psicología preoperatoria",
          "Estudios de laboratorio y gabinete",
          "Medicamentos durante la estancia",
          "Seguimiento por 3 meses"
        ],
        indicaciones: [
          "Obesidad con IMC mayor a 35",
          "Obesidad con enfermedades asociadas (diabetes, hipertensión)",
          "Pacientes que no han logrado pérdida de peso con métodos convencionales"
        ],
        nota: "Precio varía según IMC y condiciones del paciente. Evaluación inicial sin costo. Consultas previa cita."
      }
    ]
  },
  {
    id: "cirugia-plastica",
    nombre: "Cirugía Plástica y Estética",
    descripcion: "Procedimientos estéticos y reconstructivos realizados por cirujanos plásticos certificados en un entorno hospitalario seguro. Financiamiento disponible: 6 y 12 meses sin intereses con tarjetas HSBC y Scotiabank.",
    paquetes: [
      {
        id: "liposuccion",
        nombre: "Liposucción",
        precio: "$25,000 - $45,000",
        precioDesde: true,
        categoria: "cirugia-plastica",
        descripcion: "Procedimiento quirúrgico para eliminar depósitos de grasa localizados en diversas zonas del cuerpo. Resultados visibles y duraderos con técnicas de mínima invasión.",
        incluye: [
          "Liposucción por zonas",
          "Anestesia",
          "Faja post-quirúrgica",
          "Estancia hospitalaria",
          "Medicamentos",
          "Consulta de seguimiento"
        ],
        nota: "Precio varía según número de zonas a tratar. MSI 6-12 meses disponible con HSBC y Scotiabank."
      },
      {
        id: "rinoplastia",
        nombre: "Rinoplastía",
        precio: "$35,000 - $55,000",
        precioDesde: true,
        categoria: "cirugia-plastica",
        descripcion: "Cirugía estética y/o funcional de la nariz para mejorar su forma, tamaño o corregir problemas respiratorios.",
        incluye: [
          "Cirugía de rinoplastía",
          "Anestesia general",
          "Férula nasal",
          "Estancia hospitalaria",
          "Medicamentos",
          "2 consultas de seguimiento"
        ],
        nota: "MSI 6-12 meses disponible con HSBC y Scotiabank."
      },
      {
        id: "aumento-mamario",
        nombre: "Aumento Mamario",
        precio: "$40,000 - $60,000",
        precioDesde: true,
        categoria: "cirugia-plastica",
        descripcion: "Cirugía de aumento mamario con implantes de silicón de alta calidad. Procedimiento seguro realizado por cirujanos plásticos certificados.",
        incluye: [
          "Cirugía de aumento mamario",
          "Implantes de silicón (incluidos)",
          "Anestesia general",
          "1 noche de hospitalización",
          "Faja post-quirúrgica",
          "Medicamentos",
          "2 consultas de seguimiento"
        ],
        nota: "MSI 6-12 meses disponible con HSBC y Scotiabank."
      },
      {
        id: "abdominoplastia",
        nombre: "Abdominoplastía",
        precio: "$35,000 - $55,000",
        precioDesde: true,
        categoria: "cirugia-plastica",
        descripcion: "Cirugía para remover exceso de piel y grasa del abdomen, además de restaurar los músculos abdominales debilitados o separados.",
        incluye: [
          "Cirugía de abdominoplastía",
          "Anestesia general",
          "2 noches de hospitalización",
          "Faja post-quirúrgica",
          "Medicamentos y analgésicos",
          "Drenajes quirúrgicos",
          "2 consultas de seguimiento"
        ],
        nota: "MSI 6-12 meses disponible con HSBC y Scotiabank."
      }
    ]
  },
  {
    id: "quirurgicos",
    nombre: "Paquetes Quirúrgicos Generales",
    descripcion: "Cirugías programadas con precio cerrado. Incluyen hospitalización, anestesia, material quirúrgico y medicamentos. Cirugía abdominal abierta y laparoscópica con los más altos estándares de calidad.",
    paquetes: [
      {
        id: "colecistectomia-laparoscopica",
        nombre: "Colecistectomía Laparoscópica",
        precio: "$18,000 - $25,000",
        precioDesde: true,
        categoria: "quirurgicos",
        destacado: true,
        descripcion: "Extirpación de la vesícula biliar por vía laparoscópica (mínima invasión). Procedimiento más común y con recuperación más rápida.",
        incluye: ["Cirugía laparoscópica", "Anestesia general", "1-2 noches de hospitalización", "Medicamentos", "Consulta de seguimiento"]
      },
      {
        id: "colecistectomia-abierta",
        nombre: "Colecistectomía Abierta",
        precio: "$16,000 - $22,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Extirpación de la vesícula biliar por vía abierta. Indicada cuando la laparoscopía no es posible por condiciones del paciente.",
        incluye: ["Cirugía abierta", "Anestesia general", "2-3 noches de hospitalización", "Medicamentos y analgésicos", "Material de curación", "Consulta de seguimiento"]
      },
      {
        id: "funduplicatura-nissen",
        nombre: "Funduplicatura de Nissen",
        precio: "$22,000 - $30,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Cirugía antirreflujo para tratar el reflujo gastroesofágico crónico. Se envuelve la parte superior del estómago alrededor del esófago inferior para prevenir el reflujo ácido.",
        incluye: ["Cirugía laparoscópica", "Anestesia general", "2-3 noches de hospitalización", "Medicamentos", "Material quirúrgico", "Consulta de seguimiento"]
      },
      {
        id: "apendicectomia-laparoscopica",
        nombre: "Apendicectomía Laparoscópica",
        precio: "$16,000 - $22,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Extirpación del apéndice por vía laparoscópica. Procedimiento de mínima invasión con recuperación rápida.",
        incluye: ["Cirugía laparoscópica", "Anestesia general", "1-2 noches de hospitalización", "Medicamentos y antibióticos", "Consulta de seguimiento"]
      },
      {
        id: "apendicectomia-abierta",
        nombre: "Apendicectomía Abierta",
        precio: "$14,000 - $20,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Extirpación del apéndice por vía abierta. Indicada en casos complicados o cuando la laparoscopía no es factible.",
        incluye: ["Cirugía abierta", "Anestesia general", "2-3 noches de hospitalización", "Medicamentos y antibióticos", "Material de curación", "Consulta de seguimiento"]
      },
      {
        id: "histerectomia-abdominal",
        nombre: "Histerectomía Abdominal",
        precio: "$20,000 - $30,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Extirpación del útero por vía abdominal. Indicada para miomas uterinos, sangrado anormal severo, prolapso uterino y otras patologías ginecológicas.",
        incluye: ["Cirugía abdominal", "Anestesia general", "2-3 noches de hospitalización", "Medicamentos y analgésicos", "Material quirúrgico", "Consulta de seguimiento"]
      },
      {
        id: "histerectomia-vaginal",
        nombre: "Histerectomía Vaginal",
        precio: "$18,000 - $28,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Extirpación del útero por vía vaginal. Menor tiempo de recuperación y sin cicatriz abdominal visible.",
        incluye: ["Cirugía vaginal", "Anestesia regional o general", "1-2 noches de hospitalización", "Medicamentos", "Material quirúrgico", "Consulta de seguimiento"]
      },
      {
        id: "salpingoclasia",
        nombre: "Salpingoclasia",
        precio: "$10,000 - $15,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Oclusión tubárica bilateral como método anticonceptivo permanente. Procedimiento diferente a la ligadura de trompas convencional, se realiza mediante corte y ligadura de las trompas de Falopio.",
        incluye: ["Procedimiento quirúrgico", "Anestesia regional o general", "Estancia hospitalaria", "Medicamentos", "Consulta de seguimiento"]
      },
      {
        id: "hernia-inguinal",
        nombre: "Hernioplastía Inguinal",
        precio: "$14,000 - $20,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Reparación quirúrgica de hernia inguinal con colocación de malla para reforzar la pared abdominal y prevenir recurrencia.",
        incluye: ["Cirugía con malla", "Anestesia", "1 noche de hospitalización", "Medicamentos", "Consulta de seguimiento"]
      },
      {
        id: "hernia-umbilical",
        nombre: "Hernioplastía Umbilical",
        precio: "$12,000 - $18,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Reparación de hernia umbilical con colocación de malla. Puede realizarse de forma ambulatoria o con una noche de estancia.",
        incluye: ["Cirugía con malla", "Anestesia", "Estancia ambulatoria o 1 noche", "Medicamentos", "Consulta de seguimiento"]
      },
      {
        id: "hernia-abdominal",
        nombre: "Hernioplastía Abdominal",
        precio: "$16,000 - $24,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Reparación de hernia en pared abdominal (hernia incisional, epigástrica u otras hernias de la pared abdominal) con colocación de malla.",
        incluye: ["Cirugía con malla", "Anestesia general", "1-2 noches de hospitalización", "Medicamentos y analgésicos", "Material quirúrgico", "Consulta de seguimiento"]
      },
      {
        id: "circuncision",
        nombre: "Circuncisión",
        precio: "$8,000 - $12,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Procedimiento quirúrgico para remover el prepucio. Indicado por motivos médicos (fimosis, parafimosis) o por elección personal.",
        incluye: ["Procedimiento quirúrgico", "Anestesia local o sedación", "Material de curación", "Medicamentos", "Consulta de seguimiento"]
      },
      {
        id: "vasectomia",
        nombre: "Vasectomía",
        precio: "$6,000 - $9,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Procedimiento de anticoncepción masculina permanente. Cirugía ambulatoria rápida y segura con anestesia local.",
        incluye: ["Procedimiento quirúrgico", "Anestesia local", "Material de curación", "Medicamentos", "Consulta de seguimiento"]
      },
      {
        id: "ligadura-trompas",
        nombre: "Ligadura de Trompas",
        precio: "$12,000 - $16,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Método anticonceptivo permanente femenino mediante ligadura de las trompas de Falopio por vía laparoscópica.",
        incluye: ["Cirugía laparoscópica", "Anestesia general", "1 noche de hospitalización", "Medicamentos", "Consulta de seguimiento"]
      },
      {
        id: "cistoureteroscopia",
        nombre: "Cistoureteroscopía con Canasteo",
        precio: "$15,000 - $22,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Procedimiento endoscópico para visualizar el interior de la vejiga y los uréteres. Permite la extracción de cálculos (piedras) en las vías urinarias mediante canasteo.",
        incluye: ["Procedimiento endoscópico", "Anestesia regional o general", "Equipo de cistoureteroscopía", "Estancia hospitalaria", "Medicamentos", "Consulta de seguimiento"]
      },
      {
        id: "tiroidectomia",
        nombre: "Tiroidectomía",
        precio: "$20,000 - $30,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Extirpación total o parcial de la glándula tiroides. Indicada para nódulos tiroideos, bocio, cáncer de tiroides u otras patologías tiroideas.",
        incluye: ["Cirugía de tiroides", "Anestesia general", "1-2 noches de hospitalización", "Medicamentos y analgésicos", "Estudio histopatológico", "Consulta de seguimiento"]
      },
      {
        id: "amigdalectomia",
        nombre: "Amigdalectomía",
        precio: "$15,000 - $20,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Extirpación quirúrgica de las amígdalas. Indicada para amigdalitis recurrente, hipertrofia amigdalina o problemas respiratorios del sueño.",
        incluye: ["Cirugía", "Anestesia general", "Estancia hospitalaria", "Medicamentos", "Consulta de seguimiento"]
      },
      {
        id: "septoplastia",
        nombre: "Septoplastía",
        precio: "$18,000 - $28,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Cirugía correctiva del tabique nasal desviado para mejorar la respiración y corregir la obstrucción nasal.",
        incluye: ["Cirugía correctiva de tabique", "Anestesia general", "Taponamiento nasal", "1 noche de hospitalización", "Consulta de seguimiento"]
      },
      {
        id: "hemorroidectomia",
        nombre: "Hemorroidectomía",
        precio: "$12,000 - $18,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Procedimiento quirúrgico para el tratamiento de hemorroides internas y externas cuando los tratamientos conservadores no son suficientes.",
        incluye: ["Procedimiento quirúrgico", "Anestesia regional", "Estancia ambulatoria", "Medicamentos", "Consulta de seguimiento"]
      },
      {
        id: "quiste-pilonidal",
        nombre: "Quiste Pilonidal",
        precio: "$10,000 - $15,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Excisión quirúrgica de quiste pilonidal (quiste sacrococcígeo). Procedimiento ambulatorio con anestesia regional.",
        incluye: ["Cirugía de excisión", "Anestesia", "Material de curación", "Medicamentos", "Consulta de seguimiento"]
      },
      {
        id: "biopsia-mama",
        nombre: "Biopsia de Mama",
        precio: "$5,000 - $8,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Procedimiento para obtener muestra de tejido mamario para estudio patológico. Fundamental para el diagnóstico temprano de cáncer de mama.",
        incluye: ["Procedimiento de biopsia", "Anestesia local o sedación", "Estudio histopatológico", "Consulta de seguimiento"]
      },
      {
        id: "lipoma",
        nombre: "Extirpación de Lipoma",
        precio: "$5,000 - $10,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Extirpación quirúrgica de tumores benignos de grasa (lipomas). Procedimiento ambulatorio con anestesia local.",
        incluye: ["Procedimiento quirúrgico", "Anestesia local", "Estudio histopatológico", "Material de curación", "Consulta de seguimiento"]
      },
      {
        id: "legrado",
        nombre: "Legrado Uterino",
        precio: "$8,000 - $12,000",
        precioDesde: true,
        categoria: "quirurgicos",
        descripcion: "Procedimiento ginecológico para raspado del revestimiento del útero. Indicado para diagnóstico o tratamiento de sangrado uterino anormal.",
        incluye: ["Procedimiento", "Anestesia", "Estancia hospitalaria", "Medicamentos", "Consulta de seguimiento"]
      }
    ]
  }
];

export function getPaquetesByCategoria(categoriaId: string): CategoriaPaquete | undefined {
  return categoriasPaquetes.find(c => c.id === categoriaId);
}

export function getAllPaquetes(): Paquete[] {
  return categoriasPaquetes.flatMap(c => c.paquetes);
}
