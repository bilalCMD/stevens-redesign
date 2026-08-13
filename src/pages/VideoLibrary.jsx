import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { IMG } from '../data/site.js'

const VIDEOS = [
  { title: 'Installing the Smart PT Pressure Transducer', cat: 'Product Setup', dur: '4:12' },
  { title: 'Getting Started with Stevens-Connect Cloud™', cat: 'Software', dur: '6:35' },
  { title: 'HSI Radar Sensor: Non-Contact Level Monitoring', cat: 'Product Overview', dur: '3:48' },
  { title: 'Soil Moisture Basics for Irrigation Scheduling', cat: 'Application', dur: '8:02' },
  { title: 'Configuring Alarms in Stevens M2M®', cat: 'Software', dur: '5:20' },
  { title: 'Deploying a Weather Station Network', cat: 'Application', dur: '7:14' },
]

export default function VideoLibrary() {
  return (
    <>
      <section className="page-hero has-img">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${IMG.about})` }} aria-hidden="true" />
        <div className="container">
          <nav className="crumbs light"><Link to="/">Home</Link> <i>/</i> <span>Video Library</span></nav>
          <h1>Video Library</h1>
          <p>Product walkthroughs, software tutorials, and application guides from the Stevens team.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="jobs-grid">
            {VIDEOS.map((v, i) => (
              <Reveal delay={i * 60} key={v.title}>
                <div className="job-card">
                  <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.75)' }}>{v.cat}</span>
                  <h3>{v.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{v.dur}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p style={{ marginTop: 32, color: 'var(--muted)' }}>
              Looking for a specific topic? <Link to="/contact" style={{ color: 'var(--teal)', fontWeight: 600 }}>Contact our support team</Link> and we&rsquo;ll point you in the right direction.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
