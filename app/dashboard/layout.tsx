"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const handleSignOut = () => {
    window.location.href = "/";
  };

  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/startups", label: "Startups" },
    { href: "/dashboard/programs", label: "Programs" },
    { href: "/dashboard/mentors", label: "Mentors" },
    { href: "/dashboard/resources", label: "Resources" },
    { href: "/dashboard/settings", label: "Settings" },
    { href: "/dashboard/help", label: "Help" },
  ];

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f9fafb" }}>
      {/* Header */}
      <header style={{
        backgroundColor: "white",
        borderBottom: "1px solid #e5e7eb",
        height: "64px",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{ padding: "8px", border: "none", background: "transparent", cursor: "pointer", fontSize: "20px" }}
          >
            ☰
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "36px",
              height: "36px",
              background: "linear-gradient(135deg, #2563eb, #f97316)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold"
            }}>
              IH
            </div>
            <span style={{ fontSize: "18px", fontWeight: 700, color: "#111827" }}>Incubation Hub</span>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "16px", fontWeight: 600, color: "#111827", margin: 0 }}>Dashboard</h1>
          <p style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}>Welcome back, John Doe!</p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "14px",
            fontWeight: 600
          }}>
            JD
          </div>
          <button
            onClick={handleSignOut}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              backgroundColor: "#fee2e2",
              color: "#dc2626",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer"
            }}
          >
            Sign Out
          </button>
        </div>
      </header>

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        {sidebarOpen && (
          <aside style={{
            width: "256px",
            backgroundColor: "white",
            borderRight: "1px solid #e5e7eb",
            padding: "16px"
          }}>
            <nav>
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      display: "block",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      marginBottom: "4px",
                      backgroundColor: active ? "#eff6ff" : "transparent",
                      color: active ? "#2563eb" : "#4b5563",
                      fontSize: "14px",
                      fontWeight: 500
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main style={{ flex: 1, padding: "24px", overflowY: "auto" }}>
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: "white",
        borderTop: "1px solid #e5e7eb",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <span style={{ fontSize: "13px", color: "#6b7280" }}>
          © 2025 Incubation Hub. All rights reserved.
        </span>
        <span style={{ fontSize: "13px", color: "#9ca3af" }}>
          Version 1.0.0
        </span>
      </footer>
    </div>
  );
}