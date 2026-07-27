// Shared site data for AYSENT SMART FILM B2B website

export const BRAND = {
  name: "AYSENT SMART FILM",
  tagline: "Privacy on Demand, Quality from the Source Factory",
  email: "aaronliu@aysentglass.com",
  whatsapp: "+86-15163206027",
  phone: "+86-15163206027",
  wechat: "008615163206027",   // 改成你的真实微信号
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
}

export const PRODUCTS: Product[] = [
  {
    slug: "pdlc-smart-film",
    name: "PDLC Smart Film",
    short:
      "Roll-form PDLC smart glass film that switches from frosted to transparent in 0.1 seconds — ideal for lamination and large-scale projects.",
    overview:
      "Our PDLC (Polymer Dispersed Liquid Crystal) smart film is the core product of AYSENT SMART FILM. When powered on, liquid crystal molecules align to make the film instantly transparent; when powered off, the film turns frosted for complete privacy. Supplied in roll form for glass laminators, fabricators and project contractors worldwide.",
    image: "/images/product-pdlc.jpg",
    bandImage: "/images/band-switch.jpg",
    imageAlt: "PDLC smart film roll switching between transparent and frosted states",
    imageSize: "1200×800",
    highlights: [
      "Transmittance up to 82% (ON)",
      "0.1s switching speed",
      "Low power consumption",
      "Custom widths up to 1,800 mm",
    ],
    specs: [
      { label: "Transmittance (ON / OFF)", value: "≥ 82% / ≤ 8%" },
      { label: "Haze (ON / OFF)", value: "≤ 5% / ≥ 95%" },
      { label: "Power Consumption", value: "≤ 5 W/m²" },
      { label: "Operating Voltage", value: "AC 36V / 48V / 60V" },
      { label: "Film Thickness", value: "0.38 mm ± 0.02 mm" },
      { label: "Max Width", value: "1,800 mm (customizable)" },
      { label: "Switching Speed", value: "≤ 0.1 s" },
      { label: "Working Temperature", value: "-20°C ~ 70°C" },
      { label: "Lifespan", value: "≥ 80,000 hours" },
    ],
    features: [
      "Instant privacy: switches between transparent and frosted in a tenth of a second via wall switch, remote control or smart home system.",
      "High clarity: industry-leading transmittance and low haze in the ON state keep views sharp and natural.",
      "Energy efficient: power is only needed to stay transparent, with consumption below 5 W per square meter.",
      "UV & IR blocking: blocks over 98% of UV rays and reduces solar heat gain for interior comfort.",
      "Rear-projection ready: in the frosted state the film doubles as a high-quality projection screen.",
      "Roll supply & custom sizes: widths up to 1,800 mm, cut-to-size service for project orders.",
    ],
    applications: [
      "Office partitions and conference rooms",
      "Hotel bathrooms and guest-room privacy",
      "Villa windows, doors and skylights",
      "Hospital wards and clinic partitions",
      "Retail storefronts and projection displays",
    ],
  },
  {
    slug: "self-adhesive-smart-film",
    name: "Self-Adhesive Smart Film",
    short:
      "Peel-and-stick switchable privacy film that retrofits directly onto existing glass — no glass replacement needed.",
    overview:
      "The self-adhesive smart film adds a high-tack adhesive backing to our PDLC film, allowing it to be applied directly onto existing glass surfaces. It is the fastest and most cost-effective way to upgrade windows, partitions and doors into switchable privacy glass — perfect for renovation and retrofit projects.",
    image: "/images/product-adhesive.jpg",
    bandImage: "/images/band-project.jpg",
    imageAlt: "Self-adhesive switchable privacy film applied to existing office glass",
    imageSize: "1200×800",
    highlights: [
      "Retrofit on existing glass",
      "Peel-and-stick installation",
      "No glass replacement cost",
      "Ideal for renovation projects",
    ],
    specs: [
      { label: "Structure", value: "PDLC film + adhesive layer + release liner" },
      { label: "Transmittance (ON / OFF)", value: "≥ 80% / ≤ 8%" },
      { label: "Haze (ON / OFF)", value: "≤ 6% / ≥ 95%" },
      { label: "Power Consumption", value: "≤ 5 W/m²" },
      { label: "Operating Voltage", value: "AC 36V / 48V / 60V" },
      { label: "Total Thickness", value: "≈ 0.40 mm" },
      { label: "Max Width", value: "1,500 mm" },
      { label: "Adhesive Type", value: "Optical-grade pressure-sensitive adhesive" },
      { label: "Lifespan", value: "≥ 50,000 hours" },
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
  },
  {
    slug: "switchable-laminated-glass",
    name: "Switchable Laminated Glass",
    short:
      "Ready-to-install smart glass panels: PDLC film laminated between safety glass for facades, partitions and curtain walls.",
    overview:
      "Switchable laminated glass integrates our PDLC smart film between two sheets of tempered or float glass using EVA/PVB lamination. The result is a factory-finished, safety-rated smart glass panel that arrives ready to install — ideal for curtain walls, partitions, doors and skylights in commercial and residential projects.",
    image: "/images/product-laminated.jpg",
    bandImage: "/images/app-mall.jpg",
    imageAlt: "Switchable laminated smart glass panel for office curtain wall",
    imageSize: "1200×800",
    highlights: [
      "Ready-to-install panels",
      "Safety-rated laminated glass",
      "Facade & curtain wall grade",
      "Custom sizes and shapes",
    ],
    specs: [
      { label: "Glass Configuration", value: "5+5 mm / 6+6 mm (customizable)" },
      { label: "Glass Types", value: "Tempered / ultra-clear / tinted / Low-E" },
      { label: "Interlayer", value: "PDLC film + EVA (PVB optional)" },
      { label: "Transmittance (ON / OFF)", value: "≥ 80% / ≤ 8%" },
      { label: "Power Consumption", value: "≤ 5 W/m²" },
      { label: "Operating Voltage", value: "AC 36V / 48V / 60V" },
      { label: "Max Panel Size", value: "1,800 × 3,000 mm" },
      { label: "Safety Standard", value: "Laminated safety glass (EN 12150 / ANSI Z97.1 compliant options)" },
      { label: "Lifespan", value: "≥ 80,000 hours" },
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
  },
  {
    slug: "smart-film-accessories",
    name: "Smart Film Accessories",
    short:
      "Transformers, remote controls, smart control modules and installation tools — everything needed to power and control smart film.",
    overview:
      "AYSENT SMART FILM supplies a complete range of accessories engineered to work perfectly with our PDLC films and smart glass: power transformers, remote-control systems, Wi-Fi/app smart modules, dimming controllers and professional installation tool kits. Sourcing film and accessories from one factory guarantees compatibility and simplifies your supply chain.",
    image: "/images/product-accessories.jpg",
    bandImage: "/images/band-accessories.jpg",
    imageAlt: "Smart film transformers, remote controls and installation tool kit",
    imageSize: "1200×800",
    highlights: [
      "Power transformers (36V/48V/60V)",
      "Remote & Wi-Fi app control",
      "Dimming controllers",
      "Professional install tool kits",
    ],
    specs: [
      { label: "Transformer Output", value: "AC 36V / 48V / 60V, 50W – 1,000W" },
      { label: "Input Voltage", value: "AC 110V / 220V, 50/60Hz" },
      { label: "Control Options", value: "Wall switch / RF remote / Wi-Fi app / voice assistant" },
      { label: "Dimming Range", value: "0–100% stepless (with dimming module)" },
      { label: "Certifications", value: "CE / RoHS" },
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
  },
];

export const ADVANTAGES = [
  {
    icon: "Factory",
    title: "Direct Factory",
    text: "Source directly from the manufacturer — no middlemen, competitive pricing, and full control over quality and lead times.",
  },
  {
    icon: "BadgeCheck",
    title: "Full Certifications",
    text: "ISO9001 quality system with CE and RoHS certified products, ready for European, American and Middle East markets.",
  },
  {
    icon: "FlaskConical",
    title: "Rapid Prototyping",
    text: "Samples ready in 3–5 days. Test quality, switching performance and packaging before you commit to volume orders.",
  },
  {
    icon: "Layers",
    title: "Stable Mass Production",
    text: "Automated coating and lamination lines deliver consistent quality at scale, with mass-production lead times of 7–15 days.",
  },
  {
    icon: "Globe2",
    title: "Global Logistics",
    text: "Export experience to 40+ countries with FOB/CIF/EXW terms, sea/air/express freight options and full customs documentation.",
  },
  {
    icon: "Settings",
    title: "OEM/ODM Service",
    text: "Custom sizes, colors, voltages, control systems, logo printing and retail packaging — your brand, our factory.",
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
    image: "/images/app-office.jpg",
    imageAlt: "Switchable privacy film on office glass partition walls",
  },
  {
    slug: "hotels",
    name: "Hotels",
    pain: "Hotel bathrooms and guest rooms need both openness and instant privacy, while designers want a premium, high-tech guest experience.",
    solution:
      "Smart film on bathroom glass and room dividers gives guests one-touch privacy with a luxury feel — a signature feature in high-end hotels, from guest suites to spa and shower enclosures.",
    products: ["self-adhesive-smart-film", "switchable-laminated-glass"],
    image: "/images/app-hotel.jpg",
    imageAlt: "Smart glass bathroom partition in a luxury hotel suite",
  },
  {
    slug: "villas-homes",
    name: "Villas & Homes",
    pain: "Large windows and glass doors expose interiors to views and sunlight; curtains and blinds block light and need cleaning.",
    solution:
      "Switchable film on windows, doors and skylights replaces curtains: transparent when you want the view, frosted when you want privacy, with 98% UV blocking and smart-home control integration.",
    products: ["self-adhesive-smart-film", "pdlc-smart-film"],
    image: "/images/app-villa.jpg",
    imageAlt: "Villa windows with switchable smart film for privacy",
  },
  {
    slug: "automotive",
    name: "Automotive",
    pain: "Vehicle cabins suffer from heat, glare and UV exposure, while passengers demand privacy and comfort in premium vehicles.",
    solution:
      "Automotive-grade smart film for side windows, sunroofs and partition screens delivers on-demand privacy and solar control — popular in luxury cars, RVs, yachts and VIP transport conversions.",
    products: ["pdlc-smart-film", "smart-film-accessories"],
    image: "/images/app-automotive.jpg",
    imageAlt: "Switchable smart film on automotive sunroof and windows",
  },
  {
    slug: "shopping-mall-curtain-walls",
    name: "Shopping Mall Curtain Walls",
    pain: "Mall facades and storefronts need solar control by day and eye-catching display surfaces by night, without heavy mechanical shading.",
    solution:
      "Switchable laminated glass curtain walls adjust transparency for daylight management and transform into giant rear-projection media facades after dark — architecture and advertising in one surface.",
    products: ["switchable-laminated-glass", "smart-film-accessories"],
    image: "/images/app-mall.jpg",
    imageAlt: "Smart glass curtain wall facade on a shopping mall",
  },
];

export const FAQS = [
  {
    q: "What is your MOQ (minimum order quantity)?",
    a: "We support low MOQ to make sourcing easy: sample orders start from just 1 square meter for PDLC smart film and 1 piece for laminated smart glass. For standard roll film, the typical wholesale MOQ is 50 m² per order. Contact us for project-based pricing.",
  },
  {
    q: "Do you provide samples? Are they free?",
    a: "Yes. Standard A4-size demo samples are free of charge — you only cover the courier cost. Custom-size or custom-spec samples are paid, and the sample fee is refunded against your first bulk order. Samples ship within 3–5 days.",
  },
  {
    q: "How long is the lead time?",
    a: "Samples: 3–5 working days. Mass production: 7–15 working days depending on order quantity and customization. Switchable laminated glass typically requires 15–20 days due to the lamination process.",
  },
  {
    q: "How do I install self-adhesive smart film?",
    a: "Installation is straightforward: clean the glass, peel off the release liner, apply the film with the provided tools, and connect the two-wire power cable to the transformer. We supply a step-by-step video tutorial, wiring diagrams and an installation tool kit. Remote video support is available for larger projects.",
  },
  {
    q: "What warranty do you offer?",
    a: "We offer a 2-year warranty on PDLC film and laminated smart glass, and a 2-year warranty on electronic accessories. Our after-sales team responds within 24 hours, and replacement parts or films are shipped promptly for verified quality issues.",
  },
  {
    q: "Can you customize size, color, voltage and control methods?",
    a: "Yes — that is our core OEM/ODM service. We customize dimensions (film widths up to 1,800 mm), film color (white, gray, black options), operating voltage (36V/48V/60V), control methods (wall switch, RF remote, Wi-Fi app, dimming), logo printing and retail packaging.",
  },
  {
    q: "What payment methods and trade terms do you accept?",
    a: "We accept T/T (bank transfer), PayPal for samples, and irrevocable L/C at sight for large orders. Standard payment is 30% deposit and 70% balance before shipment. Trade terms: EXW, FOB Guangzhou/Shenzhen, CIF/CFR to your destination port.",
  },
  {
    q: "How do you pack and ship the products?",
    a: "Film rolls are packed in hard paper tubes with protective film, then in export cartons; laminated glass is packed in fumigation-free plywood crates with foam protection. We arrange sea freight, air freight and express (DHL/FedEx/UPS) and provide full customs clearance documents (packing list, invoice, certificate of origin, CE/RoHS certificates).",
  },
  {
    q: "Which countries do you export to?",
    a: "We export to 40+ countries across Europe, North America, the Middle East and Southeast Asia, serving distributors, contractors and project buyers. Our team is experienced with CE-related EU import requirements and Middle East SASO-related documentation.",
  },
  {
    q: "Can smart film be used in bathrooms and humid environments?",
    a: "Yes. For bathrooms and outdoor-facing applications we recommend switchable laminated glass, where the PDLC layer is sealed inside the laminated panel for full moisture protection. Self-adhesive film also works on the dry side of interior bathroom glass with proper edge sealing.",
  },
  {
    q: "Do you support OEM branding and dropshipping for distributors?",
    a: "Yes. We support neutral packaging, your logo on film edges and packaging, user manuals in your language, and blind shipping to your customers. Many of our partners are regional distributors and installation companies building their own brands.",
  },
  {
    q: "What information should I provide for a quotation?",
    a: "Please share: product type (roll film / self-adhesive film / laminated glass), dimensions and quantities, preferred voltage and control method, destination country/port, and whether you need installation accessories. You will receive a detailed quotation within 24 hours.",
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
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-pdlc-smart-film",
    title: "What Is PDLC Smart Film? Working Principle, Benefits and Buying Guide",
    excerpt:
      "A complete introduction to PDLC smart glass film: how it switches from frosted to transparent, key technical specs, application scenarios and what to check before buying from a smart film manufacturer.",
    date: "July 10, 2026",
    readTime: "6 min read",
    image: "/images/blog-pdlc.jpg",
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
          "When an AC voltage is applied (typically 36V, 48V or 60V), the liquid crystal molecules align with the electric field. Light can then pass straight through with minimal scattering, and the film becomes transparent in about 0.1 seconds. Remove the power, and the film returns to frosted instantly. Power is only consumed to keep the film transparent — usually less than 5 watts per square meter, roughly the consumption of a small LED bulb.",
        ],
      },
      {
        heading: "Key Benefits for Projects",
        list: [
          "Instant privacy on demand — one touch on a wall switch, remote or smartphone app.",
          "Space flexibility — open, light-filled spaces that turn private in an instant, without curtains or blinds.",
          "UV and heat control — quality PDLC film blocks over 98% of UV rays and reduces solar heat gain.",
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
          "Transmittance: ≥80% in the ON state is considered high quality; ask for test reports, not just catalogue values.",
          "Haze: low haze (≤5% ON) means a clear view without milkiness; high haze in OFF state (≥95%) means real privacy.",
          "Operating voltage and safety: 36–60V AC systems are standard and safe; confirm the transformer carries CE certification.",
          "Width capability: leading factories offer roll widths up to 1,800 mm, which determines the maximum seamless panel size.",
          "Lifespan and warranty: look for ≥50,000 hours rated lifespan and at least a 2-year warranty.",
          "Customization: a real source factory can customize size, color, voltage, control method and packaging under OEM/ODM terms.",
        ],
        tail: [
          "Finally, always order a sample first. Reputable suppliers ship A4 demo samples within days so you can verify switching speed, clarity and color before committing to a project order.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "PDLC smart film is a mature, reliable technology that adds privacy, flexibility and a premium feel to almost any glass surface. Understanding the working principle and the key specifications will help you brief your supplier precisely and avoid overpaying for underperforming film. As a direct smart film manufacturer with 10 years of production experience, AYSENT SMART FILM supports buyers with free samples, low MOQ, custom specifications and worldwide delivery — contact us for a quotation within 24 hours.",
        ],
      },
    ],
  },
  {
    slug: "smart-film-vs-smart-glass",
    title: "Smart Film vs. Smart Glass: Which Privacy Solution Fits Your Project?",
    excerpt:
      "Smart film or smart glass? Compare cost, installation, durability and ideal use cases of self-adhesive switchable film versus laminated switchable glass to choose the right privacy solution for your project.",
    date: "July 16, 2026",
    readTime: "6 min read",
    image: "/images/blog-compare.jpg",
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
          "Lead times also differ. Film can typically be produced and shipped within 7–15 days, while laminated smart glass panels usually require 15–20 days because of the lamination and tempering process.",
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
