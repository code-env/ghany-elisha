import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Ghany Elisha",
  description: "Happy birthday to my boy it's been a minute",
};

const satoshi = localFont({
  src: [
    {
      path: "../fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-satoshi",
});
const geist = localFont({
  src: [
    {
      path: "../fonts/geist/GeistMono-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-geist",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(satoshi.variable, geist.variable, "font-sans")}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
