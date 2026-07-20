"use client";

import Link from "next/link";
import { FiCalendar, FiPhone, FiArrowRight } from "react-icons/fi";
import styles from "./MobileHero.module.css";

export default function MobileHero() {
  return (
    <section className={styles.section}>
      <div className={styles.bgGradient} />
      <div className={styles.gridPattern} />

      <div className={styles.content}>
        <span className={styles.eyebrow}>Welcome to</span>
        <h1 className={styles.title}>
          Midland Wellness<br />
          <em>Centre</em>
        </h1>
        <p className={styles.subtitle}>
          Your trusted physiotherapy and wellness clinic in Scarborough.
          30+ years of compassionate care.
        </p>

        <div className={styles.actions}>
          <Link href="/appointments" className={styles.ctaPrimary}>
            <FiCalendar size={16} />
            <span>Book Now</span>
          </Link>
          <a href="tel:+14162617246" className={styles.ctaSecondary}>
            <FiPhone size={16} />
            <span>Call Us</span>
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>30+</span>
            <span className={styles.statLabel}>Years</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>10k+</span>
            <span className={styles.statLabel}>Patients</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>5</span>
            <span className={styles.statLabel}>Services</span>
          </div>
        </div>

        <Link href="#services" className={styles.scrollLink}>
          <span>Explore Services</span>
          <FiArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
