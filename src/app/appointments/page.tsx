import AppointmentsClient from "./AppointmentsClient";
import { generateMetadata, defaultSEO } from "@/utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  ...defaultSEO,
  title: "Book an Appointment | Midland Wellness Centre - Scarborough",
  description: "Schedule your appointment with Midland Wellness Centre in Scarborough. Book online for expert physiotherapy, chiropractic care, massage therapy, and wellness services.",
  keywords: "book appointment, physiotherapy appointment scarborough, chiropractor booking, massage therapy appointment, healthcare appointment, schedule visit",
  canonical: "/appointments",
});

export default function Appointments_Page() {
  return <AppointmentsClient />;
}
