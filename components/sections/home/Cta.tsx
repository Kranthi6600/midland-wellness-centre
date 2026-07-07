"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Cta() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
        <section className="cta-section" style={{ marginBottom: '30px' }}>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="content-box">
                        <h2>Book Your Appointment Today</h2>
                        <p>Take the first step toward better health with a trusted wellness centre in Scarborough. Our team is ready to help you recover, heal, and achieve long-term wellness.</p>
                        <div className="support-box">
                            <div className="icon-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image 
                                    src="/assets/images/icons/icon-8.svg" 
                                    alt="Image" 
                                    width={34} 
                                    height={34} 
                                    priority 
                                    style={{
                                        borderRadius: '6px',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', fontWeight: '600', color: '#ffffff' }}>Call Now:<br />
                            <Link href="tel:+1 416-261-7246" style={{ textDecoration: 'none', color: '#ffffff' }}>+1 416-261-7246</Link>
                            <br />
                            <Link href="tel:+1 416-261-9813" style={{ textDecoration: 'none', color: '#ffffff' }}>+1 416-261-9813</Link>
                            <br />
                            <small style={{ fontSize: '14px', fontWeight: '400' }}>Wellness centre near you - physiotherapy clinic Scarborough, chiropractor near me Scarborough, massage therapy near me</small>
                            </span>
                        </div>
                    </div>
                    <figure className="image-layer">
                        <Image 
                            src="/assets/images/resource/ambulance.webp" 
                            alt="Image" 
                            width={576} 
                            height={303} 
                            priority 
                            style={{
                                borderRadius: '15px',
                                objectFit: 'cover'
                            }}
                        />
                    </figure>
                </div>
            </div>
        </section>
  );
}
