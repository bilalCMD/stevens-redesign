import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import catalog from '../data/catalog.json'
import ProductCard, { fmtPrice } from '../components/ProductCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { useCart } from '../context/CartContext.jsx'
import { ORDER_EMAIL } from '../data/site.js'
import { contentForProduct } from '../data/productContent.js'
import { specsForHandle } from '../data/productSpecs.js'
import { quoteProduct } from '../data/quoteProducts.js'
import { figmaPage } from '../data/figmaPages.js'

// The app uses a hash router, so a plain "#id" link would be read as a route change.
// Scroll to the section directly instead, leaving the URL alone.
function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

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
  const [variantSku, setVariantSku] = useState('')
  const p = catalog.find((x) => x.handle === handle)
  const { description, features } = useMemo(() => splitBody(p?.body), [p])
  const fig = useMemo(() => contentForProduct(p), [p])
  const live = useMemo(() => specsForHandle(handle) || quoteProduct(handle), [handle])
  const design = useMemo(() => figmaPage(handle), [handle])

  // The chosen variant (if this product is sold in several sizes/lengths).
  const variant = p?.variants?.find((v) => v.sku === variantSku) || p?.variants?.[0] || null
  const price = variant ? variant.price : p?.price
  const sku = variant ? variant.sku : p?.sku
  const isQuote = variant ? variant.quoteOnly : p?.quoteOnly

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
  const fullName = variant ? `${p.title} — ${variant.label}` : p.title
  const mailto = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(`Order Request: ${fullName} (SKU ${sku})`)}&body=${encodeURIComponent(
    `Product: ${fullName}\nSKU: ${sku}\nUnit price: ${fmtPrice(price)}\nQuantity: ${qty}\n\nName:\nCompany:\nPhone:\nShipping address:\n`,
  )}`
  const dataSheetHref = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(`Data Sheet Request: ${fullName}`)}`

  // Specifications, best source first: the approved design, then Stevens' own live
  // site (which they confirmed is accurate), then the catalogue facts we always have.
  const specSource = fig?.specs?.length ? fig.specs : live?.specs?.length ? live.specs : null
  const specs = specSource
    ? specSource.map((s) => [s.label, s.value])
    : [
        ['SKU', sku],
        ['Category', p.category],
        ...(isQuote ? [] : [['Price', fmtPrice(price)]]),
        ['Warranty', '1-year limited warranty'],
        ['Ships from', 'Portland, Oregon, USA'],
        ['Lead time', 'Confirmed by email within 1 business day'],
      ]

  const featureList = fig?.features?.length
    ? fig.features
    : live?.features?.length
      ? live.features
      : features

  // The enquiry form always names the product (and chosen option) being asked about.
  const submitHelp = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const body = [
      `Product: ${fullName}`,
      `SKU: ${sku}`,
      isQuote ? 'Request type: Quote request' : '',
      '',
      'Name: ' + f.get('name'),
      'Organization: ' + f.get('company'),
      'Phone: ' + f.get('phone'),
      'Email: ' + f.get('email'),
      '',
      f.get('message'),
    ].filter(Boolean).join('\n')
    const subject = isQuote ? `Quote request — ${fullName}` : `Product question — ${fullName}`
    window.location.href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
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
                {fig?.subtitle && <p className="pd-subtitle">{fig.subtitle}</p>}
                <div className="pd-price">
                  {isQuote ? <span className="price-quote">Price on request</span> : fmtPrice(price)}
                  <em>SKU {sku}</em>
                </div>
                {fig?.body ? (
                  <div className="pd-desc"><p>{fig.body}</p></div>
                ) : (
                  description && <div className="pd-desc" dangerouslySetInnerHTML={{ __html: description }} />
                )}
                <div className="pd-cta-row">
                  <button type="button" className="btn btn-navy" onClick={() => scrollToSection(isQuote ? 'enquire' : 'buy')}>
                    {isQuote ? 'Request a Quote' : 'Order Online'} <i>↗</i>
                  </button>
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
                  {(featureList.length ? featureList : [
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
                <h2>{fig?.uniqueAbilities?.length ? 'Unique Abilities' : 'Support & Service'}</h2>
                <ul className="pd-feature-list">
                  {fig?.uniqueAbilities?.length ? (
                    fig.uniqueAbilities.map((u, i) => <li key={i}>{u}</li>)
                  ) : (
                    <>
                  <li>Orders confirmed by our sales team via email within 1 business day</li>
                  <li>Technical support available for setup, wiring, and configuration</li>
                  <li>Data sheets and wiring diagrams available on request</li>
                  <li>Ships worldwide from Portland, Oregon</li>
                    </>
                  )}
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
            {specs.map(([k, v], i) => (
              <div className="pd-specs-row" key={k + i}>
                <div className="pd-specs-key">{k}</div>
                <div className="pd-specs-val">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pd-buy-section" id="buy">
        <div className="container">
          <h2 className="center-title">{isQuote ? 'Request a Quote' : 'Shop Online / Inquire'}</h2>

          <div className="pd-order-panel">
            {p.variants && (
              <label className="pd-variant">
                <span>Choose an option</span>
                <select value={variant?.sku || ''} onChange={(e) => setVariantSku(e.target.value)}>
                  {p.variants.map((v) => (
                    <option key={v.sku} value={v.sku}>
                      {v.label}{v.quoteOnly ? ' — price on request' : ` — ${fmtPrice(v.price)}`}
                    </option>
                  ))}
                </select>
              </label>
            )}

            {isQuote ? (
              <p className="pd-quote-note">
                This item is supplied to order. Tell us what you need below and our team will send
                you a quote — the form already knows which product you&rsquo;re asking about.
              </p>
            ) : (
              <div className="pd-buy-cta">
                <div className="qty-stepper">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease">−</button>
                  <span>{qty}</span>
                  <button onClick={() => setQty(qty + 1)} aria-label="Increase">+</button>
                </div>
                <button
                  className="btn btn-navy btn-lg"
                  onClick={() => add({ ...p, sku, price, title: fullName }, qty)}
                >
                  Add to Cart
                </button>
                <a className="btn btn-outline btn-lg" href={mailto}>Order Now via Email</a>
              </div>
            )}
          </div>

          <div className="product-grid pd-buy-grid">
            {related.map((r) => <ProductCard p={r} key={r.handle} />)}
          </div>
        </div>
      </section>

      {design?.sections?.length > 0 && (
        <section className="section pd-design">
          <div className="container">
            {design.sections
              .filter((s) => !/^(technical specifications|related articles)$/i.test(s.heading))
              .map((s, i) => (
                <Reveal delay={i * 40} key={i}>
                  <div className="app-section">
                    <h2>{s.heading}</h2>
                    {s.body.map((b, j) => <p className="intro-lead" key={j}>{b}</p>)}
                    {s.bullets.length > 0 && (
                      <ul className="pd-feature-list">
                        {s.bullets.map((b) => <li key={b}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
          </div>
        </section>
      )}

      <section className="section pd-help" id="enquire">
        <div className="container contact-hero-inner">
          <h2 className="center-title">
            {isQuote ? `Request a quote for ${p.title}` : 'Need more information? We’re here to help!'}
          </h2>
          <p className="pd-help-sub">
            Tell us a bit about yourself and your question, and we&rsquo;ll get back to you ASAP.
          </p>
          <p className="pd-enquiry-about">
            Enquiry about: <strong>{fullName}</strong> <em>(SKU {sku})</em>
          </p>
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
