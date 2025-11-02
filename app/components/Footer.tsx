import { PortableText } from '@portabletext/react'
import './Footer.css'

export default function Footer({ footer }) {
  if (!footer) return null

  return (
    <footer className="footer">
      {footer.title && <h2 className="footer-title">{footer.title}</h2>}

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

      <p className="footer-note">© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  )
}
