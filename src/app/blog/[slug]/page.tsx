import Layout from "../../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../../components/sections/home/Cta";
import { fetchBlogBySlug, fetchBlogs, BlogItem } from "@/lib/api";
import { generateMetadata as genMeta, defaultSEO } from "@/utils/metadata";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

function formatDate(date: string | null): string {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  try {
    const blog = await fetchBlogBySlug(slug);
    return genMeta({
      ...defaultSEO,
      title: blog.meta_title || `${blog.title} | Midland Wellness Centre`,
      description: blog.meta_description || blog.excerpt || "",
      keywords: blog.meta_keywords || "",
      canonical: blog.canonical_url || `/blog/${slug}`,
    });
  } catch {
    return genMeta({
      ...defaultSEO,
      title: "Blog | Midland Wellness Centre",
    });
  }
}

export async function generateStaticParams() {
  try {
    const response = await fetchBlogs({ limit: 100 });
    return response.data.map((blog) => ({
      slug: blog.slug,
    }));
  } catch {
    return [];
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = params;
  let blog;
  let error = false;
  let latestPosts: BlogItem[] = [];

  try {
    blog = await fetchBlogBySlug(slug);
  } catch {
    error = true;
  }

  try {
    const response = await fetchBlogs({ limit: 100 });
    latestPosts = response.data.filter((b) => b.slug !== slug).slice(0, 3);
  } catch {
    latestPosts = [];
  }

  if (error || !blog) {
    return (
      <div className="boxed_wrapper">
        <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Blog Not Found">
          <section className="sec-pad centred">
            <div className="auto-container">
              <h2>Blog post not found</h2>
              <p>The article you are looking for does not exist.</p>
              <Link href="/blog" className="theme-btn btn-one mt_30">
                <span>Back to Blog</span>
              </Link>
            </div>
          </section>
        </Layout>
      </div>
    );
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
                    <Link href="/blog" className="theme-btn btn-one" style={{ width: "200px", padding: "12px 30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className="icon-21"></i>
                      Back to Blog
                    </Link>
                  </div>
                  <div className="news-block-one">
                    <div className="inner-box">
                      {blog.thumbnail && (
                        <figure className="image-box">
                          <Image
                            src={blog.thumbnail}
                            alt={blog.thumbnail_alt || blog.title}
                            width={856}
                            height={425}
                            priority
                          />
                        </figure>
                      )}
                      <div className="lower-content">
                        {blog.read_time && <span className="comment-box">{blog.read_time} min read</span>}
                        <h3>{blog.title}</h3>
                        <ul className="post-info clearfix">
                          <li><i className="icon-59"></i>{formatDate(blog.published_at || blog.created_at)}</li>
                          {blog.wehoware_blog_categories && (
                            <li><i className="icon-60"></i>{blog.wehoware_blog_categories.name}</li>
                          )}
                        </ul>
                        {blog.content && (
                          <div
                            className="blog-content"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {blog.tags && blog.tags.length > 0 && (
                    <div className="post-share-option mb_60">
                      <ul className="post-tags clearfix">
                        <li><h4>Tags:</h4></li>
                        {blog.tags.map((tag: string, index: number) => (
                          <li key={index}><Link href="/blog">{tag}</Link></li>
                        ))}
                      </ul>
                      {blog.allow_social_share && (
                        <ul className="post-share clearfix">
                          <li><h4>Share:</h4></li>
                          <li><Link href={`/blog/${blog.slug}`}><i className="fab fa-facebook-f"></i></Link></li>
                          <li><Link href={`/blog/${blog.slug}`}><i className="fab fa-twitter"></i></Link></li>
                          <li><Link href={`/blog/${blog.slug}`}><i className="fab fa-dribbble"></i></Link></li>
                        </ul>
                      )}
                    </div>
                  )}

                  {blog.related_services && blog.related_services.length > 0 && (
                    <div className="related-services mb_60">
                      <h3 className="mb_20">Related Services</h3>
                      <div className="row clearfix">
                        {blog.related_services.map((svc) => (
                          <div key={svc.id} className="col-lg-6 col-md-6 col-sm-12 mb_20">
                            <Link
                              href={`/services/${svc.slug}`}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "14px",
                                padding: "12px",
                                background: "#f7fafc",
                                borderRadius: "10px",
                                border: "1px solid #eef2f5",
                                color: "#1a2b3c",
                              }}
                            >
                              {svc.thumbnail && (
                                <Image src={svc.thumbnail} alt={svc.title} width={56} height={56} style={{ borderRadius: "8px", objectFit: "cover" }} />
                              )}
                              <span style={{ fontWeight: 600 }}>{svc.title}</span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {blog.faqs && blog.faqs.length > 0 && (
                    <div className="faq-section mb_30">
                      <h3 className="mb_20">Frequently Asked Questions</h3>
                      {blog.faqs
                        .sort((a, b) => a.display_order - b.display_order)
                        .map((faq) => (
                          <div key={faq.id} className="mb_20">
                            <h4 style={{ marginBottom: "8px" }}>{faq.question}</h4>
                            <p>{faq.answer}</p>
                          </div>
                        ))}
                    </div>
                  )}

                  {(blog.cta_heading || blog.cta_body) && (
                    <div
                      className="blog-cta mb_30 text-center"
                      style={{
                        background: "linear-gradient(135deg, #007acc 0%, #005a9e 100%)",
                        borderRadius: "10px",
                        color: "#fff",
                        padding: "40px",
                      }}
                    >
                      {blog.cta_heading && <h3 style={{ color: "#fff", marginBottom: "12px" }}>{blog.cta_heading}</h3>}
                      {blog.cta_body && <p style={{ marginBottom: "20px" }}>{blog.cta_body}</p>}
                      <Link href={blog.cta_button_url || "/contact-us"} className="theme-btn btn-two">
                        <span>{blog.cta_button_text || "Get Started"}</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="blog-sidebar">
                  {latestPosts.length > 0 && (
                    <div className="sidebar-widget post-widget mb_40">
                      <div className="widget-title">
                        <h3>Latest News</h3>
                      </div>
                      <div className="post-inner">
                        {latestPosts.map((post: BlogItem) => (
                          <div key={post.id} className="post">
                            {post.thumbnail && (
                              <figure className="post-thumb">
                                <Link href={`/blog/${post.slug}`}>
                                  <Image src={post.thumbnail} alt={post.thumbnail_alt || post.title} width={100} height={101} priority />
                                </Link>
                              </figure>
                            )}
                            <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                            <ul className="post-info clearfix">
                              <li><i className="icon-59"></i>{formatDate(post.published_at || post.created_at)}</li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

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
        <Cta />
      </Layout>
    </div>
  );
}
