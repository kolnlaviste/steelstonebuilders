export interface Project {
  slug: string;
  index: string;
  title: string;
  location: string;
  year: string;
  type: string;
  scope: string;
  shortDesc: string;
  fullDesc: string;
  coverImage: string;
  coverAlt: string;
  images: { src: string; alt: string; caption?: string }[];
}

export const projects: Project[] = [
  {
    slug: "cordero-residence",
    index: "01",
    title: "Cordero Residence",
    location: "Tuburan, Cebu",
    year: "2023",
    type: "3-Level Residential Building",
    scope: "Design & Build",
    shortDesc: "A three-level family home designed and built from the ground up in Tuburan, Cebu.",
    fullDesc: "A full design and build commission for a three-level residential building in Tuburan, Cebu. The project was delivered by Steel & Stone Builders from initial design through to construction completion, with close coordination with the owner throughout every phase.",
    coverImage: "/images/cordero/cover.jpg",
    coverAlt: "Cordero Residence — three-level residential building, Tuburan Cebu",
    images: [
      { src: "/images/cordero/01.jpg", alt: "Front facade", caption: "Front elevation — Tuburan, Cebu." },
      { src: "/images/cordero/02.jpg", alt: "Side view", caption: "Side elevation showing three levels." },
    ],
  },
  {
    slug: "tinapay-residence",
    index: "02",
    title: "Tinapay Residence",
    location: "Kishanta Subd., Talisay City, Cebu",
    year: "2023",
    type: "4-Level Residential Building",
    scope: "Design & Build",
    shortDesc: "A four-level residence in a gated subdivision in Talisay City, built to the owners' specifications.",
    fullDesc: "A four-level residential building designed and built for Sps. Ruel and Dr. Ma. Godofreda Tinapay in Kishanta Subdivision, Candulawan, Talisay City. The project involved full design and construction management by Steel & Stone Builders, with the build progressing through all structural and architectural phases.",
    coverImage: "/images/tinapay/cover.jpg",
    coverAlt: "Tinapay Residence — four-level residential building, Talisay City",
    images: [
      { src: "/images/tinapay/01.jpg", alt: "Building render — front elevation", caption: "Proposed front elevation — Kishanta Subd., Talisay City." },
      { src: "/images/tinapay/02.jpg", alt: "Construction progress — scaffolding", caption: "Structural works in progress." },
      { src: "/images/tinapay/03.jpg", alt: "Construction progress — facade detail", caption: "Facade cladding and balcony works underway." },
    ],
  },
  {
    slug: "soquite-apartment",
    index: "03",
    title: "Soquite Apartment",
    location: "Brgy. T. Padilla, Cebu City",
    year: "2017",
    type: "Two-Storey, Four-Unit Apartment",
    scope: "Design & Build including Cabinet Works",
    shortDesc: "A four-unit residential apartment building designed and built with full cabinet works.",
    fullDesc: "A two-storey, four-unit apartment building commissioned by Mr. & Mrs. Francis Soquite in Brgy. T. Padilla, Cebu City. Steel & Stone Builders handled the full design and build scope, including all cabinet works throughout the units. Completed in January 2017.",
    coverImage: "/images/soquite/cover.jpg",
    coverAlt: "Soquite Apartment — two-storey four-unit building",
    images: [
      { src: "/images/soquite/01.jpg", alt: "Front facade of apartment building", caption: "Street elevation — Brgy. T. Padilla, Cebu City." },
      { src: "/images/soquite/02.jpg", alt: "Completed building view", caption: "Completed four-unit apartment building." },
    ],
  },
  {
    slug: "ymbong-apartment",
    index: "04",
    title: "Ymbong Apartment",
    location: "Brgy. T. Padilla, Cebu City",
    year: "2018",
    type: "Two-Storey, Six-Unit Apartment Building",
    scope: "Design & Build including Cabinet Works",
    shortDesc: "A six-unit apartment building designed and built with full cabinet works in Cebu City.",
    fullDesc: "A two-storey, six-unit apartment building for Mr. & Mrs. Genaro S. Ymbong Jr., located in Soquite Compound, Brgy. T. Padilla, Cebu City. The project covered full design and build services including cabinet works across all six residential units.",
    coverImage: "/images/ymbong/cover.jpg",
    coverAlt: "Ymbong Apartment — six-unit building",
    images: [
      { src: "/images/ymbong/01.jpg", alt: "Building facade", caption: "Six-unit apartment — Brgy. T. Padilla, Cebu City." },
    ],
  },
  {
    slug: "galvez-sales-duplex",
    index: "05",
    title: "Galvez / Sales Duplex",
    location: "Corona del Mar Subd., Talisay City",
    year: "2018",
    type: "Two-Storey Duplex Residential Building",
    scope: "Design & Build including Basic Fit-Out Works",
    shortDesc: "A two-storey duplex home designed and built with full fit-out works in Talisay City.",
    fullDesc: "A two-storey duplex type residential building for Ms. Nanette Galvez and Mrs. Viola Sales in Corona del Mar Subdivision, Brgy. Pooc, Talisay City. Steel & Stone Builders delivered the full design and build scope including basic fit-out works. Completed in March 2018.",
    coverImage: "/images/galvez/cover.jpg",
    coverAlt: "Galvez Sales Duplex — two-storey duplex, Talisay City",
    images: [
      { src: "/images/galvez/01.jpg", alt: "Front facade", caption: "Street elevation — Corona del Mar Subd., Talisay City." },
      { src: "/images/galvez/02.jpg", alt: "Living and dining area", caption: "Open living and dining area, ground floor." },
      { src: "/images/galvez/03.jpg", alt: "Interior stair and kitchen", caption: "Staircase and kitchen — completed fit-out." },
    ],
  },
  {
    slug: "tabar-residence",
    index: "06",
    title: "Tabar Residence",
    location: "Punta Princesa, Cebu City",
    year: "2019",
    type: "3-Storey Residential Building",
    scope: "Design & Build — General Construction Works",
    shortDesc: "A three-storey family home designed and built in Punta Princesa, Cebu City.",
    fullDesc: "A three-storey residential building for Mr. & Mrs. Arnel Tabar in Punta Princesa, Cebu City. Steel & Stone Builders managed the full design and general construction works. Painting works were handled separately by the owner.",
    coverImage: "/images/tabar/cover.jpg",
    coverAlt: "Tabar Residence — three-storey building, Punta Princesa",
    images: [
      { src: "/images/tabar/01.jpg", alt: "Completed building, street view", caption: "Completed three-storey residence — Punta Princesa, Cebu City." },
    ],
  },
  {
    slug: "endrina-residence",
    index: "07",
    title: "Endrina Residence",
    location: "Punta Princesa, Cebu City",
    year: "2019",
    type: "3-Storey Residential Building",
    scope: "Design & Build — General Construction Works",
    shortDesc: "A three-storey residential building designed and built from the ground up in Cebu City.",
    fullDesc: "A three-storey residential building for Mr. Ruperto Endrina in Punta Princesa, Cebu City. The project was completed under a full design and build contract, covering all general construction works from structural through to architectural finishes.",
    coverImage: "/images/endrina/cover.jpg",
    coverAlt: "Endrina Residence — three-storey building, Punta Princesa",
    images: [
      { src: "/images/endrina/01.jpg", alt: "Completed building facade", caption: "Front elevation — Punta Princesa, Cebu City." },
    ],
  },
  {
    slug: "lopez-condo-fitout",
    index: "08",
    title: "Lopez Condominium Fit-Out",
    location: "Amaia Steps, Mandaue City",
    year: "2017",
    type: "Interior Fit-Out",
    scope: "Design & Build — Total Fit-Out Works",
    shortDesc: "Full interior fit-out of a condominium unit at Amaia Steps, Mandaue City.",
    fullDesc: "A complete interior design and build fit-out for Mr. & Mrs. Richard Lopez at Unit 701, 7th Floor, Amaia Steps Condominium, UN Avenue cor. Ouano Ave., Mandaue City. The scope covered all interior finishes, built-in furniture, and fit-out works throughout the unit. Completed in October 2017.",
    coverImage: "/images/lopez/cover.jpg",
    coverAlt: "Lopez condominium fit-out — Amaia Steps Mandaue",
    images: [
      { src: "/images/lopez/01.jpg", alt: "Living area fit-out", caption: "Living area — completed fit-out, Unit 701 Amaia Steps." },
      { src: "/images/lopez/02.jpg", alt: "Dining and interior view", caption: "Dining area and built-in shelving." },
    ],
  },
  {
    slug: "glutapeel-sm-seaside",
    index: "09",
    title: "Glutapeel Skin Clinic — SM Seaside",
    location: "3rd Level, SM Seaside, Cebu City",
    year: "2018",
    type: "Commercial Fit-Out",
    scope: "Design & Build — Total Fit-Out Works",
    shortDesc: "Full design and build fit-out of a skin clinic at SM Seaside Cebu.",
    fullDesc: "A total fit-out commission for the Glutapeel Skin Clinic at the 3rd Level of SM Seaside Cebu, for Mr. & Mrs. Jordan Mancio. Steel & Stone Builders handled the complete design and build scope — from layout planning and partition works through to all finishes, signage support, and handover. Completed in November 2018.",
    coverImage: "/images/glutapeel-seaside/cover.jpg",
    coverAlt: "Glutapeel Skin Clinic — SM Seaside Cebu",
    images: [
      { src: "/images/glutapeel-seaside/01.jpg", alt: "Clinic entrance and reception", caption: "Entrance and reception — SM Seaside, 3rd Level." },
      { src: "/images/glutapeel-seaside/02.jpg", alt: "Clinic interior", caption: "Interior fit-out — treatment area." },
      { src: "/images/glutapeel-seaside/03.jpg", alt: "Storefront opening day", caption: "Opening day — November 2018." },
    ],
  },
  {
    slug: "glutapeel-gaisano-mactan",
    index: "10",
    title: "Glutapeel Skin Clinic — Gaisano Mactan",
    location: "2nd Level, Gaisano Mactan Island Mall",
    year: "2018",
    type: "Commercial Fit-Out",
    scope: "Design & Build — Total Fit-Out Works",
    shortDesc: "Full design and build fit-out of a second Glutapeel clinic branch at Gaisano Mactan.",
    fullDesc: "The second Glutapeel Skin Clinic fit-out commissioned by Mr. & Mrs. Jordan Mancio, this time at the 2nd Level, Phase 2 Building of Gaisano Mactan Island Mall. Following the success of the SM Seaside branch, Steel & Stone Builders again handled the complete design and build scope. Completed in May 2018.",
    coverImage: "/images/glutapeel-mactan/cover.jpg",
    coverAlt: "Glutapeel Skin Clinic — Gaisano Mactan Island Mall",
    images: [
      { src: "/images/glutapeel-mactan/01.jpg", alt: "Clinic storefront", caption: "Storefront — Gaisano Mactan Island Mall, 2nd Level." },
      { src: "/images/glutapeel-mactan/02.jpg", alt: "Interior corridor", caption: "Interior corridor and treatment rooms." },
      { src: "/images/glutapeel-mactan/03.jpg", alt: "Reception area", caption: "Reception and waiting area." },
    ],
  },
  {
    slug: "bulacao-church",
    index: "11",
    title: "Bulacao Evangelical Free Church",
    location: "N. Bacalso Avenue, Bulacao, Cebu City",
    year: "2024",
    type: "Religious / Institutional Building",
    scope: "Structural Works — Level 3 & 4",
    shortDesc: "Structural works for levels 3 and 4 of a proposed four-storey religious building.",
    fullDesc: "An ongoing structural works commission for the Level 3 and 4 construction of a proposed four-storey religious building for Bulacao Evangelical Free Church on N. Bacalso Avenue, Bulacao, Cebu City. The building was designed by Ar. Jayson Credo, UAP. Steel & Stone Builders is responsible for the structural works on the upper levels of this community landmark.",
    coverImage: "/images/bulacao/cover.jpg",
    coverAlt: "Bulacao Evangelical Free Church — proposed four-storey building",
    images: [
      { src: "/images/bulacao/cover.jpg", alt: "Proposed building render", caption: "Proposed four-storey religious building — designed by Ar. Jayson Credo, UAP." },
    ],
  },
  {
    slug: "nustar-stone-installation",
    index: "12",
    title: "Nustar Resort — Stone & Tile Installation",
    location: "South Road Properties, Cebu City",
    year: "2023",
    type: "Specialty Installation",
    scope: "Natural Stone & Tile Installation Works",
    shortDesc: "Natural stone and tile installation works at the Nustar Integrated Resort in Cebu.",
    fullDesc: "Subcontracted by Saren Zion International Trading, Inc. for Universal Hotels and Resorts Inc. (UHRI), this project involved the supply and installation of natural stones and tiles across multiple areas of the Cebu Nustar Resort — including the high lounge, main lobby, VIP lift lobby, and Malavers Lounge. The scope required precision stonework across large-format luxury interior surfaces.",
    coverImage: "/images/nustar/cover.jpg",
    coverAlt: "Nustar Resort — natural stone and tile installation",
    images: [
      { src: "/images/nustar/01.jpg", alt: "Large format stone panel installation", caption: "Large-format natural stone panel — wall installation." },
      { src: "/images/nustar/02.jpg", alt: "Floor tile laying works", caption: "Floor tile installation in progress." },
      { src: "/images/nustar/03.jpg", alt: "Completed lobby area", caption: "Completed lobby stonework — Nustar Resort." },
      { src: "/images/nustar/04.jpg", alt: "Decorative floor medallion", caption: "Decorative stone floor medallion — VIP area." },
    ],
  },
  {
    slug: "alstom-office-fitout",
    index: "13",
    title: "Alstom Office Fit-Out",
    location: "14th Floor, TGU Tower, Cebu IT Park",
    year: "2023",
    type: "Office Fit-Out",
    scope: "Drywall Partition, Painting, Glass Door Installation",
    shortDesc: "Office fit-out works for Alstom Shared Services Philippines at Cebu IT Park.",
    fullDesc: "Subcontracted by Infinitech Business Solutions Inc., Steel & Stone Builders carried out civil and architectural fit-out works for the Alstom Shared Services Philippines office on the 14th Floor of TGU Tower, Cebu IT Park, Lahug. The scope included drywall partitioning, painting of all walls and ceilings, and glass door installation throughout the office floor.",
    coverImage: "/images/alstom/cover.jpg",
    coverAlt: "Alstom office fit-out — TGU Tower Cebu IT Park",
    images: [
      { src: "/images/alstom/01.jpg", alt: "Office space during fit-out", caption: "Drywall partition works in progress — 14th Floor TGU Tower." },
      { src: "/images/alstom/02.jpg", alt: "Open plan office area", caption: "Open plan area after partition and ceiling works." },
      { src: "/images/alstom/03.jpg", alt: "Completed office interior", caption: "Completed office floor — Alstom Shared Services." },
    ],
  },
  {
    slug: "pagibig-office",
    index: "14",
    title: "Pag-Ibig Cebu Office",
    location: "WT Tower, Ayala Center Cebu",
    year: "2022",
    type: "Office Improvement",
    scope: "Glass Partition, Drywall Partitioning & Repainting",
    shortDesc: "Office improvement works for Pag-Ibig Fund at Ayala Center Cebu.",
    fullDesc: "Office improvement works for the Pag-Ibig Fund Cebu office at WT Tower, Ayala Center Cebu. Steel & Stone Builders carried out glass partition installation, drywall partitioning, and full repainting works to modernise the office layout and finishes.",
    coverImage: "/images/pagibig/cover.jpg",
    coverAlt: "Pag-Ibig Cebu office — glass partitions and fit-out",
    images: [
      { src: "/images/pagibig/01.jpg", alt: "Glass partition installation", caption: "Glass partition system — Pag-Ibig Cebu office." },
      { src: "/images/pagibig/02.jpg", alt: "Office interior after improvement", caption: "Completed office layout — WT Tower, Ayala Center." },
    ],
  },
  {
    slug: "cebu-exchange-showroom",
    index: "15",
    title: "Cebu Exchange Showroom",
    location: "Salinas Drive, Lahug, Cebu City",
    year: "2022",
    type: "Commercial / Showroom",
    scope: "Ceiling Works & Interior / Exterior Painting",
    shortDesc: "Ceiling and painting works for the three-storey Cebu Exchange showroom by Arthaland.",
    fullDesc: "Works carried out for Arthaland Corp. on their three-storey Cebu Exchange showroom on Salinas Drive, Lahug, Cebu City. Steel & Stone Builders completed all ceiling works and interior and exterior painting across the building — contributing to the clean, high-finish presentation expected of a premium property developer's gallery space.",
    coverImage: "/images/cebu-exchange/cover.jpg",
    coverAlt: "Cebu Exchange Showroom — Arthaland, Lahug Cebu City",
    images: [
      { src: "/images/cebu-exchange/01.jpg", alt: "Showroom interior — dining display", caption: "Interior showroom — dining area display." },
      { src: "/images/cebu-exchange/02.jpg", alt: "Main gallery corridor", caption: "Gallery corridor — ceiling and painting works completed." },
      { src: "/images/cebu-exchange/03.jpg", alt: "Building exterior", caption: "Exterior elevation — Salinas Drive, Lahug." },
      { src: "/images/cebu-exchange/04.jpg", alt: "Double-height lobby", caption: "Double-height lobby — feature lighting and ceiling works." },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const i = projects.findIndex((p) => p.slug === slug);
  return {
    prev: i > 0 ? projects[i - 1] : null,
    next: i < projects.length - 1 ? projects[i + 1] : null,
  };
}