// Products transcribed from the approved Figma page exports, for items the
// Shopify catalogue and stevenswater.com don't cover. Presented as quote requests.

export const DESIGN_PRODUCTS = {
  'met-one-010c-020d': {
    title: 'Met One 010C / 020D',
    subtitle: 'Wind Speed / Direction Sensor',
    category: 'Weather',
    description: [
      'The 010C Wind Speed Sensor provides accurate and detailed information on horizontal wind speed. The lightweight three-cup anemometer is used in virtually all applications where fast response and low starting threshold(s) are of paramount importance.',
      'The 020C Wind Direction Sensor provides azimuth data for use in micrometeorological measurements related to operational studies and research. The lightweight airfoil vane is directly coupled to a single precision potentiometer. These sensors are especially useful when a low starting threshold, a high damping ratio, or a short delay distance is required.',
      'Both wind speed and wind direction sensors are used in environments ranging from Antarctic cold to arid desert heat. The 010C, 010C-1, and 020C instruments meet U.S. EPA and NRC performance specifications for critical regulatory, research or scientific measurement applications.',
    ],
    features: [
      'Low starting threshold',
      'Internal heater for long bearing life',
      'Low profile to minimize “sensor turbulence”',
      'High damping ratio',
      'Short delay distance',
      'Quick-disconnect connector',
      'Field-replaceable electronic components',
      'Ingress Protection Level 65 (IP65)',
    ],
    sections: [
      {
        heading: 'Reliability',
        body: [
          'The 010C and 020C are made of stainless steel and anodized aluminum components and are functionally more reliable than any other sensors of their kind:',
        ],
        bullets: [
          'Built-in electrical field surge protection greatly reduces problems associated with static fields, near-miss lightning hits, and poor grounding systems',
          'Inclusion of Met One Instruments’ internal heater (AC use only) provides positive clean aspiration through the bearings, greatly increasing their life',
          'Optional, external de-icing heater sleeve for applications where freezing rain, ice, and low wind speeds may be encountered',
        ],
      },
    ],
  },

  'met-one-083f-085a': {
    title: 'Met One 083F / 085A',
    subtitle: 'Relative Humidity / Temperature Sensor',
    category: 'Weather',
    description: [
      'The 083F Relative Humidity Sensor is a highly sensitive and stable temperature measurement tool that provides outstanding accuracy. It is reliable in the full range of relative humidity conditions, from 0-100%, performing equally well in meteorological, industrial, laboratory and other demanding settings. Model 085A is a combined relative humidity/temperature sensor. Both sensors can be used with a variety of radiation shields.',
      'The 083F/085A Relative Humidity Sensor measures variance in the capacitance change of a one-micron thick dielectric polymer layer. This film absorbs water molecules through a metal electrode and causes capacitance change proportional to relative humidity. The thin polymer layer reacts very quickly, providing up to 90% of the final value of relative humidity in fewer than five seconds. The sensor’s response is essentially linear, with small hysteresis, and negligible temperature dependence.',
    ],
    features: [
      'All solid-state construction, digital electronics',
      'Fast response of less than 5 seconds to 90% of final value',
      'Low power consumption of 4 mA at 12 VDC',
      'Easily cleaned using distilled water',
      '0-1V output for 0-100% RH',
      'Will operate from a 12 VDC battery',
    ],
    sections: [],
  },

  'kit-asp-aspirator-radiation-shield': {
    title: 'KIT-ASP',
    subtitle: 'Aspirator Radiation Shield Kit For TPH Sensors',
    category: 'Weather',
    description: [
      'Aspirator Radiation Shield Kit, KIT-ASP™ is an aspirator upgrade to TPH-1 and sensors. It can be installed in the field without any tools.',
      'The integrated fan minimizes the effects of solar heating when wind speeds are low. KIT-ASP can be used for weather instruments or indoor applications, such as HVAC, greenhouse controls, or monitoring of production environments.',
      'Other aspiration systems discharge the air out of the top of the sensor, leading to a risk of recirculating the same air. KIT-ASP uses the mounting pipe of the TPH sensor as a duct to exhaust the air away from the sensing elements.',
      'When used with Dyacon control modules on MS-100 series weather stations, the aspirator fan utilizes Smart-Fan™ technology to run the fan only when solar radiation is detected. This allows the aspirator to run efficiently with on solar powered stations.',
      'A 24 VDC version is also available when the aspirator is used with industrial automation systems.',
    ],
    features: [
      '12 VDC power (24 VDC option)',
      'Ball-bearing, brushless fan',
      '7800 rpm, 9 CFM',
      'Smart-Fan™ (Dyacon control module required)',
    ],
    sections: [
      {
        heading: 'Please note',
        body: [
          'This is an upgrade to TPH sensors only and does not include a sensor. Refer to TPH-1 for Dyacon sensors that include the radiation shield and sensor.',
        ],
        bullets: [],
      },
    ],
  },
}

export const designProduct = (slug) => DESIGN_PRODUCTS[slug] || null
export const DESIGN_PRODUCT_LIST = Object.entries(DESIGN_PRODUCTS).map(([slug, p]) => ({ slug, ...p }))
