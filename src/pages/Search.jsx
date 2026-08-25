import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import catalog from '../data/catalog.json'
import { ARTICLES } from '../data/articles.js'
import { PRODUCT_CATEGORIES } from '../data/productCategories.js'
import ProductCard from '../components/ProductCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { IMG } from '../data/site.js'

// Pages worth surfacing in search alongside products and articles.
const PAGES = [
  { title: 'About Us', to: '/page/about-us', blurb: 'Our story, focus areas and core values.' },
  { title: 'History', to: '/page/history', blurb: 'Over 110 years of environmental measurement.' },
  { title: 'Distributors', to: '/page/distributors', blurb: 'Find your local Stevens distributor.' },
  { title: 'Join Our Team', to: '/page/employment-opportunities', blurb: 'Open roles and life at Stevens.' },
  { title: 'Client Profiles', to: '/page/client-profiles', blurb: 'Real deployments from our customers.' },
  { title: 'Conferences and Events', to: '/page/conferences-events', blurb: 'Where to meet the Stevens team.' },
  { title: 'Tradeshow', to: '/page/tradeshow', blurb: 'Our tradeshow schedule.' },
  { title: 'Data Management Software', to: '/page/m2m', blurb: 'Stevens M2M® and Stevens-Connect Cloud™.' },
  { title: 'Glossary', to: '/page/glossary', blurb: 'Environmental monitoring terms explained.' },
  { title: 'Video Library', to: '/page/video-library', blurb: 'Product walkthroughs and tutorials.' },
  { title: 'Contact Us', to: '/contact', blurb: 'Talk to our team, and our office locations.' },
  { title: 'Privacy Policy', to: '/page/privacy-policy', blurb: 'How we handle your information.' },
]

const norm = (s) => String(s || '').toLowerCase()

export default function Search() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') || ''
  const term = q.trim().toLowerCase()

  const results = useMemo(() => {
    if (!term) return { products: [], articles: [], categories: [], pages: [], total: 0 }

    const products = catalog.filter(
      (p) => norm(p.title).includes(term) || norm(p.sku).includes(term) || norm(p.category).includes(term),
    )
    const articles = ARTICLES.filter(
      (a) =>
        norm(a.title).includes(term) ||
        norm(a.excerpt).includes(term) ||
        norm(a.category).includes(term) ||
        a.blocks.some((b) => norm(b.heading).includes(term) || norm(b.body).includes(term)),
    )
    const categories = PRODUCT_CATEGORIES.filter(
      (c) => norm(c.name).includes(term) || norm(c.title).includes(term) || norm(c.body).includes(term),
    )
    const pages = PAGES.filter((p) => norm(p.title).includes(term) || norm(p.blurb).includes(term))

    return {
      products,
      articles,
      categories,
      pages,
      total: products.length + articles.length + categories.length + pages.length,
    }
  }, [term])

  return (
    <>
      <section className="page-hero has-img" style={{ minHeight: 300 }}>
        <div className="page-hero-bg" style={{ backgroundImage: `url(${IMG.field})` }} aria-hidden="true" />
        <div className="container">
          <nav className="crumbs light"><Link to="/">Home</Link> <i>/</i> <span>Search</span></nav>
          <h1>{q ? `Search: ${q}` : 'Search'}</h1>
          {q && <p>{results.total} result{results.total === 1 ? '' : 's'} across the site.</p>}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <form
            className="header-search articles-search"
            onSubmit={(e) => {
              e.preventDefault()
              setParams({ q: new FormData(e.target).get('q') })
            }}
          >
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" /><path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            <input name="q" defaultValue={q} placeholder="Search products, articles and pages" />
          </form>

          {!q && <p style={{ color: 'var(--muted)', marginTop: 30 }}>Type something above to search the whole site.</p>}

          {q && results.total === 0 && (
            <div className="shop-empty">
              <h3>No results for “{q}”</h3>
              <p>
                Try a different term, or <Link to="/shop" style={{ color: 'var(--teal)', fontWeight: 600 }}>browse the full catalog</Link>.
              </p>
            </div>
          )}

          {results.categories.length > 0 && (
            <div className="search-block">
              <h2>Categories</h2>
              <div className="cat-hub-grid">
                {results.categories.map((c) => (
                  <Link to={`/page/products/${c.slug}`} className="cat-hub-card" key={c.slug}>
                    <span className="eyebrow">{c.tab}</span>
                    <h3>{c.name}</h3>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {results.products.length > 0 && (
            <div className="search-block">
              <h2>Products <em>({results.products.length})</em></h2>
              <div className="product-grid">
                {results.products.slice(0, 12).map((p, i) => (
                  <Reveal delay={(i % 4) * 50} key={p.handle}><ProductCard p={p} /></Reveal>
                ))}
              </div>
              {results.products.length > 12 && (
                <Link to={`/shop?q=${encodeURIComponent(q)}`} className="btn btn-navy" style={{ marginTop: 22 }}>
                  See all {results.products.length} products <i>↗</i>
                </Link>
              )}
            </div>
          )}

          {results.articles.length > 0 && (
            <div className="search-block">
              <h2>Articles <em>({results.articles.length})</em></h2>
              <div className="insight-grid">
                {results.articles.slice(0, 6).map((a, i) => (
                  <Reveal delay={(i % 3) * 50} key={a.slug}>
                    <Link to={`/page/articles/${a.slug}`} className="insight-card">
                      {a.img && <div className="insight-img"><img src={a.img} alt={a.title} /></div>}
                      <h3>{a.title}</h3>
                      <p>{a.excerpt}</p>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {results.pages.length > 0 && (
            <div className="search-block">
              <h2>Pages</h2>
              <ul className="search-pages">
                {results.pages.map((p) => (
                  <li key={p.to}>
                    <Link to={p.to}>
                      <strong>{p.title}</strong>
                      <span>{p.blurb}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
