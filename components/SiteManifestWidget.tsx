"use client";
import { useEffect } from "react";

export function SiteManifestWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sitemanifest.com/sitemanifest.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <sitemanifest-widget
      domain="sephimere.com"
      layout="banner"
      theme="light-transparent"
      scale="1.0"
      shadow="false"
      border="false"
      nav-bg="#000000"
      nav-color="#FFFFFF"
      nav-size="46"
      align="left"
    />
  );
}