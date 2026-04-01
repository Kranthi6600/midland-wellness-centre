import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/constants";

export default function Service() {
  return (
    <section className="service-section alternat-2 p_relative">
      <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-13.png)" }} />
      <div className="auto-container">
        <div className="sec-title mb_60 centred">
          <h2>Our Medical Services</h2>
          <p>Expert care for your health and wellness.</p>
        </div>
        <div className="row clearfix">
          {SERVICES.slice(0, 3).map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div className="service-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <Image 
                      src={service.image} 
                      alt={`${service.title} at Midland Wellness Centre`} 
                      width={416} 
                      height={358} 
                      priority 
                    />
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <div className="icon-box" style={{ transform: 'scale(0.7)' }}>
                        <i className={service.icon}></i>
                      </div>
                      <h3>
                        <Link href={service.link}>{service.title}</Link>
                      </h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-box centred">
          <Link href="/services" className="theme-btn btn-one">
            <span>Our Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
