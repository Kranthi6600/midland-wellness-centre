import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../components/sections/home/Cta";
export default function Departments_Details_Three() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Massage Therapy">
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
                                                <li><Link href="/department-details-3" className="current">Massage Therapy</Link></li>
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
                                        <figure className="image-box mb_60"><Image src="/assets/images/resource/massagetherapy1.png" alt="Image" width={856} height={525} priority style={{
                                            borderRadius: '15px',
                                            objectFit: 'cover'
                                        }} /></figure>
                                        <div className="text-box">
                                            <h2>Massage Therapy</h2>
                                            <p>Massage therapy is a hands-on healthcare approach that involves manipulating soft tissues of the body to enhance health and wellbeing. Through various techniques including Swedish massage, deep tissue massage, trigger point therapy, and myofascial release, our skilled massage therapists address muscle tension, pain, and circulation issues while promoting relaxation and healing.<br />At Midland Wellness Centre, our massage therapy services are integrated with other therapeutic modalities to provide comprehensive care. We offer specialized treatments for injury rehabilitation, stress management, chronic pain relief, and wellness maintenance. Our therapists are trained in multiple techniques and customize each session to meet the specific needs and goals of individual clients.<br />Massage therapy effectively treats numerous conditions including back pain, neck pain, headaches, sports injuries, motor vehicle accident injuries, workplace injuries, fibromyalgia, and stress-related tension. We also provide prenatal massage, sports massage, and relaxation massage to address diverse wellness needs.<br />Beyond the physical benefits, massage therapy promotes mental and emotional wellbeing by reducing stress hormones, improving sleep quality, and enhancing overall mood and relaxation.</p>
                                            <p>Regular massage therapy sessions can help prevent injuries, improve flexibility, enhance athletic performance, and support the body's natural healing processes. We work closely with other healthcare providers to ensure integrated care for optimal patient&apos;s outcomes.</p>
                                            <p>In summary, massage therapy at Midland Wellness Centre offers a holistic approach to health and healing through skilled soft tissue manipulation. Our experienced therapists combine various techniques to address specific conditions while promoting overall relaxation, pain relief, and improved physical function for enhanced quality of life.</p>
                                        </div>
                                    </div>
                                    <div className="content-two">
                                        <figure className="image-box mb_30"><Image src="/assets/images/resource/massagetherapy2.png" alt="Image" width={856} height={525} priority style={{
                                            borderRadius: '15px',
                                            objectFit: 'cover'
                                        }} /></figure>
                                        <p>Our massage therapists are registered healthcare professionals with extensive training in various massage techniques and anatomy. They conduct thorough assessments to understand each client&apos;s specific concerns and goals, then develop personalized treatment plans that may include deep tissue work, relaxation techniques, and therapeutic stretching. Common conditions treated include chronic pain, sports injuries, stress-related tension, and postural imbalances.</p>
                                        <ul className="list-style-one clearfix">
                                            <li>Multiple massage techniques including Swedish and deep tissue</li>
                                            <li>Integrated approach with other wellness therapies</li>
                                            <li>Customized treatment plans for individual needs</li>
                                            <li>Focus on both therapeutic and relaxation benefits</li>
                                            <li>Support for injury recovery and stress management</li>
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
