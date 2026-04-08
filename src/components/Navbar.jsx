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
    let lastY = 0
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 50)

      // Hide header on scroll down, show on scroll up (mobile only)
      if (window.innerWidth <= 768) {
        if (y > lastY && y > 100) {
          document.documentElement.classList.add('header-hidden')
        } else {
          document.documentElement.classList.remove('header-hidden')
        }
      }
      lastY = y
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
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

          <Link to="/" className="navbar-logo">
            <picture>
              <source srcSet="/images/logo.webp" type="image/webp" />
              <img src="/images/logo.png" alt="Chick N Fish" className="navbar-logo-img" width="180" height="60" />
            </picture>
          </Link>

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
