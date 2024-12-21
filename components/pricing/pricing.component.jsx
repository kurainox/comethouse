import { openSans } from "@/global/fonts";
import Divider from "../divider/divider.component";
import GoogleIcon from "../google_icon/google_icon.component";

import styles from "./pricing.module.css";
import Button from "../button/button.component";

export default function Pricing({
  type,
  price,
  features,
  addOns,
  hightlighted,
}) {
  return (
    <div
      className={`${openSans.className} ${styles["pricing-card"]} ${
        hightlighted && styles["highlighted"]
      }`}
    >
      <div>
        <p className={`${styles["plan-type-heading"]}`}>{type}</p>
        <p className={`${styles["price"]}`}>{price}</p>
      </div>
      <Button variant={hightlighted ? "primary" : "outlined"}>
        Get started
      </Button>
      <Divider />
      <div>
        <p className={`${styles["features-heading"]}`}>What's included?</p>
        <div className={`${styles["features-list"]}`}>
          {features.map((feature, index) => (
            <span key={index} className={`${styles["pricing-list-item"]}`}>
              <GoogleIcon name={"new_releases"} color="#1b8d60" />
              <span>{feature}</span>
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className={`${styles["addons-heading"]}`}>
          Add-ons (optional one-time fee){" "}
        </p>
        <div className={`${styles["addons-list"]}`}>
          {addOns.map((addOn, index) => (
            <span key={index} className={`${styles["pricing-list-item"]}`}>
              <GoogleIcon
                name={"add_circle"}
                filled={true}
                className="material-symbols-outlined"
              />
              <span>{addOn}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
