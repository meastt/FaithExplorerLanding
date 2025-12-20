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
  Smartphone
} from 'lucide-react'

const religions = [
  { name: 'Christianity', texts: ['Bible KJV', 'Book of Mormon', 'Doctrine & Covenants'], color: 'bg-blue-500', verses: '31,000+' },
  { name: 'Islam', texts: ['Quran (Sahih International)', 'Hadith Bukhari', 'Hadith Muslim'], color: 'bg-green-500', verses: '6,236+' },
  { name: 'Judaism', texts: ['Torah', 'Complete Talmud (63,000+ verses)', '53 Tractates'], color: 'bg-yellow-500', verses: '63,000+' },
  { name: 'Buddhism', texts: ['Dhammapada', 'Mahayana Sutras', 'Buddhist Teachings'], color: 'bg-orange-500', verses: '8,000+' },
  { name: 'Hinduism', texts: ['Bhagavad Gita (9,800+ verses)', 'Vedas', 'Upanishads'], color: 'bg-red-500', verses: '9,800+' },
  { name: 'Taoism', texts: ['Zhuangzi', 'I Ching', 'Daozang'], color: 'bg-purple-500', verses: '5,000+' },
  { name: 'Confucianism', texts: ['Mengzi', 'Xunzi', 'Five Classics'], color: 'bg-indigo-500', verses: '4,000+' },
  { name: 'Shinto', texts: ['Nihon Shoki', 'Norito'], color: 'bg-pink-500', verses: '3,000+' },
  { name: 'Sikhism', texts: ['Guru Granth Sahib', 'Dasam Granth'], color: 'bg-amber-500', verses: '5,000+' }
]

const features = [
  {
    icon: <Database className="w-8 h-8" />,
    title: '135,000+ Sacred Verses',
    description: 'The world\'s largest collection of religious texts in one app - from the complete Talmud to Bhagavad Gita with academic-grade translations.',
    highlight: 'Comprehensive Library'
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'AI-Powered Insights',
    description: 'Get context-aware answers, verse-specific discussions, and comparative analysis across different faith traditions instantly.',
    highlight: 'Smart Technology'
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Cross-Religion Search',
    description: 'Search across all 9 major religions simultaneously. Find related teachings and compare perspectives in seconds.',
    highlight: 'Powerful Search'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Personal Library',
    description: 'Save verses with personal notes, organize by tags, and build your own spiritual study collections with export options.',
    highlight: 'Personalized Learning'
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Offline Access',
    description: 'Download sacred texts for offline reading. Study anywhere, anytime on iOS, Android, or web with seamless sync.',
    highlight: 'Cross-Platform'
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'Privacy First',
    description: 'Your searches and spiritual journey stay private. Local storage, no tracking, GDPR compliant.',
    highlight: 'Secure & Private'
  }
]

const stats = [
  { number: '135,000+', label: 'Sacred Verses', description: 'Searchable across all religions' },
  { number: '9', label: 'Major Religions', description: 'Complete coverage' },
  { number: '15+', label: 'Religious Texts', description: 'Including Talmud & Bhagavad Gita' },
  { number: '53', label: 'Talmud Tractates', description: 'Complete Babylonian Talmud' }
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
      'Export notes and verses for research papers',
      'Complete texts, not simplified excerpts'
    ]
  },
  {
    title: 'For Spiritual Seekers',
    points: [
      'Explore wisdom from all major faith traditions',
      'Personalized reading experience (themes, fonts)',
      'Save and organize your spiritual journey',
      'Learn at your own pace with AI guidance'
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
      <section className="pt-20 pb-16 hero-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-4"
            >
              <span className="bg-gold-500/20 text-gold-200 px-4 py-2 rounded-full text-sm font-semibold">
                🎯 135,000+ Verses • 9 Major Religions • AI-Powered
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              The World's Most Complete
              <br />
              <span className="gold-gradient">Religious Text Library</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100"
            >
              Search, compare, and learn from sacred scriptures across <a href="#religions" className="underline hover:text-gold-200 transition-colors">Christianity, Islam, Judaism, Buddhism, Hinduism</a>, and more. Complete <a href="#religions" className="underline hover:text-gold-200 transition-colors">Talmud</a> • Full <a href="#religions" className="underline hover:text-gold-200 transition-colors">Bhagavad Gita</a> • Academic-quality translations.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a href="#download" className="bg-gold-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition-colors flex items-center shadow-xl">
                <Download className="w-5 h-5 mr-2" />
                Start Free - No Credit Card
              </a>
              <a href="#features" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
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
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-4"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need for Religious Study</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for scholars, seekers, and students with the most comprehensive collection of sacred texts
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg card-hover"
              >
                <div className="inline-block p-3 bg-primary-50 rounded-lg mb-4">
                  <div className="text-primary-600">{feature.icon}</div>
                </div>
                <div className="text-xs font-semibold text-primary-600 mb-2 uppercase tracking-wide">{feature.highlight}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Religions Showcase */}
      <section id="religions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Sacred Texts from 9 Major Religions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Academic-grade translations including the complete Babylonian Talmud (63,000+ verses) and full Bhagavad Gita (9,800+ verses) - not available in other apps
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {religions.map((religion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full ${religion.color} mr-3`}></div>
                    <h3 className="text-xl font-semibold text-gray-900">{religion.name}</h3>
                  </div>
                  <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {religion.verses}
                  </span>
                </div>
                <div className="space-y-2">
                  {religion.texts.map((text, textIndex) => (
                    <div key={textIndex} className="flex items-start text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who Faith Explorer Is For</h2>
            <p className="text-xl text-gray-600">
              Trusted by religious scholars, spiritual seekers, and interfaith leaders worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{benefit.title}</h3>
                <ul className="space-y-4">
                  {benefit.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <Star className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0 fill-current" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Religious Scholars & Students</h2>
            <p className="text-xl text-gray-600">Join thousands exploring faith with academic rigor</p>
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
      <section id="download" className="py-20 hero-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Access 135,000+ Sacred Verses Today
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-100">
              Start your journey with the world's most comprehensive religious text library. Free tier available - no credit card required. Premium features unlock unlimited AI insights and cross-platform sync.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="https://apps.apple.com/app/faith-explorer" className="bg-gold-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition-colors flex items-center shadow-xl min-w-[240px] justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download for iOS
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.faithexplorer" className="bg-gold-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition-colors flex items-center shadow-xl min-w-[240px] justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </a>
            </div>
            <a href="https://app.faithexplorer.app" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Or Use Web App
            </a>
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
              <p className="text-gray-400">
                The world's most comprehensive religious text app with 135,000+ verses and AI-powered insights.
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
            <p className="mt-2 text-sm">135,000+ verses • 9 religions • AI-powered insights • Academic-quality sources</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
