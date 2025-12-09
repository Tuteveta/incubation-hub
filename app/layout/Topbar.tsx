"use client";

import { useAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";
import { 
  Search, 
  Bell, 
  Settings, 
  LogOut, 
  User,
  ChevronDown,
  Calendar,
  HelpCircle
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Topbar() {
  const { user, signOut } = useAuthenticator();
  const router = useRouter();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleSignOut = async () => {
    try {
      if (typeof signOut === "function") {
        await signOut();
      }
    } catch (err) {
      console.error("Sign out failed:", err);
    } finally {
      router.push("/auth");
    }
  };

  // Sample notifications (replace with real data)
  const notifications = [
    { id: 1, text: "New application submitted", time: "2m ago", unread: true },
    { id: 2, text: "Mentor session scheduled", time: "1h ago", unread: true },
    { id: 3, text: "Program deadline approaching", time: "3h ago", unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <>
      <style jsx global>{`
        .topbar-search {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .topbar-search:focus-within {
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .notification-badge {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
        }

        .user-menu-item {
          transition: all 0.2s ease;
        }

        .user-menu-item:hover {
          background-color: #f3f4f6;
          transform: translateX(4px);
        }

        .dropdown-enter {
          opacity: 0;
          transform: scale(0.95) translateY(-10px);
        }

        .dropdown-enter-active {
          opacity: 1;
          transform: scale(1) translateY(0);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <header className="h-16 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="h-full flex items-center justify-between px-6">
          {/* Left Section - Search */}
          <div className="flex items-center gap-6 flex-1 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search startups, programs, mentors..."
                className="topbar-search w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:border-blue-300 transition-all"
              />
            </div>
          </div>

          {/* Right Section - Actions & User */}
          <div className="flex items-center gap-4">
            {/* Quick Actions */}
            <div className="hidden md:flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Calendar"
              >
                <Calendar className="w-5 h-5 text-gray-600" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Help"
              >
                <HelpCircle className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>

            {/* Notifications */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowUserMenu(false);
                }}
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Bell className="w-5 h-5 text-gray-600" />
                {unreadCount > 0 && (
                  <span className="notification-badge absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center shadow-lg">
                    {unreadCount}
                  </span>
                )}
              </motion.button>

              {/* Notifications Dropdown */}
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
                  >
                    <div className="p-4 border-b border-gray-200 bg-gray-50">
                      <h3 className="font-semibold text-gray-900">Notifications</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{unreadCount} unread</p>
                    </div>
                    <div className="max-h-80 overflow-auto">
                      {notifications.map((notif) => (
                        <div
                          key={notif.id}
                          className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                            notif.unread ? 'bg-blue-50' : ''
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            {notif.unread && (
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-gray-900">{notif.text}</p>
                              <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 border-t border-gray-200 bg-gray-50">
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium w-full text-center">
                        View all notifications
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-gray-200"></div>

            {/* User Menu */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setShowUserMenu(!showUserMenu);
                  setShowNotifications(false);
                }}
                className="flex items-center gap-3 pl-2 pr-3 py-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white font-semibold text-sm shadow-md">
                  {user?.username?.[0]?.toUpperCase() || 'U'}
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-semibold text-gray-900">
                    {user?.username || 'User'}
                  </div>
                  <div className="text-xs text-gray-500">Founder</div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </motion.button>

              {/* User Dropdown */}
              <AnimatePresence>
                {showUserMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
                  >
                    <div className="p-4 border-b border-gray-200 bg-gradient-to-br from-gray-50 to-blue-50">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {user?.username?.[0]?.toUpperCase() || 'U'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 truncate">
                            {user?.username || 'User'}
                          </div>
                          <div className="text-sm text-gray-600 truncate">
                            {user?.signInDetails?.loginId || 'user@example.com'}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="py-2">
                      <button className="user-menu-item w-full px-4 py-2.5 flex items-center gap-3 text-sm text-gray-700">
                        <User className="w-4 h-4" />
                        <span>View Profile</span>
                      </button>
                      <button className="user-menu-item w-full px-4 py-2.5 flex items-center gap-3 text-sm text-gray-700">
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </button>
                    </div>

                    <div className="border-t border-gray-200 py-2">
                      <button
                        onClick={handleSignOut}
                        className="user-menu-item w-full px-4 py-2.5 flex items-center gap-3 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      {/* Click outside to close dropdowns */}
      {(showUserMenu || showNotifications) && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => {
            setShowUserMenu(false);
            setShowNotifications(false);
          }}
        />
      )}
    </>
  );
}