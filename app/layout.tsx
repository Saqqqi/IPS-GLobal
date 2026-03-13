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
  title: {
    default: "IPS Global | Integrated Platform Systems: Design, Development & SEO",
    template: "%s | IPS Global"
  },
  description: "IPS Global (Integrated Platform Systems) delivers premium design, development, and SEO solutions from our London studio. High-energy digital products with 2 months of post-launch maintenance.",
  keywords: [
    "Integrated Platform Systems",
    "IPS Global",
    "Digital Agency London",
    "Web Design London",
    "Software Development UK",
    "Strategic SEO London",
    "UI/UX Design Agency",
    "Website Rescue",
    "Legacy Code Modernization"
  ],
  authors: [{ name: "IPS Global", url: "https://ipsglobal.co" }],
  creator: "IPS Global",
  publisher: "IPS Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ipsglobal.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IPS Global | Integrated Platform Systems: Design, Development & SEO",
    description: "Scale faster and smarter with London's premier integrated digital agency. Design, Development, and SEO under one roof.",
    url: "https://ipsglobal.co",
    siteName: "IPS Global",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists or plan for it
        width: 1200,
        height: 630,
        alt: "IPS Global - Integrated Digital Agency",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPS Global | Integrated Platform Systems: Design, Development & SEO",
    description: "High-energy design, development, and SEO solutions based in London.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/IPS White.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/IPS White.svg",
    apple: "/IPS White.svg",
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
