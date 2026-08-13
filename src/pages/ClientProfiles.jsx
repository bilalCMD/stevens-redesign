import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import clientsHero from '../assets/figma/clients-hero.jpg'
import client1 from '../assets/figma/client-1.jpg'
import client2 from '../assets/figma/client-2.jpg'
import client3 from '../assets/figma/client-3.jpg'
import client4 from '../assets/figma/client-4.jpg'
import client5 from '../assets/figma/client-5.jpg'
import client6 from '../assets/figma/client-6.jpg'

const CASES = [
  {
    img: client1,
    name: 'Sovereign Consulting, Inc.',
    desc: 'Sovereign partnered with Stevens for a groundwater well monitoring project at an abandoned refinery in Wood River, IL for British Petroleum, monitoring the temperature profile at different depths in the well using eTracker, Van Essen Diver sensors and Campbell Scientific Temperature Sensor Strings — with all data uploaded via cellular to Stevens-Connect.',
    url: 'https://sovcon.com/',
  },
  {
    img: client2,
    name: 'Riverside County Flood Control',
    desc: 'Riverside County Flood Control operates a rainfall monitoring network of 27 eTrackers connected to tipping bucket rain gauges, with rainfall data collected and transmitted over the cellular network to Stevens-Connect.',
    url: 'https://rcflood.org/',
  },
  {
    img: client3,
    name: 'Florida Department of Environmental Protection',
    desc: 'FLDEP operates 18 tide gaging stations along the Florida coast monitoring tide level, weather and water quality, with data transmitted every 6 minutes to Stevens-Connect — a public system used by recreational boaters for current tide and weather conditions.',
    url: 'https://floridadep.gov/',
  },
  {
    img: client4,
    name: 'Jamaica Water Resource Authority',
    desc: 'Jamaica’s WRA deployed approximately 30 eTrackers connected to Stevens-Connect to cover water resource monitoring across the island, with alarms for high water level, rainfall intensity and station power health — earning additional World Bank funding as a Caribbean resource hub.',
    url: 'https://www.wra.gov.jm/',
  },
  {
    img: client5,
    name: 'Chinese Ecosystem Research Network (CERN)',
    desc: 'CERN research analyzed soil moisture dynamics and rainfall-runoff relationships at hillslope transects using HydraProbe soil sensors, Stevens Tipping Bucket Rain Gauges, eTracker and Stevens-Connect.',
    url: 'https://www.cern.ac.cn/ftp/CERN-English.pdf',
  },
  {
    img: client6,
    name: 'California Air Resources Board',
    desc: 'Stevens developed a cloud-based camera monitoring and alarm system for CARB, capturing a 360° view every six minutes at eight remote stations, paired with Met One air quality sensors and automatic alerts when air quality thresholds are triggered.',
    url: 'https://ww2.arb.ca.gov/',
  },
]

const GOALS = [
  'Manage and protect the environment',
  'Protect property',
  'Save lives',
  'Improve operational efficiencies',
]

export default function ClientProfiles() {
  return (
    <>
      <section className="au-hero" style={{ minHeight: 460 }}>
        <div className="au-hero-bg" style={{ backgroundImage: `url(${clientsHero})` }} aria-hidden="true" />
        <div className="au-hero-overlay" aria-hidden="true" />
        <h1 style={{ textAlign: 'center', width: '100%' }}>Client Profiles</h1>
      </section>

      <section className="section">
        <div className="container intro-split">
          <Reveal>
            <div>
              <span className="eyebrow">Introduction</span>
              <p className="intro-lead">
                Water in lakes, rivers, the ocean, the air, the soil and underground for over 100 years. In that
                time we&rsquo;ve had the chance to participate in many different projects of various complexities
                and scope around the world. Today we focus on projects involving monitoring water resources
                (surface water and groundwater) and soil.
              </p>
              <h3>We design, manufacture &amp; integrate environmental data acquisition technology systems to:</h3>
              <ul className="goal-list">
                {GOALS.map((g) => <li key={g}>{g}</li>)}
              </ul>
              <Link to="/contact" className="btn btn-navy">Contact Us <i>↗</i></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section au-focus">
        <div className="container case-list">
          {CASES.map((c, i) => (
            <Reveal delay={i * 80} key={c.name}>
              <div className={`case-row ${i % 2 === 1 ? 'reverse' : ''}`}>
                <img src={c.img} alt={c.name} className="case-img" />
                <div className="case-body">
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                  <a href={c.url} target="_blank" rel="noreferrer" className="btn btn-navy btn-sm">Visit Website <i>↗</i></a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
