"use client";

import { useState, useEffect } from "react";

export default function ToggleBodyClass() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Always keep LTR direction - RTL functionality disabled
    document.body.classList.remove("rtl");
  }, []);

  return (
    <div className="page_direction" onClick={() => setIsActive(!isActive)}>
      <div className="demo-rtl"><button className="rtl" disabled><span>RTL</span><span>Ltr</span></button></div>
    </div>
  )
}