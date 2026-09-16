import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ClientBodyProvider } from '@/components/client-body-provider';

const font=Plus_Jakarta_Sans({subsets:['latin'],variable:'--font-jakarta'});
const baseUrl=process.env.NEXT_PUBLIC_BASE_URL || 'https://www.lepasmobiljogja.com';

export const metadata:Metadata={
 metadataBase:new URL(baseUrl),
 title:{default:'LEPAS Jogja | Drive Your Elegance',template:'%s | LEPAS Jogja'},
 description:'Informasi dan konsultasi LEPAS di Yogyakarta: produk, harga, promo, kredit dan test drive.',
 icons:{icon:'/icon.png'},
 robots:{index:true,follow:true},
 openGraph:{type:'website',locale:'id_ID',siteName:'LEPAS Jogja',url:baseUrl,title:'LEPAS Jogja | Drive Your Elegance',description:'Informasi dan konsultasi LEPAS L8 PHEV dan model LEPAS di Yogyakarta.'}
};

export default function RootLayout({children}:{children:React.ReactNode}){
 const jsonLd={"@context":"https://schema.org","@type":"AutomotiveBusiness","name":"LEPAS Jogja","url":baseUrl,"telephone":"+6282251853096","areaServed":"Yogyakarta","address":{"@type":"PostalAddress","streetAddress":"Jl. Laksda Adisucipto, Jl. Tambak Bayan 2 No.1","addressLocality":"Sleman","addressRegion":"D.I. Yogyakarta","postalCode":"55281","addressCountry":"ID"},"description":"Informasi dan konsultasi penjualan kendaraan LEPAS untuk wilayah Yogyakarta."};
 return <html lang="id" className={font.variable}><head><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></head><body className="font-sans antialiased"><ClientBodyProvider>{children}</ClientBodyProvider></body></html>
}

