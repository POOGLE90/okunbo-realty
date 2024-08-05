import React from "react";
import styles from "./agent-socials.module.css";
import { Facebook, Instagram, Linkedin } from "@/constants/icons";

export type AgentSocialsProps = {
  socials: {
    id: number;
    icon: string;
    link: string;
  }[];
};

const iconMap: { [key: string]: React.ReactNode } = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
};

export default function AgentSocials({ socials }: AgentSocialsProps) {
  return (
    <div className={styles.member_socials}>
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.member_social}
        >
          {iconMap[social.icon]}
        </a>
      ))}
    </div>
  );
}
