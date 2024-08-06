import React from "react";
import cn from "classnames";
import styles from "./categories.module.css";
import { Heading } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Houses",
    image: "/images/properties/houses/123-serenity-lane.webp",
  },
  {
    id: 2,
    title: "Townhouses",
    image: "/images/properties/townhouses/123-modern-townhouse.webp",
  },
  {
    id: 3,
    title: "Condos",
    image: "/images/properties/apartments/321-suburban-apartment.webp",
  },
  {
    id: 4,
    title: "Villas",
    image: "/images/properties/villas/luxury-estate-villa.webp",
  },
  {
    id: 5,
    title: "Commercial",
    image: "/images/properties/commercial/downtown-office.webp",
  },
  {
    id: 6,
    title: "Apartments",
    image: "/images/properties/apartments/789-downtown-loft.webp",
  },
];

export default function Categories() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={styles.title_container}>
            <Heading type="heading-3">Explore Our Categories</Heading>
            <div className={cn("paragraph-large", styles.subtitle)}>
              {
                "Whether you're looking for a luxurious home, a cozy apartment, or a prime commercial space, we have something for everyone."
              }
            </div>
          </div>

          <Link href="/listings" className={cn("button button-primary")}>
            View All Categories
          </Link>
        </div>

        <div className={styles.categories}>
          {categories.map((category) => (
            <div key={category.id} className={styles.category}>
              <div className={styles.image_container}>
                <Image
                  src={category.image}
                  alt={category.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className={styles.overlay}>
                <div className={cn("heading-6", styles.category_title)}>
                  {category.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
