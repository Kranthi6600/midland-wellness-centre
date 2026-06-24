import React from "react";
import Link from "next/link";

interface BreadcrumbProps {
  breadcrumbTitle: string;
  small?: boolean;
  bg?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbTitle, small, bg }) => {
  // Define different background images for different routes
  const getBackgroundImage = (title: string) => {
    switch (title) {
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
        return 'url(/assets/images/resource/staff1.webp)';
    }
  };

  const backgroundImage = bg ? `url(${bg})` : getBackgroundImage(breadcrumbTitle);

  return (
    <section className="page-title p_relative centred">
      <div className="bg-layer" style={{ backgroundImage: backgroundImage }}
      ></div>
      <div className="auto-container">
        <div className="content-box" style={{ padding: '20px 30px', borderRadius: '12px', maxWidth: '600px', position: 'absolute', bottom: '30px', right: '30px', background: 'rgba(255, 255, 255, 0.92)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)' }}>
          <h2 style={{ fontSize: small ? 'clamp(18px, 3.5vw, 30px)' : 'clamp(24px, 5vw, 48px)', marginBottom: 'clamp(8px, 2vw, 15px)', color: '#1a2b3c' }}>{breadcrumbTitle}</h2>
          <ul className="bread-crumb clearfix" style={{ fontSize: 'clamp(12px, 3vw, 16px)' }}>
            <li><Link href="/">Home</Link></li>
            {!small && (
              <li className="current-page" style={{
                color: 'var(--theme-color) !important',
                fontWeight: 'bold'
              }}>{breadcrumbTitle}</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
