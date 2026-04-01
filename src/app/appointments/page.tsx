"use client";
import { useState } from "react";
import Image from "next/image";
import Layout from "../../../components/layout/Layout";
import Cta from "../../../components/sections/home/Cta";
import AppointmentForm from "../../components/forms/AppointmentForm";
import { SITE_CONFIG, BUSINESS_HOURS } from "@/constants";
import { formatBusinessHours } from "@/utils/formatting";
import { validateAppointmentForm } from "@/utils/validation";

export default function Appointments_Page() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        department: '',
        doctor: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleAppointmentSubmit = async (formData: any) => {
        try {
            // Here you would typically send the data to your backend API
            console.log('Appointment Form Data:', formData);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            alert('Appointment request submitted successfully! We will contact you soon.');
        } catch (error) {
            console.error('Error submitting appointment:', error);
            alert('Error submitting appointment. Please try again.');
        }
    };

    const departments = [
        "Physiotherapy",
        "Chiropractic Adjustments", 
        "Massage Therapy",
        "Electrotherapy",
        "Kinesio Taping",
        "Orthotics"
    ];

    const doctors = [
        "Dr. Sarah Johnson - Physiotherapy",
        "Dr. Michael Chen - Chiropractic",
        "Dr. Emily Davis - Massage Therapy",
        "Dr. Robert Wilson - Electrotherapy",
        "Dr. Lisa Anderson - Kinesio Taping",
        "Dr. James Brown - Orthotics"
    ];

    const timeSlots = [
        "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
    ];

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Book Appointment">
                {/* Appointment Banner Section */}
                <section className="appointment-banner p_relative">
                    <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/background/appointment-bg.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h1>Book Your Appointment</h1>
                            <p>Schedule your visit with our expert medical team</p>
                        </div>
                    </div>
                </section>

                {/* Appointment Form Section */}
                <section className="appointment-form-section sec-pad p_relative">
                    <div className="auto-container">
                        <div className="row clearfix">
                            {/* Form Column */}
                            <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                                <div className="appointment-form-inner">
                                    <div className="sec-title mb_50">
                                        <span className="sub-title mb_5">Get Started</span>
                                        <h2>Schedule Your Visit</h2>
                                        <p>Fill out the form below to book your appointment</p>
                                    </div>

                                        <AppointmentForm onSubmit={handleAppointmentSubmit} />
                                </div>
                            </div>

                            {/* Info Column */}
                            <div className="col-lg-4 col-md-12 col-sm-12 info-column">
                                <div className="appointment-info">
                                    <div className="info-box" style={{ marginBottom: '30px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <Image src="/assets/images/icons/icon-6.svg" alt="Emergency" width={20} height={20} priority />
                                            <h4 style={{ marginLeft: '10px', marginBottom: '0' }}>Emergency Contact</h4>
                                        </div>
                                        <p>For urgent medical needs</p>
                                        <a href={`tel:${SITE_CONFIG.phone}`} className="phone">{SITE_CONFIG.phone}</a>
                                    </div>

                                    <div className="info-box" style={{ marginBottom: '30px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="12" r="10" stroke="#FFD700" strokeWidth="2" fill="none"/>
                                                <path d="M12 6v6l4 2" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
                                            </svg>
                                            <h4 style={{ marginLeft: '10px', marginBottom: '0' }}>Working Hours</h4>
                                        </div>
                                        <p>{formatBusinessHours(BUSINESS_HOURS)}</p>
                                    </div>

                                    <div className="info-box" style={{ marginBottom: '30px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <Image src="/assets/images/icons/icon-7.svg" alt="Location" width={20} height={20} priority />
                                            <h4 style={{ marginLeft: '10px', marginBottom: '0' }}>Location</h4>
                                        </div>
                                        <p>2555 Eglinton Ave. E<br />Scarborough, Ontario<br />Canada, M1K 5J1</p>
                                    </div>

                                    <div className="info-box">
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <Image src="/assets/images/icons/icon-5.svg" alt="Email" width={20} height={20} priority />
                                            <h4 style={{ marginLeft: '10px', marginBottom: '0' }}>Email Us</h4>
                                        </div>
                                        <p><a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="why-choose-section sec-pad p_relative">
                    <div className="auto-container">
                        <div className="sec-title centred mb_55">
                            <span className="sub-title mb_5">Why Choose Us</span>
                            <h2>Expert Medical Care</h2>
                            <p>Experience the difference with our comprehensive healthcare services</p>
                        </div>

                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                                <div className="feature-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <i className="icon-57"></i>
                                        </div>
                                        <h3>Expert Doctors</h3>
                                        <p>Highly qualified and experienced medical professionals dedicated to your health</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                                <div className="feature-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <i className="icon-58"></i>
                                        </div>
                                        <h3>Modern Equipment</h3>
                                        <p>State-of-the-art medical technology for accurate diagnosis and treatment</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                                <div className="feature-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <i className="icon-59"></i>
                                        </div>
                                        <h3>Personalized Care</h3>
                                        <p>Tailored treatment plans designed to meet your specific healthcare needs</p>
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
