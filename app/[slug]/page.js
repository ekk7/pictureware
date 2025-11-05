import { client } from '@/sanity.client'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { sanityImageProps } from '@/sanity.image'
import Gallery from '@/app/components/Gallery/Gallery.tsx'

// Pre-generate static params
export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "page" && defined(slug.current)]{
      "slug": slug.current
    }`
  )
  return slugs.map(({ slug }) => ({ slug }))
}

const components = {
  types: {
    imageBlock: ({ value }) => {
      const img = sanityImageProps(value.image)
      return (
        <figure className="my-6">
          <Image {...img} alt={value.alt || ''} className="embeddedImage" />
          {value.caption && (
            <figcaption className="text-sm">{value.caption}</figcaption>
          )}
        </figure>
      )
    },
    galleryReference: ({ value }) => <Gallery gallery={value.gallery} />,
    cta: ({ value }) => (
      <a
        href={value.url}
        className={`inline-block mt-6 px-6 py-3 text-white rounded ${
          value.style === 'secondary' ? 'bg-gray-700' : 'bg-black'
        }`}
      >
        {value.text}
      </a>
    ),
  },
}

export default async function DynamicPage({ params }) {
  // ✅ must await params now
  const { slug } = await params

  const page = await client.fetch(
    `*[_type == "page" && slug.current == $slug][0]`,
    { slug }
  )

  if (!page) return notFound()

  return (
    <main className="prose max-w-3xl mx-auto p-8 wrapper">
      <h1 className="text-3xl font-bold mb-6">{page.title}</h1>
      <div className="portableText" >
        <PortableText value={page.content} components={components} />
      </div>
    </main>
  )
}