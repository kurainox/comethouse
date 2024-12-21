"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "./carousel.module.css";
import GoogleIcon from "../google_icon/google_icon.component";
import Link from "next/link";
import Tooltip from "../tooltip/tooltip.component";

export default function SlideCarousel({
  children,
  interval = 5000,
  className = "",
}) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = Array.isArray(children) ? children : [children];

  // Use useCallback to prevent recreation of the function on each render
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide, interval]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <>
      <div
        className={`${styles.container} ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={styles.track}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              {slide}
            </div>
          ))}
        </div>

        <div className={styles.controls}>
          <button
            className={styles.control}
            onClick={() =>
              setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
            }
          >
            <GoogleIcon name="chevron_left" size={24} color={"#404040"} />
          </button>

          {/* test play/pause button */}
          {/* <button
          className={styles.pauseButton}
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? "Play" : "Pause"}
        >
          {isPaused ? "play" : "pause"}
        </button> */}

          <button
            className={styles.control}
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          >
            <GoogleIcon name="chevron_right" size={24} color={"#404040"} />
          </button>
        </div>

        <div className={styles.dots}>
          {slides.map((_, index) => (
            <div
              key={index}
              aria-label="slide index"
              className={`${styles.dot} ${
                index === current ? styles.active : ""
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
// import { useEffect, useState } from "react";
// import styles from "./carousel.module.css";

// export default function SlideCarousel({ children }) {
//   const [current, setCurrent] = useState(0);
//   const slides = Array.isArray(children) ? children : [children];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   return (
//     <div className={styles["carousel-container"]}>
//       <div
//         className={styles["carousel-track"]}
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className={styles["carousel-slide"]}>
//             {slide}
//           </div>
//         ))}
//       </div>

//       <div className={styles["carousel-dots"]}>
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`${index === current ? styles["active"] : ""} ${styles["dot"]}`}
//             onClick={() => setCurrent(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
