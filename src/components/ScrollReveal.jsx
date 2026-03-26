import { useEffect, useRef } from 'react'

export default function ScrollReveal({ children, className = 'reveal', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If already in viewport on mount, make visible immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay > 0 ? ` reveal-delay-${delay}` : ''

  return (
    <div ref={ref} className={`${className}${delayClass}`}>
      {children}
    </div>
  )
}
