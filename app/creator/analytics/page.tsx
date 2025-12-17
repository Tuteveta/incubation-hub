'use client';

import { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Eye,
  Clock,
  Play,
  Download,
  Calendar,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
} from 'lucide-react';

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const metrics = [
    {
      id: 'revenue',
      label: 'Total Revenue',
      value: '$12,847',
      change: '+23.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'students',
      label: 'Total Students',
      value: '2,847',
      change: '+12.3%',
      trend: 'up',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 'views',
      label: 'Content Views',
      value: '48.2K',
      change: '+8.7%',
      trend: 'up',
      icon: Eye,
      color: 'from-purple-500 to-violet-600',
    },
    {
      id: 'watchTime',
      label: 'Watch Time',
      value: '1,247 hrs',
      change: '-2.1%',
      trend: 'down',
      icon: Clock,
      color: 'from-orange-500 to-amber-600',
    },
  ];

  const revenueData = [
    { month: 'Jul', revenue: 4200, students: 180 },
    { month: 'Aug', revenue: 5100, students: 220 },
    { month: 'Sep', revenue: 4800, students: 195 },
    { month: 'Oct', revenue: 6200, students: 280 },
    { month: 'Nov', revenue: 7500, students: 320 },
    { month: 'Dec', revenue: 8400, students: 380 },
  ];

  const maxRevenue = Math.max(...revenueData.map((d) => d.revenue));

  const topCourses = [
    {
      title: 'Advanced React Patterns',
      students: 847,
      revenue: '$4,235',
      rating: 4.9,
      completion: 78,
    },
    {
      title: 'TypeScript Masterclass',
      students: 623,
      revenue: '$3,115',
      rating: 4.8,
      completion: 82,
    },
    {
      title: 'Next.js Full Stack Guide',
      students: 512,
      revenue: '$2,560',
      rating: 4.7,
      completion: 71,
    },
    {
      title: 'Node.js API Development',
      students: 389,
      revenue: '$1,945',
      rating: 4.6,
      completion: 68,
    },
    {
      title: 'CSS Animation Workshop',
      students: 276,
      revenue: '$992',
      rating: 4.8,
      completion: 85,
    },
  ];

  const trafficSources = [
    { source: 'Direct', value: 42, color: 'bg-purple-500' },
    { source: 'Social Media', value: 28, color: 'bg-blue-500' },
    { source: 'Search', value: 18, color: 'bg-green-500' },
    { source: 'Referral', value: 12, color: 'bg-orange-500' },
  ];

  const deviceStats = [
    { device: 'Desktop', icon: Monitor, value: 58, sessions: '28.4K' },
    { device: 'Mobile', icon: Smartphone, value: 34, sessions: '16.7K' },
    { device: 'Tablet', icon: Tablet, value: 8, sessions: '3.9K' },
  ];

  const geographyData = [
    { country: 'United States', students: 1247, percentage: 43.8 },
    { country: 'United Kingdom', students: 423, percentage: 14.9 },
    { country: 'Germany', students: 312, percentage: 11.0 },
    { country: 'Canada', students: 287, percentage: 10.1 },
    { country: 'Australia', students: 198, percentage: 7.0 },
    { country: 'Others', students: 380, percentage: 13.2 },
  ];

  const engagementMetrics = [
    { label: 'Avg. Session Duration', value: '24m 32s', change: '+5.2%' },
    { label: 'Bounce Rate', value: '23.4%', change: '-2.8%' },
    { label: 'Course Completion', value: '76.2%', change: '+4.1%' },
    { label: 'Repeat Viewers', value: '68.5%', change: '+7.3%' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">
            Track your performance and growth
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="12m">Last 12 months</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            onClick={() => setSelectedMetric(metric.id)}
            className={`bg-white rounded-xl p-5 cursor-pointer transition-all border-2 ${
              selectedMetric === metric.id
                ? 'border-purple-500 shadow-lg'
                : 'border-transparent shadow-sm hover:shadow-md'
            }`}
          >
            <div className="flex items-start justify-between">
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center`}
              >
                <metric.icon className="w-5 h-5 text-white" />
              </div>
              <div
                className={`flex items-center gap-1 text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {metric.trend === 'up' ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {metric.change}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              <p className="text-sm text-gray-500 mt-1">{metric.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-gray-900">Revenue Overview</h3>
              <p className="text-sm text-gray-500">Monthly revenue trends</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-gray-600">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-gray-600">Students</span>
              </div>
            </div>
          </div>

          {/* Simple Bar Chart */}
          <div className="h-64 flex items-end justify-between gap-4">
            {revenueData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex gap-1 items-end justify-center h-48">
                  <div
                    className="w-1/3 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-sm transition-all hover:opacity-80"
                    style={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
                    title={`Revenue: $${data.revenue}`}
                  ></div>
                  <div
                    className="w-1/3 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm transition-all hover:opacity-80"
                    style={{ height: `${(data.students / 400) * 100}%` }}
                    title={`Students: ${data.students}`}
                  ></div>
                </div>
                <span className="text-sm text-gray-500">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-6">Traffic Sources</h3>
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{source.source}</span>
                  <span className="text-sm font-medium text-gray-900">
                    {source.value}%
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${source.color} rounded-full transition-all`}
                    style={{ width: `${source.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Device Stats */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h4 className="font-medium text-gray-900 mb-4">Device Breakdown</h4>
            <div className="space-y-3">
              {deviceStats.map((device, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <device.icon className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-700">{device.device}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {device.value}%
                    </p>
                    <p className="text-xs text-gray-500">{device.sessions}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Courses */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-900">Top Performing Courses</h3>
            <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {topCourses.map((course, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-purple-600">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{course.title}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-gray-500">
                        {course.students} students
                      </span>
                      <span className="text-xs text-gray-500">
                        ⭐ {course.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{course.revenue}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${course.completion}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">
                      {course.completion}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Geography */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-900">Student Geography</h3>
            <Globe className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {geographyData.map((country, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{country.country}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-500 rounded-full"
                      style={{ width: `${country.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-16 text-right">
                    {country.students.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Engagement Metrics */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h4 className="font-medium text-gray-900 mb-4">
              Engagement Metrics
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {engagementMetrics.map((metric, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">{metric.label}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="font-semibold text-gray-900">{metric.value}</p>
                    <span
                      className={`text-xs ${
                        metric.change.startsWith('+')
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {metric.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
