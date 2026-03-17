import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../components/sections/home/Cta";
export default function Departments_Details() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Blog">
                <section className="sidebar-page-container pt_120 pb_120">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="blog-details-content">
                                    <div className="back-to-blog mb_30">
                                        <Link href="/blog" className="theme-btn btn-one" style={{ width: '200px', padding: '12px 30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <i className="icon-21"></i>
                                            Back to Blog
                                        </Link>
                                    </div>
                                    <div className="news-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><Image src="/assets/images/resource/skeleton.webp" alt="Image" width={856} height={425} priority /></figure>
                                            <div className="lower-content">
                                                <span className="comment-box">2Comment</span>
                                                <h3>Advanced Physiotherapy Techniques for Faster Recovery</h3>
                                                <ul className="post-info clearfix">
                                                    <li><i className="icon-59"></i>March 6, 2023</li>
                                                    <li><i className="icon-60"></i><Link href="/blog-details">Author</Link></li>
                                                </ul>
                                                <p>Discover how modern physiotherapy techniques are revolutionizing patient recovery. Our expert physiotherapists utilize evidence-based approaches including manual therapy, therapeutic exercises, and cutting-edge equipment to restore movement, reduce pain, and improve quality of life. Learn about specialized treatments for sports injuries, chronic conditions, and post-surgical rehabilitation that help patients return to their daily activities faster and stronger than ever before.</p>
                                                <blockquote>
                                                    <h2>How Evidence-Based Physiotherapy Improves Treatment Outcomes</h2>
                                                    <span className="designation">Dr. Sarah Johnson, PT</span>
                                                </blockquote>
                                                <p>Evidence-based physiotherapy has transformed how we approach musculoskeletal conditions. By integrating clinical research with hands-on techniques, we're achieving remarkable results in pain management and functional restoration. Our patients experience faster recovery times, improved mobility, and long-lasting relief from chronic conditions. This approach combines traditional therapeutic methods with modern technology to create personalized treatment plans that address each patient's unique needs and goals.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-share-option mb_60">
                                        <ul className="post-tags clearfix">
                                            <li><h4>Tags:</h4></li>
                                            <li><Link href="/blog-details">Physiotherapy</Link></li>
                                            <li><Link href="/blog-details">Chiropractic</Link></li>
                                            <li><Link href="/blog-details">Massage Therapy</Link></li>
                                        </ul>
                                        <ul className="post-share clearfix">
                                            <li><h4>Share:</h4></li>
                                            <li><Link href="/blog-details"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="/blog-details"><i className="fab fa-dribbble"></i></Link></li>
                                            <li><Link href="/blog-details"><i className="fab fa-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="author-box mb_60">
                                        <figure className="author-thumb"><Image src="/assets/images/banner/docprofile1.webp" alt="Image" width={172} height={172} priority /></figure>
                                        <h3>Dr. Sarah Johnson, PT</h3>
                                        <p>Dr. Sarah Johnson is a licensed physiotherapist with over 15 years of experience in musculoskeletal rehabilitation. She specializes in sports injury recovery, chronic pain management, and post-operative rehabilitation. Dr. Johnson is passionate about helping patients achieve their optimal physical function through evidence-based treatment approaches and personalized care plans.</p>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/blog-details"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="/blog-details"><i className="fab fa-dribbble"></i></Link></li>
                                            <li><Link href="/blog-details"><i className="fab fa-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="comment-box mb_60">
                                        <h3>Comments(02)</h3>
                                        <div className="comment">
                                            <figure className="thumb-box"><Image src="/assets/images/banner/docprofile2.webp" alt="Image" width={88} height={86} priority /></figure>
                                            <h4>Michael Chen<span>March 19, 2022</span></h4>
                                            <p>The evidence-based approach described in this article has completely transformed my recovery experience. After struggling with chronic back pain for years, the personalized physiotherapy program helped me return to normal activities within 3 months. The combination of manual therapy and targeted exercises made a significant difference that other treatments couldn't achieve.</p>
                                            <Link href="/blog-details" className="reply-btn"><i className="icon-58"></i></Link>
                                        </div>
                                        <div className="comment replay-comment">
                                            <figure className="thumb-box"><Image src="/assets/images/banner/docprofile3.webp" alt="Image" width={88} height={86} priority /></figure>
                                            <h4>Emily Rodriguez<span>March 19, 2022</span></h4>
                                            <p>As a former athlete, I was skeptical about physiotherapy until I experienced the advanced techniques firsthand. The integration of modern equipment with traditional therapeutic methods not only accelerated my recovery but also provided me with tools to prevent future injuries. This holistic approach is exactly what active individuals need.</p>
                                            <Link href="/blog-details" className="reply-btn"><i className="icon-58"></i></Link>
                                        </div>
                                    </div>
                                    <div className="comment-form">
                                        <h3>Leave a Reply</h3>
                                        <form method="post" action="/blog-details" className="default-form">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="name" placeholder="Name" required/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="email" name="email" placeholder="Email" required/>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <textarea name="message" placeholder="Type Comment Here ..."></textarea>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                    <button type="submit" className="theme-btn btn-two"><span>Send your message</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="blog-sidebar">
                                    <div className="search-widget mb_40">
                                        <h3>Search Here</h3>
                                        <form method="post" action="/blog-details">
                                            <div className="form-group">
                                                <input type="search" name="search-field" placeholder="keywords" required/>
                                                <button type="submit"><Image src="/assets/images/icons/icon-22.svg" alt="Icon" width={20} height={20} priority /></button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="sidebar-widget category-widget mb_40">
                                        <div className="widget-title">
                                            <h3>Category</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="category-list clearfix">
                                                <li><Link href="/department-details">Physiotherapy</Link></li>
                                                <li><Link href="/department-details-2">Chiropractic Adjustments</Link></li>
                                                <li><Link href="/department-details-3">Massage Therapy</Link></li>
                                                <li><Link href="/department-details-4">Electrotherapy</Link></li>
                                                <li><Link href="/department-details-5">Kinesio Taping</Link></li>
                                                <li><Link href="/department-details-6">Orthotics</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget post-widget mb_40">
                                        <div className="widget-title">
                                            <h3>Latest News</h3>
                                        </div>
                                        <div className="post-inner">
                                            <div className="post">
                                                <figure className="post-thumb"><Link href="/blog-details"><Image src="/assets/images/resource/ambulance.webp" alt="Image" width={100} height={101} priority /></Link></figure>
                                                <h3><Link href="/blog-details">Prepare to Speak with Your Eye Specialist.</Link></h3>
                                                <ul className="post-info clearfix">
                                                    <li><i className="icon-59"></i>March 6, 2023</li>
                                                    <li><i className="icon-60"></i><Link href="/blog-details">Author</Link></li>
                                                </ul>
                                            </div>
                                            <div className="post">
                                                <figure className="post-thumb"><Link href="/blog-details"><Image src="/assets/images/resource/img1.webp" alt="Image" width={100} height={101} priority /></Link></figure>
                                                <h3><Link href="/blog-details">From Diagnosis to Cure: The Role.</Link></h3>
                                                <ul className="post-info clearfix">
                                                    <li><i className="icon-59"></i>March 5, 2023</li>
                                                    <li><i className="icon-60"></i><Link href="/blog-details">Author</Link></li>
                                                </ul>
                                            </div>
                                            <div className="post">
                                                <figure className="post-thumb"><Link href="/blog-details"><Image src="/assets/images/resource/img2.webp" alt="Image" width={100} height={101} priority /></Link></figure>
                                                <h3><Link href="/blog-details">Empowering Patients in through</Link></h3>
                                                <ul className="post-info clearfix">
                                                    <li><i className="icon-59"></i>March 4, 2023</li>
                                                    <li><i className="icon-60"></i><Link href="/blog-details">Author</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="consulting-widget">
                                        <div className="bg-layer"></div>
                                        <h3>Get Free <br />Consultations Today!</h3>
                                        <p>Speak with our expert team and receive professional advice on your next project. No obligation, no cost. Schedule your consultation now!</p>
                                        <Link href="/contact" className="theme-btn btn-two"><span>get a quote</span></Link>
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
