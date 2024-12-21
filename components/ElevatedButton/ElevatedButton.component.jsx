"use client";
import { useCallback, useRef } from "react";
import styles from "./ElevatedButton.module.css";
import GoogleIcon from "../google_icon/google_icon.component";

const ElevatedButton = ({
  children,
  icon,
  iconColor,
  variant = "rounded",
  backgroundColor,
  textColor,
  onClick,
  type = "button",
  form,
  disabled,
}) => {
  const buttonRef = useRef(null);
  const rippleRef = useRef(null);

  const createRipple = useCallback(
    (e) => {
      if (disabled) return;

      if (rippleRef.current) {
        rippleRef.current.remove();
      }

      const button = buttonRef.current;
      const ripple = document.createElement("span");
      const rect = button.getBoundingClientRect();

      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.setProperty("--ripple-size", `${size}px`);
      ripple.style.setProperty("--ripple-x", `${x}px`);
      ripple.style.setProperty("--ripple-y", `${y}px`);

      ripple.className = styles["ripple"];
      rippleRef.current = ripple;

      requestAnimationFrame(() => {
        button.appendChild(ripple);
      });

      const handleRippleEnd = () => {
        ripple.removeEventListener("animationend", handleRippleEnd);
        if (ripple.parentElement) {
          ripple.remove();
        }
      };

      ripple.addEventListener("animationend", handleRippleEnd);
      onClick && onClick(e);
    },
    [disabled, onClick]
  );

  return (
    <button
      ref={buttonRef}
      type={type}
      form={form ? form : null}
      onClick={createRipple}
      disabled={disabled}
      className={`
        ${styles["elevated-button"]}
        ${variant === "rounded" ? styles["rounded"] : ""}
        ${variant === "pill" ? styles["pill"] : ""}
        ${icon ? styles["withIcon"] : ""}
    `}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      {icon && <GoogleIcon name={icon} color={iconColor} />}
      {children}
    </button>
  );
};

export default ElevatedButton;
