import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../components/sections/home/Cta";
export default function Departments_Details_Six() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Orthotics">
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
                                                <li><Link href="/department-details-2">Chiropractic Adjustments</Link></li>
                                                <li><Link href="/department-details-3">Massage Therapy</Link></li>
                                                <li><Link href="/department-details-4">Electrotherapy</Link></li>
                                                <li><Link href="/department-details-5">Kinesio Taping</Link></li>
                                                <li><Link href="/department-details-6" className="current">Orthotics</Link></li>
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
                                    <div className="sidebar-widget appointment-widget mb_10" style={{ marginTop: '60px' }}>
                                        <div className="widget-title">
                                            <h2>Book Appointment</h2>
                                        </div>
                                        <div className="widget-content">
                                            <p style={{ color: '#ffffffd9' }}>Ready to schedule your appointment? Click below to book your visit with our specialists.</p>
                                            <div className="btn-box mt_20">
                                                <Link href="/appointments" className="theme-btn btn-one" style={{ width: '100%', justifyContent: 'center', border: '2px solid #ffffff' }}>
                                                    Book Appointment Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="service-details-content">
                                    <div className="content-one mb_40">
                                        <figure className="image-box mb_60"><Image src="/assets/images/resource/orthotics1.jpg" alt="Image" width={856} height={525} priority style={{
                                            borderRadius: '15px',
                                            objectFit: 'cover'
                                        }} /></figure>
                                        <div className="text-box">
                                            <h2>Orthotics</h2>
                                            <p>Orthotics is a specialized healthcare field focused on designing, fabricating, and fitting custom orthotic devices to support, align, prevent, or correct musculoskeletal deformities and improve function. These medical devices range from custom shoe inserts and braces to more complex orthoses that support various body parts and enhance mobility while reducing pain.<br />At Midland Wellness Centre, our orthotics services provide comprehensive assessment and custom-fabrication solutions for patients of all ages. Our experienced orthotics specialists conduct thorough evaluations including gait analysis, postural assessment, and biomechanical measurements to determine the most effective orthotic interventions for each individual&apos;s needs.<br />Orthotics effectively treats numerous conditions including flat feet, plantar fasciitis, ankle instability, knee pain, back pain, sports injuries, arthritis, and neurological conditions affecting mobility. We also provide orthotic solutions for workplace injury prevention and athletic performance enhancement.<br />Custom orthotics are particularly beneficial because they're specifically designed to address each patient&apos;s unique foot structure, gait pattern, and lifestyle requirements, ensuring optimal comfort and therapeutic effectiveness.</p>
                                            <p>Orthotic devices work by redistributing pressure, improving alignment, supporting weak structures, and enhancing proprioception. This not only reduces pain but also prevents further injury and improves overall function and quality of life.</p>
                                            <p>In summary, orthotics at Midland Wellness Centre offers personalized, evidence-based solutions for musculoskeletal support and correction. Our comprehensive approach combines advanced assessment techniques with custom fabrication to provide orthotic devices that improve function, reduce pain, and enhance mobility for our patients.</p>
                                        </div>
                                    </div>
                                    <div className="content-two">
                                        <figure className="image-box mb_30"><Image src="/assets/images/resource/orthotics2.jpg" alt="Image" width={856} height={525} priority style={{
                                            borderRadius: '15px',
                                            objectFit: 'cover'
                                        }} /></figure>
                                        <p>Our orthotics specialists are healthcare professionals with advanced training in biomechanics, gait analysis, and orthotic device design. They conduct comprehensive assessments to identify musculoskeletal imbalances and functional limitations, then develop customized orthotic solutions that address each patient&apos;s specific needs and goals. Common applications include custom foot orthotics, ankle braces, knee orthoses, and spinal supports.</p>
                                        <ul className="list-style-one clearfix">
                                            <li>Comprehensive biomechanical and gait analysis</li>
                                            <li>Custom-fabricated orthotic devices for precise fit</li>
                                            <li>Integration with rehabilitation and exercise programs</li>
                                            <li>Solutions for sports, workplace, and daily activities</li>
                                            <li>Evidence-based approaches to musculoskeletal support</li>
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
