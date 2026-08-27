import { Link, useParams } from 'react-router-dom'
import catalog from '../data/catalog.json'
import { fmtPrice } from '../components/ProductCard.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { PRODUCT_CATEGORIES, categoryBySlug, productsInCategory } from '../data/productCategories.js'
import { ARTICLES } from '../data/articles.js'
import { IMG } from '../data/site.js'

const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

// Each overview section is illustrated with the product from this category that
// best matches its heading — the way the design pairs copy with a featured item.
function featuredFor(sectionTitle, products, alreadyUsed) {
  const words = norm(sectionTitle).split(' ').filter((w) => w.length > 3)
  let best = null
  let bestScore = 0
  for (const p of products) {
    if (alreadyUsed.has(p.handle)) continue
    const hay = norm(p.title + ' ' + (p.body || ''))
    const score = words.filter((w) => hay.includes(w)).length
    if (score > bestScore) {
      bestScore = score
      best = p
    }
  }
  if (best) return best
  // Nothing matched by name — fall back to the next unused product so the
  // section still shows something real rather than an empty panel.
  return products.find((p) => !alreadyUsed.has(p.handle)) || null
}

function FeatureCard({ product }) {
  if (!product) return null
  const blurb = String(product.body || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 210)
  return (
    <Link to={`/product/${product.handle}`} className="cat-feature">
      <div className="cat-feature-img">
        <img src={product.img} alt={product.title} loading="lazy" />
      </div>
      <h3>{product.title}</h3>
      {blurb && <p>{blurb}{blurb.length >= 210 ? '…' : ''}</p>}
      <span className="cat-feature-more">
        {product.quoteOnly ? 'Request a Quote' : product.priceFrom ? `From ${fmtPrice(product.price)}` : 'More'} <i>↗</i>
      </span>
    </Link>
  )
}

function CategoryHub() {
  return (
    <>
      <section className="page-hero has-img" style={{ minHeight: 340 }}>
        <div className="page-hero-bg" style={{ backgroundImage: `url(${IMG.field})` }} aria-hidden="true" />
        <div className="container">
          <nav className="crumbs light"><Link to="/">Home</Link> <i>/</i> <span>Products</span></nav>
          <h1>Products</h1>
          <p>Browse our instruments by measurement type.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="cat-hub-grid">
            {PRODUCT_CATEGORIES.map((c, i) => (
              <Reveal delay={i * 50} key={c.slug}>
                <Link to={`/page/products/${c.slug}`} className="cat-hub-card">
                  <span className="eyebrow">{c.tab}</span>
                  <h3>{c.name}</h3>
                  <em>{productsInCategory(c, catalog).length} products</em>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default function ProductCategory() {
  const { slug } = useParams()
  const cat = categoryBySlug(slug)
  if (!cat) return <CategoryHub />

  const products = productsInCategory(cat, catalog)
  const used = new Set()
  const sections = cat.sections.map((s) => {
    const product = featuredFor(s.title, products, used)
    if (product) used.add(product.handle)
    return { ...s, product }
  })

  const catWords = norm(cat.name).split(' ').filter((w) => w.length > 3)
  const related = ARTICLES.filter((a) => {
    const hay = norm(a.title + ' ' + a.excerpt + ' ' + a.category)
    return catWords.some((w) => hay.includes(w))
  }).slice(0, 3)

  return (
    <>
      <section className="cat-hero">
        <div
          className="cat-hero-bg"
          style={{ backgroundImage: `url(${cat.hero || IMG.water})` }}
          aria-hidden="true"
        />
        <div className="cat-hero-overlay" aria-hidden="true" />
        <div className="container cat-hero-inner">
          <nav className="crumbs light">
            <Link to="/">Home</Link> <i>/</i> <Link to="/page/products">Products</Link> <i>/</i> <span>{cat.name}</span>
          </nav>
          <h1>{cat.title}</h1>
          {cat.body && <p>{cat.body}</p>}
        </div>
      </section>

      {sections.length > 0 ? (
        <section className="section">
          <div className="container">
            {sections.map((s, i) => (
              <Reveal delay={i * 40} key={i}>
                <div className={`cat-section ${i % 2 ? 'alt' : ''}`}>
                  <div className="cat-section-copy">
                    {s.title && <h2>{s.title}</h2>}
                    {s.intro && <p>{s.intro}</p>}
                  </div>
                  <FeatureCard product={s.product} />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ) : (
        cat.body && (
          <section className="section">
            <div className="container" style={{ maxWidth: 860 }}>
              <Reveal><p className="intro-lead">{cat.body}</p></Reveal>
            </div>
          </section>
        )
      )}

      <section className="section products">
        <div className="container">
          <div className="section-head split">
            <div>
              <h2>All {cat.name}</h2>
              <p>{products.length} product{products.length === 1 ? '' : 's'} in this category.</p>
            </div>
            <Link to="/shop" className="btn btn-navy">Browse Full Catalog <i>↗</i></Link>
          </div>
          {products.length > 0 ? (
            <div className="product-grid">
              {products.map((p, i) => (
                <Reveal delay={(i % 4) * 60} key={p.handle}>
                  <ProductCard p={p} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p style={{ color: 'var(--muted)' }}>
              Products in this category are supplied to order —{' '}
              <Link to="/contact" style={{ color: 'var(--teal)', fontWeight: 600 }}>contact our team</Link> for a quote.
            </p>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="section au-focus">
          <div className="container">
            <h2 className="center-title">Related Articles</h2>
            <div className="insight-grid">
              {related.map((a, i) => (
                <Reveal delay={i * 60} key={a.slug}>
                  <Link to={`/page/articles/${a.slug}`} className="insight-card">
                    {a.img && <div className="insight-img"><img src={a.img} alt={a.title} /></div>}
                    <h3>{a.title}</h3>
                    <p>{a.excerpt}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
