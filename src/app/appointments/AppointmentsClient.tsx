"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../../../components/layout/Layout";
import Cta from "../../../components/sections/home/Cta";
import AppointmentForm from "../../components/forms/AppointmentForm";
import { SITE_CONFIG, BUSINESS_HOURS } from "@/constants";
import { formatBusinessHours } from "@/utils/formatting";
import { validateAppointmentForm } from "@/utils/validation";
import { createEmailService } from "@/services/emailService";
import { createFormspreeService } from "@/services/formspreeService";

interface AppointmentData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export default function AppointmentsClient() {
    const [isClient, setIsClient] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [appointmentDetails, setAppointmentDetails] = useState<any>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleAppointmentSubmit = async (appointmentData: AppointmentData) => {
        try {
            if (process.env.NEXT_PUBLIC_FORMSPREE_ID) {
                const formspreeService = createFormspreeService();
                const result = await formspreeService.sendAppointment({
                    name: `${appointmentData.firstName} ${appointmentData.lastName}`,
                    email: appointmentData.email,
                    phone: appointmentData.phone,
                    subject: `Appointment Request: ${appointmentData.service}`,
                    message: `Service: ${appointmentData.service}\nDate: ${appointmentData.preferredDate}\nTime: ${appointmentData.preferredTime}\n\n${appointmentData.message || 'No additional message'}`,
                    service: appointmentData.service,
                    preferredDate: appointmentData.preferredDate,
                    preferredTime: appointmentData.preferredTime
                });
                
                if (!result.success) {
                    throw new Error(result.error);
                }
            } else {
                const emailService = createEmailService();
                
                const emailData = {
                    name: `${appointmentData.firstName} ${appointmentData.lastName}`,
                    email: appointmentData.email,
                    phone: appointmentData.phone,
                    subject: `Appointment Request: ${appointmentData.service}`,
                    message: `Service: ${appointmentData.service}\nDate: ${appointmentData.preferredDate}\nTime: ${appointmentData.preferredTime}\n\n${appointmentData.message || 'No additional message'}`,
                    type: "appointment"
                };

                await emailService.sendContactEmail(emailData);
            }
            
            setAppointmentDetails(appointmentData);
            setShowConfirmation(true);
            
            setTimeout(() => {
                setShowConfirmation(false);
            }, 10000);
            
        } catch (error) {
            alert('Error submitting appointment. Please try again.');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        // This function is now handled by the AppointmentForm component
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
                <section className="appointment-banner p_relative" role="banner">
                    <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/background/appointment-bg.jpg)" }} aria-hidden="true"></div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h1>Book Your Appointment</h1>
                            <p>Schedule your visit with our expert medical team</p>
                            <div className="quick-info">
                                <div className="info-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>Emergency: +41 416-261-7246 | +41 416-261-9813</span>
                                </div>
                                <div className="info-item">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                    <span>Open: {formatBusinessHours(BUSINESS_HOURS)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Appointment Form Section */}
                <section className="appointment-form-section sec-pad p_relative" role="main">
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

                                    {isClient && <AppointmentForm onSubmit={handleAppointmentSubmit} />}
                                </div>
                            </div>

                            {/* Info Column */}
                            <div className="col-lg-4 col-md-12 col-sm-12 info-column">
                                <div className="appointment-info">
                                    <div className="info-box" style={{ marginBottom: '30px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <Image src="/assets/images/icons/icon-6.svg" alt="Emergency" width={20} height={20} priority />
                                            <h4 style={{ marginLeft: '10px', marginBottom: '0' }}>Emergency</h4>
                                        </div>
                                        <h5 style={{ margin: '0 0 10px 30px', fontSize: '16px', fontWeight: '500' }}>Emergency Contact</h5>
                                        <p style={{ margin: '0 0 10px 30px' }}>For urgent medical needs</p>
                                        <div style={{ marginLeft: '30px' }}>
                                            <a href={`tel:+41 416-261-7246`} className="phone" aria-label={`Call emergency number +41 416-261-7246`}>+41 416-261-7246</a>
                                            <br />
                                            <a href={`tel:+41 416-261-9813`} className="phone" aria-label={`Call emergency number +41 416-261-9813`}>+41 416-261-9813</a>
                                        </div>
                                    </div>

                                    <div className="info-box" style={{ marginBottom: '30px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
                                        <address>
                                            2555 Eglinton Ave. E<br />
                                            Scarborough, Ontario<br />
                                            Canada, M1K 5J1
                                        </address>
                                        <a 
                                            href="https://maps.google.com/?q=2555+Eglinton+Ave+E+Scarborough+Ontario+M1K+5J1" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="directions-link"
                                            aria-label="Get directions to Midland Wellness Centre"
                                        >
                                            Get Directions
                                        </a>
                                    </div>

                                    <div className="info-box">
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <Image src="/assets/images/icons/icon-5.svg" alt="Email" width={20} height={20} priority />
                                            <h4 style={{ marginLeft: '10px', marginBottom: '0' }}>Email Us</h4>
                                        </div>
                                        <p><a href={`mailto:${SITE_CONFIG.email}`} aria-label={`Send email to ${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a></p>
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
                                        <h3>Expert Doctors</h3>
                                        <p>Highly qualified and experienced medical professionals dedicated to your health</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                                <div className="feature-block-one">
                                    <div className="inner-box">
                                        <h3>Modern Equipment</h3>
                                        <p>State-of-the-art medical technology for accurate diagnosis and treatment</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                                <div className="feature-block-one">
                                    <div className="inner-box">
                                        <h3>Personalized Care</h3>
                                        <p>Tailored treatment plans designed to meet your specific healthcare needs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Confirmation Modal */}
                {showConfirmation && appointmentDetails && (
                    <div className="confirmation-modal-overlay">
                        <div className="confirmation-modal">
                            <div className="confirmation-header">
                                <h3>Appointment Request Received!</h3>
                                <button 
                                    className="close-btn" 
                                    onClick={() => setShowConfirmation(false)}
                                >
                                    ×
                                </button>
                            </div>
                            <div className="confirmation-body">
                                <div className="success-icon">
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="#28a745" strokeWidth="2"/>
                                        <path d="M9 12l2 2 4-4" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h4>Thank you for booking with us!</h4>
                                <p>Your appointment request has been successfully submitted. We'll contact you shortly to confirm your appointment.</p>
                                
                                <div className="appointment-details">
                                    <h5>Appointment Details:</h5>
                                    <ul>
                                        <li><strong>Name:</strong> {appointmentDetails.firstName} {appointmentDetails.lastName}</li>
                                        <li><strong>Email:</strong> {appointmentDetails.email}</li>
                                        <li><strong>Phone:</strong> {appointmentDetails.phone}</li>
                                        <li><strong>Service:</strong> {appointmentDetails.service}</li>
                                        <li><strong>Date:</strong> {new Date(appointmentDetails.preferredDate).toLocaleDateString()}</li>
                                        <li><strong>Time:</strong> {appointmentDetails.preferredTime}</li>
                                    </ul>
                                </div>
                                
                                <div className="next-steps">
                                    <h5>What happens next?</h5>
                                    <ol>
                                        <li>You'll receive a confirmation email shortly</li>
                                        <li>Our staff will call you to confirm the appointment</li>
                                        <li>Please arrive 10 minutes before your scheduled time</li>
                                        <li>Bring your health card and any relevant medical documents</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="confirmation-footer">
                                <button 
                                    className="btn btn-primary" 
                                    onClick={() => setShowConfirmation(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <Cta/>
            </Layout>
        </div>
    )
}
