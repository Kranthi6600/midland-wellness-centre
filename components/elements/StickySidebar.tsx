"use client";

import React, { useRef, useEffect, type ReactNode } from "react";

interface StickySidebarProps {
  mainContent: ReactNode;
  sidebarTop: ReactNode;
  sidebarBottom: ReactNode; // This widget becomes sticky
}

export default function StickySidebar({ mainContent, sidebarTop, sidebarBottom }: StickySidebarProps) {
  const mainRef = useRef<HTMLDivElement>(null);
  const needHelpRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const main = mainRef.current;
    const needHelp = needHelpRef.current;
    const placeholder = placeholderRef.current;
    if (!main || !needHelp || !placeholder) return;

    let pinned = false;
    let rafId: number | null = null;

    const setFixedPos = () => {
      const rect = placeholder.getBoundingClientRect();
      needHelp.style.left = `${rect.left}px`;
      needHelp.style.width = `${rect.width}px`;
    };

    const tick = () => {
      const placeRect = placeholder.getBoundingClientRect();
      const mainRect = main.getBoundingClientRect();
      const offset = 100; // px from viewport top (below header)
      const needHelpHeight = needHelp.offsetHeight;
      const buffer = 50; // hysteresis to prevent flicker

      const shouldRelease = mainRect.bottom <= needHelpHeight + offset + 20;
      const shouldPin = !shouldRelease && placeRect.top <= offset;
      const shouldUnpin = pinned && placeRect.top > offset + buffer;

      if ((shouldUnpin || shouldRelease) && pinned) {
        pinned = false;
        placeholder.style.height = "0px";
        needHelp.style.position = "relative";
        needHelp.style.top = "auto";
        needHelp.style.left = "auto";
        needHelp.style.width = "auto";
        needHelp.style.zIndex = "auto";
      } else if (shouldPin && !pinned) {
        pinned = true;
        placeholder.style.height = `${needHelpHeight}px`;
        setFixedPos();
        needHelp.style.position = "fixed";
        needHelp.style.top = `${offset}px`;
        needHelp.style.zIndex = "100";
      }
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        rafId = null;
        tick();
      });
    };

    const onResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        rafId = null;
        tick();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    tick();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="row clearfix">
      <div className="col-lg-8 col-md-12 col-sm-12 content-side" ref={mainRef}>
        {mainContent}
      </div>

      <div
        className="col-lg-4 col-md-12 col-sm-12 sidebar-side"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="sidebar-top" style={{ flex: "0 0 auto" }}>
          {sidebarTop}
        </div>
        <div className="flex-grow-1" style={{ position: "relative" }}>
          <div ref={placeholderRef} style={{ width: "100%" }} />
          <div ref={needHelpRef} style={{ position: "relative" }}>
            {sidebarBottom}
          </div>
        </div>
      </div>
    </div>
  );
}
