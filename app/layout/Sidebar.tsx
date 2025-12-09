"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  Home, 
  LayoutDashboard, 
  Briefcase, 
  GraduationCap, 
  Users,
  Sparkles,
  ChevronRight,
  Settings,
  HelpCircle
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Welcome", href: "/", icon: Home },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Startups", href: "/startups", icon: Briefcase },
  { name: "Programs", href: "/programs", icon: GraduationCap },
  { name: "Mentorship", href: "/mentors", icon: Users },
];

const secondaryItems = [
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Help & Support", href: "/help", icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Archivo', sans-serif;
        }

        .sidebar-nav-item {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .sidebar-nav-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 0;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          border-radius: 0 4px 4px 0;
          transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sidebar-nav-item.active::before {
          height: 70%;
        }

        .sidebar-nav-item:hover {
          transform: translateX(4px);
        }

        .sidebar-nav-item.active {
          background: linear-gradient(90deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%);
        }

        .logo-gradient {
          background: linear-gradient(135deg, #2563eb 0%, #f97316 100%);
        }

        .user-avatar {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        }
      `}</style>

      <motion.aside
        initial={false}
        animate={{ width: collapsed ? 80 : 280 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="flex flex-col h-screen bg-white border-r border-gray-200 shadow-sm"
      >
        {/* Logo Section */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="logo-gradient text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base shadow-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <AnimatePresence>
              {!collapsed && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="font-bold text-lg text-gray-900"
                  style={{ fontFamily: 'Archivo, sans-serif' }}
                >
                  Incubation Hub
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle sidebar"
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu size={18} className="text-gray-600" />
          </motion.button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-auto px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ x: collapsed ? 0 : 4 }}
                  className={cn(
                    "sidebar-nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium",
                    active
                      ? "active text-blue-600"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  <Icon className="min-w-[20px] w-5 h-5" />
                  <AnimatePresence>
                    {!collapsed && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex-1"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {!collapsed && active && (
                    <ChevronRight className="w-4 h-4 text-blue-600" />
                  )}
                </motion.div>
              </Link>
            );
          })}

          {/* Divider */}
          <div className="my-4 border-t border-gray-200" />

          {/* Secondary Items */}
          {secondaryItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ x: collapsed ? 0 : 4 }}
                  className={cn(
                    "sidebar-nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium",
                    active
                      ? "active text-blue-600"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <Icon className="min-w-[20px] w-5 h-5" />
                  <AnimatePresence>
                    {!collapsed && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <motion.div
            whileHover={{ scale: collapsed ? 1 : 1.02 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="user-avatar w-10 h-10 rounded-xl flex items-center justify-center text-white font-semibold text-sm shadow-md">
              U
            </div>
            <AnimatePresence>
              {!collapsed && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 min-w-0"
                >
                  <div className="text-sm font-semibold text-gray-900 truncate">User Name</div>
                  <div className="text-xs text-gray-500 truncate">Founder</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.aside>
    </>
  );
}