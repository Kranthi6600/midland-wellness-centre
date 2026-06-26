import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

function toAbsoluteUrl(path?: string): string | undefined {
  if (!path) return undefined;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

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

  const canonicalUrl = toAbsoluteUrl(canonical);

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: openGraph?.title || title,
      description: openGraph?.description || description,
      url: canonicalUrl,
      siteName: "Midland Wellness Centre",
      locale: "en_CA",
      type: "website",
      images: openGraph?.images || [
        {
          url: "/assets/images/header_logo.png",
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
      images: twitter?.images || ["/assets/images/header_logo.png"],
      creator: "@midlandwellness",
    },
    alternates: {
      canonical: canonicalUrl,
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
