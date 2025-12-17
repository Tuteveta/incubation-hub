"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut, getCurrentUser } from "aws-amplify/auth";
import {
  Sparkles,
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  Bell,
  Search,
  ChevronDown,
  Shield,
  AlertTriangle,
  DollarSign,
  Activity
} from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
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
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/users", label: "User Management", icon: Users },
    { href: "/admin/content", label: "Content Moderation", icon: FileText },
    { href: "/admin/analytics", label: "Platform Analytics", icon: BarChart3 },
  ];

  const secondaryNavItems = [
    { href: "/admin/subscriptions", label: "Subscriptions", icon: DollarSign },
    { href: "/admin/reports", label: "Reports", icon: AlertTriangle, badge: 5 },
    { href: "/admin/system", label: "System Health", icon: Activity },
  ];

  const bottomNavItems = [
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ];

  const notifications = [
    { id: 1, title: "New creator signup", desc: "John Doe joined Premium plan", time: "2 min ago", unread: true },
    { id: 2, title: "Content flagged", desc: "Course requires review", time: "15 min ago", unread: true },
    { id: 3, title: "Payment processed", desc: "$199 subscription payment", time: "1 hour ago", unread: false },
  ];

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
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
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
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
            <Link href="/admin" style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none"
            }}>
              <div style={{
                width: "36px",
                height: "36px",
                background: "linear-gradient(135deg, #ef4444, #f97316)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Shield size={20} color="white" />
              </div>
              <div>
                <span style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "white",
                  fontFamily: "Archivo"
                }}>
                  CreatorHub
                </span>
                <span style={{
                  marginLeft: "8px",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#ef4444",
                  background: "rgba(239, 68, 68, 0.2)",
                  padding: "2px 8px",
                  borderRadius: "4px"
                }}>
                  ADMIN
                </span>
              </div>
            </Link>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{
                padding: "8px",
                borderRadius: "8px",
                border: "none",
                background: "rgba(255,255,255,0.1)",
                cursor: "pointer",
                marginLeft: "16px"
              }}
            >
              <Menu size={20} color="#94a3b8" />
            </button>
          </div>

          {/* Center: Search */}
          <div style={{
            flex: 1,
            maxWidth: "480px",
            margin: "0 24px",
            position: "relative"
          }}>
            <Search size={18} color="#64748b" style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)"
            }} />
            <input
              type="text"
              placeholder="Search users, content, logs..."
              style={{
                width: "100%",
                padding: "10px 14px 10px 42px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                fontSize: "14px",
                color: "white",
                outline: "none"
              }}
            />
          </div>

          {/* Right: Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Notifications */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  border: "none",
                  background: "rgba(255,255,255,0.1)",
                  cursor: "pointer",
                  position: "relative"
                }}
              >
                <Bell size={20} color="#94a3b8" />
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
                  borderRadius: "12px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  border: "1px solid #e2e8f0",
                  overflow: "hidden",
                  zIndex: 50
                }}>
                  <div style={{
                    padding: "16px",
                    borderBottom: "1px solid #e2e8f0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    <span style={{ fontWeight: 600, color: "#0f172a" }}>Notifications</span>
                    <span style={{ color: "#8b5cf6", fontSize: "13px", cursor: "pointer" }}>Mark all read</span>
                  </div>
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      style={{
                        padding: "14px 16px",
                        borderBottom: "1px solid #f1f5f9",
                        background: notif.unread ? "#f8fafc" : "white",
                        cursor: "pointer"
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                        <span style={{ fontWeight: 600, color: "#0f172a", fontSize: "14px" }}>
                          {notif.title}
                        </span>
                        <span style={{ color: "#94a3b8", fontSize: "12px" }}>{notif.time}</span>
                      </div>
                      <p style={{ color: "#64748b", fontSize: "13px", margin: 0 }}>{notif.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Profile */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "6px 12px",
                  borderRadius: "10px",
                  border: "none",
                  background: "rgba(255,255,255,0.1)",
                  cursor: "pointer"
                }}
              >
                <div style={{
                  width: "32px",
                  height: "32px",
                  background: "linear-gradient(135deg, #ef4444, #f97316)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "13px"
                }}>
                  {user?.username?.charAt(0).toUpperCase() || "A"}
                </div>
                <ChevronDown size={16} color="#94a3b8" />
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
                      {user?.username || "Admin"}
                    </div>
                    <div style={{ color: "#ef4444", fontSize: "13px", fontWeight: 500 }}>Super Admin</div>
                  </div>
                  <div style={{ padding: "8px" }}>
                    <Link href="/admin/settings" style={{
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
          background: "#0f172a",
          display: "flex",
          flexDirection: "column",
          transition: "width 0.3s ease",
          position: "sticky",
          top: "64px",
          height: "calc(100vh - 64px)",
          overflow: "hidden"
        }}>
          <nav style={{ flex: 1, padding: "16px 12px", overflowY: "auto" }}>
            <div style={{ marginBottom: "24px" }}>
              {sidebarOpen && (
                <div style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  padding: "0 12px",
                  marginBottom: "8px"
                }}>
                  Platform Management
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
                      padding: "12px",
                      borderRadius: "10px",
                      marginBottom: "4px",
                      background: active ? "rgba(239, 68, 68, 0.15)" : "transparent",
                      color: active ? "#ef4444" : "#94a3b8",
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
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  padding: "0 12px",
                  marginBottom: "8px"
                }}>
                  Operations
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
                      padding: "12px",
                      borderRadius: "10px",
                      marginBottom: "4px",
                      background: active ? "rgba(239, 68, 68, 0.15)" : "transparent",
                      color: active ? "#ef4444" : "#94a3b8",
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
            borderTop: "1px solid rgba(255,255,255,0.1)"
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
                    padding: "12px",
                    borderRadius: "10px",
                    marginBottom: "4px",
                    background: active ? "rgba(239, 68, 68, 0.15)" : "transparent",
                    color: active ? "#ef4444" : "#94a3b8",
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
          overflowY: "auto",
          background: "#f1f5f9"
        }}>
          {children}
        </main>
      </div>
    </div>
  );
}
