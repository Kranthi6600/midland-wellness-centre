import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Service() {
    return (
        <section className="service-section alternat-2 p_relative">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title mb_60 centred">
                    <h2>Expert Physiotherapy & Wellness Services in Scarborough</h2>
                    <p>Comprehensive pain management, injury rehabilitation, and holistic wellness therapies for Toronto residents. Rehabilitation therapy, pain management clinic, mobility improvement, and injury recovery services.</p>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><Image src="/assets/images/service/physiotherapy2.webp" alt="Image" width={416} height={358} priority /></figure>
                                <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box" style={{ transform: 'scale(0.5)' }}><i className="icon-18"></i></div>
                                        <h3><Link href="/physiotherapy">Physiotherapy</Link></h3>
                                        <p>Expert physiotherapy for back pain, sports injuries, and rehabilitation in Scarborough.</p>
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
                                        <h3><Link href="/massage-therapy">Massage Therapy</Link></h3>
                                        <p>Deep tissue massage, sports massage, and prenatal massage for chronic pain relief.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><Image src="/assets/images/resource/electrotherapy2.png" alt="Image" width={416} height={358} priority /></figure>
                                <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box" style={{ transform: 'scale(0.7)' }}><i className="icon-20"></i></div>
                                        <h3><Link href="/electrotherapy">Electrotherapy</Link></h3>
                                        <p>Advanced electrotherapy and shockwave therapy for pain relief and injury recovery.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><Image src="/assets/images/resource/kinesiotaping2.jpg" alt="Image" width={416} height={358} priority /></figure>
                                <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box" style={{ transform: 'scale(0.7)' }}><i className="icon-20"></i></div>
                                        <h3><Link href="/kinesio-taping">Kinesio Taping</Link></h3>
                                        <p>Therapeutic kinesio taping for joint support and enhanced athletic performance.</p>
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
                                        <h3><Link href="/orthotics">Custom Orthotics</Link></h3>
                                        <p>Custom orthotics for posture correction, back pain relief, and alignment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><Image src="/assets/images/resource/chiropracticadjustments1.png" alt="Image" width={416} height={358} priority /></figure>
                                <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box" style={{ transform: 'scale(0.7)' }}><i className="icon-19"></i></div>
                                        <h3><Link href="/chiropractic-adjustments">Chiropractic Care</Link></h3>
                                        <p>Expert chiropractic adjustments, spine alignment therapy, and neck pain treatment.</p>
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
