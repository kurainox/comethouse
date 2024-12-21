"use client";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import GoogleIcon from "../google_icon/google_icon.component";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [activeItem, setActiveItem] = useState(null);
  const pathname = usePathname();
  const navItems = [
    { id: "home", icon: "home", text: "Home", path: "/" },
    { id: "info", icon: "info", text: "About", path: "/about" },
    { id: "pricing", icon: "sell", text: "Pricing", path: "/pricing" },
    { id: "contact", icon: "email", text: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const heroSection = document.querySelector("#hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05,
        rootMargin: "-50px 0px 0px 0px",
      }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, [isHeroVisible]);

  const handleActiveItem = (id) => {
    setActiveItem(id);
    console.log(id);
  };

  return (
    <nav className={`${styles["navbar"]}`}>
      <div
        className={`${styles["nav-wrapper"]} ${
          !isHeroVisible ? styles["shrink"] : ""
        }`}
      >
        <div className={`${styles["nav-list"]}`}>
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleActiveItem(item.id)}
              className={`${styles["nav-item"]} ${
                pathname === item.path ? styles["active"] : ""
              }`}
            >
              <Link
                aria-roledescription="link"
                role="navigation link"
                href={`${item.path}`}
                className={`${styles["list-item-wrapper"]}`}
              >
                <GoogleIcon
                  name={item.icon}
                  className={`${styles["nav-icon"]}`}
                />
                {item.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
