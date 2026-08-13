import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { MENU } from '../data/menu.js'
import { SOCIALS } from '../data/site.js'
import { useCart } from '../context/CartContext.jsx'
import logoImg from '../assets/figma/logo-header.png'

const PRODUCTS_IMG = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=700&q=75&auto=format&fit=crop'

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
    <div className={`mega-panel ${item.wide ? 'mega-wide' : ''} ${item.hasImage ? 'mega-with-image' : ''}`}>
      <div className="mega-glow" aria-hidden="true" />
      <div className="mega-cols">
        {item.columns.map((col, ci) => (
          <div className="mega-col" key={col.heading} style={{ transitionDelay: `${ci * 35}ms` }}>
            <h5>{col.heading}</h5>
            {col.links.map((l) => (
              <Link key={l.to || l.slug} to={l.to || `/page/${l.slug}`} onClick={onNavigate}>
                <span className="mega-dot" />
                {l.title}
              </Link>
            ))}
          </div>
        ))}
        {item.hasImage && (
          <Link to="/shop" onClick={onNavigate} className="mega-img-card">
            <img src={PRODUCTS_IMG} alt="Stevens field instrument" loading="lazy" />
            <span>
              <strong>102 instruments in stock</strong>
              <em>Browse the full catalog →</em>
            </span>
          </Link>
        )}
      </div>
      {item.wide && !item.hasImage && (
        <div className="mega-foot">
          <Link to="/shop" onClick={onNavigate} className="mega-foot-link">
            <span>
              <strong>Shop the full catalog</strong>
              <em>102 in-stock instruments with live pricing</em>
            </span>
            <i>→</i>
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
  const [openDesktop, setOpenDesktop] = useState(null)
  const [searchQ, setSearchQ] = useState('')
  const { count, flash } = useCart()
  const location = useLocation()
  const navigate = useNavigate()

  const onSearch = (e) => {
    e.preventDefault()
    if (!searchQ.trim()) return
    navigate(`/shop?q=${encodeURIComponent(searchQ.trim())}`)
    setSearchQ('')
  }

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => {
    setMobileOpen(false)
    setOpenSection(null)
    setOpenDesktop(null)
  }, [location])
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])
  useEffect(() => {
    if (!openDesktop) return
    const onDocClick = (e) => {
      if (!e.target.closest('.nav-item')) setOpenDesktop(null)
    }
    const onKey = (e) => e.key === 'Escape' && setOpenDesktop(null)
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [openDesktop])

  const close = () => setMobileOpen(false)
  const solid = scrolled || location.pathname !== '/'

  return (
    <header className={`site-header ${solid ? 'scrolled' : ''}`}>
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
                <div
                  className={`nav-item ${openDesktop === item.label ? 'nav-item-open' : ''}`}
                  key={item.label}
                  onMouseEnter={() => setOpenDesktop(item.label)}
                  onMouseLeave={() => setOpenDesktop((cur) => (cur === item.label ? null : cur))}
                >
                  <button
                    type="button"
                    className="nav-link has-caret"
                    aria-expanded={openDesktop === item.label}
                    onClick={() => setOpenDesktop((cur) => (cur === item.label ? null : item.label))}
                  >
                    {item.label}
                    <svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                  <MegaPanel item={item} onNavigate={() => setOpenDesktop(null)} />
                </div>
              ),
            )}
          </nav>

          <div className={`mega-scrim ${openDesktop ? 'mega-scrim-open' : ''}`} aria-hidden="true" />

          <div className="header-actions">
            <form className="header-search" onSubmit={onSearch}>
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" /><path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              <input placeholder="Search" value={searchQ} onChange={(e) => setSearchQ(e.target.value)} />
            </form>
            <Link to="/cart" className="cart-btn" aria-label="Cart">
              <svg viewBox="0 0 24 24"><path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 3h2l3.2 11.2A2 2 0 0 0 10.1 15.7h7.4a2 2 0 0 0 1.9-1.4L22 7H6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {count > 0 && <span className="cart-badge" key={count}>{count}</span>}
            </Link>
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
                        <Link key={l.to || l.slug} to={l.to || `/page/${l.slug}`} onClick={close}>{l.title}</Link>
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
