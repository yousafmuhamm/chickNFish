import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useMobileNav } from './MobileNav'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/offers', label: 'Offers' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Find Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { isOpen, toggle } = useMobileNav()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <img src="/images/logo.png" alt="Chick N Fish" className="navbar-logo-img" />
          </Link>

          <div className="nav-links">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={location.pathname === to ? 'active' : ''}
              >
                {label}
              </Link>
            ))}
          </div>

          <button
            className={`menu-toggle${isOpen ? ' active' : ''}`}
            aria-label="Toggle menu"
            onClick={toggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
