import { useState } from 'react'
import { S, COLORS as C } from '../shared/styles'
import { OSHO_QUOTES, OSHO_CATEGORIES } from '../../data/oshoQuotes'

export default function OshoTab() {
  const [filter, setFilter] = useState('All')
  const filtered = OSHO_QUOTES.filter(q => filter === 'All' || q.category === filter)

  return (
    <div style={S.sectionWrap}>
      <div style={S.card}>
        <div style={{ ...S.goldTitle, fontSize: 15, marginBottom: 12 }}>🌸 Osho's Wisdom</div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {OSHO_CATEGORIES.map(cat => (
            <button
              key={cat}
              style={{
                padding: '6px 14px', borderRadius: 20,
                border: '1px solid #6b4c2a',
                background: filter === cat ? 'linear-gradient(135deg,#6b2fa0,#c47d0e)' : 'rgba(255,255,255,0.05)',
                color: filter === cat ? '#fff' : C.muted,
                cursor: 'pointer', fontSize: 12,
              }}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.map((q, i) => (
        <div key={i} style={S.card}>
          <span style={{
            background: 'rgba(107,47,160,0.4)', borderRadius: 20,
            padding: '3px 12px', fontSize: 11, color: C.muted,
          }}>
            {q.category}
          </span>
          <div style={{ fontSize: 15, fontStyle: 'italic', lineHeight: 1.8, marginTop: 10, color: C.text }}>
            "{q.text}"
          </div>
          <div style={{ ...S.mutedText, marginTop: 8 }}>— Osho</div>
        </div>
      ))}
    </div>
  )
}