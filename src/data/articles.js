import client1 from '../assets/figma/client-1.jpg'
import client2 from '../assets/figma/client-2.jpg'
import client4 from '../assets/figma/client-4.jpg'
import client5 from '../assets/figma/client-5.jpg'
import teamHero from '../assets/figma/team-hero.jpg'
import confHero from '../assets/figma/conf-hero.jpg'
import aboutHero from '../assets/figma/about-hero.jpg'
import historyHero from '../assets/figma/history-hero.jpg'
import distributorsHero from '../assets/figma/distributors-hero.jpg'

export const CATEGORIES = [
  'Careers',
  'Case Studies',
  'Climate Change',
  'FAQs',
  'History',
  'How-To Guides',
  'M2M',
  'Newsletters',
  'Press Release',
  'Published Studies',
  'Software',
  'Telemetry',
]

export const ARTICLES = [
  {
    slug: 'senior-embedded-systems-engineer',
    title: 'Senior Embedded Systems IoT Hardware Design Engineer',
    category: 'Careers',
    img: teamHero,
    excerpt: 'We’re hiring a Senior Embedded Systems Engineer to join our Portland, Oregon team designing next-generation field instrumentation.',
    body: [
      'Stevens Water Monitoring Systems is looking for a Senior Embedded Systems IoT Hardware Design Engineer to join our engineering team in Portland, Oregon.',
      'In this role, you will design and develop low-power embedded hardware for field-deployed environmental sensors, working closely with firmware and mechanical engineering to bring new products from concept to production.',
      'Requirements: Bachelor’s degree in Electrical Engineering, Electronics Engineering, or a closely related field, plus 5+ years of experience as a Hardware Design Engineer or similar role. Experience with low-power wireless communication, analog sensor interfacing, and rugged outdoor product design is a strong plus.',
    ],
    cta: { label: 'View Open Positions', to: '/page/employment-opportunities' },
  },
  {
    slug: 'join-our-team',
    title: 'Join Our Team',
    category: 'Careers',
    img: teamHero,
    excerpt: 'Stevens is always looking for top talent. If you want to work with us, we invite you to submit your resume.',
    body: [
      'Stevens is always looking for top talent across engineering, operations, and customer support. We build instruments that scientists, water managers, and environmental agencies rely on every day — and we’re looking for people who take that responsibility seriously.',
      'If you want to work with us, we invite you to submit your resume to careers@stevenswater.com or browse our current openings.',
    ],
    cta: { label: 'View Open Positions', to: '/page/employment-opportunities' },
  },
  {
    slug: 'sovereign-consulting-groundwater-monitoring',
    title: 'Groundwater Monitoring at a Former Refinery Site',
    category: 'Case Studies',
    img: client1,
    excerpt: 'Sovereign Consulting partnered with Stevens to monitor temperature profiles across multiple well depths at a remediation site in Wood River, IL.',
    body: [
      'Sovereign Consulting, Inc. partnered with Stevens for a groundwater well monitoring project at a former refinery site in Wood River, IL, on behalf of British Petroleum.',
      'The project required monitoring temperature profiles at different depths within the well using a combination of eTracker dataloggers, Van Essen Diver sensors, and Campbell Scientific Temperature Sensor Strings.',
      'All collected data uploads automatically via cellular telemetry to Stevens-Connect Cloud™, giving the project team real-time visibility into subsurface conditions without manual site visits.',
    ],
    cta: { label: 'View More Client Profiles', to: '/page/client-profiles' },
  },
  {
    slug: 'riverside-county-rainfall-network',
    title: 'A 27-Station Rainfall Monitoring Network',
    category: 'Case Studies',
    img: client2,
    excerpt: 'Riverside County Flood Control operates one of the largest tipping-bucket rain gauge networks on Stevens-Connect Cloud™.',
    body: [
      'Riverside County Flood Control operates a rainfall monitoring network of 27 eTrackers connected to tipping bucket rain gauges across the county.',
      'Rainfall data is collected and transmitted over the cellular network to Stevens-Connect Cloud™, giving flood control engineers a real-time, county-wide view of storm conditions to support early flood warning decisions.',
    ],
    cta: { label: 'View More Client Profiles', to: '/page/client-profiles' },
  },
  {
    slug: 'monitoring-in-a-changing-climate',
    title: 'Why Continuous Monitoring Matters in a Changing Climate',
    category: 'Climate Change',
    img: confHero,
    excerpt: 'As weather patterns become less predictable, continuous environmental monitoring is becoming essential infrastructure rather than a nice-to-have.',
    body: [
      'Shifting precipitation patterns, more frequent extreme weather events, and changing groundwater dynamics are making historical baselines less reliable for planning and response.',
      'Continuous, real-time monitoring networks — rather than periodic manual readings — give agencies and researchers the resolution they need to detect anomalies early, whether that’s a flash flood, a drought threshold, or an unexpected shift in soil moisture.',
      'Stevens instruments are built for exactly this kind of long-term, unattended deployment, with telemetry options that keep data flowing even at the most remote sites.',
    ],
    cta: { label: 'Explore Applications', to: '/page/applications' },
  },
  {
    slug: 'faq-choosing-a-water-level-sensor',
    title: 'FAQ: How Do I Choose the Right Water Level Sensor?',
    category: 'FAQs',
    img: aboutHero,
    excerpt: 'A quick guide to choosing between pressure transducers, non-contact radar, and shaft encoders for your water level monitoring project.',
    body: [
      'Q: What’s the difference between a pressure transducer and a non-contact sensor?',
      'A: Pressure transducers (like Smart PT or SDX) are submersible and measure hydrostatic pressure directly in the water — ideal for wells and continuous submerged deployments. Non-contact sensors (like the HSI Radar Sensor or IRU-2420) measure level from above the water surface, which is useful in debris-heavy or corrosive environments where a submerged sensor isn’t practical.',
      'Q: Do I need a vented or non-vented cable?',
      'A: Vented cables compensate automatically for changes in barometric pressure, which improves accuracy for most open-water and groundwater applications. Non-vented (absolute) sensors are simpler and more rugged, but require a separate barometric correction in post-processing.',
      'Have a question that isn’t answered here? Reach out to our support team directly.',
    ],
    cta: { label: 'Contact Support', to: '/contact' },
  },
  {
    slug: 'faq-stevens-connect-data-access',
    title: 'FAQ: How Do I Access My Data on Stevens-Connect Cloud™?',
    category: 'FAQs',
    img: aboutHero,
    excerpt: 'Everything you need to know about logging in, exporting data, and setting up alarms on the Stevens-Connect Cloud™ platform.',
    body: [
      'Q: How do I get access to Stevens-Connect Cloud™?',
      'A: Every new station ships with setup instructions for creating your Stevens-Connect Cloud™ account. If you’ve misplaced your credentials or need a new user added to your organization’s account, contact our support team.',
      'Q: Can I export historical data?',
      'A: Yes — data can be exported directly from the dashboard in CSV format for any date range, or accessed programmatically through the API for integration with your own systems.',
      'Q: How do alarms work?',
      'A: You can configure threshold-based alarms (high/low level, rate of change, sensor offline) that trigger email or SMS notifications the moment a condition is met.',
    ],
    cta: { label: 'Contact Support', to: '/contact' },
  },
  {
    slug: 'stevens-history-1911',
    title: 'From Chart Recorders to Cloud: A Brief History of Stevens',
    category: 'History',
    img: historyHero,
    excerpt: 'A look back at how Stevens went from mechanical chart recorders in 1911 to today’s cellular telemetry and cloud platforms.',
    body: [
      'Stevens Water Monitoring Systems was founded in 1911 as a division of Leopold & Stevens, Inc. in Portland, Oregon. Our original chart recorders became the foundation for water level measurement standards still referenced today.',
      'Over the following century, Stevens evolved from purely mechanical recording instruments to digital dataloggers, and eventually to fully connected, cloud-based monitoring systems — while keeping the same focus on rugged, field-reliable design.',
      'Read the full timeline of milestones on our History page.',
    ],
    cta: { label: 'View Full History', to: '/page/history' },
  },
  {
    slug: 'how-to-install-smart-pt',
    title: 'How-To: Installing and Configuring the Smart PT Sensor',
    category: 'How-To Guides',
    img: distributorsHero,
    excerpt: 'Step-by-step guidance for deploying a Smart PT pressure transducer for the first time.',
    body: [
      '1. Confirm your cable length matches your well depth, with enough slack for seasonal water level changes.',
      '2. Suspend the sensor at your target monitoring depth using the supplied cable, ensuring the vent tube (if using a vented cable) remains unobstructed and above the water surface.',
      '3. Connect the sensor to your datalogger or telemetry unit via SDI-12 or RS-485, following the wiring diagram in the technical specifications.',
      '4. Configure your logging interval and, if applicable, set up crest-gauge or autosampling parameters through your datalogger’s configuration software.',
      '5. Verify readings against a manual reference measurement before leaving the site.',
      'For detailed wiring diagrams and full technical specifications, see the Smart PT product page.',
    ],
    cta: { label: 'View Smart PT', to: '/product/smart-pt' },
  },
  {
    slug: 'how-to-choose-telemetry',
    title: 'How-To: Choosing the Right Telemetry Option for Remote Sites',
    category: 'How-To Guides',
    img: distributorsHero,
    excerpt: 'Cellular, satellite, or radio? A practical guide to picking telemetry for sites with no reliable connectivity.',
    body: [
      'Cellular telemetry is the most cost-effective option where coverage exists, and works well for the majority of monitoring sites in populated or semi-rural areas.',
      'For truly remote sites with no cellular coverage, GOES satellite telemetry (via the Stevens SatComm) provides reliable, low-bandwidth data transmission almost anywhere, at the cost of lower reporting frequency.',
      'Radio telemetry is worth considering for dense networks of nearby stations reporting back to a single base station, particularly where ongoing cellular data costs would add up.',
    ],
    cta: { label: 'Explore Data Management Software', to: '/page/m2m' },
  },
  {
    slug: 'introducing-m2m-connectivity',
    title: 'Introducing Stevens M2M® Connectivity',
    category: 'M2M',
    img: aboutHero,
    excerpt: 'A look at how Stevens M2M® keeps field data flowing reliably, even at the most remote monitoring sites.',
    body: [
      'Stevens M2M® provides secure, reliable machine-to-machine data transmission from any field site over cellular, satellite, or radio — built for stations that can go months between site visits.',
      'Combined with Stevens-Connect Cloud™, M2M gives you a single dashboard for every station in your network, with configurable alarms and historical data export built in.',
    ],
    cta: { label: 'Learn More About M2M', to: '/page/m2m' },
  },
  {
    slug: 'newsletter-q3-product-updates',
    title: 'Quarterly Newsletter: New Products and Firmware Updates',
    category: 'Newsletters',
    img: confHero,
    excerpt: 'A roundup of recent product releases, firmware improvements, and upcoming tradeshow appearances.',
    body: [
      'This quarter we rolled out firmware improvements across our SDI-12 sensor line, improving battery life and measurement stability in cold-weather deployments.',
      'We also expanded our Weather Sensors lineup with new Dyacon integrations, and continued to build out Stevens-Connect Cloud™ with improved multi-site dashboards.',
      'Catch us in person at upcoming tradeshows — see the full schedule on our Tradeshow page.',
    ],
    cta: { label: 'View Tradeshow Schedule', to: '/page/tradeshow' },
  },
  {
    slug: 'press-release-jamaica-wra-expansion',
    title: 'Press Release: Jamaica WRA Expands Monitoring Network',
    category: 'Press Release',
    img: client4,
    excerpt: 'Jamaica’s Water Resource Authority secures additional World Bank funding to expand its Stevens-Connect-powered monitoring network.',
    body: [
      'Jamaica’s Water Resource Authority (WRA) has deployed approximately 30 eTrackers connected to Stevens-Connect Cloud™ to cover water resource monitoring across the island.',
      'The network includes alarms for high water level, rainfall intensity, and station power health, and has earned the WRA additional World Bank funding as a designated Caribbean resource hub for regional water data.',
    ],
    cta: { label: 'View More Client Profiles', to: '/page/client-profiles' },
  },
  {
    slug: 'published-study-hillslope-soil-moisture',
    title: 'Published Study: Hillslope Soil Moisture Dynamics',
    category: 'Published Studies',
    img: client5,
    excerpt: 'Researchers with the Chinese Ecosystem Research Network used HydraProbe sensors and Stevens-Connect to study rainfall-runoff relationships.',
    body: [
      'The Chinese Ecosystem Research Network (CERN) analyzed soil moisture dynamics and rainfall-runoff relationships at hillslope transects using HydraProbe soil sensors, Stevens Tipping Bucket Rain Gauges, eTracker dataloggers, and Stevens-Connect Cloud™.',
      'The continuous, high-resolution dataset enabled by this instrumentation supported new insight into how soil moisture propagates across hillslope transects during rainfall events.',
    ],
    cta: { label: 'View More Client Profiles', to: '/page/client-profiles' },
  },
  {
    slug: 'software-stevens-connect-update',
    title: 'Software Update: Multi-Site Dashboards in Stevens-Connect Cloud™',
    category: 'Software',
    img: aboutHero,
    excerpt: 'A new dashboard view makes it easier to monitor dozens of stations from a single screen.',
    body: [
      'The latest Stevens-Connect Cloud™ update introduces a redesigned multi-site dashboard, letting teams monitor station status, recent readings, and active alarms across their entire network from a single screen.',
      'Existing API access and CSV export remain unchanged, so any integrations you’ve already built will continue to work without modification.',
    ],
    cta: { label: 'Learn More About the Cloud', to: '/page/m2m' },
  },
  {
    slug: 'telemetry-goes-satellite-basics',
    title: 'Telemetry Basics: How GOES Satellite Transmission Works',
    category: 'Telemetry',
    img: distributorsHero,
    excerpt: 'An introduction to how the Stevens SatComm transmits data via the GOES Data Collection System.',
    body: [
      'The Stevens SatComm GOES transmitter sends data via the GOES Data Collection System (DCS) at both 300 and 1200 baud data rates, operating with any data logger capable of exporting data packets through a serial port.',
      'For remote sites, an optional internal data logger lets sensors connect directly to the SatComm for data collection, storage, and transmission in a single low-power device — removing the need for a separate logger entirely.',
    ],
    cta: { label: 'View Stevens SatComm', to: '/product/stevens-satcomm' },
  },
]
