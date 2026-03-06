import { useState } from 'react'
import { S, COLORS as C } from '../shared/styles'
import { GITA_CHAPTERS } from '../../data/gitaChapters'

export default function GitaTab() {
  const [chap, setChap]     = useState(null)
  const [lang, setLang]     = useState('both')
  const [search, setSearch] = useState('')

  const results = search.trim().length > 1
    ? GITA_CHAPTERS.flatMap(c =>
        c.verses
          .filter(v =>
            v.en.toLowerCase().includes(search.toLowerCase()) ||
            v.hi.includes(search) ||
            v.v.includes(search)
          )
          .map(v => ({ ...v, cn: c.num, ct: c.title }))
      )
    : []

  return (
    <div style={S.sectionWrap}>
      {/* Header card */}
      <div style={S.card}>
        <div style={{ ...S.goldTitle, fontSize: 15, marginBottom: 4 }}>📖 Complete Bhagavad Gita</div>
        <div style={{ ...S.mutedText, marginBottom: 12 }}>All 18 Chapters • English + हिन्दी Translation</div>
        <input
          style={S.inp}
          placeholder="🔍 Search verses (keyword or e.g. 2.47)..."
          value={search}
          onChange={e => { setSearch(e.target.value); setChap(null) }}
        />
        {!search && (
          <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
            {[['both','EN + हिन्दी'],['en','English Only'],['hi','हिन्दी Only']].map(([v, l]) => (
              <button
                key={v}
                style={{
                  ...S.btnSm, flex: 1, fontSize: 11,
                  background: lang === v ? 'linear-gradient(135deg,#6b2fa0,#c47d0e)' : '',
                  color: lang === v ? '#fff' : C.gold,
                }}
                onClick={() => setLang(v)}
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Search results */}
      {search.trim().length > 1 ? (
        <div>
          <div style={{ ...S.goldTitle, marginBottom: 12, fontSize: 13 }}>
            {results.length} verse{results.length !== 1 ? 's' : ''} found
          </div>
          {results.length === 0 && (
            <div style={{ ...S.mutedText, textAlign: 'center', padding: 20 }}>No verses found. Try another keyword.</div>
          )}
          {results.map((v, i) => (
            <div key={i} style={S.card}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: C.gold, fontSize: 12, fontWeight: 'bold' }}>BG {v.v}</span>
                <span style={S.mutedText}>Chapter {v.cn}: {v.ct}</span>
              </div>
              <div style={S.verseEn}>{v.en}</div>
              <div style={S.verseHi}>{v.hi}</div>
            </div>
          ))}
        </div>

      ) : chap === null ? (
        /* Chapter list */
        <div>
          {GITA_CHAPTERS.map(c => (
            <div key={c.num} style={{ ...S.card, cursor: 'pointer' }} onClick={() => setChap(c.num)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ color: C.gold, fontWeight: 'bold', fontSize: 14 }}>
                    Chapter {c.num}: {c.title}
                  </div>
                  <div style={S.mutedText}>{c.sub} • {c.verses.length} verses</div>
                </div>
                <div style={{ color: C.muted, fontSize: 22 }}>›</div>
              </div>
            </div>
          ))}
        </div>

      ) : (
        /* Verses of selected chapter */
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <button style={S.btnSm} onClick={() => setChap(null)}>← Chapters</button>
            <div>
              <div style={{ color: C.gold, fontWeight: 'bold', fontSize: 14 }}>
                Chapter {chap}: {GITA_CHAPTERS[chap - 1].title}
              </div>
              <div style={S.mutedText}>{GITA_CHAPTERS[chap - 1].sub}</div>
            </div>
          </div>

          {GITA_CHAPTERS[chap - 1].verses.map((v, i) => (
            <div key={i} style={S.card}>
              <div style={{ color: C.gold, fontWeight: 'bold', fontSize: 12, marginBottom: 8 }}>
                Verse {v.v}
              </div>
              {(lang === 'en' || lang === 'both') && <div style={S.verseEn}>{v.en}</div>}
              {(lang === 'hi' || lang === 'both') && (
                <div style={{ ...S.verseHi, marginTop: lang === 'both' ? 10 : 0 }}>{v.hi}</div>
              )}
            </div>
          ))}

          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            {chap > 1  && <button style={{ ...S.btnSm, flex: 1 }} onClick={() => setChap(chap - 1)}>← Chapter {chap - 1}</button>}
            {chap < 18 && <button style={{ ...S.btnSm, flex: 1 }} onClick={() => setChap(chap + 1)}>Chapter {chap + 1} →</button>}
          </div>
        </div>
      )}
    </div>
  )
}