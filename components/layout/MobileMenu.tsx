'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ServiceItem } from "@/lib/api";

type MobileMenuProps = {
  isSidebar: boolean;
  handleMobileMenu: () => void;
  handleSidebar: () => void;
};

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }: MobileMenuProps) {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [services, setServices] = useState<ServiceItem[]>([]);

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
              <li className={services.length > 0 ? "dropdown" : ""}>
                <Link href="/services" onClick={(e) => { if (services.length > 0) { e.preventDefault(); toggleDropdown(2); } }}>
                  Our Services {services.length > 0 && <span className={activeDropdown === 2 ? "fa fa-angle-up" : "fa fa-angle-down"}></span>}
                </Link>
                {activeDropdown === 2 && services.length > 0 && (
                  <ul>
                    {services.map((svc) => (
                      <li key={svc.id}>
                        <Link href={`/services/${svc.slug}`}>{svc.wehoware_service_categories?.name || svc.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Appointment */}
              <li><Link href="/appointments">Appointment</Link></li>

              {/* Contact */}
              <li><Link href="/contact">Contact Us</Link></li>

              {/* Blog */}
              <li><Link href="/blog">Blog</Link></li>

            </ul>
          </div>

          <div className="contact-info">
              <h4>Contact Info</h4>
              <ul>
                  <li><i className="icon-17"></i> +1 416-261-7246</li>
                  <li><i className="icon-46"></i> info@midlandwellness.ca</li>
                  <li><i className="icon-18"></i> Midland Wellness Centre, Ontario, Canada</li>
              </ul>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <ul className="clearfix">
              <li><Link href="https://www.instagram.com/p/DaEoYrBhgkQ/?igsh=NGdlcGU3eXhtZTN0" target="_blank"><span className="fab fa-instagram" /></Link></li>
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
