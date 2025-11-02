'use client'

import { usePathname } from 'next/navigation'

export default function StudioWrapper({ children }) {
  const pathname = usePathname()

  // If you are on the Sanity Studio route, hide wrapped content
  if (pathname?.startsWith('/studio')) return null

  // Otherwise, render normally
  return <>{children}</>
}
