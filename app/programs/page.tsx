"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Plus, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function ProgramsPage() {
  return (
    <div className="space-y-8">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Archivo', sans-serif;
        }
      `}</style>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Programs</h1>
          <p className="text-gray-600">Manage accelerator and incubator programs</p>
        </div>
        <Button className="bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold">
          <Plus className="w-4 h-4 mr-2" />
          Create Program
        </Button>
      </motion.div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          { name: "Summer Accelerator 2025", status: "Active", startups: 12, duration: "3 months", color: "blue" },
          { name: "AI Innovation Program", status: "Upcoming", startups: 0, duration: "6 months", color: "purple" },
          { name: "FinTech Incubator", status: "Active", startups: 8, duration: "12 months", color: "green" },
          { name: "Healthcare Accelerator", status: "Planning", startups: 0, duration: "4 months", color: "orange" },
        ].map((program, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${program.color}-500 to-${program.color}-600 rounded-xl flex items-center justify-center`}>
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{program.name}</CardTitle>
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mt-1 ${
                        program.status === 'Active' ? 'bg-green-100 text-green-700' :
                        program.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {program.status}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{program.startups} Startups</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{program.duration}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">View Details</Button>
                    <Button variant="outline" className="flex-1">Manage</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Programs", value: "8", color: "blue" },
          { label: "Active Programs", value: "3", color: "green" },
          { label: "Total Startups", value: "45", color: "purple" },
          { label: "Graduation Rate", value: "87%", color: "orange" },
        ].map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className={`text-3xl font-bold text-${stat.color}-600`}>{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}