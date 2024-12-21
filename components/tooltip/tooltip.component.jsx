"use client";
import { useState } from "react";
import styles from "./tooltip.module.css";

export default function Tooltip({ children, content, position = "top" }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={styles.tooltipWrapper}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`${styles.tooltip} ${styles[position]}`}>
          {content}
          <div className={styles.arrow} />
        </div>
      )}
    </div>
  );
}
