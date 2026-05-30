import { absoluteUrl, siteConfig } from "@/lib/seo";

export type LocationPage = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  intro: string;
  bestFits: string[];
  productAngles: string[];
  localProof: string;
  keywords: string[];
};

export type IndustryPage = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  intro: string;
  audience: string;
  machineMix: string[];
  valueProps: string[];
  keywords: string[];
};

export const locationPages: LocationPage[] = [
  {
    slug: "fairfield-county",
    name: "Fairfield County",
    headline: "Modern vending machines for Fairfield County businesses",
    description:
      "VendyBites provides brand-new smart vending machines for offices, gyms, salons, apartments, hotels, schools, and retail spaces across Fairfield County, Connecticut.",
    intro:
      "Fairfield County locations often need vending that feels more premium than the standard snack machine. VendyBites helps workplaces, residential buildings, wellness spaces, and guest-facing businesses offer useful products without adding operational work.",
    bestFits: ["Corporate offices", "Apartment communities", "Gyms and studios", "Hotels", "Salons and spas", "Retail centers"],
    productAngles: ["Premium snacks and drinks", "Beauty and wellness essentials", "Phone chargers and tech accessories", "Emergency convenience items"],
    localProof:
      "We serve Fairfield County as part of our Connecticut-wide footprint, with direct support from local operators instead of a national call center.",
    keywords: ["Fairfield County vending machines", "vending machine service Fairfield County", "office vending Fairfield County"],
  },
  {
    slug: "hartford",
    name: "Hartford",
    headline: "Hartford vending machines with local support",
    description:
      "Smart vending machines for Hartford offices, medical spaces, apartments, schools, gyms, hotels, and public-facing locations.",
    intro:
      "Hartford businesses need reliable vending for employees, visitors, residents, students, and guests. VendyBites installs and manages modern machines with product mixes tailored to the traffic pattern inside each location.",
    bestFits: ["Offices", "Healthcare and medical offices", "Apartment buildings", "Campuses", "Hotels", "Warehouses"],
    productAngles: ["Coffee and energy drinks", "Shelf-stable meals", "Healthy snacks", "Travel and emergency essentials"],
    localProof:
      "Hartford partners get a Connecticut-based vending team that handles placement, restocking, maintenance, product rotation, and direct support.",
    keywords: ["Hartford vending machines", "vending machine service Hartford CT", "office vending Hartford"],
  },
  {
    slug: "new-haven",
    name: "New Haven",
    headline: "New Haven vending for campuses, offices, apartments, and venues",
    description:
      "VendyBites brings modern vending machines to New Haven businesses, campuses, apartments, gyms, hotels, nightlife venues, and healthcare spaces.",
    intro:
      "New Haven has a mix of student traffic, healthcare workers, office teams, residents, commuters, and late-night demand. VendyBites can match that audience with snacks, drinks, meals, beauty, tech, and emergency products.",
    bestFits: ["Universities", "Apartment communities", "Medical offices", "Gyms", "Nightlife-adjacent venues", "Hotels"],
    productAngles: ["Ramen and shelf-stable meals", "Energy drinks and cold brew", "Beauty and hygiene items", "Chargers and earbuds"],
    localProof:
      "We tailor New Haven vending placements around the actual audience in the building, then use sales data to keep improving the assortment.",
    keywords: ["New Haven vending machines", "campus vending New Haven", "vending machine service New Haven CT"],
  },
  {
    slug: "stamford",
    name: "Stamford",
    headline: "Stamford office and apartment vending machines",
    description:
      "Modern vending service for Stamford offices, apartment buildings, gyms, hotels, retail locations, and commuter-heavy spaces.",
    intro:
      "Stamford locations often need a polished vending experience that fits professional buildings and high-traffic residential spaces. VendyBites provides new machines, card and cash payments, remote monitoring, and direct support.",
    bestFits: ["Office buildings", "Luxury apartments", "Fitness centers", "Hotels", "Transit-adjacent locations", "Retail spaces"],
    productAngles: ["Premium snacks", "Cold brew and beverages", "Tech accessories", "Wellness products"],
    localProof:
      "Our Stamford vending service is designed for busy Connecticut properties that need a hands-off amenity with fast local communication.",
    keywords: ["Stamford vending machines", "office vending Stamford CT", "apartment vending Stamford"],
  },
  {
    slug: "bridgeport",
    name: "Bridgeport",
    headline: "Bridgeport vending machines for high-traffic spaces",
    description:
      "VendyBites serves Bridgeport businesses, warehouses, apartments, schools, healthcare spaces, gyms, and public venues with smart vending machines.",
    intro:
      "Bridgeport locations can benefit from vending that covers everyday needs, shift-worker demand, commuter traffic, and convenience purchases. We configure the machine around how people actually use the space.",
    bestFits: ["Warehouses", "Apartment communities", "Schools", "Medical offices", "Gyms", "Public venues"],
    productAngles: ["Filling snacks and drinks", "Shelf-stable meals", "Hygiene essentials", "Phone accessories"],
    localProof:
      "VendyBites manages machine setup, restocking, maintenance, and inventory decisions for Bridgeport partners from day one.",
    keywords: ["Bridgeport vending machines", "vending machine service Bridgeport CT", "warehouse vending Bridgeport"],
  },
  {
    slug: "waterbury",
    name: "Waterbury",
    headline: "Waterbury vending service for workplaces and public spaces",
    description:
      "Brand-new vending machines for Waterbury offices, warehouses, apartments, schools, hotels, gyms, and healthcare locations.",
    intro:
      "Waterbury businesses need vending that is dependable, easy to maintain, and useful to a broad mix of employees, visitors, and residents. VendyBites handles the operation while your location gets the amenity.",
    bestFits: ["Workplaces", "Warehouses", "Apartment buildings", "Schools", "Healthcare offices", "Fitness centers"],
    productAngles: ["Snacks and beverages", "Late-night meals", "Wellness items", "Emergency convenience products"],
    localProof:
      "We bring Connecticut-based vending support to Waterbury locations, including remote monitoring and product rotation based on demand.",
    keywords: ["Waterbury vending machines", "vending machine service Waterbury CT", "workplace vending Waterbury"],
  },
  {
    slug: "norwalk",
    name: "Norwalk",
    headline: "Norwalk vending machines for modern business spaces",
    description:
      "Smart vending service for Norwalk offices, apartments, gyms, salons, hotels, retail spaces, and commuter-friendly locations.",
    intro:
      "Norwalk businesses can use vending as an amenity, convenience tool, and service upgrade. VendyBites places brand-new machines and manages the products, payments, restocking, and maintenance.",
    bestFits: ["Offices", "Apartment communities", "Gyms", "Salons", "Hotels", "Retail centers"],
    productAngles: ["Healthy snacks", "Premium drinks", "Beauty essentials", "Chargers and accessories"],
    localProof:
      "Norwalk partners get a local vending relationship with direct communication and flexible product mixes.",
    keywords: ["Norwalk vending machines", "vending machine service Norwalk CT", "office vending Norwalk"],
  },
  {
    slug: "danbury",
    name: "Danbury",
    headline: "Danbury vending machines for offices, apartments, gyms, and retail",
    description:
      "VendyBites provides smart vending machines for Danbury businesses, apartment buildings, gyms, hotels, schools, retail spaces, and workplaces.",
    intro:
      "Danbury locations need vending that can support employees, residents, shoppers, guests, and students. VendyBites builds each placement around the audience and improves the product mix over time.",
    bestFits: ["Offices", "Apartments", "Gyms", "Hotels", "Retail locations", "Schools"],
    productAngles: ["Snacks and beverages", "Fitness and wellness products", "Tech accessories", "Convenience essentials"],
    localProof:
      "Our Danbury vending service includes setup, stocking, machine support, and data-informed inventory decisions.",
    keywords: ["Danbury vending machines", "vending machine service Danbury CT", "apartment vending Danbury"],
  },
];

export const industryPages: IndustryPage[] = [
  {
    slug: "offices",
    name: "Offices",
    headline: "Office vending machines that employees actually use",
    description:
      "Modern office vending machines for Connecticut workplaces, stocked with premium snacks, drinks, coffee, healthy options, tech accessories, and convenience items.",
    intro:
      "A strong office vending program keeps employees on site, gives teams better options during long days, and adds a visible amenity without creating work for facilities or HR.",
    audience: "Employees, visitors, hybrid teams, conference guests, and late-working staff.",
    machineMix: ["Premium snacks", "Cold brew and bottled coffee", "Energy drinks", "Healthy options", "Chargers and office convenience items"],
    valueProps: ["No internal stocking work", "Card, cash, and tap payments", "Remote inventory monitoring", "Product rotation based on actual demand"],
    keywords: ["office vending machines Connecticut", "workplace vending machines", "employee vending service"],
  },
  {
    slug: "gyms",
    name: "Gyms and Fitness Studios",
    headline: "Gym vending machines for performance, recovery, and convenience",
    description:
      "Smart vending machines for Connecticut gyms and fitness studios with protein snacks, electrolyte drinks, wellness products, and workout essentials.",
    intro:
      "Fitness members buy differently than office workers or hotel guests. VendyBites can build a gym-focused machine around pre-workout demand, post-workout recovery, hydration, and quick essentials.",
    audience: "Gym members, trainers, athletes, class participants, and after-hours users.",
    machineMix: ["Protein bars and supplement packets", "Electrolyte sticks", "Sports drinks", "Healthy snacks", "Hair ties, wipes, and recovery items"],
    valueProps: ["Useful after staffed hours", "Product mix aligned with fitness goals", "Compact amenity for high-traffic spaces", "Restocking and maintenance included"],
    keywords: ["gym vending machines Connecticut", "fitness vending machines", "protein vending machine"],
  },
  {
    slug: "salons-and-spas",
    name: "Salons and Spas",
    headline: "Beauty and wellness vending for salons and spas",
    description:
      "Beauty vending machines for Connecticut salons, spas, wellness studios, and event spaces with lash kits, press-on nails, lip balm, hygiene items, and impulse products.",
    intro:
      "Salons and spas are a natural fit for small, high-utility products people want immediately. VendyBites can turn unused space into a convenient retail touchpoint without adding staff workload.",
    audience: "Clients, stylists, spa guests, bridal parties, event attendees, and walk-ins.",
    machineMix: ["Lash kits", "Press-on nails", "Lip balm and lotion", "Hair ties and clips", "Hygiene and emergency beauty items"],
    valueProps: ["Impulse retail without checkout friction", "Custom assortment for your clientele", "Premium machine presentation", "Hands-off restocking"],
    keywords: ["beauty vending machines Connecticut", "salon vending machine", "spa vending machine"],
  },
  {
    slug: "apartments",
    name: "Apartment Communities",
    headline: "Apartment vending machines as a resident amenity",
    description:
      "Modern vending machines for Connecticut apartment buildings and residential communities with snacks, drinks, meals, tech accessories, hygiene items, and emergency essentials.",
    intro:
      "A residential vending machine gives residents access to essentials without leaving the building. It can support late-night needs, package-room traffic, lobby traffic, and amenity areas.",
    audience: "Residents, guests, property staff, delivery drivers, and amenity-space users.",
    machineMix: ["Snacks and drinks", "Shelf-stable meals", "Phone chargers", "Baby wipes and hygiene kits", "Umbrellas and emergency items"],
    valueProps: ["Adds a visible amenity", "Useful outside leasing office hours", "No property team stocking required", "Flexible product mix for resident demographics"],
    keywords: ["apartment vending machines Connecticut", "resident amenity vending", "vending machines for apartment buildings"],
  },
  {
    slug: "hotels",
    name: "Hotels",
    headline: "Hotel vending machines for guests who need convenience now",
    description:
      "Guest-friendly vending machines for Connecticut hotels with snacks, drinks, travel essentials, hygiene products, phone chargers, and late-night convenience items.",
    intro:
      "Hotel guests often need something quickly after shops close or before they head out. VendyBites can create a lobby or floor-level vending experience that reduces front-desk friction.",
    audience: "Hotel guests, event attendees, conference visitors, night staff, and travelers.",
    machineMix: ["Drinks and snacks", "Travel hygiene kits", "Phone chargers", "Pain relief and basic wellness items", "Late-night food options"],
    valueProps: ["Improves guest convenience", "Reduces small front-desk requests", "Card and tap payments", "Professional machine presentation"],
    keywords: ["hotel vending machines Connecticut", "hospitality vending machines", "guest amenity vending"],
  },
  {
    slug: "medical-offices",
    name: "Medical Offices",
    headline: "Vending machines for medical offices and healthcare spaces",
    description:
      "Modern vending for Connecticut medical offices, clinics, waiting rooms, and healthcare workplaces with drinks, snacks, hygiene items, wellness products, and convenience essentials.",
    intro:
      "Medical spaces serve patients, families, clinicians, and administrative teams who may be onsite for long waits or long shifts. A carefully stocked vending machine can make the space more useful without adding operational burden.",
    audience: "Patients, families, clinicians, support staff, and office teams.",
    machineMix: ["Bottled water and electrolyte drinks", "Better-for-you snacks", "Hygiene items", "Basic wellness products", "Phone chargers"],
    valueProps: ["Supports long waits and shifts", "Clean product presentation", "Hands-off maintenance", "Inventory tailored to the setting"],
    keywords: ["medical office vending machines", "healthcare vending Connecticut", "clinic vending machine"],
  },
  {
    slug: "universities",
    name: "Universities and Schools",
    headline: "Campus vending machines for students, staff, and visitors",
    description:
      "Smart vending machines for Connecticut schools, universities, and campuses with snacks, drinks, ramen, tech accessories, school supplies, and wellness essentials.",
    intro:
      "Campuses have predictable spikes around classes, late-night studying, commuting, and events. VendyBites can place vending where students and staff already need quick access to essentials.",
    audience: "Students, faculty, staff, commuters, visitors, and event attendees.",
    machineMix: ["Ramen and shelf-stable meals", "Energy drinks", "Snacks", "Chargers and earbuds", "School supplies and wellness items"],
    valueProps: ["Useful during off-hours", "Supports commuters and residents", "Data-driven product rotation", "Flexible product categories"],
    keywords: ["campus vending machines Connecticut", "university vending machines", "school vending service"],
  },
  {
    slug: "retail",
    name: "Retail Locations",
    headline: "Retail vending machines for impulse and convenience purchases",
    description:
      "Custom vending machines for Connecticut retail locations, shopping centers, entertainment spaces, and high-foot-traffic venues.",
    intro:
      "Retail spaces are built around attention and foot traffic. VendyBites can add a vending experience that captures impulse demand, emergency needs, or niche products your customers already want.",
    audience: "Shoppers, guests, families, employees, and event traffic.",
    machineMix: ["Impulse snacks", "Beauty and wellness items", "Toys and collectibles", "Tech accessories", "Custom specialty products"],
    valueProps: ["Adds incremental sales potential", "Works in compact footprints", "Custom assortment by audience", "Managed restocking and support"],
    keywords: ["retail vending machines Connecticut", "custom vending retail", "shopping center vending machine"],
  },
  {
    slug: "warehouses",
    name: "Warehouses",
    headline: "Warehouse vending machines for shift workers and teams",
    description:
      "Reliable vending machines for Connecticut warehouses, distribution centers, and industrial workplaces with snacks, drinks, meals, hydration, and convenience items.",
    intro:
      "Warehouse teams need fast access to food and drinks during shifts, breaks, overnight work, and busy production windows. VendyBites keeps the machine stocked so managers do not have to.",
    audience: "Shift workers, drivers, supervisors, overnight teams, and facilities staff.",
    machineMix: ["Filling snacks", "Energy drinks and hydration", "Shelf-stable meals", "Basic wellness items", "Phone chargers"],
    valueProps: ["Supports long shifts", "Reduces off-site break runs", "Remote monitoring", "Fast restocking and local support"],
    keywords: ["warehouse vending machines Connecticut", "industrial vending service", "shift worker vending"],
  },
];

export const aiSearchFaqs = [
  {
    question: "What does VendyBites do?",
    answer:
      "VendyBites places and manages brand-new smart vending machines for Connecticut businesses, including offices, gyms, salons, apartments, hotels, healthcare spaces, schools, retail locations, warehouses, and custom venues.",
  },
  {
    question: "Where does VendyBites operate?",
    answer:
      "VendyBites serves Connecticut, including Fairfield County, Hartford, New Haven, Stamford, Bridgeport, Waterbury, Norwalk, Danbury, and nearby communities.",
  },
  {
    question: "What can VendyBites machines stock?",
    answer:
      "VendyBites machines can stock premium snacks, drinks, health and beauty products, wellness items, shelf-stable meals, tech accessories, emergency essentials, toys, collectibles, office supplies, school supplies, and custom product mixes.",
  },
  {
    question: "Does the business need to manage the machine?",
    answer:
      "No. VendyBites handles machine placement, setup, stocking, remote monitoring, maintenance, product rotation, and direct support.",
  },
  {
    question: "How can a business request a vending machine?",
    answer:
      `Businesses can request a vending machine through ${absoluteUrl("/for-businesses")} or contact VendyBites at ${siteConfig.email} or ${siteConfig.displayPhone}.`,
  },
];
