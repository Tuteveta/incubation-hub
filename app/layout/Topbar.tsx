// app/layout/Topbar.tsx
"use client";

import { useAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";
import { Menu } from "@headlessui/react";
import { Button } from "@/components/ui/button"; // adjust path if necessary

export function Topbar() {
  const { user, signOut } = useAuthenticator();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      if (typeof signOut === "function") {
        await signOut();             // performs sign out in Amplify
      } else {
        console.warn("signOut is not a function");
      }
    } catch (err) {
      console.error("signOut failed", err);
    } finally {
      // After signOut, redirect to the public auth page so the user sees login.
      router.push("/auth");
    }
  };

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b bg-background">
      <div>
        {/* search input etc. */}
      </div>

      <div className="flex items-center gap-3">
        {/* ... other topbar buttons ... */}

        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center gap-2 rounded-full px-2 py-1 border">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white text-sm">
              {user?.username?.[0]?.toUpperCase() ?? "U"}
            </div>
            <span className="hidden md:inline">{user?.username ?? "User"}</span>
          </Menu.Button>

          <Menu.Items className="absolute right-0 mt-2 w-48 bg-card border rounded-md shadow-lg py-1 z-50">
            <Menu.Item>
              {({ active }) => (
                <button className={`w-full text-left px-4 py-2 text-sm ${active ? "bg-accent" : ""}`}>
                  Profile
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleSignOut}
                  className={`w-full text-left px-4 py-2 text-sm text-destructive ${active ? "bg-accent" : ""}`}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </header>
  );
}