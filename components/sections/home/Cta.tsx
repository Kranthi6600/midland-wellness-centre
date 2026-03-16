import Image from "next/image";
import Link from "next/link";
export default function Cta() {
  return (
        <section className="cta-section">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="content-box">
                        <h2>Need a Doctor for Check-up? Call for an Emergency Service!</h2>
                        <div className="support-box">
                            <div className="icon-box">
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
                            <span>Call: <Link href="tel:112345615523">+1 (123)-456-155-23</Link></span>
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
