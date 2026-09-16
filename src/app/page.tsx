import type { Metadata } from 'next';
import HomeClient from './HomeClient';
export const metadata: Metadata = {
 title: 'LEPAS Jogja | LEPAS L8 PHEV & E4 Yogyakarta',
 description: 'Informasi LEPAS Jogja: LEPAS L8 PHEV, LEPAS E4, harga OTR Yogyakarta, promo, simulasi kredit, konsultasi dan jadwal test drive.',
 keywords: ['LEPAS Jogja','LEPAS L8 Jogja','harga LEPAS L8 Jogja','LEPAS Yogyakarta','LEPAS E4 Jogja','test drive LEPAS Jogja'],
 alternates:{canonical:'https://www.lepasmobiljogja.com/'},
 openGraph:{title:'LEPAS Jogja | Drive Your Elegance',description:'Informasi produk, promo dan konsultasi LEPAS untuk Yogyakarta.',url:'https://www.lepasmobiljogja.com/',siteName:'LEPAS Jogja',locale:'id_ID',type:'website'}
};
export default function Page(){return <HomeClient/>}
