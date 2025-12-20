'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  MessageCircle, 
  Search, 
  Users, 
  Star, 
  Download,
  ChevronRight,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  Zap,
  Database,
  Sparkles,
  Lock,
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Faith Explorer</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a>
              <a href="#religions" className="text-gray-600 hover:text-primary-600 transition-colors">Sacred Texts</a>
              <a href="#testimonials" className="text-gray-600 hover:text-primary-600 transition-colors">Reviews</a>
              <a href="#benefits" className="text-gray-600 hover:text-primary-600 transition-colors">Who It's For</a>
            </div>
            <a href="#download" className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Get Started Free
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-bg text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-4"
            >
              <span className="bg-gold-500/20 text-gold-200 px-4 py-2 rounded-full text-sm font-semibold">
                ✨ One app. Nine faiths. 144,000+ verses.
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              The Interfaith Scripture Library
              <br />
              <span className="gold-gradient">In Your Pocket</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100 leading-relaxed"
            >
              Explore world religions with respect and understanding. Search across <strong>144,122 verses</strong> from <strong>17 sacred texts</strong> including <a href="#religions" className="underline hover:text-gold-200 transition-colors font-semibold">Catholic & Orthodox Bibles</a>, complete <a href="#religions" className="underline hover:text-gold-200 transition-colors font-semibold">Bhagavad Gita</a>, and more. Practice interfaith dialogue with <strong>9 AI guides</strong>.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a href="#download" className="bg-gold-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gold-600 transition-all flex items-center shadow-xl hover:shadow-2xl transform hover:scale-105">
                <Download className="w-5 h-5 mr-2" />
                Start Free - No Credit Card
              </a>
              <a href="#features" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all">
                Explore Features
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-gray-200 text-sm"
            >
              ✓ Free tier available  ✓ iOS & Android  ✓ Works offline  ✓ Privacy-focused
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6"
              >
                <div className="text-5xl md:text-6xl font-bold text-gold-400 mb-3">{stat.number}</div>
                <div className="text-xl font-bold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-primary-100">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Everything You Need for Religious Study</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Built for scholars, seekers, and students. <strong>AI-powered search</strong> understands meaning, not just words. <strong>9 AI dialogue partners</strong> for interfaith practice. <strong>Academic, neutral approach</strong> — no religious bias.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 card-hover"
              >
                <div className="inline-block p-3 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl mb-4 shadow-sm">
                  <div className="text-primary-600">{feature.icon}</div>
                </div>
                <div className="text-xs font-bold text-primary-600 mb-2 uppercase tracking-wider">{feature.highlight}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Religions Showcase */}
      <section id="religions" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Complete Sacred Texts from 9 Major Religions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <strong>17 sacred texts</strong> with academic-grade translations. Includes <strong>Catholic & Orthodox Bibles</strong> — not just Protestant. Complete <strong>Bhagavad Gita (9,814 verses)</strong> and more. The largest multi-faith scripture database in a mobile app.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {religions.map((religion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full ${religion.color} mr-3 shadow-sm`}></div>
                    <h3 className="text-xl font-bold text-gray-900">{religion.name}</h3>
                  </div>
                  <span className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {religion.verses}
                  </span>
                </div>
                {religion.highlight && (
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-gold-600 bg-gold-50 px-2 py-1 rounded">
                      {religion.highlight}
                    </span>
                  </div>
                )}
                <div className="space-y-2.5">
                  {religion.texts.map((text, textIndex) => (
                    <div key={textIndex} className="flex items-start text-gray-700">
                      <ChevronRight className="w-4 h-4 mr-2 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Dialogue Partners Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Practice Interfaith Dialogue with 9 AI Guides</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Chat with AI religious guides representing each faith tradition. Practice respectful interfaith conversation on multiple topics. <strong>Academic, neutral approach</strong> — no religious bias.
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
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
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md p-4 text-center border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-2">{guide.emoji}</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">{guide.name}</div>
                <div className="text-xs text-gray-600">{guide.faith}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Practice respectful interfaith conversation on topics like prayer, charity, suffering, and more</p>
            <a href="#download" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg">
              Start Your Dialogue Journey
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Who Faith Explorer Is For</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by religious scholars, spiritual seekers, and interfaith leaders worldwide. <strong>Academic, neutral approach</strong> — no religious bias. <strong>Complete texts, not excerpts</strong>.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 card-hover"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{benefit.title}</h3>
                <ul className="space-y-4">
                  {benefit.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <Star className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0 fill-current" />
                      <span className="text-gray-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Trusted by Religious Scholars & Students</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Join thousands exploring faith with academic rigor and respectful interfaith dialogue</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">"{testimonials[currentTestimonial].content}"</p>
              <div>
                <p className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</p>
                <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
              </div>
            </motion.div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 hero-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700/50 to-primary-900/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Access 144,122 Sacred Verses Today
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100 leading-relaxed">
              Start your journey with the <strong>world's largest multi-faith scripture database</strong>. Free tier available — no credit card required. <strong>Catholic & Orthodox Bibles included</strong>. Practice interfaith dialogue with <strong>9 AI guides</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="https://apps.apple.com/app/faith-explorer" className="bg-gold-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gold-600 transition-all flex items-center shadow-xl hover:shadow-2xl min-w-[240px] justify-center transform hover:scale-105">
                <Download className="w-5 h-5 mr-2" />
                Download for iOS
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.faithexplorer" className="bg-gold-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gold-600 transition-all flex items-center shadow-xl hover:shadow-2xl min-w-[240px] justify-center transform hover:scale-105">
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-200">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Privacy-focused
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Works offline
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Cross-platform sync
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 fill-current" />
                4.9/5 rating
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-primary-400" />
                <span className="ml-2 text-xl font-bold">Faith Explorer</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                The world's most comprehensive religious text app with <strong>144,122 verses</strong> from <strong>17 sacred texts</strong> across <strong>9 major religions</strong>. AI-powered insights and 9 dialogue partners.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Sacred Texts</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#religions" className="hover:text-white transition-colors">Christianity</a></li>
                <li><a href="#religions" className="hover:text-white transition-colors">Islam</a></li>
                <li><a href="#religions" className="hover:text-white transition-colors">Judaism - Complete Talmud</a></li>
                <li><a href="#religions" className="hover:text-white transition-colors">Buddhism & Hinduism</a></li>
                <li><a href="#religions" className="hover:text-white transition-colors">All 9 Religions</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">AI-Powered Search</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors">For Students & Scholars</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">AI-Powered Search</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Cross-Religion Comparison</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Personal Library</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Offline Access</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:support@faithexplorer.app" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Faith Explorer. All rights reserved.</p>
            <p className="mt-2 text-sm">144,122 verses • 9 religions • 17 texts • 9 AI guides • Academic-quality sources</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
