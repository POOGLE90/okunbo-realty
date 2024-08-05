import React from "react";
import styles from "./team.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import Link from "next/link";
import TeamMember from "@/components/team-member";
import { TeamMembers } from "@/constants/mock";

export default function Team() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={styles.title_container}>
            <Heading type="heading-3">Meet Our Expert Agents</Heading>
            <div className={cn("paragraph-large", styles.subtitle)}>
              {
                "Our team of dedicated and experiences agents is here to guide you through every step of your real estate journey."
              }
            </div>
          </div>

          <Link href="/agents" className={cn("button button-primary")}>
            Meet Our Team
          </Link>
        </div>

        <div className={styles.team_members}>
          {TeamMembers.slice(0, 3).map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
