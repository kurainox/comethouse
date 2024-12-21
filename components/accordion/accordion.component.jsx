"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./accordion.module.css";
import { openSans } from "@/global/fonts";
import GoogleIcon from "../google_icon/google_icon.component";
import Divider from "../divider/divider.component";

function AccordionItem({ title, children, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      console.log(contentHeight);
      setHeight(contentHeight + 8);
    }
  }, [children, isOpen]);

  return (
    <div
      className={`${openSans.className} ${styles.item} ${
        isOpen ? styles.open : ""
      }`}
    >
      <button
        className={`${openSans.className} ${styles.trigger}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.title}>{title}</span>
        <GoogleIcon
          name={"add_circle"}
          className={`${styles["icon"]} material-symbols-outlined`}
          color={"#303030"}
        />
      </button>
      <div
        className={styles.content}
        role="region"
        aria-hidden={!isOpen}
        style={{
          height: isOpen ? `${height}px` : "0",
        }}
      >
        <div className={styles.inner} ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
}


export default function Accordion({
  items,
  allowMultiple = true,
  defaultOpen = [],
}) {
  const [openItems, setOpenItems] = useState(defaultOpen);

  const handleToggle = (index) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        
        // <>
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openItems.includes(index)}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
