"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { BlogItem } from "@/lib/api";
import styles from "./BlogShowcase.module.css";

gsap.registerPlugin(ScrollTrigger);

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

function truncateWords(text: string, wordLimit: number): string {
  const words = text.trim().split(/\s+/);
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}

function formatDate(date: string | null): string {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*<>/\\";

function scrambleText(el: HTMLElement, finalText: string, duration: number) {
  const chars = finalText.split("");
  let frame = 0;
  const totalFrames = Math.round(duration * 60);

  function update() {
    frame++;
    const progress = frame / totalFrames;
    const resolved = Math.floor(progress * chars.length);

    let out = "";
    for (let i = 0; i < chars.length; i++) {
      if (i < resolved || chars[i] === " ") {
        out += chars[i];
      } else {
        out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }
    }
    el.textContent = out;

    if (frame < totalFrames) {
      requestAnimationFrame(update);
    } else {
      el.textContent = finalText;
    }
  }
  update();
}

export default function BlogShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [posts, setPosts] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/proxy-blogs?limit=6")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.data || []);
        setLoading(false);
      })
      .catch(() => {
        setPosts([]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (loading || !sectionRef.current) return;

    const section = sectionRef.current!;

    const ctx = gsap.context(() => {
      // ===== Heading: text scramble/decode effect =====
      const h2 = section.querySelector(`.${styles.heading} h2`);
      const h2Text = h2?.textContent || "";
      const eyebrow = section.querySelector(`.${styles.eyebrow}`);
      const divider = section.querySelector(`.${styles.divider}`);

      if (eyebrow) {
        gsap.fromTo(eyebrow,
          { scaleX: 0, opacity: 0, immediateRender: false },
          {
            scaleX: 1, opacity: 1, duration: 0.6, ease: "power3.out",
            scrollTrigger: {
              trigger: section, start: "top 80%",
              toggleActions: "play none none reverse",
              onEnter: () => { if (h2) scrambleText(h2 as HTMLElement, h2Text, 1.2); },
              onEnterBack: () => { if (h2) scrambleText(h2 as HTMLElement, h2Text, 0.8); },
            },
          }
        );
      }

      if (divider) {
        gsap.fromTo(divider,
          { scaleX: 0, opacity: 0, immediateRender: false },
          {
            scaleX: 1, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.3,
            scrollTrigger: {
              trigger: section, start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // ===== SVG line texture: path draw animation =====
      const svgPaths = svgRef.current?.querySelectorAll("path");
      if (svgPaths && svgPaths.length > 0) {
        svgPaths.forEach((path) => {
          const len = path.getTotalLength();
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        });

        gsap.fromTo(svgPaths,
          { strokeDashoffset: (i: number) => svgPaths[i].getTotalLength(), immediateRender: false },
          {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.inOut",
            stagger: { each: 0.08, from: "center" },
            scrollTrigger: {
              trigger: svgRef.current!, start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // ===== Background texture lines: wave draw =====
      const lines = lineRef.current?.querySelectorAll(`.${styles.textureLine}`);
      if (lines && lines.length > 0) {
        gsap.fromTo(lines,
          { scaleX: 0, immediateRender: false },
          {
            scaleX: 1, duration: 1.5, ease: "power2.inOut",
            stagger: { each: 0.04, from: "center" },
            scrollTrigger: {
              trigger: lineRef.current!, start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // ===== Cards: innovative multi-layer reveal =====
      const cards = gridRef.current?.querySelectorAll(`.${styles.card}`);
      if (cards && cards.length > 0) {
        cards.forEach((card, i) => {
          // 1. Card shell: peel from corner with clip-path + rotate
          const peelDirs = [
            "inset(0 100% 100% 0)",
            "inset(100% 0 0 100%)",
            "inset(0 0 100% 100%)",
          ];
          const dir = peelDirs[i % peelDirs.length];

          gsap.fromTo(card,
            {
              clipPath: dir,
              filter: "blur(15px)",
              scale: 0.8,
              rotation: i % 2 === 0 ? -5 : 5,
              immediateRender: false,
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              filter: "blur(0px)",
              scale: 1,
              rotation: 0,
              duration: 1.4,
              ease: "power4.out",
              scrollTrigger: {
                trigger: card, start: "top 88%",
                toggleActions: "play none none reverse",
              },
            }
          );

          // 2. Image: parallax scroll inside card
          const img = card.querySelector(`.${styles.cardImg}`) || card.querySelector(`.${styles.cardImagePlaceholder}`);
          if (img) {
            gsap.fromTo(img,
              { y: -30, scale: 1.15, immediateRender: false },
              {
                y: 30, scale: 1.15, ease: "none",
                scrollTrigger: {
                  trigger: card, start: "top bottom", end: "bottom top",
                  scrub: 1,
                },
              }
            );
          }

          // 3. Card title: word-by-word mask reveal
          const h3 = card.querySelector("h3");
          if (h3) {
            const words = (h3.textContent || "").split(" ");
            h3.innerHTML = words
              .map((w) => `<span class="${styles.wordWrap}"><span class="${styles.word}">${w}</span></span>`)
              .join(" ");
            const wordEls = h3.querySelectorAll(`.${styles.word}`);
            gsap.fromTo(wordEls,
              { yPercent: 120, immediateRender: false },
              {
                yPercent: 0, duration: 0.6, stagger: 0.06, ease: "power3.out",
                delay: 0.4,
                scrollTrigger: {
                  trigger: card, start: "top 88%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }

          // 4. Meta + excerpt + link: slide up after title
          const meta = card.querySelector(`.${styles.cardMeta}`);
          const excerpt = card.querySelector(`.${styles.cardBody} p`);
          const link = card.querySelector(`.${styles.cardLink}`);
          const afterEls = [meta, excerpt, link].filter(Boolean);
          if (afterEls.length > 0) {
            gsap.fromTo(afterEls,
              { y: 20, opacity: 0, immediateRender: false },
              {
                y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out",
                delay: 0.6,
                scrollTrigger: {
                  trigger: card, start: "top 88%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }

          // 5. Category badge: drop in from top
          const badge = card.querySelector(`.${styles.cardCategory}`);
          if (badge) {
            gsap.fromTo(badge,
              { y: -40, opacity: 0, immediateRender: false },
              {
                y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)",
                delay: 0.5,
                scrollTrigger: {
                  trigger: card, start: "top 88%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }

          // 6. Magnetic mouse tracking — 3D tilt
          const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rotY = ((x - cx) / cx) * 10;
            const rotX = -((y - cy) / cy) * 10;

            gsap.to(card, {
              rotationY: rotY, rotationX: rotX,
              transformPerspective: 800,
              transformOrigin: "50% 50%",
              duration: 0.4, ease: "power2.out",
            });

            if (img) {
              gsap.to(img, { scale: 1.2, duration: 0.6, ease: "power2.out" });
            }
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              rotationY: 0, rotationX: 0,
              duration: 0.6, ease: "power3.out",
            });
            if (img) {
              gsap.to(img, { scale: 1.15, duration: 0.6, ease: "power2.out" });
            }
          };

          const cardEl = card as HTMLElement;
          cardEl.addEventListener("mousemove", handleMouseMove);
          cardEl.addEventListener("mouseleave", handleMouseLeave);
        });

        // 7. Scroll-velocity blur: cards blur when scrolling fast
        let blurTween: gsap.core.Tween | null = null;
        ScrollTrigger.create({
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const velocity = Math.abs(self.getVelocity());
            const blurAmount = Math.min(velocity / 200, 4);

            if (blurTween) blurTween.kill();
            blurTween = gsap.to(cards, {
              filter: `blur(${blurAmount}px)`,
              duration: 0.3, ease: "power2.out",
              onComplete: () => {
                gsap.to(cards, { filter: "blur(0px)", duration: 0.5, ease: "power2.out" });
              },
            });
          },
        });
      }

      // ===== View all button: clip-path center slit reveal =====
      const viewAll = section.querySelector(`.${styles.viewAllBtn}`);
      if (viewAll) {
        gsap.fromTo(viewAll,
          { clipPath: "inset(0 50% 0 50%)", opacity: 0, immediateRender: false },
          {
            clipPath: "inset(0% 0% 0% 0%)", opacity: 1,
            duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: viewAll, start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [loading, posts.length]);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* SVG decorative line paths */}
      <svg className={styles.svgLines} ref={svgRef} viewBox="0 0 1200 800" preserveAspectRatio="none">
        <path d="M0,100 Q300,50 600,100 T1200,100" stroke="rgba(46,139,87,0.08)" strokeWidth="1" fill="none" />
        <path d="M0,200 Q300,250 600,200 T1200,200" stroke="rgba(46,139,87,0.06)" strokeWidth="1" fill="none" />
        <path d="M0,400 Q300,350 600,400 T1200,400" stroke="rgba(46,139,87,0.08)" strokeWidth="1" fill="none" />
        <path d="M0,600 Q300,650 600,600 T1200,600" stroke="rgba(46,139,87,0.06)" strokeWidth="1" fill="none" />
        <path d="M0,700 Q300,670 600,700 T1200,700" stroke="rgba(46,139,87,0.08)" strokeWidth="1" fill="none" />
      </svg>

      {/* Horizontal lined texture */}
      <div className={styles.lineTexture} ref={lineRef}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={styles.textureLine}
            style={{
              top: `${(i / 12) * 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating accent shapes */}
      <div className={styles.shapesBg}>
        <div className={`${styles.shape} ${styles.shapeCircle}`} />
        <div className={`${styles.shape} ${styles.shapeSquare}`} />
      </div>

      <div className="auto-container">
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Insights & Articles</span>
          <h2>Latest from our Blog</h2>
          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerDot} />
            <span className={styles.dividerLine} />
          </div>
        </div>

        {loading ? (
          <div className={styles.grid} ref={gridRef}>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardImage}>
                  <div className={styles.skeleton} />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.skeletonText} />
                  <div className={styles.skeletonTextShort} />
                  <div className={styles.skeletonText} />
                </div>
              </div>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <p className={styles.empty}>No blog posts available.</p>
        ) : (
          <div className={styles.grid} ref={gridRef}>
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={styles.card}
              >
                <div className={styles.cardImage}>
                  {post.thumbnail ? (
                    <Image
                      src={post.thumbnail}
                      alt={post.thumbnail_alt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.cardImg}
                      unoptimized
                    />
                  ) : (
                    <div className={styles.cardImagePlaceholder}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                    </div>
                  )}
                  <div className={styles.cardImageOverlay} />
                  {post.wehoware_blog_categories && (
                    <span className={styles.cardCategory}>
                      {post.wehoware_blog_categories.name}
                    </span>
                  )}
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    {post.published_at && (
                      <span className={styles.cardDate}>
                        {formatDate(post.published_at)}
                      </span>
                    )}
                    {post.read_time && (
                      <span className={styles.cardReadTime}>
                        {post.read_time} min read
                      </span>
                    )}
                  </div>
                  <h3>{post.title}</h3>
                  {post.excerpt && (
                    <p>{truncateWords(stripHtml(post.excerpt), 15)}</p>
                  )}
                  <span className={styles.cardLink}>
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                {/* Lined texture accent on card hover */}
                <div className={styles.cardLines}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div
                      key={j}
                      className={styles.cardLine}
                      style={{ top: `${20 + j * 15}%` }}
                    />
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className={styles.viewAllWrap}>
          <Link href="/blog" className={styles.viewAllBtn}>
            <span>View All Articles</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
