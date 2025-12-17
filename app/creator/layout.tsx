"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut, getCurrentUser } from "aws-amplify/auth";
import {
  Sparkles,
  LayoutDashboard,
  Video,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
  Plus,
  Calendar,
  MessageSquare,
  DollarSign,
  Share2
} from "lucide-react";

interface CreatorLayoutProps {
  children: React.ReactNode;
}

export default function CreatorLayout({ children }: CreatorLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
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

  const mainNavItems = [
    { href: "/creator", label: "Dashboard", icon: LayoutDashboard },
    { href: "/creator/content", label: "Content Library", icon: Video },
    { href: "/creator/students", label: "Students", icon: Users },
    { href: "/creator/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/creator/publishing", label: "Publishing", icon: Share2 },
  ];

  const secondaryNavItems = [
    { href: "/creator/calendar", label: "Calendar", icon: Calendar },
    { href: "/creator/messages", label: "Messages", icon: MessageSquare, badge: 3 },
    { href: "/creator/earnings", label: "Earnings", icon: DollarSign },
  ];

  const bottomNavItems = [
    { href: "/creator/settings", label: "Settings", icon: Settings },
    { href: "/creator/help", label: "Help & Support", icon: HelpCircle },
  ];

  const notifications = [
    { id: 1, title: "New student enrolled", desc: "Sarah joined your AI course", time: "5 min ago", unread: true },
    { id: 2, title: "Payment received", desc: "$49.99 from course sale", time: "1 hour ago", unread: true },
    { id: 3, title: "Course review", desc: "⭐⭐⭐⭐⭐ on Python Basics", time: "3 hours ago", unread: false },
  ];

  const isActive = (href: string) => {
    if (href === "/creator") return pathname === "/creator";
    return pathname.startsWith(href);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", display: "flex", flexDirection: "column" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
        * { font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Archivo', sans-serif; }
      `}</style>

      {/* Top Header */}
      <header style={{
        background: "white",
        borderBottom: "1px solid #e2e8f0",
        position: "sticky",
        top: 0,
        zIndex: 40
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: "64px"
        }}>
          {/* Left: Logo & Menu Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                padding: "8px",
                borderRadius: "8px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                display: "none"
              }}
            >
              <Menu size={24} color="#64748b" />
            </button>
            
            <Link href="/creator" style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none"
            }}>
              <div style={{
                width: "36px",
                height: "36px",
                background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
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

            {/* Sidebar Toggle (Desktop) */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{
                padding: "8px",
                borderRadius: "8px",
                border: "none",
                background: "#f1f5f9",
                cursor: "pointer",
                marginLeft: "16px"
              }}
            >
              <Menu size={20} color="#64748b" />
            </button>
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
              placeholder="Search content, students, analytics..."
              style={{
                width: "100%",
                padding: "10px 14px 10px 42px",
                background: "#f1f5f9",
                border: "1px solid transparent",
                borderRadius: "10px",
                fontSize: "14px",
                outline: "none",
                transition: "all 0.2s"
              }}
            />
          </div>

          {/* Right: Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Create Button */}
            <Link href="/creator/content/new" style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 16px",
              background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
              color: "white",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)"
            }}>
              <Plus size={18} />
              Create
            </Link>

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
                      color: "#8b5cf6",
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
                  background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "13px"
                }}>
                  {user?.username?.charAt(0).toUpperCase() || "C"}
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
                      {user?.username || "Creator"}
                    </div>
                    <div style={{ color: "#64748b", fontSize: "13px" }}>Premium Plan</div>
                  </div>
                  <div style={{ padding: "8px" }}>
                    <Link href="/creator/settings" style={{
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

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <aside style={{
          width: sidebarOpen ? "260px" : "80px",
          background: "white",
          borderRight: "1px solid #e2e8f0",
          display: "flex",
          flexDirection: "column",
          transition: "width 0.3s ease",
          position: "sticky",
          top: "64px",
          height: "calc(100vh - 64px)",
          overflow: "hidden"
        }}>
          {/* Main Navigation */}
          <nav style={{ flex: 1, padding: "16px 12px", overflowY: "auto" }}>
            <div style={{ marginBottom: "24px" }}>
              {sidebarOpen && (
                <div style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#94a3b8",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  padding: "0 12px",
                  marginBottom: "8px"
                }}>
                  Main
                </div>
              )}
              {mainNavItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: sidebarOpen ? "12px" : "12px",
                      borderRadius: "10px",
                      marginBottom: "4px",
                      background: active ? "#8b5cf610" : "transparent",
                      color: active ? "#8b5cf6" : "#64748b",
                      textDecoration: "none",
                      fontWeight: active ? 600 : 500,
                      fontSize: "14px",
                      justifyContent: sidebarOpen ? "flex-start" : "center",
                      transition: "all 0.2s"
                    }}
                  >
                    <Icon size={20} />
                    {sidebarOpen && item.label}
                  </Link>
                );
              })}
            </div>

            <div style={{ marginBottom: "24px" }}>
              {sidebarOpen && (
                <div style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#94a3b8",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  padding: "0 12px",
                  marginBottom: "8px"
                }}>
                  Workspace
                </div>
              )}
              {secondaryNavItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: sidebarOpen ? "12px" : "12px",
                      borderRadius: "10px",
                      marginBottom: "4px",
                      background: active ? "#8b5cf610" : "transparent",
                      color: active ? "#8b5cf6" : "#64748b",
                      textDecoration: "none",
                      fontWeight: active ? 600 : 500,
                      fontSize: "14px",
                      justifyContent: sidebarOpen ? "flex-start" : "center",
                      position: "relative",
                      transition: "all 0.2s"
                    }}
                  >
                    <Icon size={20} />
                    {sidebarOpen && item.label}
                    {item.badge && sidebarOpen && (
                      <span style={{
                        marginLeft: "auto",
                        background: "#ef4444",
                        color: "white",
                        fontSize: "11px",
                        fontWeight: 600,
                        padding: "2px 8px",
                        borderRadius: "10px"
                      }}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Bottom Navigation */}
          <div style={{
            padding: "16px 12px",
            borderTop: "1px solid #e2e8f0"
          }}>
            {bottomNavItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: sidebarOpen ? "12px" : "12px",
                    borderRadius: "10px",
                    marginBottom: "4px",
                    background: active ? "#8b5cf610" : "transparent",
                    color: active ? "#8b5cf6" : "#64748b",
                    textDecoration: "none",
                    fontWeight: active ? 600 : 500,
                    fontSize: "14px",
                    justifyContent: sidebarOpen ? "flex-start" : "center",
                    transition: "all 0.2s"
                  }}
                >
                  <Icon size={20} />
                  {sidebarOpen && item.label}
                </Link>
              );
            })}
          </div>
        </aside>

        {/* Main Content */}
        <main style={{
          flex: 1,
          padding: "24px",
          overflowY: "auto"
        }}>
          {children}
        </main>
      </div>
    </div>
  );
}
