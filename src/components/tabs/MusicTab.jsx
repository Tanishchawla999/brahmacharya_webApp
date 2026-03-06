import { S, COLORS as C } from '../shared/styles'
import { SONGS } from '../../data/songs'

export default function MusicTab() {
  return (
    <div style={S.sectionWrap}>
      <div style={{ ...S.card, background: 'rgba(245,200,66,0.08)', borderColor: 'rgba(245,200,66,0.3)', textAlign: 'center', marginBottom: 14 }}>
        <div style={{ fontSize: 13, color: C.muted, fontStyle: 'italic' }}>
          "Naam Kirtan is the greatest medicine for the diseased soul."
        </div>
      </div>

      {SONGS.map((sg, i) => (
        <div
          key={i}
          style={{ ...S.card, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14 }}
          onClick={() => window.open(sg.url, '_blank')}
        >
          <div style={{ fontSize: 34, flexShrink: 0 }}>{sg.icon}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 'bold', color: C.gold, fontSize: 14 }}>{sg.title}</div>
            <div style={{ ...S.mutedText, marginTop: 2 }}>Tap to listen on YouTube ↗</div>
          </div>
          <div style={{ fontSize: 22, color: C.muted }}>▶</div>
        </div>
      ))}

      <div style={{ ...S.card, textAlign: 'center' }}>
        <div style={{ ...S.goldTitle, marginBottom: 14, fontSize: 15 }}>🕉️ Hare Krishna Mahamantra</div>
        <div style={{ fontSize: 19, color: C.gold, letterSpacing: 2, lineHeight: 2.3, fontWeight: 'bold' }}>
          हरे कृष्ण हरे कृष्ण<br />
          कृष्ण कृष्ण हरे हरे<br />
          हरे राम हरे राम<br />
          राम राम हरे हरे
        </div>
        <div style={{ ...S.mutedText, marginTop: 12 }}>
          Whenever the mind wanders — chant 108 times. 🙏
        </div>
      </div>
    </div>
  )
}