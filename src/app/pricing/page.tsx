import PricingClient from "./PricingClient";
import { generateMetadata, defaultSEO } from "@/utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  ...defaultSEO,
  title: "Pricing | Midland Wellness Centre - Scarborough",
  description: "View our affordable pricing plans for physiotherapy, chiropractic care, massage therapy, and wellness services at Midland Wellness Centre in Scarborough.",
  keywords: "pricing, healthcare plans, physiotherapy cost, chiropractic pricing, massage therapy rates, scarborough healthcare pricing",
  canonical: "/pricing",
});

export default function Portfolio_Page() {
  return <PricingClient />;
}
