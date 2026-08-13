import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { IMG } from '../data/site.js'

const TERMS = [
  { term: 'Datalogger', def: 'A device that records sensor readings over time, either on internal memory or by transmitting them to a remote server.' },
  { term: 'EC (Electrical Conductivity)', def: 'A measurement of a soil or water sample’s ability to conduct an electrical current, used as an indicator of salinity and dissolved-solids content.' },
  { term: 'Matric Potential', def: 'The energy required to remove water from soil against capillary and adsorptive forces — a key measure of plant water availability.' },
  { term: 'Non-Contact Sensor', def: 'A sensor, such as a radar or ultrasonic level sensor, that measures water level or flow without touching the water surface.' },
  { term: 'Pressure Transducer', def: 'A submersible sensor that measures water level by converting hydrostatic pressure into an electrical signal.' },
  { term: 'Shaft Encoder', def: 'A mechanical sensor that tracks water level using a float and pulley system connected to a rotating shaft.' },
  { term: 'Stage', def: 'The elevation of a water surface above a fixed reference point, commonly used in river and reservoir gaging.' },
  { term: 'Telemetry', def: 'The automated transmission of measurement data from a remote monitoring site to a central system, typically over cellular or satellite networks.' },
  { term: 'Tipping Bucket Rain Gauge', def: 'A rain gauge that measures precipitation by counting the tips of a small calibrated bucket as it fills and empties.' },
]

export default function Glossary() {
  return (
    <>
      <section className="page-hero has-img">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${IMG.field})` }} aria-hidden="true" />
        <div className="container">
          <nav className="crumbs light"><Link to="/">Home</Link> <i>/</i> <span>Glossary</span></nav>
          <h1>Glossary</h1>
          <p>Common terms used in environmental monitoring, hydrology, and instrumentation.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          {TERMS.map((t, i) => (
            <Reveal delay={i * 40} key={t.term}>
              <div style={{ borderBottom: '1px solid var(--line)', padding: '20px 0' }}>
                <h3 style={{ marginBottom: 6 }}>{t.term}</h3>
                <p style={{ color: 'var(--muted)' }}>{t.def}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
