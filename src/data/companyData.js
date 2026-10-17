export const COMPANY_INFO = {
  name: "Smart Hi-Tech Engg.",
  legalName: "SMART HITECH ENGINEERING",
  tagline: "Developing Skills • Precision Heavy Engineering & Fabrication",
  established: 2012,
  founder: "R. Natarajan",
  proprietor: "N. Damodharan",
  address: {
    line1: "#16, Vasanth Industrial Estate",
    line2: "Indra Nagar, Chinnavedampatti",
    city: "Coimbatore",
    pincode: "641 049",
    state: "Tamil Nadu",
    country: "India",
    full: "#16, Vasanth Industrial Estate, Indra Nagar, Chinnavedampatti, Coimbatore – 641 049.",
    mapQuery: "Vasanth Industrial Estate, Chinnavedampatti, Coimbatore, Tamil Nadu 641049"
  },
  phones: [
    { number: "9600846838", formatted: "+91 96008 46838", isPrimary: true, name: "N. Damodharan" },
    { number: "9362848866", formatted: "+91 93628 48866", isPrimary: false, name: "Workshop / Office" }
  ],
  whatsappNumber: "919600846838",
  theme: {
    primary: "#0b4db7",
    secondary: "#1e293b",
    metallic: "#64748b",
    light: "#f8fafc",
    accent: "#0284c7"
  }
};

export const CORE_METRICS = [
  {
    value: "140 – 3,000",
    unit: "mm",
    label: "Dish Head Diameter Range",
    sub: "Custom Torispherical & Ellipsoidal"
  },
  {
    value: "3 – 32",
    unit: "mm",
    label: "Dish Forming Thickness",
    sub: "Heavy-duty press & spinning"
  },
  {
    value: "1\" – 4\"",
    unit: "inch",
    label: "Pipe Bending Capacity",
    sub: "Mandrel & hydraulic cold bending"
  },
  {
    value: "12+",
    unit: "Years",
    label: "Engineering Excellence",
    sub: "Estd. 2012 by R. Natarajan"
  }
];

export const PRODUCTS_SERVICES = [
  {
    id: "dish-head",
    title: "Dish Head / Dished Head",
    shortDesc: "Precision cold & hot formed dished ends for pressure vessels, autoclaves, and boilers.",
    specs: [
      { label: "Diameter Range", value: "140 mm – 3,000 mm" },
      { label: "Thickness Range", value: "3 mm – 32 mm" },
      { label: "Types Available", value: "Torispherical, 2:1 Ellipsoidal, Hemispherical, Shallow Dish, Flat Flanged" },
      { label: "Standard Materials", value: "IS 2062 Gr.B, SA 516 Gr.60/70, SS 304, SS 316, Carbon Steel" }
    ],
    features: [
      "Smooth crown radius and knuckled radius precision",
      "Hydraulic press forming and flanging with minimal thinning",
      "Beveling and edge preparation for seamless circumferential welding",
      "Ultrasonic tested materials for high-pressure boilers and vessels"
    ],
    image: "/images/product_dish_head.jpeg",
    badge: "Specialized Capacity"
  },
  {
    id: "filter-vessels",
    title: "Sand Filter & Carbon Filter Vessels",
    shortDesc: "Complete industrial pressure filter vessels engineered for water treatment, effluent plants, and RO pre-treatment.",
    specs: [
      { label: "Vessel Types", value: "Pressure Sand Filters (PSF) & Activated Carbon Filters (ACF)" },
      { label: "Build Material", value: "Heavy Mild Steel / Stainless Steel with internal rubber/epoxy lining" },
      { label: "Standard Fittings", value: "Top manhole, hand hole, flanged nozzles, lateral distribution collection system" },
      { label: "Finish", value: "High-grade industrial zinc chromate primer and polyurethane exterior coating" }
    ],
    features: [
      "Custom skid-mounted or stand-alone dual vessel assemblies",
      "Includes interconnecting frontal piping, valves, and multi-port options",
      "Hydrostatically tested up to 1.5x working pressure",
      "Rugged structural tripod / skirt leg support as shown in workshop photos"
    ],
    image: "/images/product_filter_vessels.jpeg",
    secondaryImage: "/images/product_filter_vessels_secondary.jpeg",
    badge: "In-House Fabricated"
  },
  {
    id: "sheet-rolling",
    title: "Sheet & Plate Rolling",
    shortDesc: "Heavy plate rolling cylinders, cones, and shells with accurate roundness and tight tolerance.",
    specs: [
      { label: "Thickness Range", value: "3 mm – 8 mm (Plate Rolling)" },
      { label: "Width Capacity", value: "Up to 2,500 mm width" },
      { label: "Geometry", value: "Full cylinders, semi-cylinders, truncated cones" },
      { label: "Applications", value: "Pressure vessel shells, storage tanks, ducting, chimney stacks" }
    ],
    features: [
      "Precision 3-roll hydraulic plate bending machine",
      "Pre-pinching edge bending to minimize flat ends",
      "Uniform curvature without distortion or surface gouging",
      "Fast turnaround for serial manufacturing and urgent job work"
    ],
    image: "/images/product_sheet_rolling.jpeg",
    badge: "3mm – 8mm Range"
  },
  {
    id: "pipe-bending",
    title: "Pipe Bending Works",
    shortDesc: "Hydraulic cold pipe bending for structural, fluid transmission, and industrial machinery.",
    specs: [
      { label: "Pipe Size Range", value: "1 inch (25 mm) to 4 inch (100 mm) NB" },
      { label: "Bending Angle", value: "0° to 180° smooth bends" },
      { label: "Materials", value: "MS, GI, Seamless Steel, Stainless Steel" },
      { label: "Wall Thickness", value: "Schedule 10, Schedule 40, Schedule 80" }
    ],
    features: [
      "Wrinkle-free cold bending with minimal ovality",
      "Standard and custom center-line radius (CLR) tooling",
      "Ideal for heating coils, exhaust loops, handrails, and industrial pipelines",
      "CNC / hydraulic precision repeat bends"
    ],
    image: "/images/product_pipe_bending.jpeg",
    badge: "1\" to 4\" OD"
  },
  {
    id: "rolling-works",
    title: "Structural Section Rolling Works",
    shortDesc: "Multi-profile section rolling for architectural, structural, and industrial steel rings and arches.",
    specs: [
      { label: "L-Angle Rolling", value: "Leg-in and Leg-out circular rings & segments" },
      { label: "I-Beam Rolling", value: "Easy-way and Hard-way curved beams for arches & tracks" },
      { label: "C-Channel Rolling", value: "Flanges-in, Flanges-out, and web-vertical curving" },
      { label: "MS Flat Rolling", value: "Flat-way rings & Hard-way (on-edge) circular flanges" }
    ],
    features: [
      "Specialized profile roll tooling preventing flange buckling",
      "Accurate radius checking with calibrated templates",
      "Full 360° welded rings with machining allowances",
      "Bulk capacity for construction, cranes, circular silos, and machinery"
    ],
    image: "/images/product_section_rolling.jpeg",
    badge: "All Profiles"
  },
  {
    id: "general-fabrication",
    title: "All Kinds of Heavy Fabrication Work",
    shortDesc: "Turnkey industrial metal fabrication, customized steel structures, and machinery bases.",
    specs: [
      { label: "Fabrication Scope", value: "Storage tanks, machine beds, chimneys, structural frames" },
      { label: "Welding Standards", value: "MIG / SMAW / TIG qualified welding procedures" },
      { label: "Capacity", value: "Components from 50 kg to 15+ Tonnes" },
      { label: "Inspection", value: "Dimensional check, DP test, Hydro test, Radiography coordinate" }
    ],
    features: [
      "Complete assembly from customer blueprints or 3D models",
      "In-house drilling, gas cutting, plasma cutting, and fit-up",
      "Protective surface coatings: primer, red oxide, epoxy, polyurethane",
      "Over 12 years of proven reliability in Coimbatore's engineering corridor"
    ],
    image: "/images/product_heavy_fabrication.jpeg",
    badge: "Custom Engineering"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "Dual Sand & Carbon Filter Pressure Vessels with Frontal Manifold",
    category: "Filter Vessels",
    image: "/images/gallery_filter_01.jpeg",
    desc: "In-house fabricated twin yellow filter vessels with complete interconnecting piping, valves, bolted flanges, and tripod leg supports."
  },
  {
    id: "g2",
    title: "Dual Horizontal Pressure Filter Vessels with Nozzles",
    category: "Filter Vessels",
    image: "/images/gallery_filter_02.jpeg",
    desc: "Pair of horizontal coated pressure filter vessels with flanged inspection nozzles, end dished heads, and heavy support feet."
  },
  {
    id: "g3",
    title: "Industrial Filter Vessel Side Shell & Bolted Handhole Assembly",
    category: "Filter Vessels",
    image: "/images/gallery_filter_03.jpeg",
    desc: "Detailed view of the bolted manhole cover, lateral connections, and durable industrial finish engineered for water treatment systems."
  },
  {
    id: "g4",
    title: "Vertical Air Receiver & Pressure Storage Vessel",
    category: "Filter Vessels",
    image: "/images/gallery_filter_04.jpeg",
    desc: "Vertical cylindrical pressure receiver finished in high-grade coating with formed dished bottom head and tripod mountings."
  },
  {
    id: "g5",
    title: "Precision Spun Dished Head with Calibrated Inspection Markings",
    category: "Dish Heads",
    image: "/images/gallery_dish_01.jpeg",
    desc: "Deep bowl dished head formed to exact dimensional radius with inspection graduation marks inside the workshop."
  },
  {
    id: "g6",
    title: "Clean Stack of Formed Dish Ends with Beveled Edges",
    category: "Dish Heads",
    image: "/images/gallery_dish_02.jpeg",
    desc: "Torispherical dished heads showing consistent crown and knuckle contour with smooth edge preparation for circumferential welding."
  },
  {
    id: "g7",
    title: "High-Capacity Dished Heads Array in Workshop Yard",
    category: "Dish Heads",
    image: "/images/gallery_dish_03.jpeg",
    desc: "Multiple dish heads in various diameters and plate thicknesses ready for boiler and pressure vessel manufacturing."
  },
  {
    id: "g8",
    title: "Heavy Tonnage Dished End Prepared for Customer Logistics",
    category: "Dish Heads",
    image: "/images/gallery_dish_04.jpeg",
    desc: "Extra-large diameter dished end safely secured on heavy transport vehicle outside Smart Hi-Tech workshop facility."
  },
  {
    id: "g9",
    title: "Workshop Plate Rolling Operation on 3-Roll Machine",
    category: "Sheet Rolling",
    image: "/images/gallery_rolling_01.jpeg",
    desc: "Experienced technicians operating the 3-roller plate bending machine to form wide steel plates with accurate radius control."
  },
  {
    id: "g10",
    title: "Large-Diameter Cylindrical Shell Bending",
    category: "Sheet Rolling",
    image: "/images/gallery_rolling_02.jpeg",
    desc: "Heavy plate rolling of full-round cylindrical shells for storage tanks and pressure vessel body sections."
  },
  {
    id: "g11",
    title: "Sheet Rolled Stainless Steel Cones & Reducers",
    category: "Sheet Rolling",
    image: "/images/gallery_rolling_03.jpeg",
    desc: "Precision cold formed truncated conical reducers and hoppers with tight longitudinal seams."
  },
  {
    id: "g12",
    title: "Heavy Gauge Plate Curving in 3-Roll Cold Roller",
    category: "Sheet Rolling",
    image: "/images/gallery_rolling_04.jpeg",
    desc: "Night-shift plate bending operation delivering uniform curvature without flat edges or surface gouging."
  },
  {
    id: "g13",
    title: "Precision Rolled Circular Steel Rings & Flanges",
    category: "Rolling Works",
    image: "/images/gallery_section_01.jpeg",
    desc: "Uniformly rolled steel rings and circular flanges formed with zero twist for industrial machinery and vessel mounts."
  },
  {
    id: "g14",
    title: "Heavy Flat Bar & Structural Section Curving",
    category: "Rolling Works",
    image: "/images/gallery_section_02.jpeg",
    desc: "Structural flat and angle curving on dedicated section roll tooling preventing inner flange distortion."
  },
  {
    id: "g15",
    title: "Curved Structural Steel Bars for Machinery Frames",
    category: "Rolling Works",
    image: "/images/gallery_section_03.jpeg",
    desc: "Heavy-duty curved square and rectangular structural profiles calibrated to exact template radii."
  },
  {
    id: "g16",
    title: "Heavy Industrial Autoclave & Pressure Vessel Hoisting",
    category: "Fabrication",
    image: "/images/gallery_fab_01.jpeg",
    desc: "Massive dual dished end pressure vessel equipped with multiple heavy duty flanged nozzles being hoisted in the fabrication yard."
  },
  {
    id: "g17",
    title: "Large Industrial Storage Shell Longitudinal Seam Welding",
    category: "Fabrication",
    image: "/images/gallery_fab_02.jpeg",
    desc: "Certified welders performing high-penetration seam welding on full-length cylindrical vessel shells inside the workshop."
  },
  {
    id: "g18",
    title: "ACE Mobile Crane Erection & Heavy Vessel Handling",
    category: "Fabrication",
    image: "/images/gallery_fab_03.jpeg",
    desc: "Rigging and crane mobilization for heavy industrial equipment handling and positioning at the Chinnavedampatti plant."
  },
  {
    id: "g19",
    title: "Custom Stiffened Industrial Tank Transport Rigging",
    category: "Fabrication",
    image: "/images/gallery_fab_04.jpeg",
    desc: "Turnkey fabricated rectangular and U-shaped industrial tanks with heavy structural stiffening beams loaded for dispatch."
  }
];

export const TECHNICAL_SPECS_TABLE = [
  { item: "Dished Head Diameter", min: "140 mm", max: "3,000 mm", tolerance: "± 2 mm to ± 5 mm", materials: "IS 2062, SA 516 Gr.70, SS304/316" },
  { item: "Dished Head Thickness", min: "3 mm", max: "32 mm", tolerance: "Standard mill tolerance", materials: "Carbon Steel, Boiler Quality, Stainless" },
  { item: "Sheet / Plate Rolling Thickness", min: "3 mm", max: "8 mm", tolerance: "Cylindrical roundness < 0.5%", materials: "Mild Steel, Stainless Steel" },
  { item: "Pipe Bending Diameter", min: "1 inch (25 mm)", max: "4 inch (100 mm)", tolerance: "± 1° bend angle", materials: "MS, GI, Seamless, SS" },
  { item: "L-Angle Section Rolling", min: "25 x 25 x 3 mm", max: "100 x 100 x 12 mm", tolerance: "Leg-in / Leg-out custom radii", materials: "Structural Steel" },
  { item: "I-Beam Section Rolling", min: "ISMB 75", max: "ISMB 200", tolerance: "True radius curvature", materials: "IS 2062 Structural Steel" },
  { item: "C-Channel Section Rolling", min: "ISMC 75", max: "ISMC 200", tolerance: "Web & flange aligned", materials: "Structural Mild Steel" },
  { item: "MS Flat Rolling", min: "25 x 5 mm", max: "150 x 25 mm", tolerance: "Flat-way & On-edge rings", materials: "Commercial & Tested Flats" }
];
