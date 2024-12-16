import React from "react";
import Image from "next/image";
import styles from "./benefits.module.css";
import { Heading } from "@/components/typography";

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefits_content}>
        <Image
          src="/images/benefit-1.webp"
          alt="Modern interior"
          width={600}
          height={800}
          className={styles.benefits_image}
        />

        <div className={styles.benefits_info}>
          <div className={styles.benefits_header}>
            <Heading type="heading-2">Why Choose Us?</Heading>
            <p>
              At Okunbo Realty, we combine deep local market knowledge with personalized service to help you achieve your real estate goals in the competitive Los Angeles market.
            </p>
          </div>

          <div className={styles.benefits_list}>
            <div className={styles.benefits_item}>
              <h3>Local Market Expertise</h3>
              <p>
                With extensive knowledge of Los Angeles neighborhoods and market trends, we provide valuable insights to help you make informed decisions about your property investment.
              </p>
            </div>

            <div className={styles.benefits_item}>
              <h3>Personalized Service</h3>
              <p>
                We believe in building lasting relationships with our clients. You'll receive dedicated attention and a customized strategy tailored to your specific needs and goals.
              </p>
            </div>

            <div className={styles.benefits_item}>
              <h3>Results-Driven Approach</h3>
              <p>
                Whether you're buying, selling, or investing, our proven track record and commitment to excellence ensures we'll work tirelessly to achieve the best possible outcome for you.
              </p>
            </div>
          </div>
        </div>

        <Image
          src="/images/benefit-2.webp"
          alt="Modern interior"
          width={600}
          height={800}
          className={styles.benefits_image}
        />
      </div>
    </section>
  );
}
