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
  title: "Midland Wellness Centre - Best Physiotherapy Clinic in Scarborough | Toronto Pain Relief & Rehabilitation",
  description: "Leading physiotherapy clinic in Scarborough and Toronto. Expert chiropractic care, massage therapy, sports injury treatment, orthotics, and pain management. 30+ years experience. Book your appointment today!",
  keywords: "physiotherapy clinic Scarborough, physiotherapy Toronto, chiropractic clinic Scarborough, massage therapy Scarborough, wellness centre Toronto, rehabilitation clinic Scarborough, pain relief clinic Toronto, multidisciplinary clinic Scarborough, physiotherapist Scarborough, best physiotherapy clinic Scarborough, chiropractor near Scarborough Toronto, massage therapist near me Scarborough, sports injury clinic Toronto, rehab centre near me Toronto, orthotics clinic Scarborough, physiotherapy Eglinton Ave Scarborough, clinic near Midland Ave Scarborough, wellness clinic East Toronto, sports physiotherapy Toronto, back pain physiotherapy Scarborough, neck pain treatment Toronto, post surgery rehabilitation, injury rehabilitation clinic, chiropractic adjustments Toronto, spine alignment therapy Scarborough, back pain chiropractor near me, deep tissue massage Scarborough, sports massage therapy Toronto, prenatal massage Scarborough, lymphatic drainage massage, shockwave therapy Toronto, electrotherapy treatment Scarborough, kinesio taping therapy, laser therapy physiotherapy, ultrasound therapy clinic, custom orthotics Scarborough, foot orthotics Toronto, orthopedic insoles clinic, back pain treatment Scarborough, neck pain relief Toronto, sports injury recovery clinic, arthritis physiotherapy treatment, muscle pain treatment Toronto, joint pain physiotherapy, car accident injury therapy, work injury physiotherapy WSIB, chronic pain management Toronto, best physiotherapy clinic for back pain in Scarborough, how to treat sports injuries with physiotherapy, affordable massage therapy in Scarborough, chiropractor for neck pain near me, how does electrotherapy work for pain relief, benefits of kinesio taping therapy, physiotherapy after surgery recovery timeline, custom orthotics benefits for foot pain, which therapy is best for back pain, physiotherapy vs chiropractic which is better, how to relieve muscle pain fast, what does a physiotherapist do, how many sessions of physiotherapy needed, is massage therapy good for chronic pain, What is physiotherapy used for, How much does physiotherapy cost in Toronto, Is chiropractic treatment safe, How often should you get massage therapy, What conditions do physiotherapists treat, Do I need a referral for physiotherapy in Canada, rehabilitation therapy, pain management clinic, mobility improvement, injury recovery, manual therapy, posture correction, physical therapy exercises, musculoskeletal treatment, holistic wellness clinic, kinesio taping, massage therapy scarborough, muscle therapy, therapy midland, wellness centre toronto, your chiropractor, midland massage therapy, scarborough wellness centre, wellness centre midland, massage techniques physiotherapy, treatment wellness centre, chiropractic taping, massage techniques in physiotherapy, more physiotherapy, kinésio taping, courses under physiotherapy, scarborough massage services, massage rehabilitation, taping massage therapy, treatment wellness, need physiotherapy, kinesio taping therapy, muscle taping, back pain treatment Scarborough, neck pain physiotherapy Toronto, chronic pain clinic near me, sports injury physiotherapy, post surgery rehab Toronto, accident injury treatment, massage therapy Scarborough, chiropractic clinic Toronto, holistic wellness centre",
  openGraph: {
    title: "Best Physiotherapy Clinic in Scarborough & Toronto | Midland Wellness Centre - Pain Relief & Rehabilitation",
    description: "Expert physiotherapy, chiropractic care, massage therapy, orthotics and sports injury treatment in Scarborough. 30+ years experience. Your trusted wellness centre in Toronto.",
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
