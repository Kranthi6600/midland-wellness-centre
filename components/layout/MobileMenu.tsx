'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type MobileMenuProps = {
  isSidebar: boolean;
  handleMobileMenu: () => void;
  handleSidebar: () => void;
};

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }: MobileMenuProps) {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (key: number) => {
    if (activeDropdown === key) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(key);
    }
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="far fa-times" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/"><Image src="/assets/images/header_logo.png" alt="Logo Image" width={203} height={40} priority /></Link>
          </div>
          <div className="menu-outer">
            <ul className="navigation clearfix">

              {/* Home */}
              <li><Link href="/">Home</Link></li>

              {/* About */}
              <li><Link href="/about">About Us</Link></li>

              {/* Services */}
              <li className={`dropdown ${activeDropdown === 2 ? "current" : ""}`}>
                <Link href="/departments">Departments</Link>
                <ul style={{ display: activeDropdown === 2 ? "block" : "none" }}>
                  <li><Link href="/department-details">Physiotherapy</Link></li>
                  <li><Link href="/department-details-2">Chiropractic Adjustments</Link></li>
                  <li><Link href="/department-details-3">Massage Therapy</Link></li>
                  <li><Link href="/department-details-4">Electrotherapy</Link></li>
                  <li><Link href="/department-details-5">Kinesio Taping</Link></li>
                  <li><Link href="/department-details-6">Orthotics</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 2 ? "open" : ""}`} onClick={() => toggleDropdown(2)}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              {/* Appointments */}
              <li><Link href="/appointments">Appointments</Link></li>

              {/* Contact */}
              <li><Link href="/contact">Contact Us</Link></li>

              {/* Blog */}
              <li><Link href="/blog">Blog</Link></li>

            </ul>
          </div>

          <div className="contact-info">
              <h4>Contact Info</h4>
              <ul>
                  <li><i className="icon-17"></i> +41 416-261-7246</li>
                  <li><i className="icon-46"></i> info@midlandwellness.ca</li>
                  <li><i className="icon-18"></i> Midland Wellness Centre, Ontario, Canada</li>
              </ul>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <ul className="clearfix">
              <li><Link href="/#"><span className="fab fa-twitter" /></Link></li>
              <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>
              <li><Link href="/#"><span className="fab fa-pinterest-p" /></Link></li>
              <li><Link href="/#"><span className="fab fa-instagram" /></Link></li>
              <li><Link href="/#"><span className="fab fa-youtube" /></Link></li>
            </ul>
          </div>

        </nav>
      </div>

      {/* Overlay */}
      <div
        className="nav-overlay"
        style={{ display: isSidebar ? "block" : "none" }}
        onClick={handleSidebar}
      />
    </>
  );
}
