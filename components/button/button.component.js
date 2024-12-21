import Link from "next/link";
import styles from "./button.module.css";
import { openSans } from "@/global/fonts";

export default function Button({
  children,
  className = "",
  variant = "primary",
  as,
  href,
  disabled,
  onClick,
  background,
  color,
  fullWidth,
  size = "l"
}) {
  const classes = `${openSans.className} ${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (as && as === "link") {
    return (
      <Link
        href={href}
        className={classes}
        onClick={!disabled ? onClick : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      style={{ background, color, width: fullWidth ? "100%" : "auto" }}
    >
      {children}
    </button>
  );
}
