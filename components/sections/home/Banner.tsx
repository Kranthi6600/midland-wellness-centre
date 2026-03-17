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
                    <span className="sub-title">Your Health is our Priority</span>
                    <h2>Stay Healthy, <span>Stay Happy</span></h2>
                    <p>In addition to treating illnesses and injuries, medical care also emphasizes the importance of preventive care, such as regular check-ups, vaccinations, and lifestyle modifications.</p>
                    <div className="lower-box">
                        <div className="btn-box"><Link href="/index-2" style={{
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
}}><span style={{ display: 'block' }}>Read More</span></Link></div>
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
                            <h3 style={{
                                fontSize: 'clamp(16px, 3vw, 20px)',
                                marginBottom: '5px',
                                textAlign: 'center',
                                width: '100%'
                            }}>100K</h3>
                            <span style={{
                                fontSize: 'clamp(12px, 2.5vw, 14px)',
                                textAlign: 'center',
                                display: 'block',
                                width: '100%'
                            }}>Professional Doctors</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}
