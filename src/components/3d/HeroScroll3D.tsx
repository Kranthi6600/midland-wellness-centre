"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HeroScroll3D.module.css";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 62;
const FRAMES_DIR = "/assets/images/3d/clinic-frames";

function framePath(index: number): string {
  const padded = String(index + 1).padStart(2, "0");
  return `${FRAMES_DIR}/${padded}.png`;
}

export default function HeroScroll3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);

  // Preload all frames
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = framePath(i);
      img.onload = () => {
        count++;
        setLoaded(count);
        if (count === TOTAL_FRAMES) setAllLoaded(true);
      };
      img.onerror = () => {
        count++;
        setLoaded(count);
        if (count === TOTAL_FRAMES) setAllLoaded(true);
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;

    return () => {
      imgs.forEach((im) => { im.onload = null; im.onerror = null; });
    };
  }, []);

  // Draw a frame on canvas
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[frameIndex];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";

    // Cover fit
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = w / h;
    let drawW: number, drawH: number, dx: number, dy: number;

    if (imgAspect > canvasAspect) {
      drawH = h;
      drawW = h * imgAspect;
      dx = (w - drawW) / 2;
      dy = 0;
    } else {
      drawW = w;
      drawH = w / imgAspect;
      dx = 0;
      dy = (h - drawH) / 2;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, dx, dy, drawW, drawH);
  };

  // Set up GSAP scroll-driven frame sequence
  useEffect(() => {
    if (!allLoaded) return;
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    // Initial draw
    drawFrame(0);

    const ctx = gsap.context(() => {
      // Pin the sticky container and scrub through frames
      gsap.to(
        { frame: 0 },
        {
          frame: TOTAL_FRAMES - 1,
          ease: "none",
          scrollTrigger: {
            id: "heroFrameScroll",
            trigger: section,
            start: "top top",
            end: "+=300%",
            scrub: 1,
            pin: sticky,
            anticipatePin: 1,
            onUpdate: (self: ScrollTrigger) => {
              const f = Math.round(self.progress * (TOTAL_FRAMES - 1));
              drawFrame(f);
              const fill = section.querySelector("#hero-progress-fill");
              if (fill) {
                (fill as HTMLElement).style.width = `${self.progress * 100}%`;
              }
            },
          },
        }
      );

      // Text content reveals at different scroll stages
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=300%",
          scrub: 1,
        },
      });

      // Panel 1: fade in at start
      const panel1 = section.querySelector(`.${styles.textPanel1}`);
      if (panel1) {
        gsap.set(panel1, { xPercent: -50, yPercent: -50 });
        tl.fromTo(panel1,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.15 },
          0
        );
        tl.to(panel1,
          { opacity: 0, y: -40, duration: 0.1 },
          0.3
        );
      }

      // Panel 2: appears in middle
      const panel2 = section.querySelector(`.${styles.textPanel2}`);
      if (panel2) {
        gsap.set(panel2, { xPercent: -50, yPercent: -50 });
        tl.fromTo(panel2,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.15 },
          0.4
        );
        tl.to(panel2,
          { opacity: 0, y: -40, duration: 0.1 },
          0.65
        );
      }

      // Panel 3: appears near end
      const panel3 = section.querySelector(`.${styles.textPanel3}`);
      if (panel3) {
        gsap.set(panel3, { xPercent: -50, yPercent: -50 });
        tl.fromTo(panel3,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.15 },
          0.7
        );
        tl.to(panel3,
          { opacity: 0, y: -40, duration: 0.1 },
          0.92
        );
      }

      // Scroll indicator fades out immediately
      const indicator = section.querySelector(`.${styles.scrollIndicator}`);
      if (indicator) {
        tl.to(indicator, { opacity: 0, duration: 0.05 }, 0.02);
      }

      // Vignette overlay subtle change
      const vignette = section.querySelector(`.${styles.vignette}`);
      if (vignette) {
        tl.fromTo(vignette,
          { opacity: 0.3 },
          { opacity: 0.55, duration: 1, ease: "none" },
          0
        );
      }
    }, sectionRef);

    // Redraw on resize
    const handleResize = () => {
      const st = ScrollTrigger.getById("heroFrameScroll");
      if (st) {
        drawFrame(Math.round(st.progress * (TOTAL_FRAMES - 1)));
      } else {
        drawFrame(0);
      }
    };
    window.addEventListener("resize", handleResize);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [allLoaded]);

  const progress = Math.round((loaded / TOTAL_FRAMES) * 100);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.stickyWrap} ref={stickyRef}>
        {/* Canvas renders the current video frame */}
        <canvas ref={canvasRef} className={styles.canvas} />

        {/* Gradient vignette for text readability */}
        <div className={styles.vignette} />

        {/* Loading overlay */}
        {!allLoaded && (
          <div className={styles.loadingOverlay}>
            <div className={styles.loadingBar}>
              <div
                className={styles.loadingBarFill}
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className={styles.loadingText}>
              Loading experience… {progress}%
            </span>
          </div>
        )}

        {/* Text panels that appear at different scroll stages */}
        <div className={styles.contentLayer}>
          <div className={`${styles.textPanel} ${styles.textPanel1}`}>
            <span className={styles.eyebrow}>Welcome to</span>
            <h1 className={styles.title}>
              Midland Wellness<br />
              <em>Centre</em>
            </h1>
            <p className={styles.subtitle}>
              Where healing meets innovation — step inside our clinic.
            </p>
          </div>

          <div className={`${styles.textPanel} ${styles.textPanel2}`}>
            <span className={styles.eyebrow}>30+ Years</span>
            <h2 className={styles.title}>
              Trusted Care in<br />
              <em>Scarborough</em>
            </h2>
            <p className={styles.subtitle}>
              Physiotherapy, chiropractic, massage therapy & more.
            </p>
          </div>

          <div className={`${styles.textPanel} ${styles.textPanel3}`}>
            <span className={styles.eyebrow}>Your Journey</span>
            <h2 className={styles.title}>
              Begins With a<br />
              <em>Single Step</em>
            </h2>
            <p className={styles.subtitle}>
              Book your appointment and start feeling better today.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <span>Scroll to explore</span>
          <div className={styles.scrollLine} />
        </div>

        {/* Progress bar at bottom */}
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} id="hero-progress-fill" />
        </div>
      </div>
    </section>
  );
}
