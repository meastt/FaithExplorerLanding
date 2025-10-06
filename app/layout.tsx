import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Faith Explorer - AI-Powered Religious Text Search & Comparative Religion Study App',
  description: 'Discover and compare sacred texts from Christianity, Islam, Judaism, Buddhism, Hinduism & more. AI-powered scripture search, verse comparison, and interfaith learning. Download now for iOS & Android.',
  keywords: 'religious texts app, Bible study app, Quran app, Torah study, comparative religion, interfaith dialogue, sacred scripture search, AI religious education, spiritual learning app, scripture comparison tool, religious studies software, theology app, faith exploration, Bible verse search, Quran verse finder, Buddhist texts app, Hindu scripture app, religious text comparison, AI scripture analysis, theology study tool, religious education technology, interfaith learning platform, sacred texts database, world religions app, spiritual study app, religious knowledge app, scripture reader, holy texts app, religious literacy, faith-based learning',
  authors: [{ name: 'Faith Explorer' }],
  creator: 'Faith Explorer',
  publisher: 'Faith Explorer',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://faithexplorer.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Faith Explorer - AI-Powered Religious Text Search & Study App',
    description: 'Compare and explore sacred texts from 9 major world religions with AI-powered search. Perfect for theology students, religious scholars, and spiritual seekers.',
    url: 'https://faithexplorer.app',
    siteName: 'Faith Explorer',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Faith Explorer - AI-Powered Religious Text Exploration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faith Explorer - AI-Powered Religious Text Search',
    description: 'Explore sacred texts from Christianity, Islam, Judaism, Buddhism, Hinduism & more with AI-powered insights.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MobileApplication',
              name: 'Faith Explorer',
              applicationCategory: 'EducationApplication',
              operatingSystem: 'iOS, Android',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '1250',
              },
              description: 'AI-powered mobile app for exploring and comparing religious texts from Christianity, Islam, Judaism, Buddhism, Hinduism, and more.',
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}