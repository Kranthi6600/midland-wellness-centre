import Image from "next/image";
import Link from "next/link";
export default function Service() {
  return (
        <section className="service-section alternat-2 p_relative">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title mb_60 centred">
                    <span className="sub-title mb_5">What we do for our patients</span>
                    <h2>Our Medical Departments <br />Services</h2>
                    <p>Medical care is the practice of providing diagnosis, treatment, and preventive care for various <br />illnesses, injuries, and diseases. It</p>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div className="service-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><Image src="/assets/images/service/physiotherapy2.webp" alt="Image" width={416} height={358} priority /></figure>
                                <div className="lower-content">
                                    <div className="inner">
                                        <div className="icon-box"><i className="icon-18"></i></div>
                                        <h3><Link href="/department-details">Physiotherapy</Link></h3>
                                        <p>Physiotherapists manage chronic conditions.</p>
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
                                        <div className="icon-box"><i className="icon-19"></i></div>
                                        <h3><Link href="/department-details-2">Massage Therapy</Link></h3>
                                        <p>Massage Therapists are healthcare professionals.</p>
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
                                        <div className="icon-box"><i className="icon-20"></i></div>
                                        <h3><Link href="/department-details-3">Orthotics</Link></h3>
                                        <p>Orthotics are healthcare professionals.</p>
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
