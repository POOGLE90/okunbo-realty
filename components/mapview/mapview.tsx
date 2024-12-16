import React from "react";
import styles from "./mapview.module.css";
import cn from "classnames";
import { Location } from "@/constants/icons";

export default function MapView() {
  const address = "15303 Ventura Blvd Bldg C Suite 400, Sherman Oaks, CA 91403";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className={styles.mapContainer}>
      <a 
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.mapLink}
      >
        <div className={styles.mapPlaceholder}>
          <div className={styles.mapContent}>
            <div className={styles.mapIcon}>
              {Location}
            </div>
            <div className={styles.addressText}>
              15303 Ventura Blvd Bldg C Suite 400
              <br />
              Sherman Oaks, CA 91403
            </div>
            <div className={styles.directionsText}>
              Click for directions in Google Maps →
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
