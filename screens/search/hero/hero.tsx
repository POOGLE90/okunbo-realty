"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { Hero as HeroTitle } from "@/components/typography";
import Image from "next/image";
import SearchBar from "@/components/search-bar";
import { Listings } from "@/constants/mock";
import PropertyListing from "@/components/property-listing";

export default function Hero({ query }: { query: string }) {
  const [searchTerm, setSearchTerm] = React.useState(query || "");
  const [filteredListings, setFilteredListings] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (!searchTerm || searchTerm.trim() === "") {
      setFilteredListings([]);
      return;
    }

    const result = Listings.flatMap((listing: any) =>
      listing.items.filter((item: any) => {
        if (typeof item.address === "string") {
          return item.address.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return false;
      }),
    );

    setFilteredListings(result);
  }, [searchTerm]);

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
          Search Results
        </HeroTitle>

        <SearchBar
          placeholder="Enter an address, neighborhood, city or ZIP code"
          searchTerm={searchTerm}
          onSearchTermChange={(term) => {
            console.log("Search term changed to:", term);
            setSearchTerm(term);
          }}
        />
      </div>

      <section className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.properties}>
            {filteredListings.length > 0 ? (
              filteredListings.map((item) => (
                <PropertyListing key={item.id} item={item} />
              ))
            ) : (
              <p className={cn("paragraph-medium")}>No results found</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
