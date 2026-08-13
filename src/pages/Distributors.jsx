import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import distributorsHero from '../assets/figma/distributors-hero.jpg'

const REGIONS = {
  'North America': [],
  Asia: [
    {
      country: 'China',
      companies: [
        {
          name: 'Beijing ECO Monitor',
          address: 'RM 1805 Unit 3, Jinquanshidai, Datun, Chaoyang District, Beijing 100101 China',
          email: 'sales@eco-monitor.com.cn',
        },
      ],
    },
    {
      country: 'India',
      companies: [
        {
          name: 'Phame Technology',
          address: 'PHAME Technology 202, Amit chambers, 5-6 Jaora Compound, Near M.Y. Hospital, Indore-452001, India',
          email: 'sales@phametechnology.com',
        },
        {
          name: 'Aether Techno Solutions Private Limited',
          address: '1005, Road No. 12, Industrial Development Area Nacharam, Hyderabad, India, Pin- 500076',
          email: 'sales@aethertechno.com',
          phone: '+91-9319785790',
        },
        {
          name: 'PSP Soilsearch Equipment Pvt. Ltd.',
          address: '62/J/1 Maharaja Tagore Road, Kolkata – 700031, India',
          email: 'sales@pspsoilsearch.com',
          phone: '+91-33-24732151',
        },
      ],
    },
  ],
}

export default function Distributors() {
  const [region, setRegion] = useState('Asia')
  return (
    <>
      <section className="au-hero" style={{ minHeight: 460 }}>
        <div className="au-hero-bg" style={{ backgroundImage: `url(${distributorsHero})` }} aria-hidden="true" />
        <div className="au-hero-overlay" aria-hidden="true" />
        <div className="dist-hero-inner">
          <h1>Distributors</h1>
          <p>Select your region to see the available distributors. Interested in becoming a distributor?</p>
          <Link to="/contact" className="btn btn-white">Contact Us <i>↗</i></Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="region-tabs">
            {Object.keys(REGIONS).map((r) => (
              <button key={r} className={`region-tab ${region === r ? 'active' : ''}`} onClick={() => setRegion(r)}>{r}</button>
            ))}
          </div>

          {REGIONS[region].length === 0 ? (
            <p className="dist-empty">No distributors listed for this region yet — <Link to="/contact">contact us</Link> for local support.</p>
          ) : (
            REGIONS[region].map((c, ci) => (
              <Reveal delay={ci * 90} key={c.country}>
                <div className="dist-country">
                  <h2>{c.country}</h2>
                  <div className="dist-companies">
                    {c.companies.map((co) => (
                      <div className="dist-company" key={co.name}>
                        <h3>{co.name}</h3>
                        <p>{co.address}</p>
                        <p><a href={`mailto:${co.email}`}>{co.email}</a></p>
                        {co.phone && <p>{co.phone}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))
          )}
        </div>
      </section>
    </>
  )
}
