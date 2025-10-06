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
  applicationName: 'Faith Explorer',
  category: 'Education',
  classification: 'Religious Education App',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://faithexplorer.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'es': '/es',
      'fr': '/fr',
    },
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
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@FaithExplorerApp',
    creator: '@FaithExplorerApp',
    title: 'Faith Explorer - AI-Powered Religious Text Search',
    description: 'Explore sacred texts from Christianity, Islam, Judaism, Buddhism, Hinduism & more with AI-powered insights.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Faith Explorer',
    'msapplication-TileColor': '#667eea',
    'theme-color': '#667eea',
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MobileApplication',
              name: 'Faith Explorer',
              applicationCategory: 'EducationApplication',
              operatingSystem: 'iOS, Android',
              url: 'https://faithexplorer.app',
              description: 'AI-powered mobile app for exploring and comparing religious texts from Christianity, Islam, Judaism, Buddhism, Hinduism, and more.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '1250',
                bestRating: '5',
                worstRating: '1',
              },
              author: {
                '@type': 'Organization',
                name: 'Faith Explorer',
                url: 'https://faithexplorer.app',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Faith Explorer',
                url: 'https://faithexplorer.app',
              },
              keywords: 'religious texts, Bible study, Quran, Torah, comparative religion, interfaith dialogue, AI religious education',
              inLanguage: 'en-US',
              datePublished: '2024-01-01',
              dateModified: '2024-12-19',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Faith Explorer',
              url: 'https://faithexplorer.app',
              description: 'The world\'s most comprehensive religious text library with 135,000+ verses from 9 major world religions.',
              publisher: {
                '@type': 'Organization',
                name: 'Faith Explorer',
                url: 'https://faithexplorer.app',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://faithexplorer.app/logo.png',
                  width: 200,
                  height: 200,
                },
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://faithexplorer.app/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
              mainEntity: {
                '@type': 'SoftwareApplication',
                name: 'Faith Explorer',
                applicationCategory: 'EducationApplication',
                operatingSystem: 'iOS, Android, Web',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                },
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What religions are covered in Faith Explorer?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Faith Explorer covers 9 major world religions: Christianity, Islam, Judaism, Buddhism, Hinduism, Taoism, Confucianism, Shinto, and Sikhism. We include over 135,000 sacred verses from these traditions.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is Faith Explorer free to use?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, Faith Explorer offers a free tier with access to all religious texts and basic AI features. Premium features are available for advanced AI insights and cross-platform sync.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Does Faith Explorer work offline?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, you can download sacred texts for offline reading. The app works on iOS, Android, and web with seamless sync across all platforms.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is my data private when using Faith Explorer?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely. Faith Explorer is privacy-first - your searches and spiritual journey stay private. We use local storage, no tracking, and are GDPR compliant.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}