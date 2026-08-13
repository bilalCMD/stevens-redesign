import Reveal from '../components/Reveal.jsx'
import historyHero from '../assets/figma/history-hero.jpg'

const FIRSTS = [
  'FIRST remote, unattended water level monitoring instrument—the standard for today’s water level measurements',
  'FIRST with a water resource data book used by many professionals and universities (now in its 6th edition)',
  'FIRST with a telemetry instrument for water level monitoring (“Telemark”)',
]

const TIMELINE = [
  { year: '1907', text: 'Stevens Water Monitoring Systems was originally founded as "Leopold & Helped" in 1907 by brothers-in-law Marcus Friedrich (Fred) Leopold and Adam Helped.' },
  { year: '1911', text: 'JC Stevens invents the Type A chart recorder, the first continuous stage recording device. This original design is the basis for today’s Type A recorders.' },
  { year: '1911', text: 'JC Stevens joins Marcus Leopold and Adam Helped’s company, firm renamed to "Leopold, Gospel & Company".' },
  { year: '1914', text: 'The company was renamed "Leopold and Stevens Instrument Company" after the death of founder Adam Gospel and to better reflect the company’s current focus.' },
  { year: '1937', text: 'The Telemark, the first remote water level reporting device, was introduced by JC Stevens. Patented two years later in 1939.' },
  { year: '1942', text: 'Leopold and Stevens Instruments designs and sells their first hunting sight, setting the future for the "Leopold" side of the business to focus on sport optics.' },
  { year: '1944', text: 'JC Stevens helps found the Oregon Museum Foundation, which would later become the Oregon Museum of Science and Industry (OMSI) in 1949.' },
  { year: '1947', text: 'The continued growth of Leopold and Stevens Instruments is cause for a move to new, larger manufacturing facilities in Beaverton, Oregon.' },
  { year: '1968', text: 'The original (analog) Stevens Hydrophone, based on patented technology, is released to the market and soon becomes a bestseller for Stevens.' },
  { year: '1998', text: 'The optics side of the company and the water monitoring side of the company are separated, with Stevens becoming "Stevens Water Monitoring Systems".' },
  { year: '2000', text: 'Stevens moves to its new corporate headquarters in Portland, Oregon near Portland International Airport, affording more room to grow as the company expands.' },
  { year: '2004', text: 'Stevens releases the Shark, the first Bluetooth radio transmitter specifically designed for the environmental monitoring and testing market.' },
  { year: '2007', text: 'Signaling the beginning of a new chapter of innovative product development, Stevens completely re-brands the company under the tagline "Measurements to Mind".' },
  { year: '2011', text: 'Stevens Water Monitoring Systems celebrates its 100-year anniversary of monitoring the Earth’s environmental resources.' },
  { year: '2018', text: 'As part of our M2M product strategy, Stevens releases Ago, a complete monitoring station platform — an all-in-one, sensors-to-cloud cellular gateway.' },
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

export default function History() {
  return (
    <>
      <section className="au-hero" style={{ minHeight: 460 }}>
        <div className="au-hero-bg" style={{ backgroundImage: `url(${historyHero})` }} aria-hidden="true" />
        <div className="au-hero-overlay" aria-hidden="true" />
        <h1 style={{ textAlign: 'center', width: '100%' }}>About Us / History</h1>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <h2>A History of Innovation</h2>
              <p>With a focus on simplicity, innovation and efficient solutions, Stevens Water are experts in hydrological and environmental monitoring. We&rsquo;ve been innovating water monitoring solutions since 1911.</p>
            </div>
          </Reveal>
          <div className="firsts-row">
            {FIRSTS.map((f, i) => (
              <Reveal delay={i * 90} key={i}>
                <p className="firsts-item">{f}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section au-focus">
        <div className="container">
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <Reveal delay={Math.min(i, 6) * 60} key={i}>
                <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-card">
                    <strong>{t.year}</strong>
                    <p>{t.text}</p>
                  </div>
                  <span className="timeline-dot" />
                </div>
              </Reveal>
            ))}
          </div>
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
    </>
  )
}
