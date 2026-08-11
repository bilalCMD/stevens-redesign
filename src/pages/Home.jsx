import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import catalog from '../data/catalog.json'
import Reveal, { CountUp } from '../components/Reveal.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { BRANDS, IMG } from '../data/site.js'

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

const CATEGORIES = [
  {
    title: 'Soil Monitoring',
    img: IMG.soil,
    slug: 'applications/soil-monitoring',
    desc: 'Soil moisture sensors, tensiometers and profiling probes for smarter irrigation and healthier crops.',
  },
  {
    title: 'Water Resource Management',
    img: IMG.water,
    slug: 'applications/water-resource-management',
    desc: 'Water level, flow and quality instrumentation for groundwater, rivers, reservoirs and coastal systems.',
  },
  {
    title: 'Weather Monitoring',
    img: IMG.weather,
    slug: 'applications/weather-monitoring',
    desc: 'Complete weather stations and meteorological sensors, from single sites to regional networks.',
  },
]

const INDUSTRIES = [
  { name: 'Agriculture & Irrigation', icon: 'M12 2v8m0 0c0-3 2.5-5 5-5-0 3-2 5-5 5Zm0 0c0-3-2.5-5-5-5 0 3 2 5 5 5Zm0 0v12M5 22h14' },
  { name: 'Golf & Sports Turf', icon: 'M12 2v14m0-14 6 3-6 3M8 22c0-2 1.8-3 4-3s4 1 4 3' },
  { name: 'Hydrology & Groundwater', icon: 'M4 8c4-3 8-3 12 0s4 3 4 3M4 14c4-3 8-3 12 0M4 20c4-3 8-3 12 0' },
  { name: 'Research & Universities', icon: 'M12 3 2 8l10 5 10-5-10-5Zm-6 7.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5' },
  { name: 'Government & Agencies', icon: 'M3 21h18M5 21V10m14 11V10M3 10h18L12 3 3 10Zm6 11v-6h6v6' },
  { name: 'Coastal & Marine', icon: 'M3 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0M12 3v8m0-8 4 4m-4-4L8 7' },
]

const WHY = [
  {
    title: 'Built for the field',
    desc: 'Instruments engineered to survive freeze, flood, dust and decades of deployment.',
    icon: 'M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z',
  },
  {
    title: 'Design & assembly in USA',
    desc: 'Engineered and final-assembled in Portland, Oregon with a one-year limited warranty.',
    icon: 'M3 12h4l2-7 4 14 2-7h6',
  },
  {
    title: 'Sensor to dashboard',
    desc: 'One partner for sensors, telemetry and cloud — no integration finger-pointing.',
    icon: 'M4 18V9m5 9V5m5 13v-7m5 7V3',
  },
  {
    title: 'Real humans, real support',
    desc: 'Talk to hydrologists and soil scientists, not a ticket queue. Quotes within one business day.',
    icon: 'M8 10h8m-8 4h5M21 12a9 9 0 1 1-4-7.5L21 3l-1 4.5c.6 1.3 1 2.9 1 4.5Z',
  },
]

const WHY_IMG = 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1100&q=75&auto=format&fit=crop'

const TESTIMONIALS = [
  {
    quote: 'We replaced three vendors with one Stevens M2M stack. Install was days, not months — and the data just shows up.',
    who: 'Irrigation District Manager',
    where: 'Pacific Northwest, USA',
  },
  {
    quote: 'The SAGE meters paid for themselves in a single season of water savings. Our greens have never been more consistent.',
    who: 'Golf Course Superintendent',
    where: 'Arizona, USA',
  },
  {
    quote: 'Twenty years of continuous groundwater records from the same Diver network. That reliability is why we standardize on Stevens.',
    who: 'Principal Hydrogeologist',
    where: 'Environmental Consultancy',
  },
]

const FAQS = [
  {
    q: 'How do I place an order?',
    a: 'Add products to your cart and submit the order — it reaches our sales team by email, and we confirm pricing, availability and freight within one business day. Purchase orders and quotes are welcome.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes. We ship worldwide and work with a network of international distributors. International pricing is confirmed at quote time.',
  },
  {
    q: 'What warranty do your instruments carry?',
    a: 'Most Stevens instruments carry a one-year limited warranty, with extended options available for M2M systems.',
  },
  {
    q: 'Can you help design my monitoring network?',
    a: 'Absolutely — our application engineers routinely design complete stations: sensor selection, power budgets, telemetry paths and data delivery.',
  },
]

function LiveCard() {
  const [t, setT] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), 2000)
    return () => clearInterval(id)
  }, [])
  const moisture = 31 + Math.round(3 * Math.sin(t / 2))
  const level = (4.6 + 0.15 * Math.sin(t / 3 + 1)).toFixed(2)
  const temp = (18.2 + 0.4 * Math.sin(t / 4)).toFixed(1)
  return (
    <div className="live-card">
      <div className="live-head">
        <span className="live-dot" /> LIVE · Station 042 — Willamette Valley
      </div>
      <div className="live-rows">
        <div className="live-row">
          <span>Soil Moisture</span>
          <div className="live-bar"><i style={{ width: `${moisture * 2}%` }} /></div>
          <strong>{moisture}%</strong>
        </div>
        <div className="live-row">
          <span>Water Level</span>
          <div className="live-bar"><i style={{ width: `${level * 14}%` }} /></div>
          <strong>{level} ft</strong>
        </div>
        <div className="live-row">
          <span>Air Temp</span>
          <div className="live-bar"><i style={{ width: `${temp * 3}%` }} /></div>
          <strong>{temp}°C</strong>
        </div>
      </div>
      <svg className="live-spark" viewBox="0 0 200 40" preserveAspectRatio="none">
        <path d="M0,28 C20,24 30,12 50,16 C70,20 80,30 100,24 C120,18 130,8 150,14 C170,20 185,16 200,10" fill="none" />
      </svg>
      <div className="live-foot">M2M® cloud · updated moments ago</div>
    </div>
  )
}

const ROTATE = ['Soil.', 'Water.', 'Weather.']

export default function Home() {
  const [word, setWord] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setWord((w) => (w + 1) % ROTATE.length), 2600)
    return () => clearInterval(id)
  }, [])
  const featured = FEATURED_HANDLES.map((h) => catalog.find((p) => p.handle === h)).filter(Boolean)
  const [faqOpen, setFaqOpen] = useState(0)

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" id="top">
        <div className="hero-bg kenburns" style={{ backgroundImage: `url(${IMG.hero})` }} aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="badge">Trusted since 1911 · Portland, Oregon</span>
            <h1>
              Precision Monitoring for
              <br />
              <span className="grad" key={word}>{ROTATE[word]}</span>
            </h1>
            <p>
              Stevens builds environmental data acquisition systems that link sensor
              measurements to mindful action — from the root zone to the river to the sky.
            </p>
            <div className="hero-actions">
              <Link to="/shop" className="btn btn-primary btn-lg">
                Shop Instruments
                <svg viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link to="/contact" className="btn btn-ghost btn-lg">Talk to an Engineer</Link>
            </div>
            <ul className="hero-ticks">
              <li>Design &amp; assembly in USA</li>
              <li>1-year limited warranty</li>
              <li>Worldwide shipping</li>
            </ul>
            <div className="hero-stats">
              <div><strong><CountUp to={110} suffix="+" /></strong><span>years of instrumentation</span></div>
              <div><strong><CountUp to={240} suffix="+" /></strong><span>products in catalog</span></div>
              <div><strong><CountUp to={7} /></strong><span>continents deployed</span></div>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <LiveCard />
            <div className="hero-card hero-card-float a">
              <img src="https://cdn.shopify.com/s/files/1/0974/1388/files/lettuce-centered.webp?v=1755211930" alt="" loading="eager" />
            </div>
            <div className="hero-card hero-card-float b">
              <img src="https://cdn.shopify.com/s/files/1/0974/1388/products/satcomm.png?v=1445212767" alt="" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true"><span /></div>
        <svg className="hero-wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,50 C240,90 480,10 720,40 C960,70 1200,20 1440,55 L1440,90 L0,90 Z" />
        </svg>
      </section>

      {/* ===== BRAND MARQUEE ===== */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div className="marquee-group" key={i}>
              {BRANDS.concat(BRANDS).map((b, j) => (
                <span key={j}>{b.name}<i>·</i></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===== CATEGORIES ===== */}
      <section className="section categories">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <span className="eyebrow">Applications</span>
              <h2>What do you need to measure?</h2>
              <p>Three decades-deep application areas, one integrated M2M® platform.</p>
            </div>
          </Reveal>
          <div className="cat-grid">
            {CATEGORIES.map((c, i) => (
              <Reveal delay={i * 120} key={c.title}>
                <Link to={`/page/${c.slug}`} className="cat-card">
                  <div className="cat-img">
                    <img src={c.img} alt="" loading="lazy" />
                    <span className="cat-num">0{i + 1}</span>
                  </div>
                  <div className="cat-body">
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                    <span className="cat-link">Explore application <i>→</i></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="section products">
        <div className="container">
          <Reveal>
            <div className="section-head split">
              <div>
                <span className="eyebrow">The Catalog</span>
                <h2>Featured Instruments</h2>
                <p>A selection from our catalog — every order is confirmed by our sales team by email within one business day.</p>
              </div>
              <Link to="/shop" className="btn btn-outline">View all {catalog.length} products</Link>
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

      {/* ===== WHY STEVENS ===== */}
      <section className="section why">
        <div className="container why-inner">
          <Reveal className="why-media">
            <div className="why-media-frame">
              <img src={WHY_IMG} alt="Rows of irrigated crops monitored by Stevens instrumentation" loading="lazy" />
              <div className="why-media-badge">
                <strong><CountUp to={110} suffix="+" /></strong>
                <span>years engineering field instruments</span>
              </div>
            </div>
          </Reveal>
          <div className="why-copy">
            <Reveal>
              <span className="eyebrow">Why Stevens</span>
              <h2>The oldest name in water monitoring. The newest technology in the field.</h2>
            </Reveal>
            <div className="why-list">
              {WHY.map((w, i) => (
                <Reveal delay={i * 90} key={w.title}>
                  <div className="why-row">
                    <div className="why-icon">
                      <svg viewBox="0 0 24 24"><path d={w.icon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <div>
                      <h3>{w.title}</h3>
                      <p>{w.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== M2M ===== */}
      <section className="m2m">
        <div className="m2m-bg" style={{ backgroundImage: `url(${IMG.m2m})` }} aria-hidden="true" />
        <div className="container m2m-inner">
          <Reveal>
            <div>
              <span className="badge badge-dark">MEASUREMENTS TO MIND®</span>
              <h2>What the sensors <em>measure</em>, the mind <em>sees</em>.</h2>
              <p>
                M2M is our growing suite of data acquisition products and cloud systems —
                linking sensor communication, online data and measurement insight into one
                seamless workflow, from field station to dashboard.
              </p>
              <Link to="/page/m2m" className="btn btn-primary" style={{ marginTop: 24 }}>Explore the M2M Platform</Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <ul className="m2m-list">
              <li><strong>Sense</strong> Soil, water and atmospheric sensors built for harsh field conditions.</li>
              <li><strong>Transmit</strong> Cellular, satellite (GOES) and radio telemetry options.</li>
              <li><strong>See</strong> Cloud dashboards that turn raw measurements into decisions.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="section industries">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <span className="eyebrow">Who we serve</span>
              <h2>Trusted across every landscape</h2>
            </div>
          </Reveal>
          <div className="ind-grid">
            {INDUSTRIES.map((ind, i) => (
              <Reveal delay={i * 70} key={ind.name}>
                <div className="ind-card">
                  <svg viewBox="0 0 24 24"><path d={ind.icon} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>{ind.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section testimonials">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <span className="eyebrow">Field Reports</span>
              <h2>What people say after a season with Stevens</h2>
            </div>
          </Reveal>
          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <Reveal delay={i * 120} key={t.who}>
                <figure className="testi-card">
                  <svg viewBox="0 0 24 24" className="testi-quote"><path d="M10 7H6a3 3 0 0 0-3 3v7h7v-7H7c0-1.7 1.3-3 3-3V7Zm11 0h-4a3 3 0 0 0-3 3v7h7v-7h-3c0-1.7 1.3-3 3-3V7Z" /></svg>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <strong>{t.who}</strong>
                    <span>{t.where}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="section about" id="about">
        <div className="container about-inner">
          <Reveal>
            <div className="about-media">
              <img src={IMG.about} alt="Golden farm field at sunrise" loading="lazy" />
              <div className="about-media-card">
                <strong>1911</strong>
                <span>The year Leupold &amp; Stevens invented the first continuous water level recorder.</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <span className="eyebrow">Our Story</span>
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
                <div><strong><CountUp to={7} /></strong><span>continents deployed</span></div>
                <div><strong>1 yr</strong><span>limited warranty standard</span></div>
                <div><strong>24 hr</strong><span>quote turnaround</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section faq">
        <div className="container faq-inner">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Good to know</span>
              <h2>Frequently asked questions</h2>
              <p>Can't find your answer? <Link to="/contact">Talk to our team</Link> — a real engineer replies within one business day.</p>
            </div>
          </Reveal>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <Reveal delay={i * 80} key={f.q}>
                <div className={`faq-item ${faqOpen === i ? 'open' : ''}`}>
                  <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}>
                    {f.q}
                    <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
                  </button>
                  <div className="faq-a"><p>{f.a}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="cta-band">
        <div className="cta-bg" style={{ backgroundImage: `url(${IMG.cta})` }} aria-hidden="true" />
        <div className="container cta-inner">
          <Reveal>
            <h2>Ready to see what your site is telling you?</h2>
            <p>Get a complete monitoring recommendation — sensors, telemetry and cloud — sized to your budget.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Request a Quote</Link>
              <Link to="/shop" className="btn btn-ghost btn-lg">Browse the Catalog</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== BRANDS ===== */}
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
    </>
  )
}
