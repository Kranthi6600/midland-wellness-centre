import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
        <section className="banner-style-two p_relative">
            <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/hospital3.png)" }}></div>
            <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-26.png)" }}></div>
                <div className="pattern-3" style={{ backgroundImage: "url(assets/images/shape/shape-27.png)" }}></div>
            </div>
            <div className="auto-container">
                <div className="content-box">
                    <h1>Wellness Centre in Scarborough for Pain Relief & Recovery</h1>
                    <p>Struggling with pain or mobility issues? Visit a trusted wellness centre in Scarborough offering expert physiotherapy, chiropractic care, massage therapy, and rehabilitation services. Our team focuses on personalised treatments to help you recover faster, reduce pain, and regain strength. Start your journey to better health today with advanced care designed for long-term results.</p>
                    <div className="cta-section" style={{ marginTop: '20px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#007acc' }}>"Are You Still in Pain?"</h3>
                        <p style={{ marginBottom: '15px' }}>Are you still dealing with chronic pain, injuries, or mobility problems? At our wellness centre in Scarborough, we provide advanced, non-invasive treatments to help you feel better and move freely again. Whether it's back pain, sports injury, or joint discomfort, our experienced team is ready to help you recover.</p>
                        <p style={{ marginBottom: '15px' }}>We focus on identifying the root cause of your condition and creating personalised treatment plans. Our goal is not just temporary relief but long-term healing and improved quality of life.</p>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#007acc', marginTop: '20px' }}>"You Can Heal. We Can Help."</h3>
                        <p style={{ marginBottom: '15px' }}>At Midland Wellness Centre, we believe healing starts with the right care and guidance. As a leading wellness centre in Scarborough, we combine modern rehabilitation techniques with a patient-focused approach to deliver effective results.</p>
                        <p style={{ marginBottom: '15px' }}>Our team of professionals works closely with you to understand your condition and provide targeted therapies. Whether you need physiotherapy clinic Scarborough, chiropractor Scarborough, or massage therapy Scarborough, we offer complete care under one roof.</p>
                    </div>
                    <div className="lower-box">
                        <div className="btn-box" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                            <Link href="/contact" style={{
                                fontSize: 'clamp(12px, 2.5vw, 14px)',
                                backgroundColor: '#007acc',
                                color: '#ffffff',
                                padding: 'clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                display: 'inline-block',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontWeight: '500',
                                whiteSpace: 'nowrap',
                                minWidth: 'fit-content'
                            }}><span style={{ display: 'block' }}>Book Appointment</span></Link>
                            <Link href="tel:+1234567890" style={{
                                fontSize: 'clamp(12px, 2.5vw, 14px)',
                                backgroundColor: '#28a745',
                                color: '#ffffff',
                                padding: 'clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                display: 'inline-block',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontWeight: '500',
                                whiteSpace: 'nowrap',
                                minWidth: 'fit-content'
                            }}><span style={{ display: 'block' }}>Call Now</span></Link>
                        </div>
                        <div className="doctors-list">
                            <ul className="thumb-box clearfix">
                                <li style={{
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    display: 'inline-block',
                                    width: '45px',
                                    height: '45px'
                                }}>
                                    <Image 
                                        src="/assets/images/banner/docprofile1.webp" 
                                        alt="Image" 
                                        width={45} 
                                        height={45} 
                                        priority 
                                        style={{
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            display: 'block',
                                            width: '100%',
                                            height: '100%'
                                        }}
                                    />
                                </li>
                                <li style={{
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    display: 'inline-block',
                                    width: '45px',
                                    height: '45px'
                                }}>
                                    <Image 
                                        src="/assets/images/banner/docprofile2.webp" 
                                        alt="Image" 
                                        width={45} 
                                        height={45} 
                                        priority 
                                        style={{
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            display: 'block',
                                            width: '100%',
                                            height: '100%'
                                        }}
                                    />
                                </li>
                                <li style={{
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    display: 'inline-block',
                                    width: '45px',
                                    height: '45px'
                                }}>
                                    <Image 
                                        src="/assets/images/banner/docprofile3.webp" 
                                        alt="Image" 
                                        width={45} 
                                        height={45} 
                                        priority 
                                        style={{
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            display: 'block',
                                            width: '100%',
                                            height: '100%'
                                        }}
                                    />
                                </li>
                                <li style={{
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    display: 'inline-block',
                                    width: '45px',
                                    height: '45px'
                                }}>
                                    <Image 
                                        src="/assets/images/banner/docprofile4.webp" 
                                        alt="Image" 
                                        width={45} 
                                        height={45} 
                                        priority 
                                        style={{
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            display: 'block',
                                            width: '100%',
                                            height: '100%'
                                        }}
                                    />
                                </li>
                            </ul>
                            <h3>30+</h3>
                            <span>Years of Expert Care</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}
