import Image from "next/image";
import Link from "next/link";
export default function Service() {
  return (
        <section className="service-section alternat-2 p_relative">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title mb_60 centred">
                    <h2>Our Medical Services</h2>
                    <p>Expert care for your health and wellness.</p>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><Image src="/assets/images/service/physiotherapy2.webp" alt="Image" width={416} height={358} priority /></figure>
                                <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box" style={{ transform: 'scale(0.5)' }}><i className="icon-18"></i></div>
                                        <h3><Link href="/department-details">Physiotherapy</Link></h3>
                                        <p>Restoring movement and function.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><Image src="/assets/images/service/massage1.webp" alt="Image" width={416} height={358} priority /></figure>
                                <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box" style={{ transform: 'scale(0.7)' }}><i className="icon-19"></i></div>
                                        <h3><Link href="/department-details-3">Massage Therapy</Link></h3>
                                        <p>Healing through therapeutic touch.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><Image src="/assets/images/service/Orthotics1.webp" alt="Image" width={416} height={358} priority /></figure>
                                <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box" style={{ transform: 'scale(0.7)' }}><i className="icon-20"></i></div>
                                        <h3><Link href="/department-details-6">Orthotics</Link></h3>
                                        <p>Custom orthopedic solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-box centred">
                    <Link href="/departments" className="theme-btn btn-one">
                        <span>Our Services</span>
                    </Link>
                </div>
            </div>
        </section>
  );
}
