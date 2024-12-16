"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { Hero as HeroTitle } from "../../../components/typography";
import Image from "next/image";

// Declare RealScout web components for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-advanced-search': any;
      'realscout-your-listings': any;
    }
  }
}

export default function Hero({ query }: { query: string }) {
  return (
    <>
      <div className={styles.img_container}>
        <Image
          src="/images/header-background.webp"
          alt="Picture of the author"
          fill
          style={{ objectFit: "cover" }}
        />

        <div className={styles.overlay} />

        <div className={styles.content}>
          <HeroTitle size="hero-lg" className={styles.title}>
            Your Los Angeles<br />
            Real Estate Expert
          </HeroTitle>

          {/* Advanced search with your styling */}
          <div className={styles.search_container}>
            <realscout-advanced-search 
              agent-encoded-id="QWdlbnQtMjY3MDQ2"
              className={styles.search_bar}
            />
          </div>
        </div>
      </div>

      <section className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.properties}>
            {/* Property listings with your styling */}
            <realscout-your-listings 
              agent-encoded-id="QWdlbnQtMjY3MDQ2"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale,For Rent,In Contract,Sold,Rented"
              property-types="SFR,MF,TC,LAL,MOBILE,OTHER"
              className={styles.listings}
            />
          </div>
        </div>
      </section>
    </>
  );
}
