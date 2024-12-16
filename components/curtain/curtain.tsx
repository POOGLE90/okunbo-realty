"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./curtain.module.css";

export default function Curtain() {
  const variants = {
    hidden: { clipPath: "inset(0% 0% 0% 0%)", scaleY: 1 },
    visible: {
      clipPath: "inset(0% 0% 100% 0%)",
      scaleY: 0.5,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 25,
        mass: 2,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      className={styles.curtain}
      initial="hidden"
      animate="visible"
      variants={variants}
      style={{ originY: 0 }}
    >
      <motion.div className={styles.title}>Okunbo Realty™</motion.div>
    </motion.div>
  );
}
