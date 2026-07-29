import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { CartProvider } from './context/CartContext.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import CartPage from './pages/CartPage.jsx'
import Contact from './pages/Contact.jsx'
import InfoPage from './pages/InfoPage.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  return (
    <CartProvider>
      <ScrollToTop />
      <Header />
      <main className="page-fade" key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:handle" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/page/*" element={<InfoPage />} />
          <Route path="*" element={<InfoPage />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  )
}
