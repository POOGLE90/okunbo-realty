import React from "react";
import styles from "./video-section.module.css";
import { Heading } from "@/components/typography";

export default function VideoSection() {
  return (
    <section className={styles.video_section}>
      <div className={styles.video_content}>
        <div className={styles.header}>
          <Heading type="heading-3">
            Experience Our Properties in Action
          </Heading>
          <div className={styles.subtitle}>
            Take a virtual tour through our stunning properties and discover your next home.
          </div>
        </div>

        <div className={styles.video_wrapper}>
          <iframe 
            src="https://www.youtube.com/embed/bFfveJ_lvfs?list=PL6ARekD4WLFc35Ja5m1WVbsNjaSbJ5iGO&autoplay=1&mute=1"
            title="Okunbo Realty Video Gallery" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
