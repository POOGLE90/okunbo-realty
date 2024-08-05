import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import Image from "next/image";
import { Listings } from "@/constants/mock";
import PropertyListing from "@/components/property-listing";

type Member = {
  name: string;
  title: string;
  description: string;
  image: string;
};

type HeroProps = {
  member: Member;
};

export default function Hero({ member }: HeroProps) {
  const getAgentListings = () => {
    return Listings.flatMap((category) =>
      category.items.filter((listing) => listing.agent.name === member.name),
    );
  };

  const agentListings = getAgentListings();

  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.agent}>
          <div className={styles.profile}>
            <div className={styles.image}>
              <Image src={member.image} alt="Emily Davis" layout="fill" />
            </div>

            <div>
              <div className={cn("paragraph-x-large", styles.name)}>
                {member.name}
              </div>
              <div className={cn("paragraph-medium", styles.profession)}>
                {member.title}
              </div>
            </div>
          </div>

          <div className={cn("paragraph-medium", styles.description)}>
            {member.description}
          </div>
          <a href="#contact" className={cn("button", styles.button)}>
            Get In Touch
          </a>
        </div>

        <div className={styles.listings}>
          {agentListings.map((listing) => (
            <PropertyListing key={listing.id} item={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
