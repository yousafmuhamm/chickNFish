import { useEffect, useRef } from 'react'
import { useOrderModal } from './OrderModal'

export default function PromoBanner() {
  const { open } = useOrderModal()
  const tickerRef = useRef(null)

  // Duplicate ticker content for seamless loop
  useEffect(() => {
    const ticker = tickerRef.current
    if (ticker && !ticker.dataset.duplicated) {
      const content = ticker.innerHTML
      ticker.innerHTML = content + content
      ticker.dataset.duplicated = 'true'
    }
  }, [])

  return (
    <div
      className="promo-banner"
      role="button"
      tabIndex={0}
      aria-label="Order online — click to choose platform"
      onClick={open}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') open() }}
    >
      <div className="promo-ticker" ref={tickerRef}>
        <span>Order Now on Uber Eats</span>
        <span>Order Now on DoorDash</span>
        <span>Order Now on Uber Eats</span>
        <span>Order Now on DoorDash</span>
      </div>
    </div>
  )
}
