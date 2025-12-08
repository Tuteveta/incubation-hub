// app/providers/Providers.tsx
"use client";

import React from "react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react"; // provides the context
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

export default function Providers({ children }: { children?: React.ReactNode }) {
  // Use Authenticator.Provider to provide the auth context WITHOUT rendering the UI here.
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
}