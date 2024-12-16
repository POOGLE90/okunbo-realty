import React from "react";
import cn from "classnames";
import styles from "./service-areas.module.css";
import TextMarquee from "@/components/text-marquee";
import { Heading } from "@/components/typography";

const top_cities = [
  "Los Angeles",
  "・",
  "Beverly Hills",
  "・",
  "Santa Monica",
  "・",
  "Malibu",
  "・",
  "West Hollywood",
  "・",
];

const bottom_cities = [
  "Pasadena",
  "・",
  "Manhattan Beach",
  "・",
  "Calabasas",
  "・",
  "Burbank",
  "・",
  "Glendale",
  "・",
];

export default function ServiceAreas() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.title_container}>
          <div className={cn("subheading-small", styles.subtitle)}>Service Areas</div>
          <Heading type="heading-3" className={styles.title}>
            Serving Los Angeles County
          </Heading>
          <p className={styles.description}>
            Specializing in luxury real estate across Los Angeles County's most desirable neighborhoods.
          </p>
        </div>
      </div>

      <div className={styles.marquees}>
        <TextMarquee>
          {top_cities.map((city) => (
            <Heading
              key={city}
              type="heading-3"
              className={styles.marquee_text}
            >
              {city}
            </Heading>
          ))}
        </TextMarquee>

        <TextMarquee direction="right">
          {bottom_cities.map((city) => (
            <Heading
              key={city}
              type="heading-3"
              className={styles.marquee_text}
            >
              {city}
            </Heading>
          ))}
        </TextMarquee>
      </div>
    </section>
  );
}
