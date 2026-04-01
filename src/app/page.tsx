import Layout from "../../components/layout/Layout";
import Working from "../../components/sections/home/Working";
import AboutTwo from "../../components/sections/home/About_Two";
import Banner from "../../components/sections/home/Banner";
import Chooseus from "../../components/sections/home/Chooseus";
import Service from "../../src/components/sections/home/Service";
import Cta from "../../components/sections/home/Cta";
import { generateMetadata, defaultSEO } from "@/utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  ...defaultSEO,
  title: "Midland Wellness Centre - Expert Physiotherapy & Wellness Care in Scarborough",
  description: "Comprehensive physiotherapy, chiropractic care, massage therapy and orthotics in Scarborough. 30+ years of experience. Book your appointment today for personalized wellness care.",
  openGraph: {
    title: "Expert Physiotherapy & Wellness Care in Scarborough | Midland Wellness Centre",
    description: "Comprehensive physiotherapy, chiropractic care, massage therapy and orthotics. 30+ years of experience serving Scarborough.",
  },
  canonical: "/"
});

export default function Home() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <Banner/>
                <Service/>
                <AboutTwo/>
                <Chooseus/>
                <Working/>
                <Cta/>
            </Layout>
        </div>
    )
}
