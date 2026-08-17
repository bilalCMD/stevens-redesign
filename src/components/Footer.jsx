import { Link } from 'react-router-dom'
import { SOCIALS, ORDER_EMAIL } from '../data/site.js'
import { SocialIcon } from './Header.jsx'
import tagLogo from '../assets/figma/logo-header.png'

const FOOTER_COLS = [
  {
    heading: 'Company',
    links: [
      { title: 'Home', to: '/' },
      { title: 'About Us', to: '/page/about-us' },
      { title: 'History', to: '/page/history' },
      { title: 'Conferences & Events', to: '/page/conferences-events' },
      { title: 'Distributors', to: '/page/distributors' },
      { title: 'Join our Team', to: '/page/employment-opportunities' },
      { title: 'Client Profiles', to: '/page/client-profiles' },
      { title: 'Contact Us', to: '/contact' },
      { title: 'Blogs / Articles', to: '/page/articles' },
    ],
  },
  {
    heading: 'Applications',
    links: [
      { title: 'Soil Monitoring & Soil Hydrology', to: '/page/applications/soil-monitoring' },
      { title: 'Water Monitoring & Management', to: '/page/applications/water-resource-management' },
      { title: 'Weather & Microclimate Monitoring', to: '/page/applications/weather-monitoring' },
      { title: 'Energy & Industrial Monitoring', to: '/page/applications' },
    ],
  },
  {
    heading: 'Products',
    links: [
      { title: 'Water Sensors', to: '/shop?cat=Water%20Level' },
      { title: 'Soil Sensors & Measurements', to: '/shop?cat=Soil%20Monitoring' },
      { title: 'Weather Sensors', to: '/shop?cat=Weather' },
      { title: 'Data Management Software', to: '/page/m2m' },
      { title: 'Staff Gage', to: '/shop?cat=Chart%20Recorders' },
      { title: 'Power & Accessories', to: '/shop?cat=Power%20%26%20Accessories' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand-col">
          <Link to="/" className="logo footer-logo">
            <span className="logo-plate">
              <img src={tagLogo} alt="Stevens — Measurements to Mind" />
            </span>
          </Link>
          <p>
            Built on over 110 years of environmental measurement expertise. Stevens continues
            to deliver accurate instruments and dependable data solutions for soil, water, and
            weather monitoring.
          </p>
        </div>
        <form
          className="footer-form"
          onSubmit={(e) => {
            e.preventDefault()
            const email = new FormData(e.target).get('email')
            window.location.href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent('Newsletter signup')}&body=${encodeURIComponent(`Please add ${email} to the mailing list.`)}`
          }}
        >
          <span>Get daily updates</span>
          <div className="footer-form-row">
            <input name="email" type="email" required placeholder="Enter email address" />
            <button className="btn btn-white" type="submit">Submit</button>
          </div>
        </form>
      </div>

      <div className="container footer-grid">
        {FOOTER_COLS.map((col) => (
          <div key={col.heading}>
            <h4>{col.heading}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.title}><Link to={l.to}>{l.title}</Link></li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4>Follow Us</h4>
          <ul className="footer-socials-list">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a href="#" className="footer-social-link">
                  <SocialIcon s={s} />
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom-wrap">
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Stevens Water Monitoring Systems Inc. All Rights Reserved.</span>
          <Link to="/page/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
