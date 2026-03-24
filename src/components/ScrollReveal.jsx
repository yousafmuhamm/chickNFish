import { useEffect, useRef } from 'react'

export default function ScrollReveal({ children, className = 'reveal', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
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
