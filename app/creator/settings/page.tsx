'use client';

import { useState } from 'react';
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Palette,
  Link2,
  Globe,
  Mail,
  Smartphone,
  Key,
  Eye,
  EyeOff,
  Camera,
  Save,
  Check,
  ChevronRight,
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'integrations', label: 'Integrations', icon: Link2 },
    { id: 'appearance', label: 'Appearance', icon: Palette },
  ];

  const notificationSettings = [
    {
      category: 'Email Notifications',
      settings: [
        { id: 'new-student', label: 'New student enrollment', enabled: true },
        { id: 'course-review', label: 'Course reviews', enabled: true },
        { id: 'messages', label: 'Direct messages', enabled: false },
        { id: 'earnings', label: 'Earnings updates', enabled: true },
        { id: 'newsletter', label: 'Platform newsletter', enabled: false },
      ],
    },
    {
      category: 'Push Notifications',
      settings: [
        { id: 'push-student', label: 'New student enrollment', enabled: true },
        { id: 'push-messages', label: 'Direct messages', enabled: true },
        { id: 'push-live', label: 'Live session reminders', enabled: true },
        { id: 'push-comments', label: 'Comments on content', enabled: false },
      ],
    },
  ];

  const connectedPlatforms = [
    { id: 'youtube', name: 'YouTube', icon: Youtube, connected: true, account: '@TechCreator' },
    { id: 'instagram', name: 'Instagram', icon: Instagram, connected: true, account: '@techcreator' },
    { id: 'twitter', name: 'Twitter/X', icon: Twitter, connected: true, account: '@techcreator' },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, connected: false, account: null },
    { id: 'facebook', name: 'Facebook', icon: Facebook, connected: false, account: null },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-64 bg-white rounded-xl shadow-sm p-2">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === tab.id
                    ? 'bg-purple-50 text-purple-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === 'profile' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Profile Settings
              </h2>

              {/* Avatar */}
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                    TC
                  </div>
                  <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                    <Camera className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Profile Photo</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    JPG, PNG or GIF. Max 2MB.
                  </p>
                  <button className="mt-2 text-sm text-purple-600 hover:text-purple-700 font-medium">
                    Upload new photo
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Tech"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Creator"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Display Name
                  </label>
                  <input
                    type="text"
                    defaultValue="TechCreator"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="creator@example.com"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    defaultValue="Full-stack developer and educator passionate about teaching modern web development. Creating courses on React, TypeScript, and Next.js."
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Brief description for your profile. Max 300 characters.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="url"
                      defaultValue="https://techcreator.dev"
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Notification Preferences
              </h2>

              <div className="space-y-8">
                {notificationSettings.map((category) => (
                  <div key={category.category}>
                    <h3 className="font-medium text-gray-900 mb-4">
                      {category.category}
                    </h3>
                    <div className="space-y-4">
                      {category.settings.map((setting) => (
                        <div
                          key={setting.id}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <span className="text-gray-700">{setting.label}</span>
                          <button
                            className={`relative w-12 h-6 rounded-full transition-colors ${
                              setting.enabled ? 'bg-purple-600' : 'bg-gray-300'
                            }`}
                          >
                            <span
                              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                                setting.enabled ? 'left-7' : 'left-1'
                              }`}
                            ></span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  Change Password
                </h2>

                <div className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Update Password
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  Two-Factor Authentication
                </h2>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Two-factor authentication
                      </p>
                      <p className="text-sm text-gray-500">
                        Add an extra layer of security
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                    Enabled
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  Active Sessions
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Globe className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Chrome on MacOS
                        </p>
                        <p className="text-sm text-gray-500">
                          San Francisco, CA • Current session
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Mobile App on iPhone
                        </p>
                        <p className="text-sm text-gray-500">
                          San Francisco, CA • 2 hours ago
                        </p>
                      </div>
                    </div>
                    <button className="text-sm text-red-600 hover:text-red-700">
                      Revoke
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  Current Plan
                </h2>
                <div className="p-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      Premium
                    </span>
                    <span className="text-2xl font-bold">$199/mo</span>
                  </div>
                  <p className="text-white/80 mb-4">
                    Unlimited students, 200GB storage, priority support
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
                      Change Plan
                    </button>
                    <button className="text-sm text-white/80 hover:text-white">
                      Cancel subscription
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  Payment Method
                </h2>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">
                      VISA
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        •••• •••• •••• 4242
                      </p>
                      <p className="text-sm text-gray-500">Expires 12/2025</p>
                    </div>
                  </div>
                  <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                    Update
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  Billing History
                </h2>
                <div className="space-y-3">
                  {[
                    { date: 'Dec 1, 2024', amount: '$199.00', status: 'Paid' },
                    { date: 'Nov 1, 2024', amount: '$199.00', status: 'Paid' },
                    { date: 'Oct 1, 2024', amount: '$199.00', status: 'Paid' },
                  ].map((invoice, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900">{invoice.date}</p>
                        <p className="text-sm text-gray-500">Premium Plan</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-medium text-gray-900">
                          {invoice.amount}
                        </span>
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">
                          {invoice.status}
                        </span>
                        <button className="text-sm text-purple-600 hover:text-purple-700">
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Connected Platforms
              </h2>
              <div className="space-y-4">
                {connectedPlatforms.map((platform) => (
                  <div
                    key={platform.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                        <platform.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {platform.name}
                        </p>
                        {platform.connected ? (
                          <p className="text-sm text-gray-500">
                            {platform.account}
                          </p>
                        ) : (
                          <p className="text-sm text-gray-400">Not connected</p>
                        )}
                      </div>
                    </div>
                    {platform.connected ? (
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                          <Check className="w-3 h-3" />
                          Connected
                        </span>
                        <button className="text-sm text-red-600 hover:text-red-700">
                          Disconnect
                        </button>
                      </div>
                    ) : (
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                        Connect
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Appearance Settings
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Theme</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {['Light', 'Dark', 'System'].map((theme) => (
                      <button
                        key={theme}
                        className={`p-4 border-2 rounded-lg text-center transition-all ${
                          theme === 'Light'
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div
                          className={`w-full h-20 rounded-lg mb-2 ${
                            theme === 'Dark' ? 'bg-gray-800' : 'bg-gray-100'
                          }`}
                        ></div>
                        <span className="text-sm font-medium text-gray-900">
                          {theme}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-4">
                    Accent Color
                  </h3>
                  <div className="flex gap-3">
                    {[
                      'bg-purple-500',
                      'bg-blue-500',
                      'bg-green-500',
                      'bg-orange-500',
                      'bg-pink-500',
                      'bg-indigo-500',
                    ].map((color, index) => (
                      <button
                        key={index}
                        className={`w-10 h-10 ${color} rounded-full ${
                          index === 0 ? 'ring-2 ring-offset-2 ring-purple-500' : ''
                        }`}
                      ></button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-4">
                    Sidebar Position
                  </h3>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 border-2 border-purple-500 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-900">
                        Left
                      </span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-gray-300">
                      <span className="text-sm font-medium text-gray-900">
                        Right
                      </span>
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
