import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { Hero as HeroTitle } from "@/components/typography";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.img_container}>
      <Image
        src="/images/header-background.webp"
        alt="About Okunbo Realty"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        priority
      />

      <div className={styles.overlay} />

      <HeroTitle size="hero-lg" className={styles.title}>
        About Okunbo Realty
      </HeroTitle>
    </div>
  );
}
