import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../components/sections/home/Cta";
import { generateMetadata, defaultSEO } from "@/utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  ...defaultSEO,
  title: "Best Massage Therapy in Scarborough | Relax & Recover",
  description: "Looking for massage therapy in Scarborough? Enjoy deep tissue, sports & relaxation massage for pain relief. Book now.",
  keywords: "massage therapy scarborough, therapeutic massage, deep tissue massage, relaxation massage, sports massage, wellness therapy",
  openGraph: {
    title: "Best Massage Therapy in Scarborough | Relax & Recover",
    description: "Looking for massage therapy in Scarborough? Enjoy deep tissue, sports & relaxation massage for pain relief. Book now.",
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
                                            <h2>Our Services</h2>
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
                                    <div className="sidebar-widget schedule-widget">
                                        <div className="widget-title">
                                            <h2>Working Hours</h2>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="schedule-list clearfix">
                                                <li>Sunday<span>Closed</span></li>
                                                <li>Monday<span>10 AM – 6 PM</span></li>
                                                <li>Tuesday<span>10 AM – 6 PM</span></li>
                                                <li>Wednesday<span>10 AM – 7 PM</span></li>
                                                <li>Thursday<span>10 AM – 6 PM</span></li>
                                                <li>Friday<span>10 AM – 6 PM</span></li>
                                                <li>Saturday<span>12 PM – 3 PM</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget appointment-widget mb_10" style={{ marginTop: '60px' }}>
                                        <div className="widget-title">
                                            <h2>Book Appointment</h2>
                                        </div>
                                        <div className="widget-content">
                                            <p style={{ color: '#ffffffd9' }}>Ready to schedule your appointment? Click below to book your visit with our specialists.</p>
                                            <div className="btn-box mt_20">
                                                <Link href="/appointments" className="theme-btn btn-one" style={{ width: '100%', justifyContent: 'center', border: '2px solid #ffffff' }}>
                                                    Book Appointment Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget appointment-widget contact-widget mb_40" style={{ marginTop: '40px' }}>
                                        <div className="widget-title">
                                            <h2 style={{ color: 'white' }}>Contact Us</h2>
                                        </div>
                                        <div className="widget-content">
                                            <div className="contact-info" style={{ color: 'white' }}>
                                                <div className="info-item mb_20" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                                    <i className="icon-17" style={{ marginRight: '10px', color: '#F3A952', fontSize: '18px' }}></i>
                                                    <div>
                                                        <p style={{ margin: '0', fontSize: '14px', color: 'white' }}>Phone/WhatsApp</p>
                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                                            <Link 
                                                                href="https://wa.me/414162617246" 
                                                                target="_blank" 
                                                                style={{ 
                                                                    margin: '0', 
                                                                    fontWeight: 'bold', 
                                                                    color: 'white', 
                                                                    textDecoration: 'none',
                                                                    cursor: 'pointer'
                                                                }}
                                                                className="contact-link"
                                                            >
                                                                +41 416-261-7246
                                                            </Link>
                                                            <Link 
                                                                href="https://wa.me/414162619813" 
                                                                target="_blank" 
                                                                style={{ 
                                                                    margin: '0', 
                                                                    fontWeight: 'bold', 
                                                                    color: 'white', 
                                                                    textDecoration: 'none',
                                                                    cursor: 'pointer'
                                                                }}
                                                                className="contact-link"
                                                            >
                                                                +41 416-261-9813
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="info-item mb_20" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                                    <i className="icon-46" style={{ marginRight: '10px', color: '#F3A952', fontSize: '18px' }}></i>
                                                    <div>
                                                        <p style={{ margin: '0', fontSize: '14px', color: 'white' }}>Email</p>
                                                        <p style={{ margin: '0', fontWeight: 'bold', color: 'white' }}>info@midlandwellness.ca</p>
                                                    </div>
                                                </div>
                                                <div className="info-item mb_20" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                                    <i className="icon-18" style={{ marginRight: '10px', color: '#F3A952', fontSize: '18px' }}></i>
                                                    <div>
                                                        <p style={{ margin: '0', fontSize: '14px', color: 'white' }}>Address</p>
                                                        <p style={{ margin: '0', fontWeight: 'bold', lineHeight: '1.4', color: 'white' }}>Midland Wellness Centre<br />Ontario, Canada</p>
                                                    </div>
                                                </div>
                                                <div className="social-links mt_20">
                                                    <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: 'white' }}>Follow Us:</p>
                                                    <ul className="clearfix" style={{ display: 'flex', gap: '10px', padding: '0', margin: '0' }}>
                                                        <li style={{ listStyle: 'none' }}>
                                                            <Link href="https://www.facebook.com/midlandwellnesscentre" target="_blank" style={{ 
                                                                display: 'flex', 
                                                                alignItems: 'center', 
                                                                justifyContent: 'center', 
                                                                width: '35px', 
                                                                height: '35px', 
                                                                backgroundColor: '#F3A952', 
                                                                color: 'white', 
                                                                borderRadius: '50%', 
                                                                textDecoration: 'none',
                                                                transition: 'all 0.3s ease'
                                                            }}>
                                                                <i className="fab fa-facebook-f"></i>
                                                            </Link>
                                                        </li>
                                                        <li style={{ listStyle: 'none' }}>
                                                            <Link href="https://www.instagram.com/midlandwellness/" target="_blank" style={{ 
                                                                display: 'flex', 
                                                                alignItems: 'center', 
                                                                justifyContent: 'center', 
                                                                width: '35px', 
                                                                height: '35px', 
                                                                backgroundColor: '#F3A952', 
                                                                color: 'white', 
                                                                borderRadius: '50%', 
                                                                textDecoration: 'none',
                                                                transition: 'all 0.3s ease'
                                                            }}>
                                                                <i className="fab fa-instagram"></i>
                                                            </Link>
                                                        </li>
                                                        <li style={{ listStyle: 'none' }}>
                                                            <Link href="https://ca.linkedin.com/in/midland-wellness-center-83a214141" target="_blank" style={{ 
                                                                display: 'flex', 
                                                                alignItems: 'center', 
                                                                justifyContent: 'center', 
                                                                width: '35px', 
                                                                height: '35px', 
                                                                backgroundColor: '#F3A952', 
                                                                color: 'white', 
                                                                borderRadius: '50%', 
                                                                textDecoration: 'none',
                                                                transition: 'all 0.3s ease'
                                                            }}>
                                                                <i className="fab fa-linkedin-in"></i>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="service-details-content">
                                    <div className="inner-box">
                                        <div className="sec-title mb_30">
                                            <h2>Massage Therapy in Scarborough – Relaxation, Pain Relief & Recovery</h2>
                                        </div>
                                        <div className="text mb_30">
                                            <p>If you are searching for professional massage therapy in Scarborough, Midland Wellness Centre offers personalised treatments designed to relieve stress, reduce pain, and improve overall wellness. Our expert therapists use proven techniques to target muscle tension, enhance circulation, and support faster recovery from injuries. Whether you need relaxation or therapeutic care, we deliver results that improve your quality of life.</p>
                                        </div>
                                        <div className="text mb_30">
                                            <p>At our clinic, massage therapy in Scarborough is tailored to your specific needs, ensuring maximum benefits from every session. From chronic pain relief to sports recovery, our treatments are designed to promote healing and restore balance. Patients trust us for effective and long-lasting results.</p>
                                        </div>
                                        <div className="image-box mb_40">
                                            <figure className="image">
                                                <Image 
                                                    src="/assets/images/resource/massagetherapy1.webp" 
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
                                        <h1>What is Massage Therapy & How Does It Help?</h1>
                                        <div className="text mb_30">
                                            <p>Massage therapy is a hands-on treatment that focuses on manipulating muscles, soft tissues, and joints to improve physical function and reduce discomfort. It is widely used for pain management, stress relief, and injury recovery. With the right techniques, massage therapy can significantly improve both physical and mental well-being.</p>
                                        </div>
                                        <div className="text mb_30">
                                            <p>Choosing expert massage therapy in Scarborough ensures that your treatment is customised based on your condition. Whether you are looking for deep tissue massage Scarborough, sports massage therapy Toronto, or relaxation massage near me, our clinic provides comprehensive solutions for all your needs.</p>
                                        </div>
                                        <h1>Conditions Treated with Massage Therapy</h1>
                                        <div className="text mb_30">
                                            <p>Our treatments are designed to address a wide range of health concerns, focusing on both immediate relief and long-term wellness. We use advanced techniques to ensure effective results for every patient.</p>
                                        </div>
                                        <div className="row clearfix mb_50">
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Muscle Pain and Tension Relief</h4>
                                                    <p>Massage therapy helps reduce tightness and improve blood circulation. This leads to faster recovery and improved muscle flexibility.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Stress and Anxiety Management</h4>
                                                    <p>Therapeutic massage promotes relaxation and reduces stress hormones. It enhances mental clarity and overall emotional well-being.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Sports Injury Recovery</h4>
                                                    <p>Our sports massage therapy Toronto approach supports faster healing and improves performance. It is ideal for athletes and active individuals.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Chronic Pain and Joint Issues</h4>
                                                    <p>Massage therapy helps manage conditions like arthritis and long-term pain. It improves mobility and reduces stiffness effectively.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h1>Types of Massage Therapy We Offer</h1>
                                        <div className="text mb_30">
                                            <p>At Midland Wellness Centre, we provide a variety of massage techniques tailored to individual needs. Each treatment is designed to deliver maximum therapeutic benefits.</p>
                                        </div>
                                        <div className="row clearfix mb_50">
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Deep Tissue Massage</h4>
                                                    <p>This technique targets deeper muscle layers to relieve chronic tension and pain. It is highly effective for back pain and muscle injuries.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Swedish Massage Therapy</h4>
                                                    <p>A gentle and relaxing massage that improves circulation and reduces stress. It is perfect for overall wellness and relaxation.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Sports Massage Therapy</h4>
                                                    <p>Designed for athletes, this treatment enhances performance and prevents injuries. It also speeds up recovery after intense physical activity.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Prenatal Massage Therapy</h4>
                                                    <p>Safe and effective for expectant mothers, helping reduce discomfort and improve relaxation during pregnancy.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h1>Why Choose Our Massage Therapy Clinic in Scarborough?</h1>
                                        <div className="text mb_30">
                                            <p>Finding the right clinic is essential for achieving the best results. Our team focuses on delivering personalised care with a strong emphasis on quality and effectiveness.</p>
                                        </div>
                                        <div className="row clearfix mb_50">
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Certified and Experienced Therapists</h4>
                                                    <p>Our professionals are trained in advanced massage techniques. They ensure safe and effective treatment for all conditions.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Personalised Treatment Plans</h4>
                                                    <p>Every session is customized based on your needs and goals. This approach improves outcomes and enhances overall satisfaction.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Holistic Wellness Approach</h4>
                                                    <p>We combine massage therapy with other treatments for better results. This helps in achieving long-term health and pain relief.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h1>Benefits of Massage Therapy for Overall Health</h1>
                                        <div className="text mb_30">
                                            <p>Massage therapy provides a wide range of physical and mental health benefits. It is an effective solution for improving overall well-being and preventing future issues.</p>
                                        </div>
                                        <div className="row clearfix mb_50">
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Natural Pain Relief</h4>
                                                    <p>Massage therapy reduces muscle tension and inflammation without medication. It is a safe and effective treatment option.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Improved Blood Circulation</h4>
                                                    <p>Enhanced circulation promotes faster healing and better oxygen flow. This supports overall body function and recovery.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Stress Reduction and Relaxation</h4>
                                                    <p>Regular sessions help reduce stress and improve mental clarity. This leads to better sleep and emotional balance.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Enhanced Mobility and Flexibility</h4>
                                                    <p>Massage therapy improves joint movement and reduces stiffness. This helps you stay active and pain-free.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h1>Frequently Asked Questions</h1>
                                        <div className="text mb_30">
                                            <p><strong>What is massage therapy used for?</strong><br />
                                            Massage therapy is used for pain relief, stress reduction, and improving circulation. It also helps in injury recovery and relaxation.</p>
                                        </div>
                                        <div className="text mb_30">
                                            <p><strong>How often should you get massage therapy?</strong><br />
                                            The frequency depends on your condition and goals. Many people benefit from weekly or bi-weekly sessions.</p>
                                        </div>
                                        <div className="text mb_30">
                                            <p><strong>Is massage therapy good for chronic pain?</strong><br />
                                            Yes, massage therapy is highly effective in managing chronic pain by reducing muscle tension and improving mobility.</p>
                                        </div>
                                        <h1>Massage Therapy Near You in Scarborough</h1>
                                        <div className="text mb_30">
                                            <p>If you are searching for the best massage therapy in Scarborough, massage therapist near me, or relaxation massage Toronto, Midland Wellness Centre is your trusted choice. We offer professional treatments designed to meet your specific needs and ensure long-term benefits.</p>
                                        </div>
                                        <div className="text mb_30">
                                            <p>Our clinic is known for providing high-quality massage therapy in Scarborough using advanced techniques and personalised care. We are committed to helping you achieve better health, reduced pain, and improved relaxation.</p>
                                        </div>
                                        <h1>Book Your Massage Therapy Session Today</h1>
                                        <div className="text mb_30">
                                            <p>Experience the benefits of expert massage therapy in Scarborough and take the first step toward a healthier, stress-free life. Our team is dedicated to delivering exceptional care that meets your needs and exceeds expectations.</p>
                                        </div>
                                        <div className="text">
                                            <p>Contact Midland Wellness Centre today to book your appointment and start your journey to wellness.</p>
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
