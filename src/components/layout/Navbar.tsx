"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiPhone, FiChevronDown, FiX } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { SITE_CONFIG, NAVIGATION_ITEMS } from "@/constants";
import { ServiceItem } from "@/lib/api";
import type { NavigationItem } from "@/types";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(y / docHeight, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    fetch("/api/proxy-services")
      .then((res) => res.json())
      .then((res) => setServices(res.data || []))
      .catch(() => setServices([]));
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const handleDropdownEnter = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(key);
  };

  const handleDropdownLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const toggleMobileExpanded = (href: string) => {
    setMobileExpanded(mobileExpanded === href ? null : href);
  };

  const getDropdownItems = (item: NavigationItem) => {
    if (item.href === "/services" && services.length > 0) {
      return services.map((svc) => ({
        name: svc.wehoware_service_categories?.name || svc.title,
        href: `/services/${svc.slug}`,
      }));
    }
    return item.children || [];
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top contact bar — collapses on scroll */}
      <div className={`${styles.topBar} ${scrolled ? styles.topBarHidden : ""}`}>
        <div className={styles.topBarInner}>
          <div className={styles.topBarLeft}>
            <span className={styles.topBarItem}>
              <FiPhone size={12} />
              <a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</a>
            </span>
            <span className={styles.topBarDivider} />
            <span className={styles.topBarItem}>{SITE_CONFIG.address}</span>
          </div>
          <div className={styles.topBarRight}>
            <span className={styles.topBarHours}>Mon–Sat: 9AM–7PM</span>
          </div>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className={styles.scrollProgressTrack}>
        <div
          className={styles.scrollProgressFill}
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <header
        className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
      >
        {/* Brand */}
        <Link href="/" className={styles.brand} aria-label="Midland Wellness Centre home">
          <Image
            src="/assets/images/header_logo.png"
            alt="Midland Wellness Centre"
            width={scrolled ? 64 : 90}
            height={scrolled ? 42 : 60}
            className={`${styles.brandLogo} ${scrolled ? styles.brandLogoScrolled : ""}`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav>
          <ul className={styles.nav}>
            {NAVIGATION_ITEMS.map((item) => {
              const dropdownItems = getDropdownItems(item);
              const hasDropdown = dropdownItems.length > 0;
              const dropdownKey = item.href;
              const isDropdownOpen = openDropdown === dropdownKey;

              return (
                <li
                  key={item.href}
                  className={styles.navItem}
                  onMouseEnter={() => hasDropdown && handleDropdownEnter(dropdownKey)}
                  onMouseLeave={() => hasDropdown && handleDropdownLeave()}
                >
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ""}`}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.name}
                    {hasDropdown && (
                      <FiChevronDown
                        className={`${styles.chevron} ${isDropdownOpen ? styles.chevronOpen : ""}`}
                      />
                    )}
                  </Link>

                  {hasDropdown && (
                    <div
                      className={`${styles.dropdown} ${isDropdownOpen ? styles.dropdownOpen : ""}`}
                    >
                      {dropdownItems.map((child, i) => (
                        <Link
                          key={i}
                          href={child.href}
                          className={styles.dropdownLink}
                          onClick={() => setOpenDropdown(null)}
                        >
                          <span className={styles.dropdownIcon}>
                            <FiChevronDown style={{ transform: "rotate(-90deg)" }} />
                          </span>
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <a href={`tel:${SITE_CONFIG.phone}`} className={styles.phoneLink}>
            <FiPhone className={styles.phoneIcon} />
            {SITE_CONFIG.phone}
          </a>
          <Link href="/appointments" className={styles.ctaButton}>
            <FiCalendar size={14} />
            <span>Book Now</span>
          </Link>
          <button
            className={`${styles.hamburger} ${drawerOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle menu"
            aria-expanded={drawerOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`${styles.overlay} ${drawerOpen ? styles.overlayVisible : ""}`}
        onClick={() => setDrawerOpen(false)}
      />
      <aside
        className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}
        aria-hidden={!drawerOpen}
      >
        <div className={styles.drawerHeader}>
          <Image
            src="/assets/images/header_logo.png"
            alt="Midland Wellness Centre"
            width={48}
            height={48}
            priority
          />
          <button
            className={styles.drawerClose}
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>

        <ul className={styles.drawerNav}>
          {NAVIGATION_ITEMS.map((item, idx) => {
            const dropdownItems = getDropdownItems(item);
            const hasDropdown = dropdownItems.length > 0;
            const isExpanded = mobileExpanded === item.href;

            return (
              <li
                key={item.href}
                className={styles.drawerNavItem}
                style={{
                  animationDelay: drawerOpen ? `${0.08 + idx * 0.05}s` : "0s",
                }}
              >
                <div
                  className={styles.drawerNavLink}
                  onClick={() => hasDropdown ? toggleMobileExpanded(item.href) : undefined}
                >
                  {hasDropdown ? (
                    <span>{item.name}</span>
                  ) : (
                    <Link href={item.href} style={{ textDecoration: "none", color: "inherit", flex: 1 }}>
                      {item.name}
                    </Link>
                  )}
                  {hasDropdown && (
                    <FiChevronDown
                      style={{
                        transform: isExpanded ? "rotate(180deg)" : "none",
                        transition: "transform 0.25s ease",
                        opacity: 0.5,
                      }}
                    />
                  )}
                </div>
                {hasDropdown && isExpanded && (
                  <ul className={styles.drawerSubLinks}>
                    {dropdownItems.map((child, i) => (
                      <li key={i} className={styles.drawerSubLink}>
                        <Link href={child.href}>{child.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        <div className={styles.drawerFooter}>
          <a href={`tel:${SITE_CONFIG.phone}`} className={styles.drawerPhone}>
            <FiPhone />
            {SITE_CONFIG.phone}
          </a>
          <Link href="/appointments" className={styles.drawerCta}>
            <FiCalendar size={16} />
            Book Appointment
          </Link>
        </div>
      </aside>
    </>
  );
}
