'use client';

import { useState } from 'react';
import {
  Search,
  Send,
  Paperclip,
  Image,
  Smile,
  MoreVertical,
  Phone,
  Video,
  Star,
  Archive,
  Trash2,
  Check,
  CheckCheck,
  Filter,
  Plus,
  ChevronDown,
  UserCircle,
  Clock,
  BookOpen,
} from 'lucide-react';

export default function StudentMessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState('1');
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'instructors' | 'support'>('all');

  const conversations = [
    {
      id: '1',
      name: 'Sarah Johnson',
      avatar: null,
      role: 'Instructor',
      course: 'Complete React Developer Course',
      lastMessage: 'Great question! The useEffect hook cleanup function...',
      time: '2m ago',
      unread: 1,
      online: true,
      type: 'instructor',
    },
    {
      id: '2',
      name: 'Michael Chen',
      avatar: null,
      role: 'Instructor',
      course: 'Advanced Node.js Masterclass',
      lastMessage: 'Your assignment has been graded. You did great!',
      time: '1h ago',
      unread: 0,
      online: false,
      type: 'instructor',
    },
    {
      id: '3',
      name: 'Support Team',
      avatar: null,
      role: 'Support',
      course: null,
      lastMessage: 'Your refund request has been processed.',
      time: '3h ago',
      unread: 0,
      online: true,
      type: 'support',
    },
    {
      id: '4',
      name: 'Emily Davis',
      avatar: null,
      role: 'Instructor',
      course: 'UI/UX Design Fundamentals',
      lastMessage: 'Don\'t forget to submit your project by Friday!',
      time: 'Yesterday',
      unread: 0,
      online: false,
      type: 'instructor',
    },
    {
      id: '5',
      name: 'James Wilson',
      avatar: null,
      role: 'Instructor',
      course: 'Python for Data Science',
      lastMessage: 'Thanks for your feedback on the course!',
      time: '2d ago',
      unread: 0,
      online: false,
      type: 'instructor',
    },
  ];

  const messages = [
    {
      id: '1',
      senderId: 'me',
      text: 'Hi Sarah! I have a question about the useEffect hook.',
      time: '10:00 AM',
      status: 'read',
    },
    {
      id: '2',
      senderId: 'instructor',
      text: 'Hi! Of course, I\'d be happy to help. What\'s your question?',
      time: '10:05 AM',
      status: 'read',
    },
    {
      id: '3',
      senderId: 'me',
      text: 'I\'m confused about when to use the cleanup function in useEffect. When is it necessary?',
      time: '10:08 AM',
      status: 'read',
    },
    {
      id: '4',
      senderId: 'instructor',
      text: 'Great question! The cleanup function is important when your effect sets up a subscription or listener that needs to be removed when the component unmounts or before the effect runs again.',
      time: '10:12 AM',
      status: 'read',
    },
    {
      id: '5',
      senderId: 'instructor',
      text: 'For example, if you\'re setting up a WebSocket connection, adding event listeners, or starting a timer, you need to clean those up to prevent memory leaks.',
      time: '10:13 AM',
      status: 'read',
    },
    {
      id: '6',
      senderId: 'me',
      text: 'That makes sense! So if I have a setInterval in useEffect, I should clear it in the cleanup?',
      time: '10:15 AM',
      status: 'read',
    },
    {
      id: '7',
      senderId: 'instructor',
      text: 'Exactly! Here\'s a quick example:\n\nuseEffect(() => {\n  const timer = setInterval(() => {\n    // do something\n  }, 1000);\n  \n  return () => clearInterval(timer);\n}, []);',
      time: '10:18 AM',
      status: 'delivered',
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessageInput('');
    }
  };

  const selectedChat = conversations.find((c) => c.id === selectedConversation);

  const filteredConversations = conversations.filter((conv) => {
    if (filterType === 'all') return true;
    if (filterType === 'instructors') return conv.type === 'instructor';
    if (filterType === 'support') return conv.type === 'support';
    return true;
  });

  return (
    <div className="h-[calc(100vh-8rem)] flex bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Conversations List */}
      <div className="w-96 border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
            <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex gap-2">
            {(['all', 'instructors', 'support'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filterType === type
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
              className={`flex items-start gap-3 p-4 cursor-pointer transition-colors ${
                selectedConversation === conversation.id
                  ? 'bg-purple-50 border-l-2 border-purple-600'
                  : 'hover:bg-gray-50 border-l-2 border-transparent'
              }`}
            >
              <div className="relative flex-shrink-0">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium ${
                  conversation.type === 'support'
                    ? 'bg-gradient-to-br from-green-500 to-teal-500'
                    : 'bg-gradient-to-br from-purple-500 to-blue-500'
                }`}>
                  {getInitials(conversation.name)}
                </div>
                {conversation.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-gray-900 truncate">
                    {conversation.name}
                  </p>
                  <span className="text-xs text-gray-400 flex-shrink-0">{conversation.time}</span>
                </div>
                <p className="text-xs text-purple-600 mb-1">{conversation.role}</p>
                {conversation.course && (
                  <p className="text-xs text-gray-400 mb-1 truncate flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    {conversation.course}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                  {conversation.unread > 0 && (
                    <span className="ml-2 w-5 h-5 bg-purple-600 text-white rounded-full text-xs flex items-center justify-center flex-shrink-0">
                      {conversation.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${
                    selectedChat.type === 'support'
                      ? 'bg-gradient-to-br from-green-500 to-teal-500'
                      : 'bg-gradient-to-br from-purple-500 to-blue-500'
                  }`}>
                    {getInitials(selectedChat.name)}
                  </div>
                  {selectedChat.online && (
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{selectedChat.name}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{selectedChat.role}</span>
                    {selectedChat.online && (
                      <>
                        <span>•</span>
                        <span className="text-green-600">Online</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {selectedChat.course && (
                  <div className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span className="max-w-[150px] truncate">{selectedChat.course}</span>
                  </div>
                )}
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {/* Course Context Banner */}
              {selectedChat.course && (
                <div className="flex justify-center mb-4">
                  <div className="px-4 py-2 bg-white rounded-full shadow-sm text-sm text-gray-500 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Conversation about: {selectedChat.course}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.senderId === 'me' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[70%] ${
                      message.senderId === 'me'
                        ? 'bg-purple-600 text-white rounded-2xl rounded-br-md'
                        : 'bg-white text-gray-900 rounded-2xl rounded-bl-md shadow-sm'
                    } px-4 py-2.5`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    <div
                      className={`flex items-center justify-end gap-1 mt-1 ${
                        message.senderId === 'me' ? 'text-purple-200' : 'text-gray-400'
                      }`}
                    >
                      <span className="text-xs">{message.time}</span>
                      {message.senderId === 'me' &&
                        (message.status === 'read' ? (
                          <CheckCheck className="w-3.5 h-3.5" />
                        ) : (
                          <Check className="w-3.5 h-3.5" />
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Paperclip className="w-5 h-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Image className="w-5 h-5 text-gray-500" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="w-full px-4 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Smile className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                  </button>
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={!messageInput.trim()}
                  className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400 bg-gray-50">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8" />
              </div>
              <p className="text-lg font-medium text-gray-900">Your Messages</p>
              <p className="text-sm text-gray-500 mt-1">
                Select a conversation to start chatting
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Info Sidebar */}
      {selectedChat && selectedChat.type === 'instructor' && (
        <div className="w-72 border-l border-gray-200 bg-gray-50 p-6 hidden xl:block">
          <div className="text-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-medium mx-auto mb-4">
              {getInitials(selectedChat.name)}
            </div>
            <h3 className="font-semibold text-gray-900">{selectedChat.name}</h3>
            <p className="text-sm text-gray-500">{selectedChat.role}</p>
          </div>

          {selectedChat.course && (
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Course</h4>
              <div className="p-4 bg-white rounded-xl">
                <p className="font-medium text-gray-900 text-sm">{selectedChat.course}</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    35% complete
                  </span>
                </div>
                <button className="w-full mt-3 py-2 bg-purple-50 text-purple-600 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors">
                  Continue Learning
                </button>
              </div>
            </div>
          )}

          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Quick Actions</h4>
            <div className="space-y-2">
              <button className="w-full p-3 bg-white rounded-lg text-left text-sm text-gray-600 hover:bg-gray-100 transition-colors flex items-center gap-3">
                <Star className="w-4 h-4 text-yellow-500" />
                Leave a Review
              </button>
              <button className="w-full p-3 bg-white rounded-lg text-left text-sm text-gray-600 hover:bg-gray-100 transition-colors flex items-center gap-3">
                <Archive className="w-4 h-4 text-gray-400" />
                Archive Conversation
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Response Time</h4>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-green-500" />
              <span className="text-gray-600">Usually responds within 2 hours</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
