import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import catalog from '../data/catalog.json'
import ProductCard, { fmtPrice } from '../components/ProductCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { useCart } from '../context/CartContext.jsx'
import { ORDER_EMAIL } from '../data/site.js'

// Splits an HTML product body into (a) a plain-text description with the <ul> removed,
// and (b) the bullet list items, if the body contains one — used to build the Figma-style
// Features section only when the underlying data actually has bullets to show.
function splitBody(html) {
  if (!html) return { description: '', features: [] }
  const ulMatch = html.match(/<ul>([\s\S]*?)<\/ul>/)
  const features = ulMatch
    ? Array.from(ulMatch[1].matchAll(/<li>([\s\S]*?)<\/li>/g)).map((m) => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean)
    : []
  const description = html.replace(/<ul>[\s\S]*?<\/ul>/, '')
  return { description, features }
}

export default function ProductDetail() {
  const { handle } = useParams()
  const { add } = useCart()
  const [qty, setQty] = useState(1)
  const p = catalog.find((x) => x.handle === handle)
  const { description, features } = useMemo(() => splitBody(p?.body), [p])

  if (!p) {
    return (
      <section className="section" style={{ paddingTop: 160 }}>
        <div className="container">
          <h1>Product not found</h1>
          <p style={{ margin: '12px 0 24px' }}>This product may have moved.</p>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
      </section>
    )
  }

  const related = catalog.filter((x) => x.category === p.category && x.handle !== p.handle).slice(0, 3)
  const mailto = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(`Order Request: ${p.title} (SKU ${p.sku})`)}&body=${encodeURIComponent(
    `Product: ${p.title}\nSKU: ${p.sku}\nUnit price: ${fmtPrice(p.price)}\nQuantity: ${qty}\n\nName:\nCompany:\nPhone:\nShipping address:\n`,
  )}`
  const dataSheetHref = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(`Data Sheet Request: ${p.title}`)}`

  const specs = [
    ['SKU', p.sku],
    ['Category', p.category],
    ['Price', fmtPrice(p.price)],
    ['Warranty', '1-year limited warranty'],
    ['Ships from', 'Portland, Oregon, USA'],
    ['Lead time', 'Confirmed by email within 1 business day'],
  ]

  const submitHelp = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const body = ['Name: ' + f.get('name'), 'Organization: ' + f.get('company'), 'Phone: ' + f.get('phone'), 'Email: ' + f.get('email'), '', f.get('message')].join('\n')
    window.location.href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(`Product question — ${p.title}`)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <section className="pd">
        <div className="container">
          <nav className="crumbs">
            <Link to="/">Home</Link> <i>/</i> <Link to="/shop">Shop</Link> <i>/</i> <span>{p.title}</span>
          </nav>
          <div className="pd-grid">
            <Reveal>
              <div className="pd-img">
                <img src={p.img} alt={p.title} />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="pd-info">
                <span className="pd-cat">{p.category}</span>
                <h1>{p.title}</h1>
                <div className="pd-price">
                  {fmtPrice(p.price)}
                  <em>SKU {p.sku}</em>
                </div>
                {description && <div className="pd-desc" dangerouslySetInnerHTML={{ __html: description }} />}
                <div className="pd-cta-row">
                  <a className="btn btn-navy" href="#buy">Order Online <i>↗</i></a>
                  <a className="btn btn-navy" href={dataSheetHref}>Download Data Sheet <i>↗</i></a>
                  <Link className="btn btn-navy" to="/contact">Support Services <i>↗</i></Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section pd-features">
        <div className="container">
          <div className="pd-features-grid">
            <Reveal>
              <div>
                <h2>Features</h2>
                <ul className="pd-feature-list">
                  {(features.length ? features : [
                    'Rugged, field-proven construction',
                    'Compatible with standard Stevens data loggers and telemetry',
                    'Low power consumption for long-term unattended deployment',
                    'Backed by a 1-year limited warranty',
                  ]).map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <h2>Support &amp; Service</h2>
                <ul className="pd-feature-list">
                  <li>Orders confirmed by our sales team via email within 1 business day</li>
                  <li>Technical support available for setup, wiring, and configuration</li>
                  <li>Data sheets and wiring diagrams available on request</li>
                  <li>Ships worldwide from Portland, Oregon</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section pd-specs">
        <div className="container">
          <h2 className="center-title">Technical Specifications</h2>
          <div className="pd-specs-table">
            {specs.map(([k, v]) => (
              <div className="pd-specs-row" key={k}>
                <div className="pd-specs-key">{k}</div>
                <div className="pd-specs-val">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pd-buy-section" id="buy">
        <div className="container">
          <h2 className="center-title">Shop Online / Inquire</h2>
          <div className="product-grid pd-buy-grid">
            <ProductCard p={p} />
            {related.map((r) => <ProductCard p={r} key={r.handle} />)}
          </div>
          <div className="pd-buy-cta">
            <div className="qty-stepper">
              <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease">−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)} aria-label="Increase">+</button>
            </div>
            <button className="btn btn-navy btn-lg" onClick={() => add(p, qty)}>Add {p.title} to Cart</button>
            <a className="btn btn-outline btn-lg" href={mailto}>Order Now via Email</a>
          </div>
        </div>
      </section>

      <section className="section pd-help">
        <div className="container contact-hero-inner">
          <h2 className="center-title">Need more information? We&rsquo;re here to help!</h2>
          <p className="pd-help-sub">Tell us a bit about yourself and your question, and we&rsquo;ll get back to you ASAP.</p>
          <form className="contact-form-figma" onSubmit={submitHelp}>
            <div className="form-row">
              <label>Name*<input name="name" required placeholder="Your Name" /></label>
              <label>Organization*<input name="company" required placeholder="Your Organization" /></label>
            </div>
            <div className="form-row">
              <label>Phone*<input name="phone" required placeholder="Your Phone" /></label>
              <label>Email*<input name="email" type="email" required placeholder="Your Email" /></label>
            </div>
            <label>Message<textarea name="message" rows="5" placeholder="Message" /></label>
            <button className="btn btn-navy btn-full" type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  )
}
