import type { Metadata } from "next";
import "./globals.css";
import { AmplifyProvider } from "./providers/AmplifyProvider";

export const metadata: Metadata = {
  title: "CreatorHub - Build, Monetize & Scale Your Creator Empire",
  description: "The all-in-one platform for content creators, coaches, and mentors to create courses, grow their audience, and monetize their expertise.",
  keywords: "content creator, online courses, e-learning, monetization, creator economy",
  openGraph: {
    title: "CreatorHub - Build Your Creator Empire",
    description: "Create courses, grow your audience, and monetize your expertise with CreatorHub.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AmplifyProvider>{children}</AmplifyProvider>
      </body>
    </html>
  );
}
