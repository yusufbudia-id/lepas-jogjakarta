import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { articles } from '@/lib/articles-data';
import { ArrowRight } from 'lucide-react';

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

export default function Articles() {
  const [lead, ...rest] = articles;

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#10211c]">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-[#08130f] px-5 pb-12 pt-28 text-white lg:px-8 lg:pb-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_25%,rgba(214,189,138,.12),transparent_34%)]" />
          <div className="relative mx-auto max-w-6xl">
            <p className="text-[10px] font-extrabold uppercase tracking-[.28em] text-[#dfc691]">
              LEPAS Journal
            </p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
              <h1 className="max-w-3xl text-4xl font-medium leading-[.98] tracking-[-.045em] sm:text-5xl lg:text-6xl">
                Stories about design, technology, and new energy.
              </h1>
              <p className="max-w-xl text-sm leading-7 text-white/66 lg:justify-self-end">
                Insight singkat seputar LEPAS, elektrifikasi, teknologi hybrid, dan filosofi desain yang membentuk pengalaman berkendara modern.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-14">
          {lead && (
            <Link
              href={`/artikel/${lead.slug}`}
              className="group grid border-y border-[#10211c]/14 py-5 md:grid-cols-[1.08fr_.92fr] md:items-stretch md:gap-8"
            >
              <div className="overflow-hidden bg-[#10211c]">
                <img
                  src={lead.thumbnail}
                  alt={lead.title}
                  className="aspect-[16/9] h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-col justify-between pt-5 md:py-2">
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-extrabold uppercase tracking-[.18em] text-[#8b7045]">
                    <span>{lead.category}</span>
                    <span className="h-1 w-1 rounded-full bg-[#8b7045]/55" />
                    <span>{formatDate(lead.date)}</span>
                  </div>
                  <h2 className="mt-4 max-w-xl text-3xl font-medium leading-[1.06] tracking-[-.035em] sm:text-4xl">
                    {lead.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#10211c]/64">
                    {lead.excerpt}
                  </p>
                </div>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold">
                  Read journal
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          )}

          <div className="mt-9 grid gap-x-7 gap-y-9 md:grid-cols-3">
            {rest.map((article) => (
              <Link
                key={article.id}
                href={`/artikel/${article.slug}`}
                className="group border-t border-[#10211c]/14 pt-4"
              >
                <div className="overflow-hidden bg-[#10211c]">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="mt-4 flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[.17em] text-[#8b7045]">
                  <span>{article.category}</span>
                  <span>·</span>
                  <span>{formatDate(article.date)}</span>
                </div>
                <h2 className="mt-2.5 text-xl font-semibold leading-snug tracking-[-.02em]">
                  {article.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#10211c]/58">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
