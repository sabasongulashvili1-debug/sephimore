"use client";
import { useEffect } from "react";

interface SiteManifestWidgetProps {
  layout: "banner" | "carousel";
  border?: "true" | "false";
  align?: "left" | "center" | "right";
  scale?: "1.0" | "1.2";
  theme?: "light-transparent" | "dark-transparent" | "light" | "dark";
}

export function SiteManifestWidget({ 
  layout, 
  border = "false",
  align = "left",
  scale = "1.0",
  theme = "light-transparent"
  
}: SiteManifestWidgetProps) {
  useEffect(() => {
    if (document.querySelector('script[src="https://sitemanifest.com/sitemanifest.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://sitemanifest.com/sitemanifest.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <sitemanifest-widget
      domain="sephimere.com"
      layout={layout}
      theme={theme}
      scale={scale}
      shadow="false"
      border={border}
      nav-bg="#000000"
      nav-color="#FFFFFF"
      nav-size="46"
      align={align}
    />
  );
}