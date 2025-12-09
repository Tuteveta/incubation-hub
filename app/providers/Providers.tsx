"use client";

import { Amplify } from "aws-amplify";
import { useEffect } from "react";
import outputs from "@/amplify_outputs.json";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Amplify.configure(outputs, { ssr: true });
  }, []);

  return <>{children}</>;
}