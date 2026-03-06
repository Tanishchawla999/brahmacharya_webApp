
export default function Header({ streak }) {
    return (
      <div style={{
        background: 'linear-gradient(90deg,#2d1b4e,#1a3a2a)',
        padding: '14px 16px 10px',
        borderBottom: '1px solid #6b4c2a',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 'bold', color: '#f5c842', letterSpacing: 1 }}>
              🕉️ Brahmacharya Sadhana
            </div>
            <div style={{ fontSize: 10, color: '#c9a84c', marginTop: 2 }}>
              ब्रह्मचर्य साधना • Purify Mind & Soul
            </div>
          </div>
          <div style={{
            background: 'linear-gradient(135deg,#f5c842,#e07b20)',
            borderRadius: 20,
            padding: '5px 14px',
            fontWeight: 'bold',
            color: '#1a0a2e',
            fontSize: 14,
          }}>
            🔥 {streak} Days
          </div>
        </div>
      </div>
    )
  }