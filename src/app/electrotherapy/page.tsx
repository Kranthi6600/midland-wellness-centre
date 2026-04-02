import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../components/sections/home/Cta";
import { generateMetadata, defaultSEO } from "@/utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  ...defaultSEO,
  title: "Electrotherapy in Scarborough | Pain Relief & Rehab Care",
  description: "Get expert electrotherapy in Scarborough for pain relief, muscle recovery & rehab. Book advanced treatment today.",
  keywords: "electrotherapy scarborough, electrical stimulation, pain management, muscle stimulation, TENS therapy, rehabilitation equipment",
  openGraph: {
    title: "Electrotherapy in Scarborough | Pain Relief & Rehab Care",
    description: "Get expert electrotherapy in Scarborough for pain relief, muscle recovery & rehab. Book advanced treatment today.",
  },
  canonical: "/electrotherapy"
});

export default function ElectrotherapyPage() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Electrotherapy">
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
                                                <li><Link href="/electrotherapy" className="current">Electrotherapy</Link></li>
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
                                            <h2>Electrotherapy in Scarborough – Advanced Pain Relief & Muscle Recovery</h2>
                                        </div>
                                        <div className="text mb_30">
                                            <p>If you are looking for effective electrotherapy in Scarborough, Midland Wellness Centre provides advanced treatments designed to reduce pain, improve circulation, and accelerate healing. Electrotherapy is a modern physiotherapy technique that uses controlled electrical stimulation to target muscles and nerves. It is widely used for pain management, injury recovery, and improving muscle function.</p>
                                        </div>
                                        <div className="text mb_30">
                                            <p>At our clinic, electrotherapy in Scarborough is integrated into personalised rehabilitation programs to deliver optimal results. Whether you are dealing with chronic pain, muscle injuries, or post-surgical recovery, our expert therapists ensure safe and effective treatment tailored to your condition. Patients trust us for advanced care that supports long-term healing.</p>
                                        </div>
                                        <div className="image-box mb_40">
                                            <figure className="image">
                                                <Image 
                                                    src="/assets/images/resource/electrotherapy1.webp" 
                                                    alt="Professional electrotherapy treatment at Midland Wellness Centre" 
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
                                        <h1>What is Electrotherapy & How Does It Work?</h1>
                                        <div className="text mb_30">
                                            <p>Electrotherapy is a therapeutic treatment that uses electrical currents to stimulate muscles, nerves, and tissues. It helps reduce pain signals, improve blood flow, and promote faster healing. This non-invasive method is commonly used in physiotherapy for both acute and chronic conditions.</p>
                                        </div>
                                        <div className="text mb_30">
                                            <p>Choosing professional electrotherapy in Scarborough ensures proper application and maximum effectiveness. Whether you need electrotherapy treatment Scarborough, muscle stimulation therapy Toronto, or pain relief electrotherapy near me, this technique provides a safe and efficient solution for recovery.</p>
                                        </div>
                                        <h1>Conditions Treated with Electrotherapy</h1>
                                        <div className="text mb_30">
                                            <p>Electrotherapy is highly effective in treating various conditions related to pain, injury, and muscle dysfunction. Our clinic focuses on both immediate relief and long-term recovery.</p>
                                        </div>
                                        <div className="row clearfix mb_50">
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Chronic Pain Management</h4>
                                                    <p>Electrotherapy reduces pain signals and relaxes muscles. It is ideal for conditions like back pain, neck pain, and arthritis.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Muscle Weakness and Injury Recovery</h4>
                                                    <p>Electrical stimulation improves muscle activation and strength. This helps patients recover faster after injuries or surgery.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Sports Injuries and Rehabilitation</h4>
                                                    <p>Athletes benefit from faster healing and reduced inflammation. Electrotherapy supports recovery and enhances performance.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Post-Surgical Rehabilitation</h4>
                                                    <p>This therapy improves circulation and reduces swelling. It accelerates healing and restores function after surgery.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h1>Types of Electrotherapy Treatments We Offer</h1>
                                        <div className="text mb_30">
                                            <p>At Midland Wellness Centre, we provide a range of advanced electrotherapy techniques tailored to your needs. Each treatment is designed to deliver maximum therapeutic benefits.</p>
                                        </div>
                                        <div className="row clearfix mb_50">
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>TENS (Transcutaneous Electrical Nerve Stimulation)</h4>
                                                    <p>TENS therapy blocks pain signals and provides immediate relief. It is commonly used for chronic pain and muscle discomfort.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>EMS (Electrical Muscle Stimulation)</h4>
                                                    <p>EMS stimulates muscles to improve strength and function. It is ideal for rehabilitation and muscle recovery.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Ultrasound Therapy</h4>
                                                    <p>This treatment uses sound waves to promote deep tissue healing. It improves circulation and reduces inflammation.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Interferential Therapy (IFT)</h4>
                                                    <p>IFT uses electrical currents to relieve pain and improve blood flow. It is highly effective for musculoskeletal conditions.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h1>Why Choose Our Electrotherapy Clinic in Scarborough?</h1>
                                        <div className="text mb_30">
                                            <p>Choosing the right clinic ensures better outcomes and faster recovery. Our team is dedicated to providing high-quality care using advanced techniques.</p>
                                        </div>
                                        <div className="row clearfix mb_50">
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Experienced and Certified Therapists</h4>
                                                    <p>Our professionals are trained in modern electrotherapy methods. They ensure safe and effective treatment for every patient.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Personalised Treatment Plans</h4>
                                                    <p>Each patient receives a customized plan based on their condition. This improves results and enhances recovery speed.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Advanced Technology and Equipment</h4>
                                                    <p>We use the latest electrotherapy devices for precise and effective treatment. This ensures better pain relief and healing outcomes.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h1>Benefits of Electrotherapy for Recovery</h1>
                                        <div className="text mb_30">
                                            <p>Electrotherapy offers numerous benefits that make it a valuable part of modern rehabilitation. It is widely used for both pain relief and performance improvement.</p>
                                        </div>
                                        <div className="row clearfix mb_50">
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Effective Pain Relief Without Medication</h4>
                                                    <p>Electrotherapy reduces pain naturally by blocking nerve signals. This makes it a safe alternative to medication.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Improved Blood Circulation and Healing</h4>
                                                    <p>Electrical stimulation enhances blood flow and oxygen supply. This speeds up tissue repair and recovery.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Enhanced Muscle Strength and Function</h4>
                                                    <p>Electrotherapy activates muscles and improves coordination. This is especially beneficial for rehabilitation.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12 single-column">
                                                <div className="service-list">
                                                    <h4>Reduced Inflammation and Swelling</h4>
                                                    <p>The therapy helps decrease swelling and promotes faster healing. This improves overall recovery outcomes.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h1>Frequently Asked Questions</h1>
                                        <div className="text mb_30">
                                            <p><strong>What is electrotherapy used for?</strong><br />
                                            Electrotherapy is used to relieve pain, improve muscle function, and promote healing. It is commonly used in physiotherapy and rehabilitation.</p>
                                        </div>
                                        <div className="text mb_30">
                                            <p><strong>Is electrotherapy safe?</strong><br />
                                            Yes, electrotherapy is a safe and non-invasive treatment when performed by trained professionals.</p>
                                        </div>
                                        <div className="text mb_30">
                                            <p><strong>How many electrotherapy sessions are needed?</strong><br />
                                            The number of sessions depends on your condition and recovery goals. Many patients experience improvement within a few sessions.</p>
                                        </div>
                                        <h1>Electrotherapy Near You in Scarborough</h1>
                                        <div className="text mb_30">
                                            <p>If you are searching for electrotherapy near me, pain relief therapy Scarborough, or rehabilitation clinic Toronto, Midland Wellness Centre is your trusted destination. We provide expert care using advanced techniques to ensure fast and effective recovery.</p>
                                        </div>
                                        <div className="text mb_30">
                                            <p>Our clinic specialises in electrotherapy in Scarborough designed to reduce pain, improve mobility, and enhance overall function. Whether you need treatment for injuries or chronic conditions, we offer the right solution for your needs.</p>
                                        </div>
                                        <h1>Book Your Electrotherapy Session Today</h1>
                                        <div className="text mb_30">
                                            <p>Take the first step toward pain relief and recovery with expert electrotherapy in Scarborough. Our team is committed to providing personalised care and advanced treatment solutions for optimal results.</p>
                                        </div>
                                        <div className="text">
                                            <p>Contact Midland Wellness Centre today and experience the benefits of professional electrotherapy treatment.</p>
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
