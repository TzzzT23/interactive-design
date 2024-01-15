import type { Metadata } from 'next'

import 'styles/globals.scss'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Home Page',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
