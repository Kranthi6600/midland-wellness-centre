import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { ServiceItem } from "@/lib/api";

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

interface ServiceProps {
  services?: ServiceItem[];
}

export default function Service({ services }: ServiceProps) {
  const items = (services || []).map((s) => ({
    slug: s.slug,
    title: s.title,
    description: s.description || "",
    thumbnail: s.thumbnail,
    icon: "icon-18" as string,
    scale: "0.7",
  }));

  return (
    <section className="service-section alternat-2 p_relative">
      <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}></div>
      <div className="auto-container">
        <div className="sec-title mb_60 centred">
          <h2>Our Services</h2>
          <p>We offer a complete range of treatments designed to support recovery, improve mobility, and enhance overall wellness.</p>
        </div>
        <div className="row clearfix">
          {items.length === 0 ? (
            <div className="col-12 centred">
              <p>No services available at the moment.</p>
            </div>
          ) : items.map((service) => (
            <div className="col-lg-4 col-md-6 col-sm-12 service-block" key={service.slug}>
              <div className="service-block-one">
                <div className="inner-box">
                  {service.thumbnail && (
                    <figure className="image-box">
                      <Image
                        src={service.thumbnail}
                        alt={service.title}
                        width={416}
                        height={358}
                        priority
                      />
                    </figure>
                  )}
                  <div className="lower-content">
                    <div className="inner">
                      <div className="icon-box">
                        <i className={service.icon}></i>
                      </div>
                      <h3>
                        <Link href={`/services/${service.slug}`}>{service.title}</Link>
                      </h3>
                      <p>{stripHtml(service.description)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
