// app/layout.tsx

import type { Metadata, Viewport } from "next";
import "./globals.css";
import ConditionalLayout from "./components/ConditionalLayout";

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
    { media: '(prefers-color-scheme: light)', color: '#B7950B' },
    { media: '(prefers-color-scheme: dark)', color: '#FAF3D9' },
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
        <link rel="icon" href="/images/radhika-logo.png" sizes="any" />
        <link rel="icon" href="/images/radhika-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/radhika-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SRI" />
        <meta name="application-name" content="Shree Radhey Industries" />
        <meta name="msapplication-TileColor" content="#B7950B" />
        <meta name="theme-color" content="#B7950B" />
      </head>
      <body className="antialiased">
        <ConditionalLayout>{children}</ConditionalLayout>
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Shree Radhey Industries",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/images/radhika-logo.png`,
              "description": "Leading manufacturer of stone processing machinery including granite cutting machines, line polishing machines, handling cranes, and epoxy resin lines.",
              "address": [
                {
                  "@type": "PostalAddress",
                  "name": "Office",
                  "streetAddress": "Mali, Nagorion Ka Bass, Shiv Temple",
                  "addressLocality": "Jodhpur",
                  "postalCode": "342001",
                  "addressRegion": "Rajasthan",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "name": "Factory",
                  "streetAddress": "Khasra No. 155/1, Plot No. 6-B, Ram Nagar Salawas Road, Sangriya",
                  "addressLocality": "Jodhpur",
                  "postalCode": "342013",
                  "addressRegion": "Rajasthan",
                  "addressCountry": "IN"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9983813366",
                "contactType": "customer service",
                "email": "shreeradheyindustriesjodhpur@gmail.com"
              },
              "sameAs": [
                "https://www.shreeradheyindustriesjodhpur.com"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}