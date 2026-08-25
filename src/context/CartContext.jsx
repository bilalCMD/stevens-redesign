import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('stevens-cart')) || []
    } catch {
      return []
    }
  })
  const [flash, setFlash] = useState(null)

  useEffect(() => {
    localStorage.setItem('stevens-cart', JSON.stringify(items))
  }, [items])

  const add = (product, qty = 1) => {
    // Quote-request items have no price, so they never enter the cart —
    // they go through the product enquiry form instead.
    if (product.quoteOnly) return
    setItems((prev) => {
      const found = prev.find((i) => i.sku === product.sku)
      if (found) return prev.map((i) => (i.sku === product.sku ? { ...i, qty: i.qty + qty } : i))
      return [...prev, { sku: product.sku, handle: product.handle, title: product.title, price: product.price, img: product.img, qty }]
    })
    setFlash(product.title)
    setTimeout(() => setFlash(null), 2200)
  }
  const setQty = (sku, qty) =>
    setItems((prev) => (qty <= 0 ? prev.filter((i) => i.sku !== sku) : prev.map((i) => (i.sku === sku ? { ...i, qty } : i))))
  const remove = (sku) => setItems((prev) => prev.filter((i) => i.sku !== sku))
  const clear = () => setItems([])

  const count = items.reduce((n, i) => n + i.qty, 0)
  const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0)

  return (
    <CartContext.Provider value={{ items, add, setQty, remove, clear, count, subtotal, flash }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
