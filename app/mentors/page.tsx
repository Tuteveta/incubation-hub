"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Plus, Calendar, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function MentorshipPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mentorship</h1>
          <p className="text-gray-600">Connect with mentors and schedule sessions</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold">
          <Plus className="w-4 h-4 mr-2" />
          Add Mentor
        </Button>
      </motion.div>

      {/* Upcoming Sessions */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { mentor: "Sarah Johnson", topic: "Product Strategy", date: "Tomorrow, 2:00 PM", duration: "1 hour" },
              { mentor: "Michael Chen", topic: "Fundraising Tips", date: "Dec 15, 10:00 AM", duration: "45 min" },
              { mentor: "Emily Rodriguez", topic: "Marketing Review", date: "Dec 18, 3:30 PM", duration: "1 hour" },
            ].map((session, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {session.mentor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{session.mentor}</p>
                    <p className="text-sm text-gray-600">{session.topic}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{session.date}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{session.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Available Mentors */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Mentors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Dr. James Wilson", expertise: "AI & Machine Learning", rating: 4.9, sessions: 127 },
            { name: "Lisa Anderson", expertise: "Business Development", rating: 4.8, sessions: 95 },
            { name: "David Kim", expertise: "Financial Planning", rating: 5.0, sessions: 143 },
            { name: "Maria Garcia", expertise: "UI/UX Design", rating: 4.7, sessions: 88 },
            { name: "Robert Taylor", expertise: "Legal & Compliance", rating: 4.9, sessions: 112 },
            { name: "Jennifer Lee", expertise: "Sales & Marketing", rating: 4.8, sessions: 156 },
          ].map((mentor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-bold text-gray-900">{mentor.name}</h3>
                    <p className="text-sm text-gray-600">{mentor.expertise}</p>
                  </div>
                  <div className="flex items-center justify-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{mentor.rating}</span>
                    </div>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-600">{mentor.sessions} sessions</span>
                  </div>
                  <Button variant="outline" className="w-full">Book Session</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}