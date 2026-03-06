const TABS = [
    { id: 'home',      e: '🏠', l: 'Home'      },
    { id: 'fight',     e: '⚔️', l: 'Fight'     },
    { id: 'gita',      e: '📖', l: 'Gita'      },
    { id: 'premanand', e: '🙏', l: 'Maharaj Ji'},
    { id: 'osho',      e: '📿', l: 'Osho'      },
    { id: 'tasks',     e: '✅', l: 'Sadhana'   },
    { id: 'music',     e: '🎶', l: 'Bhajans'   },
  ]
  
  export default function BottomNav({ tab, setTab }) {
    return (
      <nav style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: 430,
        background: 'linear-gradient(90deg,#0f0718,#0a1410)',
        borderTop: '1px solid #3a2a1a',
        display: 'flex',
        zIndex: 100,
      }}>
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              flex: 1,
              padding: '9px 2px 7px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              borderTop: tab === t.id ? '2px solid #f5c842' : '2px solid transparent',
              opacity: tab === t.id ? 1 : 0.4,
              transition: 'all 0.2s',
            }}
          >
            <span style={{ fontSize: 18 }}>{t.e}</span>
            <span style={{
              fontSize: 8,
              color: tab === t.id ? '#f5c842' : '#c9a84c',
              fontFamily: 'sans-serif',
              fontWeight: tab === t.id ? 'bold' : 'normal',
            }}>
              {t.l}
            </span>
          </button>
        ))}
      </nav>
    )
  }