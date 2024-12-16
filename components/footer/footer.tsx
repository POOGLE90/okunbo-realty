import React from "react";
import styles from "./footer.module.css";
import cn from "classnames";
import Logo from "../logo";
import { Heading } from "../typography";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "@/constants/icons";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Listings",
    url: "/listings",
  },
  {
    id: 3,
    title: "Home Valuation",
    url: "/home-valuation",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

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
          <Logo />

          <div>
            <Heading type="heading-3" className={styles.title}>
              Osaze Okunbo - Okunbo Realty
            </Heading>
            <div className={cn("subheading-small", styles.email)}>
              OkunboRealty@Gmail.com
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.content}>
          <div className={styles.business_info}>
            <div>
              <div className={cn("paragraph-small", styles.address)}>
                15303 Ventura Blvd Bldg C Suite 400
                <br />
                Sherman Oaks, CA, 91403
              </div>
              <div className={cn("paragraph-small", styles.phone)}>
                818-857-1591
              </div>
            </div>

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

          <div className={styles.links}>
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={cn("label-medium", styles.link)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
