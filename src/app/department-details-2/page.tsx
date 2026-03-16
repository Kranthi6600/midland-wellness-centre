import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../components/sections/home/Cta";
export default function Departments_Details_Two() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Chiropractic Adjustments">
                <section className="service-details pt_120 pb_110">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="service-sidebar">
                                    <div className="sidebar-widget category-widget mb_40">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-41.png)" }}></div>
                                        <div className="widget-title">
                                            <h2>Departments</h2>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="category-list clearfix">
                                                <li><Link href="/department-details">Physiotherapy</Link></li>
                                                <li><Link href="/department-details-2" className="current">Chiropractic Adjustments</Link></li>
                                                <li><Link href="/department-details-3">Massage Therapy</Link></li>
                                                <li><Link href="/department-details-4">Electrotherapy</Link></li>
                                                <li><Link href="/department-details-5">Kinesio Taping</Link></li>
                                                <li><Link href="/department-details-6">Orthotics</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget appointment-widget mb_40">
                                        <div className="widget-title">
                                            <h2>Appointment</h2>
                                        </div>
                                        <div className="form-inner">
                                            <form method="post" action="contact.html" className="default-form">
                                                <div className="form-group">
                                                    <div className="icon"><i className="icon-45"></i></div>
                                                    <input type="text" name="name" placeholder="Name" required/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="icon"><i className="icon-46"></i></div>
                                                    <input type="email" name="email" placeholder="Email" required/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="icon"><Image src="/assets/images/icons/icon-15.svg" alt="Image" width={15} height={15} priority /></div>
                                                    <div className="select-box">
                                                        <select className="selectmenu">
                                                            <option>I&apos;m interested in *</option>
                                                            <option>Physiotherapy</option>
                                                            <option>Chiropractic Adjustments</option>
                                                            <option>Massage Therapy</option>
                                                            <option>Electrotherapy</option>
                                                            <option>Kinesio Taping</option>
                                                            <option>Orthotics</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="icon"><i className="icon-48"></i></div>
                                                    <textarea name="message" placeholder="Message"></textarea>
                                                </div>
                                                <div className="form-group message-btn">
                                                    <button type="submit" className="theme-btn btn-two"><span>Send your message</span></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget schedule-widget">
                                        <div className="widget-title">
                                            <h2>Working Hours</h2>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="schedule-list clearfix">
                                                <li>Sunday<span>Closed</span></li>
                                                <li>Monday<span>10 AM – 6 PM</span></li>
                                                <li>Tuesday<span>10 AM – 6 PM</span></li>
                                                <li>Wednesday<span>10 AM – 7 PM</span></li>
                                                <li>Thursday<span>10 AM – 6 PM</span></li>
                                                <li>Friday<span>10 AM – 6 PM</span></li>
                                                <li>Saturday<span>12 PM – 3 PM</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="service-details-content">
                                    <div className="content-one mb_40">
                                        <figure className="image-box mb_60"><Image src="/assets/images/resource/chiropracticadjustments1.png" alt="Image" width={856} height={525} priority style={{
                                            borderRadius: '15px',
                                            objectFit: 'cover'
                                        }} /></figure>
                                        <div className="text-box">
                                            <h2>Chiropractic Adjustments</h2>
                                            <p>Chiropractic adjustments are specialized manual therapies focused on restoring proper alignment and function to the musculoskeletal system, particularly the spine. Through precise, controlled movements, chiropractors address misalignments (subluxations) that can interfere with nervous system function and cause pain, discomfort, and reduced mobility.<br />At Midland Wellness Centre, our chiropractic services emphasize a holistic approach to health, recognizing that proper spinal alignment is essential for overall wellness. Our experienced chiropractors use various adjustment techniques tailored to each patient&apos;s specific needs, including manual adjustments, instrument-assisted techniques, and gentle low-force methods suitable for all ages.<br />Chiropractic care effectively treats a wide range of conditions including back pain, neck pain, headaches, sciatica, joint pain, sports injuries, and chronic pain conditions. We also provide care for wellness maintenance, injury prevention, and performance optimization for athletes and active individuals.<br />Beyond spinal adjustments, our chiropractic services may include soft tissue therapy, rehabilitative exercises, lifestyle counseling, and ergonomic advice to support long-term health and prevent future problems.</p>
                                            <p>Preventative chiropractic care is fundamental to our approach, helping patients maintain optimal spinal health, improve posture, and enhance overall body function. Regular adjustments can help prevent injuries, manage chronic conditions, and support the body's natural healing abilities.</p>
                                            <p>In summary, chiropractic adjustments at Midland Wellness Centre offer safe, effective, and drug-free solutions for pain relief and improved function. Our patient-centered approach combines advanced techniques with compassionate care to help patients achieve lasting health and wellness through proper spinal alignment and nervous system optimization.</p>
                                        </div>
                                    </div>
                                    <div className="content-two">
                                        <figure className="image-box mb_30"><Image src="/assets/images/resource/chiropracticadjustments2.png" alt="Image" width={856} height={525} priority style={{
                                            borderRadius: '15px',
                                            objectFit: 'cover'
                                        }} /></figure>
                                        <p>Our chiropractors are highly trained healthcare professionals who specialize in neuromusculoskeletal health and spinal correction. They conduct comprehensive assessments to identify structural and functional issues, then develop personalized treatment plans that may include spinal adjustments, soft tissue therapy, and rehabilitative exercises. Common conditions treated include herniated discs, sciatica, whiplash, sports injuries, and chronic pain syndromes.</p>
                                        <ul className="list-style-one clearfix">
                                            <li>Gentle yet effective spinal adjustment techniques</li>
                                            <li>Comprehensive neurological and musculoskeletal assessments</li>
                                            <li>Customized treatment plans for individual needs</li>
                                            <li>Integration with other therapeutic modalities</li>
                                            <li>Focus on long-term wellness and prevention</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Cta/>
            </Layout>
        </div>
    )
}
