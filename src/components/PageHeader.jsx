export default function PageHeader({ label, title, subtitle }) {
  return (
    <section style={{ paddingTop: 100, backgroundColor: 'var(--brown-dark)', color: 'var(--cream)' }}>
      <div className="container" style={{ padding: 'var(--space-3xl) 0' }}>
        <div className="section-header" style={{ marginBottom: 0 }}>
          <span className="label" style={{ color: 'var(--amber)' }}>{label}</span>
          <h1 style={{ color: 'var(--cream)', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>{title}</h1>
          <div className="section-divider"></div>
          <p style={{ color: 'var(--beige)', opacity: 0.85 }}>{subtitle}</p>
        </div>
      </div>
    </section>
  )
}
