"use client";

import React from "react";
import styles from "./team.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={styles.title_container}>
            <Heading type="heading-3">Meet Osaze</Heading>
            <div className={cn("paragraph-large", styles.subtitle)}>
              Your dedicated Los Angeles real estate expert
            </div>
          </div>
        </div>

        <div className={styles.agent_profile}>
          <div className={styles.image_container}>
            <Image
              src="/images/osaze-headshot.jpg"
              alt="Osaze Okunbo"
              width={400}
              height={500}
              className={styles.agent_image}
            />
          </div>
          
          <div className={styles.agent_info}>
            <h3 className={styles.agent_name}>Osaze Okunbo</h3>
            <p className={styles.agent_bio}>
              As your dedicated Los Angeles real estate expert, I bring personalized service and in-depth market knowledge to help you achieve your real estate goals. Whether you're buying, selling, or investing, I'm here to guide you through every step of your journey.
            </p>
            
            <div className={styles.social_links}>
              <Link 
                href="https://www.instagram.com/okunborealty/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.social_link}
              >
                Instagram
              </Link>
              <Link 
                href="https://www.youtube.com/@TheRealtorStudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.social_link}
              >
                YouTube
              </Link>
              <Link 
                href="https://www.facebook.com/OkunboRealty" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.social_link}
              >
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
