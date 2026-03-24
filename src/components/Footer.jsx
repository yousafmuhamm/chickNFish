import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Chick <span className="accent">'N</span> Fish</h3>
            <p>Proper fish and chips. Proper fried chicken. Serving the neighbourhood since day one.</p>
          </div>

          <div className="footer-col">
            <h4>Menu</h4>
            <Link to="/menu">Fish &amp; Chips</Link>
            <Link to="/menu">Fried Chicken</Link>
            <Link to="/menu">Burgers &amp; Wraps</Link>
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
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>
            <a href="tel:YOUR_PHONE">YOUR PHONE NUMBER</a>
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
