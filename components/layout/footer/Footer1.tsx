
import Image from "next/image";
import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="main-footer">
                <div className="widget-section p_relative">
                    <div className="pattern-layer">
                        <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-21.png)" }}></div>
                        <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-22.png)" }}></div>
                        <div className="pattern-3" style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}></div>
                        <div className="pattern-4" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
                    </div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget about-widget">
                                    <div className="widget-title">
                                        <h3>About Us</h3>
                                    </div>
                                    <div className="widget-content">
                                        <p>To provide accessible and equitable healthcare for all individuals, regardless of their  or socioeconomic status.</p>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="/"><i className="fab fa-dribbble"></i></Link></li>
                                            <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
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
                                            <li><Link href="/departments">Departments</Link></li>
                                            <li><Link href="/appointments">Appointments</Link></li>
                                            <li><Link href="/doctors">Our Team</Link></li>
                                            <li><Link href="/contact">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget ml_70">
                                    <div className="widget-title">
                                        <h3>Services</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="/department-details">Physiotherapy</Link></li>
                                            <li><Link href="/department-details-2">Chiropractic Adjustments</Link></li>
                                            <li><Link href="/department-details-3">Massage Therapy</Link></li>
                                            <li><Link href="/department-details-4">Electrotherapy</Link></li>
                                            <li><Link href="/department-details-5">Kinesio Taping</Link></li>
                                            <li><Link href="/department-details-6">Orthotics</Link></li>
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
                                            <li><Image src="/assets/images/icons/icon-6.svg" alt="Icon" width={20} height={21} priority />Call : <Link href="tel:+41 416-261-7246">+41 416-261-7246</Link></li>
                                            <li><Image src="/assets/images/icons/icon-6.svg" alt="Icon" width={20} height={21} priority />Call : <Link href="tel:+41 416-261-9813">+41 416-261-9813</Link></li>
                                            <li><Image src="/assets/images/icons/icon-7.svg" alt="Icon" width={20} height={20} priority />2555 Eglinton Ave. E,
                                                Scarborough, Ontario
                                                Canada, M1K 5J1 </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-logo mt_60">
                            <figure className="logo-box"><Link href="/"><Image src="/assets/images/header_logo.png" alt="Footer Logo" width={203} height={40} priority /></Link></figure>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom centred">
                    <div className="auto-container">
                        <div className="copyright">
                            <p><Link href="/">Midland Wellness Centre</Link> &copy; {new Date().getFullYear()} All Right Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
