import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const MobileNavContext = createContext()

export function useMobileNav() {
  return useContext(MobileNavContext)
}

export function MobileNavProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close on route change
  useEffect(() => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }, [location.pathname])

  const toggle = useCallback(() => {
    setIsOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : ''
      return !prev
    })
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }, [])

  return (
    <MobileNavContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </MobileNavContext.Provider>
  )
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/offers', label: 'Offers' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Find Us' },
]

export default function MobileNav() {
  const { isOpen, close } = useMobileNav()

  return (
    <div className={`mobile-nav${isOpen ? ' active' : ''}`}>
      {navLinks.map(({ to, label }) => (
        <Link key={to} to={to} onClick={close}>
          {label}
        </Link>
      ))}
    </div>
  )
}
