import Layout from "../../../components/layout/Layout";
import ContactForm from "../../../components/elements/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { generateMetadata, defaultSEO } from "@/utils/metadata";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";

export const metadata: Metadata = generateMetadata({
    ...defaultSEO,
    title: "Contact Us | Midland Wellness Centre - Scarborough",
    description: `Contact Midland Wellness Centre in Scarborough for expert physiotherapy, chiropractic care, and wellness services. Call us at ${SITE_CONFIG.phone} or visit 2555 Eglinton Ave. E.`,
    keywords: "contact midland wellness centre, physiotherapy scarborough phone, chiropractor appointment, wellness center location, scarborough healthcare contact",
    openGraph: {
        title: "Contact Midland Wellness Centre | Book Your Appointment Today",
        description: "Get in touch with our expert team for comprehensive wellness care in Scarborough. Call or visit us today.",
    },
    canonical: "/contact"
});
export default function ContactPage() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
                <section className="contact-section sec-pad">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-42.png)" }}></div>
                    <div className="auto-container">
                        <div className="inner-box">
                            <h2>Get In Touch</h2>
                            <p>Have questions about our services? Want to book an appointment? Send us a message and we'll get back to you as soon as possible.</p>
                            <ContactForm />
                        </div>
                    </div>
                </section>
                
                <section className="contact-info-two centred">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-43.png)" }}></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                                <div className="info-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><Image src="/assets/images/icons/icon-7.svg" alt="Midland Wellness Centre location icon" width={50} height={50} priority /></div>
                                        <h3>Office Location</h3>
                                        <p>2555 Eglinton Ave. E<br />Scarborough, Ontario<br />Canada, M1K 5J1</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                                <div className="info-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><Image src="/assets/images/icons/icon-5.svg" alt="Email contact icon" width={50} height={50} priority /></div>
                                        <h3>Company Email</h3>
                                        <p><Link href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                                <div className="info-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><Image src="/assets/images/icons/icon-6.svg" alt="Phone contact icon" width={50} height={50} priority /></div>
                                        <h3>Contact Us</h3>
                                        <p><Link href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Google Map Section */}
                <section className="google-map-section">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-12">
                                <div className="map-outer">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.8234567890123!2d-79.23456789012345!3d43.72345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d3d4d4d4d4d4%3A0x4d4d4d4d4d4d4d4!2s2555+Eglinton+Ave+E%2C+Scarborough%2C+ON+M1K+5J1!5e0!3m2!1sen!2sca!4v1234567890"
                                        width="100%"
                                        height="450"
                                        style={{ border: 0, borderRadius: '15px' }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Midland Wellness Centre Location Map"
                                        className="contact-map"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="faq-section sec-pad">
                    <div className="auto-container">
                        <div className="sec-title centred">
                            <h2>Frequently Asked Questions</h2>
                            <p>Find answers to common questions about our services and appointments</p>
                        </div>
                        <div className="faq-content">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12">
                                    <div className="faq-column">
                                        <div className="faq-item">
                                            <h4>Do I need a doctor's referral for physiotherapy?</h4>
                                            <p>No, you don't need a doctor's referral for physiotherapy in Ontario. However, some insurance plans may require one for coverage.</p>
                                        </div>
                                        <div className="faq-item">
                                            <h4>What should I bring to my first appointment?</h4>
                                            <p>Please bring your health card, insurance information, comfortable clothing, and any relevant medical reports or imaging.</p>
                                        </div>
                                        <div className="faq-item">
                                            <h4>How long are typical appointments?</h4>
                                            <p>Initial assessments are usually 45-60 minutes, while follow-up appointments are typically 30-45 minutes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="faq-column">
                                        <div className="faq-item">
                                            <h4>Is parking available at your location?</h4>
                                            <p>Yes, we have free parking available for our patients at our 2555 Eglinton Ave. E location.</p>
                                        </div>
                                        <div className="faq-item">
                                            <h4>Do you direct bill to insurance companies?</h4>
                                            <p>Yes, we offer direct billing to most major insurance providers. Please bring your insurance information to your first visit.</p>
                                        </div>
                                        <div className="faq-item">
                                            <h4>What payment methods do you accept?</h4>
                                            <p>We accept cash, debit, credit cards (Visa, Mastercard), and e-transfers for payment of services.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </Layout>
        </div>
    )
}
