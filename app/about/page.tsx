"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Users, 
  DollarSign,
  Rocket,
  ArrowRight,
  Heart,
  Eye,
  Zap,
  Users2,
  Mail,
  Handshake,
  HeadphonesIcon
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: Rocket, value: "500+", label: "Active Startups" },
    { icon: Users, value: "120+", label: "Expert Mentors" },
    { icon: DollarSign, value: "$50M+", label: "Total Funding Raised" },
    { icon: Sparkles, value: "25+", label: "Active Programs" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Founder First",
      description: "We prioritize the needs of founders in every decision we make. Your success is our success, and we're here to support you at every stage.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Eye,
      title: "Trust & Transparency",
      description: "Open communication is key. We believe in honest feedback and transparent processes to build lasting relationships.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Zap,
      title: "Move Fast",
      description: "In the startup world, speed matters. We help founders iterate quickly and make decisions with confidence.",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Users2,
      title: "Community Driven",
      description: "Building a supportive ecosystem where founders help founders. Together, we achieve more than we could alone.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
  ];

  const team = [
    {
      initials: "AT",
      name: "Alex Thompson",
      role: "Co-Founder & CEO",
      bio: "Former VC at Andreessen Horowitz. Built and sold two startups. Passionate about helping founders succeed.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      initials: "PP",
      name: "Priya Patel",
      role: "Co-Founder & COO",
      bio: "Operations leader with 10+ years in tech. Scaled teams from early-stage to IPO at multiple startups.",
      color: "from-pink-500 to-rose-600"
    },
    {
      initials: "ML",
      name: "Marcus Lee",
      role: "Head of Programs",
      bio: "Former accelerator director at 500 Startups. Has mentored over 200 startups across 30+ countries.",
      color: "from-green-500 to-emerald-600"
    },
    {
      initials: "SW",
      name: "Sarah Williams",
      role: "Head of Partnerships",
      bio: "Built strategic partnerships across tech and finance. Connects startups with the resources they need.",
      color: "from-orange-500 to-amber-600"
    },
  ];

  const contactCards = [
    {
      icon: Mail,
      title: "General Inquiries",
      email: "hello@incubationhub.com",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Handshake,
      title: "Partnerships",
      email: "partnerships@incubationhub.com",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: HeadphonesIcon,
      title: "Support",
      email: "support@incubationhub.com",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
        * { font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Archivo', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">Incubation Hub</span>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <Link href="/programs" className="hover:text-blue-600 transition-colors">Programs</Link>
              <Link href="/mentors" className="hover:text-blue-600 transition-colors">Mentors</Link>
              <Link href="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
              <Link href="/about" className="text-blue-600">About</Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/auth">
                <Button variant="ghost" className="text-sm font-medium">Sign in</Button>
              </Link>
              <Link href="/auth">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Our Mission
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                Building the future of entrepreneurship
              </h1>

              <p className="text-xl text-gray-700 font-medium mb-6">
                Empowering founders to build the next generation of companies
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                We&apos;re on a mission to democratize access to the resources, mentorship, and networks that every founder needs to succeed — regardless of background or location.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                Incubation Hub was created to break down these barriers. We&apos;re building an ecosystem where any founder, anywhere in the world, can access world-class programs, connect with experienced mentors, and find the resources they need to turn their vision into reality.
              </p>

              <Link href="/programs">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6">
                  Explore programs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-gray-100 bg-white">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
                    <stat.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              The principles that guide everything we do at Incubation Hub
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
                <div className={`w-10 h-10 rounded-lg ${value.bgColor} flex items-center justify-center mb-4`}>
                  <value.icon className={`w-5 h-5 ${value.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Story</h2>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Incubation Hub was born from a simple observation: the traditional startup ecosystem was broken. Access to quality accelerator programs was limited to a select few, mentorship was scattered and inconsistent, and crucial resources were scattered across countless platforms.
              </p>
              
              <p>
                Our founders, having built and scaled multiple startups, experienced these challenges firsthand. They saw talented entrepreneurs struggle not because they lacked great ideas, but because they didn&apos;t have access to the right support at the right time.
              </p>
              
              <p>
                In 2022, we set out to change that. We built a platform that brings together everything a founder needs – from discovering programs to accelerate their growth, to booking sessions with expert mentors, to accessing templates and tools that have helped thousands of entrepreneurs succeed.
              </p>
              
              <p>
                Today, we&apos;re proud to support over 500 startups across 40+ countries, connecting them with 120+ mentors and helping them raise over $50M in funding. But we&apos;re just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Meet the Team</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We&apos;re a team of founders, operators, and startup enthusiasts dedicated to helping entrepreneurs succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Join our community</h2>
            <p className="text-blue-100 mb-8 max-w-lg mx-auto">
              Whether you&apos;re just starting out or scaling fast, we&apos;re here to support you. Join thousands of founders who are building the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-lg text-gray-900 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Link href="/programs">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-8">
                  Browse programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Get in Touch</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Have questions? Want to partner with us? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {contactCards.map((card, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all text-center">
                <div className={`w-10 h-10 rounded-lg ${card.bgColor} flex items-center justify-center mx-auto mb-4`}>
                  <card.icon className={`w-5 h-5 ${card.color}`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                <a href={`mailto:${card.email}`} className="text-sm text-blue-600 hover:underline">
                  {card.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-900">Incubation Hub</span>
              </div>
              <p className="text-sm text-gray-500">Empowering founders to build, scale, and succeed.</p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-4 text-sm">Platform</h5>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="/programs" className="hover:text-blue-600">Programs</Link></li>
                <li><Link href="/mentors" className="hover:text-blue-600">Mentors</Link></li>
                <li><Link href="/resources" className="hover:text-blue-600">Resources</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-4 text-sm">Company</h5>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-4 text-sm">Legal</h5>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="/terms" className="hover:text-blue-600">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Incubation Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}