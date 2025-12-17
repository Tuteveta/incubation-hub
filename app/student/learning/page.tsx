'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Play,
  CheckCircle,
  Lock,
  Clock,
  ChevronDown,
  ChevronRight,
  FileText,
  HelpCircle,
  BookOpen,
  Download,
  MessageSquare,
  Star,
  Award,
  ArrowLeft,
  Settings,
  Volume2,
  Maximize,
  SkipForward,
  SkipBack,
  List,
  X,
  ThumbsUp,
  Flag,
  Share2,
  Bookmark,
} from 'lucide-react';

export default function StudentLearningPage() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [expandedSections, setExpandedSections] = useState(['section-1']);
  const [currentLesson, setCurrentLesson] = useState('lesson-2');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [noteContent, setNoteContent] = useState('');

  const course = {
    title: 'Complete React Developer Course 2024',
    instructor: 'Sarah Johnson',
    progress: 35,
    totalLessons: 48,
    completedLessons: 17,
    currentSection: 'React Fundamentals',
  };

  const sections = [
    {
      id: 'section-1',
      title: 'Getting Started',
      duration: '45 min',
      lessons: [
        { id: 'lesson-1', title: 'Welcome to the Course', type: 'video', duration: '5:30', completed: true, locked: false },
        { id: 'lesson-2', title: 'Course Overview & Setup', type: 'video', duration: '8:15', completed: true, locked: false },
        { id: 'lesson-3', title: 'Introduction Quiz', type: 'quiz', duration: '5 questions', completed: true, locked: false },
      ],
    },
    {
      id: 'section-2',
      title: 'React Fundamentals',
      duration: '2h 15min',
      lessons: [
        { id: 'lesson-4', title: 'What is React?', type: 'video', duration: '12:20', completed: true, locked: false },
        { id: 'lesson-5', title: 'Creating Components', type: 'video', duration: '18:45', completed: false, current: true, locked: false },
        { id: 'lesson-6', title: 'Props and State', type: 'video', duration: '22:10', completed: false, locked: false },
        { id: 'lesson-7', title: 'Component Lifecycle', type: 'text', duration: '15 min read', completed: false, locked: false },
        { id: 'lesson-8', title: 'Practice Exercise', type: 'quiz', duration: '10 questions', completed: false, locked: false },
      ],
    },
    {
      id: 'section-3',
      title: 'React Hooks',
      duration: '3h 30min',
      lessons: [
        { id: 'lesson-9', title: 'Introduction to Hooks', type: 'video', duration: '15:00', completed: false, locked: true },
        { id: 'lesson-10', title: 'useState Hook', type: 'video', duration: '20:30', completed: false, locked: true },
        { id: 'lesson-11', title: 'useEffect Hook', type: 'video', duration: '25:15', completed: false, locked: true },
        { id: 'lesson-12', title: 'Custom Hooks', type: 'video', duration: '30:00', completed: false, locked: true },
      ],
    },
    {
      id: 'section-4',
      title: 'Advanced Patterns',
      duration: '4h 15min',
      lessons: [
        { id: 'lesson-13', title: 'Context API', type: 'video', duration: '28:00', completed: false, locked: true },
        { id: 'lesson-14', title: 'Redux Fundamentals', type: 'video', duration: '35:00', completed: false, locked: true },
        { id: 'lesson-15', title: 'Redux Toolkit', type: 'video', duration: '40:00', completed: false, locked: true },
      ],
    },
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getLessonIcon = (lesson: any) => {
    if (lesson.locked) return <Lock className="w-4 h-4 text-gray-400" />;
    if (lesson.completed) return <CheckCircle className="w-4 h-4 text-green-500" />;
    if (lesson.type === 'video') return <Play className="w-4 h-4" />;
    if (lesson.type === 'text') return <FileText className="w-4 h-4" />;
    if (lesson.type === 'quiz') return <HelpCircle className="w-4 h-4" />;
    return <Play className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Video Player Area */}
      <div className={`flex-1 flex flex-col ${showSidebar ? '' : ''}`}>
        {/* Top Bar */}
        <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/student" className="text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <p className="text-sm text-gray-400">{course.currentSection}</p>
              <h1 className="text-white font-medium">Creating Components</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="flex-1 bg-black relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors mb-4"
              >
                {isPlaying ? (
                  <div className="flex gap-1.5">
                    <div className="w-2 h-8 bg-white rounded"></div>
                    <div className="w-2 h-8 bg-white rounded"></div>
                  </div>
                ) : (
                  <Play className="w-8 h-8 text-white ml-1" />
                )}
              </button>
              <p className="text-gray-400 text-sm">Click to {isPlaying ? 'pause' : 'play'}</p>
            </div>
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-gray-600 rounded-full mb-4 cursor-pointer group">
              <div className="w-1/3 h-full bg-purple-600 rounded-full relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  {isPlaying ? (
                    <div className="flex gap-1">
                      <div className="w-1.5 h-5 bg-white rounded-sm"></div>
                      <div className="w-1.5 h-5 bg-white rounded-sm"></div>
                    </div>
                  ) : (
                    <Play className="w-6 h-6" />
                  )}
                </button>
                <button className="text-white hover:text-purple-400 transition-colors">
                  <SkipBack className="w-5 h-5" />
                </button>
                <button className="text-white hover:text-purple-400 transition-colors">
                  <SkipForward className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-white" />
                  <div className="w-20 h-1 bg-gray-600 rounded-full">
                    <div className="w-3/4 h-full bg-white rounded-full"></div>
                  </div>
                </div>
                <span className="text-white text-sm">6:42 / 18:45</span>
              </div>

              <div className="flex items-center gap-4">
                <select className="bg-transparent text-white text-sm border border-gray-600 rounded px-2 py-1">
                  <option value="1">1x</option>
                  <option value="1.25">1.25x</option>
                  <option value="1.5">1.5x</option>
                  <option value="2">2x</option>
                </select>
                <button className="text-white hover:text-purple-400 transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
                <button className="text-white hover:text-purple-400 transition-colors">
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lesson Info & Actions */}
        <div className="bg-gray-800 p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Creating Components</h2>
              <p className="text-gray-400">
                Learn how to create reusable React components using both function and class syntax.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                <ThumbsUp className="w-4 h-4" />
                Helpful
              </button>
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                <Flag className="w-4 h-4" />
                Report
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-700 mb-6">
            <button className="pb-3 text-purple-400 border-b-2 border-purple-400 font-medium">
              Overview
            </button>
            <button
              onClick={() => setShowNotes(!showNotes)}
              className="pb-3 text-gray-400 hover:text-white transition-colors"
            >
              Notes
            </button>
            <button className="pb-3 text-gray-400 hover:text-white transition-colors">
              Resources
            </button>
            <button className="pb-3 text-gray-400 hover:text-white transition-colors">
              Q&A
            </button>
          </div>

          {showNotes ? (
            <div className="space-y-4">
              <textarea
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                placeholder="Take notes for this lesson..."
                className="w-full h-40 bg-gray-700 text-white rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Save Notes
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-white font-medium">About this lesson</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  In this lesson, you'll learn the fundamentals of React components. We'll cover
                  functional components, class components, and when to use each. By the end, you'll
                  be able to create your own reusable UI components.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    18:45
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    Intermediate
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-white font-medium">Downloads</h3>
                <div className="space-y-2">
                  <button className="w-full p-3 bg-gray-700 rounded-lg flex items-center gap-3 hover:bg-gray-600 transition-colors">
                    <Download className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">Lesson Slides (PDF)</span>
                  </button>
                  <button className="w-full p-3 bg-gray-700 rounded-lg flex items-center gap-3 hover:bg-gray-600 transition-colors">
                    <Download className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300">Source Code (ZIP)</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Course Sidebar */}
      {showSidebar && (
        <div className="w-96 bg-gray-800 border-l border-gray-700 flex flex-col">
          {/* Course Progress */}
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white font-semibold">Course Content</h2>
              <button
                onClick={() => setShowSidebar(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-gray-400">Your Progress</span>
              <span className="text-purple-400 font-medium">{course.progress}%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full">
              <div
                className="h-full bg-purple-600 rounded-full transition-all"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              {course.completedLessons} of {course.totalLessons} lessons completed
            </p>
          </div>

          {/* Sections */}
          <div className="flex-1 overflow-y-auto">
            {sections.map((section, sectionIndex) => (
              <div key={section.id} className="border-b border-gray-700">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-750 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {expandedSections.includes(section.id) ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                    <div className="text-left">
                      <p className="text-white font-medium">{section.title}</p>
                      <p className="text-sm text-gray-400">
                        {section.lessons.length} lessons • {section.duration}
                      </p>
                    </div>
                  </div>
                </button>

                {expandedSections.includes(section.id) && (
                  <div className="pb-2">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <button
                        key={lesson.id}
                        onClick={() => !lesson.locked && setCurrentLesson(lesson.id)}
                        disabled={lesson.locked}
                        className={`w-full px-6 py-3 flex items-center gap-3 text-left transition-colors ${
                          lesson.current
                            ? 'bg-purple-600/20 border-l-2 border-purple-600'
                            : lesson.locked
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:bg-gray-700/50'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            lesson.completed
                              ? 'bg-green-500/20'
                              : lesson.current
                              ? 'bg-purple-500/20'
                              : 'bg-gray-700'
                          }`}
                        >
                          {getLessonIcon(lesson)}
                        </div>
                        <div className="flex-1">
                          <p
                            className={`text-sm ${
                              lesson.current
                                ? 'text-purple-400'
                                : lesson.completed
                                ? 'text-gray-300'
                                : 'text-gray-400'
                            }`}
                          >
                            {lesson.title}
                          </p>
                          <p className="text-xs text-gray-500">{lesson.duration}</p>
                        </div>
                        {lesson.current && (
                          <span className="px-2 py-0.5 bg-purple-600 text-white text-xs rounded-full">
                            Current
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certificate Progress */}
          <div className="p-6 border-t border-gray-700">
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">Earn a Certificate</p>
                <p className="text-sm text-gray-400">Complete all lessons to unlock</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
