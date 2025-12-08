// app/layout/Topbar.tsx
"use client";

import { useAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";

export function Topbar() {
  const { user, signOut } = useAuthenticator();
  const router = useRouter();

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

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b">
      <div>Incubation Hub</div>
      <div>
        <button onClick={handleSignOut} className="px-3 py-1 rounded border">
          Sign out
        </button>
      </div>
    </header>
  );
}