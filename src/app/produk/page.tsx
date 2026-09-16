'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { products } from '@/lib/products-data';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

export default function ProdukPage() {
  const chat = (name: string) =>
    openWhatsApp(
      `Halo LEPAS Jogja, saya tertarik dengan ${name}. Mohon informasi harga OTR Jogja, promo, ketersediaan unit, dan test drive terbaru.`
    );

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#10211c]">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-[#08130f] px-5 pb-12 pt-28 text-white lg:px-8 lg:pb-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_28%,rgba(214,189,138,.12),transparent_34%)]" />
          <div className="relative mx-auto max-w-6xl">
            <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#dfc691]">
              All Models
            </p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
              <h1 className="max-w-3xl text-4xl font-medium leading-[.98] tracking-[-.045em] sm:text-5xl lg:text-6xl">
                Two expressions of modern LEPAS mobility.
              </h1>
              <p className="max-w-xl text-sm leading-7 text-white/66 lg:justify-self-end">
                Pilih E4 untuk pengalaman full-electric yang lebih accessible, atau L8 untuk fleksibilitas super hybrid dan perjalanan lebih jauh.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-10 lg:px-8 lg:py-12">
          {products.map((product, index) => {
            const isE4 = product.slug === 'lepas-e4-jogja';

            return (
              <article
                key={product.id}
                className={`grid gap-7 border-t border-[#10211c]/14 py-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-10 ${
                  index === products.length - 1 ? 'border-b' : ''
                }`}
              >
                <Link
                  href={`/produk/${product.slug}`}
                  className={`group overflow-hidden bg-[#d8d3c9] ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`h-full w-full transition duration-500 group-hover:scale-[1.015] ${
                      isE4
                        ? 'aspect-[16/10] object-cover object-[68%_center]'
                        : 'aspect-[16/10] object-cover object-center'
                    }`}
                  />
                </Link>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#8b7045]">
                      {product.category}
                    </span>
                    {isE4 && (
                      <span className="border border-[#f2a23a]/45 bg-[#f2a23a]/10 px-2 py-1 text-[9px] font-extrabold uppercase tracking-[.12em] text-[#9a5a09]">
                        Electric Focus
                      </span>
                    )}
                  </div>

                  <h2 className="mt-3 text-4xl font-medium tracking-[-.045em] sm:text-5xl">
                    {product.name}
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#10211c]/64">
                    {product.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 border-y border-[#10211c]/12 py-5 sm:grid-cols-4">
                    {product.features.slice(0, 4).map((feature) => (
                      <div key={feature}>
                        <div className="text-sm font-semibold tracking-[-.015em]">{feature}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/produk/${product.slug}`}
                      className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-extrabold transition ${
                        isE4
                          ? 'bg-[#f2a23a] text-[#10211c] hover:bg-[#ffb44f]'
                          : 'bg-[#10211c] text-white hover:bg-[#183128]'
                      }`}
                    >
                      Explore {product.name.replace('LEPAS ', '')}
                      <ArrowRight size={16} />
                    </Link>

                    <button
                      onClick={() => chat(product.name)}
                      className="inline-flex items-center gap-2 border border-[#10211c]/16 px-5 py-3 text-sm font-bold transition hover:border-[#10211c]/38"
                    >
                      <MessageCircle size={16} />
                      Tanya Harga
                    </button>
                  </div>

                  <p className="mt-4 max-w-xl text-[11px] leading-5 text-[#10211c]/50">
                    {product.priceNote}
                  </p>
                </div>
              </article>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}
