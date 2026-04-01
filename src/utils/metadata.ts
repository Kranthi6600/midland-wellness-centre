import type { Metadata } from "next";

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };
  twitter?: {
    card?: "summary" | "summary_large_image";
    title?: string;
    description?: string;
    images?: string[];
  };
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords,
    canonical,
    openGraph,
    twitter
  } = config;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: openGraph?.title || title,
      description: openGraph?.description || description,
      url: canonical,
      siteName: "Midland Wellness Centre",
      locale: "en_CA",
      type: "website",
      images: openGraph?.images || [
        {
          url: "/assets/images/logo.png",
          width: 1200,
          height: 630,
          alt: "Midland Wellness Centre",
        },
      ],
    },
    twitter: {
      card: twitter?.card || "summary_large_image",
      title: twitter?.title || title,
      description: twitter?.description || description,
      images: twitter?.images || ["/assets/images/logo.png"],
      creator: "@midlandwellness",
    },
    alternates: {
      canonical: canonical,
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
}

export const defaultSEO = {
  title: "Midland Wellness Centre - Physiotherapy & Wellness Services",
  description: "Expert physiotherapy, chiropractic care, massage therapy and orthotics in Scarborough. Book your appointment today for comprehensive wellness services.",
  keywords: "physiotherapy, chiropractic, massage therapy, orthotics, wellness, scarborough, healthcare, rehabilitation",
};
