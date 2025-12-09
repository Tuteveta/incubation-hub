"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, Star, Briefcase, ArrowRight, Sparkles, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function MentorsPage() {
  const mentors = [
    {
      name: "Sarah Chen",
      role: "Product Strategy",
      company: "Ex-Google PM",
      expertise: ["Product Management", "Go-to-Market", "User Research"],
      rating: 4.9,
      sessions: 120,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Technical Architecture",
      company: "CTO, TechCorp",
      expertise: ["System Design", "Cloud Infrastructure", "Team Building"],
      rating: 5.0,
      sessions: 95,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      role: "Fundraising Expert",
      company: "Venture Partner",
      expertise: ["Pitch Deck", "Investor Relations", "Due Diligence"],
      rating: 4.8,
      sessions: 150,
      avatar: "EW"
    },
    {
      name: "David Kim",
      role: "Marketing Growth",
      company: "Growth Lead, StartupX",
      expertise: ["Growth Hacking", "SEO/SEM", "Content Strategy"],
      rating: 4.9,
      sessions: 88,
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      role: "Legal & Compliance",
      company: "Startup Attorney",
      expertise: ["Corporate Law", "IP Protection", "Contracts"],
      rating: 5.0,
      sessions: 75,
      avatar: "LT"
    },
    {
      name: "James Park",
      role: "Sales Strategy",
      company: "VP Sales, Enterprise Co",
      expertise: ["B2B Sales", "Enterprise Deals", "Sales Ops"],
      rating: 4.8,
      sessions: 110,
      avatar: "JP"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
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
              <Link href="/mentors" className="text-purple-600 font-semibold">
                Mentors
              </Link>
              <Link href="/resources" className="text-gray-600 hover:text-gray-900 transition-colors">
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
            Meet Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Mentors</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get guidance from industry experts who have been where you are and know how to help you succeed
          </p>
        </motion.div>
      </section>

      {/* Mentors Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {mentor.avatar}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{mentor.name}</CardTitle>
                      <p className="text-sm text-gray-600">{mentor.role}</p>
                      <p className="text-xs text-gray-500">{mentor.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-semibold">{mentor.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{mentor.sessions} sessions</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/auth" className="block">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white group">
                      Book Session
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  
                  <p className="text-xs text-center text-gray-500">
                    Sign up required to book
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Connect with a Mentor?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Sign up now to book 1-on-1 sessions with our expert mentors
          </p>
          <Link href="/auth">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg">
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