import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../components/sections/home/Cta";
import { generateMetadata, defaultSEO } from "@/utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  ...defaultSEO,
  title: "Massage Therapy | Midland Wellness Centre - Scarborough",
  description: "Professional massage therapy services in Scarborough. Therapeutic massage for pain relief, relaxation, and muscle recovery. Book your massage therapy appointment today.",
  keywords: "massage therapy scarborough, therapeutic massage, deep tissue massage, relaxation massage, sports massage, wellness therapy",
  openGraph: {
    title: "Professional Massage Therapy | Midland Wellness Centre",
    description: "Expert therapeutic massage services for pain relief and wellness in Scarborough.",
  },
  canonical: "/massage-therapy"
});

export default function MassageTherapyPage() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Massage Therapy">
                <section className="service-details pt_120 pb_110">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="service-sidebar">
                                    <div className="sidebar-widget category-widget mb_40">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-41.png)" }}></div>
                                        <div className="widget-title">
                                            <h2>Departments</h2>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="category-list clearfix">
                                                <li><Link href="/physiotherapy">Physiotherapy</Link></li>
                                                <li><Link href="/chiropractic-adjustments">Chiropractic Adjustments</Link></li>
                                                <li><Link href="/massage-therapy" className="current">Massage Therapy</Link></li>
                                                <li><Link href="/electrotherapy">Electrotherapy</Link></li>
                                                <li><Link href="/kinesio-taping">Kinesio Taping</Link></li>
                                                <li><Link href="/orthotics">Orthotics</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget appointment-widget mb_40">
                                        <div className="widget-title">
                                            <h2>Appointment</h2>
                                        </div>
                                        <div className="widget-content">
                                            <div className="text">
                                                <p>Book your appointment today and take the first step towards better health and wellness.</p>
                                            </div>
                                            <div className="btn-box">
                                                <Link href="/appointments" className="theme-btn btn-one">
                                                    <span>Book Now</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget contact-widget mb_40">
                                        <div className="widget-title">
                                            <h2>Contact Us</h2>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="info-list clearfix">
                                                <li><i className="icon-14"></i>2555 Eglinton Ave. E, Scarborough, ON, M1K 5J1, CA</li>
                                                <li><i className="icon-15"></i><Link href="tel:+1-416-261-7246">+1 416-261-7246</Link></li>
                                                <li><i className="icon-16"></i><Link href="mailto:info@midlandwellnesscentre.com">info@midlandwellnesscentre.com</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="service-details-content">
                                    <div className="inner-box">
                                        <div className="sec-title mb_30">
                                            <h2>Massage Therapy</h2>
                                        </div>
                                        <div className="text mb_30">
                                            <p>Massage therapy is a comprehensive treatment involving the manipulation of the body's soft tissues to enhance health and well-being. Our experienced massage therapists use various techniques to address specific needs, from relaxation to therapeutic rehabilitation.</p>
                                        </div>
                                        <div className="text mb_30">
                                            <p>At Midland Wellness Centre, we offer a range of massage therapy services designed to reduce stress, relieve pain, improve circulation, and promote overall wellness. Each session is tailored to your individual needs and health goals.</p>
                                        </div>
                                        <div className="image-box mb_40">
                                            <figure className="image">
                                                <Image 
                                                    src="/assets/images/resource/massage-therapy.webp" 
                                                    alt="Professional massage therapy session at Midland Wellness Centre" 
                                                    width={770} 
                                                    height={450} 
                                                    priority 
                                                    style={{
                                                        borderRadius: '15px',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                            </figure>
                                        </div>
                                        <h3>Our Massage Therapy Services</h3>
                                        <div className="text mb_30">
                                            <p>We provide various massage therapy techniques to address different health concerns and wellness goals:</p>
                                        </div>
                                        <div className="row clearfix mb_50">
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Therapeutic Massage</h4>
                                                    <p>Targeted treatment for specific injuries, chronic pain, and rehabilitation needs.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Relaxation Massage</h4>
                                                    <p>Gentle techniques to reduce stress, promote relaxation, and improve overall well-being.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Deep Tissue Massage</h4>
                                                    <p>Intensive treatment focusing on deeper muscle layers to release chronic tension.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Sports Massage</h4>
                                                    <p>Specialized techniques for athletes and active individuals to enhance performance and recovery.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h3>Benefits of Massage Therapy</h3>
                                        <div className="text mb_30">
                                            <p>Regular massage therapy offers numerous health benefits that contribute to your overall wellness:</p>
                                        </div>
                                        <div className="row clearfix mb_40">
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="benefits-list">
                                                    <ul className="list-style-one">
                                                        <li>Reduces muscle tension and pain</li>
                                                        <li>Improves circulation and blood flow</li>
                                                        <li>Enhances joint flexibility and range of motion</li>
                                                        <li>Promotes relaxation and stress reduction</li>
                                                        <li>Speeds up injury recovery</li>
                                                        <li>Improves sleep quality</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="benefits-list">
                                                    <ul className="list-style-one">
                                                        <li>Boosts immune system function</li>
                                                        <li>Reduces anxiety and depression</li>
                                                        <li>Improves posture and body awareness</li>
                                                        <li>Enhances athletic performance</li>
                                                        <li>Relieves headache frequency</li>
                                                        <li>Promotes overall well-being</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <h3>What to Expect During Your Session</h3>
                                        <div className="text mb_30">
                                            <p>Your massage therapy session begins with a consultation to discuss your health concerns and treatment goals. Our registered massage therapists will then customize the treatment to address your specific needs, using appropriate pressure and techniques.</p>
                                        </div>
                                        <div className="text mb_30">
                                            <p>We provide a comfortable, private environment with professional-grade equipment and high-quality massage oils. Sessions typically range from 30 to 90 minutes, depending on your needs and preferences.</p>
                                        </div>
                                        <h3>Why Choose Midland Wellness Centre?</h3>
                                        <div className="text mb_30">
                                            <p>Our massage therapy team consists of registered and experienced professionals who are committed to providing exceptional care. We integrate massage therapy with our other wellness services to offer comprehensive treatment plans that address your health from multiple angles.</p>
                                        </div>
                                        <div className="text">
                                            <p>Whether you're seeking relief from chronic pain, recovering from an injury, or simply looking to enhance your overall wellness, our massage therapy services are designed to help you achieve your health goals in a safe and supportive environment.</p>
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
