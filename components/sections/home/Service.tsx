import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Service() {
    return (
        <section className="service-section alternat-2 p_relative">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title mb_60 centred">
                    <h2>Our Services</h2>
                    <p>We offer a complete range of treatments designed to support recovery, improve mobility, and enhance overall wellness.</p>
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
                                        <p>Our physiotherapy in Scarborough focuses on injury recovery, pain management, and improving mobility. We use customised rehabilitation programs to help you return to your daily activities faster.</p>
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
                                        <p>Experience professional massage therapy in Scarborough designed to relieve muscle tension, reduce stress, and improve circulation for better overall health.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><Image src="/assets/images/resource/electrotherapy2.webp" alt="Image" width={416} height={358} priority /></figure>
                                <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box" style={{ transform: 'scale(0.7)' }}><i className="icon-20"></i></div>
                                        <h3><Link href="/electrotherapy">Electrotherapy</Link></h3>
                                        <p>Our electrotherapy in Scarborough uses advanced electrical stimulation to reduce pain, improve muscle function, and accelerate recovery.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><Image src="/assets/images/resource/kinesiotaping2.webp" alt="Image" width={416} height={358} priority /></figure>
                                <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box" style={{ transform: 'scale(0.7)' }}><i className="icon-20"></i></div>
                                        <h3><Link href="/kinesio-taping">Kinesio Taping</Link></h3>
                                        <p>Kinesio taping supports muscles and joints while allowing natural movement. It is widely used for sports injuries and rehabilitation.</p>
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
                                        <p>We provide custom orthotics in Scarborough to correct foot alignment, improve posture, and reduce joint pain for better mobility.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><Image src="/assets/images/resource/chiropracticadjustments1.webp" alt="Image" width={416} height={358} priority /></figure>
                                <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box" style={{ transform: 'scale(0.7)' }}><i className="icon-19"></i></div>
                                        <h3><Link href="/chiropractic-adjustments">Chiropractic Care</Link></h3>
                                        <p>Our chiropractic adjustments in Scarborough improve spinal alignment, reduce pain, and enhance nervous system function. This natural approach supports long-term health and wellness.</p>
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
