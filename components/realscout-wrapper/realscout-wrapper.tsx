"use client";

import React from "react";
import styles from "./realscout-wrapper.module.css";
import cn from "classnames";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-simple-search': any;
      'realscout-advanced-search': any;
      'realscout-your-listings': any;
      'realscout-office-listings': any;
      'realscout-home-value': any;
    }
  }
}

type RealScoutWrapperProps = {
  type: 'simple-search' | 'advanced-search' | 'your-listings' | 'office-listings' | 'home-value';
  className?: string;
};

export default function RealScoutWrapper({ type, className }: RealScoutWrapperProps) {
  const [scriptLoaded, setScriptLoaded] = React.useState(false);

  React.useEffect(() => {
    // Load RealScout script if not already loaded
    if (!document.querySelector('script[src*="realscout-web-components"]')) {
      const script = document.createElement('script');
      script.src = "https://em.realscout.com/widgets/realscout-web-components.umd.js";
      script.type = "module";
      script.onload = () => setScriptLoaded(true);
      document.head.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, []);

  if (!scriptLoaded) {
    return <div>Loading...</div>;
  }

  const getComponent = () => {
    switch (type) {
      case 'simple-search':
        return (
          <realscout-simple-search 
            agent-encoded-id="QWdlbnQtMjY3MDQ2"
            className={cn(styles.widget, className)}
          />
        );
      case 'advanced-search':
        return (
          <realscout-advanced-search 
            agent-encoded-id="QWdlbnQtMjY3MDQ2"
            className={cn(styles.widget, className)}
          />
        );
      case 'your-listings':
        return (
          <realscout-your-listings 
            agent-encoded-id="QWdlbnQtMjY3MDQ2"
            sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
            listing-status="For Sale,For Rent,In Contract,Sold,Rented"
            property-types="SFR,MF,TC,LAL,MOBILE,OTHER"
            className={cn(styles.widget, className)}
          />
        );
      case 'office-listings':
        return (
          <realscout-office-listings 
            agent-encoded-id="QWdlbnQtMjY3MDQ2"
            sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
            listing-status="For Sale,For Rent,In Contract,Sold,Rented"
            property-types="SFR,MF,TC,LAL,MOBILE,OTHER"
            className={cn(styles.widget, className)}
          />
        );
      case 'home-value':
        return (
          <realscout-home-value 
            agent-encoded-id="QWdlbnQtMjY3MDQ2"
            className={cn(styles.widget, className)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.wrapper}>
      {getComponent()}
    </div>
  );
}
