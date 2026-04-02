import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../components/sections/home/Cta";
import { generateMetadata, defaultSEO } from "@/utils/metadata";
import type { Metadata } from "next";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = generateMetadata({
  ...defaultSEO,
  title: "Book Physiotherapy in Scarborough | Pain Relief & Rehab Experts",
  description: "Get expert physiotherapy in Scarborough for pain relief, injury recovery & rehab. Book trusted physiotherapists near you today."
});

export default function PhysiotherapyPage() {
    const faqs = [
        {
            question: "What is physiotherapy used for?",
            answer: "Physiotherapy is used to treat pain, improve mobility, and restore physical function after injury or illness. It also helps in preventing future injuries."
        },
        {
            question: "How many sessions of physiotherapy do I need?",
            answer: "The number of sessions depends on your condition and recovery goals. Many patients notice improvement within a few sessions."
        },
        {
            question: "Is physiotherapy good for chronic pain?",
            answer: "Yes, physiotherapy is highly effective for managing chronic pain through targeted exercises and advanced therapies."
        }
    ];

    return (
        <div className="boxed_wrapper">
            <style jsx>{`
                .whatsapp-link:hover {
                    color: #F3A952 !important;
                }
            `}</style>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Physiotherapy">
                <section className="service-details pt_120 pb_110">
                    <div className="auto-container">
                        <div className="row clearfix" style={{
                                    display: 'flex',
                                    alignItems: 'flex-start'
                                }}>
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="service-sidebar">
                                    <div className="sidebar-widget category-widget mb_40">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-41.png)" }}></div>
                                        <div className="widget-title">
                                            <h2>Our Services</h2>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="category-list clearfix">
                                                <li><Link href="/physiotherapy" className="current">Physiotherapy</Link></li>
                                                <li><Link href="/chiropractic-adjustments">Chiropractic Adjustments</Link></li>
                                                <li><Link href="/massage-therapy">Massage Therapy</Link></li>
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
                                                                className="whatsapp-link"
                                                                style={{ 
                                                                    margin: '0', 
                                                                    fontWeight: 'bold', 
                                                                    color: 'white', 
                                                                    textDecoration: 'none',
                                                                    cursor: 'pointer',
                                                                    transition: 'color 0.3s ease'
                                                                }}
                                                            >
                                                                +41 416-261-7246
                                                            </Link>
                                                            <Link 
                                                                href="https://wa.me/414162619813" 
                                                                target="_blank" 
                                                                className="whatsapp-link"
                                                                style={{ 
                                                                    margin: '0', 
                                                                    fontWeight: 'bold', 
                                                                    color: 'white', 
                                                                    textDecoration: 'none',
                                                                    cursor: 'pointer',
                                                                    transition: 'color 0.3s ease'
                                                                }}
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
                                    <div className="content-one mb_40">
                                        <figure className="image-box mb_60"><Image src="/assets/images/resource/physiotherapy1.webp" alt="Image" width={856} height={525} priority style={{
                                            borderRadius: '15px',
                                            objectFit: 'cover'
                                        }} /></figure>
                                        <div className="text-box">
                                            <div className="sec-title mb_30">
                                                <h2>Physiotherapy in Scarborough – Advanced Pain Relief & Rehabilitation</h2>
                                            </div>
                                            <div className="text mb_30">
                                                <p>If you're looking for expert physiotherapy in Scarborough, Midland Wellness Centre offers personalised, results-driven treatments to help you recover faster and live pain-free. Our clinic combines modern rehabilitation techniques with a patient-focused approach to ensure long-term healing. Whether you are dealing with chronic pain, injury, or reduced mobility, our team is here to guide your recovery journey with care and precision.</p>
                                            </div>
                                            <div className="text mb_30">
                                                <p>Our experienced therapists specialise in physiotherapy in Scarborough for sports injuries, post-surgical recovery, and workplace rehabilitation. Using evidence-based treatments, we not only reduce pain but also improve strength, flexibility, and overall physical performance. This makes our clinic a trusted choice for those searching for effective and lasting results.</p>
                                            </div>
                                            <div className="image-box mb_40">
                                                <figure className="image">
                                                    <Image 
                                                        src="/assets/images/resource/physiotherapy1.webp" 
                                                        alt="Professional physiotherapy treatment at Midland Wellness Centre" 
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
                                            <h1>What is Physiotherapy & Why Do You Need It?</h1>
                                            <div className="text mb_30">
                                                <p>Physiotherapy is a non-invasive healthcare treatment designed to restore movement and function affected by injury, illness, or disability. It focuses on identifying the root cause of pain rather than just treating symptoms. With the help of targeted exercises, manual therapy, and advanced techniques, patients can regain mobility and prevent future injuries.</p>
                                            </div>
                                            <div className="text mb_30">
                                                <p>Choosing professional physiotherapy in Scarborough ensures that you receive customised treatment tailored to your condition. Whether you need sports physiotherapy Toronto, back pain physiotherapy Scarborough, or post surgery rehabilitation, physiotherapy plays a vital role in improving your quality of life.</p>
                                            </div>
                                            <h1>Conditions Treated by Our Physiotherapy Experts</h1>
                                            <div className="text mb_30">
                                                <p>Our clinic provides comprehensive care for a wide range of conditions using advanced techniques and personalised treatment plans. We focus on both immediate pain relief and long-term recovery outcomes.</p>
                                            </div>
                                            <div className="row clearfix mb_50">
                                                <div className="col-md-6 col-sm-12 single-column">
                                                    <div className="service-list">
                                                        <h4>Back and Neck Pain Treatment</h4>
                                                        <p>We address spinal issues, posture problems, and muscle strain using manual therapy and corrective exercises. This helps reduce discomfort and improves alignment for lasting relief.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 single-column">
                                                    <div className="service-list">
                                                        <h4>Sports Injury Rehabilitation</h4>
                                                        <p>Our sports injury clinic Toronto approach helps athletes recover quickly while improving strength and flexibility. We design customised programs to prevent re-injury and boost performance.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 single-column">
                                                    <div className="service-list">
                                                        <h4>Joint Pain and Arthritis Care</h4>
                                                        <p>Through targeted therapy, we reduce stiffness and improve joint mobility. This is ideal for patients dealing with arthritis or age-related movement issues.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 single-column">
                                                    <div className="service-list">
                                                        <h4>Workplace and Accident Injuries</h4>
                                                        <p>We offer WSIB physiotherapy and rehabilitation for motor vehicle accident injuries. Our goal is to restore normal function and help you return to daily activities safely.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <h1>Advanced Physiotherapy Treatments We Offer</h1>
                                            <div className="text mb_30">
                                                <p>At Midland Wellness Centre, we provide modern therapies to ensure effective recovery. Our approach combines traditional techniques with innovative solutions for optimal results.</p>
                                            </div>
                                            <div className="row clearfix mb_50">
                                                <div className="col-md-6 col-sm-12 single-column">
                                                    <div className="service-list">
                                                        <h4>Manual Therapy and Spinal Mobilisation</h4>
                                                        <p>Hands-on techniques are used to improve joint movement and reduce pain. This treatment enhances flexibility and supports faster healing.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 single-column">
                                                    <div className="service-list">
                                                        <h4>Shockwave and Electrotherapy Treatment</h4>
                                                        <p>These therapies stimulate tissue repair and reduce inflammation. They are highly effective for chronic pain and muscle injuries.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 single-column">
                                                    <div className="service-list">
                                                        <h4>Laser and Ultrasound Therapy</h4>
                                                        <p>Advanced technology promotes deep tissue healing and improves blood circulation. This accelerates recovery for various conditions.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 single-column">
                                                    <div className="service-list">
                                                        <h4>Custom Exercise and Rehabilitation Programs</h4>
                                                        <p>Personalised exercises improve strength, posture, and mobility. These programs are essential for long-term recovery and injury prevention.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <h1>Why Choose Our Physiotherapy Clinic in Scarborough?</h1>
                                            <div className="text mb_30">
                                                <p>Selecting the right clinic can significantly impact your recovery journey. Our team focuses on delivering high-quality care tailored to each patient's needs.</p>
                                            </div>
                                            <div className="row clearfix mb_50">
                                                <div className="col-md-6 col-sm-12 single-column">
                                                    <div className="service-list">
                                                        <h4>Experienced and Certified Physiotherapists</h4>
                                                        <p>Our professionals use proven techniques and stay updated with the latest advancements. This ensures safe and effective treatment for every patient.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 single-column">
                                                    <div className="service-list">
                                                        <h4>Personalised Treatment Plans</h4>
                                                        <p>Every condition is unique, so we design customised programs for better results. This approach improves recovery speed and overall outcomes.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 single-column">
                                                    <div className="service-list">
                                                        <h4>Multi-Disciplinary Wellness Approach</h4>
                                                        <p>We integrate physiotherapy with other treatments like massage and chiropractic care. This holistic method enhances healing and prevents recurring issues.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <h1>Benefits of Physiotherapy for Long-Term Health</h1>
                                            <div className="text mb_30">
                                                <p>Physiotherapy offers more than just pain relief—it improves your overall physical well-being and helps prevent future injuries. With the right treatment plan, patients experience long-lasting results.</p>
                                            </div>
                                            <div className="row clearfix mb_50">
                                                <div className="col-md-6 col-sm-12 single-column">
                                                    <div className="service-list">
                                                        <h4>Effective Pain Relief Without Surgery</h4>
                                                        <p>Non-invasive techniques reduce pain naturally and safely. This makes physiotherapy a preferred option for many patients.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 single-column">
                                                    <div className="service-list">
                                                        <h4>Improved Mobility and Flexibility</h4>
                                                        <p>Regular therapy sessions enhance movement and reduce stiffness. This helps you perform daily activities with ease.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 single-column">
                                                    <div className="service-list">
                                                        <h4>Faster Recovery from Injuries</h4>
                                                        <p>Structured rehabilitation programs speed up healing and restore strength. This is especially beneficial for athletes and active individuals.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 single-column">
                                                    <div className="service-list">
                                                        <h4>Prevention of Future Injuries</h4>
                                                        <p>Strengthening exercises and posture correction reduce the risk of recurring problems. This ensures long-term health benefits.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <h1>Frequently Asked Questions</h1>
                                            <FAQAccordion faqs={faqs} />
                                            <h1>Physiotherapy Near You in Scarborough</h1>
                                            <div className="text mb_30">
                                                <p>If you are searching for the best physiotherapy clinic in Scarborough, physiotherapist near me, or rehabilitation clinic Toronto, Midland Wellness Centre is your trusted destination. We provide expert care using advanced techniques to ensure faster recovery and long-term results.</p>
                                            </div>
                                            <div className="text mb_30">
                                                <p>Our clinic is dedicated to delivering high-quality physiotherapy in Scarborough for individuals of all ages. From injury recovery to pain management, we help you regain strength, mobility, and confidence in your daily life.</p>
                                            </div>
                                            <h1>Book Your Appointment Today</h1>
                                            <div className="text mb_30">
                                                <p>Take the first step toward a healthier, pain-free life with expert physiotherapy in Scarborough. Our team is committed to helping you achieve optimal recovery through personalised care and advanced treatment methods.</p>
                                            </div>
                                            <div className="text">
                                                <p>Contact Midland Wellness Centre today and start your journey to better health and mobility.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-two">
                                        <figure className="image-box mb_30"><Image src="/assets/images/resource/physiotherapy2.webp" alt="Image" width={856} height={525} priority style={{
                                            borderRadius: '15px',
                                            objectFit: 'cover'
                                        }} /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Cta/>
            </Layout>
        </div>
    )
}
