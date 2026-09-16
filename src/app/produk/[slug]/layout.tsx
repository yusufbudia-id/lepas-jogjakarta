import type { Metadata } from 'next';
import { getProductBySlug } from '@/lib/products-data';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=getProductBySlug(slug);return p?{title:`${p.name} Jogja`,description:p.description,alternates:{canonical:`https://www.lepasmobiljogja.com/produk/${p.slug}`}}:{title:'Produk LEPAS'}}
export default function Layout({children}:{children:React.ReactNode}){return children}
