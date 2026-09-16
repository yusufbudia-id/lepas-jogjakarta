export interface PriceGroup {
  priceOtr: string;
  priceNett: string;
}

export interface ProductVariant {
  name: string;
  transmission: string;
  fuel: string;
  engine: string;
  priceAB: PriceGroup;
  priceAAR: PriceGroup;
  bonus?: string;
}

export interface ProductType {
  id: number;
  slug: string;
  name: string;
  category: string;
  priceText: string;
  priceNote?: string;
  description: string;
  features: string[];
  advantages: string[];
  image: string;
  gallery: string[];
  brochureUrl?: string;
  variants: ProductVariant[];
  specifications: {
    engine: string;
    transmission: string;
    fuel: string;
    power: string;
    torque: string;
    seating: string;
    dimensions: string;
  };
}

export const products: ProductType[] = [
  {
    id: 1,
    slug: 'lepas-l8-jogja',
    name: 'LEPAS L8',
    category: 'PHEV',
    priceText: '589',
    priceNote: 'Referensi harga pre-booking OTR Jakarta. Harga OTR Yogyakarta dapat berbeda.',
    description: 'LEPAS L8 adalah Premium Super Hybrid SUV 5-seater yang memadukan desain Leopard Aesthetics, sistem Plug-in Hybrid Electric Vehicle, kabin premium, dan teknologi berkendara cerdas untuk mobilitas modern.',
    features: ['205 kW', '365 Nm', 'EV Range 100+ km', 'Total Range 1.300+ km'],
    advantages: ['Automatic Parking Assist (APA)', 'Remote Parking Assist (RPA)', 'Panoramic sunroof', '13,25-inch vertical display', 'Wireless charging 50W', 'Ventilated & heated seats'],
    image: '/images/models/l8-showcase.webp',
    gallery: ['/images/models/l8-showcase.webp', '/images/l8-detail/cockpit.webp', '/images/l8-detail/rear-comfort.webp'],
    specifications: {
      engine: '1.5L Turbo + motor listrik (PHEV)',
      transmission: 'Dedicated Hybrid Transmission',
      fuel: 'Plug-in Hybrid (bensin + listrik)',
      power: '205 kW',
      torque: '365 Nm',
      seating: '5 Penumpang',
      dimensions: 'Wheelbase 2.800 mm'
    },
    variants: [
      {
        name: 'LEPAS L8 PHEV',
        transmission: 'PHEV',
        fuel: 'Bensin + Listrik',
        engine: '1.5L Turbo + Electric Motor',
        priceAB: { priceOtr: 'Hubungi Sales', priceNett: 'Hubungi Sales' },
        priceAAR: { priceOtr: 'Hubungi Sales', priceNett: 'Hubungi Sales' },
        bonus: 'Tanyakan program penjualan, test drive, ketersediaan unit, dan layanan purna jual terbaru melalui sales LEPAS Jogja.'
      }
    ]
  },
  {
    id: 2,
    slug: 'lepas-e4-jogja',
    name: 'LEPAS E4',
    category: 'BEV',
    priceText: '300 jutaan*',
    priceNote: 'Referensi pasar Indonesia berada di kelas Rp300 jutaan. Harga OTR Yogyakarta, promo, dan ketersediaan mengikuti konfirmasi dealer terbaru.',
    description: 'LEPAS E4 adalah Premium Electric SUV dengan baterai 67 kWh, jarak tempuh hingga 600 km CLTC, performa 160 kW, dan karakter urban yang menjadi pintu masuk paling aksesibel ke pengalaman LEPAS.',
    features: ['600 km CLTC', '67 kWh Battery', '160 kW', 'DC 130 kW'],
    advantages: ['Mobilitas listrik', 'Desain Leopard Aesthetics', 'Kabin berorientasi kenyamanan', 'Teknologi cerdas LEPAS'],
    image: '/images/e4-detail/e4-hero.webp',
    gallery: ['/images/e4-detail/e4-hero.webp', '/images/e4-detail/interior-cabin.webp', '/images/e4-detail/colors/awaken-green.webp'],
    specifications: {
      engine: 'Electric Motor',
      transmission: 'Single-speed reduction gear',
      fuel: 'Listrik (BEV)',
      power: '160 kW',
      torque: '275 Nm',
      seating: '5 Penumpang',
      dimensions: '4.420 × 1.817 × 1.635 mm · Wheelbase 2.700 mm'
    },
    variants: [
      {
        name: 'LEPAS E4 BEV',
        transmission: 'EV',
        fuel: 'Listrik',
        engine: 'Electric Motor',
        priceAB: { priceOtr: 'Hubungi Sales', priceNett: 'Hubungi Sales' },
        priceAAR: { priceOtr: 'Hubungi Sales', priceNett: 'Hubungi Sales' },
        bonus: 'Tanyakan harga OTR Yogyakarta, ketersediaan unit, program promo, dan jadwal test drive terbaru.'
      }
    ]
  }
];

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);
