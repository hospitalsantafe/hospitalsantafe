'use client';

import { useState } from 'react';
import { saveTestimoniosAction, type Testimonio } from '@/app/admin/actions';

interface Props {
  initialTestimonios: Testimonio[];
}

const EMPTY_FORM = { nombre: '', texto: '', servicio: '', estrellas: 5 };

export default function TestimoniosClient({ initialTestimonios }: Props) {
  const [testimonios, setTestimonios] = useState<Testimonio[]>(initialTestimonios);
  const [saving, setSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error' | 'saving'; text: string } | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);

  // ── Helpers ─────────────────────────────────────────────────────────────────

  const startAdd = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setShowForm(true);
    setStatusMsg(null);
  };

  const startEdit = (t: Testimonio) => {
    setEditingId(t.id);
    setForm({ nombre: t.nombre, texto: t.texto, servicio: t.servicio, estrellas: t.estrellas });
    setShowForm(true);
    setStatusMsg(null);
  };

  const cancelForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(EMPTY_FORM);
  };

  const handleDelete = (id: string) => {
    if (!confirm('¿Eliminar este testimonio?')) return;
    setTestimonios((prev) => prev.filter((t) => t.id !== id));
    setStatusMsg(null);
  };

  const handleFormSubmit = () => {
    if (!form.nombre.trim() || !form.texto.trim()) {
      setStatusMsg({ type: 'error', text: 'Nombre y texto son obligatorios.' });
      return;
    }

    if (editingId) {
      // Update existing
      setTestimonios((prev) =>
        prev.map((t) =>
          t.id === editingId
            ? { ...t, nombre: form.nombre, texto: form.texto, servicio: form.servicio, estrellas: form.estrellas }
            : t
        )
      );
    } else {
      // Add new
      const newId = Date.now().toString();
      setTestimonios((prev) => [
        ...prev,
        { id: newId, nombre: form.nombre, texto: form.texto, servicio: form.servicio, estrellas: form.estrellas },
      ]);
    }

    cancelForm();
    setStatusMsg(null);
  };

  const handleSaveAll = async () => {
    setSaving(true);
    setStatusMsg({ type: 'saving', text: 'Guardando... espera un momento.' });

    const result = await saveTestimoniosAction(testimonios);

    setSaving(false);
    if (result?.error) {
      setStatusMsg({ type: 'error', text: `Error: ${result.error}` });
    } else {
      setStatusMsg({
        type: 'success',
        text: '✓ Guardado correctamente. Los cambios aparecerán en el sitio en ~2 minutos.',
      });
    }
  };

  const StarSelector = () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => setForm((f) => ({ ...f, estrellas: n }))}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '24px',
            color: n <= form.estrellas ? '#f9a825' : '#ddd',
            padding: '0',
            lineHeight: 1,
          }}
        >
          ★
        </button>
      ))}
      <span style={{ fontSize: '13px', color: '#888' }}>{form.estrellas} estrella{form.estrellas !== 1 ? 's' : ''}</span>
    </div>
  );

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Lista de testimonios actuales */}
      <div className="admin-card">
        <h2>Testimonios actuales ({testimonios.length})</h2>

        {testimonios.length === 0 && (
          <p className="admin-empty">No hay testimonios. Agrega el primero.</p>
        )}

        {testimonios.map((t) => (
          <div key={t.id} className="admin-testimonial-item">
            <div className="admin-testimonial-info">
              <div className="admin-testimonial-name">{t.nombre}</div>
              {t.servicio && <div className="admin-testimonial-service">{t.servicio}</div>}
              <div className="admin-stars">
                {'★'.repeat(t.estrellas)}{'☆'.repeat(5 - t.estrellas)}
              </div>
              <div className="admin-testimonial-text">&ldquo;{t.texto}&rdquo;</div>
            </div>
            <div className="admin-testimonial-actions">
              <button className="admin-btn-edit" onClick={() => startEdit(t)}>
                Editar
              </button>
              <button className="admin-btn-delete" onClick={() => handleDelete(t.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}

        {/* Add button */}
        {!showForm && (
          <button className="admin-btn-add" style={{ marginTop: '16px' }} onClick={startAdd}>
            + Agregar nuevo testimonio
          </button>
        )}
      </div>

      {/* Formulario agregar/editar */}
      {showForm && (
        <div className="admin-card">
          <h2>{editingId ? 'Editar testimonio' : 'Nuevo testimonio'}</h2>

          <div className="admin-form">
            <div className="admin-form-row">
              <div className="admin-form-group">
                <label>Nombre del paciente *</label>
                <input
                  type="text"
                  placeholder="Ej: María González R."
                  value={form.nombre}
                  onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
                />
              </div>
              <div className="admin-form-group">
                <label>Servicio recibido</label>
                <input
                  type="text"
                  placeholder="Ej: Maternidad, Urgencias..."
                  value={form.servicio}
                  onChange={(e) => setForm((f) => ({ ...f, servicio: e.target.value }))}
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label>Testimonio *</label>
              <textarea
                placeholder="Escribe aquí el comentario del paciente..."
                value={form.texto}
                onChange={(e) => setForm((f) => ({ ...f, texto: e.target.value }))}
                rows={3}
              />
            </div>

            <div className="admin-form-group">
              <label>Calificación</label>
              <StarSelector />
            </div>

            {statusMsg && statusMsg.type === 'error' && (
              <div className={`admin-status admin-status--${statusMsg.type}`}>{statusMsg.text}</div>
            )}

            <div className="admin-form-actions">
              <button className="admin-btn-primary" type="button" onClick={handleFormSubmit}>
                {editingId ? 'Actualizar' : 'Agregar'}
              </button>
              <button className="admin-btn-secondary" type="button" onClick={cancelForm}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Save bar */}
      <div className="admin-save-bar">
        <div>
          {statusMsg && statusMsg.type !== 'error' && (
            <div className={`admin-status admin-status--${statusMsg.type}`} style={{ margin: 0 }}>
              {statusMsg.text}
            </div>
          )}
          {!statusMsg && (
            <span className="admin-save-bar__hint">
              Cuando termines de hacer cambios, presiona <strong>Guardar cambios</strong>.
            </span>
          )}
        </div>
        <button
          className="admin-btn-primary"
          onClick={handleSaveAll}
          disabled={saving}
          style={{ flexShrink: 0 }}
        >
          {saving ? 'Guardando...' : 'Guardar cambios'}
        </button>
      </div>
    </>
  );
}
