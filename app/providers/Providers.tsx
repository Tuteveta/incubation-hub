// app/providers/Providers.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// Build the config from NEXT_PUBLIC_* env vars (same as before)
const REGION = process.env.NEXT_PUBLIC_AWS_REGION;
const USER_POOL_ID = process.env.NEXT_PUBLIC_AWS_USER_POOL_ID;
const USER_POOL_CLIENT_ID = process.env.NEXT_PUBLIC_AWS_USER_POOL_CLIENT_ID;
const IDENTITY_POOL_ID = process.env.NEXT_PUBLIC_AWS_IDENTITY_POOL_ID;
const COGNITO_DOMAIN = process.env.NEXT_PUBLIC_COGNITO_DOMAIN;
const REDIRECT_SIGNIN = process.env.NEXT_PUBLIC_COGNITO_REDIRECT_SIGNIN;
const REDIRECT_SIGNOUT = process.env.NEXT_PUBLIC_COGNITO_REDIRECT_SIGNOUT;

const buildAuthConfig = () => {
  const auth: any = {
    Auth: {
      region: REGION,
      userPoolId: USER_POOL_ID,
      userPoolWebClientId: USER_POOL_CLIENT_ID,
      ...(IDENTITY_POOL_ID ? { identityPoolId: IDENTITY_POOL_ID } : {}),
    },
  };

  if (COGNITO_DOMAIN && REDIRECT_SIGNIN && REDIRECT_SIGNOUT && REGION) {
    auth.Auth.oauth = {
      domain: `${COGNITO_DOMAIN}.auth.${REGION}.amazoncognito.com`,
      scope: ["openid", "email", "profile"],
      redirectSignIn: REDIRECT_SIGNIN,
      redirectSignOut: REDIRECT_SIGNOUT,
      responseType: "code",
    };
  }
  return auth;
};

export default function Providers({ children }: { children?: React.ReactNode }) {
  // track whether Amplify was configured on the client
  const [configured, setConfigured] = useState(false);

  useEffect(() => {
    // Only run on client
    const missing: string[] = [];
    if (!REGION) missing.push("NEXT_PUBLIC_AWS_REGION");
    if (!USER_POOL_ID) missing.push("NEXT_PUBLIC_AWS_USER_POOL_ID");
    if (!USER_POOL_CLIENT_ID) missing.push("NEXT_PUBLIC_AWS_USER_POOL_CLIENT_ID");

    if (missing.length > 0) {
      // eslint-disable-next-line no-console
      console.warn("Amplify Auth: missing env vars (client). Add to .env.local:", missing);
      return;
    }

    const cfg = buildAuthConfig();
    Amplify.configure(cfg);
    // eslint-disable-next-line no-console
    console.log("Amplify configured (client):", (Amplify as any)._config?.Auth ?? cfg.Auth);
    setConfigured(true);
  }, []);

  // We still render the provider regardless; `useAuthenticator()` expects this provider.
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
}