'use client'

import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../components/sections/home/Cta";
import { useState } from "react";

export default function PhysiotherapyPage() {
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Physiotherapy">
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
                                                <li><Link href="/physiotherapy" className="current">Physiotherapy</Link></li>
                                                <li><Link href="/chiropractic-adjustments">Chiropractic Adjustments</Link></li>
                                                <li><Link href="/massage-therapy">Massage Therapy</Link></li>
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
                                        <div className="form-inner">
                                            <form method="post" action="contact.html" className="default-form">
                                                <div className="form-group">
                                                    <div className="icon"><i className="icon-45"></i></div>
                                                    <input type="text" name="name" placeholder="Name" required/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="icon"><i className="icon-46"></i></div>
                                                    <input type="email" name="email" placeholder="Email" required/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="icon"><Image src="/assets/images/icons/icon-15.svg" alt="Image" width={15} height={15} priority /></div>
                                                    <div className="select-box">
                                                        <select className="selectmenu">
                                                            <option>I&apos;m interested in *</option>
                                                            <option>Physiotherapy</option>
                                                            <option>Chiropractic Adjustments</option>
                                                            <option>Massage Therapy</option>
                                                            <option>Electrotherapy</option>
                                                            <option>Kinesio Taping</option>
                                                            <option>Orthotics</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="icon"><i className="icon-48"></i></div>
                                                    <textarea name="message" placeholder="Message"></textarea>
                                                </div>
                                                <div className="form-group message-btn">
                                                    <button type="submit" className="theme-btn btn-two"><span>Send your message</span></button>
                                                </div>
                                            </form>
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
                                            <h1>Physiotherapy in Scarborough – Advanced Pain Relief & Rehabilitation</h1>
                                            <p>If you're looking for <strong>expert physiotherapy in Scarborough</strong>, Midland Wellness Centre offers personalised, results-driven treatments to help you recover faster and live pain-free. Our clinic combines modern rehabilitation techniques with a patient-focused approach to ensure long-term healing. Whether you are dealing with chronic pain, injury, or reduced mobility, our team is here to guide your recovery journey with care and precision.</p>
                                            <p>Our experienced therapists specialise in <strong>physiotherapy in Scarborough</strong> for sports injuries, post-surgical recovery, and workplace rehabilitation. Using evidence-based treatments, we not only reduce pain but also improve strength, flexibility, and overall physical performance. This makes our clinic a trusted choice for those searching for effective and lasting results.</p>
                                            
                                            <h2>What is Physiotherapy & Why Do You Need It?</h2>
                                            <p>Physiotherapy is a non-invasive healthcare treatment designed to restore movement and function affected by injury, illness, or disability. It focuses on identifying the root cause of pain rather than just treating symptoms. With the help of targeted exercises, manual therapy, and advanced techniques, patients can regain mobility and prevent future injuries.</p>
                                            <p>Choosing professional <strong>physiotherapy in Scarborough</strong> ensures that you receive customised treatment tailored to your condition. Whether you need sports physiotherapy Toronto, back pain physiotherapy Scarborough, or post surgery rehabilitation, physiotherapy plays a vital role in improving your quality of life.</p>

                                            <h2>Conditions Treated by Our Physiotherapy Experts</h2>
                                            <p>Our clinic provides comprehensive care for a wide range of conditions using advanced techniques and personalised treatment plans. We focus on both immediate pain relief and long-term recovery outcomes.</p>
                                            
                                            <h3>Back and Neck Pain Treatment</h3>
                                            <p>We address spinal issues, posture problems, and muscle strain using manual therapy and corrective exercises. This helps reduce discomfort and improves alignment for lasting relief.</p>
                                            
                                            <h3>Sports Injury Rehabilitation</h3>
                                            <p>Our <strong>sports injury clinic Toronto</strong> approach helps athletes recover quickly while improving strength and flexibility. We design customised programs to prevent re-injury and boost performance.</p>
                                            
                                            <h3>Joint Pain and Arthritis Care</h3>
                                            <p>Through targeted therapy, we reduce stiffness and improve joint mobility. This is ideal for patients dealing with arthritis or age-related movement issues.</p>
                                            
                                            <h3>Workplace and Accident Injuries</h3>
                                            <p>We offer <strong>WSIB physiotherapy</strong> and rehabilitation for motor vehicle accident injuries. Our goal is to restore normal function and help you return to daily activities safely.</p>

                                            <h2>Advanced Physiotherapy Treatments We Offer</h2>
                                            <p>At Midland Wellness Centre, we provide modern therapies to ensure effective recovery. Our approach combines traditional techniques with innovative solutions for optimal results.</p>
                                            
                                            <h3>Manual Therapy and Spinal Mobilisation</h3>
                                            <p>Hands-on techniques are used to improve joint movement and reduce pain. This treatment enhances flexibility and supports faster healing.</p>
                                            
                                            <h3>Shockwave and Electrotherapy Treatment</h3>
                                            <p>These therapies stimulate tissue repair and reduce inflammation. They are highly effective for chronic pain and muscle injuries.</p>
                                            
                                            <h3>Laser and Ultrasound Therapy</h3>
                                            <p>Advanced technology promotes deep tissue healing and improves blood circulation. This accelerates recovery for various conditions.</p>
                                            
                                            <h3>Custom Exercise and Rehabilitation Programs</h3>
                                            <p>Personalised exercises improve strength, posture, and mobility. These programs are essential for long-term recovery and injury prevention.</p>

                                            <h2>Why Choose Our Physiotherapy Clinic in Scarborough?</h2>
                                            <p>Selecting the right clinic can significantly impact your recovery journey. Our team focuses on delivering high-quality care tailored to each patient's needs.</p>
                                            
                                            <h3>Experienced and Certified Physiotherapists</h3>
                                            <p>Our professionals use proven techniques and stay updated with the latest advancements. This ensures safe and effective treatment for every patient.</p>
                                            
                                            <h3>Personalised Treatment Plans</h3>
                                            <p>Every condition is unique, so we design customised programs for better results. This approach improves recovery speed and overall outcomes.</p>
                                            
                                            <h3>Multi-Disciplinary Wellness Approach</h3>
                                            <p>We integrate physiotherapy with other treatments like massage and chiropractic care. This holistic method enhances healing and prevents recurring issues.</p>

                                            <h2>Benefits of Physiotherapy for Long-Term Health</h2>
                                            <p>Physiotherapy offers more than just pain relief—it improves your overall physical well-being and helps prevent future injuries. With the right treatment plan, patients experience long-lasting results.</p>
                                            
                                            <h3>Effective Pain Relief Without Surgery</h3>
                                            <p>Non-invasive techniques reduce pain naturally and safely. This makes physiotherapy a preferred option for many patients.</p>
                                            
                                            <h3>Improved Mobility and Flexibility</h3>
                                            <p>Regular therapy sessions enhance movement and reduce stiffness. This helps you perform daily activities with ease.</p>
                                            
                                            <h3>Faster Recovery from Injuries</h3>
                                            <p>Structured rehabilitation programs speed up healing and restore strength. This is especially beneficial for athletes and active individuals.</p>
                                            
                                            <h3>Prevention of Future Injuries</h3>
                                            <p>Strengthening exercises and posture correction reduce the risk of recurring problems. This ensures long-term health benefits.</p>

                                            <h2>Frequently Asked Questions</h2>
                                            <div className="faq-accordion">
                                                {faqs.map((faq, index) => (
                                                    <div key={index} className={`faq-item ${activeFAQ === index ? 'active' : ''}`}>
                                                        <div 
                                                            className="faq-question" 
                                                            onClick={() => toggleFAQ(index)}
                                                            style={{
                                                                padding: '15px 20px',
                                                                backgroundColor: activeFAQ === index ? '#f8f9fa' : '#fff',
                                                                border: '1px solid #e9ecef',
                                                                borderRadius: '8px',
                                                                marginBottom: '10px',
                                                                cursor: 'pointer',
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center',
                                                                transition: 'all 0.3s ease'
                                                            }}
                                                        >
                                                            <h4 style={{ margin: 0, color: '#2c3e50', fontSize: '16px', fontWeight: '600' }}>
                                                                {faq.question}
                                                            </h4>
                                                            <span 
                                                                style={{
                                                                    fontSize: '20px',
                                                                    color: activeFAQ === index ? '#007bff' : '#6c757d',
                                                                    transition: 'transform 0.3s ease',
                                                                    transform: activeFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)'
                                                                }}
                                                            >
                                                                ▼
                                                            </span>
                                                        </div>
                                                        <div 
                                                            className="faq-answer"
                                                            style={{
                                                                maxHeight: activeFAQ === index ? '200px' : '0',
                                                                overflow: 'hidden',
                                                                transition: 'max-height 0.3s ease, padding 0.3s ease',
                                                                padding: activeFAQ === index ? '15px 20px' : '0 20px',
                                                                backgroundColor: '#f8f9fa',
                                                                borderLeft: activeFAQ === index ? '1px solid #e9ecef' : 'none',
                                                                borderRight: activeFAQ === index ? '1px solid #e9ecef' : 'none',
                                                                borderBottom: activeFAQ === index ? '1px solid #e9ecef' : 'none',
                                                                borderRadius: activeFAQ === index ? '0 0 8px 8px' : '0'
                                                            }}
                                                        >
                                                            <p style={{ margin: 0, color: '#495057', lineHeight: '1.6' }}>
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <h2>Physiotherapy Near You in Scarborough</h2>
                                            <p>If you are searching for the <strong>best physiotherapy clinic in Scarborough</strong>, physiotherapist near me, or rehabilitation clinic Toronto, Midland Wellness Centre is your trusted destination. We provide expert care using advanced techniques to ensure faster recovery and long-term results.</p>
                                            <p>Our clinic is dedicated to delivering high-quality physiotherapy in Scarborough for individuals of all ages. From injury recovery to pain management, we help you regain strength, mobility, and confidence in your daily life.</p>

                                            <h2>Book Your Appointment Today</h2>
                                            <p>Take the first step toward a healthier, pain-free life with expert physiotherapy in Scarborough. Our team is committed to helping you achieve optimal recovery through personalised care and advanced treatment methods.</p>
                                            <p><strong>Contact Midland Wellness Centre today and start your journey to better health and mobility.</strong></p>
                                        </div>
                                    </div>
                                    <div className="content-two">
                                        <figure className="image-box mb_30"><Image src="/assets/images/resource/physiotherapy2.webp" alt="Image" width={856} height={525} priority style={{
                                            borderRadius: '15px',
                                            objectFit: 'cover'
                                        }} /></figure>
                                        <p>Our experienced therapists combine evidence-based techniques with state-of-the-art equipment to deliver exceptional care. We specialize in treating musculoskeletal injuries, neurological conditions, and chronic pain disorders through comprehensive rehabilitation programs.</p>
                                        <ul className="list-style-one clearfix">
                                            <li><strong>Personalized treatment plans</strong> tailored to individual needs and goals</li>
                                            <li><strong>Advanced manual therapy techniques</strong> for immediate pain relief</li>
                                            <li><strong>Therapeutic exercise programs</strong> for strength, flexibility, and mobility</li>
                                            <li><strong>State-of-the-art equipment</strong> including shockwave therapy and ultrasound</li>
                                            <li><strong>WSIB and MVA approved</strong> for workplace and accident injury rehabilitation</li>
                                            <li><strong>Sports injury specialization</strong> with performance enhancement programs</li>
                                            <li><strong>Prevention strategies and education</strong> for long-term health and injury prevention</li>
                                        </ul>
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
