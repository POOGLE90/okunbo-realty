import React from "react";
import cn from "classnames";
import styles from "./team-member.module.css";
import Image from "next/image";
import Link from "next/link";
import AgentSocials from "../agent-socials";

type TeamMemberProps = {
  member: {
    id: number;
    name: string;
    title: string;
    image: string;
    socials: {
      id: number;
      icon: string;
      link: string;
    }[];
  };
};

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <div key={member.id} className={styles.team_member}>
      <Link
        href={{
          pathname: "/agent",
          query: { member: JSON.stringify(member) },
        }}
        className={styles.member_image}
      >
        <Image
          src={member.image}
          alt={member.name}
          layout="fill"
          objectFit="cover"
        />
      </Link>

      <div className={styles.member_info}>
        <div>
          <div className={cn("paragraph-x-large", styles.member_name)}>
            {member.name}
          </div>
          <div className={cn("paragraph-medium", styles.member_title)}>
            {member.title}
          </div>
        </div>

        <AgentSocials socials={member.socials} />
      </div>
    </div>
  );
}
