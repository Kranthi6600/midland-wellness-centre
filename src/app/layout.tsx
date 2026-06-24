import type { Metadata } from "next";
import { Roboto, Caveat } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";
import NextTopLoader from "nextjs-toploader";

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
    google: "buOxD8HhApLh3sPUIkTEmB0Cmrg9v3epoqoA9Foozkc",
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
    "logo": "https://midlandwellnesscentre.com/assets/images/header_logo.png",
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
    "image": "https://midlandwellnesscentre.com/assets/images/header_logo.png",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P3J676LC');`,
          }}
        />
        <link rel="icon" href="/assets/images/header_logo.ico" sizes="any" />
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
      <body className={`${roboto.variable} ${caveat.variable} font-body`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3J676LC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <NextTopLoader
          color="#007acc"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #007acc,0 0 5px #007acc"
          template='<div class="bar" role="bar"><div class="peg"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        {children}
        <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
