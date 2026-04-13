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
    default: "IPS Global | Digital Agency London | Web Development, Design & SEO",
    template: "%s | IPS Global",
  },

  description:
    "IPS Global is a leading London-based digital agency specializing in high-performance web development, UI/UX design, and strategic SEO. We build scalable, conversion-focused digital platforms for modern businesses.",

  keywords: [
    // Brand
    "IPS Global",
    "Integrated Platform Systems",

    // Core Services
    "Digital Agency London",
    "Web Development London",
    "Website Design London",
    "UI UX Design Agency UK",
    "SEO Agency London",
    "Technical SEO Experts",

    // High Intent Keywords
    "Hire Web Developers UK",
    "Custom Software Development London",
    "Enterprise Web Solutions",
    "Full Stack Development Agency",
    "Conversion Focused Web Design",

    // Niche / Authority Keywords
    "Scalable Digital Platforms",
    "Startup Website Development",
    "Business Website Solutions UK",
    "Legacy Code Modernization",
    "Website Performance Optimization",
    "Website Redesign Services",
    "Ecommerce Development UK",

    // Location SEO
    "London Digital Agency",
    "UK Web Development Company",
  ],

  authors: [{ name: "IPS Global", url: "https://ipsglobal.co.uk" }],
  creator: "IPS Global",
  publisher: "IPS Global",

  metadataBase: new URL("https://ipsglobal.co.uk"),

  alternates: {
    canonical: "/",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // 🔥 Open Graph (for social + Google preview)
  openGraph: {
    title: "IPS Global | Leading Digital Agency in London",
    description:
      "Transform your business with IPS Global. Expert web development, modern UI/UX design, and data-driven SEO strategies tailored for growth.",
    url: "https://ipsglobal.co.uk",
    siteName: "IPS Global",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IPS Global - Digital Agency London",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  // 🔥 Twitter Optimization
  twitter: {
    card: "summary_large_image",
    title: "IPS Global | Web Development, Design & SEO Experts",
    description:
      "London-based digital agency delivering high-performance websites, scalable systems, and growth-driven SEO.",
    images: ["/og-image.png"],
  },

  // 🔥 Icons (Corrected to use existing SVG)
  icons: {
    icon: [
      { url: "/IPS White.svg", type: "image/svg+xml" },
    ],
    shortcut: "/IPS White.svg",
    apple: "/IPS White.svg",
  },

  // 🔥 Robots (fully optimized for indexing)
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 🔥 Extra SEO Signals (advanced)
  category: "technology",
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
