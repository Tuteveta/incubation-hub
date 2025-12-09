"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Filter, Search, FileText, Video, Book, Download, ExternalLink, PlayCircle, BookOpen, Code, TrendingUp, Users, DollarSign, Gavel } from "lucide-react";

export default function ResourcesPage() {
  const categories = [
    { name: "All Resources", count: 156, active: true },
    { name: "Templates", count: 42, active: false },
    { name: "Guides", count: 38, active: false },
    { name: "Videos", count: 24, active: false },
    { name: "Tools", count: 31, active: false },
    { name: "Legal", count: 21, active: false }
  ];

  type ColorType = "blue" | "green" | "purple" | "orange" | "pink" | "indigo";

  const resources: Array<{
    id: number;
    type: string;
    icon: any;
    title: string;
    description: string;
    downloads: string;
    format: string;
    color: ColorType;
    featured: boolean;
  }> = [
    {
      id: 1,
      type: "Template",
      icon: FileText,
      title: "Pitch Deck Template",
      description: "Professional investor pitch deck template used by Y Combinator startups. Includes all essential slides with guidance.",
      downloads: "12.5K",
      format: "PDF, PPTX",
      color: "blue",
      featured: true
    },
    {
      id: 2,
      type: "Guide",
      icon: BookOpen,
      title: "Product-Market Fit Playbook",
      description: "Comprehensive 50-page guide on finding and validating product-market fit. Includes frameworks and case studies.",
      downloads: "8.2K",
      format: "PDF",
      color: "green",
      featured: true
    },
    {
      id: 3,
      type: "Video",
      icon: Video,
      title: "Fundraising Masterclass",
      description: "2-hour video course on raising your seed round. From pitch to term sheet negotiation with top VCs.",
      downloads: "5.3K",
      format: "Video",
      color: "purple",
      featured: true
    },
    {
      id: 4,
      type: "Template",
      icon: FileText,
      title: "Financial Model Template",
      description: "Pre-built Excel model for SaaS startups with 3-year projections, revenue forecasting, and unit economics.",
      downloads: "9.8K",
      format: "XLSX",
      color: "orange",
      featured: false
    },
    {
      id: 5,
      type: "Guide",
      icon: Book,
      title: "Go-to-Market Strategy Guide",
      description: "Step-by-step framework for planning and executing your GTM strategy. Includes channel selection matrix.",
      downloads: "7.1K",
      format: "PDF",
      color: "pink",
      featured: false
    },
    {
      id: 6,
      type: "Legal",
      icon: Gavel,
      title: "Founder Agreement Template",
      description: "Legally vetted co-founder agreement covering equity splits, vesting schedules, and IP assignment.",
      downloads: "11.2K",
      format: "DOCX, PDF",
      color: "indigo",
      featured: false
    },
    {
      id: 7,
      type: "Tool",
      icon: Code,
      title: "Landing Page Builder",
      description: "No-code tool to create high-converting landing pages. 50+ templates optimized for conversions.",
      downloads: "4.7K",
      format: "Web App",
      color: "blue",
      featured: false
    },
    {
      id: 8,
      type: "Template",
      icon: FileText,
      title: "OKR Framework Template",
      description: "Quarterly OKR planning template with examples from successful tech companies. Track goals effectively.",
      downloads: "6.4K",
      format: "Google Sheets",
      color: "green",
      featured: false
    },
    {
      id: 9,
      type: "Video",
      icon: PlayCircle,
      title: "Building MVP in 30 Days",
      description: "Practical video series showing how to scope, build, and launch your MVP in one month with limited resources.",
      downloads: "3.9K",
      format: "Video Series",
      color: "purple",
      featured: false
    }
  ];

  const colorMap: Record<ColorType, string> = {
    blue: "from-blue-500 to-cyan-500",
    green: "from-green-500 to-emerald-500",
    purple: "from-purple-500 to-violet-500",
    orange: "from-orange-500 to-amber-500",
    pink: "from-pink-500 to-rose-500",
    indigo: "from-indigo-500 to-blue-500"
  };

  const iconBgMap: Record<ColorType, string> = {
    blue: "bg-blue-50",
    green: "bg-green-50",
    purple: "bg-purple-50",
    orange: "bg-orange-50",
    pink: "bg-pink-50",
    indigo: "bg-indigo-50"
  };

  const iconColorMap: Record<ColorType, string> = {
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600",
    orange: "text-orange-600",
    pink: "text-pink-600",
    indigo: "text-indigo-600"
  };

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Archivo', sans-serif;
        }

        .btn-primary {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.3);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
          box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.4);
          transform: translateY(-2px);
        }

        .resource-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e5e7eb;
        }

        .resource-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: #d1d5db;
        }

        .category-pill {
          transition: all 0.2s ease;
        }

        .category-pill:hover {
          background-color: #f3f4f6;
        }

        .category-pill.active {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: white;
        }
      `}</style>

      {/* NAVIGATION */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Incubation Hub</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <Link href="/programs" className="hover:text-blue-600 transition-colors">Programs</Link>
              <Link href="/mentors" className="hover:text-blue-600 transition-colors">Mentors</Link>
              <Link href="/resources" className="text-blue-600">Resources</Link>
              <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/auth">
                <Button variant="ghost" className="text-sm font-medium">
                  Sign in
                </Button>
              </Link>
              <Link href="/auth">
                <Button className="btn-primary text-white text-sm font-medium px-5">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="bg-gradient-to-br from-gray-50 to-green-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-sm font-semibold text-green-700 mb-6">
              <BookOpen className="w-4 h-4" />
              <span>156 resources available</span>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Resource Library
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to build and scale your startup. From pitch deck templates to legal documents, 
              video courses to financial models — all curated from successful founders and experts.
            </p>
          </div>
        </div>
      </header>

      {/* SEARCH & CATEGORIES */}
      <div className="border-b border-gray-200 bg-white sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search templates, guides, videos, and tools..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filters</span>
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`category-pill px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  cat.active ? 'active' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {cat.name} <span className="opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURED RESOURCES */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.filter(r => r.featured).map((resource) => (
              <div key={resource.id} className="resource-card bg-white rounded-xl p-8 group">
                <div className={`w-14 h-14 ${iconBgMap[resource.color]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                  <resource.icon className={`w-7 h-7 ${iconColorMap[resource.color]}`} />
                </div>

                <div className="mb-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{resource.type}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Download className="w-3.5 h-3.5" />
                      <span>{resource.downloads}</span>
                    </div>
                    <div>{resource.format}</div>
                  </div>

                  <Button className="btn-primary text-white text-sm px-5 group/btn">
                    <Download className="w-4 h-4 mr-2" />
                    Get
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ALL RESOURCES */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Resources</h2>
          <div className="space-y-4">
            {resources.map((resource) => (
              <div key={resource.id} className="resource-card bg-white rounded-xl p-6 flex items-center gap-6 group">
                <div className={`w-12 h-12 ${iconBgMap[resource.color]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <resource.icon className={`w-6 h-6 ${iconColorMap[resource.color]}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{resource.type}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{resource.format}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {resource.description}
                  </p>
                </div>

                <div className="flex items-center gap-6 flex-shrink-0">
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-900">{resource.downloads}</div>
                    <div className="text-xs text-gray-500">downloads</div>
                  </div>

                  <Button className="btn-primary text-white text-sm px-6">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">42</div>
            <div className="text-sm text-gray-600">Templates</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">38</div>
            <div className="text-sm text-gray-600">Guides</div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Video className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">24</div>
            <div className="text-sm text-gray-600">Video Courses</div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">31</div>
            <div className="text-sm text-gray-600">Tools</div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Get unlimited access</h2>
            <p className="text-blue-50 mb-8 text-lg max-w-2xl mx-auto">
              Sign up to unlock all premium resources, templates, and tools. Everything you need to build your startup.
            </p>
            
            <Link href="/auth">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-base font-semibold">
                Start free trial
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-900">Incubation Hub</span>
              </div>
              <p className="text-sm text-gray-600">
                Empowering the next generation of founders to build, scale, and succeed.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-4 text-sm">Platform</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/programs" className="hover:text-blue-600 transition-colors">Programs</Link></li>
                <li><Link href="/mentors" className="hover:text-blue-600 transition-colors">Mentors</Link></li>
                <li><Link href="/resources" className="hover:text-blue-600 transition-colors">Resources</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-4 text-sm">Company</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-4 text-sm">Legal</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-300 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Incubation Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}