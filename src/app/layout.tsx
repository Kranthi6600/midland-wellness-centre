import type { Metadata } from "next";
import { Roboto, Caveat } from "next/font/google";
import styles from "./globals.css";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";

import "../../public/assets/css/bootstrap.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/responsive.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "700"],
  variable: "--roboto",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Midland Wellness Centre - Physiotherapy & Wellness Services",
  description: "Expert physiotherapy, chiropractic care, massage therapy and orthotics in Scarborough. Book your appointment today for comprehensive wellness services.",
  keywords: "physiotherapy, chiropractic, massage therapy, orthotics, wellness, scarborough, healthcare, rehabilitation",
  authors: [{ name: "Midland Wellness Centre" }],
  openGraph: {
    title: "Midland Wellness Centre",
    description: "Expert care for your health and wellness",
    type: "website",
    locale: "en_CA",
    siteName: "Midland Wellness Centre",
  },
  twitter: {
    card: "summary_large_image",
    title: "Midland Wellness Centre",
    description: "Expert care for your health and wellness",
  },
  robots: "index, follow",
  verification: {
    google: "your-google-verification-code", // Add when available
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Midland Wellness Centre",
    "url": "https://midlandwellnesscentre.com",
    "logo": "https://midlandwellnesscentre.com/assets/images/logo.png",
    "description": "Expert physiotherapy, chiropractic care, massage therapy and orthotics in Scarborough",
    "foundingDate": "1994",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-416-261-7246",
      "contactType": "customer service",
      "email": "info@midlandwellnesscentre.com",
      "availableLanguage": ["English"]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Midland Wellness Centre",
    "image": "https://midlandwellnesscentre.com/assets/images/logo.png",
    "telephone": "+1-416-261-7246",
    "email": "info@midlandwellnesscentre.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2555 Eglinton Ave. E",
      "addressLocality": "Scarborough",
      "addressRegion": "ON",
      "postalCode": "M1K 5J1",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7247,
      "longitude": -79.2670
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-14:00",
      "Su Closed"
    ]
  };

  return (
    <html lang="en-CA">
      <head>
        <link rel="canonical" href="https://midlandwellnesscentre.com" />
        <link rel="alternate" hrefLang="en" href="https://midlandwellnesscentre.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <meta name="theme-color" content="#007acc" />
        <meta name="msapplication-TileColor" content="#007acc" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema, null, 0)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema, null, 0)
          }}
        />
      </head>
      <body className={`${roboto.variable} ${caveat.variable} ${styles.fontBody}`}>
        {children}
        <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
