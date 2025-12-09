"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Search, Book, MessageCircle, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function HelpPage() {
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
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Help & Support</h1>
        <p className="text-gray-600">Find answers and get support</p>
      </motion.div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Book, title: "Documentation", description: "Browse our comprehensive guides", color: "blue" },
          { icon: MessageCircle, title: "Live Chat", description: "Chat with our support team", color: "green" },
          { icon: Mail, title: "Email Support", description: "Send us a message", color: "purple" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Popular Articles */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h2>
        <div className="space-y-4">
          {[
            { title: "Getting Started with Incubation Hub", category: "Getting Started", views: "1.2k" },
            { title: "How to Add a New Startup", category: "Startups", views: "856" },
            { title: "Managing Mentorship Sessions", category: "Mentorship", views: "742" },
            { title: "Creating and Managing Programs", category: "Programs", views: "634" },
            { title: "Understanding Dashboard Analytics", category: "Dashboard", views: "521" },
            { title: "Inviting Team Members", category: "Team", views: "489" },
          ].map((article, i) => (
            <Card key={i} className="hover:bg-gray-50 transition-colors cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{article.title}</h3>
                      <p className="text-sm text-gray-500">{article.category}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{article.views} views</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
        <CardContent className="p-8 text-center">
          <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Still Need Help?</h3>
          <p className="text-gray-600 mb-6">Our support team is here to assist you</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Start Live Chat
            </Button>
            <Button variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}