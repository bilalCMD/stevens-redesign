import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import catalog from '../data/catalog.json'
import ProductCard, { fmtPrice } from '../components/ProductCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { useCart } from '../context/CartContext.jsx'
import { ORDER_EMAIL } from '../data/site.js'

export default function ProductDetail() {
  const { handle } = useParams()
  const { add } = useCart()
  const [qty, setQty] = useState(1)
  const p = catalog.find((x) => x.handle === handle)

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

  const related = catalog.filter((x) => x.category === p.category && x.handle !== p.handle).slice(0, 4)
  const mailto = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(`Order Request: ${p.title} (SKU ${p.sku})`)}&body=${encodeURIComponent(
    `Product: ${p.title}\nSKU: ${p.sku}\nUnit price: ${fmtPrice(p.price)}\nQuantity: ${qty}\n\nName:\nCompany:\nPhone:\nShipping address:\n`,
  )}`

  const dataSheetHref = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(`Data Sheet Request: ${p.title}`)}`
  const supportHref = '/contact'

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
                {p.body && <div className="pd-desc" dangerouslySetInnerHTML={{ __html: p.body }} />}
                <div className="pd-cta-row">
                  <a className="btn btn-navy" href="#buy">Order Online <i>↗</i></a>
                  <a className="btn btn-navy" href={dataSheetHref}>Download Data Sheet <i>↗</i></a>
                  <Link className="btn btn-navy" to={supportHref}>Support Services <i>↗</i></Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section pd-buy-section" id="buy">
        <div className="container">
          <h2 className="center-title">Shop Online / Inquire</h2>
          <div className="pd-buy-panel">
            <div className="pd-buy-img">
              <img src={p.img} alt={p.title} />
            </div>
            <div className="pd-buy-info">
              <span>{p.title}</span>
              <div className="pd-price">{fmtPrice(p.price)}</div>
              <ul className="pd-ticks">
                <li>Confirmed by email within 1 business day</li>
                <li>1-year limited warranty</li>
                <li>Ships worldwide from Portland, OR</li>
              </ul>
              <div className="pd-buy">
                <div className="qty-stepper">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease">−</button>
                  <span>{qty}</span>
                  <button onClick={() => setQty(qty + 1)} aria-label="Increase">+</button>
                </div>
                <button className="btn btn-navy btn-lg" onClick={() => add(p, qty)}>
                  Add to Cart
                </button>
                <a className="btn btn-outline btn-lg" href={mailto}>Order Now via Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pd-help">
        <div className="container">
          <h2 className="center-title">Need more information? We&rsquo;re here to help!</h2>
          <p className="pd-help-sub">Tell us a bit about yourself and your question, and we&rsquo;ll get back to you ASAP.</p>
          <Link to="/contact" className="btn btn-navy" style={{ marginTop: 20 }}>Contact Us <i>↗</i></Link>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section related">
          <div className="container">
            <div className="section-head">
              <h2>More in {p.category}</h2>
            </div>
            <div className="product-grid">
              {related.map((r, i) => (
                <Reveal delay={i * 80} key={r.sku + r.handle}>
                  <ProductCard p={r} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
