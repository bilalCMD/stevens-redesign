import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { MENU } from '../data/menu.js'
import { PRODUCTS_TABS } from '../data/productsMenu.js'
import { SOCIALS } from '../data/site.js'
import { useCart } from '../context/CartContext.jsx'
import logoImg from '../assets/figma/logo-header.png'

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

function TabbedPanel({ onNavigate }) {
  const [tab, setTab] = useState(0)
  const active = PRODUCTS_TABS[tab]
  return (
    <div className="mega-panel mega-wide mega-tabbed">
      <div className="mega-tabs">
        {PRODUCTS_TABS.map((t, i) => (
          <button
            key={t.tab}
            type="button"
            className={`mega-tab ${i === tab ? 'active' : ''}`}
            onMouseEnter={() => setTab(i)}
            onClick={() => setTab(i)}
          >
            {t.tab}
          </button>
        ))}
      </div>
      <div className="mega-tab-cols">
        {active.columns.map((col) => (
          <div className="mega-tab-col" key={col.heading}>
            {col.to ? (
              <Link to={col.to} onClick={onNavigate} className="mega-tab-heading-link">{col.heading}</Link>
            ) : (
              <h5 className="mega-tab-heading">{col.heading}</h5>
            )}
            {col.desc && <p className="mega-tab-desc">{col.desc}</p>}
            {col.groups && col.groups.map((g, gi) => (
              <div className="mega-tab-group" key={g.title || gi}>
                {g.title && <h6>{g.title}</h6>}
                {g.links.map((link) => (
                  <Link key={link.title} to={link.to} onClick={onNavigate}>{link.title}</Link>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function MegaPanel({ item, onNavigate }) {
  if (item.tabbed) return <TabbedPanel onNavigate={onNavigate} />
  return (
    <div className={`mega-panel ${item.wide ? 'mega-wide' : ''}`}>
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
      </div>
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
      <div className={`mega-scrim ${openDesktop ? 'mega-scrim-open' : ''}`} aria-hidden="true" />
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
                  {item.tabbed ? (
                    <div className="mobile-tabbed">
                      {PRODUCTS_TABS.map((t) => (
                        <div key={t.tab} className="mobile-tab-group">
                          <h5>{t.tab}</h5>
                          {t.columns.map((col) => (
                            <div key={col.heading}>
                              {col.to ? (
                                <Link to={col.to} onClick={close}>{col.heading}</Link>
                              ) : (
                                <span className="mobile-tab-subhead">{col.heading}</span>
                              )}
                              {col.groups && col.groups.flatMap((g) => g.links).map((link) => (
                                <Link key={link.title} to={link.to} onClick={close}>{link.title}</Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    item.columns.map((col) => (
                      <div key={col.heading}>
                        <h5>{col.heading}</h5>
                        {col.links.map((l) => (
                          <Link key={l.to || l.slug} to={l.to || `/page/${l.slug}`} onClick={close}>{l.title}</Link>
                        ))}
                      </div>
                    ))
                  )}
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
