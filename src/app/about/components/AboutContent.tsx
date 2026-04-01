"use client";
import React from "react";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";

export default function AboutContent() {
    return (
        <section className="about-section about-page p_relative pb_50">
            <div className="auto-container">
                <div className="upper-content mb_80">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-block-one">
                                <div className="content-box">
                                    <div className="sec-title mb_15">
                                        <span className="sub-title mb_5">About the company</span>
                                        <h2>Expertise and compassion saved my life</h2>
                                    </div>
                                    <div className="text-box mb_30 pb_30">
                                        <p>Midland Wellness Centre is a multi-disciplinary health clinic located in the heart of Scarborough Our main goal is to help you restore your health and maximize your function. Combining evidence-based chiropractic care with specialized techniques such as Kinesio Taping, acupuncture, laser and massage therapy, we can provide you with customized care to suit your needs.</p>
                                    </div>
                                    <div className="inner-box">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div className="specialities-box">
                                                    <h4>Our Specialities</h4>
                                                    <ul className="list-style-one clearfix">
                                                        <li>Preventive care</li>
                                                        <li>Diagnostic testing</li>
                                                        <li>Mental health services</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div className="specialities-box">
                                                    <h4>Our Vision</h4>
                                                    <ul className="list-style-one clearfix">
                                                        <li>To provide accessible and equitable</li>
                                                        <li>To use innovative technology</li>
                                                        <li>To empower patients</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-block-one">
                                <div className="image-box">
                                    <div className="shape">
                                        <div className="shape-2" style={{ backgroundImage: "url(assets/images/shape/shape-10.png)" }}></div>
                                    </div>
                                    <figure className="image">
                                    <Image 
                                        src="/assets/images/resource/img2.webp" 
                                        alt="Midland Wellness Centre - Professional healthcare team providing physiotherapy and wellness services" 
                                        width={523} 
                                        height={399} 
                                        priority 
                                        style={{
                                            borderRadius: '15px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </figure>
                                    <div className="text-box">
                                        <div className="image-shape" style={{ backgroundImage: "url(assets/images/shape/shape-7.png)" }}></div>
                                        <h2>30</h2>
                                        <span>Years of Experience in This Field</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
