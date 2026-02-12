'use client';

import { useState } from 'react';
import './SectionSearch.css';

interface SectionSearchProps {
  placeholder?: string;
  totalLabel?: string;
  totalCount: number;
  filteredCount: number;
  onSearch: (query: string) => void;
  suggestions?: string[];
}

export default function SectionSearch({
  placeholder = 'Buscar...',
  totalLabel = 'resultados',
  totalCount,
  filteredCount,
  onSearch,
  suggestions = [],
}: SectionSearchProps) {
  const [query, setQuery] = useState('');

  const handleChange = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    onSearch(suggestion);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  const isFiltered = query.trim().length > 0;

  return (
    <div className="section-search">
      <div className="section-search__input-row">
        <div className="section-search__input-wrap">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            className="section-search__input"
            placeholder={placeholder}
            value={query}
            onChange={(e) => handleChange(e.target.value)}
          />
          {query && (
            <button
              className="section-search__clear"
              onClick={handleClear}
              aria-label="Limpiar"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <span className="section-search__count">
          {isFiltered
            ? `${filteredCount} de ${totalCount} ${totalLabel}`
            : `${totalCount} ${totalLabel}`}
        </span>
      </div>

      {/* Suggestion tags - shown when no query */}
      {!isFiltered && suggestions.length > 0 && (
        <div className="section-search__suggestions">
          <span className="section-search__suggestions-label">Sugerencias:</span>
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              className="section-search__suggestion-tag"
              onClick={() => handleSuggestionClick(s)}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* No results message */}
      {isFiltered && filteredCount === 0 && (
        <p className="section-search__no-results">
          No se encontraron resultados para &ldquo;{query}&rdquo;.{' '}
          <button type="button" className="section-search__clear-link" onClick={handleClear}>
            Limpiar búsqueda
          </button>
        </p>
      )}
    </div>
  );
}
