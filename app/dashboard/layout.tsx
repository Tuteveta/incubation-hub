"use client";

import { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { getCurrentUser } from "aws-amplify/auth";
import { DashboardLayout } from "../layout/DashboardLayout";
import { Loader2 } from "lucide-react";
import outputs from "@/amplify_outputs.json";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Configure Amplify first
    Amplify.configure(outputs, { ssr: true });
    
    // Then check auth
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const user = await getCurrentUser();
      if (user) {
        console.log("User authenticated:", user.username);
        setIsAuthenticated(true);
      } else {
        // No user, redirect to auth
        window.location.href = "/auth";
      }
    } catch (err) {
      console.log("Not authenticated, redirecting to auth");
      window.location.href = "/auth";
    } finally {
      setChecking(false);
    }
  };

  // Show loading while checking auth
  if (checking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Only render dashboard if authenticated
  if (!isAuthenticated) {
    return null;
  }

  return <DashboardLayout>{children}</DashboardLayout>;
}