import React from "react";
import styles from "./overview.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import PropertyFeatures from "@/components/property-features";

type OverviewProps = {
  item: {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    features: {
      id: number;
      icon: string;
      name: string;
      value: string | number;
    }[];
  };
};

export default function Overview({ item }: OverviewProps) {
  return (
    <section className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <Heading type="heading-3">Overview</Heading>
          <div className={cn("paragraph-medium", styles.description)}>
            {item.description}
          </div>

          <PropertyFeatures
            className={styles.features}
            features={item.features}
          />
        </div>

        <div className={styles.agent}>
          <div className={cn("heading-6")}>Listing Agent</div>
        </div>
      </div>
    </section>
  );
}
