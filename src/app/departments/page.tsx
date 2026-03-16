"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../../components/layout/Layout";
import Cta from "../../../components/sections/home/Cta";
export default function Departments_Page() {

    const [activeTab, setActiveTab] = useState(2); // Default to first available tab (id: 2)

    // Load active tab from localStorage on component mount
    useEffect(() => {
        const savedTab = localStorage.getItem('activeTab');
        if (savedTab) {
            setActiveTab(parseInt(savedTab));
        }
    }, []);

    // Save active tab to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('activeTab', activeTab.toString());
    }, [activeTab]);

    const tabs = [
        { id: 2, title: "Success of Treatments" },
        { id: 3, title: "Certified Doctors" },
    ];

    const tabContent = [
        {
        id: 2,
        videoImg: "/assets/images/resource/img4.png",
        heading: "Success of Treatments",
        text: "Successful treatments are the result of accurate diagnosis, proper care, and advanced medical methods. We focus on providing effective solutions that help patients heal, regain strength, and return to their normal lives as quickly as possible. Continuous care and proven practices ensure better recovery outcomes.",
        list: [
            "Accurate Diagnosis",
            "Advanced Medical Methods",
            "Proper Care",
            "Continuous Monitoring",
        ],
        },
        {
        id: 3,
        videoImg: "/assets/images/resource/img3.png",
        heading: "Certified Doctors",
        text: "Our certified doctors are highly trained and experienced in providing quality medical care. They are dedicated to diagnosing and treating patients with professionalism, compassion, and the latest medical knowledge. Their goal is to ensure every patient receives safe, effective, and reliable healthcare.",
        list: [
            "Highly Trained & Experienced",
            "Professional & Compassionate",
            "Latest Medical Knowledge",
            "Safe & Effective Care",
        ],
        },
    ];

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Departments">
                <section className="service-page-section p_relative">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><Image src="/assets/images/service/physiotherapy2.webp" alt="Image" width={416} height={358} priority /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-18"></i></div>
                                                <h3><Link href="/department-details">Physiotherapy</Link></h3>
                                                <p>We provide physiotherapy to restore mobility and help you return to daily life.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><Image src="/assets/images/service/Chiropractic Adjustments.webp" alt="Image" width={416} height={358} priority /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-19"></i></div>
                                                <h3><Link href="/department-details-2">Chiropractic Adjustments</Link></h3>
                                                <p>A chiropractor treats neuromuscular disorders.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><Image src="/assets/images/service/massage1.webp" alt="Image" width={416} height={358} priority /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-20"></i></div>
                                                <h3><Link href="/department-details-3">Massage Therapy</Link></h3>
                                                <p>Your massage is done in a private clinic setting in Scarborough.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><Image src="/assets/images/service/electrotherapy.webp" alt="Image" width={416} height={358} priority /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-28"></i></div>
                                                <h3><Link href="/department-details-4">Electrotherapy</Link></h3>
                                                <p>Electrotherapy is nerve and muscle stimulation using electrical current.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><Image src="/assets/images/service/kinesiotaping.webp" alt="Image" width={416} height={358} priority /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-29"></i></div>
                                                <h3><Link href="/department-details-5">Kinesio Taping</Link></h3>
                                                <p>Midland Wellness Centre uses Kinesio Taping because of its proven benefits.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one">
                                    <div className="inner-box">
                                        <figure className="image-box"><Image src="/assets/images/service/Orthotics1.webp" alt="Image" width={416} height={358} priority /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-37"></i></div>
                                                <h3><Link href="/department-details-6">Orthotics</Link></h3>
                                                <p>Midland Wellness Centre offers high-quality custom orthotics.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="chooseus-section service-page sec-pad p_relative">

                    <div className="auto-container">
                        <div className="sec-title centred mb_55">
                        <span className="sub-title mb_5">Why Choose Us</span>
                        <h2>What&apos;s Our Speciality</h2>
                        <p>
                            Medical care is the practice of providing diagnosis, treatment, and
                            preventive care for various <br /> illnesses, injuries, and diseases. It
                        </p>
                        </div>

                        {/* Tabs Buttons */}
                        <div className="tabs-box">
                        <div className="tab-btns tab-buttons clearfix centred mb_40" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`tab-btn ${activeTab === tab.id ? "active-btn" : ""}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <h3>{tab.title}</h3>
                            </button>
                            ))}
                        </div>

                        {/* Tabs Content */}
                        <div className="tabs-content">
                            {tabContent.map((content) => (
                            <div
                                key={content.id}
                                className={`tab ${activeTab === content.id ? "active-tab" : ""}`}
                            >
                                <div className="inner-box">
                                <div
                                    className="shape"
                                    style={{ backgroundImage: "url(/assets/images/shape/shape-14.png)" }}
                                ></div>
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                                    <div
                                        className="video-inner"
                                        style={{ backgroundImage: `url(${content.videoImg})` }}
                                    >
                                    </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-block-two">
                                        <div className="content-box ml_40">
                                        <div className="text-box">
                                            <h3>{content.heading}</h3>
                                            <p>{content.text}</p>
                                        </div>
                                        <ul className="list-style-one clearfix">
                                            {content.list.map((item, index) => (
                                            <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                        <div className="btn-box">
                                            <Link href="/" className="theme-btn btn-two">
                                            <span>See All Services</span>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>
                </section>

                <section className="appointment-style-two p_relative">
                    <div className="auto-container">
                        <div className="inner-box">
                            <h2>Make an Appointment</h2>
                            <form method="post" action="service.html" className="default-form">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                        <div className="form-group">
                                            <div className="icon"><i className="icon-45"></i></div>
                                            <input type="text" name="name" placeholder="Name" required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                        <div className="form-group">
                                            <div className="icon"><i className="icon-46"></i></div>
                                            <input type="email" name="email" placeholder="Email" required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                        <div className="form-group">
                                            <div className="icon"><Image src="/assets/images/icons/icon-18.svg" alt="Image" width={14} height={15} priority /></div>
                                            <input type="text" name="phone" placeholder="Phone" required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                        <div className="form-group">
                                            <div className="icon"><i className="icon-48"></i></div>
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                        <div className="form-group message-btn">
                                            <button type="submit" className="theme-btn btn-two"><span>Send your message</span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <Cta/>
            </Layout>
        </div>
    )
}
