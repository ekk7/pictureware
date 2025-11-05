'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import GalleryImage from './GalleryImage'
import { sanityImageProps } from '@/sanity.image'
import './Gallery.css'

export default function Gallery({ gallery }) {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const total = gallery?.images?.length || 0
  const selectedImage =
    selectedIndex !== null ? gallery.images[selectedIndex].image : null

  // --- keyboard navigation ---
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowRight' && total)
        setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % total))
      if (e.key === 'ArrowLeft' && total)
        setSelectedIndex((prev) => (prev === null ? 0 : (prev - 1 + total) % total))
    },
    [total]
  )

  useEffect(() => {
    if (selectedIndex !== null) document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, handleKeyDown])

  if (!gallery || !gallery.images?.length) return <p>No images to display.</p>

  return (
    <main className="gallery-container">
      {/* --- grid --- */}
      <div className="gallery-grid">
        {gallery.images.map((img, i) => (
          <figure
            key={i}
            className="gallery-item"
            onClick={() => setSelectedIndex(i)}
          >
            <GalleryImage
              image={img.image}
              alt={img.alt || img.caption || 'Gallery image'}
            />
            {img.caption && (
              <figcaption className="gallery-caption">{img.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* --- overlay --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="overlay"
            className="gallery-overlay"
            onClick={() => setSelectedIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="gallery-overlay-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="gallery-close"
                aria-label="Close image"
              >
                ×
              </button>

              {/* Arrows */}
              {total > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedIndex((selectedIndex - 1 + total) % total)
                    }}
                    className="gallery-arrow left"
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedIndex((selectedIndex + 1) % total)
                    }}
                    className="gallery-arrow right"
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Image + caption container */}
              <motion.div
                key={selectedIndex}
                className="gallery-overlay-image-wrapper"
                initial={{ opacity: 1, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  {...sanityImageProps(selectedImage)}
                  alt="Expanded gallery image"
                  className="gallery-overlay-image"
                  sizes="100vw"
                  priority
                />

                {gallery.images[selectedIndex]?.overlayText && (
                  <p
                    className="gallery-overlay-text"
                  >
                    {gallery.images[selectedIndex].overlayText}
                  </p>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
