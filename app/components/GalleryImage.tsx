'use client'

import Image from 'next/image'
import { sanityImageProps } from '@/sanity.image'

export default function GalleryImage({ image, alt }) {
  const img = sanityImageProps(image)

  if (!img) return null

  return (
    <Image
      {...img}
      alt={alt || 'Gallery image'}
      className="rounded-xl object-cover"
    />
  )
}