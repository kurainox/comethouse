"use client";
import { useEffect, useRef } from "react";
import styles from "./highlight.module.css";

export default function Highlight({ text, color, background, weight }) {
  const reference = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && reference.current) {
          reference.current.classList.add(styles.animate);
          reference.current.style.cssText = `
          font-weight: ${weight || "bold"};
  color: ${color};
  background: linear-gradient(to right, ${background} 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right;
`;
        } else {
          reference.current &&
            (reference.current.classList.remove(styles.animate),
            (reference.current.style.cssText = ``));
        }
      },
      {
        threshold: 0.05,
        rootMargin: "-150px 0px 0px 0px",
      }
    );

    if (reference.current) {
      observer.observe(reference.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={reference} lang="en" className={`${styles["highlight"]}`}>
      {text}
    </span>
  );
}
