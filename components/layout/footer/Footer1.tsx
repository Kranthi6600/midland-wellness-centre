'use client'

import Image from "next/image";
import Link from "next/link"
import { useState, useEffect } from "react"
import { ServiceItem } from "@/lib/api";

export default function Footer1() {
    const [services, setServices] = useState<ServiceItem[]>([]);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        fetch("/api/proxy-services")
            .then((res) => res.json())
            .then((res) => {
                setServices(res.data || []);
            })
            .catch(() => {
                setServices([]);
            });
    }, []);

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
    };

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return (
        <>

            <footer className="main-footer">
                <div className="p_relative">
                    <div className="pattern-layer">
                        <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-21.png)" }}></div>
                        <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-22.png)" }}></div>
                        <div className="pattern-3" style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}></div>
                        <div className="pattern-4" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
                    </div>
                    <div className="auto-container">
                        <div className="row clearfix" style={{ padding: '30px' }}>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column mt-5">
                                <div className="footer-widget about-widget">
                                    <div className="widget-title">
                                        <h3>About Us</h3>
                                    </div>
                                    <div className="widget-content">
                                        <p>To provide accessible and equitable healthcare for all individuals, regardless of their  or socioeconomic status.</p>
                                        <ul className="social-links clearfix">
                                            <li><Link href="https://www.instagram.com/p/DaEoYrBhgkQ/?igsh=NGdlcGU3eXhtZTN0" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget ml_70">
                                    <div className="widget-title">
                                        <h3>Links</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="/about">About</Link></li>
                                            <li><Link href="/services">Our Services</Link></li>
                                            <li><Link href="/appointments">Appointments</Link></li>
                                            <li><Link href="/doctors">Our Team</Link></li>
                                            <li><Link href="/contact-us">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget ml_70">
                                    <div className="widget-title" style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        cursor: isMobile ? 'pointer' : 'default'
                                    }} onClick={isMobile ? toggleServicesDropdown : undefined}>
                                        <h3>Services</h3>
                                        {isMobile && (
                                            <span style={{
                                                display: 'inline-block',
                                                transition: 'transform 0.3s ease',
                                                transform: isServicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                                            }}>
                                                ▼
                                            </span>
                                        )}
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix" style={{
                                            maxHeight: isMobile ? (isServicesDropdownOpen ? '500px' : '0') : 'none',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.4s ease-in-out, opacity 0.3s ease-in-out',
                                            opacity: isMobile ? (isServicesDropdownOpen ? 1 : 0) : 1,
                                            display: isMobile ? 'block' : 'block'
                                        }}>
                                            {services.slice(0, 4).map((svc) => (
                                                <li key={svc.id}>
                                                    <Link href={`/services/${svc.slug}`}>{svc.wehoware_service_categories?.name || svc.title}</Link>
                                                </li>
                                            ))}
                                            <li><Link href="/services">View All Services</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget contact-widget">
                                    <div className="widget-title">
                                        <h3>Contacts</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="info-list clearfix">
                                            <li><Image src="/assets/images/icons/icon-5.svg" alt="Icon" width={20} height={15} priority />Email: <Link href="mailto:info@midlandwellness.ca">info@midlandwellness.ca</Link></li>
                                            <li><Image src="/assets/images/icons/icon-6.svg" alt="Icon" width={20} height={21} priority />Call : <Link href="tel:+1 416-261-7246">+1 416-261-7246</Link></li>
                                            <li><Image src="/assets/images/icons/icon-6.svg" alt="Icon" width={20} height={21} priority />Call : <Link href="tel:+1 416-261-9813">+1 416-261-9813</Link></li>
                                            <li><Image src="/assets/images/icons/icon-7.svg" alt="Icon" width={20} height={20} priority />2555 Eglinton Ave. E,
                                                Scarborough, Ontario
                                                Canada, M1K 5J1 </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom centred">
                    <div className="auto-container">
                        <div className="copyright">
                            <p><Link href="/">Midland Wellness Centre</Link> &copy; {new Date().getFullYear()} All Right Reserved | Powered by Wehoware</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
