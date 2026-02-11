'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  BookOpen,
  MessageCircle,
  Search,
  Star,
  Download,
  ChevronRight,
  Globe,
  Shield,
  Zap,
  Database,
  Sparkles,
  Smartphone,
  BookMarked,
  Scale,
  Calendar
} from 'lucide-react'

const religions = [
  {
    name: 'Christianity',
    texts: ['KJV Bible (31,100 verses)', 'Catholic Bible - Douay-Rheims (34,827 verses)', 'Orthodox Bible (34,827 verses)', 'Book of Mormon (6,604 verses)', 'Doctrine & Covenants (3,654 verses)'],
    color: 'bg-blue-500',
    verses: '110,000+',
    highlight: 'Catholic & Orthodox included'
  },
  {
    name: 'Islam',
    texts: ['Quran - Sahih International (6,236 verses)', 'Hadith - Bukhari (7,589 verses)'],
    color: 'bg-green-500',
    verses: '13,825+',
    highlight: 'Authentic translations'
  },
  {
    name: 'Judaism',
    texts: ['Torah (5,846 verses)'],
    color: 'bg-yellow-500',
    verses: '5,846',
    highlight: 'Complete Torah'
  },
  {
    name: 'Hinduism',
    texts: ['Bhagavad Gita - Complete (9,814 verses)'],
    color: 'bg-red-500',
    verses: '9,814',
    highlight: 'Full text included'
  },
  {
    name: 'Buddhism',
    texts: ['Dhammapada (423 verses)'],
    color: 'bg-orange-500',
    verses: '423',
    highlight: 'Core teachings'
  },
  {
    name: 'Sikhism',
    texts: ['Guru Granth Sahib (2,052 verses)'],
    color: 'bg-amber-500',
    verses: '2,052',
    highlight: 'Complete Granth'
  },
  {
    name: 'Taoism',
    texts: ['Chuang Tzu (634 verses)', 'Tao Te Ching (10 verses)'],
    color: 'bg-purple-500',
    verses: '644',
    highlight: 'Classic texts'
  },
  {
    name: 'Confucianism',
    texts: ['Analects (486 verses)'],
    color: 'bg-indigo-500',
    verses: '486',
    highlight: 'Philosophical wisdom'
  },
  {
    name: 'Shinto',
    texts: ['Kojiki (20 verses)'],
    color: 'bg-pink-500',
    verses: '20',
    highlight: 'Ancient traditions'
  }
]

const features = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Scripture Search Engine',
    description: 'Search across 144,000+ verses from 9 major world religions. AI-powered semantic search understands intent, not just keywords. Filter by religion or search across all faiths.',
    highlight: 'Powerful Search'
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Scripture Reader',
    description: 'Browse complete religious texts chapter by chapter. Book/chapter/verse navigation with automatic reading position memory.',
    highlight: 'Complete Texts'
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: 'AI Dialogue Practice',
    description: 'Chat with 9 AI religious guides representing each faith. Practice respectful interfaith conversation with multiple conversation topics.',
    highlight: '9 AI Guides'
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: 'Comparative Analysis',
    description: 'Compare teachings across religions on any topic. Side-by-side verse display with academic, neutral AI analysis.',
    highlight: 'Cross-Faith Study'
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'Daily Wisdom',
    description: 'Fresh inspirational verse each day with multi-faith rotation. Share meaningful insights with friends and family.',
    highlight: 'Daily Inspiration'
  },
  {
    icon: <BookMarked className="w-8 h-8" />,
    title: 'Personal Library',
    description: 'Save favorite verses with notes. Organize with folders and tags. Build your own spiritual study collections.',
    highlight: 'Your Collection'
  }
]

const stats = [
  { number: '144,122', label: 'Sacred Verses', description: 'Total searchable verses' },
  { number: '9', label: 'Major Religions', description: 'Complete coverage' },
  { number: '17', label: 'Sacred Texts', description: 'Academic-grade translations' },
  { number: '9', label: 'AI Dialogue Partners', description: 'One for each faith tradition' }
]

const testimonials = [
  {
    name: 'Dr. Sarah M.',
    role: 'Theology Professor',
    content: 'The complete Talmud integration is a game-changer for religious studies. My students use it daily for comparative analysis.',
    rating: 5
  },
  {
    name: 'Ahmed K.',
    role: 'Interfaith Dialogue Organizer',
    content: 'Finally, an app that treats all religions with equal depth and respect. The AI insights help bridge understanding across faiths.',
    rating: 5
  },
  {
    name: 'Rabbi David L.',
    role: 'Religious Scholar',
    content: 'Having the William Davidson Talmud alongside other texts is invaluable. The search functionality saves hours of research.',
    rating: 5
  }
]

const benefits = [
  {
    title: 'For Students & Scholars',
    points: [
      'Academic-grade sources with proper citations',
      'Compare verses across religions instantly',
      'Complete texts including Catholic & Orthodox Bibles',
      'Export notes and verses for research papers'
    ]
  },
  {
    title: 'For Spiritual Seekers',
    points: [
      'Explore wisdom from all major faith traditions',
      'Practice interfaith dialogue with 9 AI guides',
      'Save and organize your spiritual journey',
      'Daily wisdom from multiple faith traditions'
    ]
  },
  {
    title: 'For Interfaith Leaders',
    points: [
      'Facilitate meaningful cross-faith dialogue',
      'Quick reference during discussions',
      'Find common ground across traditions',
      'Educational tool for communities'
    ]
  }
]

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formError, setFormError] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    setFormError('')

    try {
      const response = await fetch('https://formsubmit.co/ajax/mike@faithexplorer.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Faith Explorer Contact: ${formData.name}`,
        })
      })

      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setFormStatus('error')
      setFormError('Failed to send message. Please try again or email us directly.')
    }
  }

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-warm-50/98 backdrop-blur-md z-50 elegant-border border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-sage-600" strokeWidth={1.5} />
              <span className="text-2xl font-serif font-semibold text-sage-900">Faith Explorer</span>
            </div>
            <div className="hidden md:flex space-x-10">
              <a href="#features" className="text-sage-700 hover:text-sage-900 transition-colors text-sm font-medium tracking-wide">Features</a>
              <a href="#religions" className="text-sage-700 hover:text-sage-900 transition-colors text-sm font-medium tracking-wide">Sacred Texts</a>
              <a href="#testimonials" className="text-sage-700 hover:text-sage-900 transition-colors text-sm font-medium tracking-wide">Reviews</a>
              <Link href="/about" className="text-sage-700 hover:text-sage-900 transition-colors text-sm font-medium tracking-wide">About</Link>
              <a href="#contact" className="text-sage-700 hover:text-sage-900 transition-colors text-sm font-medium tracking-wide">Contact</a>
            </div>
            <a href="#download" className="bg-sage-700 text-warm-50 px-7 py-2.5 rounded-md hover:bg-sage-800 transition-all elegant-shadow text-sm font-medium tracking-wide">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-32 hero-bg relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-10"
            >
              <span className="bg-sage-700/5 text-sage-800 px-6 py-2.5 rounded-full text-sm font-medium tracking-wide border border-sage-700/10 shadow-sm">
                One app • Nine faiths • 144,000+ verses
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold mb-10 leading-[1.1] tracking-tight text-sage-900"
            >
              The Interfaith Scripture
              <br />
              Library <span className="gold-gradient italic font-serif">In Your Pocket</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-sage-700 leading-relaxed"
            >
              Explore world religions with respect and understanding. Search across <span className="font-semibold text-sage-900">144,122 verses</span> from <span className="font-semibold text-sage-900">17 sacred texts</span> including Catholic & Orthodox Bibles, complete Bhagavad Gita, and more. Practice interfaith dialogue with <span className="font-semibold text-sage-900">9 AI guides</span>.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <a href="#download" className="bg-sage-800 text-white px-10 py-4 rounded-lg text-base font-semibold hover:bg-sage-900 transition-all shadow-lg hover:shadow-xl group">
                <Download className="w-5 h-5 mr-2 inline-block group-hover:translate-y-0.5 transition-transform" />
                Start Free
              </a>
              <a href="#features" className="border-2 border-sage-700/20 text-sage-800 px-10 py-4 rounded-lg text-base font-semibold hover:bg-sage-700/5 transition-all">
                Explore Features
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-sage-700"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-sage-600"></div>
                <span className="font-medium">Free tier available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-sage-600"></div>
                <span className="font-medium">iOS & Android</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-sage-600"></div>
                <span className="font-medium">Works offline</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-sage-600"></div>
                <span className="font-medium">Privacy-focused</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative overflow-hidden border-y border-sage-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative inline-block mb-4">
                  <div className="text-5xl md:text-6xl font-serif font-bold text-sage-900 mb-2 group-hover:scale-105 transition-transform">{stat.number}</div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-warm-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="text-base font-serif font-semibold text-sage-800 mb-2 tracking-wide">{stat.label}</div>
                <div className="text-sm text-sage-600 font-light">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-warm-50 section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 pt-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-sage-900 mb-6 tracking-tight">Everything You Need for Religious Study</h2>
            <p className="text-lg md:text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed font-light">
              Built for scholars, seekers, and students. AI-powered search understands meaning, not just words. 9 AI dialogue partners for interfaith practice. Academic, neutral approach — no religious bias.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-10 rounded-lg elegant-border elegant-shadow card-hover"
              >
                <div className="inline-block p-4 bg-sage-50 rounded-lg mb-5">
                  <div className="text-sage-700">{feature.icon}</div>
                </div>
                <div className="text-xs font-semibold text-warm-600 mb-3 uppercase tracking-widest">{feature.highlight}</div>
                <h3 className="text-xl font-serif font-semibold text-sage-900 mb-4">{feature.title}</h3>
                <p className="text-sage-700 leading-relaxed text-sm font-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Religions Showcase */}
      <section id="religions" className="py-24 bg-white section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 pt-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-sage-900 mb-6 tracking-tight">Complete Sacred Texts from 9 Major Religions</h2>
            <p className="text-lg md:text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed font-light">
              17 sacred texts with academic-grade translations. Includes Catholic & Orthodox Bibles — not just Protestant. Complete Bhagavad Gita (9,814 verses) and more. The largest multi-faith scripture database in a mobile app.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {religions.map((religion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-warm-50 rounded-lg elegant-border elegant-shadow p-8 card-hover"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${religion.color} shadow-sm`}></div>
                    <h3 className="text-xl font-serif font-semibold text-sage-900">{religion.name}</h3>
                  </div>
                  <span className="text-xs font-semibold text-sage-700 bg-sage-100 px-3 py-1.5 rounded-md">
                    {religion.verses}
                  </span>
                </div>
                {religion.highlight && (
                  <div className="mb-4">
                    <span className="text-xs font-medium text-warm-700 bg-warm-200 px-3 py-1 rounded-md">
                      {religion.highlight}
                    </span>
                  </div>
                )}
                <div className="space-y-3">
                  {religion.texts.map((text, textIndex) => (
                    <div key={textIndex} className="flex items-start text-sage-800">
                      <ChevronRight className="w-4 h-4 mr-2 text-sage-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-sm leading-relaxed font-light">{text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Dialogue Partners Section */}
      <section className="py-24 bg-gradient-to-br from-sage-50 via-warm-50 to-sage-50 section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-sage-900 mb-6 tracking-tight">Practice Interfaith Dialogue with 9 AI Guides</h2>
              <p className="text-lg md:text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed font-light">
                Chat with AI religious guides representing each faith tradition. Practice respectful interfaith conversation on multiple topics. Academic, neutral approach — no religious bias.
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto mb-12">
            {[
              { name: 'Rev. Sarah', faith: 'Christianity', emoji: '✝️' },
              { name: 'Brother Ahmed', faith: 'Islam', emoji: '🕌' },
              { name: 'Rabbi Cohen', faith: 'Judaism', emoji: '✡️' },
              { name: 'Pandit Sharma', faith: 'Hinduism', emoji: '🕉️' },
              { name: 'Monk Tenzin', faith: 'Buddhism', emoji: '☸️' },
              { name: 'Bhai Harpreet', faith: 'Sikhism', emoji: '🙏' },
              { name: 'Master Chen', faith: 'Taoism', emoji: '☯️' },
              { name: 'Teacher Wei', faith: 'Confucianism', emoji: '📚' },
              { name: 'Kannushi Tanaka', faith: 'Shinto', emoji: '⛩️' }
            ].map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg elegant-border elegant-shadow p-5 text-center hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-3">{guide.emoji}</div>
                <div className="font-serif font-semibold text-sage-900 text-sm mb-1">{guide.name}</div>
                <div className="text-xs text-sage-600 font-light">{guide.faith}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-14">
            <p className="text-sage-700 mb-8 font-light text-lg">Practice respectful interfaith conversation on topics like prayer, charity, suffering, and more</p>
            <a href="#download" className="inline-block bg-sage-700 text-warm-50 px-10 py-3.5 rounded-md font-semibold hover:bg-sage-800 transition-all elegant-shadow hover:shadow-xl">
              Start Your Dialogue Journey
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 pt-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-sage-900 mb-6 tracking-tight">Who Faith Explorer Is For</h2>
            <p className="text-lg md:text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed font-light">
              Trusted by religious scholars, spiritual seekers, and interfaith leaders worldwide. Academic, neutral approach — no religious bias. Complete texts, not excerpts.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-warm-50 rounded-lg elegant-border elegant-shadow p-10 card-hover"
              >
                <h3 className="text-2xl font-serif font-semibold text-sage-900 mb-8">{benefit.title}</h3>
                <ul className="space-y-4">
                  {benefit.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <Star className="w-5 h-5 text-warm-600 mr-3 mt-0.5 flex-shrink-0 fill-current" />
                      <span className="text-sage-700 leading-relaxed font-light">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-sage-50 via-warm-50 to-sage-50 section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 pt-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-sage-900 mb-6 tracking-tight">Trusted by Religious Scholars & Students</h2>
            <p className="text-lg md:text-xl text-sage-700 max-w-2xl mx-auto leading-relaxed font-light">Join thousands exploring faith with academic rigor and respectful interfaith dialogue</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl elegant-border elegant-shadow p-12 relative"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warm-600 fill-current" />
                ))}
              </div>
              <div className="decorative-quote max-w-3xl mx-auto mb-8">
                <p className="text-xl md:text-2xl text-sage-800 leading-relaxed font-light italic">{testimonials[currentTestimonial].content}</p>
              </div>
              <div className="pt-6 border-t border-sage-200 text-center">
                <p className="font-serif font-semibold text-sage-900 text-lg mb-1">{testimonials[currentTestimonial].name}</p>
                <p className="text-sage-600 font-light">{testimonials[currentTestimonial].role}</p>
              </div>
            </motion.div>
            <div className="flex justify-center mt-10 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentTestimonial ? 'bg-sage-700 w-8' : 'bg-sage-300'
                    }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-sage-900 mb-6 tracking-tight">Get in Touch</h2>
              <p className="text-lg md:text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed font-light">
                Have questions about Faith Explorer? Want to suggest a feature or report an issue? We'd love to hear from you.
              </p>
            </motion.div>
          </div>
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-warm-50 rounded-lg elegant-border elegant-shadow p-10"
            >
              {formStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-sage-700" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-sage-900 mb-2">Message Sent!</h3>
                  <p className="text-sage-700 mb-6 font-light">Thank you for reaching out. We'll get back to you soon.</p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="text-sage-700 hover:text-sage-900 font-semibold transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-sage-800 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-sage-200 rounded-md focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-colors text-sage-900 bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-sage-800 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-sage-200 rounded-md focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-colors text-sage-900 bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-sage-800 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-sage-200 rounded-md focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-colors resize-none text-sage-900 bg-white"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {formStatus === 'error' && (
                    <div className="flex items-center gap-2 text-burgundy-700 bg-burgundy-50 p-3 rounded-md elegant-border border-burgundy-200">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{formError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-sage-700 text-warm-50 px-8 py-4 rounded-md text-base font-semibold hover:bg-sage-800 transition-all flex items-center justify-center elegant-shadow hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
            <div className="mt-8 text-center">
              <p className="text-sage-700 font-light">
                Or email us directly at{' '}
                <a href="mailto:mike@faithexplorer.app" className="text-sage-800 hover:text-sage-900 font-semibold transition-colors underline decoration-sage-300">
                  mike@faithexplorer.app
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-28 bg-sage-900 text-warm-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-8 leading-tight tracking-tight">
              Access 144,122 Sacred Verses Today
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-warm-100 leading-relaxed font-light">
              Start your journey with the world's largest multi-faith scripture database. Free tier available — no credit card required. Catholic & Orthodox Bibles included. Practice interfaith dialogue with 9 AI guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
              <a href="https://apps.apple.com/us/app/faith-explorer-bible-quran/id6753657912" className="bg-warm-500 text-sage-900 px-10 py-4 rounded-lg text-base font-semibold hover:bg-warm-600 transition-all flex items-center shadow-xl hover:shadow-2xl min-w-[240px] justify-center group">
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-0.5 transition-transform" />
                Download for iOS
              </a>
              <div className="bg-sage-600 text-warm-100 px-10 py-4 rounded-lg text-base font-semibold flex items-center min-w-[240px] justify-center cursor-not-allowed opacity-80">
                <Download className="w-5 h-5 mr-2" />
                Android Coming Soon
              </div>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-warm-200 font-medium">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" strokeWidth={1.5} />
                Privacy-focused
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" strokeWidth={1.5} />
                Works offline
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" strokeWidth={1.5} />
                Cross-platform sync
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-current" strokeWidth={1.5} />
                4.9/5 rating
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-900 text-warm-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <BookOpen className="w-7 h-7 text-warm-400" strokeWidth={1.5} />
                <span className="text-xl font-serif font-semibold text-warm-50">Faith Explorer</span>
              </div>
              <p className="text-warm-200/80 leading-relaxed font-light text-sm">
                The world's most comprehensive religious text app with 144,122 verses from 17 sacred texts across 9 major religions. AI-powered insights and 9 dialogue partners.
              </p>
            </div>
            <div>
              <h3 className="text-base font-serif font-semibold mb-5 text-warm-50">Sacred Texts</h3>
              <ul className="space-y-2.5 text-warm-200/80 text-sm font-light">
                <li><a href="#religions" className="hover:text-warm-50 transition-colors">Christianity</a></li>
                <li><a href="#religions" className="hover:text-warm-50 transition-colors">Islam</a></li>
                <li><a href="#religions" className="hover:text-warm-50 transition-colors">Judaism</a></li>
                <li><a href="#religions" className="hover:text-warm-50 transition-colors">Buddhism & Hinduism</a></li>
                <li><a href="#religions" className="hover:text-warm-50 transition-colors">All 9 Religions</a></li>
                <li><a href="#features" className="hover:text-warm-50 transition-colors">AI-Powered Search</a></li>
                <li><a href="#benefits" className="hover:text-warm-50 transition-colors">For Students & Scholars</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-serif font-semibold mb-5 text-warm-50">Features</h3>
              <ul className="space-y-2.5 text-warm-200/80 text-sm font-light">
                <li><a href="#features" className="hover:text-warm-50 transition-colors">AI-Powered Search</a></li>
                <li><a href="#features" className="hover:text-warm-50 transition-colors">Cross-Religion Comparison</a></li>
                <li><a href="#features" className="hover:text-warm-50 transition-colors">Personal Library</a></li>
                <li><a href="#features" className="hover:text-warm-50 transition-colors">Offline Access</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-serif font-semibold mb-5 text-warm-50">Support</h3>
              <ul className="space-y-2.5 text-warm-200/80 text-sm font-light">
                <li><Link href="/about" className="hover:text-warm-50 transition-colors">About</Link></li>
                <li><a href="#contact" className="hover:text-warm-50 transition-colors">Contact Us</a></li>
                <li><a href="mailto:mike@faithexplorer.app" className="hover:text-warm-50 transition-colors">mike@faithexplorer.app</a></li>
                <li><Link href="/privacy" className="hover:text-warm-50 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-warm-50 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-sage-700/50 mt-12 pt-8 text-center text-warm-200/70">
            <p className="font-light">&copy; 2024 Faith Explorer. All rights reserved.</p>
            <p className="mt-2 text-sm font-light">144,122 verses • 9 religions • 17 texts • 9 AI guides • Academic-quality sources</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
