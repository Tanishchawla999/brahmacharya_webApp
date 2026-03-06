import { useState, useEffect } from 'react'
import Header     from './components/Header'
import BottomNav  from './components/BottomNav'
import UrgeModal  from './components/UrgeModal'
import HomeTab      from './components/tabs/HomeTab'
import FightTab     from './components/tabs/FightTab'
import GitaTab      from './components/tabs/GitaTab'
import PremanandTab from './components/tabs/PremanandTab'
import OshoTab      from './components/tabs/OshoTab'
import TasksTab     from './components/tabs/TasksTab'
import MusicTab     from './components/tabs/MusicTab'

// ── Tiny localStorage helpers ────────────────────────────────────────────────
const gs = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch { return d } }
const ss = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch {} }

export default function App() {
  const [tab,    setTab]    = useState('home')
  const [streak, setStreak] = useState(() => gs('sd_streak', 0))
  const [tasks,  setTasks]  = useState(() => gs('sd_tasks',  []))
  const [alerts, setAlerts] = useState(() => gs('sd_alerts', []))
  const [urge,   setUrge]   = useState(false)
  const [qIdx,   setQIdx]   = useState(0)
  const [pmIdx,  setPmIdx]  = useState(0)

  // Persist to localStorage
  useEffect(() => { ss('sd_streak', streak) }, [streak])
  useEffect(() => { ss('sd_tasks',  tasks)  }, [tasks])
  useEffect(() => { ss('sd_alerts', alerts) }, [alerts])

  // Alert checker — runs every 30 seconds
  useEffect(() => {
    const iv = setInterval(() => {
      const now = new Date()
      const hm  = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`
      alerts.forEach(a => {
        if (a.time === hm && !a.fired) {
          alert(`🔔 Sadhana Alert: ${a.label}`)
          setAlerts(p => p.map(x => x.id === a.id ? { ...x, fired: true } : x))
        }
      })
    }, 30000)
    return () => clearInterval(iv)
  }, [alerts])

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg,#0d0b1e 0%,#1a0a2e 50%,#0d1a1a 100%)',
      color: '#f0e6c8',
      fontFamily: 'Georgia, serif',
      maxWidth: 430,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Emergency urge modal */}
      {urge && (
        <UrgeModal
          onResisted={() => { setStreak(n => n + 1); setUrge(false) }}
          onClose={() => setUrge(false)}
        />
      )}

      <Header streak={streak} />

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 72 }}>
        {tab === 'home'      && <HomeTab      streak={streak} setStreak={setStreak} qIdx={qIdx} setQIdx={setQIdx} pmIdx={pmIdx} setPmIdx={setPmIdx} onUrge={() => setUrge(true)} />}
        {tab === 'fight'     && <FightTab     onUrge={() => setUrge(true)} />}
        {tab === 'gita'      && <GitaTab      />}
        {tab === 'premanand' && <PremanandTab />}
        {tab === 'osho'      && <OshoTab      />}
        {tab === 'tasks'     && <TasksTab     tasks={tasks} setTasks={setTasks} alerts={alerts} setAlerts={setAlerts} />}
        {tab === 'music'     && <MusicTab     />}
      </div>

      <BottomNav tab={tab} setTab={setTab} />
    </div>
  )
}