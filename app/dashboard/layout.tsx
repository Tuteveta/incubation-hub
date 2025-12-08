// app/dashboard/layout.tsx
"use client";

import Providers from "../providers/Providers"; // keep this path if Providers is at app/providers
import { Sidebar } from "../layout/Sidebar";     // adjust paths if needed
import { Topbar } from "../layout/Topbar";
import { cn } from "@/lib/utils";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className={cn("flex h-screen w-full")}>
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Topbar />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </Providers>
  );
}
