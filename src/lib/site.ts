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
    image: "/images/product-accessories.webp",
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
      "Switchable film on windows, doors and skylights replaces curtains: transparent when you want the view, frosted when you want privacy, with 98% UV blocking and smart-home control integration.",
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
          "Application spray bottle with a drop of mild soap in distilled water",
          "Utility knife with fresh blades and a steel ruler for trimming",
          "Heat gun or hair dryer (for edge sealing and cold-weather installs)",
          "PDLC transformer (36V / 48V / 60V — match the film voltage), wall switch or remote",
          "Two-core electrical wire, wire strippers, and insulating tape",
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
        heading: "Step 2 — Clean the Glass Thoroughly",
        paragraphs: [
          "This is the most important step. Any dust, grease or silicone residue trapped under the film will show as a permanent bubble or speck. Spray the glass with cleaner, wipe with a squeegee from top to bottom, and then do a final pass with a lint-free microfiber cloth. Run your bare hand over the surface — if you feel any grit, clean again.",
          "For exterior-facing glass or bathrooms, make sure the room is dry and well-ventilated. Humidity above 70% makes the adhesive less tacky and increases the risk of edge lifting.",
        ],
      },
      {
        heading: "Step 3 — Peel the Release Liner and Apply",
        paragraphs: [
          "Peel back about 10 cm of the release liner from the top edge. Do not peel the whole backing at once — the film will stick to itself instantly. Spray the adhesive side lightly with the soapy water solution — this gives you a short window to slide the film into position before it bonds.",
          "Align the top and one side edge, then press the top 10 cm firmly with the squeegee. Once the top is anchored, slowly peel the rest of the liner downward with one hand while smoothing the film with the squeegee in the other. Work from the center outward, in overlapping strokes.",
        ],
      },
      {
        heading: "Step 4 — Squeegee Out All Air and Water",
        paragraphs: [
          "Go over the entire surface with firm, overlapping squeegee strokes, pushing trapped air and water toward the nearest edge. Wipe the squeegee blade frequently on the microfiber cloth. Pay extra attention to the edges — any water left near the bus bar can cause electrical issues later.",
          "Small bubbles that remain after 10 minutes can usually be worked out with the squeegee. Larger bubbles may require you to lift that corner and reapply. Do not puncture bubbles with a pin — it will leave a visible mark.",
        ],
      },
      {
        heading: "Step 5 — Trim the Edges and Connect Power",
        paragraphs: [
          "Once the film is fully smoothed, trim the excess along all four edges with a fresh utility blade. Hold the blade at a 45-degree angle and use the glass frame as a guide for a clean line.",
          "The two conductive bus bars run along the top and bottom (or left and right, depending on the film orientation). Connect the two-core wire to each bus bar using the copper tape or conductive adhesive supplied with the film. Run the wire along the frame to the transformer, then connect the transformer to the wall switch or remote receiver. Always turn off the mains power before wiring the transformer.",
        ],
      },
      {
        heading: "Step 6 — Test and Finish",
        paragraphs: [
          "Restore power and test the switch. The film should change from frosted to transparent in under a second, with no dead zones or flickering. If a corner does not switch, check the bus-bar connection — a loose wire is the usual cause.",
          "Finally, run the heat gun along all four edges on a low setting for 10–15 seconds. This activates the edge sealant and prevents moisture from creeping under the film in humid rooms. Wipe the surface with a dry microfiber cloth and the installation is complete.",
        ],
      },
      {
        heading: "Common Mistakes to Avoid",
        list: [
          "Skipping the final glass clean — dust under the film is permanent and impossible to fix without replacing the film.",
          "Peeling the entire release liner at once — the film will curl and stick to itself.",
          "Using a hard squeegee without a felt edge — it scratches the protective top layer.",
          "Trimming with a dull blade — ragged edges look unprofessional and can lift over time.",
          "Forgetting the heat-gun edge seal — the #1 cause of edge lifting in bathrooms and exterior glass.",
          "Wiring the transformer to the wrong voltage — always match 36V/48V/60V to the film specification.",
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
          "The single biggest price variable is the film itself. Standard white PDLC film is the most economical. Gray or black-tinted films, ultra-high-clarity grades (transmittance above 85%), and automotive-grade films with extended temperature ranges all cost more. Always ask for the optical test report, not just the catalogue number — two films both labeled 'high clarity' can differ by 10% in real transmittance.",
          "Self-adhesive film is typically 10–20% more expensive per square meter than roll film because of the adhesive backing and release liner, but it saves you the cost of glass lamination.",
        ],
      },
      {
        heading: "Factor 2 — Size, Shape and Quantity",
        paragraphs: [
          "PDLC film is manufactured in rolls up to 1,800 mm wide. Panels within the standard width are priced at the per-square-meter rate. Custom widths above 1,800 mm require seaming (two panels joined invisibly) or a special production run, both of which add cost. Irregular shapes — arches, trapezoids, circles — increase material waste and labor time.",
          "Quantity matters more than most buyers realize. Sample orders (1–5 m²) are priced at a premium because of setup and packaging. Once you cross 50 m², the per-meter price drops significantly, and above 500 m² you enter true wholesale pricing. If you have multiple projects in the pipeline, combining them into one order can save 15–25%.",
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
          "PDLC smart film pricing is transparent once you break it into film, customization, controls, installation and logistics. The cheapest quote is not always the best value — a film with a 3-year lifespan and no test reports will cost more in replacements than a quality film with a 2-year warranty and certified optics. As a direct manufacturer, AYSENT SMART FILM provides itemized quotations that list every cost component, so you know exactly what you are paying for. Send us your glass schedule and destination country, and we will return a detailed, no-surprise quote within 24 hours.",
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
