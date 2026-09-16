'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { openWhatsApp } from '@/lib/whatsapp';

const nav = [
  ['Models','/#models'],
  ['Experience','/#experience'],
  ['Ownership','/#ownership'],
  ['Visit','/#visit'],
  ['Journal','/artikel']
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const testDrive = () => openWhatsApp('Halo LEPAS Jogja, saya ingin menjadwalkan test drive. Mohon info model dan jadwal yang tersedia.');

  return <>
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b text-white transition-all duration-300 ${
        scrolled || open
          ? 'border-white/20 bg-[#07100d]/58 shadow-[inset_0_-1px_0_rgba(255,255,255,.06),0_10px_32px_rgba(0,0,0,.14)] backdrop-blur-[28px]'
          : 'border-white/18 bg-[#07100d]/34 shadow-[inset_0_-1px_0_rgba(255,255,255,.05)] backdrop-blur-[24px]'
      }`}
    >
      <div className="mx-auto flex h-[40px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="group relative flex h-[34px] items-center" aria-label="LEPAS Jogjakarta.com">
          <span aria-hidden="true" className="pointer-events-none absolute -inset-x-2 inset-y-2 rounded-full bg-[#f7efe0]/35 blur-xl transition group-hover:bg-[#f7efe0]/45" />
          <img
            src="/images/brand/lepas-jogjakarta-logo.png"
            alt="LEPAS jogjakarta.com"
            className="relative z-10 h-[27px] w-auto max-w-[164px] object-contain sm:h-[29px] sm:max-w-[178px]"
            style={{ filter: 'drop-shadow(0 1px 0 rgba(255,255,255,.72)) drop-shadow(0 4px 10px rgba(255,255,255,.16))' }}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map(([label,href]) => (
            <Link
              key={href}
              href={href}
              className={`text-[12px] font-bold uppercase tracking-[.08em] transition ${
                href === '/artikel' && pathname.startsWith('/artikel')
                  ? 'text-[#e3cb99]'
                  : 'text-white/78 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            onClick={testDrive}
            className="rounded-full border border-[#f7b552]/90 bg-[#f2a23a] px-4.5 py-1.5 text-[11px] font-black tracking-[.01em] text-[#10211c] shadow-[0_4px_18px_rgba(0,0,0,.10)] transition hover:bg-[#ffb44f]"
          >
            Book Test Drive
          </button>
        </div>

        <button className="grid h-7 w-7 place-items-center lg:hidden" onClick={()=>setOpen(!open)} aria-label="Buka menu">
          {open ? <X size={19}/> : <Menu size={19}/>}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#07100d]/86 px-5 pb-5 pt-3 backdrop-blur-2xl lg:hidden">
          <div className="grid">
            {nav.map(([label,href]) => (
              <Link
                onClick={()=>setOpen(false)}
                key={href}
                href={href}
                className="border-b border-white/10 px-1 py-3.5 text-[12px] font-bold uppercase tracking-[.08em] text-white/90 last:border-b-0"
              >
                {label}
              </Link>
            ))}
          </div>
          <button onClick={testDrive} className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#f2a23a] px-4 py-3 text-sm font-black text-[#10211c]">
            <MessageCircle size={16}/> Book Test Drive
          </button>
        </div>
      )}
    </header>

    {!pathname.startsWith('/produk/') && (
      <div className="fixed bottom-4 left-4 right-4 z-40 flex items-center gap-2 rounded-full border border-white/12 bg-[#07100d]/72 p-1.5 shadow-2xl backdrop-blur-2xl md:hidden">
        <Link href="/#models" className="flex-1 rounded-full px-3 py-3 text-center text-xs font-bold text-white">Models</Link>
        <button onClick={testDrive} className="flex flex-[1.25] items-center justify-center gap-2 rounded-full bg-[#f2a23a] px-3 py-3 text-xs font-black text-[#10211c]"><MessageCircle size={15}/> Test Drive</button>
      </div>
    )}
  </>;
}
