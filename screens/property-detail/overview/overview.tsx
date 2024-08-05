"use client";

import React from "react";
import styles from "./overview.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import PropertyFeatures from "@/components/property-features";
import { Plus } from "@/constants/icons";
import Image from "next/image";
import AgentForm from "@/components/agent-form";

const details = [
  {
    id: 1,
    title: "General Information",
    features: [
      {
        id: 1,
        text: "This beautifully priced home offers a fantastic value for a serene and spacious living environment in the desirable HeavenHomes community.",
      },
      {
        id: 2,
        text: "The home features a light and bright floor plan with a large living room, dining area, and a spacious kitchen with a breakfast bar and plenty of cabinet and counter space.",
      },
      {
        id: 3,
        text: "The master bedroom is large and comfortable, and the master bath features a large tub/shower combo.",
      },
      {
        id: 4,
        text: "The second bedroom is also spacious and comfortable, and the second bath features a large tub/shower combo.",
      },
    ],
  },
  {
    id: 2,
    title: "Interior Details",
    features: [
      {
        id: 1,
        text: "This beautifully priced home offers a fantastic value for a serene and spacious living environment in the desirable HeavenHomes community.",
      },
      {
        id: 2,
        text: "The home features a light and bright floor plan with a large living room, dining area, and a spacious kitchen with a breakfast bar and plenty of cabinet and counter space.",
      },
    ],
  },
];

type OverviewProps = {
  item: {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    location: string;
    agent: {
      name: string;
      email: string;
      phone: string;
      image: string;
    };
    features: {
      id: number;
      icon: string;
      name: string;
      value: string | number;
    }[];
  };
};

export default function Overview({ item }: OverviewProps) {
  const [open, setOpen] = React.useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setOpen((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className={cn("section", styles.section)}>
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

          <div className={styles.details}>
            {details.map((detail) => (
              <div key={detail.id} className={styles.detail}>
                <div
                  className={cn(styles.detail_head, {
                    [styles.open]: open === detail.id,
                  })}
                  onClick={() => toggleOpen(detail.id)}
                >
                  <div className={cn("paragraph-x-large", styles.detail_title)}>
                    {detail.title}
                  </div>

                  {Plus}
                </div>

                {open === detail.id && (
                  <ul className={styles.list}>
                    {detail.features.map((feature) => (
                      <li
                        key={feature.id}
                        className={cn("paragraph-medium", styles.list_item)}
                      >
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.agent}>
          <div className={cn("heading-6")}>Listing Agent</div>

          <div className={styles.profile}>
            <div>
              <div className={cn("paragraph-x-large", styles.name)}>
                {item.agent && item.agent.name}
              </div>
              <div className={cn("paragraph-medium", styles.email)}>
                {item.agent && item.agent.email}
              </div>
            </div>

            <div className={styles.avatar}>
              <Image
                src={item.agent && item.agent.image}
                alt="agent"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <AgentForm
            className={styles.form}
            inputClassName={styles.textfield}
          />
        </div>
      </div>
    </section>
  );
}
