"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { Heading, Hero as HeroTitle } from "@/components/typography";
import Image from "next/image";
import SearchBar from "@/components/search-bar";

export default function Hero() {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <>
      <div className={styles.img_container}>
        <Image
          src="/images/header-background.webp"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />

        <div className={styles.overlay} />

        <HeroTitle size="hero-lg" className={styles.title}>
          Find Your Next <br />
          Home Sweet Home.
        </HeroTitle>

        <SearchBar
          placeholder="Enter an address, neighborhood, city or ZIP code"
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
        />
      </div>

      <section className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.content}>
            <Heading type="heading-3">
              Find your dream home with our curated listings and expert
              guidance.
            </Heading>

            <div className={styles.stack}>
              <div className={styles.card}>
                <div className={cn("paragraph-large", styles.card_subtitle)}>
                  Property Investments
                </div>
                <div className={cn("heading-3")}>$1B+</div>
              </div>

              <div className={styles.card}>
                <Image
                  src="/images/intro.webp"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
