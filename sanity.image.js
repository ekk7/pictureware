import { createClient } from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'

// Sanity client
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
})

// Image builder
const builder = createImageUrlBuilder(sanityClient)

// Basic URL builder
export function urlFor(source) {
  if (!source || !source.asset?._ref) return null
  return builder.image(source)
}

// Next.js <Image /> props with crop/hotspot support
export function sanityImageProps(image, options = {}) {
  if (!image || !image.asset?._ref) return null

  const { width: originalWidth, height: originalHeight } = getImageDimensions(image)

  // Apply Sanity crop values
  const crop = image.crop || { left: 0, right: 0, top: 0, bottom: 0 }

  const croppedWidth = Math.round(originalWidth * (1 - (crop.left + crop.right)))
  const croppedHeight = Math.round(originalHeight * (1 - (crop.top + crop.bottom)))

  let imgBuilder = urlFor(image)
    .width(options.width || croppedWidth)
    .height(options.height || croppedHeight)
    .fit('crop') // respects the crop
    .auto('format')

  // Apply hotspot if present
  if (image.hotspot) {
    const { x = 0.5, y = 0.5 } = image.hotspot
    imgBuilder = imgBuilder
      .crop('focalpoint')
      .focalPoint(x, y)
  }

  return {
    src: imgBuilder.url(),
    width: croppedWidth,
    height: croppedHeight,
  }
}