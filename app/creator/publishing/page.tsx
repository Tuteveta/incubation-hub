'use client';

import { useState } from 'react';
import {
  Share2,
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Calendar,
  Clock,
  Image,
  Video,
  FileText,
  Link2,
  Check,
  X,
  Plus,
  ChevronDown,
  Eye,
  Edit2,
  Trash2,
  MoreVertical,
  Send,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Loader,
  TrendingUp,
  Users,
  Heart,
  MessageCircle,
} from 'lucide-react';

export default function PublishingPage() {
  const [activeTab, setActiveTab] = useState('compose');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([
    'youtube',
    'instagram',
  ]);
  const [postContent, setPostContent] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');

  const platforms = [
    {
      id: 'youtube',
      name: 'YouTube',
      icon: Youtube,
      color: 'bg-red-500',
      connected: true,
      followers: '125K',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: Instagram,
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      connected: true,
      followers: '89K',
    },
    {
      id: 'twitter',
      name: 'Twitter/X',
      icon: Twitter,
      color: 'bg-black',
      connected: true,
      followers: '45K',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-blue-600',
      connected: true,
      followers: '32K',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-500',
      connected: false,
      followers: '0',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: Video,
      color: 'bg-black',
      connected: false,
      followers: '0',
    },
  ];

  const scheduledPosts = [
    {
      id: '1',
      content:
        'Just dropped a new tutorial on Advanced React Patterns! 🚀 Learn how to build scalable, maintainable components...',
      platforms: ['youtube', 'instagram', 'twitter'],
      scheduledFor: 'Dec 18, 2024 at 10:00 AM',
      status: 'scheduled',
      media: 'video',
    },
    {
      id: '2',
      content:
        "What's your biggest challenge when learning TypeScript? Let me know in the comments! 👇",
      platforms: ['twitter', 'linkedin'],
      scheduledFor: 'Dec 19, 2024 at 2:00 PM',
      status: 'scheduled',
      media: null,
    },
    {
      id: '3',
      content:
        '5 tips to improve your coding productivity - thread 🧵',
      platforms: ['twitter'],
      scheduledFor: 'Dec 20, 2024 at 9:00 AM',
      status: 'draft',
      media: 'image',
    },
  ];

  const recentPosts = [
    {
      id: '1',
      content:
        'New course announcement: TypeScript Masterclass is now live! 🎉',
      platforms: ['youtube', 'instagram', 'twitter', 'linkedin'],
      publishedAt: 'Dec 15, 2024 at 11:00 AM',
      status: 'published',
      engagement: { likes: 1247, comments: 89, shares: 234 },
    },
    {
      id: '2',
      content:
        'Behind the scenes of how I create my coding tutorials...',
      platforms: ['instagram', 'youtube'],
      publishedAt: 'Dec 14, 2024 at 3:00 PM',
      status: 'published',
      engagement: { likes: 892, comments: 56, shares: 123 },
    },
    {
      id: '3',
      content: 'Quick tip: Use console.table() for better debugging!',
      platforms: ['twitter'],
      publishedAt: 'Dec 13, 2024 at 10:30 AM',
      status: 'failed',
      engagement: { likes: 0, comments: 0, shares: 0 },
    },
  ];

  const togglePlatform = (platformId: string) => {
    const platform = platforms.find((p) => p.id === platformId);
    if (!platform?.connected) return;

    setSelectedPlatforms((prev) =>
      prev.includes(platformId)
        ? prev.filter((p) => p !== platformId)
        : [...prev, platformId]
    );
  };

  const getPlatformIcon = (platformId: string) => {
    const platform = platforms.find((p) => p.id === platformId);
    if (!platform) return null;
    const Icon = platform.icon;
    return <Icon className="w-4 h-4" />;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'scheduled':
        return (
          <span className="flex items-center gap-1 px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs">
            <Clock className="w-3 h-3" />
            Scheduled
          </span>
        );
      case 'draft':
        return (
          <span className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs">
            <Edit2 className="w-3 h-3" />
            Draft
          </span>
        );
      case 'published':
        return (
          <span className="flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">
            <CheckCircle className="w-3 h-3" />
            Published
          </span>
        );
      case 'failed':
        return (
          <span className="flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs">
            <AlertCircle className="w-3 h-3" />
            Failed
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Publishing</h1>
          <p className="text-gray-600 mt-1">
            Manage and schedule your social media content
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Calendar className="w-4 h-4" />
            Calendar View
          </button>
        </div>
      </div>

      {/* Connected Platforms */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Connected Platforms</h3>
          <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
            Manage Connections
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className={`relative p-4 rounded-xl border-2 transition-all ${
                platform.connected
                  ? 'border-gray-200 hover:border-purple-300 cursor-pointer'
                  : 'border-dashed border-gray-200 opacity-60'
              }`}
            >
              {platform.connected && (
                <div className="absolute top-2 right-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
              )}
              <div
                className={`w-10 h-10 ${platform.color} rounded-lg flex items-center justify-center mb-3`}
              >
                <platform.icon className="w-5 h-5 text-white" />
              </div>
              <p className="font-medium text-gray-900 text-sm">{platform.name}</p>
              {platform.connected ? (
                <p className="text-xs text-gray-500 mt-1">
                  {platform.followers} followers
                </p>
              ) : (
                <button className="text-xs text-purple-600 mt-1">Connect</button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-8">
          {[
            { id: 'compose', label: 'Compose' },
            { id: 'scheduled', label: 'Scheduled' },
            { id: 'published', label: 'Published' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? 'text-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"></div>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'compose' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Compose Area */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Create Post</h3>

              {/* Platform Selection */}
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Publish to
                </label>
                <div className="flex flex-wrap gap-2">
                  {platforms
                    .filter((p) => p.connected)
                    .map((platform) => (
                      <button
                        key={platform.id}
                        onClick={() => togglePlatform(platform.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-all ${
                          selectedPlatforms.includes(platform.id)
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`w-5 h-5 ${platform.color} rounded flex items-center justify-center`}>
                          <platform.icon className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm">{platform.name}</span>
                        {selectedPlatforms.includes(platform.id) && (
                          <Check className="w-4 h-4 text-purple-600" />
                        )}
                      </button>
                    ))}
                </div>
              </div>

              {/* Content */}
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Content
                </label>
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="What do you want to share?"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                />
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                      <Image className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                      <Video className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                      <Link2 className="w-5 h-5" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-400">
                    {postContent.length}/280
                  </span>
                </div>
              </div>

              {/* Schedule */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Schedule (optional)
                </label>
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="date"
                      value={scheduleDate}
                      onChange={(e) => setScheduleDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="flex-1 relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="time"
                      value={scheduleTime}
                      onChange={(e) => setScheduleTime(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  Save as Draft
                </button>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <Eye className="w-4 h-4" />
                    Preview
                  </button>
                  <button className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    <Send className="w-4 h-4" />
                    {scheduleDate ? 'Schedule' : 'Publish Now'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Preview</h3>
            <div className="space-y-4">
              {selectedPlatforms.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  <Share2 className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">Select platforms to preview</p>
                </div>
              ) : (
                selectedPlatforms.map((platformId) => {
                  const platform = platforms.find((p) => p.id === platformId);
                  if (!platform) return null;
                  return (
                    <div
                      key={platformId}
                      className="p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className={`w-6 h-6 ${platform.color} rounded flex items-center justify-center`}
                        >
                          <platform.icon className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {platform.name}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {postContent || 'Your content will appear here...'}
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'scheduled' && (
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900">
              Scheduled Posts ({scheduledPosts.length})
            </h3>
          </div>
          <div className="divide-y divide-gray-100">
            {scheduledPosts.map((post) => (
              <div key={post.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {post.platforms.map((p) => (
                        <span
                          key={p}
                          className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                        >
                          {getPlatformIcon(p)}
                        </span>
                      ))}
                      {getStatusBadge(post.status)}
                    </div>
                    <p className="text-gray-800 mb-2">{post.content}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.scheduledFor}
                      </span>
                      {post.media && (
                        <span className="flex items-center gap-1">
                          {post.media === 'video' ? (
                            <Video className="w-4 h-4" />
                          ) : (
                            <Image className="w-4 h-4" />
                          )}
                          {post.media}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-gray-100 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'published' && (
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900">Recent Posts</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {recentPosts.map((post) => (
              <div key={post.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {post.platforms.map((p) => (
                        <span
                          key={p}
                          className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                        >
                          {getPlatformIcon(p)}
                        </span>
                      ))}
                      {getStatusBadge(post.status)}
                    </div>
                    <p className="text-gray-800 mb-2">{post.content}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.publishedAt}
                      </span>
                    </div>
                    {post.status === 'published' && (
                      <div className="flex items-center gap-6 mt-3 pt-3 border-t border-gray-100">
                        <span className="flex items-center gap-1 text-sm text-gray-600">
                          <Heart className="w-4 h-4 text-red-500" />
                          {post.engagement.likes.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-gray-600">
                          <MessageCircle className="w-4 h-4 text-blue-500" />
                          {post.engagement.comments}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-gray-600">
                          <Share2 className="w-4 h-4 text-green-500" />
                          {post.engagement.shares}
                        </span>
                      </div>
                    )}
                    {post.status === 'failed' && (
                      <button className="flex items-center gap-2 mt-3 text-sm text-purple-600 hover:text-purple-700">
                        <RefreshCw className="w-4 h-4" />
                        Retry
                      </button>
                    )}
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
