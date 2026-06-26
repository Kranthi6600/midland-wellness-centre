import Portfolio2Client from "./Portfolio2Client";
import { generateMetadata, defaultSEO } from "@/utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  ...defaultSEO,
  title: "Portfolio Two | Midland Wellness Centre - Scarborough",
  description: "View our portfolio of successful treatments and patient care highlights at Midland Wellness Centre in Scarborough.",
  canonical: "/portfolio-2",
});

export default function Portfolio_Page_Two() {
  return <Portfolio2Client />;
}
