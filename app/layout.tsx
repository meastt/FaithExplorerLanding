import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Faith Explorer - Discover Wisdom Across All Religions',
  description: 'Explore, compare, and learn from religious texts across Christianity, Islam, Judaism, Buddhism, Hinduism, Taoism, Shinto, Sikhism, and Confucianism with AI-powered insights.',
  keywords: 'religion, religious texts, Bible, Quran, Torah, Buddhism, Hinduism, AI, spiritual learning, faith exploration',
  openGraph: {
    title: 'Faith Explorer - Discover Wisdom Across All Religions',
    description: 'Explore, compare, and learn from religious texts across all major world religions with AI-powered insights.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}