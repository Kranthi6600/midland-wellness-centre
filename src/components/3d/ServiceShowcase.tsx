"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ServiceItem } from "@/lib/api";
import styles from "./ServiceShowcase.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceShowcase() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    fetch("/api/proxy-services")
      .then((res) => res.json())
      .then((res) => {
        setServices(res.data || []);
        setLoading(false);
      })
      .catch(() => {
        setServices([]);
        setLoading(false);
      });
  }, []);

  const handleKeydown = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, services.length - 1));
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
  }, [services.length]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    list.addEventListener("keydown", handleKeydown);
    return () => list.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  // GSAP animated decorative shapes
  useEffect(() => {
    if (!shapesRef.current || loading) return;
    const shapes = shapesRef.current.children;
    const ctx = gsap.context(() => {
      // Floating animation for each shape
      gsap.utils.toArray<HTMLElement>(shapes).forEach((shape, i) => {
        gsap.to(shape, {
          y: i % 2 === 0 ? "-=30" : "+=25",
          x: i % 3 === 0 ? "+=15" : "-=10",
          rotation: i % 2 === 0 ? 180 : -180,
          duration: 8 + i * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3,
        });
      });

      // Header reveal — reverses on scroll back
      const header = sectionRef.current?.querySelector(`.${styles.header}`);
      if (header) {
        gsap.fromTo(header,
          { y: 50, opacity: 0, immediateRender: false },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: header,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Service buttons stagger in — reverses on scroll back
      const btns = sectionRef.current?.querySelectorAll(`.${styles.serviceBtn}`);
      if (btns && btns.length > 0) {
        gsap.fromTo(btns,
          { x: -60, opacity: 0, immediateRender: false },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Image panel slides in — reverses on scroll back
      const panel = sectionRef.current?.querySelector(`.${styles.imagePanel}`);
      if (panel) {
        gsap.fromTo(panel,
          { x: 60, opacity: 0, immediateRender: false },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // View all button fades in — reverses on scroll back
      const viewAll = sectionRef.current?.querySelector(`.${styles.viewAllBtn}`);
      if (viewAll) {
        gsap.fromTo(viewAll,
          { y: 20, opacity: 0, immediateRender: false },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: viewAll,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [loading, services.length]);

  if (loading) {
    return (
      <section className={styles.section}>
        <div className="auto-container">
          <div className={styles.header}>
            <span className={styles.eyebrow}>Our Expertise</span>
            <h2>Wellness Services</h2>
            <p>Hover over a service to explore</p>
          </div>
          <div className={styles.showcaseGrid}>
            <div className={styles.serviceList}>
              {[...Array(6)].map((_, i) => (
                <div key={i} className={styles.skeletonBtn} />
              ))}
            </div>
            <div className={styles.skeletonImage} />
          </div>
        </div>
      </section>
    );
  }

  if (services.length === 0) {
    return (
      <section className={styles.section}>
        <div className="auto-container">
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>⚕</div>
            <p>No services available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  const activeService = services[activeIndex];
  const thumbnail = activeService.thumbnail || "/assets/images/service/physiotherapy2.webp";
  const categoryName = activeService.wehoware_service_categories?.name || null;

  const sanitizeDescription = (desc: string | null) => {
    if (!desc) return null;
    return desc
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, " ")
      .trim();
  };

  const description = sanitizeDescription(activeService.description);
  const tags = activeService.tags?.slice(0, 3) || [];

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Animated decorative shapes */}
      <div className={styles.shapesContainer} ref={shapesRef}>
        <div className={`${styles.shape} ${styles.shapeCircle}`} />
        <div className={`${styles.shape} ${styles.shapeSquare}`} />
        <div className={`${styles.shape} ${styles.shapeTriangle}`} />
        <div className={`${styles.shape} ${styles.shapeRing}`} />
        <div className={`${styles.shape} ${styles.shapeDiamond}`} />
        <div className={`${styles.shape} ${styles.shapePlus}`} />
      </div>
      <div className={styles.decorCircle1} />
      <div className={styles.decorCircle2} />
      <div className="auto-container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Our Expertise</span>
          <h2>Wellness Services</h2>
          <div className={styles.headerDivider}>
            <span className={styles.headerDividerLine} />
            <span className={styles.headerDividerDot} />
            <span className={styles.headerDividerLine} />
          </div>
        </div>

        <div className={styles.showcaseGrid}>
          {/* Left: service buttons */}
          <div className={styles.serviceList} ref={listRef} tabIndex={0}>
            {services.map((service, index) => {
              const name = service.wehoware_service_categories?.name || service.title;
              const isActive = index === activeIndex;
              return (
                <button
                  key={service.id}
                  className={`${styles.serviceBtn} ${isActive ? styles.serviceBtnActive : ""}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className={styles.serviceIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.serviceBtnText}>{name}</span>
                  <span className={styles.serviceBtnArrow}>
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                      <path d="M0 7H18M18 7L12 1M18 7L12 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              );
            })}
            <Link href="/services" className={styles.viewAllBtn}>
              <span>View All Services</span>
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path d="M0 7H16M16 7L10 1M16 7L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Right: image display */}
          <div className={styles.imagePanel}>
            <div className={styles.imageWrapper}>
              <Image
                key={activeService.id}
                src={thumbnail}
                alt={activeService.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className={styles.serviceImage}
                priority
                unoptimized
              />
              <div className={styles.imageGradient} />
            </div>

            <div className={styles.imageOverlay}>
              {categoryName && (
                <span className={styles.categoryBadge}>{categoryName}</span>
              )}
              <h3>{activeService.title}</h3>
              {description && (
                <p>{description}</p>
              )}
              {tags.length > 0 && (
                <div className={styles.tagRow}>
                  {tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              )}
              <Link
                href={`/services/${activeService.slug}`}
                className={styles.learnMoreBtn}
              >
                <span>Learn More</span>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path d="M0 7H16M16 7L10 1M16 7L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <div className={styles.imageFrame} />

            {/* Progress bar at bottom */}
            <div className={styles.progressBar}>
              <div
                className={styles.progressBarFill}
                style={{ width: `${((activeIndex + 1) / services.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
