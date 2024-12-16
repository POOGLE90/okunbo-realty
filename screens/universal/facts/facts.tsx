import React from "react";
import styles from "./facts.module.css";
import cn from "classnames";
import { Building, HappyHeart, Medal } from "@/constants/icons";
import { Heading } from "@/components/typography";

const facts = [
  {
    id: 1,
    icon: HappyHeart,
    title: "98%",
    description:
      "With a client satisfaction rate of 98%, our commitment to exceptional service and personalized support is evident in every interaction.",
  },
  {
    id: 2,
    icon: Building,
    title: "300+",
    description:
      "We have over 300 clients, ranging from small businesses to Fortune 500 companies, who trust us to manage their digital marketing needs.",
  },
  {
    id: 3,
    icon: Medal,
    title: "15",
    description:
      "Our team of 15 experts is dedicated to providing the highest quality service and support to our clients.",
  },
];

export default function Facts() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("subheading-small", styles.title)}>Facts</div>

        <div className={styles.facts}>
          {facts.map((fact) => (
            <div key={fact.id} className={styles.fact}>
              <div className={cn("gradient-bubble")}>{fact.icon}</div>
              <Heading type="heading-3" className={styles.fact_title}>
                {fact.title}
              </Heading>
              <div className={cn("paragraph-medium", styles.fact_description)}>
                {fact.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
