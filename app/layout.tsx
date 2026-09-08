import type { Metadata } from "next";
import { ThemeProvider } from "./provider";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alan Norcott — Video & Platform Engineer",
  description: "Software engineer specializing in production video playback, TypeScript platforms, release engineering, and cloud infrastructure.",
  icons: {
    icon: [
      { url: "/newFavIcon/favicon.ico", sizes: "any" },
      { url: "/newFavIcon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/newFavIcon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/newFavIcon/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
// removed sentry
