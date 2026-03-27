import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Chick <span className="accent">'N</span> Fish</h3>
            <p>Hits different every time.</p>
          </div>

          <div className="footer-col">
            <h4>Menu</h4>
            <Link to="/menu">Chicken</Link>
            <Link to="/menu">Fish &amp; Chips</Link>
            <Link to="/menu">Sandwiches</Link>
            <Link to="/menu">Sides &amp; Drinks</Link>
          </div>

          <div className="footer-col">
            <h4>Visit</h4>
            <Link to="/gallery">Gallery</Link>
            <Link to="/offers">Offers</Link>
            <Link to="/contact">Find Us</Link>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <a href="https://www.instagram.com/chicknfish/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/chesterschickenandfish/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.tiktok.com/@chknnfish" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="tel:+14032442222">(403) 244-2222</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Chick N Fish. All rights reserved.</p>
          <p>Made with care in Calgary, AB.</p>
        </div>
      </div>
    </footer>
  )
}
