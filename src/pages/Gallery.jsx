import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'

const galleryImages = [
  '/images/fish-and-chicken-combo.png',
  '/images/fried-chicken-tray.png',
  '/images/fish-and-chips-1.jpg',
  '/images/fried-chicken-1.jpg',
  '/images/chicken-burger.png',
  '/images/fish-and-chips-2.jpg',
  '/images/fried-chicken-2.jpg',
  '/images/fish-fillets-shrimp.jpg',
  '/images/samosas.jpg',
]

export default function Gallery() {
  return (
    <>
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
                <div
                  key={i}
                  className="gallery-item"
                  style={{ backgroundImage: `url('${img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
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
