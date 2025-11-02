import { client } from '@/sanity.client'
import { galleryQuery } from '@/sanity.queries'
import GalleryWrapper from '../components/GalleryWrapper';



export const revalidate = 60 // ISR cache every 60 seconds

export default async function GalleryPage() {
  const gallery = await client.fetch(galleryQuery);
  return <main className="p-8 max-w-6xl mx-auto">
    <GalleryWrapper query={'*[_type == "gallery"][0]'} />
  </main>
};