'use client'

import Link from 'next/link'
import Image from 'next/image'
import { sanityImageProps } from '@/sanity.image'
import './Header.css'

export default function Header({ header }) {
  if (!header) return null

  const logoProps = header.logo ? sanityImageProps(header.logo) : null

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Logo */}
        <div className="header-logo">
          <Link href={`/`}>{logoProps && <Image {...logoProps} alt="Logo" className="logo-image" />}</Link>
        </div>

        {/* Navigation */}
        <nav className="header-nav">
          <ul>
            {header.navLinks?.map((page) => (
              <li key={page._id}>
                <Link href={`/${page?.slug}`}>
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
