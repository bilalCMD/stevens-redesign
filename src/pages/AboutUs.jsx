import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import aboutHero from '../assets/figma/about-hero.jpg'
import cardBg from '../assets/figma/about-card-bg.jpg'
import iconHistory from '../assets/figma/icon-history.svg'
import iconToday from '../assets/figma/icon-today.svg'
import iconCustomer from '../assets/figma/icon-customer.svg'
import iconArrow from '../assets/figma/icon-quicklink-arrow.svg'
import iconSurface from '../assets/figma/icon-focus-surface.svg'
import iconUnderground from '../assets/figma/icon-focus-underground.svg'
import iconAir from '../assets/figma/icon-focus-air.svg'
import iconSoil from '../assets/figma/icon-focus-soil.svg'

const STORY_CARDS = [
  {
    title: 'History',
    icon: iconHistory,
    bg: '#192857',
    desc: 'Stevens Water Monitoring Systems was founded in 1911 as a division of Leopold & Stevens, Inc. in Portland, Oregon USA. Over the years, Stevens’ original chart recorders became the foundation for today’s water level measurement standards.',
  },
  {
    title: 'Today',
    icon: iconToday,
    bg: '#0063a8',
    desc: 'Stevens designs, manufactures, and integrates environmental data acquisition systems with expertise in water resources, soil moisture, and matrix potential — seamlessly linking sensors, data acquisition and cloud software.',
  },
  {
    title: 'Customer First',
    icon: iconCustomer,
    bg: '#192857',
    desc: 'Integrated systems begin with understanding the customer’s objectives, then providing sensors, data logging, communication equipment and software for the shortest path to a confident decision.',
  },
]

const FOCUS_AREAS = [
  { label: 'On The Surface', icon: iconSurface },
  { label: 'In The Air', icon: iconAir },
  { label: 'Underground', icon: iconUnderground },
  { label: 'In The Soil', icon: iconSoil },
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

const QUICK_LINKS = [
  { title: 'Home', to: '/' },
  { title: 'Products', to: '/shop' },
  { title: 'Applications', to: '/page/applications' },
  { title: 'Support', to: '/contact' },
  { title: 'News & Articles', to: '/page/video-library' },
]

export default function AboutUs() {
  return (
    <>
      <section className="au-hero">
        <div className="au-hero-bg" style={{ backgroundImage: `url(${aboutHero})` }} aria-hidden="true" />
        <div className="au-hero-overlay" aria-hidden="true" />
        <h1>About Us</h1>
      </section>

      <section className="section au-story">
        <div className="container">
          <Reveal>
            <div className="section-head split">
              <h2>Founded in Oregon, USA<br />and been here since 1911</h2>
              <Link to="/contact" className="btn btn-navy">Contact Us <i>↗</i></Link>
            </div>
          </Reveal>
          <div className="au-story-grid">
            {STORY_CARDS.map((c, i) => (
              <Reveal delay={i * 100} key={c.title}>
                <div className="au-story-card">
                  <img className="au-story-bg" src={cardBg} alt="" />
                  <div className="au-story-tint" style={{ background: c.bg }} />
                  <div className="au-story-body">
                    <img className="au-story-icon" src={c.icon} alt="" />
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section au-focus">
        <div className="container au-focus-inner">
          <Reveal>
            <h2>Our focus is the earth&rsquo;s valuable water resources, in every form it occurs:</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="au-focus-wheel">
              {FOCUS_AREAS.map((f) => (
                <div className="au-focus-item" key={f.label}>
                  <img src={f.icon} alt="" />
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section au-innovation">
        <div className="container">
          <Reveal>
            <div className="au-innovation-card">
              <h2>A History of Innovation</h2>
              <p>
                With a focus on simplicity, innovation and efficient solutions, Stevens Water are
                experts in hydrological and environmental monitoring. We&rsquo;ve been innovating
                water monitoring solutions since 1911.
              </p>
              <Link to="/page/history" className="btn btn-navy">View Our History <i>↗</i></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section au-values">
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

      <section className="section au-links">
        <div className="container">
          <Reveal>
            <h2 className="center-title">Quick Links</h2>
          </Reveal>
          <div className="au-links-list">
            {QUICK_LINKS.map((l, i) => (
              <Reveal delay={i * 60} key={l.title}>
                <Link to={l.to} className="au-link-row">
                  <span>{l.title}</span>
                  <img src={iconArrow} alt="" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
