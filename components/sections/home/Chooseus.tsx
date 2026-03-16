import Image from "next/image";
export default function Chooseus() {
    return (
        <section className="chooseus-style-two p_relative pt_100 pb_110">
            <figure className="image-layer">
                <Image 
                    src="/assets/images/resource/hospital2.png" 
                    alt="Image" 
                    width={642} 
                    height={407} 
                    priority 
                    style={{
                        borderRadius: '15px',
                        objectFit: 'cover'
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
                            <span className="sub-title mb_5">Why Choose Us</span>
                            <h2>What&apos;s Our Speciality</h2>
                            <p>We pride ourselves on finding creative solutions to meet challenges we encounter. We are open to change and handle pressure with poise. We are flexible, adaptable and able to learn from our experiences.</p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <div className="icon"><i className="icon-28"></i></div>
                                            <span className="count-text">01</span>
                                        </div>
                                        <h3>Modern Technology</h3>
                                        <p>We utilize state-of-the-art medical equipment and cutting-edge technology to ensure accurate diagnoses and effective treatments for our patients.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <div className="icon"><i className="icon-29"></i></div>
                                            <span className="count-text">02</span>
                                        </div>
                                        <h3>Success of Treatments</h3>
                                        <p>Our proven track record of successful treatments and positive patient outcomes demonstrates our commitment to delivering exceptional healthcare results.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <div className="icon"><i className="icon-15"></i></div>
                                            <span className="count-text">03</span>
                                        </div>
                                        <h3>Certified Doctors</h3>
                                        <p>All our medical professionals are board-certified and highly qualified, bringing expertise and experience to provide the best possible care.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <div className="icon"><i className="icon-30"></i></div>
                                            <span className="count-text">04</span>
                                        </div>
                                        <h3>World Class Doctor</h3>
                                        <p>Our world-class doctors are internationally recognized leaders in their fields, offering advanced medical expertise and innovative treatment approaches.</p>
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
