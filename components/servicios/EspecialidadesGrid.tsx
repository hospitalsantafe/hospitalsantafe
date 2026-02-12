'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionSearch from '@/components/common/SectionSearch';
import ScrollReveal from '@/components/common/ScrollReveal';
import { normalizeText } from '@/lib/data/search-index';
import type { Especialidad } from '@/lib/data/especialidades';

interface Props {
  especialidades: Especialidad[];
}

const suggestions = ['Ginecología', 'Pediatría', 'Cardiología', 'Traumatología', 'Cirugía', 'Dermatología', 'Neurocirugía', 'Angiología'];

export default function EspecialidadesGrid({ especialidades }: Props) {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    const q = normalizeText(searchQuery);
    if (!q) return especialidades;
    return especialidades.filter(
      (esp) =>
        normalizeText(esp.nombre).includes(q) ||
        normalizeText(esp.subtitulo || '').includes(q) ||
        normalizeText(esp.descripcion).includes(q) ||
        esp.servicios.some((s) => normalizeText(s).includes(q))
    );
  }, [especialidades, searchQuery]);

  return (
    <>
      <SectionSearch
        placeholder="Buscar especialidad..."
        totalLabel="especialidades"
        totalCount={especialidades.length}
        filteredCount={filtered.length}
        onSearch={setSearchQuery}
        suggestions={suggestions}
      />

      <ScrollReveal stagger className="especialidades-grid">
        {filtered.map((esp) => (
          <Link
            key={esp.slug}
            href={`/servicios/especialidades/${esp.slug}`}
            className="especialidad-card"
            data-animate
          >
            <div className="especialidad-card__image">
              <Image
                src={esp.imagen}
                alt={esp.nombre}
                width={400}
                height={200}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {esp.urgencias && (
                <span className="especialidad-card__urgencias-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />
                  </svg>
                  24/7
                </span>
              )}
            </div>
            <div className="especialidad-card__body">
              <div className="especialidad-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d={esp.iconPath} />
                </svg>
              </div>
              <h3>{esp.nombre}</h3>
              {esp.subtitulo && <p className="especialidad-card__subtitulo">{esp.subtitulo}</p>}
              <p>{esp.descripcion}</p>
              <span className="card-link-inline">
                Ver más
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </ScrollReveal>
    </>
  );
}
