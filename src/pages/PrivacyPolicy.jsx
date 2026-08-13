import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { IMG } from '../data/site.js'

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: 'We collect information you provide directly to us, such as your name, organization, email address, and phone number when you request a quote, contact support, or place an order. When you browse our site, we also collect standard technical information like your IP address and browser type through cookies and similar technologies.',
  },
  {
    title: 'How We Use Your Information',
    body: 'We use the information we collect to process orders, respond to inquiries, provide customer support, and send you relevant product updates if you have opted in. We do not sell your personal information to third parties.',
  },
  {
    title: 'Data Sharing',
    body: 'We may share your information with trusted service providers who help us operate our business — such as shipping carriers and payment processors — solely for the purpose of fulfilling your order. These providers are contractually obligated to protect your data.',
  },
  {
    title: 'Data Security',
    body: 'We implement industry-standard safeguards to protect your information from unauthorized access, alteration, or disclosure. Payment transactions are processed through encrypted, PCI-compliant payment providers.',
  },
  {
    title: 'Your Choices',
    body: 'You may opt out of marketing communications at any time by using the unsubscribe link in any email or by contacting us directly. You may also request access to, correction of, or deletion of your personal information by reaching out to our team.',
  },
  {
    title: 'Contact Us',
    body: 'If you have questions about this policy or how your information is handled, please reach out through our Contact page.',
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <section className="page-hero has-img">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${IMG.field})` }} aria-hidden="true" />
        <div className="container">
          <nav className="crumbs light"><Link to="/">Home</Link> <i>/</i> <span>Privacy Policy</span></nav>
          <h1>Privacy Policy</h1>
          <p>Last updated 2026. This policy explains how Stevens Water Monitoring Systems collects, uses, and protects your information.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          {SECTIONS.map((s, i) => (
            <Reveal delay={i * 60} key={s.title}>
              <div style={{ marginBottom: 32 }}>
                <h3>{s.title}</h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>{s.body}</p>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <Link to="/contact" className="btn btn-navy">Contact Us <i>↗</i></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
