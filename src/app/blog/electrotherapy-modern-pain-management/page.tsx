import Layout from "../../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../../components/sections/home/Cta";
import { getBlogPostBySlug, getBlogPosts, BlogPost } from "../../../data/blogPosts";

export default function ElectrotherapyBlogPost() {
    const post = getBlogPostBySlug('electrotherapy-modern-pain-management');
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
                                                    <h2>Advanced Technology for Pain-Free Living</h2>
                                                    <span className="designation">{post.author}</span>
                                                </blockquote>
                                                
                                                <div className="benefits-section mt_50">
                                                    <h4>Key Benefits of Electrotherapy:</h4>
                                                    <ul className="benefits-list">
                                                        <li><strong>Drug-Free Pain Relief:</strong> Natural pain management without medications</li>
                                                        <li><strong>Accelerated Healing:</strong> Enhanced tissue repair and regeneration</li>
                                                        <li><strong>Reduced Inflammation:</strong> Decrease swelling and promote recovery</li>
                                                        <li><strong>Muscle Stimulation:</strong> Improve strength and prevent atrophy</li>
                                                        <li><strong>Non-Invasive Treatment:</strong> Safe and comfortable therapeutic approach</li>
                                                    </ul>
                                                </div>

                                                <div className="treatment-modalities mt_50">
                                                    <h4>Our Advanced Electrotherapy Modalities:</h4>
                                                    <div className="modalities-grid">
                                                        <div className="modality-item">
                                                            <h5>TENS Therapy</h5>
                                                            <p>Transcutaneous electrical nerve stimulation for pain relief</p>
                                                        </div>
                                                        <div className="modality-item">
                                                            <h5>EMS Stimulation</h5>
                                                            <p>Electrical muscle stimulation for strength building</p>
                                                        </div>
                                                        <div className="modality-item">
                                                            <h5>Ultrasound Therapy</h5>
                                                            <p>Deep tissue healing through sound waves</p>
                                                        </div>
                                                        <div className="modality-item">
                                                            <h5>Interferential Current</h5>
                                                            <p>Deep tissue penetration for chronic pain</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="treatment-process mt_50">
                                                    <h4>Our Electrotherapy Approach:</h4>
                                                    <p>We use state-of-the-art equipment and evidence-based protocols:</p>
                                                    <ol className="treatment-steps">
                                                        <li><strong>Comprehensive Assessment:</strong> Evaluate your condition and determine optimal modality</li>
                                                        <li><strong>Personalized Protocol:</strong> Customize treatment parameters for your needs</li>
                                                        <li><strong>Monitored Sessions:</strong> Ensure comfort and effectiveness throughout treatment</li>
                                                        <li><strong>Progressive Treatment:</strong> Adjust intensity as your condition improves</li>
                                                    </ol>
                                                </div>

                                                <div className="conditions-treated mt_50">
                                                    <h4>Conditions We Successfully Treat:</h4>
                                                    <div className="conditions-grid">
                                                        <div className="condition-item">
                                                            <h5>Chronic Pain</h5>
                                                            <p>Long-term pain management for various conditions</p>
                                                        </div>
                                                        <div className="condition-item">
                                                            <h5>Sports Injuries</h5>
                                                            <p>Accelerated recovery from athletic injuries</p>
                                                        </div>
                                                        <div className="condition-item">
                                                            <h5>Post-Surgical Pain</h5>
                                                            <p>Pain management following surgical procedures</p>
                                                        </div>
                                                        <div className="condition-item">
                                                            <h5>Neuropathic Pain</h5>
                                                            <p>Specialized treatment for nerve-related pain</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="safety-info mt_50">
                                                    <h4>Safety and Comfort:</h4>
                                                    <p>Your safety and comfort are our top priorities. Our electrotherapy treatments feature:</p>
                                                    <ul className="safety-list">
                                                        <li><strong>Painless Application:</strong> Gentle sensation during treatment</li>
                                                        <li><strong>Adjustable Intensity:</strong> Customized to your comfort level</li>
                                                        <li><strong>Professional Supervision:</strong> Always monitored by trained therapists</li>
                                                        <li><strong>Clinically Proven:</strong> Evidence-based treatment protocols</li>
                                                    </ul>
                                                </div>

                                                <div className="call-to-action mt_50">
                                                    <h4>Ready for Drug-Free Pain Relief?</h4>
                                                    <p>Experience the healing power of advanced electrotherapy. Our expert therapists are ready to help you achieve pain relief and improved function through cutting-edge electrical stimulation treatments.</p>
                                                    <Link href="/contact" className="theme-btn btn-two">
                                                        <span>Schedule Treatment</span>
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
                                        <p>Dr. Michael Chen is a specialist in electrotherapy and pain management with extensive experience in advanced electrical stimulation techniques. He focuses on providing drug-free pain relief and promoting natural healing through cutting-edge therapeutic modalities.</p>
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
                                                    alt="Robert Chang" 
                                                    width={88} 
                                                    height={86} 
                                                    priority 
                                                />
                                            </figure>
                                            <h4>Robert Chang<span>March 19, 2022</span></h4>
                                            <p>The electrotherapy treatments have been amazing for my chronic back pain. After years of trying different approaches, the electrical stimulation finally provided lasting relief. Dr. Chen's expertise is evident in every session.</p>
                                            <Link href={`/blog/${post.slug}`} className="reply-btn"><i className="icon-58"></i></Link>
                                        </div>
                                        <div className="comment replay-comment">
                                            <figure className="thumb-box">
                                                <Image 
                                                    src="/assets/images/banner/docprofile3.webp" 
                                                    alt="Amanda Foster" 
                                                    width={88} 
                                                    height={86} 
                                                    priority 
                                                />
                                            </figure>
                                            <h4>Amanda Foster<span>March 19, 2022</span></h4>
                                            <p>I was skeptical about electrotherapy at first, but the results speak for themselves. The treatments are comfortable, painless, and have significantly reduced my nerve pain. I finally have hope for a pain-free life!</p>
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
