import Layout from "../../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../../components/sections/home/Cta";
import { getBlogPostBySlug, getBlogPosts, BlogPost } from "../../../data/blogPosts";

export default function KinesioTapingBlogPost() {
    const post = getBlogPostBySlug('kinesio-taping-athletic-performance-recovery');
    const latestPosts = getBlogPosts().slice(0, 3);

    if (!post) {
        return <div>Post not found</div>;
    }

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
                                            <figure className="image-box">
                                                <Image 
                                                    src={post.image} 
                                                    alt={post.title} 
                                                    width={856} 
                                                    height={425} 
                                                    priority 
                                                />
                                            </figure>
                                            <div className="lower-content">
                                                <span className="comment-box">{post.comments} Comment</span>
                                                <h3>{post.title}</h3>
                                                <ul className="post-info clearfix">
                                                    <li><i className="icon-59"></i>{post.date}</li>
                                                    <li><i className="icon-60"></i><Link href={`/blog/${post.slug}`}>{post.author}</Link></li>
                                                </ul>
                                                <div className="blog-content">
                                                    {post.content.split('\n').map((paragraph: string, index: number) => (
                                                        <p key={index}>{paragraph}</p>
                                                    ))}
                                                </div>
                                                
                                                <blockquote>
                                                    <h2>How Kinesio Taping Improves Treatment Outcomes</h2>
                                                    <span className="designation">{post.author}</span>
                                                </blockquote>
                                                
                                                <div className="benefits-section mt_50">
                                                    <h4>Key Benefits of Kinesio Taping:</h4>
                                                    <ul className="benefits-list">
                                                        <li><strong>Enhanced Performance:</strong> Improves muscle activation and reduces fatigue during athletic activities</li>
                                                        <li><strong>Injury Prevention:</strong> Provides support without restricting movement, reducing risk of injuries</li>
                                                        <li><strong>Faster Recovery:</strong> Accelerates healing process and reduces inflammation</li>
                                                        <li><strong>Pain Management:</strong> Alleviates discomfort by providing gentle support to affected areas</li>
                                                        <li><strong>Improved Circulation:</strong> Enhances blood flow to promote healing and reduce swelling</li>
                                                    </ul>
                                                </div>

                                                <div className="treatment-process mt_50">
                                                    <h4>Our Treatment Approach:</h4>
                                                    <p>Our certified therapists follow a comprehensive approach to kinesio taping:</p>
                                                    <ol className="treatment-steps">
                                                        <li><strong>Assessment:</strong> Thorough evaluation of your condition and specific needs</li>
                                                        <li><strong>Customized Application:</strong> Tailored taping techniques based on your unique requirements</li>
                                                        <li><strong>Education:</strong> Guidance on proper care and maintenance of the tape application</li>
                                                        <li><strong>Follow-up:</strong> Regular monitoring to ensure optimal results and adjust treatment as needed</li>
                                                    </ol>
                                                </div>

                                                <div className="call-to-action mt_50">
                                                    <h4>Ready to Experience the Benefits?</h4>
                                                    <p>Whether you're an athlete looking to enhance performance or recovering from an injury, our kinesio taping services can help. Contact us today to schedule a consultation with our certified therapists.</p>
                                                    <Link href="/contact" className="theme-btn btn-two">
                                                        <span>Schedule Consultation</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="post-share-option mb_60">
                                        <ul className="post-tags clearfix">
                                            <li><h4>Tags:</h4></li>
                                            {post.tags.map((tag: string, index: number) => (
                                                <li key={index}><Link href={`/blog/tag/${tag}`}>{tag}</Link></li>
                                            ))}
                                        </ul>
                                        <ul className="post-share clearfix">
                                            <li><h4>Share:</h4></li>
                                            <li><Link href={`/blog/${post.slug}`}><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href={`/blog/${post.slug}`}><i className="fab fa-dribbble"></i></Link></li>
                                            <li><Link href={`/blog/${post.slug}`}><i className="fab fa-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="author-box mb_60">
                                        <figure className="author-thumb">
                                            <Image 
                                                src="/assets/images/banner/docprofile1.webp" 
                                                alt={post.author} 
                                                width={172} 
                                                height={172} 
                                                priority 
                                            />
                                        </figure>
                                        <h3>{post.author}</h3>
                                        <p>Dr. Sarah Johnson is a certified kinesio taping specialist with extensive experience in sports medicine and rehabilitation. She specializes in helping athletes enhance their performance and recover from injuries using advanced taping techniques. Dr. Johnson is passionate about helping patients achieve their optimal physical function through evidence-based treatment approaches and personalized care plans.</p>
                                        <ul className="social-links clearfix">
                                            <li><Link href={`/blog/${post.slug}`}><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href={`/blog/${post.slug}`}><i className="fab fa-dribbble"></i></Link></li>
                                            <li><Link href={`/blog/${post.slug}`}><i className="fab fa-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="comment-box mb_60">
                                        <h3>Comments({post.comments.toString().padStart(2, '0')})</h3>
                                        <div className="comment">
                                            <figure className="thumb-box">
                                                <Image 
                                                    src="/assets/images/banner/docprofile2.webp" 
                                                    alt="Michael Chen" 
                                                    width={88} 
                                                    height={86} 
                                                    priority 
                                                />
                                            </figure>
                                            <h4>Michael Chen<span>March 19, 2022</span></h4>
                                            <p>The kinesio taping treatment I received was incredible! As a marathon runner, I've struggled with knee pain for years. The taping techniques used by Dr. Johnson provided immediate relief and allowed me to continue training without discomfort. The best part is that it doesn't restrict my movement at all.</p>
                                            <Link href={`/blog/${post.slug}`} className="reply-btn"><i className="icon-58"></i></Link>
                                        </div>
                                        <div className="comment replay-comment">
                                            <figure className="thumb-box">
                                                <Image 
                                                    src="/assets/images/banner/docprofile3.webp" 
                                                    alt="Emily Rodriguez" 
                                                    width={88} 
                                                    height={86} 
                                                    priority 
                                                />
                                            </figure>
                                            <h4>Emily Rodriguez<span>March 19, 2022</span></h4>
                                            <p>I was skeptical about kinesio taping at first, but after my shoulder injury, it made a huge difference in my recovery. The support it provides while allowing full range of motion is amazing. I highly recommend it to anyone dealing with sports injuries!</p>
                                            <Link href={`/blog/${post.slug}`} className="reply-btn"><i className="icon-58"></i></Link>
                                        </div>
                                    </div>
                                    
                                    <div className="comment-form">
                                        <h3>Leave a Reply</h3>
                                        <form method="post" action={`/blog/${post.slug}`} className="default-form">
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
                                        <form method="post" action={`/blog/${post.slug}`}>
                                            <div className="form-group">
                                                <input type="search" name="search-field" placeholder="keywords" required/>
                                                <button type="submit">
                                                    <Image 
                                                        src="/assets/images/icons/icon-22.svg" 
                                                        alt="Blog post search button" 
                                                        width={20} 
                                                        height={20} 
                                                        priority 
                                                    />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    
                                    <div className="sidebar-widget category-widget mb_40">
                                        <div className="widget-title">
                                            <h3>Category</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="category-list clearfix">
                                                <li><Link href="/physiotherapy">Physiotherapy</Link></li>
                                                <li><Link href="/chiropractic-adjustments">Chiropractic Adjustments</Link></li>
                                                <li><Link href="/massage-therapy">Massage Therapy</Link></li>
                                                <li><Link href="/electrotherapy">Electrotherapy</Link></li>
                                                <li><Link href="/kinesio-taping">Kinesio Taping</Link></li>
                                                <li><Link href="/orthotics">Orthotics</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="sidebar-widget post-widget mb_40">
                                        <div className="widget-title">
                                            <h3>Latest News</h3>
                                        </div>
                                        <div className="post-inner">
                                            {latestPosts.map((latestPost: BlogPost) => (
                                                <div key={latestPost.id} className="post">
                                                    <figure className="post-thumb">
                                                        <Link href={`/blog/${latestPost.slug}`}>
                                                            <Image 
                                                                src={latestPost.image} 
                                                                alt={latestPost.title} 
                                                                width={100} 
                                                                height={101} 
                                                                priority 
                                                            />
                                                        </Link>
                                                    </figure>
                                                    <h3>
                                                        <Link href={`/blog/${latestPost.slug}`}>{latestPost.title}</Link>
                                                    </h3>
                                                    <ul className="post-info clearfix">
                                                        <li><i className="icon-59"></i>{latestPost.date}</li>
                                                        <li><i className="icon-60"></i><Link href={`/blog/${latestPost.slug}`}>{latestPost.author}</Link></li>
                                                    </ul>
                                                </div>
                                            ))}
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
