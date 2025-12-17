'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Save,
  Eye,
  Settings,
  Upload,
  Plus,
  Trash2,
  GripVertical,
  Video,
  FileText,
  HelpCircle,
  Image,
  Link as LinkIcon,
  Code,
  List,
  CheckSquare,
  Clock,
  DollarSign,
  Users,
  Tag,
  Globe,
  Lock,
  ChevronDown,
  ChevronUp,
  Play,
  File,
  X,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ListOrdered,
} from 'lucide-react';

export default function NewContentPage() {
  const [contentType, setContentType] = useState<'course' | 'lesson' | 'resource'>('course');
  const [activeTab, setActiveTab] = useState<'content' | 'curriculum' | 'pricing' | 'settings'>('content');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [promoVideo, setPromoVideo] = useState<string | null>(null);
  const [pricingType, setPricingType] = useState<'free' | 'paid' | 'subscription'>('paid');
  const [price, setPrice] = useState('49.99');
  const [visibility, setVisibility] = useState<'public' | 'private' | 'unlisted'>('public');
  const [expandedSections, setExpandedSections] = useState<string[]>(['section-1']);

  const [sections, setSections] = useState([
    {
      id: 'section-1',
      title: 'Getting Started',
      lessons: [
        { id: 'lesson-1', title: 'Welcome to the Course', type: 'video', duration: '5:30' },
        { id: 'lesson-2', title: 'Course Overview', type: 'video', duration: '8:15' },
        { id: 'lesson-3', title: 'Setting Up Your Environment', type: 'text', duration: '10 min read' },
      ],
    },
    {
      id: 'section-2',
      title: 'Core Concepts',
      lessons: [
        { id: 'lesson-4', title: 'Understanding the Basics', type: 'video', duration: '15:20' },
        { id: 'lesson-5', title: 'Practice Exercise', type: 'quiz', duration: '10 questions' },
      ],
    },
  ]);

  const categories = [
    'Web Development',
    'Mobile Development',
    'Data Science',
    'Machine Learning',
    'Design',
    'Business',
    'Marketing',
    'Photography',
    'Music',
    'Personal Development',
  ];

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const addSection = () => {
    const newSection = {
      id: `section-${Date.now()}`,
      title: 'New Section',
      lessons: [],
    };
    setSections([...sections, newSection]);
    setExpandedSections([...expandedSections, newSection.id]);
  };

  const addLesson = (sectionId: string) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              lessons: [
                ...section.lessons,
                {
                  id: `lesson-${Date.now()}`,
                  title: 'New Lesson',
                  type: 'video',
                  duration: '0:00',
                },
              ],
            }
          : section
      )
    );
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'text':
        return <FileText className="w-4 h-4" />;
      case 'quiz':
        return <CheckSquare className="w-4 h-4" />;
      default:
        return <File className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/creator/content"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                {title || 'Untitled Course'}
              </h1>
              <p className="text-sm text-gray-500">Draft • Last saved 2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Preview
            </button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Draft
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
              Publish Course
            </button>
          </div>
        </div>
      </div>

      {/* Content Type Selector */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 mr-2">Content Type:</span>
          {(['course', 'lesson', 'resource'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setContentType(type)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                contentType === type
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 px-6">
        <div className="flex gap-8">
          {(['content', 'curriculum', 'pricing', 'settings'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 border-b-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-8 px-6">
        {/* Content Tab */}
        {activeTab === 'content' && (
          <div className="space-y-8">
            {/* Basic Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Basic Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Title *
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g., Complete React Developer Course"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Short Description *
                  </label>
                  <input
                    type="text"
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                    placeholder="A brief summary of your course (max 150 characters)"
                    maxLength={150}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-400 mt-1">{shortDescription.length}/150 characters</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Description *
                  </label>
                  {/* Rich Text Editor Toolbar */}
                  <div className="border border-gray-200 rounded-t-lg bg-gray-50 px-3 py-2 flex items-center gap-1">
                    <button className="p-1.5 hover:bg-gray-200 rounded">
                      <Bold className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-200 rounded">
                      <Italic className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-200 rounded">
                      <Underline className="w-4 h-4 text-gray-600" />
                    </button>
                    <div className="w-px h-5 bg-gray-300 mx-2" />
                    <button className="p-1.5 hover:bg-gray-200 rounded">
                      <AlignLeft className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-200 rounded">
                      <AlignCenter className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-200 rounded">
                      <AlignRight className="w-4 h-4 text-gray-600" />
                    </button>
                    <div className="w-px h-5 bg-gray-300 mx-2" />
                    <button className="p-1.5 hover:bg-gray-200 rounded">
                      <List className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-200 rounded">
                      <ListOrdered className="w-4 h-4 text-gray-600" />
                    </button>
                    <div className="w-px h-5 bg-gray-300 mx-2" />
                    <button className="p-1.5 hover:bg-gray-200 rounded">
                      <LinkIcon className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-200 rounded">
                      <Image className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-200 rounded">
                      <Code className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe what students will learn, prerequisites, and who this course is for..."
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-200 border-t-0 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tags
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
                        placeholder="Add tags..."
                        className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <button
                        onClick={handleAddTag}
                        className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                      >
                        <Plus className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm flex items-center gap-1"
                          >
                            {tag}
                            <button
                              onClick={() => handleRemoveTag(tag)}
                              className="hover:text-purple-900"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Media */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Media</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Thumbnail *
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-purple-400 transition-colors cursor-pointer">
                    {thumbnail ? (
                      <div className="relative">
                        <img
                          src={thumbnail}
                          alt="Thumbnail"
                          className="w-full h-40 object-cover rounded-lg"
                        />
                        <button
                          onClick={() => setThumbnail(null)}
                          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Image className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          Drag & drop or click to upload
                        </p>
                        <p className="text-xs text-gray-400">
                          PNG, JPG up to 2MB (1280x720 recommended)
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Promotional Video
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-purple-400 transition-colors cursor-pointer">
                    {promoVideo ? (
                      <div className="relative">
                        <div className="w-full h-40 bg-gray-900 rounded-lg flex items-center justify-center">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                        <button
                          onClick={() => setPromoVideo(null)}
                          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Video className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          Drag & drop or click to upload
                        </p>
                        <p className="text-xs text-gray-400">
                          MP4, MOV up to 500MB (2-5 min recommended)
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Curriculum Tab */}
        {activeTab === 'curriculum' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Course Curriculum</h2>
                <p className="text-sm text-gray-500">Organize your course content into sections and lessons</p>
              </div>
              <button
                onClick={addSection}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Section
              </button>
            </div>

            {sections.map((section, sectionIndex) => (
              <div key={section.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Section Header */}
                <div
                  className="flex items-center justify-between px-6 py-4 bg-gray-50 cursor-pointer"
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="flex items-center gap-3">
                    <GripVertical className="w-5 h-5 text-gray-400 cursor-grab" />
                    <span className="text-sm text-gray-400">Section {sectionIndex + 1}</span>
                    <input
                      type="text"
                      value={section.title}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => {
                        setSections(
                          sections.map((s) =>
                            s.id === section.id ? { ...s, title: e.target.value } : s
                          )
                        );
                      }}
                      className="font-medium text-gray-900 bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-2 py-1"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      {section.lessons.length} lessons
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSections(sections.filter((s) => s.id !== section.id));
                      }}
                      className="p-1.5 hover:bg-gray-200 rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-gray-400" />
                    </button>
                    {expandedSections.includes(section.id) ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>

                {/* Section Content */}
                {expandedSections.includes(section.id) && (
                  <div className="p-6 space-y-3">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lesson.id}
                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg group"
                      >
                        <GripVertical className="w-5 h-5 text-gray-400 cursor-grab" />
                        <div className="p-2 bg-white rounded-lg">
                          {getLessonIcon(lesson.type)}
                        </div>
                        <div className="flex-1">
                          <input
                            type="text"
                            value={lesson.title}
                            onChange={(e) => {
                              setSections(
                                sections.map((s) =>
                                  s.id === section.id
                                    ? {
                                        ...s,
                                        lessons: s.lessons.map((l) =>
                                          l.id === lesson.id
                                            ? { ...l, title: e.target.value }
                                            : l
                                        ),
                                      }
                                    : s
                                )
                              );
                            }}
                            className="w-full font-medium text-gray-900 bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-2 py-1"
                          />
                        </div>
                        <select
                          value={lesson.type}
                          onChange={(e) => {
                            setSections(
                              sections.map((s) =>
                                s.id === section.id
                                  ? {
                                      ...s,
                                      lessons: s.lessons.map((l) =>
                                        l.id === lesson.id
                                          ? { ...l, type: e.target.value }
                                          : l
                                      ),
                                    }
                                  : s
                              )
                            );
                          }}
                          className="text-sm text-gray-600 bg-white border border-gray-200 rounded-lg px-3 py-1.5"
                        >
                          <option value="video">Video</option>
                          <option value="text">Text</option>
                          <option value="quiz">Quiz</option>
                        </select>
                        <span className="text-sm text-gray-400">{lesson.duration}</span>
                        <button
                          onClick={() => {
                            setSections(
                              sections.map((s) =>
                                s.id === section.id
                                  ? {
                                      ...s,
                                      lessons: s.lessons.filter(
                                        (l) => l.id !== lesson.id
                                      ),
                                    }
                                  : s
                              )
                            );
                          }}
                          className="p-1.5 hover:bg-gray-200 rounded opacity-0 group-hover:opacity-100 transition-all"
                        >
                          <Trash2 className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    ))}

                    <button
                      onClick={() => addLesson(section.id)}
                      className="w-full py-3 border-2 border-dashed border-gray-200 rounded-lg text-gray-500 hover:border-purple-400 hover:text-purple-600 transition-colors flex items-center justify-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Add Lesson
                    </button>
                  </div>
                )}
              </div>
            ))}

            {sections.length === 0 && (
              <div className="bg-white rounded-xl p-12 shadow-sm text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <List className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No sections yet
                </h3>
                <p className="text-gray-500 mb-6">
                  Start building your curriculum by adding sections and lessons
                </p>
                <button
                  onClick={addSection}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Add First Section
                </button>
              </div>
            )}
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Pricing Model</h2>
              <div className="grid grid-cols-3 gap-4">
                {(['free', 'paid', 'subscription'] as const).map((type) => (
                  <div
                    key={type}
                    onClick={() => setPricingType(type)}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      pricingType === type
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                        pricingType === type
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {type === 'free' && <Users className="w-5 h-5" />}
                      {type === 'paid' && <DollarSign className="w-5 h-5" />}
                      {type === 'subscription' && <Clock className="w-5 h-5" />}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {type === 'free' && 'Free'}
                      {type === 'paid' && 'One-time Payment'}
                      {type === 'subscription' && 'Subscription'}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {type === 'free' && 'Anyone can access for free'}
                      {type === 'paid' && 'Students pay once for lifetime access'}
                      {type === 'subscription' && 'Recurring monthly or yearly fee'}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {pricingType !== 'free' && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  {pricingType === 'paid' ? 'Set Your Price' : 'Subscription Tiers'}
                </h2>
                {pricingType === 'paid' ? (
                  <div className="max-w-md">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course Price (USD)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        $
                      </span>
                      <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="49.99"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Platform fee: 10% • You'll earn: ${(parseFloat(price || '0') * 0.9).toFixed(2)}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Monthly Price
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            $
                          </span>
                          <input
                            type="number"
                            className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="9.99"
                          />
                        </div>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Yearly Price
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            $
                          </span>
                          <input
                            type="number"
                            className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="99.99"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Promotional Settings</h2>
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 rounded text-purple-600 focus:ring-purple-500" />
                  <div>
                    <p className="font-medium text-gray-900">Enable Coupons</p>
                    <p className="text-sm text-gray-500">Create discount codes for your course</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 rounded text-purple-600 focus:ring-purple-500" />
                  <div>
                    <p className="font-medium text-gray-900">Affiliate Program</p>
                    <p className="text-sm text-gray-500">Let others promote your course for a commission</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 rounded text-purple-600 focus:ring-purple-500" />
                  <div>
                    <p className="font-medium text-gray-900">Bundle Eligible</p>
                    <p className="text-sm text-gray-500">Include this course in bundles with your other courses</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Visibility</h2>
              <div className="space-y-4">
                {(['public', 'private', 'unlisted'] as const).map((vis) => (
                  <label
                    key={vis}
                    className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      visibility === vis
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="visibility"
                      checked={visibility === vis}
                      onChange={() => setVisibility(vis)}
                      className="w-5 h-5 text-purple-600 focus:ring-purple-500"
                    />
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          visibility === vis ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {vis === 'public' && <Globe className="w-5 h-5" />}
                        {vis === 'private' && <Lock className="w-5 h-5" />}
                        {vis === 'unlisted' && <LinkIcon className="w-5 h-5" />}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {vis.charAt(0).toUpperCase() + vis.slice(1)}
                        </p>
                        <p className="text-sm text-gray-500">
                          {vis === 'public' && 'Anyone can find and enroll in this course'}
                          {vis === 'private' && 'Only invited students can access'}
                          {vis === 'unlisted' && 'Only accessible via direct link'}
                        </p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Course Settings</h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Enable Comments</p>
                    <p className="text-sm text-gray-500">Allow students to comment on lessons</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600 cursor-pointer"></div>
                  </div>
                </label>
                <label className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Enable Reviews</p>
                    <p className="text-sm text-gray-500">Allow students to rate and review your course</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600 cursor-pointer"></div>
                  </div>
                </label>
                <label className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Certificate of Completion</p>
                    <p className="text-sm text-gray-500">Award certificates to students who complete the course</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600 cursor-pointer"></div>
                  </div>
                </label>
                <label className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Drip Content</p>
                    <p className="text-sm text-gray-500">Release lessons on a schedule</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600 cursor-pointer"></div>
                  </div>
                </label>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">SEO Settings</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SEO Title
                  </label>
                  <input
                    type="text"
                    placeholder="Title for search engines (optional)"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Description for search engines (optional)"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Custom URL Slug
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">example.com/courses/</span>
                    <input
                      type="text"
                      placeholder="your-course-name"
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
