import React from "react";
import styles from "./additional-gallery.module.css";
import cn from "classnames";
import Image from "next/image";

type AdditionalGalleryProps = {
  images: string[];
};

export default function AdditionalGallery({ images }: AdditionalGalleryProps) {
  console.log(images);
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("subheading-medium")}>ADDITIONAL GALLERY</div>

        <div className={styles.images}>
          <div className={styles.column_images}>
            <div className={styles.image}>
              <Image
                src={images[4]}
                alt="Gallery Image"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className={styles.image}>
              <Image
                src={images[6]}
                alt="Gallery Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className={styles.image}>
            <Image
              src={images[5]}
              alt="Gallery Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
