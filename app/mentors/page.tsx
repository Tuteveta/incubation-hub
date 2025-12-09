"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Filter, Search, Calendar, Star, MessageSquare, Briefcase, Award, Clock, Video, Users } from "lucide-react";

export default function MentorsPage() {
  type ColorType = "blue" | "orange" | "green" | "purple" | "pink" | "indigo";
  type AvailabilityType = "High" | "Medium" | "Low";

  const mentors: Array<{
    id: number;
    name: string;
    title: string;
    image: string;
    expertise: string[];
    experience: string;
    companies: string[];
    rating: number;
    sessions: number;
    rate: string;
    availability: AvailabilityType;
    bio: string;
    color: ColorType;
  }> = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "VP of Product at TechCorp",
      image: "SC",
      expertise: ["Product Strategy", "B2B SaaS", "Go-to-Market"],
      experience: "15 years",
      companies: ["Google", "Stripe", "TechCorp"],
      rating: 4.9,
      sessions: 127,
      rate: "$200/hour",
      availability: "High",
      bio: "Former PM at Google and Stripe. Specialized in helping early-stage B2B SaaS companies find product-market fit and scale.",
      color: "blue"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Serial Entrepreneur & Angel Investor",
      image: "MR",
      expertise: ["Fundraising", "Startup Strategy", "Operations"],
      experience: "20 years",
      companies: ["StartupCo (Exit)", "VentureX (Founder)"],
      rating: 4.8,
      sessions: 203,
      rate: "$250/hour",
      availability: "Medium",
      bio: "Built and exited 3 startups. Now angel investor helping founders navigate fundraising, scaling operations, and exit strategies.",
      color: "orange"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      title: "Healthcare Innovation Lead",
      image: "EW",
      expertise: ["HealthTech", "Regulatory", "Clinical Validation"],
      experience: "12 years",
      companies: ["Mayo Clinic", "HealthAI"],
      rating: 5.0,
      sessions: 89,
      rate: "$300/hour",
      availability: "Low",
      bio: "Clinical researcher turned entrepreneur. Expert in navigating healthcare regulations and building clinical validation studies.",
      color: "green"
    },
    {
      id: 4,
      name: "James Park",
      title: "Head of Engineering at FinanceAI",
      image: "JP",
      expertise: ["Tech Architecture", "Team Building", "AI/ML"],
      experience: "18 years",
      companies: ["Amazon", "Uber", "FinanceAI"],
      rating: 4.9,
      sessions: 156,
      rate: "$225/hour",
      availability: "High",
      bio: "Led engineering teams at Amazon and Uber. Helps startups build scalable tech infrastructure and hire world-class teams.",
      color: "purple"
    },
    {
      id: 5,
      name: "Priya Sharma",
      title: "VP Marketing at GrowthCo",
      image: "PS",
      expertise: ["Growth Marketing", "Brand Strategy", "Content"],
      experience: "10 years",
      companies: ["HubSpot", "Intercom", "GrowthCo"],
      rating: 4.8,
      sessions: 142,
      rate: "$175/hour",
      availability: "High",
      bio: "Growth marketing expert who scaled multiple B2B SaaS companies from $1M to $50M+ ARR through content and demand gen.",
      color: "pink"
    },
    {
      id: 6,
      name: "David Kim",
      title: "CFO & Former VC Partner",
      image: "DK",
      expertise: ["Financial Planning", "VC Relations", "M&A"],
      experience: "16 years",
      companies: ["Sequoia Capital", "FinTech Unicorn"],
      rating: 4.9,
      sessions: 98,
      rate: "$350/hour",
      availability: "Medium",
      bio: "Former VC partner and CFO of a $2B fintech company. Guides founders on financial strategy, fundraising, and M&A.",
      color: "indigo"
    }
  ];

  const colorMap: Record<ColorType, string> = {
    blue: "from-blue-500 to-cyan-500",
    orange: "from-orange-500 to-amber-500",
    green: "from-green-500 to-emerald-500",
    purple: "from-purple-500 to-violet-500",
    pink: "from-pink-500 to-rose-500",
    indigo: "from-indigo-500 to-blue-500"
  };

  const availabilityColor: Record<AvailabilityType, string> = {
    High: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-red-100 text-red-700"
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

        .mentor-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e5e7eb;
        }

        .mentor-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: #d1d5db;
        }

        .avatar {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: 700;
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
              <Link href="/mentors" className="text-blue-600">Mentors</Link>
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
      <header className="bg-gradient-to-br from-gray-50 to-purple-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-sm font-semibold text-purple-700 mb-6">
              <Users className="w-4 h-4" />
              <span>120+ expert mentors available</span>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Expert Mentorship
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Connect with experienced founders, investors, and domain experts who have built and scaled successful companies. 
              Get personalized 1:1 guidance tailored to your startup's specific challenges.
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
                placeholder="Search by name, expertise, or company..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filters</span>
              </Button>
              
              <select className="px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Expertise</option>
                <option>Product</option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Fundraising</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* MENTORS LIST */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="mentor-card bg-white rounded-xl p-8">
              {/* Header */}
              <div className="flex items-start gap-6 mb-6">
                <div className={`avatar bg-gradient-to-br ${colorMap[mentor.color]} flex-shrink-0`}>
                  {mentor.image}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {mentor.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium">{mentor.title}</p>
                    </div>
                    
                    <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-lg">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-bold text-gray-900">{mentor.rating}</span>
                    </div>
                  </div>

                  {/* Companies */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {mentor.companies.map((company, idx) => (
                      <span key={idx} className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {mentor.bio}
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {mentor.expertise.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mb-6 pb-6 border-b border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{mentor.sessions}</div>
                  <div className="text-xs text-gray-500">Sessions</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{mentor.experience}</div>
                  <div className="text-xs text-gray-500">Experience</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{mentor.rate}</div>
                  <div className="text-xs text-gray-500">Hourly Rate</div>
                </div>
                
                <div className="text-center">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${availabilityColor[mentor.availability]}`}>
                    {mentor.availability}
                  </span>
                  <div className="text-xs text-gray-500 mt-1">Available</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button className="btn-primary text-white flex-1 group">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book session
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" className="px-4">
                  <MessageSquare className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How mentorship works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, flexible, and designed to fit your schedule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">1. Find Your Mentor</h3>
              <p className="text-sm text-gray-600">
                Browse mentors by expertise, industry, and availability. Read reviews and choose the perfect match.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">2. Book a Session</h3>
              <p className="text-sm text-gray-600">
                Select a time that works for you. Sessions are typically 30-60 minutes via video call.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">3. Get Expert Advice</h3>
              <p className="text-sm text-gray-600">
                Connect via video, share your challenges, and get actionable insights to move your startup forward.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Become a mentor</h2>
            <p className="text-blue-50 mb-8 text-lg max-w-2xl mx-auto">
              Share your expertise and help the next generation of founders. Apply to join our mentor network.
            </p>
            
            <Link href="/auth">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-base font-semibold">
                Apply as mentor
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