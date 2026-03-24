import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useOrderModal } from '../components/OrderModal'
import PromoBanner from '../components/PromoBanner'
import ScrollReveal from '../components/ScrollReveal'

function FoodCard({ image, badge, title, desc, price, delay }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="food-card">
        <div className="food-card-img" style={{ backgroundImage: `url('${image}')` }}>
          {badge && <span className="food-card-badge">{badge}</span>}
        </div>
        <div className="food-card-body">
          <h3 className="food-card-title">{title}</h3>
          <p className="food-card-desc">{desc}</p>
          <div className="food-card-footer">
            <span className="food-card-price"><span className="from">from </span>{price}</span>
            <button className="food-card-btn" aria-label={`Order ${title}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const { open: openOrderModal } = useOrderModal()

  useEffect(() => {
    const hero = heroRef.current
    if (hero) {
      requestAnimationFrame(() => {
        setTimeout(() => hero.classList.add('animate'), 100)
      })
    }
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="hero" id="heroSection" ref={heroRef}>
        <div className="hero-editorial">
          <div className="hero-big-text">
            <span className="hero-word">CRISPY.</span>
            <span className="hero-word">GOLDEN.</span>
            <span className="hero-word">CATCH.</span>
          </div>

          <div className="hero-food-wrap">
            <img src="/image.png" alt="Crispy fish and chips with fried chicken" className="hero-food-img" />
          </div>

          <div className="hero-cards">
            <div className="hero-card hero-card-amber">
              <div className="hero-card-body">
                <h3>THE LOCAL FAVOURITE.</h3>
                <p>Hand-battered to order, every single time.</p>
              </div>
              <svg className="hero-card-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/></svg>
            </div>
            <div className="hero-card hero-card-green">
              <div className="hero-card-body">
                <h3>100% HALAL CERTIFIED.</h3>
                <p>Trusted sourcing, certified preparation.</p>
              </div>
              <svg className="hero-card-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>
            </div>
          </div>

          <button className="hero-mobile-cta" onClick={openOrderModal}>Order Now</button>
        </div>

        <div className="hero-scroll" id="heroScroll">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </section>

      {/* Promo Ticker */}
      <PromoBanner />

      {/* Signature Items */}
      <section id="signatures" className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label label-accent">From Our Kitchen</span>
              <h2>The Signatures</h2>
              <div className="section-divider"></div>
              <p>The dishes that built our name. Battered, fried, and served with pride.</p>
            </div>
          </ScrollReveal>

          <div className="food-grid">
            <FoodCard image="/images/fish-and-chips-1.jpg" badge="Signature" title="Classic Cod &amp; Chips" desc="Beer-battered Atlantic cod, golden fries, coleslaw, and homemade tartar sauce." price="$13.49" delay={1} />
            <FoodCard image="/images/chicken-burger.png" badge="Popular" title="Crispy Chicken Burger" desc="Buttermilk-marinated chicken thigh, brioche bun, house slaw, and signature sauce." price="$9.99" delay={2} />
            <FoodCard image="/images/fried-chicken-1.jpg" badge="Signature" title="3 Piece Fried Chicken" desc="Three golden pieces of our secret-recipe fried chicken. Crispy outside, juicy inside." price="$9.30" delay={3} />
            <FoodCard image="/images/fried-chicken-2.jpg" badge="New" title="Nashville Hot Wings" desc="Six crispy wings tossed in our Nashville hot glaze. Served with ranch and celery sticks." price="$8.99" delay={4} />
          </div>
        </div>
      </section>

      {/* Featured Strip */}
      <section className="featured-strip">
        <div className="container">
          <div className="featured-grid">
            <ScrollReveal className="reveal-left">
              <div className="featured-text">
                <span className="label">Limited Time</span>
                <h2>The Family Feast</h2>
                <p>Eight pieces of fried chicken, two large chips, four drinks, coleslaw, and gravy. Enough to bring everyone to the table.</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-lg)', marginBottom: 'var(--space-xl)' }}>
                  <span className="deal-price" style={{ color: 'var(--cream)' }}>$34.99</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--beige)', opacity: 0.5, textDecoration: 'line-through' }}>$44.99</span>
                </div>
                <Link to="/offers" className="btn btn-amber btn-lg">See the Deal</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal className="reveal-right" delay={2}>
              <div className="featured-image" style={{ backgroundImage: "url('/images/fish-and-chicken-combo.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Crowd Favourites */}
      <section className="section deals-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label label-accent">What Everyone Orders</span>
              <h2>Crowd Favourites</h2>
              <div className="section-divider"></div>
              <p>These are the ones that fly out the kitchen. Tried, tested, and always in demand.</p>
            </div>
          </ScrollReveal>

          <div className="food-grid">
            <FoodCard image="/images/fish-fillets-shrimp.jpg" title="Chicken Strip Meal" desc="Five golden chicken strips with chips, drink, and your choice of dip." price="$11.49" delay={1} />
            <FoodCard image="/images/fish-and-chips-2.jpg" title="Haddock &amp; Chips" desc="Lightly battered haddock fillet served with golden fries, coleslaw, and lemon." price="$13.49" delay={2} />
            <FoodCard image="/images/samosas.jpg" title="Loaded Chip Box" desc="Fries loaded with grilled chicken, cheese, jalapenos, and our house drizzle." price="$9.49" delay={3} />
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/menu" className="btn btn-outline">See Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Deals Preview */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label label-accent">Today's Deals</span>
              <h2>More for Less</h2>
              <div className="section-divider"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="reveal-scale">
            <div style={{ maxWidth: 650, margin: '0 auto', background: 'var(--white)', border: '1px solid var(--beige)', borderRadius: 'var(--radius-md)', padding: 'var(--space-2xl)', textAlign: 'center' }}>
              <span className="label label-accent" style={{ display: 'block', marginBottom: 'var(--space-sm)' }}>Lunch Special — Mon to Fri</span>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>Any Wrap + Chips + Drink</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-lg)', maxWidth: 450, marginLeft: 'auto', marginRight: 'auto' }}>Choose any wrap from the menu, add regular chips and a soft drink. Available 11am–3pm, weekdays only.</p>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 800, color: 'var(--brown-dark)', display: 'block', marginBottom: 'var(--space-lg)' }}>$9.99</span>
              <Link to="/offers" className="btn btn-outline">View All Offers</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="section story-section">
        <div className="container">
          <div className="story-grid">
            <ScrollReveal className="reveal-left">
              <div className="story-image" style={{ backgroundImage: "url('/images/fried-chicken-tray.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </ScrollReveal>
            <ScrollReveal className="reveal-right" delay={2}>
              <div className="story-text">
                <h2>Built on Simple Food, Done Properly</h2>
                <p>Chick N Fish started with a simple idea: serve the best fish and chips and fried chicken you can make, and do it the same way every time. No shortcuts, no compromises.</p>
                <blockquote>"We believe great food doesn't need to be complicated. It just needs to be done right."</blockquote>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="section" style={{ backgroundColor: 'var(--beige)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="label label-accent">Quick Look</span>
              <h2>From the Menu</h2>
              <div className="section-divider"></div>
            </div>
          </ScrollReveal>

          <div className="menu-list" style={{ maxWidth: 700, margin: '0 auto' }}>
            {[
              { title: '2 Piece Chicken & Chips', desc: 'Two pieces of fried chicken with regular chips', price: '$8.49', delay: 1 },
              { title: 'Cod Fillet Burger', desc: 'Battered cod fillet in a soft bun with tartare and lettuce', price: '$9.99', delay: 2 },
              { title: 'Chicken Wrap', desc: 'Grilled or crispy chicken, salad, and garlic mayo in a tortilla', price: '$8.99', delay: 3 },
              { title: '10 Piece Boneless Bucket', desc: 'Ten boneless chicken pieces with two dips of your choice', price: '$14.99', delay: 4 },
            ].map(item => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <div className="menu-item">
                  <div className="menu-item-img"></div>
                  <div className="menu-item-info">
                    <h4 className="menu-item-title">{item.title}</h4>
                    <p className="menu-item-desc">{item.desc}</p>
                  </div>
                  <div className="menu-item-right">
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/menu" className="btn btn-secondary">Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="section location-section">
        <div className="container">
          <div className="location-grid">
            <ScrollReveal>
              <div className="location-info">
                <span className="label" style={{ color: 'var(--amber)', marginBottom: 'var(--space-md)', display: 'block' }}>Come Find Us</span>
                <h2>Visit Chick N Fish</h2>

                <div className="location-detail">
                  <div className="location-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>120-3725 Rundlehorn Drive NE, Calgary, AB</p>
                  </div>
                </div>

                <div className="location-detail">
                  <div className="location-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <h4>Opening Hours</h4>
                    <p>Mon – Sat: 11:00 AM – 11:00 PM</p>
                    <p>Sunday: 12:00 PM – 10:00 PM</p>
                  </div>
                </div>

                <div className="location-detail">
                  <div className="location-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4>Call Us</h4>
                    <p>YOUR PHONE NUMBER</p>
                  </div>
                </div>

                <div style={{ marginTop: 'var(--space-xl)', display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                  <Link to="/contact" className="btn btn-amber">Get Directions</Link>
                  <a href="tel:YOUR_PHONE" className="btn btn-outline-light">Call to Order</a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="location-map">
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--beige)', opacity: 0.4, fontFamily: 'var(--font-display-sc)', fontSize: 'var(--text-sm)', letterSpacing: '0.15em' }}>MAP</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
