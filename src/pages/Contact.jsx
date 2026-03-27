import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import '../styles/contact.css'

const hours = [
  { day: 'Monday', time: '12:00 PM – 8:30 PM' },
  { day: 'Tuesday', time: '11:30 AM – 9:00 PM' },
  { day: 'Wednesday', time: '11:30 AM – 9:00 PM' },
  { day: 'Thursday', time: '11:30 AM – 9:00 PM' },
  { day: 'Friday', time: '11:30 AM – 9:00 PM' },
  { day: 'Saturday', time: '12:00 PM – 9:00 PM' },
  { day: 'Sunday', time: '12:00 PM – 8:30 PM' },
]

export default function Contact() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <>
      <PageHeader label="Come Visit" title="Find Chick N Fish in Calgary NE" subtitle="We're easy to find and always happy to see you." />

      {/* Map */}
      <section className="map-banner">
        <div className="container">
          <div className="map-banner-inner">
            <div className="map-banner-text">
              <div className="map-banner-pin">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div className="map-banner-info">
                <h3>120-3725 Rundlehorn Drive NE</h3>
                <p>Calgary, AB T1Y 3Z4</p>
              </div>
            </div>
            <div className="map-banner-actions">
              <a href="https://www.google.com/maps/place/Chick+N+Fish/@51.0710703,-113.9858073,17z/data=!3m2!4b1!5s0x537164c580597df9:0xa4d02a6f640fa95a!4m6!3m5!1s0x537164cf3c34adff:0xf00d5373d7f20454!8m2!3d51.071067!4d-113.9809364!16s%2Fg%2F11f4_60d37?entry=ttu" target="_blank" rel="noopener noreferrer" className="btn btn-amber">Google Maps</a>
              <a href="https://maps.apple.com/?address=120-3725+Rundlehorn+Drive+NE,+Calgary,+AB+T1Y+3Z4&ll=51.071067,-113.980936&q=Chick+N+Fish" target="_blank" rel="noopener noreferrer" className="btn btn-amber">Apple Maps</a>
              <a href="tel:+14032442222" className="btn btn-outline-light">(403) 244-2222</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-3xl)' }}>

            {/* Location & Hours */}
            <ScrollReveal>
              <div>
                <span className="label label-accent" style={{ display: 'block', marginBottom: 'var(--space-md)' }}>Location</span>
                <h2 style={{ marginBottom: 'var(--space-xl)' }}>Where to Find Us</h2>

                <div className="location-detail" style={{ marginBottom: 'var(--space-xl)' }}>
                  <div className="location-detail-icon" style={{ backgroundColor: 'rgba(45, 74, 62, 0.1)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)' }}>Address</h4>
                    <p style={{ color: 'var(--text-body)' }}>120-3725 Rundlehorn Drive NE<br/>Calgary, AB T1Y 3Z4</p>
                  </div>
                </div>

                <div className="location-detail" style={{ marginBottom: 'var(--space-xl)' }}>
                  <div className="location-detail-icon" style={{ backgroundColor: 'rgba(45, 74, 62, 0.1)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)' }}>Phone</h4>
                    <p><a href="tel:+14032442222" style={{ color: 'var(--text-body)' }}>(403) 244-2222</a></p>
                  </div>
                </div>

                <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-lg)' }}>Opening Hours</h3>
                <table className="hours-table">
                  <tbody>
                    {hours.map(({ day, time }) => (
                      <tr key={day} className={day === today ? 'today' : ''}>
                        <td>{day}</td>
                        <td>{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={2}>
              <div>
                <span className="label label-accent" style={{ display: 'block', marginBottom: 'var(--space-md)' }}>Get in Touch</span>
                <h2 style={{ marginBottom: 'var(--space-xl)' }}>Send Us a Message</h2>

                <form className="contact-form" action="https://formspree.io/f/mwvwpqpo" method="POST">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="e.g. John Smith" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="e.g. john@email.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone (Optional)</label>
                    <input type="tel" id="phone" name="phone" placeholder="e.g. (403) 123-4567" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="How can we help?" required />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ alignSelf: 'flex-start' }}>Send Message</button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="featured-strip">
        <div className="container" style={{ textAlign: 'center', padding: 'var(--space-2xl) 0' }}>
          <h2 style={{ color: 'var(--cream)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: 'var(--space-md)' }}>Rather Just Order?</h2>
          <p style={{ color: 'var(--beige)', opacity: 0.8, marginBottom: 'var(--space-xl)', maxWidth: 450, marginLeft: 'auto', marginRight: 'auto' }}>Skip the form. Browse the menu and order straight from your phone.</p>
          <Link to="/menu" className="btn btn-amber btn-lg">See the Menu</Link>
        </div>
      </section>
    </>
  )
}
