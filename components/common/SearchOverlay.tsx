'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { searchAll, popularSearches, type SearchItem, type SearchCategory } from '@/lib/data/search-index';
import './SearchOverlay.css';

const categoryLabels: Record<SearchCategory, string> = {
  especialidad: 'Especialidad',
  paquete: 'Paquete',
  estudio: 'Estudio',
  pagina: 'Página',
  instalacion: 'Instalación',
};

const categoryColors: Record<SearchCategory, string> = {
  especialidad: 'badge--especialidad',
  paquete: 'badge--paquete',
  estudio: 'badge--estudio',
  pagina: 'badge--pagina',
  instalacion: 'badge--instalacion',
};

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setActiveIndex(-1);
      // Small delay so the overlay is rendered
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Search on query change
  useEffect(() => {
    if (query.trim().length >= 2) {
      setResults(searchAll(query));
      setActiveIndex(-1);
    } else {
      setResults([]);
      setActiveIndex(-1);
    }
  }, [query]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex(prev => Math.min(prev + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex(prev => Math.max(prev - 1, -1));
      } else if (e.key === 'Enter' && activeIndex >= 0 && results[activeIndex]) {
        e.preventDefault();
        onClose();
        router.push(results[activeIndex].href);
      }
    },
    [results, activeIndex, onClose]
  );

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex >= 0 && resultsRef.current) {
      const activeEl = resultsRef.current.children[activeIndex] as HTMLElement;
      activeEl?.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIndex]);

  if (!isOpen) return null;

  const hasQuery = query.trim().length >= 2;

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-overlay__content" onClick={(e) => e.stopPropagation()}>
        {/* Search Input */}
        <div className="search-overlay__header">
          <div className="search-overlay__input-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              className="search-overlay__input"
              placeholder="¿Qué estás buscando?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            {query && (
              <button
                className="search-overlay__clear"
                onClick={() => { setQuery(''); inputRef.current?.focus(); }}
                aria-label="Limpiar búsqueda"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M15 9l-6 6M9 9l6 6" />
                </svg>
              </button>
            )}
          </div>
          <button
            className="search-overlay__close"
            onClick={onClose}
            aria-label="Cerrar búsqueda"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Results / Popular searches */}
        <div className="search-overlay__body">
          {hasQuery ? (
            <>
              <p className="search-overlay__label">
                {results.length > 0
                  ? `${results.length} resultado${results.length > 1 ? 's' : ''}`
                  : 'Sin resultados'}
              </p>

              {results.length > 0 ? (
                <div className="search-overlay__results" ref={resultsRef}>
                  {results.map((item, idx) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={`search-result ${idx === activeIndex ? 'search-result--active' : ''}`}
                      onClick={onClose}
                    >
                      <div className="search-result__text">
                        <span className="search-result__title">{item.title}</span>
                        <span className="search-result__desc">{item.description}</span>
                      </div>
                      <span className={`search-result__badge ${categoryColors[item.category]}`}>
                        {categoryLabels[item.category]}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="search-overlay__empty">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  <p>No encontramos resultados para &ldquo;{query}&rdquo;</p>
                  <p className="search-overlay__empty-hint">Intenta con otros términos como &ldquo;cardiología&rdquo;, &ldquo;cesárea&rdquo; o &ldquo;radiografía&rdquo;</p>
                </div>
              )}
            </>
          ) : (
            <>
              <p className="search-overlay__label">Búsquedas populares</p>
              <div className="search-overlay__tags">
                {popularSearches.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="search-tag"
                    onClick={onClose}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
