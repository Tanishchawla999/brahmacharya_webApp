import { S } from './shared/styles'

const URGE_VERSE = {
  en: "While contemplating the objects of the senses, a person develops attachment for them, and from such attachment lust develops, and from lust anger arises.",
  hi: "विषयों का चिंतन करने से उनमें आसक्ति होती है, आसक्ति से कामना और कामना से क्रोध उत्पन्न होता है।",
  ref: "Bhagavad Gita 2.62",
}

export default function UrgeModal({ onResisted, onClose }) {
  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'rgba(0,0,0,0.88)',
      zIndex: 500,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 20,
    }}>
      <div style={{
        background: 'linear-gradient(160deg,#2d1b4e,#1a0010)',
        border: '2px solid #f5c842',
        borderRadius: 20,
        padding: 24,
        textAlign: 'center',
        maxWidth: 380,
        width: '100%',
      }}>
        <div style={{ fontSize: 54, marginBottom: 10 }}>⚔️</div>
        <div style={{ color: '#ff9999', fontWeight: 'bold', fontSize: 20, marginBottom: 12 }}>
          HOLD YOUR GROUND, WARRIOR!
        </div>
        <div style={{ fontSize: 13, fontStyle: 'italic', lineHeight: 1.8, color: '#f0e6c8', marginBottom: 6 }}>
          "{URGE_VERSE.en}"
        </div>
        <div style={{
          fontSize: 12, color: '#b8d4b8', lineHeight: 1.7,
          background: 'rgba(255,255,255,0.04)', borderRadius: 10,
          padding: '8px 12px', marginBottom: 6,
        }}>
          {URGE_VERSE.hi}
        </div>
        <div style={{ color: '#c9a84c', fontSize: 11, marginBottom: 18 }}>
          — {URGE_VERSE.ref}
        </div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            style={{ ...S.btn, background: 'linear-gradient(135deg,#1a6b2a,#2a9a1a)' }}
            onClick={onResisted}
          >
            ✅ I Resisted!
          </button>
          <button style={S.btnSm} onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}