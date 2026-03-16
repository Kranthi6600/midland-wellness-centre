import React from "react";
import Link from "next/link";

interface BreadcrumbProps {
  breadcrumbTitle: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbTitle }) => {
  return (

    <section className="page-title p_relative centred">
            <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/resource/staff1.png)" }}
      ></div>
            <div className="auto-container">
                <div className="content-box" style={{padding: '20px', borderRadius: '10px', maxWidth: '600px', margin: '0 auto', position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)' }}>
                    <h1>{breadcrumbTitle}</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link href="/">Home</Link></li>
                        <li>{breadcrumbTitle}</li>
                    </ul>
                </div>
            </div>
        </section>
  );
};

export default Breadcrumb;
