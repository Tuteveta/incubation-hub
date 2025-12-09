"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen, Video, FileText, Code, ArrowRight, Sparkles, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function ResourcesPage() {
  const resources = [
    {
      category: "Guides & Articles",
      icon: BookOpen,
      color: "blue",
      items: [
        "How to Build an MVP in 30 Days",
        "Fundraising 101: A Founder's Guide",
        "Product-Market Fit Framework",
        "Building Your First Team"
      ]
    },
    {
      category: "Video Tutorials",
      icon: Video,
      color: "purple",
      items: [
        "Pitch Deck Masterclass",
        "Financial Modeling for Startups",
        "Growth Marketing Strategies",
        "Legal Basics Every Founder Should Know"
      ]
    },
    {
      category: "Templates & Tools",
      icon: FileText,
      color: "green",
      items: [
        "Business Plan Template",
        "Financial Model Spreadsheet",
        "Pitch Deck Template",
        "Term Sheet Generator"
      ]
    },
    {
      category: "Code & Technical",
      icon: Code,
      color: "orange",
      items: [
        "Startup Tech Stack Guide",
        "API Integration Templates",
        "Security Best Practices",
        "Scaling Architecture Patterns"
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Archivo', sans-serif;
        }
      `}</style>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Incubation Hub</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/programs" className="text-gray-600 hover:text-gray-900 transition-colors">
                Programs
              </Link>
              <Link href="/mentors" className="text-gray-600 hover:text-gray-900 transition-colors">
                Mentors
              </Link>
              <Link href="/resources" className="text-green-600 font-semibold">
                Resources
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/auth">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/auth">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Startup <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Resources</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Access our library of guides, templates, and tools to help you build and grow your startup
          </p>
        </motion.div>
      </section>

      {/* Resources Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br from-${resource.color}-500 to-${resource.color}-600 rounded-xl flex items-center justify-center`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{resource.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {resource.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <Download className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/auth" className="block">
                      <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white group">
                        Access Resources
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    
                    <p className="text-xs text-center text-gray-500">
                      Sign up to access all resources
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get Full Access to All Resources
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Sign up now to download templates, watch tutorials, and access our complete resource library
          </p>
          <Link href="/auth">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Sign Up Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2025 Incubation Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}