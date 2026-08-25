// Technical specifications and feature lists taken from the client's live site
// (stevenswater.com), which Stevens confirmed is accurate for product information.
// Keyed by our catalogue handle.

export const PRODUCT_SPECS = {
  "smart-bht": {
    "sourceUrl": "https://stevenswater.com/products/smart-bht-draft/",
    "specs": [
      {
        "label": "Output",
        "value": "SDI-12 (version 1.4) / Modbus RTU. Sensor autodetects the output signal"
      },
      {
        "label": "Current draw",
        "value": "500 uA average, 12 mA peak for 50 ms during startup"
      },
      {
        "label": "Power supply voltage",
        "value": "6 to 18 VDC (12 VDC typical)"
      },
      {
        "label": "Wiring",
        "value": "Red: 6 - 18 VDC; Black: GROUND; Blue: SDI-12; White: RS-485 A/+; Green: RS-485 B/-"
      },
      {
        "label": "Cable type",
        "value": "UPG 20 AWG 5C polyethylene underground direct burial low energy circuit"
      },
      {
        "label": "Dimensions",
        "value": "Diameter: 0.70” (17.8 mm), Length 4.17” (106.0 mm)"
      },
      {
        "label": "Barometric Pressure",
        "value": "Relative Humidity — Temperature"
      },
      {
        "label": "Range",
        "value": "260 to 1260 hPa — 0 to 100% — -40°C to +70°C"
      },
      {
        "label": "Sensor type",
        "value": "Piezo-resistive — Capacitive resistive — Silicon bandgap"
      },
      {
        "label": "Accuracy",
        "value": "0.1 hPa from 0 to +65°C — ±3% (0 to 80%); ±5% (80% to 100%) — 0.1°C from -20°C to +70°C"
      },
      {
        "label": "Resolution",
        "value": ".01 hPa — 1% — .01"
      },
      {
        "label": "Initial sensor response time",
        "value": "1 s — 20 s — 10 s"
      },
      {
        "label": "Unit of measure options",
        "value": "hPa, mBar, Bar, PSI, Torr — Percent — Celsius, Fahrenheit"
      },
      {
        "label": "Range",
        "value": "500 - 1080 hPa — 0 to 100% — -40°C to +50°C"
      },
      {
        "label": "Resolution",
        "value": "0.1 hPa — 1% — .01 K"
      },
      {
        "label": "Sensor time constant",
        "value": "20 s — 40 s — 20 s"
      },
      {
        "label": "Output average time",
        "value": "1 min — 1 min — 1 min"
      },
      {
        "label": "Achievable measurement uncertainty",
        "value": "0.3 hPa — 3% — 0.2 K"
      }
    ],
    "features": [
      "Digital output that autodetects SDI-12 or Modbus RTU commands.",
      "279 micron, 316T stainless steel mesh for insect and dust protection.",
      "One second sampling with output average of samples over logged interval.",
      "Min / max of samples over log interval. y Standard deviation output of samples.",
      "Lightning protection: Gas discharge tube on SDI- 12 data line, IEC-rated RS-485 transceiver with TVS diode protection.",
      "Replaceable sensor board for rapid recalibration replacement."
    ]
  },
  "goes-yagi-antenna": {
    "sourceUrl": "https://stevenswater.com/products/goes-yagi-antenna/",
    "specs": [
      {
        "label": "Frequency",
        "value": "401 MHz"
      },
      {
        "label": "Gain",
        "value": "+11 dB"
      },
      {
        "label": "Type",
        "value": "5/8 over 1/4 wave"
      },
      {
        "label": "VSWR",
        "value": "1.5:1 Max"
      },
      {
        "label": "Power rating",
        "value": "300 Watts"
      },
      {
        "label": "Polarization",
        "value": "Right hand circular"
      },
      {
        "label": "Feed connection",
        "value": "N Female"
      },
      {
        "label": "Height",
        "value": "41.5\""
      },
      {
        "label": "Wind load",
        "value": "100 mph"
      }
    ],
    "features": []
  },
  "diver-dcx": {
    "sourceUrl": "https://stevenswater.com/products/van-essen-diver-sdi/",
    "specs": [],
    "features": [
      "Expands Diver monitoring networks to telemetry systems, offering “real-time” monitoring.",
      "Provides built-in barometric compensated water levels; no post processing required.",
      "Pressure vent is made from GORE-TEX® offering reliable water resistance.",
      "No internal power source required, allowing for flexible installation options."
    ]
  },
  "diver-mate": {
    "sourceUrl": "https://stevenswater.com/products/van-essen-diver-mate/",
    "specs": [],
    "features": [
      "Extremely easy to use – plug in, wait until the green comes on, and unplug.",
      "A robust way of downloading data—works even under water.",
      "Easily manage Diver-Mate data with Diver-Office.",
      "Store data from over 1,000 full Diver sensors.",
      "Reduce errors on accidentally reprogramming or stopping Divers.",
      "Download data from hundreds of Divers with one fully charged battery."
    ]
  },
  "tempe-cell-system-request-quote": {
    "sourceUrl": "https://stevenswater.com/products/tempe-cell/",
    "specs": [],
    "features": [
      "General inquiry Name * Organization * Email * Phone * Message reCAPTCHA Submit If you are human, leave this field blank. Five Uses of the Stevens Tempe Cell Provide a traditional gravimetric method for determining soil water content.",
      "Determination of bulk density, porosity and saturation of soil.",
      "Develop soil-specific calibration equations to adjust and/or validate soil moisture sensors using an enhanced gravimetric/volumetric soil moisture determination.",
      "The system’s volumetric water content data output can be used to develop a soil-specific calibration curve*",
      "A soil-water retention curve up to 2 bar can be developed and curve-fit to the output of HydraProbe sensors enabling the HydraProbe to output matric potential for specific soils.*",
      "Agriculture/agricultural research",
      "Climate reference monitoring",
      "Soil carbon and gas flux monitoring",
      "Soil contaminate remediation",
      "Satellite ground-truthing",
      "Drought, flooding and climate modeling",
      "Use a HydraProbe to measure matric potential eliminating the need of tensiometers"
    ]
  },
  "iru-2420": {
    "sourceUrl": "https://stevenswater.com/products/apg-iru/",
    "specs": [
      {
        "label": "Operating range",
        "value": "1 - 25 ft. (0.3 - 7.6 m)"
      },
      {
        "label": "Beam pattern",
        "value": "9º off axis"
      },
      {
        "label": "Frequency",
        "value": "69 kHz"
      },
      {
        "label": "Accuracy",
        "value": "±0.25% of detected range"
      },
      {
        "label": "Resolution",
        "value": "0.1 in. (2.5 mm)"
      },
      {
        "label": "Response time",
        "value": "Programmable (20 ms minimum)"
      },
      {
        "label": "Output",
        "value": "4-20 mA 600 ohms @ 24 VDC 150 ohms @ 12 VDC 4-20 mA with (2) NPN outputs"
      },
      {
        "label": "Ratings",
        "value": "IP65"
      },
      {
        "label": "Operating temp",
        "value": "-40º to 140ºF (-40º to 60ºC)"
      },
      {
        "label": "Total current draw",
        "value": "75 mA @ 24 VDC"
      },
      {
        "label": "Supply voltage",
        "value": "12-28 VDC"
      },
      {
        "label": "Wiring connection",
        "value": "4 or 5 conductor shielded cable"
      },
      {
        "label": "Materials",
        "value": "PVDF (Kynar®) transducer housing PC/PET upper housing"
      },
      {
        "label": "Transducer type",
        "value": "Ceramic, PVDF faced"
      }
    ],
    "features": [
      "AutoSense Software for hassle-free setup",
      "Internal temperature compensation",
      "Works on solids and liquids"
    ]
  },
  "smart-pt": {
    "sourceUrl": "https://stevenswater.com/products/smart-pt/",
    "specs": [
      {
        "label": "Supply voltage",
        "value": "6 - 28 VDC (12 VDC typical)"
      },
      {
        "label": "Current consumption",
        "value": "Average, SDI-12, one measurement per minute: 0.9 mA Average, RS-485, one measurement per minute: 1.5 mA Peak current, during response to host: 30 mA"
      },
      {
        "label": "Output",
        "value": "SDI-12 (Version 1.4) and RS-485 Selectable output: Pressure in bar, kPa, psi, or water depth in m, cm, ft. Temperature in °C or °F"
      },
      {
        "label": "Operating temperature",
        "value": "-20 °C to 80 °C (-4 °F to 176 °F)"
      },
      {
        "label": "Storage temperature",
        "value": "-40 °C to 80 °C (-40 °F to 176 °F)"
      },
      {
        "label": "Pressure accuracy",
        "value": "± 0.1% of full scale, temperature corrected"
      },
      {
        "label": "Temperature accuracy",
        "value": "± 0.25 °C (0.45 °F)"
      },
      {
        "label": "Wiring",
        "value": "Red: 6 - 28 VDC Black: GROUND Blue: SDI-12, White: RS-485 A/+ Green: RS-485 B/-"
      },
      {
        "label": "Cable",
        "value": "High durability polyurethane (26 AWG)"
      },
      {
        "label": "Pipe threading",
        "value": "M14-1"
      },
      {
        "label": "Dimensions",
        "value": "86.4 mm x 22.1 mm (3.4 in x 0.9 in)"
      },
      {
        "label": "Housing",
        "value": "316L Stainless Steel, Fully Potted, IP68"
      },
      {
        "label": "Weight",
        "value": "Probe: 120 g (4.23 oz.) Cable: 40 g per m (0.43 oz. per ft)"
      }
    ],
    "features": [
      "< ± 0.1% full scale accuracy",
      "Aluminum oxide ceramic membrane",
      "Digital output (SDI-12 / RS485)",
      "Depth scales available from 2 meters (6.6 feet) up to 200 meters (660 feet)",
      "Rugged housing and fully potted electronics – no risk of leaking",
      "Not damaged by freezing water",
      "Vented or non-vented cable, user specified length",
      "Direct pipe connection option",
      "Average and standard deviation outputs on up to 3600 autosampled data points over configurable time window. Data is stored until requested using the M2 command.",
      "Crest gauge function automatically captures minimum and maximum level and number of seconds since the event.",
      "Smart autosampling can provide smoothing and oversampling.",
      "Environmental corrections for local gravitational field and changes in fluid density due to temperature."
    ]
  },
  "sdx": {
    "sourceUrl": "https://stevenswater.com/products/sdx/",
    "specs": [
      {
        "label": "Power requirements",
        "value": "9 - 26 VDC"
      },
      {
        "label": "Output",
        "value": "4-20 mA current signal, linearly corresponding to range"
      },
      {
        "label": "Operating temperature",
        "value": "-40° F to 185° F (-40° C to 85° C)"
      },
      {
        "label": "Compensated temperature",
        "value": "32° F to 122° F (0° C to 50° C)"
      },
      {
        "label": "Linearity",
        "value": "0-2.5 ft range: 0.2% max. 0-5 ft range: 0.2% max. 0-10 ft range: 0.2% max. 0-35 ft range: 0.3% max. 0-50 ft range: 0.3% max. (0.1% typical for all ranges)"
      },
      {
        "label": "Repeatability & hysteresis",
        "value": "Typical: ± 0.2% span"
      },
      {
        "label": "Reverse polarity protection",
        "value": "Built into sensor"
      },
      {
        "label": "Overpressure",
        "value": "0-2.5 ft: 20 psi max. 0-5 ft: 20 psi max. 0-10 ft: 20 psi max. 0-35 ft: 45 psi max. 0-50 ft: 45 psi max."
      },
      {
        "label": "Shock",
        "value": "Qualification tested to 150 g"
      },
      {
        "label": "Wiring",
        "value": "Red: power Green: 4-20 mA return Silver: drain wire"
      },
      {
        "label": "Pipe threading",
        "value": "1/2-14 straight pipe thread (back of sensor housing near cable) 3/8-18 straight pipe thread (under removable copper nose-cone)"
      },
      {
        "label": "Physical size",
        "value": "4.00\" L x 0.84\" dia. (101.6 mm L x 21.33 mm dia.)"
      },
      {
        "label": "Weight",
        "value": "Probe: 2.37 oz (61.19 g) Cable: 0.43 oz (12.19 g) per foot (.4 g per cm) (weights are approximate)"
      }
    ],
    "features": [
      "Rugged housing and fully potted electronics—not damaged by freezing water",
      "Accuracy of ± 0.25% full span",
      "Vented cable, 2 wire, with drain",
      "Weighted copper nose cone"
    ]
  },
  "pat-position-analog-transmitter": {
    "sourceUrl": "https://stevenswater.com/products/pat/",
    "specs": [
      {
        "label": "Input",
        "value": "Shaft and pulley clamp to accept standard Stevens 18 inch or 375 mm circumference float pulley"
      },
      {
        "label": "Output",
        "value": "4-20 mA, 0.2 to 1 or 1 to 5 VDC as selected on terminal strip."
      },
      {
        "label": "Range",
        "value": "Determined by selection of gears and potentiometer (see table below)"
      },
      {
        "label": "Torque",
        "value": "Ranges 0-2.5ft, 0-8ft, 0-10ft: 0.3 oz-in or less All other ranges: 0.6 oz-in or less."
      },
      {
        "label": "Accuracy",
        "value": "Thermal error less than 0.05% / °C. Other errors (not including float lag and line shift errors) are less than 0.75% for ranges 0-8ft and 0-10ft, and less than 0.38% for all other ranges. Accuracy calculations are based on the maximum head for any range in the adjustment band."
      },
      {
        "label": "Operating temperature",
        "value": "-40 °C to +70 °C (-40 °F to +158 °F)"
      },
      {
        "label": "Power requirements",
        "value": "Supplied by connected Stevens instrument.Receiver type 4-20 mA: 12.4 to 40 VDC must be supplied by the receiver or a power supply in series with the receiver.Receiver type 0.2 to 1 VDC: 13.4 to 40.2 VDC must be supplied by a power supply.Receiver type 1 to 5 VDC: 17.4 to 41 VDC must be supplied by a power supply.The voltage supplied to the transmitter must be within these ranges, after taking loop circuit resistance into account."
      },
      {
        "label": "Operating humidity",
        "value": "To 95% relative, non-condensing. This can be improved by installing fresh desiccant in the enclosure."
      },
      {
        "label": "Dimensions",
        "value": "5.0” W x 6.4” L x 5.85” H, exclusive of mounting flanges and input shaft."
      },
      {
        "label": "Weight",
        "value": "1.8 lbs (0.816 kg)"
      },
      {
        "label": "0.8 feet (0.2 m)",
        "value": "0-0.2 to 0-0.8 ft (0.05 to 0.2 m)"
      },
      {
        "label": "2.5 feet (0.6 m)",
        "value": "0-0.8 to 0-2.5 ft (0.2 to 0.6 m)"
      },
      {
        "label": "10 feet (2.6 m)",
        "value": "0-2.5 to 0-10 ft (0.65 to 2.6 m)"
      },
      {
        "label": "18 feet (4.6 m)",
        "value": "0-10 to 0-18 ft (2.6 to 4.6 m)"
      },
      {
        "label": "32 feet (8.1 m)",
        "value": "0-18 to 0-32 ft (4.6 to 8.1 m)"
      },
      {
        "label": "58 feet (14.5 m)",
        "value": "0-32 to 0-58 ft (8.1 to 14.5 m)"
      },
      {
        "label": "105 feet (26 m)",
        "value": "0-58 to 0-105 ft (14.5 to 26 m)"
      }
    ],
    "features": [
      "4-20 mA, 0.2 VDC to 1 VDC or 1 VDC to 5 VDC output",
      "Imperial or metric ranges (compatible with 18” and 375 mm pulleys)",
      "housed in an aluminum enclosure, which may be removed for access to zero and span adjustments as well as the gears for major range changes.",
      "Supplied by connected Stevens instrument.",
      "Receiver type 4-20 mA: 12.4 to 40 VDC must be supplied by the receiver or a power supply in series with the receiver.",
      "Receiver type 0.2 to 1 VDC: 13.4 to 40.2 VDC must be supplied by a power supply.",
      "Receiver type 1 to 5 VDC: 17.4 to 41 VDC must be supplied by a power supply.",
      "The voltage supplied to the transmitter must be within these ranges, after taking loop circuit resistance into account."
    ]
  },
  "met-one-092-barometric-pressure-sensor": {
    "sourceUrl": "https://stevenswater.com/products/met-one-092/",
    "specs": [
      {
        "label": "Range",
        "value": "600 to 1100 hPa (17.72 to 32.48 inch/hg)"
      },
      {
        "label": "Elevation",
        "value": "Sea level to 10,000 ft. (3048 m)"
      },
      {
        "label": "Resolution",
        "value": "0.1 hPa"
      },
      {
        "label": "Temp. operating range",
        "value": "-40°C to 55°C (-40°F to 131°F)"
      },
      {
        "label": "Temp. compensated range",
        "value": "-40°C to 55°C (-40°F to 131°F)"
      },
      {
        "label": "Accuracy",
        "value": "±0.35 hPa @ 20°C (68°F)"
      },
      {
        "label": "Long Term Stability:",
        "value": "±1.0 hPa (±0.03 in Hg) over full range or ±0.5 hPa over any 200 hPa range ±1.0 hPa in 1 year"
      },
      {
        "label": "Analog output",
        "value": "0-1, 0-2, 0-2.5 or 0-5 VDC (Analog output automatically adjusts from zero to full scale for range selected.)"
      },
      {
        "label": "Digital output",
        "value": "RS-232, RS-485 & SDI-12"
      },
      {
        "label": "Digital protocol",
        "value": "ASCII Terminal Mode RTU for RS-232 and RS-485."
      },
      {
        "label": "Baud rates",
        "value": "1200, 2400, 4800, 9600, & 19.2K"
      },
      {
        "label": "Power requirement",
        "value": "10 mA @ 12 VDC, typical"
      },
      {
        "label": "Power range",
        "value": "6-16 VDC"
      },
      {
        "label": "Weight",
        "value": "8.8 oz. (250 g)"
      },
      {
        "label": "Dimensions",
        "value": "4.72 x 3.14 x 2.16 in (120 x 80 x 55 mm)"
      }
    ],
    "features": [
      "Digital and analog outputs",
      "Permanent calibration; no service required",
      "Customer configured output"
    ]
  },
  "stevens-satcomm": {
    "sourceUrl": "https://stevenswater.com/products/stevens-satcomm/",
    "specs": [
      {
        "label": "Input voltage range",
        "value": "10.5 to 16 VDC"
      },
      {
        "label": "Quiescent",
        "value": "2.0 mA (in CTS trigger mode)"
      },
      {
        "label": "During GPS acquisition",
        "value": "350 mA"
      },
      {
        "label": "300 BPS transmission",
        "value": "2.4 A (3 W max. with V2TH antenna)"
      },
      {
        "label": "1200 BPS transmission",
        "value": "3.5 A (10 W max. with V2TH antenna)"
      },
      {
        "label": "300 BPS transmission",
        "value": "34.77 dBm (3 W max.)"
      },
      {
        "label": "1200 BPS transmission",
        "value": "40.0 dBm (10 W max.)"
      },
      {
        "label": "Computer interface",
        "value": "USB type-B"
      },
      {
        "label": "External logger",
        "value": "DB9-m connector interface"
      },
      {
        "label": "External touchscreen",
        "value": "DB9-f connector interface"
      },
      {
        "label": "DCP command",
        "value": "DB9-f connector interface"
      },
      {
        "label": "LED indicators",
        "value": "Transmit, receive, failsafe, power, GPS lock status, built in self test (BIST)"
      },
      {
        "label": "Transmission timing accuracy",
        "value": "Meets NESDIS specifications"
      },
      {
        "label": "GPS time accuracy",
        "value": "Within 0.01 s (10 ms) UTC"
      },
      {
        "label": "Stevens V2TH",
        "value": "+5.5 dBic gain, RHCP"
      },
      {
        "label": "Stevens V4TH",
        "value": "+10 dBic gain, RHCP"
      },
      {
        "label": "Stevens Yagi",
        "value": "+11 dBic gain, RHCP"
      },
      {
        "label": "Reporting",
        "value": "Self-timed or random reporting"
      },
      {
        "label": "Format",
        "value": "ASCII or pseudo binary"
      },
      {
        "label": "Temperature",
        "value": "-40° F to +149° F (-40° C to +65° C)"
      },
      {
        "label": "Humidity",
        "value": "0 - 95% relative humidity non-condensing"
      },
      {
        "label": "Dimensions (W x L x H)",
        "value": "4.625” x 8.81” x 2.096” (11.75 x 22.38 x 5.32 cm)"
      },
      {
        "label": "Length Including mounting plate",
        "value": "7.169”, face-to-face"
      }
    ],
    "features": [
      "NESDIS CS2/v2.0 certified",
      "Compatible with most 3rd party data loggers",
      "Two data logger input modes:Continuous listen to data logger mode",
      "Trigger mode using CTS “clear to send”, with programmable advance turn-on time",
      "Two-way communication port",
      "Available with integrated data logger (4 analog, 1 pulse and 12 SDI-12 sensor inputs, 1 control output)",
      "VSWR measurement ensures proper antenna connection after installation, and alerts you of potential problems proactively",
      "reduces the overall power consumption by eliminating a high current oven, eliminating the time and need for warm-up",
      "is not vulnerable to breaking due to power cycling",
      "maintains frequency over time without drift",
      "minimizes the risk of station failure due to constant power-cycling, and ensures that transmissions always occurs within assigned timeslot."
    ]
  },
  "stevens-v2th-goes-antenna": {
    "sourceUrl": "https://stevenswater.com/products/v2th-goes-antenna/",
    "specs": [
      {
        "label": "Range",
        "value": "402 Mhz ± 10 MHz"
      },
      {
        "label": "Impedance",
        "value": "50 Ohms"
      },
      {
        "label": "VSWR",
        "value": "1.5:1 max"
      },
      {
        "label": "Polarization",
        "value": "Right Hand Circular"
      },
      {
        "label": "Gain",
        "value": "+5.5 dB Nominal"
      },
      {
        "label": "Power",
        "value": "100W CW"
      },
      {
        "label": "Input Power Range",
        "value": "6 to 25 watts"
      },
      {
        "label": "Permitted EIRP with Input Power",
        "value": "44 to 50 dBm"
      },
      {
        "label": "1 dB",
        "value": "60°"
      },
      {
        "label": "3 dB",
        "value": "90°"
      },
      {
        "label": "6 dB",
        "value": "120°"
      },
      {
        "label": "Axial Radio",
        "value": "1 dB maximum"
      },
      {
        "label": "Connection",
        "value": "N Female"
      },
      {
        "label": "Antenna Weight",
        "value": "5 lbs (2.3 kg)"
      },
      {
        "label": "Base Mount Weight",
        "value": "3.6 lbs (1.6 kg)"
      },
      {
        "label": "Base Diameter x Height x Top Diameter",
        "value": "16\" x 10\" x 7.5\" (41 cm x 26 cm x 19 cm)"
      }
    ],
    "features": [
      "Rugged and durable polycarbonate housing",
      "Versatile and easy to mount",
      "Reliable signal transmission through obstructions",
      "Uniform antenna beam pattern",
      "For geostationary satellite communications on the following networks:GOES",
      "For applications requiring higher-gain directional uplink antennas"
    ]
  },
  "stevens-hydraprobe": {
    "sourceUrl": "https://stevenswater.com/products/hydraprobe/",
    "specs": [
      {
        "label": "Real dielectric permittivity (isolated)",
        "value": "±0.5% or ±0.2 dielectric units*** — 1 to 80 where 1= air, 80= distilled water — 0.001"
      },
      {
        "label": "Soil moisture for inorganic & mineral soil",
        "value": "±0.01 WFV for most soils ±≤0.03 max for fine textured soils* — From completely dry to fully saturated (from 0% to 100% of saturation) — 0.001"
      },
      {
        "label": "Bulk electrical conductivity",
        "value": "±2.0% or 0.05 S/m Max at 0.5 S/m* — 0 to 0.5 S/m — 0.001"
      },
      {
        "label": "Pore Water EC",
        "value": "n/a — must have >0.10 wfv — 0.001"
      },
      {
        "label": "Temperature**",
        "value": "±0.3°C**** — -40°C to 75°C — 0.1°C"
      },
      {
        "label": "Inter-sensor variability",
        "value": "±0.012 WFV (θm3m3) — n/a"
      },
      {
        "label": "SDI-12",
        "value": "RS-485 — Modbus"
      },
      {
        "label": "Power supply",
        "value": "9-16 VDC — 9-16 VDC — 9-16 VDC"
      },
      {
        "label": "Power consumption",
        "value": "1 mA idle / 25 mA active — 25 mA idle / 25 mA active — 2.5 mA idle / 25 mA active"
      },
      {
        "label": "Cable",
        "value": "3-wire: power, ground, data — 4-wire: power, ground, com+, com- — 4-wire: power, ground, A, B"
      },
      {
        "label": "Max. cable length",
        "value": "60m (197ft) — 1,219m (4,000ft) Non-spliced: 304.8m (1,000ft) — 1,219m (4,000ft) Non-spliced: 304.8m (1,000ft)"
      },
      {
        "label": "Baud Rate",
        "value": "1200 — 9600 — 1200-115200. 9600 (default)"
      },
      {
        "label": "Communication protocol",
        "value": "SDI-12 — Custom or open spec — Modbus RTU"
      },
      {
        "label": "Operating Temperature",
        "value": "-40°C to 75°C"
      },
      {
        "label": "Storage Temperature",
        "value": "-40°C to 75°C"
      },
      {
        "label": "Water Resistance",
        "value": "Tolerates continuous full immersion"
      },
      {
        "label": "Cable",
        "value": "18 gauge (20 gauge for RS-485/Modbus), UV resistant, direct burial"
      },
      {
        "label": "Vibration and shock resistance",
        "value": "Excellent; potted components in PVC housing and 304 grade stainless steel tines"
      },
      {
        "label": "Length",
        "value": "4.9\" (124mm)"
      },
      {
        "label": "Diameter",
        "value": "1.6\" (42mm). Optional slim housing version available: 1.4\" (35.8mm)"
      },
      {
        "label": "Weight",
        "value": "7oz (200g). Optional slim housing version available: 6.5oz (184g)"
      },
      {
        "label": "Cable weight",
        "value": "0.86oz/ft (80g/m)"
      },
      {
        "label": "Sensing volume (cylindrical region)",
        "value": "Length: 2.2\" (5.7cm) Diameter: 1.2\" (3.0cm)"
      },
      {
        "label": "56012-02 / 56485-02 / 56585-02",
        "value": "HydraProbe ( Professional ) with 25’ (7.62 m) cable, SDI-12 / RS485 / Modbus"
      },
      {
        "label": "56012-04 / 56485-04 / 56585-04",
        "value": "HydraProbe ( Professional ) with 50’ (15.24 m) of cable, SDI-12 / RS485 / Modbus"
      },
      {
        "label": "56012-06 / 56485-06 / 56585-06",
        "value": "HydraProbe ( Professional ) with 100’ (30.48 m) of cable, SDI-12 / RS485 / Modbus"
      },
      {
        "label": "56000-TST",
        "value": "Temperature Test Certificate"
      },
      {
        "label": "93633-007",
        "value": "HydraGO"
      },
      {
        "label": "93633-500",
        "value": "HydraGO Flex"
      },
      {
        "label": "Title",
        "value": "Main Author — Pub. Date — Jornal Reference — Application"
      },
      {
        "label": "Dielectric Loss and Calibration of the HydraProbe Soil Water Sensor",
        "value": "Seyfried, M. S. — 2005 — Seyfried, M. S., L. E. Grant, E. Du, and K. Humes, Dielectric Loss and Calibration of the HydraProbe Soil Water Sensor — Derivation of the HydraProbe's general soil moisture calibration"
      },
      {
        "label": "Evaluation of Lichtenecker's Mixing Model for Predicting Permittivitty of Soil at 50 MHz",
        "value": "Leao, T. P., E. P. — 2015 — American Society of Agricultural and Biological Engineers, 58 (1), 83-91. doi:10.13031/trans.58.1 0720 — Dielectric Mixing and dielectric permittivity of heterogeneous materials."
      },
      {
        "label": "Soil Moisture for Hydrlogical Applications: Open Questions and New Opportunities",
        "value": "Brocca, L. C. — 2017 — Advances in Hydro-Meteorological Monitoring, Special Issue of Water, 9 (140). doi:10.3390/w9020140 — Soil moisture and its effect on climate, drought and regional weather."
      },
      {
        "label": "Climate Models Predict Increasing Temperature Variability in Poor Countries",
        "value": "Bathiany, S. V. — 2018 — Science Advances, 4(5). doi:10.1126/sciadv.aar5809 — Using soil moisture measurements to make improved climate models."
      },
      {
        "label": "Incorporating Antecedent Soil Moisture into Streamflow Forecasting",
        "value": "Abdoul Oubeidillah — 2019 — Hydrology 2019, 6(2), 50 — Monitoring soil moisture to improve streamflow predictions."
      },
      {
        "label": "Synthetic Aperture Radar (SAR) Compact Polarimetry for Soil Moisture Retrieval",
        "value": "Amine Merzouki, Heather McNairn — 2019 — Remote Sens. 2019, 11, 2227 — Examining whether Compact Polarimetry can accurately estimate surface soil moisture over bare fields."
      }
    ],
    "features": [
      "Stable—no sensor drift, ensuring continual accuracy.",
      "Patented technology that accurately measures moisture and electrical conductivity permits more accurate optimization of watering and fertilization than with just moisture.",
      "Depended on by the USDA, NOAA, leading irrigation companies, and many universities for over 20 years. Used by NASA for ground truthing of satellite-based soil imaging.",
      "Soil moisture calibration has been rigorously peer-reviewed, making it one of the most trusted soil sensors available.",
      "Unparalleled spatial and temporal measurement consistency. No sensor-to-sensor variations across locations, seasons, soil types or moisture range.",
      "Instant measurement of the 3 most significant soil parameters simultaneously—moisture, salinity and temperature.",
      "Unlike most TDR or capacitance-based sensors, HydraProbe is less sensitive to changes in temperature, salinity, and soil mineralogy.",
      "Repeatable accuracy and stability without the need for calibration in most soils.",
      "Digital sensor using the SDI-12 protocol—no setup, just connect to data logger. Compatible with any SDI-12 capable data logger.",
      "Zero maintenance required.",
      "Can remain in-situ indefinitely, or relocated and redeployed without worry.",
      "Ideal for remote locations, harsh environments and applications where data is critical.",
      "Enables measurement of native (undisturbed) soil, even hard-packed clay.",
      "Industry-leading 5-year warranty.",
      "Electrical Conductivity (EC)",
      "5 standard soil calibrations",
      "Custom calibrations can be programed into the sensor",
      "Operating temperature: 40°C to 75°C"
    ]
  },
  "sage-professional-soil-moisture-meter": {
    "sourceUrl": "https://stevenswater.com/products/sage/",
    "specs": [],
    "features": [
      "The waterproof display can stay outside for years",
      "No calibration is required",
      "Simple to use and easy to install in minutes",
      "Farm or garden crops, outdoor and indoor plants",
      "Only two (2) AA batteries for power",
      "Standard and customized moisture level guide",
      "Use a any length ¾” PVC pipe. Enable visual reference well above the crop height",
      "Perfect for rapid soil moisture indication in farm or garden crops, outdoor and indoor plants",
      "0-200 KPa gypsum block sensor",
      "Test Plug to verify all seven coins are activated before installation",
      "Visual display with seven (7) flip coins",
      "¾ inch PVC pipe (not included) ~8 inches (20 cm) to ~120 inches (300 cm). Contact Stevens for shorter or longer length requirements."
    ]
  },
  "etracker": {
    "sourceUrl": "https://stevenswater.com/products/etracker/",
    "specs": [
      {
        "label": "Data Storage",
        "value": "Removable 2 GB SD memory card (FAT 32)"
      },
      {
        "label": "Logging interval",
        "value": "1 second to 12 hours (sensor dependent)"
      },
      {
        "label": "Reporting interval",
        "value": "2 minutes to 12 hours"
      },
      {
        "label": "Cellular antenna",
        "value": "External SMA"
      },
      {
        "label": "Cellular communications",
        "value": "80060-70B1 ( 4G LTE )LTE bands 700 (B17), 850 (B5), 1700 (B4), 1900 (B2) MHzGSM Quad band 700, 850, 1700, 1900 MHzUMTS/HSPA+ band 850 (B5), 1900 (B2) MHzGSM | GPRS | EDGE bands 850, 1900 MHz"
      },
      {
        "label": "Input voltage",
        "value": "10 to 18 VDC (reverse polarity protection)"
      },
      {
        "label": "Analog input",
        "value": "Up to 4 analog channels, single-ended Input type: 2 wire, 0 –2.5 V or4 - 20 mA current loop (accessible DIP switch) Sensor power: 24 VDC switched (under firmware control) Analog to digital (0-2.5 VDC): 21-bit resolution"
      },
      {
        "label": "Pulse input",
        "value": "Up to 4 channels1 Continuity or TTL: 0 V to 2.2 V - 5 V Maximum rate: 10 pulses per second"
      },
      {
        "label": "SDI-12 Input",
        "value": "Number of sensors: up to 62 sensors Sensor power: 12 VDC switched, during measurement"
      },
      {
        "label": "Operating temperature",
        "value": "-30°C to 60°C (-22°F to 140°F)."
      },
      {
        "label": "Storage temperature",
        "value": "-40°C to 85°C (SIM Card selection may limit this range for GSM version)"
      },
      {
        "label": "Lightning protection",
        "value": "AC transient voltage suppressor (TVS) on each sensor port input"
      },
      {
        "label": "Dimensions (H x L x W)",
        "value": "1 3/8” (3.5 cm) x 5 1/8” (13 cm) x 3 3/4” (9.7 cm)"
      },
      {
        "label": "Weight",
        "value": "10.78 oz (305.6 g)"
      },
      {
        "label": "Cellular antenna",
        "value": "SMA"
      },
      {
        "label": "Sensor module interface",
        "value": "30-pin connector"
      }
    ],
    "features": [
      "Direct Internet compliant data stream using HTTP.",
      "Sensor measurements stored on easily-accessible SD card.",
      "Cloud logging: all sensor data is forwarded to the cloud for processing, logging, retrieval and resulting action.",
      "Optional sensor interface with ports: 4 analog, 4 pulse, SDI-12 (up to 62 SDI-12 sensors).",
      "Intelligent data management, data buffering, and network verification to ensure successful transmission of critical data.",
      "Link sensors to the cloud: Sensor data is linked directly to the cloud-based Amazon service via the cellular network using HTTP.",
      "Unified data interface experience: Sensor configuration, data storage, custom algebraic equations, custom data formats and forwarding, control, analysis, alarm notifications (email, SMS), reporting and actions all done with one simple cloud-based user interface.",
      "Easy configuration: Configure with any device connected to the Internet via the cloud-based SkyView360. No custom programming or scripts required.",
      "Security: Three user access levels for configuration, data management interface and visualization. Data is saved on SD card and in highly secure data centers.",
      "Connection verification: eTracker verifies connection with cell network and server connection before data is sent. If no connection is available or if data reception is not confirmed, data is saved and sent the next scheduled transmission.",
      "True cloud data service experience: Your data is sent directly and securely to the Amazon cloud- based service. No back-end database hosting or web server controlled by Stevens in which data flow takes a detour to the cloud.",
      "Data format flexibility: Optionally forward data in various formats for third party software platforms.",
      "Power control: Power cycle commands automatically initiated with the Stevens’ SOLO power management system.",
      "Direct data access options: Third-party programs can access data using REST API or HTTP post.",
      "80060-70B1 ( 4G LTE )LTE bands 700 (B17), 850 (B5), 1700 (B4), 1900 (B2) MHz",
      "GSM Quad band 700, 850, 1700, 1900 MHz",
      "UMTS/HSPA+ band 850 (B5), 1900 (B2) MHz",
      "GSM | GPRS | EDGE bands 850, 1900 MHz"
    ]
  },
  "hydraprobe-pogo-mini-request-quote": {
    "sourceUrl": "https://stevenswater.com/products/hydrago/",
    "specs": [
      {
        "label": "HydraGO Models",
        "value": "HydraGO — HydrdaGO Flex"
      },
      {
        "label": "Configuration",
        "value": "Sensor on a Shaft — Sensor on a detachable Cable"
      },
      {
        "label": "GPS",
        "value": "Phone GPS — Internal GPS, +/- 2 meters"
      },
      {
        "label": "Wireless Protocol",
        "value": "Bluetooth — Bluetooth"
      },
      {
        "label": "App (Android or iOS)",
        "value": "HydraGO — HydraGO"
      },
      {
        "label": "Battery Type",
        "value": "Rechargeable Lithium Ion battery, 3.7 V / 10500 mAh — Rechargeable Lithium Ion battery, 3.7 V / 10500 mAh"
      },
      {
        "label": "Housing",
        "value": "Delrin — Delrin"
      },
      {
        "label": "Weight",
        "value": "3.28lbs (1.49kg) with 4 segments — 1.88lbs ( 0.85 kg )"
      },
      {
        "label": "Dimensions",
        "value": "Body: 9.75” L x 3.5” W x 2.5” D (24.8cm L x 8.9cm W x 6.4cm D)Segment: 5.5” long (14cm) — Body: 4.5” L x 2.75” W x 2.25” D (11.4cm L x7.0 cm W x 5.7 cm D)"
      },
      {
        "label": "Part Numbers",
        "value": "93633-007: Complete unit with 4 segments and 1 knob. 93633-175: Knob 93633-176: Segment — 93633-500: Complete unit with one HydraProbe Flex Sensor. 93633-501: Standalone HydraProbe Flex Sensor."
      },
      {
        "label": "Soil probe",
        "value": "Stevens HydraProbe (ratiometric dielectric coaxial impedance)"
      },
      {
        "label": "Parameters measured",
        "value": "Soil moisture, temperature, bulk electrical conductivity, Porewater EC, dielectric permittivities"
      },
      {
        "label": "Pore Water EC method",
        "value": "Hilhorst Equation"
      },
      {
        "label": "Moisture",
        "value": "Range: From completely dry to fully saturated (from 0% to 100% of saturation) Accuracy: ± 0.01 WFV for most soils, ± ≤0.03 max for fine textured soils*"
      },
      {
        "label": "Bulk electrical conductivity",
        "value": "Range: 0 to 1 S/m (or 0 to 10 dS/m)** Bulk EC Accuracy for 0 to 5 dS/m: ± 2.0% or 0.2 S/m whichever is typically higher* Bulk EC Accuracy for 5 to 10 dS/m: ± 20% or 2.0 S/m whichever is typically higher*"
      },
      {
        "label": "Real dielectric permittivity (isolated)",
        "value": "Range: 1 to 80 where 1 = air, 80 = distilled water Accuracy: ± 0.5% or ± 0.6 dielectric units"
      },
      {
        "label": "Operating temperature",
        "value": "14°F to 149°F (-10°C to +65°C), Accuracy: ± 0.3° C"
      },
      {
        "label": "Soil tine assembly",
        "value": "Hardened Marine grade stainless steel"
      },
      {
        "label": "Tine dimensions",
        "value": "6 cm long. Measurement volume is 50 to 75 cubic cm"
      },
      {
        "label": "Calibration",
        "value": "Seyfried Equation default for most soils with peat/organic and custom calibration options"
      }
    ],
    "features": []
  }
}

export const specsForHandle = (handle) => PRODUCT_SPECS[handle] || null
