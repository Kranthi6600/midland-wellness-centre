import React from "react";
import Link from "next/link";

interface BreadcrumbProps {
  breadcrumbTitle: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbTitle }) => {
  // Define different background images for different routes
  const getBackgroundImage = (title: string) => {
    switch(title) {
      case 'Blog':
        return 'url(/assets/images/banner/breadcrumb10.png)';
      case 'Blog Details':
        return 'url(/assets/images/banner/breadcrumb9.png)';
      case 'About':
        return 'url(/assets/images/banner/breadcrumb7.jpg)';
      case 'Contact':
        return 'url(/assets/images/banner/breadcrumb6.jpg)';
      case 'Departments':
        return 'url(/assets/images/banner/breadcrumb5.jpg)';
      case 'Appointments':
        return 'url(/assets/images/banner/breadcrumb4.jpg)';
      case 'Physiotherapy':
        return 'url(/assets/images/banner/breadcrumb3.jpg)';
      case 'Massage Therapy':
        return 'url(/assets/images/banner/breadcrumb2.jpg)';
      case 'Orthotics':
        return 'url(/assets/images/banner/breadcrumb1.jpg)';
      case 'Chiropractic Adjustments':
        return 'url(/assets/images/banner/breadcrumb8.jpg)';
      case 'Electrotherapy':
        return 'url(/assets/images/banner/breadcrumb9.png)';
      case 'Kinesio Taping':
        return 'url(/assets/images/banner/breadcrumb11.png)';
      default:
        return 'url(/assets/images/resource/staff1.png)';
    }
  };

  return (
    <section className="page-title p_relative centred">
            <div className="bg-layer" style={{ backgroundImage: getBackgroundImage(breadcrumbTitle) }}
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
