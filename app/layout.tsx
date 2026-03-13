import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IPSGlobal | Digital Transformation & BPO Solutions",
  description: "IPSGlobal is a global leader in Digital Transformation, BPO services, Software Development, and Finance & Accounting. We empower businesses with scalable backend infrastructure and automated workflows.",
  keywords: "IPSGlobal, Digital Transformation, BPO Services, Software Development, Business Automation, Finance Outsourcing, Accounting Services, Cloud Solutions, IT Consulting",
  authors: [{ name: "IPSGlobal Team" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "IPSGlobal | Scale Faster & Smarter",
    description: "Empowering businesses through digital transformation, automation, and scalable backend infrastructure.",
    url: "https://ipsglobal.co",
    siteName: "IPSGlobal",
    images: [
      {
        url: "/og-image.png", // Recommended size: 1200x630
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPSGlobal | Scale Faster & Smarter",
    description: "Empowering businesses through digital transformation, automation, and scalable backend infrastructure.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/IPS White.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-gray-50`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
