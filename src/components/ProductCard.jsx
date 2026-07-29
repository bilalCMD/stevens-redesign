import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export const fmtPrice = (n) =>
  '$' + n.toLocaleString('en-US', { minimumFractionDigits: n % 1 ? 2 : 0 })

export default function ProductCard({ p }) {
  const { add } = useCart()
  return (
    <article className="product-card">
      <Link to={`/product/${p.handle}`} className="product-img">
        <img src={p.img} alt={p.title} loading="lazy" />
        <span className="product-cat">{p.category}</span>
      </Link>
      <div className="product-body">
        <h3><Link to={`/product/${p.handle}`}>{p.title}</Link></h3>
        <div className="product-foot">
          <div className="price">
            <span>{fmtPrice(p.price)}</span>
            <em>SKU {p.sku}</em>
          </div>
          <button className="btn btn-primary btn-sm" onClick={() => add(p)}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
