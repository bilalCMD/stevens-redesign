// Tabbed Products mega-menu structure, matching the Figma reference exactly.
// Each product links to its real product page when it exists in the catalog;
// otherwise it links to a filtered shop search for its category so results are always relevant.
const l = (title, to) => ({ title, to })
const cat = (name) => `/shop?cat=${encodeURIComponent(name)}`
const search = (q) => `/shop?q=${encodeURIComponent(q)}`

export const PRODUCTS_TABS = [
  {
    tab: 'Water Sensors',
    columns: [
      {
        heading: 'Water Levels',
        groups: [
          {
            title: 'Pressure Transducers',
            links: [
              l('Smart PT', '/product/smart-pt'),
              l('SDX', '/product/sdx'),
              l('Divers, with integrating logging', search('Diver')),
            ],
          },
          {
            title: 'Non-Contact',
            links: [l('IRU-2420', '/product/iru-2420'), l('HSI Radar Sensor', search('HSI Radar'))],
          },
          { title: 'Shaft Encoder', links: [l('PAT (Position Analog Transmitter)', '/product/pat-position-analog-transmitter')] },
        ],
      },
      {
        heading: 'Water Flow Discharge',
        groups: [{ links: [l('Surface Velocity Radar (SVR) Sensor', search('Surface Velocity Radar'))] }],
      },
      {
        heading: 'Water Quality',
        groups: [{ links: [l('Multi-parameters sondes', search('sondes'))] }],
      },
    ],
  },
  {
    tab: 'Soil Sensors & Measurements',
    columns: [
      {
        heading: 'Soil Hydrology',
        groups: [
          {
            title: 'Permanent Installations',
            links: [l('HydraProbe', '/product/stevens-hydraprobe'), l('GroPoint Profiling (up to 8 segments)', '/product/gropoint-profile')],
          },
          { title: 'Portable', links: [l('HydraGo', search('HydraGO')), l('HydraGo Flex', search('HydraGO'))] },
          { title: 'Turf Management', links: [l('POGO', cat('Soil Monitoring'))] },
        ],
      },
      {
        heading: 'Water Tension/Matric Potential Sensors',
        groups: [{
          links: [
            l('SAGE', cat('Soil Monitoring')),
            l('Matric Potential Sensor', search('pF Sensor')),
            l('Tensiometers', search('Tensiomark')),
            l('Soil Water Samplers', cat('Soil Monitoring')),
          ],
        }],
      },
      {
        heading: 'Soil Water Infiltration',
        groups: [{ links: [l('Permeameters', cat('Soil Monitoring')), l('Infiltrometers', cat('Soil Monitoring'))] }],
      },
      {
        heading: 'Water Retention Analysis',
        groups: [{
          links: [
            l('Lab Extractors', cat('Soil Monitoring')),
            l('Hanging Water Column', cat('Soil Monitoring')),
            l('Tempe Cell', search('Tempe Cell')),
          ],
        }],
      },
      {
        heading: 'Plant Physiology',
        groups: [{
          links: [
            l('Lysimeters', cat('Soil Monitoring')),
            l('Plant Water Console', cat('Soil Monitoring')),
            l('ICT Sap Flow', cat('Soil Monitoring')),
          ],
        }],
      },
    ],
  },
  {
    tab: 'Weather Sensors',
    columns: [
      {
        heading: 'Meteorology',
        groups: [{ links: [l('Complete Weather Station Systems', cat('Weather')), l('Tri-Pods', cat('Weather')), l('Accessories', cat('Weather'))] }],
      },
      {
        heading: 'Wind',
        groups: [{
          links: [
            l('Dyacon WSD1™ Wind Speed / Wind Direction', search('Wind Monitor')),
            l('Met One 010C Wind Speed', search('wind speed')),
            l('Met One 020D Wind Direction', search('024A')),
            l('Met One 034E Wind Speed / Wind Direction', search('034B')),
          ],
        }],
      },
      {
        heading: 'Precipitation',
        groups: [{
          links: [
            l('Stevens Tipping Bucket Rain Gauge', search('Tipping Bucket')),
            l('Met One 360', search('375')),
            l('Met One 370/375/380 Rain Gauge', search('370')),
          ],
        }],
      },
      {
        heading: 'Solar Radiation',
        groups: [{
          links: [
            l('Apogee Silicon-cell Pyranometer', search('Pyranometer')),
            l('Apogee Full-spectrum Quantum PAR Meter', search('LI-200')),
          ],
        }],
      },
      {
        heading: 'Pressure, Humidity & Temperature',
        groups: [{
          links: [
            l('Dyacon Barometric pressure, Relative Humidity, Temperature', '/product/met-one-092-barometric-pressure-sensor'),
            l('Smart-Fan™ aspiration kit', '/product/digital-temperature-sensor'),
            l('Globe Temperature Sensor', '/product/digital-temperature-sensor'),
            l('Met One 083F Relative Humidity', search('083E')),
            l('Met One 085A Relative Humidity / Temperature', search('Humicap')),
            l('Met One 092 Barometric Pressure', '/product/met-one-092-barometric-pressure-sensor'),
          ],
        }],
      },
      {
        heading: 'All-in-one Multiparameter',
        groups: [{ links: [l('Met One AIO 2 Sonic', search('MSO'))] }],
      },
    ],
  },
  {
    tab: 'Data Management Software',
    columns: [
      { heading: 'Skyview 360', desc: 'A cloud-based interface to configure hardware, visualize data, analyze measurements, manage alarms, calculations, and set up data routing.', to: '/page/m2m' },
      { heading: 'Steel Head', desc: 'Leading the shift to a true Internet of Things (IoT) data acquisition experience that incorporates low-power, all-in-one, and patent technology.', to: '/page/m2m' },
      { heading: 'Viper', desc: 'The Viper is an underground transformer monitoring solution, designed for long-term deployment and is extremely affordable.', to: '/page/m2m' },
    ],
  },
  {
    tab: 'Staff Gage',
    columns: [
      { heading: 'Style A', to: search('Style A Staff Gage') },
      { heading: 'Style C', to: search('Style C Staff Gage') },
      { heading: 'Style E', to: search('Style E Staff Gage') },
      { heading: 'Style I', to: search('Style I Staff Gage') },
      { heading: 'Style M', to: search('Style M Staff Gage') },
      { heading: 'Figure Plates', to: '/product/figure-plates' },
    ],
  },
  {
    tab: 'Power & Accessories',
    columns: [
      {
        heading: 'Telemetry / Radios',
        groups: [{ links: [l('E-Tracker', cat('Telemetry')), l('Stevens SatComm', '/product/stevens-satcomm')] }],
      },
      {
        heading: 'Antennas',
        groups: [{
          links: [
            l('V2TH Rugged GOES Antenna', '/product/stevens-v2th-goes-antenna'),
            l('GOES Yagi Antenna', '/product/goes-yagi-antenna'),
            l('Miscellaneous Antennas', cat('Telemetry')),
          ],
        }],
      },
      {
        heading: 'Power Systems',
        groups: [{
          links: [
            l('Batteries', search('Battery')),
            l('Power supplies', cat('Power & Accessories')),
            l('Solar panels', '/product/solar-panel'),
          ],
        }],
      },
      {
        heading: 'Diver Accessories',
        groups: [{
          links: [
            l('Diver-SDI', '/product/diver-dcx'),
            l('Diver-Mate', '/product/diver-mate'),
            l('Diver USB reading unit', '/product/diver-usb-reader'),
            l('Diver USB interface cable', '/product/diver-usb-interface-cable'),
          ],
        }],
      },
      {
        heading: 'Float Accessories',
        groups: [{
          links: [
            l('Pulleys', search('Pulley')),
            l('Float Line / Beaded float line', '/product/beaded-float-line'),
            l('Copper/PVC Floats & Counterweights', search('Float')),
          ],
        }],
      },
      {
        heading: 'Miscellaneous',
        groups: [{
          links: [
            l('Evaporation pan', cat('Chart Recorders')),
            l('Misc chart recorder parts & accessories', cat('Chart Recorders')),
            l('Paper charts', '/product/paper-charts-roll-for-61r-recorder'),
            l('Pens and ink', search('Ink')),
            l('Stevens Tempe Cell System', search('Tempe Cell')),
          ],
        }],
      },
    ],
  },
]
