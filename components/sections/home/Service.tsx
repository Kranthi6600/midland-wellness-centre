import React from "react";
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
                                        <h3><Link href="/physiotherapy">Physiotherapy</Link></h3>
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
                                        <h3><Link href="/massage-therapy">Massage Therapy</Link></h3>
                                        <p>Healing through therapeutic touch.</p>
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
                                        <p>Advanced electrical stimulation for healing.</p>
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
                                        <p>Therapeutic taping for support.</p>
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
                                        <h3><Link href="/orthotics">Orthotics</Link></h3>
                                        <p>Custom orthopedic solutions for foot and body alignment.</p>
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
                                        <h3><Link href="/chiropractic-adjustments">Chiropractic Adjustments</Link></h3>
                                        <p>Spinal health and alignment for optimal wellness.</p>
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
