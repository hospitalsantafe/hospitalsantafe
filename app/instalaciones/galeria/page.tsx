'use client';

import { useState } from 'react';
import Link from 'next/link';
import Lightbox from '@/components/common/Lightbox';
import '../instalaciones.css';

const galeriaImages = [
  { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop&q=80', alt: 'Fachada del Hospital Santa Fe', categoria: 'instalaciones' },
  { src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop&q=80', alt: 'Recepción y sala de espera', categoria: 'instalaciones' },
  { src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop&q=80', alt: 'Habitación privada', categoria: 'habitaciones' },
  { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop&q=80', alt: 'Área de cuneros', categoria: 'cuneros' },
  { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop&q=80', alt: 'Equipo médico moderno', categoria: 'equipos' },
  { src: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&h=600&fit=crop&q=80', alt: 'Tecnología de diagnóstico', categoria: 'equipos' },
  { src: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop&q=80', alt: 'Sala de cuneros neonatal', categoria: 'cuneros' },
  { src: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&h=600&fit=crop&q=80', alt: 'Equipo de doctores', categoria: 'instalaciones' },
  { src: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&h=600&fit=crop&q=80', alt: 'Farmacia interna', categoria: 'instalaciones' },
  { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80', alt: 'Laboratorio clínico', categoria: 'equipos' },
  { src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=600&fit=crop&q=80', alt: 'Habitación compartida', categoria: 'habitaciones' },
  { src: 'https://images.unsplash.com/photo-1551190822-a9ce113ac100?w=800&h=600&fit=crop&q=80', alt: 'Quirófano equipado', categoria: 'equipos' },
];

const categorias = [
  { id: 'todas', label: 'Todas' },
  { id: 'instalaciones', label: 'Instalaciones' },
  { id: 'habitaciones', label: 'Habitaciones' },
  { id: 'equipos', label: 'Equipos' },
  { id: 'cuneros', label: 'Cuneros' },
];

export default function GaleriaPage() {
  const [filtro, setFiltro] = useState('todas');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const filteredImages = filtro === 'todas'
    ? galeriaImages
    : galeriaImages.filter(img => img.categoria === filtro);

  const openLightbox = (index: number) => {
    setCurrentIdx(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="page-hero page-hero--galeria">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Inicio</Link>
            <span className="breadcrumb__separator">/</span>
            <Link href="/instalaciones">Instalaciones</Link>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">Galería</span>
          </nav>
          <h1>Galería Fotográfica</h1>
          <p className="page-hero__subtitle">
            Conoce nuestras instalaciones, habitaciones, equipos médicos y áreas especializadas.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="galeria-filters">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                className={`galeria-filter-btn ${filtro === cat.id ? 'active' : ''}`}
                onClick={() => setFiltro(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="galeria-grid">
            {filteredImages.map((img, index) => (
              <div key={index} className="galeria-item" onClick={() => openLightbox(index)}>
                <img src={img.src} alt={img.alt} />
                <div className="galeria-item__overlay">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={filteredImages}
        currentIndex={currentIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentIdx((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)}
        onNext={() => setCurrentIdx((prev) => (prev + 1) % filteredImages.length)}
      />
    </>
  );
}
