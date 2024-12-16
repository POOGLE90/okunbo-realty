"use client";

import React from "react";
import styles from "./listings.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import Image from "next/image";

// Declare RealScout web components for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-advanced-search': any;
      'realscout-office-listings': any;
    }
  }
}

const categories = [
  {
    id: 1,
    title: "Houses",
    image: "/images/properties/houses/123-serenity-lane.webp",
    url: "https://osazeokunbo.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yMjE5"
  },
  {
    id: 2,
    title: "Condos",
    image: "/images/properties/apartments/321-suburban-apartment.webp",
    url: "https://osazeokunbo.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yMjIw"
  },
  {
    id: 3,
    title: "Townhouses",
    image: "/images/properties/townhouses/123-modern-townhouse.webp",
    url: "https://osazeokunbo.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yMjIx"
  },
  {
    id: 4,
    title: "Multifamily",
    image: "/images/properties/apartments/789-downtown-loft.webp",
    url: "https://osazeokunbo.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yMjIy"
  },
  {
    id: 5,
    title: "Commercial",
    image: "/images/properties/commercial/downtown-office.webp",
    url: "https://osazeokunbo.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0yMjIz"
  },
];

export default function ListingsPage() {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.search_section}>
          <Heading type="heading-3" className={styles.title}>
            Find Your Perfect Home
          </Heading>

          <div className={styles.categories}>
            {categories.map((category) => (
              <a
                key={category.id}
                href={category.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.category}
              >
                <div className={styles.image_container}>
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 20vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.category_overlay}>
                  <div className={styles.category_title}>{category.title}</div>
                </div>
              </a>
            ))}
          </div>

          <div className={styles.search_widget}>
            <realscout-advanced-search 
              agent-encoded-id="QWdlbnQtMjY3MDQ2"
            />
          </div>
        </div>

        <div className={styles.listings_section}>
          <Heading type="heading-3" className={styles.title}>
            Available Properties
          </Heading>
          <div className={styles.listings_widget}>
            <realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjY3MDQ2" 
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
              listing-status="For Sale,For Rent,In Contract,Sold,Rented" 
              property-types="SFR,MF,TC,LAL,MOBILE,OTHER"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
