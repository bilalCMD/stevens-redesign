import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { MENU } from '../data/menu.js'
import { ORDER_EMAIL, SOCIALS } from '../data/site.js'
import { useCart } from '../context/CartContext.jsx'
import logoImg from '../assets/stevens-logo.png'

export function SocialIcon({ s }) {
  return (
    <a href="#" className="social-icon" aria-label={s.name} title={s.name}>
      <svg viewBox="0 0 24 24"><path d={s.d} /></svg>
    </a>
  )
}

export function Logo() {
  return (
    <Link to="/" className="logo">
      <span className="logo-plate">
        <img src={logoImg} alt="Stevens Water Monitoring Systems" />
      </span>
    </Link>
  )
}

function MegaPanel({ item, onNavigate }) {
  return (
    <div className={`mega-panel ${item.wide ? 'mega-wide' : ''}`}>
      <div className="mega-cols">
        {item.columns.map((col) => (
          <div className="mega-col" key={col.heading}>
            <h5>{col.heading}</h5>
            {col.links.map((l) => (
              <Link key={l.slug} to={`/page/${l.slug}`} onClick={onNavigate}>
                {l.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
      {item.wide && (
        <div className="mega-foot">
          <Link to="/shop" onClick={onNavigate}>
            Shop all in-stock instruments with pricing <i>→</i>
          </Link>
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openSection, setOpenSection] = useState(null)
  const { count, flash } = useCart()
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => {
    setMobileOpen(false)
    setOpenSection(null)
  }, [location])
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  const close = () => setMobileOpen(false)
  const solid = scrolled || location.pathname !== '/'

  return (
    <header className={`site-header ${solid ? 'scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span className="topbar-item">
              <svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" /></svg>
              Portland, Oregon · Since 1911
            </span>
            <a className="topbar-item" href={`mailto:${ORDER_EMAIL}`}>
              <svg viewBox="0 0 24 24"><path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 7.3L4.5 7v10.5h15V7L12 12.3ZM5.6 6.5 12 10.7l6.4-4.2H5.6Z" /></svg>
              {ORDER_EMAIL}
            </a>
          </div>
          <div className="topbar-right">
            {SOCIALS.map((s) => <SocialIcon key={s.name} s={s} />)}
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container header-inner">
          <Logo />

          <nav className="main-nav">
            {MENU.map((item) =>
              item.to ? (
                <NavLink key={item.label} to={item.to} className="nav-link">
                  {item.label}
                </NavLink>
              ) : (
                <div className="nav-item" key={item.label}>
                  <span className="nav-link has-caret">
                    {item.label}
                    <svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <MegaPanel item={item} onNavigate={() => {}} />
                </div>
              ),
            )}
          </nav>

          <div className="header-actions">
            <Link to="/cart" className="cart-btn" aria-label="Cart">
              <svg viewBox="0 0 24 24"><path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 3h2l3.2 11.2A2 2 0 0 0 10.1 15.7h7.4a2 2 0 0 0 1.9-1.4L22 7H6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {count > 0 && <span className="cart-badge" key={count}>{count}</span>}
            </Link>
            <Link to="/contact" className="btn btn-primary btn-sm quote-btn">Request a Quote</Link>
            <button className={`nav-toggle ${mobileOpen ? 'open' : ''}`} aria-label="Menu" onClick={() => setMobileOpen(!mobileOpen)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>

      {/* Full-page mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-scroll">
          {MENU.map((item, idx) =>
            item.to ? (
              <Link key={item.label} to={item.to} className="mobile-link" style={{ transitionDelay: `${80 + idx * 50}ms` }} onClick={close}>
                {item.label}
              </Link>
            ) : (
              <div className="mobile-section" key={item.label} style={{ transitionDelay: `${80 + idx * 50}ms` }}>
                <button
                  className={`mobile-link mobile-accordion ${openSection === item.label ? 'expanded' : ''}`}
                  onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
                >
                  {item.label}
                  <svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <div className={`mobile-sub ${openSection === item.label ? 'open' : ''}`}>
                  {item.columns.map((col) => (
                    <div key={col.heading}>
                      <h5>{col.heading}</h5>
                      {col.links.map((l) => (
                        <Link key={l.slug} to={`/page/${l.slug}`} onClick={close}>{l.title}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
          <div className="mobile-menu-foot">
            <Link to="/cart" className="btn btn-ghost" onClick={close}>Cart ({count})</Link>
            <Link to="/contact" className="btn btn-primary" onClick={close}>Request a Quote</Link>
            <div className="footer-socials">
              {SOCIALS.map((s) => <SocialIcon key={s.name} s={s} />)}
            </div>
          </div>
        </div>
      </div>

      {flash && (
        <div className="cart-toast">
          <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Added to cart — <strong>{flash}</strong>
        </div>
      )}
    </header>
  )
}
