import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { ARTICLES } from '../data/articles.js'

export default function ArticleDetail() {
  const { slug } = useParams()
  const a = ARTICLES.find((x) => x.slug === slug)

  if (!a) {
    return (
      <section className="section" style={{ paddingTop: 160 }}>
        <div className="container">
          <h1>Article not found</h1>
          <Link to="/page/articles" className="btn btn-navy" style={{ marginTop: 20 }}>Back to Articles</Link>
        </div>
      </section>
    )
  }

  const related = ARTICLES.filter((x) => x.category === a.category && x.slug !== a.slug).slice(0, 3)

  return (
    <>
      <section className="page-hero has-img" style={{ minHeight: 380 }}>
        <div className="page-hero-bg" style={{ backgroundImage: `url(${a.img})`, opacity: 0.35 }} aria-hidden="true" />
        <div className="container">
          <nav className="crumbs light">
            <Link to="/">Home</Link> <i>/</i> <Link to="/page/articles">News &amp; Articles</Link> <i>/</i> <span>{a.category}</span>
          </nav>
          <h1>{a.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal>
            <img src={a.img} alt={a.title} style={{ width: '100%', borderRadius: 20, marginBottom: 32, aspectRatio: '16/8', objectFit: 'cover' }} />
          </Reveal>
          <Reveal delay={80}>
            <span className="eyebrow">{a.category}</span>
            {a.body.map((p, i) => (
              <p key={i} className="intro-lead" style={{ marginTop: i === 0 ? 12 : 16 }}>{p}</p>
            ))}
            {a.cta && (
              <Link to={a.cta.to} className="btn btn-navy" style={{ marginTop: 20 }}>{a.cta.label} <i>↗</i></Link>
            )}
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section au-focus">
          <div className="container">
            <h2 className="center-title">More in {a.category}</h2>
            <div className="insight-grid">
              {related.map((r, i) => (
                <Reveal delay={i * 60} key={r.slug}>
                  <Link to={`/page/articles/${r.slug}`} className="insight-card">
                    <div className="insight-img"><img src={r.img} alt={r.title} /></div>
                    <h3>{r.title}</h3>
                    <p>{r.excerpt}</p>
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
