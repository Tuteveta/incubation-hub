"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Heart, Users, TrendingUp, Globe, Shield, Zap, Award, Lightbulb, Rocket } from "lucide-react";

export default function AboutPage() {
  type ValueColorType = "pink" | "blue" | "orange" | "purple";

  const values: Array<{
    icon: any;
    title: string;
    description: string;
    color: ValueColorType;
  }> = [
    {
      icon: Heart,
      title: "Founder-First",
      description: "We build everything with founders in mind. Your success is our success, and we're here to support you at every stage.",
      color: "pink"
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Open communication, honest feedback, and complete transparency in everything we do. No hidden agendas.",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Move Fast",
      description: "Startups move at lightning speed, and so do we. Quick decisions, rapid iterations, and continuous improvement.",
      color: "orange"
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Building a supportive ecosystem where founders, mentors, and investors collaborate and grow together.",
      color: "purple"
    }
  ];

  const stats = [
    { number: "500+", label: "Active Startups", icon: Rocket },
    { number: "120+", label: "Expert Mentors", icon: Users },
    { number: "$50M+", label: "Total Funding Raised", icon: TrendingUp },
    { number: "25+", label: "Partner Programs", icon: Award }
  ];

  type ColorType = "blue" | "purple" | "green" | "orange" | "pink";

  const team: Array<{
    name: string;
    role: string;
    image: string;
    bio: string;
    color: ColorType;
  }> = [
    {
      name: "Alex Thompson",
      role: "Co-Founder & CEO",
      image: "AT",
      bio: "Former startup founder (2 exits) and VC. Passionate about helping the next generation of entrepreneurs succeed.",
      color: "blue"
    },
    {
      name: "Priya Patel",
      role: "Co-Founder & COO",
      image: "PP",
      bio: "Scaled operations at 3 tech companies from seed to Series B. Expert in building founder-support infrastructure.",
      color: "purple"
    },
    {
      name: "Marcus Lee",
      role: "Head of Programs",
      image: "ML",
      bio: "15 years in accelerator programs at Y Combinator and Techstars. Connected thousands of startups with resources.",
      color: "green"
    },
    {
      name: "Sarah Williams",
      role: "Head of Community",
      image: "SW",
      bio: "Built and managed founder communities for 10+ years. Creates meaningful connections between entrepreneurs.",
      color: "orange"
    }
  ];

  const colorMap: Record<ColorType, string> = {
    blue: "from-blue-500 to-cyan-500",
    purple: "from-purple-500 to-violet-500",
    green: "from-green-500 to-emerald-500",
    orange: "from-orange-500 to-amber-500",
    pink: "from-pink-500 to-rose-500"
  };

  const iconBgMap: Record<ColorType, string> = {
    blue: "bg-blue-50",
    purple: "bg-purple-50",
    green: "bg-green-50",
    orange: "bg-orange-50",
    pink: "bg-pink-50"
  };

  const iconColorMap: Record<ColorType, string> = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    green: "text-green-600",
    orange: "text-orange-600",
    pink: "text-pink-600"
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

        .value-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .value-card:hover {
          transform: translateY(-4px);
        }

        .team-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e5e7eb;
        }

        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: #d1d5db;
        }

        .avatar {
          width: 120px;
          height: 120px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          font-weight: 700;
          color: white;
        }

        .stat-card {
          background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
          border: 1px solid #e5e7eb;
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
              <Link href="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
              <Link href="/about" className="text-blue-600">About</Link>
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
      <header className="bg-gradient-to-br from-gray-50 to-orange-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-sm font-semibold text-orange-700 mb-6">
              <Lightbulb className="w-4 h-4" />
              <span>Building the future of entrepreneurship</span>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Empowering founders to build the next generation of companies
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to democratize access to the resources, mentorship, and networks 
              that every founder needs to succeed — regardless of background or location.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* MISSION SECTION */}
        <section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-700 mb-6">
                <Target className="w-4 h-4" />
                <span>Our Mission</span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Making startup success accessible to everyone
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We believe that great ideas can come from anywhere, but access to resources shouldn't be a barrier to success. 
                Traditional accelerator programs are limited by geography, network, and availability.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Incubation Hub was created to break down these barriers. We're building a platform where any founder, 
                anywhere in the world, can access world-class programs, connect with experienced mentors, and find the 
                resources they need to turn their vision into reality.
              </p>

              <div className="flex gap-4">
                <Link href="/programs">
                  <Button className="btn-primary text-white px-6 group">
                    Explore programs
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card rounded-xl p-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="value-card">
                <div className={`w-full h-2 bg-gradient-to-r ${colorMap[value.color]} rounded-t-xl`}></div>
                <div className="bg-white border border-gray-200 border-t-0 rounded-b-xl p-6">
                  <div className={`w-12 h-12 ${iconBgMap[value.color]} rounded-xl flex items-center justify-center mb-4`}>
                    <value.icon className={`w-6 h-6 ${iconColorMap[value.color]}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="py-20 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Incubation Hub was born from a simple observation: the traditional startup ecosystem was broken. 
                Access to quality accelerator programs was limited to major tech hubs, mentorship was available only 
                to those with the right networks, and crucial resources were scattered across hundreds of platforms.
              </p>

              <p>
                Our founders, having built and exited multiple startups, experienced these challenges firsthand. 
                They saw talented entrepreneurs struggle not because they lacked great ideas, but because they 
                didn't have access to the right support at the right time.
              </p>

              <p>
                In 2023, we set out to change that. We built a platform that brings together everything a founder 
                needs — from discovering and applying to accelerator programs, to booking sessions with expert mentors, 
                to accessing templates and tools that have helped thousands of startups succeed.
              </p>

              <p>
                Today, we're proud to support over 500 startups across 40+ countries, connecting them with 120+ mentors 
                and helping them raise over $50M in funding. But we're just getting started.
              </p>
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-20 border-t border-gray-200">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're a team of founders, operators, and startup enthusiasts dedicated to helping entrepreneurs succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="team-card bg-white rounded-xl p-6 text-center">
                <div className={`avatar bg-gradient-to-br ${colorMap[member.color]} mx-auto mb-6`}>
                  {member.image}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-blue-600 mb-4">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Join our community</h2>
              <p className="text-blue-50 mb-8 text-lg max-w-2xl mx-auto">
                Whether you're just starting out or scaling fast, we're here to support you. Join thousands of 
                founders who are building the future.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/auth">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-base font-semibold">
                    Get started free
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
        </section>

        {/* CONTACT SECTION */}
        <section className="py-20 border-t border-gray-200">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions? Want to partner with us? We'd love to hear from you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">General Inquiries</h3>
                <a href="mailto:hello@incubationhub.com" className="text-blue-600 hover:underline text-sm">
                  hello@incubationhub.com
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Partnerships</h3>
                <a href="mailto:partnerships@incubationhub.com" className="text-blue-600 hover:underline text-sm">
                  partnerships@incubationhub.com
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
                <a href="mailto:support@incubationhub.com" className="text-blue-600 hover:underline text-sm">
                  support@incubationhub.com
                </a>
              </div>
            </div>
          </div>
        </section>
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