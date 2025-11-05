import Image from 'next/image'
import { sanityImageProps } from '@/sanity.image'
import { PortableText } from '@portabletext/react'
import './Footer.css'

export default function Footer({ footer }) {
  if (!footer) return null

  const img = sanityImageProps(footer.image)

  return (
    <footer className="footer">
      <div className="footer-row">
        {/* Left: Columns */}
        <div className="footer-grid">
          {footer.columns?.map((col, i) => (
            <div key={i} className="footer-column">
              {col.heading && <h3 className="footer-heading">{col.heading}</h3>}
              <div className="footer-content">
                <PortableText value={col.content} />
              </div>
            </div>
          ))}
        </div>

        {/* Center: Image */}
        {img && (
          <div className="footer-image-wrapper">
            <Image
              {...img}
              alt="Pictureware Logo"
              className="footer-image"
              priority
            />
          </div>
        )}

        {/* Right: Note */}
        <p className="footer-note">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}