// app/layout.tsx

import { Amplify } from 'aws-amplify';
import config from '@/amplify_outputs.json';
// OR if using Gen 2:
// import outputs from '@/amplify_outputs.json';

Amplify.configure(config);
// OR for Gen 2:
// Amplify.configure(outputs, { ssr: true });
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Incubation Hub",
  description: "Startup incubation portal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}