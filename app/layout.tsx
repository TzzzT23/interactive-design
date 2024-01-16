import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import 'styles/globals.scss'

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
