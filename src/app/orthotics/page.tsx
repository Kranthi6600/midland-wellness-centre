import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../components/sections/home/Cta";
import { generateMetadata, defaultSEO } from "@/utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  ...defaultSEO,
  title: "Best Custom Orthotics in Scarborough | Foot Support Care",
  description: "Looking for custom orthotics in Scarborough? Improve posture, reduce pain & enhance mobility with expert orthotic solutions.",
  keywords: "orthotics scarborough, custom orthotics, foot pain treatment, orthopedic shoes, gait analysis, foot care, orthotic inserts",
  openGraph: {
    title: "Best Custom Orthotics in Scarborough | Foot Support Care",
    description: "Looking for custom orthotics in Scarborough? Improve posture, reduce pain & enhance mobility with expert orthotic solutions.",
  },
  canonical: "/orthotics"
});

export default function OrthoticsPage() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Orthotics">
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
                                                <li><Link href="/massage-therapy">Massage Therapy</Link></li>
                                                <li><Link href="/electrotherapy">Electrotherapy</Link></li>
                                                <li><Link href="/kinesio-taping">Kinesio Taping</Link></li>
                                                <li><Link href="/orthotics" className="current">Orthotics</Link></li>
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
                                            <h2>Custom Orthotics in Scarborough – Improve Alignment & Relieve Pain</h2>
                                        </div>
                                        <div className="text mb_30">
                                            <p>If you are looking for custom orthotics in Scarborough, Midland Wellness Centre offers advanced solutions to improve foot alignment, reduce pain, and enhance overall body function. Our clinic provides high-quality orthotic devices designed using modern technology to ensure precision and comfort. Whether you suffer from foot pain, posture issues, or joint discomfort, orthotics can significantly improve your daily movement and quality of life.</p>
                                        </div>
                                        <div className="text mb_30">
                                            <p>At our clinic, custom orthotics in Scarborough are created using accurate 3D laser casting technology to ensure a perfect fit for your feet. This advanced approach helps improve biomechanics, reduce strain on joints, and prevent long-term injuries. Our goal is to provide effective and affordable orthotic solutions tailored to your unique needs.</p>
                                        </div>
                                        <div className="image-box mb_40">
                                            <figure className="image">
                                                <Image 
                                                    src="/assets/images/resource/orthotics1.webp" 
                                                    alt="Professional custom orthotics fitting at Midland Wellness Centre" 
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
                                        <h1>What Are Orthotics & How Do They Work?</h1>
                                        <div className="text mb_30">
                                            <p>Orthotics are specially designed shoe inserts that support, align, and improve the function of your feet. They are commonly used to correct imbalances, relieve pressure, and enhance posture. Poor foot alignment can lead to pain not only in the feet but also in the knees, hips, and lower back.</p>
                                        </div>
                                        <div className="text mb_30">
                                            <p>Choosing professional custom orthotics in Scarborough ensures that your orthotics are tailored to your foot structure and lifestyle. Whether you need custom foot orthotics Toronto, orthotic insoles Scarborough, or shoe inserts for foot pain, these devices help restore proper movement and reduce stress on your body.</p>
                                        </div>
                                        <h1>Conditions Treated with Custom Orthotics</h1>
                                        <div className="text mb_30">
                                            <p>Custom orthotics are highly effective in treating a wide range of conditions related to foot imbalance and body mechanics. Our clinic focuses on both pain relief and long-term correction.</p>
                                        </div>
                                        <div className="row clearfix mb_50">
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Foot Pain and Plantar Fasciitis</h4>
                                                    <p>Orthotics help reduce pressure on the heel and arch, relieving pain and improving walking comfort. They provide essential support for long-term foot health.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Knee, Hip, and Back Pain</h4>
                                                    <p>Misalignment in the feet can affect the entire body. Orthotics improve posture and reduce strain on joints, helping alleviate pain in multiple areas.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Flat Feet and High Arches</h4>
                                                    <p>Custom orthotics correct structural imbalances and provide proper support. This improves stability and prevents further complications.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Sports Injuries and Performance Issues</h4>
                                                    <p>Athletes benefit from improved biomechanics and reduced injury risk. Orthotics enhance performance by providing better support and alignment.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h1>Our Custom Orthotics Process</h1>
                                        <div className="text mb_30">
                                            <p>At Midland Wellness Centre, we follow a comprehensive approach to ensure the best results for every patient. Our process is designed to deliver precision, comfort, and effectiveness.</p>
                                        </div>
                                        <div className="row clearfix mb_50">
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Detailed Assessment and Gait Analysis</h4>
                                                    <p>We evaluate your foot structure, walking pattern, and medical history. This helps identify the root cause of your pain and discomfort.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Advanced 3D Laser Foot Scanning</h4>
                                                    <p>Using modern technology, we create accurate measurements of your feet. This ensures that your orthotics fit perfectly and provide maximum support.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Custom Design and Fabrication</h4>
                                                    <p>Each orthotic is tailored to your specific needs and lifestyle. This personalized approach improves comfort and long-term effectiveness.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Fitting and Follow-Up Care</h4>
                                                    <p>We ensure your orthotics are properly fitted and provide guidance on usage. Regular follow-ups help optimize your results.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h1>Why Choose Our Orthotics Clinic in Scarborough?</h1>
                                        <div className="text mb_30">
                                            <p>Choosing the right provider for orthotics is essential for achieving the best outcomes. Our clinic offers advanced solutions backed by expertise and technology.</p>
                                        </div>
                                        <div className="row clearfix mb_50">
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>High-Quality Custom Orthotics</h4>
                                                    <p>We provide durable and effective orthotics designed for long-term use. This ensures maximum comfort and performance.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Personalised Treatment Approach</h4>
                                                    <p>Every patient receives a customized plan based on their condition. This improves recovery and prevents recurring issues.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Advanced Technology and Expertise</h4>
                                                    <p>Our clinic uses cutting-edge tools and techniques for precise results. This ensures better alignment and faster pain relief.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h1>Benefits of Custom Orthotics for Daily Life</h1>
                                        <div className="text mb_30">
                                            <p>Orthotics offer a wide range of benefits that go beyond foot comfort. They improve overall body mechanics and enhance your quality of life.</p>
                                        </div>
                                        <div className="row clearfix mb_50">
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Improved Posture and Alignment</h4>
                                                    <p>Orthotics correct imbalances and support proper posture. This reduces strain on the entire body.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Pain Relief and Injury Prevention</h4>
                                                    <p>By distributing pressure evenly, orthotics reduce pain and prevent injuries. This is especially beneficial for active individuals.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Enhanced Mobility and Comfort</h4>
                                                    <p>Orthotics make walking and standing more comfortable. This helps you stay active and productive.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Better Athletic Performance</h4>
                                                    <p>Athletes experience improved stability and reduced fatigue. This leads to better performance and fewer injuries.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h1>Frequently Asked Questions</h1>
                                        <div className="text mb_30">
                                            <p><strong>What are custom orthotics used for?</strong><br />
                                            Custom orthotics are used to correct foot alignment, relieve pain, and improve mobility. They also help prevent injuries.</p>
                                        </div>
                                        <div className="text mb_30">
                                            <p><strong>Do orthotics help with back pain?</strong><br />
                                            Yes, orthotics improve posture and reduce strain on the spine, which helps relieve back pain.</p>
                                        </div>
                                        <div className="text mb_30">
                                            <p><strong>How long do custom orthotics last?</strong><br />
                                            Most orthotics last several years depending on usage and care. Regular check-ups ensure optimal performance.</p>
                                        </div>
                                        <h1>Custom Orthotics Near You in Scarborough</h1>
                                        <div className="text mb_30">
                                            <p>If you are searching for best custom orthotics in Scarborough, orthotics clinic near me, or foot pain treatment Toronto, Midland Wellness Centre is your trusted destination. We provide expert care using advanced techniques to deliver long-term results.</p>
                                        </div>
                                        <div className="text mb_30">
                                            <p>Our clinic specialises in custom orthotics in Scarborough designed to improve posture, reduce pain, and enhance overall function. Whether you need support for daily activities or sports performance, we have the right solution for you.</p>
                                        </div>
                                        <h1>Book Your Orthotics Consultation Today</h1>
                                        <div className="text mb_30">
                                            <p>Take the first step toward better foot health with expert custom orthotics in Scarborough. Our team is dedicated to providing personalised care and advanced solutions to help you live pain-free.</p>
                                        </div>
                                        <div className="text">
                                            <p>Contact Midland Wellness Centre today and experience the benefits of professionally designed orthotics.</p>
                                        </div>
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
