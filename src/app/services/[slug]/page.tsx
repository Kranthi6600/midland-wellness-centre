import Layout from "../../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import StickySidebar from "../../../../components/elements/StickySidebar";
import { fetchServiceBySlug, fetchServices } from "@/lib/api";
import { generateMetadata as genMeta, defaultSEO } from "@/utils/metadata";
import type { Metadata } from "next";

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const service = await fetchServiceBySlug(slug);
    return genMeta({
      ...defaultSEO,
      title: service.meta_title || `${service.title} | Midland Wellness Centre`,
      description: service.meta_description || service.description || "",
      keywords: service.meta_keywords || "",
      canonical: service.canonical_url || `/services/${slug}`,
    });
  } catch {
    return genMeta({
      ...defaultSEO,
      title: "Service | Midland Wellness Centre",
    });
  }
}

export async function generateStaticParams() {
  try {
    const response = await fetchServices({ limit: 100 });
    return response.data.map((service) => ({
      slug: service.slug,
    }));
  } catch {
    return [];
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  let service;
  let error = false;
  let otherServices: Awaited<ReturnType<typeof fetchServices>>["data"] = [];

  try {
    service = await fetchServiceBySlug(slug);
  } catch {
    error = true;
  }

  try {
    const response = await fetchServices({ limit: 100 });
    otherServices = response.data.filter((s) => s.slug !== slug);
  } catch {
    otherServices = [];
  }

  if (error || !service) {
    return (
      <div className="boxed_wrapper">
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Service Not Found">
          <section className="sec-pad centred">
            <div className="auto-container">
              <h2>Service not found</h2>
              <p>The service you are looking for does not exist.</p>
              <Link href="/services" className="theme-btn-one mt_30">
                View All Services
              </Link>
            </div>
          </section>
        </Layout>
      </div>
    );
  }

  const fallbackImage = "/assets/images/service/physiotherapy2.webp";

  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={service.title} breadcrumbSmall>
        <section className="service-details sec-pad">
          <div className="auto-container">
            <StickySidebar
              mainContent={
                <div className="service-details-content">
                  {service.thumbnail && (
                    <figure className="image-box mb_30">
                      <Image
                        src={service.thumbnail}
                        alt={service.thumbnail_alt || service.title}
                        width={770}
                        height={450}
                        style={{ borderRadius: "10px", objectFit: "cover", width: "100%", height: "auto" }}
                      />
                    </figure>
                  )}

                  {service.description && (
                    <div className="text mb_30">
                      <p style={{ fontSize: "18px", lineHeight: "1.7" }}>{stripHtml(service.description)}</p>
                    </div>
                  )}

                  {service.content && (
                    <div
                      className="text mb_30"
                      dangerouslySetInnerHTML={{ __html: service.content }}
                    />
                  )}

                  {service.faqs && service.faqs.length > 0 && (
                    <div className="faq-section mb_30">
                      <h3 className="mb_20">Frequently Asked Questions</h3>
                      <div className="accordion-box">
                        {service.faqs.map((faq, index) => (
                          <div className="accordion-item" key={faq.id}>
                            <div className="accordion-title">
                              <h4>{faq.question}</h4>
                            </div>
                            <div className="accordion-content">
                              <p>{faq.answer}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              }
              sidebarTop={
                <div className="service-sidebar">
                  {otherServices.length > 0 && (
                    <div
                      className="sidebar-widget category-widget mb_40"
                      style={{
                        background: "#fff",
                        borderRadius: "12px",
                        padding: "26px 24px",
                        boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.06)",
                      }}
                    >
                      <div
                        className="widget-title mb_20"
                        style={{
                          borderBottom: "2px solid #f0f4f7",
                          paddingBottom: "14px",
                          marginBottom: "20px",
                        }}
                      >
                        <h3 style={{ display: "flex", alignItems: "center", gap: "10px", margin: 0 }}>
                          <span
                            style={{
                              display: "inline-block",
                              width: "4px",
                              height: "22px",
                              background: "#007acc",
                              borderRadius: "4px",
                            }}
                          />
                          Other Services
                        </h3>
                      </div>
                      <div className="widget-content">
                        <ul className="clearfix" style={{ margin: 0, padding: 0, listStyle: "none" }}>
                          {otherServices.map((s) => (
                            <li key={s.id} style={{ marginBottom: "14px" }}>
                              <Link
                                href={`/services/${s.slug}`}
                                className="other-service-card"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "14px",
                                  padding: "12px",
                                  background: "#f7fafc",
                                  borderRadius: "10px",
                                  color: "#1a2b3c",
                                  textDecoration: "none",
                                  border: "1px solid #eef2f5",
                                  transition: "all 300ms ease",
                                }}
                              >
                                <span
                                  style={{
                                    flexShrink: 0,
                                    width: "56px",
                                    height: "56px",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    background: "#e8eef3",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  {s.thumbnail ? (
                                    <Image
                                      src={s.thumbnail}
                                      alt={s.thumbnail_alt || s.title}
                                      width={56}
                                      height={56}
                                      style={{ objectFit: "cover", width: "56px", height: "56px" }}
                                    />
                                  ) : (
                                    <i className="icon-18" style={{ fontSize: "22px", color: "#007acc" }} />
                                  )}
                                </span>
                                <span style={{ flex: 1, minWidth: 0 }}>
                                  <span
                                    style={{
                                      display: "block",
                                      fontWeight: 600,
                                      fontSize: "15px",
                                      lineHeight: 1.3,
                                      marginBottom: "3px",
                                    }}
                                  >
                                    {s.title}
                                  </span>
                                  {s.description && (
                                    <span
                                      style={{
                                        display: "-webkit-box",
                                        WebkitLineClamp: 1,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                        fontSize: "12.5px",
                                        color: "#7a8a99",
                                        lineHeight: 1.4,
                                      }}
                                    >
                                      {stripHtml(s.description)}
                                    </span>
                                  )}
                                </span>
                                <i className="icon-7" style={{ color: "#007acc", flexShrink: 0 }} />
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/services"
                          style={{
                            display: "block",
                            textAlign: "center",
                            marginTop: "6px",
                            padding: "10px",
                            fontWeight: 600,
                            fontSize: "14px",
                            color: "#007acc",
                          }}
                        >
                          View All Services
                        </Link>
                      </div>
                    </div>
                  )}

                  {(service.cta_heading || service.cta_body) && (
                    <div className="sidebar-widget cta-widget p_relative mb_40">
                      <div
                        className="widget-content text-center p_40"
                        style={{
                          background: "linear-gradient(135deg, #007acc 0%, #005a9e 100%)",
                          borderRadius: "10px",
                          color: "#fff",
                        }}
                      >
                        {service.cta_heading && (
                          <h3 className="mb_15" style={{ color: "#fff" }}>
                            {service.cta_heading}
                          </h3>
                        )}
                        {service.cta_body && (
                          <p className="mb_20">{service.cta_body}</p>
                        )}
                        <Link
                          href={service.cta_button_url || "/contact"}
                          className="theme-btn-one"
                          style={{
                            background: "#fff",
                            color: "#007acc",
                          }}
                        >
                          {service.cta_button_text || "Book Now"}
                        </Link>
                      </div>
                    </div>
                  )}

                  {service.tags && service.tags.length > 0 && (
                    <div className="sidebar-widget tags-widget mb_40">
                      <div className="widget-title mb_20">
                        <h3>Tags</h3>
                      </div>
                      <div className="widget-content">
                        <div className="tags-list clearfix">
                          {service.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="tag-item"
                              style={{
                                display: "inline-block",
                                padding: "6px 14px",
                                background: "#f5f8fa",
                                borderRadius: "20px",
                                fontSize: "13px",
                                margin: "0 6px 6px 0",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              }
              sidebarBottom={
                <div className="sidebar-widget consultation-widget mb_40">
                  <div
                    className="widget-content text-center p_40"
                    style={{
                      background: "linear-gradient(135deg, #007acc 0%, #005a9e 100%)",
                      borderRadius: "16px",
                      color: "#fff",
                      padding: "40px 30px",
                      boxShadow: "0px 10px 40px rgba(0, 122, 204, 0.25)",
                    }}
                  >
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
                    <h3 className="mb_15" style={{ color: "#fff", fontSize: "22px", lineHeight: "1.3" }}>
                      Get Free Consultations Today!
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
                      Speak with our expert team and receive professional advice on your next project. No obligation, no cost. Schedule your consultation now!
                    </p>
                    <Link
                      href="/contact"
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
                </div>
              }
            />
          </div>
        </section>
      </Layout>
    </div>
  );
}
