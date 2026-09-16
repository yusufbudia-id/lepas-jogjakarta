'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FormEvent, useState } from 'react';
import { products } from '@/lib/products-data';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

const dpOptions = ['20%', '25%', '30%', '40%', '50%'];
const tenorOptions = ['1 tahun', '2 tahun', '3 tahun', '4 tahun', '5 tahun'];

export default function Credit() {
  const [model, setModel] = useState(products.find((p) => p.slug === 'lepas-e4-jogja')?.name ?? products[0]?.name ?? 'LEPAS E4');
  const [dp, setDp] = useState('20%');
  const [tenor, setTenor] = useState('5 tahun');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    openWhatsApp(
      `Halo LEPAS Jogja, saya ingin simulasi pembiayaan ${model}. Rencana DP ${dp}, tenor ${tenor}. Mohon rincian estimasi angsuran, biaya awal, dan program leasing terbaru.`
    );
  };

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#10211c]">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-[#08130f] px-5 pb-12 pt-28 text-white lg:px-8 lg:pb-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_30%,rgba(242,162,58,.12),transparent_32%)]" />
          <div className="relative mx-auto max-w-6xl">
            <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#dfc691]">
              Financing Options
            </p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
              <h1 className="max-w-3xl text-4xl font-medium leading-[.98] tracking-[-.045em] sm:text-5xl lg:text-6xl">
                Find a financing plan that fits your journey.
              </h1>
              <p className="max-w-xl text-sm leading-7 text-white/66 lg:justify-self-end">
                Pilih model, rencana uang muka, dan tenor. Tim LEPAS Jogja akan membantu memberikan simulasi berdasarkan program leasing yang benar-benar berlaku.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[.82fr_1.18fr] lg:px-8 lg:py-14">
          <div className="lg:pr-8">
            <p className="text-[10px] font-extrabold uppercase tracking-[.24em] text-[#8b7045]">
              How it works
            </p>
            <h2 className="mt-3 max-w-md text-3xl font-medium leading-[1.05] tracking-[-.035em] sm:text-4xl">
              Simple choices. Real quotation.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#10211c]/64">
              Kami tidak menampilkan angka cicilan fiktif karena bunga, asuransi, biaya administrasi, dan promo dapat berubah menurut leasing dan profil pembeli.
            </p>

            <div className="mt-8 border-t border-[#10211c]/14">
              {[
                ['01', 'Choose your model', 'Pilih E4 atau L8 sesuai kebutuhan mobilitas Anda.'],
                ['02', 'Set DP & tenor', 'Tentukan preferensi awal agar sales dapat menyiapkan simulasi yang relevan.'],
                ['03', 'Receive current options', 'Tim sales mengirim estimasi berdasarkan program leasing terbaru.'],
              ].map(([num, title, copy]) => (
                <div key={num} className="grid grid-cols-[44px_1fr] gap-4 border-b border-[#10211c]/10 py-5">
                  <div className="text-[10px] font-extrabold tracking-[.18em] text-[#8b7045]">{num}</div>
                  <div>
                    <div className="font-semibold">{title}</div>
                    <p className="mt-1.5 text-sm leading-6 text-[#10211c]/58">{copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 text-xs leading-6 text-[#10211c]/58">
              <Check size={16} className="mt-1 shrink-0 text-[#a77a34]" />
              <span>
                Persetujuan akhir tetap mengikuti kebijakan leasing, verifikasi dokumen, harga unit, asuransi, dan program yang berlaku saat pengajuan.
              </span>
            </div>
          </div>

          <form
            onSubmit={submit}
            className="border border-[#10211c]/12 bg-[#fbf8f1] p-6 shadow-[0_24px_70px_rgba(16,33,28,.06)] sm:p-8 lg:p-9"
          >
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#8b7045]">
                01 / Model
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {products.map((product) => {
                  const active = model === product.name;
                  return (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => setModel(product.name)}
                      className={`border px-4 py-4 text-left transition ${
                        active
                          ? 'border-[#10211c] bg-[#10211c] text-white'
                          : 'border-[#10211c]/12 bg-transparent hover:border-[#10211c]/30'
                      }`}
                    >
                      <div className={`text-[9px] font-extrabold uppercase tracking-[.16em] ${active ? 'text-[#dfc691]' : 'text-[#8b7045]'}`}>
                        {product.category}
                      </div>
                      <div className="mt-1 text-lg font-semibold">{product.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <ChoiceGroup
              label="02 / Rencana DP"
              options={dpOptions}
              value={dp}
              onChange={setDp}
            />

            <ChoiceGroup
              label="03 / Tenor"
              options={tenorOptions}
              value={tenor}
              onChange={setTenor}
            />

            <div className="mt-8 border-t border-[#10211c]/12 pt-6">
              <div className="grid grid-cols-3 gap-3 text-sm">
                <Summary label="Model" value={model.replace('LEPAS ', '')} />
                <Summary label="DP" value={dp} />
                <Summary label="Tenor" value={tenor.replace(' tahun', ' th')} />
              </div>

              <button className="mt-6 flex w-full items-center justify-center gap-2 bg-[#f2a23a] px-6 py-4 text-sm font-black text-[#10211c] transition hover:bg-[#ffb44f]">
                <MessageCircle size={18} />
                Minta Simulasi via WhatsApp
                <ArrowRight size={16} />
              </button>

              <p className="mt-4 text-center text-[11px] leading-5 text-[#10211c]/48">
                Tidak ada biaya untuk meminta simulasi awal. Nilai final mengikuti quotation leasing.
              </p>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ChoiceGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="mt-7">
      <div className="text-[10px] font-extrabold uppercase tracking-[.22em] text-[#8b7045]">{label}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const active = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`border px-4 py-2.5 text-sm font-semibold transition ${
                active
                  ? 'border-[#10211c] bg-[#10211c] text-white'
                  : 'border-[#10211c]/12 bg-transparent hover:border-[#10211c]/30'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[9px] font-extrabold uppercase tracking-[.16em] text-[#10211c]/48">{label}</div>
      <div className="mt-1 font-semibold">{value}</div>
    </div>
  );
}
