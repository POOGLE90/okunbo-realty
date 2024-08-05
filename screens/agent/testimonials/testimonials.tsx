import React from "react";
import styles from "./testimonials.module.css";
import cn from "classnames";
import Image from "next/image";
import { Star } from "@/constants/icons";

const testimonials = [
  {
    id: 1,
    image: "/images/testimonials/rachel-simmons.webp",
    name: "Rachel Simmons",
    title: "Investment Property",
    quote:
      "Emily guided us through the process of purchasing our fist investment property. Her expetise was invaluable, and we're thriled with our new property.",
  },
  {
    id: 2,
    image: "/images/testimonials/david-thompson.webp",
    name: "David Thompson",
    title: "First Time Home Buyer",
    quote:
      "We were so lucky to have Emily as our realtor. She was patient and supportive, and helped us find the perfect home for our family.",
  },
];

export default function Testimonials() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("subheading-medium")}>CLIENT TESTIMONIALS</div>

        <div className={styles.testimonials}>
          {testimonials.map((testimonial) => (
            <>
              <div key={testimonial.id} className={styles.testimonial}>
                <div className={styles.image_row}>
                  <div className={styles.rating}>{Star}</div>
                  <div className={styles.avatar}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>

                <div className={styles.content}>
                  <div className={styles.content_row}>
                    <div className={cn("paragraph-x-large", styles.name)}>
                      {testimonial.name}
                    </div>
                    <div className={cn("paragraph-medium", styles.title)}>
                      {testimonial.title}
                    </div>
                  </div>

                  <div className={cn("heading-6", styles.quote)}>
                    {testimonial.quote}
                  </div>
                </div>
              </div>
              {testimonial.id === 1 && <div className={styles.divider} />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
