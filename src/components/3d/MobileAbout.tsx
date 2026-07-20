"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./MobileAbout.module.css";

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
  {
    icon: "heart",
    title: "Compassion",
    text: "Care that listens, heals, and empowers every patient.",
  },
  {
    icon: "spark",
    title: "Expertise",
    text: "30+ years of specialized clinical excellence you can trust.",
  },
  {
    icon: "leaf",
    title: "Wellness",
    text: "Holistic treatments for body, mind, and spirit.",
  },
];

const STATS = [
  { number: "30", plus: "+", label: "Years" },
  { number: "15", plus: "k+", label: "Patients" },
  { number: "100", plus: "%", label: "Dedicated" },
];

export default function MobileAbout() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const eyebrow = section.querySelector(`.${styles.eyebrow}`);
      if (eyebrow) {
        gsap.fromTo(eyebrow,
          { y: -20, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.5, ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 85%", toggleActions: "play none none reverse" },
          }
        );
      }

      const title = section.querySelector(`.${styles.title}`);
      if (title) {
        gsap.fromTo(title,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.1,
            scrollTrigger: { trigger: section, start: "top 85%", toggleActions: "play none none reverse" },
          }
        );
      }

      const cards = section.querySelectorAll(`.${styles.card}`);
      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.2 + i * 0.12,
            scrollTrigger: { trigger: section, start: "top 80%", toggleActions: "play none none reverse" },
          }
        );
      });

      const statEls = section.querySelectorAll<HTMLElement>(`.${styles.statNumber}`);
      statEls.forEach((stat, i) => {
        const target = parseInt(stat.dataset.value || "0");
        const counter = { val: 0 };
        gsap.fromTo(
          counter,
          { val: 0 },
          {
            val: target,
            duration: 1.2,
            ease: "power1.out",
            delay: 0.3 + i * 0.15,
            snap: { val: 1 },
            onUpdate: () => { stat.textContent = String(Math.round(counter.val)); },
            scrollTrigger: {
              trigger: section.querySelector(`.${styles.statsRow}`),
              start: "top 85%",
              toggleActions: "play none none reverse",
              onLeaveBack: () => { stat.textContent = "0"; },
            },
          }
        );
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.bgGradient} />

      <div className={styles.container}>
        <span className={styles.eyebrow}>About Us</span>
        <h2 className={styles.title}>
          Your Wellness,<br />
          <em>Our Mission</em>
        </h2>

        <div className={styles.cards}>
          {VALUES.map((v, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.cardIcon}>
                {v.icon === "heart" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {v.icon === "spark" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L9 9l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {v.icon === "leaf" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M11 20A7 7 0 0 1 4 13c0-4 3-7 7-7s7 3 7 7c0 4-3 7-7 7zM11 20V8M11 14l4-4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className={styles.cardContent}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.statsRow}>
          {STATS.map((s, i) => (
            <div key={i} className={styles.stat}>
              <div className={styles.statValue}>
                <span className={styles.statNumber} data-value={s.number}>0</span>
                <span className={styles.statPlus}>{s.plus}</span>
              </div>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
