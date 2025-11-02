'use client'

import GalleryImage from './GalleryImage'

export default function Gallery({ gallery }) {
  if (!gallery || !gallery.images?.length) return <p>No images to display.</p>

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">{gallery.title}</h2>
      {gallery.description && (
        <p className="text-gray-600 mb-8">{gallery.description}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gallery.images.map((img, i) => (
          <figure key={i} className="rounded-xl overflow-hidden shadow">
            <GalleryImage
              image={img.image}
              alt={img.alt || img.caption || 'Gallery image'}
            />
            {img.caption && (
              <figcaption className="p-2 text-sm text-gray-600">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </main>
  )
}