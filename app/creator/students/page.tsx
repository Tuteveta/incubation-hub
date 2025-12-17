'use client';

import { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  Download,
  Mail,
  MoreVertical,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
  BookOpen,
  TrendingUp,
  UserPlus,
  Send,
  Eye,
  Ban,
  Award,
} from 'lucide-react';

export default function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

  const stats = [
    {
      label: 'Total Students',
      value: '2,847',
      change: '+124 this month',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      label: 'Active Learners',
      value: '1,923',
      change: '67.5% engagement',
      icon: TrendingUp,
      color: 'bg-green-500',
    },
    {
      label: 'Avg. Completion',
      value: '76.2%',
      change: '+4.2% vs last month',
      icon: Award,
      color: 'bg-purple-500',
    },
    {
      label: 'New This Week',
      value: '89',
      change: '+12% growth',
      icon: UserPlus,
      color: 'bg-orange-500',
    },
  ];

  const courses = [
    { id: 'all', name: 'All Courses' },
    { id: '1', name: 'Advanced React Patterns' },
    { id: '2', name: 'TypeScript Masterclass' },
    { id: '3', name: 'Next.js Full Stack Guide' },
    { id: '4', name: 'Node.js API Development' },
  ];

  const students = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      avatar: null,
      enrolledCourses: 3,
      completedCourses: 2,
      progress: 78,
      totalSpent: '$149',
      lastActive: '2 hours ago',
      status: 'active',
      joinDate: 'Oct 15, 2024',
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      avatar: null,
      enrolledCourses: 2,
      completedCourses: 1,
      progress: 92,
      totalSpent: '$99',
      lastActive: '1 day ago',
      status: 'active',
      joinDate: 'Sep 28, 2024',
    },
    {
      id: '3',
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      avatar: null,
      enrolledCourses: 4,
      completedCourses: 3,
      progress: 45,
      totalSpent: '$247',
      lastActive: '5 days ago',
      status: 'inactive',
      joinDate: 'Aug 12, 2024',
    },
    {
      id: '4',
      name: 'James Wilson',
      email: 'james.wilson@email.com',
      avatar: null,
      enrolledCourses: 1,
      completedCourses: 0,
      progress: 23,
      totalSpent: '$49',
      lastActive: '3 hours ago',
      status: 'active',
      joinDate: 'Nov 02, 2024',
    },
    {
      id: '5',
      name: 'Lisa Anderson',
      email: 'lisa.anderson@email.com',
      avatar: null,
      enrolledCourses: 5,
      completedCourses: 5,
      progress: 100,
      totalSpent: '$345',
      lastActive: '12 hours ago',
      status: 'completed',
      joinDate: 'Jul 20, 2024',
    },
    {
      id: '6',
      name: 'Robert Taylor',
      email: 'robert.taylor@email.com',
      avatar: null,
      enrolledCourses: 2,
      completedCourses: 1,
      progress: 67,
      totalSpent: '$129',
      lastActive: '2 days ago',
      status: 'active',
      joinDate: 'Oct 08, 2024',
    },
    {
      id: '7',
      name: 'Amanda Martinez',
      email: 'amanda.martinez@email.com',
      avatar: null,
      enrolledCourses: 3,
      completedCourses: 2,
      progress: 89,
      totalSpent: '$197',
      lastActive: '6 hours ago',
      status: 'active',
      joinDate: 'Sep 15, 2024',
    },
    {
      id: '8',
      name: 'David Brown',
      email: 'david.brown@email.com',
      avatar: null,
      enrolledCourses: 1,
      completedCourses: 0,
      progress: 12,
      totalSpent: '$49',
      lastActive: '2 weeks ago',
      status: 'inactive',
      joinDate: 'Nov 10, 2024',
    },
  ];

  const toggleStudentSelection = (id: string) => {
    setSelectedStudents((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const toggleAllStudents = () => {
    if (selectedStudents.length === students.length) {
      setSelectedStudents([]);
    } else {
      setSelectedStudents(students.map((s) => s.id));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'inactive':
        return 'bg-gray-100 text-gray-700';
      case 'completed':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Students</h1>
          <p className="text-gray-600 mt-1">
            Manage and track your student progress
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <Mail className="w-4 h-4" />
            Email All
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div
                className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center`}
              >
                <stat.icon className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              <p className="text-xs text-green-600 mt-2">{stat.change}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search students by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Course Filter */}
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
          >
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Bulk Actions */}
        {selectedStudents.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              {selectedStudents.length} student(s) selected
            </p>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                <Send className="w-4 h-4" />
                Send Message
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                <Download className="w-4 h-4" />
                Export Selected
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedStudents.length === students.length}
                    onChange={toggleAllStudents}
                    className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Courses
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Progress
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Total Spent
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Last Active
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selectedStudents.includes(student.id)}
                      onChange={() => toggleStudentSelection(student.id)}
                      className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-medium text-sm">
                        {getInitials(student.name)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {student.name}
                        </p>
                        <p className="text-sm text-gray-500">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">
                        {student.completedCourses}/{student.enrolledCourses}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            student.progress >= 80
                              ? 'bg-green-500'
                              : student.progress >= 50
                              ? 'bg-yellow-500'
                              : 'bg-red-500'
                          }`}
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">
                        {student.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="font-medium text-gray-900">
                      {student.totalSpent}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        student.status
                      )}`}
                    >
                      {student.status.charAt(0).toUpperCase() +
                        student.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{student.lastActive}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing 1-8 of 2,847 students
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="px-3 py-1 bg-purple-600 text-white rounded-lg text-sm">
              1
            </button>
            <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">
              2
            </button>
            <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">
              3
            </button>
            <span className="text-gray-400">...</span>
            <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-lg text-sm">
              356
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
