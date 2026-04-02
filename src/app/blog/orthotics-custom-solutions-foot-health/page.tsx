import Layout from "../../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../../components/sections/home/Cta";
import { getBlogPostBySlug, getBlogPosts, BlogPost } from "../../../data/blogPosts";

export default function OrthoticsBlogPost() {
    const post = getBlogPostBySlug('orthotics-custom-solutions-foot-health');
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
                                                    <h2>The Foundation of Your Body's Health</h2>
                                                    <span className="designation">{post.author}</span>
                                                </blockquote>
                                                
                                                <div className="benefits-section mt_50">
                                                    <h4>Key Benefits of Custom Orthotics:</h4>
                                                    <ul className="benefits-list">
                                                        <li><strong>Pain Relief:</strong> Reduce foot, ankle, knee, and back pain</li>
                                                        <li><strong>Improved Posture:</strong> Correct alignment from the ground up</li>
                                                        <li><strong>Enhanced Performance:</strong> Better stability and athletic performance</li>
                                                        <li><strong>Injury Prevention:</strong> Reduce risk of future injuries</li>
                                                        <li><strong>Customized Support:</strong> Tailored to your unique foot structure</li>
                                                    </ul>
                                                </div>

                                                <div className="assessment-process mt_50">
                                                    <h4>Our Comprehensive Assessment:</h4>
                                                    <p>We use advanced technology to create the perfect orthotics for your needs:</p>
                                                    <ol className="treatment-steps">
                                                        <li><strong>Gait Analysis:</strong> Detailed evaluation of your walking pattern</li>
                                                        <li><strong>Pressure Mapping:</strong> Identify high-pressure areas on your feet</li>
                                                        <li><strong>Foot Structure Analysis:</strong> Assess arches, pronation, and alignment</li>
                                                        <li><strong>Custom Fabrication:</strong> Create orthotics specific to your needs</li>
                                                    </ol>
                                                </div>

                                                <div className="orthotics-types mt_50">
                                                    <h4>Types of Custom Orthotics We Offer:</h4>
                                                    <div className="orthotics-grid">
                                                        <div className="orthotic-type">
                                                            <h5>Sport Orthotics</h5>
                                                            <p>Enhanced performance and injury prevention for athletes</p>
                                                        </div>
                                                        <div className="orthotic-type">
                                                            <h5>Dress Orthotics</h5>
                                                            <p>Discreet support for professional and formal footwear</p>
                                                        </div>
                                                        <div className="orthotic-type">
                                                            <h5>Medical Orthotics</h5>
                                                            <p>Therapeutic support for specific medical conditions</p>
                                                        </div>
                                                        <div className="orthotic-type">
                                                            <h5>Children's Orthotics</h5>
                                                            <p>Proper development support for growing feet</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="conditions-treated mt_50">
                                                    <h4>Conditions We Treat:</h4>
                                                    <div className="conditions-grid">
                                                        <div className="condition-item">
                                                            <h5>Plantar Fasciitis</h5>
                                                            <p>Relieve heel pain and inflammation</p>
                                                        </div>
                                                        <div className="condition-item">
                                                            <h5>Flat Feet</h5>
                                                            <p>Provide arch support and proper alignment</p>
                                                        </div>
                                                        <div className="condition-item">
                                                            <h5>Bunions</h5>
                                                            <p>Reduce pressure and prevent progression</p>
                                                        </div>
                                                        <div className="condition-item">
                                                            <h5>Diabetic Foot Care</h5>
                                                            <p>Specialized care for diabetic patients</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="call-to-action mt_50">
                                                    <h4>Ready for Better Foot Health?</h4>
                                                    <p>Don't let foot problems affect your quality of life. Our custom orthotics can provide the relief and support you need for optimal comfort and mobility.</p>
                                                    <Link href="/contact-us" className="theme-btn btn-two">
                                                        <span>Schedule Assessment</span>
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
                                        <p>Dr. James Wilson is a specialist in foot and ankle biomechanics with extensive experience in creating custom orthotics. He focuses on helping patients achieve optimal foot health through personalized care and advanced orthotic technology.</p>
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
                                                    alt="Jennifer Adams" 
                                                    width={88} 
                                                    height={86} 
                                                    priority 
                                                />
                                            </figure>
                                            <h4>Jennifer Adams<span>March 19, 2022</span></h4>
                                            <p>The custom orthotics I received have completely eliminated my plantar fasciitis pain. Dr. Wilson's thorough assessment ensured perfect fit, and I can now walk without discomfort for the first time in years!</p>
                                            <Link href={`/blog/${post.slug}`} className="reply-btn"><i className="icon-58"></i></Link>
                                        </div>
                                        <div className="comment replay-comment">
                                            <figure className="thumb-box">
                                                <Image 
                                                    src="/assets/images/banner/docprofile3.webp" 
                                                    alt="Tom Mitchell" 
                                                    width={88} 
                                                    height={86} 
                                                    priority 
                                                />
                                            </figure>
                                            <h4>Tom Mitchell<span>March 19, 2022</span></h4>
                                            <p>As a runner, I've struggled with foot pain for years. The custom orthotics have improved my running form and eliminated my knee pain. Worth every penny!</p>
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
                                        <Link href="/contact-us" className="theme-btn btn-two"><span>get a quote</span></Link>
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
