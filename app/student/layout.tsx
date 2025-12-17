"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut, getCurrentUser } from "aws-amplify/auth";
import {
  Sparkles,
  Search,
  Compass,
  BookOpen,
  MessageSquare,
  User,
  Bell,
  Menu,
  ChevronDown,
  LogOut,
  Settings,
  Heart
} from "lucide-react";

interface StudentLayoutProps {
  children: React.ReactNode;
}

export default function StudentLayout({ children }: StudentLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      router.push("/auth");
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const navItems = [
    { href: "/student", label: "Discover", icon: Compass },
    { href: "/student/learning", label: "My Learning", icon: BookOpen },
    { href: "/student/messages", label: "Messages", icon: MessageSquare, badge: 2 },
    { href: "/student/profile", label: "Profile", icon: User },
  ];

  const notifications = [
    { id: 1, title: "New lesson available", desc: "Python Masterclass - Chapter 12 is now live!", time: "5 min ago", unread: true },
    { id: 2, title: "Course completed!", desc: "Congrats! You finished AI Fundamentals", time: "1 hour ago", unread: true },
    { id: 3, title: "Achievement unlocked", desc: "7-day learning streak! 🔥", time: "2 hours ago", unread: false },
  ];

  const isActive = (href: string) => {
    if (href === "/student") return pathname === "/student";
    return pathname.startsWith(href);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
        * { font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Archivo', sans-serif; }
      `}</style>

      {/* Top Navigation */}
      <header style={{
        background: "white",
        borderBottom: "1px solid #e2e8f0",
        position: "sticky",
        top: 0,
        zIndex: 40
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          {/* Left: Logo & Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>
            <Link href="/student" style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none"
            }}>
              <div style={{
                width: "36px",
                height: "36px",
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Sparkles size={20} color="white" />
              </div>
              <span style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#0f172a",
                fontFamily: "Archivo"
              }}>
                CreatorHub
              </span>
            </Link>

            {/* Main Navigation */}
            <nav style={{ display: "flex", gap: "8px" }}>
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 16px",
                      borderRadius: "10px",
                      background: active ? "#3b82f610" : "transparent",
                      color: active ? "#3b82f6" : "#64748b",
                      textDecoration: "none",
                      fontWeight: active ? 600 : 500,
                      fontSize: "14px",
                      transition: "all 0.2s",
                      position: "relative"
                    }}
                  >
                    <Icon size={18} />
                    {item.label}
                    {item.badge && (
                      <span style={{
                        background: "#ef4444",
                        color: "white",
                        fontSize: "11px",
                        fontWeight: 600,
                        padding: "2px 6px",
                        borderRadius: "10px",
                        marginLeft: "4px"
                      }}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Center: Search */}
          <div style={{
            flex: 1,
            maxWidth: "480px",
            margin: "0 24px",
            position: "relative"
          }}>
            <Search size={18} color="#94a3b8" style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)"
            }} />
            <input
              type="text"
              placeholder="Search courses, creators..."
              style={{
                width: "100%",
                padding: "10px 14px 10px 42px",
                background: "#f1f5f9",
                border: "1px solid transparent",
                borderRadius: "10px",
                fontSize: "14px",
                outline: "none"
              }}
            />
          </div>

          {/* Right: Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Wishlist */}
            <button style={{
              padding: "10px",
              borderRadius: "10px",
              border: "none",
              background: "#f1f5f9",
              cursor: "pointer"
            }}>
              <Heart size={20} color="#64748b" />
            </button>

            {/* Notifications */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  border: "none",
                  background: "#f1f5f9",
                  cursor: "pointer",
                  position: "relative"
                }}
              >
                <Bell size={20} color="#64748b" />
                <span style={{
                  position: "absolute",
                  top: "6px",
                  right: "6px",
                  width: "8px",
                  height: "8px",
                  background: "#ef4444",
                  borderRadius: "50%"
                }} />
              </button>

              {notificationsOpen && (
                <div style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  width: "360px",
                  background: "white",
                  borderRadius: "16px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  border: "1px solid #e2e8f0",
                  overflow: "hidden",
                  zIndex: 50
                }}>
                  <div style={{
                    padding: "16px 20px",
                    borderBottom: "1px solid #e2e8f0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    <span style={{ fontWeight: 600, color: "#0f172a" }}>Notifications</span>
                    <button style={{
                      background: "none",
                      border: "none",
                      color: "#3b82f6",
                      fontSize: "13px",
                      cursor: "pointer"
                    }}>
                      Mark all read
                    </button>
                  </div>
                  {notifications.map((notif) => (
                    <div key={notif.id} style={{
                      padding: "16px 20px",
                      borderBottom: "1px solid #f1f5f9",
                      background: notif.unread ? "#f8fafc" : "white",
                      cursor: "pointer"
                    }}>
                      <div style={{ fontWeight: 500, color: "#0f172a", marginBottom: "4px", fontSize: "14px" }}>
                        {notif.title}
                      </div>
                      <div style={{ color: "#64748b", fontSize: "13px", marginBottom: "4px" }}>
                        {notif.desc}
                      </div>
                      <div style={{ color: "#94a3b8", fontSize: "12px" }}>
                        {notif.time}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "6px 12px 6px 6px",
                  borderRadius: "10px",
                  border: "none",
                  background: "#f1f5f9",
                  cursor: "pointer"
                }}
              >
                <div style={{
                  width: "32px",
                  height: "32px",
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "13px"
                }}>
                  {user?.username?.charAt(0).toUpperCase() || "S"}
                </div>
                <ChevronDown size={16} color="#64748b" />
              </button>

              {profileDropdownOpen && (
                <div style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  width: "240px",
                  background: "white",
                  borderRadius: "12px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  border: "1px solid #e2e8f0",
                  overflow: "hidden",
                  zIndex: 50
                }}>
                  <div style={{ padding: "16px", borderBottom: "1px solid #e2e8f0" }}>
                    <div style={{ fontWeight: 600, color: "#0f172a", marginBottom: "2px" }}>
                      {user?.username || "Student"}
                    </div>
                    <div style={{ color: "#64748b", fontSize: "13px" }}>Learning Explorer</div>
                  </div>
                  <div style={{ padding: "8px" }}>
                    <Link href="/student/profile" style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      color: "#475569",
                      textDecoration: "none",
                      fontSize: "14px"
                    }}>
                      <Settings size={18} />
                      Settings
                    </Link>
                    <button
                      onClick={handleSignOut}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        color: "#ef4444",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        width: "100%",
                        fontSize: "14px"
                      }}
                    >
                      <LogOut size={18} />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ minHeight: "calc(100vh - 64px)" }}>
        {children}
      </main>
    </div>
  );
}
