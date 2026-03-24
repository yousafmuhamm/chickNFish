import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import '../styles/menu.css'

const categories = [
  { key: 'all', label: 'All' },
  { key: 'chicken', label: 'Chicken' },
  { key: 'fish', label: 'Fish & Chips' },
  { key: 'sandwiches', label: 'Sandwiches' },
  { key: 'family', label: 'Family Combos' },
  { key: 'sides', label: 'Sides' },
  { key: 'drinks', label: 'Drinks' },
]

function MenuRow({ name, note, price }) {
  return (
    <div className="menu-row">
      <span className="menu-row-name">
        {name}
        {note && <span className="menu-row-note">{note}</span>}
      </span>
      <span className="menu-row-price">{price}</span>
    </div>
  )
}

function MenuRowCombo({ name, note, onlyPrice, comboPrice }) {
  return (
    <div className="menu-row">
      <span className="menu-row-name">
        {name}
        {note && <span className="menu-row-note">{note}</span>}
      </span>
      <div className="menu-row-combo-price">
        <span>Only <strong>{onlyPrice}</strong></span>
        <span>Combo <strong>{comboPrice}</strong></span>
      </div>
    </div>
  )
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')
  const contentRef = useRef(null)

  const handleTabClick = (key) => {
    setActiveCategory(key)
    if (contentRef.current) {
      const offset = 140
      const top = contentRef.current.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const isVisible = (cat) => activeCategory === 'all' || activeCategory === cat

  return (
    <>
      <PageHeader label="Chick N Fish" title="The Menu" subtitle="Everything battered, fried, and served fresh." />

      <div className="container">
        <div className="category-tabs">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              className={`category-tab${activeCategory === key ? ' active' : ''}`}
              onClick={() => handleTabClick(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <section className="menu-content section" ref={contentRef}>
        <div className="container">

          {/* CHICKEN */}
          {isVisible('chicken') && (
            <ScrollReveal>
              <div className="menu-category">
                <span className="menu-section-label">Fried Chicken</span>
                <h2 className="menu-category-title">Chicken</h2>
                <div className="menu-columns">
                  <div className="menu-subcategory">
                    <p className="menu-subcategory-title">Individual Pieces</p>
                    <div className="menu-note">Add $1.10 to substitute white meat</div>
                    {[['1 Piece','$3.10'],['2 Pieces','$6.20'],['3 Pieces','$9.30'],['4 Pieces','$12.40'],['6 Pieces','$18.60'],['9 Pieces','$25.99'],['12 Pieces','$33.60'],['15 Pieces','$40.50'],['20 Pieces','$52.00'],['30 Pieces','$77.99']].map(([n,p]) => <MenuRow key={n} name={n} price={p} />)}
                  </div>

                  <div className="menu-subcategory">
                    <p className="menu-subcategory-title">Chicken Combos</p>
                    <div className="menu-note">Served with fries and a drink</div>
                    {[['1 Pc Combo','$8.99'],['2 Pc Combo','$11.49'],['3 Pc Combo','$13.60'],['6 Pc Combo','$22.49']].map(([n,p]) => <MenuRow key={n} name={n} price={p} />)}
                  </div>

                  <div className="menu-subcategory">
                    <p className="menu-subcategory-title">Chicken Strips</p>
                    <MenuRowCombo name="3 Pieces" note="Strips only" onlyPrice="$9.99" comboPrice="$12.99" />
                    <MenuRowCombo name="6 Pieces" note="Strips only" onlyPrice="$19.99" comboPrice="$22.99" />
                    <MenuRow name="9 Pieces" price="$27.99" />
                    <MenuRow name="12 Pieces" price="$35.99" />
                  </div>

                  <div className="menu-subcategory">
                    <p className="menu-subcategory-title">Chicken Wings</p>
                    <MenuRowCombo name="6 Wings" note="Wings only" onlyPrice="$8.99" comboPrice="$10.99" />
                    <MenuRowCombo name="12 Wings" note="Wings only" onlyPrice="$15.99" comboPrice="$17.99" />
                    <MenuRow name="24 Wings" price="$25.99" />
                  </div>

                  <div className="menu-subcategory">
                    <p className="menu-subcategory-title">Chicken Snack Packs</p>
                    <div className="menu-note">Served with fries</div>
                    {[['2 Piece Snack Pack','$9.99'],['3 Piece Snack Pack','$12.60'],['4 Piece Snack Pack','$15.49']].map(([n,p]) => <MenuRow key={n} name={n} price={p} />)}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* FISH & CHIPS */}
          {isVisible('fish') && (
            <ScrollReveal>
              <div className="menu-category">
                <span className="menu-section-label">From the Fryer</span>
                <h2 className="menu-category-title">Fish &amp; Chips</h2>
                <div className="menu-columns">
                  <div className="menu-subcategory">
                    <p className="menu-subcategory-title">English Fish &amp; Chips</p>
                    {[['1 Pc Pollock','$10.50'],['2 Pc Pollock','$14.99'],['3 Pc Pollock','$17.99'],['1 Pc Cod / Haddock','$13.49'],['2 Pc Cod / Haddock','$20.99'],['3 Pc Cod / Haddock','$26.49'],['1 Pc Halibut','$22.99'],['2 Pc Halibut','$35.99']].map(([n,p]) => <MenuRow key={n} name={n} price={p} />)}
                  </div>

                  <div className="menu-subcategory">
                    <p className="menu-subcategory-title">Spicy Fish &amp; Chips</p>
                    {[['1 Pc Spicy Fish','$10.50'],['2 Pc Spicy Fish','$14.99'],['4 Pc Spicy Fish','$17.99']].map(([n,p]) => <MenuRow key={n} name={n} price={p} />)}
                  </div>

                  <div className="menu-subcategory">
                    <p className="menu-subcategory-title">Butterfly Shrimp</p>
                    <div className="menu-note">Served with seafood sauce and fries</div>
                    <MenuRow name="6 Pc Butterfly Shrimp" price="$11.99" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* SANDWICHES */}
          {isVisible('sandwiches') && (
            <ScrollReveal>
              <div className="menu-category">
                <span className="menu-section-label">On a Bun</span>
                <h2 className="menu-category-title">Sandwiches</h2>
                <div style={{ maxWidth: 560 }}>
                  <div className="menu-note">Combo includes fries and a drink</div>
                  <MenuRowCombo name="Chicken Sandwich" onlyPrice="$9.99" comboPrice="$11.99" />
                  <MenuRowCombo name="Fish Sandwich" onlyPrice="$10.49" comboPrice="$12.49" />
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* FAMILY COMBOS */}
          {isVisible('family') && (
            <ScrollReveal>
              <div className="menu-category">
                <span className="menu-section-label">Feed the Crew</span>
                <h2 className="menu-category-title">Family Combos</h2>
                <div style={{ maxWidth: 600 }}>
                  <MenuRow name="Family Combo #1" note="Wings only — no strips" price="$48.99" />
                  <MenuRow name="Family Combo #2" note="Wings only — no strips" price="$59.99" />
                  <MenuRow name="Family Combo #3" price="$36.99" />
                  <MenuRow name="Family Combo #4" price="$42.99" />
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* SIDES */}
          {isVisible('sides') && (
            <ScrollReveal>
              <div className="menu-category">
                <span className="menu-section-label">On the Side</span>
                <h2 className="menu-category-title">Sides</h2>
                <div className="menu-columns">
                  <div className="menu-subcategory">
                    <p className="menu-subcategory-title">Fries</p>
                    {[['Medium Fries','$5.49'],['Large Fries','$6.99'],['Poutine','$9.99']].map(([n,p]) => <MenuRow key={n} name={n} price={p} />)}
                  </div>
                  <div className="menu-subcategory">
                    <p className="menu-subcategory-title">Gravy</p>
                    {[['Medium Gravy','$1.99'],['Large Gravy','$3.50']].map(([n,p]) => <MenuRow key={n} name={n} price={p} />)}
                  </div>
                  <div className="menu-subcategory">
                    <p className="menu-subcategory-title">Extras</p>
                    {[['Potato Wedges (12 Pc)','$6.49'],['Breaded Mushrooms','$8.49'],['Onion Rings','$5.99']].map(([n,p]) => <MenuRow key={n} name={n} price={p} />)}
                  </div>
                  <div className="menu-subcategory">
                    <p className="menu-subcategory-title">Salads</p>
                    {[['Potato Salad','$2.50'],['Macaroni Salad','$2.50'],['Coleslaw','$2.50']].map(([n,p]) => <MenuRow key={n} name={n} price={p} />)}
                  </div>
                  <div className="menu-subcategory">
                    <p className="menu-subcategory-title">Samosas &amp; Rice</p>
                    {[['Veggie Samosas (4)','$4.99'],['Chicken / Beef Samosas (4)','$6.99'],['Chicken Biryani','$8.99'],['Beef Biryani','$8.99']].map(([n,p]) => <MenuRow key={n} name={n} price={p} />)}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* DRINKS */}
          {isVisible('drinks') && (
            <ScrollReveal>
              <div className="menu-category">
                <span className="menu-section-label">To Wash It Down</span>
                <h2 className="menu-category-title">Drinks</h2>
                <div style={{ maxWidth: 400 }}>
                  {[['Can','$1.99'],['2 Litre Bottle','$4.75'],['Water','$1.99'],['Juice','$3.75']].map(([n,p]) => <MenuRow key={n} name={n} price={p} />)}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Find Us CTA */}
      <section className="featured-strip">
        <div className="container" style={{ textAlign: 'center', padding: 'var(--space-2xl) 0' }}>
          <h2 style={{ color: 'var(--cream)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: 'var(--space-md)' }}>Come In and Order</h2>
          <p style={{ color: 'var(--beige)', opacity: 0.8, marginBottom: 'var(--space-xl)', maxWidth: 450, marginLeft: 'auto', marginRight: 'auto' }}>Find us on the high street. Fresh, made to order, every time.</p>
          <Link to="/contact" className="btn btn-amber btn-lg">Find Us</Link>
        </div>
      </section>
    </>
  )
}
