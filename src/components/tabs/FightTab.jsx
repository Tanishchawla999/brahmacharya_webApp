import { S, COLORS as C } from '../shared/styles'
import { GITA_CHAPTERS } from '../../data/gitaChapters'

const TECHNIQUES = [
  '🧊 Take an immediate cold shower',
  '📿 Chant Hare Krishna 108 times loudly',
  '🏃 Do 50 pushups right now',
  '📖 Open the Bhagavad Gita — any page',
  '☎️ Call a spiritual friend / Satsangi',
  '🌬️ Pranayama: 10 slow deep breaths',
  '🙏 Pray to your Ishta Devata immediately',
  '🚶 Go outside for a walk right now',
]

const WHY = [
  ['🔥', 'Ojas Shakti',      'Preserved vital energy sharpens intellect, memory and willpower.'],
  ['🏆', 'Victory Over Mind','Control over lust is the foundation of all spiritual progress.'],
  ['🌟', 'Divine Presence',  'A pure mind attracts divine grace and inner peace.'],
  ['💪', 'Physical Strength','The secret of saints, warriors and great achievers throughout history.'],
]

const FIGHT_VERSES = [7, 8, 9].map(i => GITA_CHAPTERS[1].verses[i])
  .concat([GITA_CHAPTERS[2].verses[3]])

export default function FightTab({ onUrge }) {
  return (
    <div style={S.sectionWrap}>
      {/* Hero button */}
      <div style={{ ...S.card, background: 'rgba(140,15,15,0.25)', borderColor: 'rgba(200,50,50,0.4)', textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 8 }}>⚔️</div>
        <div style={{ color: '#ff9999', fontWeight: 'bold', fontSize: 18, marginBottom: 12 }}>Fight Your Urges!</div>
        <button style={{ ...S.btn, width: '100%', fontSize: 15, padding: 14 }} onClick={onUrge}>
          🛡️ Give Me Strength Now!
        </button>
      </div>

      {/* Techniques */}
      <div style={S.card}>
        <div style={{ ...S.goldTitle, marginBottom: 12 }}>🛡️ Emergency Techniques</div>
        {TECHNIQUES.map((t, i) => (
          <div key={i} style={{ padding: '9px 0', fontSize: 13, borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#e0d5bb' }}>
            {t}
          </div>
        ))}
      </div>

      {/* Gita on Lust */}
      <div style={S.card}>
        <div style={{ ...S.goldTitle, marginBottom: 12 }}>🔱 Gita on Lust (Kaam)</div>
        {FIGHT_VERSES.map((v, i) => (
          <div key={i} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ color: '#f5c842', fontSize: 11, marginBottom: 4, fontWeight: 'bold' }}>BG {v.v}</div>
            <div style={S.verseEn}>{v.en}</div>
            <div style={S.verseHi}>{v.hi}</div>
          </div>
        ))}
      </div>

      {/* Why Brahmacharya */}
      <div style={S.card}>
        <div style={{ ...S.goldTitle, marginBottom: 12 }}>🧠 Why Brahmacharya?</div>
        {WHY.map(([ic, ti, de]) => (
          <div key={ti} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ fontSize: 24, flexShrink: 0 }}>{ic}</div>
            <div>
              <div style={{ color: '#f5c842', fontWeight: 'bold', fontSize: 13 }}>{ti}</div>
              <div style={{ fontSize: 12, color: '#c9a84c', marginTop: 2 }}>{de}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}