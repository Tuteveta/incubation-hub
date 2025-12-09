"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GraduationCap, Clock, Users, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ProgramsPage() {
  const programs = [
    {
      name: "Summer Accelerator 2025",
      description: "Intensive 3-month program for early-stage startups to accelerate growth",
      duration: "3 months",
      cohortSize: "15 startups",
      startDate: "June 2025",
      features: ["Weekly mentorship", "Funding opportunities", "Demo day presentation", "Workspace access"],
      color: "blue"
    },
    {
      name: "AI Innovation Program",
      description: "Specialized program for AI and machine learning startups",
      duration: "6 months",
      cohortSize: "10 startups",
      startDate: "July 2025",
      features: ["AI/ML expert mentors", "GPU credits", "Research partnerships", "Investor network"],
      color: "purple"
    },
    {
      name: "FinTech Incubator",
      description: "Long-term support for financial technology innovations",
      duration: "12 months",
      cohortSize: "8 startups",
      startDate: "August 2025",
      features: ["Regulatory guidance", "Banking partnerships", "Compliance support", "Market access"],
      color: "green"
    },
    {
      name: "Healthcare Accelerator",
      description: "Program focused on healthcare and medical technology startups",
      duration: "4 months",
      cohortSize: "12 startups",
      startDate: "September 2025",
      features: ["Clinical advisors", "Hospital partnerships", "FDA guidance", "Pilot programs"],
      color: "orange"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
              <Link href="/programs" className="text-blue-600 font-semibold">
                Programs
              </Link>
              <Link href="/mentors" className="text-gray-600 hover:text-gray-900 transition-colors">
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
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Programs</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose from our curated accelerator and incubator programs designed to help your startup thrive
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Expert Mentorship</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Funding Opportunities</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>Network Access</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br from-${program.color}-500 to-${program.color}-600 rounded-xl flex items-center justify-center`}>
                      <GraduationCap className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      {program.startDate}
                    </span>
                  </div>
                  <CardTitle className="text-2xl mb-2">{program.name}</CardTitle>
                  <p className="text-gray-600">{program.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span>{program.cohortSize}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Program Includes:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/auth" className="block">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white group">
                      Apply to Program
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  
                  <p className="text-xs text-center text-gray-500">
                    Sign up required to apply
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Join a Program?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Create an account to apply and get started on your startup journey
          </p>
          <Link href="/auth">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
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