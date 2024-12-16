"use client";

import React from "react";
import cn from "classnames";
import styles from "./latest-listings.module.css";
import { Heading } from "@/components/typography";
import Link from "next/link";

export default function LatestListings() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div>
            <Heading type="heading-3" className={styles.title}>
              Latest Property Listings
            </Heading>
            <div className={cn("paragraph-large", styles.subtitle)}>
              Discover the newest additions to our exclusive real estate
              portfolio.
            </div>
          </div>

          <Link href="/listings" className={cn("button", styles.button)}>
            View All Listings
          </Link>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.listings}>
            <realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjY3MDQ2" 
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
              listing-status="For Sale,For Rent,In Contract,Sold,Rented" 
              property-types="SFR,MF,TC,LAL,MOBILE,OTHER"
            ></realscout-office-listings>
          </div>
        </div>
      </div>
    </section>
  );
}
