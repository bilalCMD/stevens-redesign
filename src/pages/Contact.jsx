import { ORDER_EMAIL } from '../data/site.js'
import contactHero from '../assets/figma/contact-hero.jpg'
import location1 from '../assets/figma/location-1.jpg'
import location2 from '../assets/figma/location-2.jpg'

const LOCATIONS = [
  {
    img: location1,
    name: 'Stevens Water Monitoring Systems',
    address: '12067 NE Glenn Widing Dr. #106 Portland, Oregon 97220',
    phone: '503-445-8000 (US +01)',
    email: 'Info@stevenswater.com',
  },
  {
    img: location2,
    name: 'SoilMoisture Equipment Corp.',
    address: '601 Pine Ave., Suite A Goleta, California 93117',
    phone: '805-964-3525 (US +1)',
    email: 'sales@soilmoisture.com',
  },
]

export default function Contact() {
  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const body = ['Name: ' + f.get('name'), 'Organization: ' + f.get('company'), 'Phone: ' + f.get('phone'), 'Email: ' + f.get('email'), '', f.get('message')].join('\n')
    window.location.href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent('Website inquiry — ' + f.get('name'))}&body=${encodeURIComponent(body)}`
  }
  return (
    <>
      <section className="au-hero" style={{ minHeight: 460 }}>
        <div className="au-hero-bg" style={{ backgroundImage: `url(${contactHero})` }} aria-hidden="true" />
        <div className="au-hero-overlay" aria-hidden="true" />
        <h1 style={{ textAlign: 'center', width: '100%' }}>Contact Us</h1>
      </section>

      <section className="section">
        <div className="container contact-hero-inner">
          <h2 className="center-title">We&rsquo;d Love To Hear From You</h2>
          <form className="contact-form-figma" onSubmit={submit}>
            <div className="form-row">
              <label>Name*<input name="name" required placeholder="Your Name" /></label>
              <label>Organization*<input name="company" required placeholder="Your Organization" /></label>
            </div>
            <div className="form-row">
              <label>Phone*<input name="phone" required placeholder="Your Phone" /></label>
              <label>Email*<input name="email" type="email" required placeholder="Your Email" /></label>
            </div>
            <label>Message<textarea name="message" rows="5" placeholder="Message" /></label>
            <button className="btn btn-navy btn-full" type="submit">Submit</button>
          </form>
        </div>
      </section>

      <section className="section au-focus">
        <div className="container">
          <div className="locations-head">
            <h2 className="center-title">Our Locations</h2>
            <div className="locations-hours">
              <span>📍 Office hours (Pacific Time; UTC -8)</span>
              <span>🕐 Monday - Friday 7:30 AM to 5 PM</span>
            </div>
          </div>
          <div className="locations-grid">
            {LOCATIONS.map((loc) => (
              <div className="location-card" key={loc.name}>
                <img src={loc.img} alt={loc.name} />
                <div>
                  <h3>{loc.name}</h3>
                  <p>{loc.address}</p>
                  <p>{loc.phone}</p>
                  <p><a href={`mailto:${loc.email}`}>{loc.email}</a></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
