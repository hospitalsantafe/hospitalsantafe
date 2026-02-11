export interface Paquete {
  id: string;
  nombre: string;
  precio: string;
  precioDesde?: boolean;
  categoria: string;
  incluye: string[];
  nota?: string;
  destacado?: boolean;
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
        incluye: [
          "Atención del parto por ginecólogo",
          "Habitación privada (1 noche)",
          "Cunero para recién nacido",
          "Valoración pediátrica del bebé",
          "Tamiz neonatal",
          "Medicamentos durante la estancia",
          "Acompañante incluido"
        ],
        nota: "Apartado desde $500. Facilidades de pago disponibles."
      },
      {
        id: "cesarea",
        nombre: "Paquete Cesárea",
        precio: "$15,000",
        categoria: "maternidad",
        destacado: true,
        incluye: [
          "Cirugía cesárea por ginecólogo",
          "Anestesia (bloqueo epidural)",
          "Habitación privada (2 noches)",
          "Cunero para recién nacido",
          "Valoración pediátrica del bebé",
          "Tamiz neonatal",
          "Medicamentos durante la estancia",
          "Acompañante incluido"
        ],
        nota: "Apartado desde $500. Facilidades de pago disponibles."
      }
    ]
  },
  {
    id: "artroscopia",
    nombre: "Artroscopía",
    descripcion: "Procedimientos de mínima invasión para diagnóstico y tratamiento de lesiones articulares de rodilla y hombro.",
    paquetes: [
      {
        id: "artroscopia-basico",
        nombre: "Artroscopía Básica",
        precio: "$17,500",
        categoria: "artroscopia",
        incluye: [
          "Procedimiento artroscópico",
          "Anestesia regional",
          "Material quirúrgico",
          "Sala de recuperación",
          "Consulta de seguimiento",
          "Medicamentos durante la estancia"
        ]
      },
      {
        id: "artroscopia-completo",
        nombre: "Artroscopía Completa",
        precio: "$27,700",
        categoria: "artroscopia",
        destacado: true,
        incluye: [
          "Procedimiento artroscópico completo",
          "Anestesia regional",
          "Material quirúrgico especializado",
          "1 noche de hospitalización",
          "Medicamentos y analgésicos",
          "Rehabilitación inicial",
          "2 consultas de seguimiento"
        ]
      }
    ]
  },
  {
    id: "bariatrica",
    nombre: "Cirugía Bariátrica",
    descripcion: "Manga gástrica realizada por cirujanos bariátricos certificados. Incluye valoración multidisciplinaria preoperatoria.",
    paquetes: [
      {
        id: "manga-gastrica",
        nombre: "Manga Gástrica",
        precio: "$65,000 - $85,000",
        precioDesde: true,
        categoria: "bariatrica",
        destacado: true,
        incluye: [
          "Cirugía laparoscópica de manga gástrica",
          "Valoración multidisciplinaria preoperatoria",
          "Anestesia general",
          "2-3 noches de hospitalización",
          "Nutriólogo pre y postoperatorio",
          "Psicología preoperatoria",
          "Estudios de laboratorio y gabinete",
          "Seguimiento por 3 meses"
        ],
        nota: "Precio varía según IMC y condiciones del paciente. Evaluación inicial sin costo."
      }
    ]
  },
  {
    id: "cirugia-plastica",
    nombre: "Cirugía Plástica",
    descripcion: "Procedimientos estéticos y reconstructivos realizados por cirujanos plásticos certificados en un entorno hospitalario seguro.",
    paquetes: [
      {
        id: "liposuccion",
        nombre: "Liposucción",
        precio: "$25,000 - $45,000",
        precioDesde: true,
        categoria: "cirugia-plastica",
        incluye: [
          "Liposucción por zonas",
          "Anestesia",
          "Faja post-quirúrgica",
          "Estancia hospitalaria",
          "Medicamentos",
          "Consulta de seguimiento"
        ],
        nota: "Precio varía según número de zonas a tratar."
      },
      {
        id: "rinoplastia",
        nombre: "Rinoplastía",
        precio: "$35,000 - $55,000",
        precioDesde: true,
        categoria: "cirugia-plastica",
        incluye: [
          "Cirugía de rinoplastía",
          "Anestesia general",
          "Férula nasal",
          "Estancia hospitalaria",
          "Medicamentos",
          "2 consultas de seguimiento"
        ]
      },
      {
        id: "aumento-mamario",
        nombre: "Aumento Mamario",
        precio: "$40,000 - $60,000",
        precioDesde: true,
        categoria: "cirugia-plastica",
        incluye: [
          "Cirugía de aumento mamario",
          "Implantes de silicón (incluidos)",
          "Anestesia general",
          "1 noche de hospitalización",
          "Faja post-quirúrgica",
          "Medicamentos",
          "2 consultas de seguimiento"
        ]
      },
      {
        id: "abdominoplastia",
        nombre: "Abdominoplastía",
        precio: "$35,000 - $55,000",
        precioDesde: true,
        categoria: "cirugia-plastica",
        incluye: [
          "Cirugía de abdominoplastía",
          "Anestesia general",
          "2 noches de hospitalización",
          "Faja post-quirúrgica",
          "Medicamentos y analgésicos",
          "Drenajes quirúrgicos",
          "2 consultas de seguimiento"
        ]
      }
    ]
  },
  {
    id: "quirurgicos",
    nombre: "Paquetes Quirúrgicos",
    descripcion: "Cirugías programadas con precio cerrado. Incluyen hospitalización, anestesia, material quirúrgico y medicamentos.",
    paquetes: [
      { id: "colecistectomia", nombre: "Colecistectomía (vesícula)", precio: "$18,000 - $25,000", precioDesde: true, categoria: "quirurgicos", incluye: ["Cirugía laparoscópica", "Anestesia general", "1-2 noches hospitalización", "Medicamentos", "Consulta de seguimiento"] },
      { id: "hernia-inguinal", nombre: "Hernia Inguinal", precio: "$14,000 - $20,000", precioDesde: true, categoria: "quirurgicos", incluye: ["Cirugía con malla", "Anestesia", "1 noche hospitalización", "Medicamentos", "Consulta de seguimiento"] },
      { id: "hernia-umbilical", nombre: "Hernia Umbilical", precio: "$12,000 - $18,000", precioDesde: true, categoria: "quirurgicos", incluye: ["Cirugía con malla", "Anestesia", "Estancia ambulatoria o 1 noche", "Medicamentos", "Consulta de seguimiento"] },
      { id: "apendicectomia", nombre: "Apendicectomía", precio: "$16,000 - $22,000", precioDesde: true, categoria: "quirurgicos", incluye: ["Cirugía laparoscópica", "Anestesia general", "1-2 noches hospitalización", "Medicamentos y antibióticos", "Consulta de seguimiento"] },
      { id: "circuncision", nombre: "Circuncisión", precio: "$8,000 - $12,000", precioDesde: true, categoria: "quirurgicos", incluye: ["Procedimiento quirúrgico", "Anestesia local o sedación", "Material de curación", "Medicamentos", "Consulta de seguimiento"] },
      { id: "amigdalectomia", nombre: "Amigdalectomía", precio: "$15,000 - $20,000", precioDesde: true, categoria: "quirurgicos", incluye: ["Cirugía", "Anestesia general", "Estancia hospitalaria", "Medicamentos", "Consulta de seguimiento"] },
      { id: "septoplastia", nombre: "Septoplastía", precio: "$18,000 - $28,000", precioDesde: true, categoria: "quirurgicos", incluye: ["Cirugía correctiva de tabique", "Anestesia general", "Taponamiento nasal", "1 noche hospitalización", "Consulta de seguimiento"] },
      { id: "hemorroidectomia", nombre: "Hemorroidectomía", precio: "$12,000 - $18,000", precioDesde: true, categoria: "quirurgicos", incluye: ["Procedimiento quirúrgico", "Anestesia regional", "Estancia ambulatoria", "Medicamentos", "Consulta de seguimiento"] },
      { id: "quiste-pilonidal", nombre: "Quiste Pilonidal", precio: "$10,000 - $15,000", precioDesde: true, categoria: "quirurgicos", incluye: ["Cirugía de excisión", "Anestesia", "Material de curación", "Medicamentos", "Consulta de seguimiento"] },
      { id: "vasectomia", nombre: "Vasectomía", precio: "$6,000 - $9,000", precioDesde: true, categoria: "quirurgicos", incluye: ["Procedimiento quirúrgico", "Anestesia local", "Material de curación", "Medicamentos", "Consulta de seguimiento"] },
      { id: "ligadura-trompas", nombre: "Ligadura de Trompas", precio: "$12,000 - $16,000", precioDesde: true, categoria: "quirurgicos", incluye: ["Cirugía laparoscópica", "Anestesia general", "1 noche hospitalización", "Medicamentos", "Consulta de seguimiento"] },
      { id: "biopsia-mama", nombre: "Biopsia de Mama", precio: "$5,000 - $8,000", precioDesde: true, categoria: "quirurgicos", incluye: ["Procedimiento de biopsia", "Anestesia local o sedación", "Estudio histopatológico", "Consulta de seguimiento"] },
      { id: "lipoma", nombre: "Extirpación de Lipoma", precio: "$5,000 - $10,000", precioDesde: true, categoria: "quirurgicos", incluye: ["Procedimiento quirúrgico", "Anestesia local", "Estudio histopatológico", "Material de curación", "Consulta de seguimiento"] },
      { id: "legrado", nombre: "Legrado Uterino", precio: "$8,000 - $12,000", precioDesde: true, categoria: "quirurgicos", incluye: ["Procedimiento", "Anestesia", "Estancia hospitalaria", "Medicamentos", "Consulta de seguimiento"] }
    ]
  }
];

export function getPaquetesByCategoria(categoriaId: string): CategoriaPaquete | undefined {
  return categoriasPaquetes.find(c => c.id === categoriaId);
}

export function getAllPaquetes(): Paquete[] {
  return categoriasPaquetes.flatMap(c => c.paquetes);
}
