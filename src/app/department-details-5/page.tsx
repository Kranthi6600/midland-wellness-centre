import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../components/sections/home/Cta";
export default function Departments_Details_Five() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Kinesio Taping">
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
                                                <li><Link href="/department-details-5" className="current">Kinesio Taping</Link></li>
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
                                        <figure className="image-box mb_60"><Image src="/assets/images/resource/kinesiotaping1.jpg" alt="Image" width={856} height={525} priority style={{
                                            borderRadius: '15px',
                                            objectFit: 'cover'
                                        }} /></figure>
                                        <div className="text-box">
                                            <h2>Kinesio Taping</h2>
                                            <p>Kinesio Taping is a therapeutic taping technique that uses specialized elastic tape to support muscles and joints without restricting movement. Developed by Dr. Kenzo Kase in the 1970s, this innovative approach differs from traditional athletic taping by allowing full range of motion while providing therapeutic benefits through the tape's unique elastic properties and application techniques.<br />At Midland Wellness Centre, our certified Kinesio Taping practitioners use this technique to enhance healing, reduce pain, improve circulation, and support muscle function. The tape is applied in specific patterns and tensions depending on the treatment goals, whether it&apos;s to support weak muscles, facilitate muscle contraction, or reduce inflammation and swelling.<br />Kinesio Taping effectively treats numerous conditions including sports injuries, muscle strains, joint instability, postural imbalances, lymphatic drainage issues, and neurological conditions affecting muscle function. It's particularly beneficial for athletes, individuals&apos; with repetitive strain injuries, and patients recovering from surgery or injury.<br />The tape can be worn for several days and is water-resistant, allowing patients to continue their daily activities and even shower while receiving continuous therapeutic benefits.</p>
                                            <p>Kinesio Taping works by lifting the skin slightly to create space between the muscle and dermis, which improves circulation and lymphatic drainage while reducing pressure on pain receptors. This creates a neurosensory effect that helps retrain movement patterns and improve proprioception.</p>
                                            <p>In summary, Kinesio Taping at Midland Wellness Centre offers a non-invasive, drug-free approach to pain management and functional improvement. Our skilled practitioners combine precise application techniques with comprehensive assessment to provide personalized taping solutions that support healing and enhance performance.</p>
                                        </div>
                                    </div>
                                    <div className="content-two">
                                        <figure className="image-box mb_30"><Image src="/assets/images/resource/kinesiotaping2.jpg" alt="Image" width={856} height={525} priority style={{
                                            borderRadius: '15px',
                                            objectFit: 'cover'
                                        }} /></figure>
                                        <p>Our Kinesio Taping practitioners are certified healthcare professionals with specialized training in taping techniques and human anatomy. They conduct comprehensive assessments to identify the most effective taping applications for each patient&apos;s condition and goals. Common applications include muscle support, joint stabilization, pain reduction, and lymphatic drainage facilitation.</p>
                                        <ul className="list-style-one clearfix">
                                            <li>Certified Kinesio Taping practitioners with advanced training</li>
                                            <li>Customized taping applications for specific conditions</li>
                                            <li>Integration with exercise and manual therapy programs</li>
                                            <li>Water-resistant tape for extended wear time</li>
                                            <li>Evidence-based applications for sports and rehabilitation</li>
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
