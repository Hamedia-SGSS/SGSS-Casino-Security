import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Secure Guard Security Services || Casino Security Support",
  description:
    "Professional casino security support for entrance monitoring, gaming floor presence, restricted area control, guest disputes, cash handling, and event safety.",
  keywords: [
    "casino security",
    "gaming property security",
    "card room security",
    "cash handling support",
    "entrance monitoring",
    "floor presence",
    "secure guard",
    "event security",
    "dispute de-escalation"
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Favicon.png",
  },
  openGraph: {
    title: "Secure Guard Security Services || Casino Security Support",
    description:
      "Professional casino security support for entrance monitoring, gaming floor presence, restricted area control, guest disputes, cash handling, and event safety.",
    type: "website",
  },
};

import { ScrollToTop } from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
