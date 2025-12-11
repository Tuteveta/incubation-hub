"use client";

import { useEffect } from "react";
import { Amplify } from "aws-amplify";
import { signOut } from "aws-amplify/auth";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs, { ssr: true });

export default function SignOutPage() {
  useEffect(() => {
    async function doSignOut() {
      try {
        await signOut({ global: true });
        console.log("Signed out successfully");
      } catch (err) {
        console.log("Sign out error:", err);
      }
      // Clear everything
      localStorage.clear();
      sessionStorage.clear();
      // Redirect to auth
      window.location.href = "/auth";
    }
    
    doSignOut();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Signing out...</p>
    </div>
  );
}