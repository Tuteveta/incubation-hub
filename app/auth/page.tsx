// app/auth/page.tsx
"use client";

import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./auth.css"; // optional extra styles for the auth page

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <ThemeProvider>
        <div className="w-full max-w-md mx-auto p-6">
          {/* The Amplify Authenticator provides both Sign In and Create Account tabs */}
          <Authenticator>
            {/* You can add children here if you want to customize the slots */}
          </Authenticator>
        </div>
      </ThemeProvider>
    </div>
  );
}
