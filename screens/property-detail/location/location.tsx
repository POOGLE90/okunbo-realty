"use client";

import React from "react";
import styles from "./location.module.css";
import cn from "classnames";
import MapView from "@/components/mapview";

export default function Location() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("subheading-small")}>MAPVIEW</div>
        <div className={styles.map}>
          <MapView />
        </div>
      </div>
    </section>
  );
}
