"use client";

import React from "react";
import Script from "next/script";

export default function RealScoutScript() {
  return (
    <Script
      src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
      type="module"
      strategy="afterInteractive"
    />
  );
}
