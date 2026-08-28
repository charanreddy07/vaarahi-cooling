export const site = {
  brand: 'VAARAHI COOLING',
  partner: 'ICE MAKE',
  legalName: 'Vaarahi Cooling Pvt. Ltd.',
  fullName: 'ICE MAKE | VAARAHI COOLING',
  tagline:
    'Premium commercial refrigeration equipment built for performance, durability, and energy efficiency.',
  phones: ['+91 99126 35555', '+91 99852 63111'],
  email: 'info@vaarahicooling.com',
  whatsapp: '919912635555',
  address: {
    line1: 'Near Ramachandra Furniture, 11/2 Arundelpet',
    line2: 'Guntur, Andhra Pradesh - 522002',
  },
  iceMakeUrl: 'https://www.icemakeindia.com',
}

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export function telLink(phone: string) {
  return `tel:${phone.replace(/\s+/g, '')}`
}

export type SpecRow = { label: string; value: string }

export type Product = {
  id: string
  name: string
  category: 'Freezer' | 'Cooler'
  categoryLabel: string
  badge?: string
  image: string
  shortDesc: string
  volumeSummary: string
  price: number
  mrp: number
  specs: SpecRow[]
  idealFor: string[]
}

const inr = (n: number) => n

export const products: Product[] = [
  {
    id: 'IHT-350-DD',
    name: 'Hard Top Freezer – IHT-350 DD',
    category: 'Freezer',
    categoryLabel: 'FREEZER',
    image: '/images/hardtop-iht350.png',
    shortDesc:
      'A spacious double-door commercial freezer built for high-capacity cold storage, engineered for long-lasting durability. Also available with copper tubing.',
    volumeSummary: 'Net Volume: 305 Litres',
    price: inr(23750),
    mrp: inr(32300),
    specs: [
      { label: 'Net Volume', value: '305 Ltrs' },
      { label: 'Dimension (mm)', value: '1160 W x 640 D x 885 H' },
      { label: 'No. of Baskets', value: '1' },
      { label: 'Insulation', value: '70 mm Polyurethane' },
      { label: 'Options', value: 'Also Available in Copper' },
    ],
    idealFor: ['Large Supermarkets', 'Wholesale Markets', 'Food Processing', 'Catering'],
  },
  {
    id: 'IHT-550-DD',
    name: 'Hard Top Freezer – IHT-550 DD',
    category: 'Freezer',
    categoryLabel: 'FREEZER',
    badge: 'Best for High Usage',
    image: '/images/hardtop-iht550.png',
    shortDesc:
      'A high-capacity double-door commercial freezer engineered for maximum storage efficiency and excellent cooling retention in demanding environments.',
    volumeSummary: 'Net Volume: 500 Litres',
    price: inr(32750),
    mrp: inr(42600),
    specs: [
      { label: 'Net Volume', value: '500 Ltrs' },
      { label: 'No. of Baskets', value: '2' },
      { label: 'Insulation', value: '70 mm Polyurethane' },
      { label: 'Options', value: 'Also Available in Copper' },
    ],
    idealFor: ['Supermarkets', 'Large Restaurants', 'Wholesale Distributors', 'Catering'],
  },
  {
    id: 'IMVC-450',
    name: 'Visi Cooler – IMVC 450',
    category: 'Cooler',
    categoryLabel: 'COOLER',
    badge: 'Single Glass Door',
    image: '/images/visi-imvc450.png',
    shortDesc:
      'A high-capacity premium display chiller offering maximum visibility for cold beverages and dairy products, with 4 shelves for optimal organisation.',
    volumeSummary: 'Gross Volume: 457 Litres',
    price: inr(34750),
    mrp: inr(48300),
    specs: [
      { label: 'Internal Dimensions', value: '500 W x 622 D x 1490 H (mm)' },
      { label: 'External Dimensions', value: '580 W x 722 D x 1990 H (mm)' },
      { label: 'Gross Volume', value: '457 Liters' },
      { label: 'No. of Shelves', value: '4' },
      { label: 'Wheels', value: 'Castor' },
      { label: 'Temp Range', value: '+2°C To +8°C' },
    ],
    idealFor: ['Large Supermarkets', 'High-volume Cafes', 'Movie Theaters', 'Food Courts'],
  },
  {
    id: 'IMVC-550',
    name: 'Visi Cooler – IMVC 550',
    category: 'Cooler',
    categoryLabel: 'COOLER',
    badge: 'Most Popular',
    image: '/images/visi-imvc550.png',
    shortDesc:
      'A massive-capacity display chiller built to showcase a wide range of beverages with clear, well-lit visibility across five shelves.',
    volumeSummary: 'Gross Volume: 550 Litres',
    price: inr(38750),
    mrp: inr(55200),
    specs: [
      { label: 'Gross Volume', value: '550 Liters' },
      { label: 'No. of Shelves', value: '5' },
      { label: 'Wheels', value: 'Heavy Duty Castor' },
      { label: 'Temp Range', value: '+2°C To +8°C' },
    ],
    idealFor: ['Mega Supermarkets', 'Busy Food Courts', 'Large Retailers'],
  },
  {
    id: 'IMVC-900',
    name: 'Visi Cooler – IMVC 900',
    category: 'Cooler',
    categoryLabel: 'COOLER',
    badge: 'Best for High Usage',
    image: '/images/visi-imvc900.png',
    shortDesc:
      'A dual glass-door premium display chiller delivering unmatched storage volume and product visibility for large-scale retail operations.',
    volumeSummary: 'Gross Volume: 900 Litres',
    price: inr(74750),
    mrp: inr(104600),
    specs: [
      { label: 'Gross Volume', value: '900 Liters' },
      { label: 'Configuration', value: 'Double Glass Doors' },
      { label: 'No. of Shelves', value: 'Multiple Adjustable' },
      { label: 'Temp Range', value: '+2°C To +8°C' },
      { label: 'Wheels', value: 'Heavy Duty Castor' },
    ],
    idealFor: ['Hypermarkets', 'Liquor Stores', 'Wholesale Vendors', 'Large Beverage Distributors'],
  },
]

export function formatINR(n: number) {
  return '₹' + n.toLocaleString('en-IN')
}
