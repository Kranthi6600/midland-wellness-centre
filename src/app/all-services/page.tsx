import AllServicesClient from "./AllServicesClient";
import { generateMetadata, defaultSEO } from "@/utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  ...defaultSEO,
  title: "All Services | Midland Wellness Centre - Scarborough",
  description: "Explore all our healthcare services including physiotherapy, chiropractic adjustments, massage therapy, electrotherapy, kinesio taping, and custom orthotics at Midland Wellness Centre in Scarborough.",
  keywords: "all services, physiotherapy, chiropractic, massage therapy, electrotherapy, kinesio taping, orthotics, scarborough healthcare",
  canonical: "/all-services",
});

export default function Departments_Page() {
  return <AllServicesClient />;
}
