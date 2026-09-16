export interface Article {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'Mengenal LEPAS L8: Premium Super Hybrid SUV untuk Mobilitas Modern',
    slug: 'mengenal-lepas-l8-premium-super-hybrid-suv',
    thumbnail: '/images/philosophy/l8-exterior.webp',
    excerpt: 'Ringkasan teknologi PHEV, performa, jarak tempuh, dan fitur unggulan LEPAS L8.',
    content: `<p>LEPAS L8 menjadi model perdana LEPAS yang dipasarkan di Indonesia. SUV premium 5-seater ini menggunakan teknologi Plug-in Hybrid Electric Vehicle (PHEV) dan membawa filosofi desain Leopard Aesthetics.</p>
    <h3>Performa dan jarak tempuh</h3><p>Data resmi LEPAS menyebut tenaga 205 kW, torsi 365 Nm, jarak tempuh listrik 100+ km, serta total driving range lebih dari 1.300 km dalam kondisi pengujian yang ditentukan.</p>
    <h3>Teknologi cerdas</h3><p>LEPAS L8 menawarkan fitur seperti Automatic Parking Assist (APA), Remote Parking Assist (RPA), panoramic sunroof, wireless charging 50W, serta layar vertikal 13,25 inci.</p>
    <p>Untuk harga OTR Yogyakarta, ketersediaan unit, dan jadwal test drive terbaru, hubungi tim LEPAS Jogja melalui WhatsApp.</p>`,
    category: 'Produk', tags: ['LEPAS L8','PHEV','SUV'], author: 'LEPAS Jogja', date: '2026-08-22'
  },
  {
    id: 2,
    title: 'PHEV Itu Apa? Cara Kerja Teknologi Hybrid pada LEPAS L8',
    slug: 'pahami-phev-lepas-l8',
    thumbnail: '/images/lepas-l8-hero-poster.webp',
    excerpt: 'PHEV menggabungkan mesin bensin dan motor listrik serta dapat diisi dari sumber listrik eksternal.',
    content: `<p>Plug-in Hybrid Electric Vehicle atau PHEV menggunakan mesin bensin dan motor listrik. Berbeda dengan hybrid biasa, baterai PHEV dapat diisi dari sumber listrik eksternal sehingga perjalanan harian tertentu dapat dilakukan dengan mode listrik.</p><h3>Kenapa menarik untuk penggunaan harian?</h3><p>Pengguna dapat memanfaatkan tenaga listrik untuk perjalanan tertentu namun tetap memiliki mesin bensin untuk perjalanan jarak jauh. Kombinasi inilah yang menjadi salah satu karakter utama LEPAS L8.</p>`,
    category: 'Teknologi', tags: ['PHEV','Hybrid','Teknologi'], author: 'LEPAS Jogja', date: '2026-08-18'
  },
  {
    id: 3,
    title: 'Leopard Aesthetics: Filosofi Desain di Balik Mobil LEPAS',
    slug: 'leopard-aesthetics-filosofi-desain-lepas',
    thumbnail: '/images/philosophy/l8-light-detail.webp',
    excerpt: 'Mengenal inspirasi leopard yang menjadi identitas desain dan karakter brand LEPAS.',
    content: `<p>Nama LEPAS menggabungkan inspirasi Leopard dan Passion. Filosofi Leopard Aesthetics menerjemahkan kesan lincah, kuat, dan elegan ke dalam proporsi, garis, serta detail kendaraan.</p><p>LEPAS menyebut filosofi brand-nya sebagai <strong>Drive Your Elegance</strong>: teknologi dan performa hadir dengan karakter yang tenang, personal, dan premium.</p>`,
    category: 'Brand', tags: ['LEPAS','Leopard Aesthetics','Design'], author: 'LEPAS Jogja', date: '2026-08-12'
  },
  {
    id: 4,
    title: 'LEPAS E4 dan Arah Mobilitas Listrik LEPAS di Indonesia',
    slug: 'lepas-e4-mobilitas-listrik-indonesia',
    thumbnail: '/images/models/e4-showcase.webp',
    excerpt: 'LEPAS E4 memperluas pilihan energi baru LEPAS dari PHEV menuju Battery Electric Vehicle.',
    content: `<p>Selain LEPAS L8 PHEV, LEPAS Indonesia juga telah memperkenalkan LEPAS E4 sebagai model Battery Electric Vehicle (BEV). Kehadirannya menunjukkan bahwa portofolio LEPAS tidak berhenti pada satu teknologi energi baru.</p><p>Spesifikasi, harga, dan ketersediaan unit di Yogyakarta dapat berubah mengikuti program resmi. Karena itu, informasi pembelian sebaiknya dikonfirmasi kembali saat pemesanan.</p>`,
    category: 'Produk', tags: ['LEPAS E4','BEV','EV'], author: 'LEPAS Jogja', date: '2026-08-05'
  }
];

export const getArticleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
export const getAllCategories = () => Array.from(new Set(articles.map((a) => a.category)));
