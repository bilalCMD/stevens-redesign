import { Link, useParams } from 'react-router-dom'
import { PAGE_TITLES } from '../data/menu.js'
import { IMG } from '../data/site.js'
import catalog from '../data/catalog.json'
import ProductCard from '../components/ProductCard.jsx'
import Reveal from '../components/Reveal.jsx'

// Shell for the ~100 content pages of the old site. In the full build each
// page's copy migrates from stevenswater.com/<slug>; the demo shows the frame.
export default function InfoPage() {
  const slug = useParams()['*']
  const title =
    PAGE_TITLES[slug] ||
    slug
      .split('/')
      .pop()
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())

  const words = title.toLowerCase().split(/\s+/)
  const suggestions = catalog
    .filter((p) => words.some((w) => w.length > 3 && p.title.toLowerCase().includes(w)))
    .slice(0, 4)
  const fallback = suggestions.length ? suggestions : catalog.slice(0, 4)

  return (
    <>
      <section className="page-hero has-img">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${IMG.field})` }} aria-hidden="true" />
        <div className="container">
          <nav className="crumbs light">
            <Link to="/">Home</Link> <i>/</i> <span>{title}</span>
          </nav>
          <h1>{title}</h1>
        </div>
      </section>
      <section className="section info-body">
        <div className="container">
          <Reveal>
            <div className="info-note">
              <svg viewBox="0 0 24 24"><path d="M12 8v5m0 3.5v.5M12 3 2 21h20L12 3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <div>
                <strong>Page reserved in the redesign.</strong>
                <p>
                  Content for “{title}” migrates from{' '}
                  <a href={`https://stevenswater.com/${slug}/`} target="_blank" rel="noreferrer">
                    stevenswater.com/{slug}
                  </a>{' '}
                  in the full build — same URL structure, new design.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="section-head" style={{ marginTop: 56 }}>
              <h2>Related instruments</h2>
            </div>
          </Reveal>
          <div className="product-grid">
            {fallback.map((p, i) => (
              <Reveal delay={i * 80} key={p.sku + p.handle}>
                <ProductCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
