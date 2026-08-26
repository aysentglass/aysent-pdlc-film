// Shared site data for AYSENT SMART FILM B2B website

export const BRAND = {
  name: "AYSENT SMART FILM",
  tagline: "Privacy on Demand, Quality from the Source Factory",
  email: "aaronliu@aysentglass.com",
  whatsapp: "+86-15163206207",
  phone: "+86-15163206207",
  wechat: "008615163206207",   // 改成你的真实微信号
  address:
    "Headquarters Building of Huantou Center, No. 1728, Shanguo South Road, Jinghe Sub-district, Tengzhou City, Zaozhuang City, Shandong Province， China",
  workingHours: "Monday – Saturday, 8:30 – 18:30 (GMT+8)",
  responsePromise: "We respond to every inquiry within 24 hours.",
};

export interface Product {
  slug: string;
  name: string;
  short: string;
  overview: string;
  imageAlt: string;
  imageSize: string;
  image: string;
  bandImage?: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  features: string[];
  applications: string[];
  faq?: { question: string; answer: string }[];
}

export const PRODUCTS: Product[] = [
  {
    slug: "pdlc-smart-film",
    name: "PDLC Smart Film",
    short:
      "Roll-form PDLC smart glass film that switches from frosted to transparent in 0.1 seconds — ideal for lamination and large-scale projects.",
    overview:
      "Our PDLC (Polymer Dispersed Liquid Crystal) smart film is the core product of AYSENT SMART FILM. When powered on, liquid crystal molecules align to make the film instantly transparent; when powered off, the film turns frosted for complete privacy. Supplied in roll form for glass laminators, fabricators and project contractors worldwide.",
    image: "/images/product-pdlc.webp",
    bandImage: "/images/band-switch.webp",
    imageAlt: "PDLC smart film roll switching between transparent and frosted states",
    imageSize: "1200×800",
    highlights: [
      "Transmittance up to 92% (ON, T7 grade)",
      "165° ultra-wide viewing angle",
      "Only 3.2 W/㎡/h power consumption",
      "Custom widths up to 1,800 mm (2,100 mm ultra-wide)",
    ],
    specs: [
      { label: "Transmittance (ON / OFF)", value: "T7: 89.5–92% / ≤ 5% (parallel light)" },
      { label: "Haze (ON / OFF)", value: "< 2% / up to 100%" },
      { label: "Viewing Angle", value: "165° (T7/T9), 145° (T6)" },
      { label: "Power Consumption", value: "3.2 W/㎡/h (32% more efficient than average)" },
      { label: "Operating Voltage", value: "AC 48V – 65V (nominal 60V)" },
      { label: "Film Thickness", value: "0.38 mm (five-layer structure)" },
      { label: "Max Width", value: "1,800 mm standard / 2,100 mm ultra-wide" },
      { label: "Switching Speed", value: "≤ 0.1 s" },
      { label: "Working Temperature", value: "-30°C ~ 90°C (tested)" },
      { label: "UV / IR Blocking", value: "99% UV / 68–75% IR" },
      { label: "Surface Hardness", value: "2.5H+" },
      { label: "Lifespan", value: "15+ years (lab tested), ~100,000 hours" },
      { label: "Warranty", value: "5-year global warranty" },
    ],
    features: [
      "Instant privacy: switches between transparent and frosted in ≤0.1 seconds via wall switch, remote, WiFi app or smart home system.",
      "High clarity: T7 grade delivers up to 92% parallel-light transmittance with <2% ON-state haze and a 165° ultra-wide viewing angle.",
      "Energy efficient: only 3.2 W/㎡/h — 32% more efficient than the industry average of ~5 W/㎡/h.",
      "UV & IR blocking: blocks 99% of UV rays and 68–75% of infrared heat for interior comfort and energy savings.",
      "Rear-projection ready: in the frosted state the film doubles as a high-quality rear-projection screen.",
      "Roll supply & custom sizes: standard widths up to 1,800 mm, ultra-wide 2,100 mm available, cut-to-size service for project orders.",
      "Wide temperature tolerance: operates reliably from -30°C to 90°C, far beyond the typical -20°C to 70°C industry range.",
      "Imported Mitsubishi PET substrate: anti-yellowing, stable liquid-crystal formula for 15+ year service life.",
    ],
    applications: [
      "Office partitions and conference rooms",
      "Hotel bathrooms and guest-room privacy",
      "Villa windows, doors and skylights",
      "Hospital wards and clinic partitions",
      "Retail storefronts and projection displays",
    ],
    faq: [
      { question: "What is PDLC smart film used for?", answer: "PDLC smart film is used to create switchable privacy glass. It can be laminated between glass sheets (for new construction) or applied as self-adhesive film (for retrofits). Common applications include office partitions, hotel bathrooms, residential windows, retail displays, and projection screens." },
      { question: "How does PDLC smart film switch between transparent and frosted?", answer: "When voltage is applied (ON), liquid crystal molecules align and light passes through, making the film transparent. When power is off (OFF), crystals are randomly oriented and scatter light, making the film frosted. Switching takes less than 0.1 seconds." },
      { question: "What voltage does PDLC smart film require?", answer: "Standard PDLC film operates on low-voltage AC: 48V to 65V, with a nominal 60V. A transformer converts mains power (110V/220V) to the required voltage. Low voltage means the system is safe and energy efficient." },
      { question: "What is the maximum width of PDLC smart film?", answer: "AYSENT SMART FILM produces standard roll widths up to 1,800 mm, with ultra-wide 2,100 mm available for special projects. Wider panels can be created using invisible seaming technology, where two panels are joined with a nearly undetectable seam." },
      { question: "How long does PDLC smart film last?", answer: "AYSENT PDLC smart film is rated for 15+ years of service life based on laboratory aging testing (~100,000 operating hours). At 10 hours per day, that is over 27 years. We back this with a 5-year global warranty covering manufacturing defects, delamination and switching failure — far longer than the industry average of 2 years." },
      { question: "Can PDLC smart film be used outdoors?", answer: "PDLC film must be fully laminated between tempered glass for exterior use. The laminated structure protects the film from moisture and UV. Self-adhesive film is designed for interior applications only; outdoor exposure without proper lamination voids the warranty." },
    ],
  },
  {
    slug: "self-adhesive-smart-film",
    name: "Self-Adhesive Smart Film",
    short:
      "Peel-and-stick switchable privacy film that retrofits directly onto existing glass — no glass replacement needed.",
    overview:
      "The self-adhesive smart film adds a high-tack adhesive backing to our PDLC film, allowing it to be applied directly onto existing glass surfaces. It is the fastest and most cost-effective way to upgrade windows, partitions and doors into switchable privacy glass — perfect for renovation and retrofit projects.",
    image: "/images/product-adhesive.webp",
    bandImage: "/images/band-project.webp",
    imageAlt: "Self-adhesive switchable privacy film applied to existing office glass",
    imageSize: "1200×800",
    highlights: [
      "Retrofit on existing glass",
      "Peel-and-stick installation",
      "No glass replacement cost",
      "Ideal for renovation projects",
    ],
    specs: [
      { label: "Structure", value: "PDLC film + AB adhesive layer + release liner" },
      { label: "Transmittance (ON / OFF)", value: "T7: 89.5–92% / ≤ 5% (parallel light)" },
      { label: "Haze (ON / OFF)", value: "< 2% / up to 100%" },
      { label: "Viewing Angle", value: "165° (T7/T9)" },
      { label: "Power Consumption", value: "3.2 W/㎡/h" },
      { label: "Operating Voltage", value: "AC 48V – 65V (nominal 60V)" },
      { label: "Total Thickness", value: "≈ 0.47 mm" },
      { label: "Max Width", value: "1,800 mm standard / 2,100 mm ultra-wide" },
      { label: "Adhesive Type", value: "Optical-grade pressure-sensitive AB adhesive" },
      { label: "Working Temperature", value: "-30°C ~ 90°C (tested)" },
      { label: "UV / IR Blocking", value: "99% UV / 68–75% IR" },
      { label: "Lifespan", value: "15+ years (lab tested)" },
      { label: "Warranty", value: "5-year global warranty" },
    ],
    features: [
      "Retrofit solution: upgrades existing glass to switchable privacy glass without replacing the glazing — saving up to 60% versus smart glass replacement.",
      "Easy installation: peel off the release liner and apply to clean glass; full video guidance and tool kits are provided.",
      "Clean edges: laser-cut precision and slim bus-bar design for a professional finish.",
      "Removable options available for rental spaces and temporary installations.",
      "Same optical performance as laminated PDLC film with instant ON/OFF switching.",
      "Compatible with remote controls, wall switches and smart-home integration.",
    ],
    applications: [
      "Office renovation and partition upgrades",
      "Hotel bathroom glass retrofit",
      "Residential windows and glass doors",
      "Meeting rooms and executive offices",
      "Bank counters and reception areas",
    ],
    faq: [
      { question: "Can self-adhesive smart film be applied to existing glass?", answer: "Yes. Self-adhesive PDLC film is designed specifically for retrofit applications. It peels and sticks directly onto existing smooth glass, with no need to replace windows or partitions. This makes it ideal for renovation projects." },
      { question: "How long does self-adhesive film installation take?", answer: "A trained installer can complete a typical office partition (2-3 m²) in under an hour. A full meeting room takes half a day. DIY installation is possible for small panes but professional installation is recommended for best results." },
      { question: "Will self-adhesive film damage the glass when removed?", answer: "No. The film can be removed by heating the edges with a heat gun and slowly peeling it off. Any adhesive residue cleans away with glass cleaner. The glass underneath is undamaged and reusable." },
      { question: "Can self-adhesive film be used in bathrooms?", answer: "Yes, but all edges must be properly sealed with silicone sealant to prevent moisture intrusion. For shower enclosures and constantly wet areas, we recommend laminated switchable glass for maximum durability." },
      { question: "What is the maximum width of self-adhesive film?", answer: "Self-adhesive PDLC film is available in widths up to 1,800 mm standard, with ultra-wide 2,100 mm available for special projects. Wider glass panels can be covered using invisible seaming, where two film panels are joined with a nearly undetectable seam." },
      { question: "Does self-adhesive film require professional installation?", answer: "For small panes under 1 m², a confident DIYer with window-tinting experience can install it. For larger panels, curved glass, or any project requiring electrical wiring, professional installation is strongly recommended." },
    ],
  },
  {
    slug: "switchable-laminated-glass",
    name: "Switchable Laminated Glass",
    short:
      "Ready-to-install smart glass panels: PDLC film laminated between safety glass for facades, partitions and curtain walls.",
    overview:
      "Switchable laminated glass integrates our PDLC smart film between two sheets of tempered or float glass using EVA/PVB lamination. The result is a factory-finished, safety-rated smart glass panel that arrives ready to install — ideal for curtain walls, partitions, doors and skylights in commercial and residential projects.",
    image: "/images/product-laminated.webp",
    bandImage: "/images/app-mall.webp",
    imageAlt: "Switchable laminated smart glass panel for office curtain wall",
    imageSize: "1200×800",
    highlights: [
      "Ready-to-install panels",
      "Safety-rated laminated glass",
      "Facade & curtain wall grade",
      "Custom sizes and shapes",
    ],
    specs: [
      { label: "Glass Configuration", value: "5+5 mm / 6+6 mm / 8+8 mm (customizable)" },
      { label: "Glass Types", value: "Tempered / ultra-clear / tinted / Low-E" },
      { label: "Interlayer", value: "PDLC film + EVA (PVB optional, EVA recommended)" },
      { label: "Transmittance (ON / OFF)", value: "T7: 89.5–92% / ≤ 5% (parallel light)" },
      { label: "Haze (ON / OFF)", value: "< 2% / up to 100%" },
      { label: "Viewing Angle", value: "165° (T7/T9)" },
      { label: "Power Consumption", value: "3.2 W/㎡/h" },
      { label: "Operating Voltage", value: "AC 48V – 65V (nominal 60V)" },
      { label: "Max Panel Size", value: "1,800 × 3,000 mm (2,100 mm ultra-wide available)" },
      { label: "Working Temperature", value: "-30°C ~ 90°C (tested)" },
      { label: "UV / IR Blocking", value: "99% UV / 68–75% IR" },
      { label: "Sound Reduction", value: "20–30 dB" },
      { label: "Safety Standard", value: "Laminated safety glass (EN 12150 / ANSI Z97.1 compliant options)" },
      { label: "Lifespan", value: "15+ years (lab tested)" },
      { label: "Warranty", value: "5-year global warranty" },
    ],
    features: [
      "Structural durability: the PDLC layer is fully protected inside laminated safety glass — moisture-proof, scratch-proof and suitable for humid environments.",
      "Facade ready: engineered for curtain walls, exterior windows and large-format partitions.",
      "Safety glass performance: laminated construction holds together on impact, meeting architectural safety requirements.",
      "Full customization: glass type, thickness, shape (flat/curved), drilled holes, notches and edge polishing.",
      "Superior acoustic insulation: laminated structure also reduces noise transmission.",
      "Plug-and-play wiring: panels are delivered pre-wired with concealed bus bars for fast site installation.",
    ],
    applications: [
      "Shopping mall and building curtain walls",
      "Office and hotel partitions",
      "Skylights and atrium glazing",
      "Banking halls and VIP rooms",
      "Hospital observation windows",
    ],
    faq: [
      { question: "What is switchable laminated glass?", answer: "Switchable laminated glass is a factory-finished product where PDLC smart film is laminated between two sheets of tempered glass using EVA or PVB interlayers. The result is a complete, safety-rated glazing panel that switches between transparent and frosted, ready to install like any architectural glass." },
      { question: "Can switchable laminated glass be used for exterior facades?", answer: "Yes. Because the PDLC layer is hermetically sealed between glass sheets, laminated smart glass is fully weatherproof and suitable for exterior curtain walls, storefronts, skylights and windows. It meets architectural safety glass standards." },
      { question: "What is the maximum panel size for laminated smart glass?", answer: "AYSENT SMART FILM produces laminated switchable glass panels up to 1,800 × 3,000 mm standard, with ultra-wide 2,100 mm available for special projects. Custom shapes, curved panels, drilled holes and notches are available on request." },
      { question: "How is switchable laminated glass installed?", answer: "It installs like standard architectural glass — set in the frame, glazed and sealed. The low-voltage wiring connects to concealed bus bars on each panel. A trained glazier can install it following standard glazing practices." },
      { question: "Is switchable laminated glass more expensive than smart film?", answer: "Yes, laminated glass has a higher unit price because it includes the glass, lamination and tempering. However, for new construction where glass must be purchased anyway, the incremental cost of switchable lamination is much smaller than the total cost comparison suggests." },
      { question: "What safety certifications does laminated smart glass have?", answer: "Our laminated switchable glass meets EN 12150 (tempered glass) and can be certified to ANSI Z97.1 and other regional safety standards on request. The laminated construction holds together on impact, providing inherent safety." },
    ],
  },
  {
    slug: "smart-film-accessories",
    name: "Smart Film Accessories",
    short:
      "Transformers, remote controls, smart control modules and installation tools — everything needed to power and control smart film.",
    overview:
      "AYSENT SMART FILM supplies a complete range of accessories engineered to work perfectly with our PDLC films and smart glass: power transformers, remote-control systems, Wi-Fi/app smart modules, dimming controllers and professional installation tool kits. Sourcing film and accessories from one factory guarantees compatibility and simplifies your supply chain.",
    image: "/images/product-accessories.webp",
    bandImage: "/images/band-accessories.webp",
    imageAlt: "Smart film transformers, remote controls and installation tool kit",
    imageSize: "1200×800",
    highlights: [
      "Power transformers (48V–65V, nominal 60V)",
      "Remote & Wi-Fi app control",
      "Dimming controllers",
      "Professional install tool kits",
    ],
    specs: [
      { label: "Transformer Output", value: "AC 48V – 65V (nominal 60V), 30W – 500W" },
      { label: "Input Voltage", value: "AC 110V / 220V, 50/60Hz" },
      { label: "Control Options", value: "Wall switch / RF remote / Wi-Fi app / voice assistant" },
      { label: "Dimming Range", value: "0–100% stepless (with dimming module)" },
      { label: "Smart Home Integration", value: "Alexa / Google Home / Apple HomeKit / Mi Home / Huawei" },
      { label: "Certifications", value: "CE / RoHS / FCC / PSE" },
      { label: "Warranty", value: "2 years (electronics)" },
    ],
    features: [
      "One-stop supply: film, glass and electronics from a single source factory — no compatibility risk.",
      "Multiple control modes: wall switches, RF remotes, Wi-Fi app control, and integration with mainstream smart-home ecosystems.",
      "Stepless dimming: optional dimming modules turn privacy glass into adjustable shading.",
      "Scalable power solutions: transformers sized from single windows to full-floor curtain wall systems.",
      "Installation support: wiring diagrams, video tutorials and tool kits for installers and contractors.",
      "Spare parts availability: long-term supply for project maintenance.",
    ],
    applications: [
      "New smart film installations",
      "Smart-home and building automation integration",
      "Retrofit and maintenance projects",
      "Distributor and installer stock",
    ],
    faq: [
      { question: "What accessories are needed for a PDLC smart film installation?", answer: "Every installation requires: a power transformer (sized to the total film area), a control method (wall switch, remote, or Wi-Fi module), two-core electrical wire, and optionally a dimming controller. AYSENT SMART FILM provides all these as a complete system, ensuring compatibility." },
      { question: "How do I choose the right transformer size?", answer: "Transformer wattage should be 8–10W per square meter of film area, with safety margin. PDLC film uses 3.2W/㎡/h, so a 100W transformer covers about 10–12 m². We recommend sizing up for safety margin and future expansion. Standard transformer power ratings: 30W / 50W / 100W / 200W / 300W / 500W." },
      { question: "Can I use third-party transformers with AYSENT film?", answer: "We strongly recommend using AYSENT-supplied transformers. Mismatched voltage (must be 48–65V AC, nominal 60V) or poor-quality transformers are the leading cause of premature film failure and will void the warranty. Our transformers are CE/FCC/RoHS/PSE certified and matched to our film specifications." },
      { question: "What control options are available for smart film?", answer: "Options include: basic wall switch, RF remote control, Wi-Fi app control (iOS/Android), voice assistant integration (Alexa/Google Home), stepless dimming controllers, and building automation system (BMS) integration via API." },
      { question: "Can smart film be integrated with smart home systems?", answer: "Yes. Our Wi-Fi control modules support integration with major smart home ecosystems including Alexa, Google Home, Apple HomeKit (via bridge), and custom automation via REST API. Multiple zones can be grouped and scheduled." },
      { question: "What is the warranty on smart film accessories?", answer: "Electronic accessories (transformers, controllers) carry a 2-year warranty. We maintain long-term spare parts availability for project maintenance. Extended warranty options are available for commercial projects." },
    ],
  },
];

export const ADVANTAGES = [
  {
    icon: "Factory",
    title: "Direct Factory",
    text: "Source directly from the manufacturer established in 2014 — no middlemen, competitive pricing, and full control over quality and lead times.",
  },
  {
    icon: "BadgeCheck",
    title: "Full Certifications",
    text: "CE, RoHS, FCC, PSE, UL94 V0, REACH and SGS test reports — ready for European, American, Japanese and Middle East markets.",
  },
  {
    icon: "FlaskConical",
    title: "Rapid Prototyping",
    text: "Professional sample kits ready in 1–3 days. Test three film grades, switching performance and packaging before you commit to volume orders.",
  },
  {
    icon: "Layers",
    title: "Stable Mass Production",
    text: "Automated coating and lamination lines deliver consistent quality at scale, with cut-sheet lead times of 3–5 days and roll film of 5–7 days.",
  },
  {
    icon: "Globe2",
    title: "Global Logistics",
    text: "Export experience to 50+ countries and regions, 2,000+ customers served, with FOB/CIF/DDP/EXW terms, sea/air/express freight and full customs documentation.",
  },
  {
    icon: "Settings",
    title: "OEM/ODM Service",
    text: "Custom sizes, colors, voltages, control systems, ITO-etched logos and retail packaging — your brand, our factory. Exclusive distributor programs available.",
  },
];

interface Application {
  slug: string;
  name: string;
  pain: string;
  solution: string;
  products: string[];
  imageAlt: string;
  image: string;
}

export const APPLICATIONS: Application[] = [
  {
    slug: "office-partitions",
    name: "Office Partitions",
    pain: "Open-plan offices need flexible spaces — meeting rooms require privacy on demand without losing natural light and openness.",
    solution:
      "Switchable privacy film turns glass partitions frosted in 0.1 seconds for confidential meetings, and transparent again to keep the office bright and spacious. It also serves as a projection screen in frosted mode.",
    products: ["pdlc-smart-film", "self-adhesive-smart-film", "switchable-laminated-glass"],
    image: "/images/app-office.webp",
    imageAlt: "Switchable privacy film on office glass partition walls",
  },
  {
    slug: "hotels",
    name: "Hotels",
    pain: "Hotel bathrooms and guest rooms need both openness and instant privacy, while designers want a premium, high-tech guest experience.",
    solution:
      "Smart film on bathroom glass and room dividers gives guests one-touch privacy with a luxury feel — a signature feature in high-end hotels, from guest suites to spa and shower enclosures.",
    products: ["self-adhesive-smart-film", "switchable-laminated-glass"],
    image: "/images/app-hotel.webp",
    imageAlt: "Smart glass bathroom partition in a luxury hotel suite",
  },
  {
    slug: "villas-homes",
    name: "Villas & Homes",
    pain: "Large windows and glass doors expose interiors to views and sunlight; curtains and blinds block light and need cleaning.",
    solution:
      "Switchable film on windows, doors and skylights replaces curtains: transparent when you want the view, frosted when you want privacy, with 99% UV blocking and smart-home control integration.",
    products: ["self-adhesive-smart-film", "pdlc-smart-film"],
    image: "/images/app-villa.webp",
    imageAlt: "Villa windows with switchable smart film for privacy",
  },
  {
    slug: "automotive",
    name: "Automotive",
    pain: "Vehicle cabins suffer from heat, glare and UV exposure, while passengers demand privacy and comfort in premium vehicles.",
    solution:
      "Automotive-grade smart film for side windows, sunroofs and partition screens delivers on-demand privacy and solar control — popular in luxury cars, RVs, yachts and VIP transport conversions.",
    products: ["pdlc-smart-film", "smart-film-accessories"],
    image: "/images/app-automotive.webp",
    imageAlt: "Switchable smart film on automotive sunroof and windows",
  },
  {
    slug: "shopping-mall-curtain-walls",
    name: "Shopping Mall Curtain Walls",
    pain: "Mall facades and storefronts need solar control by day and eye-catching display surfaces by night, without heavy mechanical shading.",
    solution:
      "Switchable laminated glass curtain walls adjust transparency for daylight management and transform into giant rear-projection media facades after dark — architecture and advertising in one surface.",
    products: ["switchable-laminated-glass", "smart-film-accessories"],
    image: "/images/app-mall.webp",
    imageAlt: "Smart glass curtain wall facade on a shopping mall",
  },
  {
    slug: "luxury-villas",
    name: "Luxury Villas",
    pain: "High-end villa owners demand uncompromised privacy for floor-to-ceiling windows and pool areas, while preserving panoramic views and natural light during the day.",
    solution:
      "Switchable smart film transforms villa glass walls, pool enclosures and bathroom partitions into instant privacy zones — controlled via wall switch, smartphone app or smart home automation. 99% UV protection preserves furniture and artwork, while the frosted state doubles as a home cinema projection screen.",
    products: ["self-adhesive-smart-film", "switchable-laminated-glass", "smart-film-accessories"],
    image: "/images/app-luxury-villa.webp",
    imageAlt: "Luxury villa with switchable smart film on floor-to-ceiling windows",
  },
  {
    slug: "public-spaces",
    name: "Public Spaces & Institutions",
    pain: "Museums, galleries, schools, hospitals and government buildings need flexible spaces that balance public access with privacy for sensitive areas, meetings and exhibitions.",
    solution:
      "PDLC smart film enables on-demand privacy in conference rooms, exhibition halls, medical consultation areas and administrative offices. In museums, frosted glass becomes projection surfaces for immersive exhibits; in schools, it transforms classrooms into multi-use spaces. Low power consumption and 15+ year lifespan make it ideal for high-traffic public buildings.",
    products: ["pdlc-smart-film", "self-adhesive-smart-film", "switchable-laminated-glass"],
    image: "/images/app-public-space.webp",
    imageAlt: "Smart glass in a modern museum exhibition hall",
  },
  {
    slug: "streetscape-storefronts",
    name: "Streetscape & Storefronts",
    pain: "Retail storefronts and street-facing glass need to attract customers by day and secure the interior after hours, while managing glare and heat from direct sunlight.",
    solution:
      "Switchable film on storefront windows transitions from transparent display windows by day to frosted privacy panels at night — eliminating the need for roller shutters or curtains. The frosted state serves as a rear-projection surface for dynamic window displays and advertising, turning the facade into a digital marketing canvas.",
    products: ["self-adhesive-smart-film", "switchable-laminated-glass", "smart-film-accessories"],
    image: "/images/app-streetscape.webp",
    imageAlt: "Retail storefront with switchable smart film display windows",
  },
  {
    slug: "cafes-bars-restaurants",
    name: "Cafes, Bars & Restaurants",
    pain: "Hospitality venues need flexible dining areas that can switch between open social spaces and private booths, while managing street-level glare and creating ambiance.",
    solution:
      "Smart film on partition walls and exterior windows lets cafes and bars instantly create private dining areas, VIP sections or meeting nooks. Dimmable control sets the mood from bright and open to intimate and secluded. The frosted mode also works as a projection surface for menu displays, brand visuals and event promotions.",
    products: ["self-adhesive-smart-film", "pdlc-smart-film", "smart-film-accessories"],
    image: "/images/app-cafe-bar.webp",
    imageAlt: "Modern cafe interior with switchable glass partitions",
  },
  {
    slug: "residential-living-rooms",
    name: "Residential Living Rooms",
    pain: "Open-plan living spaces with large glass walls lack privacy from neighbors and passersby, while traditional blinds and curtains clutter the design and block natural light.",
    solution:
      "Self-adhesive smart film retrofits onto existing living room windows and glass partitions, providing instant privacy with a single tap. It integrates with smart home systems (Alexa, Google Home, Apple HomeKit) for voice or scheduled control, blocks 99% of UV rays to protect interiors, and in frosted mode becomes a home theater projection screen — replacing both curtains and TV screens.",
    products: ["self-adhesive-smart-film", "smart-film-accessories"],
    image: "/images/app-living-room.webp",
    imageAlt: "Modern living room with smart film on large glass windows",
  },
  {
    slug: "banking-financial",
    name: "Banking & Financial Institutions",
    pain: "Banks and financial offices require secure, private spaces for client consultations and vault areas, while maintaining an open, transparent and modern brand image in public zones.",
    solution:
      "Switchable laminated glass provides bullet-resistant security combined with on-demand privacy for consultation rooms, manager offices and cash-handling areas. The transparent state conveys openness and trust in customer-facing zones; the frosted state ensures complete confidentiality during private meetings. Integrated access control can automatically switch glass to frosted when a room is occupied.",
    products: ["switchable-laminated-glass", "pdlc-smart-film", "smart-film-accessories"],
    image: "/images/app-banking.webp",
    imageAlt: "Modern bank interior with switchable privacy glass partitions",
  },
  {
    slug: "building-facades",
    name: "Building Facades & Curtain Walls",
    pain: "Commercial building facades face excessive solar heat gain and glare, reducing occupant comfort and increasing HVAC costs, while static tinted glass compromises natural light and views.",
    solution:
      "Switchable laminated glass curtain walls dynamically adjust transparency throughout the day — clear for views and daylight in the morning, frosted for solar control during peak sun hours. The system reduces cooling energy by up to 25%, blocks 99% UV and 68–75% infrared heat, and transforms the building exterior into a programmable media facade for branding and light shows after dark.",
    products: ["switchable-laminated-glass", "smart-film-accessories"],
    image: "/images/app-building-facade.webp",
    imageAlt: "Modern commercial building with switchable smart glass curtain wall facade",
  },
  {
    slug: "hospitals-medical",
    name: "Hospitals & Medical Facilities",
    pain: "Hospitals and clinics require instant privacy for patient consultations, examination rooms, ICU wards and operating areas, while maintaining natural light, hygiene and easy disinfection — traditional curtains and blinds harbor bacteria and are difficult to clean.",
    solution:
      "Switchable smart film on glass partitions and windows provides one-touch patient privacy with a smooth, non-porous surface that can be wiped and disinfected repeatedly. In consultation rooms, the frosted state doubles as a projection surface for medical imaging and patient education. The film blocks 99% of UV rays to protect sensitive equipment and medications, and integrates with hospital access control systems to automatically switch to privacy mode when a room is occupied.",
    products: ["self-adhesive-smart-film", "switchable-laminated-glass", "smart-film-accessories"],
    image: "/images/app-hospital.webp",
    imageAlt: "Modern hospital with switchable smart glass in patient rooms and consultation areas",
  },
];

export const FAQS = [
  {
    q: "What is your MOQ (minimum order quantity)?",
    a: "We support low MOQ to make sourcing easy: cut sheet (pre-cut film) starts from just 1 square meter, and roll film MOQ is 30 m² per order. Sample orders are available for testing before you commit to volume. Contact us for project-based pricing.",
  },
  {
    q: "Do you provide samples? How much do they cost?",
    a: "We offer a professional sample kit for USD 30, which includes three film grades (T6/T7/T8), a dedicated controller, a full set of testing and installation tools, and quality-identification video tutorials. The USD 30 sample fee is fully deductible against your first bulk order — effectively making the sample free. Samples ship within 1–3 days of payment.",
  },
  {
    q: "How long is the lead time?",
    a: "Samples: 1–3 working days. Cut sheet (pre-cut film): 3–5 working days. Roll film: 5–7 working days. Large mass-production orders: 25–35 days depending on quantity and customization. Switchable laminated glass typically requires 15–20 days due to the lamination process. Rush orders can be accommodated on request.",
  },
  {
    q: "How do I install self-adhesive smart film?",
    a: "Installation is a dry-stick process (no water): clean and fully dry the glass surface, peel off the release liner, apply the film from top to bottom using a squeegee to push out air bubbles, then connect the two-wire power cable to the transformer. We supply a step-by-step video tutorial, wiring diagrams and an installation tool kit. Remote video support is available for larger projects. Important: never use water or soapy solution during installation — the film is a dry-apply product.",
  },
  {
    q: "What warranty do you offer?",
    a: "We offer a 5-year global warranty on PDLC smart film and switchable laminated glass, covering manufacturing defects such as natural delamination, adhesive failure and yellowing. Electronic accessories (transformers, controllers) carry a 2-year warranty. Our after-sales team responds within 24 hours, and replacement parts or films are shipped promptly for verified quality issues. The 3-year failure rate is only 0.8%, far below the industry average of 3%.",
  },
  {
    q: "Can you customize size, color, voltage and control methods?",
    a: "Yes — that is our core OEM/ODM service. We customize dimensions (film widths up to 1,800 mm standard, 2,100 mm ultra-wide), film color (white, gray, black, custom color), operating voltage (48–65V AC, nominal 60V), control methods (wall switch, RF remote, Wi-Fi app, voice control, dimming, building automation), logo etching and retail packaging.",
  },
  {
    q: "What payment methods and trade terms do you accept?",
    a: "We accept T/T (bank transfer) and Alibaba Trade Assurance. For orders ≤ USD 2,500: 100% prepayment. For orders > USD 2,500: 30% deposit, 70% balance before shipment. For repeat customers with 2+ orders, L/C at sight may be available. Trade terms: EXW, FOB, CIF/CFR, DDP to your destination.",
  },
  {
    q: "How do you pack and ship the products?",
    a: "Film rolls are packed in hard paper tubes with protective film, then in reinforced export cartons; laminated glass is packed in fumigation-free plywood crates with foam protection. We arrange sea freight, air freight and express (DHL/FedEx/UPS) and provide full customs clearance documents (packing list, commercial invoice, certificate of origin, CE/RoHS/FCC/PSE certificates).",
  },
  {
    q: "Which countries do you export to?",
    a: "We export to 50+ countries and regions across Europe, North America, the Middle East, Southeast Asia and beyond, serving 2,000+ customers. We have completed engineering projects in 20+ countries including the USA, Germany, Singapore, Ecuador and Vietnam. Our team is experienced with CE-related EU import requirements and Middle East SASO-related documentation.",
  },
  {
    q: "Can smart film be used in bathrooms and humid environments?",
    a: "Yes. For bathrooms and outdoor-facing applications we recommend switchable laminated glass, where the PDLC layer is sealed inside the laminated panel for full moisture protection. Self-adhesive film also works on the dry side of interior bathroom glass, but all edges must be properly sealed with neutral-cure silicone sealant (pH 7, zero shrinkage, solvent-free).",
  },
  {
    q: "Do you support OEM branding and dropshipping for distributors?",
    a: "Yes. We support neutral packaging, your logo on film edges and packaging (via ITO etching process), user manuals in your language, and blind shipping to your customers. Many of our partners are regional distributors and installation companies building their own brands. We also offer exclusive distributor programs with annual minimum purchase commitments.",
  },
  {
    q: "What information should I provide for a quotation?",
    a: "Please share: product type (roll film / self-adhesive film / laminated glass), dimensions and quantities, application scenario, intended use (self-use or resale), preferred voltage and control method, destination country/port, and whether you need installation accessories. You will receive a detailed quotation within 24 hours.",
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageAlt: string;
  image: string;
  sections: { heading?: string; paragraphs?: string[]; list?: string[]; tail?: string[] }[];
  faq?: { question: string; answer: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-pdlc-smart-film",
    title: "What Is PDLC Smart Film? Working Principle, Benefits and Buying Guide",
    excerpt:
      "A complete introduction to PDLC smart glass film: how it switches from frosted to transparent, key technical specs, application scenarios and what to check before buying from a smart film manufacturer.",
    date: "July 10, 2026",
    readTime: "6 min read",
    image: "/images/blog-pdlc.webp",
    imageAlt: "PDLC smart film sample switching between frosted and transparent states",
    sections: [
      {
        paragraphs: [
          "PDLC smart film — also known as switchable privacy film or smart glass film — has become one of the fastest-growing materials in architectural glass over the past decade. From office partitions and hotel bathrooms to villa windows and automotive sunroofs, it gives any glass surface the ability to switch between transparent and frosted in a tenth of a second. This guide explains how PDLC smart film works, what benefits it brings to a project, and what buyers should evaluate before placing an order with a smart film supplier.",
        ],
      },
      {
        heading: "What Is PDLC Smart Film?",
        paragraphs: [
          "PDLC stands for Polymer Dispersed Liquid Crystal. A PDLC smart film is a thin laminate — typically around 0.38 mm — in which microscopic liquid crystal droplets are dispersed within a polymer matrix, sandwiched between two transparent conductive ITO layers. The film is supplied either in roll form for glass lamination, or with a self-adhesive backing that can be applied directly onto existing glass.",
          "Because the film is flexible and can be cut to size, it adapts to almost any flat glass application: partitions, windows, doors, skylights, display cases and even curved laminated glass panels.",
        ],
      },
      {
        heading: "How Does PDLC Smart Film Work?",
        paragraphs: [
          "The working principle is elegantly simple. In the OFF state (no power), the liquid crystal droplets are randomly oriented. Light passing through the film is scattered in all directions, so the film appears milky white or frosted — providing full privacy while still letting soft, diffused light through.",
          "When an AC voltage is applied (typically 48–65V, nominal 60V), the liquid crystal molecules align with the electric field. Light can then pass straight through with minimal scattering, and the film becomes transparent in about 0.1 seconds. Remove the power, and the film returns to frosted instantly. Power is only consumed to keep the film transparent — just 3.2 watts per square meter per hour, about the consumption of a small LED bulb.",
        ],
      },
      {
        heading: "Key Benefits for Projects",
        list: [
          "Instant privacy on demand — one touch on a wall switch, remote or smartphone app.",
          "Space flexibility — open, light-filled spaces that turn private in an instant, without curtains or blinds.",
          "UV and heat control — quality PDLC film blocks 99% of UV rays and 68–75% of infrared heat, reducing solar heat gain.",
          "Rear projection — in frosted mode the film works as a high-definition projection screen, ideal for meeting rooms and retail displays.",
          "Retrofit friendly — self-adhesive versions upgrade existing glass without replacement, cutting renovation costs dramatically.",
          "Smart integration — compatible with building automation and smart-home systems, with optional stepless dimming.",
        ],
      },
      {
        heading: "Buying Guide: What to Check Before You Order",
        paragraphs: [
          "Not all smart films are equal. When comparing offers from a smart film manufacturer, focus on these parameters:",
        ],
        list: [
          "Transmittance: T7 grade offers 89.5–92% parallel-light transmittance (the industry standard for clarity); ask for test reports, not just catalogue values. Beware of suppliers who quote 'total light transmittance' which is ~3% higher than parallel light.",
          "Haze: low haze (<2% ON) means a clear view without milkiness; high haze in OFF state (up to 100%) means real privacy.",
          "Operating voltage and safety: 48–65V AC systems (nominal 60V) are standard and safe; confirm the transformer carries CE/FCC/RoHS/PSE certification.",
          "Width capability: leading factories offer roll widths up to 1,800 mm standard (2,100 mm ultra-wide), which determines the maximum seamless panel size.",
          "Lifespan and warranty: look for 15+ year rated lifespan (lab tested) and at least a 5-year warranty — most competitors only offer 2 years.",
          "Viewing angle: 165° ultra-wide angle means the glass stays clear even from the side; many competitors only offer 145°.",
          "Customization: a real source factory can customize size, color, voltage, control method and packaging under OEM/ODM terms.",
        ],
        tail: [
          "Finally, always order a sample first. Reputable suppliers ship A4 demo samples within days so you can verify switching speed, clarity and color before committing to a project order.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "PDLC smart film is a mature, reliable technology that adds privacy, flexibility and a premium feel to almost any glass surface. Understanding the working principle and the key specifications will help you brief your supplier precisely and avoid overpaying for underperforming film. As a direct smart film manufacturer with 11 years of production experience, AYSENT SMART FILM supports buyers with professional sample kits, low MOQ, custom specifications and worldwide delivery to 50+ countries — contact us for a quotation within 24 hours.",
        ],
      },
    ],
    faq: [
      { question: "What does PDLC stand for?", answer: "PDLC stands for Polymer Dispersed Liquid Crystal. It is the core technology behind switchable smart film, where microscopic liquid crystal droplets are dispersed within a polymer matrix between two conductive ITO layers." },
      { question: "How does PDLC smart film switch from frosted to transparent?", answer: "When no power is applied (OFF state), liquid crystal droplets are randomly oriented and scatter light, making the film frosted. When AC voltage is applied (ON state), the crystals align and light passes through, making the film transparent in about 0.1 seconds." },
      { question: "Is PDLC film energy efficient?", answer: "Yes. Power is only consumed to keep the film transparent, just 3.2 watts per square meter per hour — 32% more efficient than the industry average of ~5W/㎡/h. The frosted (privacy) state uses zero power." },
      { question: "What is the lifespan of PDLC smart film?", answer: "AYSENT PDLC smart film is rated for 15+ years of service life based on laboratory aging testing (~100,000 operating hours). At 10 hours per day, that is over 27 years. We back this with a 5-year global warranty — far longer than the industry average of 2 years." },
      { question: "Can PDLC film be installed on existing glass?", answer: "Yes. Self-adhesive PDLC film is designed specifically for retrofit applications. It is a dry-stick product that peels and sticks directly onto existing clean, dry glass, with no need to replace windows or partitions. This makes it ideal for renovation projects." },
      { question: "What voltage does PDLC film require?", answer: "Standard PDLC film operates on low-voltage AC: 48–65V, with a nominal 60V. A transformer converts mains power (110V/220V) to the required voltage. Low voltage means the system is safe to touch and install." },
      { question: "Does PDLC film block UV and heat?", answer: "AYSENT PDLC film blocks 99% of UV rays and 68–75% of infrared heat. This helps protect interiors from fading and reduces air-conditioning loads, adding energy savings on top of the privacy function." },
      { question: "What is the maximum width of PDLC film?", answer: "AYSENT SMART FILM produces standard roll widths up to 1,800 mm, with ultra-wide 2,100 mm available for special projects. Wider panels can be achieved through invisible seaming, where two panels are joined with a nearly undetectable seam." },
    ],
  },
  {
    slug: "smart-film-vs-smart-glass",
    title: "Smart Film vs. Smart Glass: Which Privacy Solution Fits Your Project?",
    excerpt:
      "Smart film or smart glass? Compare cost, installation, durability and ideal use cases of self-adhesive switchable film versus laminated switchable glass to choose the right privacy solution for your project.",
    date: "July 16, 2026",
    readTime: "6 min read",
    image: "/images/blog-compare.webp",
    imageAlt: "Comparison of self-adhesive smart film and switchable laminated smart glass",
    sections: [
      {
        paragraphs: [
          "If you are sourcing switchable privacy solutions for a building or renovation project, you will quickly face a fundamental choice: smart film or smart glass? Both are built on the same PDLC technology and deliver the same instant frosted-to-transparent switching. The difference lies in how the technology is packaged and installed — and that difference drives cost, durability, installation effort and the ideal application for each option. This article compares the two solutions so you can specify with confidence.",
        ],
      },
      {
        heading: "What Is the Difference?",
        paragraphs: [
          "Smart glass (switchable laminated glass) is a factory-finished product: the PDLC film is laminated between two sheets of glass — usually tempered — using EVA or PVB interlayers. The result is a complete, safety-rated glazing panel that arrives on site ready to install like any other architectural glass.",
          "Smart film, by contrast, is the PDLC layer itself. It is supplied either as roll film for glass processors who laminate it themselves, or as a self-adhesive film that installers apply directly onto glass that is already in place.",
        ],
      },
      {
        heading: "Cost Comparison",
        paragraphs: [
          "Budget is often the deciding factor. Self-adhesive smart film is the most economical route: because existing glass is reused, you avoid the cost of new glass panels, removal, disposal and re-installation. For a typical office renovation, upgrading with self-adhesive film can cost 40–60% less than replacing partitions with smart glass.",
          "Smart glass carries a higher unit price — you are buying the glass, the lamination and the PDLC layer as one engineered product — but for new construction the comparison is different: the glazing has to be purchased anyway, so the incremental cost of making it switchable is far smaller than in a retrofit scenario.",
        ],
      },
      {
        heading: "Installation and Lead Time",
        paragraphs: [
          "Self-adhesive film installs like a high-grade window tint: clean the glass, apply the film, connect the two-wire power cable. A trained installer can upgrade a full meeting room in under a day, with no disruption to occupants. Smart glass requires professional glazing work — panels are heavier, need proper frames and electrical routing — which is straightforward in new construction but disruptive in occupied buildings.",
          "Lead times also differ. Cut sheet film can typically be produced and shipped within 3–5 days, roll film within 5–7 days, while laminated smart glass panels usually require 15–20 days because of the lamination and tempering process.",
        ],
      },
      {
        heading: "Durability and Environment",
        paragraphs: [
          "Here smart glass has a clear structural advantage. Because the PDLC layer is hermetically sealed between glass sheets, it is fully protected from moisture, scratches, cleaning chemicals and accidental impact. This makes laminated smart glass the right choice for bathrooms, hospitals, exterior facades, curtain walls and any humid or high-traffic environment.",
          "Self-adhesive film sits on the glass surface, so edges should be properly sealed in humid rooms, and the surface should be cleaned with soft cloths. For dry interior applications — offices, meeting rooms, hotel room dividers — a quality film installed correctly delivers many years of reliable service.",
        ],
      },
      {
        heading: "Which One Fits Your Project?",
        list: [
          "New construction, curtain walls, facades, skylights — choose switchable laminated smart glass.",
          "Bathrooms, spas, hospitals and other humid environments — choose laminated smart glass for its sealed structure.",
          "Renovation and retrofit of existing glass — choose self-adhesive smart film to avoid glass replacement.",
          "Rental or temporary spaces — choose removable self-adhesive film options.",
          "Glass processors and local fabricators — buy PDLC roll film and laminate locally to save freight cost.",
          "Tight budgets with existing glazing — self-adhesive film delivers the same switching effect at the lowest total cost.",
        ],
      },
      {
        heading: "A Practical Tip for Buyers",
        paragraphs: [
          "Many projects combine both solutions: laminated smart glass for wet areas and exterior glazing, self-adhesive film for dry interior partitions. Sourcing both from one smart film manufacturer guarantees consistent optical performance and color across the whole project, and simplifies warranty and spare-parts support.",
          "AYSENT SMART FILM produces both product lines in the same factory — PDLC roll film, self-adhesive film and switchable laminated glass — plus all transformers and control systems. Send us your drawings or glass schedule, and our engineers will recommend the most cost-effective configuration for each area of your project, with a detailed quotation within 24 hours.",
        ],
      },
    ],
    faq: [
      { question: "What is the main difference between smart film and smart glass?", answer: "Smart glass is a factory-finished product where PDLC film is laminated between two sheets of tempered glass. Smart film is the PDLC layer itself, supplied as roll film for lamination or as self-adhesive film for direct application onto existing glass." },
      { question: "Which is cheaper: smart film or smart glass?", answer: "For retrofit projects, self-adhesive smart film is typically 40-60% cheaper because it reuses existing glass. For new construction, the cost gap narrows because glass must be purchased anyway. Smart glass carries a higher unit price but includes the glass and lamination." },
      { question: "Can smart film be used in bathrooms?", answer: "Self-adhesive film can be used in bathrooms if edges are properly sealed, but laminated smart glass is the better choice for wet areas because the PDLC layer is hermetically sealed between glass sheets, fully protected from moisture." },
      { question: "How long does installation take for each option?", answer: "Self-adhesive film installs like window tinting — a trained installer can finish a typical meeting room in under a day. Smart glass requires professional glazing work and is more suited to new construction or major renovations." },
      { question: "Does smart film or smart glass offer better durability?", answer: "Laminated smart glass offers superior structural durability because the PDLC layer is sealed between glass, protected from scratches, moisture and cleaning chemicals. Self-adhesive film is durable for dry interior applications but requires careful edge sealing in humid environments." },
      { question: "Can I mix smart film and smart glass in one project?", answer: "Absolutely. Many projects use laminated smart glass for wet areas and exteriors, and self-adhesive film for dry interior partitions. Sourcing both from the same manufacturer ensures consistent color and optical performance." },
      { question: "What is the lead time for each product?", answer: "Cut sheet (pre-cut film): 3–5 working days. Roll film: 5–7 working days. Laminated smart glass requires 15–20 days due to the tempering and lamination process. Rush orders may be possible for an additional fee." },
      { question: "Which option is better for a rental property?", answer: "Self-adhesive smart film is the best choice for rental or temporary spaces because it can be removed without damaging the glass. Smart glass is a permanent installation that becomes part of the building." },
    ],
  },
  {
    slug: "how-to-install-self-adhesive-smart-film",
    title: "How to Install Self-Adhesive Smart Film: A Step-by-Step Guide",
    excerpt:
      "A complete installation guide for self-adhesive PDLC switchable film: tools needed, six steps from measuring to wiring, common mistakes to avoid, and when to call a professional installer.",
    date: "August 5, 2026",
    readTime: "7 min read",
    image: "/images/product-adhesive.webp",
    imageAlt: "Self-adhesive smart film being applied onto an office glass partition",
    sections: [
      {
        paragraphs: [
          "Self-adhesive smart film is the fastest way to turn ordinary glass into switchable privacy glass — and because it sticks directly onto existing glazing, installation does not require replacing windows or partitions. With the right tools and a clean workspace, a trained installer can complete a typical office partition in under an hour. This step-by-step guide walks you through the full process, from preparation to the final power test, so you can plan your project with confidence.",
        ],
      },
      {
        heading: "Tools and Materials You Will Need",
        paragraphs: [
          "Before you start, gather everything on this list. Running out of supplies mid-installation is the most common cause of bubbles and misalignment.",
        ],
        list: [
          "Self-adhesive PDLC smart film (cut to size, or slightly oversize for trimming)",
          "Installation squeegee with a soft felt edge (to avoid scratching the film)",
          "Glass cleaner + lint-free microfiber cloths (no paper towels — they leave lint)",
          "Utility knife with fresh blades and a steel ruler for trimming",
          "Heat gun or hair dryer (for edge sealing and cold-weather installs)",
          "PDLC transformer (48–65V AC, nominal 60V — match the film voltage), wall switch or remote",
          "Two-core electrical wire, wire strippers, and insulating tape",
          "Neutral-cure silicone sealant (pH 7, zero shrinkage, solvent-free) for edge sealing",
        ],
      },
      {
        heading: "Step 1 — Measure and Cut the Film",
        paragraphs: [
          "Measure the glass pane precisely and add 2–3 mm of extra margin on each edge — you will trim the excess after application. Unroll the film on a clean, flat surface and cut with a sharp utility knife against a steel ruler. A dull blade will pull the adhesive layer and leave ragged edges.",
          "Mark the top edge of the film with a small piece of tape so you do not flip it upside down — the adhesive side and the conductive bus-bar side must be oriented correctly.",
        ],
      },
      {
        heading: "Step 2 — Clean the Glass Thoroughly (Dry Application)",
        paragraphs: [
          "This is the most important step. PDLC self-adhesive film is a dry-stick product — never use water or soapy solution during application. Any dust, grease or silicone residue trapped under the film will show as a permanent bubble or speck. Spray the glass with cleaner, wipe with a squeegee from top to bottom, and then do a final pass with a lint-free microfiber cloth. The surface must be completely dry before application. Run your bare hand over the surface — if you feel any grit, clean again.",
          "For exterior-facing glass or bathrooms, make sure the room is dry and well-ventilated. Humidity above 70% makes the adhesive less tacky and increases the risk of edge lifting.",
        ],
      },
      {
        heading: "Step 3 — Peel the Release Liner and Apply (Dry)",
        paragraphs: [
          "Peel back about 10 cm of the release liner from the top edge. Do not peel the whole backing at once — the film will stick to itself instantly. Align the top and one side edge, then press the top 10 cm firmly with the squeegee. Once the top is anchored, slowly peel the rest of the liner downward with one hand while smoothing the film with the squeegee in the other. Work from the center outward, in overlapping strokes. This is a dry application — do not spray any liquid on the adhesive or glass.",
        ],
      },
      {
        heading: "Step 4 — Squeegee Out All Air",
        paragraphs: [
          "Go over the entire surface with firm, overlapping squeegee strokes, pushing trapped air toward the nearest edge. Wipe the squeegee blade frequently on the microfiber cloth. Pay extra attention to the edges — ensure full adhesion around the bus bar area to prevent moisture intrusion later.",
          "Small bubbles that remain after 10 minutes can usually be worked out with the squeegee. Larger bubbles may require you to lift that corner and reapply. Do not puncture bubbles with a pin — it will damage the ITO conductive layer and leave a visible mark.",
        ],
      },
      {
        heading: "Step 5 — Trim the Edges and Connect Power",
        paragraphs: [
          "Once the film is fully smoothed, trim the excess along all four edges with a fresh utility blade. Hold the blade at a 45-degree angle and use the glass frame as a guide for a clean line. Important: only trim areas without the copper bus bar electrode — never cut through the bus bar edge.",
          "The two conductive bus bars run along the top and bottom (or left and right, depending on the film orientation). Connect the two-core wire to each bus bar using the copper tape or conductive adhesive supplied with the film. Run the wire along the frame to the transformer, then connect the transformer to the wall switch or remote receiver. Always turn off the mains power before wiring the transformer. The film operates on 48–65V AC (nominal 60V).",
        ],
      },
      {
        heading: "Step 6 — Test, Seal and Finish",
        paragraphs: [
          "Restore power and test the switch. The film should change from frosted to transparent in under a second, with no dead zones or flickering. If a corner does not switch, check the bus-bar connection — a loose wire is the usual cause.",
          "Finally, apply neutral-cure silicone sealant (pH 7, zero shrinkage, solvent-free) along all four edges and especially around the bus bar electrodes. This seals out moisture and dust, prevents electrode oxidation, and ensures long-term reliable operation. Run the heat gun along all edges on a low setting for 10–15 seconds to activate the edge seal. Wipe the surface with a dry microfiber cloth and the installation is complete.",
        ],
      },
      {
        heading: "Common Mistakes to Avoid",
        list: [
          "Using water or soapy solution — PDLC film is a dry-stick product; moisture causes edge lifting and electrical failure.",
          "Skipping the final glass clean — dust under the film is permanent and impossible to fix without replacing the film.",
          "Peeling the entire release liner at once — the film will curl and stick to itself.",
          "Using a hard squeegee without a felt edge — it scratches the protective top layer.",
          "Trimming with a dull blade — ragged edges look unprofessional and can lift over time.",
          "Cutting through the bus bar electrode — only trim areas without the copper electrode.",
          "Forgetting edge sealing with neutral silicone — the #1 cause of edge lifting in bathrooms and exterior glass.",
          "Wiring the transformer to the wrong voltage — always match 48–65V AC (nominal 60V) to the film specification.",
          "Removing the high-temperature protective tape on the bus bar — this tape protects the electrode from oxidation and must never be removed.",
          "Allowing the film edge to touch metal frames — maintain ≥2mm insulation gap to prevent short circuits.",
        ],
      },
      {
        heading: "When to Hire a Professional",
        paragraphs: [
          "For small interior panes under 1 m², a confident DIYer with the right tools can achieve a good result. For anything larger — full-height partitions, curved glass, bathroom wet areas, or projects above 10 m² — we strongly recommend a professional installer. The cost of redoing a botched install (new film + labor + glass cleaning) far exceeds the savings of doing it yourself.",
          "AYSENT SMART FILM supplies detailed video tutorials, wiring diagrams and a professional tool kit with every film order, and our engineers offer remote video support for larger projects. Contact us for a recommended installer in your region.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Self-adhesive smart film installation is straightforward when you follow the steps in order: measure, clean, apply, smooth, wire, test. The two make-or-break steps are glass cleanliness and edge sealing — get those right and your film will give you years of reliable instant privacy. Ready to start your project? Request a free sample and installation kit from AYSENT SMART FILM, and our team will help you specify the right film size, voltage and control system for your glass.",
        ],
      },
    ],
    faq: [
      { question: "Can I install self-adhesive smart film myself?", answer: "For small panes under 1 m², a confident DIYer with the right tools can achieve good results. For larger panels, curved glass, or wet areas, we strongly recommend a professional installer to avoid bubbles, misalignment and electrical issues." },
      { question: "How long does it take to install self-adhesive smart film?", answer: "A trained installer can complete a typical office partition (2-3 m²) in under an hour. A full meeting room with multiple panes usually takes half a day. DIY installation may take 2-3 times longer for the first project." },
      { question: "What tools do I need for installation?", answer: "You will need: felt-edge squeegee, glass cleaner, lint-free microfiber cloths, utility knife with fresh blades, steel ruler, heat gun, neutral-cure silicone sealant (pH 7), PDLC transformer (48–65V AC, nominal 60V), wall switch or remote, and two-core electrical wire. Do not use water or soapy solution — PDLC film is a dry-stick product." },
      { question: "How do I remove bubbles after installation?", answer: "Small bubbles can usually be worked out with the squeegee within 10 minutes of application. Larger bubbles may require lifting the corner and reapplying. Never puncture bubbles with a pin — it will damage the ITO conductive layer and leave a permanent visible mark. If dust is trapped under the film, use masking tape to lift the film corner and remove the dust particle." },
      { question: "Can self-adhesive film be applied to textured or patterned glass?", answer: "No. The glass surface must be smooth, flat and completely dry. Textured, patterned, frosted or wired glass will not allow proper adhesion and will result in visible defects. The film works best on clear, smooth float glass." },
      { question: "How do I connect the power to the film?", answer: "The film has two conductive bus bars (usually top and bottom). Connect two-core wire to each bus bar using the supplied copper tape or conductive adhesive, run the wire to the transformer, and connect the transformer to a wall switch or remote receiver. The film operates on 48–65V AC (nominal 60V). The high-temperature protective tape on the bus bar must never be removed." },
      { question: "What happens if the film gets wet during installation?", answer: "PDLC self-adhesive film is a dry-stick product — water must never be used during application. If the glass surface is damp, dry it completely before applying the film. Moisture trapped under the film will cause edge lifting, delamination and electrical failure. After installation, all edges must be sealed with neutral-cure silicone to prevent moisture intrusion." },
      { question: "Can I remove self-adhesive smart film later?", answer: "Yes, self-adhesive film can be removed by heating the edges with a heat gun and slowly peeling it off. Any adhesive residue can be cleaned with glass cleaner. The glass underneath will be undamaged." },
    ],
  },
  {
    slug: "pdlc-smart-film-cost-pricing-guide",
    title: "PDLC Smart Film Cost & Pricing Guide: What Affects Your Project Budget",
    excerpt:
      "Understand how PDLC smart film is priced: film grade, size, control system, installation and shipping. Compare total costs against smart glass and curtains, and learn five ways to reduce your project budget without cutting quality.",
    date: "August 12, 2026",
    readTime: "6 min read",
    image: "/images/factory-cutting.webp",
    imageAlt: "PDLC smart film being precision-cut on a factory CNC cutting machine",
    sections: [
      {
        paragraphs: [
          "If you are budgeting for a PDLC smart film project, you have probably noticed that quoted prices vary widely — from under $50 to over $200 per square meter. The difference is not random: it comes down to film grade, size, customization, control electronics, installation and logistics. This guide breaks down every cost factor so you can compare quotes accurately and avoid budget surprises.",
        ],
      },
      {
        heading: "Price Breakdown: What You Are Actually Paying For",
        paragraphs: [
          "A complete smart film project has five cost components. Understanding each one helps you see where your money goes and where you can save.",
        ],
        list: [
          "Film material — the PDLC film itself, priced per square meter.",
          "Customization — cutting to size, special colors, non-standard voltages.",
          "Control system — transformer, wall switch, remote, Wi-Fi module or dimming controller.",
          "Installation — labor and consumables (varies hugely by country and complexity).",
          "Shipping and import — freight, insurance, duties and customs clearance.",
        ],
      },
      {
        heading: "Factor 1 — Film Type and Optical Grade",
        paragraphs: [
          "The single biggest price variable is the film itself. Standard white PDLC film is the most economical. Gray or black-tinted films, ultra-high-clarity grades (T8 with 92.5–94% transmittance, T9 up to 95%), and automotive-grade films with extended temperature ranges all cost more. Always ask for the optical test report, not just the catalogue number — two films both labeled 'high clarity' can differ by 10% in real transmittance. AYSENT's best-selling T7 grade delivers 89.5–92% parallel-light transmittance with a 165° viewing angle.",
          "Self-adhesive film is typically 10–20% more expensive per square meter than roll film because of the adhesive backing and release liner, but it saves you the cost of glass lamination.",
        ],
      },
      {
        heading: "Factor 2 — Size, Shape and Quantity",
        paragraphs: [
          "PDLC film is manufactured in rolls up to 1,800 mm wide. Panels within the standard width are priced at the per-square-meter rate. Custom widths above 1,800 mm require seaming (two panels joined invisibly) or a special production run, both of which add cost. Irregular shapes — arches, trapezoids, circles — increase material waste and labor time.",
          "Quantity matters more than most buyers realize. Sample orders (1–5 m²) are priced at a premium because of setup and packaging. Once you cross 30 m² (roll film MOQ), the per-meter price drops significantly, and above 500 m² you enter true wholesale pricing. If you have multiple projects in the pipeline, combining them into one order can save 15–25%.",
        ],
      },
      {
        heading: "Factor 3 — Control System and Accessories",
        paragraphs: [
          "The film is only half the system. You also need a transformer (sized to the total film area), a control method (wall switch, RF remote, Wi-Fi app, or voice assistant integration), and wiring. A basic wall-switch setup for a single window costs around $30–60 in electronics. A full smart-home integration with dimming, app control and multiple zones can run $300–800 depending on the number of zones and controllers.",
          "Always source the transformer and controls from the same supplier as the film. Mismatched voltage or poor-quality transformers are the leading cause of premature film failure, and a third-party electronics failure will void most film warranties.",
        ],
      },
      {
        heading: "Factor 4 — Installation Cost",
        paragraphs: [
          "Installation labor varies dramatically by region. In Southeast Asia and parts of Europe, a professional installer charges $15–30 per m². In North America, Australia and Northern Europe, rates of $50–100 per m² are common. Complex sites — high ceilings, exterior glass, wet areas, or buildings with strict access rules — can double the labor cost.",
          "For self-adhesive film, installation is the same process as high-grade window tinting, so any experienced window-film installer can do the job. For laminated smart glass, you need a glazier, which is more expensive. This is why self-adhesive film is often the most economical choice for renovation projects.",
        ],
      },
      {
        heading: "Factor 5 — Shipping, Duties and Import",
        paragraphs: [
          "Film rolls are lightweight but bulky, so sea freight is the most economical option for orders above 20 m². Air freight is faster but costs 3–5 times more. Express courier (DHL/FedEx/UPS) is convenient for samples but prohibitively expensive for bulk orders.",
          "Import duties vary by country. PDLC film is usually classified under HS code 3919 (self-adhesive plastic plates, sheets, film) or 7007 (safety glass) for laminated products. EU buyers should confirm CE documentation is included — missing certificates can lead to customs delays or extra charges. Always ask the supplier for a delivered-duty-paid (DDP) quote so there are no surprise costs at the port.",
        ],
      },
      {
        heading: "Cost Comparison: Film vs. Smart Glass vs. Curtains",
        paragraphs: [
          "To put PDLC film in perspective, here is a rough total-installed-cost comparison for a 10 m² office partition project (material + controls + installation, excluding shipping):",
        ],
        list: [
          "Self-adhesive smart film: $800–$1,800 — lowest total cost, reuses existing glass, fastest install.",
          "PDLC roll film + local lamination: $1,200–$2,500 — better for new glass, requires a local laminator.",
          "Switchable laminated smart glass: $2,500–$5,000 — highest cost, but fully sealed for wet areas and exteriors.",
          "Motorized curtains or blinds: $600–$1,500 — cheaper upfront, but requires maintenance, blocks light when closed, and lacks the projection and high-tech aesthetic of smart film.",
        ],
        tail: [
          "The right choice depends on whether the glass is already in place, the environment (dry vs. humid), and your client's design expectations.",
        ],
      },
      {
        heading: "Five Ways to Reduce Your Budget",
        list: [
          "Combine orders — one 100 m² shipment costs less per meter than two 50 m² shipments.",
          "Use standard sizes — panels within 1,800 mm width and rectangular shapes avoid custom-cutting premiums.",
          "Choose self-adhesive film for retrofits — it eliminates the cost of new glass and glazier labor.",
          "Start with wall-switch control — add Wi-Fi or dimming later as an upgrade; the transformer supports it.",
          "Sea freight for bulk — plan your order 4–6 weeks ahead and avoid expensive air freight.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "PDLC smart film pricing is transparent once you break it into film, customization, controls, installation and logistics. The cheapest quote is not always the best value — a film with a 3-year lifespan and no test reports will cost more in replacements than a quality film with a 5-year global warranty and certified optics. As a direct manufacturer, AYSENT SMART FILM provides itemized quotations that list every cost component, so you know exactly what you are paying for. Send us your glass schedule and destination country, and we will return a detailed, no-surprise quote within 24 hours.",
        ],
      },
    ],
    faq: [
      { question: "How much does PDLC smart film cost per square meter?", answer: "Prices range from $50 to $200+ per m² depending on film grade, quantity, customization and shipping. Standard white roll film in bulk (50+ m²) typically costs $50-80/m². Self-adhesive film is 10-20% more. Ultra-high-clarity or colored grades cost more." },
      { question: "What is the minimum order quantity for PDLC film?", answer: "AYSENT SMART FILM accepts cut sheet orders as small as 1 m² at a premium price. Roll film MOQ is 30 m². Wholesale pricing typically kicks in at 50 m², with the best rates above 500 m²." },
      { question: "Does the price include the transformer and controls?", answer: "Not always. Some quotes include only the film material. Always ask for an itemized quote that lists film, transformer, switches, wiring and shipping separately. AYSENT SMART FILM provides complete system quotes." },
      { question: "How much does professional installation cost?", answer: "Installation labor varies by region: $15-30/m² in Southeast Asia and parts of Europe, $50-100/m² in North America, Australia and Northern Europe. Complex sites with high ceilings or exterior glass can double the cost." },
      { question: "Is PDLC film cheaper than smart glass?", answer: "For retrofit projects, self-adhesive PDLC film is 40-60% cheaper than replacing glass with smart glass. For new construction, the gap narrows because glass must be purchased anyway. Film also saves on shipping because it is lightweight." },
      { question: "What are the hidden costs of PDLC film projects?", answer: "Common hidden costs include: customs duties and import taxes, electrical wiring and transformer installation, professional labor for complex sites, replacement of damaged film from poor installation, and extended warranty coverage." },
      { question: "Can I reduce the cost without sacrificing quality?", answer: "Yes. Five ways: combine multiple projects into one order for volume pricing, use standard sizes within 1800mm width, choose self-adhesive film for retrofits, start with wall-switch control (add Wi-Fi later), and use sea freight for bulk orders." },
      { question: "What HS code is used for PDLC film customs?", answer: "PDLC film is usually classified under HS code 3919 (self-adhesive plastic plates, sheets, film) or 7007 (safety glass) for laminated products. Confirm the correct code with your customs broker to avoid delays or extra duties." },
    ],
  },
  {
    slug: "pdlc-smart-film-installation-cost",
    title: "PDLC Smart Film Installation Cost: Complete 2026 Guide",
    excerpt:
      "A detailed breakdown of PDLC smart film installation costs in 2026: material pricing, labor rates by region, transformer and control costs, hidden fees, and money-saving tips for your project.",
    date: "August 20, 2026",
    readTime: "8 min read",
    image: "/images/factory-lamination.webp",
    imageAlt: "PDLC smart film being professionally installed onto office glass partition",
    sections: [
      {
        paragraphs: [
          "When budgeting for a PDLC smart film project, the film material is only part of the total cost. Installation labor, transformers, control systems, wiring and logistics can add 30-100% to the material price. This complete 2026 guide breaks down every cost component with real-world pricing, so you can budget accurately and avoid surprises.",
        ],
      },
      {
        heading: "Total Installation Cost: Quick Reference",
        paragraphs: [
          "For a typical 10 m² office partition project, here is what you can expect to pay in total (material + controls + installation):",
        ],
        list: [
          "DIY self-adhesive film: $700 – $1,500 (material only, no labor)",
          "Professional self-adhesive film: $1,200 – $3,000 (material + labor)",
          "PDLC roll film + local lamination: $1,500 – $3,500 (requires local glass fabricator)",
          "Switchable laminated smart glass: $3,000 – $6,000 (material + glazier labor)",
        ],
        tail: [
          "These are rough estimates. Actual costs vary by country, project complexity and supplier quality.",
        ],
      },
      {
        heading: "Cost Component 1: Film Material",
        paragraphs: [
          "The PDLC film itself is the largest single cost, typically 40-60% of the total project budget. Material pricing depends on grade, quantity and customization.",
          "Standard white roll film in commercial quantities (30+ m²) costs $50-80 per m². Self-adhesive film adds 10-20% because of the adhesive backing and release liner. Ultra-high-clarity grades (T8 with 92.5-94% transmittance, T9 up to 95%), gray/black tints, and custom colors cost $100-200+ per m². AYSENT's best-selling T7 grade delivers 89.5-92% parallel-light transmittance with a 165° viewing angle.",
          "Quantity discounts are significant. A 5 m² sample order might cost $120/m², while a 500 m² project order could drop to $45/m². If you have multiple projects, combining them into one shipment can save 15-25%.",
        ],
      },
      {
        heading: "Cost Component 2: Transformers and Controls",
        paragraphs: [
          "Every PDLC system needs a transformer to convert mains power (110V/220V) to low-voltage AC (48–65V, nominal 60V). The transformer size depends on the total film area — plan for 8–10W per square meter with safety margin. A 100W transformer covers about 10–12 m² of film.",
          "Control options range from simple to sophisticated:",
        ],
        list: [
          "Basic wall switch: $20-50 per zone",
          "RF remote control: $40-80 per receiver",
          "Wi-Fi smart controller: $80-200 (app + voice control)",
          "Dimming controller: $150-400 (stepless opacity adjustment)",
          "Multi-zone automation system: $300-1,000+",
        ],
        tail: [
          "Always source transformers and controls from the film supplier. Mismatched voltage is the #1 cause of premature film failure.",
        ],
      },
      {
        heading: "Cost Component 3: Installation Labor",
        paragraphs: [
          "Labor is the most variable cost, ranging from $15 to $150+ per m² depending on location and complexity. Here are typical 2026 rates:",
        ],
        list: [
          "Southeast Asia (Thailand, Vietnam, Philippines): $15-30/m²",
          "Eastern Europe (Poland, Romania, Hungary): $25-50/m²",
          "Western Europe (Germany, France, UK): $50-100/m²",
          "North America (USA, Canada): $60-120/m²",
          "Australia / New Zealand: $70-150/m²",
          "Middle East (UAE, Saudi Arabia): $30-60/m²",
        ],
        tail: [
          "Complex sites — high ceilings above 3 meters, exterior glass, curved panels, wet areas, or buildings with strict after-hours access rules — can double or triple the labor cost. Always get an on-site quote for non-standard installations.",
        ],
      },
      {
        heading: "Cost Component 4: Hidden and Ancillary Costs",
        list: [
          "Electrical wiring: running low-voltage cable from transformer to each pane — $50-200 per room",
          "Custom cutting: irregular shapes (arches, trapezoids) add 20-50% to material cost",
          "Edge sealing: silicone sealant for wet areas — $20-50 per pane",
          "Scaffolding or lift rental: for high ceilings — $200-800 per day",
          "Customs duties and import taxes: 5-25% of declared value depending on country",
          "Warranty extension: 3-5 year extended warranty adds 10-15%",
        ],
      },
      {
        heading: "DIY vs. Professional Installation: Cost Comparison",
        paragraphs: [
          "DIY installation saves on labor but carries risks. A botched install — bubbles, misalignment, damaged bus bars — can require full film replacement, costing more than hiring a professional in the first place.",
          "We recommend DIY only for: small panes under 1 m², dry interior locations, straightforward rectangular shapes, and if you have experience with window tinting. For everything else, hire a professional.",
        ],
      },
      {
        heading: "7 Ways to Reduce Installation Cost",
        list: [
          "Combine orders to hit volume pricing tiers (50+ m², 500+ m²)",
          "Use standard rectangular sizes within 1,800 mm width",
          "Choose self-adhesive film for retrofits (avoids glass replacement)",
          "Start with wall-switch control, upgrade to Wi-Fi later",
          "Plan 4-6 weeks ahead for sea freight (avoid air freight)",
          "Get multiple installer quotes and check references",
          "Order a sample first to verify quality before committing to bulk",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "PDLC smart film installation cost is predictable when you break it into material, controls, labor and ancillary costs. The key is to get itemized quotes and compare total cost of ownership, not just the per-meter film price. AYSENT SMART FILM provides complete system quotations including film, transformers, controls and shipping, with free installation guidance and remote video support. Send us your glass schedule and destination for a detailed quote within 24 hours.",
        ],
      },
    ],
    faq: [
      { question: "What is the average total cost to install PDLC smart film?", answer: "For a typical 10 m² office partition, total installed cost ranges from $1,200 to $3,000 for self-adhesive film with professional installation. Larger projects (50+ m²) have lower per-meter costs due to volume discounts." },
      { question: "Is it cheaper to install PDLC film myself?", answer: "DIY saves labor costs ($50-150/m²) but carries risk. A failed installation requiring film replacement can cost more than hiring a professional. DIY is only recommended for small, simple panes under 1 m²." },
      { question: "How much does a PDLC transformer cost?", answer: "Transformers cost $50-300 depending on wattage. A 100W transformer (covers ~10-12 m² at 8-10W/m²) costs $80-150. Always size the transformer to 120% of the total film area for safety margin. Standard ratings: 30W / 50W / 100W / 200W / 300W / 500W." },
      { question: "Does PDLC film require special electrical wiring?", answer: "PDLC film uses low-voltage AC (48-65V, nominal 60V), so standard two-core electrical wire is sufficient. The wire runs from the transformer to each pane's bus bars. No special high-voltage cabling is needed." },
      { question: "Can existing window tint installers apply PDLC film?", answer: "Yes. Self-adhesive PDLC film installation is similar to high-grade window tinting. Any experienced window film installer can learn PDLC installation with the supplier's guidance. However, electrical wiring should be done by a qualified electrician." },
      { question: "How long does professional installation take?", answer: "A trained installer can complete 5-10 m² of self-adhesive film per day, including wiring. A typical office meeting room (10-15 m²) takes 1-2 days. Larger projects are priced per square meter with a fixed timeline." },
      { question: "Are there ongoing maintenance costs for PDLC film?", answer: "PDLC film requires minimal maintenance. Clean with a soft cloth and mild glass cleaner. No recurring costs other than negligible power consumption (3.2W/㎡/h when transparent). The film should last 15+ years with proper installation." },
      { question: "What is the warranty on PDLC film installation?", answer: "AYSENT SMART FILM offers a 5-year global warranty on the film material, covering manufacturing defects, delamination and switching failure. Installation labor warranty varies by installer (typically 1-2 years). Electronic accessories carry a 2-year warranty." },
    ],
  },
  {
    slug: "smart-film-for-office-partitions",
    title: "Smart Film for Office Partitions: Design & Spec Guide",
    excerpt:
      "Everything architects and facility managers need to know about specifying PDLC smart film for office partitions: design considerations, technical specs, privacy compliance, cost, and real project examples.",
    date: "August 22, 2026",
    readTime: "7 min read",
    image: "/images/app-office.webp",
    imageAlt: "Modern office with PDLC smart film partitions switching between transparent and frosted",
    sections: [
      {
        paragraphs: [
          "Open-plan offices promise collaboration but often fail at privacy. Meeting rooms need confidentiality, focus areas need quiet, and executives need private spaces — without sacrificing the natural light and openness that modern workers value. PDLC smart film solves this dilemma by turning any glass partition into instant privacy glass at the touch of a button. This guide covers everything architects, designers and facility managers need to specify smart film for office partitions.",
        ],
      },
      {
        heading: "Why Smart Film for Office Partitions?",
        paragraphs: [
          "Traditional office partitions use either solid walls (block light, feel cramped) or clear glass (no privacy, distractions). Smart film gives you the best of both: open, light-filled spaces that become private in 0.1 seconds.",
          "Beyond privacy, smart film adds value in several ways:",
        ],
        list: [
          "Space flexibility: one room serves as open collaboration area and private meeting room",
          "Natural light: up to 92% transmittance (T7 grade) keeps interiors bright even when frosted",
          "165° ultra-wide viewing angle: clear views from the side, no visual blind spots",
          "Acoustic complement: pairs with acoustic glass for both visual and audio privacy (20-30dB reduction)",
          "Projection screen: frosted mode doubles as a rear-projection display for presentations",
          "Brand impression: high-tech aesthetic that impresses clients and recruits",
          "Energy savings: blocks 99% UV and 68-75% infrared heat through glass walls",
        ],
      },
      {
        heading: "Design Considerations",
        paragraphs: [
          "Successful smart film installations start with good design decisions. Here are the key factors to consider during the specification phase:",
        ],
      },
      {
        heading: "Glass Type and Thickness",
        paragraphs: [
          "For new construction, use tempered safety glass (minimum 8mm for partitions, 10mm+ for full-height walls). The PDLC film can be laminated between two glass sheets (switchable laminated glass) for the best durability, or self-adhesive film can be applied after installation.",
          "For retrofit projects, self-adhesive film works on any smooth, clear glass — tempered, laminated, or annealed. The glass must be flat; textured, patterned or curved glass requires special consideration.",
          "Full-height partitions (2.4m+) should use 10-12mm tempered glass for structural rigidity. The film width (up to 1,800mm) determines the maximum seamless panel width.",
        ],
      },
      {
        heading: "Control System Design",
        paragraphs: [
          "Office partitions typically need multiple control zones. A typical floor might have 5-10 meeting rooms, each requiring independent control. Plan the control system early:",
        ],
        list: [
          "Wall switches: one per room, mounted at the entrance — simplest and most reliable",
          "Central control panel: at reception or security desk, master control over all zones",
          "Smart app: facility managers can schedule privacy modes (e.g., frosted after hours)",
          "Motion sensors: automatically frost glass when a room is occupied",
          "Integration with booking systems: glass turns frosted when a meeting room is booked",
        ],
        tail: [
          "For corporate offices, we recommend wall switches as primary control with a Wi-Fi backup system for facility management.",
        ],
      },
      {
        heading: "Privacy and Compliance",
        paragraphs: [
          "In many jurisdictions, glass-walled meeting rooms must provide visual privacy for confidential discussions. Smart film helps meet these requirements while maintaining an open aesthetic.",
          "For areas requiring both visual and acoustic privacy (HR offices, boardrooms), pair smart film with acoustic laminated glass (STC 35+). The film handles visual privacy; the glass handles sound.",
          "Healthcare facilities using glass partitions with smart film should verify HIPAA or local health privacy compliance — the frosted state must provide complete visual obstruction, which quality PDLC film (haze ≥95%) achieves.",
        ],
      },
      {
        heading: "Technical Specifications for Office Use",
        list: [
          "Transmittance (ON): up to 92% (T7 grade) — bright, clear views when open",
          "Haze (OFF): up to 100% — complete privacy when frosted",
          "Viewing angle: 165° ultra-wide — clear from the side",
          "Switching speed: ≤0.1s — instant response",
          "Operating voltage: 48–65V AC (nominal 60V) — safe for office environments",
          "Power consumption: 3.2 W/㎡/h — negligible energy cost",
          "Max panel width: 1,800mm seamless (2,100mm ultra-wide available)",
          "Lifespan: 15+ years (lab tested)",
          "UV blocking: 99% — protects furniture and artwork",
          "Working temperature: -30°C to 90°C",
        ],
      },
      {
        heading: "Project Cost Estimation",
        paragraphs: [
          "For a typical office floor with 50 m² of partition glass:",
        ],
        list: [
          "Self-adhesive film (material): $3,000 – $5,000",
          "Transformers + controls (5 zones): $500 – $1,500",
          "Professional installation: $2,500 – $7,500 (varies by region)",
          "Total: $6,000 – $14,000",
        ],
        tail: [
          "Volume pricing applies: 100+ m² projects can reduce material cost by 20-30%.",
        ],
      },
      {
        heading: "Installation Timeline",
        paragraphs: [
          "A typical office smart film project follows this timeline:",
        ],
        list: [
          "Week 1: Site survey, glass measurement, quote confirmation",
          "Week 2-3: Film production and shipping (3-5 days for cut sheet, 5-7 days for roll film)",
          "Week 4: Professional installation (1-3 days for 50 m²)",
          "Week 4: Testing, handover, staff training",
        ],
        tail: [
          "Retrofit installations can be done after hours or on weekends to minimize office disruption.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "PDLC smart film is the ideal privacy solution for modern office partitions. It delivers instant privacy without sacrificing natural light, adds a high-tech brand impression, and integrates with smart building systems. The key to a successful project is early specification — involve the film supplier during the design phase to ensure glass dimensions, electrical routing and control zones are planned correctly. AYSENT SMART FILM provides free design consultation, detailed technical specifications, and worldwide shipping for office projects of any size.",
        ],
      },
    ],
    faq: [
      { question: "Can smart film be applied to existing office glass partitions?", answer: "Yes. Self-adhesive PDLC film is designed for retrofit applications. It applies directly onto existing glass without removal or replacement, making it ideal for office renovations. Installation can be done after hours to minimize disruption." },
      { question: "How much does smart film cost for office partitions?", answer: "For a typical 50 m² office floor, total installed cost ranges from $6,000 to $14,000 including film, transformers, controls and professional labor. Larger projects (100+ m²) benefit from volume pricing." },
      { question: "Does smart film provide enough privacy for meeting rooms?", answer: "Yes. Quality PDLC film has ≥95% haze in the OFF (frosted) state, providing complete visual privacy. For confidential meetings requiring audio privacy as well, pair with acoustic laminated glass." },
      { question: "Can each office partition be controlled independently?", answer: "Yes. Each room or zone can have its own wall switch, remote, or app control. A typical office floor with 5-10 meeting rooms would have 5-10 independent control zones, plus optional master control at reception." },
      { question: "How long does office smart film installation take?", answer: "A 50 m² office project typically takes 1-3 days for professional installation, including wiring and testing. Film production and shipping takes 3-5 days for cut sheet or 5-7 days for roll film. Total project timeline is 2-3 weeks from order to completion." },
      { question: "Can smart film integrate with office automation systems?", answer: "Yes. Smart film can integrate with building management systems (BMS), room booking software, motion sensors, and voice assistants. Wi-Fi controllers support API integration for custom automation." },
      { question: "What happens to smart film during a power outage?", answer: "When power is cut, PDLC film defaults to the frosted (privacy) state. This is actually a security benefit — meeting rooms remain private during power failures. A UPS backup can maintain transparent mode if needed." },
      { question: "Is smart film durable enough for high-traffic office areas?", answer: "Yes. Self-adhesive film has a scratch-resistant hardcoat top layer suitable for normal office contact. For areas with frequent physical contact (e.g., near door handles), we recommend laminated smart glass for maximum durability." },
    ],
  },
  {
    slug: "switchable-glass-projection-screen",
    title: "Switchable Glass as Projection Screen: Complete Guide",
    excerpt:
      "How PDLC switchable glass works as a rear-projection screen: brightness, resolution, viewing angles, projector specs, installation tips, and creative applications for offices, retail and hospitality.",
    date: "August 24, 2026",
    readTime: "7 min read",
    image: "/images/app-mall.webp",
    imageAlt: "PDLC smart glass used as rear projection screen in retail display",
    sections: [
      {
        paragraphs: [
          "One of the most exciting features of PDLC smart film is its ability to double as a high-quality projection screen. In the frosted (OFF) state, the film's milky white surface is perfectly suited for rear projection — turning an ordinary glass wall into a giant display for presentations, advertising, or immersive experiences. This complete guide explains how it works, what equipment you need, and how to get the best results.",
        ],
      },
      {
        heading: "How Switchable Glass Projection Works",
        paragraphs: [
          "When PDLC film is in the OFF (frosted) state, liquid crystal droplets scatter light in all directions. This scattering property is exactly what makes a good projection screen: the frosted surface diffuses projected light evenly, creating a bright, viewable image from wide angles.",
          "Rear projection is the standard setup: the projector is placed behind the glass, shining through the film toward the audience. This hides the projector and cabling, creates a clean look, and eliminates shadow interference from people walking in front of the screen.",
          "The same glass can switch between transparent (normal window/partition) and frosted (projection screen) in 0.1 seconds, making it a dual-purpose surface that saves space and adds versatility.",
        ],
      },
      {
        heading: "Image Quality: What to Expect",
        paragraphs: [
          "PDLC film projection quality is excellent for presentations, advertising and ambient displays. Here are the key performance characteristics:",
        ],
        list: [
          "Brightness: 80-90% of light passes through (gain ~0.8-0.9) — suitable for dim to medium ambient light",
          "Resolution: supports 1080p and 4K content; fine text is readable at normal viewing distances",
          "Viewing angle: ~160° horizontal and vertical — wider than most traditional screens",
          "Color: accurate color reproduction with good contrast in controlled lighting",
          "Uniformity: even illumination across the surface with a properly positioned projector",
        ],
        tail: [
          "For critical applications (broadcast, medical imaging), a dedicated projection screen may still be preferable. For business presentations and digital signage, PDLC glass excels.",
        ],
      },
      {
        heading: "Projector Specifications",
        paragraphs: [
          "Choosing the right projector is critical for good results on PDLC glass. Here are our recommendations:",
        ],
        list: [
          "Brightness: 3,000+ ANSI lumens for standard rooms; 5,000+ for bright environments",
          "Throw ratio: short-throw (0.4-0.8:1) for limited space behind glass; standard (1.5-2.5:1) for larger rooms",
          "Resolution: 1080p minimum; 4K for fine detail and large screens (above 100 inches)",
          "Laser vs. lamp: laser projectors preferred for 24/7 use (20,000+ hour lifespan, no lamp replacement)",
          "Keystone correction: essential for off-axis projector placement",
        ],
      },
      {
        heading: "Installation Best Practices",
        paragraphs: [
          "Proper installation ensures the best projection quality. Follow these guidelines:",
        ],
        list: [
          "Projector distance: follow the manufacturer's throw ratio chart for your screen size",
          "Center alignment: position the projector lens at the vertical and horizontal center of the glass",
          "Ambient light: reduce direct sunlight on the viewing side; use blinds or shades if needed",
          "Backside enclosure: hide the projector in a cabinet, ceiling cavity or dedicated projection room",
          "Ventilation: ensure projector has adequate airflow (laser projectors generate less heat)",
          "Cable management: run HDMI and power cables in the wall or ceiling cavity",
          "Screen size: maximum seamless panel is 1,800mm wide (2,100mm ultra-wide available); larger screens use invisible seaming",
        ],
      },
      {
        heading: "Creative Applications",
        paragraphs: [
          "Switchable glass projection opens up creative possibilities that traditional screens cannot match:",
        ],
        list: [
          "Meeting rooms: glass wall becomes a presentation screen, then switches back to transparent partition",
          "Retail storefronts: display advertising after hours, transparent during business hours",
          "Hotel lobbies: immersive welcome videos on feature walls",
          "Museums and exhibitions: interactive displays that reveal artifacts behind the glass",
          "Restaurants and bars: dynamic menu boards and ambiance projections",
          "Trade show booths: eye-catching displays that switch between video and product showcase",
          "Home theaters: movie screen that disappears when not in use",
        ],
      },
      {
        heading: "Cost Considerations",
        paragraphs: [
          "Using PDLC glass as a projection screen adds no extra cost beyond the standard smart film installation — the projection capability is inherent to the frosted state. Your total investment includes:",
        ],
        list: [
          "PDLC film or switchable glass: $50-200/m² depending on grade and size",
          "Projector: $500 (1080p entry) to $5,000+ (4K laser professional)",
          "Installation: $1,000-5,000 depending on complexity",
          "Total for a 100-inch diagonal screen: $2,500-10,000+",
        ],
        tail: [
          "Compared to a dedicated commercial projection screen ($1,000-3,000 for 100-inch), PDLC glass offers dual functionality at a competitive total cost.",
        ],
      },
      {
        heading: "Troubleshooting Common Issues",
        list: [
          "Dim image: increase projector brightness, reduce ambient light, or use a higher-gain film",
          "Hotspot (bright center): move projector farther from glass or use a diffuse-enhancement film",
          "Color shift: calibrate projector color temperature to 6500K; warm up projector for 15 minutes",
          "Visible seam: for multi-panel screens, use the manufacturer's invisible seaming technique",
          "Image distortion: correct keystone and ensure projector is perfectly perpendicular to glass",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "PDLC switchable glass as a projection screen is a versatile, space-saving solution that combines privacy glass with display functionality. With the right projector and proper installation, it delivers excellent image quality for presentations, advertising and creative displays. The dual-purpose nature — transparent window one moment, projection screen the next — makes it uniquely valuable for offices, retail, hospitality and public spaces. AYSENT SMART FILM supplies projection-optimized PDLC film and can recommend compatible projectors for your specific application.",
        ],
      },
    ],
    faq: [
      { question: "Can any PDLC smart film be used as a projection screen?", answer: "Yes. All PDLC film in the frosted (OFF) state works as a rear-projection surface because the liquid crystal droplets scatter light evenly. Some manufacturers offer projection-optimized grades with enhanced diffusion for brighter, more uniform images." },
      { question: "What is the best projector for PDLC glass projection?", answer: "We recommend laser projectors with 3,000+ ANSI lumens for standard rooms, 5,000+ for bright environments. Short-throw projectors work well when space behind the glass is limited. 1080p is sufficient for most business use; 4K for screens above 100 inches." },
      { question: "How bright does the image appear on PDLC glass?", answer: "PDLC film has a gain of approximately 0.8-0.9, meaning it transmits 80-90% of projected light. This is comparable to a standard matte white projection screen and works well in dim to medium ambient light conditions." },
      { question: "Can I use front projection instead of rear projection?", answer: "Rear projection is recommended because it hides the projector and eliminates shadows. Front projection is possible but less common — the frosted surface reflects light, but image quality may be reduced compared to a dedicated front-projection screen." },
      { question: "What is the maximum screen size possible?", answer: "The maximum seamless PDLC panel is 1,800mm wide standard (2,100mm ultra-wide available). Larger screens can be created by joining multiple panels with nearly invisible seams. Projector resolution and brightness become limiting factors for very large screens above 200 inches diagonal." },
      { question: "Does the glass need to be frosted for projection, or can it project when transparent?", answer: "Projection works only in the frosted (OFF) state. When transparent (ON), light passes straight through without scattering, so no visible image is formed. The glass switches between the two states in 0.1 seconds." },
      { question: "How do I hide the projector and cables?", answer: "The projector is typically placed in a ceiling cavity, cabinet, or dedicated projection room behind the glass. Cables run through wall or ceiling cavities. A local AV integrator can design a clean, hidden installation." },
      { question: "Is PDLC glass projection suitable for outdoor use?", answer: "PDLC film is designed for interior use. For outdoor applications, the film must be fully laminated between tempered glass and properly sealed against moisture. Bright sunlight will wash out the projected image, so outdoor use is limited to evening or shaded locations." },
    ],
  },
  {
    slug: "pdlc-film-lifespan",
    title: "PDLC Film Lifespan: How Long Does Smart Film Last?",
    excerpt:
      "A detailed look at PDLC smart film lifespan: rated hours, real-world longevity, factors that shorten or extend life, warranty coverage, and when to replace your film.",
    date: "August 26, 2026",
    readTime: "6 min read",
    image: "/images/factory-qc.webp",
    imageAlt: "Quality control testing of PDLC smart film durability in factory laboratory",
    sections: [
      {
        paragraphs: [
          "When investing in PDLC smart film, one of the most common questions is: how long will it last? The answer depends on film quality, installation, operating conditions and maintenance. This guide explains the rated lifespan, real-world performance, and what you can do to maximize the life of your smart film investment.",
        ],
      },
      {
        heading: "Rated Lifespan: What the Numbers Mean",
        paragraphs: [
          "PDLC film lifespan is typically rated in operating hours — the cumulative time the film is powered ON (transparent state). AYSENT SMART FILM rates its products at 15+ years of service life based on laboratory aging testing, equivalent to approximately 100,000 operating hours.",
          "To put this in perspective:",
        ],
        list: [
          "100,000 hours = 27.4 years at 10 hours/day",
          "100,000 hours = 45.7 years at 6 hours/day",
          "15+ years lab-tested service life",
          "3-year failure rate only 0.8% (industry average 3%)",
        ],
        tail: [
          "Most offices operate 8-10 hours/day, 5 days/week — about 2,500 hours/year. At that rate, even a 50,000-hour film lasts 20 years.",
        ],
      },
      {
        heading: "Real-World Longevity",
        paragraphs: [
          "Rated hours are laboratory measurements under ideal conditions. Real-world lifespan depends on several factors. Well-installed, quality PDLC film in a climate-controlled office typically lasts 15-20 years with no degradation.",
          "We have documented cases of AYSENT SMART FILM installations operating perfectly after 15+ years of daily use. The film may show slight yellowing after 10+ years (similar to any polymer product), but switching performance remains intact. Our 3-year failure rate is only 0.8%, far below the industry average of 3%.",
          "Cheaper, low-quality films may fail in 3-5 years — common failure modes include delamination, edge bubbling, dead zones, and reduced switching contrast. This is why choosing a reputable manufacturer matters.",
        ],
      },
      {
        heading: "Factors That Shorten Lifespan",
        list: [
          "Excessive heat: prolonged temperatures above 90°C accelerate polymer degradation (e.g., direct sunlight without UV protection)",
          "Moisture intrusion: water seeping under edges causes delamination and electrical failure (common in unsealed bathroom installations)",
          "Overvoltage: using a transformer with incorrect voltage (outside 48-65V AC range) damages the liquid crystal layer",
          "Poor installation: trapped air bubbles, dust, or improper bus bar connection lead to premature failure",
          "Physical damage: scratches, impacts, or improper cleaning can damage the conductive layers",
          "UV exposure: prolonged intense UV without proper blocking can cause yellowing over many years",
          "Removing the bus bar protective tape: the high-temperature protective tape on the copper electrode must never be removed",
          "Metal frame contact: film edges touching metal frames cause short circuits — maintain ≥2mm insulation gap",
        ],
      },
      {
        heading: "Factors That Extend Lifespan",
        list: [
          "Quality film: choose manufacturers with 15+ year lab-tested rating and CE/FCC/RoHS/PSE certification",
          "Professional installation: proper cleaning (dry application), edge sealing, and correct bus bar connection",
          "Matching transformer: always use 48-65V AC (nominal 60V) as specified by the manufacturer",
          "Climate control: operating within -30°C to 90°C range",
          "Edge sealing: neutral-cure silicone sealant on all edges, especially in humid environments",
          "Gentle cleaning: soft microfiber cloth with mild glass cleaner (no abrasive chemicals, no ammonia)",
          "Normal use: PDLC film supports high-frequency switching with negligible impact on lifespan",
          "UV protection: exterior glazing with low-E coating reduces UV and heat load",
          "Never remove bus bar protective tape: the high-temperature tape protects electrodes from oxidation",
        ],
      },
      {
        heading: "Signs Your Film May Need Replacement",
        paragraphs: [
          "PDLC film degrades gradually. Watch for these warning signs:",
        ],
        list: [
          "Reduced contrast: frosted state becomes less opaque, or transparent state appears hazy",
          "Dead zones: areas that no longer switch (usually starts near edges or bus bars)",
          "Yellowing: noticeable color shift compared to newer installations",
          "Delamination: film peeling away from glass at edges",
          "Flickering: inconsistent switching caused by degraded bus bar connections",
          "Slow response: switching takes longer than the rated 0.1 seconds",
        ],
        tail: [
          "If you notice these issues, contact the manufacturer for diagnosis. Some problems (loose wiring, transformer failure) can be repaired without replacing the film.",
        ],
      },
      {
        heading: "Warranty Coverage",
        paragraphs: [
          "Most reputable manufacturers offer 2-3 year warranties on PDLC film, covering manufacturing defects. AYSENT SMART FILM provides a 5-year global warranty — far exceeding the industry standard of 2 years.",
          "Warranty typically covers: film delamination, dead zones from manufacturing defects, switching failure not caused by improper installation or voltage issues, natural yellowing, and adhesive failure.",
          "Warranty does not cover: physical damage, improper installation (including wet application), water damage from poor sealing, voltage mismatch, outdoor exposure without lamination, or normal cosmetic aging (slight yellowing after 5+ years).",
          "Always register your warranty with the manufacturer and keep the purchase receipt. For commercial projects, ask for a warranty certificate that lists the installation date and covered serial numbers.",
        ],
      },
      {
        heading: "Replacement and Upgrading",
        paragraphs: [
          "When film reaches end of life, replacement is straightforward for self-adhesive products: heat the edges, peel off the old film, clean the glass, and apply new film. The glass itself is reusable, so replacement cost is just the new film plus labor.",
          "For laminated smart glass, the entire panel must be replaced (the film is sealed inside). This is more expensive but rarely needed — laminated glass installations typically last 20+ years.",
          "Upgrading to newer film technology (higher clarity, dimming capability, smart integration) is a good opportunity when replacing old film. Newer generations offer better optical performance and lower power consumption.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Quality PDLC smart film is a long-lasting investment, with a rated lifespan of 15+ years (lab tested, ~100,000 operating hours) and real-world performance of 15-20 years in typical office use. The key to maximizing lifespan is choosing a reputable manufacturer, professional dry installation, correct voltage (48-65V AC), and proper edge sealing in humid environments. With these basics covered, your smart film will provide reliable instant privacy for many years. AYSENT SMART FILM offers a 5-year global warranty, free technical support for the lifetime of your installation, and a 3-year failure rate of only 0.8%.",
        ],
      },
    ],
    faq: [
      { question: "How many years does PDLC smart film typically last?", answer: "AYSENT PDLC smart film is rated for 15+ years of service life based on laboratory aging testing (~100,000 operating hours). At 10 hours per day, that is over 27 years. Real-world performance in typical office use is 15-20 years. Our 3-year failure rate is only 0.8%, far below the industry average of 3%. Cheaper films may fail in 3-5 years." },
      { question: "What happens when PDLC film reaches end of life?", answer: "Aging film shows reduced contrast, dead zones near edges, slight yellowing, or slower switching. For self-adhesive film, the old film can be peeled off and replaced on the same glass. Laminated smart glass requires full panel replacement but typically lasts 20+ years." },
      { question: "Does frequent switching reduce the lifespan?", answer: "No. PDLC film is solid-state with no moving parts and supports high-frequency on-off cycling. Normal use has zero impact on lifespan. The primary aging factor is cumulative powered-on hours, not switch cycles." },
      { question: "Can PDLC film be repaired if part of it fails?", answer: "Some issues are repairable: loose bus bar connections can be reconnected, faulty transformers can be replaced. But if the film itself is damaged (delamination, dead zones from manufacturing defects), the affected panel must be replaced. Warranty covers manufacturing defects." },
      { question: "What is the warranty on AYSENT SMART FILM products?", answer: "AYSENT SMART FILM offers a 5-year global warranty on PDLC smart film and switchable laminated glass, covering manufacturing defects, delamination, dead zones, natural yellowing and switching failure. This far exceeds the industry average of 2 years. Electronic accessories carry a 2-year warranty." },
      { question: "Does heat from sunlight reduce PDLC film lifespan?", answer: "Prolonged temperatures above 90°C can accelerate aging. AYSENT film operates safely within -30°C to 90°C, far beyond the typical -20°C to 70°C industry range. For exterior or south-facing glass, use low-E coating or UV-blocking window film to reduce heat load." },
      { question: "Is it normal for PDLC film to yellow over time?", answer: "Slight yellowing after 10+ years is normal for any polymer product exposed to UV and oxygen. Quality films with UV stabilizers yellow very slowly. The yellowing is cosmetic and does not affect switching performance. Laminated glass with UV-blocking interlayers shows virtually no yellowing." },
      { question: "How do I know if my film is quality or cheap?", answer: "Check for: CE/FCC/RoHS/PSE certification, optical test reports (not just catalogue specs), 15+ year lab-tested lifespan, 5-year manufacturer warranty, factory audit reports, and the 3-year failure rate. Cheap films often lack certification, have inconsistent quality, and fail in 3-5 years." },
    ],
  },
  {
    slug: "self-adhesive-vs-laminated-pdlc-film",
    title: "Self-Adhesive vs Laminated PDLC Film: Which to Choose?",
    excerpt:
      "A detailed comparison of self-adhesive PDLC film versus factory-laminated switchable glass: cost, durability, installation, ideal applications, and a decision framework for your project.",
    date: "August 28, 2026",
    readTime: "7 min read",
    image: "/images/band-oem.webp",
    imageAlt: "Comparison of self-adhesive PDLC film roll and laminated switchable glass panel",
    sections: [
      {
        paragraphs: [
          "When specifying PDLC switchable privacy technology, the first decision is between two product forms: self-adhesive film that applies to existing glass, or factory-laminated switchable glass where the film is sealed between glass sheets. Both use the same PDLC technology and deliver the same instant frosted-to-transparent switching, but they differ significantly in cost, durability, installation and ideal use cases. This guide helps you choose the right product for your project.",
        ],
      },
      {
        heading: "What Is Self-Adhesive PDLC Film?",
        paragraphs: [
          "Self-adhesive PDLC film is the PDLC layer with a high-tack adhesive backing and a release liner. It is designed to be applied directly onto existing glass surfaces — windows, partitions, doors — without replacing the glass. Installation is similar to high-grade window tinting.",
          "The film is supplied in rolls or pre-cut panels. The installer cleans the glass, peels the release liner, applies the film, smooths out air bubbles, trims the edges, and connects the low-voltage power. A trained installer can complete a typical office partition in under a day.",
        ],
      },
      {
        heading: "What Is Laminated Switchable Glass?",
        paragraphs: [
          "Laminated switchable glass (also called smart glass) is a factory-finished product: the PDLC film is laminated between two sheets of tempered glass using EVA or PVB interlayers. The result is a complete, safety-rated glazing panel that arrives on site ready to install like any other architectural glass.",
          "Because the PDLC layer is hermetically sealed between glass, it is fully protected from moisture, scratches, cleaning chemicals and physical impact. This makes laminated glass the premium choice for demanding environments.",
        ],
      },
      {
        heading: "Side-by-Side Comparison",
        paragraphs: [
          "Here is how the two products compare across key factors:",
        ],
        list: [
          "Cost (material): Self-adhesive $50-100/m² | Laminated $150-300/m²",
          "Installation: Self-adhesive = window tint installer (dry apply), 1 day/room | Laminated = glazier, requires framing",
          "Durability: Self-adhesive = good for dry interiors | Laminated = excellent, sealed for wet/exterior",
          "Retrofit: Self-adhesive = yes, applies to existing glass | Laminated = no, requires glass replacement",
          "Lead time: Self-adhesive = 3-5 days (cut sheet) | Laminated = 15-20 days",
          "Max width: Self-adhesive = 1,800mm (2,100mm ultra-wide) | Laminated = 1,800mm+",
          "Thickness: Self-adhesive = ~0.47mm | Laminated = 10-12mm total (5+5 or 6+6 glass)",
          "Warranty: Self-adhesive = 5 years | Laminated = 5 years",
          "Power: Both 3.2W/㎡/h, 48-65V AC (nominal 60V)",
          "Switching speed: Both ≤0.1 seconds",
          "Viewing angle: Both 165° (T7/T9 grade)",
        ],
      },
      {
        heading: "When to Choose Self-Adhesive Film",
        paragraphs: [
          "Self-adhesive film is the best choice in these scenarios:",
        ],
        list: [
          "Retrofit projects where glass is already installed",
          "Renovation budgets that cannot afford glass replacement",
          "Dry interior locations: offices, meeting rooms, retail partitions",
          "Rental or temporary spaces where removal may be needed",
          "Projects with tight timelines (7-15 day lead time)",
          "Large areas where material cost is the primary concern",
          "DIY or local installer capability exists",
        ],
      },
      {
        heading: "When to Choose Laminated Smart Glass",
        paragraphs: [
          "Laminated switchable glass is the right choice when:",
        ],
        list: [
          "New construction where glass is being purchased anyway",
          "Wet areas: bathrooms, showers, spas, swimming pool enclosures",
          "Exterior glazing: facades, curtain walls, skylights, storefronts",
          "High-traffic areas: hospitals, schools, public buildings",
          "Projects requiring safety glass certification (tempered + laminated)",
          "Maximum durability and 20+ year lifespan expectations",
          "Client demands premium, factory-finished appearance",
        ],
      },
      {
        heading: "Cost Comparison: Real Project Example",
        paragraphs: [
          "For a 20 m² office partition project (4 meeting rooms):",
        ],
        list: [
          "Self-adhesive film: $1,500 (material) + $1,000 (install) = $2,500 total",
          "Laminated smart glass: $4,000 (material) + $1,500 (glazier) = $5,500 total",
          "Savings with self-adhesive: $3,000 (55% less)",
        ],
        tail: [
          "For new construction, the comparison changes: if glass must be purchased anyway, the incremental cost of switchable lamination is only $100-200/m², making laminated glass more competitive.",
        ],
      },
      {
        heading: "The Hybrid Solution",
        paragraphs: [
          "Many projects use both products in different areas — this is often the optimal approach:",
          "Use laminated smart glass for: bathroom/shower partitions, exterior windows, skylights, and high-traffic public areas. Use self-adhesive film for: interior office partitions, meeting rooms, and dry retail spaces.",
          "Sourcing both from the same manufacturer ensures consistent color, optical performance and switching characteristics across the entire project. AYSENT SMART FILM produces both product lines in the same factory, with unified quality control and warranty support.",
        ],
      },
      {
        heading: "Questions to Ask Your Supplier",
        list: [
          "Do you provide both self-adhesive film and laminated glass? (single source = consistency)",
          "What is the rated lifespan for each product?",
          "Can you provide optical test reports for both products?",
          "What is the warranty coverage and duration?",
          "Do you offer installation guidance or certified installer network?",
          "Can you provide project references for each product type?",
          "What is the lead time for sample and bulk orders?",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "The choice between self-adhesive film and laminated smart glass comes down to three questions: Is the glass already installed? Is the environment wet or exterior? What is the budget? If you answered yes to retrofit, no to wet/exterior, and budget-conscious, self-adhesive film is the clear winner. If you are building new, need wet-area durability, or want the longest lifespan, laminated smart glass is the premium choice. Many projects use both for optimal cost-performance balance. AYSENT SMART FILM manufactures both products and provides free project consultation to help you specify the right solution for each area.",
        ],
      },
    ],
    faq: [
      { question: "Which is more durable: self-adhesive film or laminated glass?", answer: "Laminated smart glass is more durable because the PDLC layer is hermetically sealed between glass sheets, protected from moisture, scratches and impact. Self-adhesive film is durable for dry interior use but requires edge sealing in humid environments and is more susceptible to surface damage." },
      { question: "Can self-adhesive film be used in bathrooms?", answer: "Yes, but only with proper edge sealing (silicone sealant on all edges) and good ventilation. For shower enclosures and constantly wet areas, laminated smart glass is strongly recommended because the sealed structure eliminates any moisture risk." },
      { question: "Is self-adhesive film cheaper than laminated glass?", answer: "For retrofit projects, self-adhesive film is 40-60% cheaper because it reuses existing glass and installs faster. For new construction where glass must be purchased anyway, the cost gap narrows significantly." },
      { question: "Can I install self-adhesive film myself?", answer: "For small panes under 1 m², a confident DIYer with window-tinting experience can achieve good results. For larger panels, curved glass, or any project requiring electrical wiring, we recommend professional installation." },
      { question: "Does laminated smart glass require special framing?", answer: "Laminated smart glass installs like standard architectural glass. It is thicker (typically 10-12mm total) than single-pane glass, so the frame must accommodate the thickness. Any standard glazing system that supports laminated glass works." },
      { question: "Can self-adhesive film be removed without damaging the glass?", answer: "Yes. Self-adhesive film can be removed by heating the edges with a heat gun and slowly peeling. Any adhesive residue cleans off with glass cleaner. The glass underneath is undamaged and reusable." },
      { question: "Which product has better optical clarity?", answer: "Both use the same PDLC technology, so optical performance is similar when comparing the same film grade (T7: 89.5-92% transmittance, <2% haze, 165° viewing angle). Laminated glass may have slightly better clarity because the film is under uniform pressure during lamination, but the difference is negligible for most applications." },
      { question: "Can I mix self-adhesive film and laminated glass in one project?", answer: "Absolutely. Many projects use laminated glass for wet areas and exteriors, and self-adhesive film for dry interior partitions. Sourcing both from the same manufacturer ensures consistent color and performance. AYSENT SMART FILM produces both in the same factory." },
    ],
  },
  {
    slug: "smart-film-for-hotel-bathrooms",
    title: "Smart Film for Hotel Bathrooms: Privacy & Design Guide",
    excerpt:
      "Why hotels are switching to PDLC smart film for bathroom privacy: guest experience, design flexibility, energy savings, installation tips, and ROI analysis for hotel owners and designers.",
    date: "August 30, 2026",
    readTime: "7 min read",
    image: "/images/app-hotel.webp",
    imageAlt: "Luxury hotel bathroom with PDLC smart film glass partition switching to frosted privacy",
    sections: [
      {
        paragraphs: [
          "The hotel bathroom has evolved from a purely functional space to a key differentiator in guest experience. Modern travelers expect bathrooms that feel spacious, luxurious and private — a challenge when bathrooms are often small, windowless, or separated by glass walls that either block light or compromise privacy. PDLC smart film solves this elegantly: glass walls that are transparent when you want light and views, frosted when you need privacy. This guide explains why smart film is becoming a standard feature in boutique and luxury hotels, and how to specify it correctly.",
        ],
      },
      {
        heading: "Why Hotels Are Adopting Smart Film",
        paragraphs: [
          "Hotel operators choose PDLC smart film for bathroom glass for several compelling reasons:",
        ],
        list: [
          "Space perception: transparent glass makes small bathrooms feel larger and connected to the room",
          "Natural light: glass walls let daylight reach interior bathrooms, reducing daytime lighting needs",
          "Instant privacy: one touch on a wall switch or bedside control turns the glass frosted",
          "Luxury impression: smart technology signals a premium, modern hotel experience",
          "Design flexibility: glass replaces solid walls, opening up floor plan options",
          "Energy savings: daylight reduces artificial lighting; frosted state provides insulation",
          "Maintenance: glass is easier to clean than curtains or blinds that collect moisture and mold",
        ],
      },
      {
        heading: "Typical Hotel Applications",
        list: [
          "Bathroom-to-bedroom glass partitions: the most common application — switch between open feel and privacy",
          "Shower enclosures: frosted for privacy during use, transparent to showcase designer tilework",
          "Toilet compartment glass: instant privacy at the touch of a button",
          "Spa and wellness areas: switch between social (transparent) and private (frosted) modes",
          "Suite connecting doors: glass doors that become opaque for privacy between rooms",
          "Meeting and event spaces: glass walls that switch for breakout sessions",
        ],
      },
      {
        heading: "Product Specification for Hotel Bathrooms",
        paragraphs: [
          "Hotel bathrooms are humid environments, so product selection is critical. Here are our recommendations:",
        ],
        list: [
          "Product type: Laminated switchable glass (preferred) or self-adhesive film with full edge sealing",
          "Glass: 8-10mm tempered, laminated for safety (required for shower enclosures in most codes)",
          "Film grade: Standard white (haze ≥95% for complete privacy, transmittance ≥80% when clear)",
          "Voltage: 48–65V AC (nominal 60V, safe for wet environments, low risk of electrical hazard)",
          "IP rating: Transformer and controls must be IP44+ for bathroom installation",
          "Control: Wall switch inside bathroom + secondary control at bedside (convenience)",
          "Edge sealing: 100% silicone sealant on all edges, especially bottom edge near water",
        ],
      },
      {
        heading: "Control System Design for Hotels",
        paragraphs: [
          "Hotel smart film control should be intuitive for guests while manageable for staff. Best practices:",
        ],
        list: [
          "Primary wall switch: inside bathroom, clearly labeled 'Privacy Glass' with LED indicator",
          "Bedside secondary switch: allows guests to frost the bathroom glass from bed",
          "Master override: housekeeping staff can reset all glass to transparent for cleaning",
          "Room card integration: glass defaults to frosted when room is vacant (energy saving + privacy)",
          "Do Not Disturb sync: optional integration with DND indicator light",
          "No app required: physical switches are more reliable and guest-friendly than smartphone apps",
        ],
        tail: [
          "For luxury suites, add a dimming controller that allows stepless opacity adjustment from 0-100%.",
        ],
      },
      {
        heading: "Installation Considerations",
        paragraphs: [
          "Hotel bathroom installations require attention to moisture and electrical safety:",
        ],
        list: [
          "Electrical: all wiring must be in conduit, transformer in a dry, ventilated location outside the wet zone",
          "Sealing: apply neutral-cure silicone to all four edges after installation; pay special attention to the bottom edge",
          "Ventilation: ensure bathroom has proper exhaust fan to reduce humidity (target <70% RH)",
          "Glass type: use tempered laminated glass for shower enclosures (safety code requirement in most countries)",
          "Access: leave a service panel near the transformer for maintenance",
          "Timing: install film after all tiling and painting is complete to avoid construction damage",
        ],
      },
      {
        heading: "ROI Analysis for Hotel Owners",
        paragraphs: [
          "Smart film is an investment that can improve both guest satisfaction and operational efficiency:",
        ],
        list: [
          "Cost per room: $800-2,500 for a typical bathroom partition (material + installation)",
          "Perceived value: guests perceive smart film as a premium feature, supporting higher room rates",
          "Review impact: 'smart glass bathroom' is a memorable feature mentioned in positive reviews",
          "Energy savings: daylight reduces lighting energy by 20-40% in rooms with glass bathrooms",
          "Maintenance: eliminates shower curtains (mold, replacement) and reduces blind cleaning",
          "Differentiation: stands out vs. competitor hotels in online booking comparisons",
          "Payback period: typically 2-4 years through higher ADR (average daily rate) and occupancy",
        ],
      },
      {
        heading: "Case Study: Boutique Hotel Renovation",
        paragraphs: [
          "A 48-room boutique hotel in Southeast Asia recently renovated all bathrooms with PDLC smart film partitions. Results after 6 months:",
        ],
        list: [
          "Average daily rate increased by $15 (8% uplift) attributed to 'smart glass bathroom' feature",
          "Occupancy rate improved from 72% to 81% (feature listed as deciding factor in booking surveys)",
          "Guest satisfaction score (NPS) increased from 42 to 68",
          "Housekeeping time per room reduced by 3 minutes (no curtains to adjust/clean)",
          "Energy consumption for bathroom lighting reduced by 28%",
          "ROI achieved in 2.8 years",
        ],
      },
      {
        heading: "Common Mistakes to Avoid",
        list: [
          "Using self-adhesive film without proper edge sealing in showers — leads to delamination",
          "Installing transformer inside the wet zone — electrical safety hazard",
          "Only one switch location — guests want control from both bathroom and bedside",
          "Skipping tempered glass for shower enclosures — safety code violation",
          "Poor ventilation — high humidity accelerates any film degradation",
          "Choosing cheap film without certification — yellowing and failure in 2-3 years",
          "No master override for housekeeping — staff cannot clean efficiently",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "PDLC smart film is a transformative feature for hotel bathrooms, combining the openness of glass with instant privacy at the touch of a button. It elevates guest experience, supports higher room rates, reduces maintenance, and saves energy — with a typical ROI of 2-4 years. The key to success is correct product specification (laminated glass for wet areas), proper edge sealing, and intuitive dual-control placement. AYSENT SMART FILM supplies hotel-grade switchable glass and film worldwide, with project references across boutique and luxury hotel properties. Contact us for a tailored quotation and design consultation for your hotel renovation or new build.",
        ],
      },
    ],
    faq: [
      { question: "Is smart film safe for hotel shower enclosures?", answer: "Yes, when properly specified. Use tempered laminated switchable glass (safety-rated) with full silicone edge sealing. The low-voltage AC system (48-65V, nominal 60V) is safe for wet environments. The transformer must be installed in a dry, ventilated location outside the shower zone." },
      { question: "How much does smart film cost for a hotel bathroom?", answer: "A typical hotel bathroom partition (2-4 m²) costs $800-2,500 including material, transformer, controls and professional installation. Laminated smart glass is at the higher end; self-adhesive film with proper sealing at the lower end." },
      { question: "Can hotel guests figure out how to use smart film?", answer: "Yes. A clearly labeled wall switch with an LED indicator is intuitive. Most guests understand it immediately. We recommend a small 'Privacy Glass' label next to the switch for clarity. Luxury suites can add a brief in-room directory note." },
      { question: "What happens if a guest leaves the smart film on all night?", answer: "PDLC film consumes only 3.2W/㎡/h when transparent — about the same as a small LED night light. The cost is negligible (a few cents per night). Many hotels integrate the film with the room card system so it defaults to frosted (zero power) when the room is vacant." },
      { question: "How do housekeeping staff manage smart film?", answer: "Hotels should provide a master override switch or key fob that housekeeping can use to set all glass to transparent for cleaning. This is a standard feature in hotel-grade control systems. Staff should also be trained to report any flickering or dead zones." },
      { question: "Does smart film require special maintenance in hotels?", answer: "Minimal. Clean with a soft cloth and mild glass cleaner (no abrasive chemicals). Check edge sealing annually and re-seal if needed. The transformer should be inspected during routine electrical maintenance. No other special maintenance is required." },
      { question: "Can smart film be retrofitted into existing hotel bathrooms?", answer: "Yes. Self-adhesive PDLC film applies directly onto existing glass partitions and shower enclosures. This is the most cost-effective way to add smart film during a hotel renovation. Installation can be done room-by-room to minimize guest disruption." },
      { question: "What is the warranty for hotel smart film installations?", answer: "AYSENT SMART FILM offers a 5-year global warranty on PDLC smart film and laminated glass. For high-volume hotel contracts (50+ rooms), we offer extended warranty packages and priority technical support. Electronic accessories carry a 2-year warranty." },
    ],
  },
];

export const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Applications", path: "/applications" },
  { label: "About Us", path: "/about" },
  { label: "FAQ", path: "/faq" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
];
