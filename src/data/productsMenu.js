// Tabbed Products mega-menu structure, matching the Figma reference exactly.
const l = (title, to = '/shop') => ({ title, to })

export const PRODUCTS_TABS = [
  {
    tab: 'Water Sensors',
    columns: [
      {
        heading: 'Water Levels',
        groups: [
          { title: 'Pressure Transducers', links: [l('Smart PT'), l('SDX'), l('Divers, with integrating logging')] },
          { title: 'Non-Contact', links: [l('IRU-2420'), l('HSI Radar Sensor')] },
          { title: 'Shaft Encoder', links: [l('PAT (Position Analog Transmitter)')] },
        ],
      },
      {
        heading: 'Water Flow Discharge',
        groups: [{ links: [l('Surface Velocity Radar (SVR) Sensor')] }],
      },
      {
        heading: 'Water Quality',
        groups: [{ links: [l('Multi-parameters sondes')] }],
      },
    ],
  },
  {
    tab: 'Soil Sensors & Measurements',
    columns: [
      {
        heading: 'Soil Hydrology',
        groups: [
          { title: 'Permanent Installations', links: [l('HydraProbe'), l('GroPoint Profiling (up to 8 segments)')] },
          { title: 'Portable', links: [l('HydraGo'), l('HydraGo Flex')] },
          { title: 'Turf Management', links: [l('POGO')] },
        ],
      },
      {
        heading: 'Water Tension/Matric Potential Sensors',
        groups: [{ links: [l('SAGE'), l('Matric Potential Sensor'), l('Tensiometers'), l('Soil Water Samplers')] }],
      },
      {
        heading: 'Soil Water Infiltration',
        groups: [{ links: [l('Permeameters'), l('Infiltrometers')] }],
      },
      {
        heading: 'Water Retention Analysis',
        groups: [{ links: [l('Lab Extractors'), l('Hanging Water Column'), l('Tempe Cell')] }],
      },
      {
        heading: 'Plant Physiology',
        groups: [{ links: [l('Lysimeters'), l('Plant Water Console'), l('ICT Sap Flow')] }],
      },
    ],
  },
  {
    tab: 'Weather Sensors',
    columns: [
      {
        heading: 'Meteorology',
        groups: [{ links: [l('Complete Weather Station Systems'), l('Tri-Pods'), l('Accessories')] }],
      },
      {
        heading: 'Wind',
        groups: [{ links: [l('Dyacon WSD1™ Wind Speed / Wind Direction'), l('Met One 010C Wind Speed'), l('Met One 020D Wind Direction'), l('Met One 034E Wind Speed / Wind Direction')] }],
      },
      {
        heading: 'Precipitation',
        groups: [{ links: [l('Stevens Tipping Bucket Rain Gauge'), l('Met One 360'), l('Met One 370/375/380 Rain Gauge')] }],
      },
      {
        heading: 'Solar Radiation',
        groups: [{ links: [l('Apogee Silicon-cell Pyranometer'), l('Apogee Full-spectrum Quantum PAR Meter')] }],
      },
      {
        heading: 'Pressure, Humidity & Temperature',
        groups: [{ links: [
          l('Dyacon Barometric pressure, Relative Humidity, Temperature'),
          l('Smart-Fan™ aspiration kit'),
          l('Globe Temperature Sensor'),
          l('Met One 083F Relative Humidity'),
          l('Met One 085A Relative Humidity / Temperature'),
          l('Met One 092 Barometric Pressure'),
        ] }],
      },
      {
        heading: 'All-in-one Multiparameter',
        groups: [{ links: [l('Met One AIO 2 Sonic')] }],
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
      { heading: 'Style A', to: '/shop?cat=Chart%20Recorders' },
      { heading: 'Style C', to: '/shop?cat=Chart%20Recorders' },
      { heading: 'Style E', to: '/shop?cat=Chart%20Recorders' },
      { heading: 'Style I', to: '/shop?cat=Chart%20Recorders' },
      { heading: 'Style M', to: '/shop?cat=Chart%20Recorders' },
      { heading: 'Figure Plates', to: '/shop?cat=Chart%20Recorders' },
    ],
  },
  {
    tab: 'Power & Accessories',
    columns: [
      {
        heading: 'Telemetry / Radios',
        groups: [{ links: [l('E-Tracker'), l('Stevens SatComm')] }],
      },
      {
        heading: 'Antennas',
        groups: [{ links: [l('V2TH Rugged GOES Antenna'), l('GOES Yagi Antenna'), l('Miscellaneous Antennas')] }],
      },
      {
        heading: 'Power Systems',
        groups: [{ links: [l('Batteries'), l('Power supplies'), l('Solar panels')] }],
      },
      {
        heading: 'Diver Accessories',
        groups: [{ links: [l('Diver-SDI'), l('Diver-Mate'), l('Diver USB reading unit'), l('Diver USB interface cable')] }],
      },
      {
        heading: 'Float Accessories',
        groups: [{ links: [l('Pulleys'), l('Float Line / Beaded float line'), l('Copper/PVC Floats & Counterweights')] }],
      },
      {
        heading: 'Miscellaneous',
        groups: [{ links: [l('Evaporation pan'), l('Misc chart recorder parts & accessories'), l('Paper charts'), l('Pens and ink'), l('Stevens Tempe Cell System')] }],
      },
    ],
  },
]
