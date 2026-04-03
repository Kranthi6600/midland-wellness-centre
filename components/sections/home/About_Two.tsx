'use client';
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { useState, useEffect } from "react";

export default function Service() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section className="about-style-three pb_60">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Content Column */}
          <div className="col-lg-5 col-md-12 col-sm-12 content-column">
            <div className="content_block_four">
              <div className="content-box">
                <div className="sec-title mb_15">
                  <span className="sub-title mb_5">Welcome to Midland Wellness Centre</span>
                  <h2>Your Trusted Wellness Centre in Scarborough</h2>
                </div>
                <div className="text-box mb_30">
                  <p>
                    Midland Wellness Centre is a multi-disciplinary clinic dedicated to helping you restore health and maximise function. We provide a wide range of treatments, including physiotherapy, chiropractic care, massage therapy, electrotherapy, and orthotics, ensuring comprehensive rehabilitation solutions. As a trusted wellness centre in Scarborough, we use evidence-based techniques and advanced therapies to deliver personalised care. Our approach focuses on improving mobility, reducing pain, and preventing future injuries through holistic treatment plans.
                  </p>
                </div>

                {/* Fun Facts */}
                <div className="funfact-inner mb_40">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 funfact-block">
                      <div className="funfact-block-one">
                        <div className="inner-box">
                          <div className="count-outer count-box">
                            <CountUp end={15} duration={1.5} />k+
                          </div>
                          <h6>Happy Patients</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 funfact-block">
                      <div className="funfact-block-one">
                        <div className="inner-box">
                          <div className="count-outer count-box">
                            <CountUp end={15} duration={1.5} />+
                          </div>
                          <h6>Years of Excellence</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-7 col-md-12 col-sm-12 image-column">
            <div className="image_block_two" style={{ display: isMobile ? 'none' : 'block' }}>
              <div className="image-box">
                <figure className="image image-1">
                  <Image
                    src="/assets/images/resource/skeleton.webp"
                    alt="About 3"
                    width={416}
                    height={449}
                    style={{
                      borderRadius: '15px',
                      objectFit: 'cover'
                    }}
                  />
                </figure>
                <figure className="image image-2">
                  <Image
                    src="/assets/images/resource/hospital.webp"
                    alt="About 4"
                    width={306}
                    height={658}
                    style={{
                      borderRadius: '15px',
                      objectFit: 'cover'
                    }}
                  />
                </figure>

                {/* Experience Box */}
                <div className="experience-box" style={{ display: isMobile ? 'none' : 'block' }}>
                  <div className="inner">
                    <h2>30</h2>
                    <span>Years of Expert Physiotherapy & Wellness Care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
