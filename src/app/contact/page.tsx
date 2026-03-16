import Layout from "../../../components/layout/Layout";
import ContactForm from "../../../components/elements/ContactForm";
import Image from "next/image";
import Link from "next/link";
export default function ContactPage() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
                <section className="contact-info-two centred">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-43.png)" }}></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                                <div className="info-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><Image src="/assets/images/icons/icon-7.svg" alt="Icon" width={50} height={50} priority /></div>
                                        <h3>Office Location</h3>
                                        <p>2555 Eglinton Ave. E<br />Scarborough, Ontario<br />Canada, M1K 5J1</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                                <div className="info-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><Image src="/assets/images/icons/icon-5.svg" alt="Icon" width={50} height={50} priority /></div>
                                        <h3>Company Email</h3>
                                        <p><Link href="mailto:info@midlandwellnesscentre.com">info@midlandwellnesscentre.com</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                                <div className="info-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><Image src="/assets/images/icons/icon-6.svg" alt="Icon" width={50} height={50} priority /></div>
                                        <h3>Contact Us</h3>
                                        <p><Link href="tel:+41 416-261-7246">+41 416-261-7246</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="contact-section sec-pad">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-42.png)" }}></div>
                    <div className="auto-container">
                        <div className="inner-box">
                            <h2>Leave a Comment</h2>
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
