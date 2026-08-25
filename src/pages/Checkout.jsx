import { useState } from 'react'
import { Link } from 'react-router-dom'
import { fmtPrice } from '../components/ProductCard.jsx'
import { useCart } from '../context/CartContext.jsx'
import { ORDER_EMAIL, STRIPE_PAYMENT_LINK, PAYPAL_ME_HANDLE } from '../data/site.js'

export default function Checkout() {
  const { items, subtotal, count, clear } = useCart()
  const [sent, setSent] = useState(false)

  if (items.length === 0 && !sent) {
    return (
      <section className="section cart-empty" style={{ paddingTop: 170 }}>
        <div className="container center-col">
          <h1>Your cart is empty</h1>
          <p>Add some instruments before checking out.</p>
          <Link to="/shop" className="btn btn-primary btn-lg">Shop Instruments</Link>
        </div>
      </section>
    )
  }

  const paypalHref = PAYPAL_ME_HANDLE
    ? `https://paypal.me/${PAYPAL_ME_HANDLE}/${subtotal.toFixed(2)}USD`
    : null

  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const lines = [
      'ORDER — stevenswater.com',
      '',
      ...items.map((i) => `${i.qty} × ${i.title} (SKU ${i.sku}) — ${fmtPrice(i.price)} each = ${fmtPrice(i.price * i.qty)}`),
      '',
      `Subtotal: ${fmtPrice(subtotal)} (${count} item${count === 1 ? '' : 's'})`,
      'Shipping: to be confirmed by Stevens',
      '',
      '--- Customer ---',
      `Name: ${f.get('name')}`,
      `Organization: ${f.get('company')}`,
      `Email: ${f.get('email')}`,
      `Phone: ${f.get('phone')}`,
      '',
      '--- Shipping address ---',
      f.get('address'),
      `${f.get('city')}, ${f.get('state')} ${f.get('zip')}`,
      f.get('country'),
      '',
      '--- Notes ---',
      f.get('notes') || '(none)',
      '',
      `Preferred payment: ${f.get('payment')}`,
      f.get('po') ? `Purchase order number: ${f.get('po')}` : '',
    ].filter((l) => l !== '')

    const href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(
      `Order — ${f.get('company') || f.get('name')} — ${fmtPrice(subtotal)}`,
    )}&body=${encodeURIComponent(lines.join('\n'))}`
    window.location.href = href
    setSent(true)
  }

  if (sent) {
    return (
      <section className="section" style={{ paddingTop: 170 }}>
        <div className="container center-col">
          <h1>Thanks — your order is on its way</h1>
          <p style={{ color: 'var(--muted)', maxWidth: 560, textAlign: 'center', margin: '14px 0 24px' }}>
            Your email app should have opened with the order details ready to send. Once it arrives,
            our sales team confirms pricing, freight and availability within one business day.
            If nothing opened, email us directly at <strong>{ORDER_EMAIL}</strong>.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="btn btn-navy" onClick={clear}>Continue Shopping <i>↗</i></Link>
            <Link to="/contact" className="btn btn-outline">Contact Us <i>↗</i></Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section" style={{ paddingTop: 150 }}>
      <div className="container">
        <nav className="crumbs">
          <Link to="/">Home</Link> <i>/</i> <Link to="/cart">Cart</Link> <i>/</i> <span>Checkout</span>
        </nav>
        <h1 className="cart-title">Checkout</h1>

        <div className="cart-grid">
          <form className="checkout-form contact-form-figma" onSubmit={submit}>
            <h3>Your details</h3>
            <div className="form-row">
              <label>Name*<input name="name" required placeholder="Your name" /></label>
              <label>Organization<input name="company" placeholder="Your organization" /></label>
            </div>
            <div className="form-row">
              <label>Email*<input name="email" type="email" required placeholder="you@example.com" /></label>
              <label>Phone*<input name="phone" required placeholder="Your phone" /></label>
            </div>

            <h3>Shipping address</h3>
            <label>Address*<input name="address" required placeholder="Street address" /></label>
            <div className="form-row">
              <label>City*<input name="city" required placeholder="City" /></label>
              <label>State / Province<input name="state" placeholder="State" /></label>
            </div>
            <div className="form-row">
              <label>ZIP / Postal code*<input name="zip" required placeholder="ZIP" /></label>
              <label>Country*<input name="country" required defaultValue="United States" /></label>
            </div>

            <h3>Payment</h3>
            <label>
              How would you like to pay?*
              <select name="payment" required defaultValue="Invoice me">
                <option>Invoice me</option>
                <option>Purchase order</option>
                <option>Credit card (Stripe)</option>
                <option>PayPal</option>
              </select>
            </label>
            <label>Purchase order number (if applicable)<input name="po" placeholder="PO number" /></label>
            <label>Order notes<textarea name="notes" rows="4" placeholder="Anything we should know" /></label>

            <button className="btn btn-navy btn-full btn-lg" type="submit">Place Order</button>
            <p className="sum-note">
              Orders are confirmed by our sales team by email within one business day — we verify
              pricing, stock and freight before taking payment. Purchase orders welcome.
            </p>
          </form>

          <aside className="cart-summary">
            <h3>Order Summary</h3>
            {items.map((i) => (
              <div className="sum-row" key={i.sku}>
                <span>{i.qty} × {i.title}</span>
                <strong>{fmtPrice(i.price * i.qty)}</strong>
              </div>
            ))}
            <div className="sum-row"><span>Shipping</span><em>confirmed by email</em></div>
            <div className="sum-row total"><span>Estimated Total</span><strong>{fmtPrice(subtotal)}</strong></div>

            {(STRIPE_PAYMENT_LINK || paypalHref) && (
              <div className="cart-pay-options">
                {STRIPE_PAYMENT_LINK && (
                  <a href={STRIPE_PAYMENT_LINK} target="_blank" rel="noreferrer" className="btn btn-outline btn-full">
                    Pay Now with Card
                  </a>
                )}
                {paypalHref && (
                  <a href={paypalHref} target="_blank" rel="noreferrer" className="btn btn-outline btn-full">
                    Pay Now with PayPal
                  </a>
                )}
              </div>
            )}
            <Link to="/cart" className="sum-continue">← Back to cart</Link>
          </aside>
        </div>
      </div>
    </section>
  )
}
