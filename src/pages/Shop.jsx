import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import catalog from '../data/catalog.json'
import ProductCard from '../components/ProductCard.jsx'
import Reveal from '../components/Reveal.jsx'

const CATS = ['All', ...new Set(catalog.map((p) => p.category))]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const [q, setQ] = useState('')
  const [cat, setCat] = useState(CATS.includes(params.get('cat')) ? params.get('cat') : 'All')
  const [sort, setSort] = useState('featured')

  const selectCat = (c) => {
    setCat(c)
    setParams(c === 'All' ? {} : { cat: c })
  }

  const list = useMemo(() => {
    let l = catalog.filter(
      (p) =>
        (cat === 'All' || p.category === cat) &&
        (q.trim() === '' || p.title.toLowerCase().includes(q.toLowerCase()) || p.sku.includes(q)),
    )
    if (sort === 'price-asc') l = [...l].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') l = [...l].sort((a, b) => b.price - a.price)
    if (sort === 'name') l = [...l].sort((a, b) => a.title.localeCompare(b.title))
    return l
  }, [q, cat, sort])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">In-stock instruments</span>
          <h1>Shop the Catalog</h1>
          <p>{catalog.length} instruments and accessories with transparent pricing. Orders are confirmed by email within one business day.</p>
        </div>
      </section>
      <section className="section shop">
        <div className="container">
          <div className="shop-controls">
            <div className="shop-search">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" /><path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              <input placeholder="Search by name or SKU…" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="shop-sort">
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
          <div className="shop-cats">
            {CATS.map((c) => (
              <button key={c} className={`chip ${cat === c ? 'active' : ''}`} onClick={() => selectCat(c)}>
                {c}
                <em>{c === 'All' ? catalog.length : catalog.filter((p) => p.category === c).length}</em>
              </button>
            ))}
          </div>
          {list.length === 0 ? (
            <div className="shop-empty">
              <h3>No products match “{q}”</h3>
              <p>Try a different search, or <button className="linklike" onClick={() => { setQ(''); selectCat('All') }}>reset filters</button>.</p>
            </div>
          ) : (
            <div className="product-grid">
              {list.map((p, i) => (
                <Reveal delay={(i % 4) * 60} key={p.sku + p.handle}>
                  <ProductCard p={p} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
