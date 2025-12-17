"use client";

import { Amplify } from "aws-amplify";
import { ReactNode } from "react";

// Configure Amplify - Update these values with your actual AWS config
const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID || "your-user-pool-id",
      userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID || "your-client-id",
      signUpVerificationMethod: "code" as const,
      loginWith: {
        email: true,
      },
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    },
  },
};

// Initialize Amplify only on the client side
if (typeof window !== "undefined") {
  Amplify.configure(amplifyConfig);
}

interface AmplifyProviderProps {
  children: ReactNode;
}

export function AmplifyProvider({ children }: AmplifyProviderProps) {
  return <>{children}</>;
}
