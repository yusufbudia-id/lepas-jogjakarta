'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getProductBySlug, type ProductType } from '@/lib/products-data';
import { ArrowLeft, ArrowRight, ChevronDown, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

const l8Specs = [
  ['Powertrain', '1.5L Turbo + Electric Motor'],
  ['System', 'Plug-in Hybrid Electric Vehicle (PHEV)'],
  ['Maximum Power', '205 kW'],
  ['Maximum Torque', '365 Nm'],
  ['EV Range', '100+ km'],
  ['Total Range', '1,300+ km'],
  ['Seating', '5 passengers'],
  ['Wheelbase', '2,800 mm'],
];

const l8Colors = [
  {
    name: 'Norwegian Forest Green',
    short: 'Forest Green',
    image: '/images/l8-colors/norwegian-forest-green.webp',
    swatch: '#2f7d78',
    ring: '#1c4c49',
  },
  {
    name: 'Khaki White',
    short: 'Khaki White',
    image: '/images/l8-colors/khaki-white.webp',
    swatch: '#dedbcf',
    ring: '#b8b2a4',
  },
  {
    name: 'Carbon Black',
    short: 'Carbon Black',
    image: '/images/l8-colors/carbon-black.webp',
    swatch: '#171a19',
    ring: '#050606',
  },
  {
    name: 'Provence Purple',
    short: 'Provence Purple',
    image: '/images/l8-colors/provence-purple.webp',
    swatch: '#76518d',
    ring: '#4c335e',
  },
  {
    name: 'Matte Gray',
    short: 'Matte Gray',
    image: '/images/l8-colors/matte-gray.webp',
    swatch: '#737c79',
    ring: '#505755',
  },
];


const e4Specs = [
  ['Battery', '67 kWh'],
  ['Range', '600 km (CLTC)'],
  ['Maximum Power', '160 kW'],
  ['Maximum Torque', '275 Nm'],
  ['DC Fast Charging', 'Up to 130 kW'],
  ['DC Charging', '30–80% in around 20 minutes'],
  ['Drivetrain', 'Front-wheel drive'],
  ['Wheelbase', '2,700 mm'],
  ['Ground Clearance', '180 mm'],
  ['Safety', '18 ADAS systems + 6 airbags'],
];

const e4Colors = [
  {
    name: 'Awaken Green',
    image: '/images/e4-detail/colors/awaken-green.webp',
    swatch: '#2f9b98',
    ring: '#186662',
  },
  {
    name: 'Phantom Grey',
    image: '/images/e4-detail/colors/phantom-grey.webp',
    swatch: '#7d8587',
    ring: '#555d5f',
  },
  {
    name: 'Black',
    image: '/images/e4-detail/colors/black.webp',
    swatch: '#151918',
    ring: '#050606',
  },
  {
    name: 'White',
    image: '/images/e4-detail/colors/white.webp',
    swatch: '#e8e7e1',
    ring: '#b9b8b2',
  },
  {
    name: 'Moonlight Silver',
    image: '/images/e4-detail/colors/moonlight-silver.webp',
    swatch: '#aeb9bb',
    ring: '#748083',
  },
];

function L8Detail({ p }: { p: ProductType }) {
  const [selectedColor, setSelectedColor] = useState(l8Colors[0]);

  const testDrive = () =>
    openWhatsApp('Halo LEPAS Jogja, saya ingin menjadwalkan test drive LEPAS L8. Mohon info jadwal yang tersedia di Yogyakarta.');

  const price = () =>
    openWhatsApp('Halo LEPAS Jogja, saya ingin informasi harga OTR Yogyakarta, promo, dan ketersediaan LEPAS L8 terbaru.');

  const askColor = () =>
    openWhatsApp(`Halo LEPAS Jogja, saya tertarik LEPAS L8 warna ${selectedColor.name}. Mohon info ketersediaan unit dan estimasi waktu inden di Yogyakarta.`);

  return (
    <div className="min-h-screen bg-[#f4efe5] text-[#10211c]">
      <Header />
      <main>
        <section className="relative min-h-[82svh] overflow-hidden bg-[#07100d] text-white">
          <img
            src="/images/models/l8-showcase.webp"
            alt="LEPAS L8 exterior"
            className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
          />
          {/* Compact contrast veil: keep copy readable on the left without washing over the L8 body. */}
          <div
            className="absolute inset-y-0 left-0 w-full lg:w-[56%]"
            style={{ background: 'linear-gradient(90deg, #020806 0%, rgba(3,16,12,.96) 26%, rgba(3,16,12,.72) 44%, rgba(3,16,12,.28) 66%, rgba(3,16,12,0) 100%)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(0deg, rgba(2,8,6,.62) 0%, rgba(2,8,6,.20) 20%, rgba(2,8,6,0) 42%)' }}
          />

          <div className="relative mx-auto flex min-h-[82svh] max-w-6xl flex-col justify-end px-5 pb-12 pt-28 lg:px-8 lg:pb-16">
            <Link
              href="/produk"
              className="mb-auto inline-flex w-fit items-center gap-2 text-[11px] font-bold uppercase tracking-[.20em] text-white/72 transition hover:text-white"
            >
              <ArrowLeft size={14} /> All Models
            </Link>

            <div className="relative z-10 max-w-xl" style={{ color: '#fffaf0', textShadow: '0 2px 24px rgba(0,0,0,.45)' }}>
              <div className="text-[10px] font-bold uppercase tracking-[.30em]" style={{ color: '#e3c98f' }}>Premium Super Hybrid SUV</div>
              <h1 className="mt-4 text-6xl font-medium tracking-[-.055em] sm:text-7xl lg:text-[6.8rem] lg:leading-[.9]" style={{ color: '#ffffff' }}>LEPAS L8</h1>
              <p className="mt-5 text-2xl font-medium tracking-[-.025em] sm:text-3xl" style={{ color: '#ffffff' }}>Go further. In elegance.</p>
              <p className="mt-4 max-w-lg text-sm leading-7 sm:text-[15px]" style={{ color: 'rgba(255,255,255,.90)' }}>
                Premium PHEV with expressive design, intelligent comfort, and the flexibility to move between electric daily driving and longer journeys.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button onClick={testDrive} className="rounded-full bg-[#dfc691] px-6 py-3.5 text-sm font-extrabold text-[#10211c] transition hover:bg-[#ead7ae]">
                  Book Test Drive
                </button>
                <button onClick={price} className="rounded-full border border-white/25 bg-black/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/10">
                  Price in Yogyakarta
                </button>
              </div>
            </div>
          </div>
        </section>

        <nav className="sticky top-[40px] z-30 border-b border-[#10211c]/10 bg-[#f4efe5]/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-3.5 text-[10px] font-extrabold uppercase tracking-[.18em] text-[#10211c]/68 lg:px-8">
            <a href="#overview" className="shrink-0 transition hover:text-[#10211c]">Overview</a>
            <a href="#exterior" className="shrink-0 transition hover:text-[#10211c]">Exterior</a>
            <a href="#colors" className="shrink-0 transition hover:text-[#10211c]">Colors</a>
            <a href="#interior" className="shrink-0 transition hover:text-[#10211c]">Interior</a>
            <a href="#hybrid" className="shrink-0 transition hover:text-[#10211c]">Super Hybrid</a>
            <a href="#specifications" className="shrink-0 transition hover:text-[#10211c]">Specifications</a>
          </div>
        </nav>

        <section id="overview" className="scroll-mt-28 border-b border-[#10211c]/10 bg-[#f4efe5]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 px-5 py-7 sm:grid-cols-4 lg:px-8 lg:py-9">
            <Metric value="205" unit="kW" label="Maximum Power" />
            <Metric value="365" unit="Nm" label="Maximum Torque" />
            <Metric value="100+" unit="km" label="EV Range" />
            <Metric value="1,300+" unit="km" label="Total Range" />
          </div>
        </section>

        <section id="exterior" className="scroll-mt-28 px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-7 lg:grid-cols-[.76fr_1.24fr] lg:items-end lg:gap-14">
              <div>
                <p className="eyebrow">01 / Exterior</p>
                <h2 className="mt-4 max-w-lg text-4xl font-medium leading-[1] tracking-[-.045em] sm:text-5xl">Leopard Aesthetics, without excess.</h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-[#10211c]/72 sm:text-[15px]">
                  A sculpted profile, slim lighting signature, and confident front fascia give L8 a distinctive presence while keeping the overall form calm and elegant.
                </p>
              </div>
              <div className="overflow-hidden bg-[#0b1512]">
                <img src="/images/models/l8-showcase.webp" alt="LEPAS L8 three-quarter exterior" className="aspect-[16/9] h-full w-full object-cover" />
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-[1.35fr_.65fr]">
              <div className="overflow-hidden bg-[#0c1714]">
                <img src="/images/l8-detail/exterior-detail.webp" alt="LEPAS L8 lighting and grille detail" className="aspect-[16/7] h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-between border-t border-[#10211c]/20 py-5 md:border-l md:border-t-0 md:py-1 md:pl-7">
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-[.23em] text-[#826638]">Signature Detail</div>
                  <p className="mt-3 text-2xl font-medium leading-[1.2] tracking-[-.03em]">Precision in every line.</p>
                </div>
                <p className="mt-6 text-sm leading-6 text-[#10211c]/66">Leopard-eye lighting and the patterned grille create the L8&apos;s strongest visual signature.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="colors" className="scroll-mt-28 border-y border-[#10211c]/8 bg-[#e9e0d1] px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-12">
            <div className="lg:pr-4">
              <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#775f36]">02 / Exterior Colors</p>
              <h2 className="mt-4 text-4xl font-medium leading-[1] tracking-[-.045em] sm:text-5xl">Choose your expression.</h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#10211c]/72 sm:text-[15px]">
                Preview the L8 in a range of elegant exterior finishes. Actual paint appearance can vary with lighting, display, and market availability.
              </p>

              <div className="mt-8">
                <div className="text-[10px] font-extrabold uppercase tracking-[.19em] text-[#10211c]/58">Selected Color</div>
                <div className="mt-2 text-2xl font-medium tracking-[-.03em]">{selectedColor.name}</div>
              </div>

              <div className="mt-6 flex flex-wrap items-start gap-4" aria-label="LEPAS L8 exterior color options">
                {l8Colors.map((color) => {
                  const active = selectedColor.name === color.name;
                  return (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      aria-label={`Select ${color.name}`}
                      aria-pressed={active}
                      title={color.name}
                      className="group relative inline-flex shrink-0 flex-col items-center border-0 bg-transparent p-0 outline-none"
                      style={{ width: 52, minWidth: 52, height: 60, minHeight: 60, flexShrink: 0 }}
                    >
                      <span
                        aria-hidden="true"
                        className={`relative grid place-items-center rounded-full border bg-[#f6f0e5] transition-all duration-200 ${
                          active
                            ? 'border-[#10211c] shadow-[0_5px_16px_rgba(16,33,28,.15)] ring-2 ring-[#b9965d]/55 ring-offset-2 ring-offset-[#e9e0d1]'
                            : 'border-[#10211c]/20 group-hover:border-[#10211c]/50'
                        }`}
                        style={{ width: 44, minWidth: 44, height: 44, minHeight: 44 }}
                      >
                        <span
                          className="rounded-full border border-black/10 shadow-inner"
                          style={{
                            width: 28,
                            minWidth: 28,
                            height: 28,
                            minHeight: 28,
                            backgroundColor: color.swatch,
                            boxShadow: `inset 0 0 0 1px ${color.ring}2b`,
                          }}
                        />
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute left-[7px] right-[7px] top-1/2 -translate-y-1/2 rounded-full"
                          style={{
                            height: 2,
                            backgroundColor: color.ring,
                            opacity: active ? 1 : 0.78,
                          }}
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className={`mt-3 block rounded-full transition-all duration-200 ${active ? 'opacity-100' : 'opacity-35 group-hover:opacity-70'}`}
                        style={{ width: active ? 24 : 14, height: 2, backgroundColor: color.swatch }}
                      />
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 text-[11px] font-bold uppercase tracking-[.12em] text-[#10211c]/72">
                {selectedColor.short}
              </div>

              <button onClick={askColor} className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#10211c] underline decoration-[#9f7b43]/55 underline-offset-8 transition hover:decoration-[#10211c]">
                Ask color availability <ArrowRight size={15} />
              </button>

              <p className="mt-5 max-w-sm text-[11px] leading-5 text-[#10211c]/58">
                Digital color preview for visualization. Final exterior color and stock availability should be confirmed with LEPAS Jogja.
              </p>
            </div>

            <div className="relative min-h-[330px] overflow-hidden sm:min-h-[470px]">
              <div className="absolute inset-x-[8%] bottom-[9%] h-[20%] rounded-[50%] bg-black/15 blur-2xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,.72),rgba(255,255,255,.18)_44%,transparent_72%)]" />
              <img
                key={selectedColor.image}
                src={selectedColor.image}
                alt={`LEPAS L8 ${selectedColor.name}`}
                className="relative z-10 h-full w-full object-contain object-center transition duration-500"
              />
              <div className="absolute bottom-5 right-5 z-20 text-right sm:bottom-7 sm:right-7">
                <div className="text-[9px] font-extrabold uppercase tracking-[.22em] text-[#10211c]/55">LEPAS L8</div>
                <div className="mt-1 text-xs font-bold text-[#10211c]/82">{selectedColor.short}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="interior" className="scroll-mt-28 bg-[#07110e] px-5 py-16 text-[#f7f1e7] sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[.72fr_1.28fr] lg:items-end lg:gap-14">
              <div
                className="relative px-6 py-7 lg:px-7 lg:py-8"
                style={{ background: 'rgba(1,8,6,.66)', borderLeft: '2px solid #d6bd8a', boxShadow: '0 22px 70px rgba(0,0,0,.18)' }}
              >
                <p className="text-[10px] font-extrabold uppercase tracking-[.28em]" style={{ color: '#e4cb94' }}>03 / Interior</p>
                <h2 className="mt-4 max-w-lg text-4xl font-medium leading-[1] tracking-[-.045em] sm:text-5xl" style={{ color: '#ffffff' }}>A cabin designed to feel calm.</h2>
                <p className="mt-5 max-w-md text-sm leading-7 sm:text-[15px]" style={{ color: 'rgba(255,255,255,.88)' }}>
                  Information, comfort, and controls are integrated into a cleaner layout so technology supports the journey without dominating it.
                </p>
              </div>
              <div className="overflow-hidden">
                <img src="/images/l8-detail/cockpit.webp" alt="LEPAS L8 cockpit" className="aspect-[16/9] h-full w-full object-cover" />
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <InteriorPanel image="/images/l8-detail/rear-comfort.webp" label="Personal Comfort" title="Space to slow down." />
              <InteriorPanel image="/images/l8-detail/ambient-night.webp" label="Ambient Experience" title="A different mood after dark." />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 border-t border-white/12 pt-7 sm:grid-cols-3 sm:gap-0">
              <Feature label="13.25-inch" title="Vertical display" />
              <Feature label="50W" title="Wireless charging" />
              <Feature label="APA + RPA" title="Parking assistance" />
            </div>
          </div>
        </section>

        <section id="hybrid" className="scroll-mt-28 px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[.84fr_1.16fr] lg:items-center lg:gap-14">
              <div>
                <p className="eyebrow">04 / Super Hybrid</p>
                <h2 className="mt-4 text-4xl font-medium leading-[1] tracking-[-.045em] sm:text-5xl">Electric for the everyday. Ready for the distance.</h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-[#10211c]/72 sm:text-[15px]">
                  L8 combines an electric motor with a turbo petrol engine, offering electric-only capability for selected daily journeys while retaining long-distance flexibility.
                </p>
                <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-6 border-t border-[#10211c]/15 pt-7">
                  <SmallMetric value="100+ km" label="EV Range" />
                  <SmallMetric value="1,300+ km" label="Total Range" />
                  <SmallMetric value="205 kW" label="Maximum Power" />
                  <SmallMetric value="365 Nm" label="Maximum Torque" />
                </div>
              </div>
              <div className="overflow-hidden bg-[#10211c]">
                <img src="/images/l8-detail/driving.webp" alt="LEPAS L8 driving" className="aspect-[16/10] h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="specifications" className="scroll-mt-28 border-t border-[#10211c]/10 bg-[#eee7da] px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[.62fr_1.38fr] lg:gap-16">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#775f36]">05 / Specifications</p>
                <h2 className="mt-4 text-4xl font-medium leading-[1] tracking-[-.045em] sm:text-5xl">The essentials, clearly presented.</h2>
                <p className="mt-5 max-w-sm text-sm leading-7 text-[#10211c]/68">
                  A concise product summary for quick comparison. Final Indonesia-market equipment can vary by homologation, program, or variant.
                </p>
              </div>

              <div>
                <div className="border-t border-[#10211c]/18">
                  {l8Specs.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[.82fr_1.18fr] gap-4 border-b border-[#10211c]/10 py-4 sm:grid-cols-2 sm:py-5">
                      <span className="text-[10px] font-extrabold uppercase tracking-[.15em] text-[#10211c]/58">{label}</span>
                      <span className="text-sm font-semibold sm:text-base">{value}</span>
                    </div>
                  ))}
                </div>

                <details className="group border-b border-[#10211c]/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-xs font-extrabold uppercase tracking-[.14em]">
                    Comfort & Intelligent Features
                    <ChevronDown size={17} className="transition group-open:rotate-180" />
                  </summary>
                  <div className="grid gap-x-8 gap-y-2 pb-6 text-sm leading-6 text-[#10211c]/68 sm:grid-cols-2">
                    {p.advantages.map((item) => <div key={item}>— {item}</div>)}
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t px-5 py-14 sm:py-16 lg:px-8" style={{ background: '#03100c', borderColor: 'rgba(214,189,138,.28)' }}>
          <div aria-hidden="true" className="absolute inset-0" style={{ background: 'linear-gradient(100deg, rgba(214,189,138,.10) 0%, rgba(214,189,138,.035) 38%, rgba(3,16,12,0) 72%)' }} />
          <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.12fr_.88fr] lg:items-end">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-[.28em]" style={{ color: '#e4cb94' }}>LEPAS Jogja</div>
              <h2 className="mt-4 max-w-3xl text-4xl font-medium leading-[1] tracking-[-.045em] sm:text-5xl" style={{ color: '#ffffff' }}>Experience L8 from the driver&apos;s seat.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7" style={{ color: 'rgba(255,255,255,.88)' }}>Ask about current Yogyakarta pricing, unit availability, financing options, or arrange a personal test drive.</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <button onClick={testDrive} className="inline-flex items-center gap-2 rounded-full bg-[#dfc691] px-6 py-3.5 text-sm font-extrabold text-[#10211c] transition hover:bg-[#ead7ae]">
                Book Test Drive <ArrowRight size={16} />
              </button>
              <button onClick={price} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/8">
                <MessageCircle size={16} /> Ask Price
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Metric({ value, unit, label }: { value: string; unit: string; label: string }) {
  return (
    <div className="border-[#10211c]/10 px-3 py-2 first:pl-0 max-sm:[&:nth-child(odd)]:border-r sm:border-r sm:last:border-r-0 sm:px-6 sm:first:pl-0">
      <div className="text-3xl font-medium tracking-[-.04em] text-[#10211c] sm:text-4xl">
        {value}<span className="ml-1.5 text-xs font-semibold text-[#8b6c3b] sm:text-sm">{unit}</span>
      </div>
      <div className="mt-1.5 text-[9px] font-bold uppercase tracking-[.18em] text-[#10211c]/52 sm:text-[10px]">{label}</div>
    </div>
  );
}

function InteriorPanel({ image, label, title }: { image: string; label: string; title: string }) {
  return (
    <article>
      <div className="overflow-hidden bg-black/20">
        <img src={image} alt={title} className="aspect-[16/10] h-full w-full object-cover" />
      </div>
      <div className="pt-4">
        <div className="text-[9px] font-extrabold uppercase tracking-[.22em] text-[#d9c18e]">{label}</div>
        <h3 className="mt-2 text-xl font-medium tracking-[-.025em] sm:text-2xl">{title}</h3>
      </div>
    </article>
  );
}

function Feature({ label, title }: { label: string; title: string }) {
  return (
    <div className="border-white/10 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
      <div className="text-2xl font-medium tracking-[-.03em] text-[#dfc691]">{label}</div>
      <div className="mt-1.5 text-[9px] font-bold uppercase tracking-[.16em] text-white/58">{title}</div>
    </div>
  );
}

function SmallMetric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-medium tracking-[-.035em] sm:text-3xl">{value}</div>
      <div className="mt-1.5 text-[9px] font-extrabold uppercase tracking-[.18em] text-[#10211c]/55">{label}</div>
    </div>
  );
}


function E4Detail({ p }: { p: ProductType }) {
  const [selectedColor, setSelectedColor] = useState(e4Colors[0]);

  const askPrice = () =>
    openWhatsApp('Halo LEPAS Jogja, saya tertarik LEPAS E4. Mohon info harga OTR Yogyakarta terbaru, promo, ketersediaan unit, dan estimasi cicilan.');

  const testDrive = () =>
    openWhatsApp('Halo LEPAS Jogja, saya ingin menjadwalkan test drive LEPAS E4. Mohon info jadwal dan unit yang tersedia di Yogyakarta.');

  const askColor = () =>
    openWhatsApp(`Halo LEPAS Jogja, saya tertarik LEPAS E4 warna ${selectedColor.name}. Mohon info stok, harga OTR Yogyakarta, dan estimasi pengiriman.`);

  return (
    <div className="min-h-screen bg-[#f4efe5] text-[#10211c]">
      <Header />
      <main className="pb-20 md:pb-0">
        {/* E4 hero intentionally follows the same premium visual grammar as L8: full-bleed image, controlled contrast and restrained copy. */}
        <section className="relative min-h-[76svh] overflow-hidden bg-[#07110e] text-white">
          <img
            src="/images/e4-detail/e4-hero.webp"
            alt="LEPAS E4 Awaken Green on an urban street"
            className="absolute inset-0 h-full w-full object-cover object-[72%_center] lg:object-[74%_center]"
          />
          <div
            className="absolute inset-y-0 left-0 w-full lg:w-[48%]"
            style={{ background: 'linear-gradient(90deg, rgba(2,9,7,.97) 0%, rgba(4,18,14,.92) 24%, rgba(4,18,14,.62) 44%, rgba(4,18,14,.18) 60%, rgba(4,18,14,0) 74%)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(0deg, rgba(2,8,6,.42) 0%, rgba(2,8,6,.08) 20%, rgba(2,8,6,0) 42%)' }}
          />

          <div className="relative mx-auto flex min-h-[76svh] max-w-6xl flex-col justify-end px-5 pb-11 pt-28 lg:px-8 lg:pb-14">
            <Link
              href="/produk"
              className="mb-auto inline-flex w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[.20em] text-white/72 transition hover:text-white"
            >
              <ArrowLeft size={14} /> All Models
            </Link>

            <div className="relative z-10 max-w-xl" style={{ textShadow: '0 2px 24px rgba(0,0,0,.34)' }}>
              <div className="text-[10px] font-bold uppercase tracking-[.30em] text-[#e3c98f]">Premium Electric SUV</div>
              <h1 className="mt-3 text-6xl font-medium tracking-[-.055em] text-white sm:text-7xl lg:text-[6.6rem] lg:leading-[.9]">LEPAS E4</h1>
              <p className="mt-4 text-2xl font-medium tracking-[-.025em] text-white sm:text-3xl">Electric. Effortless. Expressive.</p>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/88 sm:text-[15px]">
                Long-range electric mobility with an urban-friendly footprint, intelligent comfort, and the confidence of Leopard Aesthetics.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button onClick={askPrice} className="rounded-full bg-[#dfc691] px-6 py-3.5 text-sm font-extrabold text-[#10211c] transition hover:bg-[#ead7ae]">
                  Cek Harga Jogja
                </button>
                <button onClick={testDrive} className="rounded-full border border-white/28 bg-black/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/10">
                  Book Test Drive
                </button>
              </div>

              <div className="mt-6 flex flex-wrap items-end gap-x-4 gap-y-1 border-t border-white/18 pt-4">
                <div className="text-2xl font-medium tracking-[-.035em] text-white">Rp300 jutaan*</div>
                <div className="pb-1 text-[10px] font-bold uppercase tracking-[.16em] text-white/60">Referensi pasar Indonesia</div>
              </div>
              <p className="mt-2 max-w-lg text-[10px] leading-5 text-white/58">Harga OTR Yogyakarta, promo, pembiayaan, dan stok mengikuti quotation dealer terbaru.</p>
            </div>
          </div>
        </section>

        <nav className="sticky top-[40px] z-30 border-b border-[#10211c]/10 bg-[#f4efe5]/96 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-3.5 text-[10px] font-extrabold uppercase tracking-[.17em] text-[#10211c]/64 lg:px-8">
            <a href="#overview" className="shrink-0 transition hover:text-[#10211c]">Overview</a>
            <a href="#design" className="shrink-0 transition hover:text-[#10211c]">Design</a>
            <a href="#colors" className="shrink-0 transition hover:text-[#10211c]">Colors</a>
            <a href="#interior" className="shrink-0 transition hover:text-[#10211c]">Interior</a>
            <a href="#electric" className="shrink-0 transition hover:text-[#10211c]">Electric</a>
            <a href="#specifications" className="shrink-0 transition hover:text-[#10211c]">Specifications</a>
          </div>
        </nav>

        <section id="overview" className="scroll-mt-28 border-b border-[#10211c]/10 bg-[#f4efe5]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 px-5 py-6 sm:grid-cols-4 lg:px-8 lg:py-8">
            <Metric value="600" unit="km" label="CLTC Range" />
            <Metric value="67" unit="kWh" label="Battery" />
            <Metric value="160" unit="kW" label="Maximum Power" />
            <Metric value="130" unit="kW" label="DC Fast Charge" />
          </div>
        </section>

        <section id="design" className="scroll-mt-28 px-5 py-12 sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-7 lg:grid-cols-[.76fr_1.24fr] lg:items-end lg:gap-12">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#8b6b38]">01 / Exterior</p>
                <h2 className="mt-4 max-w-lg text-4xl font-medium leading-[1] tracking-[-.045em] sm:text-5xl">City-sized. Premium by design.</h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-[#10211c]/72 sm:text-[15px]">
                  A compact premium SUV stance, slim lighting, and sculpted surfaces give E4 a confident urban presence without visual excess.
                </p>
                <button onClick={askPrice} className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold underline decoration-[#9f7b43]/55 underline-offset-8 transition hover:decoration-[#10211c]">
                  Check current offer <ArrowRight size={15} />
                </button>
              </div>
              <div className="overflow-hidden bg-[#d8d4cc]">
                <img src="/images/e4-detail/exterior-white.webp" alt="LEPAS E4 on an urban street" className="aspect-[16/10] h-full w-full object-cover" />
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-[1.28fr_.72fr]">
              <div className="overflow-hidden bg-[#d9d5cd]">
                <img src="/images/e4-detail/exterior-detail.webp" alt="LEPAS E4 exterior detail" className="aspect-[16/7] h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-between border-t border-[#10211c]/18 py-5 md:border-l md:border-t-0 md:py-1 md:pl-7">
                <div>
                  <div className="text-[9px] font-extrabold uppercase tracking-[.22em] text-[#8b6b38]">Leopard Aesthetics</div>
                  <p className="mt-3 text-2xl font-medium leading-[1.15] tracking-[-.03em]">Sharp expression. Clean proportions.</p>
                </div>
                <p className="mt-6 text-sm leading-6 text-[#10211c]/66">A distinctive face and planted stance keep E4 expressive while retaining the calm visual language of LEPAS.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="colors" className="scroll-mt-28 border-y border-[#10211c]/8 bg-[#e9e0d1] px-5 py-10 sm:py-12 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 max-w-2xl sm:mb-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#775f36]">02 / Exterior Colors</p>
              <h2 className="mt-3 text-4xl font-medium leading-[1] tracking-[-.045em] sm:text-5xl">Choose your expression.</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#10211c]/72 sm:text-[15px]">
                Preview each official E4 finish and switch colors without leaving the frame.
              </p>
            </div>

            <div className="e4-color-layout overflow-hidden rounded-[1.75rem] border border-white/55 bg-[#f4eee3] shadow-[0_24px_60px_rgba(16,33,28,.08)]">
              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden px-3 py-3 sm:min-h-[300px] sm:px-5 lg:min-h-[340px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(255,255,255,.94),rgba(255,255,255,.28)_48%,transparent_74%)]" />
                <div className="absolute inset-x-[14%] bottom-[10%] h-[14%] rounded-[50%] bg-black/10 blur-2xl" />
                <img
                  key={selectedColor.image}
                  src={selectedColor.image}
                  alt={`LEPAS E4 ${selectedColor.name}`}
                  className="relative z-10 h-[230px] w-full object-contain object-center transition duration-500 sm:h-[270px] lg:h-[310px]"
                />
              </div>

              <div className="flex flex-col justify-center border-t border-[#10211c]/10 px-5 py-5 sm:px-6 sm:py-6 lg:border-l lg:border-t-0 lg:px-8 lg:py-7">
                <div className="text-[9px] font-extrabold uppercase tracking-[.22em] text-[#10211c]/55">Selected Color</div>
                <div className="mt-1.5 text-2xl font-medium tracking-[-.035em] text-[#10211c]">{selectedColor.name}</div>

                <div className="mt-5 flex flex-wrap items-start gap-3.5" aria-label="LEPAS E4 exterior color options">
                  {e4Colors.map((color) => {
                    const active = selectedColor.name === color.name;
                    return (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        aria-label={`Select ${color.name}`}
                        aria-pressed={active}
                        title={color.name}
                        className="group relative inline-flex shrink-0 flex-col items-center border-0 bg-transparent p-0 outline-none"
                        style={{ width: 48, minWidth: 48, height: 56, minHeight: 56, flexShrink: 0 }}
                      >
                        <span
                          aria-hidden="true"
                          className={`relative grid place-items-center rounded-full border bg-[#f6f0e5] transition-all duration-200 ${
                            active
                              ? 'border-[#10211c] shadow-[0_5px_16px_rgba(16,33,28,.15)] ring-2 ring-[#b9965d]/55 ring-offset-2 ring-offset-[#f4eee3]'
                              : 'border-[#10211c]/20 group-hover:border-[#10211c]/50'
                          }`}
                          style={{ width: 42, minWidth: 42, height: 42, minHeight: 42 }}
                        >
                          <span
                            className="rounded-full border border-black/10 shadow-inner"
                            style={{
                              width: 27,
                              minWidth: 27,
                              height: 27,
                              minHeight: 27,
                              backgroundColor: color.swatch,
                              boxShadow: `inset 0 0 0 1px ${color.ring}2b`,
                            }}
                          />
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute left-[7px] right-[7px] top-1/2 -translate-y-1/2 rounded-full"
                            style={{ height: 2, backgroundColor: color.ring, opacity: active ? 1 : 0.78 }}
                          />
                        </span>
                        <span
                          aria-hidden="true"
                          className={`mt-2.5 block rounded-full transition-all duration-200 ${active ? 'opacity-100' : 'opacity-35 group-hover:opacity-70'}`}
                          style={{ width: active ? 22 : 12, height: 2, backgroundColor: color.swatch }}
                        />
                      </button>
                    );
                  })}
                </div>

                <button onClick={askColor} className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-extrabold text-[#10211c] underline decoration-[#9f7b43]/55 underline-offset-8 transition hover:decoration-[#10211c]">
                  Ask color availability <ArrowRight size={15} />
                </button>
                <p className="mt-3 max-w-sm text-[11px] leading-5 text-[#10211c]/58">Digital preview for visualization. Final color, trim, and stock availability should be confirmed with LEPAS Jogja.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="interior" className="scroll-mt-28 bg-[#f4efe5] px-5 py-12 text-[#10211c] sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-7 lg:grid-cols-[1.22fr_.78fr] lg:items-center lg:gap-12">
              <div className="overflow-hidden bg-black/20">
                <img src="/images/e4-detail/interior-cabin.webp" alt="LEPAS E4 interior cabin" className="aspect-[16/10] h-full w-full object-cover" />
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#8b6b38]">03 / Interior</p>
                <h2 className="mt-4 text-4xl font-medium leading-[1] tracking-[-.045em] text-[#10211c] sm:text-5xl">Calm technology, made for every day.</h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-[#10211c]/72 sm:text-[15px]">
                  A clean digital cockpit, useful charging points, and comfort features are arranged to feel intuitive rather than complicated.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[#10211c]/14 pt-5">
                  <E4Feature value="13.2”" label="Central display" />
                  <E4Feature value="50W" label="Wireless charging" />
                  <E4Feature value="Ventilated" label="Front seat comfort" />
                  <E4Feature value="PM0.3" label="Cabin air filtration" />
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <InteriorPanel image="/images/e4-detail/head-unit.webp" label="Connected Control" title="Information, one glance away." />
              <InteriorPanel image="/images/e4-detail/ventilated-seat.webp" label="Personal Comfort" title="Comfort for warm city days." />
            </div>
          </div>
        </section>

        <section id="electric" className="scroll-mt-28 px-5 py-12 sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-7 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-12">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#8b6b38]">04 / Electric</p>
                <h2 className="mt-4 text-4xl font-medium leading-[1] tracking-[-.045em] sm:text-5xl">Charge less often. Drive with more freedom.</h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-[#10211c]/72 sm:text-[15px]">
                  A 67 kWh battery and up to 600 km CLTC range are paired with DC fast charging up to 130 kW, giving E4 a practical balance for daily use and longer urban-to-intercity trips.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[#10211c]/14 pt-5">
                  <SmallMetric value="600 km" label="CLTC Range" />
                  <SmallMetric value="67 kWh" label="Battery" />
                  <SmallMetric value="160 kW" label="Maximum Power" />
                  <SmallMetric value="~20 min" label="DC 30–80%" />
                </div>
                <p className="mt-4 text-[11px] leading-5 text-[#10211c]/54">Range and charging figures are manufacturer/test-standard references; real-world results vary with traffic, weather, driving style, and charging conditions.</p>
              </div>
              <div className="overflow-hidden bg-[#d9d4ca]">
                <img src="/images/e4-detail/urban-detail.webp" alt="LEPAS E4 electric SUV exterior" className="aspect-[16/10] h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="specifications" className="scroll-mt-28 border-t border-[#10211c]/10 bg-[#eee7da] px-5 py-12 sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-7 lg:grid-cols-[.62fr_1.38fr] lg:gap-12">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#806338]">05 / Specifications</p>
                <h2 className="mt-4 text-4xl font-medium leading-[1] tracking-[-.045em] sm:text-5xl">The numbers that matter.</h2>
                <p className="mt-5 max-w-sm text-sm leading-7 text-[#10211c]/70">Key Indonesia-market references for quick comparison. Final equipment and homologated figures should follow LEPAS Indonesia and dealer confirmation.</p>
              </div>
              <div className="border-t border-[#10211c]/18">
                {e4Specs.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[.82fr_1.18fr] gap-4 border-b border-[#10211c]/10 py-4 sm:grid-cols-2 sm:py-5">
                    <span className="text-[10px] font-extrabold uppercase tracking-[.15em] text-[#10211c]/58">{label}</span>
                    <span className="text-sm font-semibold sm:text-base">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-[#d8bd88]/25 bg-[#06120f] px-5 py-11 text-white sm:py-12 lg:px-8 lg:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_35%,rgba(214,189,138,.13),transparent_36%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-7 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#e0c68f]">LEPAS Jogja · E4</div>
              <h2 className="mt-4 max-w-2xl text-4xl font-medium leading-[1] tracking-[-.045em] text-white sm:text-5xl">Make electric feel effortless.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">Ask for current Yogyakarta pricing, available colors, financing options, stock, or arrange a personal test drive.</p>
              <div className="mt-5 text-[11px] leading-5 text-white/52">The Rp300-million positioning is a market reference, not a fixed Yogyakarta quotation.</div>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <button onClick={askPrice} className="inline-flex items-center gap-2 rounded-full bg-[#dfc691] px-6 py-3.5 text-sm font-extrabold text-[#10211c] transition hover:bg-[#ead7ae]">
                <MessageCircle size={16} /> Cek Harga Jogja
              </button>
              <button onClick={testDrive} className="inline-flex items-center gap-2 rounded-full border border-white/22 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/8">
                Book Test Drive <ArrowRight size={16} />
              </button>
              <Link href="/simulasi-kredit" className="inline-flex items-center gap-2 px-1 py-3 text-sm font-bold text-[#e0c68f] underline underline-offset-8">Simulasi Pembiayaan</Link>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-3 left-3 right-3 z-40 flex gap-2 rounded-full border border-white/10 bg-[#07110e]/95 p-1.5 shadow-2xl backdrop-blur-xl md:hidden">
        <button onClick={askPrice} className="flex-1 rounded-full bg-[#dfc691] px-3 py-3 text-xs font-extrabold text-[#10211c]">Harga Jogja</button>
        <button onClick={testDrive} className="flex-1 rounded-full px-3 py-3 text-xs font-bold text-white">Test Drive</button>
      </div>
      <Footer />
    </div>
  );
}

function E4Feature({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-xl font-medium tracking-[-.025em] text-[#dfc691] sm:text-2xl">{value}</div>
      <div className="mt-1.5 text-[9px] font-bold uppercase tracking-[.15em] text-[#10211c]/55">{label}</div>
    </div>
  );
}

function GenericDetail({ p }: { p: ProductType }) {
  const chat = (kind = 'informasi') => openWhatsApp(`Halo LEPAS Jogja, saya ingin ${kind} untuk ${p.name}. Mohon info harga OTR Jogja, promo, ketersediaan unit, dan jadwal test drive.`);
  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      <Header />
      <main>
        <section className="bg-[#0b1714] px-5 pb-16 pt-28 text-white">
          <div className="mx-auto max-w-7xl">
            <Link href="/produk" className="mb-7 inline-flex items-center gap-2 text-sm text-white/60"><ArrowLeft size={16} /> Semua model</Link>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="text-xs font-bold uppercase tracking-[.28em] text-[#d6bd8a]">{p.category}</div>
                <h1 className="mt-3 text-6xl font-medium md:text-8xl">{p.name}</h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">{p.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button onClick={() => chat('menjadwalkan test drive')} className="rounded-full bg-[#d6bd8a] px-6 py-4 font-black text-[#10211c]">Jadwalkan Test Drive</button>
                  <button onClick={() => chat('konsultasi harga')} className="rounded-full border border-white/25 px-6 py-4 font-bold">Tanya Harga Jogja</button>
                </div>
              </div>
              <img src={p.image} alt={p.name} className="w-full" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {p.features.map((f) => <div key={f} className="border-t border-[#10211c]/15 py-5"><div className="text-xl font-semibold">{f}</div></div>)}
          </div>
          <div className="mt-20 grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Specifications</p>
              <h2 className="mt-3 text-4xl font-medium">Detail utama {p.name}</h2>
              <p className="mt-5 leading-7 text-[#10211c]/60">Spesifikasi berikut merupakan ringkasan informasi produk. Detail pasar Indonesia dapat berubah menurut homologasi dan kebijakan LEPAS Indonesia.</p>
            </div>
            <div className="border-t border-[#10211c]/15">
              {Object.entries(p.specifications).map(([k, v]) => <div key={k} className="grid grid-cols-[.8fr_1.2fr] border-b border-[#10211c]/10 px-1 py-5"><span className="text-sm font-bold capitalize text-[#10211c]/45">{k}</span><span className="font-semibold">{v}</span></div>)}
            </div>
          </div>
          <div className="mt-20 bg-[#10211c] p-8 text-white md:p-10">
            <div className="text-sm font-bold uppercase tracking-[.22em] text-[#d6bd8a]">Harga & Program</div>
            <h2 className="mt-4 text-4xl font-semibold">Hubungi LEPAS Jogja</h2>
            <p className="mt-4 leading-7 text-white/60">{p.priceNote}</p>
            <button onClick={() => chat('mendapatkan penawaran')} className="mt-8 flex items-center gap-2 rounded-full bg-[#d6bd8a] px-6 py-4 font-black text-[#10211c]"><MessageCircle size={18} /> Dapatkan Penawaran</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function Detail() {
  const { slug } = useParams<{ slug: string }>();
  const p = getProductBySlug(slug);

  if (!p) {
    return (
      <div className="min-h-screen bg-[#f5f1e8]">
        <Header />
        <main className="mx-auto max-w-3xl px-5 pb-24 pt-36">
          <h1 className="text-4xl font-semibold">Model tidak ditemukan.</h1>
          <Link href="/produk" className="mt-6 inline-block underline">Kembali ke model</Link>
        </main>
        <Footer />
      </div>
    );
  }

  if (p.slug === 'lepas-l8-jogja') return <L8Detail p={p} />;
  if (p.slug === 'lepas-e4-jogja') return <E4Detail p={p} />;
  return <GenericDetail p={p} />;
}
