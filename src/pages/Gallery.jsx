import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import SEO from '../components/SEO'

const galleryImages = [
  { webp: '/images/fish-and-chicken-combo.webp', fallback: '/images/fish-and-chicken-combo.png', alt: 'Fish and chicken combo platter' },
  { webp: '/images/fried-chicken-tray.webp', fallback: '/images/fried-chicken-tray.png', alt: 'Tray of crispy fried chicken' },
  { webp: '/images/fish-and-chips-1.webp', fallback: '/images/fish-and-chips-1.jpg', alt: 'Classic fish and chips' },
  { webp: '/images/fried-chicken-1.webp', fallback: '/images/fried-chicken-1.jpg', alt: 'Golden fried chicken pieces' },
  { webp: '/images/chicken-burger.webp', fallback: '/images/chicken-burger.png', alt: 'Crispy chicken burger' },
  { webp: '/images/fish-and-chips-2.webp', fallback: '/images/fish-and-chips-2.jpg', alt: 'Hand-battered fish and chips' },
  { webp: '/images/fried-chicken-2.webp', fallback: '/images/fried-chicken-2.jpg', alt: 'Fried chicken meal' },
  { webp: '/images/fish-fillets-shrimp.webp', fallback: '/images/fish-fillets-shrimp.jpg', alt: 'Fish fillets and butterfly shrimp' },
  { webp: '/images/samosas.webp', fallback: '/images/samosas.jpg', alt: 'Flaky beef samosas' },
]

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery — Chick N Fish Calgary"
        description="See our food in action — hand-battered fish, crispy fried chicken, and more from our kitchen in Calgary NE."
        canonical="https://chicknfish.ca/gallery"
      />
      <PageHeader label="A Look Inside" title="The Gallery" subtitle="The food, the space, the atmosphere. This is Chick N Fish." />

      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 'var(--space-2xl)' }}>
            <span className="label label-accent">The Food</span>
            <h2 style={{ marginTop: 'var(--space-sm)' }}>Fresh From the Kitchen</h2>
          </div>

          <ScrollReveal>
            <div className="gallery-grid">
              {galleryImages.map((img, i) => (
                <div key={i} className="gallery-item">
                  <picture>
                    <source srcSet={img.webp} type="image/webp" />
                    <img src={img.fallback} alt={img.alt} loading="lazy" decoding="async" width="600" height="400" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </picture>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--brown-dark)', padding: 'var(--space-3xl) 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--cream)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: 'var(--space-md)' }}>See It for Yourself</h2>
          <p style={{ color: 'var(--beige)', opacity: 0.8, marginBottom: 'var(--space-xl)', maxWidth: 450, marginLeft: 'auto', marginRight: 'auto' }}>Photos only tell part of the story. Come visit, take a seat, and experience Chick N Fish in person.</p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Find Us</Link>
            <Link to="/menu" className="btn btn-outline-light btn-lg">See the Menu</Link>
          </div>
        </div>
      </section>
    </>
  )
}
