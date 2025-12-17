'use client';

import { useState } from 'react';
import {
  Search,
  Book,
  Video,
  MessageCircle,
  Mail,
  Phone,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Play,
  FileText,
  HelpCircle,
  Lightbulb,
  Zap,
  DollarSign,
  Users,
  Settings,
  Shield,
  Headphones,
  Clock,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState('getting-started');

  const categories = [
    { id: 'getting-started', name: 'Getting Started', icon: Zap, count: 12 },
    { id: 'content', name: 'Content Creation', icon: Video, count: 24 },
    { id: 'students', name: 'Student Management', icon: Users, count: 18 },
    { id: 'earnings', name: 'Earnings & Payouts', icon: DollarSign, count: 15 },
    { id: 'account', name: 'Account & Settings', icon: Settings, count: 10 },
    { id: 'security', name: 'Security & Privacy', icon: Shield, count: 8 },
  ];

  const faqs = [
    {
      id: 'faq-1',
      question: 'How do I create my first course?',
      answer:
        'To create your first course, navigate to the Content section in your dashboard and click "Create New Content". Choose "Course" as your content type, then fill in the basic information like title, description, and category. You can add sections and lessons in the Curriculum tab, set your pricing in the Pricing tab, and configure additional settings before publishing.',
    },
    {
      id: 'faq-2',
      question: 'How and when do I get paid?',
      answer:
        'Payouts are processed automatically based on your payout schedule (weekly, bi-weekly, or monthly). Once your available balance reaches the minimum threshold ($50), funds will be transferred to your connected payment method. Processing typically takes 3-5 business days for bank transfers and 1-2 days for Stripe.',
    },
    {
      id: 'faq-3',
      question: 'What file formats are supported for video uploads?',
      answer:
        'We support MP4, MOV, AVI, and WebM formats for video uploads. For best results, we recommend uploading MP4 files with H.264 encoding. Maximum file size is 4GB per video. Videos are automatically processed and optimized for streaming across different devices.',
    },
    {
      id: 'faq-4',
      question: 'How do I set up my social media integrations?',
      answer:
        'Go to Settings > Integrations to connect your social media accounts. We support YouTube, Instagram, Twitter, LinkedIn, Facebook, and TikTok. Once connected, you can cross-post content and track engagement from the Publishing section of your dashboard.',
    },
    {
      id: 'faq-5',
      question: 'Can I offer refunds to my students?',
      answer:
        'Yes, you can issue refunds within 30 days of purchase. Go to the Students section, find the enrollment, and click "Issue Refund". You can also set up automatic refund policies in your course settings. Note that refunds will be deducted from your next payout.',
    },
    {
      id: 'faq-6',
      question: 'How do certificates work?',
      answer:
        'When you enable certificates for your course in Settings, students automatically receive a certificate upon completion. Certificates include the student name, course title, completion date, and your digital signature. You can customize the certificate template in your account settings.',
    },
  ];

  const guides = [
    {
      title: 'Complete Creator Guide',
      description: 'Everything you need to know to succeed as a creator on our platform',
      type: 'article',
      readTime: '15 min read',
    },
    {
      title: 'Video Production Best Practices',
      description: 'Tips for creating engaging, high-quality video content',
      type: 'video',
      readTime: '12 min watch',
    },
    {
      title: 'Pricing Your Courses',
      description: 'Strategies for setting competitive prices that maximize earnings',
      type: 'article',
      readTime: '8 min read',
    },
    {
      title: 'Growing Your Student Base',
      description: 'Marketing tips and techniques to attract more students',
      type: 'video',
      readTime: '18 min watch',
    },
  ];

  const supportTickets = [
    {
      id: 'TKT-2847',
      subject: 'Video upload failing',
      status: 'resolved',
      created: '2 days ago',
    },
    {
      id: 'TKT-2812',
      subject: 'Payout delay inquiry',
      status: 'in-progress',
      created: '5 days ago',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Help Center</h1>
        <p className="text-purple-100 mb-6">
          Find answers, tutorials, and get support for your creator journey
        </p>
        <div className="max-w-2xl relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for help articles, guides, and FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
            <Book className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Documentation</h3>
          <p className="text-sm text-gray-500">Browse our guides and tutorials</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
            <Video className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Video Tutorials</h3>
          <p className="text-sm text-gray-500">Learn with step-by-step videos</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
            <MessageCircle className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
          <p className="text-sm text-gray-500">Chat with our support team</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
            <Lightbulb className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Feature Requests</h3>
          <p className="text-sm text-gray-500">Suggest new features</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="col-span-2 space-y-8">
          {/* Help Categories */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Browse by Category</h2>
            </div>
            <div className="grid grid-cols-2 divide-x divide-y divide-gray-100">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left ${
                    activeCategory === category.id ? 'bg-purple-50' : ''
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activeCategory === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count} articles</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                    {expandedFaq === faq.id ? (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === faq.id && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <button className="text-purple-600 font-medium hover:text-purple-700 flex items-center gap-2">
                View all FAQs
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Popular Guides */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Popular Guides</h2>
              <button className="text-purple-600 text-sm font-medium hover:text-purple-700">
                View all
              </button>
            </div>
            <div className="divide-y divide-gray-100">
              {guides.map((guide, index) => (
                <div
                  key={index}
                  className="p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      guide.type === 'video' ? 'bg-purple-100' : 'bg-blue-100'
                    }`}
                  >
                    {guide.type === 'video' ? (
                      <Play className="w-6 h-6 text-purple-600" />
                    ) : (
                      <FileText className="w-6 h-6 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{guide.title}</h3>
                    <p className="text-sm text-gray-500">{guide.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    {guide.readTime}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Support */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Contact Support</h2>
            </div>
            <div className="p-6 space-y-4">
              <button className="w-full flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-purple-600 hover:bg-purple-50 transition-all">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Live Chat</p>
                  <p className="text-xs text-green-600">Available now</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-purple-600 hover:bg-purple-50 transition-all">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Email Support</p>
                  <p className="text-xs text-gray-500">Response within 24h</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-purple-600 hover:bg-purple-50 transition-all">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Phone Support</p>
                  <p className="text-xs text-gray-500">Premium plan only</p>
                </div>
              </button>
            </div>
          </div>

          {/* Recent Tickets */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Your Tickets</h2>
              <button className="text-purple-600 text-sm font-medium hover:text-purple-700">
                New ticket
              </button>
            </div>
            <div className="divide-y divide-gray-100">
              {supportTickets.map((ticket) => (
                <div key={ticket.id} className="p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{ticket.id}</span>
                    <span
                      className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                        ticket.status === 'resolved'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {ticket.status === 'resolved' ? 'Resolved' : 'In Progress'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{ticket.subject}</p>
                  <p className="text-xs text-gray-400 mt-1">{ticket.created}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-100">
              <button className="text-purple-600 text-sm font-medium hover:text-purple-700 flex items-center gap-1">
                View all tickets
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">System Status</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Platform</span>
                <span className="flex items-center gap-1.5 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Operational
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Video Processing</span>
                <span className="flex items-center gap-1.5 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Operational
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Payments</span>
                <span className="flex items-center gap-1.5 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  Operational
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">API</span>
                <span className="flex items-center gap-1.5 text-sm text-yellow-600">
                  <AlertCircle className="w-4 h-4" />
                  Degraded
                </span>
              </div>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-100">
              <a
                href="#"
                className="text-purple-600 text-sm font-medium hover:text-purple-700 flex items-center gap-1"
              >
                View status page
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Community */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6 text-white">
            <h3 className="font-semibold mb-2">Join Our Community</h3>
            <p className="text-sm text-purple-100 mb-4">
              Connect with other creators, share tips, and get inspired
            </p>
            <button className="w-full py-2.5 bg-white text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors">
              Join Discord
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
