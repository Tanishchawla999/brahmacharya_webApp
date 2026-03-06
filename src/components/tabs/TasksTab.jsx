import { useState } from 'react'
import { S, COLORS as C } from '../shared/styles'

export default function TasksTab({ tasks, setTasks, alerts, setAlerts }) {
  const [newTask,  setNewTask]  = useState('')
  const [newAlert, setNewAlert] = useState({ label: '', time: '' })

  const addTask = () => {
    if (!newTask.trim()) return
    setTasks(p => [...p, { id: Date.now(), text: newTask.trim(), done: false }])
    setNewTask('')
  }

  const addAlert = () => {
    if (!newAlert.label || !newAlert.time) return
    setAlerts(p => [...p, { id: Date.now(), ...newAlert, fired: false }])
    setNewAlert({ label: '', time: '' })
  }

  const completed = tasks.filter(t => t.done).length

  return (
    <div style={S.sectionWrap}>
      {/* Alerts */}
      <div style={S.card}>
        <div style={{ ...S.goldTitle, fontSize: 15, marginBottom: 14 }}>🔔 Sadhana Alerts</div>
        <input
          style={{ ...S.inp, marginBottom: 8 }}
          placeholder="Alert label (e.g. Meditation time)"
          value={newAlert.label}
          onChange={e => setNewAlert(p => ({ ...p, label: e.target.value }))}
        />
        <input
          style={{ ...S.inp, marginBottom: 8 }}
          type="time"
          value={newAlert.time}
          onChange={e => setNewAlert(p => ({ ...p, time: e.target.value }))}
        />
        <button style={{ ...S.btn, width: '100%' }} onClick={addAlert}>+ Set Alert</button>

        <div style={{ marginTop: 12 }}>
          {alerts.length === 0 && (
            <div style={{ ...S.mutedText, textAlign: 'center' }}>No alerts set yet.</div>
          )}
          {alerts.map(a => (
            <div key={a.id} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}>
              <div>
                <div style={{ fontSize: 13, color: C.text }}>🔔 {a.label}</div>
                <div style={S.mutedText}>⏰ {a.time}</div>
              </div>
              <button
                style={{ ...S.btnSm, color: '#ff6b6b' }}
                onClick={() => setAlerts(p => p.filter(x => x.id !== a.id))}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Tasks */}
      <div style={S.card}>
        <div style={{ ...S.goldTitle, fontSize: 15, marginBottom: 14 }}>📋 Sadhana Tasks</div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          <input
            style={{ ...S.inp, flex: 1 }}
            placeholder="Add a spiritual task..."
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTask()}
          />
          <button style={{ ...S.btn, padding: '11px 16px' }} onClick={addTask}>+</button>
        </div>

        {tasks.length === 0 && (
          <div style={{ ...S.mutedText, textAlign: 'center' }}>No tasks yet. Add your daily sadhana!</div>
        )}

        {tasks.map(t => (
          <div key={t.id} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}>
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => setTasks(p => p.map(x => x.id === t.id ? { ...x, done: !x.done } : x))}
              style={{ width: 18, height: 18, accentColor: C.gold }}
            />
            <div style={{
              flex: 1, fontSize: 13,
              color: t.done ? '#777' : C.text,
              textDecoration: t.done ? 'line-through' : 'none',
            }}>
              {t.text}
            </div>
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ff6b6b', fontSize: 16 }}
              onClick={() => setTasks(p => p.filter(x => x.id !== t.id))}
            >
              🗑
            </button>
          </div>
        ))}

        {tasks.length > 0 && (
          <div style={{ ...S.mutedText, textAlign: 'center', marginTop: 10 }}>
            {completed}/{tasks.length} completed 🙏
          </div>
        )}
      </div>
    </div>
  )
}
