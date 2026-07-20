"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE_CONFIG } from "@/constants";
import styles from "./Contact3D.module.css";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      // ===== Liquid blob: morphing background shape =====
      if (blobRef.current) {
        const blob = blobRef.current;
        gsap.to(blob, {
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(blob, {
          rotation: 360,
          duration: 40,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });

        // Blob scales in on scroll
        gsap.set(blob, { scale: 0, opacity: 0 });
        gsap.to(blob,
          {
            scale: 1, opacity: 0.06, duration: 2, ease: "power3.out",
            scrollTrigger: {
              trigger: section, start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // ===== Heading: split chars with random scatter =====
      const h2 = section.querySelector(`.${styles.heading} h2`);
      if (h2) {
        const text = h2.textContent || "";
        h2.innerHTML = text
          .split("")
          .map((c) =>
            c === " "
              ? "&nbsp;"
              : `<span class="${styles.hChar}" style="display:inline-block">${c}</span>`
          )
          .join("");
        const chars = h2.querySelectorAll(`.${styles.hChar}`);

        chars.forEach((char) => {
          const randomX = (Math.random() - 0.5) * 200;
          const randomY = (Math.random() - 0.5) * 100;
          const randomRot = (Math.random() - 0.5) * 180;
          gsap.set(char, { x: randomX, y: randomY, rotation: randomRot, opacity: 0 });
        });

        gsap.to(chars,
          {
            x: 0, y: 0, rotation: 0, opacity: 1,
            duration: 1, stagger: 0.04, ease: "power4.out",
            scrollTrigger: {
              trigger: section, start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Eyebrow: slide + clip
      const eyebrow = section.querySelector(`.${styles.eyebrow}`);
      if (eyebrow) {
        gsap.set(eyebrow, { clipPath: "inset(0 100% 0 0)", opacity: 0 });
        gsap.to(eyebrow,
          {
            clipPath: "inset(0% 0% 0% 0%)", opacity: 1,
            duration: 0.8, ease: "power3.out",
            scrollTrigger: {
              trigger: section, start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // ===== Form fields: expand from a horizontal line =====
      const fields = formRef.current?.querySelectorAll(`.${styles.field}`);
      if (fields && fields.length > 0) {
        fields.forEach((field, i) => {
          gsap.set(field, { scaleY: 0, transformOrigin: "bottom center", opacity: 0 });
          gsap.to(field,
            {
              scaleY: 1, opacity: 1,
              duration: 0.8, ease: "power3.out",
              delay: i * 0.12,
              scrollTrigger: {
                trigger: formRef.current, start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }

      // ===== Submit button: magnetic + particle burst on hover =====
      const submitBtn = formRef.current?.querySelector(`.${styles.submitBtn}`);
      if (submitBtn) {
        gsap.set(submitBtn, { y: 30, opacity: 0 });
        gsap.to(submitBtn,
          {
            y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
            delay: 0.6,
            scrollTrigger: {
              trigger: formRef.current, start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Magnetic pull on mouse
        const btnEl = submitBtn as HTMLElement;
        const handleBtnMove = (e: MouseEvent) => {
          const rect = btnEl.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btnEl, {
            x: x * 0.3, y: y * 0.3,
            duration: 0.4, ease: "power2.out",
          });
        };
        const handleBtnLeave = () => {
          gsap.to(btnEl, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
        };
        btnEl.addEventListener("mousemove", handleBtnMove);
        btnEl.addEventListener("mouseleave", handleBtnLeave);
      }

      // ===== Contact info cards: 3D flip reveal =====
      const infoCards = section.querySelectorAll(`.${styles.infoCard}, .${styles.mapCard}`);
      infoCards.forEach((card, i) => {
        gsap.set(card, { rotationY: 180, opacity: 0, transformOrigin: "center center" });
        gsap.to(card,
          {
            rotationY: 0, opacity: 1,
            duration: 1, ease: "power3.out",
            delay: i * 0.15,
            scrollTrigger: {
              trigger: card, start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Magnetic tilt on info cards
        const cardEl = card as HTMLElement;
        const handleCardMove = (e: MouseEvent) => {
          const rect = cardEl.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(cardEl, {
            rotationY: (x / rect.width) * 15,
            rotationX: -(y / rect.height) * 15,
            transformPerspective: 600,
            duration: 0.3, ease: "power2.out",
          });
        };
        const handleCardLeave = () => {
          gsap.to(cardEl, {
            rotationY: 0, rotationX: 0,
            duration: 0.6, ease: "power3.out",
          });
        };
        cardEl.addEventListener("mousemove", handleCardMove);
        cardEl.addEventListener("mouseleave", handleCardLeave);
      });

      // ===== Decorative lines: draw from left =====
      const decoLines = section.querySelectorAll(`.${styles.decoLine}`);
      decoLines.forEach((line, i) => {
        gsap.set(line, { scaleX: 0 });
        gsap.to(line,
          {
            scaleX: 1, duration: 1.5, ease: "power2.inOut",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: section, start: "top 75%",
              toggleActions: "play none none reverse",
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
      {/* Liquid morphing blob */}
      <div className={styles.blob} ref={blobRef} />

      {/* Decorative lines */}
      <div className={styles.decoLines}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={styles.decoLine}
            style={{ top: `${15 + i * 12}%` }}
          />
        ))}
      </div>

      <div className="auto-container">
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Get In Touch</span>
          <h2>Let's Start Your Journey</h2>
        </div>

        <div className={styles.layout}>
          {/* Left: Contact info cards */}
          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <div className={styles.infoCardInner}>
                <div className={styles.infoIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3>Visit Us</h3>
                <p>2555 Eglinton Ave. E<br />Scarborough, Ontario<br />Canada, M1K 5J1</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoCardInner}>
                <div className={styles.infoIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Email Us</h3>
                <p><Link href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</Link></p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoCardInner}>
                <div className={styles.infoIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Call Us</h3>
                <p><Link href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</Link></p>
              </div>
            </div>

            {/* Map card */}
            <div className={styles.mapCard}>
              <div className={styles.mapCardInner}>
                <div className={styles.mapHeader}>
                  <div className={styles.infoIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="8" y1="2" x2="8" y2="18" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="16" y1="6" x2="16" y2="22" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3>Find Us</h3>
                </div>
                <div className={styles.mapEmbed}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.123!2d-79.2646!3d43.7272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQzJzM3LjkiTiA3OcKwMTUnNTIuNSJX!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Midland Wellness Centre Location"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={styles.formCol}>
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
                <div className={styles.fieldLine} />
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                  <div className={styles.fieldLine} />
                </div>

                <div className={styles.field}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 416-000-0000"
                    disabled={isSubmitting}
                  />
                  <div className={styles.fieldLine} />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  disabled={isSubmitting}
                />
                <div className={styles.fieldLine} />
              </div>

              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                <span className={styles.btnText}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <span className={styles.btnGlow} />
              </button>

              {status === "success" && (
                <div className={styles.statusSuccess}>
                  Thank you! We'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className={styles.statusError}>
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
