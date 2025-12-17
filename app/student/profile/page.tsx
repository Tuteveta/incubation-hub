'use client';

import { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Camera,
  Bell,
  Lock,
  CreditCard,
  Shield,
  Globe,
  Moon,
  Sun,
  Monitor,
  LogOut,
  ChevronRight,
  Check,
  Eye,
  EyeOff,
  Award,
  BookOpen,
  Clock,
  Star,
  Download,
  Trash2,
  Edit2,
  Save,
  X,
  ExternalLink,
} from 'lucide-react';

export default function StudentProfilePage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'security' | 'billing' | 'preferences'>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [profile, setProfile] = useState({
    firstName: 'Alex',
    lastName: 'Thompson',
    email: 'alex.thompson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Passionate learner focused on web development and design. Currently working towards becoming a full-stack developer.',
    website: 'https://alexthompson.dev',
    twitter: '@alexthompson',
    linkedin: 'alexthompson',
  });

  const [notifications, setNotifications] = useState({
    courseUpdates: true,
    newLessons: true,
    instructorMessages: true,
    promotions: false,
    weeklyDigest: true,
    pushNotifications: true,
    emailNotifications: true,
  });

  const achievements = [
    { id: 1, title: 'Fast Learner', description: 'Completed 5 courses in one month', icon: '🚀', earned: true },
    { id: 2, title: 'Dedicated Student', description: '30-day learning streak', icon: '🔥', earned: true },
    { id: 3, title: 'Top Performer', description: 'Scored 100% on 10 quizzes', icon: '⭐', earned: true },
    { id: 4, title: 'Community Helper', description: 'Answered 50 questions', icon: '🤝', earned: false },
    { id: 5, title: 'Course Collector', description: 'Enrolled in 20 courses', icon: '📚', earned: false },
    { id: 6, title: 'Night Owl', description: '100 hours of night learning', icon: '🦉', earned: false },
  ];

  const certificates = [
    { id: 1, course: 'Complete React Developer Course', date: 'Nov 15, 2024', instructor: 'Sarah Johnson' },
    { id: 2, course: 'JavaScript Fundamentals', date: 'Oct 28, 2024', instructor: 'Michael Chen' },
    { id: 3, course: 'CSS Mastery', date: 'Sep 10, 2024', instructor: 'Emily Davis' },
  ];

  const stats = {
    coursesCompleted: 8,
    hoursLearned: 124,
    certificatesEarned: 3,
    currentStreak: 15,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-3xl font-bold">
                AT
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Camera className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-1">{profile.firstName} {profile.lastName}</h1>
              <p className="text-purple-200 mb-3">{profile.email}</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {profile.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Member since Oct 2023
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-2"
          >
            {isEditing ? <X className="w-4 h-4" /> : <Edit2 className="w-4 h-4" />}
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mt-8">
          <div className="bg-white/10 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.coursesCompleted}</p>
                <p className="text-sm text-purple-200">Courses Completed</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.hoursLearned}h</p>
                <p className="text-sm text-purple-200">Hours Learned</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.certificatesEarned}</p>
                <p className="text-sm text-purple-200">Certificates</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.currentStreak}</p>
                <p className="text-sm text-purple-200">Day Streak 🔥</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="flex border-b border-gray-100">
          {(['profile', 'notifications', 'security', 'billing', 'preferences'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="p-6">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      value={profile.firstName}
                      onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={profile.lastName}
                      onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-50 disabled:text-gray-500"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      disabled={!isEditing}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-50 disabled:text-gray-500 resize-none"
                    />
                  </div>
                </div>
                {isEditing && (
                  <div className="mt-4 flex justify-end">
                    <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
                      <Save className="w-4 h-4" />
                      Save Changes
                    </button>
                  </div>
                )}
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
                <div className="grid grid-cols-3 gap-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-xl border-2 ${
                        achievement.earned
                          ? 'border-purple-200 bg-purple-50'
                          : 'border-gray-200 bg-gray-50 opacity-50'
                      }`}
                    >
                      <div className="text-3xl mb-2">{achievement.icon}</div>
                      <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                      <p className="text-sm text-gray-500">{achievement.description}</p>
                      {achievement.earned && (
                        <div className="mt-2 flex items-center gap-1 text-sm text-purple-600">
                          <Check className="w-4 h-4" />
                          Earned
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificates */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Certificates</h3>
                <div className="space-y-3">
                  {certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Award className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{cert.course}</h4>
                          <p className="text-sm text-gray-500">
                            By {cert.instructor} • {cert.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-white rounded-lg transition-colors">
                          <Download className="w-5 h-5 text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-white rounded-lg transition-colors">
                          <ExternalLink className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Notifications</h3>
                <div className="space-y-4">
                  {[
                    { key: 'courseUpdates', label: 'Course Updates', description: 'Get notified when courses you\'re enrolled in are updated' },
                    { key: 'newLessons', label: 'New Lessons', description: 'Receive alerts when new lessons are added' },
                    { key: 'instructorMessages', label: 'Instructor Messages', description: 'Email notifications for messages from instructors' },
                    { key: 'promotions', label: 'Promotions & Offers', description: 'Special deals and promotional content' },
                    { key: 'weeklyDigest', label: 'Weekly Digest', description: 'Summary of your learning progress' },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <p className="font-medium text-gray-900">{item.label}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications[item.key as keyof typeof notifications]}
                          onChange={(e) =>
                            setNotifications({ ...notifications, [item.key]: e.target.checked })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Push Notifications</h3>
                <div className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Enable Push Notifications</p>
                    <p className="text-sm text-gray-500">Receive notifications on your device</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications.pushNotifications}
                      onChange={(e) =>
                        setNotifications({ ...notifications, pushNotifications: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h3>
                <div className="max-w-md space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter current password"
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter new password"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Confirm new password"
                    />
                  </div>
                  <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Update Password
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
                <div className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">2FA Enabled</p>
                      <p className="text-sm text-gray-500">Your account is protected with two-factor authentication</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    Disable
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Sessions</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Monitor className="w-6 h-6 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">MacBook Pro • Chrome</p>
                        <p className="text-sm text-gray-500">San Francisco, CA • Current session</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Active</span>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">iPhone 15 Pro • Safari</p>
                        <p className="text-sm text-gray-500">San Francisco, CA • Last active 2 hours ago</p>
                      </div>
                    </div>
                    <button className="text-red-600 text-sm hover:underline">Revoke</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Billing Tab */}
          {activeTab === 'billing' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Plan</h3>
                <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-purple-200 text-sm">Current Plan</p>
                      <h4 className="text-2xl font-bold">Pro Learner</h4>
                    </div>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Monthly</span>
                  </div>
                  <p className="text-purple-200 mb-4">Unlimited access to all courses and features</p>
                  <div className="flex items-center justify-between">
                    <p className="text-3xl font-bold">$29<span className="text-lg font-normal">/mo</span></p>
                    <button className="px-4 py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                      Upgrade Plan
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
                <div className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">
                      VISA
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Visa ending in 4242</p>
                      <p className="text-sm text-gray-500">Expires 12/2026</p>
                    </div>
                  </div>
                  <button className="text-purple-600 text-sm hover:underline">Update</button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing History</h3>
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Description</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Amount</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        { date: 'Dec 1, 2024', desc: 'Pro Learner - Monthly', amount: '$29.00', status: 'Paid' },
                        { date: 'Nov 1, 2024', desc: 'Pro Learner - Monthly', amount: '$29.00', status: 'Paid' },
                        { date: 'Oct 1, 2024', desc: 'Pro Learner - Monthly', amount: '$29.00', status: 'Paid' },
                      ].map((invoice, index) => (
                        <tr key={index}>
                          <td className="px-4 py-3 text-sm text-gray-900">{invoice.date}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{invoice.desc}</td>
                          <td className="px-4 py-3 text-sm text-gray-900">{invoice.amount}</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                              {invoice.status}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <button className="text-purple-600 text-sm hover:underline">Download</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Appearance</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: 'light', label: 'Light', icon: Sun },
                    { id: 'dark', label: 'Dark', icon: Moon },
                    { id: 'system', label: 'System', icon: Monitor },
                  ].map((theme) => (
                    <button
                      key={theme.id}
                      className={`p-4 border-2 rounded-xl flex flex-col items-center gap-2 transition-all ${
                        theme.id === 'light'
                          ? 'border-purple-600 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <theme.icon className={`w-6 h-6 ${theme.id === 'light' ? 'text-purple-600' : 'text-gray-400'}`} />
                      <span className={theme.id === 'light' ? 'text-purple-600 font-medium' : 'text-gray-600'}>
                        {theme.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Language & Region</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white">
                      <option>English (US)</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white">
                      <option>Pacific Time (PT)</option>
                      <option>Eastern Time (ET)</option>
                      <option>Central Time (CT)</option>
                      <option>UTC</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Preferences</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Autoplay Videos</p>
                      <p className="text-sm text-gray-500">Automatically play the next video in a course</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Show Subtitles</p>
                      <p className="text-sm text-gray-500">Display subtitles by default when available</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-medium text-gray-900">Default Video Quality</p>
                        <p className="text-sm text-gray-500">Choose your preferred video quality</p>
                      </div>
                    </div>
                    <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white">
                      <option>Auto</option>
                      <option>1080p</option>
                      <option>720p</option>
                      <option>480p</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-red-600">Danger Zone</h3>
                <div className="p-4 border border-red-200 rounded-xl bg-red-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Delete Account</p>
                      <p className="text-sm text-gray-500">Permanently delete your account and all data</p>
                    </div>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
                      <Trash2 className="w-4 h-4" />
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
