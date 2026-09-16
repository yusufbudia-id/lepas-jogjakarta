'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FormEvent, useState } from 'react';
import { MessageCircle, Phone, MapPin, ArrowRight } from 'lucide-react';
import { openWhatsApp, WHATSAPP_DISPLAY } from '@/lib/whatsapp';

const mapShareUrl='https://share.google/9SHD8XDY6Wdf5OAfp';
const mapEmbedUrl='https://www.google.com/maps?q=LEPAS%20SUMBER%20BARU%20YOGYAKARTA%20Tambak%20Bayan%202%20Sleman&z=16&output=embed';

export default function Contact(){
 const [name,setName]=useState('');
 const [msg,setMsg]=useState('');
 const submit=(e:FormEvent)=>{e.preventDefault();openWhatsApp(`Halo LEPAS Jogja, saya ${name||'calon konsumen'}. ${msg||'Saya ingin informasi produk, harga OTR Jogja, promo, dan test drive.'}`)};
 return <div className="min-h-screen bg-[#f5f1e8] text-[#10211c]">
  <Header/>
  <main>
   <section className="bg-[#0b1714] px-5 pb-20 pt-36 text-white"><div className="mx-auto max-w-7xl"><p className="eyebrow text-[#d6bd8a]">Contact</p><h1 className="mt-4 text-5xl font-medium tracking-[-.04em] md:text-7xl">Mulai percakapan Anda.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">Tanyakan harga OTR Yogyakarta, promo, unit tersedia, simulasi pembiayaan, atau jadwal test drive.</p></div></section>

   <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-20">
    <form onSubmit={submit} className="rounded-[2rem] border border-[#10211c]/10 bg-white p-7 md:p-10"><label className="text-sm font-bold">Nama</label><input value={name} onChange={e=>setName(e.target.value)} className="mt-2 w-full rounded-xl border border-[#10211c]/15 bg-[#faf8f3] px-4 py-3 outline-none focus:border-[#8b7045]" placeholder="Nama Anda"/><label className="mt-6 block text-sm font-bold">Pesan</label><textarea value={msg} onChange={e=>setMsg(e.target.value)} rows={6} className="mt-2 w-full rounded-xl border border-[#10211c]/15 bg-[#faf8f3] px-4 py-3 outline-none focus:border-[#8b7045]" placeholder="Contoh: Saya ingin test drive LEPAS L8 minggu ini."/><button className="mt-6 flex items-center gap-2 rounded-full bg-[#10211c] px-6 py-4 font-black text-white">Kirim ke WhatsApp <ArrowRight size={18}/></button></form>

    <div className="rounded-[2rem] bg-[#10211c] p-8 text-white md:p-10"><h2 className="text-3xl font-semibold">Informasi kontak</h2><div className="mt-9 grid gap-6"><Info icon={<Phone/>} label="WhatsApp" value={WHATSAPP_DISPLAY}/><Info icon={<MapPin/>} label="Showroom" value="Tambak Bayan, Laksda Adisucipto, Sleman"/><Info icon={<MessageCircle/>} label="Layanan" value="Produk • Harga • Promo • Test Drive • Kredit"/></div><button onClick={()=>openWhatsApp('Halo LEPAS Jogja, saya ingin konsultasi produk LEPAS.')} className="mt-10 w-full rounded-full bg-[#d6bd8a] px-5 py-4 font-black text-[#10211c]">Chat WhatsApp</button></div>
   </section>

   <section className="bg-[#0b1714] px-5 py-16 text-white lg:px-8 lg:py-20">
    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-stretch">
      <div className="flex flex-col justify-between py-2">
        <div><p className="text-[10px] font-bold uppercase tracking-[.34em] text-[#dfc691]">Find Us</p><h2 className="mt-4 text-4xl font-medium tracking-[-.04em] sm:text-5xl">LEPAS Yogyakarta.</h2><p className="mt-5 max-w-md text-sm leading-7 text-white/58">Jl. Laksda Adisucipto, Jl. Tambak Bayan 2 No.1, Kalongan, Maguwoharjo, Depok, Sleman, D.I. Yogyakarta 55281.</p></div>
        <a href={mapShareUrl} target="_blank" rel="noreferrer" className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-extrabold text-[#efd7a7]">Open in Google Maps <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></a>
      </div>
      <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] border border-[#dfc691]/20 bg-[#111b18] sm:min-h-[500px]"><iframe title="Lokasi LEPAS Yogyakarta" src={mapEmbedUrl} className="absolute inset-0 h-full w-full border-0 grayscale-[.2] contrast-[.92] saturate-[.82]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/15 bg-[#0b1714]/72 px-4 py-2 text-[9px] font-bold uppercase tracking-[.24em] text-[#efd7a7] backdrop-blur-md">LEPAS Yogyakarta</div></div>
    </div>
   </section>
  </main>
  <Footer/>
 </div>
}

function Info({icon,label,value}:{icon:React.ReactNode,label:string,value:string}){return <div className="flex gap-4"><div className="text-[#d6bd8a]">{icon}</div><div><div className="text-xs font-bold uppercase tracking-[.18em] text-white/40">{label}</div><div className="mt-1 font-semibold">{value}</div></div></div>}
