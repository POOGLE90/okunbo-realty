import React from "react";
import styles from "./footer.module.css";
import cn from "classnames";
import Logo from "../logo";
import { Facebook, Instagram, Youtube } from "@/constants/icons";

const socials = [
  {
    id: 1,
    icon: Instagram,
    title: "Instagram",
    url: "https://www.instagram.com/okunborealty/",
  },
  {
    id: 2,
    icon: Youtube,
    title: "Youtube",
    url: "https://www.youtube.com/@TheRealtorStudio",
  },
  {
    id: 3,
    icon: Facebook,
    title: "Facebook",
    url: "https://www.facebook.com/OkunboRealty",
  },
];

export default function Footer() {
  return (
    <footer className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <div className={styles.business_info}>
            <Logo className={styles.logo} />
            <div className={styles.socials}>
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className={cn("paragraph-small", styles.copyright)}>
              © {new Date().getFullYear()} Okunbo Realty. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
