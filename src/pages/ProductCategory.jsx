import { Link, useParams } from 'react-router-dom'
import catalog from '../data/catalog.json'
import ProductCard from '../components/ProductCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { PRODUCT_CATEGORIES, categoryBySlug, productsInCategory } from '../data/productCategories.js'
import { IMG } from '../data/site.js'

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

  return (
    <>
      <section className="page-hero has-img" style={{ minHeight: 380 }}>
        <div
          className="page-hero-bg"
          style={{ backgroundImage: `url(${cat.hero || IMG.water})`, opacity: cat.hero ? 0.4 : 0.22 }}
          aria-hidden="true"
        />
        <div className="container">
          <nav className="crumbs light">
            <Link to="/">Home</Link> <i>/</i> <Link to="/page/products">Products</Link> <i>/</i> <span>{cat.name}</span>
          </nav>
          <h1>{cat.title}</h1>
          {cat.body && <p>{cat.body.slice(0, 260)}{cat.body.length > 260 ? '…' : ''}</p>}
        </div>
      </section>

      {cat.body && (
        <section className="section">
          <div className="container" style={{ maxWidth: 860 }}>
            <Reveal><p className="intro-lead">{cat.body}</p></Reveal>
          </div>
        </section>
      )}

      <section className="section products">
        <div className="container">
          <div className="section-head split">
            <div>
              <h2>{cat.name}</h2>
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

      {cat.sections.length > 0 && (
        <section className="section au-focus">
          <div className="container" style={{ maxWidth: 900 }}>
            <h2 className="center-title">About {cat.name}</h2>
            {cat.sections.map((s, i) => (
              <Reveal delay={i * 60} key={i}>
                <div className="app-section">
                  {s.title && <h2>{s.title}</h2>}
                  {s.intro && <p className="intro-lead">{s.intro}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="section">
        <div className="container center-col">
          <h2 className="center-title">Not sure which instrument you need?</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 520, textAlign: 'center', marginBottom: 20 }}>
            Tell us about your site and measurement goals — our team will recommend the right setup.
          </p>
          <Link to="/contact" className="btn btn-navy">Talk To Our Team <i>↗</i></Link>
        </div>
      </section>
    </>
  )
}
