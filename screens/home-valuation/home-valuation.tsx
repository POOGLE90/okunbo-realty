"use client";

import React from "react";
import styles from "./home-valuation.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";

// Declare RealScout web components for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-home-value': any;
    }
  }
}

export default function HomeValuation() {
  return (
    <>
      <section className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.content}>
            <Heading type="heading-2" className={styles.title}>
              What's Your Home Worth?
            </Heading>
            <p className={styles.description}>
              Get an instant estimate of your home's value based on recent sales in your neighborhood.
            </p>
            
            <div className={styles.widget_container}>
              <realscout-home-value 
                agent-encoded-id="QWdlbnQtMjY3MDQ2"
                className={styles.valuation_widget}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={cn("section", styles.video_section)}>
        <div className={cn("container")}>
          <div className={styles.video_content}>
            <Heading type="heading-3">
              Checkout Okunbo Realty Properties
            </Heading>
          </div>

          <div className={styles.video_wrapper}>
            <iframe 
              src="https://www.youtube.com/embed/bFfveJ_lvfs?list=PL6ARekD4WLFc35Ja5m1WVbsNjaSbJ5iGO&autoplay=1&mute=1"
              title="Okunbo Realty Properties" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
