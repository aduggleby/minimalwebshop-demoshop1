import { RootLayout } from '@/components/RootLayout'
import Script from 'next/script'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - MinimalWebshop Demo Site',
    default: 'MinimalWebshop Demo Site',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <head>
        <link href="https://embed.minimalwebshop.com/v1.css" rel="stylesheet" />
        <Script type="module" src="https://embed.minimalwebshop.com/v1.js" />
      </head>
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
