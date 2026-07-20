"use client";

import Link from "next/link";
import { SITE_CONFIG, NAVIGATION_ITEMS, SOCIAL_LINKS } from "@/constants";
import styles from "./Footer3D.module.css";

export default function Footer3D() {
  return (
    <footer className={styles.footer}>
      <div className={styles.lineDeco} />

      <div className="auto-container">
        <div className={styles.grid}>
          <div className={styles.col}>
            <h3 className={styles.brandName}>Midland Wellness Centre</h3>
            <p className={styles.brandDesc}>
              Comprehensive physiotherapy, chiropractic care, and wellness services in Scarborough.
            </p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <Link href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</Link>
              </li>
              <li>
                <Link href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</Link>
              </li>
              <li>2555 Eglinton Ave. E, Scarborough, ON</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className={styles.socials}>
            {SOCIAL_LINKS.map((social) => (
              <Link key={social.name} href={social.href} className={styles.socialLink}>
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
