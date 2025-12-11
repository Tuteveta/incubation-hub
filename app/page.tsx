"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, FolderOpen, TrendingUp, Sparkles, Shield, CheckCircle, Star, Globe, Rocket, Award } from "lucide-react";

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

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(37, 99, 235, 0.3); }
          50% { box-shadow: 0 0 40px rgba(37, 99, 235, 0.5); }
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

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .hero-gradient {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 25%, #1e40af 50%, #2563eb 75%, #3b82f6 100%);
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
            radial-gradient(circle at 80% 80%, rgba(56, 189, 248, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 40%);
          pointer-events: none;
        }

        .hero-gradient::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.5;
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
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

        .quick-panel {
          background: linear-gradient(135deg, #ffffff 0%, #fafbfc 100%);
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .icon-wrapper {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          transition: all 0.3s ease;
        }

        .feature-card:hover .icon-wrapper {
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          transform: scale(1.1);
        }

        .btn-primary {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          box-shadow: 0 4px 14px 0 rgba(37, 99, 235, 0.4);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
          box-shadow: 0 6px 20px 0 rgba(37, 99, 235, 0.5);
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          box-shadow: 0 4px 14px 0 rgba(249, 115, 22, 0.4);
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
          box-shadow: 0 6px 20px 0 rgba(249, 115, 22, 0.5);
          transform: translateY(-2px);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .testimonial-card {
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
          border: 1px solid #e2e8f0;
        }

        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        .delay-500 { animation-delay: 0.5s; opacity: 0; }
      `}</style>

      {/* TOP NAV - Simplified */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">PNG Incubation Hub</span>
                <p className="text-xs text-gray-500 -mt-1">Empowering Founders</p>
              </div>
            </Link>

            <div className="flex items-center gap-3">
              <Link href="/auth">
                <Button variant="ghost" className="text-sm font-semibold text-gray-700 hover:text-blue-600">
                  Sign in
                </Button>
              </Link>
              <Link href="/auth">
                <Button className="btn-primary text-white text-sm font-semibold px-6 py-2">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium animate-fade-in-up">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Trusted by 500+ startups in PNG & Pacific</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-in-up delay-100">
                Build Your Startup
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-200">
                  From Idea to Scale
                </span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-xl animate-fade-in-up delay-200">
                The all-in-one platform to discover accelerator programs, connect with expert mentors, access resources, and track your startup journey.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-300">
                <Link href="/auth">
                  <Button className="btn-secondary text-white px-8 py-6 text-base font-bold group">
                    Start Free Today
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Link href="/auth">
                  <Button variant="outline" className="px-8 py-6 text-base font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                    Watch Demo
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-6 animate-fade-in-up delay-400">
                <div className="flex -space-x-3">
                  {["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899"].map((color, idx) => (
                    <div key={idx} style={{ backgroundColor: color }} className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {["JD", "SK", "ML", "AR", "TW"][idx]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-sm text-blue-100">Loved by founders</p>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="hidden lg:block animate-scale-in delay-200">
              <div className="quick-panel rounded-3xl p-8 space-y-6 animate-float">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Your Dashboard Awaits</h3>
                    <p className="text-sm text-gray-500">Everything you need in one place</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: FolderOpen, title: "12+ Programs", desc: "Curated accelerators & funding", color: "#3b82f6" },
                    { icon: Users, title: "120+ Mentors", desc: "Industry experts ready to help", color: "#10b981" },
                    { icon: TrendingUp, title: "Real-time Analytics", desc: "Track your startup growth", color: "#f59e0b" },
                    { icon: Award, title: "$50M+ Raised", desc: "By our startup community", color: "#8b5cf6" }
                  ].map((item, idx) => (
                    <Link href="/auth" key={idx}>
                      <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all group cursor-pointer border border-transparent hover:border-gray-200">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                          <item.icon className="w-6 h-6" style={{ color: item.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 text-sm mb-1">{item.title}</div>
                          <div className="text-xs text-gray-500">{item.desc}</div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>

                <Link href="/auth">
                  <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-sm hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl">
                    Access Your Dashboard →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "500+", label: "Active Startups" },
                { value: "120+", label: "Expert Mentors" },
                { value: "$50M+", label: "Funds Raised" },
                { value: "95%", label: "Success Rate" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-4">
              <Zap className="w-4 h-4" />
              Simple 3-Step Process
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of founders who are building successful startups with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: CheckCircle,
                title: "Create Your Account",
                desc: "Sign up for free in seconds. No credit card required to get started.",
                color: "#3b82f6"
              },
              {
                step: "02",
                icon: Globe,
                title: "Explore & Apply",
                desc: "Browse programs, connect with mentors, and access resources tailored to your needs.",
                color: "#10b981"
              },
              {
                step: "03",
                icon: Rocket,
                title: "Launch & Scale",
                desc: "Get accepted, receive funding, and scale your startup with expert guidance.",
                color: "#f59e0b"
              }
            ].map((item, idx) => (
              <Link href="/auth" key={idx}>
                <div className="relative bg-white rounded-2xl p-8 card-hover cursor-pointer border border-gray-200 group">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg" style={{ backgroundColor: item.color }}>
                    {item.step}
                  </div>
                  <div className="pt-4">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${item.color}15` }}>
                      <item.icon className="w-8 h-8" style={{ color: item.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                    <div className="mt-6 flex items-center text-sm font-semibold group-hover:gap-2 gap-1 transition-all" style={{ color: item.color }}>
                      <span>Get started</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-700 mb-4">
            Everything you need to succeed
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for Ambitious Founders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From application to acceleration, manage your entire startup journey in one integrated platform.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: FolderOpen,
              title: "Accelerator Programs",
              desc: "Browse and apply to carefully curated programs matching your stage and industry. Get matched with the right opportunities.",
              color: "#3b82f6"
            },
            {
              icon: Users,
              title: "Expert Mentorship",
              desc: "Book 1-on-1 sessions with experienced founders, investors, and domain experts. Get actionable advice when you need it most.",
              color: "#10b981"
            },
            {
              icon: TrendingUp,
              title: "Growth Analytics",
              desc: "Track KPIs, milestones, and progress metrics. Visualize your journey from validation to product-market fit.",
              color: "#8b5cf6"
            },
            {
              icon: Sparkles,
              title: "Resource Library",
              desc: "Access templates, guides, and best practices. Learn from successful founders and avoid common pitfalls.",
              color: "#f59e0b"
            },
            {
              icon: Shield,
              title: "Secure Platform",
              desc: "Enterprise-grade security for your sensitive documents, pitch decks, and financial information.",
              color: "#6b7280"
            },
            {
              icon: Zap,
              title: "Fast Application",
              desc: "Apply to multiple programs with one profile. Save time with reusable forms and streamlined workflows.",
              color: "#ec4899"
            }
          ].map((feature, idx) => (
            <Link href="/auth" key={idx}>
              <div className="feature-card card-hover rounded-2xl p-8 group cursor-pointer h-full">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${feature.color}15` }}>
                  <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">{feature.desc}</p>
                
                <div className="flex items-center font-semibold text-sm group-hover:gap-2 gap-1 transition-all" style={{ color: feature.color }}>
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Join 500+ founders today
            </div>
            
            <h2 className="text-4xl font-bold mb-4">Ready to Build Something Great?</h2>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Join hundreds of founders who are building the next generation of companies. Start your journey today — it is completely free.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/auth">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-base font-bold shadow-xl">
                  Create Free Account
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/auth">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold">
                  Schedule a Demo
                </Button>
              </Link>
            </div>

            <p className="text-blue-200 text-sm mt-6">
              ✓ No credit card required &nbsp; ✓ Free forever plan &nbsp; ✓ Cancel anytime
            </p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">PNG Incubation Hub</span>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                Empowering the next generation of founders in Papua New Guinea and the Pacific to build, scale, and succeed.
              </p>
              <div className="flex gap-4">
                <Link href="/auth">
                  <Button className="btn-primary text-white text-sm font-semibold px-6">
                    Get Started
                  </Button>
                </Link>
                <Link href="/auth">
                  <Button variant="outline" className="text-sm font-semibold">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-bold text-gray-900 mb-4">Quick Links</h5>
              <ul className="space-y-3 text-gray-600">
                <li><Link href="/auth" className="hover:text-blue-600 transition-colors">Programs</Link></li>
                <li><Link href="/auth" className="hover:text-blue-600 transition-colors">Mentors</Link></li>
                <li><Link href="/auth" className="hover:text-blue-600 transition-colors">Resources</Link></li>
                <li><Link href="/auth" className="hover:text-blue-600 transition-colors">Dashboard</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h5 className="font-bold text-gray-900 mb-4">Legal</h5>
              <ul className="space-y-3 text-gray-600">
                <li><Link href="/auth" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
                <li><Link href="/auth" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/auth" className="hover:text-blue-600 transition-colors">Cookie Policy</Link></li>
                <li><Link href="/auth" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} PNG Incubation Hub. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}