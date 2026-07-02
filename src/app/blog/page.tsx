import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../components/sections/home/Cta";
import StickySidebar from "../../../components/elements/StickySidebar";
import { fetchBlogs, fetchBlogCategories, BlogItem, BlogCategory } from "@/lib/api";
import { generateMetadata as genMeta, defaultSEO } from "@/utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = genMeta({
    ...defaultSEO,
    title: "Blog | Midland Wellness Centre - Scarborough",
    description: "Read the latest articles on physiotherapy, chiropractic care, massage therapy, and wellness from the experts at Midland Wellness Centre.",
    keywords: "blog, wellness articles, physiotherapy tips, chiropractic, massage therapy, health",
    canonical: "/blog",
});

function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, "");
}

function truncateWords(text: string, wordLimit: number): string {
    const words = text.trim().split(/\s+/);
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
}

function formatDate(date: string | null): string {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default async function BlogPage() {
    let posts: BlogItem[] = [];
    let categories: BlogCategory[] = [];
    let listSchema: { item_list: object | null; collection_page: object | null } | undefined;

    try {
        const response = await fetchBlogs({ limit: 100 });
        posts = response?.data || [];
        listSchema = response?.schema;
    } catch {
        posts = [];
    }

    try {
        const catResponse = await fetchBlogCategories();
        categories = catResponse.data || [];
    } catch {
        categories = [];
    }

    const latestPosts = posts.slice(0, 3);

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Blog">
                {listSchema?.item_list && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema.item_list) }}
                    />
                )}
                {listSchema?.collection_page && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema.collection_page) }}
                    />
                )}
                <section className="sidebar-page-container pt_120 pb_120">
                    <div className="auto-container">
                        <StickySidebar
                            mainContent={
                                <div className="blog-grid-content">
                                    <div className="row clearfix">
                                        {posts.length === 0 ? (
                                            <div className="col-12 centred">
                                                <p>No blog posts available at the moment.</p>
                                            </div>
                                        ) : posts.map((post: BlogItem) => (
                                            <div key={post.id} className="col-lg-6 col-md-6 col-sm-12 news-block">
                                                <div className="news-block-one">
                                                    <div className="inner-box">
                                                        {post.thumbnail && (
                                                            <figure className="image-box"><Link href={`/blog/${post.slug}`}><Image src={post.thumbnail} alt={post.thumbnail_alt || post.title} width={416} height={287} priority /></Link></figure>
                                                        )}
                                                        <div className="lower-content">
                                                            {post.read_time && <span className="comment-box">{post.read_time} min read</span>}
                                                            <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                                                            <ul className="post-info clearfix">
                                                                <li><i className="icon-59"></i>{formatDate(post.published_at || post.created_at)}</li>
                                                                {post.wehoware_blog_categories && (
                                                                    <li><i className="icon-60"></i>{post.wehoware_blog_categories.name}</li>
                                                                )}
                                                            </ul>
                                                            <p>{post.excerpt ? truncateWords(stripHtml(post.excerpt), 20) : ""}</p>
                                                            <div className="link">
                                                                <Link href={`/blog/${post.slug}`}>Read More</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }
                            sidebarTop={
                                <div className="blog-sidebar">
                                    {categories.length > 0 && (
                                        <div className="sidebar-widget category-widget mb_40">
                                            <div className="widget-title">
                                                <h3>Category</h3>
                                            </div>
                                            <div className="widget-content">
                                                <ul className="category-list clearfix">
                                                    {categories.map((cat: BlogCategory) => (
                                                        <li key={cat.id}><Link href="/blog">{cat.name}</Link></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                    {latestPosts.length > 0 && (
                                        <div className="sidebar-widget post-widget mb_40">
                                            <div className="widget-title">
                                                <h3>Latest News</h3>
                                            </div>
                                            <div className="post-inner">
                                                {latestPosts.map((post: BlogItem) => (
                                                    <div key={post.id} className="post">
                                                        {post.thumbnail && (
                                                            <figure className="post-thumb"><Link href={`/blog/${post.slug}`}><Image src={post.thumbnail} alt={post.thumbnail_alt || post.title} width={100} height={101} priority /></Link></figure>
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
                                </div>
                            }
                            sidebarBottom={
                                <div className="consulting-widget sidebar-widget" style={{ padding: "40px 30px", borderRadius: "16px", background: "linear-gradient(135deg, #007acc 0%, #005a9e 100%)", color: "#fff", textAlign: "center" }}>
                                    <div
                                        style={{
                                            width: "64px",
                                            height: "64px",
                                            borderRadius: "50%",
                                            background: "rgba(255,255,255,0.15)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            margin: "0 auto 20px",
                                            fontSize: "28px",
                                        }}
                                    >
                                        <i className="icon-14" style={{ color: "#fff" }} />
                                    </div>
                                    <h3 style={{ color: "#fff", fontSize: "22px", lineHeight: "1.3", marginBottom: "15px" }}>
                                        Get Free Consultations Today!
                                    </h3>
                                    <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
                                        Speak with our expert team and receive professional advice on your next project. No obligation, no cost. Schedule your consultation now!
                                    </p>
                                    <Link
                                        href="/contact-us"
                                        className="theme-btn-one"
                                        style={{
                                            background: "#fff",
                                            color: "#007acc",
                                            display: "inline-block",
                                            padding: "12px 28px",
                                            borderRadius: "8px",
                                            fontWeight: 600,
                                            textDecoration: "none",
                                            transition: "all 300ms ease",
                                        }}
                                    >
                                        Get a Quote
                                    </Link>
                                </div>
                            }
                        />
                    </div>
                </section>
                <Cta />
            </Layout>
        </div>
    )
}
