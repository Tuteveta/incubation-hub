"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Home, LayoutDashboard, Briefcase, GraduationCap, Users } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Welcome", href: "/", icon: Home },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Startups", href: "/startups", icon: Briefcase },
  { name: "Programs", href: "/programs", icon: GraduationCap },
  { name: "Mentorship", href: "/mentorship", icon: Users },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={cn("flex flex-col h-screen transition-all", collapsed ? "w-20" : "w-64")}>
      <div className="flex items-center justify-between p-4 border-r bg-card">
        <div className="flex items-center gap-3">
          <div className="rounded-md bg-gradient-to-br from-emerald-400 to-sky-500 text-white w-9 h-9 flex items-center justify-center font-bold">
            IH
          </div>
          {!collapsed && <div className="font-semibold">Incubation Hub</div>}
        </div>

        <button
          aria-label="Toggle sidebar"
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-muted"
        >
          <Menu size={18} />
        </button>
      </div>

      <nav className="flex-1 overflow-auto px-2 py-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm",
                active
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="min-w-[18px]" />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t bg-card">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-slate-700 flex items-center justify-center text-white">U</div>
          {!collapsed && (
            <div className="flex-1">
              <div className="text-sm font-medium">User</div>
              <div className="text-xs text-muted-foreground">Founder</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}