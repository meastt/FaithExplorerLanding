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
  Zap
} from 'lucide-react'

const religions = [
  { name: 'Christianity', texts: ['Bible KJV', 'Book of Mormon', 'Orthodox', 'Catholic'], color: 'bg-blue-500' },
  { name: 'Islam', texts: ['Quran', 'Hadith Bukhari', 'Hadith Muslim'], color: 'bg-green-500' },
  { name: 'Judaism', texts: ['Torah', 'Talmud'], color: 'bg-yellow-500' },
  { name: 'Buddhism', texts: ['Mahayana', 'Vinaya Pitaka', 'Abhidharma'], color: 'bg-orange-500' },
  { name: 'Hinduism', texts: ['Vedas', 'Upanishads', 'Ramayana'], color: 'bg-red-500' },
  { name: 'Taoism', texts: ['Zhuangzi', 'I Ching', 'Daozang'], color: 'bg-purple-500' },
  { name: 'Confucianism', texts: ['Mengzi', 'Xunzi', 'Five Classics'], color: 'bg-indigo-500' },
  { name: 'Shinto', texts: ['Nihon Shoki', 'Norito'], color: 'bg-pink-500' },
  { name: 'Sikhism', texts: ['Dasam Granth', 'Janamsakhis'], color: 'bg-amber-500' }
]

const features = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'AI-Powered Search',
    description: 'Find any verse across all religious texts with intelligent search powered by advanced AI.'
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: 'AI Chat & Discussion',
    description: 'Ask questions, discuss interpretations, and gain deeper understanding through AI conversations.'
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Compare Texts',
    description: 'Compare verses and teachings across multiple religions to understand different perspectives.'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Save & Learn',
    description: 'Save your favorite verses, create study collections, and track your spiritual journey.'
  }
]

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Theology Student',
    content: 'Faith Explorer has revolutionized how I study comparative religion. The AI insights are incredibly helpful.',
    rating: 5
  },
  {
    name: 'Ahmed K.',
    role: 'Interfaith Scholar',
    content: 'Finally, a tool that lets me explore multiple faiths with respect and understanding. The comparisons are eye-opening.',
    rating: 5
  },
  {
    name: 'Dr. Maria L.',
    role: 'Religious Studies Professor',
    content: 'This app bridges the gap between different religious traditions beautifully. My students love using it.',
    rating: 5
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
              <a href="#religions" className="text-gray-600 hover:text-primary-600 transition-colors">Religions</a>
              <a href="#testimonials" className="text-gray-600 hover:text-primary-600 transition-colors">Reviews</a>
            </div>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Download App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Discover Wisdom
              <br />
              <span className="gold-gradient">Across All Faiths</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100"
            >
              Explore, compare, and learn from religious texts across Christianity, Islam, Judaism, Buddhism, Hinduism, and more with AI-powered insights.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-gold-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition-colors flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Watch Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to explore, understand, and learn from the world's religious traditions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg card-hover"
              >
                <div className="text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Religions Showcase */}
      <section id="religions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore All Major Religions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access sacred texts from 9 major world religions and their denominations
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
                <div className="flex items-center mb-4">
                  <div className={`w-4 h-4 rounded-full ${religion.color} mr-3`}></div>
                  <h3 className="text-xl font-semibold text-gray-900">{religion.name}</h3>
                </div>
                <div className="space-y-2">
                  {religion.texts.map((text, textIndex) => (
                    <div key={textIndex} className="flex items-center text-gray-600">
                      <ChevronRight className="w-4 h-4 mr-2 text-primary-500" />
                      {text}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Users Say</h2>
            <p className="text-xl text-gray-600">Join thousands of users exploring faith and wisdom</p>
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
              <p className="text-xl text-gray-700 mb-6 italic">"{testimonials[currentTestimonial].content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
              </div>
            </motion.div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Spiritual Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Download Faith Explorer and begin exploring the wisdom of the world's great religious traditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gold-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition-colors flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download for iOS
            </button>
            <button className="bg-gold-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition-colors flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download for Android
            </button>
          </div>
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
                Discover wisdom across all faiths with AI-powered insights and comparisons.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Search</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Text Comparison</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Chat</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Save Verses</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Religions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Christianity</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Islam</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Judaism</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Buddhism</a></li>
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
          </div>
        </div>
      </footer>
    </div>
  )
}