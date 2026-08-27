// Product category overview pages.
// Long-form copy comes from the approved Figma design where the design provides it;
// every page lists its real catalogue products via PRODUCT_CATEGORIES[].match.

export const PRODUCT_CATEGORIES = [
  {
    "slug": "water-levels",
    "name": "Water Levels",
    "tab": "Water Sensors",
    "hero": "/categories/water-level/hero.jpg",
    "title": "Water Level Sensors Overview",
    "body": "Stevens is the original water level measurement instrumentation company with the introduction of the widely known chart recorders introduced in 1911. Today, Stevens offers a wide selection of water level measurement sensors including robust ceramic pressure sensors, shaft encoders, acoustical sensors, and visual reference staff gages. Stevens still offers the low-powered, mechanical chart recorders for long-term uninterrupted, real-time chart of water level. Here is an overview of the different types of instrumentation for monitoring water level.",
    "sections": [
      {
        "title": "Pressure Transducers",
        "intro": "Pressure sensors (also called pressure transducers or pneumatic pressure sensors) preform liquid level measurement by having the sensor submerged at a fixed depth under the water surface. The pressure sensor measures the equivalent hydrostatic pressure of the water above the sensor diaphragm, using this to calculate the total liquid depth. This function of a pressure sensor can be compared to “weighing the water”. Pressure sensors are ideal for ground and surface water level applications. Variances in accuracy of measurement depend on the model of pressure sensor used. The following parameters will influence the accuracy of the pressure sensor: Non-linearity: the deviation of the sensor’s signal curve from that of a straight line. Repeatability: the ability of the sensor to reproduce an output reading when subjected to identical pressures. Hysteresis: the difference in value for the same measured point when pressure is rst increased, then decreased past the point."
      },
      {
        "title": "Logging Level Sensors",
        "intro": "Cost-effective and reliable, compact groundwater logging sensors like the Van Essen TD-Diver provide accurate and reliable long-term measurements of water levels, temperature, and conductivity—essential data needed for effective water resource management, environmental remediation, mine dewatering, and slope stability. The Diver family of pressure sensors from Van Essen provide robust level measurement for environmental professionals. Hermetically sealed to external influences—electrical and/or environmental effects cannot affect the measurement results. Include an internal data logger that measures up to 48,000 measurements per parameter. Measure temperature and provide temperature compensated level measurement. Come with internal battery with an extended life up to 10 years. Absolute pressure sensors with ceramic pressure sensor head. All Diver sensors have a 3 year warranty, up to 10 years battery life, and can be used from 300 m below to 5000 m above sea level. We offer the entire family of Diver sensors and other logging sensors."
      },
      {
        "title": "Non-Contact Sensors",
        "intro": "Both ultrasonic and sonic level instruments like the APG IRU operate on the basic principle of using sound waves to determine fluid level. The frequency range for ultrasonic methods is ~20-200 kHz, and sonic types use a frequency of 10 kHz. A transducer directs sound waves downward in bursts onto the surface of the water. Echoes of these waves return to the transducer, which performs calculations to convert the distance of wave travel into a measure of height, and therefore water level. Proper mounting is important to ensure that sound waves are reflected perpendicularly back to the sensor. Otherwise, even slight misalignment of the sensor in relation to the process material reduces the amount of sound wave detected by the transducer. In addition, the installation site should be relatively free of obstacles such as brackets or ladders to minimize false returns and the resulting erroneous response, although most modern systems have sufficiently “intelligent” echo processing to make engineering changes largely unnecessary except where an intrusion blocks the line of sight of the transducer to the target. Since the ultrasonic transducer is used both for transmitting and receiving the acoustic energy, it is subject to a period of mechanical vibration known as “ringing”. This vibration must attenuate (stop) before the echoed signal can be processed. The net result is a distance from the face of the transducer that is blind and cannot detect an object. It is known as the “blanking zone”, typically 150mm – 1m, depending on the range of the transducer. The requirement for electronic signal processing circuitry can be used to make the ultrasonic sensor an intelligent device. Ultrasonic sensors can be designed to provide point level control, continuous monitoring or both. Due to the presence of a microprocessor and relatively low power consumption, there is also capability for serial communication from/to other computing devices making this a good technique for adjusting calibration and filtering of the sensor signal, remote wireless monitoring or plant network communications. The ultrasonic sensor enjoys wide popularity due to the powerful mix of low price and high functionality."
      },
      {
        "title": "Bubblers",
        "intro": "Bubbler systems measure hydrostatic back pressure in order to determine liquid level. A low cost tube (orifice line) is inserted into the liquid to be measured, and air or nitrogen is passed through the tube. The resulting back pressure against the air being pushed out the end of the tube is converted into a liquid level measurement by the device. As the pressure changes, the change in liquid level can be tracked. Typical systems include a pressure source (nitrogen tank or compressor) and a pressure regulator. A bubbler is similar to a submersible pressure sensor, with the exception that they are typically mounted in a shelter with only the orifice line in contact with the liquid. Bubbler systems are hydrostatic pressure sensors that are ideally suited for accurate liquid and water level measurement, especially in industrial process systems."
      },
      {
        "title": "Encoders / Floats",
        "intro": "A shaft encoder like the Stevens PAT is an electro-mechanical device used to convert the angular position of a shaft or axle to an analog or digital electrical signal. Part of the mechanical aspect of this device for level measurement utilizes a float and counter-weight attached to a line or tape placed around a pulley attached to the encoder’s shaft. As the level changes, the float moves up and down and, thereby, rotating the pulley and the attached shaft—generating an electronic wave form for both rotating direction and amount. By converting shaft rotation into electronic signals, encoders are used to electronically monitor the position of a rotating shaft. There are two main types of encoders for liquid level measurements: absolute and incremental. Absolute encoders provide a binary “word” for each position. Each bit requires a separate optical channel. The resolution is equal to the number of output bits. Absolute encoders constantly retain the correct position for one revolution. Therefore, the main advantage is that the output signal is not affected by a power shut-off. When power returns the encoder recognizes what position it is in based on the voltage measurement reference. Whereas incremental measurements rely on a referenced position pointer. Therefore, if power is shut off to an incremental encoder, the reference is lost and incremental pointer resets to zero. Incremental (relative) encoders provide a contact or pulse for each increment of shaft movement. Usually this consists of two optical quadrature channels to enable the determination of the direction of rotation. The incremental encoder has a lower cost than the absolute encoder due to the limited number of channels, and the encoded position is not limited in revolutions."
      },
      {
        "title": "Staff gages",
        "intro": "Stevens’ environmentally rugged staff gages provide a quick and easy visual indicator of water level. Every water level monitoring station should include a staff gage from which the height of the water may be visually identified and easily compared to any data logger’s reported measurement. Staff gages come in several standard styles and sizes: Style A Style C Style E Style I Style M Figure plates Enameled iron gages are preferred over other type gages (such as painted gages) since they resist rust, corrosion or discoloration and will last almost indefinitely with proper installation and maintenance. Any algae, organic/marine growth or other dirt build-up on the gage is easily washed off. Stevens gages are typically placed on a redwood, cypress, cedar or synthetic board of suitable width and the board itself it then attached or embedded to the wall. Mounting a staff gage directly to concrete or metal structures is also done, but care should be taken so that the mounting screws are not excessively tightened since this could chip or fracture the porcelain. In order to prevent this, rubber grommets should be placed immediately under the screw head before installing the gage. Stevens staff gages are designed to accept a #8 3/4” round head brass wood screw. Also, each Stevens staff gage includes pre-drilled mounting holes with a brass grommet ring to help avoid any porcelain chipping or fracturing from overtightening."
      }
    ],
    "match": "smart pt|^sdx|pressure transducer|diver|iru-?2420|hsi radar|shaft encoder|^pat |position analog|water level"
  },
  {
    "slug": "water-flow-discharge",
    "name": "Water Flow Discharge",
    "tab": "Water Sensors",
    "hero": null,
    "title": "Water Flow Discharge Overview",
    "body": "Non-contact radar instruments that measure surface velocity and calculate discharge in open channels, rivers and culverts — without putting hardware in the flow.",
    "sections": [],
    "match": "surface velocity|svr|flow|discharge"
  },
  {
    "slug": "soil-sensors",
    "name": "Soil Sensors",
    "tab": "Soil Sensors & Measurements",
    "hero": "/categories/soil-sensors/hero.jpg",
    "title": "Soil Sensors Overview",
    "body": "As a leader in soil monitoring instrumentation, Stevens offers portable and in-situ sensors to measure moisture, EC (salinity), temperature and matric potential.",
    "sections": [
      {
        "title": "Moisture, EC and Temperature - In-Situ",
        "intro": ""
      },
      {
        "title": "Moisture, EC and Temperature - Portable",
        "intro": ""
      },
      {
        "title": "Moisture and Temperature - Multiple Depths",
        "intro": ""
      },
      {
        "title": "Validation of Soil Sensor Calibration",
        "intro": "New Download – Soil Geomorphology: A Pedological Guide to Soil Moisture Sensors"
      }
    ],
    "match": "hydraprobe|hydrago|hydra data|gropoint|pogo|soil moisture|gypsum|^avo|smart bht|contact meter"
  },
  {
    "slug": "soil-hydrology",
    "name": "Soil Hydrology",
    "tab": "Soil Sensors & Measurements",
    "hero": null,
    "title": "Soil Hydrology Overview",
    "body": "Instruments for the physics of water in soil: matric potential, infiltration rate, water retention and plant water use, for both field deployment and laboratory work.",
    "sections": [],
    "match": "tensiomark|pf sensor|matric|tempe cell|permeameter|infiltrometer|lysimeter|sap flow|soil water sampler|extractor"
  },
  {
    "slug": "weather-stations",
    "name": "Weather Stations",
    "tab": "Weather Sensors",
    "hero": "/categories/meteorology/hero.jpg",
    "title": "Meteorology Sensors Overview",
    "body": "Complete weather stations and the sensors that make them up, for agriculture, research, aviation and industrial sites.",
    "sections": [
      {
        "title": "Complete Weather Station Systems",
        "intro": "Weather stations provide plug-and-play capability with industrial flexibility; the embedded cell phone and modbus port eliminate expensive satellite links, server programs, IT support, and external antennas."
      },
      {
        "title": "Precipitation",
        "intro": "Rain sensors are used to record the cumulative precipitation at a location for a given time. Buildings, landscaping and trees, wind and height placement of the rain sensor can influence the amount of rain being measured. Placing a rain gauge in an open area protected from the wind is best (usually two to six feet above the ground). The use of a windscreen around the rain sensor will help to improve the accuracy in windy conditions."
      },
      {
        "title": "Wind",
        "intro": "Stevens provides a number of different wind sensors (known as anemometers) for a variety of application needs."
      },
      {
        "title": "Solar Radiation",
        "intro": "A pyranometer is a type of sensor measuring the heating power of radiation and broadband solar irradiance on a planar surface and is a sensor that is designed to measure the solar radiation flux density (in watts per metre square) from a field of view of 180 degrees. The World Meteorological Organization defines direct irradiance from the Sun measured on the ground of at least 120 watts per square meter. Direct sunlight has a luminous efficacy of about 93 lumens per watt of radiant flux. Bright sunlight provides illuminance of approximately 100,000 lux or lumens per square meter at the Earth’s surface. Sunlight is the key factor in photosynthesis. Photosynthesis is the process that converts carbon dioxide into organic compounds, especially sugars, using the energy from sunlight. This process allows plants to create their own food—a process that is a crucially important for life on Earth. Pyranometers are frequently used in meteorology, climatology, solar energy studies and building physics. They can be seen in many meteorological stations—typically installed horizontally and next to solar panels—often mounted with the sensor surface in the plane of the panel."
      },
      {
        "title": "Air Temperature and Humidity",
        "intro": "Digital temperature sensors have the advantage of being able to send and record data automatically. Often the temperature sensor is combined with a humidity sensor—both of which are shielded from solar radiation but accessible to conditions in the air and at a height to avoid influence for the ground temperature (at least 5 feet). Humidity is defined as moisture in the air—commonly referred to as “relative humidity”. Relative humidity is the ratio of the quantity of water vapor in the air required for saturation at the same temperature. Saturation point is the point at which condensation forms. By knowing the percentage of humidity in the air along with the current temperature, dew point temperature and heat index can be calculated. These factors can be important to those who work and play outside. They are also important to farmers and other agricultural concerns with regard to stress in livestock or plants, or in properly irrigating crops. If at all possible, keep the humidity sensor away local sources of heating and cooling, and from nearby obstructions by a distance of at least four times their height. Be at least 100 feet (30 meters) from large areas of concrete and/or asphalt. Temperature and RH sensors should not be installed under the shade of trees or vegetation. The use of a motor or wind aspirated solar radiation shield will minimize the effects of solar radiation on the measured temperature or humidity."
      },
      {
        "title": "All-in One Multiparameter",
        "intro": "The AIO 2 Sonic Weather Sensor is a complete, high performance weather sensor using Met One Instruments’ proven 2D sonic technology. This technology provides reference grade accuracy without moving parts and includes a built-in compass used for automatic magnetic north alignment of the wind sensor. The temperature and humidity elements are integrated into an IP65 sealed module with a quick disconnect for ease of calibration in the field. The pressure element is precisely calibrated, and temperature compensated for outstanding performance. The AIO 2 will accept data from a tipping bucket rain gauge, a compatible solar radiation sensor (P/N 10718) or both. The AIO 2 is designed for surface meteorological applications where accuracy and reliability matter."
      },
      {
        "title": "Evaporation",
        "intro": "Evaporation data can be calculated with a real time data system using an evaporation pan, a level sensor, and a rain gage. Additionally, various weather parameters such as solar radiation, wind, and relative humidity can help you correlate the evaporation data to environmental events. Evaporation is calculated based on the amount of water that is lost throughout a day in an evaporation pan. Rainfall is used as a parameter to account for the amount of water that is added to the pan due to rain. The Novalynx Class A Evaporation Pan is a standard National Weather Service Class A type for measurement of water evaporation. It is normally installed on a wooden platform set on the ground in a grassy location. The pan is filled with water and exposed to represent an open body of water"
      }
    ],
    "match": "weather station|lufft|met one instruments mso|met one mso|aio 2|vaisala|novalynx"
  },
  {
    "slug": "wind-precipitation",
    "name": "Wind & Precipitation",
    "tab": "Weather Sensors",
    "hero": null,
    "title": "Wind & Precipitation Overview",
    "body": "Wind speed and direction sensors alongside tipping bucket and weighing rain gauges, for agricultural, hydrological and airfield weather stations.",
    "sections": [],
    "match": "wind|rain gauge|rain gage|tipping bucket|precipitation|pluvio|met one 0(10c|20d|24a|34)|met one instruments 3(70|75|80)"
  },
  {
    "slug": "solar-atmospheric",
    "name": "Solar & Atmospheric",
    "tab": "Weather Sensors",
    "hero": null,
    "title": "Solar & Atmospheric Overview",
    "body": "Pyranometers, PAR sensors, and barometric pressure, humidity and temperature probes — the atmospheric half of a complete weather station.",
    "sections": [],
    "match": "pyranometer|apogee|li-?200|solar radiation|barometric|humidity|temp probe|radiation shield|083e|085a|092"
  },
  {
    "slug": "staff-gages",
    "name": "Staff Gages",
    "tab": "Staff Gage",
    "hero": "/categories/staff-gage/hero.jpg",
    "title": "Staff Gages Overview",
    "body": "Stevens’ environmentally rugged staff gages provide a quick and easy visual indicator of water level and flow. Every water level monitoring station should include a staff gage from which the height of the water may be visually and easily compared to any data logger’s reported measurement. Enamelled iron gages are preferred over other type gages (such as painted gages) since they resist rust, corrosion or discoloration and will last almost indefinitely with proper installation and maintenance. Any algae, organic/marine growth or other dirt build up on the gage is easily washed off. Staff gages are typically placed on a redwood, cypress, cedar or synthetic board of suitable width and the board itself it then attached or embedded to the wall. Mounting a staff gage directly to concrete or metal structures is also done, but care should be taken so that the mounting screws are not excessively tightened since this could chip or fracture the porcelain. In order to prevent this, rubber grommets should be placed immediately under the screw head before installing the gage. Stevens staff gages are designed to accept a #8 ¾” round head brass wood screw. Each staff gage includes pre-drilled mounting holes with a brass grommet ring to help avoid any porcelain chipping or fracturing from over-tightening.",
    "sections": [],
    "match": "staff gage|figure plate"
  },
  {
    "slug": "telemetry",
    "name": "Telemetry",
    "tab": "Power & Accessories",
    "hero": null,
    "title": "Telemetry Overview",
    "body": "Radios, satellite transmitters and antennas that move data from remote monitoring sites back to your office, over cellular, GOES satellite or licensed radio.",
    "sections": [],
    "match": "antenna|satcomm|telemetry|goes|yagi|etracker|e-tracker|cell-net|modem|sensor interface|teledesign"
  },
  {
    "slug": "power",
    "name": "Power",
    "tab": "Power & Accessories",
    "hero": null,
    "title": "Power Overview",
    "body": "Batteries, solar panels and power supplies sized for unattended monitoring stations that need to run for months between site visits.",
    "sections": [],
    "match": "battery|batteries|solar panel|power suppl"
  },
  {
    "slug": "accessories",
    "name": "Accessories",
    "tab": "Power & Accessories",
    "hero": null,
    "title": "Accessories Overview",
    "body": "Cables, floats, pulleys, counterweights, desiccant, chart paper and the other parts that keep Stevens instruments running in the field.",
    "sections": [],
    "match": "cable|pulley|float|counterweight|paper chart|pen|ink|desiccant|chart recorder|stylus|data book|adapter|hook|clock weight|spring"
  }
]

export const categoryBySlug = (slug) => PRODUCT_CATEGORIES.find((c) => c.slug === slug)

// Catalogue products belonging to a category page.
export function productsInCategory(category, catalog) {
  if (!category) return []
  const re = new RegExp(category.match, 'i')
  return catalog.filter((p) => re.test(p.title))
}
