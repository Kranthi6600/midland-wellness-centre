"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About3D.module.css";

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
  { icon: "heart", title: "Compassion", text: "Care that listens, heals, and empowers." },
  { icon: "spark", title: "Expertise", text: "30+ years of specialized clinical excellence." },
  { icon: "leaf", title: "Wellness", text: "Holistic treatments for body, mind, and spirit." },
];

export default function About3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const dotGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scene = sceneRef.current;
    const cards = cardsRef.current;
    if (!section || !scene || !cards) return;

    const ctx = gsap.context(() => {
      const triggerStart = "top 95%";

      // ===== Heading: letters drop from above with bounce =====
      const h2 = section.querySelector(`.${styles.heading} h2`);
      if (h2) {
        const text = h2.textContent || "";
        h2.innerHTML = text
          .split("")
          .map((c) => c === " " ? "&nbsp;" : `<span class="${styles.hChar}" style="display:inline-block">${c}</span>`)
          .join("");
        const chars = h2.querySelectorAll(`.${styles.hChar}`);
        gsap.set(chars, { y: -120, opacity: 0, rotationX: -90 });
        gsap.to(chars,
          {
            y: 0, opacity: 1, rotationX: 0,
            duration: 0.8, stagger: 0.04, ease: "bounce.out",
            scrollTrigger: {
              trigger: section, start: triggerStart,
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Heading glow: pulse in after letters land
      const headingEl = section.querySelector(`.${styles.heading}`);
      if (headingEl) {
        gsap.set(headingEl, { filter: "brightness(1.5)" });
        gsap.to(headingEl,
          {
            filter: "brightness(1)", duration: 1.5, ease: "power2.out", delay: 0.5,
            scrollTrigger: {
              trigger: section, start: triggerStart,
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Eyebrow: slide down from top
      const eyebrow = section.querySelector(`.${styles.eyebrow}`);
      if (eyebrow) {
        gsap.set(eyebrow, { y: -60, opacity: 0 });
        gsap.to(eyebrow,
          {
            y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: section, start: triggerStart,
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Divider: width expand from center
      const divider = section.querySelector(`.${styles.divider}`);
      if (divider) {
        gsap.set(divider, { scaleX: 0, opacity: 0 });
        gsap.to(divider,
          {
            scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.2,
            scrollTrigger: {
              trigger: section, start: triggerStart,
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // ===== Dot grid: ripple outward from center =====
      const dots = dotGridRef.current?.querySelectorAll(`.${styles.dot}`);
      if (dots && dots.length > 0) {
        dots.forEach((dot) => {
          const dotEl = dot as HTMLElement;
          const row = parseInt(dotEl.dataset.row || "0");
          const col = parseInt(dotEl.dataset.col || "0");
          const centerRow = 2;
          const centerCol = 5;
          const dist = Math.sqrt((row - centerRow) ** 2 + (col - centerCol) ** 2);
          gsap.set(dot, { scale: 0, opacity: 0 });
          gsap.to(dot,
            {
              scale: 1, opacity: 0.12, duration: 0.4, ease: "power2.out",
              delay: dist * 0.06,
              scrollTrigger: {
                trigger: section, start: triggerStart,
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }

      // ===== Cards: fan/deal from center =====
      const cardEls = cards.querySelectorAll(`.${styles.card}`);
      const cardPositions = [
        { x: -80, rot: -3 },
        { x: 0, rot: 0 },
        { x: 80, rot: 3 },
      ];

      cardEls.forEach((card, i) => {
        const pos = cardPositions[i] || cardPositions[0];
        // Set initial hidden state immediately
        gsap.set(card, {
          x: 0, y: 60, rotation: 0, rotationY: 180, scale: 0.6, opacity: 0,
          transformOrigin: "center bottom",
        });
        // Fan out with 3D flip
        gsap.to(card,
          {
            x: pos.x, y: 0, rotation: pos.rot, rotationY: 0, scale: 1, opacity: 1,
            duration: 1, ease: "power3.out",
            delay: i * 0.15,
            scrollTrigger: {
              trigger: cards, start: "top 95%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Card content: pop in after card lands
        const contentEls = card.querySelectorAll(`.${styles.cardInner} > *`);
        if (contentEls.length > 0) {
          gsap.set(contentEls, { scale: 0.5, opacity: 0 });
          gsap.to(contentEls,
            {
              scale: 1, opacity: 1, duration: 0.5, stagger: 0.08, ease: "back.out(1.7)",
              delay: 0.5 + i * 0.15,
              scrollTrigger: {
                trigger: cards, start: "top 95%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Card border light sweep on hover
        const cardEl = card as HTMLElement;
        const glow = cardEl.querySelector(`.${styles.cardGlow}`);
        const handleCardEnter = () => {
          if (glow) gsap.to(glow, { opacity: 1, duration: 0.4, ease: "power2.out" });
          gsap.to(cardEl.querySelector(`.${styles.cardIcon}`), {
            scale: 1.12, rotate: 360, duration: 0.6, ease: "back.out(1.7)",
          });
        };
        const handleCardLeave = () => {
          if (glow) gsap.to(glow, { opacity: 0, duration: 0.4, ease: "power2.out" });
          gsap.to(cardEl.querySelector(`.${styles.cardIcon}`), {
            scale: 1, rotate: 0, duration: 0.5, ease: "power2.out",
          });
        };
        cardEl.addEventListener("mouseenter", handleCardEnter);
        cardEl.addEventListener("mouseleave", handleCardLeave);
      });

      // ===== Stats: punch through from behind mask =====
      const statsRow = section.querySelector(`.${styles.statsRow}`);
      if (statsRow) {
        gsap.set(statsRow, { scaleY: 0, transformOrigin: "center center", opacity: 0 });
        gsap.to(statsRow,
          {
            scaleY: 1, opacity: 1, duration: 0.8, ease: "power3.out",
            scrollTrigger: {
              trigger: statsRow, start: "top 95%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Stats background panel: glass slide in
      const statsBg = section.querySelector(`.${styles.statsBg}`);
      if (statsBg) {
        gsap.set(statsBg, { x: -100, opacity: 0 });
        gsap.to(statsBg,
          {
            x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2,
            scrollTrigger: {
              trigger: statsRow, start: "top 95%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const stats = section.querySelectorAll<HTMLElement>(`.${styles.statNumber}`);
      stats.forEach((stat, i) => {
        const target = parseInt(stat.dataset.value || "0");

        // Visual: slide up + fade in + scale
        gsap.set(stat, { y: 40, opacity: 0, scale: 0.5 });
        gsap.to(stat,
          {
            y: 0, opacity: 1, scale: 1,
            duration: 0.8, ease: "back.out(1.7)",
            delay: 0.3 + i * 0.1,
            scrollTrigger: {
              trigger: statsRow, start: "top 95%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Counter: separate tween for textContent
        const counter = { val: 0 };
        gsap.fromTo(
          counter,
          { val: 0 },
          {
            val: target,
            duration: 1.5, ease: "power1.out",
            delay: 0.4 + i * 0.1,
            snap: { val: 1 },
            onUpdate: () => { stat.textContent = String(Math.round(counter.val)); },
            scrollTrigger: {
              trigger: statsRow, start: "top 95%",
              toggleActions: "play none none reverse",
              onLeaveBack: () => { stat.textContent = "0"; },
            },
          }
        );
      });

      // Stat labels: slide in from sides
      const statLabels = section.querySelectorAll(`.${styles.statLabel}`);
      statLabels.forEach((label, i) => {
        gsap.set(label, { x: i % 2 === 0 ? -30 : 30, opacity: 0 });
        gsap.to(label,
          {
            x: 0, opacity: 1, duration: 0.6, ease: "power2.out",
            delay: 0.5 + i * 0.1,
            scrollTrigger: {
              trigger: statsRow, start: "top 95%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Stat plus signs: rotate in
      const statPluses = section.querySelectorAll(`.${styles.statPlus}`);
      statPluses.forEach((plus, i) => {
        gsap.set(plus, { rotation: -180, scale: 0, opacity: 0 });
        gsap.to(plus,
          {
            rotation: 0, scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)",
            delay: 0.6 + i * 0.1,
            scrollTrigger: {
              trigger: statsRow, start: "top 95%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Stat dividers: draw in
      const dividers = section.querySelectorAll(`.${styles.statDivider}`);
      dividers.forEach((div, i) => {
        gsap.set(div, { scaleY: 0 });
        gsap.to(div,
          {
            scaleY: 1, duration: 0.5, ease: "power2.out", delay: 0.4 + i * 0.1,
            scrollTrigger: {
              trigger: statsRow, start: "top 95%",
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
      <div className={styles.bgGradient} />

      {/* Dot grid background */}
      <div className={styles.dotGrid} ref={dotGridRef}>
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 11 }).map((_, col) => (
            <div
              key={`${row}-${col}`}
              className={styles.dot}
              data-row={row}
              data-col={col}
              style={{
                top: `${row * 25}%`,
                left: `${col * 9}%`,
              }}
            />
          ))
        )}
      </div>

      <div className={styles.shapesBg}>
        <div className={`${styles.floatingShape} ${styles.shape1}`} />
        <div className={`${styles.floatingShape} ${styles.shape2}`} />
        <div className={`${styles.floatingShape} ${styles.shape3}`} />
      </div>

      <div className="auto-container">
        <div className={styles.heading}>
          <span className={styles.eyebrow}>About Us</span>
          <h2>Your Wellness, Our <em>Mission</em></h2>
          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerDot} />
            <span className={styles.dividerLine} />
          </div>
        </div>

        <div className={styles.sceneWrapper}>
          <div className={styles.scene} ref={sceneRef} style={{ perspective: "1200px" }}>
            <div className={styles.cardsRow} ref={cardsRef}>
              {VALUES.map((v, i) => (
                <div
                  key={i}
                  className={styles.card}
                >
                  <div className={styles.cardInner}>
                    <div className={styles.cardIcon}>
                      {v.icon === "heart" && (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {v.icon === "spark" && (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 2L9 9l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1z" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {v.icon === "leaf" && (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M11 20A7 7 0 0 1 4 13c0-4 3-7 7-7s7 3 7 7c0 4-3 7-7 7zM11 20V8M11 14l4-4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                  <div className={styles.cardGlow} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.statsWrapper}>
          <div className={styles.statsBg} />
          <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.statNumber} data-value="30">0</span>
            <span className={styles.statPlus}>+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber} data-value="15">0</span>
            <span className={styles.statPlus}>k+</span>
            <span className={styles.statLabel}>Patients Treated</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber} data-value="100">0</span>
            <span className={styles.statPlus}>%</span>
            <span className={styles.statLabel}>Dedicated Care</span>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
