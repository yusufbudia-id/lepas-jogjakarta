'use client';
import Link from 'next/link';
import { ArrowUpRight, Phone } from 'lucide-react';
import { openWhatsApp, WHATSAPP_DISPLAY } from '@/lib/whatsapp';

export default function Footer(){
 const chat=()=>openWhatsApp('Halo LEPAS Jogja, saya ingin mendapatkan informasi harga, promo, dan test drive terbaru.');
 return <footer className="bg-[#07100d] text-white">
   <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
    <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.5fr_.7fr_.8fr] lg:gap-16">
      <div>
        <div className="text-3xl font-semibold tracking-[.30em]">LEPAS</div>
        <div className="mt-2 text-[10px] font-bold uppercase tracking-[.28em] text-[#d6bd8a]">Drive Your Elegance</div>
        <p className="mt-5 max-w-md text-sm leading-7 text-white/48">Product consultation, test drive, price information, and ownership support for LEPAS in Yogyakarta.</p>
      </div>

      <div>
        <h3 className="text-[10px] font-bold uppercase tracking-[.25em] text-white/35">Explore</h3>
        <div className="mt-5 grid gap-3 text-sm text-white/68">
          <Link href="/#models" className="transition hover:text-white">Models</Link>
          <Link href="/#experience" className="transition hover:text-white">Experience</Link>
          <Link href="/#ownership" className="transition hover:text-white">Ownership</Link>
          <Link href="/artikel" className="transition hover:text-white">Journal</Link>
        </div>
      </div>

      <div>
        <h3 className="text-[10px] font-bold uppercase tracking-[.25em] text-white/35">LEPAS Jogja</h3>
        <button onClick={chat} className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#e4cca0]"><Phone size={16}/>{WHATSAPP_DISPLAY}</button>
        <p className="mt-4 max-w-xs text-sm leading-6 text-white/48">Jl. Laksda Adisucipto, Tambak Bayan 2, Maguwoharjo, Sleman, D.I. Yogyakarta.</p>
        <a className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-white/62 transition hover:text-white" href="https://lepas.co.id" target="_blank" rel="noopener noreferrer">LEPAS Indonesia <ArrowUpRight size={14}/></a>
      </div>
    </div>

    <div className="flex flex-col gap-3 pt-7 text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
      <span>© {new Date().getFullYear()} LEPAS Jogja.</span>
      <span>Informasi produk dan program dapat berubah mengikuti kebijakan LEPAS Indonesia.</span>
    </div>
   </div>
 </footer>
}
