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
                        <h2>Expert Physiotherapy & Pain Relief in Scarborough - Book Today!</h2>
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
                            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', fontWeight: '600', color: '#ffffff' }}>Book Your Physiotherapy Appointment:<br />
                            <Link href="tel:+41 416-261-7246" style={{ textDecoration: 'none', color: '#ffffff' }}>+41 416-261-7246</Link>
                            <br />
                            <Link href="tel:+41 416-261-9813" style={{ textDecoration: 'none', color: '#ffffff' }}>+41 416-261-9813</Link>
                            <br />
                            <small style={{ fontSize: '14px', fontWeight: '400' }}>Walk-ins welcome for sports injuries & pain management. Affordable massage therapy in Scarborough. How often should you get massage therapy? Contact us today!</small>
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
