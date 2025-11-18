import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./provider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import RecruiterSEO from "@/components/RecruiterSEO";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: ".NET Developer & Python Specialist | Full-Stack Cloud Applications | Alan Norcott",
  description: "Building scalable enterprise solutions with .NET, Python, and modern cloud technologies. Specializing in AI integration, observability, and security.",
  keywords: "Full-Stack Developer, .NET Developer, React Developer, TypeScript, Python, Azure, AWS, Software Engineer, C#, ASP.NET Core, JavaScript, Node.js, Cloud Computing, AI, Machine Learning",
  authors: [{ name: "Alan Norcott" }],
  creator: "Alan Norcott",
  openGraph: {
    title: ".NET Developer & Python Specialist | Full-Stack Cloud Applications | Alan Norcott",
    description: "Building scalable enterprise solutions with .NET, Python, and modern cloud technologies. Specializing in AI integration, observability, and security.",
    url: "https://alannorcott.com",
    siteName: "Alan Norcott Portfolio",
    images: [
      {
        url: "/ogsite.png",
        width: 1200,
        height: 630,
        alt: "Alan Norcott - Full-Stack Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ".NET Developer & Python Specialist | Full-Stack Cloud Applications | Alan Norcott",
    description: "Building scalable enterprise solutions with .NET, Python, and modern cloud technologies. Specializing in AI integration, observability, and security.",
    images: ["/ogsite.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD is injected via app/head.tsx to avoid duplication here.

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favIcon.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* Non-rendered SEO helper component */}
        <RecruiterSEO />

        {/* Robots-friendly invisible keywords block — indexable but not visible */}
        <span
          aria-hidden="true"
          style={{ display: "none", visibility: "hidden" }}
        >
          Mid-level software engineer with strengths in backend, cloud, and security engineering.
          Experience across Azure and AWS using C#, ASP.NET, SQL Server, React, TypeScript, and Python.
          Projects aligned with engineering teams at Microsoft, GitHub, Atlassian, NVIDIA, Stripe, and Datadog.
          Familiar with Munich technology ecosystems including BMW, Allianz, Siemens, Celonis, CHECK24, Infineon, and Personio.
          EU Blue Card eligible engineering background.
        </span>

        {/* Safe crawler comments; not visible to users */}
        {/* Targets: mid-level backend engineer .NET Azure; cloud security engineer; API platform;
           SQL Server performance; AWS↔Azure migration; distributed systems reliability */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
// removed sentry