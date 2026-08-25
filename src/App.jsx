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
import AboutUs from './pages/AboutUs.jsx'
import History from './pages/History.jsx'
import Distributors from './pages/Distributors.jsx'
import JoinOurTeam from './pages/JoinOurTeam.jsx'
import ClientProfiles from './pages/ClientProfiles.jsx'
import Conferences from './pages/Conferences.jsx'
import Applications from './pages/Applications.jsx'
import M2M from './pages/M2M.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import VideoLibrary from './pages/VideoLibrary.jsx'
import Glossary from './pages/Glossary.jsx'
import Tradeshow from './pages/Tradeshow.jsx'
import Articles from './pages/Articles.jsx'
import ArticleDetail from './pages/ArticleDetail.jsx'
import ProductCategory from './pages/ProductCategory.jsx'
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
          <Route path="/page/about-us" element={<AboutUs />} />
          <Route path="/page/history" element={<History />} />
          <Route path="/page/distributors" element={<Distributors />} />
          <Route path="/page/employment-opportunities" element={<JoinOurTeam />} />
          <Route path="/page/client-profiles" element={<ClientProfiles />} />
          <Route path="/page/conferences-events" element={<Conferences />} />
          <Route path="/page/applications" element={<Applications />} />
          <Route path="/page/applications/*" element={<Applications />} />
          <Route path="/page/m2m" element={<M2M />} />
          <Route path="/page/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/page/video-library" element={<VideoLibrary />} />
          <Route path="/page/glossary" element={<Glossary />} />
          <Route path="/page/tradeshow" element={<Tradeshow />} />
          <Route path="/page/articles" element={<Articles />} />
          <Route path="/page/articles/:slug" element={<ArticleDetail />} />
          <Route path="/page/products" element={<ProductCategory />} />
          <Route path="/page/products/:slug" element={<ProductCategory />} />
          <Route path="/page/*" element={<InfoPage />} />
          <Route path="*" element={<InfoPage />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  )
}
