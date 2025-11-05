// app/components/GalleryWrapper.js (Server Component)
import Gallery from './Gallery'
import { client } from '@/sanity.client'

export default async function GalleryWrapper({ query }) {
  const gallery = await client.fetch(query || '*[_type == "gallery"][0]')
  return <Gallery gallery={gallery} />
}