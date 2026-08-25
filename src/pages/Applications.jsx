import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { IMG } from '../data/site.js'
import { APPLICATIONS } from '../data/applicationsContent.js'

const APPS = {
  'soil-monitoring': {
    title: 'Soil Monitoring',
    eyebrow: 'Application',
    img: IMG.soil,
    lead: 'Measure soil moisture, electrical conductivity, salinity, temperature, and water movement to support irrigation scheduling, turf management, and environmental research.',
    body: [
      'Stevens soil sensors give growers, agronomists, and researchers a direct, real-time view of what is happening below the surface — moisture content at multiple depths, salinity trends, and matric potential — so irrigation and land-management decisions are based on data, not guesswork.',
      'Sensors can be deployed as standalone loggers for spot-checks or wired into a full Stevens-Connect Cloud™ network for continuous, remote monitoring across an entire field, farm, or research site, with alarms for thresholds you set.',
    ],
    useCases: ['Precision irrigation scheduling', 'Turf & sports-field agronomy', 'Soil hydrology research', 'Land reclamation & compliance monitoring'],
    shop: '/shop?cat=Soil%20Monitoring',
  },
  'water-resource-management': {
    title: 'Water Resource Management',
    eyebrow: 'Application',
    img: IMG.water,
    lead: 'Dependable level, flow, and water-quality measurements for irrigation districts, flood management authorities, and water utilities.',
    body: [
      'From river gaging stations to reservoir level monitoring, Stevens instruments have been the standard for water resource professionals for over a century. Pressure transducers, non-contact radar, and shaft encoders cover every deployment scenario, from shallow wells to flood-stage rivers.',
      'Paired with Stevens-Connect Cloud™, agencies get real-time telemetry, automated alarms for flood or drought thresholds, and a single dashboard for every station in their network — supporting both day-to-day operations and regulatory reporting.',
    ],
    useCases: ['Flood warning networks', 'Groundwater & well monitoring', 'Reservoir & dam level tracking', 'Irrigation district water accounting'],
    shop: '/shop?cat=Water%20Level',
  },
  'weather-monitoring': {
    title: 'Weather Monitoring',
    eyebrow: 'Application',
    img: IMG.weather,
    lead: 'Real-time microclimate weather data for agriculture, turf management, environmental research, small airports, and industrial operations.',
    body: [
      'Localized weather conditions — temperature, wind, rainfall, humidity, and solar radiation — often diverge sharply from the nearest regional forecast. Stevens and Dyacon weather stations put accurate, site-specific data directly in your hands.',
      'Stations report live to Stevens-Connect Cloud™ and Dyacon Live, so teams can track conditions and set custom alerts from any browser or mobile device, without waiting on a nightly data pull.',
    ],
    useCases: ['Agricultural microclimate tracking', 'Golf course & sports turf weather', 'Airfield weather monitoring', 'Frost & spray-timing alerts'],
    shop: '/shop?cat=Weather',
  },
}

const ALL_APPS = [
  { slug: 'soil-monitoring', title: 'Soil Monitoring', img: IMG.soil, desc: 'Moisture, EC, salinity, and water movement for irrigation and research.' },
  { slug: 'water-resource-management', title: 'Water Resource Management', img: IMG.water, desc: 'Level, flow, and quality measurements for rivers, wells, and reservoirs.' },
  { slug: 'weather-monitoring', title: 'Weather Monitoring', img: IMG.weather, desc: 'Real-time microclimate data for agriculture and industrial sites.' },
]

function ApplicationsHub() {
  return (
    <>
      <section className="page-hero has-img">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${IMG.field})` }} aria-hidden="true" />
        <div className="container">
          <nav className="crumbs light"><Link to="/">Home</Link> <i>/</i> <span>Applications</span></nav>
          <h1>Applications</h1>
          <p>Purpose-built monitoring solutions across soil, water, and weather — wherever the environment demands accuracy.</p>
        </div>
      </section>
      <section className="section">
        <div className="container case-list">
          {ALL_APPS.map((a, i) => (
            <Reveal delay={i * 80} key={a.slug}>
              <div className={`case-row ${i % 2 === 1 ? 'reverse' : ''}`}>
                <img src={a.img} alt={a.title} className="case-img" />
                <div className="case-body">
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <Link to={`/page/applications/${a.slug}`} className="btn btn-navy btn-sm">Learn More <i>↗</i></Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

function ApplicationDetail({ data, slug }) {
  const real = APPLICATIONS.find((a) => a.slug === slug)
  return (
    <>
      <section className="page-hero has-img">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${real?.hero || data.img})` }} aria-hidden="true" />
        <div className="container">
          <nav className="crumbs light">
            <Link to="/">Home</Link> <i>/</i> <Link to="/page/applications">Applications</Link> <i>/</i> <span>{data.title}</span>
          </nav>
          <h1>{data.title}</h1>
          <p>{data.lead}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {(real?.sections || []).map((s, i) => (
            <Reveal delay={i * 60} key={i}>
              <div className="app-section">
                {s.heading && <h2>{s.heading}</h2>}
                {s.prose.map((p, j) => <p className="intro-lead" key={j}>{p}</p>)}
                {s.topics.length > 0 && (
                  <ul className="app-topics">
                    {s.topics.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
          {!real && data.body.map((p, i) => <p className="intro-lead" key={i}>{p}</p>)}
          <div className="hero-actions" style={{ marginTop: 30 }}>
            <Link to={data.shop} className="btn btn-navy">Shop Related Products <i>↗</i></Link>
            <Link to="/contact" className="btn btn-outline">Talk To Us <i>↗</i></Link>
          </div>
        </div>
      </section>

      {real?.sensors?.tiles?.length > 0 && (
        <section className="section au-focus">
          <div className="container">
            <h2 className="center-title">{real.sensors.heading}</h2>
            <div className="app-tiles">
              {real.sensors.tiles.map((t, i) => (
                <Reveal delay={i * 60} key={t.title}>
                  <div className="app-tile" style={{ background: t.colour }}>
                    <h3>{t.title}</h3>
                    {t.body && <p>{t.body}</p>}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default function Applications() {
  const slug = useParams()['*'] || ''
  const key = slug.replace(/^applications\/?/, '')
  const data = APPS[key]
  if (!data) return <ApplicationsHub />
  return <ApplicationDetail data={data} slug={key} />
}
