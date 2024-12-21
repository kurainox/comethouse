import { openSans } from "@/global/fonts";
import styles from "./card.module.css";
import GoogleIcon from "../google_icon/google_icon.component";
import CustomIcon from "../custom_icon/custom_icon.component";

export default function Card({
  title,
  subtitle,
  children,
  googleIcon,
  customIcon,
  footer,
  variant = "default", // default, horizontal, minimal
  onClick,
  className = "",
}) {
  return (
    <div
      className={`${styles.card} ${styles[variant]} ${className} ${
        onClick ? styles.clickable : ""
      }`}
      onClick={onClick}
    >
      {googleIcon && (
        <div className={styles.icon}>
          {
            <GoogleIcon
              name={googleIcon}
              size={44}
              background={"#202020"}
              color={"#fafafa"}
              rounded={"10px"}
              padding={"8px"}
            />
          }
        </div>
      )}

      {customIcon && (
        <div className={styles.icon}>
          {<CustomIcon size={44} icon={customIcon} color={"#fafafa"} background={"#202020"} />}
        </div>
      )}

      <div className={`${styles.content} ${openSans.className}`}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children && <div className={styles.body}>{children}</div>}
      </div>

      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}
