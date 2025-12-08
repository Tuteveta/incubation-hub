// app/providers/Providers.tsx
"use client";

import React, { useEffect } from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function Providers({ children }: { children?: React.ReactNode }) {
  useEffect(() => {
    const region = process.env.NEXT_PUBLIC_AWS_REGION;
    const userPoolId = process.env.NEXT_PUBLIC_AWS_USER_POOL_ID;
    const userPoolClientId = process.env.NEXT_PUBLIC_AWS_USER_POOL_CLIENT_ID;

    if (!region || !userPoolId || !userPoolClientId) {
      console.warn("Amplify missing env vars (client). Ensure .env.local has NEXT_PUBLIC_* keys.");
      return;
    }

    const authConfig = {
      Auth: {
        region,
        userPoolId,
        userPoolWebClientId: userPoolClientId,
      },
    };

    // Cast to any to avoid TS type mismatch errors while preserving runtime behavior
    Amplify.configure(authConfig as any);

    // dev-time diagnostic
    // eslint-disable-next-line no-console
    console.log("Amplify configured (client):", (Amplify as any)._config?.Auth);
  }, []);

  return <Authenticator.Provider>{children}</Authenticator.Provider>;
}
