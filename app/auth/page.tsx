"use client";

import { useEffect, useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function RedirectToDashboard() {
  useEffect(() => {
    window.location.href = "/dashboard";
  }, []);
  
  return <p>Redirecting to dashboard...</p>;
}

export default function AuthPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full max-w-md mx-auto p-6">
        <Authenticator>
          {({ user }) => {
            if (user) {
              return <RedirectToDashboard />;
            }
            return <></>;
          }}
        </Authenticator>
      </div>
    </div>
  );
}