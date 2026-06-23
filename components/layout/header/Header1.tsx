"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../MobileMenu";
import { HeaderProps, NavigationItem } from "@/types";
import { SITE_CONFIG, BUSINESS_HOURS, SOCIAL_LINKS, NAVIGATION_ITEMS } from "@/constants";
import { formatBusinessHours } from "@/utils/formatting";
import { ServiceItem } from "@/lib/api";

export default function Header1({
  scroll,
  handleMobileMenu,
  isSidebar,
  handleSidebar
}: HeaderProps) {
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

  const renderNavItem = (item: NavigationItem, index: number) => {
    const isServices = item.href === "/services";
    const hasChildren = item.children && item.children.length > 0;
    const showDropdown = hasChildren || (isServices && services.length > 0);

    return (
      <li key={index} className={showDropdown ? "dropdown" : ""}>
        <Link href={item.href}>{item.name}</Link>
        {showDropdown && (
          <ul>
            {isServices && services.length > 0 && (
              <>
                {services.map((svc) => (
                  <li key={svc.id}>
                    <Link href={`/services/${svc.slug}`}>{svc.wehoware_service_categories?.name || svc.title}</Link>
                  </li>
                ))}
              </>
            )}
            {hasChildren && !isServices && item.children?.map((child: NavigationItem, childIndex: number) => (
              <li key={childIndex}>
                <Link href={child.href}>{child.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      {/* main header */}
      <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
        <div className="header-top d-none d-md-block">
          <div className="outer-container">
            <div className="top-inner">
              <ul className="info-list clearfix">
                <li>
                  <i className="icon-46"></i>
                  <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
                </li>
                <li>
                  <i className="icon-2"></i>
                  <Link href="/appointments">Pay your bill</Link>
                </li>
                <li>
                  <i className="icon-3"></i>
                  Open Hours: <span>{formatBusinessHours(BUSINESS_HOURS)}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-lower">
          <div className="outer-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <Image src="/assets/images/header_logo.png" alt="Logo Image" width={203} height={40} priority />
                  </Link>
                </figure>
              </div>
              <div className="menu-area">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>

                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      {NAVIGATION_ITEMS.map(renderNavItem)}
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="menu-right-content">
                <div className="support-box">
                  <div className="icon-box">
                    <Image src="/assets/images/icons/icon-1.svg" alt="Icon Image" width={25} height={25} priority />
                  </div>
                  <span>Emergency Call</span>
                  <h6>
                    <a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</a>
                  </h6>
                </div>
                <div className="btn-box">
                  <Link href="/appointments" className="theme-btn btn-one">
                    <span>Appointment</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* sticky header */}
        <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
          <div className="outer-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <Image src="/assets/images/header_logo.png" alt="Logo Image" width={203} height={40} priority />
                  </Link>
                </figure>
              </div>
              <div className="menu-area">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>

                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li className="current">
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li className={services.length > 0 ? "dropdown" : ""}>
                        <Link href="/services">Our Services</Link>
                        {services.length > 0 && (
                          <ul>
                            {services.map((svc) => (
                              <li key={svc.id}>
                                <Link href={`/services/${svc.slug}`}>{svc.wehoware_service_categories?.name || svc.title}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                      <li>
                        <Link href="/contact-us">Contact Us</Link>
                      </li>
                      <li><Link href="/blog">Blog</Link></li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="menu-right-content">
                <div className="support-box">
                  <div className="icon-box">
                    <Image src="/assets/images/icons/icon-1.svg" alt="Icon Image" width={25} height={25} priority />
                  </div>
                  <span>Emergency Call</span>
                  <h6>
                    <a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</a>
                  </h6>
                </div>
                <div className="btn-box">
                  <Link href="/appointments" className="theme-btn btn-one">
                    <span>Appointment</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Fixed MobileMenu props */}
        <MobileMenu
          isSidebar={isSidebar || false}
          handleMobileMenu={handleMobileMenu}
          handleSidebar={handleSidebar || (() => { })}
        />
      </header>
    </>
  );
}
