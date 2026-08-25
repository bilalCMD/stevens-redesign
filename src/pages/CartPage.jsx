import { Link } from 'react-router-dom'
import { fmtPrice } from '../components/ProductCard.jsx'
import { useCart } from '../context/CartContext.jsx'
import { ORDER_EMAIL, STRIPE_PAYMENT_LINK, PAYPAL_ME_HANDLE } from '../data/site.js'

export default function CartPage() {
  const { items, setQty, remove, clear, subtotal, count } = useCart()

  const orderBody = [
    'ORDER REQUEST — stevenswater.com',
    '',
    ...items.map((i) => `${i.qty} × ${i.title} (SKU ${i.sku}) — ${fmtPrice(i.price)} each = ${fmtPrice(i.price * i.qty)}`),
    '',
    `Subtotal: ${fmtPrice(subtotal)} (${count} item${count === 1 ? '' : 's'})`,
    'Shipping: to be confirmed',
    '',
    'Name:',
    'Company:',
    'Phone:',
    'Shipping address:',
    'Notes:',
  ].join('\n')
  const mailto = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(`Order Request — ${count} item${count === 1 ? '' : 's'} — ${fmtPrice(subtotal)}`)}&body=${encodeURIComponent(orderBody)}`
  const paypalHref = PAYPAL_ME_HANDLE ? `https://paypal.me/${PAYPAL_ME_HANDLE}/${subtotal.toFixed(2)}USD` : null

  if (items.length === 0) {
    return (
      <section className="section cart-empty" style={{ paddingTop: 170 }}>
        <div className="container center-col">
          <svg viewBox="0 0 24 24" className="cart-empty-icon"><path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 3h2l3.2 11.2A2 2 0 0 0 10.1 15.7h7.4a2 2 0 0 0 1.9-1.4L22 7H6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <h1>Your cart is empty</h1>
          <p>Browse the catalog and add instruments — ordering takes one email.</p>
          <Link to="/shop" className="btn btn-primary btn-lg">Shop Instruments</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section cart" style={{ paddingTop: 150 }}>
      <div className="container">
        <h1 className="cart-title">My Cart <span>({count} item{count === 1 ? '' : 's'})</span></h1>
        <div className="cart-grid">
          <div className="cart-items">
            {items.map((i) => (
              <div className="cart-item" key={i.sku}>
                <Link to={`/product/${i.handle}`} className="cart-item-img"><img src={i.img} alt="" /></Link>
                <div className="cart-item-info">
                  <Link to={`/product/${i.handle}`}><strong>{i.title}</strong></Link>
                  <em>SKU {i.sku}</em>
                  <span className="cart-item-price">{fmtPrice(i.price)} each</span>
                </div>
                <div className="cart-item-actions">
                  <div className="qty-stepper">
                    <button onClick={() => setQty(i.sku, i.qty - 1)} aria-label="Decrease">−</button>
                    <span>{i.qty}</span>
                    <button onClick={() => setQty(i.sku, i.qty + 1)} aria-label="Increase">+</button>
                  </div>
                  <strong className="cart-line-total">{fmtPrice(i.price * i.qty)}</strong>
                  <button className="cart-remove" onClick={() => remove(i.sku)} aria-label="Remove">
                    <svg viewBox="0 0 24 24"><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m3 0-1 13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1L6 7m4 4v6m4-6v6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                </div>
              </div>
            ))}
            <button className="linklike cart-clear" onClick={clear}>Clear cart</button>
          </div>
          <aside className="cart-summary">
            <h3>Order Summary</h3>
            <div className="sum-row"><span>Subtotal</span><strong>{fmtPrice(subtotal)}</strong></div>
            <div className="sum-row"><span>Shipping</span><em>confirmed by email</em></div>
            <div className="sum-row total"><span>Estimated Total</span><strong>{fmtPrice(subtotal)}</strong></div>
            {(STRIPE_PAYMENT_LINK || paypalHref) && (
              <div className="cart-pay-options">
                {STRIPE_PAYMENT_LINK && (
                  <a href={STRIPE_PAYMENT_LINK} target="_blank" rel="noreferrer" className="btn btn-outline btn-lg btn-full">
                    Pay with Card (Stripe)
                  </a>
                )}
                {paypalHref && (
                  <a href={paypalHref} target="_blank" rel="noreferrer" className="btn btn-outline btn-lg btn-full">
                    Pay with PayPal
                  </a>
                )}
              </div>
            )}
            <Link to="/checkout" className="btn btn-navy btn-lg btn-full">Proceed to Checkout</Link>
            <a href={mailto} className="btn btn-outline btn-full" style={{ marginTop: 10 }}>Or order via email</a>
            <p className="sum-note">
              Checkout opens a pre-filled order email to our sales team ({ORDER_EMAIL}).
              We confirm pricing, availability, freight and payment options within one business day.
              Purchase orders welcome.
            </p>
            <Link to="/shop" className="sum-continue">← Continue shopping</Link>
          </aside>
        </div>
      </div>
    </section>
  )
}
