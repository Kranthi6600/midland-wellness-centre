'use client';
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

export default function Service() {
  return (
    <section className="about-style-three pb_60">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Content Column */}
          <div className="col-lg-5 col-md-12 col-sm-12 content-column">
            <div className="content_block_four">
              <div className="content-box">
                <div className="sec-title mb_15">
                  <span className="sub-title mb_5">About Midland Wellness Centre</span>
                  <h2>Expertise and compassion saved my life</h2>
                </div>
                <div className="text-box mb_30">
                  <p>

                    Midland Wellness Centre is a multi-disciplinary health clinic located in the heart of Scarborough Our main goal is to help you restore your health and maximize your function. Combining evidence-based chiropractic care with specialized techniques such as Kinesio Taping, acupuncture, laser and massage therapy, we can provide you with customized care to suit your needs.
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
                          <h6>Certified Doctors</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 funfact-block">
                      <div className="funfact-block-one">
                        <div className="inner-box">
                          <div className="count-outer count-box">
                            <CountUp end={15} duration={1.5} />+
                          </div>
                          <h6>Winning Award</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="btn-box">
                  <Link href="/about" className="theme-btn btn-two">
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-7 col-md-12 col-sm-12 image-column">
            <div className="image_block_two">
              <div className="image-box">
                <figure className="image image-1">
                  <Image
                    src="/assets/images/resource/skeleton.webp"
                    alt="About 3"
                    width={416}
                    height={449}
                  />
                </figure>
                <figure className="image image-2">
                  <Image
                    src="/assets/images/resource/hospital.jpg"
                    alt="About 4"
                    width={306}
                    height={658}
                  />
                </figure>

                {/* Experience Box */}
                <div className="experience-box">
                  <div className="inner">
                    <h2>30</h2>
                    <span>Years of Experience in This Field</span>
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
