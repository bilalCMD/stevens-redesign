import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import ProductCard from '../components/ProductCard.jsx'
import catalog from '../data/catalog.json'
import { IMG } from '../data/site.js'
import { ARTICLES } from '../data/articles.js'
import iconM2M from '../assets/figma/icon-m2m.svg'
import iconCloud from '../assets/figma/icon-cloud.svg'

const LATEST_INSIGHTS = ARTICLES.slice(0, 3)

const FEATURED_HANDLES = [
  'sage-professional-soil-moisture-meter',
  'gropoint-profile',
  'smart-pt',
  'van-essen-td-diver',
  'van-essen-instruments-ctd-diver',
  'stevens-satcomm',
  'sdx',
  'digital-temperature-sensor',
]

const IMPACT_CARDS = [
  {
    title: 'Soil Monitoring & Soil Hydrology',
    desc: 'Measure soil moisture, EC, salinity, temperature, water quality, and water movement for irrigation, turf, and land impact scientific research and environmental decisions.',
    img: IMG.soil,
    cta: 'View Soil Monitoring',
    slug: 'applications/soil-monitoring',
  },
  {
    title: 'Water Monitoring & Management',
    desc: 'Manage water movement with dependable level, flow, and quality measurements used in irrigation, flood management, water planning, and compliance.',
    img: IMG.water,
    cta: 'View Water Management',
    slug: 'applications/water-resource-management',
  },
  {
    title: 'Weather & Microclimate Monitoring',
    desc: 'Capture real-time microclimate weather data for agriculture, turf, and environmental research, small airports, industrial operations and forecasting.',
    img: IMG.weather,
    cta: 'View Weather Monitoring',
    slug: 'applications/weather-monitoring',
  },
  {
    title: 'Energy & Industrial Monitoring',
    desc: 'Track power quality, tank and reservoir levels, and remote asset conditions with rugged sensors and cellular telemetry built for unattended industrial sites.',
    img: IMG.energy,
    cta: 'View Applications',
    slug: 'applications',
  },
]

const ECOSYSTEM = [
  {
    name: 'M2M Connectivity',
    desc: 'Secure, reliable data transmission from any field site.',
    cta: 'Explore M2M Connectivity',
    slug: 'm2m',
    icon: iconM2M,
  },
  {
    name: 'Stevens-Connect Cloud™',
    desc: 'Your centralized platform to store, analyze, visualize, and share environmental data from every station in your network.',
    cta: 'Learn About The Cloud™',
    slug: 'm2m',
    icon: iconCloud,
  },
  {
    name: 'Turfpro',
    desc: 'Purpose-built monitoring for golf courses and sports turf — soil moisture, salinity, and weather data to guide irrigation and agronomy decisions.',
    cta: 'Explore Turfpro',
    slug: 'products/pogo',
    icon: iconCloud,
  },
  {
    name: 'Dyacon Live',
    desc: 'Live weather station data and alerts for agriculture, aviation, and public safety, viewable anywhere from a web browser or mobile device.',
    cta: 'Explore Dyacon Live',
    slug: 'products/dyacon-weather-stations',
    icon: iconCloud,
  },
]

export default function Home() {
  const [dot, setDot] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setDot((d) => (d + 1) % 5), 3200)
    return () => clearInterval(id)
  }, [])
  const featured = FEATURED_HANDLES.map((h) => catalog.find((p) => p.handle === h)).filter(Boolean)

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" id="top">
        <div className="hero-bg kenburns" style={{ backgroundImage: `url(${IMG.hero})` }} aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container hero-inner-simple">
          <h1>Turning Environmental Measurements into Meaningful Insight And Action</h1>
          <p>
            For over a century, Stevens has helped scientists, water managers, engineers, and
            environmental agencies turn raw field data into confident decisions. Our sensors and
            data systems are built to deliver accuracy you can trust, anywhere the environment demands it.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="btn btn-hero-outline">
              Explore Our Products <i>↗</i>
            </Link>
            <Link to="/page/applications" className="btn btn-hero-outline">
              View Applications <i>↗</i>
            </Link>
          </div>
        </div>
        <div className="hero-dots" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={i === dot ? 'active' : ''} />
          ))}
        </div>
      </section>

      {/* ===== IMPACT ===== */}
      <section className="section impact">
        <div className="container">
          <Reveal>
            <div className="section-head split">
              <div>
                <h2>Where Stevens Monitoring Insights Make an Impact</h2>
                <p>From soil health to watershed performance to local weather patterns our sensing technology empowers the work that protects natural resources.</p>
              </div>
              <Link to="/page/applications" className="btn btn-navy">Learn more <i>↗</i></Link>
            </div>
          </Reveal>
          <div className="impact-grid">
            {IMPACT_CARDS.map((c, i) => (
              <Reveal delay={i * 100} key={c.title}>
                <Link to={`/page/${c.slug}`} className="impact-card">
                  <img src={c.img} alt="" loading="lazy" />
                  <div className="impact-card-body">
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                    <span className="btn btn-white-outline btn-sm">{c.cta}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="impact-footnote">
              By measuring atmospheric conditions, soil moisture and water movement, and surface and
              groundwater dynamics, Stevens provides reliable, defensible data that supports agriculture,
              turf, water management, infrastructure, protection, and environmental research.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== ECOSYSTEM ===== */}
      <section className="ecosystem">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <h2>SkyView360 and Turfpro Connecting Sensors to Cloud Analytics, Algorithms, and Action</h2>
              <p>Stevens provides end-to-end connectivity, so your field data never stops moving. Whether you need rugged telemetry hardware or a smarter way to visualize your projects, we make data collection effortless.</p>
            </div>
          </Reveal>
          <div className="eco-grid">
            {ECOSYSTEM.map((e, i) => (
              <Reveal delay={i * 90} key={e.name}>
                <div className="eco-item">
                  <div className="eco-icon">
                    <img src={e.icon} alt="" />
                  </div>
                  <h3>{e.name}</h3>
                  <p>{e.desc}</p>
                  <Link to={`/page/${e.slug}`} className="btn btn-navy btn-sm">{e.cta} <i>↗</i></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="section insights">
        <div className="container">
          <Reveal>
            <div className="section-head split">
              <div>
                <h2>Featured Products</h2>
                <p>A selection from our full catalog — every order is confirmed by our sales team by email within one business day.</p>
              </div>
              <Link to="/shop" className="btn btn-navy">View all {catalog.length} products <i>↗</i></Link>
            </div>
          </Reveal>
          <div className="product-grid">
            {featured.map((p, i) => (
              <Reveal delay={(i % 4) * 90} key={p.sku}>
                <ProductCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LATEST INSIGHTS ===== */}
      <section className="section insights" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <Reveal>
            <div className="section-head split">
              <div>
                <h2>The Latest Insights &amp; Environmental Knowledge</h2>
                <p>Explore new research, real-world case studies, and industry insights — curated to help environmental professionals stay informed and make smarter decisions.</p>
              </div>
              <Link to="/page/articles" className="btn btn-navy">View All Articles <i>↗</i></Link>
            </div>
          </Reveal>
          <div className="insight-grid">
            {LATEST_INSIGHTS.map((a, i) => (
              <Reveal delay={i * 90} key={a.slug}>
                <Link to={`/page/articles/${a.slug}`} className="insight-card">
                  <div className="insight-img"><img src={a.img} alt={a.title} /></div>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS / ABOUT ===== */}
      <section className="section stats-band">
        <div className="container stats-inner">
          <Reveal>
            <div>
              <h2>Over 110 Years of Environmental Innovation</h2>
              <p>
                Since 1911, Stevens has pioneered environmental measurement—from designing the
                nation's first water level recorders to today's advanced sensor platforms. Across
                generations, our mission remains unchanged: delivering the most reliable data
                possible to the people who safeguard our soil, water, and climate.
              </p>
              <p>Our legacy is long, but our commitment is simple—build instruments that last and data you can trust.</p>
              <Link to="/page/about-us" className="btn btn-navy">Learn More About Us <i>↗</i></Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="stats-media">
              <img src={IMG.about} alt="Modern glass building" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
