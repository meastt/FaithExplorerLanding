import { BookOpen, FileText, Mail, Calendar } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'
import Breadcrumb from '../components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Terms of Service - Faith Explorer | Legal Terms & Conditions',
  description: 'Read Faith Explorer\'s Terms of Service. Learn about user responsibilities, AI features, religious content respect, and our commitment to interfaith understanding.',
  keywords: 'terms of service, user agreement, legal terms, religious app terms, Faith Explorer terms, interfaith respect, AI religious education terms',
  openGraph: {
    title: 'Terms of Service - Faith Explorer',
    description: 'Read our terms of service and learn about our commitment to interfaith understanding and respect.',
    url: 'https://faithexplorer.app/terms',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service - Faith Explorer',
    description: 'Read our terms of service and learn about our commitment to interfaith understanding.',
  },
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <BookOpen className="w-8 h-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Faith Explorer</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</Link>
              <Link href="/#religions" className="text-gray-600 hover:text-primary-600 transition-colors">Religions</Link>
              <Link href="/#testimonials" className="text-gray-600 hover:text-primary-600 transition-colors">Reviews</Link>
            </div>
            <Link href="/" className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Terms of Service' }]} />

      {/* Header */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary-50 to-gold-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <FileText className="w-16 h-16 text-primary-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Please read these terms carefully before using Faith Explorer
          </p>
          <div className="flex items-center justify-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Agreement Overview</h3>
              <p className="text-blue-700">
                By downloading, installing, or using Faith Explorer, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our app.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              These Terms of Service ("Terms") govern your use of the Faith Explorer mobile application ("App") 
              provided by Faith Explorer ("we," "us," or "our"). By accessing or using our App, you agree to be 
              bound by these Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              Faith Explorer is a mobile application that provides:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Access to religious texts and scriptures from multiple faith traditions</li>
              <li>AI-powered search and analysis of religious content</li>
              <li>Text comparison features across different religious traditions</li>
              <li>Educational tools for learning about various faiths</li>
              <li>Local storage for saving verses and personal notes</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Religious Content and Respect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 Sacred Texts</h3>
            <p className="text-gray-700 mb-4">
              Faith Explorer provides access to sacred texts from various religious traditions. We:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Present religious texts with respect and reverence</li>
              <li>Source content from authoritative and scholarly sources</li>
              <li>Maintain the integrity of original texts and translations</li>
              <li>Do not modify or alter the content of sacred scriptures</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 Interfaith Respect</h3>
            <p className="text-gray-700 mb-4">
              Users are expected to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Use the app respectfully and with reverence for all faith traditions</li>
              <li>Not use the app to promote religious intolerance or discrimination</li>
              <li>Engage in thoughtful, respectful discussion when using AI features</li>
              <li>Recognize that different faith traditions have different interpretations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              As a user of Faith Explorer, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Use the app only for lawful and educational purposes</li>
              <li>Respect the sacred nature of religious texts and traditions</li>
              <li>Not attempt to reverse engineer or modify the app</li>
              <li>Not use the app to harass, abuse, or harm others</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.1 App Content</h3>
            <p className="text-gray-700 mb-4">
              The Faith Explorer app, including its design, functionality, and user interface, is protected by 
              intellectual property laws. You may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Copy, modify, or distribute the app without permission</li>
              <li>Create derivative works based on our app</li>
              <li>Use our trademarks or branding without authorization</li>
              <li>Remove or alter copyright notices</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.2 Religious Texts</h3>
            <p className="text-gray-700 mb-4">
              Religious texts and scriptures are generally in the public domain or used under appropriate licenses. 
              We respect the intellectual property rights of translators and publishers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. AI Features and Limitations</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.1 AI-Generated Content</h3>
            <p className="text-gray-700 mb-4">
              Faith Explorer includes AI-powered features that provide:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Search assistance for finding relevant verses</li>
              <li>Educational explanations and context</li>
              <li>Comparative analysis between different traditions</li>
              <li>General information about religious concepts</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.2 AI Limitations</h3>
            <p className="text-gray-700 mb-4">
              Users should understand that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>AI responses are for educational purposes only</li>
              <li>AI may not always provide theologically accurate interpretations</li>
              <li>Users should consult religious authorities for spiritual guidance</li>
              <li>AI responses do not replace personal study or religious instruction</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Privacy and Data</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Please review our Privacy Policy for detailed information about 
              how we handle your data. Key points:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>We collect minimal personal information</li>
              <li>Data is stored locally on your device when possible</li>
              <li>We do not sell or share your personal data</li>
              <li>You can delete your local data at any time</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Disclaimers</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8.1 Educational Purpose</h3>
            <p className="text-gray-700 mb-4">
              Faith Explorer is designed for educational and informational purposes. We do not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Provide religious counseling or spiritual guidance</li>
              <li>Endorse any particular religious interpretation</li>
              <li>Replace consultation with qualified religious authorities</li>
              <li>Guarantee theological accuracy of AI responses</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8.2 App Availability</h3>
            <p className="text-gray-700 mb-4">
              We strive to provide reliable service, but we cannot guarantee:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Uninterrupted access to the app</li>
              <li>Error-free operation at all times</li>
              <li>Compatibility with all devices or operating systems</li>
              <li>Availability of all features in all regions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, Faith Explorer shall not be liable for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Any indirect, incidental, or consequential damages</li>
              <li>Loss of data, profits, or business opportunities</li>
              <li>Religious or spiritual consequences of app usage</li>
              <li>Third-party content or external links</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your access to Faith Explorer at any time, with or without notice, 
              for any reason, including violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We may update these Terms from time to time. We will notify users of significant changes through 
              the app or other appropriate means. Continued use of the app after changes constitutes acceptance 
              of the new Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms are governed by the laws of [Your Jurisdiction] without regard to conflict of law principles. 
              Any disputes will be resolved in the courts of [Your Jurisdiction].
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 text-primary-600 mr-2" />
                <span className="font-semibold text-gray-900">Email Support</span>
              </div>
              <a 
                href="mailto:support@faithexplorer.app" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                support@faithexplorer.app
              </a>
              <p className="text-sm text-gray-600 mt-2">
                We typically respond within 24-48 hours
              </p>
            </div>

            <div className="bg-gold-50 border border-gold-200 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-gold-800 mb-2">Our Commitment</h3>
              <p className="text-gold-700">
                Faith Explorer is committed to fostering understanding, respect, and learning across all religious 
                traditions. We believe that knowledge of different faiths can promote peace, tolerance, and mutual 
                understanding in our diverse world.
              </p>
            </div>

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
                <li><Link href="/#features" className="hover:text-white transition-colors">AI Search</Link></li>
                <li><Link href="/#features" className="hover:text-white transition-colors">Text Comparison</Link></li>
                <li><Link href="/#features" className="hover:text-white transition-colors">AI Chat</Link></li>
                <li><Link href="/#features" className="hover:text-white transition-colors">Save Verses</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Religions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/#religions" className="hover:text-white transition-colors">Christianity</Link></li>
                <li><Link href="/#religions" className="hover:text-white transition-colors">Islam</Link></li>
                <li><Link href="/#religions" className="hover:text-white transition-colors">Judaism</Link></li>
                <li><Link href="/#religions" className="hover:text-white transition-colors">Buddhism</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:support@faithexplorer.app" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
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