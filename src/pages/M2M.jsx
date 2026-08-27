import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { IMG } from '../data/site.js'
import { figmaPage } from '../data/figmaPages.js'
import iconM2M from '../assets/figma/icon-m2m.svg'
import iconCloud from '../assets/figma/icon-cloud.svg'

const FEATURES = [
  {
    icon: iconM2M,
    title: 'Stevens M2M®',
    desc: 'Secure, reliable machine-to-machine data transmission from any field site over cellular, satellite, or radio — built for stations that can go months between site visits.',
  },
  {
    icon: iconCloud,
    title: 'Stevens-Connect Cloud™',
    desc: 'Your centralized platform to store, analyze, visualize, and share environmental data from every station in your network, accessible from any browser.',
  },
]

const CAPABILITIES = [
  'Real-time data logging & remote telemetry',
  'Custom threshold alarms via SMS and email',
  'Historical data export and reporting tools',
  'Multi-site dashboards for distributed networks',
  'API access for integration with third-party systems',
  'Role-based access for teams and consultants',
]

const SOFTWARE = ['skyview360', 'steelhead', 'viper']

export default function M2M() {
  return (
    <>
      <section className="page-hero has-img">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${IMG.about})` }} aria-hidden="true" />
        <div className="container">
          <nav className="crumbs light"><Link to="/">Home</Link> <i>/</i> <span>Data Management Software</span></nav>
          <h1>Data Management Software</h1>
          <p>From sensor to decision — Stevens M2M® and Stevens-Connect Cloud™ turn raw field readings into data you can act on, anywhere.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eco-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {FEATURES.map((f, i) => (
              <Reveal delay={i * 100} key={f.title}>
                <div className="eco-item">
                  <img src={f.icon} alt="" style={{ width: 40, height: 40, marginBottom: 16 }} />
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {SOFTWARE.map((slug) => {
        const page = figmaPage(slug)
        if (!page) return null
        return (
          <section className="section sw-block" id={slug} key={slug}>
            <div className="container">
              <h2 className="center-title">{page.title}</h2>
              {page.sections.map((s, i) => (
                <Reveal delay={i * 40} key={i}>
                  <div className="app-section">
                    {s.heading !== page.title && <h2>{s.heading}</h2>}
                    {s.body.map((b, j) => <p className="intro-lead" key={j}>{b}</p>)}
                    {s.bullets.length > 0 && (
                      <ul className="pd-feature-list">
                        {s.bullets.map((b) => <li key={b}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
              <Link to="/contact" className="btn btn-navy">Request a Demo <i>↗</i></Link>
            </div>
          </section>
        )
      })}

      <section className="section au-focus">
        <div className="container intro-split">
          <Reveal>
            <div>
              <span className="eyebrow">Capabilities</span>
              <h3>Everything you need to manage a monitoring network</h3>
              <ul className="goal-list">
                {CAPABILITIES.map((c) => <li key={c}>{c}</li>)}
              </ul>
              <Link to="/contact" className="btn btn-navy">Request a Demo <i>↗</i></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
