// app/dashboard/layout.tsx
"use client";

export const dynamic = "force-dynamic"; // prevents static prerendering

import Providers from "../providers/Providers";
import { Sidebar } from "../layout/Sidebar"; // adjust path if different
import { Topbar } from "../layout/Topbar";
import { cn } from "@/lib/utils";
import "./dashboard.css"; // remove this line if the css file doesn't exist

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