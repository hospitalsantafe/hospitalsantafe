export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Servicios Médicos",
    href: "/servicios",
    children: [
      { label: "Todas las Especialidades", href: "/servicios/especialidades" },
      { label: "Estudios de Imagen", href: "/servicios/estudios-imagen" },
      { label: "Cuneros", href: "/servicios/cuneros" },
    ]
  },
  {
    label: "Paquetes",
    href: "/servicios/paquetes",
    children: [
      { label: "Maternidad", href: "/maternidad" },
      { label: "Artroscopía", href: "/servicios/paquetes#artroscopia" },
      { label: "Cirugía Bariátrica", href: "/servicios/paquetes#bariatrica" },
      { label: "Cirugía Plástica", href: "/servicios/paquetes#cirugia-plastica" },
      { label: "Paquetes Quirúrgicos", href: "/servicios/paquetes#quirurgicos" },
    ]
  },
  {
    label: "Instalaciones",
    href: "/instalaciones",
    children: [
      { label: "Habitaciones", href: "/instalaciones/habitaciones" },
      { label: "Farmacia", href: "/instalaciones/farmacia" },
      { label: "Cafetería", href: "/instalaciones/cafeteria" },
      { label: "Galería", href: "/instalaciones/galeria" },
    ]
  },
  { label: "Contacto", href: "/contacto" },
];

export const WHATSAPP_NUMBER = "523331198625";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_NUMBER = "3331198625";
export const PHONE_DISPLAY = "333-119-8625";
export const PHONE_LANDLINE = "7344205";
export const PHONE_LANDLINE_DISPLAY = "73-44205";

export const HOSPITAL_ADDRESS = {
  street: "Calle Galeana No.22",
  colony: "Santa Fe",
  city: "Zapotlanejo",
  state: "Jalisco",
  full: "Calle Galeana No.22, Santa Fe, Zapotlanejo, Jalisco",
};

export const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.5!2d-103.0844!3d20.5257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDMxJzMyLjUiTiAxMDPCsDA1JzAzLjgiVw!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx";

export const GOOGLE_MAPS_LINK = "https://www.google.com/maps?q=20.525694,-103.084389";

export function getWhatsAppUrl(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
