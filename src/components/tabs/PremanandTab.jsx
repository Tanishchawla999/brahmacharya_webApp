import { S, COLORS as C } from '../shared/styles'
import { PREMANAND_QUOTES, PREMANAND_VIDEOS } from '../../data/premanandData'

export default function PremanandTab() {
  return (
    <div style={S.sectionWrap}>
      {/* Hero */}
      <div style={{ ...S.card, background: 'rgba(107,47,160,0.2)', borderColor: 'rgba(107,47,160,0.5)', textAlign: 'center' }}>
        <div style={{ fontSize: 52, marginBottom: 8 }}>🙏</div>
        <div style={{ color: C.gold, fontWeight: 'bold', fontSize: 18, marginBottom: 6 }}>Premanand Maharaj Ji</div>
        <div style={{ fontSize: 12, color: C.muted }}>
          Revered saint spreading the message of Bhakti, Brahmacharya & Krishna devotion
        </div>
      </div>

      {/* Quotes */}
      <div style={{ ...S.goldTitle, marginBottom: 10, fontSize: 14 }}>💬 Sacred Quotes</div>
      {PREMANAND_QUOTES.map((q, i) => (
        <div key={i} style={{ ...S.card, borderLeft: '3px solid #f5c842' }}>
          <div style={{ fontSize: 14, lineHeight: 1.8, color: C.text }}>{q}</div>
          <div style={{ ...S.mutedText, marginTop: 6 }}>— Premanand Maharaj Ji</div>
        </div>
      ))}

      {/* Videos */}
      <div style={{ ...S.goldTitle, margin: '16px 0 10px', fontSize: 14 }}>🎬 Watch on YouTube</div>
      {PREMANAND_VIDEOS.map((v, i) => (
        <div
          key={i}
          style={{ ...S.card, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14 }}
          onClick={() => window.open(v.url, '_blank')}
        >
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: 'linear-gradient(135deg,#c00,#800)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, flexShrink: 0,
          }}>▶</div>
          <div style={{ flex: 1 }}>
            <div style={{ color: C.gold, fontWeight: 'bold', fontSize: 13 }}>{v.title}</div>
            <div style={{ ...S.mutedText, marginTop: 2 }}>{v.desc}</div>
          </div>
          <div style={{ color: C.muted }}>↗</div>
        </div>
      ))}

      <button
        style={{ ...S.btn, width: '100%', marginBottom: 16 }}
        onClick={() => window.open('https://www.youtube.com/results?search_query=premanand+maharaj+ji', '_blank')}
      >
        🎬 Open YouTube Channel
      </button>
    </div>
  )
}