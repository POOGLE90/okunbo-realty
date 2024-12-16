"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { Hero as HeroTitle } from "@/components/typography";
import Image from "next/image";

// Declare RealScout web components for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-advanced-search': any;
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

export default function Hero() {
  return (
    <>
      <div className={styles.img_container}>
        <Image
          src="/images/header-background.webp"
          alt="Los Angeles Real Estate"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
        />

        <div className={styles.overlay} />

        <HeroTitle size="hero-lg" className={styles.title}>
          Your Los Angeles <br />
          Real Estate Expert
        </HeroTitle>
      </div>

      <section className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.content}>
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
            
            <realscout-advanced-search 
              agent-encoded-id="QWdlbnQtMjY3MDQ2"
              className={styles.search}
            />
          </div>
        </div>
      </section>
    </>
  );
}
