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
                  <button className="btn btn-primary btn-lg" onClick={() => add(p, qty)}>
                    Add to Cart
                  </button>
                  <a className="btn btn-outline btn-lg" href={mailto}>Order Now via Email</a>
                </div>
                {p.body && (
                  <div className="pd-desc">
                    <h3>About this instrument</h3>
                    <div dangerouslySetInnerHTML={{ __html: p.body }} />
                  </div>
                )}
              </div>
            </Reveal>
          </div>
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
