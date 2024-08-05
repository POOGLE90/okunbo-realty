"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

export default function Hero() {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.information}>
          <div className={styles.column}>
            <div className={cn("heading-6", styles.title)}>Get In Touch</div>
            <div className={cn("paragraph-medium", styles.subtitle)}>
              {
                "We'd love to hear from you! Whether you have a question about our listings, services, our just want to talk about your dream home, our team is here to help."
              }
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.contact}>
            <div>
              <div className={cn("subheading-medium", styles.contact_title)}>
                OFFICE
              </div>
              <div className={cn("paragraph-medium", styles.contact_text)}>
                123 Serenity Street, Suburbia, TX 75001
              </div>
            </div>

            <div>
              <div className={cn("subheading-medium", styles.contact_title)}>
                CONTACT
              </div>
              <div className={cn("paragraph-medium", styles.contact_text)}>
                (123) 456-7890
              </div>
              <div className={cn("paragraph-medium", styles.contact_text)}>
                info@heavenhomes.com
              </div>
            </div>
          </div>
        </div>

        <div className={styles.map}>
          <LoadScript googleMapsApiKey="AIzaSyDQseUyUqI_D7qkfl-RmsmufqWwmAWEFdc">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={10}
            >
              {/* Add any markers or additional features here */}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </section>
  );
}
