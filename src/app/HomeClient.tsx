'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { articles } from '@/lib/articles-data';
import { openWhatsApp } from '@/lib/whatsapp';

export default function HomeClient(){
 const chatL8=()=>openWhatsApp('Halo LEPAS Jogja, saya ingin konsultasi LEPAS L8. Mohon info harga OTR Jogja, promo, dan jadwal test drive terbaru.');
 const [activeTech,setActiveTech]=useState(0);
 const techItems=[
  {kicker:'01 / Cockpit',title:'Intelligent Cockpit',text:'Informasi dan kendali utama ditata agar terasa dekat, jelas, dan mudah dijangkau.',image:'/images/technology/e4-dashboard.webp',alt:'LEPAS E4 dashboard and front cabin'},
  {kicker:'02 / Interface',title:'Connected Control',text:'Antarmuka digital menjadi pusat interaksi untuk pengalaman berkendara yang lebih intuitif.',image:'/images/technology/e4-head-unit.webp',alt:'LEPAS E4 head unit display'},
  {kicker:'03 / Comfort',title:'Personal Comfort',text:'Kenyamanan kabin hadir lewat detail yang dirancang untuk perjalanan harian maupun waktu yang lebih panjang.',image:'/images/technology/e4-seat.webp',alt:'LEPAS E4 ventilated front seat'}
 ];
 return <div className="min-h-screen bg-[#f5f1e8] text-[#10211c]">
  <Header/>
  <main>
   <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#07100d] text-white">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{backgroundImage:"url('/images/lepas-l8-hero-poster.webp')"}}
      aria-hidden="true"
    />
    <video
      className="hero-motion-video absolute inset-0 h-full w-full object-cover object-[58%_center] md:object-center"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/images/lepas-l8-hero-poster.webp"
      aria-hidden="true"
    >
      <source src="/video/lepas-l8-hero.mp4" type="video/mp4"/>
    </video>

    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,12,10,.94)_0%,rgba(5,12,10,.78)_29%,rgba(5,12,10,.36)_52%,rgba(5,12,10,.06)_78%)]"/>
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(5,12,10,.93)_0%,rgba(5,12,10,.20)_34%,rgba(5,12,10,.08)_68%,rgba(5,12,10,.40)_100%)] md:bg-[linear-gradient(0deg,rgba(5,12,10,.62)_0%,transparent_36%,rgba(5,12,10,.20)_100%)]"/>
    <div className="pointer-events-none absolute inset-y-0 left-[48%] hidden w-px bg-gradient-to-b from-transparent via-[#d6bd8a]/22 to-transparent xl:block"/>
    <div className="pointer-events-none absolute -right-12 top-[16%] hidden select-none text-[23vw] font-medium leading-none tracking-[-.09em] text-white/[.025] lg:block">L8</div>

    <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-24 pt-32 sm:px-7 md:items-center md:pb-12 lg:px-8">
      <div className="relative z-20 max-w-[660px]">
        <div className="mb-7 border-l border-[#d6bd8a]/80 pl-4 sm:mb-9 sm:pl-5">
          <div className="text-[10px] font-bold uppercase tracking-[.34em] text-[#e5c98f] sm:text-xs">Premium Super Hybrid SUV</div>
          <div className="mt-2 text-2xl font-medium tracking-[.06em] text-[#f8f4eb] sm:text-3xl">LEPAS L8</div>
          <div className="mt-1.5 text-[10px] uppercase tracking-[.22em] text-white/48 sm:text-xs">Leopard Aesthetics</div>
        </div>

        <h1 className="max-w-2xl text-[clamp(3.35rem,7.4vw,7.6rem)] font-medium leading-[.87] tracking-[-.06em]">
          Drive Your<br/><span className="font-light italic text-[#dfc691]">Elegance.</span>
        </h1>
        <p className="mt-7 max-w-[530px] text-[15px] leading-7 text-white/68 sm:text-lg sm:leading-8">Performa super hybrid premium yang memadukan tenaga, jarak tempuh panjang, teknologi cerdas, dan kenyamanan elegan.</p>

        <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
          <Link href="/produk/lepas-l8-jogja" className="group flex items-center gap-3 rounded-full bg-[#dfc691] px-6 py-3.5 text-sm font-extrabold text-[#10211c] transition duration-300 hover:bg-[#edd8ab] sm:px-7 sm:py-4">Explore L8 <ArrowRight size={17} className="transition-transform group-hover:translate-x-1"/></Link>
          <button onClick={chatL8} className="rounded-full border border-white/25 bg-black/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:border-[#d6bd8a]/60 hover:bg-black/25 sm:px-7 sm:py-4">Book Test Drive</button>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 right-8 hidden items-center gap-4 text-[9px] font-bold uppercase tracking-[.30em] text-white/38 md:flex">
        <span className="h-px w-14 bg-[#d6bd8a]/55"/> Scroll to discover
      </div>
      <div className="pointer-events-none absolute right-8 top-28 hidden text-right lg:block">
        <div className="text-[9px] font-bold uppercase tracking-[.32em] text-[#d6bd8a]/60">PHEV / L8</div>
        <div className="mt-2 text-[10px] uppercase tracking-[.18em] text-white/28">Super Hybrid Mobility</div>
      </div>
    </div>
   </section>

   <section className="relative overflow-hidden bg-[#f4efe5] px-5 pb-12 pt-24 lg:px-8 lg:pb-16 lg:pt-32">
    <div className="pointer-events-none absolute -right-20 top-10 select-none text-[22vw] font-medium leading-none tracking-[-.08em] text-[#10211c]/[.025]">LEPAS</div>
    <div className="relative mx-auto max-w-7xl">
      <div className="grid gap-10 border-b border-[#10211c]/12 pb-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:pb-16">
        <div>
          <p className="eyebrow">The Art of Elegant Mobility</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-.04em] sm:text-5xl md:text-6xl lg:text-7xl">Designed not only to move you, but to change how movement feels.</h2>
        </div>
        <div className="lg:pb-2">
          <p className="max-w-xl text-base leading-8 text-[#10211c]/62 sm:text-lg">LEPAS memadukan desain emosional, teknologi yang intuitif, dan kenyamanan personal dalam satu bahasa yang tenang: <span className="font-semibold text-[#10211c]">Drive Your Elegance.</span></p>
          <div className="mt-7 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[.28em] text-[#8a6c3f]"><span className="h-px w-14 bg-[#b8955c]"/> Leopard Aesthetics</div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.35fr_.65fr] lg:gap-6">
        <article className="group relative min-h-[430px] overflow-hidden rounded-[2.1rem] bg-[#e9e5de] sm:min-h-[520px] lg:min-h-[640px]">
          <img src="/images/philosophy/l8-exterior.webp" alt="LEPAS L8 exterior three quarter view" className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.025]"/>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07100d]/80 via-transparent to-transparent"/>
          <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/10 text-xs font-bold text-white backdrop-blur-md sm:left-8 sm:top-8">01</div>
          <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9 lg:p-10">
            <div className="text-[10px] font-bold uppercase tracking-[.3em] text-[#e5c98f]">Beauty in Motion</div>
            <h3 className="mt-3 max-w-xl text-3xl font-medium tracking-[-.03em] sm:text-4xl">Strength in proportion. Elegance in every line.</h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/66 sm:text-base">Leopard Aesthetics menerjemahkan karakter kuat dan lincah ke dalam siluet yang tetap refined.</p>
          </div>
        </article>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
          <article className="group relative min-h-[300px] overflow-hidden rounded-[2.1rem] bg-[#12332f] lg:min-h-0">
            <img src="/images/philosophy/l8-light-detail.webp" alt="LEPAS L8 lighting detail" className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.04]"/>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07100d]/82 via-[#07100d]/8 to-transparent"/>
            <div className="absolute bottom-0 p-7 text-white sm:p-8">
              <div className="text-[10px] font-bold uppercase tracking-[.28em] text-[#e5c98f]">02 / Detail</div>
              <h3 className="mt-2 text-2xl font-medium">Leopard Aesthetics</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/62">Detail tajam dan presisi memberi identitas visual yang langsung dikenali.</p>
            </div>
          </article>

          <article className="group relative min-h-[330px] overflow-hidden rounded-[2.1rem] bg-[#d9d3cb] lg:min-h-0">
            <img src="/images/philosophy/l8-interior.webp" alt="LEPAS L8 rear cabin and panoramic roof" className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.035]"/>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07100d]/84 via-transparent to-transparent"/>
            <div className="absolute bottom-0 p-7 text-white sm:p-8">
              <div className="text-[10px] font-bold uppercase tracking-[.28em] text-[#e5c98f]">03 / Experience</div>
              <h3 className="mt-2 text-2xl font-medium">Intelligent Comfort</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/62">Ruang yang dirancang untuk membuat teknologi terasa natural, tenang, dan personal.</p>
            </div>
          </article>
        </div>
      </div>

      <div className="mt-6 grid gap-6 rounded-[2rem] border border-[#10211c]/10 bg-[#ebe2d3] px-7 py-8 sm:px-9 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:px-10 lg:py-9">
        <div className="text-[10px] font-bold uppercase tracking-[.30em] text-[#8a6c3f]">New Energy Freedom</div>
        <p className="max-w-2xl text-xl font-medium leading-8 tracking-[-.02em] sm:text-2xl">PHEV dan BEV memberi kebebasan memilih energi tanpa meninggalkan standar elegansi LEPAS.</p>
        <Link href="/produk" className="group flex items-center gap-2 text-sm font-extrabold text-[#10211c]">Discover the range <ArrowRight size={17} className="transition-transform group-hover:translate-x-1"/></Link>
      </div>
    </div>
   </section>

   <section id="models" className="scroll-mt-20 bg-[#f4efe5] px-5 pb-24 pt-8 text-[#10211c] lg:px-8 lg:pb-32 lg:pt-10">
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 max-w-2xl lg:mb-10">
        <p className="text-[10px] font-bold uppercase tracking-[.34em] text-[#8a6c3f]">Our Models</p>
        <h2 className="mt-4 text-4xl font-medium leading-tight tracking-[-.04em] sm:text-5xl lg:text-6xl">Choose your expression of elegance.</h2>
        <p className="mt-5 text-base leading-8 text-[#10211c]/58 sm:text-lg">Dua karakter berbeda, satu bahasa desain LEPAS.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="relative overflow-hidden rounded-[1.75rem] border border-[#b8955c]/40 bg-[#fbf7ef] shadow-[0_22px_60px_rgba(103,76,36,.10)]">
          <div className="absolute left-6 top-6 z-10 rounded-full border border-white/45 bg-[#10211c]/70 px-3.5 py-2 text-[9px] font-bold uppercase tracking-[.24em] text-[#f1d9a8] backdrop-blur-md">Electric Focus</div>
          <div className="aspect-[4/3] overflow-hidden bg-[#e8e1d5]">
            <img src="/images/models/e4-showcase.webp" alt="LEPAS E4" className="h-full w-full scale-[1.05] object-cover object-[50%_52%] transition duration-700 hover:scale-[1.08]"/>
          </div>
          <div className="border-t border-[#b8955c]/20 p-7 sm:p-8">
            <div className="text-[10px] font-bold uppercase tracking-[.28em] text-[#8a6c3f]">Premium Electric SUV Â· BEV</div>
            <h3 className="mt-3 text-5xl font-medium tracking-[-.05em] sm:text-6xl">LEPAS E4</h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#10211c]/62 sm:text-base">Mobilitas listrik premium dengan karakter modern, clean, dan cocok untuk ritme urban.</p>
            <Link href="/produk/lepas-e4-jogja" className="group mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#10211c]">Explore E4 <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></Link>
          </div>
        </article>

        <article className="overflow-hidden rounded-[1.75rem] border border-[#10211c]/10 bg-[#10211c] text-white">
          <div className="aspect-[4/3] overflow-hidden bg-[#0b1714]">
            <img src="/images/models/l8-showcase.webp" alt="LEPAS L8" className="h-full w-full object-cover object-center"/>
          </div>
          <div className="p-7 sm:p-8">
            <div className="text-[10px] font-bold uppercase tracking-[.28em] text-[#dfc691]">Premium Super Hybrid SUV Â· PHEV</div>
            <h3 className="mt-3 text-4xl font-medium tracking-[-.04em] sm:text-5xl">LEPAS L8</h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">Super hybrid premium dengan performa kuat, jarak tempuh panjang, dan kenyamanan untuk perjalanan lebih jauh.</p>
            <Link href="/produk/lepas-l8-jogja" className="group mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#efd7a7]">Explore L8 <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></Link>
          </div>
        </article>
      </div>
    </div>
   </section>
   <section id="experience" className="scroll-mt-20 relative overflow-hidden bg-[#0b1714] px-5 py-20 text-white sm:py-24 lg:px-8 lg:py-28">
    <div className="pointer-events-none absolute -right-20 top-0 select-none text-[20vw] font-medium leading-none tracking-[-.08em] text-white/[.025]">TECH</div>
    <div className="relative mx-auto max-w-7xl">
      <div className="mb-10 grid gap-6 border-b border-white/10 pb-9 lg:grid-cols-[1fr_.8fr] lg:items-end lg:pb-10">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.34em] text-[#dfc691]">Intelligent Experience</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-medium leading-[1.03] tracking-[-.04em] sm:text-5xl lg:text-6xl">Technology that feels natural.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-white/58 sm:text-base">Teknologi LEPAS dirancang untuk membantu tanpa membuat kabin terasa rumitâ€”lebih intuitif, lebih personal, dan tetap tenang secara visual.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.18fr_.82fr] lg:items-stretch lg:gap-10">
        <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] bg-[#13211d] sm:min-h-[500px] lg:min-h-[610px]">
          {techItems.map((item,index)=><img key={item.image} src={item.image} alt={item.alt} className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${activeTech===index?'scale-100 opacity-100':'scale-[1.02] opacity-0'}`}/>) }
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07100d]/38 via-transparent to-transparent"/>
          <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[9px] font-bold uppercase tracking-[.24em] text-white/70 backdrop-blur-md">LEPAS E4 Interior</div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {techItems.map((item,index)=><button key={item.title} onClick={()=>setActiveTech(index)} className="group block w-full py-6 text-left sm:py-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className={`text-[9px] font-bold uppercase tracking-[.28em] transition ${activeTech===index?'text-[#dfc691]':'text-white/30'}`}>{item.kicker}</div>
                  <h3 className={`mt-2 text-2xl font-medium tracking-[-.03em] transition sm:text-3xl ${activeTech===index?'text-white':'text-white/48 group-hover:text-white/75'}`}>{item.title}</h3>
                  <p className={`mt-3 max-w-lg text-sm leading-7 transition ${activeTech===index?'text-white/62':'text-white/32'}`}>{item.text}</p>
                </div>
                <span className={`mt-2 text-xl transition ${activeTech===index?'rotate-45 text-[#dfc691]':'text-white/25 group-hover:text-white/60'}`}>+</span>
              </div>
            </button>)}
          </div>
          <div className="mt-7 flex items-start gap-4 text-[10px] leading-5 text-white/34">
            <span className="mt-2 h-px w-10 shrink-0 bg-[#dfc691]/45"/>
            <span>Ketersediaan fitur dapat berbeda menurut model, varian, dan spesifikasi pasar Indonesia.</span>
          </div>
        </div>
      </div>
    </div>
   </section>

   <section id="ownership" className="scroll-mt-20 bg-[#f4efe5] px-5 py-20 text-[#10211c] sm:py-24 lg:px-8 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="overflow-hidden rounded-[2rem] border border-[#10211c]/10 bg-[#fbf7ef] lg:grid lg:grid-cols-[.92fr_1.08fr]">
        <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-12">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.34em] text-[#8a6c3f]">LEPAS in Yogyakarta</p>
            <h2 className="mt-4 max-w-xl text-4xl font-medium leading-[1.04] tracking-[-.04em] sm:text-5xl lg:text-6xl">Experience LEPAS closer to you.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#10211c]/60">Konsultasikan model, jadwalkan test drive, cek harga OTR Yogyakarta, ketersediaan unit, dan pilihan pembiayaan melalui satu kontak.</p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <button onClick={()=>openWhatsApp('Halo LEPAS Jogja, saya ingin konsultasi produk LEPAS untuk area Yogyakarta. Mohon info model, harga OTR, ketersediaan unit, dan jadwal test drive terbaru.')} className="group flex items-center gap-3 rounded-full bg-[#10211c] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#1a2f29]">WhatsApp Consultation <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></button>
            <Link href="/simulasi-kredit" className="group flex items-center gap-3 rounded-full border border-[#10211c]/18 px-6 py-3.5 text-sm font-extrabold text-[#10211c] transition hover:border-[#b8955c]/70 hover:bg-white/55">Financing Options <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></Link>
          </div>

          <div className="mt-10 border-t border-[#10211c]/10 pt-6">
            <div className="text-[9px] font-bold uppercase tracking-[.28em] text-[#10211c]/38">Product Consultation & Test Drive</div>
            <div className="mt-2 text-xl font-semibold tracking-[-.02em]">+62 822-5185-3096</div>
          </div>
        </div>

        <div className="relative min-h-[330px] overflow-hidden bg-[#07100d] sm:min-h-[420px] lg:min-h-[560px]">
          <img src="/images/ownership/l8-rear.webp" alt="LEPAS L8 rear three quarter view" className="absolute inset-0 h-full w-full object-cover object-center"/>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07100d]/18 via-transparent to-transparent lg:from-[#07100d]/28"/>
          <div className="absolute bottom-5 right-5 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[9px] font-bold uppercase tracking-[.24em] text-white/64 backdrop-blur-md">Drive Your Elegance</div>
        </div>
      </div>

      <div className="grid border-b border-[#10211c]/10 md:grid-cols-3">
        <button onClick={()=>openWhatsApp('Halo LEPAS Jogja, saya ingin menjadwalkan test drive. Mohon info jadwal dan model yang tersedia.')} className="group border-b border-[#10211c]/10 py-7 text-left transition md:border-b-0 md:border-r md:px-7 first:md:pl-0">
          <div className="text-[9px] font-bold uppercase tracking-[.28em] text-[#8a6c3f]">01 / Test Drive</div>
          <div className="mt-2 flex items-center justify-between gap-4 text-lg font-semibold"><span>Schedule a drive</span><ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></div>
        </button>
        <button onClick={()=>openWhatsApp('Halo LEPAS Jogja, saya ingin cek harga OTR Yogyakarta dan ketersediaan unit LEPAS terbaru.')} className="group border-b border-[#10211c]/10 py-7 text-left transition md:border-b-0 md:border-r md:px-7">
          <div className="text-[9px] font-bold uppercase tracking-[.28em] text-[#8a6c3f]">02 / Price & Availability</div>
          <div className="mt-2 flex items-center justify-between gap-4 text-lg font-semibold"><span>Ask current details</span><ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></div>
        </button>
        <Link href="/simulasi-kredit" className="group py-7 text-left transition md:px-7 md:pr-0">
          <div className="text-[9px] font-bold uppercase tracking-[.28em] text-[#8a6c3f]">03 / Financing</div>
          <div className="mt-2 flex items-center justify-between gap-4 text-lg font-semibold"><span>Explore ownership plans</span><ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></div>
        </Link>
      </div>
    </div>
   </section>

   <section id="visit" className="scroll-mt-20 bg-[#0b1714] px-5 py-20 text-white sm:py-24 lg:px-8 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-stretch">
        <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[.035] p-7 sm:p-9 lg:p-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.34em] text-[#dfc691]">Visit LEPAS Jogja</p>
            <h2 className="mt-4 text-4xl font-medium leading-[1.04] tracking-[-.04em] sm:text-5xl">Closer to your journey.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/58 sm:text-base">Kunjungi lokasi LEPAS Yogyakarta untuk melihat unit, konsultasi produk, dan mengatur jadwal test drive.</p>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6">
            <div className="text-[9px] font-bold uppercase tracking-[.28em] text-[#dfc691]/70">Showroom Location</div>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/72">Jl. Laksda Adisucipto, Jl. Tambak Bayan 2 No.1, Kalongan, Maguwoharjo, Depok, Sleman, D.I. Yogyakarta 55281.</p>
            <a href="https://share.google/9SHD8XDY6Wdf5OAfp" target="_blank" rel="noreferrer" className="group mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#efd7a7]">Open in Google Maps <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></a>
          </div>
        </div>

        <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-[#dfc691]/20 bg-[#111b18] shadow-[0_24px_70px_rgba(0,0,0,.22)] sm:min-h-[520px]">
          <iframe
            title="Lokasi LEPAS Yogyakarta"
            src="https://www.google.com/maps?q=LEPAS%20SUMBER%20BARU%20YOGYAKARTA%20Tambak%20Bayan%202%20Sleman&z=16&output=embed"
            className="absolute inset-0 h-full w-full border-0 grayscale-[.2] contrast-[.92] saturate-[.82]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0b1714]/45 to-transparent"/>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b1714]/35 to-transparent"/>
          <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/15 bg-[#0b1714]/72 px-4 py-2 text-[9px] font-bold uppercase tracking-[.24em] text-[#efd7a7] backdrop-blur-md">LEPAS Yogyakarta</div>
        </div>
      </div>
    </div>
   </section>

   <section id="journal" className="scroll-mt-20 bg-[#f4efe5] px-5 py-8 text-[#10211c] sm:py-9 lg:px-8 lg:py-10">
    <div className="mx-auto max-w-6xl">
      <div className="mb-4 flex items-end justify-between gap-5 border-b border-[#10211c]/12 pb-3">
        <div>
          <p className="eyebrow">Journal</p>
          <h2 className="mt-1 text-lg font-medium tracking-[-.03em] sm:text-xl">Stories from the world of LEPAS.</h2>
        </div>
        <Link href="/artikel" className="group hidden items-center gap-2 text-[11px] font-extrabold sm:flex">View all <ArrowRight size={13} className="transition-transform group-hover:translate-x-1"/></Link>
      </div>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
        {articles.slice(0,4).map((a,index)=>(
          <Link key={a.id} href={`/artikel/${a.slug}`} className="group block min-w-[235px] snap-start sm:min-w-[260px] lg:min-w-0">
            <div className="h-[118px] overflow-hidden bg-[#ddd6c9] sm:h-[132px] lg:h-[138px]">
              <img src={a.thumbnail} alt={a.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"/>
            </div>
            <div className="mt-2.5 flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.16em] text-[#8a6c3f]">
              <span>{String(index+1).padStart(2,'0')}</span>
              <span className="h-px w-4 bg-[#8a6c3f]/35"/>
              <span className="truncate">{a.category}</span>
            </div>
            <h3 className="mt-1.5 line-clamp-2 text-sm font-semibold leading-snug tracking-[-.02em] sm:text-[15px]">{a.title}</h3>
          </Link>
        ))}
      </div>

      <Link href="/artikel" className="mt-4 flex items-center justify-center gap-2 border-t border-[#10211c]/12 pt-3 text-[11px] font-extrabold sm:hidden">View all journal <ArrowRight size={13}/></Link>
    </div>
   </section>

   <section className="relative overflow-hidden bg-[#10211c] px-5 py-20 text-white sm:py-24 lg:px-8 lg:py-28">
    <div className="pointer-events-none absolute -right-16 -top-20 select-none text-[24vw] font-medium leading-none tracking-[-.09em] text-white/[.025]">LEPAS</div>
    <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-[#d6bd8a]/18 to-transparent lg:block"/>
    <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[.34em] text-[#dfc691]">Your Next Journey</p>
        <h2 className="mt-4 max-w-4xl text-5xl font-medium leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-7xl">Experience LEPAS<br/><span className="font-light italic text-[#dfc691]">in Yogyakarta.</span></h2>
      </div>
      <div className="lg:pb-1">
        <p className="max-w-lg text-base leading-8 text-white/58">Temukan model yang sesuai, konsultasikan kepemilikan, atau jadwalkan pengalaman berkendara langsung bersama LEPAS Jogja.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button onClick={()=>openWhatsApp('Halo LEPAS Jogja, saya ingin menjadwalkan test drive. Mohon info model dan jadwal yang tersedia.')} className="group flex items-center gap-3 rounded-full bg-[#dfc691] px-6 py-3.5 text-sm font-extrabold text-[#10211c] transition hover:bg-[#ead5aa]">Book Test Drive <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></button>
          <Link href="/#models" className="group flex items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 text-sm font-extrabold text-white transition hover:border-[#dfc691]/60">Explore Models <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></Link>
        </div>
      </div>
    </div>
   </section>
  </main><Footer/>
 </div>
}


