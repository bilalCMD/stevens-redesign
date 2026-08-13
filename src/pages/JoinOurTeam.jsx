import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import teamHero from '../assets/figma/team-hero.jpg'
import teamSide from '../assets/figma/team-side.jpg'

const FAQS = [
  {
    q: 'Is it the benefits?',
    a: 'Stevens pays 80% of employees’ medical, dental and vision premiums with a variety of low deductible and low out-of-pocket options. We also offer the opportunity to participate in 401K, Colonial Life supplemental benefits, Legal & Identity Theft plans, and more.',
  },
  {
    q: 'Is it the culture?',
    a: 'We’re a tight-knit team that values honesty, curiosity and craftsmanship — with an average tenure of 15 years, people stay because the work and the people are worth it.',
  },
  {
    q: 'Is it the opportunity?',
    a: 'From engineering to field applications, Stevens gives people room to grow, take ownership of real products, and see their work deployed on every continent.',
  },
]

const CORE_VALUES = [
  { letter: 'S', title: 'Strong', desc: 'Do what’s right, not what’s easy', color: '#f9000c' },
  { letter: 'T', title: 'Technical', desc: 'Engineers, technologists, innovators', color: '#8ccf49' },
  { letter: 'E', title: 'Enthusiastic', desc: 'Have fun and love what we do', color: '#ffda5f' },
  { letter: 'V', title: 'Versatile', desc: 'Proactive in all aspects', color: '#00a8e1' },
  { letter: 'E', title: 'Engaging', desc: 'Professional with all', color: '#ca7ebb' },
  { letter: 'N', title: 'Nurturing', desc: 'Easy to do business with', color: '#4bed46' },
  { letter: 'S', title: 'Successful', desc: 'Grow big, or go home!', color: '#ffbd0b' },
]

const JOBS = [
  {
    title: 'Senior Embedded Systems IoT Hardware Design Engineer',
    desc: 'Employer: Stevens Water Monitoring Systems, Inc. Job Location: Portland, Oregon. Requirements: Bachelor’s degree or equivalent in Electrical Engineering.',
  },
  {
    title: 'Firmware Engineer — Environmental Sensors',
    desc: 'Employer: Stevens Water Monitoring Systems, Inc. Job Location: Portland, Oregon. Requirements: Bachelor’s degree or equivalent in Computer/Electrical Engineering.',
  },
  {
    title: 'Field Applications Engineer',
    desc: 'Employer: Stevens Water Monitoring Systems, Inc. Job Location: Portland, Oregon (travel required). Requirements: Hydrology, soil science or related field experience.',
  },
]

export default function JoinOurTeam() {
  const [open, setOpen] = useState(0)
  return (
    <>
      <section className="au-hero" style={{ minHeight: 460 }}>
        <div className="au-hero-bg" style={{ backgroundImage: `url(${teamHero})` }} aria-hidden="true" />
        <div className="au-hero-overlay" aria-hidden="true" />
        <div className="dist-hero-inner" style={{ maxWidth: 800 }}>
          <h1>Employment Opportunities</h1>
          <p>
            At Stevens, we are dedicated to our customers, our core values, and our people. Our average tenure
            is 15 years and we have multiple employees who&rsquo;ve worked with us for over 30 years — plus,
            we&rsquo;ve been in business for over 100 years! With a record like that we must be doing something right.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container team-rewarding">
          <Reveal>
            <h2>What makes working here so rewarding?</h2>
          </Reveal>
          <div className="team-faq">
            {FAQS.map((f, i) => (
              <Reveal delay={i * 90} key={f.q}>
                <div className={`team-faq-item ${open === i ? 'open' : ''}`}>
                  <button onClick={() => setOpen(open === i ? -1 : i)}>
                    {f.q}
                    <span>{open === i ? '−' : '+'}</span>
                  </button>
                  {open === i && <p>{f.a}</p>}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <img className="team-side-img" src={teamSide} alt="Stevens team member at work" />
          </Reveal>
        </div>
      </section>

      <section className="section au-focus">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2>It&rsquo;s all of it.</h2>
            <p style={{ maxWidth: 900, margin: '0 auto 40px' }}>
              Stevens is growing but we don&rsquo;t hire just anyone. We seek those with an entrepreneurial spirit
              who are passionate about environmental data acquisition to help monitor what we believe is the most
              precious resource on the planet — water. We seek those with a fire in their bellies to achieve and
              grow professionally. We seek those who are versatile, resourceful, and courageous.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2>Is this for you?</h2>
            <p style={{ maxWidth: 900, margin: '0 auto' }}>
              Check below for current available opportunities. We are always accepting resumes (please include cover
              letter and introduction) even if a position is not officially posted. We&rsquo;d love to hear from you!
              Send all resumes to <a href="mailto:careers@stevenswater.com">careers@stevenswater.com</a>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="center-title">Our Core Values</h2>
          </Reveal>
          <div className="au-values-row">
            {CORE_VALUES.map((v, i) => (
              <Reveal delay={i * 60} key={v.title}>
                <div className="au-value-tile">
                  <div className="au-value-top" style={{ background: v.color }}>{v.letter}</div>
                  <div className="au-value-bottom" style={{ borderColor: v.color }}>{v.desc}</div>
                  <span className="au-value-name">{v.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section au-focus">
        <div className="container">
          <Reveal>
            <div className="section-head split">
              <h2>Current Positions Available</h2>
              <a href="mailto:careers@stevenswater.com" className="btn btn-navy">Join Our Team <i>↗</i></a>
            </div>
          </Reveal>
          <div className="jobs-grid">
            {JOBS.map((j, i) => (
              <Reveal delay={i * 100} key={j.title}>
                <div className="job-card">
                  <h3>{j.title}</h3>
                  <p>{j.desc}</p>
                  <a href="mailto:careers@stevenswater.com" className="btn btn-white-outline btn-sm">Read More</a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
