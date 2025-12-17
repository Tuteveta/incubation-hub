'use client';

import { useState } from 'react';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  Video,
  Users,
  Edit2,
  Trash2,
  X,
  MapPin,
  Link2,
  Bell,
} from 'lucide-react';

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 11, 1)); // December 2024
  const [selectedDate, setSelectedDate] = useState<number | null>(16);
  const [showEventModal, setShowEventModal] = useState(false);

  const events = [
    {
      id: '1',
      title: 'Live Q&A Session',
      date: 16,
      time: '10:00 AM',
      duration: '1 hour',
      type: 'live',
      color: 'bg-purple-500',
      attendees: 234,
    },
    {
      id: '2',
      title: 'Course Recording',
      date: 16,
      time: '2:00 PM',
      duration: '3 hours',
      type: 'recording',
      color: 'bg-blue-500',
    },
    {
      id: '3',
      title: 'Mentorship Call - Sarah',
      date: 17,
      time: '11:00 AM',
      duration: '30 mins',
      type: 'meeting',
      color: 'bg-green-500',
    },
    {
      id: '4',
      title: 'Content Planning',
      date: 18,
      time: '9:00 AM',
      duration: '2 hours',
      type: 'planning',
      color: 'bg-orange-500',
    },
    {
      id: '5',
      title: 'Webinar: React Best Practices',
      date: 20,
      time: '3:00 PM',
      duration: '1.5 hours',
      type: 'live',
      color: 'bg-purple-500',
      attendees: 512,
    },
    {
      id: '6',
      title: 'Team Meeting',
      date: 22,
      time: '10:00 AM',
      duration: '1 hour',
      type: 'meeting',
      color: 'bg-green-500',
    },
  ];

  const upcomingEvents = events.filter((e) => e.date >= 16).slice(0, 5);
  const selectedDateEvents = events.filter((e) => e.date === selectedDate);

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const getEventsForDay = (day: number) => {
    return events.filter((e) => e.date === day);
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'live':
        return <Video className="w-4 h-4" />;
      case 'recording':
        return <Video className="w-4 h-4" />;
      case 'meeting':
        return <Users className="w-4 h-4" />;
      default:
        return <CalendarIcon className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <p className="text-gray-600 mt-1">
            Manage your schedule and events
          </p>
        </div>
        <button
          onClick={() => setShowEventModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => setCurrentMonth(new Date())}
                className="px-3 py-1.5 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              >
                Today
              </button>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map((day) => (
              <div
                key={day}
                className="text-center text-sm font-medium text-gray-500 py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {/* Empty cells for days before the first day of the month */}
            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
              <div key={`empty-${index}`} className="h-24 p-1"></div>
            ))}

            {/* Days of the month */}
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1;
              const dayEvents = getEventsForDay(day);
              const isSelected = selectedDate === day;
              const isToday = day === 16; // Simulating today as Dec 16

              return (
                <div
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  className={`h-24 p-1 border rounded-lg cursor-pointer transition-all ${
                    isSelected
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <div
                    className={`text-sm font-medium mb-1 w-6 h-6 rounded-full flex items-center justify-center ${
                      isToday
                        ? 'bg-purple-600 text-white'
                        : isSelected
                        ? 'text-purple-600'
                        : 'text-gray-700'
                    }`}
                  >
                    {day}
                  </div>
                  <div className="space-y-0.5">
                    {dayEvents.slice(0, 2).map((event) => (
                      <div
                        key={event.id}
                        className={`${event.color} text-white text-xs px-1.5 py-0.5 rounded truncate`}
                      >
                        {event.title}
                      </div>
                    ))}
                    {dayEvents.length > 2 && (
                      <div className="text-xs text-gray-500 pl-1.5">
                        +{dayEvents.length - 2} more
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Selected Date Events */}
          {selectedDate && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                December {selectedDate}, 2024
              </h3>
              {selectedDateEvents.length > 0 ? (
                <div className="space-y-3">
                  {selectedDateEvents.map((event) => (
                    <div
                      key={event.id}
                      className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-8 h-8 ${event.color} rounded-lg flex items-center justify-center text-white`}
                          >
                            {getEventTypeIcon(event.type)}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{event.title}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-sm text-gray-500">
                                {event.time}
                              </span>
                              <span className="text-xs text-gray-400">
                                • {event.duration}
                              </span>
                            </div>
                            {event.attendees && (
                              <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                                <Users className="w-3 h-3" />
                                {event.attendees} registered
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded">
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-gray-200 rounded">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <CalendarIcon className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">No events scheduled</p>
                  <button
                    onClick={() => setShowEventModal(true)}
                    className="mt-2 text-sm text-purple-600 hover:text-purple-700"
                  >
                    Add event
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                  onClick={() => setSelectedDate(event.date)}
                >
                  <div
                    className={`w-2 h-10 ${event.color} rounded-full`}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 text-sm truncate">
                      {event.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      Dec {event.date} • {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button
                onClick={() => setShowEventModal(true)}
                className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Video className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">
                    Schedule Live Session
                  </p>
                  <p className="text-xs text-gray-500">Go live with your students</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">
                    Book Mentorship
                  </p>
                  <p className="text-xs text-gray-500">1-on-1 with a student</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Bell className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">
                    Set Reminder
                  </p>
                  <p className="text-xs text-gray-500">Don't miss important dates</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Event Modal */}
      {showEventModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Create New Event
                </h2>
                <button
                  onClick={() => setShowEventModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Title
                </label>
                <input
                  type="text"
                  placeholder="Enter event title"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type
                </label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Live Session</option>
                  <option>Recording</option>
                  <option>Meeting</option>
                  <option>Webinar</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>1.5 hours</option>
                  <option>2 hours</option>
                  <option>3 hours</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Add event description..."
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meeting Link (optional)
                </label>
                <div className="relative">
                  <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="url"
                    placeholder="https://zoom.us/j/..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowEventModal(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Create Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
