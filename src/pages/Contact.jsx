import { ORDER_EMAIL } from '../data/site.js'

export default function Contact() {
  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const body = ['Name: ' + f.get('name'), 'Company: ' + f.get('company'), 'Email: ' + f.get('email'), 'Phone: ' + f.get('phone'), '', f.get('message')].join('\n')
    window.location.href = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent('Website inquiry — ' + f.get('name'))}&body=${encodeURIComponent(body)}`
  }
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Talk to a real engineer</h1>
          <p>Quotes, application design, support — a human replies within one business day.</p>
        </div>
      </section>
      <section className="section contact">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <label>Name<input name="name" required placeholder="Your name" /></label>
              <label>Company<input name="company" placeholder="Organization" /></label>
            </div>
            <div className="form-row">
              <label>Email<input name="email" type="email" required placeholder="you@company.com" /></label>
              <label>Phone<input name="phone" placeholder="(555) 555-5555" /></label>
            </div>
            <label>How can we help?<textarea name="message" rows="6" required placeholder="Tell us about your site, application or product question…" /></label>
            <button className="btn btn-primary btn-lg" type="submit">Send Message</button>
            <p className="modal-note">Submitting opens a pre-filled email to {ORDER_EMAIL}.</p>
          </form>
          <aside className="contact-aside">
            <div className="contact-card">
              <h4>Headquarters</h4>
              <p>12067 NE Glenn Widing Drive<br />Suite 106<br />Portland, OR 97220 USA</p>
            </div>
            <div className="contact-card">
              <h4>Email</h4>
              <p><a href={`mailto:${ORDER_EMAIL}`}>{ORDER_EMAIL}</a></p>
            </div>
            <div className="contact-map">
              <iframe
                title="Stevens Water HQ"
                src="https://www.google.com/maps?q=12067+NE+Glenn+Widing+Drive,+Portland,+OR+97220&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
