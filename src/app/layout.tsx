import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "@/components/BootstrapClient";
import "../styles/global.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Computer-Bestel | High-Performance Gaming & Business Computers",
  description:
    "Shop premium custom-built gaming PCs, business computers, and pre-built systems with the latest components. Configure your perfect computer at Computer-Bestel.",
  keywords:
    "gaming PC, custom computer, business computers, pre-built PC, computer configurator, high-performance computers",
  openGraph: {
    title: "Computer-Bestel | High-Performance Gaming & Business Computers",
    description:
      "Shop premium custom-built gaming PCs, business computers, and pre-built systems with the latest components.",
    // url: "https://computer-bestel.com",
    siteName: "Computer-Bestel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Computer-Bestel featured products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    // canonical: "https://computer-bestel.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
