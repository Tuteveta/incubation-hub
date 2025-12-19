"use client";

import { Amplify } from "aws-amplify";
import { ReactNode } from "react";

// Check if AWS credentials are configured
const hasValidConfig = 
  process.env.NEXT_PUBLIC_USER_POOL_ID && 
  process.env.NEXT_PUBLIC_USER_POOL_ID !== "your-user-pool-id" &&
  process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID &&
  process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID !== "your-client-id";

// Configure Amplify only if valid credentials exist
if (typeof window !== "undefined" && hasValidConfig) {
  const amplifyConfig = {
    Auth: {
      Cognito: {
        userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID!,
        userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID!,
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
  Amplify.configure(amplifyConfig);
}

// Export flag for components to check
export const isAmplifyConfigured = hasValidConfig;

interface AmplifyProviderProps {
  children: ReactNode;
}

export function AmplifyProvider({ children }: AmplifyProviderProps) {
  return <>{children}</>;
}
