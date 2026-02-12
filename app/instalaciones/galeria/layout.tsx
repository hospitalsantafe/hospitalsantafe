import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galería',
  description: 'Galería fotográfica de Hospital Santa Fe en Zapotlanejo. Conoce nuestras instalaciones, equipo médico y servicios a través de imágenes.',
};

export default function GaleriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
