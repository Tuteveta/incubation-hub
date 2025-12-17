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
  Circle,
  Filter,
} from 'lucide-react';

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState('1');
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const conversations = [
    {
      id: '1',
      name: 'Sarah Johnson',
      avatar: null,
      lastMessage: 'Thank you so much for the detailed feedback on my project!',
      time: '2m ago',
      unread: 2,
      online: true,
      type: 'student',
    },
    {
      id: '2',
      name: 'Michael Chen',
      avatar: null,
      lastMessage: 'When will the next module be released?',
      time: '15m ago',
      unread: 0,
      online: true,
      type: 'student',
    },
    {
      id: '3',
      name: 'Emily Davis',
      avatar: null,
      lastMessage: 'I completed the assignment. Could you review it?',
      time: '1h ago',
      unread: 1,
      online: false,
      type: 'student',
    },
    {
      id: '4',
      name: 'James Wilson',
      avatar: null,
      lastMessage: 'Great course! I learned so much.',
      time: '3h ago',
      unread: 0,
      online: false,
      type: 'student',
    },
    {
      id: '5',
      name: 'Support Team',
      avatar: null,
      lastMessage: 'Your payout has been processed successfully.',
      time: 'Yesterday',
      unread: 0,
      online: true,
      type: 'support',
    },
    {
      id: '6',
      name: 'Lisa Anderson',
      avatar: null,
      lastMessage: 'Is there a certificate for completing the course?',
      time: '2d ago',
      unread: 0,
      online: false,
      type: 'student',
    },
  ];

  const messages = [
    {
      id: '1',
      senderId: 'student',
      text: 'Hi! I just finished watching Module 3 of your React course.',
      time: '10:23 AM',
      status: 'read',
    },
    {
      id: '2',
      senderId: 'me',
      text: "That's great to hear! How did you find the content? Any questions?",
      time: '10:25 AM',
      status: 'read',
    },
    {
      id: '3',
      senderId: 'student',
      text: "The custom hooks section was really helpful. I've been struggling with that concept for a while, but your explanation made it click!",
      time: '10:28 AM',
      status: 'read',
    },
    {
      id: '4',
      senderId: 'me',
      text: "I'm so glad it helped! Custom hooks can be tricky at first, but once you understand the pattern, they become incredibly powerful. Feel free to ask if you have any specific questions as you practice.",
      time: '10:30 AM',
      status: 'read',
    },
    {
      id: '5',
      senderId: 'student',
      text: 'Actually, I do have a question about the useCallback hook. When should I use it vs useMemo?',
      time: '10:32 AM',
      status: 'read',
    },
    {
      id: '6',
      senderId: 'me',
      text: "Great question! useCallback is for memoizing functions, while useMemo is for memoizing values. Use useCallback when you're passing callbacks to child components that might re-render unnecessarily. I cover this in detail in Module 4!",
      time: '10:35 AM',
      status: 'read',
    },
    {
      id: '7',
      senderId: 'student',
      text: "Thank you so much for the detailed feedback on my project!",
      time: '10:38 AM',
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
      // Handle sending message
      setMessageInput('');
    }
  };

  const selectedChat = conversations.find((c) => c.id === selectedConversation);

  return (
    <div className="h-[calc(100vh-8rem)] flex bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Conversations List */}
      <div className="w-80 border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Filter className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
              className={`flex items-center gap-3 p-4 cursor-pointer transition-colors ${
                selectedConversation === conversation.id
                  ? 'bg-purple-50 border-l-2 border-purple-600'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-medium">
                  {getInitials(conversation.name)}
                </div>
                {conversation.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900 truncate">
                    {conversation.name}
                  </p>
                  <span className="text-xs text-gray-400">{conversation.time}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-gray-500 truncate">
                    {conversation.lastMessage}
                  </p>
                  {conversation.unread > 0 && (
                    <span className="ml-2 w-5 h-5 bg-purple-600 text-white rounded-full text-xs flex items-center justify-center">
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-medium">
                    {getInitials(selectedChat.name)}
                  </div>
                  {selectedChat.online && (
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{selectedChat.name}</p>
                  <p className="text-xs text-gray-500">
                    {selectedChat.online ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Phone className="w-5 h-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Video className="w-5 h-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
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
                        : 'bg-gray-100 text-gray-900 rounded-2xl rounded-bl-md'
                    } px-4 py-2.5`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <div
                      className={`flex items-center justify-end gap-1 mt-1 ${
                        message.senderId === 'me'
                          ? 'text-purple-200'
                          : 'text-gray-400'
                      }`}
                    >
                      <span className="text-xs">{message.time}</span>
                      {message.senderId === 'me' && (
                        message.status === 'read' ? (
                          <CheckCheck className="w-3.5 h-3.5" />
                        ) : (
                          <Check className="w-3.5 h-3.5" />
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-100">
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
          <div className="flex-1 flex items-center justify-center text-gray-400">
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
    </div>
  );
}
