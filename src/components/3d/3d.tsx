"use client";

import { useState } from "react";
import Link from "next/link";

export default function D3() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="sec-pad centred">
      <div className="auto-container">
        <h2>3D Showcase</h2>
        <p className="mb_30">
          Explore our wellness centre in an interactive 3D card experience.
        </p>

        <div
          style={{
            perspective: "1000px",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          {/* 3D Flip Card */}
          <div
            onClick={() => setFlipped(!flipped)}
            style={{
              width: "300px",
              height: "400px",
              cursor: "pointer",
              perspective: "1000px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                transformStyle: "preserve-3d",
                transition: "transform 0.8s ease",
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  borderRadius: "15px",
                  background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  padding: "30px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                }}
              >
                <div style={{ fontSize: "64px", marginBottom: "15px" }}>🏥</div>
                <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
                  Midland Wellness Centre
                </h3>
                <p style={{ fontSize: "14px", opacity: 0.9 }}>
                  Click to flip the card
                </p>
              </div>

              {/* Back */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  borderRadius: "15px",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  padding: "30px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                  transform: "rotateY(180deg)",
                }}
              >
                <h3 style={{ fontSize: "22px", marginBottom: "15px" }}>
                  30+ Years of Excellence
                </h3>
                <p style={{ fontSize: "14px", lineHeight: "1.8", marginBottom: "20px" }}>
                  Expert physiotherapy, chiropractic care, and wellness services in
                  Scarborough.
                </p>
                <Link
                  href="/about"
                  className="theme-btn btn-one"
                  style={{ pointerEvents: flipped ? "auto" : "none" }}
                >
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 3D Tilt Cards */}
          {[
            { icon: "💆", title: "Physiotherapy", desc: "Expert rehabilitation and pain relief", color: "#4facfe" },
            { icon: "🦴", title: "Chiropractic", desc: "Spinal care and alignment therapy", color: "#667eea" },
            { icon: "🧘", title: "Wellness", desc: "Holistic health and wellness programs", color: "#00f2fe" },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                width: "220px",
                height: "300px",
                borderRadius: "15px",
                background: `linear-gradient(135deg, ${card.color} 0%, #764ba2 100%)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                padding: "25px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                transform: `rotateY(${i % 2 === 0 ? "5deg" : "-5deg"}) rotateX(5deg)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg) translateY(-10px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotateY(${i % 2 === 0 ? "5deg" : "-5deg"}) rotateX(5deg)`;
                e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.15)";
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "15px" }}>{card.icon}</div>
              <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>{card.title}</h3>
              <p style={{ fontSize: "13px", textAlign: "center", opacity: 0.9 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
