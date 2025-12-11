"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Bell, 
  Lock, 
  Palette, 
  Globe, 
  CreditCard,
  Shield,
  Mail,
  Smartphone,
  Moon,
  Sun,
  Check,
  ChevronRight,
  Camera,
  Save
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    marketing: false,
    updates: true,
  });

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Lock },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "billing", label: "Billing", icon: CreditCard },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Archivo, sans-serif' }}>
          Settings
        </h1>
        <p className="text-gray-600">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:w-64 flex-shrink-0">
          <Card className="border border-gray-200">
            <CardContent className="p-2">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {tab.label}
                      {activeTab === tab.id && (
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-6">
          {/* Profile Settings */}
          {activeTab === "profile" && (
            <>
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    Profile Information
                  </CardTitle>
                  <CardDescription>
                    Update your personal details and public profile
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Avatar */}
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                        JD
                      </div>
                      <button className="absolute -bottom-2 -right-2 p-2 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                        <Camera className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Profile Photo</h3>
                      <p className="text-sm text-gray-500 mb-3">
                        JPG, GIF or PNG. Max size 2MB
                      </p>
                      <div className="flex gap-3">
                        <Button variant="outline" className="text-sm px-3 py-1">Upload</Button>
                        <Button variant="ghost" className="text-sm px-3 py-1 text-red-600 hover:text-red-700 hover:bg-red-50">
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="john@example.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        rows={3}
                        defaultValue="Founder and CEO at TechStartup. Passionate about building products that make a difference."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg shadow-blue-500/25">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </>
          )}

          {/* Notification Settings */}
          {activeTab === "notifications" && (
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg" style={{ fontFamily: 'Archivo, sans-serif' }}>
                  Notification Preferences
                </CardTitle>
                <CardDescription>
                  Choose what notifications you want to receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { id: "email", icon: Mail, title: "Email Notifications", description: "Receive updates and alerts via email" },
                  { id: "push", icon: Smartphone, title: "Push Notifications", description: "Get push notifications on your devices" },
                  { id: "updates", icon: Bell, title: "Product Updates", description: "News about product features and improvements" },
                  { id: "marketing", icon: Globe, title: "Marketing Emails", description: "Receive tips, trends, and promotional content" },
                ].map((item) => {
                  const Icon = item.icon;
                  const isEnabled = notifications[item.id as keyof typeof notifications];
                  return (
                    <div key={item.id} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isEnabled ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setNotifications({ ...notifications, [item.id]: !isEnabled })}
                        className={`relative w-12 h-6 rounded-full transition-colors ${isEnabled ? 'bg-blue-600' : 'bg-gray-300'}`}
                      >
                        <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${isEnabled ? 'left-7' : 'left-1'}`} />
                      </button>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          )}

          {/* Security Settings */}
          {activeTab === "security" && (
            <div className="space-y-6">
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    Password
                  </CardTitle>
                  <CardDescription>
                    Update your password to keep your account secure
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    Update Password
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    Two-Factor Authentication
                  </CardTitle>
                  <CardDescription>
                    Add an extra layer of security to your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-green-50 border border-green-100">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">2FA is enabled</h4>
                        <p className="text-sm text-gray-500">Your account is protected with 2FA</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <Check className="w-5 h-5" />
                      <span className="font-medium">Active</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Appearance Settings */}
          {activeTab === "appearance" && (
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg" style={{ fontFamily: 'Archivo, sans-serif' }}>
                  Theme Preferences
                </CardTitle>
                <CardDescription>
                  Customize how the application looks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: "light", icon: Sun, label: "Light", description: "Default light theme" },
                    { id: "dark", icon: Moon, label: "Dark", description: "Easy on the eyes" },
                    { id: "system", icon: Palette, label: "System", description: "Follow system settings" },
                  ].map((theme) => {
                    const Icon = theme.icon;
                    const isSelected = theme.id === "light";
                    return (
                      <button
                        key={theme.id}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          isSelected 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg mb-3 flex items-center justify-center ${isSelected ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-medium text-gray-900">{theme.label}</h4>
                        <p className="text-sm text-gray-500">{theme.description}</p>
                        {isSelected && (
                          <div className="mt-3 flex items-center gap-1 text-blue-600 text-sm font-medium">
                            <Check className="w-4 h-4" />
                            Selected
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Billing Settings */}
          {activeTab === "billing" && (
            <div className="space-y-6">
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    Current Plan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">Pro Plan</span>
                      <span className="text-2xl font-bold">$49/mo</span>
                    </div>
                    <p className="text-blue-100 mb-4">
                      Full access to all features, unlimited startups, and priority support
                    </p>
                    <div className="flex gap-3">
                      <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                        Change Plan
                      </Button>
                      <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                        Cancel Subscription
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded flex items-center justify-center text-white text-xs font-bold">
                        VISA
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">•••• •••• •••• 4242</h4>
                        <p className="text-sm text-gray-500">Expires 12/2025</p>
                      </div>
                    </div>
                    <Button variant="outline" className="text-sm px-3 py-1">Update</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}