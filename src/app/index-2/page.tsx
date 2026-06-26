
import Layout from "../../../components/layout/Layout";
import Working from "../../../components/sections/home/Working";
import About from "../../../components/sections/home/About";
import Banner from "../../../components/sections/home/Banner";
import Chooseus from "../../../components/sections/home/Chooseus";
import Service from "../../../components/sections/home/Service";
import Cta from "../../../components/sections/home/Cta";
import { generateMetadata, defaultSEO } from "@/utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  ...defaultSEO,
  title: "Home | Midland Wellness Centre - Scarborough",
  description: "Expert physiotherapy, chiropractic care, massage therapy and orthotics in Scarborough. Book your appointment today for comprehensive wellness services.",
  canonical: "/index-2",
});

export default function Home2() {        

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <Banner/>
                <About/>
                <Service/>
                <Chooseus/>
                <Working/>
                <Cta/>
            </Layout>
        </div>
    )
}
