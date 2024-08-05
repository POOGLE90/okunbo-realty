import React from "react";
import styles from "./related-properties.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import { Listings } from "@/constants/mock";
import PropertyListing from "@/components/property-listing";

interface RelatedPropertiesProps {
  item: any;
}

export default function RelatedProperties({ item }: RelatedPropertiesProps) {
  const allListings = Listings.flatMap(
    (listingCategory) => listingCategory.items,
  );

  const filteredListings = allListings.filter(
    (listing) => listing.id !== item.id && listing.category === item.category,
  );

  // Limit to 3 related listings
  const relatedListings = filteredListings.slice(0, 3);

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <Heading type="heading-3">Related Properties</Heading>

          <div className={cn("paragraph-large", styles.subtitle)}>
            Explore other exceptional properties within our network that share
            the same serene environment and modern design philosophy.
          </div>
        </div>

        <div className={styles.properties}>
          {relatedListings.map((listing) => (
            <PropertyListing key={listing.id} item={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
