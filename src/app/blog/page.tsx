"use client";

import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../components/sections/home/Cta";
import { getBlogPosts, BlogPost } from "../../data/blogPosts";
import { useState } from "react";

export default function BlogPage() {
    const allBlogPosts = getBlogPosts();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(allBlogPosts);

    // Filter posts by category
    const filterByCategory = (category: string) => {
        if (category === 'all') {
            setFilteredPosts(allBlogPosts);
        } else {
            const filtered = allBlogPosts.filter(post => post.category.toLowerCase().includes(category.toLowerCase()));
            setFilteredPosts(filtered);
        }
        setSelectedCategory(category);
    };

    // Get unique categories
    const categories = ['all', ...new Set(allBlogPosts.map(post => post.category))];

    const displayPosts = selectedCategory ? filteredPosts : allBlogPosts;

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Blog">
                <section className="sidebar-page-container pt_120 pb_120">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="blog-grid-content">
                                    <div className="row clearfix">
                                        {displayPosts.map((post: BlogPost) => (
                                            <div key={post.id} className="col-lg-6 col-md-6 col-sm-12 news-block">
                                                <div className="news-block-one">
                                                    <div className="inner-box">
                                                        <figure className="image-box"><Link href={`/blog/${post.slug}`}><Image src={post.image} alt={post.title} width={416} height={287} priority /></Link></figure>
                                                        <div className="lower-content">
                                                            <span className="comment-box">{post.comments}Comment</span>
                                                            <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                                                            <ul className="post-info clearfix">
                                                                <li><i className="icon-59"></i>{post.date}</li>
                                                                <li><i className="icon-60"></i><Link href={`/blog/${post.slug}`}>{post.author}</Link></li>
                                                            </ul>
                                                            <p>{post.excerpt}</p>
                                                            <div className="link">
                                                                <Link href={`/blog/${post.slug}`}>Read More</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pagination-wrapper centred">
                                        <ul className="pagination clearfix">
                                            <li><Link href="/blog"><i className="icon-21"></i></Link></li>
                                            <li><Link href="/blog" className="current">01</Link></li>
                                            <li><Link href="/blog">02</Link></li>
                                            <li className="dotted"><Image src="/assets/images/icons/icon-21.svg" alt="Pagination separator dots" width={23} height={5} priority /></li>
                                            <li><Link href="/blog"><i className="icon-22"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="blog-sidebar">
                                    <div className="search-widget mb_40">
                                        <h3>Search Here</h3>
                                        <form method="post" action="/blog">
                                            <div className="form-group">
                                                <input type="search" name="search-field" placeholder="keywords" required/>
                                                <button type="submit"><Image src="/assets/images/icons/icon-22.svg" alt="Blog search button" width={20} height={20} priority /></button>
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
                                            {displayPosts.slice(0, 3).map((post: BlogPost) => (
                                                <div key={post.id} className="post">
                                                    <figure className="post-thumb"><Link href={`/blog/${post.slug}`}><Image src={post.image} alt={post.title} width={100} height={101} priority /></Link></figure>
                                                    <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                                                    <ul className="post-info clearfix">
                                                        <li><i className="icon-59"></i>{post.date}</li>
                                                        <li><i className="icon-60"></i><Link href={`/blog/${post.slug}`}>{post.author}</Link></li>
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="consulting-widget">
                                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/sidebar-1.jpg)" }}></div>
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
