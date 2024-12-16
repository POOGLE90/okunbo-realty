import React from "react";
import styles from "./leadership.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import Image from "next/image";

export default function Leadership() {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <Heading type="heading-3" className={cn("h2", styles.title)}>
            Our Leadership
          </Heading>
          <p className={cn("paragraph-large", styles.text)}>
            Meet the visionary leaders behind Okunbo Realty. Our leadership team brings decades of combined experience in real estate, ensuring we deliver exceptional service and results to our clients.
          </p>
        </div>

        <div className={styles.team}>
          <div className={styles.member}>
            <div className={styles.image_container}>
              <Image
                src="/images/osaze-headshot.webp"
                alt="Osaze Okunbo"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h3 className={styles.name}>Osaze Okunbo</h3>
            <p className={styles.position}>Founder & CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
}
