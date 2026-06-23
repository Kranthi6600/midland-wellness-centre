import Layout from "../../../components/layout/Layout";
import Service from "../../../components/sections/home/Service";
import Working from "../../../components/sections/home/Working";
import Cta from "../../../components/sections/home/Cta";
import { fetchServices } from "@/lib/api";
import { generateMetadata, defaultSEO } from "@/utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  ...defaultSEO,
  title: "Our Services | Midland Wellness Centre - Scarborough",
  description: "Discover comprehensive healthcare services at Midland Wellness Centre. Expert physiotherapy, chiropractic care, massage therapy, and orthotics in Scarborough. Book your appointment today.",
  keywords: "services midland wellness centre, physiotherapy scarborough, chiropractic care, massage therapy, orthotics, healthcare services",
  openGraph: {
    title: "Our Healthcare Services | Midland Wellness Centre",
    description: "Expert physiotherapy, chiropractic care, massage therapy, and orthotics services in Scarborough. Comprehensive healthcare for your wellness needs.",
  },
  canonical: "/services"
});

export default async function ServicesPage() {
  let apiServices;
  try {
    const response = await fetchServices({ limit: 100 });
    apiServices = response.data;
  } catch {
    apiServices = undefined;
  }

  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Services">
        <Service services={apiServices} />
        <Working />
        <Cta />
      </Layout>
    </div>
  )
}
