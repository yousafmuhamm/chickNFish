import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const OrderModalContext = createContext()

export function useOrderModal() {
  return useContext(OrderModalContext)
}

export function OrderModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [close])

  return (
    <OrderModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </OrderModalContext.Provider>
  )
}

const UBEREATS_URL = 'https://www.ubereats.com/ca/store/chick-n-fish-120-3725-rundlehorn-drive-northeast/mnSukbwOX7aZphIKcEyl5w?srsltid=AfmBOoqNAs42uZ-_oD6smNrA3ifrwcDuT8GoUMeiRlHcPeTYqMBOyafq'
const DOORDASH_URL = 'https://www.doordash.com/store/chesters-chicken-calgary-1051488/36186009/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJjaGVzdGVyIGZyaWVkIGNoaWNrZW4iLCJpdGVtX2lkcyI6W10sInNlYXJjaF90ZXJtIjoiY2hlc3RlciBmcmllZCBjaGlja2VuIiwidmVydGljYWxfaWQiOi05OTksInZlcnRpY2FsX25hbWUiOiJhbGwiLCJxdWVyeV9pbnRlbnQiOiJTVE9SRV9SWCJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsMTEwMDQ1LDQsMTAwMzMzXX0=&pickup=false'

export default function OrderModal() {
  const { isOpen, close } = useOrderModal()

  return (
    <div
      className={`order-modal-overlay${isOpen ? ' active' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Choose your delivery platform"
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
    >
      <div className="order-modal">
        <p className="order-modal-title">Order via</p>
        <div className="order-modal-options">
          <a href={UBEREATS_URL} target="_blank" rel="noopener noreferrer" className="order-modal-btn order-modal-ubereats">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4a6 6 0 1 1 0 12A6 6 0 0 1 12 6z"/></svg>
            Uber Eats
          </a>
          <a href={DOORDASH_URL} target="_blank" rel="noopener noreferrer" className="order-modal-btn order-modal-doordash">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4a6 6 0 1 1 0 12A6 6 0 0 1 12 6z"/></svg>
            DoorDash
          </a>
        </div>
        <button className="order-modal-close" onClick={close} aria-label="Close">&#x2715;</button>
      </div>
    </div>
  )
}
