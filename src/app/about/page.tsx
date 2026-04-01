// About page - Server component with SEO metadata
// Interactive components moved to separate client components to avoid metadata export conflicts
import Layout from "../../../components/layout/Layout";
import Working from "../../../components/sections/home/Working";
import Cta from "../../../components/sections/home/Cta";
import AboutContent from "./components/AboutContent";
import ServicesSection from "./components/ServicesSection";
import FunFactSection from "./components/FunFactSection";
import { generateMetadata, defaultSEO } from "@/utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  ...defaultSEO,
  title: "About Us - 30+ Years of Excellence | Midland Wellness Centre",
  description: "Learn about Midland Wellness Centre's 30+ years of providing expert physiotherapy, chiropractic care, and wellness services in Scarborough. Discover our mission and specialized care approach.",
  keywords: "about midland wellness centre, physiotherapy scarborough, chiropractic care, wellness center history, healthcare professionals",
  openGraph: {
    title: "About Midland Wellness Centre | 30+ Years of Healthcare Excellence",
    description: "Discover our story of providing comprehensive physiotherapy and wellness care in Scarborough for over 30 years.",
  },
  canonical: "/about"
});

export default function AboutPage() {
    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
                <AboutContent />
                <ServicesSection />
                <FunFactSection />
                <Working />
                <Cta />
            </Layout>
        </div>
    )
}
