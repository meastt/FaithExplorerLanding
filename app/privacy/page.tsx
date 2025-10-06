'use client'

import { BookOpen, Shield, Mail, Calendar } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Faith Explorer | Your Data Privacy Matters',
  description: 'Learn how Faith Explorer protects your privacy. We collect minimal data, use local storage, and never track your spiritual journey. GDPR compliant and privacy-first design.',
  keywords: 'privacy policy, data protection, GDPR compliant, religious app privacy, spiritual data security, Faith Explorer privacy',
  openGraph: {
    title: 'Privacy Policy - Faith Explorer',
    description: 'Your privacy matters. Learn how Faith Explorer protects your spiritual journey with privacy-first design.',
    url: 'https://faithexplorer.app/privacy',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy - Faith Explorer',
    description: 'Your privacy matters. Learn how Faith Explorer protects your spiritual journey.',
  },
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPolicy() {
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

      {/* Header */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary-50 to-gold-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-primary-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Your privacy and data protection are fundamental to Faith Explorer
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
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Key Privacy Highlights</h3>
              <ul className="text-blue-700 space-y-1">
                <li>• No personal data is collected or stored</li>
                <li>• No user accounts or registration required</li>
                <li>• All religious texts are publicly available content</li>
                <li>• AI interactions are processed locally on your device</li>
                <li>• No data is shared with third parties</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              Faith Explorer is designed with privacy as a core principle. We collect minimal information to provide you with the best possible experience:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.1 No Personal Data Collection</h3>
            <p className="text-gray-700 mb-4">
              Faith Explorer does not collect, store, or process any personal information including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Names, email addresses, or contact information</li>
              <li>Device identifiers or unique user IDs</li>
              <li>Location data or GPS coordinates</li>
              <li>Browsing history or search queries</li>
              <li>Saved verses or personal notes (stored locally on your device only)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.2 Anonymous Usage Analytics</h3>
            <p className="text-gray-700 mb-4">
              We may collect completely anonymous, aggregated usage statistics to improve the app, such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>App crash reports (without personal identifiers)</li>
              <li>Feature usage frequency (anonymized)</li>
              <li>Performance metrics to optimize app speed</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Information</h2>
            <p className="text-gray-700 mb-4">
              Since we collect minimal information, our use is limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Improving app performance and user experience</li>
              <li>Fixing bugs and technical issues</li>
              <li>Understanding which features are most valuable to users</li>
              <li>Ensuring app stability and reliability</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Religious Content and AI Processing</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 Religious Texts</h3>
            <p className="text-gray-700 mb-4">
              Faith Explorer provides access to publicly available religious texts and scriptures. All content is sourced from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Public domain religious texts and translations</li>
              <li>Open-source religious scripture databases</li>
              <li>Authorized religious text repositories</li>
              <li>Academic and scholarly religious text collections</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 AI-Powered Features</h3>
            <p className="text-gray-700 mb-4">
              Our AI features are designed to respect religious diversity and provide educational insights:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>AI responses are generated based on publicly available religious texts</li>
              <li>No personal religious beliefs or practices are analyzed</li>
              <li>AI interactions are processed locally on your device when possible</li>
              <li>No religious queries or discussions are stored or transmitted</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Storage and Security</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1 Local Storage Only</h3>
            <p className="text-gray-700 mb-4">
              Faith Explorer stores data locally on your device:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Saved verses and bookmarks (stored on your device only)</li>
              <li>App preferences and settings</li>
              <li>Offline religious text content for faster access</li>
              <li>No data is transmitted to external servers</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.2 Security Measures</h3>
            <p className="text-gray-700 mb-4">
              We implement industry-standard security practices:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>End-to-end encryption for any data transmission</li>
              <li>Secure local storage encryption</li>
              <li>Regular security audits and updates</li>
              <li>No third-party data sharing or selling</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Faith Explorer may use minimal third-party services for essential functionality:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>App store distribution platforms (Apple App Store, Google Play)</li>
              <li>Anonymous crash reporting services (if any crashes occur)</li>
              <li>No advertising networks or tracking services</li>
              <li>No social media integrations that collect personal data</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Faith Explorer is suitable for users of all ages. We do not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Knowingly collect information from children under 13</li>
              <li>Require age verification or parental consent</li>
              <li>Track or monitor usage by minors</li>
              <li>Provide features that could compromise child safety</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. International Users</h2>
            <p className="text-gray-700 mb-4">
              Faith Explorer is designed to respect international privacy laws:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Compliant with GDPR (General Data Protection Regulation)</li>
              <li>Respects CCPA (California Consumer Privacy Act)</li>
              <li>Follows international data protection standards</li>
              <li>No cross-border data transfers of personal information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Since we collect minimal personal data, your rights include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Right to access any data we might have (which is minimal)</li>
              <li>Right to delete your local app data (via app settings)</li>
              <li>Right to opt-out of any data collection</li>
              <li>Right to contact us with privacy concerns</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy to reflect changes in our practices or legal requirements. We will:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Notify users of significant changes through the app</li>
              <li>Update the "Last updated" date at the top of this policy</li>
              <li>Maintain the same privacy-first approach</li>
              <li>Never reduce your privacy protections without consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this privacy policy or Faith Explorer's data practices, please contact us:
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
              <h3 className="text-lg font-semibold text-gold-800 mb-2">Our Privacy Commitment</h3>
              <p className="text-gold-700">
                Faith Explorer is built on the principle that exploring religious wisdom should be a private, 
                personal journey. We believe that your spiritual exploration should not come at the cost of your privacy. 
                This is why we've designed our app to collect minimal data and respect your personal space.
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