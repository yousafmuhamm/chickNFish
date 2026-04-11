import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import SEO from '../components/SEO'
import '../styles/offers.css'

export default function Offers() {
  return (
    <>
      <SEO
        title="Deals &amp; Offers — Chick N Fish Calgary"
        description="Check out our latest deals and combo offers on halal fish and chips and fried chicken in Calgary NE."
        canonical="https://chicknfish.ca/offers"
      />
      {/* Hero Header */}
      <section className="offers-hero">
        <div className="container">
          <span className="label">What's On</span>
          <h1>Offers &amp; Specials</h1>
          <p>A few good reasons to bring the family, share with mates, or treat yourself to a bigger portion.</p>
        </div>
      </section>

      {/* Featured Deal */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ScrollReveal className="reveal-scale">
            <div className="offer-featured">
              <div className="offer-featured-inner">
                <div>
                  <span className="offer-label">Fresh from the Fryer</span>
                  <h2>Haddock &amp; Chips</h2>
                  <p className="offer-desc">Beer-battered haddock fillet served with golden fries and tartar sauce. Available in 1, 2, or 3 piece portions — perfect for one or the whole table.</p>
                  <p className="offer-terms">Available for dine-in and takeout.</p>
                </div>
                <div className="offer-featured-pricing">
                  <span className="price" style={{ fontSize: 'var(--text-3xl)' }}>from $12.25</span>
                  <span style={{ textAlign: 'center', display: 'block', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 'var(--space-xs)' }}>1pc $12.25 &nbsp;&middot;&nbsp; 2pc $18.90 &nbsp;&middot;&nbsp; 3pc $24.49</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Regular Deals */}
          <div className="offers-grid">
            <ScrollReveal delay={1}>
              <div className="offer-card">
                <span className="offer-label">Weekday Lunch</span>
                <h3>Lunch Special</h3>
                <p className="offer-desc">One piece of fish with fries. A quick, satisfying lunch made fresh to order.</p>
                <div className="offer-card-footer">
                  <span className="price">$7.99</span>
                  <span className="offer-time">1 Piece Combo</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="offer-card">
                <span className="offer-label">Wings</span>
                <h3>Chicken Wings</h3>
                <p className="offer-desc">Crispy, golden wings — order a half dozen or go all in with a dozen. Great on their own or alongside your meal.</p>
                <div className="offer-card-footer">
                  <div><span className="price">from $5.99</span></div>
                  <span className="offer-time">6pc $5.99 &nbsp;&middot;&nbsp; 12pc $11.99</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="offer-card">
                <span className="offer-label">Sides</span>
                <h3>Samosas</h3>
                <p className="offer-desc">Flaky, golden samosas made fresh in-house. Available in packs of 4 or 12 — perfect as a side or a snack.</p>
                <div className="offer-card-footer">
                  <div><span className="price">from $6.99</span></div>
                  <span className="offer-time">4pc $6.99 &nbsp;&middot;&nbsp; 12pc $19.99</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="offers-note">
              <p><strong>All offers are subject to availability.</strong> Deals cannot be combined with other promotions. Prices may vary for delivery orders. Pop in or give us a ring if you've any questions.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: 'var(--beige)', padding: 'var(--space-3xl) 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: 'var(--space-md)' }}>Fancy Something?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-xl)', maxWidth: 450, marginLeft: 'auto', marginRight: 'auto' }}>Have a look at the full menu and find what takes your fancy.</p>
          <Link to="/menu" className="btn btn-secondary">View the Menu</Link>
        </div>
      </section>
    </>
  )
}
