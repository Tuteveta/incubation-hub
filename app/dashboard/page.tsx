"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, GraduationCap, UserCircle, TrendingUp, ArrowRight, Plus, Calendar, BarChart3 } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

type ColorType = "blue" | "green" | "purple" | "orange";

interface MetricType {
  id: string;
  title: string;
  value: number;
  change: string;
  trend: string;
  icon: any;
  color: ColorType;
}

export default function DashboardPage() {
  // Sample metrics with trends
  const metrics: MetricType[] = [
    { 
      id: "startups", 
      title: "Active Startups", 
      value: 124, 
      change: "+12.5%",
      trend: "up",
      icon: Briefcase,
      color: "blue"
    },
    { 
      id: "programs", 
      title: "Programs", 
      value: 8, 
      change: "+2 new",
      trend: "up",
      icon: GraduationCap,
      color: "green"
    },
    { 
      id: "mentors", 
      title: "Active Mentors", 
      value: 22, 
      change: "+3 this month",
      trend: "up",
      icon: Users,
      color: "purple"
    },
    { 
      id: "users", 
      title: "Total Users", 
      value: 468, 
      change: "+18.2%",
      trend: "up",
      icon: UserCircle,
      color: "orange"
    },
  ];

  const colorMap: Record<ColorType, {
    gradient: string;
    bg: string;
    text: string;
    border: string;
  }> = {
    blue: {
      gradient: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200"
    },
    green: {
      gradient: "from-green-500 to-emerald-500",
      bg: "bg-green-50",
      text: "text-green-600",
      border: "border-green-200"
    },
    purple: {
      gradient: "from-purple-500 to-violet-500",
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200"
    },
    orange: {
      gradient: "from-orange-500 to-amber-500",
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-200"
    }
  };

  // Sample recent activities
  const recentActivities = [
    { id: 1, text: "New startup application submitted", time: "2 minutes ago", type: "info" },
    { id: 2, text: "Mentor session completed", time: "1 hour ago", type: "success" },
    { id: 3, text: "Program deadline approaching", time: "3 hours ago", type: "warning" },
    { id: 4, text: "New user registered", time: "5 hours ago", type: "info" },
  ];

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

        .metric-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e5e7eb;
        }

        .metric-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: #d1d5db;
        }

        .stat-card {
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card:hover::before {
          transform: scaleX(1);
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

        .chart-card {
          background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
          border: 1px solid #e5e7eb;
        }

        .fade-in {
          animation: fadeIn 0.5s ease-in;
        }

        .fade-in-up {
          animation: fadeInUp 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
      `}</style>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Welcome back! Here&apos;s what&apos;s happening today.</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button className="btn-primary text-white font-semibold group">
            <Plus className="w-4 h-4 mr-2" />
            New Program
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="font-semibold">
            <Briefcase className="w-4 h-4 mr-2" />
            Add Startup
          </Button>
          <Button variant="outline" className="font-semibold">
            <BarChart3 className="w-4 h-4 mr-2" />
            Reports
          </Button>
        </div>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const colors = colorMap[metric.color];
          const IconComponent = metric.icon;
          
          return (
            <div 
              key={metric.id} 
              className={`fade-in-up stagger-${index + 1}`}
            >
              <Card className={`metric-card stat-card before:bg-gradient-to-r before:${colors.gradient}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className={`flex items-center gap-1 px-2 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-semibold`}>
                      <TrendingUp className="w-3 h-3" />
                      <span>{metric.change}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 font-medium">{metric.title}</p>
                    <p className="text-3xl font-bold text-gray-900">
                      <CountUp end={metric.value} duration={2} separator="," />
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Charts & Activity Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Activity Chart Placeholder */}
        <Card className="lg:col-span-2 chart-card">
          <CardHeader className="border-b border-gray-200 pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold text-gray-900">Startup Activity Overview</CardTitle>
                <p className="text-sm text-gray-500 mt-1">Monthly growth and engagement metrics</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="text-xs px-3 py-1">
                  Last 7 days
                </Button>
                <Button variant="outline" className="text-xs px-3 py-1">
                  Last 30 days
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-400">Chart component will be displayed here</p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="chart-card">
          <CardHeader className="border-b border-gray-200 pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold text-gray-900">Recent Activity</CardTitle>
              <Button variant="ghost" className="text-xs px-3 py-1 text-blue-600 hover:text-blue-700">
                View all
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'success' ? 'bg-green-500' :
                    activity.type === 'warning' ? 'bg-orange-500' :
                    'bg-blue-500'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 font-medium">{activity.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions / Additional Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="metric-card bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Active</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Applications</h3>
            <p className="text-3xl font-bold text-blue-600 mb-2">34</p>
            <p className="text-xs text-gray-600">Pending review this week</p>
          </CardContent>
        </Card>

        <Card className="metric-card bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">Live</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Sessions</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">12</p>
            <p className="text-xs text-gray-600">Mentor sessions this week</p>
          </CardContent>
        </Card>

        <Card className="metric-card bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">+28%</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Growth Rate</h3>
            <p className="text-3xl font-bold text-purple-600 mb-2">92%</p>
            <p className="text-xs text-gray-600">Compared to last quarter</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}