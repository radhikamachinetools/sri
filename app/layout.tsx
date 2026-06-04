// app/layout.tsx

import type { Metadata, Viewport } from "next";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper";
import { ToastProvider } from "./components/ToastProvider";

export const metadata: Metadata = {
  title: {
    default: "Shree Radhey Industries - Premium Stone Processing Machinery",
    template: "%s | Shree Radhey Industries"
  },
  description: "Leading manufacturer of stone processing machinery including granite cutting machines, line polishing machines, handling cranes, and epoxy resin lines. Trusted by 500+ industries worldwide.",
  keywords: [
    "stone processing machinery",
    "granite cutting machines",
    "line polishing machines",
    "handling cranes",
    "epoxy resin line",
    "stone machinery manufacturer",
    "industrial machinery",
    "Jodhpur machinery",
    "Shree Radhey Industries"
  ],
  authors: [{ name: "Shree Radhey Industries" }],
  creator: "Shree Radhey Industries",
  publisher: "Shree Radhey Industries",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Shree Radhey Industries - Premium Stone Processing Machinery',
    description: 'Leading manufacturer of stone processing machinery. Trusted by 500+ industries worldwide.',
    siteName: 'Shree Radhey Industries',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shree Radhey Industries - Stone Processing Machinery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shree Radhey Industries - Premium Stone Processing Machinery',
    description: 'Leading manufacturer of stone processing machinery. Trusted by 500+ industries worldwide.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#d3446b' },
    { media: '(prefers-color-scheme: dark)', color: '#a73454' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/SRIlogo.png" sizes="any" />
        <link rel="icon" href="/SRIlogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/SRIlogo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SRI" />
        <meta name="application-name" content="Shree Radhey Industries" />
        <meta name="msapplication-TileColor" content="#d3446b" />
        <meta name="theme-color" content="#d3446b" />
      </head>
      <body className="antialiased">
        <ToastProvider>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        </ToastProvider>
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Shree Radhey Industries",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/SRIlogo.png`,
              "description": "Leading manufacturer of stone processing machinery including granite cutting machines, line polishing machines, handling cranes, and epoxy resin lines.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plot No. 06, Ram Nagar, Sangriya",
                "addressLocality": "Jodhpur",
                "addressRegion": "Rajasthan",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9983813366",
                "contactType": "customer service",
                "email": "rmt.jodhpur@gmail.com"
              },
              "sameAs": [
                "https://www.facebook.com/radhikamachinetools",
                "https://www.linkedin.com/company/radhika-machine-tools"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}