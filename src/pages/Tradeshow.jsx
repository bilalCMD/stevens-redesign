import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { IMG } from '../data/site.js'

const SHOWS = [
  { name: 'AGU Fall Meeting', location: 'San Francisco, CA', month: 'December' },
  { name: 'National Water Monitoring Conference', location: 'Denver, CO', month: 'April' },
  { name: 'World of Concrete / Irrigation Show', location: 'Las Vegas, NV', month: 'February' },
  { name: 'GSA Annual Meeting', location: 'Rotating US City', month: 'October' },
]

export default function Tradeshow() {
  return (
    <>
      <section className="page-hero has-img">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${IMG.about})` }} aria-hidden="true" />
        <div className="container">
          <nav className="crumbs light"><Link to="/">Home</Link> <i>/</i> <span>Tradeshow</span></nav>
          <h1>Tradeshow</h1>
          <p>Meet the Stevens team in person — see our sensors and Stevens-Connect Cloud™ platform live at industry events throughout the year.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="intro-lead" style={{ marginBottom: 32 }}>
              We regularly exhibit at hydrology, environmental science, and agricultural technology conferences across
              the country. Stop by our booth to see live demos, talk to our engineers, and get hands-on with our
              latest sensors. Check back here or see our full calendar on the{' '}
              <Link to="/page/conferences-events" style={{ color: 'var(--teal)', fontWeight: 600 }}>
                Conferences and Events
              </Link>{' '}
              page.
            </p>
          </Reveal>
          <div className="jobs-grid">
            {SHOWS.map((s, i) => (
              <Reveal delay={i * 80} key={s.name}>
                <div className="job-card">
                  <span className="badge badge-dark" style={{ alignSelf: 'flex-start' }}>{s.month}</span>
                  <h3>{s.name}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)' }}>{s.location}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link to="/contact" className="btn btn-navy" style={{ marginTop: 32 }}>Schedule a Meeting <i>↗</i></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
