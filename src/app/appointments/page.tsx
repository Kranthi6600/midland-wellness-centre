"use client";
import { useState } from "react";
import Image from "next/image";
import Layout from "../../../components/layout/Layout";
import Cta from "../../../components/sections/home/Cta";

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Appointment Form Data:', formData);
        // Here you would typically send the data to your backend
        alert('Appointment request submitted successfully! We will contact you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            department: '',
            doctor: '',
            message: ''
        });
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

                                    <form onSubmit={handleSubmit} className="appointment-form default-form">
                                        <div className="row clearfix" style={{ gap: '20px' }}>
                                            {/* Name Field */}
                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div className="form-group">
                                                    <div className="icon"><i className="icon-45"></i></div>
                                                    <input 
                                                        type="text" 
                                                        name="name" 
                                                        placeholder="Full Name" 
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required 
                                                    />
                                                </div>
                                            </div>

                                            {/* Email Field */}
                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div className="form-group">
                                                    <div className="icon"><i className="icon-46"></i></div>
                                                    <input 
                                                        type="email" 
                                                        name="email" 
                                                        placeholder="Email Address" 
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required 
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone Field */}
                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div className="form-group">
                                                    <div className="icon"><Image src="/assets/images/icons/icon-18.svg" alt="Phone" width={14} height={15} priority /></div>
                                                    <input 
                                                        type="tel" 
                                                        name="phone" 
                                                        placeholder="Phone Number" 
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        required 
                                                        style={{ paddingLeft: '50px', height: '60px', border: '1px solid #e1e1e1', borderRadius: '5px', fontSize: '16px', transition: 'all 500ms ease' }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Date Field */}
                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div className="form-group">
                                                    <div className="icon"><i className="icon-50"></i></div>
                                                    <input 
                                                        type="date" 
                                                        name="date" 
                                                        placeholder="Appointment Date" 
                                                        value={formData.date}
                                                        onChange={handleInputChange}
                                                        required 
                                                        style={{ paddingLeft: '50px', height: '60px', border: '1px solid #e1e1e1', borderRadius: '5px', fontSize: '16px', transition: 'all 500ms ease', appearance: 'none' }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Department Field */}
                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div className="form-group">
                                                    <div className="icon"><i className="icon-51"></i></div>
                                                    <select 
                                                        name="department" 
                                                        value={formData.department}
                                                        onChange={handleInputChange}
                                                        required
                                                        style={{ paddingLeft: '50px', appearance: 'none', backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"%3e%3cpolyline points=\"6,9 12,15 18,9\"%3e%3c/polyline%3e%3c/svg%3e')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 15px center', backgroundSize: '20px' }}
                                                    >
                                                        <option value="">Select Department</option>
                                                        {departments.map((dept, index) => (
                                                            <option key={index} value={dept}>{dept}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Doctor Field */}
                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div className="form-group">
                                                    <div className="icon"><i className="icon-52"></i></div>
                                                    <select 
                                                        name="doctor" 
                                                        value={formData.doctor}
                                                        onChange={handleInputChange}
                                                        required
                                                        style={{ paddingLeft: '50px', appearance: 'none', backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"%3e%3cpolyline points=\"6,9 12,15 18,9\"%3e%3c/polyline%3e%3c/svg%3e')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 15px center', backgroundSize: '20px' }}
                                                    >
                                                        <option value="">Select Doctor</option>
                                                        {doctors.map((doctor, index) => (
                                                            <option key={index} value={doctor}>{doctor}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Time Field */}
                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div className="form-group">
                                                    <div className="icon"><i className="icon-53"></i></div>
                                                    <select 
                                                        name="time" 
                                                        value={formData.time}
                                                        onChange={handleInputChange}
                                                        required
                                                        style={{ paddingLeft: '50px', appearance: 'none', backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"%3e%3cpolyline points=\"6,9 12,15 18,9\"%3e%3c/polyline%3e%3c/svg%3e')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 15px center', backgroundSize: '20px' }}
                                                    >
                                                        <option value="">Select Time</option>
                                                        {timeSlots.map((time, index) => (
                                                            <option key={index} value={time}>{time}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Message Field */}
                                            <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                                <div className="form-group">
                                                    <div className="icon"><i className="icon-48"></i></div>
                                                    <textarea 
                                                        name="message" 
                                                        placeholder="Additional Message (Optional)" 
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        rows={4}
                                                    ></textarea>
                                                </div>
                                            </div>

                                            {/* Submit Button */}
                                            <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                                <div className="form-group message-btn">
                                                    <button type="submit" className="theme-btn btn-two">
                                                        <span>Book Appointment</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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
                                        <a href="tel:+41 416-261-7246" className="phone">+41 416-261-7246</a>
                                        <br />
                                        <a href="tel:+41 416-261-9813" className="phone">+41 416-261-9813</a>
                                    </div>

                                    <div className="info-box" style={{ marginBottom: '30px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="12" r="10" stroke="#FFD700" strokeWidth="2" fill="none"/>
                                                <path d="M12 6v6l4 2" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
                                            </svg>
                                            <h4 style={{ marginLeft: '10px', marginBottom: '0' }}>Working Hours</h4>
                                        </div>
                                        <p>Monday - Tuesday - Thursday - Friday: 10 AM – 6 PM</p>
                                        <p>Wednesday: 10 AM – 7 PM</p>
                                        <p>Saturday: 12 PM – 3 PM</p>
                                        <p>Sunday: Closed</p>
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
                                        <p><a href="mailto:info@midlandwellnesscentre.com">info@midlandwellnesscentre.com</a></p>
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
