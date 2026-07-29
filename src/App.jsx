import { useState, useEffect } from 'react'
import { FEATURED_PRODUCTS, ORDER_EMAIL } from './data/products.js'

const IMG = {
  hero: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1920&q=80&auto=format&fit=crop',
  soil: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=75&auto=format&fit=crop',
  water: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=900&q=75&auto=format&fit=crop',
  weather: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=900&q=75&auto=format&fit=crop',
  m2m: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=75&auto=format&fit=crop',
  about: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1100&q=75&auto=format&fit=crop',
  footer: 'https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=1920&q=60&auto=format&fit=crop',
}

const CATEGORIES = [
  {
    key: 'soil',
    title: 'Soil Monitoring',
    img: IMG.soil,
    desc: 'Soil moisture sensors, tensiometers and profiling probes for smarter irrigation and healthier crops.',
  },
  {
    key: 'water',
    title: 'Water Resource Management',
    img: IMG.water,
    desc: 'Water level, flow and quality instrumentation for groundwater, rivers, reservoirs and coastal systems.',
  },
  {
    key: 'weather',
    title: 'Weather Monitoring',
    img: IMG.weather,
    desc: 'Complete weather stations and meteorological sensors, from single sites to regional networks.',
  },
]

const BRANDS = [
  { name: 'STEVENS', tag: 'Water Monitoring', url: 'https://stevenswater.com' },
  { name: 'POGO', tag: 'Turf Pro', url: 'https://pogoturfpro.com' },
  { name: 'SoilMoisture', tag: 'Equipment Corp.', url: 'https://soilmoisture.com' },
  { name: 'DYACON', tag: 'Weather Stations', url: 'https://www.dyacon.com' },
]

const SOCIALS = [
  {
    name: 'Facebook',
    d: 'M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8V14h2v5.5h2.5V14h2l.5-2.5h-2.5V10c0-.552.448-1 1-1Z',
  },
  {
    name: 'X',
    d: 'M6.5 6l4.7 6.2L6.7 18h1.9l3.5-4.6 3.4 4.6h4l-4.9-6.6L18.9 6H17l-3.2 4.2L10.5 6h-4Z',
  },
  {
    name: 'LinkedIn',
    d: 'M7.5 9.5H5V18h2.5V9.5ZM6.25 8.3a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9ZM12 9.5H9.6V18H12v-4.4c0-1.2.6-1.9 1.6-1.9s1.5.65 1.5 1.9V18h2.4v-5c0-2.2-1.2-3.6-3.1-3.6-1.1 0-1.9.5-2.4 1.3V9.5Z',
  },
  {
    name: 'YouTube',
    d: 'M12 7c2.5 0 4.6.1 5.7.2.9.1 1.6.8 1.7 1.7.1.9.2 2 .2 3.1s-.1 2.2-.2 3.1c-.1.9-.8 1.6-1.7 1.7-1.1.1-3.2.2-5.7.2s-4.6-.1-5.7-.2c-.9-.1-1.6-.8-1.7-1.7-.1-.9-.2-2-.2-3.1s.1-2.2.2-3.1c.1-.9.8-1.6 1.7-1.7C7.4 7.1 9.5 7 12 7Zm-1.5 2.8v4.4L14.5 12l-4-2.2Z',
  },
]

function SocialIcon({ s }) {
  return (
    <a href="#" className="social-icon" aria-label={s.name} title={s.name}>
      <svg viewBox="0 0 24 24"><path d={s.d} /></svg>
    </a>
  )
}

function Header({ onOrder }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const links = [
    ['#soil', 'Soil Monitoring'],
    ['#water', 'Water Resources'],
    ['#weather', 'Weather'],
    ['#products', 'Products'],
    ['#about', 'About'],
  ]
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
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
          <a href="#top" className="logo">
            <span className="logo-mark">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M16 3C16 3 6 15 6 21a10 10 0 0 0 20 0C26 15 16 3 16 3Z" />
              </svg>
            </span>
            <span className="logo-text">
              STEVENS<em>Water Monitoring Systems</em>
            </span>
          </a>
          <nav className={`main-nav ${open ? 'open' : ''}`}>
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
            <button className="btn btn-primary btn-sm" onClick={() => { setOpen(false); onOrder(null) }}>
              Request a Quote
            </button>
          </nav>
          <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" style={{ backgroundImage: `url(${IMG.hero})` }} aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="badge">Trusted since 1911 · Portland, Oregon</span>
          <h1>
            Environmental Data,
            <br />
            <span className="grad">Measured to Mind.</span>
          </h1>
          <p>
            Stevens designs and builds environmental data acquisition systems that link
            sensor measurements to mindful action — across soil, water and sky.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">Browse Instruments</a>
            <a href="#about" className="btn btn-ghost">Our Story</a>
          </div>
          <div className="hero-stats">
            <div><strong>110+</strong><span>years of instrumentation</span></div>
            <div><strong>240+</strong><span>products in catalog</span></div>
            <div><strong>4</strong><span>specialist brands</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card hero-card-main">
            <img src="https://cdn.shopify.com/s/files/1/0974/1388/files/lettuce-centered.webp?v=1755211930" alt="" loading="eager" />
            <div className="hero-card-label">SAGE Soil Moisture Meter</div>
          </div>
          <div className="hero-card hero-card-float a">
            <img src="https://cdn.shopify.com/s/files/1/0974/1388/products/satcomm.png?v=1445212767" alt="" loading="lazy" />
          </div>
          <div className="hero-card hero-card-float b">
            <img src="https://cdn.shopify.com/s/files/1/0974/1388/products/smart_pt_8342d579-f26d-4671-a1bf-7515cd3b0529.png?v=1500075645" alt="" loading="lazy" />
          </div>
        </div>
      </div>
      <svg className="hero-wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,50 C240,90 480,10 720,40 C960,70 1200,20 1440,55 L1440,90 L0,90 Z" />
      </svg>
    </section>
  )
}

function Categories() {
  const ids = ['soil', 'water', 'weather']
  return (
    <section className="section categories">
      <div className="container">
        <div className="section-head">
          <h2>What do you need to measure?</h2>
          <p>Three decades-deep application areas, one integrated M2M® platform.</p>
        </div>
        <div className="cat-grid">
          {CATEGORIES.map((c, i) => (
            <a href="#products" className="cat-card" id={ids[i]} key={c.key}>
              <div className="cat-img">
                <img src={c.img} alt="" loading="lazy" />
                <span className="cat-num">0{i + 1}</span>
              </div>
              <div className="cat-body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className="cat-link">Explore products <i>→</i></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Products({ onOrder }) {
  return (
    <section className="section products" id="products">
      <div className="container">
        <div className="section-head">
          <h2>Featured Instruments</h2>
          <p>A selection from our 240+ product catalog. Orders are placed by email — we confirm availability and shipping within one business day.</p>
        </div>
        <div className="product-grid">
          {FEATURED_PRODUCTS.map((p) => (
            <article className="product-card" key={p.sku}>
              <div className="product-img">
                <img src={p.img} alt={p.title} loading="lazy" />
                <span className="product-cat">{p.category}</span>
              </div>
              <div className="product-body">
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
                <div className="product-foot">
                  <div className="price">
                    <span>${p.price.toLocaleString('en-US', { minimumFractionDigits: p.price % 1 ? 2 : 0 })}</span>
                    <em>SKU {p.sku}</em>
                  </div>
                  <button className="btn btn-primary btn-sm" onClick={() => onOrder(p)}>Order</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function M2M() {
  return (
    <section className="m2m">
      <div className="m2m-bg" style={{ backgroundImage: `url(${IMG.m2m})` }} aria-hidden="true" />
      <div className="container m2m-inner">
        <div>
          <span className="badge badge-dark">MEASUREMENTS TO MIND®</span>
          <h2>What the sensors <em>measure</em>, the mind <em>sees</em>.</h2>
          <p>
            M2M is our growing suite of data acquisition products and cloud systems —
            linking sensor communication, online data and measurement insight into one
            seamless workflow, from field station to dashboard.
          </p>
        </div>
        <ul className="m2m-list">
          <li><strong>Sense</strong> Soil, water and atmospheric sensors built for harsh field conditions.</li>
          <li><strong>Transmit</strong> Cellular, satellite (GOES) and radio telemetry options.</li>
          <li><strong>See</strong> Cloud dashboards that turn raw measurements into decisions.</li>
        </ul>
      </div>
    </section>
  )
}

function Brands() {
  return (
    <section className="brands">
      <div className="container">
        <p className="brands-label">One family of specialist brands</p>
        <div className="brands-row">
          {BRANDS.map((b) => (
            <a key={b.name} href={b.url} target="_blank" rel="noreferrer" className="brand">
              <strong>{b.name}</strong>
              <span>{b.tag}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-inner">
        <div className="about-media">
          <img src={IMG.about} alt="Golden farm field at sunrise" loading="lazy" />
          <div className="about-media-card">
            <strong>1911</strong>
            <span>The year Leupold &amp; Stevens invented the first continuous water level recorder.</span>
          </div>
        </div>
        <div>
          <h2>Instrumenting the natural world since 1911.</h2>
          <p>
            Stevens Water Monitoring Systems is the most senior water monitoring company in
            the world. For over a century, we have combined deep expertise in hydrology,
            environmental monitoring, soil physics and agronomy with a simple philosophy:
            <strong> simplicity, innovation and efficient solutions.</strong>
          </p>
          <p>
            Our instruments are designed and assembled in the USA and deployed on every
            continent — from farm fields and golf courses to rivers, aquifers and remote
            weather networks.
          </p>
          <div className="about-stats">
            <div><strong>USA</strong><span>design &amp; final assembly</span></div>
            <div><strong>7</strong><span>continents deployed</span></div>
            <div><strong>1 yr</strong><span>limited warranty standard</span></div>
            <div><strong>24 hr</strong><span>quote turnaround</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OrderModal({ product, onClose }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', qty: 1, notes: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const subject = product
    ? `Order Request: ${product.title} (SKU ${product.sku})`
    : 'Quote Request — stevenswater.com'
  const lines = [
    product ? `Product: ${product.title}` : 'General quote request',
    product ? `SKU: ${product.sku}` : null,
    product ? `Unit price: $${product.price}` : null,
    `Quantity: ${form.qty}`,
    '',
    `Name: ${form.name}`,
    `Company: ${form.company}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    '',
    `Notes: ${form.notes}`,
  ].filter((l) => l !== null)
  const mailto = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <h3>{product ? 'Order via Email' : 'Request a Quote'}</h3>
        {product && (
          <div className="modal-product">
            <img src={product.img} alt="" />
            <div>
              <strong>{product.title}</strong>
              <span>SKU {product.sku} · ${product.price}</span>
            </div>
          </div>
        )}
        <div className="modal-form">
          <div className="form-row">
            <label>Name<input value={form.name} onChange={set('name')} placeholder="Your name" /></label>
            <label>Company<input value={form.company} onChange={set('company')} placeholder="Organization" /></label>
          </div>
          <div className="form-row">
            <label>Email<input type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" /></label>
            <label>Phone<input value={form.phone} onChange={set('phone')} placeholder="(555) 555-5555" /></label>
          </div>
          <div className="form-row">
            <label>Quantity<input type="number" min="1" value={form.qty} onChange={set('qty')} /></label>
            <label>Notes<input value={form.notes} onChange={set('notes')} placeholder="Shipping address, questions…" /></label>
          </div>
          <a className="btn btn-primary btn-full" href={mailto}>
            Send Order by Email
          </a>
          <p className="modal-note">
            This opens your email client with the order pre-filled and sends it to our sales
            team. We confirm pricing, availability and shipping within one business day.
          </p>
        </div>
      </div>
    </div>
  )
}

function Footer() {
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
          <a href="#top" className="logo">
            <span className="logo-mark">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M16 3C16 3 6 15 6 21a10 10 0 0 0 20 0C26 15 16 3 16 3Z" />
              </svg>
            </span>
            <span className="logo-text">STEVENS<em>Water Monitoring Systems</em></span>
          </a>
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
            <a href="#soil">Soil Monitoring</a><br />
            <a href="#water">Water Resources</a><br />
            <a href="#products">Products</a><br />
            <a href="#about">About Us</a>
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

export default function App() {
  const [orderProduct, setOrderProduct] = useState(undefined) // undefined = closed, null = general quote
  const open = orderProduct !== undefined
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])
  return (
    <>
      <Header onOrder={(p) => setOrderProduct(p)} />
      <main>
        <Hero />
        <Categories />
        <Products onOrder={(p) => setOrderProduct(p)} />
        <M2M />
        <Brands />
        <About />
      </main>
      <Footer />
      {open && <OrderModal product={orderProduct} onClose={() => setOrderProduct(undefined)} />}
    </>
  )
}
