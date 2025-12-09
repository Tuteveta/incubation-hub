"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Filter, Search, Clock, Users, TrendingUp, DollarSign, Globe, Briefcase, Rocket, Target } from "lucide-react";

export default function ProgramsPage() {
  type ColorType = "blue" | "green" | "purple" | "orange" | "indigo" | "pink";

  const programs: Array<{
    id: number;
    title: string;
    organization: string;
    stage: string;
    duration: string;
    funding: string;
    equity: string;
    startups: number;
    deadline: string;
    focus: string[];
    description: string;
    color: ColorType;
  }> = [
    {
      id: 1,
      title: "Tech Accelerator Program",
      organization: "Innovation Labs",
      stage: "Early Stage",
      duration: "12 weeks",
      funding: "$50K - $150K",
      equity: "5-7%",
      startups: 15,
      deadline: "Jan 15, 2026",
      focus: ["SaaS", "AI/ML", "FinTech"],
      description: "Intensive program for early-stage tech startups with product-market fit. Includes mentorship, workspace, and investor connections.",
      color: "blue"
    },
    {
      id: 2,
      title: "Climate Innovation Fund",
      organization: "Green Ventures",
      stage: "Seed",
      duration: "16 weeks",
      funding: "$100K - $500K",
      equity: "8-10%",
      startups: 10,
      deadline: "Jan 30, 2026",
      focus: ["CleanTech", "Sustainability", "Energy"],
      description: "Supporting startups building solutions for climate change and environmental sustainability.",
      color: "green"
    },
    {
      id: 3,
      title: "Healthcare Innovators",
      organization: "MedTech Partners",
      stage: "Pre-Seed to Seed",
      duration: "20 weeks",
      funding: "$75K - $250K",
      equity: "6-8%",
      startups: 12,
      deadline: "Feb 10, 2026",
      focus: ["HealthTech", "BioTech", "Digital Health"],
      description: "Accelerating healthcare startups with access to clinical partners and regulatory guidance.",
      color: "purple"
    },
    {
      id: 4,
      title: "Social Impact Accelerator",
      organization: "Impact First",
      stage: "Early Stage",
      duration: "14 weeks",
      funding: "$25K - $100K",
      equity: "3-5%",
      startups: 20,
      deadline: "Feb 20, 2026",
      focus: ["Social Impact", "EdTech", "Community"],
      description: "For startups creating positive social change while building sustainable business models.",
      color: "orange"
    },
    {
      id: 5,
      title: "Fintech Innovation Lab",
      organization: "Capital Ventures",
      stage: "Series A Ready",
      duration: "10 weeks",
      funding: "$200K - $1M",
      equity: "4-6%",
      startups: 8,
      deadline: "Mar 1, 2026",
      focus: ["FinTech", "Blockchain", "Payments"],
      description: "Elite program for fintech startups ready to scale with banking and investor partnerships.",
      color: "indigo"
    },
    {
      id: 6,
      title: "Consumer Products Studio",
      organization: "Brand Builders",
      stage: "Pre-Launch to Growth",
      duration: "12 weeks",
      funding: "$30K - $200K",
      equity: "5-8%",
      startups: 15,
      deadline: "Mar 15, 2026",
      focus: ["E-commerce", "DTC", "Consumer"],
      description: "Building the next generation of consumer brands with marketing expertise and retail connections.",
      color: "pink"
    }
  ];

  const colorMap: Record<ColorType, string> = {
    blue: "from-blue-500 to-cyan-500",
    green: "from-green-500 to-emerald-500",
    purple: "from-purple-500 to-violet-500",
    orange: "from-orange-500 to-amber-500",
    indigo: "from-indigo-500 to-blue-500",
    pink: "from-pink-500 to-rose-500"
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

        .program-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e5e7eb;
        }

        .program-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: #d1d5db;
        }

        .badge {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.02em;
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
              <Link href="/programs" className="text-blue-600">Programs</Link>
              <Link href="/mentors" className="hover:text-blue-600 transition-colors">Mentors</Link>
              <Link href="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
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
      <header className="bg-gradient-to-br from-gray-50 to-blue-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-6">
              <Rocket className="w-4 h-4" />
              <span>6 programs currently accepting applications</span>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Accelerator Programs
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover curated accelerator and incubator programs designed to help your startup grow. 
              Connect with the right program for your stage, industry, and goals.
            </p>
          </div>
        </div>
      </header>

      {/* FILTERS & SEARCH */}
      <div className="border-b border-gray-200 bg-white sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search programs by name, focus area, or organization..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filters</span>
              </Button>
              
              <select className="px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Stages</option>
                <option>Pre-Seed</option>
                <option>Seed</option>
                <option>Series A</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* PROGRAMS LIST */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div key={program.id} className="program-card bg-white rounded-xl p-8 group">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[program.color]} flex items-center justify-center mb-4`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">{program.organization}</p>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <span className="badge px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                    {program.stage}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {program.description}
              </p>

              {/* Focus Areas */}
              <div className="flex flex-wrap gap-2 mb-6">
                {program.focus.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Duration</div>
                    <div className="text-sm font-semibold text-gray-900">{program.duration}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Funding</div>
                    <div className="text-sm font-semibold text-gray-900">{program.funding}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Cohort Size</div>
                    <div className="text-sm font-semibold text-gray-900">{program.startups} startups</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Equity</div>
                    <div className="text-sm font-semibold text-gray-900">{program.equity}</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="text-gray-500">Deadline: </span>
                  <span className="font-semibold text-gray-900">{program.deadline}</span>
                </div>

                <Button className="btn-primary text-white text-sm px-6 group/btn">
                  Apply now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Don't see the right program?</h2>
            <p className="text-blue-50 mb-8 text-lg max-w-2xl mx-auto">
              We're constantly adding new programs. Sign up to get notified when programs matching your criteria become available.
            </p>
            
            <Link href="/auth">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-base font-semibold">
                Get notified
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