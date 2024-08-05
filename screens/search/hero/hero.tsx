"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { Hero as HeroTitle } from "@/components/typography";
import Image from "next/image";
import SearchBar from "@/components/search-bar";
import { Listings } from "@/constants/mock";
import PropertyListing from "@/components/property-listing";
import { useSearch } from "@/context/search-context";

export default function Hero() {
  const { searchTerm, setSearchTerm } = useSearch();
  const [filteredListings, setFilteredListings] = React.useState([]);

  React.useEffect(() => {
    // Filter and flatten the listings based on address
    const result = Listings.flatMap((listing) =>
      listing.items.filter((item) =>
        item.address.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );

    console.log("Filtered listings:", result);
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
          onSearchTermChange={setSearchTerm}
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
              <p>No results found</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
