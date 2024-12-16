"use client";

import React from "react";
import styles from "./showcase.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import Image from "next/image";
import { Play } from "@/constants/icons";
import Modal from "@/components/modal";
import VideoPlayer from "@/components/video-player";

export default function Showcase() {
  const [visible, setVisible] = React.useState(false);

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <Heading type="heading-3">
            Experience Our Properties in Action
          </Heading>
          <div className={cn("paragraph-large", styles.subtitle)}>
            Explore our collection of videos showcasing our stunning properties,
            client testimonials, virtual tours, and expert advice.
          </div>
        </div>

        <div className={styles.video_wrapper}>
          <Image
            src="/images/video.webp"
            alt="video"
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            style={{ objectFit: "cover" }}
          />

          <div className={styles.play_button} onClick={() => setVisible(true)}>
            {Play}
          </div>

          <Modal visible={visible} onClose={() => setVisible(false)}>
            <VideoPlayer src="https://www.youtube.com/embed/e0qNKnwV40E?si=n93FTEud-6g2LhAH" />
          </Modal>
        </div>
      </div>
    </section>
  );
}
