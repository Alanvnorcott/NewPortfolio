import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./provider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: ".NET Developer & Python Specialist | Full-Stack Cloud Applications – Open to Relocation | Alan Norcott",
  description: "Building scalable enterprise solutions with .NET, Python, and modern cloud technologies. Specializing in AI integration, observability, and security. Currently at Dismas Charities, open to relocation.",
  keywords: "Full-Stack Developer, .NET Developer, React Developer, TypeScript, Python, Azure, AWS, Software Engineer, C#, ASP.NET Core, JavaScript, Node.js, Cloud Computing, AI, Machine Learning, Open to Relocation, NYC, Remote Work",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alan Norcott",
    "jobTitle": ".NET Developer & Python Specialist",
    "description": "Building scalable enterprise solutions with .NET, Python, and modern cloud technologies. Specializing in AI integration, observability, and security",
    "url": "https://alannorcott.com",
    "image": "https://alannorcott.com/ogsite.png",
    "email": "alannorcott@example.com",
    "telephone": "+1-XXX-XXX-XXXX",
    "sameAs": [
      "https://github.com/alannorcott",
      "https://linkedin.com/in/alannorcott",
      "https://alanvnorcott.substack.com"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "NYC Metropolitan Area",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "knowsAbout": [
      ".NET", "C#", "ASP.NET Core", "React", "TypeScript", "JavaScript", 
      "Python", "FastAPI", "Azure", "AWS", "Docker", "Kubernetes", 
      "Terraform", "SQL Server", "OAuth2", "ELK Stack", "Node.js",
      "Cloud Computing", "AI", "Machine Learning", "Full-Stack Development"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Dismas Charities"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Drew University"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Engineer",
      "occupationLocation": {
        "@type": "City",
        "name": "NYC Metropolitan Area"
      },
      "skills": [
        ".NET Development", "React Development", "Cloud Computing", 
        "Full-Stack Development", "AI Integration", "Database Design"
      ]
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favIcon.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
// removed sentry