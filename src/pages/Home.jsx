import { Link } from 'react-router-dom'
import { useOrderModal } from '../components/OrderModal'
import PromoBanner from '../components/PromoBanner'
import ScrollReveal from '../components/ScrollReveal'

function getWebpPath(src) {
  return src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
}

function FoodCard({ image, badge, title, desc, price, hasFrom, delay }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="food-card">
        <div className="food-card-img">
          <picture>
            <source srcSet={getWebpPath(image)} type="image/webp" />
            <img src={image} alt={title} loading="lazy" decoding="async" width="600" height="400" />
          </picture>
          {badge && <span className="food-card-badge">{badge}</span>}
        </div>
        <div className="food-card-body">
          <h3 className="food-card-title">{title}</h3>
          <p className="food-card-desc">{desc}</p>
          <div className="food-card-footer">
            <span className="food-card-price">{hasFrom && <span className="from">from </span>}{price}</span>
            <Link to="/menu" className="food-card-btn" aria-label={`View ${title} on menu`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function Home() {
  const { open: openOrderModal } = useOrderModal()

  return (
    <>
      {/* Hero */}
      <section className="hero" id="heroSection">
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>Halal Fish &amp; Chips and Fried Chicken in Calgary NE</h1>
        <div className="hero-editorial">

          {/* Left — cards + big text */}
          <div className="hero-big-text">
            <div className="hero-cards">
              <div className="hero-card hero-card-amber">
                <div className="hero-card-body">
                  <h3>THE LOCAL FAVOURITE.</h3>
                  <p>Hand-battered to order, every single time.</p>
                </div>
              </div>
              <div className="hero-card hero-card-green">
                <div className="hero-card-body">
                  <h3>FRESH TO ORDER.</h3>
                  <p>Made when you order it, every single time.</p>
                </div>
              </div>
            </div>
            <span className="hero-word">CRISPY</span>
            <span className="hero-word">GOLDEN</span>
            <span className="hero-word">CLASSIC</span>
          </div>

          {/* Right — image */}
          <div className="hero-right">
            <picture>
              <source srcSet="/images/fish-and-chips-hero.webp" type="image/webp" />
              <img src="/images/fish-and-chips-hero.jpg" alt="Crispy halal fish and chips served at Chick N Fish Calgary" className="hero-food-img" width="800" height="600" fetchPriority="high" />
            </picture>
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
            <FoodCard image="/images/fish-and-chips-1.jpg" badge="Signature" title="Classic Cod &amp; Chips" desc="Hand-battered Atlantic cod, golden fries, coleslaw, and homemade tartar sauce." price="$13.49" hasFrom delay={1} />
            <FoodCard image="/images/chicken-burger.png" badge="Popular" title="Crispy Chicken Burger" desc="Buttermilk-marinated chicken thigh, brioche bun, house slaw, and signature sauce." price="$9.99" hasFrom delay={2} />
            <FoodCard image="/images/5pc_chicken.jpg" badge="Signature" title="3 Piece Fried Chicken" desc="Three golden pieces of our secret-recipe fried chicken. Crispy outside, juicy inside." price="$9.30" hasFrom delay={3} />
          </div>
        </div>
      </section>

      {/* Featured Strip */}
      <section className="featured-strip">
        <div className="container">
          <div className="featured-grid">
            <ScrollReveal className="reveal-left">
              <div className="featured-text">
                <span className="label">Best Value</span>
                <h2>Family Combo #4</h2>
                <p>Feed the whole crew without breaking the bank. Everything you need for a proper family dinner — all in one box, ready to share.</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-lg)', marginBottom: 'var(--space-xl)' }}>
                  <span className="deal-price" style={{ color: 'var(--cream)' }}>$42.99</span>
                </div>
                <a href="tel:+14032442222" className="btn btn-amber btn-lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Call to Order
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal className="reveal-right" delay={2}>
              <div className="featured-image">
                <picture>
                  <source srcSet="/images/fish-and-chicken-combo.webp" type="image/webp" />
                  <img src="/images/fish-and-chicken-combo.png" alt="Family combo with fish and chips and fried chicken at Chick N Fish Calgary" loading="lazy" decoding="async" width="600" height="400" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
                </picture>
              </div>
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
            <FoodCard image="/images/fish-fillets-shrimp.jpg" title="Butterfly Shrimp" desc="Six crispy butterfly shrimp served with seafood sauce and golden fries." price="$11.99" delay={1} />
            <FoodCard image="/images/fish-and-chips-2.jpg" title="Haddock &amp; Chips" desc="Lightly battered haddock fillet served with golden fries and tartar sauce." price="$13.49" hasFrom delay={2} />
            <FoodCard image="/images/samosas.jpg" title="Beef Samosas" desc="Flaky, golden samosas stuffed with seasoned beef. Available in packs of 4 or 12." price="$6.99" hasFrom delay={3} />
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
              <span className="label label-accent" style={{ display: 'block', marginBottom: 'var(--space-sm)' }}>Feed the Crew</span>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>6 Piece Chicken Combo</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-lg)', maxWidth: 450, marginLeft: 'auto', marginRight: 'auto' }}>Six pieces of our signature fried chicken served with fries, fresh salad, and a drink. Perfect for sharing.</p>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 800, color: 'var(--brown-dark)', display: 'block', marginBottom: 'var(--space-lg)' }}>$22.49</span>
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
              <div className="story-image">
                <picture>
                  <source srcSet="/images/fried-chicken-tray.webp" type="image/webp" />
                  <img src="/images/fried-chicken-tray.png" alt="Tray of crispy fried chicken at Chick N Fish Calgary" loading="lazy" decoding="async" width="600" height="400" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
                </picture>
              </div>
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
              { title: '2 Pc Haddock & Chips', desc: 'Two hand-battered haddock fillets with golden fries and tartar sauce', price: '$20.99', delay: 1 },
              { title: '6 Pc Chicken Combo', desc: 'Six pieces of fried chicken served with fries and a drink', price: '$22.49', delay: 2 },
              { title: '1 Pc Halibut & Chips', desc: 'Premium halibut fillet, hand-battered and fried to order with fries', price: '$22.99', delay: 3 },
              { title: 'Family Combo #1', desc: 'A full spread for the family — chicken, wings, fries, and more', price: '$48.99', delay: 4 },
            ].map(item => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <div className="menu-item">
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
                    <p>120-3725 Rundlehorn Drive NE, Calgary, AB T1Y 3Z4</p>
                  </div>
                </div>

                <div className="location-detail">
                  <div className="location-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <h4>Opening Hours</h4>
                    <p>Tue – Fri: 11:30 AM – 9:00 PM</p>
                    <p>Sat: 12:00 PM – 9:00 PM</p>
                    <p>Sun – Mon: 12:00 PM – 8:30 PM</p>
                  </div>
                </div>

                <div className="location-detail">
                  <div className="location-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4>Call Us</h4>
                    <p>(403) 244-2222</p>
                  </div>
                </div>

                <div style={{ marginTop: 'var(--space-xl)', display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                  <Link to="/contact" className="btn btn-amber">Get Directions</Link>
                  <a href="tel:+14032442222" className="btn btn-outline-light">Call to Order</a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="map-card">
                <div className="map-card-pin">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="map-card-address">
                  <p>120-3725 Rundlehorn Drive NE</p>
                  <span>Calgary, AB T1Y 3Z4</span>
                </div>
                <div className="map-card-links">
                  <a
                    href="https://www.google.com/maps/place/Chick+N+Fish/@51.0710703,-113.9858073,17z/data=!3m2!4b1!5s0x537164c580597df9:0xa4d02a6f640fa95a!4m6!3m5!1s0x537164cf3c34adff:0xf00d5373d7f20454!8m2!3d51.071067!4d-113.9809364!16s%2Fg%2F11f4_60d37?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-card-link"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Google Maps
                  </a>
                  <a
                    href="https://maps.apple.com/?address=120-3725+Rundlehorn+Drive+NE,+Calgary,+AB+T1Y+3Z4&ll=51.071067,-113.980936&q=Chick+N+Fish"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-card-link"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Apple Maps
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
