import React from "react";
import styles from "./property-features.module.css";
import cn from "classnames";
import {
  DoubleBed,
  Bath,
  Ruler,
  Floor,
  Parking,
  DockDoor,
  Walk,
} from "@/constants/icons";

type PropertyFeaturesProps = {
  className?: string;
  features: {
    id: number;
    icon: string;
    name: string;
    value: string | number;
  }[];
};

const iconMap: { [key: string]: React.ReactNode } = {
  "double-bed": DoubleBed,
  bath: Bath,
  ruler: Ruler,
  floor: Floor,
  parking: Parking,
  "dock-door": DockDoor,
  walk: Walk,
};

export default function PropertyFeatures({
  className,
  features,
}: PropertyFeaturesProps) {
  return (
    <div className={cn(styles.features, className)}>
      {features.map((feature) => (
        <div key={feature.id} className={styles.feature}>
          {iconMap[feature.icon]}
          <div className={cn("paragraph-small", styles.feature_name)}>
            {feature.value}
          </div>
        </div>
      ))}
    </div>
  );
}
