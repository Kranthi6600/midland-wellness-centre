import Image from "next/image";
export default function Chooseus() {
    return (
        <section className="chooseus-style-two p_relative pt_100 pb_110">
            <figure className="image-layer" style={{
                        marginTop: '60px'
                    }}>
                <Image 
                    src="/assets/images/resource/hospital2.webp" 
                    alt="Image" 
                    width={642} 
                    height={407} 
                    priority 
                    style={{
                        borderRadius: '15px',
                        objectFit: 'cover',
                        marginTop: '60px'
                    }}
                />
            </figure>
            <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-28.png)" }}></div>
                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-29.png)" }}></div>
            </div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                        <div className="sec-title mt_190">
                            <span className="sub-title mb_5">Why Choose Midland Wellness Centre</span>
                            <h2>Your Trusted Physiotherapy & Pain Relief Specialists</h2>
                            <p>As Scarborough's leading multidisciplinary wellness centre, we combine advanced physiotherapy techniques, chiropractic care, massage therapy, and cutting-edge rehabilitation technology to provide comprehensive pain management and injury recovery for Toronto residents.</p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                        <div className="row clearfix" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-one" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div className="inner-box" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div className="icon-box">
                                            <div className="icon"><i className="icon-28"></i></div>
                                            <span className="count-text">01</span>
                                        </div>
                                        <h3>Advanced Rehabilitation Technology</h3>
                                        <p style={{ flex: 1 }}>We utilize state-of-the-art electrotherapy, shockwave therapy, laser therapy, and ultrasound therapy equipment for advanced pain relief and accelerated injury recovery in Scarborough.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-one" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div className="inner-box" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div className="icon-box">
                                            <div className="icon"><i className="icon-29"></i></div>
                                            <span className="count-text">02</span>
                                        </div>
                                        <h3>Proven Pain Relief Results</h3>
                                        <p style={{ flex: 1 }}>Our proven track record in treating back pain, neck pain, sports injuries, and chronic pain conditions demonstrates our expertise as the best physiotherapy clinic in Scarborough.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-one" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div className="inner-box" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div className="icon-box">
                                            <div className="icon"><i className="icon-15"></i></div>
                                            <span className="count-text">03</span>
                                        </div>
                                        <h3>Expert Physiotherapists & Therapists</h3>
                                        <p style={{ flex: 1 }}>All our physiotherapists, chiropractors, and massage therapists are certified specialists with extensive experience in sports injury rehabilitation, post-surgery recovery, and musculoskeletal treatment.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-one" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div className="inner-box" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div className="icon-box">
                                            <div className="icon"><i className="icon-30"></i></div>
                                            <span className="count-text">04</span>
                                        </div>
                                        <h3>Holistic Wellness Approach</h3>
                                        <p style={{ flex: 1 }}>Our comprehensive approach combines manual therapy, kinesio taping, custom orthotics, and personalized exercise programs for complete injury rehabilitation and mobility improvement.</p>
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
