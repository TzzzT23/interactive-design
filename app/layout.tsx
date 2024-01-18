import { GoogleTagManager } from '@next/third-parties/google'

import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import 'styles/globals.scss'

export const metadata: Metadata = {
  title: 'Home Page',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-5S4KRTSK'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
      <GoogleTagManager gtmId='GTM-5S4KRTSK' />
    </html>
  )
}
