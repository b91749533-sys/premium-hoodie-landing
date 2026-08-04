import { Analytics } from '@vercel/analytics/next'
import { Manrope, Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Premium Hoodie | Luxury Streetwear',
  description: 'Discover our meticulously crafted premium hoodie. Premium fabric, superior comfort, and timeless design for the modern lifestyle.',
  keywords: ['hoodie', 'premium', 'streetwear', 'luxury', 'fashion'],
  openGraph: {
    title: 'Premium Hoodie | Luxury Streetwear',
    description: 'Discover our meticulously crafted premium hoodie. Premium fabric, superior comfort, and timeless design.',
    type: 'website',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${manrope.className} antialiased`} style={{ fontFamily: 'var(--font-sans)' }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
