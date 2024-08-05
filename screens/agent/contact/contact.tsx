import React from "react";
import styles from "./contact.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import AgentForm from "@/components/agent-form";
import AgentSocials from "@/components/agent-socials";

type Member = {
  name: string;
  title: string;
  description: string;
  image: string;
  phone: string;
  email: string;
  socials: {
    id: number;
    icon: string;
    link: string;
  }[];
};

type HeroProps = {
  member: Member;
};

export default function Contact({ member }: HeroProps) {
  return (
    <section id="contact" className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <Heading type="heading-3">Ready to Find Your Dream Home?</Heading>
          <div className={styles.info}>
            <div className={cn("subheading-medium", styles.phone)}>
              {member.phone}
            </div>
            <div className={cn("subheading-medium", styles.email)}>
              {member.email}
            </div>
          </div>

          <AgentSocials socials={member.socials} />
        </div>

        <AgentForm />
      </div>
    </section>
  );
}
