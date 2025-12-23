import { BookOpen, Shield, Mail, Calendar, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'
import Breadcrumb from '../components/Breadcrumb'

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

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

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
            Last updated: December 22, 2025
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
                <li>• <strong>No personal accounts required</strong> - Use Faith Explorer without registration</li>
                <li>• <strong>Local data storage</strong> - Your saved verses and preferences stay on your device</li>
                <li>• <strong>Advertising supported</strong> - We show ads to keep the app free</li>
                <li>• <strong>Transparent tracking</strong> - We ask your permission before any ad tracking</li>
                <li>• <strong>Religious texts are public</strong> - All content comes from publicly available sources</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              Faith Explorer is designed with privacy as a core principle while providing a free, ad-supported experience.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.1 Personal Data</h3>
            <p className="text-gray-700 mb-4">
              Faith Explorer does not require you to create an account or provide personal information such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Names, email addresses, or contact information</li>
              <li>Location data or GPS coordinates</li>
              <li>Personal religious beliefs or practices</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.2 Device Information for Advertising</h3>
            <p className="text-gray-700 mb-4">
              To provide free access to Faith Explorer, we display advertisements. For this purpose, we may collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li><strong>Device Identifiers</strong>: Such as the Identifier for Advertisers (IDFA) on iOS, used to deliver relevant ads and measure ad effectiveness</li>
              <li><strong>Advertising Data</strong>: Information about ad interactions (views, clicks) to improve ad relevance</li>
            </ul>
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
              <p className="text-green-800">
                <strong>You have control:</strong> When you first use Faith Explorer, you will be asked whether you allow tracking for advertising purposes via Apple's App Tracking Transparency (ATT) prompt. You can choose to allow or deny this tracking, and you can change your preference at any time in your device settings.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.3 Anonymous Usage Analytics</h3>
            <p className="text-gray-700 mb-4">
              We may collect completely anonymous, aggregated usage statistics to improve the app, such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>App crash reports (without personal identifiers)</li>
              <li>Feature usage frequency (anonymized)</li>
              <li>Performance metrics to optimize app speed</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Information</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Advertising Purposes</h3>
            <p className="text-gray-700 mb-4">
              If you consent to tracking, device identifiers and advertising data are used to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Deliver personalized advertisements relevant to your interests</li>
              <li>Measure the effectiveness of advertising campaigns</li>
              <li>Prevent ad fraud and ensure proper ad delivery</li>
              <li>Support the free availability of Faith Explorer</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 App Improvement</h3>
            <p className="text-gray-700 mb-4">
              Anonymous data is used to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Improve app performance and user experience</li>
              <li>Fix bugs and technical issues</li>
              <li>Understand which features are most valuable to users</li>
              <li>Ensure app stability and reliability</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Third-Party Advertising Partners</h2>
            <p className="text-gray-700 mb-4">
              Faith Explorer works with third-party advertising partners to display ads. These partners may collect and use data as described in their own privacy policies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>
                <strong>Google AdMob</strong>: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 inline-flex items-center">Google Privacy Policy <ExternalLink className="w-4 h-4 ml-1" /></a>
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              These partners may use technologies such as cookies, web beacons, and device identifiers to collect information about your activity across apps and websites.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">SKAdNetwork</h3>
            <p className="text-gray-700 mb-4">
              We participate in Apple's SKAdNetwork, which allows measurement of advertising effectiveness while limiting access to user-level data. This is a privacy-preserving technology that does not reveal your personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Religious Content and AI Processing</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1 Religious Texts</h3>
            <p className="text-gray-700 mb-4">
              Faith Explorer provides access to publicly available religious texts and scriptures sourced from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Public domain religious texts and translations</li>
              <li>Open-source religious scripture databases</li>
              <li>Authorized religious text repositories</li>
              <li>Academic and scholarly religious text collections</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.2 AI-Powered Features</h3>
            <p className="text-gray-700 mb-4">
              Our AI features are designed to respect religious diversity and provide educational insights:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>AI responses are generated based on publicly available religious texts</li>
              <li>No personal religious beliefs or practices are analyzed</li>
              <li>AI interactions are processed securely</li>
              <li>No religious queries or discussions are stored permanently</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Storage and Security</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.1 Local Storage</h3>
            <p className="text-gray-700 mb-4">
              Faith Explorer stores the following data locally on your device:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Saved verses and bookmarks</li>
              <li>App preferences and settings</li>
              <li>Offline religious text content for faster access</li>
              <li>Learning progress and streaks</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.2 Security Measures</h3>
            <p className="text-gray-700 mb-4">
              We implement industry-standard security practices:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Secure local storage encryption</li>
              <li>Regular security audits and updates</li>
              <li>Encrypted data transmission where applicable</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Choices and Rights</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.1 Advertising Tracking</h3>
            <p className="text-gray-700 mb-4">
              You can control ad tracking preferences:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li><strong>On iOS</strong>: Go to Settings &gt; Privacy &amp; Security &gt; Tracking to manage which apps can track your activity</li>
              <li>You can opt out of personalized ads at any time</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.2 Your Rights</h3>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Access any data we might have about you</li>
              <li>Delete your local app data via app settings or by uninstalling the app</li>
              <li>Opt out of any data collection and tracking</li>
              <li>Contact us with privacy concerns</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Faith Explorer is suitable for users of all ages. We do not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Knowingly collect personal information from children under 13</li>
              <li>Require age verification or personal information</li>
              <li>Show personalized ads to users who have not consented to tracking</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. International Users</h2>
            <p className="text-gray-700 mb-4">
              Faith Explorer respects international privacy laws:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Compliant with GDPR (General Data Protection Regulation)</li>
              <li>Respects CCPA (California Consumer Privacy Act)</li>
              <li>Follows international data protection standards</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy to reflect changes in our practices or legal requirements. We will:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Notify users of significant changes through the app</li>
              <li>Update the "Last updated" date at the top of this policy</li>
              <li>Never reduce your privacy protections without notice</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this privacy policy or Faith Explorer's data practices, please contact us:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 text-primary-600 mr-2" />
                <span className="font-semibold text-gray-900">Email</span>
              </div>
              <a 
                href="mailto:mike@faithexplorer.app" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                mike@faithexplorer.app
              </a>
              <p className="text-sm text-gray-600 mt-2">
                We typically respond within 24-48 hours
              </p>
            </div>

            <div className="bg-gold-50 border border-gold-200 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-gold-800 mb-2">Our Privacy Commitment</h3>
              <p className="text-gold-700">
                Faith Explorer is built on the principle that exploring religious wisdom should be accessible to everyone. We use advertising to keep the app free while giving you clear choices about your privacy. Your spiritual exploration matters to us, and we're committed to being transparent about how we operate.
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
                <li><a href="mailto:mike@faithexplorer.app" className="hover:text-white transition-colors">Contact Us</a></li>
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