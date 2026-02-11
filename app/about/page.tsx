import Image from 'next/image'
import { BookOpen } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'
import Breadcrumb from '../components/Breadcrumb'

export const metadata: Metadata = {
  title: 'About Faith Explorer | The Story Behind the App',
  description: 'Faith Explorer was created by a U.S. Army OIF veteran for anyone searching for understanding. Learn about our mission: clear, neutral exploration of the world\'s major religions.',
  keywords: 'about Faith Explorer, religious education app, interfaith, veteran-founded, spiritual exploration, comparative religion',
  openGraph: {
    title: 'About Faith Explorer',
    description: 'A single, respectful place to explore the world\'s major religions. Not to convert. Not to debate. Just to learn.',
    url: 'https://faithexplorer.app/about',
    type: 'article',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-warm-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-warm-50/98 backdrop-blur-md z-50 border-b border-sage-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-sage-600" strokeWidth={1.5} />
              <span className="text-2xl font-serif font-semibold text-sage-900">Faith Explorer</span>
            </Link>
            <div className="hidden md:flex space-x-10">
              <Link href="/#features" className="text-sage-700 hover:text-sage-900 transition-colors text-sm font-medium tracking-wide">Features</Link>
              <Link href="/#religions" className="text-sage-700 hover:text-sage-900 transition-colors text-sm font-medium tracking-wide">Sacred Texts</Link>
              <Link href="/#testimonials" className="text-sage-700 hover:text-sage-900 transition-colors text-sm font-medium tracking-wide">Reviews</Link>
              <Link href="/about" className="text-sage-700 hover:text-sage-900 transition-colors text-sm font-medium tracking-wide">About</Link>
            </div>
            <Link href="/#download" className="bg-sage-700 text-warm-50 px-7 py-2.5 rounded-md hover:bg-sage-800 transition-all shadow-sm text-sm font-medium tracking-wide">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <Breadcrumb items={[{ label: 'About' }]} />

      {/* Header */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-warm-100 via-warm-50 to-sage-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-sage-900 mb-6">
            About Faith Explorer
          </h1>
          <p className="text-xl text-sage-700 leading-relaxed font-light">
            Created for people who are searching — not for answers handed to them, but for understanding.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-sage-800">
            <div className="mb-12 rounded-lg overflow-hidden border border-sage-200/80 shadow-md">
              <Image
                src="/about-mike-east.png"
                alt="Mike East during Operation Iraqi Freedom — U.S. Army and partner forces in theater"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
              <p className="text-sm text-sage-500 font-light mt-3 px-4 pb-4 text-center">
                OIF — U.S. Army and partner forces
              </p>
            </div>
            <p className="text-lg leading-relaxed mb-6 font-light">
              I'm a U.S. Army OIF combat veteran and Purple Heart recipient. Like a lot of veterans, my time after service involved rebuilding — mentally, emotionally, and spiritually. Along that road, I found myself asking bigger questions about meaning, belief, and faith. Not from a place of certainty, but from curiosity and a desire to understand perspectives beyond my own.
            </p>
            <p className="text-lg leading-relaxed mb-6 font-light">
              What I found was that learning about religion is often harder than it should be. Information is scattered, biased, overly academic, or wrapped in agendas. Comparing belief systems fairly — without pressure or judgment — is even harder.
            </p>
            <p className="text-lg leading-relaxed mb-8 font-light">
              So I built Faith Explorer.
            </p>
            <p className="text-lg leading-relaxed mb-8 font-light">
              This app is designed to be a single, respectful place where anyone can explore the core ideas, history, and philosophies of the world's major religions. Not to convert. Not to debate. Just to learn. To compare. To understand.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-sage-900 mt-12 mb-6">
              Faith Explorer is for:
            </h2>
            <ul className="space-y-4 mb-12 text-lg font-light">
              <li className="flex items-start gap-3">
                <span className="text-warm-500 mt-1.5">•</span>
                <span>People questioning their beliefs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-warm-500 mt-1.5">•</span>
                <span>People returning to faith after time away</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-warm-500 mt-1.5">•</span>
                <span>People curious about other religions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-warm-500 mt-1.5">•</span>
                <span>People who want context, not conflict</span>
              </li>
            </ul>

            <p className="text-lg leading-relaxed mb-8 font-light">
              The goal isn't to tell you what to believe — it's to give you clear, neutral information so you can decide for yourself.
            </p>
            <p className="text-lg leading-relaxed mb-8 font-light">
              This project is independently built and self-funded. No institutions. No politics. No preaching. Just a sincere effort to make learning about faith simpler, calmer, and more accessible in a world that often makes it loud and divisive.
            </p>
            <p className="text-lg leading-relaxed mb-12 font-light">
              If this app helps even one person feel less lost, less isolated, or more informed on their own journey, then it's done its job.
            </p>

            <div className="border-t border-sage-200 pt-10 mt-14">
              <p className="text-sage-700 font-medium">— Mike East</p>
              <p className="text-sage-600 text-sm font-light mt-1">Creator, Faith Explorer</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/#download"
              className="inline-block bg-sage-700 text-warm-50 px-8 py-3.5 rounded-md font-medium hover:bg-sage-800 transition-all shadow-sm"
            >
              Get the app
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-900 text-warm-100 py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <BookOpen className="w-7 h-7 text-warm-400" strokeWidth={1.5} />
                <span className="text-xl font-serif font-semibold text-warm-50">Faith Explorer</span>
              </div>
              <p className="text-warm-200/80 leading-relaxed font-light text-sm">
                Explore world religions with respect and understanding.
              </p>
            </div>
            <div>
              <h3 className="text-base font-serif font-semibold mb-5 text-warm-50">Sacred Texts</h3>
              <ul className="space-y-2.5 text-warm-200/80 text-sm font-light">
                <li><Link href="/#religions" className="hover:text-warm-50 transition-colors">All 9 Religions</Link></li>
                <li><Link href="/#features" className="hover:text-warm-50 transition-colors">Features</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-serif font-semibold mb-5 text-warm-50">Features</h3>
              <ul className="space-y-2.5 text-warm-200/80 text-sm font-light">
                <li><Link href="/#features" className="hover:text-warm-50 transition-colors">AI-Powered Search</Link></li>
                <li><Link href="/#features" className="hover:text-warm-50 transition-colors">Personal Library</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-serif font-semibold mb-5 text-warm-50">Support</h3>
              <ul className="space-y-2.5 text-warm-200/80 text-sm font-light">
                <li><Link href="/about" className="hover:text-warm-50 transition-colors">About</Link></li>
                <li><a href="mailto:mike@faithexplorer.app" className="hover:text-warm-50 transition-colors">Contact</a></li>
                <li><Link href="/privacy" className="hover:text-warm-50 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-warm-50 transition-colors">Terms of Service</Link></li>
                <li><Link href="/" className="hover:text-warm-50 transition-colors">Home</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-sage-700/50 mt-12 pt-8 text-center text-warm-200/70">
            <p className="font-light">&copy; 2024 Faith Explorer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
