import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BannerProps } from "@/types";
import { SITE_CONFIG } from "@/constants";

const bannerData: BannerProps = {
  title: "Stay Healthy, Stay Happy",
  subtitle: "Your Health is our Priority",
  description: "Expert physiotherapy, chiropractic care, massage therapy and orthotics in Midland. Book your appointment today for comprehensive wellness services.",
  backgroundImage: "/assets/images/banner/hospital3.png",
  primaryAction: {
    text: "Book Appointment",
    href: "/appointments",
  },
  secondaryAction: {
    text: "Learn More",
    href: "/about",
  },
};

const teamMembers = [
  { name: "Dr. Sarah Johnson", image: "/assets/images/banner/docprofile1.webp" },
  { name: "Dr. Michael Chen", image: "/assets/images/banner/docprofile2.webp" },
  { name: "Emily Rodriguez", image: "/assets/images/banner/docprofile3.webp" },
  { name: "Dr. James Wilson", image: "/assets/images/banner/docprofile4.webp" },
];

export default function Banner() {
  return (
    <section className="banner-style-two p_relative">
      <div 
        className="bg-layer" 
        style={{ backgroundImage: `url(${bannerData.backgroundImage})` }}
        role="img"
        aria-label={`${SITE_CONFIG.name} medical facility`}
      />
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/shape-25.png)" }} />
        <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/shape-26.png)" }} />
        <div className="pattern-3" style={{ backgroundImage: "url(/assets/images/shape/shape-27.png)" }} />
      </div>
      <div className="auto-container">
        <div className="content-box">
          <span className="sub-title">{bannerData.subtitle}</span>
          <h2>
            {bannerData.title.split(' ').map((word, index) => 
              word === "Happy" ? <span key={index}>{word}</span> : word
            ).map((word, index, array) => 
              <React.Fragment key={index}>
                {word}
                {index < array.length - 1 && " "}
              </React.Fragment>
            )}
          </h2>
          <p>{bannerData.description}</p>
          <div className="lower-box">
            <div className="btn-box">
              <Link 
                href={bannerData.primaryAction.href}
                className="theme-btn btn-one"
                role="button"
                aria-label={bannerData.primaryAction.text}
              >
                <span>{bannerData.primaryAction.text}</span>
              </Link>
            </div>
            <div className="doctors-list">
              <ul className="thumb-box clearfix">
                {teamMembers.map((member, index) => (
                  <li key={index}>
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${SITE_CONFIG.name}`}
                      width={45}
                      height={45}
                      priority
                      className="rounded-circle"
                    />
                  </li>
                ))}
              </ul>
              <div className="doctor-stats">
                <h3>{teamMembers.length}+</h3>
                <span>Expert Practitioners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
