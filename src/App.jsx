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
      <HalalBar />
      <Navbar />
      <MobileNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <BottomNav />
      <OrderModal />
    </>
  )
}
