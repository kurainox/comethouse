import { openSans } from "@/global/fonts";
import styles from "./circular_progress.module.css";

export default function CircularProgress({ percentage = 0, className }) {
//   Calculate circumference and offset
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      role="progressbar"
      aria-valuenow={percentage}
      aria-label="progress bar"
      className={`${openSans.className} ${styles["progress-container"]}`}
    >
      <svg width="100" height="100" className={styles["progress-ring"]}>
        {/* container ring */}
        <circle
          className={styles["progress-ring-bg"]}
          cx="50"
          cy="50"
          r={radius}
          strokeWidth="5"
        />
        {/* progress ring */}
        <circle
          className={styles["progress-ring-circle"]}
          cx="50"
          cy="50"
          r={radius}
          strokeWidth="5"
          style={{ strokeDashoffset }}
        />
      </svg>
    </div>
  );
}
