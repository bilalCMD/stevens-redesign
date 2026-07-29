// Mega-menu structure mirroring every page on the current stevenswater.com
// (extracted from the live site's sitemap). Info pages route to /page/<slug>.
const p = (title, slug) => ({ title, slug })

export const MENU = [
  {
    label: 'Applications',
    columns: [
      {
        heading: 'Application Areas',
        links: [
          p('Soil Monitoring', 'applications/soil-monitoring'),
          p('Water Resource Management', 'applications/water-resource-management'),
          p('Weather Monitoring', 'applications/weather-monitoring'),
          p('All Applications', 'applications'),
        ],
      },
      {
        heading: 'Platform',
        links: [
          p('Stevens M2M®', 'm2m'),
          p('Client Profiles', 'client-profiles'),
        ],
      },
    ],
  },
  {
    label: 'Products',
    wide: true,
    columns: [
      {
        heading: 'Soil Science',
        links: [
          p('SAGE', 'products/sage'),
          p('HydraProbe', 'products/hydraprobe'),
          p('GroPoint Profiling', 'products/gropoint-profiling'),
          p('TS15', 'products/ts15'),
          p('Tensiometers', 'products/tensiometers'),
          p('Infiltrometers', 'products/infiltrometers'),
          p('Permeameters', 'products/permeameters'),
          p('Lysimeters', 'products/lysimeters'),
          p('Soil Water Samplers', 'products/soil-water-samplers'),
          p('Matric Potential Sensor', 'products/matric-potential-sensor'),
          p('Tempe Cell', 'products/tempe-cell'),
          p('HP Soil Saturation Kit', 'products/hp-soil-saturation-kit'),
          p('Lab Extractors', 'products/lab-extractors'),
          p('Plant Water Console', 'products/plant-water-console'),
          p('ICT Sap Flow', 'products/ict-sap-flow'),
        ],
      },
      {
        heading: 'Water Level & Flow',
        links: [
          p('Smart PT', 'products/smart-pt'),
          p('SDX', 'products/sdx'),
          p('PAT', 'products/pat'),
          p('Van Essen Diver Family', 'products/van-essen-diver-family'),
          p('Diver-SDI', 'products/van-essen-diver-sdi'),
          p('Diver-Mate', 'products/van-essen-diver-mate'),
          p('Diver-USB', 'products/van-essen-diver-usb'),
          p('HSI Radar Sensor', 'products/hsi-radar-sensor'),
          p('Surface Velocity Radar', 'products/surface-velocity-radar-svr-sensor'),
          p('Multi-Parameter Sondes', 'products/multi-parameters-sondes'),
          p('Steelhead Logger', 'products/steelhead-logger'),
          p('eTracker', 'products/etracker'),
          p('HydraGO', 'products/hydrago'),
          p('Viper', 'products/viper'),
          p('APG IRU', 'products/apg-iru'),
        ],
      },
      {
        heading: 'Gages & Mechanical',
        links: [
          p('Style A Staff Gage', 'products/style-a'),
          p('Style C Staff Gage', 'products/style-c'),
          p('Style E Staff Gage', 'products/style-e'),
          p('Style I Staff Gage', 'products/style-i'),
          p('Style M Staff Gage', 'products/style-m'),
          p('Floats & Counterweights', 'products/floats-counterweights'),
          p('Float Tape & Line', 'products/float-tape-float-line'),
          p('Pulleys', 'products/pulleys'),
          p('Figure Plates', 'products/figure-plates'),
          p('Shaft Encoder Parts', 'products/miscellaneous-shaft-encoder-parts'),
          p('Paper Charts, Pens & Ink', 'products/paper-charts-pens-ink'),
          p('Evaporation Pan', 'products/evaporation-pan'),
        ],
      },
      {
        heading: 'Weather',
        links: [
          p('Dyacon Weather Stations', 'products/dyacon-weather-stations'),
          p('Dyacon Tripods', 'products/dyacon-tripods'),
          p('Dyacon BP · RH · Temp', 'products/dyacon-barometric-pressure-relative-humidity-temperature'),
          p('Dyacon Accessories', 'products/dyacon-accessories'),
          p('Met One Wind Sensors', 'products/met-one-010c-020d-wind'),
          p('Met One 034E Wind', 'products/met-one-034e-wind-speed-wind-direction'),
          p('Met One RH Sensors', 'products/met-one-083f-085a-relative-humidity'),
          p('Met One AIO 2 Sonic', 'products/met-one-aio-2-sonic'),
          p('WSD1 Wind', 'products/wsd1-wind-speed-wind-direction'),
          p('Tipping Bucket Rain Gauge', 'products/tipping-bucket-rain-gauge'),
          p('Apogee Quantum PAR Meter', 'products/apogee-full-spectrum-quantum-par-meter'),
          p('Apogee Pyranometer', 'products/apogee-silicon-cell-pyranometer'),
          p('Globe Temperature Sensor', 'products/globe-temperature-sensor'),
          p('Radiation Shield Kit', 'products/aspirator-radiation-shield-kit-for-tph-sensors'),
          p('SkyView360', 'products/skyview360'),
        ],
      },
      {
        heading: 'Telemetry & Power',
        links: [
          p('Stevens SatComm', 'products/stevens-satcomm'),
          p('GOES Yagi Antenna', 'products/goes-yagi-antenna'),
          p('V2TH GOES Antenna', 'products/v2th-goes-antenna'),
          p('Misc. Antennas', 'products/miscellaneous-antennas'),
          p('SDI-12 Xplorer', 'products/sdi-12-xplorer'),
          p('Smart BHT', 'products/smart-bht-draft'),
          p('Batteries', 'products/batteries'),
          p('Solar Panels', 'products/solar-panels'),
          p('Power Supplies', 'products/power-supplies'),
          p('POGO Turf Pro', 'products/pogo'),
        ],
      },
    ],
  },
  {
    label: 'Shop',
    to: '/shop',
  },
  {
    label: 'Resources',
    columns: [
      {
        heading: 'Learn',
        links: [
          p('Video Library', 'video-library'),
          p('Glossary', 'glossary'),
          p('Client Profiles', 'client-profiles'),
        ],
      },
      {
        heading: 'Connect',
        links: [
          p('Distributors', 'distributors'),
          p('Conferences & Events', 'conferences-events'),
          p('Tradeshow', 'tradeshow'),
        ],
      },
    ],
  },
  {
    label: 'Company',
    columns: [
      {
        heading: 'Stevens',
        links: [
          p('About Us', 'about-us'),
          p('Employment Opportunities', 'employment-opportunities'),
          p('Privacy Policy', 'privacy-policy'),
        ],
      },
      {
        heading: 'Get in Touch',
        links: [p('Contact', 'contact')],
      },
    ],
  },
]

// slug -> display title map for the info-page shell
export const PAGE_TITLES = {}
for (const item of MENU) {
  for (const col of item.columns || []) {
    for (const l of col.links) PAGE_TITLES[l.slug] = l.title
  }
}
