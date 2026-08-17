import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { ARTICLES, CATEGORIES } from '../data/articles.js'
import { IMG } from '../data/site.js'

export default function Articles() {
  const [activeCat, setActiveCat] = useState('All')
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    return ARTICLES.filter((a) => {
      const matchesCat = activeCat === 'All' || a.category === activeCat
      const matchesQ = !q.trim() || a.title.toLowerCase().includes(q.trim().toLowerCase())
      return matchesCat && matchesQ
    })
  }, [activeCat, q])

  return (
    <>
      <section className="page-hero has-img" style={{ minHeight: 340 }}>
        <div className="page-hero-bg" style={{ backgroundImage: `url(${IMG.field})` }} aria-hidden="true" />
        <div className="container">
          <nav className="crumbs light"><Link to="/">Home</Link> <i>/</i> <span>News &amp; Articles</span></nav>
          <h1>{activeCat === 'All' ? 'News & Articles' : `News & Articles / ${activeCat}`}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="header-search articles-search">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" /><path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            <input placeholder="Search articles" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>

          <div className="article-cats">
            <button
              className={`article-cat ${activeCat === 'All' ? 'active' : ''}`}
              onClick={() => setActiveCat('All')}
            >
              <span className="dot" /> All
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`article-cat ${activeCat === c ? 'active' : ''}`}
                onClick={() => setActiveCat(c)}
              >
                <span className="dot" /> {c}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p style={{ color: 'var(--muted)', marginTop: 40 }}>No articles found. Try a different search or category.</p>
          ) : (
            <div className="insight-grid" style={{ marginTop: 40 }}>
              {filtered.map((a, i) => (
                <Reveal delay={i * 60} key={a.slug}>
                  <Link to={`/page/articles/${a.slug}`} className="insight-card">
                    <div className="insight-img"><img src={a.img} alt={a.title} /></div>
                    <h3>{a.title}</h3>
                    <p>{a.excerpt}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
