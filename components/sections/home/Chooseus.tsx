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
                            <span className="sub-title mb_5">Why Choose Our Wellness Centre</span>
                            <h2>Choosing the right clinic is essential for effective recovery</h2>
                            <p>Our wellness centre in Scarborough is trusted for delivering high-quality care and long-term results. We focus on personalized treatment plans, advanced technology, and a holistic approach to healing.</p>
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
                                        <h3>Experienced Healthcare Professionals</h3>
                                        <p style={{ flex: 1 }}>Our team uses advanced techniques and continuous training to provide safe and effective treatments for all patients.</p>
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
                                        <h3>Personalised Treatment Plans</h3>
                                        <p style={{ flex: 1 }}>Every treatment is tailored to your specific condition and goals, ensuring faster recovery and better outcomes.</p>
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
                                        <h3>Advanced Technology & Techniques</h3>
                                        <p style={{ flex: 1 }}>We use modern equipment and evidence-based therapies to deliver optimal results and improved patient experience.</p>
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
                                        <h3>Holistic Approach to Healing</h3>
                                        <p style={{ flex: 1 }}>Our treatments focus on long-term wellness, not just symptom relief, ensuring sustainable health improvements.</p>
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
