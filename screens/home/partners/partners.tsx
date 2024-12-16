import React from "react";
import styles from "./partners.module.css";
import cn from "classnames";
import Image from "next/image";
import { Heading } from "@/components/typography";
import Link from "next/link";

export default function Partners() {
  return (
    <section className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <Heading type="heading-3" className={cn("h2", styles.title)}>
            Our Trusted Partners
          </Heading>
          <p className={cn("paragraph-large", styles.text)}>
            We believe in the power of strong partnerships. Our trusted partners
            include some of the most respected names in the real estate and
            related industries.
          </p>
          <Link href="/about" className={cn("button", styles.button)}>
            Learn More
          </Link>
        </div>
        <div className={styles.partners}>
          <div className={styles.image_container}>
            <Image
              src="/images/partners/flexport.webp"
              alt="Flexport"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={styles.side_images}>
            <div className={styles.image_container}>
              <Image
                src="/images/partners/check.webp"
                alt="Bankrate"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.image_container}>
              <Image
                src="/images/partners/corning.webp"
                alt="Corning"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
