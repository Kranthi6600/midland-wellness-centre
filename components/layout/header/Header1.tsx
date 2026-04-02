"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../MobileMenu";
import { HeaderProps, NavigationItem } from "@/types";
import { SITE_CONFIG, BUSINESS_HOURS, SOCIAL_LINKS, NAVIGATION_ITEMS } from "@/constants";
import { formatBusinessHours } from "@/utils/formatting";

export default function Header1({
  scroll,
  handleMobileMenu,
  isSidebar,
  handleSidebar
}: HeaderProps) {
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
                      {NAVIGATION_ITEMS.map((item: NavigationItem, index: number) => (
                        <li key={index} className={item.children ? "dropdown" : ""}>
                          <Link href={item.href}>{item.name}</Link>
                          {item.children && (
                            <ul>
                              {item.children.map((child: NavigationItem, childIndex: number) => (
                                <li key={childIndex}>
                                  <Link href={child.href}>{child.name}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
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
                      <li className="dropdown">
                        <Link href="/services">Our Services</Link>
                        <ul>
                          <li>
                            <Link href="/physiotherapy">Physiotherapy</Link>
                          </li>
                          <li>
                            <Link href="/chiropractic-adjustments">Chiropractic Adjustments</Link>
                          </li>
                          <li>
                            <Link href="/massage-therapy">Massage Therapy</Link>
                          </li>
                          <li>
                            <Link href="/electrotherapy">Electrotherapy</Link>
                          </li>
                          <li>
                            <Link href="/kinesio-taping">Kinesio Taping</Link>
                          </li>
                          <li>
                            <Link href="/orthotics">Orthotics</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
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
