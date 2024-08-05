import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import Image from "next/image";

type HeroProps = {
  item: {
    title: string;
    address: string;
    images: string[];
    price: string;
  };
};

export default function Hero({ item }: HeroProps) {
  console.log("Item:", item);

  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div>
            <div className={cn("heading-6")}>{item.title}</div>
            <div className={cn("paragraph-medium", styles.address)}>
              {item.address}
            </div>
          </div>

          <div className={cn("heading-6", styles.price)}>{item.price}</div>
        </div>

        <div className={styles.images}>
          <div className={styles.image}>
            <Image
              src={item.images[0]}
              alt={item.title}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className={styles.grid_images}>
            <div className={styles.row_images}>
              <div className={styles.image}>
                <Image
                  src={item.images[1]}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.image}>
                <Image
                  src={item.images[2]}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <div className={styles.image}>
              <Image
                src={item.images[3]}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
