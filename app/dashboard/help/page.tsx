"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle, 
  Search, 
  Book, 
  MessageSquare, 
  Mail, 
  Phone,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  PlayCircle,
  FileText,
  Users,
  Zap,
  Shield,
  CreditCard,
  Settings
} from "lucide-react";

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const categories = [
    { icon: Zap, title: "Getting Started", description: "Learn the basics", articles: 12, color: "blue" },
    { icon: Users, title: "Managing Startups", description: "Add and track startups", articles: 8, color: "green" },
    { icon: Book, title: "Programs", description: "Program management", articles: 6, color: "purple" },
    { icon: Shield, title: "Security", description: "Account security", articles: 5, color: "orange" },
    { icon: CreditCard, title: "Billing", description: "Plans and payments", articles: 7, color: "pink" },
    { icon: Settings, title: "Settings", description: "Customize your account", articles: 9, color: "indigo" },
  ];

  const faqs = [
    {
      question: "How do I add a new startup to my portfolio?",
      answer: "To add a new startup, navigate to the Startups page and click the 'Add Startup' button in the top right corner. Fill in the required information including company name, description, industry, and funding stage. You can also upload a logo and add team members."
    },
    {
      question: "How can I track the progress of my startups?",
      answer: "Each startup has a dedicated dashboard showing key metrics, milestones, and funding progress. You can set custom KPIs, track team growth, and monitor funding rounds. The main dashboard provides an overview of all startups in your portfolio."
    },
    {
      question: "How do I schedule a mentor session?",
      answer: "Go to the Mentorship section and browse available mentors. You can filter by expertise, availability, and ratings. Click on a mentor's profile to view their calendar and book a session. You'll receive a confirmation email with meeting details."
    },
    {
      question: "Can I export my startup data?",
      answer: "Yes, you can export data in CSV or PDF format. Go to the startup's profile page and click the export button. You can choose to export all data or select specific metrics and time periods."
    },
    {
      question: "How do I upgrade my subscription plan?",
      answer: "Navigate to Settings > Billing and click 'Change Plan'. You'll see all available plans with their features. Select your desired plan and follow the payment process. Your new plan will be active immediately."
    },
  ];

  const popularArticles = [
    { title: "Complete Guide to Adding Startups", views: "2.3k views", category: "Getting Started" },
    { title: "Understanding Funding Stages", views: "1.8k views", category: "Programs" },
    { title: "Setting Up Two-Factor Authentication", views: "1.5k views", category: "Security" },
    { title: "Customizing Your Dashboard", views: "1.2k views", category: "Settings" },
    { title: "Mentor Matching Best Practices", views: "980 views", category: "Mentorship" },
  ];

  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
    pink: "bg-pink-100 text-pink-600",
    indigo: "bg-indigo-100 text-indigo-600",
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Archivo, sans-serif' }}>
          How can we help you?
        </h1>
        <p className="text-gray-600 mb-8">
          Search our knowledge base or browse categories below
        </p>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for articles, guides, and more..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg shadow-sm"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card 
              key={index} 
              className="group border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorMap[category.color]} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{category.description}</p>
                    <span className="text-xs text-gray-400">{category.articles} articles</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* FAQ and Popular Articles */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* FAQ */}
        <div className="lg:col-span-2">
          <Card className="border border-gray-200">
            <CardHeader className="border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    Frequently Asked Questions
                  </CardTitle>
                  <p className="text-sm text-gray-500">Quick answers to common questions</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Popular Articles */}
        <div className="space-y-6">
          <Card className="border border-gray-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <CardTitle className="text-lg" style={{ fontFamily: 'Archivo, sans-serif' }}>
                  Popular Articles
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {popularArticles.map((article, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="flex items-start gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                >
                  <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-gray-500">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {article.category} • {article.views}
                    </p>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          {/* Video Tutorials */}
          <Card className="border border-gray-200 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center relative">
              <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                <PlayCircle className="w-10 h-10 text-white" />
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-medium">Getting Started Tutorial</p>
                <p className="text-white/70 text-sm">5 min watch</p>
              </div>
            </div>
            <CardContent className="p-4">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                View all tutorials
                <ExternalLink className="w-4 h-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Support */}
      <Card className="border border-gray-200 bg-gradient-to-r from-gray-50 to-white">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Archivo, sans-serif' }}>
              Still need help?
            </h2>
            <p className="text-gray-600">
              Our support team is here to assist you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-sm text-gray-500 mb-4">Chat with our support team</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Start Chat
              </Button>
            </div>

            <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-sm text-gray-500 mb-4">We'll respond within 24h</p>
              <Button variant="outline" className="w-full">
                Send Email
              </Button>
            </div>

            <div className="text-center p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-sm text-gray-500 mb-4">Mon-Fri, 9am-5pm EST</p>
              <Button variant="outline" className="w-full">
                +1 (555) 123-4567
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}