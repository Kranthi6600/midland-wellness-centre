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
                  <span className="sub-title mb_5">About Midland Wellness Centre - Scarborough's Trusted Physiotherapy Clinic</span>
                  <h2>Leading Pain Relief & Rehabilitation Clinic in Toronto</h2>
                </div>
                <div className="text-box mb_30">
                  <p>
                    Midland Wellness Centre is the premier multidisciplinary physiotherapy clinic in Scarborough, conveniently located near Midland Ave and Eglinton Ave. As your trusted wellness centre in Toronto, we specialize in comprehensive pain management, injury rehabilitation, and musculoskeletal treatment. Our expert physiotherapists, chiropractors, and massage therapists provide evidence-based care including sports injury treatment, post-surgery rehabilitation, chronic pain management, and custom orthotics. Serving Scarborough and East Toronto for over 30 years, we combine advanced techniques like kinesio taping, electrotherapy, shockwave therapy, and manual therapy to deliver personalized treatment plans for back pain, neck pain, joint pain, and sports injuries. Our holistic wellness clinic approach includes rehabilitation therapy, mobility improvement, manual therapy, and posture correction for complete injury recovery and musculoskeletal treatment.
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
