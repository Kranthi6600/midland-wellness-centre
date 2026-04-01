"use client";
import { useEffect, useState } from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import Breadcrumb from "./Breadcrumb";
import SearchPopup from "./SearchPopup";
import SidebarPopup from "./SidebarPopup";
import Header1 from "./header/Header1";
import Footer1 from "./footer/Footer1";
import { Analytics } from "@vercel/analytics/next";
import { LayoutProps } from "@/types";

export default function Layout({
  headerStyle = 1,
  footerStyle = 1,
  breadcrumbTitle,
  children,
  wrapperCls,
}: LayoutProps) {
  const { isScrolled } = useScrollPosition(100);
  const { isOpen: isMobileMenu, toggleMobileMenu, closeMobileMenu } = useMobileMenu();

  // Search Popup
  const [isPopup, setPopup] = useState(false);
  const handlePopup = () => setPopup((p) => !p);

  // Sidebar Popup
  const [isSidebar, setSidebar] = useState(false);
  const handleSidebar = () => setSidebar((s) => !s);

  useEffect(() => {
    (async () => {
      // @ts-expect-error: WOW types not provided
      const { WOW } = await import("wowjs");
      const wow = new WOW({ live: false });
      wow.init();
    })();

    return () => {
      closeMobileMenu();
    };
  }, [closeMobileMenu]);

  const renderHeader = () => {
    const headerProps = {
      scroll: isScrolled,
      isMobileMenu,
      handleMobileMenu: toggleMobileMenu,
      handlePopup,
      isSidebar,
      handleSidebar,
    };
    switch (headerStyle) {
      case 1:
      case 3:
        return <Header1 {...headerProps} />
      default:
        return null;
    }
  };

  const renderFooter = () => {
    switch (footerStyle) {
      case 1:
        return <Footer1 />;
      default:
        return null;
    }
  };

  return (
    <>
      <DataBg />
      <div className={`page-wrapper ${wrapperCls || ""}`} id="top">
        {renderHeader()}
        
        {/* Vercel Analytics */}
        <Analytics />
        
        {/* Popups */}
        <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />
        <SidebarPopup isOpen={isSidebar} onClose={handleSidebar} />

        {/* Breadcrumb */}
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

        {/* Page Content */}
        {children}

        {renderFooter()}
      </div>
      <BackToTop scroll={isScrolled} />
    </>
  );
}
