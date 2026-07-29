import { Link } from 'react-router-dom'
import { BRANDS, IMG, ORDER_EMAIL, SOCIALS } from '../data/site.js'
import { SocialIcon } from './Header.jsx'
import tagLogo from '../assets/stevens-logo-tagline.png'

export default function Footer() {
  return (
    <footer className="footer">
      <svg className="footer-wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,35 C240,70 480,0 720,30 C960,60 1200,10 1440,40 L1440,0 L0,0 Z" />
      </svg>
      <div className="footer-bg" style={{ backgroundImage: `url(${IMG.footer})` }} aria-hidden="true" />
      <div className="container footer-cta">
        <div>
          <h3>Field notes, product news &amp; application stories.</h3>
          <p>Join researchers, growers and hydrologists who read our occasional dispatch.</p>
        </div>
        <form
          className="footer-form"
          onSubmit={(e) => {
            e.preventDefault()
            const email = new FormData(e.target).get('email')
            window.location.href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent('Newsletter signup')}&body=${encodeURIComponent(`Please add ${email} to the mailing list.`)}`
          }}
        >
          <input name="email" type="email" required placeholder="you@company.com" />
          <button className="btn btn-primary" type="submit">Subscribe</button>
        </form>
      </div>
      <div className="container footer-grid">
        <div className="footer-brand-col">
          <Link to="/" className="logo footer-logo">
            <span className="logo-plate">
              <img src={tagLogo} alt="Stevens — Measurements to Mind" />
            </span>
          </Link>
          <p>Linking sensor measurements to mindful actions since 1911.</p>
          <div className="footer-socials">
            {SOCIALS.map((s) => <SocialIcon key={s.name} s={s} />)}
          </div>
        </div>
        <div>
          <h4>Visit</h4>
          <p>
            12067 NE Glenn Widing Drive<br />
            Suite 106<br />
            Portland, OR 97220 USA
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <p>
            <Link to="/page/applications/soil-monitoring">Soil Monitoring</Link><br />
            <Link to="/page/applications/water-resource-management">Water Resources</Link><br />
            <Link to="/shop">Shop Instruments</Link><br />
            <Link to="/page/about-us">About Us</Link><br />
            <Link to="/contact">Contact</Link>
          </p>
        </div>
        <div>
          <h4>Family of Brands</h4>
          <p>
            {BRANDS.map((b) => (
              <span key={b.name}>
                <a href={b.url} target="_blank" rel="noreferrer">{b.name.toLowerCase()}.com</a>
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="footer-bottom-wrap">
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Stevens Water Monitoring Systems, Inc.</span>
          <span className="footer-note">Redesign concept — not the live site</span>
        </div>
      </div>
    </footer>
  )
}
