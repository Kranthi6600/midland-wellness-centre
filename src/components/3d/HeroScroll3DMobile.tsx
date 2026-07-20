"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HeroScroll3DMobile.module.css";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 62;
const FRAME_STEP = 3; // every 3rd frame → 21 frames loaded
const FRAMES_DIR = "/assets/images/3d/clinic-frames";

const MOBILE_FRAMES: number[] = [];
for (let i = 0; i < TOTAL_FRAMES; i += FRAME_STEP) {
  MOBILE_FRAMES.push(i);
}

function framePath(frameIndex: number): string {
  const padded = String(frameIndex + 1).padStart(2, "0");
  return `${FRAMES_DIR}/${padded}.png`;
}

export default function HeroScroll3DMobile() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);

  // Preload reduced frame set
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    let count = 0;

    MOBILE_FRAMES.forEach((frameIdx) => {
      const img = new Image();
      img.src = framePath(frameIdx);
      img.onload = () => {
        count++;
        setLoaded(count);
        if (count === MOBILE_FRAMES.length) setAllLoaded(true);
      };
      img.onerror = () => {
        count++;
        setLoaded(count);
        if (count === MOBILE_FRAMES.length) setAllLoaded(true);
      };
      imgs.push(img);
    });
    imagesRef.current = imgs;

    return () => {
      imgs.forEach((im) => { im.onload = null; im.onerror = null; });
    };
  }, []);

  const drawFrame = (progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const frameIdx = Math.min(
      Math.floor(progress * MOBILE_FRAMES.length),
      MOBILE_FRAMES.length - 1
    );
    const img = imagesRef.current[frameIdx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";

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

  useEffect(() => {
    if (!allLoaded) return;
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    drawFrame(0);

    const ctx = gsap.context(() => {
      gsap.to(
        { p: 0 },
        {
          p: 1,
          ease: "none",
          scrollTrigger: {
            id: "heroMobileScroll",
            trigger: section,
            start: "top top",
            end: "+=150%",
            scrub: 1,
            pin: sticky,
            anticipatePin: 1,
            onUpdate: (self: ScrollTrigger) => {
              drawFrame(self.progress);
              const fill = section.querySelector("#hero-mobile-progress");
              if (fill) {
                (fill as HTMLElement).style.width = `${self.progress * 100}%`;
              }
            },
          },
        }
      );

      // Text timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=150%",
          scrub: 1,
        },
      });

      const panel1 = section.querySelector(`.${styles.textPanel1}`);
      if (panel1) {
        tl.fromTo(panel1,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.15 }, 0
        );
        tl.to(panel1,
          { opacity: 0, y: -30, duration: 0.1 }, 0.35
        );
      }

      const panel2 = section.querySelector(`.${styles.textPanel2}`);
      if (panel2) {
        tl.fromTo(panel2,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.15 }, 0.45
        );
        tl.to(panel2,
          { opacity: 0, y: -30, duration: 0.1 }, 0.7
        );
      }

      const panel3 = section.querySelector(`.${styles.textPanel3}`);
      if (panel3) {
        tl.fromTo(panel3,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.15 }, 0.75
        );
        tl.to(panel3,
          { opacity: 0, y: -30, duration: 0.1 }, 0.95
        );
      }

      const indicator = section.querySelector(`.${styles.scrollIndicator}`);
      if (indicator) {
        tl.to(indicator, { opacity: 0, duration: 0.05 }, 0.02);
      }

      const vignette = section.querySelector(`.${styles.vignette}`);
      if (vignette) {
        tl.fromTo(vignette,
          { opacity: 0.3 },
          { opacity: 0.55, duration: 1, ease: "none" }, 0
        );
      }
    }, sectionRef);

    const handleResize = () => {
      const st = ScrollTrigger.getById("heroMobileScroll");
      drawFrame(st ? st.progress : 0);
    };
    window.addEventListener("resize", handleResize);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [allLoaded]);

  const progress = Math.round((loaded / MOBILE_FRAMES.length) * 100);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.stickyWrap} ref={stickyRef}>
        <canvas ref={canvasRef} className={styles.canvas} />

        <div className={styles.vignette} />

        {!allLoaded && (
          <div className={styles.loadingOverlay}>
            <div className={styles.loadingBar}>
              <div
                className={styles.loadingBarFill}
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className={styles.loadingText}>{progress}%</span>
          </div>
        )}

        <div className={styles.contentLayer}>
          <div className={`${styles.textPanel} ${styles.textPanel1}`}>
            <span className={styles.eyebrow}>Welcome to</span>
            <h1 className={styles.title}>
              Midland Wellness<br />
              <em>Centre</em>
            </h1>
            <p className={styles.subtitle}>
              Where healing meets innovation.
            </p>
          </div>

          <div className={`${styles.textPanel} ${styles.textPanel2}`}>
            <span className={styles.eyebrow}>30+ Years</span>
            <h2 className={styles.title}>
              Trusted Care in<br />
              <em>Scarborough</em>
            </h2>
            <p className={styles.subtitle}>
              Physiotherapy, chiropractic & more.
            </p>
          </div>

          <div className={`${styles.textPanel} ${styles.textPanel3}`}>
            <span className={styles.eyebrow}>Your Journey</span>
            <h2 className={styles.title}>
              Begins With a<br />
              <em>Single Step</em>
            </h2>
            <p className={styles.subtitle}>
              Book your appointment today.
            </p>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>

        <div className={styles.progressTrack}>
          <div className={styles.progressFill} id="hero-mobile-progress" />
        </div>
      </div>
    </section>
  );
}
