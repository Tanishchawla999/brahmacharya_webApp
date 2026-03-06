import { S, COLORS as C } from '../shared/styles'
import { GITA_CHAPTERS } from '../../data/gitaChapters'
import { PREMANAND_QUOTES } from '../../data/premanandData'

const CHECKLIST = [
  '🌅 Wake up at Brahma Muhurta (4–6 AM)',
  '🧘 Meditate for 20 minutes',
  '📿 Chant 108 times',
  '🚿 Cold bath (Jal Snan)',
  '📖 Read one chapter of Gita',
  '🥗 Eat only Sattvic food',
  '🏃 Exercise / Yoga',
  '📵 No screens after 9 PM',
]

export default function HomeTab({ streak, setStreak, qIdx, setQIdx, pmIdx, setPmIdx, onUrge }) {
  const verse = GITA_CHAPTERS[1].verses[qIdx % GITA_CHAPTERS[1].verses.length]
  const quote = PREMANAND_QUOTES[pmIdx]

  return (
    <div style={S.sectionWrap}>
      {/* Gita verse */}
      <div style={S.card}>
        <div style={{ ...S.goldTitle, marginBottom: 10, fontSize: 13 }}>📖 Today's Gita Verse</div>
        <div style={S.verseEn}>{verse.en}</div>
        <div style={S.verseHi}>{verse.hi}</div>
        <div style={{ ...S.mutedText, marginTop: 6 }}>— BG {verse.v}</div>
        <button style={{ ...S.btnSm, marginTop: 10 }} onClick={() => setQIdx(i => i + 1)}>
          Next Verse →
        </button>
      </div>

      {/* Premanand quote */}
      <div style={S.card}>
        <div style={{ ...S.goldTitle, marginBottom: 10, fontSize: 13 }}>🙏 Premanand Maharaj Ji</div>
        <div style={{ fontSize: 14, lineHeight: 1.8, color: C.text }}>{quote}</div>
        <div style={{ ...S.mutedText, marginTop: 6 }}>— Premanand Maharaj Ji</div>
        <button style={{ ...S.btnSm, marginTop: 10 }} onClick={() => setPmIdx(i => (i + 1) % PREMANAND_QUOTES.length)}>
          Next Quote →
        </button>
      </div>

      {/* Checklist */}
      <div style={{ ...S.card, background: C.purpleBg, borderColor: C.purpleBorder }}>
        <div style={{ ...S.goldTitle, marginBottom: 12, fontSize: 13 }}>⚡ Today's Sadhana</div>
        {CHECKLIST.map((t, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
            fontSize: 13, color: '#e0d5bb',
          }}>
            {t}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <button style={{ ...S.btn, width: '100%', fontSize: 15, padding: '13px 20px' }} onClick={onUrge}>
          ⚔️ I Need Strength NOW!
        </button>
        <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
          <button style={{ ...S.btnSm, flex: 1 }} onClick={() => setStreak(n => n + 1)}>+ Add Day</button>
          <button style={{ ...S.btnSm, flex: 1, color: '#ff6b6b' }} onClick={() => setStreak(0)}>Reset Streak</button>
        </div>
      </div>
    </div>
  )
}