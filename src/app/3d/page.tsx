import Navbar from "@/components/layout/Navbar";
import HeroScroll3D from "@/components/3d/HeroScroll3D";
import MobileHero from "@/components/3d/MobileHero";
import ServiceShowcase from "@/components/3d/ServiceShowcase";
import About3D from "@/components/3d/About3D";
import MobileAbout from "@/components/3d/MobileAbout";
import BlogShowcase from "@/components/3d/BlogShowcase";
import Contact3D from "@/components/3d/Contact3D";
import Footer3D from "@/components/3d/Footer3D";
import { generateMetadata, defaultSEO } from "@/utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  ...defaultSEO,
  title: "3D Showcase | Midland Wellness Centre",
  description: "Explore Midland Wellness Centre's services through an interactive 3D experience.",
  canonical: "/3d",
});

export default function ThreeDPage() {
  return (
    <div className="boxed_wrapper">
      <Navbar />
      <HeroScroll3D />
      <MobileHero />
      <ServiceShowcase />
      <About3D />
      <MobileAbout />
      <BlogShowcase />
      <Contact3D />
      <Footer3D />
    </div>
  );
}
