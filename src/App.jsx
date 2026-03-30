import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HalalBar from './components/HalalBar'
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav'
import BottomNav from './components/BottomNav'
import Footer from './components/Footer'
import OrderModal from './components/OrderModal'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Offers from './pages/Offers'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      {/* Safari color-tinting: invisible fixed bars that force Safari to tint status/toolbar areas */}
      <div className="safari-tint safari-tint-top" aria-hidden="true" />
      <div className="safari-tint safari-tint-bottom" aria-hidden="true" />
      <HalalBar />
      <Navbar />
      <MobileNav />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
      <BottomNav />
      <OrderModal />
    </>
  )
}
