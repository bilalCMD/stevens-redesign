import { useState } from 'react'
import confHero from '../assets/figma/conf-hero.jpg'
import confSide from '../assets/figma/conf-side.jpg'

const DAY_LABELS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function buildCalendar(year, month) {
  const first = new Date(year, month, 1)
  const startDay = first.getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month, 0).getDate()
  const cells = []
  for (let i = startDay - 1; i >= 0; i--) cells.push({ day: daysInPrevMonth - i, muted: true })
  for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, muted: false })
  while (cells.length % 7 !== 0) cells.push({ day: cells.length - (startDay + daysInMonth) + 1, muted: true })
  return cells
}

export default function Conferences() {
  const now = new Date()
  const [cursor, setCursor] = useState({ year: now.getFullYear(), month: now.getMonth() })
  const cells = buildCalendar(cursor.year, cursor.month)

  const shift = (delta) => {
    setCursor((c) => {
      let month = c.month + delta
      let year = c.year
      if (month < 0) { month = 11; year -= 1 }
      if (month > 11) { month = 0; year += 1 }
      return { year, month }
    })
  }

  return (
    <>
      <section className="au-hero" style={{ minHeight: 460 }}>
        <div className="au-hero-bg" style={{ backgroundImage: `url(${confHero})` }} aria-hidden="true" />
        <div className="au-hero-overlay" aria-hidden="true" />
        <h1 style={{ textAlign: 'center', width: '100%' }}>Conferences and Events</h1>
      </section>

      <section className="section">
        <div className="container">
          <div className="conf-panel">
            <img src={confSide} alt="Stevens at a conference" className="conf-side-img" />
            <div className="conf-cal">
              <div className="conf-cal-head">
                <span>{MONTH_NAMES[cursor.month]} {cursor.year}</span>
                <div className="conf-cal-nav">
                  <button onClick={() => shift(-1)} aria-label="Previous month">‹</button>
                  <button onClick={() => shift(1)} aria-label="Next month">›</button>
                </div>
              </div>
              <div className="conf-cal-grid">
                {DAY_LABELS.map((d) => <span key={d} className="conf-cal-label">{d}</span>)}
                {cells.map((c, i) => (
                  <span key={i} className={`conf-cal-day ${c.muted ? 'muted' : ''}`}>{String(c.day).padStart(2, '0')}</span>
                ))}
              </div>
              <p className="conf-no-events">No events found</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
