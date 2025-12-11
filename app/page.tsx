"use client";

import Link from "next/link";
import { Button } from "../components/ui/button";
import { ArrowRight, Zap, Users, FolderOpen, TrendingUp, Sparkles, Shield } from "lucide-react";

export default function HomePage() {
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.7s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .hero-gradient {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 25%, #2563eb 50%, #3b82f6 75%, #60a5fa 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(56, 189, 248, 0.15) 0%, transparent 50%);
          pointer-events: none;
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .feature-card {
          position: relative;
          border: 1px solid #e5e7eb;
          background: white;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #fb923c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card:hover::before {
          transform: scaleX(1);
        }

        .stat-card {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border: 1px solid #e2e8f0;
        }

        .quick-panel {
          background: linear-gradient(135deg, #ffffff 0%, #fafbfc 100%);
          border: 1px solid #e5e7eb;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
        }

        .icon-wrapper {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          transition: all 0.3s ease;
        }

        .feature-card:hover .icon-wrapper {
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          transform: scale(1.05);
        }

        .btn-primary {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.3), 0 2px 4px -1px rgba(37, 99, 235, 0.2);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
          box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.4), 0 4px 6px -2px rgba(37, 99, 235, 0.3);
          transform: translateY(-2px);
        }

        .section-border {
          border-bottom: 1px solid #f1f5f9;
        }

        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
      `}</style>

      {/* TOP NAV */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">PNG Incubation Hub</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <Link href="/programs" className="hover:text-blue-600 transition-colors">Programs</Link>
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

      {/* HERO SECTION */}
      <header className="hero-gradient text-white section-border">
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium animate-fade-in-up">
                <Zap className="w-4 h-4 text-orange-300" />
                <span>Trusted by 500+ startups</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up delay-100">
                Launch, Learn,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-200">
                  Accelerate Growth
                </span>
              </h1>

              <p className="text-xl text-blue-50 leading-relaxed max-w-xl animate-fade-in-up delay-200">
                Your central platform to discover accelerator programs, connect with mentors, and manage your startup journey from idea to scale.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-300">
                <Link href="/auth">
                  <Button className="btn-primary text-white px-8 py-6 text-base font-semibold group">
                    Start your journey
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Link href="/programs">
                  <Button variant="outline" className="px-8 py-6 text-base font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                    Explore programs
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up delay-400">
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-blue-100 text-sm">Active Startups</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">120+</div>
                  <div className="text-blue-100 text-sm">Expert Mentors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$50M+</div>
                  <div className="text-blue-100 text-sm">Funds Raised</div>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="hidden lg:block animate-scale-in delay-200">
              <div className="quick-panel rounded-2xl p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900">Platform Features</h3>
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>

                <div className="space-y-4">
                  {[
                    { icon: FolderOpen, title: "Curated Programs", desc: "Access top accelerator & funding opportunities" },
                    { icon: Users, title: "1:1 Mentorship", desc: "Connect with industry experts in your domain" },
                    { icon: TrendingUp, title: "Progress Tracking", desc: "Monitor milestones and growth metrics" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <item.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm mb-1">{item.title}</div>
                        <div className="text-xs text-gray-600 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Shield className="w-4 h-4" />
                    <span>Secure & private platform for founders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURES SECTION */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-700 mb-4">
            Everything you need to succeed
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for ambitious founders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From application to acceleration, manage your entire startup journey in one integrated platform.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: FolderOpen,
              title: "Accelerator Programs",
              desc: "Browse and apply to carefully curated programs matching your stage and industry. Get matched with the right opportunities.",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              icon: Users,
              title: "Expert Mentorship",
              desc: "Book sessions with experienced founders, investors, and domain experts. Get actionable advice when you need it most.",
              gradient: "from-orange-500 to-amber-500"
            },
            {
              icon: TrendingUp,
              title: "Growth Analytics",
              desc: "Track KPIs, milestones, and progress metrics. Visualize your journey from validation to product-market fit.",
              gradient: "from-purple-500 to-pink-500"
            },
            {
              icon: Sparkles,
              title: "Resource Library",
              desc: "Access templates, guides, and best practices. Learn from successful founders and avoid common pitfalls.",
              gradient: "from-green-500 to-emerald-500"
            },
            {
              icon: Shield,
              title: "Secure Platform",
              desc: "Enterprise-grade security for your sensitive documents, pitch decks, and financial information.",
              gradient: "from-gray-700 to-gray-900"
            },
            {
              icon: Zap,
              title: "Fast Application",
              desc: "Apply to multiple programs with one profile. Save time with reusable forms and streamlined workflows.",
              gradient: "from-red-500 to-rose-500"
            }
          ].map((feature, idx) => (
            <div key={idx} className="feature-card card-hover rounded-xl p-8 group">
              <div className={`icon-wrapper w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7 text-blue-600" />
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
              
              <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to accelerate your startup?</h2>
            <p className="text-blue-50 mb-8 text-lg max-w-2xl mx-auto">
              Join hundreds of founders who are building the next generation of companies. Start your journey today.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/auth">
                <Button variant="outline" className="text-black-600 hover:bg-blue-50 px-8 py-6 text-base font-semibold">
                  Create free account
                </Button>
              </Link>
              <Link href="/programs">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold">
                  Browse programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
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

            {/* Links */}
            <div>
              <h5 className="font-semibold text-gray-900 mb-4 text-sm">Platform</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/programs" className="hover:text-blue-600 transition-colors">Programs</Link></li>
                <li><Link href="/mentors" className="hover:text-blue-600 transition-colors">Mentors</Link></li>
                <li><Link href="/resources" className="hover:text-blue-600 transition-colors">Resources</Link></li>
                <li><Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-4 text-sm">Company</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
                <li><Link href="/careers" className="hover:text-blue-600 transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-4 text-sm">Legal</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/cookies" className="hover:text-blue-600 transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Incubation Hub. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
              <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-blue-600 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}